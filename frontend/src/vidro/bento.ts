// Bento: the second style. The same widgets, gestures, sheet, editing and ambient face as Vidro, drawn as
// flat colour blocks on warm paper, with big heavy numbers. Navigation: coloured pills on top, one per view
// (the active one black), and a Divisões view that lists the rooms.
import { html, nothing, css } from "lit";
import { customElement } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { Pine3Vidro } from "./vidro";
import { vidroStyles } from "./styles";
import { homeWidgets, roomLights, roomLine, summary, fmt, type Widget } from "./model";
import { ICONS, roomIcon } from "./icons";
import { svg } from "lit";

const icon = (path: string) => svg`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${path} fill="currentColor"/></svg>`;

const PILLS = [
  { id: "home", name: "Casa", color: "#ffd166", icon: ICONS.home },
  { id: "@divisoes", name: "Divisões", color: "#d9f2e3", icon: ICONS.room },
  { id: "@clima", name: "Clima", color: "#ffb08a", icon: ICONS.therm },
  { id: "@seguranca", name: "Segurança", color: "#bfe0ff", icon: ICONS.shield },
  { id: "@cenas", name: "Cenas", color: "#ffd0c2", icon: ICONS.spark },
];
const ROOM_COLORS = ["#ffd166", "#d9f2e3", "#c9b8ff", "#ffd0c2", "#bfe0ff", "#ffb08a", "#e9f5a8"];
const CLOCK: Widget = { key: "clock", kind: "clock", size: "l", name: "" };

@customElement("pine3-bento")
export class Pine3Bento extends Pine3Vidro {
  render() {
    if (!this.home) return nothing;
    if (this.ambient) return this.renderAmbient();
    const room = this.home.rooms.find((r) => r.id === this.view);
    const cls = { vd: true, bento: true, editing: !!this.editing };
    return html`<div class=${classMap(cls)}>
      ${this.renderPills()}
      <main class="main">${room
        ? this.renderRoom(room)
        : this.view === "@divisoes"
          ? this.renderRooms()
          : this.view.startsWith("@")
            ? this.renderView(this.view)
            : this.renderHome()}</main>
      ${this.sheet ? this.renderSheet(this.sheet) : nothing}
    </div>`;
  }

  private renderPills() {
    const inRoom = this.home.rooms.some((r) => r.id === this.view);
    const alerts = summary(this.home, this.entities).alerts;
    const shown = PILLS.filter((p) => p.id === "home" || p.id === "@divisoes" || this.viewWidgets(p.id).length);
    return html`<nav class="bnav" aria-label="Vistas">
      ${shown.map((p) => {
        const on = this.view === p.id || (p.id === "@divisoes" && inRoom);
        return html`<button class=${classMap({ on })} style=${`--c:${p.color}`} @click=${() => this.openRoom(p.id)}>
          ${icon(p.icon)}${p.name}${p.id === "@seguranca" && alerts ? html`<span class="bb">${alerts}</span>` : nothing}
        </button>`;
      })}
      ${this.view === "home" ? html`<span class="btools">${this.editControls("home", [CLOCK, ...homeWidgets(this.home, this.entities)])}</span>` : nothing}
      <span class="clk">${this.now.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })}</span>
    </nav>`;
  }

  protected renderHome() {
    const auto = [CLOCK, ...homeWidgets(this.home, this.entities)];
    const widgets = this.arranged("home", auto);
    const editing = this.editing === "home";
    return html`<div class=${classMap({ grid: true, edit: editing })}>${widgets.map((w) => this.renderWidget(w))}</div>
      ${this.renderPicker("home", auto)}`;
  }

  /** Divisões: every room as a colour block with its lights and temperature. */
  private renderRooms() {
    const rooms = this.home.rooms.filter((r) => !r.hidden && r.devices.some((d) => !d.hidden));
    return html`<div class="grid">${rooms.map((r, i) => {
      const lights = roomLights(r);
      const on = lights.filter((id) => this.entities[id]?.state === "on").length;
      const t = r.temperature ? parseFloat(this.entities[r.temperature]?.state ?? "") : NaN;
      return html`<button class=${classMap({ w: true, s: true, room: true, dim: !on })} style=${`--rc:${ROOM_COLORS[i % ROOM_COLORS.length]}`} @click=${() => this.openRoom(r.id)}>
        <span class="nm">${icon(roomIcon(r.icon))}${Number.isNaN(t) ? nothing : html`<em>${fmt(t)}°</em>`}</span>
        <div class="hero">${r.name}<small>${roomLine(lights.length, on, r.devices.length)}</small></div>
      </button>`;
    })}</div>`;
  }

  static styles = [vidroStyles, css`
    .vd.bento {
      --card: #fff;
      --rim: 0 1px 0 rgba(26, 22, 18, 0.05);
      --muted: rgba(26, 22, 18, 0.6);
      --name: #1a1612;
      --acc: #ff7a50;
      --warm: #ffd166;
      --well: rgba(26, 22, 18, 0.08);
      --line: rgba(26, 22, 18, 0.12);
      --sheet: #fff;
      --on-card: #ffd166;
      --on-hero: #1a1612;
      --fg: #1a1612;
      background: #efe9df;
      color: #1a1612;
    }
    /* navigation: coloured pills, the active one black */
    .bnav {
      position: absolute;
      z-index: 3;
      left: calc(var(--u) * 2);
      right: calc(var(--u) * 2);
      top: calc(var(--u) * 1.6);
      height: calc(var(--u) * 4.4);
      display: flex;
      gap: calc(var(--u) * 0.6);
      align-items: center;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .bnav::-webkit-scrollbar {
      display: none;
    }
    .bnav button {
      flex: none;
      position: relative;
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 0.6);
      height: calc(var(--u) * 3.8);
      padding: 0 calc(var(--u) * 1.5);
      border-radius: 99px;
      font-weight: 700;
      font-size: calc(var(--u) * 1.3);
      background: var(--c);
      color: #1a1612;
    }
    .bnav button .ic {
      font-size: calc(var(--u) * 1.6);
    }
    .bnav button.on {
      background: #1a1612;
      color: #fff;
    }
    .bnav .bb {
      min-width: calc(var(--u) * 1.8);
      height: calc(var(--u) * 1.8);
      border-radius: 99px;
      background: #ff7a50;
      color: #2a0f04;
      display: grid;
      place-items: center;
      font-size: calc(var(--u) * 1);
      padding: 0 calc(var(--u) * 0.4);
      box-sizing: border-box;
    }
    .bnav .clk {
      margin-left: auto;
      flex: none;
      font-weight: 800;
      font-size: calc(var(--u) * 2);
      letter-spacing: -0.03em;
      font-variant-numeric: tabular-nums;
      padding-left: calc(var(--u) * 1);
    }
    .bento .main {
      top: calc(var(--u) * 7.2);
      left: calc(var(--u) * 2);
      right: calc(var(--u) * 2);
    }
    .bento .picker {
      left: calc(var(--u) * 2);
    }
    .bnav .btools {
      margin-left: auto;
      display: flex;
      gap: calc(var(--u) * 0.6);
      flex: none;
    }
    .bnav .btools + .clk {
      margin-left: 0;
    }
    .bnav .btools .pill {
      height: calc(var(--u) * 3.8);
      padding-top: 0;
      padding-bottom: 0;
      font-weight: 700;
      background: #fff;
      color: #1a1612;
    }
    .bnav .btools .pill.icon {
      width: calc(var(--u) * 3.8);
      justify-content: center;
    }
    .bnav .btools .pill.pri {
      background: #1a1612;
      color: #fff;
    }
    .bento .pk {
      background: #efe9df;
      box-shadow: none;
    }
    .bento .w .hero {
      color: inherit !important;
    }
    .bento .rtop .back,
    .bento .pill {
      box-shadow: none;
    }
    .bento .pill.pri {
      background: #1a1612;
      color: #fff;
    }

    /* blocks: flat colour, big heavy numbers, no illustrations */
    .bento .w {
      border-radius: calc(var(--u) * 2.4);
      padding: calc(var(--u) * 1.6);
      box-shadow: var(--rim);
    }
    .bento .w .art {
      display: none;
    }
    .bento .w .nm {
      font-weight: 700;
      font-size: calc(var(--u) * 1.3);
    }
    .bento .w .hero {
      font-weight: 800;
      letter-spacing: -0.06em;
      font-size: calc(var(--u) * 4.4);
    }
    .bento .w .hero small {
      font-weight: 600;
      letter-spacing: 0;
      color: inherit;
      opacity: 0.65;
    }
    .bento .w.l .hero,
    .bento .w.xl .hero {
      font-size: calc(var(--u) * 8);
      line-height: 0.85;
    }
    .bento .w .fill {
      background: rgba(26, 22, 18, 0.08);
      border-right: 2px solid rgba(26, 22, 18, 0.25);
    }
    .bento .w.on .hero {
      color: inherit;
    }
    .bento .k-room-lights.on,
    .bento .k-light.on {
      background: #ffd166;
    }
    .bento .k-room-lights:not(.on),
    .bento .k-light:not(.on) {
      background: #3a342c;
      color: #efe9df;
    }
    .bento .k-room-lights:not(.on) .nm,
    .bento .k-light:not(.on) .nm {
      color: #efe9df;
    }
    .bento .k-clock {
      background: #1a1612;
      color: #f6efe4;
      cursor: default;
    }
    .bento .k-clock .hero {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      font-variant-numeric: tabular-nums;
    }
    .bento .k-clock .hero small::first-letter {
      text-transform: uppercase;
    }
    .bento .k-climate {
      background: #ff7a50;
      color: #2a0f04;
    }
    .bento .k-climate.idle {
      background: #d9d2c6;
      color: #4a443c;
    }
    .bento .k-climate .nm,
    .bento .k-climate .nm em {
      color: inherit;
    }
    .bento .k-weather {
      background: linear-gradient(135deg, #8fc5ff, #5a8fe0);
      color: #fff;
    }
    .bento .k-weather .nm,
    .bento .k-weather .hrs b {
      color: #fff;
    }
    .bento .k-weather .hrs {
      color: rgba(255, 255, 255, 0.8);
    }
    .bento .k-weather .ipma {
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.35);
    }
    .bento .k-cover {
      background: #d9f2e3;
    }
    .bento .k-media {
      background: #c9b8ff;
    }
    .bento .k-media .hero {
      font-size: calc(var(--u) * 2.6) !important;
    }
    .bento .k-lock {
      background: #bfe0ff;
    }
    .bento .w.att {
      background: #ffb08a;
      box-shadow: none;
    }
    .bento .w.att .hero {
      color: #2a0f04;
    }
    .bento .k-scenes,
    .bento .k-scene {
      background: #ffd0c2;
    }
    .bento .k-scene.on {
      background: #1a1612;
      color: #ffd0c2;
    }
    .bento .k-scene.on .nm,
    .bento .k-scene.on .go {
      color: #ffd0c2;
    }
    .bento .k-fan,
    .bento .k-switch,
    .bento .k-outlet {
      background: #fff;
    }
    .bento .k-fan.on,
    .bento .k-switch.on,
    .bento .k-outlet.on {
      background: #e9f5a8;
    }
    .bento .seg {
      background: rgba(26, 22, 18, 0.1);
    }
    .bento .seg button {
      color: inherit;
      font-weight: 600;
    }
    .bento .seg button.on {
      background: #1a1612;
      color: #ff7a50;
    }
    .bento .ctl button {
      background: rgba(26, 22, 18, 0.12);
      box-shadow: none;
    }
    .bento .ctl button.pri {
      background: #1a1612;
      color: #fff;
    }
    .bento .scn button {
      background: rgba(26, 22, 18, 0.1);
      box-shadow: none;
      font-weight: 600;
    }
    .bento .cats button.on {
      background: #1a1612;
      color: #fff;
    }
    /* Divisões */
    .bento .w.room {
      background: var(--rc);
      text-align: left;
      color: #1a1612;
    }
    .bento .w.room.dim {
      background: #fff;
    }
    .bento .w.room .nm {
      font-size: calc(var(--u) * 2.2);
      align-items: center;
    }
    .bento .w.room .nm em {
      font-size: calc(var(--u) * 1.3);
      font-weight: 700;
      color: #1a1612;
    }
    .bento .w.room .hero {
      font-size: calc(var(--u) * 2.6);
      letter-spacing: -0.04em;
      white-space: normal;
    }
    /* the sheet: white paper */
    .bento .sheet {
      box-shadow: 0 calc(var(--u) * 3) calc(var(--u) * 6) calc(var(--u) * -2) rgba(26, 22, 18, 0.35);
    }
    .bento .bigsl {
      background: #efe9df;
      box-shadow: none;
    }
    .bento .scrim {
      background: rgba(26, 22, 18, 0.35);
    }
  `];
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-bento": Pine3Bento;
  }
}
