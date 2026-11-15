// Turns the home model and live states into Vidro widgets.
import type { HassEntities, HassEntity } from "home-assistant-js-websocket";
import type { Device, Home, Layout, Room } from "../lib/types";

export type Kind = "room-lights" | "scene" | "camera" | "clock" | "light" | "climate" | "weather" | "lock" | "cover" | "media" | "vacuum" | "scenes" | "fan" | "switch" | "outlet" | "sensor" | "binary";
export type Size = "s" | "m" | "l" | "xl"; // 1x1, 2x1, 2x2, 3x2 on a 6-column grid

export interface Widget {
  key: string;
  kind: Kind;
  size: Size;
  name: string;
  sub?: string;
  entity?: string; // the main entity
  entities?: string[]; // room lights, scenes
  room?: Room;
}

export const domainOf = (id: string) => id.split(".")[0];
export const isOn = (s?: HassEntity) => !!s && !["off", "unavailable", "unknown", "closed", "locked", "idle", "standby", "docked"].includes(s.state);
export const unavailable = (s?: HassEntity) => !s || s.state === "unavailable";

export function brightness(s?: HassEntity): number {
  if (!s || s.state !== "on") return 0;
  const b = s.attributes.brightness as number | undefined;
  return b == null ? 100 : Math.max(1, Math.round((b / 255) * 100));
}

/** Light colour for the art and the fill, from the light's colour or its colour temperature. */
export function lightColor(s?: HassEntity): string {
  const rgb = s?.attributes.rgb_color as [number, number, number] | undefined;
  const mode = s?.attributes.color_mode as string | undefined;
  if (rgb && mode && !["color_temp", "brightness", "onoff", "white"].includes(mode)) return `rgb(${rgb.join(",")})`;
  const k = s?.attributes.color_temp_kelvin as number | undefined;
  if (k) return k >= 5000 ? "#e6f0ff" : k >= 3800 ? "#fff1d6" : "#ffcf8a";
  return "#ffcf8a";
}

export const roomLights = (r: Room) => r.devices.filter((d) => domainOf(d.id) === "light" && !d.hidden).map((d) => d.id);

export function avgBrightness(ids: string[], e: HassEntities): number {
  const on = ids.filter((id) => e[id]?.state === "on");
  if (!on.length) return 0;
  return Math.round(on.reduce((a, id) => a + brightness(e[id]), 0) / on.length);
}

const KIND_FOR: Record<string, Kind> = {
  light: "light", climate: "climate", lock: "lock", cover: "cover", media_player: "media", vacuum: "vacuum", fan: "fan",
  switch: "switch", input_boolean: "switch", outlet: "outlet", sensor: "sensor", binary_sensor: "binary", camera: "camera",
};

export function deviceWidget(d: Device, room?: Room): Widget | null {
  const kind = KIND_FOR[(d.kind as string) ?? domainOf(d.id)] ?? KIND_FOR[domainOf(d.id)];
  if (!kind) return null;
  const size: Size = kind === "climate" ? "l" : kind === "media" || kind === "camera" ? "m" : "s";
  return { key: d.id, kind, size, name: d.name, sub: room?.name, entity: d.id, room };
}

/** The "Casa" view: the house at a glance, built automatically. */
export function homeWidgets(home: Home, e: HassEntities): Widget[] {
  const rooms = home.rooms.filter((r) => !r.hidden);
  const all = rooms.flatMap((r) => r.devices.filter((d) => !d.hidden).map((d) => ({ d, r })));
  const of = (k: string) => all.filter(({ d }) => ((d.kind as string) ?? domainOf(d.id)) === k);
  const out: Widget[] = [];

  rooms.forEach((r, i) => {
    const lights = roomLights(r);
    if (lights.length) out.push({ key: `room-${r.id}`, kind: "room-lights", size: i === 0 ? "m" : "s", name: r.name, entities: lights, room: r });
  });
  of("climate").forEach(({ d, r }, i) => out.push({ key: d.id, kind: "climate", size: i === 0 ? "l" : "m", name: d.name, sub: r.name, entity: d.id, room: r }));
  if (home.weather && e[home.weather]) out.push({ key: home.weather, kind: "weather", size: "l", name: "Tempo", entity: home.weather });
  of("lock").forEach(({ d, r }) => out.push({ key: d.id, kind: "lock", size: "s", name: d.name, sub: r.name, entity: d.id, room: r }));
  of("cover").forEach(({ d, r }) => out.push({ key: d.id, kind: "cover", size: "s", name: d.name, sub: r.name, entity: d.id, room: r }));
  // media: what is playing first, then the rest
  of("media_player")
    .sort((a, b) => Number(e[b.d.id]?.state === "playing") - Number(e[a.d.id]?.state === "playing"))
    .slice(0, 2)
    .forEach(({ d, r }) => out.push({ key: d.id, kind: "media", size: "m", name: d.name, sub: r.name, entity: d.id, room: r }));
  of("vacuum").forEach(({ d, r }) => out.push({ key: d.id, kind: "vacuum", size: "s", name: d.name, sub: r.name, entity: d.id, room: r }));
  if (home.scenes.length) out.push({ key: "scenes", kind: "scenes", size: "m", name: "Cenas", entities: home.scenes.slice(0, 6) });
  return out;
}

/** A room's view, grouped by category for the filter chips. */
export const CATEGORIES: Array<{ id: string; name: string; kinds: Kind[] }> = [
  { id: "all", name: "Tudo", kinds: [] },
  { id: "lights", name: "Luzes", kinds: ["light"] },
  { id: "climate", name: "Clima", kinds: ["climate", "fan"] },
  { id: "covers", name: "Estores", kinds: ["cover"] },
  { id: "media", name: "Média", kinds: ["media"] },
  { id: "other", name: "Outros", kinds: ["switch", "outlet", "lock", "vacuum", "sensor", "binary", "camera"] },
];

export function roomWidgets(room: Room, shown: string[] = []): Widget[] {
  const devices = room.devices.filter((d) => !d.hidden).map((d) => deviceWidget(d, room));
  // secondary entities the person chose to show as tiles of their own (Definições → Entidades)
  const extra = (room.entities ?? [])
    .filter((e) => !e.primary && shown.includes(e.id))
    .map((e) => deviceWidget({ id: e.id, name: e.name, kind: domainOf(e.id) }, room));
  return [...devices, ...extra].filter((w): w is Widget => !!w);
}

/** Header chips: lights on, open doors/unlocked locks, temperature range. */
export function summary(home: Home, e: HassEntities) {
  const devices = home.rooms.filter((r) => !r.hidden).flatMap((r) => r.devices);
  const lightsOn = devices.filter((d) => domainOf(d.id) === "light" && e[d.id]?.state === "on").length;
  const unlocked = devices.filter((d) => domainOf(d.id) === "lock" && e[d.id]?.state === "unlocked").length;
  const open = devices.filter((d) => domainOf(d.id) === "binary_sensor" && ["door", "window", "garage_door", "opening"].includes(e[d.id]?.attributes.device_class as string) && e[d.id]?.state === "on").length;
  const temps = home.rooms
    .map((r) => (r.temperature ? parseFloat(e[r.temperature]?.state ?? "") : NaN))
    .filter((t) => !Number.isNaN(t));
  return {
    lightsOn,
    alerts: unlocked + open,
    alertText: unlocked ? `${unlocked} destrancada${unlocked > 1 ? "s" : ""}` : open ? `${open} aberta${open > 1 ? "s" : ""}` : "tudo fechado",
    temp: temps.length ? `${Math.round(Math.min(...temps))}–${Math.round(Math.max(...temps))}°` : null,
  };
}

export const fmt = (n: number, digits = 1) => n.toLocaleString("pt-PT", { maximumFractionDigits: digits });

const OPENINGS = ["door", "window", "garage_door", "opening"];
const visibleDevices = (home: Home) =>
  home.rooms.filter((r) => !r.hidden).flatMap((r) => r.devices.filter((d) => !d.hidden).map((d) => ({ d, r })));

/** Clima: thermostats, fans, the weather and each room's temperature and humidity (with a 24 h chart). */
export function climateWidgets(home: Home, e: HassEntities): Widget[] {
  const out: Widget[] = [];
  const all = visibleDevices(home);
  all.filter(({ d }) => domainOf(d.id) === "climate").forEach(({ d, r }) => out.push({ key: d.id, kind: "climate", size: "l", name: d.name, sub: r.name, entity: d.id, room: r }));
  if (home.weather && e[home.weather]) out.push({ key: home.weather, kind: "weather", size: "l", name: "Tempo", entity: home.weather });
  all.filter(({ d }) => domainOf(d.id) === "fan").forEach(({ d, r }) => out.push({ key: d.id, kind: "fan", size: "s", name: d.name, sub: r.name, entity: d.id, room: r }));
  home.rooms.filter((r) => !r.hidden).forEach((r) => {
    if (r.temperature && e[r.temperature]) out.push({ key: `t-${r.id}`, kind: "sensor", size: "s", name: r.name, sub: "temperatura", entity: r.temperature, room: r });
    if (r.humidity && e[r.humidity]) out.push({ key: `h-${r.id}`, kind: "sensor", size: "s", name: r.name, sub: "humidade", entity: r.humidity, room: r });
  });
  return out;
}

/** Luzes: every room with lights, as a card that opens the room and switches its lights. */
export function lightsWidgets(home: Home): Widget[] {
  return home.rooms
    .filter((r) => !r.hidden)
    .map((r) => ({ r, lights: roomLights(r) }))
    .filter(({ lights }) => lights.length)
    .map(({ r, lights }): Widget => ({ key: `room-${r.id}`, kind: "room-lights", size: "m", name: r.name, entities: lights, room: r }));
}

/** Segurança: locks first, then what is open, then the rest of the doors, windows and motion sensors, then cameras. */
export function securityWidgets(home: Home, e: HassEntities): Widget[] {
  const all = visibleDevices(home);
  const locks = all.filter(({ d }) => domainOf(d.id) === "lock");
  const sensors = all.filter(({ d }) => domainOf(d.id) === "binary_sensor" && [...OPENINGS, "motion", "occupancy", "presence", "moisture", "smoke", "gas"].includes(e[d.id]?.attributes.device_class as string));
  sensors.sort((a, b) => Number(e[b.d.id]?.state === "on") - Number(e[a.d.id]?.state === "on"));
  const cams = all.filter(({ d }) => domainOf(d.id) === "camera");
  return [
    ...locks.map(({ d, r }): Widget => ({ key: d.id, kind: "lock", size: "s", name: d.name, sub: r.name, entity: d.id, room: r })),
    ...sensors.map(({ d, r }): Widget => ({ key: d.id, kind: "binary", size: "s", name: d.name, sub: r.name, entity: d.id, room: r })),
    ...cams.map(({ d, r }): Widget => ({ key: d.id, kind: "camera", size: "m", name: d.name, sub: r.name, entity: d.id, room: r })),
  ];
}

/** Cenas: every scene and script as a large button. */
export function sceneWidgets(home: Home, e: HassEntities): Widget[] {
  return [...home.scenes, ...home.scripts]
    .filter((id) => e[id])
    .map((id) => ({ key: id, kind: "scene" as Kind, size: "s" as Size, name: (e[id].attributes.friendly_name as string) ?? id, entity: id }));
}

const BIG: Kind[] = ["climate", "weather", "media", "scenes", "camera", "clock"];
/** The sizes a widget can take, smallest first. */
export const sizesFor = (k: Kind): Size[] => (BIG.includes(k) ? ["m", "l", "xl"] : ["s", "m", "l"]);

export function findDevice(home: Home, id: string): Widget | null {
  for (const r of home.rooms) {
    const d = r.devices.find((x) => x.id === id);
    if (d) return deviceWidget(d, r);
  }
  return null;
}

/** The automatic widgets of a view, arranged by its saved layout: saved order and sizes first, new widgets after. */
export function arrange(auto: Widget[], layout: Layout | undefined, home: Home): Widget[] {
  if (!layout) return auto;
  const byKey = new Map(auto.map((w) => [w.key, w]));
  const hidden = new Set(layout.hidden);
  const out: Widget[] = [];
  const seen = new Set<string>();
  for (const it of layout.items) {
    if (seen.has(it.key) || hidden.has(it.key)) continue;
    const w = byKey.get(it.key) ?? findDevice(home, it.key);
    if (!w) continue; // a device that no longer exists
    seen.add(it.key);
    const size = it.size && sizesFor(w.kind).includes(it.size) ? it.size : w.size;
    out.push({ ...w, size });
  }
  for (const w of auto) if (!seen.has(w.key) && !hidden.has(w.key)) out.push(w);
  return out;
}

/** What can be added to a view: its hidden widgets, then every other device of the house. */
export function addable(auto: Widget[], layout: Layout, home: Home): Widget[] {
  const present = new Set(layout.items.map((i) => i.key));
  const hiddenAuto = auto.filter((w) => layout.hidden.includes(w.key));
  const devices = home.rooms
    .filter((r) => !r.hidden)
    .flatMap((r) => r.devices.filter((d) => !d.hidden).map((d) => deviceWidget(d, r)))
    .filter((w): w is Widget => !!w && !present.has(w.key) && !hiddenAuto.some((h) => h.key === w.key) && !auto.some((a) => a.key === w.key && !layout.hidden.includes(a.key)));
  return [...hiddenAuto, ...devices];
}

/** "2 de 3 luzes acesas", "luz acesa", "luzes apagadas", "5 dispositivos". */
export function roomLine(total: number, on: number, devices: number): string {
  if (!total) return `${devices} dispositivo${devices === 1 ? "" : "s"}`;
  if (!on) return total === 1 ? "luz apagada" : "luzes apagadas";
  if (on === total) return total === 1 ? "luz acesa" : `${total} luzes acesas`;
  return `${on} de ${total} luzes acesas`;
}
