// Device types: what a card is (a ceiling light, a lamp, an LED strip, a TV…), guessed from the entity's domain,
// device class, name and device model (as Pine3 View does for its floor plan) and changeable in a card's sheet
// or in Definições → Entidades. The type sets a card's illustration and icon in every style.
import type { HassEntity } from "home-assistant-js-websocket";
import { trName } from "./i18n";
import {
  mdiCeilingLight, mdiFloorLamp, mdiLedStripVariant, mdiSpotlightBeam, mdiLightbulb, mdiTelevision, mdiTelevisionBox,
  mdiSpeaker, mdiSpeakerWireless, mdiAirConditioner, mdiFan, mdiAirPurifier, mdiBlindsHorizontal, mdiDoor,
  mdiWindowClosedVariant, mdiPowerSocketEu, mdiThermometer, mdiMotionSensor, mdiCctv, mdiLock, mdiRobotVacuum, mdiCircleMedium,
} from "@mdi/js";

export type DeviceType =
  | "ceiling" | "lamp" | "led" | "spot" | "bulb" | "tv" | "appletv" | "homepod" | "speaker" | "ac" | "fan" | "purifier"
  | "blind" | "door" | "window" | "plug" | "sensor" | "motion" | "camera" | "lock" | "vacuum" | "other";

const DEVICE_TYPES_PT: Record<DeviceType, { icon: string; name: string }> = {
  ceiling: { icon: mdiCeilingLight, name: "Luz de teto" },
  lamp: { icon: mdiFloorLamp, name: "Candeeiro" },
  led: { icon: mdiLedStripVariant, name: "Fita LED" },
  spot: { icon: mdiSpotlightBeam, name: "Spot" },
  bulb: { icon: mdiLightbulb, name: "Lâmpada" },
  tv: { icon: mdiTelevision, name: "TV" },
  appletv: { icon: mdiTelevisionBox, name: "Apple TV" },
  homepod: { icon: mdiSpeaker, name: "HomePod" },
  speaker: { icon: mdiSpeakerWireless, name: "Coluna" },
  ac: { icon: mdiAirConditioner, name: "Ar condicionado" },
  fan: { icon: mdiFan, name: "Ventoinha" },
  purifier: { icon: mdiAirPurifier, name: "Purificador" },
  blind: { icon: mdiBlindsHorizontal, name: "Estore" },
  door: { icon: mdiDoor, name: "Porta" },
  window: { icon: mdiWindowClosedVariant, name: "Janela" },
  plug: { icon: mdiPowerSocketEu, name: "Tomada" },
  sensor: { icon: mdiThermometer, name: "Sensor" },
  motion: { icon: mdiMotionSensor, name: "Movimento" },
  camera: { icon: mdiCctv, name: "Câmara" },
  lock: { icon: mdiLock, name: "Fechadura" },
  vacuum: { icon: mdiRobotVacuum, name: "Aspirador" },
  other: { icon: mdiCircleMedium, name: "Outro" },
};

/** The types, with their names in the dashboards' language. */
export const DEVICE_TYPES = Object.fromEntries(Object.entries(DEVICE_TYPES_PT).map(([k, v]) => [k, trName(v)])) as typeof DEVICE_TYPES_PT;

/** The types that make sense for an entity of each domain (the choices in a card's sheet). */
export const TYPES_FOR: Record<string, DeviceType[]> = {
  light: ["ceiling", "lamp", "led", "spot", "bulb"],
  media_player: ["tv", "appletv", "homepod", "speaker"],
  fan: ["fan", "purifier"],
  cover: ["blind", "door", "window"],
  switch: ["plug", "tv", "fan", "other"],
  input_boolean: ["plug", "other"],
  binary_sensor: ["door", "window", "motion", "sensor"],
};

export interface DeviceMeta {
  name?: string;
  model?: string | null;
  manufacturer?: string | null;
}

const has = (s: string, ...words: string[]) => words.some((w) => s.includes(w));

/** Best guess of a device type from the entity's domain, device class, name and device model. */
export function autoType(id: string, state?: HassEntity, meta: DeviceMeta = {}): DeviceType {
  const d = id.split(".")[0];
  const a = state?.attributes ?? {};
  const name = `${meta.name ?? ""} ${(a.friendly_name as string) ?? ""} ${id}`.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const model = `${meta.model ?? ""}`.toLowerCase();
  const maker = `${meta.manufacturer ?? ""}`.toLowerCase();
  if (d === "light") {
    if (has(name, "fita", "led", "strip", "lightstrip", "barra")) return "led";
    // "candeeiro de teto" is a ceiling light, so the ceiling words win over "candeeiro"
    if (has(name, "teto", "tecto", "ceiling", "plafon", "lustre", "pendente", "suspens")) return "ceiling";
    if (has(name, "spot", "foco", "embutid")) return "spot";
    if (has(name, "candeeiro", "lamp", "abajur", "de pe", "cabeceira", "floor")) return "lamp";
    return "ceiling";
  }
  if (d === "media_player") {
    if (maker.includes("apple") && model.includes("homepod")) return "homepod";
    if (maker.includes("apple") && model.includes("tv")) return "appletv";
    if (has(name, "homepod")) return "homepod";
    if (has(name, "apple tv", "appletv")) return "appletv";
    if (a.device_class === "tv" || has(name, "tv", "televis")) return "tv";
    return "speaker";
  }
  if (d === "climate") return "ac";
  if (d === "fan") return has(name, "purif", "air clean") || (maker.includes("philips") && model.startsWith("ac")) ? "purifier" : "fan";
  if (d === "cover") return a.device_class === "door" || a.device_class === "garage" ? "door" : "blind";
  if (d === "lock") return "lock";
  if (d === "camera") return "camera";
  if (d === "vacuum") return "vacuum";
  if (d === "switch" || d === "input_boolean") return has(name, "tv", "televis") ? "tv" : "plug";
  if (d === "binary_sensor") {
    if (["door", "garage_door", "opening"].includes(a.device_class as string)) return "door";
    if (a.device_class === "window") return "window";
    if (["motion", "occupancy", "presence"].includes(a.device_class as string)) return "motion";
    return "sensor";
  }
  if (d === "sensor") return "sensor";
  return "other";
}
