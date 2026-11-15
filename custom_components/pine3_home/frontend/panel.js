import{i as C,n as u,r as h,a as P,A as l,m as R,b as M,c as z,d as D,e as I,f as N,g as V,h as p,j as o,s as w,u as k,S as $,k as x,R as q,w as H,l as L,o as T,p as B,q as F,t as j,v as A,x as G}from"./chunks/styles-Nv8PSNDA.js";const y={vidro:"Vidro",bento:"Bento",moldura:"Moldura",editorial:"Editorial",instrumento:"Instrumento",orbita:"Órbita",carteira:"Carteira",lente:"Lente"},W=["vidro","bento","moldura","editorial","instrumento"],Y={grafite:"Grafite (escuro)",claro:"Claro",auto:"Automático (pôr do sol)"},S={AVR:"Aveiro",BJA:"Beja",BRG:"Braga",BGC:"Bragança",CBO:"Castelo Branco",CBR:"Coimbra",EVR:"Évora",FAR:"Faro",GDA:"Guarda",LRA:"Leiria",LSB:"Lisboa",PTG:"Portalegre",PTO:"Porto",STM:"Santarém",STB:"Setúbal",VCT:"Viana do Castelo",VRL:"Vila Real",VIS:"Viseu",MCN:"Madeira · Costa Norte",MCS:"Madeira · Costa Sul",MRM:"Madeira · Regiões Montanhosas",MPS:"Porto Santo",AOR:"Açores · Grupo Oriental",ACE:"Açores · Grupo Central",AOC:"Açores · Grupo Ocidental"},U=[[0,"Nunca"],[1,"1 minuto"],[2,"2 minutos"],[5,"5 minutos"],[10,"10 minutos"],[30,"30 minutos"]],J={auto:"Automático (dia 50%, noite 12%)",low:"Sempre baixo (12%)",off:"Não mexer"};var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,c=(e,s,t,a)=>{for(var i=a>1?void 0:a?Q(s,t):s,d=e.length-1,r;d>=0;d--)(r=e[d])&&(i=(a?r(s,t,i):r(i))||i);return a&&i&&K(s,t,i),i};const X=[{id:"aparencia",name:"Aparência",icon:R},{id:"divisoes",name:"Divisões",icon:M},{id:"entidades",name:"Entidades",icon:z},{id:"ambiente",name:"Face ambiente",icon:D},{id:"casa",name:"Casa",icon:I},{id:"ecras",name:"Ecrãs e painéis",icon:N},{id:"sistema",name:"Sistema",icon:V}],Z=["vidro","bento","moldura","editorial","instrumento","orbita","carteira","lente"],ee={bento:"pílulas no topo",moldura:"deslizar, com pontos no canto",editorial:"índice em palavras",instrumento:"banco de teclas"},f=1334,_=800,g=e=>H`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`;let n=class extends P{constructor(){super(...arguments),this.entities={},this.dashboards=[],this.dashboardId="",this.version="",this.start="aparencia",this.code="",this.section="aparencia",this.screens=[],this.pending=[],this.screenName="",this.message=null,this.scale=.4,this.pvView="home",this.original={},this.query="",this.diagnostics=!1,this.iconFor=null}connectedCallback(){super.connectedCallback(),this.section=this.start,this.loadScreens(),this.timer=window.setInterval(()=>this.loadPending(),4e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.resize?.disconnect(),this.thumbResize?.disconnect()}updated(e){const s=this.renderRoot.querySelector(".pv");s&&!this.resize&&(this.resize=new ResizeObserver(()=>this.scale=s.clientWidth/f),this.resize.observe(s)),!s&&this.resize&&(this.resize.disconnect(),this.resize=void 0);const t=this.renderRoot.querySelector(".styles"),a=t?.querySelector(".thumb-live");t&&a&&(!this.thumbResize||this.thumbGrid!==t)&&(this.thumbResize?.disconnect(),this.thumbGrid=t,this.thumbResize=new ResizeObserver(()=>t.style.setProperty("--ts",String(a.clientWidth/f))),this.thumbResize.observe(a)),e.has("start")&&(this.section=this.start)}get dash(){return this.dashboards.find(e=>e.id===this.dashboardId)??this.dashboards[0]}ws(e){return this.conn.sendMessagePromise(e)}async run(e,s){this.message=null;try{await e(),s&&(this.message={ok:!0,text:s})}catch(t){this.message={ok:!1,text:t.message??String(t)}}}async loadScreens(){try{this.screens=(await this.ws({type:"pine3_home/screens"})).screens,await this.loadPending()}catch{}}async loadPending(){if(this.section==="ecras")try{this.pending=(await this.ws({type:"pine3_home/screens/pending"})).pending}catch{}}save(e){const s=this.dash;this.original[s.id]||(this.original={...this.original,[s.id]:{...s}});const t={...s,...e};return this.dashboards=this.dashboards.map(a=>a.id===s.id?t:a),this.emit("dashboards",this.dashboards),this.run(async()=>{const a=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:s.id,name:t.name,style:t.style,...e}});this.dashboards=a.dashboards,this.emit("dashboards",a.dashboards)})}emit(e,s){this.dispatchEvent(new CustomEvent(`pine3-${e}`,{detail:s,bubbles:!0,composed:!0}))}close(){this.emit("settings-close",null)}render(){return this.dash?o`<div class="wrap">
      <nav class="side" aria-label="Definições">
        <div class="top">
          <button class="x" aria-label="Fechar as definições" @click=${()=>this.close()}>${g(L)}</button>
          <b>Definições</b>
        </div>
        ${X.map(e=>o`<button class=${p({item:!0,on:e.id===this.section})} @click=${()=>{this.section=e.id,this.message=null,this.loadPending()}}>
          <i>${g(e.icon)}</i>${e.name}</button>`)}
        ${Object.keys(this.original).length?o`<button class="undo" @click=${()=>this.undo()}>Desfazer alterações</button>`:l}
        <button class="done" @click=${()=>this.close()}>Concluído</button>
      </nav>
      <main class="content">
        ${this.message?o`<p class=${p({msg:!0,bad:!this.message.ok})} role="status">${this.message.text}</p>`:l}
        ${this.section==="aparencia"?this.renderAppearance():l}
        ${this.section==="divisoes"?this.renderRooms():l}
        ${this.section==="entidades"?this.renderEntities():l}
        ${this.section==="ambiente"?this.renderAmbient():l}
        ${this.section==="casa"?this.renderHouse():l}
        ${this.section==="ecras"?this.renderScreens():l}
        ${this.section==="sistema"?this.renderSystem():l}
      </main>
    </div>`:l}dashPicker(){return this.dashboards.length<2?l:o`<div class="dpick">
      <span>A editar o painel</span>
      ${this.dashboards.map(e=>o`<button class=${p({chip:!0,on:e.id===this.dash.id})} @click=${()=>this.emit("dashboard-select",e.id)}>${e.name}</button>`)}
    </div>`}renderAppearance(){const e=this.dash,s=w(e.style),t=e.style==="vidro";return o`<section class="card">
        <h2>Aparência</h2>
        <p class="muted">O estilo, o tema e a navegação do painel <b>${e.name}</b>. Vês o resultado já aqui; fica guardado no Home Assistant para todos os ecrãs que mostram este painel.</p>
        ${this.dashPicker()}
        <div class="pv" style=${`height:${Math.round(_*this.scale)}px`} aria-label="Pré-visualização">
          <div class="pvin" style=${`transform:scale(${this.scale})`}>
            ${k`<${s} .home=${this.home} .entities=${this.entities} .dashboard=${e} .conn=${this.conn} .startView=${this.pvView}></${s}>`}
          </div>
        </div>
        <div class="pvviews" aria-label="Vista na pré-visualização">
          ${this.previewViews().map(([a,i])=>o`<button class=${p({chip:!0,on:a===this.pvView})} @click=${()=>this.pvView=a}>${i}</button>`)}
        </div>
      </section>
      <section class="card">
        <h3>Estilo</h3>
        <div class="styles">${Z.map(a=>{const i=W.includes(a);return o`<button class=${p({sty:!0,on:a===e.style})} ?disabled=${!i} aria-pressed=${a===e.style}
            @click=${()=>this.save({style:a})}>
            ${i?this.thumb(a):o`<i style=${`background:${$[a]}`}></i>`}
            <span>${y[a]}${i?"":o`<small>em breve</small>`}</span></button>`})}</div>
      </section>
      <section class="card">
        <h3>Tema</h3>
        <p class="muted">${t?"Claro, escuro, ou escuro ao pôr do sol.":"Só no Vidro: os outros estilos têm a sua própria paleta."}</p>
        <div class="seg">${Object.entries(Y).map(([a,i])=>o`<button class=${p({on:a===e.theme})} ?disabled=${!t} @click=${()=>this.save({theme:a})}>${i}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Navegação</h3>
        <p class="muted">${t?"A dock do Vidro, à esquerda ou em baixo.":`Este estilo navega com ${ee[e.style]??"a sua própria navegação"}.`}</p>
        <div class="seg">${[["left","Dock à esquerda"],["bottom","Dock em baixo"]].map(([a,i])=>o`<button class=${p({on:a===e.dock})} ?disabled=${!t} @click=${()=>this.save({dock:a})}>${i}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Editar a grelha nos ecrãs</h3>
        <div class="row">
          <span>Os tablets que mostram este painel podem mudar a ordem, o tamanho e os cartões de cada vista (o lápis).</span>
          <button class="sw" role="switch" aria-checked=${e.screen_edit!==!1} aria-label="Editar a grelha nos ecrãs"
            @click=${()=>this.save({screen_edit:e.screen_edit===!1})}></button>
        </div>
      </section>`}renderAmbient(){const e=this.dash;return o`<section class="card">
        <h2>Face ambiente</h2>
        <p class="muted">Um relógio calmo com o tempo e a casa numa linha, depois de alguns minutos sem tocar no ecrã. O primeiro toque só acorda.</p>
        ${this.dashPicker()}
        <h3>Aparece depois de</h3>
        <div class="seg">${U.map(([s,t])=>o`<button class=${p({on:s===(e.ambient_after??2)})} @click=${()=>this.save({ambient_after:s})}>${t}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Brilho na face ambiente</h3>
        <p class="muted">Só nos tablets com a app Pine3 Wallpanel. Fora da face ambiente, o brilho é o do sistema.</p>
        <div class="seg">${Object.entries(J).map(([s,t])=>o`<button class=${p({on:s===(e.ambient_brightness??"auto")})} @click=${()=>this.save({ambient_brightness:s})}>${t}</button>`)}</div>
      </section>`}renderHouse(){const e=this.home.settings?.ipma_area??"";return o`<section class="card">
      <h2>Casa</h2>
      <p class="muted">O que é da casa e vale para todos os painéis.</p>
      <h3>Avisos do IPMA</h3>
      <p class="muted">Os avisos da tua área aparecem no cartão do tempo, na face ambiente e no topo de cada estilo.</p>
      <select class="sel" aria-label="Área dos avisos do IPMA" @change=${s=>{const t=s.target.value;this.run(()=>this.ws({type:"pine3_home/home/settings",ipma_area:t||null}),t?`Avisos do IPMA: ${S[t]}.`:"Avisos do IPMA desligados.")}}>
        <option value="" ?selected=${!e}>Sem avisos</option>
        ${Object.entries(S).map(([s,t])=>o`<option value=${s} ?selected=${s===e}>${t}</option>`)}
      </select>
    </section>`}renderScreens(){const e=`${location.origin}/pine3/ecra`;return o`<section class="card">
        <h2>Emparelhar um ecrã</h2>
        <p class="muted">No tablet, abre <b>${e}</b>. Aparece um código de 6 algarismos: escreve-o aqui, ou lê o QR com o telemóvel.</p>
        <div class="pair">
          <input class="code" inputmode="numeric" maxlength="6" placeholder="000000" aria-label="Código do ecrã" .value=${this.code}
            @input=${s=>this.code=s.target.value.replace(/\D/g,"").slice(0,6)} />
          <input class="txt" maxlength="40" placeholder="Nome, p.ex. Cozinha" aria-label="Nome do ecrã" .value=${this.screenName}
            @input=${s=>this.screenName=s.target.value} />
          <button class="pri" ?disabled=${this.code.length!==6} @click=${()=>this.approve()}>Emparelhar com ${this.dash.name}</button>
        </div>
        ${this.pending.length?o`<p class="muted">À espera: ${this.pending.map(s=>o`<button class="chip" @click=${()=>this.code=s.code}>${s.code}</button>`)}</p>`:l}
      </section>
      <section class="card">
        <h3>Ecrãs</h3>
        ${this.screens.length?o`<div class="list">${this.screens.map(s=>o`<div class="row">
              <i class="thumb" style=${`background:${$[this.dashboards.find(t=>t.id===s.dashboard)?.style??"vidro"]}`}></i>
              <span class="grow"><input class="txt inline" .value=${s.name} aria-label="Nome do ecrã" @change=${t=>this.updateScreen(s,{name:t.target.value.trim()||s.name})} />
                <small>${s.active===!1?"token revogado":s.last_used?`visto ${new Date(s.last_used).toLocaleString("pt-PT")}`:"ainda não ligou"}</small></span>
              <select class="sel" aria-label=${`Painel de ${s.name}`} @change=${t=>this.updateScreen(s,{dashboard:t.target.value})}>
                ${this.dashboards.map(t=>o`<option value=${t.id} ?selected=${t.id===s.dashboard}>${t.name} · ${y[t.style]}</option>`)}
              </select>
              <button class="danger" @click=${()=>this.removeScreen(s)}>Remover</button>
            </div>`)}</div>`:o`<p class="muted">Ainda não há ecrãs emparelhados.</p>`}
      </section>
      <section class="card">
        <h3>Painéis</h3>
        <p class="muted">Cada painel tem o seu estilo e a sua disposição. Cada ecrã mostra um painel.</p>
        <div class="list">${this.dashboards.map(s=>o`<div class="row">
          <i class="thumb" style=${`background:${$[s.style]}`}></i>
          <span class="grow"><input class="txt inline" .value=${s.name} aria-label="Nome do painel" @change=${t=>this.renameDashboard(s,t.target.value.trim())} />
            <small>${y[s.style]} · ${this.screens.filter(t=>t.dashboard===s.id).length} ecrã(s)</small></span>
          ${s.id===this.dash.id?o`<span class="badge">a ver</span>`:o`<button @click=${()=>this.emit("dashboard-select",s.id)}>Ver e editar</button>`}
          ${this.dashboards.length>1?o`<button class="danger" @click=${()=>this.removeDashboard(s)}>Remover</button>`:l}
        </div>`)}</div>
        <button class="add" @click=${()=>this.addDashboard()}>${g(T)} Novo painel</button>
      </section>`}renderSystem(){const e=Object.keys(this.dash.layouts??{});return o`<section class="card">
      <h2>Sistema</h2>
      <div class="row"><span class="grow">Versão<small>Pine3 Home ${this.version}</small></span></div>
      <div class="row"><span class="grow">Disposição de ${this.dash.name}<small>${e.length?`arrumada à mão em ${e.length} vista(s)`:"automática"}</small></span>
        ${e.length?o`<button @click=${()=>this.resetLayouts()}>Repor a automática</button>`:l}</div>
      <div class="row"><span class="grow">Página dos ecrãs de parede<small>${location.origin}/pine3/ecra</small></span></div>
    </section>`}get hs(){return this.home.settings??{}}saveHouse(e){return this.home={...this.home,settings:{...this.hs,...e}},this.run(()=>this.ws({type:"pine3_home/home/settings",...e}))}renderRooms(){const e=this.home.rooms,s=this.hs.hidden_rooms??[],t=(a,i)=>{const d=a+i;if(d<0||d>=e.length)return;const r=e.map(v=>v.id);[r[a],r[d]]=[r[d],r[a]],this.home={...this.home,rooms:r.map(v=>e.find(O=>O.id===v))},this.saveHouse({room_order:r})};return o`<section class="card">
      <h2>Divisões</h2>
      <p class="muted">A ordem, o ícone e as divisões que aparecem. Vale para a dock, a Casa e todos os estilos e painéis. As divisões vêm das áreas do Home Assistant.</p>
      <div class="list">${e.map((a,i)=>{const d=!s.includes(a.id);return o`<div class=${p({row:!0,off:!d})}>
          <span class="mv">
            <button class="ib" aria-label=${`Subir ${a.name}`} ?disabled=${i===0} @click=${()=>t(i,-1)}>${g(B)}</button>
            <button class="ib" aria-label=${`Descer ${a.name}`} ?disabled=${i===e.length-1} @click=${()=>t(i,1)}>${g(F)}</button>
          </span>
          <button class="ricon" aria-label=${`Ícone de ${a.name}`} aria-expanded=${this.iconFor===a.id} @click=${()=>this.iconFor=this.iconFor===a.id?null:a.id}>${g(x(a.icon))}</button>
          <span class="grow">${a.name}<small>${a.devices.filter(r=>!r.hidden).length} de ${a.devices.length} dispositivos${a.floor?` · ${a.floor}`:""}</small></span>
          <button class="sw" role="switch" aria-checked=${d} aria-label=${`Mostrar ${a.name}`}
            @click=${()=>void this.saveHouse({hidden_rooms:d?[...s,a.id]:s.filter(r=>r!==a.id)})}></button>
          ${this.iconFor===a.id?o`<div class="icons">${q.map(r=>o`<button class=${p({ib:!0,on:r===a.icon})} aria-label=${r.replace("mdi:","")}
                @click=${()=>{this.iconFor=null,this.saveHouse({room_icons:{...this.hs.room_icons??{},[a.id]:r}})}}>${g(x(r))}</button>`)}</div>`:l}
        </div>`})}</div>
    </section>`}visible(e){return e.primary?!(this.hs.hidden??[]).includes(e.id):(this.hs.shown??[]).includes(e.id)}toggleEntity(e){const s=this.hs.hidden??[],t=this.hs.shown??[];return e.primary?this.saveHouse({hidden:s.includes(e.id)?s.filter(a=>a!==e.id):[...s,e.id]}):this.saveHouse({shown:t.includes(e.id)?t.filter(a=>a!==e.id):[...t,e.id]})}renderEntities(){const e=this.query.trim().toLowerCase(),s=a=>(this.diagnostics||!a.category)&&(!e||`${a.name} ${a.id}`.toLowerCase().includes(e)),t=this.home.rooms.map(a=>({r:a,ents:(a.entities??[]).filter(s).sort((i,d)=>Number(d.primary)-Number(i.primary))})).filter(a=>a.ents.length);return o`<section class="card">
        <h2>Entidades</h2>
        <p class="muted">O que aparece nos painéis. Cada dispositivo tem um cartão com a sua entidade <b>principal</b>; as <b>secundárias</b> (o consumo de uma tomada, o interruptor de uma TV, um sensor de diagnóstico) podem ter um cartão próprio.</p>
        <label class="search">${g(j)}<input type="search" placeholder="Procurar por nome ou entidade" aria-label="Procurar entidade"
          .value=${this.query} @input=${a=>this.query=a.target.value} /></label>
        <div class="row"><span>Mostrar entidades de diagnóstico e configuração</span>
          <button class="sw" role="switch" aria-checked=${this.diagnostics} aria-label="Mostrar entidades de diagnóstico" @click=${()=>this.diagnostics=!this.diagnostics}></button></div>
      </section>
      ${t.length?t.map(({r:a,ents:i})=>this.entityRoom(a,i)):o`<section class="card"><p class="muted">Nenhuma entidade com "${this.query}".</p></section>`}`}entityRoom(e,s){const t=(e.entities??[]).filter(i=>this.diagnostics||!i.category),a=t.filter(i=>this.visible(i)).length;return o`<section class="card">
      <h3 class="rh">${g(x(e.icon))} ${e.name} <small>${a} de ${t.length} visíveis</small></h3>
      <div class="list">${s.map(i=>{const d=this.visible(i);return o`<div class=${p({row:!0,off:!d})}>
          <span class="grow">${i.name}<small class="mono">${i.id}</small></span>
          <span class=${p({badge:!0,sec:!i.primary})}>${i.primary?"Principal":i.category?"Diagnóstico":"Secundária"}</span>
          <button class="sw" role="switch" aria-checked=${d} aria-label=${`Mostrar ${i.name}`} @click=${()=>this.toggleEntity(i)}></button>
        </div>`})}</div>
    </section>`}previewViews(){const e=this.home.rooms.filter(s=>!s.hidden&&s.devices.some(t=>!t.hidden)).map(s=>[s.id,s.name]);return[["home","Casa"],...e,["@clima","Clima"],["@seguranca","Segurança"],["@cenas","Cenas"]]}thumb(e){const s=w(e),t={...this.dash,style:e};return o`<i class="thumb-live"><span class="tin">
      ${k`<${s} preview .home=${this.home} .entities=${this.entities} .dashboard=${t} .conn=${this.conn}></${s}>`}
    </span></i>`}undo(){const e=this.original;return this.run(async()=>{let s=this.dashboards;for(const t of Object.values(e))s=(await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:t.id,name:t.name,style:t.style,dock:t.dock,theme:t.theme,screen_edit:t.screen_edit!==!1,...t.ambient_after!=null?{ambient_after:t.ambient_after}:{},...t.ambient_brightness?{ambient_brightness:t.ambient_brightness}:{}}})).dashboards;this.dashboards=s,this.original={},this.emit("dashboards",s)},"Alterações desfeitas.")}approve(){const e=this.screenName.trim()||"Ecrã";return this.run(async()=>{await this.ws({type:"pine3_home/screens/approve",code:this.code,name:e,dashboard:this.dash.id}),this.code="",this.screenName="",location.search.includes("code=")&&history.replaceState(null,"",location.pathname),await this.loadScreens()},`${e} emparelhado. O ecrã liga-se dentro de segundos.`)}updateScreen(e,s){return this.run(async()=>{await this.ws({type:"pine3_home/screens/update",screen_id:e.id,...s}),await this.loadScreens()})}removeScreen(e){if(confirm(`Remover ${e.name}? O ecrã volta a pedir um código.`))return this.run(async()=>{await this.ws({type:"pine3_home/screens/remove",screen_id:e.id}),await this.loadScreens()},`${e.name} removido.`)}renameDashboard(e,s){if(!(!s||s===e.name))return this.run(async()=>{const t=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:e.id,name:s,style:e.style}});this.dashboards=t.dashboards,this.emit("dashboards",t.dashboards)})}addDashboard(){let e=this.dashboards.length+1;for(;this.dashboards.some(t=>t.id===`painel-${e}`);)e++;const s={id:`painel-${e}`,name:`Painel ${e}`,style:"vidro"};return this.run(async()=>{const t=await this.ws({type:"pine3_home/dashboards/save",dashboard:s});this.dashboards=t.dashboards,this.emit("dashboards",t.dashboards),this.emit("dashboard-select",s.id),this.section="aparencia"},`${s.name} criado: escolhe o estilo.`)}removeDashboard(e){if(confirm(`Remover o painel ${e.name}? Os ecrãs que o mostram passam para o primeiro painel.`))return this.run(async()=>{const s=await this.ws({type:"pine3_home/dashboards/remove",dashboard_id:e.id});this.dashboards=s.dashboards,this.emit("dashboards",s.dashboards),e.id===this.dash.id&&this.emit("dashboard-select",s.dashboards[0].id),await this.loadScreens()},`${e.name} removido.`)}resetLayouts(){if(confirm(`Repor a disposição automática de todas as vistas de ${this.dash.name}?`))return this.run(async()=>{for(const s of Object.keys(this.dash.layouts??{}))await this.ws({type:"pine3_home/dashboards/layout",dashboard_id:this.dash.id,view:s,layout:null});const e=await this.ws({type:"pine3_home/dashboards"});this.dashboards=e.dashboards,this.emit("dashboards",e.dashboards)},"Disposição reposta.")}};n.styles=C`
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
      width: ${f}px;
      height: ${_}px;
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
      width: ${f}px;
      height: ${_}px;
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
  `;c([u({attribute:!1})],n.prototype,"conn",2);c([u({attribute:!1})],n.prototype,"home",2);c([u({attribute:!1})],n.prototype,"entities",2);c([u({attribute:!1})],n.prototype,"dashboards",2);c([u()],n.prototype,"dashboardId",2);c([u()],n.prototype,"version",2);c([u()],n.prototype,"start",2);c([u()],n.prototype,"code",2);c([h()],n.prototype,"section",2);c([h()],n.prototype,"screens",2);c([h()],n.prototype,"pending",2);c([h()],n.prototype,"screenName",2);c([h()],n.prototype,"message",2);c([h()],n.prototype,"scale",2);c([h()],n.prototype,"pvView",2);c([h()],n.prototype,"original",2);c([h()],n.prototype,"query",2);c([h()],n.prototype,"diagnostics",2);c([h()],n.prototype,"iconFor",2);n=c([A("pine3-settings")],n);var se=Object.defineProperty,te=Object.getOwnPropertyDescriptor,b=(e,s,t,a)=>{for(var i=a>1?void 0:a?te(s,t):s,d=e.length-1,r;d>=0;d--)(r=e[d])&&(i=(a?r(s,t,i):r(i))||i);return a&&i&&se(s,t,i),i};const E="pine3_home.panel_dashboard";function ae(){try{return localStorage.getItem(E)}catch{return null}}let m=class extends P{constructor(){super(...arguments),this.narrow=!1,this.dashboards=[],this.dashId=ae(),this.settings=!1,this.startSection="aparencia",this.code="",this.error="",this.onOpen=()=>{this.admin&&(this.startSection="aparencia",this.settings=!0)},this.onClose=()=>this.settings=!1,this.onDashboards=e=>{this.dashboards=e.detail},this.onSelect=e=>{const s=e;this.dashId=s.detail;try{localStorage.setItem(E,s.detail)}catch{}}}connectedCallback(){super.connectedCallback();const e=new URLSearchParams(location.search).get("code");e&&/^\d{6}$/.test(e)&&(this.code=e,this.startSection="ecras",this.settings=!0),this.addEventListener("pine3-settings",this.onOpen),this.addEventListener("pine3-settings-close",this.onClose),this.addEventListener("pine3-dashboards",this.onDashboards),this.addEventListener("pine3-dashboard-select",this.onSelect)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsub=void 0,this.conn=void 0}get admin(){return!!this.hass?.user?.is_admin}updated(){this.hass&&this.hass.connection!==this.conn&&this.connect(this.hass.connection)}async connect(e){this.unsub?.(),this.conn=e;try{const[s,t]=await Promise.all([e.sendMessagePromise({type:"pine3_home/home"}),e.sendMessagePromise({type:"pine3_home/dashboards"})]);this.home=s,this.dashboards=t.dashboards,this.unsub=await e.subscribeMessage(async a=>{this.home=a;try{this.dashboards=(await e.sendMessagePromise({type:"pine3_home/dashboards"})).dashboards}catch{}},{type:"pine3_home/subscribe"}),this.error=""}catch(s){this.error=s.message??String(s)}}render(){if(!this.hass)return l;if(this.error)return o`<p class="center">Pine3 Home: ${this.error}</p>`;if(!this.home||!this.dashboards.length)return o`<p class="center">A carregar a casa…</p>`;const e=this.dashboards.find(t=>t.id===this.dashId)??this.dashboards[0],s=w(e.style);return o`
      ${k`<${s} .home=${this.home} .entities=${this.hass.states} .dashboard=${e} .conn=${this.hass.connection}
        ?settingsButton=${this.admin} ?canEdit=${this.admin}></${s}>`}
      ${this.narrow?o`<button class="menu" aria-label="Menu do Home Assistant"
            @click=${()=>this.dispatchEvent(new Event("hass-toggle-menu",{bubbles:!0,composed:!0}))}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${G} fill="currentColor" /></svg></button>`:l}
      ${this.settings&&this.admin?o`<pine3-settings .conn=${this.hass.connection} .home=${this.home} .entities=${this.hass.states}
            .dashboards=${this.dashboards} .dashboardId=${e.id} .version=${this.home.version} .start=${this.startSection} .code=${this.code}></pine3-settings>`:l}
    `}};m.styles=C`
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
  `;b([u({attribute:!1})],m.prototype,"hass",2);b([u({type:Boolean})],m.prototype,"narrow",2);b([h()],m.prototype,"home",2);b([h()],m.prototype,"dashboards",2);b([h()],m.prototype,"dashId",2);b([h()],m.prototype,"settings",2);b([h()],m.prototype,"startSection",2);b([h()],m.prototype,"code",2);b([h()],m.prototype,"error",2);m=b([A("pine3-home-panel")],m);
