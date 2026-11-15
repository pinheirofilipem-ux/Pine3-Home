// Instrumento: the fifth style, a hardware console. Warm grey modules, a monospaced face and orange LEDs.
// Navigation is a bank of lit keys on the left. Casa has a display with the time and scene keys, a rotary dial
// for the thermostat, vertical faders for the lights and blind of a room chosen with keys, and a rocker
// switch per room. The same widgets, gestures, sheet, editing and ambient face as Vidro (it extends it).
import { css, html, nothing, svg } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { Pine3Vidro, WEATHER } from "./vidro";
import { vidroStyles } from "./styles";
import { brightness, domainOf, fmt, roomLights, summary } from "./model";
import type { Room } from "../lib/types";

const KEYS = [
  { id: "home", name: "Casa" },
  { id: "@divisoes", name: "Div." },
  { id: "@clima", name: "Clima" },
  { id: "@seguranca", name: "Seg." },
  { id: "@cenas", name: "Cenas" },
];
const DIAL = 270; // degrees of travel
const T_MIN = 16;
const T_MAX = 30;

@customElement("pine3-instrumento")
export class Pine3Instrumento extends Pine3Vidro {
  @state() private faderRoom: string | null = null;
  @state() private dial: number | null = null; // temperature while the dial turns

  render() {
    if (!this.home) return nothing;
    if (this.ambient) return this.renderAmbient();
    const room = this.home.rooms.find((r) => r.id === this.view);
    const cur = room ? "@divisoes" : this.view;
    const keys = KEYS.filter((k) => k.id === "home" || k.id === "@divisoes" || this.viewWidgets(k.id).length);
    const alerts = summary(this.home, this.entities).alerts;
    return html`<div class=${classMap({ vd: true, instrumento: true, editing: !!this.editing })}>
      <nav class="bank" aria-label="Vistas">
        ${keys.map((k) => html`<button class=${classMap({ key: true, on: k.id === cur })} @click=${() => this.openRoom(k.id)}>
          <span class=${classMap({ led: true, on: k.id === cur, alarm: k.id === "@seguranca" && alerts > 0 })}></span>${k.name}
        </button>`)}
        ${this.settingsButton
          ? html`<button class="key set" @click=${() => this.dispatchEvent(new CustomEvent("pine3-settings", { bubbles: true, composed: true }))}><span class="led"></span>Def.</button>`
          : nothing}
      </nav>
      <main class="main">${room
        ? this.renderRoom(room)
        : this.view === "@divisoes"
          ? this.renderSwitches(true)
          : this.view.startsWith("@")
            ? this.renderView(this.view)
            : this.renderConsole()}</main>
      ${this.sheet ? this.renderSheet(this.sheet) : nothing}
    </div>`;
  }

  private lightRooms(): Room[] {
    return this.home.rooms.filter((r) => !r.hidden && roomLights(r).length);
  }

  private renderConsole() {
    const w = this.home.weather ? this.entities[this.home.weather] : undefined;
    const t = w?.attributes.temperature as number | undefined;
    const top = this.warnings[0];
    const scenes = [...this.home.scenes, ...this.home.scripts].filter((id) => this.entities[id]).slice(0, 3);
    const lock = this.home.rooms.flatMap((r) => r.devices).find((d) => !d.hidden && domainOf(d.id) === "lock");
    const locked = lock ? this.entities[lock.id]?.state === "locked" : true;
    const date = this.now.toLocaleDateString("pt-PT", { weekday: "short", day: "numeric", month: "short" }).replace(/\./g, "");
    return html`<div class="console">
      <section class="mod disp">
        <div class="lab"><span>Hora</span><span>${date}</span></div>
        <b>${this.now.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })}</b>
        <span class="ln">${w ? `${t != null ? `${Math.round(t)}° · ` : ""}${WEATHER[w.state] ?? w.state}` : ""}${top ? ` · aviso ${top.awarenessTypeName.toLowerCase()}` : ""}</span>
        <div class="keys">
          ${scenes.map((id, k) => html`<button class=${classMap({ btn: true, on: this.flash === id })} @click=${() => this.tap({ key: id, kind: "scene", size: "s", name: "", entity: id })}>
            ${k + 1} ${((this.entities[id].attributes.friendly_name as string) ?? id).split(" ")[0]}</button>`)}
          ${lock
            ? html`<button class=${classMap({ btn: true, lockw: !locked })} @click=${() => (locked ? (this.sheet = lock.id) : this.call("lock", "lock", lock.id))}>
                <span class=${classMap({ led: true, g: locked, on: true })}></span>${locked ? "Tranc." : "Porta"}</button>`
            : nothing}
        </div>
      </section>
      ${this.renderKnob()}
      ${this.renderFaders()}
      ${this.renderSwitches(false)}
    </div>`;
  }

  /** The thermostat as a rotary dial: drag around it to set the temperature. */
  private renderKnob() {
    const climate = this.home.rooms.flatMap((r) => r.devices.map((d) => ({ d, r }))).find(({ d }) => !d.hidden && domainOf(d.id) === "climate");
    if (!climate) return html`<section class="mod knob"><div class="lab"><span>Clima</span></div><p class="k">Sem termóstato</p></section>`;
    const s = this.entities[climate.d.id];
    const on = !!s && s.state !== "off";
    const min = (s?.attributes.min_temp as number) ?? T_MIN;
    const max = Math.min((s?.attributes.max_temp as number) ?? T_MAX, min + 14);
    const target = this.dial ?? ((s?.attributes.temperature as number) ?? min);
    const f = Math.max(0, Math.min(1, (target - min) / (max - min)));
    const ang = -DIAL / 2 + f * DIAL;
    const ticks = Array.from({ length: 29 }, (_, k) => {
      const a = ((-DIAL / 2 + (k * DIAL) / 28) * Math.PI) / 180;
      const r2 = k % 4 ? 44 : 41;
      const lit = on && k / 28 <= f;
      return svg`<line x1=${50 + 47 * Math.sin(a)} y1=${50 - 47 * Math.cos(a)} x2=${50 + r2 * Math.sin(a)} y2=${50 - r2 * Math.cos(a)}
        stroke=${lit ? "#ff6a1a" : "#6b6a66"} stroke-width=${k % 4 ? 1 : 1.8} stroke-linecap="round"/>`;
    });
    const step = (s?.attributes.target_temp_step as number) ?? 0.5;
    const toTemp = (e: PointerEvent) => {
      const b = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const a = (Math.atan2(e.clientX - (b.left + b.width / 2), -(e.clientY - (b.top + b.height / 2))) * 180) / Math.PI;
      const g = Math.max(0, Math.min(1, (a + DIAL / 2) / DIAL));
      return Math.round((min + g * (max - min)) / step) * step;
    };
    const modes = ((s?.attributes.hvac_modes as string[]) ?? []).filter((m) => ["cool", "heat", "off", "auto", "heat_cool"].includes(m)).slice(0, 3);
    const names: Record<string, string> = { cool: "Frio", heat: "Calor", off: "Off", auto: "Auto", heat_cool: "Auto" };
    const cur = s?.attributes.current_temperature as number | undefined;
    return html`<section class="mod knob">
      <div class="lab"><span>Clima · ${climate.r.name}${cur != null ? ` · ${fmt(cur)}°` : ""}</span><span class=${classMap({ led: true, on })}></span></div>
      <div class="dialw" role="slider" aria-label="Temperatura" aria-valuenow=${target} aria-valuemin=${min} aria-valuemax=${max}
        @pointerdown=${(e: PointerEvent) => { if (!on) return; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); this.dial = toTemp(e); }}
        @pointermove=${(e: PointerEvent) => { if (this.dial != null && e.buttons) this.dial = toTemp(e); }}
        @pointerup=${(e: PointerEvent) => {
          if (this.dial == null) return;
          const v = toTemp(e);
          this.call("climate", "set_temperature", climate.d.id, { temperature: v });
          window.setTimeout(() => (this.dial = null), 1500);
        }}>
        <svg viewBox="0 0 100 100" aria-hidden="true">${ticks}</svg>
        <div class="kn"><i style=${`transform:rotate(${on ? ang : -DIAL / 2}deg)`}></i></div>
        <div class="ktx"><div>${on ? `${fmt(target)}°` : "off"}<small>${on ? "roda" : "desligado"}</small></div></div>
      </div>
      <div class="keys">${modes.map((m) => html`<button class=${classMap({ btn: true, on: s?.state === m })} @click=${() => this.call("climate", "set_hvac_mode", climate.d.id, { hvac_mode: m })}>${names[m]}</button>`)}</div>
    </section>`;
  }

  /** Faders for the lights and blind of one room, chosen with the keys above them. */
  private renderFaders() {
    const rooms = this.lightRooms();
    const room = rooms.find((r) => r.id === this.faderRoom) ?? rooms[0];
    if (!room) return html`<section class="mod fad"><div class="lab"><span>Faders</span></div></section>`;
    const covers = room.devices.filter((d) => !d.hidden && domainOf(d.id) === "cover" && ((this.entities[d.id]?.attributes.supported_features as number) & 4));
    const chans = [
      ...roomLights(room).map((id) => ({ id, v: brightness(this.entities[id]), n: this.name(id, room), cover: false })),
      ...covers.map((d) => ({ id: d.id, v: (this.entities[d.id]?.attributes.current_position as number) ?? 0, n: d.name, cover: true })),
    ].slice(0, 4);
    const at = (e: PointerEvent) => {
      const b = (e.currentTarget as HTMLElement).getBoundingClientRect();
      return Math.round(Math.max(0, Math.min(100, ((b.bottom - e.clientY) / b.height) * 100)));
    };
    return html`<section class="mod fad">
      <div class="lab"><span>Faders</span><span class="led g on"></span></div>
      <div class="sel">${rooms.map((r) => html`<button class=${classMap({ btn: true, on: r.id === room.id })} @click=${() => (this.faderRoom = r.id)}>${r.name.slice(0, 5)}</button>`)}</div>
      <div class="faders">${chans.map((c) => {
        const key = `fd-${c.id}`;
        const v = this.drag?.key === key ? this.drag.value : c.v;
        return html`<div class="fd"><b>${v}</b>
          <div class="tk" role="slider" aria-label=${c.n} aria-valuenow=${v} aria-valuemin="0" aria-valuemax="100"
            @pointerdown=${(e: PointerEvent) => { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); this.drag = { key, value: at(e) }; }}
            @pointermove=${(e: PointerEvent) => { if (this.drag?.key === key && e.buttons) this.drag = { key, value: at(e) }; }}
            @pointerup=${(e: PointerEvent) => {
              const nv = at(e);
              if (c.cover) this.call("cover", "set_cover_position", c.id, { position: nv });
              else this.call("light", nv ? "turn_on" : "turn_off", c.id, nv ? { brightness_pct: nv } : {});
              this.drag = { key, value: nv };
              window.setTimeout(() => { if (this.drag?.key === key) this.drag = null; }, 1500);
            }}><div class="cap" style=${`bottom:calc((100% - var(--u) * 2.1) * ${v / 100})`}></div></div>
          <span>${c.n}</span></div>`;
      })}</div>
    </section>`;
  }

  /** A rocker switch per room: its lights on or off. Divisões shows them all, larger, and opens the room. */
  private renderSwitches(full: boolean) {
    const rooms = full ? this.home.rooms.filter((r) => !r.hidden && r.devices.some((d) => !d.hidden)) : this.lightRooms().slice(0, 6);
    const lit = summary(this.home, this.entities).lightsOn;
    return html`<section class=${classMap({ mod: true, sw: true, full })}>
      <div class="lab"><span>${full ? "Divisões" : "Luzes"}</span><span>${lit} acesa${lit === 1 ? "" : "s"}</span></div>
      <div class="rows">${rooms.map((r) => {
        const lights = roomLights(r);
        const on = lights.filter((id) => this.entities[id]?.state === "on");
        const max = on.length ? Math.max(...on.map((id) => brightness(this.entities[id]))) : 0;
        return html`<div class="rk">
          <button class=${classMap({ rocker: true, on: on.length > 0 })} aria-label=${`Luzes de ${r.name}`} ?disabled=${!lights.length}
            @click=${() => this.call("light", on.length ? "turn_off" : "turn_on", lights)}><i></i></button>
          <button class="rkn" @click=${() => this.openRoom(r.id)}><b>${r.name}</b><span>${lights.length ? (on.length ? `${max}%` : "off") : `${r.devices.length} disp.`}</span></button>
        </div>`;
      })}</div>
    </section>`;
  }

  static styles = [vidroStyles, css`
    .vd.instrumento {
      --mono: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;
      --card: #3a3a38;
      --rim: inset 0 calc(var(--u) * 0.15) 0 rgba(255, 255, 255, 0.08), inset 0 calc(var(--u) * -0.3) 0 rgba(0, 0, 0, 0.25), 0 calc(var(--u) * 0.4) calc(var(--u) * 1) rgba(0, 0, 0, 0.25);
      --muted: #a9a69d;
      --name: #cfccc3;
      --acc: #ff6a1a;
      --warm: #ff6a1a;
      --well: #4a4a47;
      --line: rgba(255, 255, 255, 0.1);
      --sheet: #333331;
      --on-card: #3f3a35;
      --on-hero: #ff8a45;
      --fg: #e8e6df;
      background: #2b2b2a;
      color: #e8e6df;
    }
    .bank {
      position: absolute;
      z-index: 3;
      left: calc(var(--u) * 1.6);
      top: calc(var(--u) * 1.6);
      bottom: calc(var(--u) * 1.6);
      width: calc(var(--u) * 8.4);
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 0.8);
      padding: calc(var(--u) * 0.8);
      border-radius: calc(var(--u) * 1.2);
      background: #1c1c1b;
      box-sizing: border-box;
    }
    .key {
      flex: 1;
      max-height: calc(var(--u) * 12);
      border-radius: calc(var(--u) * 0.8);
      background: #4a4a47;
      box-shadow: inset 0 calc(var(--u) * -0.3) 0 rgba(0, 0, 0, 0.35);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: calc(var(--u) * 0.5);
      font-family: var(--mono);
      font-size: calc(var(--u) * 0.95);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #cfccc3;
    }
    .key.on {
      background: #5a5a57;
      box-shadow: inset 0 calc(var(--u) * 0.25) 0 rgba(0, 0, 0, 0.35);
      color: #fff;
    }
    .led {
      width: calc(var(--u) * 0.9);
      height: calc(var(--u) * 0.9);
      border-radius: 50%;
      background: #555;
      display: inline-block;
      flex: none;
    }
    .led.on,
    .led.alarm {
      background: #ff6a1a;
      box-shadow: 0 0 calc(var(--u) * 1) #ff6a1a;
    }
    .led.g {
      background: #2f5a3a;
    }
    .led.g.on {
      background: #5be37a;
      box-shadow: 0 0 calc(var(--u) * 1) #5be37a;
    }
    .instrumento .main {
      left: calc(var(--u) * 11.4);
    }
    .instrumento .picker {
      left: calc(var(--u) * 11.4);
      border-radius: calc(var(--u) * 1.2);
    }
    .console {
      display: grid;
      grid-template-columns: 1.05fr 1.15fr 1fr;
      grid-template-rows: 1fr 1.15fr;
      gap: calc(var(--u) * 1.1);
      height: calc(100cqh - var(--u) * 3.2);
    }
    .mod {
      background: #3a3a38;
      border-radius: calc(var(--u) * 1.4);
      padding: calc(var(--u) * 1.4);
      position: relative;
      box-shadow: var(--rim);
      display: flex;
      flex-direction: column;
      min-height: 0;
      gap: calc(var(--u) * 0.8);
    }
    .lab {
      font-family: var(--mono);
      font-size: calc(var(--u) * 0.95);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #a9a69d;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: calc(var(--u) * 1);
    }
    .disp {
      grid-column: 1;
      grid-row: 1;
      background: #1c1c1b;
      justify-content: space-between;
    }
    .disp b {
      font-family: var(--mono);
      font-weight: 500;
      font-size: calc(var(--u) * 6.6);
      letter-spacing: -0.04em;
      color: #ff6a1a;
      text-shadow: 0 0 calc(var(--u) * 1.6) rgba(255, 106, 26, 0.45);
      line-height: 1;
      font-variant-numeric: tabular-nums;
    }
    .ln {
      font-family: var(--mono);
      font-size: calc(var(--u) * 1.05);
      color: #8b8880;
    }
    .keys,
    .sel {
      display: flex;
      gap: calc(var(--u) * 0.5);
      flex-wrap: wrap;
    }
    .btn {
      font-family: var(--mono);
      font-size: calc(var(--u) * 1);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: calc(var(--u) * 0.7) calc(var(--u) * 1);
      border-radius: calc(var(--u) * 0.8);
      background: #4a4a47;
      box-shadow: inset 0 calc(var(--u) * -0.25) 0 rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 0.6);
      color: #e8e6df;
    }
    .btn.on {
      background: #ff6a1a;
      color: #1c1c1b;
      box-shadow: inset 0 calc(var(--u) * 0.2) 0 rgba(0, 0, 0, 0.25);
    }
    .btn.lockw {
      background: #5a2a1a;
    }
    .knob {
      grid-column: 2;
      grid-row: 1 / 3;
      align-items: center;
      justify-content: space-between;
    }
    .knob .lab {
      width: 100%;
    }
    .dialw {
      position: relative;
      width: min(calc(var(--u) * 24), 100%);
      aspect-ratio: 1;
      touch-action: none;
      cursor: grab;
    }
    .dialw svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .kn {
      position: absolute;
      inset: 18%;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 30%, #5b5b58, #2f2f2d 70%);
      box-shadow: 0 calc(var(--u) * 1) calc(var(--u) * 2) rgba(0, 0, 0, 0.5), inset 0 calc(var(--u) * 0.2) calc(var(--u) * 0.2) rgba(255, 255, 255, 0.12);
    }
    .kn i {
      position: absolute;
      left: 50%;
      top: 6%;
      width: calc(var(--u) * 0.6);
      height: 18%;
      margin-left: calc(var(--u) * -0.3);
      border-radius: 99px;
      background: #ff6a1a;
      transform-origin: 50% 245%;
      transition: transform 0.15s;
    }
    .ktx {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      font-family: var(--mono);
      font-size: calc(var(--u) * 3.2);
      color: #e8e6df;
      pointer-events: none;
      text-align: center;
    }
    .ktx small {
      display: block;
      font-size: calc(var(--u) * 1);
      color: #8b8880;
    }
    .sw {
      grid-column: 1;
      grid-row: 2;
    }
    .rows {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: calc(var(--u) * 0.6);
      align-content: start;
      overflow: auto;
    }
    .sw.full .rows {
      grid-template-columns: repeat(auto-fill, minmax(calc(var(--u) * 22), 1fr));
      gap: calc(var(--u) * 1);
    }
    .rk {
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 0.9);
      padding: calc(var(--u) * 0.6);
      border-radius: calc(var(--u) * 0.9);
      background: #323230;
    }
    .sw.full .rk {
      padding: calc(var(--u) * 1.2);
    }
    .rocker {
      width: calc(var(--u) * 2.8);
      height: calc(var(--u) * 4.2);
      border-radius: calc(var(--u) * 0.6);
      background: #242423;
      position: relative;
      flex: none;
      box-shadow: inset 0 calc(var(--u) * 0.2) calc(var(--u) * 0.4) rgba(0, 0, 0, 0.5);
    }
    .rocker i {
      position: absolute;
      left: calc(var(--u) * 0.3);
      right: calc(var(--u) * 0.3);
      height: calc(var(--u) * 1.8);
      border-radius: calc(var(--u) * 0.4);
      background: #5a5a57;
      top: calc(var(--u) * 2.1);
      transition: top 0.12s, background 0.12s;
    }
    .rocker.on i {
      top: calc(var(--u) * 0.3);
      background: #e8e6df;
    }
    .rocker:disabled {
      opacity: 0.35;
    }
    .rkn {
      text-align: left;
      min-width: 0;
    }
    .rkn b {
      display: block;
      font-size: calc(var(--u) * 1.15);
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .rkn span {
      font-family: var(--mono);
      font-size: calc(var(--u) * 0.95);
      color: #a9a69d;
    }
    .fad {
      grid-column: 3;
      grid-row: 1 / 3;
    }
    .faders {
      display: flex;
      justify-content: space-around;
      flex: 1;
      min-height: 0;
      padding-top: calc(var(--u) * 1);
    }
    .fd {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: calc(var(--u) * 0.6);
      font-family: var(--mono);
      font-size: calc(var(--u) * 0.95);
      color: #a9a69d;
      width: calc(var(--u) * 5.6);
    }
    .fd .tk {
      width: calc(var(--u) * 0.8);
      flex: 1;
      border-radius: 99px;
      background: #1c1c1b;
      position: relative;
      touch-action: none;
      cursor: ns-resize;
    }
    .fd .tk::before {
      content: "";
      position: absolute;
      inset: 0 calc(var(--u) * -2.4);
    }
    .fd .cap {
      position: absolute;
      left: 50%;
      width: calc(var(--u) * 4);
      height: calc(var(--u) * 2.1);
      margin-left: calc(var(--u) * -2);
      border-radius: calc(var(--u) * 0.5);
      background: linear-gradient(#e8e6df, #bdbab1);
      box-shadow: 0 calc(var(--u) * 0.4) calc(var(--u) * 0.8) rgba(0, 0, 0, 0.4);
      pointer-events: none;
    }
    .fd .cap::after {
      content: "";
      position: absolute;
      left: calc(var(--u) * 0.6);
      right: calc(var(--u) * 0.6);
      top: 50%;
      height: calc(var(--u) * 0.2);
      background: #ff6a1a;
    }
    .fd b {
      font-size: calc(var(--u) * 1.1);
      color: #e8e6df;
    }
    .fd span {
      white-space: nowrap;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* widgets as modules: monospaced labels, an LED instead of illustrations */
    .instrumento .w {
      border-radius: calc(var(--u) * 1.4);
    }
    .instrumento .w .art {
      display: none;
    }
    .instrumento .w .nm {
      font-family: var(--mono);
      font-size: calc(var(--u) * 0.95);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #a9a69d;
    }
    .instrumento .w .hero {
      font-family: var(--mono);
      font-weight: 500;
      letter-spacing: -0.03em;
    }
    .instrumento .w::after {
      content: "";
      position: absolute;
      right: calc(var(--u) * 1.4);
      bottom: calc(var(--u) * 1.4);
      width: calc(var(--u) * 0.9);
      height: calc(var(--u) * 0.9);
      border-radius: 50%;
      background: #555;
    }
    .instrumento .w.on::after {
      background: #ff6a1a;
      box-shadow: 0 0 calc(var(--u) * 1) #ff6a1a;
    }
    .instrumento .w.att::after {
      background: #ff3b1a;
      box-shadow: 0 0 calc(var(--u) * 1) #ff3b1a;
    }
    .instrumento .w.k-camera::after {
      display: none;
    }
    .instrumento .w .fill {
      background: rgba(255, 106, 26, 0.12);
      border-right: 2px solid #ff6a1a;
    }
    .instrumento .seg button.on,
    .instrumento .cats button.on {
      background: #ff6a1a;
      color: #1c1c1b;
    }
    .instrumento .ctl button.pri,
    .instrumento .pill.pri {
      background: #ff6a1a;
      color: #1c1c1b;
    }
    .instrumento .rtop b {
      font-family: var(--mono);
      font-weight: 400;
      letter-spacing: -0.04em;
    }
    @container (max-width: 760px) {
      .console {
        grid-template-columns: 1fr;
        grid-template-rows: none;
        height: auto;
      }
      .disp,
      .knob,
      .sw,
      .fad {
        grid-column: auto;
        grid-row: auto;
      }
      .fad {
        min-height: calc(var(--u) * 40);
      }
    }
  `];
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-instrumento": Pine3Instrumento;
  }
}
