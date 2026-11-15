import{i as u,n as l,r as n,a as m,A as p,b as h,s as g,u as f,m as y,t as $}from"./chunks/settings-DBUqxtHO.js";var v=Object.defineProperty,_=Object.getOwnPropertyDescriptor,i=(s,t,a,r)=>{for(var o=r>1?void 0:r?_(t,a):t,d=s.length-1,c;d>=0;d--)(c=s[d])&&(o=(r?c(t,a,o):c(o))||o);return r&&o&&v(t,a,o),o};const b="pine3_home.panel_dashboard";function w(){try{return localStorage.getItem(b)}catch{return null}}let e=class extends m{constructor(){super(...arguments),this.narrow=!1,this.dashboards=[],this.dashId=w(),this.settings=!1,this.startSection="aparencia",this.code="",this.error="",this.onOpen=()=>{this.admin&&(this.startSection="aparencia",this.settings=!0)},this.onClose=()=>this.settings=!1,this.onDashboards=s=>{this.dashboards=s.detail},this.onSelect=s=>{const t=s;this.dashId=t.detail;try{localStorage.setItem(b,t.detail)}catch{}}}connectedCallback(){super.connectedCallback();const s=new URLSearchParams(location.search).get("code");s&&/^\d{6}$/.test(s)&&(this.code=s,this.startSection="ecras",this.settings=!0),this.addEventListener("pine3-settings",this.onOpen),this.addEventListener("pine3-settings-close",this.onClose),this.addEventListener("pine3-dashboards",this.onDashboards),this.addEventListener("pine3-dashboard-select",this.onSelect)}disconnectedCallback(){super.disconnectedCallback(),this.unsub?.(),this.unsub=void 0,this.conn=void 0}get admin(){return!!this.hass?.user?.is_admin}updated(){this.hass&&this.hass.connection!==this.conn&&this.connect(this.hass.connection)}async connect(s){this.unsub?.(),this.conn=s;try{const[t,a]=await Promise.all([s.sendMessagePromise({type:"pine3_home/home"}),s.sendMessagePromise({type:"pine3_home/dashboards"})]);this.home=t,this.dashboards=a.dashboards,this.unsub=await s.subscribeMessage(async r=>{this.home=r;try{this.dashboards=(await s.sendMessagePromise({type:"pine3_home/dashboards"})).dashboards}catch{}},{type:"pine3_home/subscribe"}),this.error=""}catch(t){this.error=t.message??String(t)}}render(){if(!this.hass)return p;if(this.error)return h`<p class="center">Pine3 Home: ${this.error}</p>`;if(!this.home||!this.dashboards.length)return h`<p class="center">A carregar a casa…</p>`;const s=this.dashboards.find(a=>a.id===this.dashId)??this.dashboards[0],t=g(s.style);return h`
      ${f`<${t} .home=${this.home} .entities=${this.hass.states} .dashboard=${s} .conn=${this.hass.connection}
        ?settingsButton=${this.admin} ?cardSettings=${this.admin} ?canEdit=${this.admin}></${t}>`}
      ${this.narrow?h`<button class="menu" aria-label="Menu do Home Assistant"
            @click=${()=>this.dispatchEvent(new Event("hass-toggle-menu",{bubbles:!0,composed:!0}))}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${y} fill="currentColor" /></svg></button>`:p}
      ${this.settings&&this.admin?h`<pine3-settings .conn=${this.hass.connection} .home=${this.home} .entities=${this.hass.states}
            .dashboards=${this.dashboards} .dashboardId=${s.id} .version=${this.home.version} .start=${this.startSection} .code=${this.code}></pine3-settings>`:p}
    `}};e.styles=u`
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
  `;i([l({attribute:!1})],e.prototype,"hass",2);i([l({type:Boolean})],e.prototype,"narrow",2);i([n()],e.prototype,"home",2);i([n()],e.prototype,"dashboards",2);i([n()],e.prototype,"dashId",2);i([n()],e.prototype,"settings",2);i([n()],e.prototype,"startSection",2);i([n()],e.prototype,"code",2);i([n()],e.prototype,"error",2);e=i([$("pine3-home-panel")],e);
