// Moldura: the third style, a picture frame. Casa is a sunset over hills (dimmer when every light is off) with
// a large thin clock, the weather and a strip of quick buttons for the rooms; the other views open in a light
// panel over the picture. Navigation: swipe sideways, or the arrows at the edges and the dots in the corner.
// The same widgets, gestures, sheet, editing and ambient face as Vidro (it extends it).
import { css, html, nothing, svg } from "lit";
import { customElement } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { Pine3Vidro } from "./vidro";
import { locale, tr, trMap, trn } from "../lib/i18n";
import { vidroStyles } from "./styles";
import { domainOf, fmt, roomLights, roomLine, summary } from "./model";
import { ICONS, roomIcon } from "./icons";

const icon = (path: string) => svg`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${path} fill="currentColor"/></svg>`;
const NAMES: Record<string, string> = trMap({ home: "Casa", "@divisoes": "Divisões", "@clima": "Clima", "@seguranca": "Segurança", "@cenas": "Cenas" });
const SWIPE = 70; // px sideways to change view

const HILLS = svg`<svg viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 22 Q18 8 36 18 T70 14 T100 18 V46 H0Z" fill="#3c3552" opacity=".85"/>
  <path d="M0 30 Q22 18 46 28 T100 26 V46 H0Z" fill="#252a40"/>
  <path d="M0 38 Q30 30 60 36 T100 34 V46 H0Z" fill="#171b2a"/></svg>`;

@customElement("pine3-moldura")
export class Pine3Moldura extends Pine3Vidro {
  private swipe?: { x: number; y: number; id: number };

  /** The views in swipe order (rooms count as Divisões). */
  private get order(): string[] {
    return ["home", "@divisoes", ...["@clima", "@seguranca", "@cenas"].filter((v) => this.viewWidgets(v).length)];
  }

  private get current(): string {
    return this.home.rooms.some((r) => r.id === this.view) ? "@divisoes" : this.view;
  }

  private step(dir: number): void {
    const o = this.order;
    const i = Math.max(0, o.indexOf(this.current));
    this.openRoom(o[(i + dir + o.length) % o.length]);
  }

  private swipeDown(e: PointerEvent): void {
    // only on the picture or the panel's own background: tiles have their own sideways drag
    const t = e.target as HTMLElement;
    if (this.editing || this.sheet || t.closest(".w, button, .sheet, .picker, .bigsl")) return;
    this.swipe = { x: e.clientX, y: e.clientY, id: e.pointerId };
  }

  private swipeUp(e: PointerEvent): void {
    const s = this.swipe;
    this.swipe = undefined;
    if (!s || s.id !== e.pointerId) return;
    const dx = e.clientX - s.x;
    if (Math.abs(dx) > SWIPE && Math.abs(dx) > Math.abs(e.clientY - s.y) * 1.5) this.step(dx < 0 ? 1 : -1);
  }

  render() {
    if (!this.home) return nothing;
    if (this.ambient) return this.renderAmbient();
    const room = this.home.rooms.find((r) => r.id === this.view);
    const lit = summary(this.home, this.entities).lightsOn > 0;
    const isHome = this.view === "home";
    const cls = { vd: true, moldura: true, dim: !lit, editing: !!this.editing };
    const o = this.order;
    const cur = this.current;
    return html`<div class=${classMap(cls)} @pointerdown=${(e: PointerEvent) => this.swipeDown(e)} @pointerup=${(e: PointerEvent) => this.swipeUp(e)}
        @pointercancel=${() => (this.swipe = undefined)}>
      <div class="hills">${HILLS}</div>
      ${isHome
        ? this.renderFrame()
        : html`<div class="panel"><main class="main">${room
            ? this.renderRoom(room)
            : this.view === "@divisoes"
              ? this.renderRoomList()
              : this.renderView(this.view)}</main></div>`}
      <div class="pager">
        <b>${room ? room.name : NAMES[cur] ?? ""}</b>
        <div class="dots">${o.map((v) => html`<button class=${classMap({ on: v === cur })} aria-label=${NAMES[v]} @click=${() => this.openRoom(v)}></button>`)}</div>
        ${this.renderGear("mgear")}
      </div>
      ${this.editing
        ? nothing
        : html`<button class="edge l" aria-label=${tr("Vista anterior")} @click=${() => this.step(-1)}>${icon(ICONS.back)}</button>
          <button class="edge r" aria-label=${tr("Vista seguinte")} @click=${() => this.step(1)}>${icon(ICONS.back)}</button>`}
      ${isHome ? html`<span class="hint">${tr("desliza para o lado para mudar de vista")}</span>` : nothing}
      ${this.sheet ? this.renderSheet(this.sheet) : nothing}
    </div>`;
  }

  /** Casa: the picture, the time, the weather and the quick strip. */
  private renderFrame() {
    const s = summary(this.home, this.entities);
    const w = this.home.weather ? this.entities[this.home.weather] : undefined;
    const t = w?.attributes.temperature as number | undefined;
    const top = this.warnings[0];
    const rooms = this.home.rooms.filter((r) => !r.hidden && roomLights(r).length);
    const climate = this.home.rooms.flatMap((r) => r.devices).find((d) => !d.hidden && domainOf(d.id) === "climate");
    const lock = this.home.rooms.flatMap((r) => r.devices).find((d) => !d.hidden && domainOf(d.id) === "lock");
    const cs = climate ? this.entities[climate.id] : undefined;
    const ls = lock ? this.entities[lock.id] : undefined;
    const lines = [
      s.lightsOn ? trn(s.lightsOn, "{n} luz acesa", "{n} luzes acesas") : tr("luzes apagadas"),
      s.alerts ? s.alertText : null,
    ].filter(Boolean);
    return html`<div class="tl">
        <b>${this.now.toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" })}</b>
        <span>${this.now.toLocaleDateString(locale(), { weekday: "long", day: "numeric", month: "long" })}</span>
      </div>
      <div class="tr">
        ${w ? html`<b>${t != null ? `${Math.round(t)}°` : ""}</b>${this.weatherWord(w.state)}<br />` : nothing}
        ${lines.join(" · ")}
        ${top ? html`<br /><span class=${`ipma ${top.awarenessLevelID}`}><i></i>${tr("Aviso {level}", { level: tr(({ yellow: "amarelo", orange: "laranja", red: "vermelho" } as Record<string, string>)[top.awarenessLevelID] ?? "") })} · ${tr(top.awarenessTypeName).toLowerCase()}</span>` : nothing}
      </div>
      <div class="strip">
        ${rooms.map((r) => {
          const on = roomLights(r).filter((id) => this.entities[id]?.state === "on").length;
          return html`<button class=${classMap({ q: true, on: on > 0 })} @click=${() => this.openRoom(r.id)}>
            <i>${icon(roomIcon(r.icon))}</i><span>${r.name}<small>${on ? trn(on, "{n} luz", "{n} luzes") : tr("apagada")}</small></span>
          </button>`;
        })}
        ${climate && cs
          ? html`<button class=${classMap({ q: true, on: cs.state !== "off" })} @click=${() => this.openRoom("@clima")}>
              <i>${icon(ICONS.therm)}</i><span>${cs.state === "off" ? "Off" : `${fmt((cs.attributes.temperature as number) ?? 0)}°`}<small>${tr("clima")}</small></span>
            </button>`
          : nothing}
        ${lock && ls
          ? html`<button class=${classMap({ q: true, alert: ls.state === "unlocked" })}
                @click=${() => (ls.state === "locked" ? (this.sheet = lock.id) : this.call("lock", "lock", lock.id))}>
              <i>${icon(ls.state === "locked" ? ICONS.lock : ICONS.unlock)}</i><span>${lock.name}<small>${ls.state === "locked" ? tr("trancada") : tr("destrancada · tocar")}</small></span>
            </button>`
          : nothing}
      </div>`;
  }

  private weatherWord(state: string): string {
    const W: Record<string, string> = {
      "clear-night": "Céu limpo", cloudy: "Nublado", fog: "Nevoeiro", lightning: "Trovoada", "lightning-rainy": "Trovoada e chuva",
      partlycloudy: "Pouco nublado", pouring: "Chuva forte", rainy: "Chuva", snowy: "Neve", sunny: "Sol", windy: "Vento",
    };
    return W[state] ? tr(W[state]) : state;
  }

  /** Divisões in the panel: one card per room. */
  private renderRoomList() {
    const rooms = this.home.rooms.filter((r) => !r.hidden && r.devices.some((d) => !d.hidden));
    const on = summary(this.home, this.entities).lightsOn;
    return html`<div class="rtop"><b>${tr("Divisões")}</b><span>${on ? trn(on, "{n} luz acesa", "{n} luzes acesas") : tr("tudo apagado")}</span></div>
      <div class="grid">${rooms.map((r) => {
        const lights = roomLights(r);
        const n = lights.filter((id) => this.entities[id]?.state === "on").length;
        const t = r.temperature ? parseFloat(this.entities[r.temperature]?.state ?? "") : NaN;
        return html`<button class=${classMap({ w: true, s: true, rc: true, on: n > 0 })} @click=${() => this.openRoom(r.id)}>
          <span class="nm">${r.name}${Number.isNaN(t) ? nothing : html`<em>${fmt(t)}°</em>`}</span>
          <div class="hero">${icon(roomIcon(r.icon))}<small>${roomLine(lights.length, n, r.devices.length)}</small></div>
        </button>`;
      })}</div>`;
  }

  static styles = [vidroStyles, css`
    .vd.moldura {
      --card: linear-gradient(180deg, #ffffff, #f8f6f2);
      --rim: inset 0 1px 0 #fff, inset 0 0 0 1px rgba(29, 31, 43, 0.06), 0 calc(var(--u) * 1) calc(var(--u) * 2) calc(var(--u) * -1.4) rgba(30, 30, 50, 0.25);
      --muted: #7a7468;
      --name: #3b3a42;
      --acc: #e8892f;
      --warm: #ffcf85;
      --well: rgba(29, 31, 43, 0.06);
      --line: rgba(29, 31, 43, 0.1);
      --sheet: linear-gradient(180deg, #fffdf9, #f4f0ea);
      --on-card: linear-gradient(180deg, #fff6e6, #ffecd0);
      --on-hero: #8a5a12;
      --fg: #1d1f2b;
      color: #fff;
      background: radial-gradient(60% 40% at 72% 30%, rgba(255, 214, 150, 0.75), transparent 70%),
        linear-gradient(180deg, #f2b27a 0%, #e48a6a 32%, #7c5a8c 58%, #2f3552 76%, #1a1f30 100%);
      transition: background 1.2s;
    }
    .vd.moldura.dim {
      background: radial-gradient(60% 40% at 72% 30%, rgba(255, 214, 150, 0.35), transparent 70%),
        linear-gradient(180deg, #a9765a 0%, #8f5f55 32%, #4d3a5c 58%, #1f2438 76%, #11141f 100%);
    }
    .hills {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 46%;
      pointer-events: none;
    }
    .hills svg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .tl {
      position: absolute;
      left: calc(var(--u) * 3.4);
      top: calc(var(--u) * 3);
      text-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 2) rgba(0, 0, 0, 0.25);
    }
    .tl b {
      display: block;
      font-weight: 200;
      font-size: calc(var(--u) * 11);
      line-height: 0.85;
      letter-spacing: -0.06em;
      font-variant-numeric: tabular-nums;
    }
    .tl span {
      display: block;
      margin-top: calc(var(--u) * 0.8);
      font-size: calc(var(--u) * 1.7);
      opacity: 0.92;
    }
    .tl span::first-letter {
      text-transform: uppercase;
    }
    .tr {
      position: absolute;
      left: calc(var(--u) * 3.6);
      top: calc(var(--u) * 18);
      font-size: calc(var(--u) * 1.5);
      line-height: 1.5;
      text-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 1.6) rgba(0, 0, 0, 0.25);
    }
    .tr b {
      font-weight: 300;
      font-size: calc(var(--u) * 3.6);
      display: block;
      line-height: 1;
    }
    .tr .ipma {
      color: #fff;
      background: rgba(20, 22, 34, 0.35);
      border-color: rgba(255, 255, 255, 0.3);
      text-shadow: none;
    }
    .strip {
      position: absolute;
      left: calc(var(--u) * 3);
      right: calc(var(--u) * 3);
      bottom: calc(var(--u) * 4.4);
      display: flex;
      gap: calc(var(--u) * 0.7);
      padding: calc(var(--u) * 0.8);
      border-radius: 99px;
      background: rgba(20, 22, 34, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.18);
      overflow-x: auto;
      scrollbar-width: none;
      width: fit-content;
      max-width: calc(100% - var(--u) * 6);
      box-sizing: border-box;
    }
    .strip::-webkit-scrollbar {
      display: none;
    }
    .q {
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 0.7);
      padding: calc(var(--u) * 0.5) calc(var(--u) * 1.2) calc(var(--u) * 0.5) calc(var(--u) * 0.5);
      border-radius: 99px;
      background: rgba(255, 255, 255, 0.1);
      font-size: calc(var(--u) * 1.2);
      font-weight: 500;
      white-space: nowrap;
      line-height: 1.2;
      flex: none;
      text-align: left;
    }
    .q i {
      width: calc(var(--u) * 2.8);
      height: calc(var(--u) * 2.8);
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: rgba(255, 255, 255, 0.18);
      font-size: calc(var(--u) * 1.4);
    }
    .q.on i {
      background: #ffcf85;
      color: #1d1f2b;
    }
    .q.alert i {
      background: #ff7a50;
      color: #2a0f04;
    }
    .q small {
      display: block;
      font-size: calc(var(--u) * 1);
      opacity: 0.7;
      font-weight: 400;
    }
    .pager {
      position: absolute;
      right: calc(var(--u) * 3);
      top: calc(var(--u) * 2.4);
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: calc(var(--u) * 0.7);
      text-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 1.4) rgba(0, 0, 0, 0.3);
    }
    .pager b {
      font-weight: 300;
      font-size: calc(var(--u) * 2.2);
      letter-spacing: -0.02em;
    }
    .mgear {
      margin-top: calc(var(--u) * 0.4);
      font-size: calc(var(--u) * 2);
      color: rgba(255, 255, 255, 0.85);
    }
    .dots {
      display: flex;
      gap: calc(var(--u) * 0.6);
    }
    .dots button {
      width: calc(var(--u) * 0.9);
      height: calc(var(--u) * 0.9);
      border-radius: 99px;
      background: rgba(255, 255, 255, 0.45);
      transition: width 0.25s;
    }
    .dots button.on {
      background: #fff;
      width: calc(var(--u) * 2.4);
    }
    .edge {
      position: absolute;
      top: 50%;
      z-index: 3;
      width: calc(var(--u) * 3.4);
      height: calc(var(--u) * 8);
      margin-top: calc(var(--u) * -4);
      display: grid;
      place-items: center;
      color: rgba(255, 255, 255, 0.75);
      font-size: calc(var(--u) * 2.4);
    }
    .edge.l {
      left: calc(var(--u) * 0.3);
    }
    .edge.r {
      right: calc(var(--u) * 0.3);
      transform: scaleX(-1);
    }
    .hint {
      position: absolute;
      left: 50%;
      bottom: calc(var(--u) * 1.4);
      transform: translateX(-50%);
      font-size: calc(var(--u) * 1.05);
      color: rgba(255, 255, 255, 0.7);
      white-space: nowrap;
    }
    /* the light panel over the picture */
    .panel {
      position: absolute;
      left: calc(var(--u) * 5);
      right: calc(var(--u) * 5);
      top: calc(var(--u) * 8.4);
      bottom: calc(var(--u) * 3.4);
      border-radius: calc(var(--u) * 2.6);
      background: rgba(250, 246, 240, 0.94);
      color: var(--fg);
      box-shadow: 0 calc(var(--u) * 2) calc(var(--u) * 5) calc(var(--u) * -2) rgba(0, 0, 0, 0.4);
      overflow: hidden;
      animation: fade 0.3s;
    }
    .moldura .main {
      inset: 0;
      padding: calc(var(--u) * 2);
    }
    .moldura .picker {
      left: calc(var(--u) * 5);
      right: calc(var(--u) * 5);
    }
    .moldura .w.rc {
      text-align: left;
    }
    .moldura .w.rc .hero {
      font-size: calc(var(--u) * 2.4);
      color: var(--muted);
    }
    .moldura .w.rc.on .hero {
      color: #c77a1c;
    }
    .moldura .w.rc .nm em {
      color: var(--fg);
      font-weight: 600;
    }
    .moldura .seg {
      background: rgba(29, 31, 43, 0.07);
    }
    .moldura .cats button.on {
      color: #fff;
    }
    @container (max-width: 760px) {
      .panel {
        left: calc(var(--u) * 1.2);
        right: calc(var(--u) * 1.2);
      }
      .edge {
        display: none;
      }
      .tr {
        top: calc(var(--u) * 22);
      }
    }
  `];
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-moldura": Pine3Moldura;
  }
}
