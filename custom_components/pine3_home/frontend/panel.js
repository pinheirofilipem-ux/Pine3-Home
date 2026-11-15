import{b,i as g,n as u,r as n,a as $,A as c,c as t,t as v}from"./chunks/base-BYQr5Ns4.js";const y={vidro:"Vidro",bento:"Bento",moldura:"Moldura",editorial:"Editorial",instrumento:"Instrumento",orbita:"Órbita",carteira:"Carteira",lente:"Lente"},f=["vidro","bento","moldura","editorial"],p={left:"À esquerda",bottom:"Em baixo"},S={grafite:"Grafite (escuro)",claro:"Claro",auto:"Automático (pôr do sol)"},m={AVR:"Aveiro",BJA:"Beja",BRG:"Braga",BGC:"Bragança",CBO:"Castelo Branco",CBR:"Coimbra",EVR:"Évora",FAR:"Faro",GDA:"Guarda",LRA:"Leiria",LSB:"Lisboa",PTG:"Portalegre",PTO:"Porto",STM:"Santarém",STB:"Setúbal",VCT:"Viana do Castelo",VRL:"Vila Real",VIS:"Viseu",MCN:"Madeira · Costa Norte",MCS:"Madeira · Costa Sul",MRM:"Madeira · Regiões Montanhosas",MPS:"Porto Santo",AOR:"Açores · Grupo Oriental",ACE:"Açores · Grupo Central",AOC:"Açores · Grupo Ocidental"},w=[[0,"Nunca"],[1,"1 minuto"],[2,"2 minutos"],[5,"5 minutos"],[10,"10 minutos"],[30,"30 minutos"]],x={auto:"Automático (dia 50%, noite 12%)",low:"Sempre baixo (12%)",off:"Não mexer"};var _=Object.defineProperty,A=Object.getOwnPropertyDescriptor,o=(a,e,s,r)=>{for(var l=r>1?void 0:r?A(e,s):e,d=a.length-1,h;d>=0;d--)(h=a[d])&&(l=(r?h(e,s,l):h(l))||l);return r&&l&&_(e,s,l),l};const D="/pine3/ecra";let i=class extends ${constructor(){super(...arguments),this.narrow=!1,this.dashboards=[],this.styles=[],this.screens=[],this.pending=[],this.code="",this.screenName="",this.screenDash="",this.message=null,this.busy=!1,this.ipmaArea=null,this.loaded=!1}connectedCallback(){super.connectedCallback();const a=new URLSearchParams(location.search).get("code");a&&/^\d{6}$/.test(a)&&(this.code=a),this.timer=window.setInterval(()=>this.refreshPending(),4e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer)}updated(){this.hass&&!this.loaded&&(this.loaded=!0,this.load())}get admin(){return!!this.hass?.user?.is_admin}async load(){if(!this.hass)return;const a=await this.hass.callWS({type:"pine3_home/dashboards"});this.dashboards=a.dashboards,this.styles=a.styles,!this.screenDash&&a.dashboards.length&&(this.screenDash=a.dashboards[0].id);const e=await this.hass.callWS({type:"pine3_home/home"});if(this.ipmaArea=e.settings?.ipma_area??null,this.admin){const s=await this.hass.callWS({type:"pine3_home/screens"});this.screens=s.screens,await this.refreshPending()}}async refreshPending(){if(!(!this.hass||!this.admin))try{const a=await this.hass.callWS({type:"pine3_home/screens/pending"});this.pending=a.pending}catch{}}async run(a,e){this.busy=!0,this.message=null;try{await a(),e&&(this.message={kind:"ok",text:e})}catch(s){this.message={kind:"bad",text:s.message??String(s)}}finally{this.busy=!1}}approve(){const a=this.screenName.trim()||"Ecrã";return this.run(async()=>{await this.hass.callWS({type:"pine3_home/screens/approve",code:this.code,name:a,dashboard:this.screenDash}),this.code="",this.screenName="",location.search.includes("code=")&&history.replaceState(null,"",location.pathname),await this.load()},`${a} emparelhado. O ecrã liga-se dentro de segundos.`)}setScreenDashboard(a,e){return this.run(async()=>{await this.hass.callWS({type:"pine3_home/screens/update",screen_id:a.id,dashboard:e}),await this.load()})}renameScreen(a){const e=prompt("Nome do ecrã",a.name)?.trim();if(!(!e||e===a.name))return this.run(async()=>{await this.hass.callWS({type:"pine3_home/screens/update",screen_id:a.id,name:e}),await this.load()})}removeScreen(a){if(confirm(`Remover ${a.name}? O ecrã volta a pedir um código.`))return this.run(async()=>{await this.hass.callWS({type:"pine3_home/screens/remove",screen_id:a.id}),await this.load()},`${a.name} removido.`)}saveDashboard(a,e){return this.run(async()=>{const s=await this.hass.callWS({type:"pine3_home/dashboards/save",dashboard:{id:a.id,name:a.name,style:a.style,dock:a.dock,theme:a.theme,screen_edit:a.screen_edit!==!1,...e}});this.dashboards=s.dashboards})}addDashboard(){const a=prompt("Nome do novo painel")?.trim();if(!a)return;let e=a.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,32)||"painel";for(;this.dashboards.some(s=>s.id===e);)e=`${e.slice(0,28)}-${Math.floor(Math.random()*900+100)}`;return this.saveDashboard({id:e,name:a,style:"vidro",dock:"left",theme:"grafite"},{})}resetLayouts(a){if(confirm(`Repor a disposição automática de todas as vistas de ${a.name}?`))return this.run(async()=>{for(const e of Object.keys(a.layouts??{}))await this.hass.callWS({type:"pine3_home/dashboards/layout",dashboard_id:a.id,view:e,layout:null});await this.load()},`Disposição de ${a.name} reposta.`)}removeDashboard(a){if(confirm(`Remover o painel ${a.name}? Os ecrãs que o usam passam para o primeiro painel.`))return this.run(async()=>{const e=await this.hass.callWS({type:"pine3_home/dashboards/remove",dashboard_id:a.id});this.dashboards=e.dashboards,await this.load()})}setIpmaArea(a){return this.run(async()=>{await this.hass.callWS({type:"pine3_home/home/settings",ipma_area:a||null}),this.ipmaArea=a||null},a?`Avisos do IPMA: ${m[a]}.`:"Avisos do IPMA desligados.")}dashName(a){return this.dashboards.find(e=>e.id===a)?.name??a}render(){if(!this.hass)return c;const a=`${location.origin}${D}`;return t`
      <header>
        <h1>Pine3 Home</h1>
        <span class="muted">Painéis e ecrãs da casa</span>
      </header>
      ${this.message?t`<p class="msg ${this.message.kind}" role="status">${this.message.text}</p>`:c}
      ${this.admin?t`
            <section class="pane">
              <h2>Emparelhar um ecrã</h2>
              <p class="muted">
                No tablet, abre <a href=${a} target="_blank" rel="noopener">${a}</a>. Aparece um código de 6
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
              ${this.pending.length?t`<p class="muted">À espera: ${this.pending.map(e=>t`<button class="chip" @click=${()=>this.code=e.code}>${e.code}</button>`)}</p>`:c}
            </section>

            <section class="pane">
              <h2>Ecrãs</h2>
              ${this.screens.length?t`<ul class="list">
                    ${this.screens.map(e=>t`<li>
                        <div class="grow">
                          <strong>${e.name}</strong>
                          <span class="muted">${e.active===!1?"token revogado":e.last_used?`visto ${new Date(e.last_used).toLocaleString("pt-PT")}`:"ainda não ligou"}</span>
                        </div>
                        <select aria-label="Painel de ${e.name}" @change=${s=>this.setScreenDashboard(e,s.target.value)}>
                          ${this.dashboards.map(s=>t`<option value=${s.id} ?selected=${s.id===e.dashboard}>${s.name}</option>`)}
                        </select>
                        <button @click=${()=>this.renameScreen(e)}>Renomear</button>
                        <button class="danger" @click=${()=>this.removeScreen(e)}>Remover</button>
                      </li>`)}
                  </ul>`:t`<p class="muted">Ainda não há ecrãs emparelhados.</p>`}
            </section>
          `:t`<section class="pane"><p class="muted">Só um administrador pode emparelhar ecrãs e alterar painéis.</p></section>`}

      <section class="pane">
        <div class="row"><h2 class="grow">Painéis</h2>${this.admin?t`<button @click=${this.addDashboard}>Novo painel</button>`:c}</div>
        <ul class="list">
          ${this.dashboards.map(e=>t`<li>
              <div class="grow">
                <strong>${e.name}</strong>
                <span class="muted">${this.screens.filter(s=>s.dashboard===e.id).length} ecrã(s)</span>
              </div>
              <label>Estilo
                <select ?disabled=${!this.admin} @change=${s=>this.saveDashboard(e,{style:s.target.value})}>
                  ${this.styles.map(s=>t`<option value=${s} ?selected=${s===e.style}>${y[s]??s}${f.includes(s)?"":" (em breve)"}</option>`)}
                </select>
              </label>
              <label title="Só no estilo Vidro; os outros estilos têm a sua navegação">Dock
                <select ?disabled=${!this.admin||e.style!=="vidro"} @change=${s=>this.saveDashboard(e,{dock:s.target.value})}>
                  ${Object.keys(p).map(s=>t`<option value=${s} ?selected=${s===e.dock}>${p[s]}</option>`)}
                </select>
              </label>
              <label>Tema
                <select ?disabled=${!this.admin} @change=${s=>this.saveDashboard(e,{theme:s.target.value})}>
                  ${Object.entries(S).map(([s,r])=>t`<option value=${s} ?selected=${s===e.theme}>${r}</option>`)}
                </select>
              </label>
              <label>Face ambiente
                <select ?disabled=${!this.admin} @change=${s=>this.saveDashboard(e,{ambient_after:Number(s.target.value)})}>
                  ${w.map(([s,r])=>t`<option value=${s} ?selected=${s===(e.ambient_after??2)}>${r}</option>`)}
                </select>
              </label>
              <label title="Só no Pine3 Wallpanel">Brilho no ambiente
                <select ?disabled=${!this.admin} @change=${s=>this.saveDashboard(e,{ambient_brightness:s.target.value})}>
                  ${Object.entries(x).map(([s,r])=>t`<option value=${s} ?selected=${s===(e.ambient_brightness??"auto")}>${r}</option>`)}
                </select>
              </label>
              <label class="check">
                <input type="checkbox" ?disabled=${!this.admin} .checked=${e.screen_edit!==!1}
                  @change=${s=>this.saveDashboard(e,{screen_edit:s.target.checked})} />
                Editar nos ecrãs
              </label>
              ${this.admin&&Object.keys(e.layouts??{}).length?t`<button @click=${()=>this.resetLayouts(e)}>Repor layouts</button>`:c}
              ${this.admin&&this.dashboards.length>1?t`<button class="danger" @click=${()=>this.removeDashboard(e)}>Remover</button>`:c}
            </li>`)}
        </ul>
      </section>
      <section class="pane">
        <h2>Casa</h2>
        <div class="pair">
          <label>Avisos do IPMA
            <select ?disabled=${!this.admin} @change=${e=>this.setIpmaArea(e.target.value)}>
              <option value="" ?selected=${!this.ipmaArea}>Sem avisos</option>
              ${Object.entries(m).map(([e,s])=>t`<option value=${e} ?selected=${e===this.ipmaArea}>${s}</option>`)}
            </select>
          </label>
        </div>
        <p class="muted">Os avisos aparecem no cartão do tempo de todos os painéis.</p>
      </section>
      <footer class="muted">Painel em uso nos ecrãs: ${this.screens.map(e=>`${e.name} → ${this.dashName(e.dashboard)}`).join(" · ")||"—"}</footer>
    `}};i.styles=[b,g`
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
    `];o([u({attribute:!1})],i.prototype,"hass",2);o([u({type:Boolean})],i.prototype,"narrow",2);o([n()],i.prototype,"dashboards",2);o([n()],i.prototype,"styles",2);o([n()],i.prototype,"screens",2);o([n()],i.prototype,"pending",2);o([n()],i.prototype,"code",2);o([n()],i.prototype,"screenName",2);o([n()],i.prototype,"screenDash",2);o([n()],i.prototype,"message",2);o([n()],i.prototype,"busy",2);o([n()],i.prototype,"ipmaArea",2);i=o([v("pine3-home-panel")],i);
