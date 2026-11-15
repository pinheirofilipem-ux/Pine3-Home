// The settings of Pine3 Home, opened with the ⚙ of the dashboard: full screen, like Pine3 View (sections on the
// left, their content on the right), with a live preview of the dashboard in Aparência. Every change is saved at
// once in Home Assistant and shows in the preview and, when the settings close, in the dashboard itself.
import { LitElement, html, css, nothing, svg, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { html as shtml } from "lit/static-html.js";
import type { Connection, HassEntities } from "home-assistant-js-websocket";
import {
  mdiPaletteOutline, mdiHomeOutline, mdiTabletDashboard, mdiCogOutline, mdiClose, mdiPlus, mdiWeatherNight,
  mdiViewGridOutline, mdiFormatListChecks, mdiChevronUp, mdiChevronDown, mdiMagnify,
} from "@mdi/js";
import { ROOM_ICON_CHOICES, roomIconPath } from "./vidro/icons";
import { DEVICE_TYPES, TYPES_FOR, autoType, type DeviceType } from "./lib/devtypes";
import { styleTag, STYLE_SWATCH } from "./lib/styles";
import {
  AMBIENT_AFTER, AMBIENT_BRIGHTNESS, IPMA_AREAS, READY_STYLES, STYLE_NAMES, THEME_NAMES,
  type Dashboard, type Home, type HomeSettings, type PendingCode, type Room, type RoomEntity, type Screen, type Style,
} from "./lib/types";

type Section = "aparencia" | "divisoes" | "entidades" | "ambiente" | "casa" | "ecras" | "sistema";
const SECTIONS: Array<{ id: Section; name: string; icon: string }> = [
  { id: "aparencia", name: "Aparência", icon: mdiPaletteOutline },
  { id: "divisoes", name: "Divisões", icon: mdiViewGridOutline },
  { id: "entidades", name: "Entidades", icon: mdiFormatListChecks },
  { id: "ambiente", name: "Face ambiente", icon: mdiWeatherNight },
  { id: "casa", name: "Casa", icon: mdiHomeOutline },
  { id: "ecras", name: "Ecrãs e painéis", icon: mdiTabletDashboard },
  { id: "sistema", name: "Sistema", icon: mdiCogOutline },
];
const STYLES: Style[] = ["vidro", "bento", "moldura", "editorial", "instrumento", "orbita", "carteira", "lente"];
const NAV_OF: Record<string, string> = {
  bento: "pílulas no topo", orbita: "uma roda que abre do botão em baixo", carteira: "separadores à direita, como cartões numa carteira", moldura: "deslizar, com pontos no canto", editorial: "índice em palavras", instrumento: "banco de teclas",
};
const PREVIEW_W = 1334;
const PREVIEW_H = 800;

const icon = (path: string) => svg`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${path} fill="currentColor"/></svg>`;

@customElement("pine3-settings")
export class Pine3Settings extends LitElement {
  @property({ attribute: false }) conn!: Connection;
  @property({ attribute: false }) home!: Home;
  @property({ attribute: false }) entities: HassEntities = {};
  @property({ attribute: false }) dashboards: Dashboard[] = [];
  /** The dashboard being shown and edited. */
  @property() dashboardId = "";
  @property() version = "";
  /** Opens on a section, e.g. Ecrãs with a code from the screen's QR. */
  @property() start: Section = "aparencia";
  @property() code = "";

  @state() private section: Section = "aparencia";
  @state() private screens: Screen[] = [];
  @state() private pending: PendingCode[] = [];
  @state() private screenName = "";
  @state() private message: { ok: boolean; text: string } | null = null;
  @state() private scale = 0.4;
  /** The view shown in the preview. */
  @state() private pvView = "home";
  /** Each dashboard as it was before these settings first changed it: "Desfazer" puts it back. */
  @state() private original: Record<string, Dashboard> = {};
  @state() private query = "";
  @state() private pinSet: boolean | null = null;
  @state() private newPin = "";
  @state() private diagnostics = false;
  /** The room whose icon picker is open in Divisões. */
  @state() private iconFor: string | null = null;
  private timer?: number;
  private resize?: ResizeObserver;
  private thumbResize?: ResizeObserver;
  private thumbGrid?: HTMLElement;

  connectedCallback(): void {
    super.connectedCallback();
    this.section = this.start;
    void this.loadScreens();
    void this.ws<{ set: boolean }>({ type: "pine3_home/pin/status" }).then((r) => (this.pinSet = r.set)).catch(() => undefined);
    this.timer = window.setInterval(() => this.loadPending(), 4000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.timer);
    this.resize?.disconnect();
    this.thumbResize?.disconnect();
  }

  protected updated(changed: PropertyValues): void {
    // the preview is the real dashboard at the Tab A7's size, scaled to the frame
    const frame = this.renderRoot.querySelector<HTMLElement>(".pv");
    if (frame && !this.resize) {
      this.resize = new ResizeObserver(() => (this.scale = frame.clientWidth / PREVIEW_W));
      this.resize.observe(frame);
    }
    if (!frame && this.resize) {
      this.resize.disconnect();
      this.resize = undefined;
    }
    // the style thumbnails: the same scaling, to the width of one thumbnail
    const grid = this.renderRoot.querySelector<HTMLElement>(".styles");
    const one = grid?.querySelector<HTMLElement>(".thumb-live");
    if (grid && one) {
      if (!this.thumbResize || this.thumbGrid !== grid) {
        this.thumbResize?.disconnect();
        this.thumbGrid = grid;
        this.thumbResize = new ResizeObserver(() => grid.style.setProperty("--ts", String(one.clientWidth / PREVIEW_W)));
        this.thumbResize.observe(one);
      }
    }
    if (changed.has("start")) this.section = this.start;
  }

  private get dash(): Dashboard {
    return this.dashboards.find((d) => d.id === this.dashboardId) ?? this.dashboards[0];
  }

  private ws<T>(msg: { type: string; [key: string]: unknown }): Promise<T> {
    return this.conn.sendMessagePromise<T>(msg);
  }

  private async run(fn: () => Promise<void>, ok?: string): Promise<void> {
    this.message = null;
    try {
      await fn();
      if (ok) this.message = { ok: true, text: ok };
    } catch (err) {
      this.message = { ok: false, text: (err as { message?: string }).message ?? String(err) };
    }
  }

  // ---------- data ----------
  private async loadScreens(): Promise<void> {
    try {
      this.screens = (await this.ws<{ screens: Screen[] }>({ type: "pine3_home/screens" })).screens;
      await this.loadPending();
    } catch {
      /* not an administrator: the panel doesn't open the settings then */
    }
  }

  private async loadPending(): Promise<void> {
    if (this.section !== "ecras") return;
    try {
      this.pending = (await this.ws<{ pending: PendingCode[] }>({ type: "pine3_home/screens/pending" })).pending;
    } catch {
      /* reconnecting */
    }
  }

  /** Change the dashboard: shown at once (preview and dashboard), then saved. */
  private save(changes: Partial<Dashboard>): Promise<void> {
    const d = this.dash;
    if (!this.original[d.id]) this.original = { ...this.original, [d.id]: { ...d } };
    const next = { ...d, ...changes };
    this.dashboards = this.dashboards.map((x) => (x.id === d.id ? next : x));
    this.emit("dashboards", this.dashboards);
    return this.run(async () => {
      const r = await this.ws<{ dashboards: Dashboard[] }>({
        type: "pine3_home/dashboards/save",
        dashboard: { id: d.id, name: next.name, style: next.style, ...changes },
      });
      this.dashboards = r.dashboards;
      this.emit("dashboards", r.dashboards);
    });
  }

  private emit(type: string, detail: unknown): void {
    this.dispatchEvent(new CustomEvent(`pine3-${type}`, { detail, bubbles: true, composed: true }));
  }

  private close(): void {
    this.emit("settings-close", null);
  }

  // ---------- render ----------
  render() {
    if (!this.dash) return nothing;
    return html`<div class="wrap">
      <nav class="side" aria-label="Definições">
        <div class="top">
          <button class="x" aria-label="Fechar as definições" @click=${() => this.close()}>${icon(mdiClose)}</button>
          <b>Definições</b>
        </div>
        ${SECTIONS.map((s) => html`<button class=${classMap({ item: true, on: s.id === this.section })} @click=${() => { this.section = s.id; this.message = null; void this.loadPending(); }}>
          <i>${icon(s.icon)}</i>${s.name}</button>`)}
        ${Object.keys(this.original).length
          ? html`<button class="undo" @click=${() => this.undo()}>Desfazer alterações</button>`
          : nothing}
        <button class="done" @click=${() => this.close()}>Concluído</button>
      </nav>
      <main class="content">
        ${this.message ? html`<p class=${classMap({ msg: true, bad: !this.message.ok })} role="status">${this.message.text}</p>` : nothing}
        ${this.section === "aparencia" ? this.renderAppearance() : nothing}
        ${this.section === "divisoes" ? this.renderRooms() : nothing}
        ${this.section === "entidades" ? this.renderEntities() : nothing}
        ${this.section === "ambiente" ? this.renderAmbient() : nothing}
        ${this.section === "casa" ? this.renderHouse() : nothing}
        ${this.section === "ecras" ? this.renderScreens() : nothing}
        ${this.section === "sistema" ? this.renderSystem() : nothing}
      </main>
    </div>`;
  }

  private dashPicker() {
    if (this.dashboards.length < 2) return nothing;
    return html`<div class="dpick">
      <span>A editar o painel</span>
      ${this.dashboards.map((d) => html`<button class=${classMap({ chip: true, on: d.id === this.dash.id })} @click=${() => this.emit("dashboard-select", d.id)}>${d.name}</button>`)}
    </div>`;
  }

  private renderAppearance() {
    const d = this.dash;
    const tag = styleTag(d.style);
    const vidro = d.style === "vidro";
    return html`<section class="card">
        <h2>Aparência</h2>
        <p class="muted">O estilo, o tema e a navegação do painel <b>${d.name}</b>. Vês o resultado já aqui; fica guardado no Home Assistant para todos os ecrãs que mostram este painel.</p>
        ${this.dashPicker()}
        <div class="pv" style=${`height:${Math.round(PREVIEW_H * this.scale)}px`} aria-label="Pré-visualização">
          <div class="pvin" style=${`transform:scale(${this.scale})`}>
            ${shtml`<${tag} .home=${this.home} .entities=${this.entities} .dashboard=${d} .conn=${this.conn} .startView=${this.pvView}></${tag}>`}
          </div>
        </div>
        <div class="pvviews" aria-label="Vista na pré-visualização">
          ${this.previewViews().map(([id, n]) => html`<button class=${classMap({ chip: true, on: id === this.pvView })} @click=${() => (this.pvView = id)}>${n}</button>`)}
        </div>
      </section>
      <section class="card">
        <h3>Estilo</h3>
        <div class="styles">${STYLES.map((s) => {
          const ready = READY_STYLES.includes(s);
          return html`<button class=${classMap({ sty: true, on: s === d.style })} ?disabled=${!ready} aria-pressed=${s === d.style}
            @click=${() => this.save({ style: s })}>
            ${ready ? this.thumb(s) : html`<i style=${`background:${STYLE_SWATCH[s]}`}></i>`}
            <span>${STYLE_NAMES[s]}${ready ? "" : html`<small>em breve</small>`}</span></button>`;
        })}</div>
      </section>
      <section class="card">
        <h3>Tema</h3>
        <p class="muted">${vidro ? "Claro, escuro, ou escuro ao pôr do sol." : "Só no Vidro: os outros estilos têm a sua própria paleta."}</p>
        <div class="seg">${Object.entries(THEME_NAMES).map(([k, n]) => html`<button class=${classMap({ on: k === d.theme })} ?disabled=${!vidro} @click=${() => this.save({ theme: k })}>${n}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Navegação</h3>
        <p class="muted">${vidro ? "A dock do Vidro, à esquerda ou em baixo." : `Este estilo navega com ${NAV_OF[d.style] ?? "a sua própria navegação"}.`}</p>
        <div class="seg">${[["left", "Dock à esquerda"], ["bottom", "Dock em baixo"]].map(([k, n]) => html`<button class=${classMap({ on: k === d.dock })} ?disabled=${!vidro} @click=${() => this.save({ dock: k as Dashboard["dock"] })}>${n}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Editar a grelha nos ecrãs</h3>
        <div class="row">
          <span>Os tablets que mostram este painel podem mudar a ordem, o tamanho e os cartões de cada vista (o lápis).</span>
          <button class="sw" role="switch" aria-checked=${d.screen_edit !== false} aria-label="Editar a grelha nos ecrãs"
            @click=${() => this.save({ screen_edit: d.screen_edit === false })}></button>
        </div>
      </section>`;
  }

  private renderAmbient() {
    const d = this.dash;
    return html`<section class="card">
        <h2>Face ambiente</h2>
        <p class="muted">Um relógio calmo com o tempo e a casa numa linha, depois de alguns minutos sem tocar no ecrã. O primeiro toque só acorda.</p>
        ${this.dashPicker()}
        <h3>Aparece depois de</h3>
        <div class="seg">${AMBIENT_AFTER.map(([v, n]) => html`<button class=${classMap({ on: v === (d.ambient_after ?? 2) })} @click=${() => this.save({ ambient_after: v })}>${n}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Brilho na face ambiente</h3>
        <p class="muted">Só nos tablets com a app Pine3 Wallpanel. Fora da face ambiente, o brilho é o do sistema.</p>
        <div class="seg">${Object.entries(AMBIENT_BRIGHTNESS).map(([k, n]) => html`<button class=${classMap({ on: k === (d.ambient_brightness ?? "auto") })} @click=${() => this.save({ ambient_brightness: k as Dashboard["ambient_brightness"] })}>${n}</button>`)}</div>
      </section>`;
  }

  private renderHouse() {
    const area = this.home.settings?.ipma_area ?? "";
    return html`<section class="card">
      <h2>Casa</h2>
      <p class="muted">O que é da casa e vale para todos os painéis.</p>
      <h3>Avisos do IPMA</h3>
      <p class="muted">Os avisos da tua área aparecem no cartão do tempo, na face ambiente e no topo de cada estilo.</p>
      <select class="sel" aria-label="Área dos avisos do IPMA" @change=${(e: Event) => {
        const v = (e.target as HTMLSelectElement).value;
        void this.run(() => this.ws({ type: "pine3_home/home/settings", ipma_area: v || null }), v ? `Avisos do IPMA: ${IPMA_AREAS[v]}.` : "Avisos do IPMA desligados.");
      }}>
        <option value="" ?selected=${!area}>Sem avisos</option>
        ${Object.entries(IPMA_AREAS).map(([k, n]) => html`<option value=${k} ?selected=${k === area}>${n}</option>`)}
      </select>
    </section>`;
  }

  private renderScreens() {
    const screenUrl = `${location.origin}/pine3/ecra`;
    return html`<section class="card">
        <h2>Emparelhar um ecrã</h2>
        <p class="muted">No tablet, abre <b>${screenUrl}</b>. Aparece um código de 6 algarismos: escreve-o aqui, ou lê o QR com o telemóvel.</p>
        <div class="pair">
          <input class="code" inputmode="numeric" maxlength="6" placeholder="000000" aria-label="Código do ecrã" .value=${this.code}
            @input=${(e: Event) => (this.code = (e.target as HTMLInputElement).value.replace(/\D/g, "").slice(0, 6))} />
          <input class="txt" maxlength="40" placeholder="Nome, p.ex. Cozinha" aria-label="Nome do ecrã" .value=${this.screenName}
            @input=${(e: Event) => (this.screenName = (e.target as HTMLInputElement).value)} />
          <button class="pri" ?disabled=${this.code.length !== 6} @click=${() => this.approve()}>Emparelhar com ${this.dash.name}</button>
        </div>
        ${this.pending.length
          ? html`<p class="muted">À espera: ${this.pending.map((p) => html`<button class="chip" @click=${() => (this.code = p.code)}>${p.code}</button>`)}</p>`
          : nothing}
      </section>
      <section class="card">
        <h3>Ecrãs</h3>
        ${this.screens.length
          ? html`<div class="list">${this.screens.map((s) => html`<div class="row">
              <i class="thumb" style=${`background:${STYLE_SWATCH[this.dashboards.find((d) => d.id === s.dashboard)?.style ?? "vidro"]}`}></i>
              <span class="grow"><input class="txt inline" .value=${s.name} aria-label="Nome do ecrã" @change=${(e: Event) => this.updateScreen(s, { name: (e.target as HTMLInputElement).value.trim() || s.name })} />
                <small>${s.active === false ? "token revogado" : s.last_used ? `visto ${new Date(s.last_used).toLocaleString("pt-PT")}` : "ainda não ligou"}</small></span>
              <select class="sel" aria-label=${`Painel de ${s.name}`} @change=${(e: Event) => this.updateScreen(s, { dashboard: (e.target as HTMLSelectElement).value })}>
                ${this.dashboards.map((d) => html`<option value=${d.id} ?selected=${d.id === s.dashboard}>${d.name} · ${STYLE_NAMES[d.style]}</option>`)}
              </select>
              <button class="danger" @click=${() => this.removeScreen(s)}>Remover</button>
            </div>`)}</div>`
          : html`<p class="muted">Ainda não há ecrãs emparelhados.</p>`}
      </section>
      <section class="card">
        <h3>Painéis</h3>
        <p class="muted">Cada painel tem o seu estilo e a sua disposição. Cada ecrã mostra um painel.</p>
        <div class="list">${this.dashboards.map((d) => html`<div class="row">
          <i class="thumb" style=${`background:${STYLE_SWATCH[d.style]}`}></i>
          <span class="grow"><input class="txt inline" .value=${d.name} aria-label="Nome do painel" @change=${(e: Event) => this.renameDashboard(d, (e.target as HTMLInputElement).value.trim())} />
            <small>${STYLE_NAMES[d.style]} · ${this.screens.filter((s) => s.dashboard === d.id).length} ecrã(s)</small></span>
          ${d.id === this.dash.id ? html`<span class="badge">a ver</span>` : html`<button @click=${() => this.emit("dashboard-select", d.id)}>Ver e editar</button>`}
          ${this.dashboards.length > 1 ? html`<button class="danger" @click=${() => this.removeDashboard(d)}>Remover</button>` : nothing}
        </div>`)}</div>
        <button class="add" @click=${() => this.addDashboard()}>${icon(mdiPlus)} Novo painel</button>
      </section>`;
  }

  private renderSystem() {
    const layouts = Object.keys(this.dash.layouts ?? {});
    return html`<section class="card">
      <h2>Sistema</h2>
      <div class="row"><span class="grow">Versão<small>Pine3 Home ${this.version}</small></span></div>
      <div class="row"><span class="grow">Disposição de ${this.dash.name}<small>${layouts.length ? `arrumada à mão em ${layouts.length} vista(s)` : "automática"}</small></span>
        ${layouts.length ? html`<button @click=${() => this.resetLayouts()}>Repor a automática</button>` : nothing}</div>
      <div class="row"><span class="grow">Página dos ecrãs de parede<small>${location.origin}/pine3/ecra</small></span></div>
    </section>
    <section class="card">
      <h3>PIN das definições nos ecrãs</h3>
      <p class="muted">Nos ecrãs de parede, o ⚙ pede este PIN antes de abrir as definições. Depois de o escreverem, ficam com acesso durante 10 minutos. Cinco tentativas erradas seguidas bloqueiam o PIN durante 5 minutos.</p>
      <div class="row">
        <span class="grow">${this.pinSet ? "PIN definido" : "Sem PIN: os ecrãs não abrem as definições"}<small>${this.pinSet ? "Escreve outro para o mudar." : "De 4 a 8 algarismos."}</small></span>
        <input class="code" type="password" inputmode="numeric" maxlength="8" placeholder="••••" aria-label="Novo PIN" .value=${this.newPin}
          @input=${(e: Event) => (this.newPin = (e.target as HTMLInputElement).value.replace(/\D/g, "").slice(0, 8))} />
        <button class="pri" ?disabled=${this.newPin.length < 4} @click=${() => this.setPin(this.newPin)}>${this.pinSet ? "Mudar o PIN" : "Guardar o PIN"}</button>
        ${this.pinSet ? html`<button class="danger" @click=${() => this.setPin(null)}>Remover</button>` : nothing}
      </div>
    </section>`;
  }

  // ---------- Divisões and Entidades: settings of the house, shared by every dashboard ----------
  private get hs(): HomeSettings {
    return this.home.settings ?? {};
  }

  /** Save some of the house's settings: shown at once, then saved (every screen updates). */
  private saveHouse(changes: HomeSettings): Promise<void> {
    this.home = { ...this.home, settings: { ...this.hs, ...changes } };
    return this.run(() => this.ws({ type: "pine3_home/home/settings", ...changes }));
  }

  private renderRooms() {
    const rooms = this.home.rooms;
    const hidden = this.hs.hidden_rooms ?? [];
    const move = (i: number, d: number) => {
      const j = i + d;
      if (j < 0 || j >= rooms.length) return;
      const order = rooms.map((r) => r.id);
      [order[i], order[j]] = [order[j], order[i]];
      // the model arrives already ordered: reorder it here too, so the list moves at once
      this.home = { ...this.home, rooms: order.map((id) => rooms.find((r) => r.id === id)!) };
      void this.saveHouse({ room_order: order });
    };
    return html`<section class="card">
      <h2>Divisões</h2>
      <p class="muted">A ordem, o ícone e as divisões que aparecem. Vale para a dock, a Casa e todos os estilos e painéis. As divisões vêm das áreas do Home Assistant.</p>
      <div class="list">${rooms.map((r, i) => {
        const shown = !hidden.includes(r.id);
        return html`<div class=${classMap({ row: true, off: !shown })}>
          <span class="mv">
            <button class="ib" aria-label=${`Subir ${r.name}`} ?disabled=${i === 0} @click=${() => move(i, -1)}>${icon(mdiChevronUp)}</button>
            <button class="ib" aria-label=${`Descer ${r.name}`} ?disabled=${i === rooms.length - 1} @click=${() => move(i, 1)}>${icon(mdiChevronDown)}</button>
          </span>
          <button class="ricon" aria-label=${`Ícone de ${r.name}`} aria-expanded=${this.iconFor === r.id} @click=${() => (this.iconFor = this.iconFor === r.id ? null : r.id)}>${icon(roomIconPath(r.icon))}</button>
          <span class="grow">${r.name}<small>${r.devices.filter((d) => !d.hidden).length} de ${r.devices.length} dispositivos${r.floor ? ` · ${r.floor}` : ""}</small></span>
          <button class="sw" role="switch" aria-checked=${shown} aria-label=${`Mostrar ${r.name}`}
            @click=${() => void this.saveHouse({ hidden_rooms: shown ? [...hidden, r.id] : hidden.filter((x) => x !== r.id) })}></button>
          ${this.iconFor === r.id
            ? html`<div class="icons">${ROOM_ICON_CHOICES.map((ic) => html`<button class=${classMap({ ib: true, on: ic === r.icon })} aria-label=${ic.replace("mdi:", "")}
                @click=${() => { this.iconFor = null; void this.saveHouse({ room_icons: { ...(this.hs.room_icons ?? {}), [r.id]: ic } }); }}>${icon(roomIconPath(ic))}</button>`)}</div>`
            : nothing}
        </div>`;
      })}</div>
    </section>`;
  }

  /** Is this entity on the dashboards? A device's main entity unless hidden; another only when chosen. */
  private visible(e: RoomEntity): boolean {
    return e.primary ? !(this.hs.hidden ?? []).includes(e.id) : (this.hs.shown ?? []).includes(e.id);
  }

  private toggleEntity(e: RoomEntity): Promise<void> {
    const hidden = this.hs.hidden ?? [];
    const shown = this.hs.shown ?? [];
    if (e.primary) return this.saveHouse({ hidden: hidden.includes(e.id) ? hidden.filter((x) => x !== e.id) : [...hidden, e.id] });
    return this.saveHouse({ shown: shown.includes(e.id) ? shown.filter((x) => x !== e.id) : [...shown, e.id] });
  }

  private renderEntities() {
    const q = this.query.trim().toLowerCase();
    const match = (e: RoomEntity) => (this.diagnostics || !e.category) && (!q || `${e.name} ${e.id}`.toLowerCase().includes(q));
    const rooms = this.home.rooms
      .map((r) => ({ r, ents: (r.entities ?? []).filter(match).sort((a, b) => Number(b.primary) - Number(a.primary)) }))
      .filter((x) => x.ents.length);
    return html`<section class="card">
        <h2>Entidades</h2>
        <p class="muted">O que aparece nos painéis. Cada dispositivo tem um cartão com a sua entidade <b>principal</b>; as <b>secundárias</b> (o consumo de uma tomada, o interruptor de uma TV, um sensor de diagnóstico) podem ter um cartão próprio.</p>
        <label class="search">${icon(mdiMagnify)}<input type="search" placeholder="Procurar por nome ou entidade" aria-label="Procurar entidade"
          .value=${this.query} @input=${(e: Event) => (this.query = (e.target as HTMLInputElement).value)} /></label>
        <div class="row"><span>Mostrar entidades de diagnóstico e configuração</span>
          <button class="sw" role="switch" aria-checked=${this.diagnostics} aria-label="Mostrar entidades de diagnóstico" @click=${() => (this.diagnostics = !this.diagnostics)}></button></div>
      </section>
      ${rooms.length
        ? rooms.map(({ r, ents }) => this.entityRoom(r, ents))
        : html`<section class="card"><p class="muted">Nenhuma entidade com "${this.query}".</p></section>`}`;
  }

  private entityRoom(r: Room, ents: RoomEntity[]) {
    const all = (r.entities ?? []).filter((e) => this.diagnostics || !e.category);
    const on = all.filter((e) => this.visible(e)).length;
    return html`<section class="card">
      <h3 class="rh">${icon(roomIconPath(r.icon))} ${r.name} <small>${on} de ${all.length} visíveis</small></h3>
      <div class="list">${ents.map((e) => {
        const v = this.visible(e);
        return html`<div class=${classMap({ row: true, off: !v })}>
          <span class="grow">${this.hs.names?.[e.id] ?? e.name}<small class="mono">${e.id}</small></span>
          ${this.typePicker(r, e)}
          <span class=${classMap({ badge: true, sec: !e.primary })}>${e.primary ? "Principal" : e.category ? "Diagnóstico" : "Secundária"}</span>
          <button class="sw" role="switch" aria-checked=${v} aria-label=${`Mostrar ${e.name}`} @click=${() => this.toggleEntity(e)}></button>
        </div>`;
      })}</div>
    </section>`;
  }

  /** The card's type (ceiling light, lamp, LED strip…): guessed, or chosen here or in the card's sheet. */
  private typePicker(r: Room, e: RoomEntity) {
    const types = TYPES_FOR[e.id.split(".")[0]] ?? [];
    if (types.length < 2) return nothing;
    const d = r.devices.find((x) => x.id === e.id);
    const guessed = autoType(e.id, this.entities[e.id], { name: d?.name ?? e.name, model: d?.model as string | null, manufacturer: d?.manufacturer as string | null });
    const cur = (this.hs.types?.[e.id] as DeviceType | undefined) ?? guessed;
    return html`<select class="sel tsel" aria-label=${`Tipo de ${e.name}`} @change=${(ev: Event) => {
      const t = (ev.target as HTMLSelectElement).value as DeviceType;
      const next = { ...(this.hs.types ?? {}) };
      if (t === guessed) delete next[e.id];
      else next[e.id] = t;
      void this.saveHouse({ types: next });
    }}>${types.map((t) => html`<option value=${t} ?selected=${t === cur}>${DEVICE_TYPES[t].name}${t === guessed ? " (automático)" : ""}</option>`)}</select>`;
  }

  /** The views the preview can show: Casa, the rooms and the special views. */
  private previewViews(): Array<[string, string]> {
    const rooms = this.home.rooms.filter((r) => !r.hidden && r.devices.some((x) => !x.hidden)).map((r): [string, string] => [r.id, r.name]);
    return [["home", "Casa"], ...rooms, ["@clima", "Clima"], ["@seguranca", "Segurança"], ["@cenas", "Cenas"]];
  }

  /** A style drawn with this house: a small, inert copy of the dashboard in that style. */
  private thumb(style: Style) {
    const tag = styleTag(style);
    const d = { ...this.dash, style };
    return html`<i class="thumb-live"><span class="tin">
      ${shtml`<${tag} preview .home=${this.home} .entities=${this.entities} .dashboard=${d} .conn=${this.conn}></${tag}>`}
    </span></i>`;
  }

  /** Put back the dashboards these settings changed, as they were when the settings opened. */
  private undo(): Promise<void> {
    const original = this.original;
    return this.run(async () => {
      let dashboards = this.dashboards;
      for (const d of Object.values(original)) {
        const r = await this.ws<{ dashboards: Dashboard[] }>({
          type: "pine3_home/dashboards/save",
          dashboard: {
            id: d.id, name: d.name, style: d.style, dock: d.dock, theme: d.theme, screen_edit: d.screen_edit !== false,
            ...(d.ambient_after != null ? { ambient_after: d.ambient_after } : {}),
            ...(d.ambient_brightness ? { ambient_brightness: d.ambient_brightness } : {}),
          },
        });
        dashboards = r.dashboards;
      }
      this.dashboards = dashboards;
      this.original = {};
      this.emit("dashboards", dashboards);
    }, "Alterações desfeitas.");
  }

  private setPin(pin: string | null): Promise<void> {
    return this.run(async () => {
      const r = await this.ws<{ set: boolean }>({ type: "pine3_home/pin/set", pin });
      this.pinSet = r.set;
      this.newPin = "";
    }, pin ? "PIN guardado." : "PIN removido: os ecrãs deixam de abrir as definições.");
  }

  // ---------- actions ----------
  private approve(): Promise<void> {
    const name = this.screenName.trim() || "Ecrã";
    return this.run(async () => {
      await this.ws({ type: "pine3_home/screens/approve", code: this.code, name, dashboard: this.dash.id });
      this.code = "";
      this.screenName = "";
      if (location.search.includes("code=")) history.replaceState(null, "", location.pathname);
      await this.loadScreens();
    }, `${name} emparelhado. O ecrã liga-se dentro de segundos.`);
  }

  private updateScreen(s: Screen, changes: { name?: string; dashboard?: string }): Promise<void> {
    return this.run(async () => {
      await this.ws({ type: "pine3_home/screens/update", screen_id: s.id, ...changes });
      await this.loadScreens();
    });
  }

  private removeScreen(s: Screen): Promise<void> | void {
    if (!confirm(`Remover ${s.name}? O ecrã volta a pedir um código.`)) return;
    return this.run(async () => {
      await this.ws({ type: "pine3_home/screens/remove", screen_id: s.id });
      await this.loadScreens();
    }, `${s.name} removido.`);
  }

  private renameDashboard(d: Dashboard, name: string): Promise<void> | void {
    if (!name || name === d.name) return;
    return this.run(async () => {
      const r = await this.ws<{ dashboards: Dashboard[] }>({ type: "pine3_home/dashboards/save", dashboard: { id: d.id, name, style: d.style } });
      this.dashboards = r.dashboards;
      this.emit("dashboards", r.dashboards);
    });
  }

  private addDashboard(): Promise<void> {
    let n = this.dashboards.length + 1;
    while (this.dashboards.some((d) => d.id === `painel-${n}`)) n++;
    const dash = { id: `painel-${n}`, name: `Painel ${n}`, style: "vidro" as Style };
    return this.run(async () => {
      const r = await this.ws<{ dashboards: Dashboard[] }>({ type: "pine3_home/dashboards/save", dashboard: dash });
      this.dashboards = r.dashboards;
      this.emit("dashboards", r.dashboards);
      this.emit("dashboard-select", dash.id);
      this.section = "aparencia";
    }, `${dash.name} criado: escolhe o estilo.`);
  }

  private removeDashboard(d: Dashboard): Promise<void> | void {
    if (!confirm(`Remover o painel ${d.name}? Os ecrãs que o mostram passam para o primeiro painel.`)) return;
    return this.run(async () => {
      const r = await this.ws<{ dashboards: Dashboard[] }>({ type: "pine3_home/dashboards/remove", dashboard_id: d.id });
      this.dashboards = r.dashboards;
      this.emit("dashboards", r.dashboards);
      if (d.id === this.dash.id) this.emit("dashboard-select", r.dashboards[0].id);
      await this.loadScreens();
    }, `${d.name} removido.`);
  }

  private resetLayouts(): Promise<void> | void {
    if (!confirm(`Repor a disposição automática de todas as vistas de ${this.dash.name}?`)) return;
    return this.run(async () => {
      for (const view of Object.keys(this.dash.layouts ?? {})) {
        await this.ws({ type: "pine3_home/dashboards/layout", dashboard_id: this.dash.id, view, layout: null });
      }
      const r = await this.ws<{ dashboards: Dashboard[] }>({ type: "pine3_home/dashboards" });
      this.dashboards = r.dashboards;
      this.emit("dashboards", r.dashboards);
    }, "Disposição reposta.");
  }

  static styles = css`
    :host {
      position: absolute;
      inset: 0;
      z-index: 20;
      display: block;
      background: radial-gradient(80% 70% at 75% 0%, #262a31 0%, #15171b 60%, #101215 100%);
      color: #eceef1;
      font-family: "Geist", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      -webkit-font-smoothing: antialiased;
      animation: in 0.25s ease;
    }
    @keyframes in {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
    }
    button,
    input,
    select {
      font: inherit;
      color: inherit;
    }
    button {
      cursor: pointer;
      border: 0;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 99px;
      padding: 0.5rem 1rem;
    }
    button:disabled {
      opacity: 0.4;
      cursor: default;
    }
    button:focus-visible,
    input:focus-visible,
    select:focus-visible {
      outline: 2px solid #6aa8ff;
      outline-offset: 2px;
    }
    .ic {
      width: 1.2em;
      height: 1.2em;
      flex: none;
    }
    .wrap {
      position: absolute;
      inset: 0;
      display: grid;
      grid-template-columns: minmax(220px, 26%) 1fr;
      gap: 24px;
      padding: 24px;
      box-sizing: border-box;
    }
    .side {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-height: 0;
      overflow: auto;
    }
    .top {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }
    .top b {
      font-size: 1.6rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .x {
      width: 44px;
      height: 44px;
      padding: 0;
      display: grid;
      place-items: center;
    }
    .item {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 12px 16px;
      border-radius: 18px;
      background: none;
      font-size: 1.1rem;
      text-align: left;
    }
    .item i {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: rgba(255, 255, 255, 0.08);
      flex: none;
    }
    .item.on {
      background: #eceef1;
      color: #17191c;
    }
    .item.on i {
      background: rgba(23, 25, 28, 0.08);
    }
    .done {
      margin-top: auto;
      align-self: flex-start;
      background: #eceef1;
      color: #17191c;
      font-weight: 600;
      padding: 0.7rem 1.4rem;
    }
    .content {
      min-height: 0;
      overflow: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-right: 4px;
    }
    .card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 28px;
      padding: 24px 28px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    h2,
    h3 {
      margin: 0;
      letter-spacing: -0.02em;
    }
    h2 {
      font-size: 1.7rem;
      font-weight: 600;
    }
    h3 {
      font-size: 1.15rem;
      font-weight: 600;
    }
    .muted {
      margin: 0;
      color: #9aa1ab;
      line-height: 1.45;
    }
    .muted b {
      color: #eceef1;
      font-weight: 500;
    }
    .soon {
      margin-top: 8px;
      font-size: 0.9rem;
    }
    .msg {
      margin: 0;
      padding: 10px 16px;
      border-radius: 14px;
      background: rgba(91, 209, 143, 0.12);
      color: #7fe0a8;
    }
    .msg.bad {
      background: rgba(255, 107, 107, 0.12);
      color: #ff8b8b;
    }
    .dpick {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      color: #9aa1ab;
    }
    .chip {
      padding: 0.35rem 0.9rem;
    }
    .chip.on {
      background: #eceef1;
      color: #17191c;
      font-weight: 600;
    }
    /* the live preview: the real dashboard at 1334 x 800, scaled to the frame */
    .pv {
      position: relative;
      width: 100%;
      max-width: 720px;
      border-radius: 18px;
      overflow: hidden;
      background: #0b0c0e;
      box-shadow: 0 0 0 6px #0b0c0e, 0 20px 40px -20px rgba(0, 0, 0, 0.6);
      pointer-events: none;
    }
    .pvin {
      position: absolute;
      left: 0;
      top: 0;
      width: ${PREVIEW_W}px;
      height: ${PREVIEW_H}px;
      transform-origin: 0 0;
    }
    .pvviews {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .thumb-live {
      position: relative;
      overflow: hidden;
      pointer-events: none;
      background: #0b0c0e;
    }
    .tin {
      position: absolute;
      left: 0;
      top: 0;
      width: ${PREVIEW_W}px;
      height: ${PREVIEW_H}px;
      transform-origin: 0 0;
      transform: scale(var(--ts, 0.1));
    }
    .undo {
      align-self: flex-start;
      margin-top: auto;
      color: #f2c36a;
    }
    .undo + .done {
      margin-top: 0;
    }
    .styles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 12px;
    }
    .sty {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.05);
      text-align: left;
    }
    .sty i {
      display: block;
      aspect-ratio: 5 / 3;
      border-radius: 14px;
    }
    .sty span {
      padding: 0 6px 4px;
      display: flex;
      flex-direction: column;
    }
    .sty small {
      color: #8a9099;
      font-size: 0.8rem;
    }
    .sty.on {
      outline: 3px solid #eceef1;
    }
    .seg {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .seg button.on {
      background: #f5e9d6;
      color: #17191c;
      font-weight: 600;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 12px 16px;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.05);
      flex-wrap: wrap;
    }
    .row > span:first-child:not(.grow) {
      flex: 1;
      min-width: 200px;
      color: #c7ccd3;
    }
    .grow {
      flex: 1;
      min-width: 160px;
      display: flex;
      flex-direction: column;
    }
    .grow small {
      color: #8a9099;
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .thumb {
      width: 64px;
      aspect-ratio: 5 / 3;
      border-radius: 8px;
      flex: none;
    }
    .sw {
      width: 52px;
      height: 30px;
      padding: 0;
      border-radius: 99px;
      background: #3a3f46;
      position: relative;
      flex: none;
    }
    .sw::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #9aa1ab;
      transition: left 0.15s;
    }
    .sw[aria-checked="true"] {
      background: #f2b53c;
    }
    .sw[aria-checked="true"]::after {
      left: 25px;
      background: #fff;
    }
    .sel,
    .txt,
    .code {
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      padding: 0.55rem 0.8rem;
      min-width: 0;
    }
    .sel {
      max-width: 320px;
    }
    .txt.inline {
      background: none;
      border-color: transparent;
      padding: 0.2rem 0.3rem;
      margin-left: -0.3rem;
      font-weight: 500;
    }
    .txt.inline:hover,
    .txt.inline:focus {
      border-color: rgba(255, 255, 255, 0.15);
      background: rgba(0, 0, 0, 0.2);
    }
    .code {
      width: 9ch;
      font-size: 1.3rem;
      letter-spacing: 0.15em;
      font-variant-numeric: tabular-nums;
    }
    .pair {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
    }
    .pri {
      background: #f2b53c;
      color: #2a1a04;
      font-weight: 600;
    }
    .danger {
      color: #ff8b8b;
    }
    .row.off .grow {
      opacity: 0.5;
    }
    .mono {
      font-family: ui-monospace, "Geist Mono", Menlo, monospace;
      font-size: 0.8rem;
    }
    .row > span.mv.mv:first-child {
      flex: none;
      min-width: 0;
    }
    .mv {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .ib {
      width: 32px;
      height: 32px;
      padding: 0;
      display: grid;
      place-items: center;
    }
    .ib.on {
      background: #eceef1;
      color: #17191c;
    }
    .ricon {
      width: 48px;
      height: 48px;
      padding: 0;
      display: grid;
      place-items: center;
      border-radius: 14px;
      font-size: 1.2rem;
    }
    .icons {
      flex-basis: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding-left: 108px;
    }
    .search {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0.6rem 1rem;
      border-radius: 16px;
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #9aa1ab;
    }
    .search input {
      flex: 1;
      border: 0;
      background: none;
      outline: none;
      min-width: 0;
      color: #eceef1;
    }
    .rh {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .rh small {
      font-weight: 400;
      font-size: 0.95rem;
      color: #9aa1ab;
    }
    .tsel {
      padding: 0.35rem 0.6rem;
      font-size: 0.9rem;
    }
    .badge.sec {
      background: rgba(255, 255, 255, 0.07);
      color: #9aa1ab;
    }
    .badge {
      font-size: 0.85rem;
      padding: 0.25rem 0.7rem;
      border-radius: 99px;
      background: rgba(242, 181, 60, 0.18);
      color: #f2c36a;
    }
    .add {
      align-self: flex-start;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    @media (max-width: 760px) {
      .wrap {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        padding: 16px;
        gap: 12px;
      }
      .side {
        flex-direction: row;
        overflow-x: auto;
        align-items: center;
      }
      .top {
        margin: 0;
      }
      .top b,
      .item i,
      .done {
        display: none;
      }
      .item {
        flex: none;
        padding: 8px 14px;
        font-size: 0.95rem;
      }
      .card {
        padding: 18px;
        border-radius: 22px;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "pine3-settings": Pine3Settings;
  }
}
