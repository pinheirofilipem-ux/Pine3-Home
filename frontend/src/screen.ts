// The light page for wall screens (/pine3/ecra): pairs with a code, then talks to Home Assistant with its own token.
import { LitElement, html, css, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import qrcode from "qrcode-generator";
import {
  createConnection,
  createLongLivedTokenAuth,
  subscribeEntities,
  ERR_INVALID_AUTH,
  type Connection,
  type HassEntities,
} from "home-assistant-js-websocket";
import { base } from "./lib/base";
import { pairStatus, startPairing, storeToken, storedToken, type PairStart } from "./lib/pairing";
import { html as shtml } from "lit/static-html.js";
import { STYLE_SELECTOR, styleTag } from "./lib/styles";

import type { Pine3Vidro } from "./vidro/vidro";
import { applyBrightness, bridge, onWallpanel } from "./lib/wallpanel";
import type { Dashboard, Home, Me } from "./lib/types";
import { setLang, tr } from "./lib/i18n";
import "./settings";

type Phase = "starting" | "pairing" | "connecting" | "ready" | "error";
const POLL_MS = 2000;
const PANEL_PATH = "/pine3-home";

@customElement("pine3-screen")
export class Pine3Screen extends LitElement {
  @state() private phase: Phase = "starting";
  @state() private pair?: PairStart;
  @state() private error = "";
  @state() private errorDetail = "";
  @state() private me?: Me;
  @state() private home?: Home;
  @state() private entities: HassEntities = {};
  @state() private now = new Date();
  private conn?: Connection;
  private pollTimer?: number;
  private clockTimer?: number;
  private unsubs: Array<() => void> = [];
  @state() private ambient = false;
  /** The settings: "pin" while asking for the PIN, "open" once it was right. */
  @state() private settings: "closed" | "pin" | "open" = "closed";
  @state() private pin = "";
  @state() private pinError = "";
  /** The settings section the ⚙ (or "Editar planta") opens at. */
  private settingsStart = "aparencia";
  @state() private pinBusy = false;
  @state() private dashboards: Dashboard[] = [];
  @state() private settingsDash = "";
  /** Until when this connection may change the settings (the PIN was right). */
  @state() private elevatedUntil = 0;
  private lastActivity = Date.now();
  private idleTimer?: number;
  private offWallpanel?: () => void;
  private onActivity = (e: Event) => this.activity(e);

  connectedCallback(): void {
    super.connectedCallback();
    this.clockTimer = window.setInterval(() => (this.now = new Date()), 15_000);
    // any touch counts as activity; the first touch on the ambient face only wakes the dashboard
    window.addEventListener("pointerdown", this.onActivity, true);
    window.addEventListener("keydown", this.onActivity, true);
    this.idleTimer = window.setInterval(() => this.checkIdle(), 5000);
    this.offWallpanel = onWallpanel((type) => {
      if (type === "sleep") {
        // the screen went off: be on Casa when it comes back
        this.ambient = false;
        this.vidro?.reset();
      }
      this.activity();
    });
    this.addEventListener("pine3-settings", (e) => {
      this.settingsStart = (e as CustomEvent<{ section?: string } | null>).detail?.section ?? "aparencia";
      void this.askSettings();
    });
    // the PIN can also be typed on a keyboard (a PC)
    window.addEventListener("keydown", this.onPinKey);
    this.addEventListener("pine3-settings-close", () => (this.settings = "closed"));
    this.addEventListener("pine3-dashboards", (e) => this.onDashboards((e as CustomEvent<Dashboard[]>).detail));
    this.addEventListener("pine3-dashboard-select", (e) => (this.settingsDash = (e as CustomEvent<string>).detail));
    const token = storedToken();
    if (token) void this.connect(token);
    else void this.beginPairing();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.clockTimer);
    clearInterval(this.idleTimer);
    window.removeEventListener("pointerdown", this.onActivity, true);
    window.removeEventListener("keydown", this.onActivity, true);
    window.removeEventListener("keydown", this.onPinKey);
    this.offWallpanel?.();
    clearTimeout(this.pollTimer);
    this.teardown();
  }

  private teardown(): void {
    this.unsubs.forEach((u) => u());
    this.unsubs = [];
    this.conn?.close();
    this.conn = undefined;
  }

  // ---------- ambient face ----------
  private get vidro(): Pine3Vidro | null {
    return this.renderRoot.querySelector<Pine3Vidro>(STYLE_SELECTOR);
  }

  private activity(e?: Event): void {
    this.lastActivity = Date.now();
    if (this.ambient) {
      this.ambient = false;
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  }

  private checkIdle(): void {
    if (this.phase !== "ready" || this.ambient || !this.me || this.settings !== "closed") return;
    const after = this.me.dashboard.ambient_after ?? 2;
    if (!after || this.vidro?.busy) return;
    if (Date.now() - this.lastActivity > after * 60_000) {
      this.ambient = true;
      this.vidro?.reset();
    }
  }

  protected updated(): void {
    const sun = this.entities["sun.sun"]?.state;
    applyBrightness(this.ambient, this.me?.dashboard.ambient_brightness, sun ? sun === "below_horizon" : null);
  }

  // ---------- pairing ----------
  private async beginPairing(): Promise<void> {
    clearTimeout(this.pollTimer);
    this.phase = "pairing";
    this.pair = undefined;
    try {
      this.pair = await startPairing();
      this.poll();
    } catch (err) {
      this.error = (err as Error).message === "too_many" ? tr("Há demasiados códigos à espera. Tenta daqui a pouco.") : tr("Não foi possível pedir um código.");
      this.pollTimer = window.setTimeout(() => this.beginPairing(), 10_000);
    }
  }

  private poll(): void {
    this.pollTimer = window.setTimeout(async () => {
      if (!this.pair) return;
      try {
        const s = await pairStatus(this.pair);
        if (s.status === "approved") {
          storeToken(s.token);
          void this.connect(s.token);
          return;
        }
        if (s.status === "expired") {
          void this.beginPairing();
          return;
        }
      } catch {
        /* Home Assistant restarting: keep asking */
      }
      this.poll();
    }, POLL_MS);
  }

  // ---------- connection ----------
  private async connect(token: string): Promise<void> {
    this.phase = "connecting";
    this.teardown();
    try {
      const conn = await createConnection({ auth: createLongLivedTokenAuth(location.origin, token) });
      this.conn = conn;
      this.me = await conn.sendMessagePromise<Me>({ type: "pine3_home/me" });
      this.home = await conn.sendMessagePromise<Home>({ type: "pine3_home/home" });
      this.unsubs.push(subscribeEntities(conn, (e) => (this.entities = e)));
      // A fresh home model arrives whenever the house or the dashboards change. The screen's dashboard may have
      // changed in the panel too, so ask again who this screen is. (Not subscribe_events: Home Assistant only lets
      // administrators subscribe to the integration's own event, and the screen's user is not one.)
      this.unsubs.push(
        await conn.subscribeMessage<Home>(async (h) => {
          this.home = h;
          try {
            this.me = await conn.sendMessagePromise<Me>({ type: "pine3_home/me" });
          } catch {
            /* reconnecting: "ready" asks again */
          }
        }, { type: "pine3_home/subscribe" }),
      );
      conn.addEventListener("ready", async () => {
        this.me = await conn.sendMessagePromise<Me>({ type: "pine3_home/me" });
      });
      this.phase = "ready";
    } catch (err) {
      if (err === ERR_INVALID_AUTH) {
        // the screen was removed in the panel (token revoked): pair again
        storeToken(null);
        void this.beginPairing();
        return;
      }
      this.phase = "error";
      this.error = tr("Sem ligação ao Home Assistant. A tentar de novo…");
      this.errorDetail = describe(err);
      console.warn("Pine3 Home: connect", err);
      this.pollTimer = window.setTimeout(() => this.connect(token), 5000);
    }
  }

  // ---------- render ----------
  private qr(code: string) {
    const q = qrcode(0, "M");
    q.addData(`${location.origin}${PANEL_PATH}?code=${code}`);
    q.make();
    return unsafeSVG(q.createSvgTag({ cellSize: 6, margin: 2, scalable: true }));
  }

  private renderPairing() {
    const code = this.pair?.code;
    return html`<main class="center">
      <div class="pane pairing">
        <div class="text">
          <span class="muted eyebrow">Pine3 Home</span>
          <h1>${tr("Emparelhar este ecrã")}</h1>
          <p class="muted">${tr("No Home Assistant, abre")} <strong>Pine3 Home</strong> ${tr("e escreve este código, ou lê o QR com o telemóvel.")}</p>
          <div class="code" aria-live="polite">${code ? `${code.slice(0, 3)} ${code.slice(3)}` : "··· ···"}</div>
          ${this.error ? html`<p class="bad">${this.error}</p>` : html`<p class="muted small">${tr("O código muda a cada 10 minutos.")}</p>`}
        </div>
        ${code ? html`<div class="qr">${this.qr(code)}</div>` : nothing}
      </div>
    </main>`;
  }

  // ---------- the settings, behind the PIN ----------
  /** The ⚙: straight to the settings if this connection already typed the PIN, otherwise ask for it. */
  private async askSettings(): Promise<void> {
    if (!this.conn) return;
    this.pin = "";
    this.pinError = "";
    try {
      const st = await this.conn.sendMessagePromise<{ set: boolean; elevated: boolean; locked_for: number }>({ type: "pine3_home/pin/status" });
      if (st.elevated) {
        this.elevatedUntil = Math.max(this.elevatedUntil, Date.now() + 60_000);
        return this.openSettings();
      }
      if (!st.set) this.pinError = tr("Ainda não há PIN. Define-o no Home Assistant: Pine3 Home → ⚙ → Sistema.");
      else if (st.locked_for) this.pinError = tr("Demasiadas tentativas. Tenta de novo daqui a {n} min.", { n: Math.ceil(st.locked_for / 60) });
    } catch {
      this.pinError = tr("Sem ligação ao Home Assistant.");
    }
    this.settings = "pin";
  }

  private async checkPin(): Promise<void> {
    if (!this.conn || this.pin.length < 4 || this.pinBusy) return;
    this.pinBusy = true;
    try {
      const r = await this.conn.sendMessagePromise<{ minutes: number }>({ type: "pine3_home/pin/check", pin: this.pin });
      this.elevatedUntil = Date.now() + r.minutes * 60_000;
      await this.openSettings();
    } catch (err) {
      const e = err as { code?: string; message?: string };
      const n = e.message?.match(/\d+/)?.[0];
      this.pinError = e.code === "locked" && n ? tr("Demasiadas tentativas. Tenta de novo daqui a {n} min.", { n }) : e.code === "wrong_pin" || !e.message ? tr("PIN errado.") : tr(e.message);
      this.pin = "";
    } finally {
      this.pinBusy = false;
    }
  }

  private async openSettings(): Promise<void> {
    const d = await this.conn!.sendMessagePromise<{ dashboards: Dashboard[] }>({ type: "pine3_home/dashboards" });
    this.dashboards = d.dashboards;
    this.settingsDash = this.me!.dashboard.id;
    this.settings = "open";
  }

  private onDashboards(list: Dashboard[]): void {
    this.dashboards = list;
    // the dashboard this screen shows changes at once
    const mine = list.find((d) => d.id === this.me?.dashboard.id);
    if (mine && this.me) this.me = { ...this.me, dashboard: mine };
  }

  private onPinKey = (e: KeyboardEvent) => {
    if (this.settings !== "pin") return;
    if (/^[0-9]$/.test(e.key)) this.key(e.key);
    else if (e.key === "Backspace") this.key("del");
    else if (e.key === "Enter") this.key("ok");
    else if (e.key === "Escape") this.settings = "closed";
    else return;
    e.preventDefault();
  };

  private key(k: string): void {
    this.pinError = "";
    if (k === "del") this.pin = this.pin.slice(0, -1);
    else if (k === "ok") void this.checkPin();
    else if (this.pin.length < 8) this.pin += k;
  }

  private renderPin() {
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "del", "0", "ok"];
    return html`<div class="pinwrap">
      <div class="pinbox pane" role="dialog" aria-label=${tr("PIN das definições")}>
        <span class="eyebrow muted">${tr("Definições")}</span>
        <h2>${tr("Escreve o PIN")}</h2>
        <div class="dots" aria-live="polite">${[0, 1, 2, 3, 4, 5, 6, 7].slice(0, Math.max(4, this.pin.length)).map((i) => html`<i class=${i < this.pin.length ? "on" : ""}></i>`)}</div>
        <p class="perr" role="alert">${this.pinError}</p>
        <div class="pad">${keys.map((k) => html`<button class=${k === "ok" ? "primary" : ""} ?disabled=${k === "ok" && (this.pin.length < 4 || this.pinBusy)}
          aria-label=${k === "del" ? tr("Apagar") : k === "ok" ? tr("Entrar") : k} @click=${() => this.key(k)}>${k === "del" ? "⌫" : k === "ok" ? "OK" : k}</button>`)}</div>
        <button class="cancel" @click=${() => (this.settings = "closed")}>${tr("Cancelar")}</button>
      </div>
    </div>`;
  }

  private renderReady() {
    const me = this.me!;
    if (!this.home || !this.conn) return html`<main class="center"><p class="muted">${tr("A carregar a casa…")}</p></main>`;
    // the styles that exist so far; the others show Vidro until they arrive
    const tag = styleTag(me.dashboard.style);
    return html`${shtml`<${tag} .home=${this.home} .entities=${this.entities} .dashboard=${me.dashboard} .conn=${this.conn}
      .screenName=${me.screen?.name ?? ""} ?ambient=${this.ambient} .wallpanel=${bridge() !== null} settingsButton ?cardSettings=${this.elevatedUntil > this.now.getTime()}
      ?canEdit=${me.is_admin || me.dashboard.screen_edit !== false}></${tag}>`}
      ${this.settings === "pin" ? this.renderPin() : nothing}
      ${this.settings === "open"
        ? html`<pine3-settings .conn=${this.conn} .home=${this.home} .entities=${this.entities} .dashboards=${this.dashboards}
            .dashboardId=${this.settingsDash} .version=${me.version} .start=${this.settingsStart}></pine3-settings>`
        : nothing}`;
  }



  render() {
    // the house's language, or (automatic) Home Assistant's; before connecting, the tablet's
    setLang(this.home?.settings?.language, this.home?.language);
    switch (this.phase) {
      case "pairing":
        return this.renderPairing();
      case "ready":
        return this.me ? this.renderReady() : nothing;
      case "error":
        return html`<main class="center"><div class="errbox"><p class="muted">${this.error}</p>${this.errorDetail ? html`<p class="detail">${this.errorDetail}</p>` : nothing}</div></main>`;
      default:
        return html`<main class="center"><p class="muted">${tr("A ligar…")}</p></main>`;
    }
  }

  static styles = [
    base,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background: var(--p3-bg);
      }
      .pinwrap {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
        background: rgba(10, 12, 14, 0.7);
      }
      .pinbox {
        width: min(360px, calc(100vw - 32px));
        padding: 28px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
        background: #1b1e22;
      }
      .pinbox h2 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
      }
      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: 0.75rem;
      }
      .dots {
        display: flex;
        gap: 12px;
        min-height: 16px;
      }
      .dots i {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px solid var(--p3-muted);
      }
      .dots i.on {
        background: var(--p3-text);
        border-color: var(--p3-text);
      }
      .perr {
        margin: 0;
        min-height: 1.3em;
        color: var(--p3-bad);
        text-align: center;
        font-size: 0.9rem;
      }
      .pad {
        display: grid;
        grid-template-columns: repeat(3, 72px);
        gap: 12px;
      }
      .pad button {
        height: 64px;
        border-radius: 20px;
        font-size: 1.4rem;
        padding: 0;
      }
      .cancel {
        background: none;
        border: 0;
        color: var(--p3-muted);
      }
      main {
        min-height: 100vh;
        box-sizing: border-box;
        padding: 24px;
      }
      .center {
        display: grid;
        place-items: center;
      }
      .pairing {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 40px;
        padding: 40px 48px;
        max-width: 860px;
      }
      .pairing .text {
        flex: 1;
        min-width: 260px;
      }
      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: 0.75rem;
      }
      h1 {
        margin: 6px 0 10px;
        font-size: 2rem;
        letter-spacing: -0.02em;
      }
      .code {
        font-size: clamp(3rem, 9vw, 5.5rem);
        font-weight: 600;
        letter-spacing: 0.08em;
        font-variant-numeric: tabular-nums;
        margin: 18px 0 8px;
      }
      .qr {
        width: 220px;
        height: 220px;
        background: #fff;
        border-radius: 18px;
        padding: 10px;
        box-sizing: border-box;
      }
      .qr svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .errbox {
        text-align: center;
      }
      .detail {
        font-family: ui-monospace, Menlo, Consolas, monospace;
        font-size: 0.8rem;
        color: rgba(238, 241, 244, 0.4);
      }
      .small {
        font-size: 0.85rem;
      }
      .bad {
        color: var(--p3-bad);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-screen": Pine3Screen;
  }
}

/** A short description of a connection error, shown small under the message (helps when reporting a problem). */
function describe(err: unknown): string {
  if (typeof err === "number") return `${tr("erro")} ${err}`;
  if (err && typeof err === "object") {
    const e = err as { code?: unknown; message?: unknown };
    return [e.code, e.message].filter(Boolean).join(": ");
  }
  return String(err ?? "");
}
