// Vidro: the GlassHome-inspired style, made for the Tab A7 (no backdrop blur; one opaque glass pane per widget).
import { LitElement, html, nothing, svg, type PropertyValues, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { callService, type Connection, type HassEntities, type HassEntity } from "home-assistant-js-websocket";
import type { Dashboard, Home, Layout, Room } from "../lib/types";
import { ICONS, roomIcon } from "./icons";
import { album, blind, fanArt, lamp, lockArt, plugArt, robot, sceneArt, spark, thermo, weatherArt } from "./art";
import {
  CATEGORIES, addable, arrange, sizesFor, avgBrightness, brightness, climateWidgets, domainOf, fmt, homeWidgets, sceneWidgets, securityWidgets, isOn, lightColor, roomLights, roomWidgets, summary, unavailable,
  type Widget,
} from "./model";
import { vidroStyles } from "./styles";

const LONG_PRESS = 550;
const DRAG_START = 10;
const HVAC: Record<string, string> = { heat: "Calor", cool: "Frio", heat_cool: "Auto", auto: "Auto", dry: "Seco", fan_only: "Ventilar", off: "Off" };
const ACTION: Record<string, string> = { heating: "a aquecer", cooling: "a arrefecer", idle: "em pausa", off: "desligado", drying: "a secar", fan: "a ventilar" };
const WEATHER: Record<string, string> = {
  "clear-night": "céu limpo", cloudy: "nublado", fog: "nevoeiro", hail: "granizo", lightning: "trovoada", "lightning-rainy": "trovoada e chuva",
  partlycloudy: "pouco nublado", pouring: "chuva forte", rainy: "chuva", snowy: "neve", "snowy-rainy": "chuva e neve", sunny: "sol",
  windy: "vento", "windy-variant": "vento", exceptional: "excecional",
};
const VACUUM: Record<string, string> = { cleaning: "a limpar", docked: "na base", returning: "a voltar à base", paused: "em pausa", idle: "parado", error: "erro" };
const COVER: Record<string, string> = { open: "aberto", closed: "fechado", opening: "a abrir", closing: "a fechar" };
const LEVELS: Record<string, string> = { yellow: "amarelo", orange: "laranja", red: "vermelho" };
const LEVEL_RANK: Record<string, number> = { yellow: 1, orange: 2, red: 3 };
const HISTORY_TTL = 10 * 60_000;
const IPMA_TTL = 10 * 60_000;
/** Views that aren't rooms. */
const VIEWS = [
  { id: "@clima", name: "Clima", icon: ICONS.therm },
  { id: "@seguranca", name: "Segurança", icon: ICONS.shield },
  { id: "@cenas", name: "Cenas", icon: ICONS.spark },
] as const;

interface IpmaWarning {
  text: string;
  awarenessTypeName: string;
  awarenessLevelID: string;
  startTime: string;
  endTime: string;
}

const PRESETS = ["#ffcf8a", "#fff1d6", "#ff8a5c", "#ff6fae", "#b49cff", "#6cc8ff", "#5be3a0"];

const icon = (path: string) => svg`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${path} fill="currentColor"/></svg>`;

interface Press {
  key: string;
  x: number;
  y: number;
  rect: DOMRect;
  dragging: boolean;
  long: boolean;
  timer: number;
}

interface HourForecast {
  datetime: string;
  temperature: number;
  precipitation_probability?: number;
}

@customElement("pine3-vidro")
export class Pine3Vidro extends LitElement {
  @property({ attribute: false }) home!: Home;
  @property({ attribute: false }) entities: HassEntities = {};
  @property({ attribute: false }) dashboard!: Dashboard;
  @property({ attribute: false }) conn!: Connection;
  @property() screenName = "";
  /** Whether this screen may edit the dashboard's layout (an admin, or a screen allowed to). */
  @property({ type: Boolean }) canEdit = false;

  @state() private editing: string | null = null; // the view being edited
  @state() private draft: Layout | null = null;
  @state() private moving: string | null = null;
  @state() private saving = false;
  private lastReorder = 0;

  @state() private view = "home"; // "home" or a room id
  @state() private category = "all";
  @state() private sheet: string | null = null; // entity id
  @state() private drag: { key: string; value: number } | null = null;
  @state() private now = new Date();
  @state() private hourly: HourForecast[] = [];
  @state() private warnings: IpmaWarning[] = [];
  @state() private history: Record<string, number[]> = {};
  @state() private flash: string | null = null;
  private historyAt: Record<string, number> = {};
  private historyWanted = new Set<string>();
  private ipmaAt = 0;
  private ipmaArea: string | null = null;
  private press?: Press;
  private clock?: number;
  private forecastAt = 0;

  connectedCallback(): void {
    super.connectedCallback();
    this.clock = window.setInterval(() => (this.now = new Date()), 10_000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.clock);
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("home") && this.view !== "home" && !this.view.startsWith("@") && !this.home.rooms.some((r) => r.id === this.view)) this.view = "home";
    const area = this.home?.settings?.ipma_area ?? null;
    if (area !== this.ipmaArea || (area && Date.now() - this.ipmaAt > IPMA_TTL)) {
      this.ipmaArea = area;
      this.ipmaAt = Date.now();
      if (area && this.conn) void this.loadWarnings(area);
      else this.warnings = [];
    }
    if (this.home?.weather && Date.now() - this.forecastAt > 30 * 60_000 && this.conn) {
      this.forecastAt = Date.now();
      void this.loadForecast(this.home.weather);
    }
  }

  private async loadForecast(entity: string): Promise<void> {
    try {
      const r = await this.conn.sendMessagePromise<{ response: Record<string, { forecast: HourForecast[] }> }>({
        type: "call_service", domain: "weather", service: "get_forecasts", service_data: { type: "hourly" }, target: { entity_id: entity }, return_response: true,
      });
      this.hourly = (r.response?.[entity]?.forecast ?? []).slice(1, 7).filter((_, i) => i % 2 === 0);
    } catch {
      this.hourly = []; // a weather entity without hourly forecasts
    }
  }

  protected updated(): void {
    // the charts of the sensors on screen: one request for all that are missing or old
    const now = Date.now();
    const due = [...this.historyWanted].filter((id) => now - (this.historyAt[id] ?? 0) > HISTORY_TTL);
    this.historyWanted.clear();
    if (due.length && this.conn) {
      due.forEach((id) => (this.historyAt[id] = now));
      void this.loadHistory(due);
    }
  }

  private async loadHistory(ids: string[]): Promise<void> {
    try {
      const r = await this.conn.sendMessagePromise<Record<string, Array<{ s: string }>>>({
        type: "history/history_during_period", start_time: new Date(Date.now() - 24 * 3600_000).toISOString(), entity_ids: ids,
        minimal_response: true, no_attributes: true, significant_changes_only: false,
      });
      const next = { ...this.history };
      for (const id of ids) {
        const values = (r[id] ?? []).map((p) => parseFloat(p.s)).filter((v) => !Number.isNaN(v));
        // at most 48 points: a tile is small
        const step = Math.max(1, Math.ceil(values.length / 48));
        next[id] = values.filter((_, i) => i % step === 0 || i === values.length - 1);
      }
      this.history = next;
    } catch (err) {
      console.warn("Pine3 Home: history", err);
    }
  }

  private async loadWarnings(area: string): Promise<void> {
    try {
      const r = await this.conn.sendMessagePromise<{ warnings: IpmaWarning[] }>({ type: "pine3_home/ipma_warnings", area });
      const now = Date.now();
      this.warnings = r.warnings
        .filter((w) => !w.endTime || new Date(w.endTime).getTime() > now)
        .sort((a, b) => (LEVEL_RANK[b.awarenessLevelID] ?? 0) - (LEVEL_RANK[a.awarenessLevelID] ?? 0));
    } catch {
      /* IPMA unreachable: keep the last list */
    }
  }

  // ---------- services ----------
  private call(domain: string, service: string, entity: string | string[], data: Record<string, unknown> = {}): void {
    void callService(this.conn, domain, service, data, { entity_id: entity }).catch((err) => console.warn("Pine3 Home:", err));
  }

  private toggle(id: string): void {
    const d = domainOf(id);
    const s = this.entities[id];
    if (d === "lock") return this.call("lock", s?.state === "locked" ? "unlock" : "lock", id);
    if (d === "cover") return this.call("cover", "toggle", id);
    if (d === "vacuum") return this.call("vacuum", s?.state === "cleaning" ? "return_to_base" : "start", id);
    if (d === "media_player") return this.call("media_player", "media_play_pause", id);
    if (d === "scene" || d === "script") return this.call(d, "turn_on", id);
    this.call(d === "input_boolean" ? "input_boolean" : "homeassistant", "toggle", id);
  }

  /** The value a slider tile shows (0..100), and how to set it. */
  private level(w: Widget): number | null {
    if (this.drag?.key === w.key) return this.drag.value;
    if (w.kind === "room-lights") return avgBrightness(w.entities!, this.entities);
    const s = this.entities[w.entity!];
    if (w.kind === "light") return brightness(s);
    if (w.kind === "cover") return (s?.attributes.current_position as number | undefined) ?? (s?.state === "open" ? 100 : 0);
    return null;
  }

  private setLevel(w: Widget, v: number): void {
    v = Math.round(v);
    if (w.kind === "room-lights" || w.kind === "light") {
      const ids = w.kind === "light" ? w.entity! : w.entities!;
      if (v <= 0) this.call("light", "turn_off", ids);
      else this.call("light", "turn_on", ids, { brightness_pct: v });
    } else if (w.kind === "cover") {
      this.call("cover", "set_cover_position", w.entity!, { position: v });
    }
  }

  private slidable(w: Widget): boolean {
    if (w.kind === "room-lights") return true;
    const s = this.entities[w.entity ?? ""];
    if (!s) return false;
    if (w.kind === "light") return ((s.attributes.supported_color_modes as string[] | undefined) ?? []).some((m) => m !== "onoff");
    if (w.kind === "cover") return ((s.attributes.supported_features as number) & 4) === 4;
    return false;
  }

  // ---------- tile gestures: tap, drag across the tile, long press ----------
  private down(e: PointerEvent, w: Widget): void {
    if ((e.target as HTMLElement).closest("button")) return;
    if (this.editing) {
      this.press = { key: w.key, x: e.clientX, y: e.clientY, rect: (e.currentTarget as HTMLElement).getBoundingClientRect(), dragging: false, long: false, timer: 0 };
      return;
    }
    const el = e.currentTarget as HTMLElement;
    const p: Press = { key: w.key, x: e.clientX, y: e.clientY, rect: el.getBoundingClientRect(), dragging: false, long: false, timer: 0 };
    p.timer = window.setTimeout(() => {
      p.long = true;
      this.longPress(w);
    }, LONG_PRESS);
    this.press = p;
  }

  private move(e: PointerEvent, w: Widget): void {
    const p = this.press;
    if (!p || p.key !== w.key || p.long) return;
    if (this.editing) return this.moveInEdit(e, p);
    const dx = e.clientX - p.x;
    const dy = e.clientY - p.y;
    if (!p.dragging) {
      if (Math.abs(dy) > DRAG_START && Math.abs(dy) > Math.abs(dx)) return this.cancel(); // scrolling the page
      if (Math.abs(dx) < DRAG_START || !this.slidable(w)) return;
      p.dragging = true;
      clearTimeout(p.timer);
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }
    const v = Math.max(0, Math.min(100, ((e.clientX - p.rect.left) / p.rect.width) * 100));
    this.drag = { key: w.key, value: Math.round(v) };
  }

  private up(_e: PointerEvent, w: Widget): void {
    const p = this.press;
    if (!p || p.key !== w.key) return;
    clearTimeout(p.timer);
    this.press = undefined;
    if (this.editing) {
      this.moving = null;
      return;
    }
    if (p.long) return;
    if (p.dragging) {
      const v = this.drag?.value ?? 0;
      this.setLevel(w, v);
      // keep showing the new value until the state arrives
      window.setTimeout(() => {
        if (this.drag?.key === w.key) this.drag = null;
      }, 1500);
      return;
    }
    this.tap(w);
  }

  private cancel(): void {
    if (this.press) clearTimeout(this.press.timer);
    this.press = undefined;
    this.moving = null;
  }

  // ---------- editing the layout ----------
  private arranged(view: string, auto: Widget[]): Widget[] {
    const layout = this.editing === view && this.draft ? this.draft : this.dashboard.layouts?.[view];
    return arrange(auto, layout, this.home);
  }

  private startEdit(view: string, auto: Widget[]): void {
    const saved = this.dashboard.layouts?.[view];
    this.draft = { items: arrange(auto, saved, this.home).map((w) => ({ key: w.key, size: w.size })), hidden: [...(saved?.hidden ?? [])] };
    this.editing = view;
    this.category = "all";
    this.sheet = null;
  }

  private stopEdit(): void {
    this.editing = null;
    this.draft = null;
    this.moving = null;
  }

  private async saveLayout(layout: Layout | null): Promise<void> {
    const view = this.editing;
    if (!view) return;
    this.saving = true;
    try {
      const r = await this.conn.sendMessagePromise<{ dashboard: Dashboard }>({
        type: "pine3_home/dashboards/layout", dashboard_id: this.dashboard.id, view, layout,
      });
      this.dashboard = { ...this.dashboard, layouts: r.dashboard.layouts };
      this.stopEdit();
    } catch (err) {
      console.warn("Pine3 Home: layout", err);
      alert("Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel.");
    } finally {
      this.saving = false;
    }
  }

  private moveInEdit(e: PointerEvent, p: Press): void {
    if (!p.dragging) {
      if (Math.hypot(e.clientX - p.x, e.clientY - p.y) < DRAG_START) return;
      p.dragging = true;
      this.moving = p.key;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }
    const target = (this.renderRoot as ShadowRoot).elementsFromPoint(e.clientX, e.clientY)
      .map((el) => (el as HTMLElement).closest?.(".w") as HTMLElement | null)
      .find((el) => el && el.dataset.key && el.dataset.key !== p.key);
    if (!target || !this.draft || Date.now() - this.lastReorder < 180) return;
    const items = [...this.draft.items];
    const from = items.findIndex((i) => i.key === p.key);
    const to = items.findIndex((i) => i.key === target.dataset.key);
    if (from < 0 || to < 0) return;
    const [it] = items.splice(from, 1);
    items.splice(to, 0, it);
    this.lastReorder = Date.now();
    this.draft = { ...this.draft, items };
  }

  private hideWidget(key: string): void {
    if (!this.draft) return;
    this.draft = { items: this.draft.items.filter((i) => i.key !== key), hidden: [...this.draft.hidden, key] };
  }

  private resizeWidget(w: Widget): void {
    if (!this.draft) return;
    const sizes = sizesFor(w.kind);
    const next = sizes[(sizes.indexOf(w.size) + 1) % sizes.length];
    this.draft = { ...this.draft, items: this.draft.items.map((i) => (i.key === w.key ? { ...i, size: next } : i)) };
  }

  private addWidget(w: Widget): void {
    if (!this.draft) return;
    this.draft = { items: [...this.draft.items, { key: w.key, size: w.size }], hidden: this.draft.hidden.filter((k) => k !== w.key) };
  }

  /** The edit buttons of a view: a pencil, or Cancelar / Repor / Concluído while editing. */
  private editControls(view: string, auto: Widget[]) {
    if (this.editing === view) {
      return html`<button class="pill" @click=${() => this.stopEdit()}>Cancelar</button>
        ${this.dashboard.layouts?.[view] ? html`<button class="pill" ?disabled=${this.saving} @click=${() => this.saveLayout(null)}>${icon(ICONS.restore)} Repor</button>` : nothing}
        <button class="pill pri" ?disabled=${this.saving} @click=${() => this.saveLayout(this.draft)}>${icon(ICONS.check)} Concluído</button>`;
    }
    return this.canEdit && !this.editing
      ? html`<button class="pill icon" aria-label="Editar esta vista" title="Editar" @click=${() => this.startEdit(view, auto)}>${icon(ICONS.edit)}</button>`
      : nothing;
  }

  private renderPicker(view: string, auto: Widget[]) {
    if (this.editing !== view || !this.draft) return nothing;
    const options = addable(auto, this.draft, this.home);
    return html`<div class="picker">
      <div class="phd"><span class="k">Adicionar · toca para pôr no fim</span><span class="k">Arrasta os cartões para mudar a ordem</span></div>
      <div class="prow">${options.length
        ? options.map((w) => html`<button class="pk" @click=${() => this.addWidget(w)}><span>${w.name}</span><em>${w.room?.name ?? ""}</em></button>`)
        : html`<span class="k">Já está tudo nesta vista.</span>`}</div>
    </div>`;
  }

  private tap(w: Widget): void {
    switch (w.kind) {
      case "room-lights": {
        const anyOn = w.entities!.some((id) => this.entities[id]?.state === "on");
        return this.call("light", anyOn ? "turn_off" : "turn_on", w.entities!);
      }
      case "climate":
      case "weather":
      case "sensor":
      case "binary":
      case "scenes":
        if (w.entity) this.sheet = w.entity;
        return;
      case "scene":
        this.call(domainOf(w.entity!), "turn_on", w.entity!);
        this.flash = w.key;
        window.setTimeout(() => {
          if (this.flash === w.key) this.flash = null;
        }, 1200);
        return;
      case "camera":
        this.sheet = w.entity!;
        return;
      case "lock":
        // tapping only locks; unlocking needs the sheet
        if (this.entities[w.entity!]?.state !== "locked") this.call("lock", "lock", w.entity!);
        else this.sheet = w.entity!;
        return;
      default:
        if (w.entity) this.toggle(w.entity);
    }
  }

  private longPress(w: Widget): void {
    if (w.kind === "room-lights" && w.room) {
      this.openRoom(w.room.id);
      return;
    }
    if (w.entity) this.sheet = w.entity;
  }

  private openRoom(id: string): void {
    if (this.editing && this.editing !== id) this.stopEdit();
    this.view = id;
    this.category = "all";
    this.sheet = null;
  }

  // ---------- render ----------
  private get dark(): boolean {
    if (this.dashboard.theme === "claro") return false;
    if (this.dashboard.theme === "auto") return this.entities["sun.sun"]?.state !== "above_horizon";
    return true;
  }

  render() {
    if (!this.home) return nothing;
    const room = this.home.rooms.find((r) => r.id === this.view);
    const cls = { vd: true, light: !this.dark, editing: !!this.editing, [`dock-${this.dashboard.dock}`]: true };
    return html`<div class=${classMap(cls)}>
      ${this.renderDock()}
      <main class="main">${room ? this.renderRoom(room) : this.view.startsWith("@") ? this.renderView(this.view) : this.renderHome()}</main>
      ${this.sheet ? this.renderSheet(this.sheet) : nothing}
    </div>`;
  }

  private renderDock() {
    const rooms = this.home.rooms.filter((r) => !r.hidden && r.devices.some((d) => !d.hidden));
    return html`<nav class="dock" aria-label="Vistas">
      <button class=${classMap({ di: true, on: this.view === "home" })} @click=${() => this.openRoom("home")} aria-label="Casa">
        ${icon(ICONS.home)}<span class="lb">Casa</span>
      </button>
      <span class="sep"></span>
      <div class="rooms">
        ${rooms.map((r) => {
          const on = roomLights(r).filter((id) => this.entities[id]?.state === "on").length;
          return html`<button class=${classMap({ di: true, rm: true, on: this.view === r.id, lit: on > 0 })} @click=${() => this.openRoom(r.id)} aria-label=${r.name}>
            ${on ? html`<span class="glow"></span>` : nothing}${icon(roomIcon(r.icon))}<span class="lb">${r.name}</span>
            ${on ? html`<span class="bdg">${on}</span>` : nothing}
          </button>`;
        })}
      </div>
      <span class="sep"></span>
      ${VIEWS.filter((v) => this.viewWidgets(v.id).length).map((v) => {
        const badge = v.id === "@seguranca" ? summary(this.home, this.entities).alerts : 0;
        return html`<button class=${classMap({ di: true, on: this.view === v.id })} @click=${() => this.openRoom(v.id)} aria-label=${v.name}>
          ${icon(v.icon)}<span class="lb">${v.name}</span>${badge ? html`<span class="bdg alert">${badge}</span>` : nothing}
        </button>`;
      })}
    </nav>`;
  }

  private renderHeader(title: TemplateResult | string, sub: string, controls: unknown = nothing) {
    const s = summary(this.home, this.entities);
    const persons = this.home.persons.map((id) => this.entities[id]).filter((p): p is HassEntity => !!p);
    return html`<header class="hdr">
      <div class="t"><span>${sub}</span><b>${title}</b></div>
      <div class="chips">
        ${this.editing ? nothing : html`${s.temp ? html`<span class="chip"><i style="background:#34c759;color:#06210f">${icon(ICONS.therm)}</i><span>Clima<small>${s.temp}</small></span></span>` : nothing}
        <span class="chip"><i style="background:#ffcf8a;color:#2a1a04">${icon(ICONS.bulb)}</i><span>Luzes<small>${s.lightsOn ? `${s.lightsOn} acesa${s.lightsOn > 1 ? "s" : ""}` : "apagadas"}</small></span></span>
        <span class="chip"><i style=${s.alerts ? "background:#ff8a5c;color:#2a0f04" : "background:#5be3a0;color:#06210f"}>${icon(ICONS.shield)}</i><span>Segurança<small>${s.alertText}</small></span></span>
        ${persons.length
          ? html`<div class="people">${persons.map((p) => {
              const pic = p.attributes.entity_picture as string | undefined;
              const name = (p.attributes.friendly_name as string) ?? p.entity_id;
              return html`<span class="av" title=${name} style=${pic ? `background-image:url(${pic})` : ""}>${pic ? "" : name[0]}${p.state === "home" ? html`<i></i>` : nothing}</span>`;
            })}</div>`
          : nothing}`}
        ${controls}
      </div>
    </header>`;
  }

  private greeting(): string {
    const h = this.now.getHours();
    const g = h < 6 ? "Boa noite" : h < 13 ? "Bom dia" : h < 20 ? "Boa tarde" : "Boa noite";
    return `${g} · ${this.now.toLocaleDateString("pt-PT", { weekday: "long", day: "numeric", month: "long" })}`;
  }

  private renderHome() {
    const time = this.now.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" });
    const auto = homeWidgets(this.home, this.entities);
    const widgets = this.arranged("home", auto);
    const editing = this.editing === "home";
    return html`${editing ? this.renderHeader("A editar", "Casa", this.editControls("home", auto)) : this.renderHeader(time, this.greeting(), this.editControls("home", auto))}
      ${widgets.length || editing ? html`<div class=${classMap({ grid: true, edit: editing })}>${widgets.map((w) => this.renderWidget(w))}</div>` : html`<p class="empty">Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.</p>`}
      ${this.renderPicker("home", auto)}`;
  }

  private viewWidgets(id: string): Widget[] {
    if (id === "@clima") return climateWidgets(this.home, this.entities);
    if (id === "@seguranca") return securityWidgets(this.home, this.entities);
    if (id === "@cenas") return sceneWidgets(this.home, this.entities);
    return [];
  }

  private renderView(id: string) {
    const v = VIEWS.find((x) => x.id === id)!;
    const auto = this.viewWidgets(id);
    const widgets = this.arranged(id, auto);
    const editing = this.editing === id;
    const s = summary(this.home, this.entities);
    const facts = id === "@clima" ? s.temp ?? "" : id === "@seguranca" ? s.alertText : `${widgets.length} cenas e rotinas`;
    return html`<div class="rtop">
        <button class="back" @click=${() => this.openRoom("home")} aria-label="Voltar à casa">${icon(ICONS.back)}</button>
        <b>${v.name}</b><span>${editing ? "a editar" : facts}</span>
        <div class="act">${this.editControls(id, auto)}</div>
      </div>
      ${widgets.length || editing ? html`<div class=${classMap({ grid: true, edit: editing })}>${widgets.map((w) => this.renderWidget(w))}</div>` : html`<p class="empty">Nada para mostrar aqui.</p>`}
      ${this.renderPicker(id, auto)}`;
  }

  private renderRoom(room: Room) {
    const auto = roomWidgets(room);
    const all = this.arranged(room.id, auto);
    const editing = this.editing === room.id;
    const count = (kinds: string[]) => (kinds.length ? all.filter((w) => kinds.includes(w.kind)).length : all.length);
    const cats = CATEGORIES.filter((c) => count(c.kinds) > 0);
    const cat = cats.find((c) => c.id === this.category) ?? cats[0];
    const shown = !editing && cat && cat.kinds.length ? all.filter((w) => cat.kinds.includes(w.kind)) : all;
    const lights = roomLights(room);
    const t = room.temperature ? this.entities[room.temperature]?.state : null;
    const h = room.humidity ? this.entities[room.humidity]?.state : null;
    const facts = [t && t !== "unavailable" ? `${fmt(parseFloat(t))}°` : null, h && h !== "unavailable" ? `${fmt(parseFloat(h), 0)}%` : null, room.floor].filter(Boolean).join(" · ");
    return html`<div class="rtop">
        <button class="back" @click=${() => this.openRoom("home")} aria-label="Voltar à casa">${icon(ICONS.back)}</button>
        <b>${room.name}</b><span>${editing ? "a editar" : facts}</span>
        <div class="act">
          ${lights.length && !editing
            ? html`<button class="pill" @click=${() => this.call("light", "turn_on", lights)}>${icon(ICONS.bulb)} Acender</button>
              <button class="pill pri" @click=${() => this.call("light", "turn_off", lights)}>Apagar</button>`
            : nothing}
          ${this.editControls(room.id, auto)}
        </div>
      </div>
      ${cats.length > 2 && !editing
        ? html`<div class="cats">${cats.map((c) => html`<button class=${classMap({ on: c === cat })} @click=${() => (this.category = c.id)}>${c.name}<em>${count(c.kinds)}</em></button>`)}</div>`
        : nothing}
      <div class=${classMap({ grid: true, edit: editing })}>${shown.map((w) => this.renderWidget(w))}</div>
      ${this.renderPicker(room.id, auto)}`;
  }

  private renderWidget(w: Widget) {
    const s = w.entity ? this.entities[w.entity] : undefined;
    if (w.entity && w.kind !== "weather" && !s) return nothing;
    const body = this.widgetBody(w, s);
    const cls = {
      w: true,
      [w.size]: true,
      on: (body.on ?? false) || this.flash === w.key,
      att: body.att ?? false,
      off: unavailable(s) && w.kind !== "room-lights" && w.kind !== "scenes",
      dragging: this.drag?.key === w.key,
      moving: this.moving === w.key,
    };
    const editing = !!this.editing;
    return html`<div class=${classMap(cls)} style=${body.style ?? ""} data-key=${w.key}
        @pointerdown=${(e: PointerEvent) => this.down(e, w)} @pointermove=${(e: PointerEvent) => this.move(e, w)}
        @pointerup=${(e: PointerEvent) => this.up(e, w)} @pointercancel=${() => this.cancel()} @contextmenu=${(e: Event) => e.preventDefault()}>
      ${body.fill != null ? html`<div class="fill" style=${styleMap({ width: `${body.fill}%`, "--fc": body.color ?? "255,207,138" })}></div>` : nothing}
      ${body.art ?? nothing}
      <span class="nm">${w.name}${body.tag ? html`<em>${body.tag}</em>` : nothing}</span>
      ${body.extra ?? nothing}
      <div class="hero" style=${body.heroStyle ?? ""}>${body.hero}${body.small ? html`<small>${body.small}</small>` : nothing}</div>
      ${editing ? nothing : body.ctl ?? nothing}
      ${editing
        ? html`<button class="rmv" aria-label=${`Esconder ${w.name}`} @click=${() => this.hideWidget(w.key)}>${icon(ICONS.minus)}</button>
          <button class="handle" aria-label=${`Mudar o tamanho de ${w.name}`} @click=${() => this.resizeWidget(w)}>${icon(ICONS.resize)}<b>${w.size.toUpperCase()}</b></button>`
        : nothing}
    </div>`;
  }

  private widgetBody(w: Widget, s?: HassEntity): {
    hero: unknown; small?: string; tag?: string; art?: unknown; fill?: number | null; color?: string; on?: boolean; att?: boolean;
    extra?: unknown; ctl?: unknown; style?: string; heroStyle?: string;
  } {
    const lvl = this.level(w);
    switch (w.kind) {
      case "room-lights": {
        const on = w.entities!.filter((id) => this.entities[id]?.state === "on");
        const c = on.length ? lightColor(this.entities[on[0]]) : "#ffcf8a";
        return {
          hero: lvl ? `${lvl}%` : "Off", small: on.length ? on.map((id) => this.name(id, w.room)).slice(0, 2).join(" e ") : `${w.entities!.length} luz${w.entities!.length > 1 ? "es" : ""}`,
          tag: w.entities!.length > 1 ? `${on.length}/${w.entities!.length} luzes` : undefined,
          art: lamp(lvl ?? 0, c), fill: lvl ? lvl : null, color: rgbOf(c), on: lvl! > 0,
        };
      }
      case "light": {
        const c = lightColor(s);
        return { hero: lvl ? `${lvl}%` : "Off", tag: w.sub && this.view === "home" ? w.sub : undefined, art: lamp(lvl ?? 0, c), fill: lvl ? lvl : null, color: rgbOf(c), on: (lvl ?? 0) > 0, heroStyle: lvl ? `color:${c}` : "" };
      }
      case "cover": {
        const p = lvl ?? 0;
        return { hero: `${p}%`, small: COVER[s!.state] ?? s!.state, art: blind(p), fill: p, color: "170,200,230" };
      }
      case "climate": {
        const t = s!.attributes.temperature as number | undefined;
        const mode = s!.state;
        const modes = ((s!.attributes.hvac_modes as string[]) ?? []).filter((m) => ["heat", "cool", "off", "auto", "heat_cool"].includes(m)).slice(0, 3);
        const color = mode === "cool" ? "#6cc8ff" : mode === "off" ? "#5d646e" : "#ff9f43";
        const cur = s!.attributes.current_temperature as number | undefined;
        const action = ACTION[(s!.attributes.hvac_action as string) ?? mode] ?? HVAC[mode] ?? mode;
        return {
          hero: mode === "off" ? "Off" : t != null ? `${fmt(t)}°` : "—",
          small: [action, cur != null ? `agora ${fmt(cur)}°` : null].filter(Boolean).join(" · "),
          tag: w.sub,
          art: thermo(mode === "off" ? null : t ?? null, color),
          heroStyle: w.size === "l" ? "font-size:calc(var(--u)*7)" : "",
          extra: modes.length > 1
            ? html`<div class="seg">${modes.map((m) => html`<button class=${classMap({ on: m === mode })} @click=${() => this.call("climate", "set_hvac_mode", w.entity!, { hvac_mode: m })}>${HVAC[m]}</button>`)}</div>`
            : nothing,
          ctl: t != null && mode !== "off"
            ? html`<div class="ctl"><button aria-label="Baixar" @click=${() => this.stepTemp(w.entity!, -1)}>${icon(ICONS.minus)}</button><button aria-label="Subir" @click=${() => this.stepTemp(w.entity!, 1)}>${icon(ICONS.plus)}</button></div>`
            : nothing,
        };
      }
      case "weather": {
        const cond = s?.state ?? "";
        const t = s?.attributes.temperature as number | undefined;
        const top = this.warnings[0];
        return {
          hero: t != null ? `${Math.round(t)}°` : "—", small: WEATHER[cond] ?? cond, art: weatherArt(cond),
          extra: top
            ? html`<span class=${`ipma ${top.awarenessLevelID}`}><i></i>Aviso ${LEVELS[top.awarenessLevelID] ?? ""} · ${top.awarenessTypeName.toLowerCase()}${this.warnings.length > 1 ? ` +${this.warnings.length - 1}` : ""}</span>`
            : nothing,
          ctl: this.hourly.length
            ? html`<div class="hrs">${this.hourly.map((f) => html`<span>${new Date(f.datetime).getHours()}h<b>${Math.round(f.temperature)}°</b>${f.precipitation_probability ? `${f.precipitation_probability}%` : ""}</span>`)}</div>`
            : nothing,
        };
      }
      case "lock": {
        const open = s!.state !== "locked";
        return { hero: open ? (s!.state === "unlocked" ? "Destrancada" : s!.state) : "Trancada", small: open ? "tocar para trancar" : "toque longo para abrir", art: lockArt(open), att: s!.state === "unlocked", heroStyle: "font-size:calc(var(--u)*1.85)" };
      }
      case "media": {
        const playing = s!.state === "playing";
        const title = (s!.attributes.media_title as string) ?? (isOn(s) ? "Ligado" : "Desligado");
        const artist = (s!.attributes.media_artist as string) ?? (s!.attributes.app_name as string) ?? "";
        return {
          hero: title, small: artist, tag: w.sub, art: album(s!.attributes.entity_picture as string | undefined), on: playing,
          heroStyle: "font-size:calc(var(--u)*2.4)",
          ctl: isOn(s)
            ? html`<div class="ctl"><button class="pri" aria-label=${playing ? "Pausa" : "Tocar"} @click=${() => this.call("media_player", "media_play_pause", w.entity!)}>${icon(playing ? ICONS.pause : ICONS.play)}</button>
                <button aria-label="Seguinte" @click=${() => this.call("media_player", "media_next_track", w.entity!)}>${icon(ICONS.next)}</button></div>`
            : nothing,
        };
      }
      case "vacuum": {
        const b = s!.attributes.battery_level as number | undefined;
        return { hero: b != null ? `${b}%` : VACUUM[s!.state] ?? s!.state, small: VACUUM[s!.state] ?? s!.state, art: robot(s!.state === "cleaning"), on: s!.state === "cleaning" };
      }
      case "scenes":
        return {
          hero: "",
          extra: html`<div class="scn">${w.entities!.map((id) => html`<button @click=${() => this.call(domainOf(id), "turn_on", id)}>${icon(ICONS.spark)}${this.name(id)}</button>`)}</div>`,
        };
      case "fan":
        return { hero: isOn(s) ? (s!.attributes.percentage != null ? `${s!.attributes.percentage}%` : "On") : "Off", art: fanArt(isOn(s)), on: isOn(s) };
      case "switch":
      case "outlet": {
        const on = isOn(s);
        return { hero: on ? "On" : "Off", art: plugArt(on), on };
      }
      case "binary": {
        const on = s!.state === "on";
        const dc = s!.attributes.device_class as string | undefined;
        const word = dc && ["door", "window", "garage_door", "opening"].includes(dc) ? (on ? "Aberta" : "Fechada") : dc === "motion" || dc === "occupancy" ? (on ? "Movimento" : "Calmo") : on ? "On" : "Off";
        return { hero: word, att: on && !!dc && ["door", "window", "garage_door", "opening", "moisture", "smoke", "gas"].includes(dc), heroStyle: "font-size:calc(var(--u)*2.4)" };
      }
      case "sensor": {
        const unit = (s!.attributes.unit_of_measurement as string) ?? "";
        const n = parseFloat(s!.state);
        const dc = s!.attributes.device_class as string | undefined;
        if (!Number.isNaN(n)) this.historyWanted.add(w.entity!);
        const values = this.history[w.entity!];
        const range = values && values.length > 1 ? `${fmt(Math.min(...values), 0)}–${fmt(Math.max(...values), 0)}` : undefined;
        return {
          hero: Number.isNaN(n) ? s!.state : `${fmt(n)}${unit === "°C" ? "°" : unit === "%" ? "%" : ""}`,
          small: unit && unit !== "°C" && unit !== "%" ? unit : w.sub,
          tag: range,
          art: spark(dc === "humidity" ? "#3db8f5" : dc === "temperature" ? "#ff9f43" : "#5be3a0", values),
        };
      }
      case "scene":
        return { hero: "", art: sceneArt(), extra: html`<span class="go">${this.flash === w.key ? "Ativada" : "Tocar para ativar"}</span>` };
      case "camera": {
        const pic = s!.attributes.entity_picture as string | undefined;
        const t = Math.floor(this.now.getTime() / 10_000);
        return {
          hero: "", tag: w.sub,
          art: pic ? html`<img class="cam" src=${`${pic}${pic.includes("?") ? "&" : "?"}t=${t}`} alt="" loading="lazy" />` : nothing,
        };
      }
    }
  }

  private name(id: string, room?: Room): string {
    for (const r of this.home.rooms) {
      const d = r.devices.find((x) => x.id === id);
      if (d) return d.name;
    }
    const n = (this.entities[id]?.attributes.friendly_name as string) ?? id.split(".")[1];
    return room && n.toLowerCase().startsWith(room.name.toLowerCase() + " ") ? n.slice(room.name.length + 1) : n;
  }

  private stepTemp(id: string, dir: number): void {
    const s = this.entities[id];
    const step = (s?.attributes.target_temp_step as number) ?? 0.5;
    const t = (s?.attributes.temperature as number) ?? 20;
    const min = (s?.attributes.min_temp as number) ?? 7;
    const max = (s?.attributes.max_temp as number) ?? 35;
    this.call("climate", "set_temperature", id, { temperature: Math.max(min, Math.min(max, Math.round((t + dir * step) * 10) / 10)) });
  }

  // ---------- the sheet beside the widgets ----------
  private renderSheet(id: string) {
    const s = this.entities[id];
    if (!s) return nothing;
    const d = domainOf(id);
    const room = this.home.rooms.find((r) => r.devices.some((x) => x.id === id));
    const kind = d === "light" ? "luz" : d === "cover" ? "estore" : d === "climate" ? "clima" : d === "lock" ? "fechadura" : d === "media_player" ? "média" : d === "weather" ? "tempo" : "";
    return html`<div class="scrim" @click=${() => (this.sheet = null)}></div>
      <aside class="sheet" role="dialog" aria-label=${this.name(id, room)}>
        <div class="shd"><span class="k">${[room?.name, kind].filter(Boolean).join(" · ")}</span>
          <button class="x" aria-label="Fechar" @click=${() => (this.sheet = null)}>${icon(ICONS.close)}</button></div>
        <h4>${this.name(id, room)}</h4>
        ${this.sheetBody(id, s)}
      </aside>`;
  }

  private bigSlider(key: string, value: number, color: string, label: string, set: (v: number) => void) {
    const shown = this.drag?.key === key ? this.drag.value : value;
    const at = (e: PointerEvent) => {
      const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
      return Math.round(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)));
    };
    return html`<div class="bigsl" role="slider" aria-label=${label} aria-valuenow=${shown} aria-valuemin="0" aria-valuemax="100"
      @pointerdown=${(e: PointerEvent) => { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); this.drag = { key, value: at(e) }; }}
      @pointermove=${(e: PointerEvent) => { if (this.drag?.key === key && e.buttons) this.drag = { key, value: at(e) }; }}
      @pointerup=${(e: PointerEvent) => { const v = at(e); set(v); this.drag = { key, value: v }; window.setTimeout(() => { if (this.drag?.key === key) this.drag = null; }, 1500); }}>
      <i style=${`width:${shown}%;background:${color}`}></i><b>${shown}%</b></div>`;
  }

  private sheetBody(id: string, s: HassEntity) {
    const d = domainOf(id);
    if (d === "light") {
      const modes = (s.attributes.supported_color_modes as string[]) ?? [];
      const ct = modes.includes("color_temp");
      const color = modes.some((m) => ["hs", "rgb", "rgbw", "rgbww", "xy"].includes(m));
      const c = lightColor(s);
      const minK = (s.attributes.min_color_temp_kelvin as number) ?? 2200;
      const maxK = (s.attributes.max_color_temp_kelvin as number) ?? 6500;
      return html`${modes.some((m) => m !== "onoff") ? this.bigSlider(`sheet-${id}`, brightness(s), `linear-gradient(90deg,${c},#fff3e0)`, "Brilho", (v) => (v ? this.call("light", "turn_on", id, { brightness_pct: v }) : this.call("light", "turn_off", id))) : nothing}
        ${ct ? html`<span class="k">Branco</span><div class="tbar" @click=${(e: MouseEvent) => {
            const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
            const f = (e.clientX - r.left) / r.width;
            this.call("light", "turn_on", id, { color_temp_kelvin: Math.round(minK + f * (maxK - minK)) });
          }}></div>` : nothing}
        ${color ? html`<span class="k">Cores</span><div class="pre">${PRESETS.map((p) => html`<button aria-label=${p} style=${`background:${p}`} class=${classMap({ on: p === c })} @click=${() => this.call("light", "turn_on", id, { rgb_color: hexRgb(p) })}></button>`)}</div>` : nothing}
        <div class="foot"><button class="pill" @click=${() => this.toggle(id)}>${icon(ICONS.power)} ${s.state === "on" ? "Desligar" : "Ligar"}</button></div>`;
    }
    if (d === "cover") {
      const pos = (s.attributes.current_position as number | undefined) ?? (s.state === "open" ? 100 : 0);
      return html`${((s.attributes.supported_features as number) & 4) ? this.bigSlider(`sheet-${id}`, pos, "linear-gradient(90deg,#a9b6c4,#dfe6ee)", "Posição", (v) => this.call("cover", "set_cover_position", id, { position: v })) : nothing}
        <div class="foot"><button class="pill" @click=${() => this.call("cover", "open_cover", id)}>Abrir</button><button class="pill" @click=${() => this.call("cover", "stop_cover", id)}>Parar</button><button class="pill" @click=${() => this.call("cover", "close_cover", id)}>Fechar</button></div>`;
    }
    if (d === "climate") {
      const t = s.attributes.temperature as number | undefined;
      const modes = (s.attributes.hvac_modes as string[]) ?? [];
      return html`<div class="bigtemp">${t != null ? `${fmt(t)}°` : "—"}<small>${ACTION[(s.attributes.hvac_action as string) ?? s.state] ?? ""}${s.attributes.current_temperature != null ? ` · agora ${fmt(s.attributes.current_temperature as number)}°` : ""}</small></div>
        <div class="ctl big"><button aria-label="Baixar" @click=${() => this.stepTemp(id, -1)}>${icon(ICONS.minus)}</button><button aria-label="Subir" @click=${() => this.stepTemp(id, 1)}>${icon(ICONS.plus)}</button></div>
        <span class="k">Modo</span><div class="seg wide">${modes.map((m) => html`<button class=${classMap({ on: m === s.state })} @click=${() => this.call("climate", "set_hvac_mode", id, { hvac_mode: m })}>${HVAC[m] ?? m}</button>`)}</div>`;
    }
    if (d === "lock") {
      const locked = s.state === "locked";
      return html`<div class="bigtemp">${locked ? "Trancada" : s.state === "unlocked" ? "Destrancada" : s.state}</div>
        <div class="foot">${locked
          ? html`<button class="pill warn" @click=${() => { this.call("lock", "unlock", id); this.sheet = null; }}>${icon(ICONS.unlock)} Destrancar</button>`
          : html`<button class="pill pri" @click=${() => this.call("lock", "lock", id)}>${icon(ICONS.lock)} Trancar</button>`}</div>`;
    }
    if (d === "media_player") {
      const vol = Math.round(((s.attributes.volume_level as number | undefined) ?? 0) * 100);
      return html`<div class="bigtemp" style="font-size:calc(var(--u)*2.6)">${(s.attributes.media_title as string) ?? s.state}<small>${(s.attributes.media_artist as string) ?? ""}</small></div>
        ${s.attributes.volume_level != null ? this.bigSlider(`vol-${id}`, vol, "linear-gradient(90deg,#3db8f5,#9be0ff)", "Volume", (v) => this.call("media_player", "volume_set", id, { volume_level: v / 100 })) : nothing}
        <div class="foot"><button class="pill pri" @click=${() => this.call("media_player", "media_play_pause", id)}>${icon(s.state === "playing" ? ICONS.pause : ICONS.play)} ${s.state === "playing" ? "Pausa" : "Tocar"}</button>
          <button class="pill" @click=${() => this.call("media_player", "media_next_track", id)}>${icon(ICONS.next)}</button>
          <button class="pill" @click=${() => this.toggle(id)}>${icon(ICONS.power)}</button></div>`;
    }
    if (d === "camera") {
      const pic = s.attributes.entity_picture as string | undefined;
      return pic ? html`<img class="camlg" src=${`${pic}${pic.includes("?") ? "&" : "?"}t=${Math.floor(this.now.getTime() / 10_000)}`} alt=${this.name(id)} />` : html`<p class="k">Sem imagem</p>`;
    }
    if (d === "weather") {
      const when = (iso: string) => new Date(iso).toLocaleString("pt-PT", { weekday: "short", hour: "2-digit", minute: "2-digit" });
      const t = s.attributes.temperature as number | undefined;
      const extra = [
        s.attributes.humidity != null ? `${s.attributes.humidity}%` : null,
        s.attributes.wind_speed != null ? `vento ${fmt(s.attributes.wind_speed as number, 0)} ${s.attributes.wind_speed_unit ?? ""}` : null,
      ].filter(Boolean);
      return html`<div class="bigtemp">${t != null ? `${Math.round(t)}°` : "—"}<small>${[WEATHER[s.state] ?? s.state, ...extra].join(" · ")}</small></div>
        <div class="hrs">${this.hourly.map((f) => html`<span>${new Date(f.datetime).getHours()}h<b>${Math.round(f.temperature)}°</b>${f.precipitation_probability ? `${f.precipitation_probability}%` : ""}</span>`)}</div>
        ${this.warnings.map((w) => html`<div class=${`warn ${w.awarenessLevelID}`}><b>Aviso ${LEVELS[w.awarenessLevelID] ?? ""} · ${w.awarenessTypeName}</b>
          <span>${when(w.startTime)} → ${when(w.endTime)}</span>${w.text ? html`<p>${w.text}</p>` : nothing}</div>`)}
        ${!this.home.settings?.ipma_area ? html`<p class="hint">Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.</p>` : nothing}`;
    }
    const unit = (s.attributes.unit_of_measurement as string) ?? "";
    return html`<div class="bigtemp">${s.state}${unit ? ` ${unit}` : ""}</div>
      ${["switch", "light", "fan", "input_boolean", "vacuum"].includes(d) ? html`<div class="foot"><button class="pill pri" @click=${() => this.toggle(id)}>${icon(ICONS.power)} ${isOn(s) ? "Desligar" : "Ligar"}</button></div>` : nothing}`;
  }

  static styles = vidroStyles;
}

function hexRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbOf(c: string): string {
  if (c.startsWith("#")) return hexRgb(c).join(",");
  const m = c.match(/\d+/g);
  return m ? m.slice(0, 3).join(",") : "255,207,138";
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-vidro": Pine3Vidro;
  }
}
