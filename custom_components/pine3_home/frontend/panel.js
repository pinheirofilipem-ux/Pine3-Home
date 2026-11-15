import{i as S,n as h,r as c,a as _,A as d,m as C,b as E,c as O,d as R,e as z,f as m,g as i,s as x,u as y,S as f,w as M,h as I,j as V,t as A,k as D}from"./chunks/styles-CZfDJNyJ.js";const v={vidro:"Vidro",bento:"Bento",moldura:"Moldura",editorial:"Editorial",instrumento:"Instrumento",orbita:"Órbita",carteira:"Carteira",lente:"Lente"},N=["vidro","bento","moldura","editorial","instrumento"],B={grafite:"Grafite (escuro)",claro:"Claro",auto:"Automático (pôr do sol)"},k={AVR:"Aveiro",BJA:"Beja",BRG:"Braga",BGC:"Bragança",CBO:"Castelo Branco",CBR:"Coimbra",EVR:"Évora",FAR:"Faro",GDA:"Guarda",LRA:"Leiria",LSB:"Lisboa",PTG:"Portalegre",PTO:"Porto",STM:"Santarém",STB:"Setúbal",VCT:"Viana do Castelo",VRL:"Vila Real",VIS:"Viseu",MCN:"Madeira · Costa Norte",MCS:"Madeira · Costa Sul",MRM:"Madeira · Regiões Montanhosas",MPS:"Porto Santo",AOR:"Açores · Grupo Oriental",ACE:"Açores · Grupo Central",AOC:"Açores · Grupo Ocidental"},T=[[0,"Nunca"],[1,"1 minuto"],[2,"2 minutos"],[5,"5 minutos"],[10,"10 minutos"],[30,"30 minutos"]],L={auto:"Automático (dia 50%, noite 12%)",low:"Sempre baixo (12%)",off:"Não mexer"};var j=Object.defineProperty,q=Object.getOwnPropertyDescriptor,n=(s,e,t,a)=>{for(var o=a>1?void 0:a?q(e,t):e,u=s.length-1,b;u>=0;u--)(b=s[u])&&(o=(a?b(e,t,o):b(o))||o);return a&&o&&j(e,t,o),o};const G=[{id:"aparencia",name:"Aparência",icon:C},{id:"ambiente",name:"Face ambiente",icon:E},{id:"casa",name:"Casa",icon:O},{id:"ecras",name:"Ecrãs e painéis",icon:R},{id:"sistema",name:"Sistema",icon:z}],H=["vidro","bento","moldura","editorial","instrumento","orbita","carteira","lente"],F={bento:"pílulas no topo",moldura:"deslizar, com pontos no canto",editorial:"índice em palavras",instrumento:"banco de teclas"},g=1334,w=800,$=s=>M`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${s} fill="currentColor"/></svg>`;let r=class extends _{constructor(){super(...arguments),this.entities={},this.dashboards=[],this.dashboardId="",this.version="",this.start="aparencia",this.code="",this.section="aparencia",this.screens=[],this.pending=[],this.screenName="",this.message=null,this.scale=.4,this.pvView="home",this.original={}}connectedCallback(){super.connectedCallback(),this.section=this.start,this.loadScreens(),this.timer=window.setInterval(()=>this.loadPending(),4e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.resize?.disconnect(),this.thumbResize?.disconnect()}updated(s){const e=this.renderRoot.querySelector(".pv");e&&!this.resize&&(this.resize=new ResizeObserver(()=>this.scale=e.clientWidth/g),this.resize.observe(e)),!e&&this.resize&&(this.resize.disconnect(),this.resize=void 0);const t=this.renderRoot.querySelector(".styles"),a=t?.querySelector(".thumb-live");t&&a&&(!this.thumbResize||this.thumbGrid!==t)&&(this.thumbResize?.disconnect(),this.thumbGrid=t,this.thumbResize=new ResizeObserver(()=>t.style.setProperty("--ts",String(a.clientWidth/g))),this.thumbResize.observe(a)),s.has("start")&&(this.section=this.start)}get dash(){return this.dashboards.find(s=>s.id===this.dashboardId)??this.dashboards[0]}ws(s){return this.conn.sendMessagePromise(s)}async run(s,e){this.message=null;try{await s(),e&&(this.message={ok:!0,text:e})}catch(t){this.message={ok:!1,text:t.message??String(t)}}}async loadScreens(){try{this.screens=(await this.ws({type:"pine3_home/screens"})).screens,await this.loadPending()}catch{}}async loadPending(){if(this.section==="ecras")try{this.pending=(await this.ws({type:"pine3_home/screens/pending"})).pending}catch{}}save(s){const e=this.dash;this.original[e.id]||(this.original={...this.original,[e.id]:{...e}});const t={...e,...s};return this.dashboards=this.dashboards.map(a=>a.id===e.id?t:a),this.emit("dashboards",this.dashboards),this.run(async()=>{const a=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:e.id,name:t.name,style:t.style,...s}});this.dashboards=a.dashboards,this.emit("dashboards",a.dashboards)})}emit(s,e){this.dispatchEvent(new CustomEvent(`pine3-${s}`,{detail:e,bubbles:!0,composed:!0}))}close(){this.emit("settings-close",null)}render(){return this.dash?i`<div class="wrap">
      <nav class="side" aria-label="Definições">
        <div class="top">
          <button class="x" aria-label="Fechar as definições" @click=${()=>this.close()}>${$(I)}</button>
          <b>Definições</b>
        </div>
        ${G.map(s=>i`<button class=${m({item:!0,on:s.id===this.section})} @click=${()=>{this.section=s.id,this.message=null,this.loadPending()}}>
          <i>${$(s.icon)}</i>${s.name}</button>`)}
        ${Object.keys(this.original).length?i`<button class="undo" @click=${()=>this.undo()}>Desfazer alterações</button>`:d}
        <button class="done" @click=${()=>this.close()}>Concluído</button>
      </nav>
      <main class="content">
        ${this.message?i`<p class=${m({msg:!0,bad:!this.message.ok})} role="status">${this.message.text}</p>`:d}
        ${this.section==="aparencia"?this.renderAppearance():d}
        ${this.section==="ambiente"?this.renderAmbient():d}
        ${this.section==="casa"?this.renderHouse():d}
        ${this.section==="ecras"?this.renderScreens():d}
        ${this.section==="sistema"?this.renderSystem():d}
      </main>
    </div>`:d}dashPicker(){return this.dashboards.length<2?d:i`<div class="dpick">
      <span>A editar o painel</span>
      ${this.dashboards.map(s=>i`<button class=${m({chip:!0,on:s.id===this.dash.id})} @click=${()=>this.emit("dashboard-select",s.id)}>${s.name}</button>`)}
    </div>`}renderAppearance(){const s=this.dash,e=x(s.style),t=s.style==="vidro";return i`<section class="card">
        <h2>Aparência</h2>
        <p class="muted">O estilo, o tema e a navegação do painel <b>${s.name}</b>. Vês o resultado já aqui; fica guardado no Home Assistant para todos os ecrãs que mostram este painel.</p>
        ${this.dashPicker()}
        <div class="pv" style=${`height:${Math.round(w*this.scale)}px`} aria-label="Pré-visualização">
          <div class="pvin" style=${`transform:scale(${this.scale})`}>
            ${y`<${e} .home=${this.home} .entities=${this.entities} .dashboard=${s} .conn=${this.conn} .startView=${this.pvView}></${e}>`}
          </div>
        </div>
        <div class="pvviews" aria-label="Vista na pré-visualização">
          ${this.previewViews().map(([a,o])=>i`<button class=${m({chip:!0,on:a===this.pvView})} @click=${()=>this.pvView=a}>${o}</button>`)}
        </div>
      </section>
      <section class="card">
        <h3>Estilo</h3>
        <div class="styles">${H.map(a=>{const o=N.includes(a);return i`<button class=${m({sty:!0,on:a===s.style})} ?disabled=${!o} aria-pressed=${a===s.style}
            @click=${()=>this.save({style:a})}>
            ${o?this.thumb(a):i`<i style=${`background:${f[a]}`}></i>`}
            <span>${v[a]}${o?"":i`<small>em breve</small>`}</span></button>`})}</div>
      </section>
      <section class="card">
        <h3>Tema</h3>
        <p class="muted">${t?"Claro, escuro, ou escuro ao pôr do sol.":"Só no Vidro: os outros estilos têm a sua própria paleta."}</p>
        <div class="seg">${Object.entries(B).map(([a,o])=>i`<button class=${m({on:a===s.theme})} ?disabled=${!t} @click=${()=>this.save({theme:a})}>${o}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Navegação</h3>
        <p class="muted">${t?"A dock do Vidro, à esquerda ou em baixo.":`Este estilo navega com ${F[s.style]??"a sua própria navegação"}.`}</p>
        <div class="seg">${[["left","Dock à esquerda"],["bottom","Dock em baixo"]].map(([a,o])=>i`<button class=${m({on:a===s.dock})} ?disabled=${!t} @click=${()=>this.save({dock:a})}>${o}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Editar a grelha nos ecrãs</h3>
        <div class="row">
          <span>Os tablets que mostram este painel podem mudar a ordem, o tamanho e os cartões de cada vista (o lápis).</span>
          <button class="sw" role="switch" aria-checked=${s.screen_edit!==!1} aria-label="Editar a grelha nos ecrãs"
            @click=${()=>this.save({screen_edit:s.screen_edit===!1})}></button>
        </div>
      </section>`}renderAmbient(){const s=this.dash;return i`<section class="card">
        <h2>Face ambiente</h2>
        <p class="muted">Um relógio calmo com o tempo e a casa numa linha, depois de alguns minutos sem tocar no ecrã. O primeiro toque só acorda.</p>
        ${this.dashPicker()}
        <h3>Aparece depois de</h3>
        <div class="seg">${T.map(([e,t])=>i`<button class=${m({on:e===(s.ambient_after??2)})} @click=${()=>this.save({ambient_after:e})}>${t}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Brilho na face ambiente</h3>
        <p class="muted">Só nos tablets com a app Pine3 Wallpanel. Fora da face ambiente, o brilho é o do sistema.</p>
        <div class="seg">${Object.entries(L).map(([e,t])=>i`<button class=${m({on:e===(s.ambient_brightness??"auto")})} @click=${()=>this.save({ambient_brightness:e})}>${t}</button>`)}</div>
      </section>`}renderHouse(){const s=this.home.settings?.ipma_area??"";return i`<section class="card">
      <h2>Casa</h2>
      <p class="muted">O que é da casa e vale para todos os painéis.</p>
      <h3>Avisos do IPMA</h3>
      <p class="muted">Os avisos da tua área aparecem no cartão do tempo, na face ambiente e no topo de cada estilo.</p>
      <select class="sel" aria-label="Área dos avisos do IPMA" @change=${e=>{const t=e.target.value;this.run(()=>this.ws({type:"pine3_home/home/settings",ipma_area:t||null}),t?`Avisos do IPMA: ${k[t]}.`:"Avisos do IPMA desligados.")}}>
        <option value="" ?selected=${!s}>Sem avisos</option>
        ${Object.entries(k).map(([e,t])=>i`<option value=${e} ?selected=${e===s}>${t}</option>`)}
      </select>
      <p class="muted soon">As entidades e as divisões (escolher o que aparece, a ordem, o tipo de cada cartão) chegam aqui na próxima versão.</p>
    </section>`}renderScreens(){const s=`${location.origin}/pine3/ecra`;return i`<section class="card">
        <h2>Emparelhar um ecrã</h2>
        <p class="muted">No tablet, abre <b>${s}</b>. Aparece um código de 6 algarismos: escreve-o aqui, ou lê o QR com o telemóvel.</p>
        <div class="pair">
          <input class="code" inputmode="numeric" maxlength="6" placeholder="000000" aria-label="Código do ecrã" .value=${this.code}
            @input=${e=>this.code=e.target.value.replace(/\D/g,"").slice(0,6)} />
          <input class="txt" maxlength="40" placeholder="Nome, p.ex. Cozinha" aria-label="Nome do ecrã" .value=${this.screenName}
            @input=${e=>this.screenName=e.target.value} />
          <button class="pri" ?disabled=${this.code.length!==6} @click=${()=>this.approve()}>Emparelhar com ${this.dash.name}</button>
        </div>
        ${this.pending.length?i`<p class="muted">À espera: ${this.pending.map(e=>i`<button class="chip" @click=${()=>this.code=e.code}>${e.code}</button>`)}</p>`:d}
      </section>
      <section class="card">
        <h3>Ecrãs</h3>
        ${this.screens.length?i`<div class="list">${this.screens.map(e=>i`<div class="row">
              <i class="thumb" style=${`background:${f[this.dashboards.find(t=>t.id===e.dashboard)?.style??"vidro"]}`}></i>
              <span class="grow"><input class="txt inline" .value=${e.name} aria-label="Nome do ecrã" @change=${t=>this.updateScreen(e,{name:t.target.value.trim()||e.name})} />
                <small>${e.active===!1?"token revogado":e.last_used?`visto ${new Date(e.last_used).toLocaleString("pt-PT")}`:"ainda não ligou"}</small></span>
              <select class="sel" aria-label=${`Painel de ${e.name}`} @change=${t=>this.updateScreen(e,{dashboard:t.target.value})}>
                ${this.dashboards.map(t=>i`<option value=${t.id} ?selected=${t.id===e.dashboard}>${t.name} · ${v[t.style]}</option>`)}
              </select>
              <button class="danger" @click=${()=>this.removeScreen(e)}>Remover</button>
            </div>`)}</div>`:i`<p class="muted">Ainda não há ecrãs emparelhados.</p>`}
      </section>
      <section class="card">
        <h3>Painéis</h3>
        <p class="muted">Cada painel tem o seu estilo e a sua disposição. Cada ecrã mostra um painel.</p>
        <div class="list">${this.dashboards.map(e=>i`<div class="row">
          <i class="thumb" style=${`background:${f[e.style]}`}></i>
          <span class="grow"><input class="txt inline" .value=${e.name} aria-label="Nome do painel" @change=${t=>this.renameDashboard(e,t.target.value.trim())} />
            <small>${v[e.style]} · ${this.screens.filter(t=>t.dashboard===e.id).length} ecrã(s)</small></span>
          ${e.id===this.dash.id?i`<span class="badge">a ver</span>`:i`<button @click=${()=>this.emit("dashboard-select",e.id)}>Ver e editar</button>`}
          ${this.dashboards.length>1?i`<button class="danger" @click=${()=>this.removeDashboard(e)}>Remover</button>`:d}
        </div>`)}</div>
        <button class="add" @click=${()=>this.addDashboard()}>${$(V)} Novo painel</button>
      </section>`}renderSystem(){const s=Object.keys(this.dash.layouts??{});return i`<section class="card">
      <h2>Sistema</h2>
      <div class="row"><span class="grow">Versão<small>Pine3 Home ${this.version}</small></span></div>
      <div class="row"><span class="grow">Disposição de ${this.dash.name}<small>${s.length?`arrumada à mão em ${s.length} vista(s)`:"automática"}</small></span>
        ${s.length?i`<button @click=${()=>this.resetLayouts()}>Repor a automática</button>`:d}</div>
      <div class="row"><span class="grow">Página dos ecrãs de parede<small>${location.origin}/pine3/ecra</small></span></div>
    </section>`}previewViews(){const s=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(t=>!t.hidden)).map(e=>[e.id,e.name]);return[["home","Casa"],...s,["@clima","Clima"],["@seguranca","Segurança"],["@cenas","Cenas"]]}thumb(s){const e=x(s),t={...this.dash,style:s};return i`<i class="thumb-live"><span class="tin">
      ${y`<${e} preview .home=${this.home} .entities=${this.entities} .dashboard=${t} .conn=${this.conn}></${e}>`}
    </span></i>`}undo(){const s=this.original;return this.run(async()=>{let e=this.dashboards;for(const t of Object.values(s))e=(await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:t.id,name:t.name,style:t.style,dock:t.dock,theme:t.theme,screen_edit:t.screen_edit!==!1,...t.ambient_after!=null?{ambient_after:t.ambient_after}:{},...t.ambient_brightness?{ambient_brightness:t.ambient_brightness}:{}}})).dashboards;this.dashboards=e,this.original={},this.emit("dashboards",e)},"Alterações desfeitas.")}approve(){const s=this.screenName.trim()||"Ecrã";return this.run(async()=>{await this.ws({type:"pine3_home/screens/approve",code:this.code,name:s,dashboard:this.dash.id}),this.code="",this.screenName="",location.search.includes("code=")&&history.replaceState(null,"",location.pathname),await this.loadScreens()},`${s} emparelhado. O ecrã liga-se dentro de segundos.`)}updateScreen(s,e){return this.run(async()=>{await this.ws({type:"pine3_home/screens/update",screen_id:s.id,...e}),await this.loadScreens()})}removeScreen(s){if(confirm(`Remover ${s.name}? O ecrã volta a pedir um código.`))return this.run(async()=>{await this.ws({type:"pine3_home/screens/remove",screen_id:s.id}),await this.loadScreens()},`${s.name} removido.`)}renameDashboard(s,e){if(!(!e||e===s.name))return this.run(async()=>{const t=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:s.id,name:e,style:s.style}});this.dashboards=t.dashboards,this.emit("dashboards",t.dashboards)})}addDashboard(){let s=this.dashboards.length+1;for(;this.dashboards.some(t=>t.id===`painel-${s}`);)s++;const e={id:`painel-${s}`,name:`Painel ${s}`,style:"vidro"};return this.run(async()=>{const t=await this.ws({type:"pine3_home/dashboards/save",dashboard:e});this.dashboards=t.dashboards,this.emit("dashboards",t.dashboards),this.emit("dashboard-select",e.id),this.section="aparencia"},`${e.name} criado: escolhe o estilo.`)}removeDashboard(s){if(confirm(`Remover o painel ${s.name}? Os ecrãs que o mostram passam para o primeiro painel.`))return this.run(async()=>{const e=await this.ws({type:"pine3_home/dashboards/remove",dashboard_id:s.id});this.dashboards=e.dashboards,this.emit("dashboards",e.dashboards),s.id===this.dash.id&&this.emit("dashboard-select",e.dashboards[0].id),await this.loadScreens()},`${s.name} removido.`)}resetLayouts(){if(confirm(`Repor a disposição automática de todas as vistas de ${this.dash.name}?`))return this.run(async()=>{for(const e of Object.keys(this.dash.layouts??{}))await this.ws({type:"pine3_home/dashboards/layout",dashboard_id:this.dash.id,view:e,layout:null});const s=await this.ws({type:"pine3_home/dashboards"});this.dashboards=s.dashboards,this.emit("dashboards",s.dashboards)},"Disposição reposta.")}};r.styles=S`
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
      width: ${g}px;
      height: ${w}px;
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
      width: ${g}px;
      height: ${w}px;
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
  `;n([h({attribute:!1})],r.prototype,"conn",2);n([h({attribute:!1})],r.prototype,"home",2);n([h({attribute:!1})],r.prototype,"entities",2);n([h({attribute:!1})],r.prototype,"dashboards",2);n([h()],r.prototype,"dashboardId",2);n([h()],r.prototype,"version",2);n([h()],r.prototype,"start",2);n([h()],r.prototype,"code",2);n([c()],r.prototype,"section",2);n([c()],r.prototype,"screens",2);n([c()],r.prototype,"pending",2);n([c()],r.prototype,"screenName",2);n([c()],r.prototype,"message",2);n([c()],r.prototype,"scale",2);n([c()],r.prototype,"pvView",2);n([c()],r.prototype,"original",2);r=n([A("pine3-settings")],r);var W=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,p=(s,e,t,a)=>{for(var o=a>1?void 0:a?Y(e,t):e,u=s.length-1,b;u>=0;u--)(b=s[u])&&(o=(a?b(e,t,o):b(o))||o);return a&&o&&W(e,t,o),o};const P="pine3_home.panel_dashboard";function U(){try{return localStorage.getItem(P)}catch{return null}}let l=class extends _{constructor(){super(...arguments),this.narrow=!1,this.dashboards=[],this.dashId=U(),this.settings=!1,this.startSection="aparencia",this.code="",this.error="",this.onOpen=()=>{this.admin&&(this.startSection="aparencia",this.settings=!0)},this.onClose=()=>this.settings=!1,this.onDashboards=s=>{this.dashboards=s.detail},this.onSelect=s=>{const e=s;this.dashId=e.detail;try{localStorage.setItem(P,e.detail)}catch{}}}connectedCallback(){super.connectedCallback();const s=new URLSearchParams(location.search).get("code");s&&/^\d{6}$/.test(s)&&(this.code=s,this.startSection="ecras",this.settings=!0),this.addEventListener("pine3-settings",this.onOpen),this.addEventListener("pine3-settings-close",this.onClose),this.addEventListener("pine3-dashboards",this.onDashboards),this.addEventListener("pine3-dashboard-select",this.onSelect)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsub=void 0,this.conn=void 0}get admin(){return!!this.hass?.user?.is_admin}updated(){this.hass&&this.hass.connection!==this.conn&&this.connect(this.hass.connection)}async connect(s){this.unsub?.(),this.conn=s;try{const[e,t]=await Promise.all([s.sendMessagePromise({type:"pine3_home/home"}),s.sendMessagePromise({type:"pine3_home/dashboards"})]);this.home=e,this.dashboards=t.dashboards,this.unsub=await s.subscribeMessage(async a=>{this.home=a;try{this.dashboards=(await s.sendMessagePromise({type:"pine3_home/dashboards"})).dashboards}catch{}},{type:"pine3_home/subscribe"}),this.error=""}catch(e){this.error=e.message??String(e)}}render(){if(!this.hass)return d;if(this.error)return i`<p class="center">Pine3 Home: ${this.error}</p>`;if(!this.home||!this.dashboards.length)return i`<p class="center">A carregar a casa…</p>`;const s=this.dashboards.find(t=>t.id===this.dashId)??this.dashboards[0],e=x(s.style);return i`
      ${y`<${e} .home=${this.home} .entities=${this.hass.states} .dashboard=${s} .conn=${this.hass.connection}
        ?settingsButton=${this.admin} ?canEdit=${this.admin}></${e}>`}
      ${this.narrow?i`<button class="menu" aria-label="Menu do Home Assistant"
            @click=${()=>this.dispatchEvent(new Event("hass-toggle-menu",{bubbles:!0,composed:!0}))}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${D} fill="currentColor" /></svg></button>`:d}
      ${this.settings&&this.admin?i`<pine3-settings .conn=${this.hass.connection} .home=${this.home} .entities=${this.hass.states}
            .dashboards=${this.dashboards} .dashboardId=${s.id} .version=${this.home.version} .start=${this.startSection} .code=${this.code}></pine3-settings>`:d}
    `}};l.styles=S`
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
  `;p([h({attribute:!1})],l.prototype,"hass",2);p([h({type:Boolean})],l.prototype,"narrow",2);p([c()],l.prototype,"home",2);p([c()],l.prototype,"dashboards",2);p([c()],l.prototype,"dashId",2);p([c()],l.prototype,"settings",2);p([c()],l.prototype,"startSection",2);p([c()],l.prototype,"code",2);p([c()],l.prototype,"error",2);l=p([A("pine3-home-panel")],l);
