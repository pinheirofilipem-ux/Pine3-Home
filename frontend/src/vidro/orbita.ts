// Órbita: the sixth style, a night sky. Casa is a core with the time, and the rooms orbit around it: each grows
// and glows in the colour of its lights as more of them are on; the thermostat and the front door have orbits too.
// Navigation: the hub at the bottom opens a wheel with the views (and the settings). The same widgets, gestures,
// sheet, editing and ambient face as Vidro (it extends it).
import { css, html, nothing, svg } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { Pine3Vidro, WEATHER } from "./vidro";
import { locale, tr, trn, trNames } from "../lib/i18n";
import { vidroStyles } from "./styles";
import { brightness, domainOf, fmt, lightColor, roomLights, roomLine, summary } from "./model";
import { ICONS, roomIcon } from "./icons";
import type { Room } from "../lib/types";

const icon = (path: string) => svg`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${path} fill="currentColor"/></svg>`;
const VIEWS = trNames([
  { id: "home", name: "Casa", icon: ICONS.home },
  { id: "@divisoes", name: "Divisões", icon: ICONS.room },
  { id: "@clima", name: "Clima", icon: ICONS.therm },
  { id: "@seguranca", name: "Segurança", icon: ICONS.shield },
  { id: "@cenas", name: "Cenas", icon: ICONS.spark },
]);

@customElement("pine3-orbita")
export class Pine3Orbita extends Pine3Vidro {
  @state() private wheel = false;

  private get views() {
    return VIEWS.filter((v) => v.id === "home" || v.id === "@divisoes" || this.viewWidgets(v.id).length);
  }

  private go(id: string): void {
    this.wheel = false;
    this.openRoom(id);
  }

  render() {
    if (!this.home) return nothing;
    if (this.ambient) return this.renderAmbient();
    const room = this.home.rooms.find((r) => r.id === this.view);
    const cur = room ? "@divisoes" : this.view;
    const v = VIEWS.find((x) => x.id === cur) ?? VIEWS[0];
    return html`<div class=${classMap({ vd: true, orbita: true, editing: !!this.editing })}>
      <main class="main">${room
        ? this.renderRoom(room)
        : this.view === "@divisoes"
          ? this.renderOrbList()
          : this.view.startsWith("@")
            ? this.renderView(this.view)
            : this.renderSky()}</main>
      ${this.wheel ? this.renderWheel(cur) : nothing}
      ${this.editing
        ? nothing
        : html`<button class="hub" aria-label=${tr("Mudar de vista")} aria-expanded=${this.wheel} @click=${() => (this.wheel = !this.wheel)}>
            <i>${icon(this.wheel ? ICONS.close : v.icon)}</i><span><b>${room ? room.name : v.name}</b><small>${tr("toca para mudar de vista")}</small></span>
          </button>`}
      ${this.sheet ? this.renderSheet(this.sheet) : nothing}
    </div>`;
  }

  /** The views on a half wheel above the hub (and the ⚙ when this dashboard has it). */
  private renderWheel(cur: string) {
    const items: Array<{ id: string; name: string; icon: string }> = [...this.views];
    if (this.settingsButton) items.push({ id: "@settings", name: tr("Definições"), icon: ICONS.gear });
    const n = items.length;
    return html`<div class="radial" @click=${(e: Event) => { if (e.target === e.currentTarget) this.wheel = false; }}>
      ${items.map((it, k) => {
        const a = Math.PI + (n === 1 ? Math.PI / 2 : (k * Math.PI) / (n - 1));
        const x = 50 + 30 * Math.cos(a);
        const y = 88 + 30 * (5 / 3) * Math.sin(a);
        return html`<button class=${classMap({ rb: true, on: it.id === cur })} style=${`left:${x.toFixed(1)}%;top:${y.toFixed(1)}%;animation-delay:${k * 30}ms`}
          @click=${() => (it.id === "@settings"
            ? ((this.wheel = false), this.dispatchEvent(new CustomEvent("pine3-settings", { bubbles: true, composed: true })))
            : this.go(it.id))}>${icon(it.icon)}${it.name}</button>`;
      })}
    </div>`;
  }

  /** Casa: the core and the rooms in orbit. */
  private renderSky() {
    const s = summary(this.home, this.entities);
    const w = this.home.weather ? this.entities[this.home.weather] : undefined;
    const t = w?.attributes.temperature as number | undefined;
    const rooms = this.home.rooms.filter((r) => !r.hidden && r.devices.some((d) => !d.hidden));
    const n = rooms.length;
    const devices = this.home.rooms.flatMap((r) => r.devices.filter((d) => !d.hidden));
    const climate = devices.find((d) => domainOf(d.id) === "climate");
    const lock = devices.find((d) => domainOf(d.id) === "lock");
    const cs = climate ? this.entities[climate.id] : undefined;
    const ls = lock ? this.entities[lock.id] : undefined;
    const top = this.warnings[0];
    return html`<div class="sky">
      <div class="core">
        <b>${this.now.toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" })}</b>
        <span>${this.now.toLocaleDateString(locale(), { weekday: "long" })}${w ? ` · ${t != null ? `${Math.round(t)}° ` : ""}${WEATHER[w.state] ?? w.state}` : ""}</span>
        <span>${s.lightsOn ? trn(s.lightsOn, "{n} luz acesa", "{n} luzes acesas") : tr("tudo apagado")}</span>
        ${top ? html`<span class=${`ipma ${top.awarenessLevelID}`}><i></i>${tr(top.awarenessTypeName).toLowerCase()}</span>` : nothing}
      </div>
      ${this.ring(rooms, climate && cs ? climate.id : null, lock && ls ? lock.id : null)}
    </div>`;
  }

  /** The rooms, the thermostat and the front door evenly around the core, on an ellipse that fits the screen. */
  private ring(rooms: Room[], climateId: string | null, lockId: string | null) {
    type Item = { key: string; render: (x: number, y: number) => unknown };
    const items: Item[] = rooms.map((r) => ({
      key: r.id,
      render: (x, y) => {
        const lights = roomLights(r);
        const on = lights.filter((id) => this.entities[id]?.state === "on");
        const size = Math.min(14, 9 + on.length * 1.5);
        const c = on.length ? lightColor(this.entities[on[0]]) : "#ffcf85";
        const lvl = on.length ? Math.round(on.reduce((acc, id) => acc + brightness(this.entities[id]), 0) / on.length) : 0;
        return html`<button class=${classMap({ orb: true, on: on.length > 0 })} style=${`left:${x}%;top:${y}%;--s:calc(var(--u) * ${size});--c:${c};--g:${0.15 + lvl / 300}`}
          @click=${() => this.openRoom(r.id)} aria-label=${r.name}>
          ${icon(roomIcon(r.icon))}<b>${r.name}</b><span>${roomLine(lights.length, on.length, r.devices.length)}</span>
        </button>`;
      },
    }));
    if (climateId) {
      const cs = this.entities[climateId];
      items.splice(Math.min(1, items.length), 0, {
        key: climateId,
        render: (x, y) => html`<button class=${classMap({ orb: true, ac: cs.state !== "off" })} style=${`left:${x}%;top:${y}%;--s:calc(var(--u) * 8)`} @click=${() => this.openRoom("@clima")}>
          ${icon(ICONS.therm)}<b>${cs.state === "off" ? "Off" : `${fmt((cs.attributes.temperature as number) ?? 0)}°`}</b><span>${tr("clima")}</span></button>`,
      });
    }
    if (lockId) {
      const ls = this.entities[lockId];
      items.push({
        key: lockId,
        render: (x, y) => html`<button class=${classMap({ orb: true, alert: ls.state === "unlocked" })} style=${`left:${x}%;top:${y}%;--s:calc(var(--u) * 8)`}
          @click=${() => (ls.state === "locked" ? (this.sheet = lockId) : this.call("lock", "lock", lockId))}>
          ${icon(ls.state === "locked" ? ICONS.lock : ICONS.unlock)}<b>${tr("Porta")}</b><span>${ls.state === "locked" ? tr("trancada") : tr("trancar")}</span></button>`,
      });
    }
    const n = items.length;
    return items.map((it, k) => {
      // start at the top and go round; x and y in percent of the sky
      const a = -Math.PI / 2 + (k * 2 * Math.PI) / Math.max(n, 1) + (n % 2 ? 0 : Math.PI / n);
      return it.render(+(50 + 36 * Math.cos(a)).toFixed(1), +(50 + 34 * Math.sin(a)).toFixed(1));
    });
  }

  /** Divisões: every room as an orb, in rows. */
  private renderOrbList() {
    const rooms = this.home.rooms.filter((r) => !r.hidden && r.devices.some((d) => !d.hidden));
    return html`<div class="rtop"><b>${tr("Divisões")}</b><span>${trn(summary(this.home, this.entities).lightsOn, "{n} luz acesa", "{n} luzes acesas")}</span></div>
      <div class="orbs">${rooms.map((r) => {
        const lights = roomLights(r);
        const on = lights.filter((id) => this.entities[id]?.state === "on");
        const c = on.length ? lightColor(this.entities[on[0]]) : "#ffcf85";
        const t = r.temperature ? parseFloat(this.entities[r.temperature]?.state ?? "") : NaN;
        return html`<button class=${classMap({ orb: true, flat: true, on: on.length > 0 })} style=${`--c:${c};--g:.3`} @click=${() => this.openRoom(r.id)}>
          ${icon(roomIcon(r.icon))}<b>${r.name}</b><span>${roomLine(lights.length, on.length, r.devices.length)}${Number.isNaN(t) ? "" : ` · ${fmt(t, 0)}°`}</span>
        </button>`;
      })}</div>`;
  }

  static styles = [vidroStyles, css`
    .vd.orbita {
      --card: rgba(255, 255, 255, 0.06);
      --rim: inset 0 0 0 1px rgba(160, 180, 255, 0.16), 0 calc(var(--u) * 1) calc(var(--u) * 3) calc(var(--u) * -1) rgba(0, 0, 10, 0.5);
      --muted: #8d97c9;
      --name: #c9d0f2;
      --acc: #ffb36b;
      --warm: #ffb36b;
      --well: rgba(255, 255, 255, 0.08);
      --line: rgba(160, 180, 255, 0.16);
      --sheet: linear-gradient(180deg, #1d2552, #141a3c);
      --on-card: radial-gradient(120% 120% at 30% 20%, rgba(255, 196, 120, 0.32), rgba(255, 140, 90, 0.1));
      --on-hero: #fff1dc;
      --fg: #e8ecff;
      background: radial-gradient(60% 80% at 50% 45%, #1b2350 0%, #0b1026 60%, #070a18 100%);
      color: #e8ecff;
    }
    .orbita .main {
      left: calc(var(--u) * 3);
      right: calc(var(--u) * 3);
      top: calc(var(--u) * 2.4);
      bottom: 0;
      padding-bottom: calc(var(--u) * 10);
    }
    .orbita .w {
      border-radius: calc(var(--u) * 3);
    }
    .orbita .picker {
      left: calc(var(--u) * 3);
      bottom: calc(var(--u) * 9);
    }
    .sky {
      position: relative;
      height: calc(100cqh - var(--u) * 12.4);
    }
    .core {
      position: absolute;
      left: 50%;
      top: 50%;
      width: calc(var(--u) * 21);
      height: calc(var(--u) * 21);
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: radial-gradient(circle at 40% 35%, #2a3470, #141a3c 70%);
      box-shadow: 0 0 0 calc(var(--u) * 0.2) rgba(160, 180, 255, 0.18), 0 0 calc(var(--u) * 6) rgba(90, 110, 255, 0.25);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: calc(var(--u) * 0.4);
      text-align: center;
    }
    .core b {
      font-weight: 200;
      font-size: calc(var(--u) * 6);
      letter-spacing: -0.05em;
      line-height: 1;
      font-variant-numeric: tabular-nums;
    }
    .core span {
      font-size: calc(var(--u) * 1.15);
      color: #8d97c9;
      max-width: 80%;
    }
    .core .ipma {
      margin: 0;
      align-self: center;
      font-size: calc(var(--u) * 0.95);
    }
    .orb {
      position: absolute;
      width: var(--s, calc(var(--u) * 9));
      height: var(--s, calc(var(--u) * 9));
      transform: translate(-50%, -50%);
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: calc(var(--u) * 0.2);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(160, 180, 255, 0.18);
      transition: width 0.4s, height 0.4s, box-shadow 0.4s, background 0.4s;
      padding: calc(var(--u) * 0.6);
      box-sizing: border-box;
    }
    .orb:active {
      transform: translate(-50%, -50%) scale(0.95);
    }
    .orb .ic {
      font-size: calc(var(--u) * 1.8);
      opacity: 0.85;
    }
    .orb b {
      font-size: calc(var(--u) * 1.3);
      font-weight: 600;
      line-height: 1.1;
    }
    .orb span {
      font-size: calc(var(--u) * 0.95);
      color: #8d97c9;
      line-height: 1.15;
    }
    .orb.on {
      background: radial-gradient(circle at 35% 30%, var(--c), rgba(255, 140, 90, 0.25) 72%);
      border-color: rgba(255, 210, 150, 0.5);
      box-shadow: 0 0 calc(var(--u) * 4) rgba(255, 180, 110, var(--g, 0.35));
      color: #2a1406;
    }
    .orb.on span {
      color: #5a3216;
    }
    .orb.ac {
      background: radial-gradient(circle at 35% 30%, #ff8a5c, #a1361c);
      border: 0;
      color: #fff;
    }
    .orb.ac span {
      color: #ffd5c4;
    }
    .orb.alert {
      border-color: #ff7a66;
      box-shadow: 0 0 calc(var(--u) * 3) rgba(255, 122, 102, 0.4);
    }
    .orbs {
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--u) * 2);
      padding-top: calc(var(--u) * 1);
    }
    .orb.flat {
      position: relative;
      transform: none;
      width: calc(var(--u) * 16);
      height: calc(var(--u) * 16);
    }
    .orb.flat:active {
      transform: scale(0.95);
    }
    .hub {
      position: absolute;
      left: 50%;
      bottom: calc(var(--u) * 1.6);
      transform: translateX(-50%);
      z-index: 6;
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 1);
      padding: calc(var(--u) * 0.6) calc(var(--u) * 1.6) calc(var(--u) * 0.6) calc(var(--u) * 0.6);
      border-radius: 99px;
      background: rgba(20, 26, 60, 0.85);
      border: 1px solid rgba(160, 180, 255, 0.25);
      text-align: left;
    }
    .hub i {
      width: calc(var(--u) * 4.6);
      height: calc(var(--u) * 4.6);
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: linear-gradient(135deg, #ffb36b, #ff7a50);
      color: #1a1020;
      font-size: calc(var(--u) * 2);
    }
    .hub b {
      display: block;
      font-weight: 500;
      font-size: calc(var(--u) * 1.5);
    }
    .hub small {
      display: block;
      font-size: calc(var(--u) * 1);
      color: #8d97c9;
    }
    .radial {
      position: absolute;
      inset: 0;
      z-index: 5;
      background: rgba(5, 8, 20, 0.72);
      animation: fade 0.2s;
    }
    .rb {
      position: absolute;
      width: calc(var(--u) * 9.4);
      height: calc(var(--u) * 9.4);
      transform: translate(-50%, -50%);
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: calc(var(--u) * 0.4);
      background: #1b2350;
      border: 1px solid rgba(160, 180, 255, 0.3);
      font-size: calc(var(--u) * 1.15);
      font-weight: 600;
      animation: pop 0.25s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
    }
    .rb .ic {
      font-size: calc(var(--u) * 2.2);
      color: #ffb36b;
    }
    .rb.on {
      background: linear-gradient(135deg, #ffb36b, #ff7a50);
      color: #1a1020;
    }
    .rb.on .ic {
      color: #1a1020;
    }
    @keyframes pop {
      from {
        transform: translate(-50%, -50%) scale(0.3);
        opacity: 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .rb,
      .radial {
        animation: none;
      }
    }
    .orbita .seg button.on,
    .orbita .cats button.on {
      background: #ffb36b;
      color: #1a1020;
    }
    .orbita .ctl button.pri,
    .orbita .pill.pri {
      background: linear-gradient(135deg, #ffb36b, #ff7a50);
      color: #1a1020;
      box-shadow: none;
    }
    @container (max-width: 760px) {
      .core {
        width: calc(var(--u) * 26);
        height: calc(var(--u) * 26);
      }
    }
  `];
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-orbita": Pine3Orbita;
  }
}
