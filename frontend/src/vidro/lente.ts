// Lente: the eighth style, a lens. Light grey with white cards and one blue accent. Navigation: zoom out (the
// "Todas as vistas" button, or a two-finger pinch) to see every view and room as a small card, and tap one to zoom
// back in; the path stays at the top left (Casa › Sala). Casa: a thin clock, the rooms with a bar for their lights,
// the thermostat, the front door and the scenes. The same widgets, gestures, sheet, editing, settings and ambient
// face as Vidro (it extends it).
import { css, html, nothing, svg } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { keyed } from "lit/directives/keyed.js";
import { Pine3Vidro, WEATHER } from "./vidro";
import { locale, tr, trMap, trn } from "../lib/i18n";
import { vidroStyles } from "./styles";
import { avgBrightness, domainOf, fmt, roomLights, roomLine, summary } from "./model";
import { ICONS } from "./icons";
import type { Room } from "../lib/types";

const icon = (path: string) => svg`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${path} fill="currentColor"/></svg>`;
const NAMES: Record<string, string> = trMap({ home: "Casa", "@divisoes": "Divisões", "@clima": "Clima", "@seguranca": "Segurança", "@cenas": "Cenas" });
const PINCH = 60; // px the two fingers come together to zoom out

@customElement("pine3-lente")
export class Pine3Lente extends Pine3Vidro {
  @state() private overview = false;
  private pinch?: number;

  private go(id: string): void {
    this.overview = false;
    this.openRoom(id);
  }

  // two fingers coming together: zoom out to every view
  private touchStart(e: TouchEvent): void {
    this.pinch = e.touches.length === 2 ? this.spread(e) : undefined;
  }

  private touchMove(e: TouchEvent): void {
    if (this.pinch == null || e.touches.length !== 2 || this.editing) return;
    if (this.pinch - this.spread(e) > PINCH) {
      this.pinch = undefined;
      this.overview = true;
    }
  }

  private spread(e: TouchEvent): number {
    const [a, b] = [e.touches[0], e.touches[1]];
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  render() {
    if (!this.home) return nothing;
    if (this.ambient) return this.renderAmbient();
    const room = this.home.rooms.find((r) => r.id === this.view);
    return html`<div class=${classMap({ vd: true, lente: true, editing: !!this.editing })}
        @touchstart=${(e: TouchEvent) => this.touchStart(e)} @touchmove=${(e: TouchEvent) => this.touchMove(e)}>
      ${this.overview
        ? this.renderOverview()
        : html`<div class="crumb">${this.view === "home"
            ? html`<b>${tr("Casa")}</b>`
            : html`<button @click=${() => this.go("home")}>${tr("Casa")}</button> › ${room ? html`<button @click=${() => this.go("@divisoes")}>${tr("Divisões")}</button> › <b>${room.name}</b>` : html`<b>${NAMES[this.view] ?? ""}</b>`}`}</div>
          ${keyed(this.view, html`<main class="main zin">${room
            ? this.renderRoom(room)
            : this.view === "@divisoes"
              ? this.renderRoomRows(true)
              : this.view.startsWith("@")
                ? this.renderView(this.view)
                : this.renderFront()}</main>`)}
          ${this.editing ? nothing : html`<span class="pinch">${tr("aperta com dois dedos para ver todas as vistas")}</span>`}`}
      ${this.editing
        ? nothing
        : html`<div class="tools">
            ${this.settingsButton
              ? html`<button class="lensbtn round" aria-label=${tr("Definições")} @click=${() => this.dispatchEvent(new CustomEvent("pine3-settings", { bubbles: true, composed: true }))}>${icon(ICONS.gear)}</button>`
              : nothing}
            <button class="lensbtn" @click=${() => (this.overview = !this.overview)}><i>${icon(this.overview ? ICONS.close : ICONS.room)}</i>${this.overview ? tr("Fechar") : tr("Todas as vistas")}</button>
          </div>`}
      ${this.sheet ? this.renderSheet(this.sheet) : nothing}
    </div>`;
  }

  /** Every view and room as a small card: tap one to zoom in. */
  private renderOverview() {
    const s = summary(this.home, this.entities);
    const rooms = this.home.rooms.filter((r) => !r.hidden && r.devices.some((d) => !d.hidden));
    const climate = this.home.rooms.flatMap((r) => r.devices).find((d) => !d.hidden && domainOf(d.id) === "climate");
    const cs = climate ? this.entities[climate.id] : undefined;
    const bars = (rs: Room[]) => rs.map((r) => {
      const v = avgBrightness(roomLights(r), this.entities);
      return html`<i class=${v ? "on" : ""} style=${`height:${20 + v * 0.7}%`}></i>`;
    });
    const cards: Array<{ id: string; name: string; sub: string; ill: unknown }> = [
      { id: "home", name: tr("Casa"), sub: `${trn(s.lightsOn, "{n} luz", "{n} luzes")} · ${this.now.toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" })}`, ill: bars(rooms) },
      { id: "@divisoes", name: tr("Divisões"), sub: trn(rooms.length, "{n} divisão", "{n} divisões"), ill: bars(rooms) },
    ];
    if (this.viewWidgets("@clima").length) cards.push({ id: "@clima", name: tr("Clima"), sub: cs ? (cs.state === "off" ? tr("desligado") : `${fmt((cs.attributes.temperature as number) ?? 0)}°`) : s.temp ?? "", ill: nothing });
    if (this.viewWidgets("@seguranca").length) cards.push({ id: "@seguranca", name: tr("Segurança"), sub: s.alertText, ill: nothing });
    if (this.viewWidgets("@cenas").length) cards.push({ id: "@cenas", name: tr("Cenas"), sub: trn(this.home.scenes.length + this.home.scripts.length, "{n} cena ou rotina", "{n} cenas e rotinas"), ill: nothing });
    for (const r of rooms) {
      const lights = roomLights(r);
      cards.push({
        id: r.id, name: r.name, sub: roomLine(lights.length, lights.filter((id) => this.entities[id]?.state === "on").length, r.devices.length),
        ill: lights.map((id) => {
          const v = this.entities[id]?.state === "on" ? avgBrightness([id], this.entities) : 0;
          return html`<i class=${v ? "on" : ""} style=${`height:${20 + v * 0.7}%`}></i>`;
        }),
      });
    }
    return html`<span class="ovh">${tr("Todas as vistas · toca numa para aproximar")}</span>
      <div class="ov">${cards.map((c, k) => html`<button class=${classMap({ mini: true, cur: c.id === this.view })} style=${`animation-delay:${k * 25}ms`} @click=${() => this.go(c.id)}>
        <b>${c.name}</b><span>${c.sub}</span><div class="ill">${c.ill}</div></button>`)}</div>`;
  }

  /** Casa: the clock, then the rooms, the thermostat, the front door and the scenes. */
  private renderFront() {
    const w = this.home.weather ? this.entities[this.home.weather] : undefined;
    const t = w?.attributes.temperature as number | undefined;
    const top = this.warnings[0];
    const devices = this.home.rooms.flatMap((r) => r.devices.filter((d) => !d.hidden));
    const climate = devices.find((d) => domainOf(d.id) === "climate");
    const lock = devices.find((d) => domainOf(d.id) === "lock");
    const cs = climate ? this.entities[climate.id] : undefined;
    const ls = lock ? this.entities[lock.id] : undefined;
    const scenes = [...this.home.scenes, ...this.home.scripts].filter((id) => this.entities[id]).slice(0, 6);
    const date = this.now.toLocaleDateString(locale(), { weekday: "long", day: "numeric", month: "long" });
    return html`<div class="lhome">
      <div class="hh">
        <b>${this.now.toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" })}</b>
        <span>${date}${w ? ` · ${t != null ? `${Math.round(t)}° ` : ""}${WEATHER[w.state] ?? w.state}` : ""}${top ? html` · <em>${tr("aviso {type}", { type: tr(top.awarenessTypeName).toLowerCase() })}</em>` : nothing}</span>
      </div>
      <div class="tile trooms"><b>${tr("Divisões")}</b>${this.renderRoomRows(false)}</div>
      ${climate && cs
        ? html`<div class="tile">
            <b>${climate.name}</b><span>${cs.state === "off" ? tr("desligado") : tr("agora {t}°", { t: fmt((cs.attributes.current_temperature as number) ?? 0) })}</span>
            <div class="tt">${cs.state === "off" ? "Off" : `${fmt((cs.attributes.temperature as number) ?? 0)}°`}</div>
            <div class="pmh">
              <button aria-label=${tr("Baixar")} ?disabled=${cs.state === "off"} @click=${() => this.stepTemp(climate.id, -1)}>${icon(ICONS.minus)}</button>
              <button aria-label=${tr("Subir")} ?disabled=${cs.state === "off"} @click=${() => this.stepTemp(climate.id, 1)}>${icon(ICONS.plus)}</button>
              <button aria-label=${tr("Mais")} @click=${() => (this.sheet = climate.id)}>…</button>
            </div>
          </div>`
        : html`<div class="tile"><b>${tr("Clima")}</b><span>${summary(this.home, this.entities).temp ?? "—"}</span></div>`}
      ${lock && ls
        ? html`<button class="tile" @click=${() => (ls.state === "locked" ? (this.sheet = lock.id) : this.call("lock", "lock", lock.id))}>
            <b>${lock.name}</b><span>${ls.state === "locked" ? tr("trancada · toque para mais") : tr("destrancada")}</span>
            <div class=${classMap({ tt: true, small: true, alert: ls.state !== "locked" })}>${ls.state === "locked" ? tr("Trancada") : tr("Toca para trancar")}</div>
          </button>`
        : html`<div class="tile"><b>${tr("Segurança")}</b><span>${summary(this.home, this.entities).alertText}</span></div>`}
      <div class="tile wide"><b>${tr("Cenas")}</b>
        <div class="chh">${scenes.map((id) => html`<button class=${classMap({ on: this.flash === id })}
          @click=${() => this.tap({ key: id, kind: "scene", size: "s", name: "", entity: id })}>${(this.entities[id].attributes.friendly_name as string) ?? id}</button>`)}</div>
      </div>
    </div>`;
  }

  /** A row per room: its name (opens it), a bar for its lights (drag), and the level. */
  private renderRoomRows(full: boolean) {
    const rooms = this.home.rooms.filter((r) => !r.hidden && r.devices.some((d) => !d.hidden));
    return html`${full ? html`<div class="rtop"><b>${tr("Divisões")}</b><span>${trn(summary(this.home, this.entities).lightsOn, "{n} luz acesa", "{n} luzes acesas")}</span></div>` : nothing}
      <div class=${classMap({ rows: true, full })}>${rooms.map((r) => {
        const lights = roomLights(r);
        const key = `bar-${r.id}`;
        const v = this.drag?.key === key ? this.drag.value : avgBrightness(lights, this.entities);
        const at = (e: PointerEvent) => {
          const b = (e.currentTarget as HTMLElement).getBoundingClientRect();
          return Math.round(Math.max(0, Math.min(100, ((e.clientX - b.left) / b.width) * 100)));
        };
        return html`<div class="rr">
          <button class="rname" @click=${() => this.go(r.id)}>${r.name}${full ? html`<small>${roomLine(lights.length, lights.filter((id) => this.entities[id]?.state === "on").length, r.devices.length)}</small>` : nothing}</button>
          ${lights.length
            ? html`<div class="bar" role="slider" aria-label=${tr("Luzes de {room}", { room: r.name })} aria-valuenow=${v} aria-valuemin="0" aria-valuemax="100"
                @pointerdown=${(e: PointerEvent) => { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); this.drag = { key, value: at(e) }; }}
                @pointermove=${(e: PointerEvent) => { if (this.drag?.key === key && e.buttons) this.drag = { key, value: at(e) }; }}
                @pointerup=${(e: PointerEvent) => {
                  const nv = at(e);
                  this.call("light", nv ? "turn_on" : "turn_off", lights, nv ? { brightness_pct: nv } : {});
                  this.drag = { key, value: nv };
                  window.setTimeout(() => { if (this.drag?.key === key) this.drag = null; }, 1500);
                }}><i style=${`width:${v}%`}></i></div>
              <span class="lv">${v ? `${v}%` : "off"}</span>`
            : html`<span class="none">${trn(r.devices.length, "{n} dispositivo", "{n} dispositivos")}</span><span></span>`}
        </div>`;
      })}</div>`;
  }

  static styles = [vidroStyles, css`
    .vd.lente {
      --card: #fff;
      --rim: 0 calc(var(--u) * 0.2) calc(var(--u) * 0.6) rgba(20, 24, 33, 0.06);
      --muted: #6a7383;
      --name: #141821;
      --acc: #2a5bd7;
      --warm: #ffb02e;
      --well: #eef0f4;
      --line: rgba(20, 24, 33, 0.1);
      --sheet: #fff;
      --on-card: #fff6e3;
      --on-hero: #8a5a12;
      --fg: #141821;
      background: #e6e9ee;
      color: #141821;
    }
    .lente .main {
      top: calc(var(--u) * 6.4);
      left: calc(var(--u) * 2);
      right: calc(var(--u) * 2);
    }
    .zin {
      animation: zin 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes zin {
      from {
        transform: scale(0.94);
        opacity: 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .zin,
      .mini {
        animation: none !important;
      }
    }
    .crumb {
      position: absolute;
      z-index: 3;
      left: calc(var(--u) * 2);
      top: calc(var(--u) * 2.2);
      font-size: calc(var(--u) * 1.3);
      color: #6a7383;
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 0.5);
    }
    .crumb button {
      color: #6a7383;
    }
    .crumb b {
      color: #141821;
      font-weight: 600;
    }
    .tools {
      position: absolute;
      z-index: 4;
      right: calc(var(--u) * 1.6);
      top: calc(var(--u) * 1.4);
      display: flex;
      gap: calc(var(--u) * 0.6);
    }
    .lensbtn {
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 0.6);
      padding: calc(var(--u) * 0.6) calc(var(--u) * 1.2) calc(var(--u) * 0.6) calc(var(--u) * 0.7);
      border-radius: 99px;
      background: #fff;
      box-shadow: 0 calc(var(--u) * 0.3) calc(var(--u) * 1) rgba(20, 24, 33, 0.12);
      font-weight: 600;
      font-size: calc(var(--u) * 1.2);
    }
    .lensbtn i {
      width: calc(var(--u) * 2.6);
      height: calc(var(--u) * 2.6);
      border-radius: 50%;
      background: #2a5bd7;
      color: #fff;
      display: grid;
      place-items: center;
      font-size: calc(var(--u) * 1.4);
    }
    .lensbtn.round {
      padding: calc(var(--u) * 0.6);
      font-size: calc(var(--u) * 1.8);
    }
    .pinch {
      position: absolute;
      left: 50%;
      bottom: calc(var(--u) * 0.8);
      transform: translateX(-50%);
      font-size: calc(var(--u) * 1.05);
      color: #6a7383;
      white-space: nowrap;
      pointer-events: none;
    }
    /* overview */
    .ovh {
      position: absolute;
      left: calc(var(--u) * 2);
      top: calc(var(--u) * 2.2);
      font-size: calc(var(--u) * 1.3);
      color: #6a7383;
    }
    .ov {
      position: absolute;
      left: calc(var(--u) * 2);
      right: calc(var(--u) * 2);
      top: calc(var(--u) * 6);
      bottom: calc(var(--u) * 2);
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-auto-rows: minmax(calc(var(--u) * 15), 1fr);
      gap: calc(var(--u) * 1.6);
      overflow-y: auto;
    }
    .mini {
      border-radius: calc(var(--u) * 2);
      background: #fff;
      box-shadow: 0 calc(var(--u) * 0.4) calc(var(--u) * 1.6) rgba(20, 24, 33, 0.1);
      padding: calc(var(--u) * 1.6);
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 0.5);
      text-align: left;
      animation: zout 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
    }
    @keyframes zout {
      from {
        transform: scale(1.15);
        opacity: 0;
      }
    }
    .mini:active {
      transform: scale(0.97);
    }
    .mini.cur {
      outline: calc(var(--u) * 0.3) solid #2a5bd7;
    }
    .mini b {
      font-size: calc(var(--u) * 1.8);
      font-weight: 600;
    }
    .mini span {
      font-size: calc(var(--u) * 1.2);
      color: #6a7383;
    }
    .ill {
      margin-top: auto;
      display: flex;
      gap: calc(var(--u) * 0.4);
      align-items: flex-end;
      height: calc(var(--u) * 5);
    }
    .ill i {
      flex: 1;
      border-radius: calc(var(--u) * 0.6);
      background: #eceef2;
    }
    .ill i.on {
      background: #ffd27a;
    }
    /* Casa */
    .lhome {
      display: grid;
      grid-template-columns: 1.2fr 1fr 1fr;
      grid-auto-rows: auto;
      gap: calc(var(--u) * 1.2);
      align-content: start;
    }
    .hh {
      grid-column: 1 / -1;
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: calc(var(--u) * 2);
    }
    .hh b {
      font-weight: 300;
      font-size: calc(var(--u) * 6);
      letter-spacing: -0.05em;
      line-height: 0.9;
      font-variant-numeric: tabular-nums;
    }
    .hh span {
      font-size: calc(var(--u) * 1.4);
      color: #6a7383;
      margin-bottom: calc(var(--u) * 0.6);
    }
    .hh span::first-letter {
      text-transform: uppercase;
    }
    .hh em {
      font-style: normal;
      color: #c2410c;
    }
    .tile {
      border-radius: calc(var(--u) * 1.8);
      background: #fff;
      box-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 0.6) rgba(20, 24, 33, 0.06);
      padding: calc(var(--u) * 1.4);
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 0.6);
      min-width: 0;
      min-height: calc(var(--u) * 16);
      text-align: left;
    }
    .tile > b {
      font-size: calc(var(--u) * 1.6);
      font-weight: 600;
    }
    .tile > span {
      font-size: calc(var(--u) * 1.15);
      color: #6a7383;
    }
    .trooms {
      grid-row: span 2;
    }
    .tile.wide {
      grid-column: 2 / 4;
    }
    .tt {
      font-weight: 300;
      font-size: calc(var(--u) * 5);
      letter-spacing: -0.05em;
      line-height: 1;
      margin-top: auto;
    }
    .tt.small {
      font-size: calc(var(--u) * 2.8);
      color: #1f7a4d;
    }
    .tt.small.alert {
      color: #c2410c;
    }
    .pmh {
      display: flex;
      gap: calc(var(--u) * 0.6);
    }
    .pmh button {
      flex: 1;
      height: calc(var(--u) * 3.6);
      border-radius: 99px;
      background: #eef0f4;
      display: grid;
      place-items: center;
      font-size: calc(var(--u) * 2);
    }
    .pmh button:disabled {
      opacity: 0.4;
    }
    .chh {
      display: flex;
      gap: calc(var(--u) * 0.5);
      flex-wrap: wrap;
    }
    .chh button {
      padding: calc(var(--u) * 0.55) calc(var(--u) * 1.1);
      border-radius: 99px;
      background: #eef0f4;
      font-size: calc(var(--u) * 1.15);
      font-weight: 600;
    }
    .chh button.on {
      background: #2a5bd7;
      color: #fff;
    }
    .rows {
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 0.4);
    }
    .rr {
      display: grid;
      grid-template-columns: minmax(calc(var(--u) * 9), 0.9fr) 2fr calc(var(--u) * 5);
      align-items: center;
      gap: calc(var(--u) * 1);
      padding: calc(var(--u) * 0.6) 0;
    }
    .rows.full .rr {
      background: #fff;
      border-radius: calc(var(--u) * 1.6);
      padding: calc(var(--u) * 1.2) calc(var(--u) * 1.4);
      box-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 0.6) rgba(20, 24, 33, 0.06);
    }
    .rname {
      text-align: left;
      font-size: calc(var(--u) * 1.4);
      font-weight: 600;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .rname small {
      font-weight: 400;
      font-size: calc(var(--u) * 1.05);
      color: #6a7383;
    }
    .rows.full .rname {
      font-size: calc(var(--u) * 1.9);
    }
    .bar {
      height: calc(var(--u) * 2.6);
      border-radius: 99px;
      background: #eceef2;
      position: relative;
      overflow: hidden;
      touch-action: none;
      cursor: ew-resize;
    }
    .bar i {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background: linear-gradient(90deg, #ffd27a, #ffb02e);
      border-radius: 99px;
    }
    .lv {
      font-family: ui-monospace, "SF Mono", Menlo, monospace;
      font-size: calc(var(--u) * 1.1);
      text-align: right;
    }
    .none {
      font-size: calc(var(--u) * 1.05);
      color: #6a7383;
    }
    /* the usual widgets: white cards, blue accent */
    .lente .seg {
      background: #eef0f4;
    }
    .lente .seg button.on,
    .lente .cats button.on,
    .lente .pill.pri,
    .lente .ctl button.pri {
      background: #2a5bd7;
      color: #fff;
      box-shadow: none;
    }
    .lente .ctl button {
      background: #eef0f4;
      box-shadow: none;
    }
    .lente .rtop .back,
    .lente .pill {
      box-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 0.6) rgba(20, 24, 33, 0.08);
    }
    .lente .w .fill {
      background: rgba(255, 176, 46, 0.14);
      border-right: 2px solid rgba(255, 176, 46, 0.6);
    }
    .lente .bigsl {
      background: #eef0f4;
      box-shadow: none;
    }
    .lente .scrim {
      background: rgba(20, 24, 33, 0.3);
    }
    .lente .tchips button.on {
      color: #fff;
    }
    @container (max-width: 760px) {
      .lhome {
        grid-template-columns: 1fr 1fr;
      }
      .trooms,
      .tile.wide {
        grid-column: 1 / -1;
        grid-row: auto;
      }
      .ov {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `];
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-lente": Pine3Lente;
  }
}
