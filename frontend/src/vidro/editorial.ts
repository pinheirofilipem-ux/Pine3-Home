// Editorial: the fourth style, a magazine page. Paper, serif type and one accent colour (rust). Navigation is a
// table of contents in words on top, the current view in italics, with its page number. Casa is a large clock,
// one sentence about the house and the list of rooms, which open in place with thin line sliders.
// The same widgets, gestures, sheet, editing and ambient face as Vidro (it extends it).
import { css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { Pine3Vidro } from "./vidro";
import { vidroStyles } from "./styles";
import { brightness, domainOf, fmt, roomLights, roomLine, summary } from "./model";
import type { Room } from "../lib/types";

const PAGES = [
  { id: "home", name: "Casa" },
  { id: "@divisoes", name: "Divisões" },
  { id: "@clima", name: "Clima" },
  { id: "@seguranca", name: "Segurança" },
  { id: "@cenas", name: "Cenas" },
];
const WORDS = ["nenhuma", "uma", "duas", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
const LEVELS: Record<string, string> = { yellow: "amarelo", orange: "laranja", red: "vermelho" };

@customElement("pine3-editorial")
export class Pine3Editorial extends Pine3Vidro {
  /** The room opened in place in Casa's list. */
  @state() private open: string | null = null;

  private get pages() {
    return PAGES.filter((p) => p.id === "home" || p.id === "@divisoes" || this.viewWidgets(p.id).length);
  }

  render() {
    if (!this.home) return nothing;
    if (this.ambient) return this.renderAmbient();
    const room = this.home.rooms.find((r) => r.id === this.view);
    const pages = this.pages;
    const cur = room ? "@divisoes" : this.view;
    const n = Math.max(0, pages.findIndex((p) => p.id === cur));
    return html`<div class=${classMap({ vd: true, editorial: true, editing: !!this.editing })}>
      <nav class="toc" aria-label="Índice">
        ${pages.map((p) => html`<button class=${classMap({ on: p.id === cur })} @click=${() => this.openRoom(p.id)}>${p.name}</button>`)}
        <span class="no">N.º ${n + 1} / ${pages.length}</span>
      </nav>
      <main class="main">${room
        ? this.renderRoom(room)
        : this.view === "@divisoes"
          ? html`<div class="rtop"><b>Divisões</b><span>${this.lightsLine()}</span></div>${this.renderList(true)}`
          : this.view.startsWith("@")
            ? this.renderView(this.view)
            : this.renderHome()}</main>
      ${this.sheet ? this.renderSheet(this.sheet) : nothing}
    </div>`;
  }

  private lightsLine(): string {
    const n = summary(this.home, this.entities).lightsOn;
    return n ? `${n} luz${n > 1 ? "es" : ""} acesa${n > 1 ? "s" : ""}` : "tudo apagado";
  }

  /** "A casa está acolhedora: quatro luzes, 21 graus, e a porta da entrada ainda destrancada." */
  private sentence() {
    const s = summary(this.home, this.entities);
    const temps = this.home.rooms
      .map((r) => (r.temperature ? parseFloat(this.entities[r.temperature]?.state ?? "") : NaN))
      .filter((t) => !Number.isNaN(t));
    const t = temps.length ? Math.round(temps.reduce((a, b) => a + b, 0) / temps.length) : null;
    const mood = s.lightsOn >= 4 ? "acolhedora" : s.lightsOn ? "calma" : "às escuras";
    const lights = `${WORDS[s.lightsOn] ?? s.lightsOn} ${s.lightsOn === 1 ? "luz" : "luzes"}`;
    const lock = this.home.rooms.flatMap((r) => r.devices).find((d) => !d.hidden && domainOf(d.id) === "lock");
    const ls = lock ? this.entities[lock.id]?.state : undefined;
    const door = lock && ls
      ? ls === "locked"
        ? html`a ${lock.name.toLowerCase()} trancada`
        : html`a ${lock.name.toLowerCase()} <em>ainda destrancada</em>`
      : null;
    const parts = [lights, t != null ? `${t} graus` : null].filter(Boolean).join(", ");
    return html`A casa está <em>${mood}</em>: ${parts}${door ? html`, e ${door}` : nothing}.`;
  }

  protected renderHome() {
    const time = this.now.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" }).split(":");
    const w = this.home.weather ? this.entities[this.home.weather] : undefined;
    const t = w?.attributes.temperature as number | undefined;
    const top = this.warnings[0];
    const scenes = [...this.home.scenes, ...this.home.scripts].filter((id) => this.entities[id]).slice(0, 4);
    const home = this.home.persons.map((id) => this.entities[id]).filter((p) => p?.state === "home");
    return html`<div class="ed">
      <div class="left">
        <div class="ttl">${time[0]}<em>:</em>${time[1]}</div>
        <div class="sub">${this.sentence()}</div>
        ${scenes.length
          ? html`<div class="scn">${scenes.map((id) => html`<button class=${classMap({ on: this.flash === id })} @click=${() => this.tap({ key: id, kind: "scene", size: "s", name: "", entity: id })}>
              ${((this.entities[id].attributes.friendly_name as string) ?? id).toLowerCase()}</button>`)}</div>`
          : nothing}
        <div class="meta">
          ${w ? html`<div>Lá fora<b>${t != null ? `${Math.round(t)}°, ` : ""}${this.weatherWord(w.state)}</b></div>` : nothing}
          ${top ? html`<div class="warnm">Aviso ${LEVELS[top.awarenessLevelID] ?? ""}<b>${top.awarenessTypeName.toLowerCase()}</b></div>` : nothing}
          ${home.length ? html`<div>Em casa<b>${home.map((p) => ((p!.attributes.friendly_name as string) ?? "").split(" ")[0]).join(", ")}</b></div>` : nothing}
        </div>
      </div>
      ${this.renderList(false)}
    </div>`;
  }

  private weatherWord(state: string): string {
    const W: Record<string, string> = {
      "clear-night": "céu limpo", cloudy: "nublado", fog: "nevoeiro", lightning: "trovoada", "lightning-rainy": "trovoada",
      partlycloudy: "pouco nublado", pouring: "chuva forte", rainy: "chuva", snowy: "neve", sunny: "sol", windy: "vento",
    };
    return W[state] ?? state;
  }

  /** The list of rooms: the name opens it in place, on/off switches its lights. */
  private renderList(full: boolean) {
    const rooms = this.home.rooms.filter((r) => !r.hidden && r.devices.some((d) => !d.hidden));
    return html`<div class=${classMap({ list: true, full })}>${rooms.map((r) => this.renderRow(r))}</div>`;
  }

  private renderRow(r: Room) {
    const lights = roomLights(r);
    const on = lights.filter((id) => this.entities[id]?.state === "on").length;
    const t = r.temperature ? parseFloat(this.entities[r.temperature]?.state ?? "") : NaN;
    const lock = r.devices.find((d) => domainOf(d.id) === "lock");
    const unlocked = lock && this.entities[lock.id]?.state === "unlocked";
    const open = this.open === r.id;
    const sub = `${roomLine(lights.length, on, r.devices.length)}${Number.isNaN(t) ? "" : ` · ${fmt(t, 0)}°`}`;
    return html`<div class=${classMap({ r: true, on: on > 0 })}>
      <div class="h">
        <button class="nmb" aria-expanded=${open} @click=${() => (this.open = open ? null : r.id)}>${r.name}</button>
        <span>${sub}</span>
        ${unlocked
          ? html`<button class="tg warn" @click=${() => this.call("lock", "lock", lock!.id)}>trancar</button>`
          : lights.length
            ? html`<button class="tg" @click=${() => this.call("light", on ? "turn_off" : "turn_on", lights)}>${on ? "on" : "off"}</button>`
            : html`<button class="tg" @click=${() => this.openRoom(r.id)}>abrir</button>`}
      </div>
      ${open
        ? html`<div class="ctrls">
            ${lights.map((id) => this.lineControl(id, r))}
            <button class="more" @click=${() => this.openRoom(r.id)}>ver tudo em ${r.name.toLowerCase()} →</button>
          </div>`
        : nothing}
    </div>`;
  }

  /** A light: its name, its level and a thin line to drag. */
  private lineControl(id: string, r: Room) {
    const s = this.entities[id];
    const key = `line-${id}`;
    const v = this.drag?.key === key ? this.drag.value : brightness(s);
    const at = (e: PointerEvent) => {
      const b = (e.currentTarget as HTMLElement).getBoundingClientRect();
      return Math.round(Math.max(0, Math.min(100, ((e.clientX - b.left) / b.width) * 100)));
    };
    return html`<div class="lc">
      <span>${this.name(id, r)}</span><b>${v ? `${v}%` : "—"}</b>
      <div class="line" role="slider" aria-label=${this.name(id, r)} aria-valuenow=${v} aria-valuemin="0" aria-valuemax="100"
        @pointerdown=${(e: PointerEvent) => { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); this.drag = { key, value: at(e) }; }}
        @pointermove=${(e: PointerEvent) => { if (this.drag?.key === key && e.buttons) this.drag = { key, value: at(e) }; }}
        @pointerup=${(e: PointerEvent) => {
          const nv = at(e);
          this.call("light", nv ? "turn_on" : "turn_off", id, nv ? { brightness_pct: nv } : {});
          this.drag = { key, value: nv };
          window.setTimeout(() => { if (this.drag?.key === key) this.drag = null; }, 1500);
        }}><i style=${`width:${v}%`}></i></div>
    </div>`;
  }

  static styles = [vidroStyles, css`
    .vd.editorial {
      --serif: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif;
      --mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      --card: transparent;
      --rim: none;
      --muted: rgba(20, 17, 13, 0.6);
      --name: #14110d;
      --acc: #c2410c;
      --well: rgba(20, 17, 13, 0.06);
      --line: rgba(20, 17, 13, 0.2);
      --sheet: #f6f2ea;
      --on-card: transparent;
      --on-hero: #c2410c;
      --fg: #14110d;
      background: #f1ece3;
      color: #14110d;
    }
    .toc {
      position: absolute;
      z-index: 3;
      left: calc(var(--u) * 3.4);
      right: calc(var(--u) * 3.4);
      top: calc(var(--u) * 1.8);
      display: flex;
      gap: calc(var(--u) * 2.4);
      align-items: baseline;
      border-bottom: calc(var(--u) * 0.2) solid #14110d;
      padding-bottom: calc(var(--u) * 0.8);
      font-family: var(--serif);
      font-size: calc(var(--u) * 2.2);
      overflow-x: auto;
      scrollbar-width: none;
    }
    .toc button {
      flex: none;
      color: rgba(20, 17, 13, 0.55);
    }
    .toc button.on {
      font-style: italic;
      color: #c2410c;
    }
    .toc .no {
      font-family: var(--mono);
      font-size: calc(var(--u) * 1);
      letter-spacing: 0.1em;
      color: rgba(20, 17, 13, 0.5);
      margin-left: auto;
      flex: none;
    }
    .editorial .main {
      top: calc(var(--u) * 7.6);
      left: calc(var(--u) * 3.4);
      right: calc(var(--u) * 3.4);
    }
    .editorial .picker {
      left: calc(var(--u) * 3.4);
      right: calc(var(--u) * 3.4);
      border-radius: 0;
      background: #f6f2ea;
      box-shadow: 0 calc(var(--u) * -0.2) 0 #14110d;
    }
    /* Casa */
    .ed {
      display: grid;
      grid-template-columns: 1fr 1.25fr;
      gap: calc(var(--u) * 4);
      min-height: calc(100cqh - var(--u) * 10);
    }
    .left {
      display: flex;
      flex-direction: column;
    }
    .ttl {
      font-family: var(--serif);
      font-size: calc(var(--u) * 11);
      line-height: 0.8;
      letter-spacing: -0.02em;
      font-variant-numeric: lining-nums;
    }
    .ttl em,
    .sub em {
      font-style: italic;
      color: #c2410c;
    }
    .sub {
      font-family: var(--serif);
      font-size: calc(var(--u) * 2.4);
      line-height: 1.2;
      margin-top: calc(var(--u) * 1.8);
      max-width: calc(var(--u) * 34);
    }
    .scn {
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--u) * 0.6) calc(var(--u) * 1.6);
      margin-top: auto;
      padding-top: calc(var(--u) * 2);
      font-family: var(--serif);
      font-size: calc(var(--u) * 2.2);
    }
    .ed .scn button {
      background: none;
      box-shadow: none;
      padding: 0;
      border-radius: 0;
      font-weight: 400;
      font-size: inherit;
      border-bottom: 1px solid rgba(20, 17, 13, 0.3);
    }
    .ed .scn button.on {
      font-style: italic;
      color: #c2410c;
      border-color: #c2410c;
    }
    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--u) * 1) calc(var(--u) * 3);
      margin-top: calc(var(--u) * 2);
      font-size: calc(var(--u) * 1.1);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .meta b {
      display: block;
      font-family: var(--serif);
      font-size: calc(var(--u) * 2.4);
      font-weight: 400;
      letter-spacing: 0;
      text-transform: none;
    }
    .meta .warnm {
      color: #c2410c;
    }
    .list {
      display: flex;
      flex-direction: column;
      border-top: calc(var(--u) * 0.2) solid #14110d;
      align-self: start;
    }
    .r {
      padding: calc(var(--u) * 1) 0;
      border-bottom: 1px solid rgba(20, 17, 13, 0.18);
    }
    .h {
      display: grid;
      grid-template-columns: 1fr auto auto;
      align-items: baseline;
      gap: calc(var(--u) * 2);
    }
    .nmb {
      text-align: left;
      font-family: var(--serif);
      font-size: calc(var(--u) * 3);
      line-height: 1;
    }
    .h span {
      font-size: calc(var(--u) * 1.15);
      letter-spacing: 0.04em;
      color: var(--muted);
    }
    .tg {
      font-family: var(--mono);
      font-size: calc(var(--u) * 1.1);
      padding: calc(var(--u) * 0.35) calc(var(--u) * 0.9);
      border: 1px solid #14110d;
      border-radius: 99px;
      min-width: calc(var(--u) * 4);
      text-align: center;
    }
    .r.on .nmb {
      font-style: italic;
      color: #c2410c;
    }
    .r.on .tg {
      background: #14110d;
      color: #f1ece3;
    }
    .tg.warn,
    .r.on .tg.warn {
      background: none;
      border-color: #c2410c;
      color: #c2410c;
    }
    .ctrls {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: calc(var(--u) * 1.6);
      margin-top: calc(var(--u) * 1.2);
    }
    .lc {
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 0.3);
      font-size: calc(var(--u) * 1.1);
    }
    .lc b {
      font-family: var(--serif);
      font-weight: 400;
      font-size: calc(var(--u) * 1.9);
    }
    .line {
      height: calc(var(--u) * 3);
      position: relative;
      touch-action: none;
      cursor: ew-resize;
    }
    .line::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: calc(var(--u) * 0.3);
      margin-top: calc(var(--u) * -0.15);
      background: rgba(20, 17, 13, 0.18);
    }
    .line i {
      position: absolute;
      left: 0;
      top: 50%;
      height: calc(var(--u) * 0.3);
      margin-top: calc(var(--u) * -0.15);
      background: #c2410c;
    }
    .line i::after {
      content: "";
      position: absolute;
      right: calc(var(--u) * -0.9);
      top: calc(var(--u) * -0.8);
      width: calc(var(--u) * 1.9);
      height: calc(var(--u) * 1.9);
      border-radius: 50%;
      background: #c2410c;
    }
    .more {
      grid-column: 1 / -1;
      justify-self: start;
      font-family: var(--serif);
      font-style: italic;
      font-size: calc(var(--u) * 1.6);
      color: #c2410c;
    }
    .list.full .nmb {
      font-size: calc(var(--u) * 3.6);
    }
    /* widgets on paper: no boxes, a rule on top, serif numbers, no illustrations */
    .editorial .w {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      border-top: 1px solid #14110d;
      padding: calc(var(--u) * 1) 0 calc(var(--u) * 1.2);
    }
    .editorial .w .art,
    .editorial .w .spark {
      display: none;
    }
    .editorial .w .nm {
      font-size: calc(var(--u) * 1.1);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-weight: 500;
    }
    .editorial .w .hero {
      font-family: var(--serif);
      font-weight: 400;
      letter-spacing: -0.02em;
      color: #14110d !important;
    }
    .editorial .w.on .hero {
      font-style: italic;
      color: #c2410c !important;
    }
    .editorial .w.att .hero {
      color: #c2410c !important;
    }
    .editorial .w.att {
      box-shadow: none;
      border-top-color: #c2410c;
    }
    .editorial .w .fill {
      top: auto;
      height: calc(var(--u) * 0.3);
      background: #c2410c;
      border: 0;
    }
    .editorial .rtop b {
      font-family: var(--serif);
      font-weight: 400;
    }
    .editorial .rtop .back,
    .editorial .pill {
      background: transparent;
      box-shadow: inset 0 0 0 1px #14110d;
    }
    .editorial .pill.pri,
    .editorial .ctl button.pri {
      background: #14110d;
      color: #f1ece3;
      box-shadow: none;
    }
    .editorial .seg {
      background: transparent;
      box-shadow: inset 0 0 0 1px rgba(20, 17, 13, 0.4);
    }
    .editorial .seg button.on {
      background: #14110d;
      color: #f1ece3;
    }
    .editorial .ctl button {
      background: transparent;
      box-shadow: inset 0 0 0 1px #14110d;
    }
    .editorial .cats button.on {
      background: #14110d;
      color: #f1ece3;
    }
    .editorial .scn button:active {
      background: none;
    }
    .editorial .w .scn button {
      background: none;
      box-shadow: none;
      border-bottom: 1px solid rgba(20, 17, 13, 0.3);
      border-radius: 0;
      padding: 0;
      font-family: var(--serif);
      font-size: calc(var(--u) * 1.8);
    }
    .editorial .sheet {
      border-radius: 0;
      box-shadow: calc(var(--u) * -0.2) 0 0 #14110d, 0 calc(var(--u) * 2) calc(var(--u) * 5) rgba(20, 17, 13, 0.25);
    }
    .editorial .sheet h4,
    .editorial .bigtemp {
      font-family: var(--serif);
      font-weight: 400;
    }
    .editorial .bigsl {
      border-radius: 0;
      background: rgba(20, 17, 13, 0.08);
      box-shadow: none;
    }
    .editorial .scrim {
      background: rgba(241, 236, 227, 0.6);
    }
    .editorial .grid.edit .w {
      outline-color: #c2410c;
    }
    @container (max-width: 760px) {
      .ed {
        grid-template-columns: 1fr;
      }
      .ctrls {
        grid-template-columns: 1fr;
      }
    }
  `];
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-editorial": Pine3Editorial;
  }
}
