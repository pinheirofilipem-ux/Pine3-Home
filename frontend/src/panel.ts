// The Pine3 Home panel inside Home Assistant: pair wall screens, assign dashboards, manage dashboards.
import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { base } from "./lib/base";
import { AMBIENT_AFTER, AMBIENT_BRIGHTNESS, DOCK_NAMES, READY_STYLES, IPMA_AREAS, STYLE_NAMES, THEME_NAMES } from "./lib/types";
import type { Dashboard, DockPlacement, Home, PendingCode, Screen, Style } from "./lib/types";

interface Hass {
  callWS<T>(msg: Record<string, unknown>): Promise<T>;
  user?: { is_admin: boolean; name: string };
}

const SCREEN_PATH = "/pine3/ecra";

@customElement("pine3-home-panel")
export class Pine3HomePanel extends LitElement {
  @property({ attribute: false }) hass?: Hass;
  @property({ type: Boolean }) narrow = false;

  @state() private dashboards: Dashboard[] = [];
  @state() private styles: Style[] = [];
  @state() private screens: Screen[] = [];
  @state() private pending: PendingCode[] = [];
  @state() private code = "";
  @state() private screenName = "";
  @state() private screenDash = "";
  @state() private message: { kind: "ok" | "bad"; text: string } | null = null;
  @state() private busy = false;
  @state() private ipmaArea: string | null = null;
  private loaded = false;
  private timer?: number;

  connectedCallback(): void {
    super.connectedCallback();
    // the QR on a screen opens this panel with ?code=123456
    const code = new URLSearchParams(location.search).get("code");
    if (code && /^\d{6}$/.test(code)) this.code = code;
    this.timer = window.setInterval(() => this.refreshPending(), 4000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.timer);
  }

  protected updated(): void {
    if (this.hass && !this.loaded) {
      this.loaded = true;
      void this.load();
    }
  }

  private get admin(): boolean {
    return !!this.hass?.user?.is_admin;
  }

  private async load(): Promise<void> {
    if (!this.hass) return;
    const d = await this.hass.callWS<{ dashboards: Dashboard[]; styles: Style[] }>({ type: "pine3_home/dashboards" });
    this.dashboards = d.dashboards;
    this.styles = d.styles;
    if (!this.screenDash && d.dashboards.length) this.screenDash = d.dashboards[0].id;
    const home = await this.hass.callWS<Home>({ type: "pine3_home/home" });
    this.ipmaArea = home.settings?.ipma_area ?? null;
    if (this.admin) {
      const s = await this.hass.callWS<{ screens: Screen[] }>({ type: "pine3_home/screens" });
      this.screens = s.screens;
      await this.refreshPending();
    }
  }

  private async refreshPending(): Promise<void> {
    if (!this.hass || !this.admin) return;
    try {
      const p = await this.hass.callWS<{ pending: PendingCode[] }>({ type: "pine3_home/screens/pending" });
      this.pending = p.pending;
    } catch {
      /* the connection may be reconnecting */
    }
  }

  private async run(fn: () => Promise<void>, ok?: string): Promise<void> {
    this.busy = true;
    this.message = null;
    try {
      await fn();
      if (ok) this.message = { kind: "ok", text: ok };
    } catch (err) {
      this.message = { kind: "bad", text: (err as { message?: string }).message ?? String(err) };
    } finally {
      this.busy = false;
    }
  }

  private approve(): Promise<void> {
    const name = this.screenName.trim() || "Ecrã";
    return this.run(async () => {
      await this.hass!.callWS({ type: "pine3_home/screens/approve", code: this.code, name, dashboard: this.screenDash });
      this.code = "";
      this.screenName = "";
      if (location.search.includes("code=")) history.replaceState(null, "", location.pathname);
      await this.load();
    }, `${name} emparelhado. O ecrã liga-se dentro de segundos.`);
  }

  private setScreenDashboard(s: Screen, dashboard: string): Promise<void> {
    return this.run(async () => {
      await this.hass!.callWS({ type: "pine3_home/screens/update", screen_id: s.id, dashboard });
      await this.load();
    });
  }

  private renameScreen(s: Screen): Promise<void> | void {
    const name = prompt("Nome do ecrã", s.name)?.trim();
    if (!name || name === s.name) return;
    return this.run(async () => {
      await this.hass!.callWS({ type: "pine3_home/screens/update", screen_id: s.id, name });
      await this.load();
    });
  }

  private removeScreen(s: Screen): Promise<void> | void {
    if (!confirm(`Remover ${s.name}? O ecrã volta a pedir um código.`)) return;
    return this.run(async () => {
      await this.hass!.callWS({ type: "pine3_home/screens/remove", screen_id: s.id });
      await this.load();
    }, `${s.name} removido.`);
  }

  private saveDashboard(d: Dashboard, changes: Partial<Dashboard>): Promise<void> {
    return this.run(async () => {
      const r = await this.hass!.callWS<{ dashboards: Dashboard[] }>({
        type: "pine3_home/dashboards/save",
        dashboard: { id: d.id, name: d.name, style: d.style, dock: d.dock, theme: d.theme, screen_edit: d.screen_edit !== false, ...changes },
      });
      this.dashboards = r.dashboards;
    });
  }

  private addDashboard(): Promise<void> | void {
    const name = prompt("Nome do novo painel")?.trim();
    if (!name) return;
    let id = name
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 32) || "painel";
    while (this.dashboards.some((d) => d.id === id)) id = `${id.slice(0, 28)}-${Math.floor(Math.random() * 900 + 100)}`;
    return this.saveDashboard({ id, name, style: "vidro", dock: "left", theme: "grafite" }, {});
  }

  private resetLayouts(d: Dashboard): Promise<void> | void {
    if (!confirm(`Repor a disposição automática de todas as vistas de ${d.name}?`)) return;
    return this.run(async () => {
      for (const view of Object.keys(d.layouts ?? {})) {
        await this.hass!.callWS({ type: "pine3_home/dashboards/layout", dashboard_id: d.id, view, layout: null });
      }
      await this.load();
    }, `Disposição de ${d.name} reposta.`);
  }

  private removeDashboard(d: Dashboard): Promise<void> | void {
    if (!confirm(`Remover o painel ${d.name}? Os ecrãs que o usam passam para o primeiro painel.`)) return;
    return this.run(async () => {
      const r = await this.hass!.callWS<{ dashboards: Dashboard[] }>({ type: "pine3_home/dashboards/remove", dashboard_id: d.id });
      this.dashboards = r.dashboards;
      await this.load();
    });
  }

  private setIpmaArea(area: string): Promise<void> {
    return this.run(async () => {
      await this.hass!.callWS({ type: "pine3_home/home/settings", ipma_area: area || null });
      this.ipmaArea = area || null;
    }, area ? `Avisos do IPMA: ${IPMA_AREAS[area]}.` : "Avisos do IPMA desligados.");
  }

  private dashName(id: string): string {
    return this.dashboards.find((d) => d.id === id)?.name ?? id;
  }

  render() {
    if (!this.hass) return nothing;
    const screenUrl = `${location.origin}${SCREEN_PATH}`;
    return html`
      <header>
        <h1>Pine3 Home</h1>
        <span class="muted">Painéis e ecrãs da casa</span>
      </header>
      ${this.message ? html`<p class="msg ${this.message.kind}" role="status">${this.message.text}</p>` : nothing}
      ${this.admin
        ? html`
            <section class="pane">
              <h2>Emparelhar um ecrã</h2>
              <p class="muted">
                No tablet, abre <a href=${screenUrl} target="_blank" rel="noopener">${screenUrl}</a>. Aparece um código de 6
                algarismos: escreve-o aqui ou lê o QR com o telemóvel.
              </p>
              <div class="pair">
                <label>Código
                  <input inputmode="numeric" maxlength="6" placeholder="000000" .value=${this.code}
                    @input=${(e: Event) => (this.code = (e.target as HTMLInputElement).value.replace(/\D/g, "").slice(0, 6))} />
                </label>
                <label>Nome
                  <input maxlength="40" placeholder="Cozinha" .value=${this.screenName}
                    @input=${(e: Event) => (this.screenName = (e.target as HTMLInputElement).value)} />
                </label>
                <label>Painel
                  <select .value=${this.screenDash} @change=${(e: Event) => (this.screenDash = (e.target as HTMLSelectElement).value)}>
                    ${this.dashboards.map((d) => html`<option value=${d.id} ?selected=${d.id === this.screenDash}>${d.name}</option>`)}
                  </select>
                </label>
                <button class="primary" ?disabled=${this.busy || this.code.length !== 6} @click=${this.approve}>Emparelhar</button>
              </div>
              ${this.pending.length
                ? html`<p class="muted">À espera: ${this.pending.map(
                    (p) => html`<button class="chip" @click=${() => (this.code = p.code)}>${p.code}</button>`,
                  )}</p>`
                : nothing}
            </section>

            <section class="pane">
              <h2>Ecrãs</h2>
              ${this.screens.length
                ? html`<ul class="list">
                    ${this.screens.map(
                      (s) => html`<li>
                        <div class="grow">
                          <strong>${s.name}</strong>
                          <span class="muted">${s.active === false ? "token revogado" : s.last_used ? `visto ${new Date(s.last_used).toLocaleString("pt-PT")}` : "ainda não ligou"}</span>
                        </div>
                        <select aria-label="Painel de ${s.name}" @change=${(e: Event) => this.setScreenDashboard(s, (e.target as HTMLSelectElement).value)}>
                          ${this.dashboards.map((d) => html`<option value=${d.id} ?selected=${d.id === s.dashboard}>${d.name}</option>`)}
                        </select>
                        <button @click=${() => this.renameScreen(s)}>Renomear</button>
                        <button class="danger" @click=${() => this.removeScreen(s)}>Remover</button>
                      </li>`,
                    )}
                  </ul>`
                : html`<p class="muted">Ainda não há ecrãs emparelhados.</p>`}
            </section>
          `
        : html`<section class="pane"><p class="muted">Só um administrador pode emparelhar ecrãs e alterar painéis.</p></section>`}

      <section class="pane">
        <div class="row"><h2 class="grow">Painéis</h2>${this.admin ? html`<button @click=${this.addDashboard}>Novo painel</button>` : nothing}</div>
        <ul class="list">
          ${this.dashboards.map(
            (d) => html`<li>
              <div class="grow">
                <strong>${d.name}</strong>
                <span class="muted">${this.screens.filter((s) => s.dashboard === d.id).length} ecrã(s)</span>
              </div>
              <label>Estilo
                <select ?disabled=${!this.admin} @change=${(e: Event) => this.saveDashboard(d, { style: (e.target as HTMLSelectElement).value as Style })}>
                  ${this.styles.map((s) => html`<option value=${s} ?selected=${s === d.style}>${STYLE_NAMES[s] ?? s}${READY_STYLES.includes(s) ? "" : " (em breve)"}</option>`)}
                </select>
              </label>
              <label title="Só no estilo Vidro; o Bento navega com pílulas no topo">Dock
                <select ?disabled=${!this.admin || d.style === "bento"} @change=${(e: Event) => this.saveDashboard(d, { dock: (e.target as HTMLSelectElement).value as DockPlacement })}>
                  ${(Object.keys(DOCK_NAMES) as DockPlacement[]).map((k) => html`<option value=${k} ?selected=${k === d.dock}>${DOCK_NAMES[k]}</option>`)}
                </select>
              </label>
              <label>Tema
                <select ?disabled=${!this.admin} @change=${(e: Event) => this.saveDashboard(d, { theme: (e.target as HTMLSelectElement).value })}>
                  ${Object.entries(THEME_NAMES).map(([k, n]) => html`<option value=${k} ?selected=${k === d.theme}>${n}</option>`)}
                </select>
              </label>
              <label>Face ambiente
                <select ?disabled=${!this.admin} @change=${(e: Event) => this.saveDashboard(d, { ambient_after: Number((e.target as HTMLSelectElement).value) })}>
                  ${AMBIENT_AFTER.map(([v, n]) => html`<option value=${v} ?selected=${v === (d.ambient_after ?? 2)}>${n}</option>`)}
                </select>
              </label>
              <label title="Só no Pine3 Wallpanel">Brilho no ambiente
                <select ?disabled=${!this.admin} @change=${(e: Event) => this.saveDashboard(d, { ambient_brightness: (e.target as HTMLSelectElement).value as Dashboard["ambient_brightness"] })}>
                  ${Object.entries(AMBIENT_BRIGHTNESS).map(([k, n]) => html`<option value=${k} ?selected=${k === (d.ambient_brightness ?? "auto")}>${n}</option>`)}
                </select>
              </label>
              <label class="check">
                <input type="checkbox" ?disabled=${!this.admin} .checked=${d.screen_edit !== false}
                  @change=${(e: Event) => this.saveDashboard(d, { screen_edit: (e.target as HTMLInputElement).checked })} />
                Editar nos ecrãs
              </label>
              ${this.admin && Object.keys(d.layouts ?? {}).length
                ? html`<button @click=${() => this.resetLayouts(d)}>Repor layouts</button>`
                : nothing}
              ${this.admin && this.dashboards.length > 1 ? html`<button class="danger" @click=${() => this.removeDashboard(d)}>Remover</button>` : nothing}
            </li>`,
          )}
        </ul>
      </section>
      <section class="pane">
        <h2>Casa</h2>
        <div class="pair">
          <label>Avisos do IPMA
            <select ?disabled=${!this.admin} @change=${(e: Event) => this.setIpmaArea((e.target as HTMLSelectElement).value)}>
              <option value="" ?selected=${!this.ipmaArea}>Sem avisos</option>
              ${Object.entries(IPMA_AREAS).map(([k, n]) => html`<option value=${k} ?selected=${k === this.ipmaArea}>${n}</option>`)}
            </select>
          </label>
        </div>
        <p class="muted">Os avisos aparecem no cartão do tempo de todos os painéis.</p>
      </section>
      <footer class="muted">Painel em uso nos ecrãs: ${this.screens.map((s) => `${s.name} → ${this.dashName(s.dashboard)}`).join(" · ") || "—"}</footer>
    `;
  }

  static styles = [
    base,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background: var(--p3-bg);
        padding: 24px 16px 48px;
        box-sizing: border-box;
      }
      header,
      section,
      footer,
      .msg {
        max-width: 960px;
        margin: 0 auto 16px;
      }
      header h1 {
        margin: 0;
        font-size: 1.8rem;
        letter-spacing: -0.02em;
      }
      section {
        padding: 18px 20px;
      }
      h2 {
        margin: 0 0 8px;
        font-size: 1.1rem;
      }
      a {
        color: var(--p3-accent);
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 0.8rem;
        color: var(--p3-muted);
      }
      label.check {
        flex-direction: row;
        align-items: center;
        gap: 6px;
        font-size: 0.9rem;
      }
      .pair {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: flex-end;
      }
      .pair input[inputmode="numeric"] {
        width: 8ch;
        font-size: 1.3rem;
        letter-spacing: 0.15em;
        font-variant-numeric: tabular-nums;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .grow {
        flex: 1;
        min-width: 140px;
        display: flex;
        flex-direction: column;
      }
      .list {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .list li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        padding: 12px 0;
        border-top: 1px solid var(--p3-rim);
      }
      .chip {
        padding: 0.2rem 0.6rem;
        margin-left: 6px;
        font-variant-numeric: tabular-nums;
      }
      .msg {
        padding: 10px 16px;
        border-radius: 12px;
        background: var(--p3-pane);
      }
      .msg.ok {
        color: var(--p3-ok);
      }
      .msg.bad {
        color: var(--p3-bad);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-home-panel": Pine3HomePanel;
  }
}
