// The Pine3 Home panel in Home Assistant's sidebar: the dashboard itself, in the chosen style, like Pine3 View.
// Its ⚙ opens the settings full screen (Aparência with a live preview, Face ambiente, Casa, Ecrãs e painéis,
// Sistema). Wall screens show the same dashboards on the light page (/pine3/ecra).
import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { html as shtml } from "lit/static-html.js";
import type { Connection, HassEntities } from "home-assistant-js-websocket";
import { mdiMenu } from "@mdi/js";
import { styleTag } from "./lib/styles";
import type { Dashboard, Home } from "./lib/types";
import "./settings";

interface Hass {
  connection: Connection;
  states: HassEntities;
  user?: { is_admin: boolean; name: string };
}

const DASH_KEY = "pine3_home.panel_dashboard";

function remembered(): string | null {
  try {
    return localStorage.getItem(DASH_KEY);
  } catch {
    return null;
  }
}

@customElement("pine3-home-panel")
export class Pine3HomePanel extends LitElement {
  @property({ attribute: false }) hass?: Hass;
  @property({ type: Boolean }) narrow = false;

  @state() private home?: Home;
  @state() private dashboards: Dashboard[] = [];
  @state() private dashId: string | null = remembered();
  @state() private settings = false;
  @state() private startSection: "aparencia" | "ecras" = "aparencia";
  @state() private code = "";
  @state() private error = "";
  private conn?: Connection;
  private unsub?: () => void;

  connectedCallback(): void {
    super.connectedCallback();
    // the QR on a wall screen opens this panel with ?code=123456: straight to pairing
    const code = new URLSearchParams(location.search).get("code");
    if (code && /^\d{6}$/.test(code)) {
      this.code = code;
      this.startSection = "ecras";
      this.settings = true;
    }
    this.addEventListener("pine3-settings", this.onOpen);
    this.addEventListener("pine3-settings-close", this.onClose);
    this.addEventListener("pine3-dashboards", this.onDashboards);
    this.addEventListener("pine3-dashboard-select", this.onSelect);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.unsub?.();
    this.unsub = undefined;
    this.conn = undefined;
  }

  private onOpen = () => {
    if (!this.admin) return;
    this.startSection = "aparencia";
    this.settings = true;
  };
  private onClose = () => (this.settings = false);
  private onDashboards = (e: Event) => {
    this.dashboards = (e as CustomEvent<Dashboard[]>).detail;
  };
  private onSelect = (ev: Event) => {
    const e = ev as CustomEvent<string>;
    this.dashId = e.detail;
    try {
      localStorage.setItem(DASH_KEY, e.detail);
    } catch {
      /* private mode */
    }
  };

  private get admin(): boolean {
    return !!this.hass?.user?.is_admin;
  }

  protected updated(): void {
    if (this.hass && this.hass.connection !== this.conn) void this.connect(this.hass.connection);
  }

  private async connect(conn: Connection): Promise<void> {
    this.unsub?.();
    this.conn = conn;
    try {
      const [home, d] = await Promise.all([
        conn.sendMessagePromise<Home>({ type: "pine3_home/home" }),
        conn.sendMessagePromise<{ dashboards: Dashboard[] }>({ type: "pine3_home/dashboards" }),
      ]);
      this.home = home;
      this.dashboards = d.dashboards;
      // a fresh model on every change of the house or the dashboards
      this.unsub = await conn.subscribeMessage<Home>(async (h) => {
        this.home = h;
        try {
          this.dashboards = (await conn.sendMessagePromise<{ dashboards: Dashboard[] }>({ type: "pine3_home/dashboards" })).dashboards;
        } catch {
          /* reconnecting */
        }
      }, { type: "pine3_home/subscribe" });
      this.error = "";
    } catch (err) {
      this.error = (err as { message?: string }).message ?? String(err);
    }
  }

  render() {
    if (!this.hass) return nothing;
    if (this.error) return html`<p class="center">Pine3 Home: ${this.error}</p>`;
    if (!this.home || !this.dashboards.length) return html`<p class="center">A carregar a casa…</p>`;
    const dash = this.dashboards.find((d) => d.id === this.dashId) ?? this.dashboards[0];
    const tag = styleTag(dash.style);
    return html`
      ${shtml`<${tag} .home=${this.home} .entities=${this.hass.states} .dashboard=${dash} .conn=${this.hass.connection}
        ?settingsButton=${this.admin} ?cardSettings=${this.admin} ?canEdit=${this.admin}></${tag}>`}
      ${this.narrow
        ? html`<button class="menu" aria-label="Menu do Home Assistant"
            @click=${() => this.dispatchEvent(new Event("hass-toggle-menu", { bubbles: true, composed: true }))}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${mdiMenu} fill="currentColor" /></svg></button>`
        : nothing}
      ${this.settings && this.admin
        ? html`<pine3-settings .conn=${this.hass.connection} .home=${this.home} .entities=${this.hass.states}
            .dashboards=${this.dashboards} .dashboardId=${dash.id} .version=${this.home.version} .start=${this.startSection} .code=${this.code}></pine3-settings>`
        : nothing}
    `;
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      height: 100vh;
      overflow: hidden;
      background: #0f1113;
    }
    .center {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      margin: 0;
      color: rgba(238, 241, 244, 0.6);
      font-family: system-ui, sans-serif;
    }
    .menu {
      position: absolute;
      z-index: 10;
      left: 8px;
      top: 8px;
      width: 40px;
      height: 40px;
      border: 0;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.35);
      color: #fff;
      padding: 8px;
      cursor: pointer;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-home-panel": Pine3HomePanel;
  }
}
