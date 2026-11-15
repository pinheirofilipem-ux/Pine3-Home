// Carteira: the seventh style, a wallet. Coloured tabs are stacked on the right edge like cards in a wallet; the
// card of the current view slides forward and fills the screen in its colour. Casa is a large clock with the
// scenes and the weather, and a row per room with a switch for its lights (the name opens the room).
// The same widgets, gestures, sheet, editing and ambient face as Vidro (it extends it).
import { css, html, nothing, svg } from "lit";
import { customElement } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { keyed } from "lit/directives/keyed.js";
import { Pine3Vidro, WEATHER } from "./vidro";
import { locale, tr, trn, trNames } from "../lib/i18n";
import { vidroStyles } from "./styles";
import { domainOf, fmt, roomLights, roomLine, summary } from "./model";
import { ICONS, roomIcon } from "./icons";

const icon = (path: string) => svg`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${path} fill="currentColor"/></svg>`;
const TABS = trNames([
  { id: "home", name: "Casa", color: "#f6d34a", icon: ICONS.home },
  { id: "@divisoes", name: "Divisões", color: "#9fd8b8", icon: ICONS.room },
  { id: "@clima", name: "Clima", color: "#ff8f6b", icon: ICONS.therm },
  { id: "@seguranca", name: "Segurança", color: "#9cc4f2", icon: ICONS.shield },
  { id: "@cenas", name: "Cenas", color: "#f7a98a", icon: ICONS.spark },
  { id: "@casa3d", name: "Casa 3D", color: "#c9bdf0", icon: ICONS.cube },
]);

@customElement("pine3-carteira")
export class Pine3Carteira extends Pine3Vidro {
  render() {
    if (!this.home) return nothing;
    if (this.ambient) return this.renderAmbient();
    const room = this.home.rooms.find((r) => r.id === this.view);
    const cur = room ? "@divisoes" : this.view;
    const tabs = TABS.filter((t) => t.id === "home" || t.id === "@divisoes" || this.viewAvailable(t.id));
    const color = (TABS.find((t) => t.id === cur) ?? TABS[0]).color;
    return html`<div class=${classMap({ vd: true, carteira: true, editing: !!this.editing })}>
      <nav class="stack" aria-label=${tr("Vistas")}>
        ${tabs.map((t) => html`<button class=${classMap({ wtab: true, on: t.id === cur })} style=${`--c:${t.color}`} @click=${() => this.openRoom(t.id)}>
          ${icon(t.icon)}<span>${t.name}</span></button>`)}
        ${this.settingsButton
          ? html`<button class="wtab gear" style="--c:#d6cfc2" @click=${() => this.dispatchEvent(new CustomEvent("pine3-settings", { bubbles: true, composed: true }))}>
              ${icon(ICONS.gear)}<span>${tr("Definições")}</span></button>`
          : nothing}
      </nav>
      <div class="wcard" style=${`--c:${color}`}>
        ${keyed(cur, html`<main class="main">${room
          ? this.renderRoom(room)
          : this.view === "@divisoes"
            ? this.renderRows(true)
            : this.view.startsWith("@")
              ? this.renderView(this.view)
              : this.renderFront()}</main>`)}
      </div>
      ${this.sheet ? this.renderSheet(this.sheet) : nothing}
    </div>`;
  }

  /** Casa: the clock, the scenes and the weather on the left; the rooms with their switches on the right. */
  private renderFront() {
    const w = this.home.weather ? this.entities[this.home.weather] : undefined;
    const t = w?.attributes.temperature as number | undefined;
    const top = this.warnings[0];
    const scenes = [...this.home.scenes, ...this.home.scripts].filter((id) => this.entities[id]).slice(0, 4);
    return html`<div class="front">
      <div class="l">
        <div class="big">${this.now.toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" })}</div>
        <span class="date">${this.now.toLocaleDateString(locale(), { weekday: "long", day: "numeric", month: "long" })}</span>
        ${scenes.length
          ? html`<div class="pills">${scenes.map((id) => html`<button class=${classMap({ on: this.flash === id })}
              @click=${() => this.tap({ key: id, kind: "scene", size: "s", name: "", entity: id })}>${(this.entities[id].attributes.friendly_name as string) ?? id}</button>`)}</div>`
          : nothing}
        ${w
          ? html`<div class="wxg">${t != null ? `${Math.round(t)}°` : ""}<small>${WEATHER[w.state] ?? w.state}${top ? ` · ${tr("aviso {type}", { type: tr(top.awarenessTypeName).toLowerCase() })}` : ""}</small></div>`
          : nothing}
      </div>
      ${this.renderRows(false)}
    </div>`;
  }

  /** A row per room with a switch for its lights, and the front door; the name opens the room. */
  private renderRows(full: boolean) {
    const rooms = this.home.rooms.filter((r) => !r.hidden && r.devices.some((d) => !d.hidden));
    const lock = this.home.rooms.flatMap((r) => r.devices).find((d) => !d.hidden && domainOf(d.id) === "lock");
    const ls = lock ? this.entities[lock.id] : undefined;
    return html`<div class=${classMap({ rows: true, full })}>
      ${full ? html`<div class="rtop"><b>${tr("Divisões")}</b><span>${trn(summary(this.home, this.entities).lightsOn, "{n} luz acesa", "{n} luzes acesas")}</span></div>` : nothing}
      ${rooms.map((r) => {
        const lights = roomLights(r);
        const on = lights.filter((id) => this.entities[id]?.state === "on").length;
        const tt = r.temperature ? parseFloat(this.entities[r.temperature]?.state ?? "") : NaN;
        return html`<div class="rowg">
          <button class="rn" @click=${() => this.openRoom(r.id)}>${full ? icon(roomIcon(r.icon)) : nothing}<span><b>${r.name}</b>
            <small>${roomLine(lights.length, on, r.devices.length)}${Number.isNaN(tt) ? "" : ` · ${fmt(tt)}°`}</small></span></button>
          ${lights.length
            ? html`<button class=${classMap({ tg: true, on: on > 0 })} role="switch" aria-checked=${on > 0} aria-label=${tr("Luzes de {room}", { room: r.name })}
                @click=${() => this.call("light", on ? "turn_off" : "turn_on", lights)}><i></i></button>`
            : nothing}
        </div>`;
      })}
      ${lock && ls
        ? html`<div class="rowg">
            <span class="rn"><span><b>${lock.name}</b><small>${ls.state === "locked" ? tr("trancada") : tr("destrancada · tocar para trancar")}</small></span></span>
            <button class=${classMap({ tg: true, on: ls.state === "locked" })} role="switch" aria-checked=${ls.state === "locked"} aria-label=${tr("Trancar {name}", { name: lock.name })}
              @click=${() => (ls.state === "locked" ? (this.sheet = lock.id) : this.call("lock", "lock", lock.id))}><i></i></button>
          </div>`
        : nothing}
    </div>`;
  }

  static styles = [vidroStyles, css`
    .vd.carteira {
      --card: rgba(255, 255, 255, 0.55);
      --rim: none;
      --muted: rgba(27, 26, 23, 0.6);
      --name: #1b1a17;
      --acc: #1b1a17;
      --warm: #1b1a17;
      --well: rgba(27, 26, 23, 0.08);
      --line: rgba(27, 26, 23, 0.12);
      --sheet: #f6f2ea;
      --on-card: #1b1a17;
      --on-hero: #fff;
      --fg: #1b1a17;
      background: #e8e2d6;
      color: #1b1a17;
    }
    .stack {
      position: absolute;
      z-index: 2;
      right: calc(var(--u) * 1.4);
      top: calc(var(--u) * 1.4);
      bottom: calc(var(--u) * 1.4);
      width: calc(var(--u) * 10);
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 0.5);
    }
    .wtab {
      flex: 1;
      max-height: calc(var(--u) * 14);
      border-radius: calc(var(--u) * 1.6);
      background: var(--c);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: calc(var(--u) * 0.5);
      padding: 0 calc(var(--u) * 1.2);
      font-weight: 700;
      font-size: calc(var(--u) * 1.15);
      text-align: left;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .wtab .ic {
      font-size: calc(var(--u) * 1.8);
    }
    .wtab.on {
      transform: translateX(calc(var(--u) * -1.2));
      box-shadow: 0 calc(var(--u) * 0.8) calc(var(--u) * 1.6) calc(var(--u) * -0.8) rgba(0, 0, 0, 0.35);
    }
    .wtab.gear {
      flex: 0 0 auto;
      height: calc(var(--u) * 7);
      margin-top: auto;
    }
    .wcard {
      position: absolute;
      left: calc(var(--u) * 1.4);
      right: calc(var(--u) * 13);
      top: calc(var(--u) * 1.4);
      bottom: calc(var(--u) * 1.4);
      border-radius: calc(var(--u) * 2.6);
      background: var(--c);
      box-shadow: 0 calc(var(--u) * 1.4) calc(var(--u) * 3) calc(var(--u) * -1.6) rgba(0, 0, 0, 0.35);
      overflow: hidden;
      transition: background 0.3s;
    }
    .carteira .main {
      inset: 0;
      padding: calc(var(--u) * 2.2);
      animation: gin 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes gin {
      from {
        transform: translateX(calc(var(--u) * 5));
        opacity: 0.3;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .carteira .main {
        animation: none;
      }
    }
    .carteira .picker {
      left: calc(var(--u) * 1.4);
      right: calc(var(--u) * 13);
    }
    .front {
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: calc(var(--u) * 2.4);
      min-height: calc(100cqh - var(--u) * 7.2);
    }
    .l {
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 1);
    }
    .big {
      font-weight: 800;
      font-size: calc(var(--u) * 10);
      letter-spacing: -0.07em;
      line-height: 0.85;
      font-variant-numeric: tabular-nums;
    }
    .date {
      font-size: calc(var(--u) * 1.5);
      font-weight: 600;
      opacity: 0.7;
    }
    .date::first-letter {
      text-transform: uppercase;
    }
    .pills {
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--u) * 0.6);
      margin-top: calc(var(--u) * 1.2);
    }
    .pills button {
      padding: calc(var(--u) * 0.7) calc(var(--u) * 1.3);
      border-radius: 99px;
      background: rgba(27, 26, 23, 0.08);
      font-weight: 700;
      font-size: calc(var(--u) * 1.2);
    }
    .pills button.on {
      background: #1b1a17;
      color: #fff;
    }
    .wxg {
      margin-top: auto;
      font-weight: 700;
      font-size: calc(var(--u) * 3.2);
      letter-spacing: -0.04em;
    }
    .wxg small {
      display: block;
      font-size: calc(var(--u) * 1.3);
      font-weight: 600;
      opacity: 0.65;
      letter-spacing: 0;
    }
    .rows {
      display: flex;
      flex-direction: column;
    }
    .rowg {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: calc(var(--u) * 1);
      padding: calc(var(--u) * 1) 0;
      border-bottom: calc(var(--u) * 0.15) solid rgba(27, 26, 23, 0.12);
    }
    .rn {
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 1);
      text-align: left;
      min-width: 0;
    }
    .rn .ic {
      font-size: calc(var(--u) * 2.4);
    }
    .rn b {
      display: block;
      font-weight: 700;
      font-size: calc(var(--u) * 1.8);
    }
    .rn small {
      display: block;
      font-size: calc(var(--u) * 1.2);
      opacity: 0.6;
    }
    .rows.full .rn b {
      font-size: calc(var(--u) * 2.4);
    }
    .tg {
      width: calc(var(--u) * 6);
      height: calc(var(--u) * 3.4);
      border-radius: 99px;
      background: rgba(27, 26, 23, 0.15);
      position: relative;
      flex: none;
    }
    .tg i {
      position: absolute;
      left: calc(var(--u) * 0.3);
      top: calc(var(--u) * 0.3);
      width: calc(var(--u) * 2.8);
      height: calc(var(--u) * 2.8);
      border-radius: 50%;
      background: #fff;
      transition: left 0.15s;
    }
    .tg.on {
      background: #1b1a17;
    }
    .tg.on i {
      left: calc(var(--u) * 2.9);
    }
    /* widgets on the coloured card: translucent paper, bold numbers, no illustrations */
    .carteira .w {
      box-shadow: none;
      border-radius: calc(var(--u) * 1.8);
    }
    .carteira .w .art {
      display: none;
    }
    .carteira .w .hero {
      font-weight: 700;
      letter-spacing: -0.05em;
      color: inherit !important;
    }
    .carteira .w.on {
      color: #fff;
    }
    .carteira .w.on .nm,
    .carteira .w.on .nm em,
    .carteira .w.on .hero small {
      color: rgba(255, 255, 255, 0.75);
    }
    .carteira .w .fill {
      background: rgba(27, 26, 23, 0.1);
      border-right: 2px solid rgba(27, 26, 23, 0.35);
    }
    .carteira .w.on .fill {
      background: rgba(255, 255, 255, 0.12);
      border-right-color: rgba(255, 255, 255, 0.5);
    }
    .carteira .rtop .back,
    .carteira .pill {
      background: rgba(255, 255, 255, 0.55);
      box-shadow: none;
    }
    .carteira .pill.pri,
    .carteira .seg button.on,
    .carteira .cats button.on,
    .carteira .ctl button.pri {
      background: #1b1a17;
      color: #fff;
    }
    .carteira .w.on .ctl button {
      background: rgba(255, 255, 255, 0.14);
      color: #fff;
    }
    .carteira .w.on .ctl button.pri {
      background: #fff;
      color: #1b1a17;
    }
    .carteira .seg {
      background: rgba(27, 26, 23, 0.08);
    }
    .carteira .ctl button {
      background: rgba(27, 26, 23, 0.08);
      box-shadow: none;
    }
    @container (max-width: 760px) {
      .front {
        grid-template-columns: 1fr;
      }
      .stack {
        width: calc(var(--u) * 7);
      }
      .wtab span {
        display: none;
      }
      .wcard,
      .carteira .picker {
        right: calc(var(--u) * 9.4);
      }
    }
  `];
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-carteira": Pine3Carteira;
  }
}
