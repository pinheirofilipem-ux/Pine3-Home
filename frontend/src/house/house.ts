// Casa 3D and its floor-plan editor, in Pine3 Home. The drawing and the gestures are Pine3 View's own code, copied
// as it is (house3d.js, housecanvas.js, plan2d.js, devtypes.js): those files build HTML and expect a "panel" object
// with a few methods (p._s, p._isOn, p._go…). This element is that object for Pine3 Home: it hands them the house,
// puts their HTML in its shadow root, swaps Home Assistant's <ha-icon> (missing on the wall screens) for inline
// SVG, and saves the plan in the house's settings.
import { LitElement, css, html, unsafeCSS, type PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { callService, type Connection, type HassEntities, type HassEntity } from "home-assistant-js-websocket";
import {
  mdiAirConditioner, mdiAirPurifier, mdiArrowCollapseVertical, mdiArrowExpandVertical, mdiAutoFix, mdiBlinds, mdiBrush, mdiCctv,
  mdiCeilingLight, mdiCheck, mdiCircleMedium, mdiClose, mdiCrosshairs, mdiCursorMove, mdiDoor, mdiEraser, mdiEraserVariant, mdiFan,
  mdiFloorLamp, mdiFloorPlan, mdiHomeOutline, mdiLedStripVariant, mdiLightbulb, mdiLock, mdiMapMarkerPlusOutline, mdiMinus,
  mdiMotionSensor, mdiPlus, mdiPowerSocketEu, mdiRobotVacuum, mdiRotateLeft, mdiRotateRight, mdiSpeaker, mdiSpeakerWireless,
  mdiSpotlightBeam, mdiTelevision, mdiTelevisionBox, mdiThermometer, mdiWindowClosedVariant,
} from "@mdi/js";
import type { Home, HomeSettings, Room } from "../lib/types";
import { roomIconPath } from "../vidro/icons";
import { houseView, bindHouse, css3d } from "./house3d.js";
import { planView, bindPlan, cssPlan } from "./plan2d.js";

const ICONS: Record<string, string> = {
  "air-conditioner": mdiAirConditioner, "air-purifier": mdiAirPurifier, "arrow-collapse-vertical": mdiArrowCollapseVertical,
  "arrow-expand-vertical": mdiArrowExpandVertical, "auto-fix": mdiAutoFix, blinds: mdiBlinds, brush: mdiBrush, cctv: mdiCctv,
  "ceiling-light": mdiCeilingLight, check: mdiCheck, "circle-medium": mdiCircleMedium, close: mdiClose, crosshairs: mdiCrosshairs,
  "cursor-move": mdiCursorMove, door: mdiDoor, eraser: mdiEraser, "eraser-variant": mdiEraserVariant, fan: mdiFan,
  "floor-lamp": mdiFloorLamp, "floor-plan": mdiFloorPlan, "home-outline": mdiHomeOutline, "led-strip-variant": mdiLedStripVariant,
  lightbulb: mdiLightbulb, lock: mdiLock, "map-marker-plus-outline": mdiMapMarkerPlusOutline, minus: mdiMinus,
  "motion-sensor": mdiMotionSensor, plus: mdiPlus, "power-socket-eu": mdiPowerSocketEu, "robot-vacuum": mdiRobotVacuum,
  "rotate-left": mdiRotateLeft, "rotate-right": mdiRotateRight, speaker: mdiSpeaker, "speaker-wireless": mdiSpeakerWireless,
  "spotlight-beam": mdiSpotlightBeam, television: mdiTelevision, "television-box": mdiTelevisionBox, thermometer: mdiThermometer,
  "window-closed-variant": mdiWindowClosedVariant,
};

/** <ha-icon icon="mdi:x"> → an inline SVG (the wall screens don't load Home Assistant's frontend). */
function svgIcons(markup: string): string {
  return markup.replace(/<ha-icon(?: class="([^"]*)")? icon="mdi:([a-z0-9-]+)"><\/ha-icon>/g, (_m, cls: string | undefined, name: string) => {
    const path = ICONS[name] ?? roomIconPath(`mdi:${name}`);
    return `<svg class="hi${cls ? ` ${cls}` : ""}" viewBox="0 0 24 24" aria-hidden="true"><path d="${path}" fill="currentColor"/></svg>`;
  });
}

const dom = (id: string) => id.split(".")[0];

/** How this device draws the house (kept in this browser): full CSS 3D, light 3D, a painted picture, or the plan. */
export type HouseMode = "auto" | "full" | "lite" | "image" | "plan";
const MODE_KEY = "pine3_home.house_mode";
export function houseModeSetting(): HouseMode {
  try {
    return (localStorage.getItem(MODE_KEY) as HouseMode | null) ?? "auto";
  } catch {
    return "auto";
  }
}
export function setHouseMode(m: HouseMode): void {
  try {
    localStorage.setItem(MODE_KEY, m);
  } catch {
    /* private mode: stays automatic */
  }
}
/** A weak device (little memory, or an engine without color-mix()) gets the painted picture, as in Pine3 View. */
export function autoHouseMode(): Exclude<HouseMode, "auto"> {
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  const weak = (mem != null && mem <= 2) || !window.CSS?.supports?.("color", "color-mix(in srgb, red, blue)");
  return weak ? "image" : mem != null && mem <= 4 ? "lite" : "full";
}

/** A room as Pine3 View's files expect it. */
interface ViewRoom {
  id: string;
  name: string;
  icon: string;
  floor: string | null;
  floor_level: number;
  ents: string[];
  entities: Room["entities"];
  count: number;
  temperature: string | null;
  devices: Room["devices"];
}

type Settings = Required<Pick<HomeSettings, "house_layout" | "house_size" | "placements">> & HomeSettings;

@customElement("pine3-house")
export class Pine3House extends LitElement {
  @property({ attribute: false }) home!: Home;
  @property({ attribute: false }) entities: HassEntities = {};
  @property({ attribute: false }) conn?: Connection;
  /** "house": the Casa 3D; "plan": the floor-plan editor (in the settings). */
  @property() mode: "house" | "plan" = "house";
  /** Whether this screen may change the plan (Editar planta, the wall height). */
  @property({ type: Boolean }) canEdit = false;
  /** Open a room, or a card's sheet. */
  @property({ attribute: false }) openRoom: (id: string) => void = () => undefined;
  @property({ attribute: false }) openSheet: (id: string) => void = () => undefined;
  /** Save some of the house's settings (the host knows how: admin or PIN). */
  @property({ attribute: false }) save: (changes: HomeSettings) => void = () => undefined;

  // ---------- what Pine3 View's files read and write on the "panel" ----------
  _drag: boolean | null = null;
  _house: unknown = null;
  _fit3d?: () => void;
  _meta: Record<string, { name?: string; model?: string; manufacturer?: string }> = {};
  /** The plan being edited (Pine3 View's draft): saved a moment after each change. */
  private draft: Settings | null = null;
  private lastKey = "";
  private saveTimer = 0;
  private resize = new ResizeObserver(() => this._fit3d?.());

  _cfg(): Settings {
    const s = this.home.settings ?? {};
    return { ...s, house_layout: s.house_layout ?? {}, house_size: s.house_size ?? {}, placements: this.withTypes(s.placements ?? {}) };
  }
  _s(id: string): HassEntity | undefined {
    return this.entities[id];
  }
  _name(id: string): string {
    return this.home.settings?.names?.[id] ?? this._meta[id]?.name ?? (this.entities[id]?.attributes.friendly_name as string | undefined) ?? id;
  }
  _roomName(r: { name: string }): string {
    return r.name;
  }
  _isOn(id: string): boolean {
    const s = this.entities[id];
    if (!s) return false;
    const d = dom(id);
    if (d === "lock") return s.state === "unlocked";
    if (d === "climate") return s.state !== "off" && s.state !== "unavailable";
    if (d === "media_player") return !["off", "standby", "idle", "unavailable", "unknown"].includes(s.state);
    if (d === "vacuum") return ["cleaning", "returning"].includes(s.state);
    return ["on", "open", "opening", "closing", "home"].includes(s.state);
  }
  _switchables(r: ViewRoom): string[] {
    return r.ents.filter((i) => ["light", "switch", "fan", "input_boolean"].includes(dom(i)));
  }
  _roomClimate(r: ViewRoom): { temp: string | null } {
    const t = r.temperature ? parseFloat(this.entities[r.temperature]?.state ?? "") : NaN;
    const c = r.ents.find((i) => dom(i) === "climate" && this.entities[i]?.attributes.current_temperature != null);
    const v = !Number.isNaN(t) ? t : c ? (this.entities[c].attributes.current_temperature as number) : null;
    // whole degrees: Pine3 View's label drops the decimals itself, but only a Portuguese decimal comma
    return { temp: v != null ? `${Math.round(v)}°` : null };
  }
  _entShown(d: HomeSettings, e: { id: string; primary: boolean }): boolean {
    const hidden = d.hidden ?? [];
    return e.primary ? !hidden.includes(e.id) : (d.shown ?? []).includes(e.id) && !hidden.includes(e.id);
  }
  _houseMode(): Exclude<HouseMode, "auto"> {
    const m = houseModeSetting();
    return m === "auto" ? autoHouseMode() : m;
  }
  _gear(): string {
    return "";
  }
  _go(_view: string, room: string): void {
    this.openRoom(room);
  }
  _openModal(id: string): void {
    this.openSheet(id);
  }
  _call(domain: string, service: string, data: Record<string, unknown>): void {
    if (!this.conn) return;
    const { entity_id, ...rest } = data;
    void callService(this.conn, domain, service, rest, { entity_id: entity_id as string }).catch((err) => console.warn("Pine3 Home: 3D", err));
  }
  _openSettings(section: string): void {
    this.dispatchEvent(new CustomEvent("pine3-settings", { detail: { section: section === "plan" ? "planta" : section }, bubbles: true, composed: true }));
  }
  _saveSettings(changes: HomeSettings): void {
    this.save(changes);
  }
  _render(): void {
    this.lastKey = "";
    this.paint();
    if (this.mode === "plan") this.queueSave();
  }

  /** A card's type chosen in Pine3 Home ("Este cartão") also draws it on the plan, unless the plan chose one. */
  private withTypes(pl: NonNullable<HomeSettings["placements"]>) {
    const types = this.home.settings?.types ?? {};
    return Object.fromEntries(Object.entries(pl).map(([id, P]) => [id, P.t || !types[id] ? P : { ...P, t: types[id] }]));
  }

  private rooms(): ViewRoom[] {
    const st = this.home.settings ?? {};
    const shown = new Set(st.shown ?? []);
    this._meta = {};
    return this.home.rooms
      .filter((r) => !r.hidden)
      .map((r) => {
        for (const d of r.devices) this._meta[d.id] = { name: d.name, model: d.model as string | undefined, manufacturer: d.manufacturer as string | undefined };
        const ents = [...r.devices.filter((d) => !d.hidden).map((d) => d.id), ...(r.entities ?? []).filter((e) => !e.primary && shown.has(e.id)).map((e) => e.id)];
        return { id: r.id, name: r.name, icon: r.icon, floor: r.floor, floor_level: r.floor_level ?? 0, ents, entities: r.entities, count: ents.length, temperature: r.temperature, devices: r.devices };
      })
      .filter((r) => r.ents.length);
  }

  /** The plan being edited starts from the saved one. */
  private get d(): Settings {
    if (!this.draft) {
      const c = this._cfg();
      this.draft = { ...c, house_layout: { ...c.house_layout }, placements: { ...(this.home.settings?.placements ?? {}) } };
    }
    return this.draft;
  }

  private queueSave(): void {
    window.clearTimeout(this.saveTimer);
    this.saveTimer = window.setTimeout(() => {
      this.saveTimer = 0;
      const d = this.d;
      const st = this.home.settings ?? {};
      const changes: HomeSettings = {};
      if (JSON.stringify(d.house_layout) !== JSON.stringify(st.house_layout ?? {})) changes.house_layout = d.house_layout;
      if (JSON.stringify(d.placements) !== JSON.stringify(st.placements ?? {})) changes.placements = d.placements;
      if ((d.wall_height ?? 30) !== (st.wall_height ?? 30)) changes.wall_height = d.wall_height;
      if (Object.keys(changes).length) this.save(changes);
    }, 400);
  }

  /** What the picture depends on: redraw only when it changes (not on every state of the house). */
  private key(rooms: ViewRoom[]): string {
    const ids = rooms.flatMap((r) => r.ents);
    const states = ids.map((id) => {
      const s = this.entities[id];
      return s ? `${s.state}|${s.attributes.brightness ?? ""}|${s.attributes.rgb_color ?? ""}|${s.attributes.color_temp_kelvin ?? ""}|${s.attributes.current_temperature ?? ""}` : "";
    });
    const temps = rooms.map((r) => (r.temperature ? this.entities[r.temperature]?.state : ""));
    return JSON.stringify([this.mode, this.canEdit, this.home.settings, this.home.rooms.map((r) => r.id), states, temps, document.documentElement.lang]);
  }

  private paint(): void {
    const root = this.renderRoot.querySelector<HTMLElement>(".root");
    if (!root || !this.home || this._drag) return;
    const rooms = this.rooms();
    const key = this.key(rooms);
    if (key === this.lastKey) return;
    this.lastKey = key;
    let markup = this.mode === "plan" ? planView(this, this.d, rooms) : houseView(this, rooms);
    // no editing from a screen that may not change the settings
    if (!this.canEdit) markup = markup.replace(/<button class="pill" data-editplan>.*?<\/button>/s, "").replace(/<button class="mini" data-wall="-?\d+"[^>]*>.*?<\/button>/gs, "");
    root.innerHTML = svgIcons(markup);
    if (this.mode === "plan") bindPlan(this, root, this.d, rooms);
    else bindHouse(this, root);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.resize.observe(this);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.resize.disconnect();
    window.clearTimeout(this.saveTimer);
  }

  protected updated(changed: PropertyValues): void {
    // a new plan from Home Assistant (another screen) replaces the draft, unless a save is on its way
    if (changed.has("home") && this.mode === "plan" && this.draft && !this.saveTimer) this.draft = null;
    this.paint();
  }

  render() {
    return html`<div class=${`root ${this.mode}`}></div>`;
  }

  static styles = [
    css`
      :host {
        display: block;
        --amber: #f6b83f;
        --cream: #fff3dc;
        --ink: #1d1410;
        --ink-soft: rgba(29, 20, 16, 0.65);
        --muted: rgba(255, 255, 255, 0.62);
        --line: rgba(255, 255, 255, 0.14);
        --display: inherit;
        color: #f5f1ea;
        font-family: inherit;
      }
      .root.house {
        border-radius: 28px;
        padding: 18px 20px 20px;
        background: radial-gradient(120% 90% at 50% 0%, #2b2238 0%, #15121c 60%, #0d0b12 100%);
      }
      .root.plan {
        color: #f5f1ea;
      }
      /* the dashboards already say "Casa 3D" above it: keep only the buttons */
      .root.house .hero > div:first-child {
        display: none;
      }
      .root.house .hero {
        justify-content: flex-end;
      }
      .root.house .hero:not(:has(button)) {
        display: none;
      }
      .root.house .stage {
        margin-top: 12px;
      }
      .hi {
        width: 1.15em;
        height: 1.15em;
        flex: none;
      }
      .hero {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
      }
      .hero .t {
        font-size: 30px;
        font-weight: 500;
        letter-spacing: -0.01em;
      }
      .eyebrow,
      .sub {
        font-size: 12px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--muted);
      }
      .sub {
        margin: 18px 0 8px;
      }
      .right,
      .seg,
      .row {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        align-items: center;
      }
      .seg {
        margin-top: 10px;
      }
      .pill,
      .mini {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 40px;
        padding: 0 16px;
        border-radius: 999px;
        border: 1px solid var(--line);
        background: rgba(255, 255, 255, 0.08);
        color: inherit;
        font: inherit;
        font-size: 15px;
        cursor: pointer;
      }
      .pill.solid {
        background: var(--cream);
        color: var(--ink);
        border-color: var(--cream);
      }
      .mini {
        width: 40px;
        padding: 0;
        justify-content: center;
        background: rgba(20, 12, 24, 0.6);
      }
      .mini .hi {
        width: 20px;
        height: 20px;
      }
      .empty {
        margin-top: 16px;
        color: var(--muted);
      }
      .panel h3 {
        font-size: 22px;
        font-weight: 600;
        margin: 0 0 6px;
      }
      .panel p {
        color: var(--muted);
        margin: 0 0 14px;
        line-height: 1.45;
      }
      .stage {
        height: min(68vh, 640px);
      }
      .mki .hi {
        width: 18px;
        height: 18px;
      }
      .pn .hi {
        width: 16px;
        height: 16px;
      }
      .pm .hi {
        width: 17px;
        height: 17px;
      }
      .pill .ok {
        color: var(--amber);
      }
    `,
    unsafeCSS(css3d),
    unsafeCSS(cssPlan),
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-house": Pine3House;
  }
}
