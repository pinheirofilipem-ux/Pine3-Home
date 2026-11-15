import{b as u,i as g,n as m,r as n,a as b,A as l,c as t,S as v,D as p,t as $}from"./chunks/types-DHT8ioh6.js";var y=Object.defineProperty,f=Object.getOwnPropertyDescriptor,r=(s,e,a,c)=>{for(var o=c>1?void 0:c?f(e,a):e,h=s.length-1,d;h>=0;h--)(d=s[h])&&(o=(c?d(e,a,o):d(o))||o);return c&&o&&y(e,a,o),o};const w="/pine3/ecra";let i=class extends b{constructor(){super(...arguments),this.narrow=!1,this.dashboards=[],this.styles=[],this.screens=[],this.pending=[],this.code="",this.screenName="",this.screenDash="",this.message=null,this.busy=!1,this.loaded=!1}connectedCallback(){super.connectedCallback();const s=new URLSearchParams(location.search).get("code");s&&/^\d{6}$/.test(s)&&(this.code=s),this.timer=window.setInterval(()=>this.refreshPending(),4e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer)}updated(){this.hass&&!this.loaded&&(this.loaded=!0,this.load())}get admin(){return!!this.hass?.user?.is_admin}async load(){if(!this.hass)return;const s=await this.hass.callWS({type:"pine3_home/dashboards"});if(this.dashboards=s.dashboards,this.styles=s.styles,!this.screenDash&&s.dashboards.length&&(this.screenDash=s.dashboards[0].id),this.admin){const e=await this.hass.callWS({type:"pine3_home/screens"});this.screens=e.screens,await this.refreshPending()}}async refreshPending(){if(!(!this.hass||!this.admin))try{const s=await this.hass.callWS({type:"pine3_home/screens/pending"});this.pending=s.pending}catch{}}async run(s,e){this.busy=!0,this.message=null;try{await s(),e&&(this.message={kind:"ok",text:e})}catch(a){this.message={kind:"bad",text:a.message??String(a)}}finally{this.busy=!1}}approve(){const s=this.screenName.trim()||"Ecrã";return this.run(async()=>{await this.hass.callWS({type:"pine3_home/screens/approve",code:this.code,name:s,dashboard:this.screenDash}),this.code="",this.screenName="",location.search.includes("code=")&&history.replaceState(null,"",location.pathname),await this.load()},`${s} emparelhado. O ecrã liga-se dentro de segundos.`)}setScreenDashboard(s,e){return this.run(async()=>{await this.hass.callWS({type:"pine3_home/screens/update",screen_id:s.id,dashboard:e}),await this.load()})}renameScreen(s){const e=prompt("Nome do ecrã",s.name)?.trim();if(!(!e||e===s.name))return this.run(async()=>{await this.hass.callWS({type:"pine3_home/screens/update",screen_id:s.id,name:e}),await this.load()})}removeScreen(s){if(confirm(`Remover ${s.name}? O ecrã volta a pedir um código.`))return this.run(async()=>{await this.hass.callWS({type:"pine3_home/screens/remove",screen_id:s.id}),await this.load()},`${s.name} removido.`)}saveDashboard(s,e){return this.run(async()=>{const a=await this.hass.callWS({type:"pine3_home/dashboards/save",dashboard:{id:s.id,name:s.name,style:s.style,dock:s.dock,theme:s.theme,...e}});this.dashboards=a.dashboards})}addDashboard(){const s=prompt("Nome do novo painel")?.trim();if(!s)return;let e=s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,32)||"painel";for(;this.dashboards.some(a=>a.id===e);)e=`${e.slice(0,28)}-${Math.floor(Math.random()*900+100)}`;return this.saveDashboard({id:e,name:s,style:"vidro",dock:"left",theme:"grafite"},{})}removeDashboard(s){if(confirm(`Remover o painel ${s.name}? Os ecrãs que o usam passam para o primeiro painel.`))return this.run(async()=>{const e=await this.hass.callWS({type:"pine3_home/dashboards/remove",dashboard_id:s.id});this.dashboards=e.dashboards,await this.load()})}dashName(s){return this.dashboards.find(e=>e.id===s)?.name??s}render(){if(!this.hass)return l;const s=`${location.origin}${w}`;return t`
      <header>
        <h1>Pine3 Home</h1>
        <span class="muted">Painéis e ecrãs da casa</span>
      </header>
      ${this.message?t`<p class="msg ${this.message.kind}" role="status">${this.message.text}</p>`:l}
      ${this.admin?t`
            <section class="pane">
              <h2>Emparelhar um ecrã</h2>
              <p class="muted">
                No tablet, abre <a href=${s} target="_blank" rel="noopener">${s}</a>. Aparece um código de 6
                algarismos: escreve-o aqui ou lê o QR com o telemóvel.
              </p>
              <div class="pair">
                <label>Código
                  <input inputmode="numeric" maxlength="6" placeholder="000000" .value=${this.code}
                    @input=${e=>this.code=e.target.value.replace(/\D/g,"").slice(0,6)} />
                </label>
                <label>Nome
                  <input maxlength="40" placeholder="Cozinha" .value=${this.screenName}
                    @input=${e=>this.screenName=e.target.value} />
                </label>
                <label>Painel
                  <select .value=${this.screenDash} @change=${e=>this.screenDash=e.target.value}>
                    ${this.dashboards.map(e=>t`<option value=${e.id} ?selected=${e.id===this.screenDash}>${e.name}</option>`)}
                  </select>
                </label>
                <button class="primary" ?disabled=${this.busy||this.code.length!==6} @click=${this.approve}>Emparelhar</button>
              </div>
              ${this.pending.length?t`<p class="muted">À espera: ${this.pending.map(e=>t`<button class="chip" @click=${()=>this.code=e.code}>${e.code}</button>`)}</p>`:l}
            </section>

            <section class="pane">
              <h2>Ecrãs</h2>
              ${this.screens.length?t`<ul class="list">
                    ${this.screens.map(e=>t`<li>
                        <div class="grow">
                          <strong>${e.name}</strong>
                          <span class="muted">${e.active===!1?"token revogado":e.last_used?`visto ${new Date(e.last_used).toLocaleString("pt-PT")}`:"ainda não ligou"}</span>
                        </div>
                        <select aria-label="Painel de ${e.name}" @change=${a=>this.setScreenDashboard(e,a.target.value)}>
                          ${this.dashboards.map(a=>t`<option value=${a.id} ?selected=${a.id===e.dashboard}>${a.name}</option>`)}
                        </select>
                        <button @click=${()=>this.renameScreen(e)}>Renomear</button>
                        <button class="danger" @click=${()=>this.removeScreen(e)}>Remover</button>
                      </li>`)}
                  </ul>`:t`<p class="muted">Ainda não há ecrãs emparelhados.</p>`}
            </section>
          `:t`<section class="pane"><p class="muted">Só um administrador pode emparelhar ecrãs e alterar painéis.</p></section>`}

      <section class="pane">
        <div class="row"><h2 class="grow">Painéis</h2>${this.admin?t`<button @click=${this.addDashboard}>Novo painel</button>`:l}</div>
        <ul class="list">
          ${this.dashboards.map(e=>t`<li>
              <div class="grow">
                <strong>${e.name}</strong>
                <span class="muted">${this.screens.filter(a=>a.dashboard===e.id).length} ecrã(s)</span>
              </div>
              <label>Estilo
                <select ?disabled=${!this.admin} @change=${a=>this.saveDashboard(e,{style:a.target.value})}>
                  ${this.styles.map(a=>t`<option value=${a} ?selected=${a===e.style}>${v[a]??a}</option>`)}
                </select>
              </label>
              <label>Dock
                <select ?disabled=${!this.admin} @change=${a=>this.saveDashboard(e,{dock:a.target.value})}>
                  ${Object.keys(p).map(a=>t`<option value=${a} ?selected=${a===e.dock}>${p[a]}</option>`)}
                </select>
              </label>
              ${this.admin&&this.dashboards.length>1?t`<button class="danger" @click=${()=>this.removeDashboard(e)}>Remover</button>`:l}
            </li>`)}
        </ul>
      </section>
      <footer class="muted">Painel em uso nos ecrãs: ${this.screens.map(e=>`${e.name} → ${this.dashName(e.dashboard)}`).join(" · ")||"—"}</footer>
    `}};i.styles=[u,g`
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
    `];r([m({attribute:!1})],i.prototype,"hass",2);r([m({type:Boolean})],i.prototype,"narrow",2);r([n()],i.prototype,"dashboards",2);r([n()],i.prototype,"styles",2);r([n()],i.prototype,"screens",2);r([n()],i.prototype,"pending",2);r([n()],i.prototype,"code",2);r([n()],i.prototype,"screenName",2);r([n()],i.prototype,"screenDash",2);r([n()],i.prototype,"message",2);r([n()],i.prototype,"busy",2);i=r([$("pine3-home-panel")],i);
