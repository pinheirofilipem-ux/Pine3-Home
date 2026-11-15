/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=globalThis,Dt=ft.ShadowRoot&&(ft.ShadyCSS===void 0||ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,It=Symbol(),qt=new WeakMap;let ye=class{constructor(t,a,i){if(this._$cssResult$=!0,i!==It)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=a}get styleSheet(){let t=this.o;const a=this.t;if(Dt&&t===void 0){const i=a!==void 0&&a.length===1;i&&(t=qt.get(a)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&qt.set(a,t))}return t}toString(){return this.cssText}};const Ze=e=>new ye(typeof e=="string"?e:e+"",void 0,It),N=(e,...t)=>{const a=e.length===1?e[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[r+1],e[0]);return new ye(a,e,It)},Ue=(e,t)=>{if(Dt)e.adoptedStyleSheets=t.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(const a of t){const i=document.createElement("style"),s=ft.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=a.cssText,e.appendChild(i)}},Gt=Dt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let a="";for(const i of t.cssRules)a+=i.cssText;return Ze(a)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fe,defineProperty:qe,getOwnPropertyDescriptor:Ge,getOwnPropertyNames:Ye,getOwnPropertySymbols:Xe,getPrototypeOf:Ke}=Object,T=globalThis,Yt=T.trustedTypes,Je=Yt?Yt.emptyScript:"",Qe=T.reactiveElementPolyfillSupport,rt=(e,t)=>e,gt={toAttribute(e,t){switch(t){case Boolean:e=e?Je:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=e!==null;break;case Number:a=e===null?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch{a=null}}return a}},Bt=(e,t)=>!Fe(e,t),Xt={attribute:!0,type:String,converter:gt,reflect:!1,useDefault:!1,hasChanged:Bt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),T.litPropertyMetadata??(T.litPropertyMetadata=new WeakMap);let K=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,a=Xt){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(t,a),!a.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,a);s!==void 0&&qe(this.prototype,t,s)}}static getPropertyDescriptor(t,a,i){const{get:s,set:r}=Ge(this.prototype,t)??{get(){return this[a]},set(o){this[a]=o}};return{get:s,set(o){const n=s?.call(this);r?.call(this,o),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Xt}static _$Ei(){if(this.hasOwnProperty(rt("elementProperties")))return;const t=Ke(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rt("properties"))){const a=this.properties,i=[...Ye(a),...Xe(a)];for(const s of i)this.createProperty(s,a[s])}const t=this[Symbol.metadata];if(t!==null){const a=litPropertyMetadata.get(t);if(a!==void 0)for(const[i,s]of a)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[a,i]of this.elementProperties){const s=this._$Eu(a,i);s!==void 0&&this._$Eh.set(s,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const a=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)a.unshift(Gt(s))}else t!==void 0&&a.push(Gt(t));return a}static _$Eu(t,a){const i=a.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,a=this.constructor.elementProperties;for(const i of a.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ue(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,a,i){this._$AK(t,i)}_$ET(t,a){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:gt).toAttribute(a,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,a){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=i.getPropertyOptions(s),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:gt;this._$Em=s;const n=o.fromAttribute(a,r.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,a,i,s=!1,r){if(t!==void 0){const o=this.constructor;if(s===!1&&(r=this[t]),i??(i=o.getPropertyOptions(t)),!((i.hasChanged??Bt)(r,a)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,a,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,a,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??a??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(a=void 0),this._$AL.set(t,a)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i){const{wrapped:o}=r,n=this[s];o!==!0||this._$AL.has(s)||n===void 0||this.C(s,void 0,r,n)}}let t=!1;const a=this._$AL;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(a)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(a)}willUpdate(t){}_$AE(t){this._$EO?.forEach(a=>a.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(a=>this._$ET(a,this[a]))),this._$EM()}updated(t){}firstUpdated(t){}};K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[rt("elementProperties")]=new Map,K[rt("finalized")]=new Map,Qe?.({ReactiveElement:K}),(T.reactiveElementVersions??(T.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=globalThis,Kt=e=>e,bt=ot.trustedTypes,Jt=bt?bt.createPolicy("lit-html",{createHTML:e=>e}):void 0,ke="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,xe="?"+O,ta=`<${xe}>`,Z=document,lt=()=>Z.createComment(""),dt=e=>e===null||typeof e!="object"&&typeof e!="function",jt=Array.isArray,ea=e=>jt(e)||typeof e?.[Symbol.iterator]=="function",xt=`[ 	
\f\r]`,st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qt=/-->/g,te=/>/g,I=RegExp(`>|${xt}(?:([^\\s"'>=/]+)(${xt}*=${xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,ae=/"/g,Ce=/^(?:script|style|textarea|title)$/i,_e=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),c=_e(1),v=_e(2),R=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),ie=new WeakMap,W=Z.createTreeWalker(Z,129);function Le(e,t){if(!jt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Jt!==void 0?Jt.createHTML(t):t}const aa=(e,t)=>{const a=e.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",o=st;for(let n=0;n<a;n++){const d=e[n];let u,h,f=-1,g=0;for(;g<d.length&&(o.lastIndex=g,h=o.exec(d),h!==null);)g=o.lastIndex,o===st?h[1]==="!--"?o=Qt:h[1]!==void 0?o=te:h[2]!==void 0?(Ce.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=I):h[3]!==void 0&&(o=I):o===I?h[0]===">"?(o=s??st,f=-1):h[1]===void 0?f=-2:(f=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?I:h[3]==='"'?ae:ee):o===ae||o===ee?o=I:o===Qt||o===te?o=st:(o=I,s=void 0);const M=o===I&&e[n+1].startsWith("/>")?" ":"";r+=o===st?d+ta:f>=0?(i.push(u),d.slice(0,f)+ke+d.slice(f)+O+M):d+O+(f===-2?n:M)}return[Le(e,r+(e[a]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class ht{constructor({strings:t,_$litType$:a},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,d=this.parts,[u,h]=aa(t,a);if(this.el=ht.createElement(u,i),W.currentNode=this.el.content,a===2||a===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=W.nextNode())!==null&&d.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(ke)){const g=h[o++],M=s.getAttribute(f).split(O),$=/([.?@])?(.*)/.exec(g);d.push({type:1,index:r,name:$[2],strings:M,ctor:$[1]==="."?sa:$[1]==="?"?ra:$[1]==="@"?oa:kt}),s.removeAttribute(f)}else f.startsWith(O)&&(d.push({type:6,index:r}),s.removeAttribute(f));if(Ce.test(s.tagName)){const f=s.textContent.split(O),g=f.length-1;if(g>0){s.textContent=bt?bt.emptyScript:"";for(let M=0;M<g;M++)s.append(f[M],lt()),W.nextNode(),d.push({type:2,index:++r});s.append(f[g],lt())}}}else if(s.nodeType===8)if(s.data===xe)d.push({type:2,index:r});else{let f=-1;for(;(f=s.data.indexOf(O,f+1))!==-1;)d.push({type:7,index:r}),f+=O.length-1}r++}}static createElement(t,a){const i=Z.createElement("template");return i.innerHTML=t,i}}function et(e,t,a=e,i){if(t===R)return t;let s=i!==void 0?a._$Co?.[i]:a._$Cl;const r=dt(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(e),s._$AT(e,a,i)),i!==void 0?(a._$Co??(a._$Co=[]))[i]=s:a._$Cl=s),s!==void 0&&(t=et(e,s._$AS(e,t.values),s,i)),t}class ia{constructor(t,a){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:a},parts:i}=this._$AD,s=(t?.creationScope??Z).importNode(a,!0);W.currentNode=s;let r=W.nextNode(),o=0,n=0,d=i[0];for(;d!==void 0;){if(o===d.index){let u;d.type===2?u=new pt(r,r.nextSibling,this,t):d.type===1?u=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(u=new na(r,this,t)),this._$AV.push(u),d=i[++n]}o!==d?.index&&(r=W.nextNode(),o++)}return W.currentNode=Z,s}p(t){let a=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,a),a+=i.strings.length-2):i._$AI(t[a])),a++}}class pt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,a,i,s){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=a,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&t?.nodeType===11&&(t=a.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,a=this){t=et(this,t,a),dt(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ea(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==l&&dt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Z.createTextNode(t)),this._$AH=t}$(t){const{values:a,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ht.createElement(Le(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(a);else{const r=new ia(s,this),o=r.u(this.options);r.p(a),this.T(o),this._$AH=r}}_$AC(t){let a=ie.get(t.strings);return a===void 0&&ie.set(t.strings,a=new ht(t)),a}k(t){jt(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let i,s=0;for(const r of t)s===a.length?a.push(i=new pt(this.O(lt()),this.O(lt()),this,this.options)):i=a[s],i._$AI(r),s++;s<a.length&&(this._$AR(i&&i._$AB.nextSibling,s),a.length=s)}_$AR(t=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);t!==this._$AB;){const i=Kt(t).nextSibling;Kt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class kt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,a,i,s,r){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=a,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=l}_$AI(t,a=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=et(this,t,a,0),o=!dt(t)||t!==this._$AH&&t!==R,o&&(this._$AH=t);else{const n=t;let d,u;for(t=r[0],d=0;d<r.length-1;d++)u=et(this,n[i+d],a,d),u===R&&(u=this._$AH[d]),o||(o=!dt(u)||u!==this._$AH[d]),u===l?t=l:t!==l&&(t+=(u??"")+r[d+1]),this._$AH[d]=u}o&&!s&&this.j(t)}j(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class sa extends kt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===l?void 0:t}}class ra extends kt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}}class oa extends kt{constructor(t,a,i,s,r){super(t,a,i,s,r),this.type=5}_$AI(t,a=this){if((t=et(this,t,a,0)??l)===R)return;const i=this._$AH,s=t===l&&i!==l||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==l&&(i===l||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class na{constructor(t,a,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=a,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const ca=ot.litHtmlPolyfillSupport;ca?.(ht,pt),(ot.litHtmlVersions??(ot.litHtmlVersions=[])).push("3.3.3");const la=(e,t,a)=>{const i=a?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const r=a?.renderBefore??null;i._$litPart$=s=new pt(t.insertBefore(lt(),r),r,void 0,a??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=globalThis;let Q=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var a;const t=super.createRenderRoot();return(a=this.renderOptions).renderBefore??(a.renderBefore=t.firstChild),t}update(t){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=la(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};Q._$litElement$=!0,Q.finalized=!0,nt.litElementHydrateSupport?.({LitElement:Q});const da=nt.litElementPolyfillSupport;da?.({LitElement:Q});(nt.litElementVersions??(nt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ha={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:Bt},ua=(e=ha,t,a)=>{const{kind:i,metadata:s}=a;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(a.name,e),i==="accessor"){const{name:o}=a;return{set(n){const d=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,d,e,!0,n)},init(n){return n!==void 0&&this.C(o,void 0,e,n),n}}}if(i==="setter"){const{name:o}=a;return function(n){const d=this[o];t.call(this,n),this.requestUpdate(o,d,e,!0,n)}}throw Error("Unsupported decorator location: "+i)};function L(e){return(t,a)=>typeof a=="object"?ua(e,t,a):((i,s,r)=>{const o=s.hasOwnProperty(r);return s.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(s,r):void 0})(e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(e){return L({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=Symbol.for(""),pa=e=>{if(e?.r===Ae)return e?._$litStatic$},ma=e=>({_$litStatic$:e,r:Ae}),se=new Map,fa=e=>(t,...a)=>{const i=a.length;let s,r;const o=[],n=[];let d,u=0,h=!1;for(;u<i;){for(d=t[u];u<i&&(r=a[u],(s=pa(r))!==void 0);)d+=s+t[++u],h=!0;u!==i&&n.push(r),o.push(d),u++}if(u===i&&o.push(t[i]),h){const f=o.join("$$lit$$");(t=se.get(f))===void 0&&(o.raw=o,se.set(f,t=o)),a=n}return e(t,...a)},re=fa(c);var ga="M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z",ba="M11,9A4,4 0 0,1 15,13A4,4 0 0,1 11,17A4,4 0 0,1 7,13A4,4 0 0,1 11,9M11,11A2,2 0 0,0 9,13A2,2 0 0,0 11,15A2,2 0 0,0 13,13A2,2 0 0,0 11,11M7,4H14A4,4 0 0,1 18,8V9H16V8A2,2 0 0,0 14,6H7A2,2 0 0,0 5,8V20H16V18H18V22H3V8A4,4 0 0,1 7,4M16,11C18.5,11 18.5,9 21,9V11C18.5,11 18.5,13 16,13V11M16,15C18.5,15 18.5,13 21,13V15C18.5,15 18.5,17 16,17V15Z",va="M10 10V12H8V10H10M16 12V10H14V12H16M21 14V22H3V14H4V10C4 5.58 7.58 2 12 2S20 5.58 20 10V14H21M7 16H5V20H7V16M11 16H9V20H11V16M11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08M13 14H18V10C18 7.03 15.84 4.56 13 4.08V14M15 16H13V20H15V16M19 16H17V20H19V16Z",$a="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z",wa="M20 19V3H4V19H2V21H22V19H20M16 9H18V11H16V9M14 11H6V9H14V11M18 7H16V5H18V7M14 5V7H6V5H14M6 19V13H14V14.82C13.55 15.14 13.25 15.66 13.25 16.25C13.25 17.22 14.03 18 15 18S16.75 17.22 16.75 16.25C16.75 15.66 16.45 15.13 16 14.82V13H18V19H6Z",ya="M6.03 12.03L8.03 15.5L5.5 18.68L2 12.62L6.03 12.03M17 18V15.29C17.88 14.9 18.5 14.03 18.5 13C18.5 12.43 18.3 11.9 17.97 11.5L19.94 10.35C20.95 9.76 21.3 8.47 20.71 7.46L19.33 5.06C18.74 4.05 17.45 3.7 16.44 4.28L8.31 9C7.36 9.53 7.03 10.75 7.58 11.71L9.08 14.31C9.63 15.26 10.86 15.59 11.81 15.04L13.69 13.96C13.94 14.55 14.41 15.03 15 15.29V18C15 19.1 15.9 20 17 20H22V18H17Z",ka="M8,9H11V4H13V9H16L20,17H4L8,9M14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18H14Z",xa="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",Ca="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",_a="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",La="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",Aa="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",Me="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",Ve="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z",Ma="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z",Va="M3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8V19H19V17H15V19H13V8H5V19H3V8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6M16 10.5V11H18V10.5C18 10.22 17.78 10 17.5 10H16.5C16.22 10 16 10.22 16 10.5M16 14.5V15H18V14.5C18 14.22 17.78 14 17.5 14H16.5C16.22 14 16 14.22 16 14.5Z",He="M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z",Ha="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z",za="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",Sa="M15,2L17,9H7L9,2M11,10H13V20H16V22H8V20H11V10Z",Pa="M8.66,13.07C6.92,13.07 5.5,11.66 5.5,9.93C5.5,9.22 5.76,8.54 6.19,8C5.77,7.46 5.5,6.78 5.5,6.07C5.5,4.34 6.93,2.93 8.66,2.93L9.09,2.96C9.56,1.81 10.69,1 12,1C13.31,1 14.44,1.81 14.91,2.96L15.34,2.93C17.07,2.93 18.5,4.34 18.5,6.07C18.5,6.78 18.24,7.46 17.81,8C18.23,8.54 18.5,9.22 18.5,9.93C18.5,11.66 17.07,13.07 15.34,13.07L14.91,13.04C14.44,14.19 13.31,15 12,15C10.69,15 9.56,14.19 9.09,13.04L8.66,13.07M12,13C12.62,13 13.12,12.5 13.14,11.9L13.03,10.81C12.71,10.93 12.36,11 12,11C11.64,11 11.3,10.93 11,10.81L10.86,11.9C10.88,12.5 11.38,13 12,13M15.34,11.07C15.97,11.07 16.5,10.56 16.5,9.92C16.5,9.5 16.23,9.08 15.83,8.89L14.95,8.47C14.83,9.21 14.44,9.85 13.89,10.3L14.7,10.87C14.88,11 15.1,11.07 15.34,11.07M14.69,5.13L13.87,5.69C14.43,6.14 14.82,6.78 14.94,7.5L15.82,7.1C16.23,6.9 16.5,6.5 16.5,6.07C16.5,5.44 15.97,4.93 15.34,4.93C15.11,4.93 14.89,5 14.69,5.13M12,3C11.38,3 10.88,3.5 10.86,4.1L11,5.19C11.3,5.07 11.64,5 12,5C12.36,5 12.71,5.07 13.03,5.19L13.14,4.1C13.12,3.5 12.62,3 12,3M8.66,4.93C8.03,4.93 7.5,5.44 7.5,6.07C7.5,6.5 7.77,6.9 8.17,7.1L9.05,7.5C9.17,6.78 9.56,6.14 10.11,5.69L9.3,5.13C9.12,5 8.9,4.93 8.66,4.93M8.17,8.9C7.77,9.1 7.5,9.5 7.5,9.92C7.5,10.55 8.03,11.06 8.66,11.06C8.89,11.06 9.11,11 9.31,10.86L10.12,10.31C9.56,9.86 9.17,9.22 9.05,8.5L8.17,8.9M12,22A9,9 0 0,1 3,13A9,9 0 0,1 12,22A9,9 0 0,1 21,13A9,9 0 0,1 12,22M14.44,19.56C16.34,18.85 17.85,17.34 18.56,15.44C16.66,16.14 15.15,17.66 14.44,19.56M5.44,15.44C6.15,17.34 7.66,18.85 9.56,19.56C8.86,17.66 7.34,16.15 5.44,15.44Z",Ea="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z",Oa="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",Ta="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22",Ra="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z",Na="M2.95 3L2 6.91L19.34 11.25L20.29 7.34L2.95 3M6.09 6.89L4.16 6.41L4.64 4.46L6.57 4.94L6.09 6.89M9.94 7.86L8 7.38L8.5 5.42L10.42 5.91L9.94 7.86M13.8 8.82L11.87 8.34L12.35 6.39L14.27 6.87L13.8 8.82M17.65 9.79L15.72 9.31L16.2 7.35L18.13 7.84L17.65 9.79M4.66 12.75L3.71 16.66L21.05 21L22 17.1L4.66 12.75M7.8 16.65L5.88 16.16L6.35 14.21L8.28 14.69L7.8 16.65M11.65 17.61L9.73 17.13L10.2 15.18L12.13 15.66L11.65 17.61M15.5 18.58L13.58 18.09L14.06 16.14L16 16.62L15.5 18.58M19.36 19.54L17.43 19.06L17.91 17.11L19.84 17.59L19.36 19.54M6.25 12.11L11 10.2L17.75 11.89L13 13.8L6.25 12.11Z",Da="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z",Ia="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",ze="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",Ba="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",ja="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",Bs="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",Wa="M19,13H5V11H19V13Z",Za="M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",Ua="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z",Fa="M14,19H18V5H14M6,19H10V5H6V19Z",qa="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z",Ga="M8,5.14V19.14L19,12.14L8,5.14Z",Se="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",Ya="M2,15C3.67,14.25 5.33,13.5 7,13.17V5A3,3 0 0,1 10,2C11.31,2 12.42,2.83 12.83,4H10A1,1 0 0,0 9,5V6H14V5A3,3 0 0,1 17,2C18.31,2 19.42,2.83 19.83,4H17A1,1 0 0,0 16,5V14.94C18,14.62 20,13 22,13V15C19.78,15 17.56,17 15.33,17C13.11,17 10.89,15 8.67,15C6.44,15 4.22,16 2,17V15M14,8H9V10H14V8M14,12H9V13C10.67,13.16 12.33,14.31 14,14.79V12M2,19C4.22,18 6.44,17 8.67,17C10.89,17 13.11,19 15.33,19C17.56,19 19.78,17 22,17V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V19Z",Xa="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",Ka="M7.5,10.5A1.5,1.5 0 0,1 9,12A1.5,1.5 0 0,1 7.5,13.5C6.66,13.5 6,12.83 6,12A1.5,1.5 0 0,1 7.5,10.5M16.5,10.5A1.5,1.5 0 0,1 18,12A1.5,1.5 0 0,1 16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5M4.22,2H19.78C21,2 22,3 22,4.22V19.78A2.22,2.22 0 0,1 19.78,22H4.22C3,22 2,21 2,19.78V4.22A2.22,2.22 0 0,1 4.22,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",Ja="M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z",Qa="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z",ti="M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6A6,6 0 0,1 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12A6,6 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z",ei="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14",ai="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z",ii="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z",si="M16,18H18V6H16M6,18L14.5,12L6,6V18Z",ri="M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z",oi="M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z",ni="M20.07,19.07L18.66,17.66C20.11,16.22 21,14.21 21,12C21,9.78 20.11,7.78 18.66,6.34L20.07,4.93C21.88,6.74 23,9.24 23,12C23,14.76 21.88,17.26 20.07,19.07M17.24,16.24L15.83,14.83C16.55,14.11 17,13.11 17,12C17,10.89 16.55,9.89 15.83,9.17L17.24,7.76C18.33,8.85 19,10.35 19,12C19,13.65 18.33,15.15 17.24,16.24M4,3H12A2,2 0 0,1 14,5V19A2,2 0 0,1 12,21H4A2,2 0 0,1 2,19V5A2,2 0 0,1 4,3M8,5A2,2 0 0,0 6,7A2,2 0 0,0 8,9A2,2 0 0,0 10,7A2,2 0 0,0 8,5M8,11A4,4 0 0,0 4,15A4,4 0 0,0 8,19A4,4 0 0,0 12,15A4,4 0 0,0 8,11M8,13A2,2 0 0,1 10,15A2,2 0 0,1 8,17A2,2 0 0,1 6,15A2,2 0 0,1 8,13Z",ci="M9,16.5L9.91,15.59L15.13,20.8L14.21,21.71L9,16.5M15.5,10L16.41,9.09L21.63,14.3L20.71,15.21L15.5,10M6.72,2.72L10.15,6.15L6.15,10.15L2.72,6.72C1.94,5.94 1.94,4.67 2.72,3.89L3.89,2.72C4.67,1.94 5.94,1.94 6.72,2.72M14.57,7.5L15.28,8.21L8.21,15.28L7.5,14.57L6.64,11.07L11.07,6.64L14.57,7.5Z",li="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z",di="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z",hi="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4M7,8H13V13H7V8M14,8H17V10H14V8M17,11V16H14V11H17M7,14H13V16H7V14Z",ui="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12",pi="M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z",mi="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M16,16L19,8H16.5L15,12.5L13.5,8H5V10H8V16H10V10H11.77L14,16H16Z",fi="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",Pe="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",gi="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z",bi="M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z",vi="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",$i="M21 20V2H3V20H1V23H23V20M19 4V11H13V4M5 4H11V11H5M5 20V13H11V20M13 20V13H19V20Z";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee={ATTRIBUTE:1,CHILD:2},Wt=e=>(...t)=>({_$litDirective$:e,values:t});let Zt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,i){this._$Ct=t,this._$AM=a,this._$Ci=i}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Wt(class extends Zt{constructor(e){if(super(e),e.type!==Ee.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const a=e.element.classList;for(const i of this.st)i in t||(a.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||this.nt?.has(i)||(s?(a.add(i),this.st.add(i)):(a.remove(i),this.st.delete(i)))}return R}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe="important",wi=" !"+Oe,yi=Wt(class extends Zt{constructor(e){if(super(e),e.type!==Ee.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const i=e[a];return i==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?a.removeProperty(i):a[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ft.add(i);const r=typeof s=="string"&&s.endsWith(wi);i.includes("-")||r?a.setProperty(i,r?s.slice(0,-11):s,r?Oe:""):a[i]=s}}return R}});function Ws(e){return{type:"auth",access_token:e}}function Zs(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function ki(){return{type:"get_states"}}function xi(e,t,a,i,s){const r={type:"call_service",domain:e,service:t,target:i,return_response:s};return a&&(r.service_data=a),r}function Us(e){const t={type:"subscribe_events"};return e&&(t.event_type=e),t}function Fs(e){return{type:"unsubscribe_events",subscription:e}}function qs(){return{type:"ping"}}function Gs(e,t){return{type:"result",success:!1,error:{code:e,message:t}}}const Ys=e=>e.sendMessagePromise(ki()),Ci=(e,t,a,i,s,r)=>e.sendMessagePromise(xi(t,a,i,s,r)),m={home:Ra,therm:Pe,bulb:Ia,shield:ei,spark:Ma,play:Ga,pause:Fa,next:si,minus:Wa,plus:Se,close:Me,back:_a,lock:ze,unlock:Ba,power:Xa,room:fi,edit:qa,resize:Ja,check:xa,restore:Qa,gear:Ve},Ut={"mdi:shower":ai,"mdi:silverware-fork-knife":ii,"mdi:table-chair":di,"mdi:sofa":ri,"mdi:bed":$a,"mdi:teddy-bear":ui,"mdi:desk":Va,"mdi:garage":Oa,"mdi:flower":Pa,"mdi:balcony":va,"mdi:pool":Ya,"mdi:washing-machine":bi,"mdi:door":He,"mdi:dumbbell":Ha,"mdi:stairs":li},_i=Object.keys(Ut),Ct=e=>Ut[e]??m.room,U=e=>e&&Ut[e]||m.room;let Li=0;const it=e=>`${e}${++Li}`,H=e=>v`<svg class="art" viewBox="0 0 60 60" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">${e}</svg>`;function Ai(e,t="#ffcf8a"){const a=it("l");return H(v`<defs><radialGradient id=${a} cx="36" cy="40" r="28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.85}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="36" cy="40" r="28" fill=${`url(#${a})`}/><line x1="36" y1="0" x2="36" y2="22" stroke="#6b717a" stroke-width=".8"/>
    <path d="M25 34 L47 34 L41.5 21 L30.5 21 Z" fill=${e?"#d9c6a3":"#4a4f57"}/><ellipse cx="36" cy="34.5" rx="11" ry="1.7" fill=${e?"#fff2d6":"#3a3e45"}/>`)}function Mi(e){const t=Math.max(0,Math.min(100,100-e)),a=Array.from({length:Math.round(t/11)},(i,s)=>v`<line x1="20" x2="54" y1=${12+s*4.2} y2=${12+s*4.2} stroke="#8796a6" stroke-width=".5"/>`);return H(v`<rect x="20" y="10" width="34" height="46" rx="2" fill="#2d4a66" opacity=".6"/><circle cx="44" cy="22" r="5" fill="#ffd27a" opacity=".5"/>
    <rect x="20" y="10" width="34" height=${(46*t/100).toFixed(1)} fill="#a9b6c4"/>${a}<rect x="18" y="8" width="38" height="3" rx="1" fill="#5d646e"/>`)}function Vi(e,t="#ff9f43"){const a=e==null?0:Math.max(0,Math.min(1,(e-16)/14));return H(v`<circle cx="40" cy="36" r="17" fill="#2a2e34" stroke="#454a52"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${t} stroke-width="2.6" stroke-dasharray=${`${(a*81).toFixed(1)} 82`} transform="rotate(135 40 36)" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${t} stroke-width="7" opacity=".08"/>`)}function Hi(e){return H(v`<rect x="28" y="12" width="24" height="44" rx="3" fill="#3a3f46"/><rect x="31" y="15" width="18" height="38" rx="2" fill="#2b2f35"/>
    <circle cx="34" cy="34" r="1.6" fill=${e?"#ff8a5c":"#5be3a0"}/><rect x=${e?44:38} y="33.2" width="6" height="1.6" rx=".8" fill="#8a919b"/>`)}function zi(e){return H(v`<ellipse cx="40" cy="50" rx="16" ry="4" fill="#000" opacity=".3"/><ellipse cx="40" cy="44" rx="15" ry="6" fill="#d8dce1"/><rect x="25" y="38" width="30" height="6" fill="#d8dce1"/>
    <ellipse cx="40" cy="38" rx="15" ry="6" fill="#eef0f3"/><circle cx="40" cy="36" r="3.4" fill=${e?"#5be3a0":"#c4c9cf"}/>
    ${e?v`<path d="M10 50 Q20 46 26 48" stroke="#5be3a0" stroke-width=".8" fill="none" stroke-dasharray="1.2 1.2" opacity=".8"/>`:null}`)}function Si(e){if(e)return H(v`<image href=${e} x="26" y="14" width="30" height="30" preserveAspectRatio="xMidYMid slice" transform="rotate(6 41 29)"/>`);const t=it("a");return H(v`<defs><linearGradient id=${t} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3a35f"/><stop offset=".5" stop-color="#d96d6d"/><stop offset=".75" stop-color="#5c4a8a"/><stop offset="1" stop-color="#2e2a54"/></linearGradient></defs>
    <rect x="26" y="14" width="30" height="30" rx="3" fill=${`url(#${t})`} transform="rotate(6 41 29)"/><circle cx="46" cy="22" r="3" fill="#ffe7b8" opacity=".9" transform="rotate(6 41 29)"/>`)}function oe(e){const t=!/rain|pour|snow|fog|cloudy$|lightning|night/.test(e)||e==="partlycloudy",a=e!=="sunny"&&e!=="clear-night",i=/rain|pour|lightning/.test(e),s=e==="clear-night";return H(v`${t?v`<circle cx="44" cy="20" r="8" fill="#ffd27a" opacity=".85"/>`:null}
    ${s?v`<path d="M46 12a9 9 0 1 0 6 14 7 7 0 1 1-6-14z" fill="#e8e3c8" opacity=".9"/>`:null}
    ${a?v`<path d="M28 36h20a6 6 0 0 0 .6-12 9 9 0 0 0-17 2.5A5 5 0 0 0 28 36z" fill="#cfd6df"/>`:null}
    ${i?v`<path d="M32 40l-2 6M38 40l-2 6M44 40l-2 6" stroke="#6cc8ff" stroke-width="1.4" stroke-linecap="round"/>`:null}`)}function Pi(e){return H(v`<g transform="translate(40 34)"><g class=${e?"spin":""}>
    ${[0,120,240].map(t=>v`<ellipse cx="0" cy="-8" rx="4" ry="8" fill="#cfd6df" opacity=".85" transform=${`rotate(${t})`}/>`)}
    </g><circle r="2.6" fill="#8a919b"/></g>`)}function Ei(e){return H(v`<rect x="28" y="20" width="24" height="24" rx="6" fill="#3a3f46"/><circle cx="36" cy="32" r="1.8" fill="#1b1e22"/><circle cx="44" cy="32" r="1.8" fill="#1b1e22"/>
    <circle cx="48" cy="24" r="1.4" fill=${e?"#5be3a0":"#5d646e"}/>`)}function Oi(e,t){let a="M0 26 L100 26";if(t&&t.length>1){const i=Math.min(...t),r=Math.max(...t)-i||1;a=t.map((n,d)=>[d/(t.length-1)*100,34-(n-i)/r*26]).map(([n,d],u)=>`${u?"L":"M"}${n.toFixed(1)} ${d.toFixed(1)}`).join(" ")}return v`<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d=${`${a} V40 H0Z`} fill=${e} opacity=".12"/><path d=${a} fill="none" stroke=${e} stroke-width="1.4" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity=".85"/></svg>`}function Ti(){return H(v`<circle cx="42" cy="34" r="14" fill="#b49cff" opacity=".18"/><path d="M42 22l2.6 7.4L52 32l-7.4 2.6L42 42l-2.6-7.4L32 32l7.4-2.6z" fill="#d9ccff"/><path d="M52 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#ffe2b0"/>`)}function Ri(e,t="#ffcf8a"){const a=it("f");return H(v`<defs><radialGradient id=${a} cx="40" cy="22" r="22" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.9}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="40" cy="22" r="22" fill=${`url(#${a})`}/><path d="M33 26 L47 26 L44 14 L36 14Z" fill=${e?"#e6d6b8":"#4a4f57"}/>
    <line x1="40" y1="26" x2="40" y2="56" stroke="#6b717a" stroke-width="1.2"/><ellipse cx="40" cy="57" rx="6" ry="1.2" fill="#555b63"/>`)}function Ni(e,t="#ffcf8a"){const a=it("s");return H(v`<defs><linearGradient id=${a} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.7}/><stop offset="1" stop-color=${t} stop-opacity="0"/></linearGradient></defs>
    <rect x="12" y="31" width="46" height="25" fill=${`url(#${a})`}/><rect x="12" y="28" width="46" height="3" rx="1.5" fill=${e?t:"#4a4f57"} opacity=${e?.45+e/200:1}/>
    ${[16,23,30,37,44,51].map(i=>v`<circle cx=${i} cy="29.5" r=".8" fill="#fff" opacity=${e?.9:.15}/>`)}`)}function Di(e,t="#ffcf8a"){const a=it("p");return H(v`<defs><linearGradient id=${a} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.6}/><stop offset="1" stop-color=${t} stop-opacity="0"/></linearGradient></defs>
    <path d="M34 12 L46 12 L56 58 L24 58Z" fill=${`url(#${a})`}/><rect x="33" y="6" width="14" height="6" rx="2" fill=${e?"#d9c6a3":"#4a4f57"}/>
    <ellipse cx="40" cy="12" rx="6" ry="1.2" fill=${e?"#fff2d6":"#3a3e45"}/>`)}function Ii(e,t="#ffcf8a"){const a=it("b");return H(v`<defs><radialGradient id=${a} cx="40" cy="30" r="22" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.8}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="40" cy="30" r="22" fill=${`url(#${a})`}/><line x1="40" y1="0" x2="40" y2="18" stroke="#6b717a" stroke-width=".8"/>
    <rect x="37" y="17" width="6" height="5" rx="1" fill="#8a919b"/><circle cx="40" cy="28" r="7" fill=${e?"#fff2d6":"#4a4f57"}/>`)}function ne(e,t,a){return e==="lamp"?Ri(t,a):e==="led"?Ni(t,a):e==="spot"?Di(t,a):e==="bulb"?Ii(t,a):Ai(t,a)}const J={ceiling:{icon:ka,name:"Luz de teto"},lamp:{icon:Sa,name:"Candeeiro"},led:{icon:Na,name:"Fita LED"},spot:{icon:ci,name:"Spot"},bulb:{icon:Da,name:"Lâmpada"},tv:{icon:pi,name:"TV"},appletv:{icon:mi,name:"Apple TV"},homepod:{icon:oi,name:"HomePod"},speaker:{icon:ni,name:"Coluna"},ac:{icon:ga,name:"Ar condicionado"},fan:{icon:za,name:"Ventoinha"},purifier:{icon:ba,name:"Purificador"},blind:{icon:wa,name:"Estore"},door:{icon:He,name:"Porta"},window:{icon:$i,name:"Janela"},plug:{icon:Ka,name:"Tomada"},sensor:{icon:Pe,name:"Sensor"},motion:{icon:Za,name:"Movimento"},camera:{icon:ya,name:"Câmara"},lock:{icon:ze,name:"Fechadura"},vacuum:{icon:ti,name:"Aspirador"},other:{icon:Aa,name:"Outro"}},Te={light:["ceiling","lamp","led","spot","bulb"],media_player:["tv","appletv","homepod","speaker"],fan:["fan","purifier"],cover:["blind","door","window"],switch:["plug","tv","fan","other"],input_boolean:["plug","other"],binary_sensor:["door","window","motion","sensor"]},P=(e,...t)=>t.some(a=>e.includes(a));function Pt(e,t,a={}){const i=e.split(".")[0],s=t?.attributes??{},r=`${a.name??""} ${s.friendly_name??""} ${e}`.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),o=`${a.model??""}`.toLowerCase(),n=`${a.manufacturer??""}`.toLowerCase();return i==="light"?P(r,"fita","led","strip","lightstrip","barra")?"led":P(r,"teto","tecto","ceiling","plafon","lustre","pendente","suspens")?"ceiling":P(r,"spot","foco","embutid")?"spot":P(r,"candeeiro","lamp","abajur","de pe","cabeceira","floor")?"lamp":"ceiling":i==="media_player"?n.includes("apple")&&o.includes("homepod")?"homepod":n.includes("apple")&&o.includes("tv")?"appletv":P(r,"homepod")?"homepod":P(r,"apple tv","appletv")?"appletv":s.device_class==="tv"||P(r,"tv","televis")?"tv":"speaker":i==="climate"?"ac":i==="fan"?P(r,"purif","air clean")||n.includes("philips")&&o.startsWith("ac")?"purifier":"fan":i==="cover"?s.device_class==="door"||s.device_class==="garage"?"door":"blind":i==="lock"?"lock":i==="camera"?"camera":i==="vacuum"?"vacuum":i==="switch"||i==="input_boolean"?P(r,"tv","televis")?"tv":"plug":i==="binary_sensor"?["door","garage_door","opening"].includes(s.device_class)?"door":s.device_class==="window"?"window":["motion","occupancy","presence"].includes(s.device_class)?"motion":"sensor":i==="sensor"?"sensor":"other"}const k=e=>e.split(".")[0],B=e=>!!e&&!["off","unavailable","unknown","closed","locked","idle","standby","docked"].includes(e.state),Bi=e=>!e||e.state==="unavailable";function F(e){if(!e||e.state!=="on")return 0;const t=e.attributes.brightness;return t==null?100:Math.max(1,Math.round(t/255*100))}function ct(e){const t=e?.attributes.rgb_color,a=e?.attributes.color_mode;if(t&&a&&!["color_temp","brightness","onoff","white"].includes(a))return`rgb(${t.join(",")})`;const i=e?.attributes.color_temp_kelvin;return i?i>=5e3?"#e6f0ff":i>=3800?"#fff1d6":"#ffcf8a":"#ffcf8a"}const z=e=>e.devices.filter(t=>k(t.id)==="light"&&!t.hidden).map(t=>t.id);function ji(e,t){const a=e.filter(i=>t[i]?.state==="on");return a.length?Math.round(a.reduce((i,s)=>i+F(t[s]),0)/a.length):0}const ce={light:"light",climate:"climate",lock:"lock",cover:"cover",media_player:"media",vacuum:"vacuum",fan:"fan",switch:"switch",input_boolean:"switch",outlet:"outlet",sensor:"sensor",binary_sensor:"binary",camera:"camera"};function vt(e,t){const a=ce[e.kind??k(e.id)]??ce[k(e.id)];if(!a)return null;const i=a==="climate"?"l":a==="media"||a==="camera"?"m":"s";return{key:e.id,kind:a,size:i,name:e.name,sub:t?.name,entity:e.id,room:t}}function Et(e,t){const a=e.rooms.filter(o=>!o.hidden),i=a.flatMap(o=>o.devices.filter(n=>!n.hidden).map(n=>({d:n,r:o}))),s=o=>i.filter(({d:n})=>(n.kind??k(n.id))===o),r=[];return a.forEach((o,n)=>{const d=z(o);d.length&&r.push({key:`room-${o.id}`,kind:"room-lights",size:n===0?"m":"s",name:o.name,entities:d,room:o})}),s("climate").forEach(({d:o,r:n},d)=>r.push({key:o.id,kind:"climate",size:d===0?"l":"m",name:o.name,sub:n.name,entity:o.id,room:n})),e.weather&&t[e.weather]&&r.push({key:e.weather,kind:"weather",size:"l",name:"Tempo",entity:e.weather}),s("lock").forEach(({d:o,r:n})=>r.push({key:o.id,kind:"lock",size:"s",name:o.name,sub:n.name,entity:o.id,room:n})),s("cover").forEach(({d:o,r:n})=>r.push({key:o.id,kind:"cover",size:"s",name:o.name,sub:n.name,entity:o.id,room:n})),s("media_player").sort((o,n)=>+(t[n.d.id]?.state==="playing")-+(t[o.d.id]?.state==="playing")).slice(0,2).forEach(({d:o,r:n})=>r.push({key:o.id,kind:"media",size:"m",name:o.name,sub:n.name,entity:o.id,room:n})),s("vacuum").forEach(({d:o,r:n})=>r.push({key:o.id,kind:"vacuum",size:"s",name:o.name,sub:n.name,entity:o.id,room:n})),e.scenes.length&&r.push({key:"scenes",kind:"scenes",size:"m",name:"Cenas",entities:e.scenes.slice(0,6)}),r}const Wi=[{id:"all",name:"Tudo",kinds:[]},{id:"lights",name:"Luzes",kinds:["light"]},{id:"climate",name:"Clima",kinds:["climate","fan"]},{id:"covers",name:"Estores",kinds:["cover"]},{id:"media",name:"Média",kinds:["media"]},{id:"other",name:"Outros",kinds:["switch","outlet","lock","vacuum","sensor","binary","camera"]}];function Zi(e,t=[]){const a=e.devices.filter(s=>!s.hidden).map(s=>vt(s,e)),i=(e.entities??[]).filter(s=>!s.primary&&t.includes(s.id)).map(s=>vt({id:s.id,name:s.name,kind:k(s.id)},e));return[...a,...i].filter(s=>!!s)}function V(e,t){const a=e.rooms.filter(n=>!n.hidden).flatMap(n=>n.devices),i=a.filter(n=>k(n.id)==="light"&&t[n.id]?.state==="on").length,s=a.filter(n=>k(n.id)==="lock"&&t[n.id]?.state==="unlocked").length,r=a.filter(n=>k(n.id)==="binary_sensor"&&["door","window","garage_door","opening"].includes(t[n.id]?.attributes.device_class)&&t[n.id]?.state==="on").length,o=e.rooms.map(n=>n.temperature?parseFloat(t[n.temperature]?.state??""):NaN).filter(n=>!Number.isNaN(n));return{lightsOn:i,alerts:s+r,alertText:s?`${s} destrancada${s>1?"s":""}`:r?`${r} aberta${r>1?"s":""}`:"tudo fechado",temp:o.length?`${Math.round(Math.min(...o))}–${Math.round(Math.max(...o))}°`:null}}const A=(e,t=1)=>e.toLocaleString("pt-PT",{maximumFractionDigits:t}),Ui=["door","window","garage_door","opening"],Re=e=>e.rooms.filter(t=>!t.hidden).flatMap(t=>t.devices.filter(a=>!a.hidden).map(a=>({d:a,r:t})));function Fi(e,t){const a=[],i=Re(e);return i.filter(({d:s})=>k(s.id)==="climate").forEach(({d:s,r})=>a.push({key:s.id,kind:"climate",size:"l",name:s.name,sub:r.name,entity:s.id,room:r})),e.weather&&t[e.weather]&&a.push({key:e.weather,kind:"weather",size:"l",name:"Tempo",entity:e.weather}),i.filter(({d:s})=>k(s.id)==="fan").forEach(({d:s,r})=>a.push({key:s.id,kind:"fan",size:"s",name:s.name,sub:r.name,entity:s.id,room:r})),e.rooms.filter(s=>!s.hidden).forEach(s=>{s.temperature&&t[s.temperature]&&a.push({key:`t-${s.id}`,kind:"sensor",size:"s",name:s.name,sub:"temperatura",entity:s.temperature,room:s}),s.humidity&&t[s.humidity]&&a.push({key:`h-${s.id}`,kind:"sensor",size:"s",name:s.name,sub:"humidade",entity:s.humidity,room:s})}),a}function qi(e,t){const a=Re(e),i=a.filter(({d:o})=>k(o.id)==="lock"),s=a.filter(({d:o})=>k(o.id)==="binary_sensor"&&[...Ui,"motion","occupancy","presence","moisture","smoke","gas"].includes(t[o.id]?.attributes.device_class));s.sort((o,n)=>+(t[n.d.id]?.state==="on")-+(t[o.d.id]?.state==="on"));const r=a.filter(({d:o})=>k(o.id)==="camera");return[...i.map(({d:o,r:n})=>({key:o.id,kind:"lock",size:"s",name:o.name,sub:n.name,entity:o.id,room:n})),...s.map(({d:o,r:n})=>({key:o.id,kind:"binary",size:"s",name:o.name,sub:n.name,entity:o.id,room:n})),...r.map(({d:o,r:n})=>({key:o.id,kind:"camera",size:"m",name:o.name,sub:n.name,entity:o.id,room:n}))]}function Gi(e,t){return[...e.scenes,...e.scripts].filter(a=>t[a]).map(a=>({key:a,kind:"scene",size:"s",name:t[a].attributes.friendly_name??a,entity:a}))}const Yi=["climate","weather","media","scenes","camera","clock"],Ne=e=>Yi.includes(e)?["m","l","xl"]:["s","m","l"];function Xi(e,t){for(const a of e.rooms){const i=a.devices.find(s=>s.id===t);if(i)return vt(i,a)}return null}function le(e,t,a){if(!t)return e;const i=new Map(e.map(n=>[n.key,n])),s=new Set(t.hidden),r=[],o=new Set;for(const n of t.items){if(o.has(n.key)||s.has(n.key))continue;const d=i.get(n.key)??Xi(a,n.key);if(!d)continue;o.add(n.key);const u=n.size&&Ne(d.kind).includes(n.size)?n.size:d.size;r.push({...d,size:u})}for(const n of e)!o.has(n.key)&&!s.has(n.key)&&r.push(n);return r}function Ki(e,t,a){const i=new Set(t.items.map(o=>o.key)),s=e.filter(o=>t.hidden.includes(o.key)),r=a.rooms.filter(o=>!o.hidden).flatMap(o=>o.devices.filter(n=>!n.hidden).map(n=>vt(n,o))).filter(o=>!!o&&!i.has(o.key)&&!s.some(n=>n.key===o.key)&&!e.some(n=>n.key===o.key&&!t.hidden.includes(n.key)));return[...s,...r]}function at(e,t,a){return e?t?t===e?e===1?"luz acesa":`${e} luzes acesas`:`${t} de ${e} luzes acesas`:e===1?"luz apagada":"luzes apagadas":`${a} dispositivo${a===1?"":"s"}`}const q=N`
  :host {
    display: block;
    position: absolute;
    inset: 0;
    container-type: size;
    font-family: "Geist", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  .vd {
    --u: min(1cqw, 1.667cqh);
    --card: linear-gradient(180deg, #22262b, #1b1e22);
    --rim: inset 0 1px 0 rgba(255, 255, 255, 0.11), inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 calc(var(--u) * 1.4) calc(var(--u) * 2.6) calc(var(--u) * -1.4) rgba(0, 0, 0, 0.65);
    --muted: #8b939e;
    --name: #c9cfd6;
    --acc: #3db8f5;
    --warm: #ffcf8a;
    --well: rgba(255, 255, 255, 0.06);
    --line: rgba(255, 255, 255, 0.08);
    --sheet: linear-gradient(180deg, #262a30, #1f2226);
    --on-card: linear-gradient(180deg, #2c2820, #211e19);
    --on-hero: #ffe2b0;
    --fg: #eef1f4;
    position: absolute;
    inset: 0;
    color: var(--fg);
    background: radial-gradient(90% 70% at 70% -10%, #262b31 0%, #14171a 55%, #0f1113 100%);
    overflow: hidden;
  }
  .vd.light {
    --card: linear-gradient(180deg, #ffffff, #f6f7f8);
    --rim: inset 0 1px 0 #fff, inset 0 0 0 1px rgba(20, 23, 26, 0.06), 0 calc(var(--u) * 1.2) calc(var(--u) * 2.4) calc(var(--u) * -1.4) rgba(30, 40, 50, 0.25);
    --muted: #6a727c;
    --name: #3b424a;
    --acc: #0a86c9;
    --well: rgba(20, 23, 26, 0.05);
    --line: rgba(20, 23, 26, 0.08);
    --sheet: linear-gradient(180deg, #ffffff, #f3f4f6);
    --on-card: linear-gradient(180deg, #fff7e8, #fff1d9);
    --on-hero: #8a5a12;
    --fg: #14171a;
    background: radial-gradient(90% 70% at 70% -10%, #ffffff 0%, #eef0f2 55%, #e4e7ea 100%);
  }
  @container (max-width: 760px) {
    .vd {
      --u: 2.1cqw;
    }
  }
  button {
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
  .ic {
    width: 1em;
    height: 1em;
    flex: none;
  }
  .k {
    font-size: calc(var(--u) * 0.95);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
  }

  /* ---------- dock: left (vertical) or bottom (horizontal) ---------- */
  .dock {
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: calc(var(--u) * 0.5);
    background: var(--card);
    box-shadow: var(--rim);
  }
  .dock .rooms {
    display: flex;
    align-items: center;
    gap: calc(var(--u) * 0.4);
    overflow: auto;
    scrollbar-width: none;
  }
  .dock .rooms::-webkit-scrollbar {
    display: none;
  }
  .dock-left .dock {
    left: calc(var(--u) * 1.4);
    top: calc(var(--u) * 1.4);
    bottom: calc(var(--u) * 1.4);
    width: calc(var(--u) * 7.6);
    border-radius: calc(var(--u) * 3);
    flex-direction: column;
    padding: calc(var(--u) * 1.2) calc(var(--u) * 0.7);
    box-sizing: border-box;
  }
  .dock-left .dock .rooms {
    flex-direction: column;
    min-height: 0;
  }
  .dock-bottom .dock {
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(var(--u) * 1.4);
    height: calc(var(--u) * 7.6);
    max-width: calc(100% - var(--u) * 2.8);
    border-radius: calc(var(--u) * 3);
    padding: calc(var(--u) * 0.7) calc(var(--u) * 1.2);
    box-sizing: border-box;
  }
  .dock .sep {
    flex: none;
    background: var(--line);
  }
  .dock-left .dock .sep {
    width: calc(var(--u) * 3);
    height: 1px;
    margin: calc(var(--u) * 0.4) 0;
  }
  .dock-bottom .dock .sep {
    height: calc(var(--u) * 3);
    width: 1px;
    margin: 0 calc(var(--u) * 0.4);
  }
  .di {
    position: relative;
    flex: none;
    width: calc(var(--u) * 5.4);
    height: calc(var(--u) * 5.2);
    border-radius: calc(var(--u) * 1.7);
    display: grid;
    place-items: center;
    align-content: center;
    gap: calc(var(--u) * 0.2);
    color: var(--muted);
    font-size: calc(var(--u) * 2.3);
    transition: background 0.2s, color 0.2s;
  }
  .dock-left .di.gear {
    margin-top: auto;
  }
  .dock-bottom .di.gear {
    margin-left: calc(var(--u) * 0.6);
  }
  .di.on {
    background: color-mix(in srgb, var(--acc) 15%, transparent);
    color: var(--acc);
  }
  .di.rm.lit:not(.on) {
    color: var(--fg);
  }
  .di .lb {
    font-size: calc(var(--u) * 0.78);
    font-weight: 500;
    max-width: calc(var(--u) * 5.4);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .di .bdg {
    position: absolute;
    right: calc(var(--u) * 0.2);
    top: calc(var(--u) * 0.2);
    min-width: calc(var(--u) * 1.7);
    height: calc(var(--u) * 1.7);
    border-radius: 99px;
    background: var(--warm);
    color: #2a1a04;
    font-size: calc(var(--u) * 0.9);
    font-weight: 700;
    display: grid;
    place-items: center;
    padding: 0 calc(var(--u) * 0.3);
    box-sizing: border-box;
  }
  .di .glow {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle at 50% 30%, rgba(255, 207, 138, 0.28), transparent 70%);
  }

  /* ---------- main area ---------- */
  .main {
    position: absolute;
    top: calc(var(--u) * 1.6);
    right: calc(var(--u) * 1.6);
    bottom: 0;
    left: calc(var(--u) * 1.6);
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: none;
    padding-bottom: calc(var(--u) * 1.6);
    box-sizing: border-box;
  }
  .main::-webkit-scrollbar {
    display: none;
  }
  .dock-left .main {
    left: calc(var(--u) * 10.4);
  }
  .dock-bottom .main {
    padding-bottom: calc(var(--u) * 11);
  }
  .hdr {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: calc(var(--u) * 1.4);
    margin-bottom: calc(var(--u) * 1.4);
  }
  .hdr .t b {
    display: block;
    font-weight: 300;
    font-size: calc(var(--u) * 4.2);
    letter-spacing: -0.04em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }
  .hdr .t span {
    font-size: calc(var(--u) * 1.3);
    color: var(--muted);
  }
  .hdr .t span::first-letter {
    text-transform: uppercase;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--u) * 0.7);
    align-items: center;
  }
  .chip {
    display: flex;
    align-items: center;
    gap: calc(var(--u) * 0.7);
    padding: calc(var(--u) * 0.55) calc(var(--u) * 1.1) calc(var(--u) * 0.55) calc(var(--u) * 0.55);
    border-radius: 99px;
    background: var(--card);
    box-shadow: var(--rim);
    font-size: calc(var(--u) * 1.1);
    font-weight: 500;
    white-space: nowrap;
  }
  .chip i {
    width: calc(var(--u) * 2.4);
    height: calc(var(--u) * 2.4);
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: calc(var(--u) * 1.3);
  }
  .chip small {
    display: block;
    font-size: calc(var(--u) * 0.95);
    color: var(--muted);
    font-weight: 400;
    line-height: 1.1;
  }
  .people {
    display: flex;
  }
  .av {
    width: calc(var(--u) * 3.4);
    height: calc(var(--u) * 3.4);
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 600;
    font-size: calc(var(--u) * 1.3);
    color: #1b1206;
    background: #ffb36b center / cover;
    margin-left: calc(var(--u) * -0.7);
    border: calc(var(--u) * 0.2) solid #15181b;
    position: relative;
  }
  .av:first-child {
    margin-left: 0;
  }
  .av i {
    position: absolute;
    right: calc(var(--u) * -0.15);
    bottom: calc(var(--u) * -0.15);
    width: calc(var(--u) * 1);
    height: calc(var(--u) * 1);
    border-radius: 50%;
    background: #34c759;
    border: calc(var(--u) * 0.2) solid #15181b;
  }
  .empty {
    color: var(--muted);
    font-size: calc(var(--u) * 1.4);
  }

  /* ---------- grid and widgets: name top-left, hero bottom-left, art bottom-right ---------- */
  .grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-auto-rows: calc(var(--u) * 13.4);
    grid-auto-flow: dense;
    gap: calc(var(--u) * 1.2);
  }
  @container (max-width: 760px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: calc(var(--u) * 17);
    }
    .w.xl {
      grid-column: span 2;
    }
  }
  .w {
    position: relative;
    border-radius: calc(var(--u) * 2.2);
    background: var(--card);
    box-shadow: var(--rim);
    overflow: hidden;
    padding: calc(var(--u) * 1.4);
    display: flex;
    flex-direction: column;
    min-width: 0;
    touch-action: pan-y;
    cursor: pointer;
    transition: transform 0.15s, background 0.3s;
  }
  .w:active:not(.dragging) {
    transform: scale(0.985);
  }
  .w.m {
    grid-column: span 2;
  }
  .w.l {
    grid-column: span 2;
    grid-row: span 2;
  }
  .w.xl {
    grid-column: span 3;
    grid-row: span 2;
  }
  .w.off {
    opacity: 0.5;
  }
  .w .nm {
    position: relative;
    z-index: 2;
    font-size: calc(var(--u) * 1.25);
    font-weight: 500;
    color: var(--name);
    display: flex;
    justify-content: space-between;
    gap: calc(var(--u) * 1);
    min-width: 0;
  }
  .w .nm em {
    font-style: normal;
    color: var(--muted);
    font-weight: 400;
    white-space: nowrap;
  }
  .w .hero {
    position: relative;
    z-index: 2;
    margin-top: auto;
    font-weight: 300;
    font-size: calc(var(--u) * 3.6);
    letter-spacing: -0.045em;
    line-height: 1.05;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .w .hero small {
    display: block;
    font-size: calc(var(--u) * 1.15);
    letter-spacing: 0;
    color: var(--muted);
    font-weight: 400;
    margin-top: calc(var(--u) * 0.35);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .w .art {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 65%;
    z-index: 1;
    pointer-events: none;
  }
  .w .fill {
    --fc: 255, 207, 138;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    background: linear-gradient(90deg, rgba(var(--fc), 0.18), rgba(var(--fc), 0.05));
    border-right: 1px solid rgba(var(--fc), 0.3);
    transition: width 0.25s;
  }
  .w.dragging .fill {
    transition: none;
  }
  .w.on {
    background: var(--on-card);
  }
  .w.on .hero {
    color: var(--on-hero);
  }
  /* a light's own colour is for dark cards; on light ones the warm "on" ink reads better */
  .vd.light .w.on .hero,
  .vd.moldura .w.on .hero {
    color: var(--on-hero) !important;
  }
  .w.att {
    box-shadow: var(--rim), inset 0 0 0 1px rgba(255, 138, 92, 0.5);
  }
  .w.att .hero {
    color: #ff9e7a;
  }
  .ctl {
    position: relative;
    z-index: 2;
    display: flex;
    gap: calc(var(--u) * 0.6);
    margin-top: calc(var(--u) * 0.8);
  }
  .ctl button {
    width: calc(var(--u) * 3.8);
    height: calc(var(--u) * 3.8);
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--well);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
    font-size: calc(var(--u) * 1.9);
  }
  .ctl button.pri {
    background: var(--acc);
    color: #04202e;
    box-shadow: none;
  }
  .ctl.big {
    justify-content: center;
    gap: calc(var(--u) * 2);
  }
  .ctl.big button {
    width: calc(var(--u) * 6);
    height: calc(var(--u) * 6);
    font-size: calc(var(--u) * 2.8);
  }
  .seg {
    position: relative;
    z-index: 2;
    display: inline-flex;
    gap: calc(var(--u) * 0.3);
    padding: calc(var(--u) * 0.3);
    border-radius: 99px;
    background: rgba(0, 0, 0, 0.3);
    margin-top: calc(var(--u) * 0.6);
    align-self: flex-start;
  }
  .light .seg {
    background: rgba(20, 23, 26, 0.06);
  }
  .seg button {
    padding: calc(var(--u) * 0.45) calc(var(--u) * 1.1);
    border-radius: 99px;
    font-size: calc(var(--u) * 1.05);
    color: var(--muted);
  }
  .seg button.on {
    background: #ff9f43;
    color: #2a1405;
  }
  .seg.wide {
    flex-wrap: wrap;
    border-radius: calc(var(--u) * 1.4);
  }
  .scn {
    display: flex;
    gap: calc(var(--u) * 0.7);
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin-top: auto;
  }
  .scn button {
    display: flex;
    align-items: center;
    gap: calc(var(--u) * 0.6);
    padding: calc(var(--u) * 0.7) calc(var(--u) * 1.2);
    border-radius: 99px;
    background: var(--well);
    font-size: calc(var(--u) * 1.15);
    font-weight: 500;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }
  .scn button:active {
    background: var(--acc);
    color: #04202e;
  }
  .scn:has(+ .hero:empty) {
    margin-top: auto;
  }
  .hero:empty {
    display: none;
  }
  .hrs {
    position: relative;
    z-index: 2;
    display: flex;
    gap: calc(var(--u) * 1.6);
    margin-top: calc(var(--u) * 1);
    font-size: calc(var(--u) * 1.05);
    color: var(--muted);
    text-align: center;
  }
  .hrs b {
    display: block;
    color: var(--fg);
    font-weight: 500;
    font-size: calc(var(--u) * 1.25);
  }
  .spark {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 45%;
    z-index: 1;
    pointer-events: none;
  }
  .ipma {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: calc(var(--u) * 0.6);
    align-self: flex-start;
    margin-top: calc(var(--u) * 0.6);
    padding: calc(var(--u) * 0.3) calc(var(--u) * 0.9);
    border-radius: 99px;
    font-size: calc(var(--u) * 1);
    font-weight: 600;
    --lv: 255, 184, 77;
    color: rgb(var(--lv));
    background: rgba(var(--lv), 0.12);
    border: 1px solid rgba(var(--lv), 0.3);
  }
  .ipma.orange,
  .warn.orange {
    --lv: 255, 138, 76;
  }
  .ipma.red,
  .warn.red {
    --lv: 255, 92, 92;
  }
  .ipma i {
    width: calc(var(--u) * 0.8);
    height: calc(var(--u) * 0.8);
    border-radius: 50%;
    background: rgb(var(--lv));
  }
  .light .ipma {
    color: #8a5a12;
  }
  .warn {
    --lv: 255, 184, 77;
    border-left: calc(var(--u) * 0.35) solid rgb(var(--lv));
    background: rgba(var(--lv), 0.08);
    border-radius: calc(var(--u) * 1);
    padding: calc(var(--u) * 1) calc(var(--u) * 1.2);
    font-size: calc(var(--u) * 1.1);
  }
  .warn b {
    display: block;
  }
  .warn span {
    color: var(--muted);
  }
  .warn p {
    margin: calc(var(--u) * 0.5) 0 0;
    line-height: 1.35;
  }
  .hint {
    color: var(--muted);
    font-size: calc(var(--u) * 1.05);
  }
  .go {
    position: relative;
    z-index: 2;
    margin-top: auto;
    font-size: calc(var(--u) * 1.05);
    color: var(--muted);
  }
  .w.on .go {
    color: var(--on-hero);
  }
  .cam {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  .w:has(.cam) .nm {
    color: #fff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }
  .w:has(.cam)::after {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 40%;
    background: linear-gradient(rgba(0, 0, 0, 0.45), transparent);
    z-index: 1;
  }
  .camlg {
    width: 100%;
    border-radius: calc(var(--u) * 1.4);
  }
  .di .bdg.alert {
    background: #ff8a5c;
    color: #2a0f04;
  }
  /* ---------- "Este cartão" in a sheet ---------- */
  .this {
    border-top: 1px solid var(--line);
    padding-top: calc(var(--u) * 1.2);
    margin-top: calc(var(--u) * 0.4);
    display: flex;
    flex-direction: column;
    gap: calc(var(--u) * 0.9);
  }
  .tchips {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--u) * 0.5);
  }
  .tchips button {
    display: flex;
    align-items: center;
    gap: calc(var(--u) * 0.5);
    padding: calc(var(--u) * 0.5) calc(var(--u) * 1);
    border-radius: 99px;
    background: var(--well);
    font-size: calc(var(--u) * 1.05);
  }
  .tchips button.on {
    background: var(--fg);
    color: var(--bg-ink, #17191c);
    font-weight: 600;
  }
  .light .tchips button.on,
  .bento .tchips button.on,
  .editorial .tchips button.on,
  .moldura .tchips button.on {
    color: #fff;
  }
  .auto {
    font-size: calc(var(--u) * 0.95);
    color: var(--muted);
  }
  .lnk {
    text-decoration: underline;
    color: var(--acc);
  }
  .fld {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(var(--u) * 1);
    font-size: calc(var(--u) * 1.1);
  }
  .fld input {
    flex: 1;
    max-width: 60%;
    font: inherit;
    color: inherit;
    background: var(--well);
    border: 1px solid var(--line);
    border-radius: calc(var(--u) * 0.8);
    padding: calc(var(--u) * 0.5) calc(var(--u) * 0.8);
  }
  .fld .sw {
    width: calc(var(--u) * 4);
    height: calc(var(--u) * 2.3);
    border-radius: 99px;
    background: var(--well);
    position: relative;
    flex: none;
  }
  .fld .sw::after {
    content: "";
    position: absolute;
    top: calc(var(--u) * 0.25);
    left: calc(var(--u) * 0.25);
    width: calc(var(--u) * 1.8);
    height: calc(var(--u) * 1.8);
    border-radius: 50%;
    background: var(--muted);
    transition: left 0.15s;
  }
  .fld .sw[aria-checked="true"] {
    background: #f2b53c;
  }
  .fld .sw[aria-checked="true"]::after {
    left: calc(var(--u) * 1.95);
    background: #fff;
  }

  /* ---------- ambient face ---------- */
  .amb {
    background: radial-gradient(70% 60% at 50% 40%, #171a1e 0%, #0b0c0e 70%, #060708 100%);
    color: #e9edf2;
    display: grid;
    place-items: center;
    cursor: pointer;
    animation: fade 0.6s;
  }
  .ambc {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(var(--u) * 1.2);
    transition: transform 2s ease;
    text-align: center;
  }
  .atime {
    font-weight: 200;
    font-size: calc(var(--u) * 17);
    letter-spacing: -0.05em;
    line-height: 0.9;
    font-variant-numeric: tabular-nums;
  }
  .adate {
    font-size: calc(var(--u) * 2);
    color: #8b939e;
  }
  .adate::first-letter {
    text-transform: uppercase;
  }
  .arow {
    display: flex;
    align-items: center;
    gap: calc(var(--u) * 1.6);
    margin-top: calc(var(--u) * 1.4);
  }
  .awx {
    display: flex;
    align-items: center;
    gap: calc(var(--u) * 0.8);
    font-size: calc(var(--u) * 1.6);
    color: #8b939e;
  }
  .awx .art {
    width: calc(var(--u) * 5);
    height: calc(var(--u) * 5);
  }
  .awx b {
    font-weight: 300;
    font-size: calc(var(--u) * 3.4);
    color: #e9edf2;
    letter-spacing: -0.04em;
  }
  .amb .ipma {
    margin: 0;
    font-size: calc(var(--u) * 1.2);
  }
  .astatus {
    font-size: calc(var(--u) * 1.5);
    color: #8b939e;
  }
  .astatus.att {
    color: #ff9e7a;
  }
  .ahint {
    position: absolute;
    bottom: calc(var(--u) * 3);
    left: 0;
    right: 0;
    text-align: center;
    font-size: calc(var(--u) * 1.05);
    color: #4f5661;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* ---------- edit mode ---------- */
  .pill.icon {
    padding: calc(var(--u) * 0.8);
    font-size: calc(var(--u) * 1.5);
  }
  .pill:disabled {
    opacity: 0.5;
  }
  .grid.edit .w {
    outline: 1px dashed color-mix(in srgb, var(--acc) 60%, transparent);
    outline-offset: -1px;
    touch-action: none;
    cursor: grab;
    animation: wiggle 0.5s ease-in-out infinite alternate;
  }
  .grid.edit .w > :not(.rmv):not(.handle) {
    pointer-events: none;
  }
  .grid.edit .w:nth-child(2n) {
    animation-delay: -0.25s;
  }
  .grid.edit .w.moving {
    animation: none;
    opacity: 0.55;
    transform: scale(1.04);
    cursor: grabbing;
    z-index: 3;
  }
  @keyframes wiggle {
    from {
      transform: rotate(-0.35deg);
    }
    to {
      transform: rotate(0.35deg);
    }
  }
  .rmv,
  .handle {
    position: absolute;
    z-index: 4;
    display: grid;
    place-items: center;
  }
  .rmv {
    left: calc(var(--u) * 0.7);
    top: calc(var(--u) * 0.7);
    width: calc(var(--u) * 2.6);
    height: calc(var(--u) * 2.6);
    border-radius: 50%;
    background: #ff5f57;
    color: #fff;
    font-size: calc(var(--u) * 1.6);
  }
  .grid.edit .w .nm {
    padding-left: calc(var(--u) * 2.6);
  }
  .handle {
    right: calc(var(--u) * 0.8);
    bottom: calc(var(--u) * 0.8);
    grid-auto-flow: column;
    gap: calc(var(--u) * 0.3);
    padding: calc(var(--u) * 0.45) calc(var(--u) * 0.8);
    border-radius: calc(var(--u) * 0.8);
    background: var(--acc);
    color: #04202e;
    font-size: calc(var(--u) * 1.3);
  }
  .handle b {
    font-size: calc(var(--u) * 0.95);
  }
  .editing .main {
    padding-bottom: calc(var(--u) * 20);
  }
  .picker {
    position: fixed;
    z-index: 4;
    right: calc(var(--u) * 1.6);
    bottom: calc(var(--u) * 1.6);
    left: calc(var(--u) * 1.6);
    border-radius: calc(var(--u) * 2.4);
    background: var(--sheet);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14), 0 calc(var(--u) * -2) calc(var(--u) * 4) calc(var(--u) * -2) rgba(0, 0, 0, 0.6);
    padding: calc(var(--u) * 1.4);
    display: flex;
    flex-direction: column;
    gap: calc(var(--u) * 1);
  }
  .dock-left .picker {
    left: calc(var(--u) * 10.4);
  }
  .dock-bottom .picker {
    bottom: calc(var(--u) * 10.4);
  }
  .phd {
    display: flex;
    justify-content: space-between;
    gap: calc(var(--u) * 1);
  }
  .prow {
    display: flex;
    gap: calc(var(--u) * 1);
    overflow-x: auto;
    scrollbar-width: none;
  }
  .pk {
    flex: none;
    width: calc(var(--u) * 14);
    height: calc(var(--u) * 7.4);
    border-radius: calc(var(--u) * 1.6);
    background: var(--card);
    box-shadow: var(--rim);
    padding: calc(var(--u) * 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    font-size: calc(var(--u) * 1.1);
  }
  .pk em {
    font-style: normal;
    font-size: calc(var(--u) * 0.9);
    color: var(--muted);
  }
  .spin {
    animation: spin 1.2s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* ---------- room view ---------- */
  .rtop {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: calc(var(--u) * 1.4);
    margin-bottom: calc(var(--u) * 1.2);
  }
  .rtop b {
    font-weight: 300;
    font-size: calc(var(--u) * 4.4);
    letter-spacing: -0.04em;
    line-height: 1;
  }
  .rtop span {
    font-size: calc(var(--u) * 1.25);
    color: var(--muted);
    margin-bottom: calc(var(--u) * 0.4);
  }
  .rtop .back {
    width: calc(var(--u) * 4.4);
    height: calc(var(--u) * 4.4);
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--card);
    box-shadow: var(--rim);
    font-size: calc(var(--u) * 2.4);
  }
  .rtop .act {
    margin-left: auto;
    display: flex;
    gap: calc(var(--u) * 0.6);
  }
  .pill {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--u) * 0.6);
    padding: calc(var(--u) * 0.8) calc(var(--u) * 1.5);
    border-radius: 99px;
    background: var(--card);
    box-shadow: var(--rim);
    font-size: calc(var(--u) * 1.15);
    font-weight: 500;
  }
  .pill.pri {
    background: var(--acc);
    color: #04202e;
    box-shadow: none;
  }
  .pill.warn {
    background: #ff8a5c;
    color: #2a0f04;
    box-shadow: none;
  }
  .cats {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--u) * 0.6);
    margin-bottom: calc(var(--u) * 1.2);
  }
  .cats button {
    padding: calc(var(--u) * 0.55) calc(var(--u) * 1.3);
    border-radius: 99px;
    font-size: calc(var(--u) * 1.1);
    color: var(--muted);
    box-shadow: inset 0 0 0 1px var(--line);
  }
  .cats button.on {
    background: var(--fg);
    color: var(--card-solid, #14171a);
    box-shadow: none;
    font-weight: 600;
  }
  .light .cats button.on {
    color: #fff;
  }
  .cats em {
    font-style: normal;
    opacity: 0.6;
    margin-left: calc(var(--u) * 0.4);
  }

  /* ---------- sheet ---------- */
  .scrim {
    position: absolute;
    inset: 0;
    background: rgba(10, 12, 14, 0.55);
    z-index: 4;
    animation: fade 0.2s;
  }
  .sheet {
    position: absolute;
    right: calc(var(--u) * 1.6);
    top: calc(var(--u) * 1.6);
    bottom: calc(var(--u) * 1.6);
    width: min(calc(var(--u) * 32), calc(100% - var(--u) * 3.2));
    border-radius: calc(var(--u) * 2.6);
    background: var(--sheet);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14), inset 0 0 0 1px rgba(255, 255, 255, 0.07), 0 calc(var(--u) * 3) calc(var(--u) * 6) calc(var(--u) * -2) rgba(0, 0, 0, 0.7);
    padding: calc(var(--u) * 1.8);
    display: flex;
    flex-direction: column;
    gap: calc(var(--u) * 1.2);
    z-index: 5;
    box-sizing: border-box;
    overflow-y: auto;
    animation: slide 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  @keyframes slide {
    from {
      transform: translateX(calc(var(--u) * 4));
      opacity: 0;
    }
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
  }
  .shd {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .x {
    width: calc(var(--u) * 3.4);
    height: calc(var(--u) * 3.4);
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--well);
    font-size: calc(var(--u) * 1.6);
  }
  .sheet h4 {
    margin: 0;
    font-weight: 400;
    font-size: calc(var(--u) * 2.4);
    letter-spacing: -0.03em;
  }
  .bigsl {
    position: relative;
    flex: none;
    height: calc(var(--u) * 13);
    border-radius: calc(var(--u) * 2);
    background: rgba(0, 0, 0, 0.35);
    box-shadow: inset 0 calc(var(--u) * 0.3) calc(var(--u) * 0.8) rgba(0, 0, 0, 0.5);
    overflow: hidden;
    touch-action: none;
    cursor: ew-resize;
  }
  .light .bigsl {
    background: rgba(20, 23, 26, 0.08);
    box-shadow: inset 0 calc(var(--u) * 0.3) calc(var(--u) * 0.8) rgba(0, 0, 0, 0.12);
  }
  .bigsl i {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .bigsl b {
    position: absolute;
    left: calc(var(--u) * 1.4);
    bottom: calc(var(--u) * 1);
    font-weight: 300;
    font-size: calc(var(--u) * 4);
    color: #2a1a04;
    letter-spacing: -0.04em;
    mix-blend-mode: normal;
  }
  .tbar {
    flex: none;
    height: calc(var(--u) * 3);
    border-radius: 99px;
    background: linear-gradient(90deg, #ffb35c, #fff3e0 50%, #cfe3ff);
    cursor: pointer;
  }
  .pre {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--u) * 0.7);
  }
  .pre button {
    width: calc(var(--u) * 3.6);
    height: calc(var(--u) * 3.6);
    border-radius: 50%;
    box-shadow: inset 0 0 0 calc(var(--u) * 0.2) rgba(255, 255, 255, 0.15);
  }
  .pre button.on {
    box-shadow: 0 0 0 calc(var(--u) * 0.25) var(--fg);
  }
  .bigtemp {
    font-weight: 300;
    font-size: calc(var(--u) * 7);
    letter-spacing: -0.05em;
    line-height: 1;
  }
  .bigtemp small {
    display: block;
    font-size: calc(var(--u) * 1.2);
    letter-spacing: 0;
    color: var(--muted);
    margin-top: calc(var(--u) * 0.6);
  }
  .foot {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--u) * 0.6);
  }
`;var Ji=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,x=(e,t,a,i)=>{for(var s=i>1?void 0:i?Qi(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&Ji(t,a,s),s};const ts=550,_t=10,Lt={heat:"Calor",cool:"Frio",heat_cool:"Auto",auto:"Auto",dry:"Seco",fan_only:"Ventilar",off:"Off"},de={heating:"a aquecer",cooling:"a arrefecer",idle:"em pausa",off:"desligado",drying:"a secar",fan:"a ventilar"},tt={"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",hail:"granizo",lightning:"trovoada","lightning-rainy":"trovoada e chuva",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve","snowy-rainy":"chuva e neve",sunny:"sol",windy:"vento","windy-variant":"vento",exceptional:"excecional"},he={cleaning:"a limpar",docked:"na base",returning:"a voltar à base",paused:"em pausa",idle:"parado",error:"erro"},es={open:"aberto",closed:"fechado",opening:"a abrir",closing:"a fechar"},At={yellow:"amarelo",orange:"laranja",red:"vermelho"},ue={yellow:1,orange:2,red:3},as=10*6e4,is=10*6e4,pe=[{id:"@clima",name:"Clima",icon:m.therm},{id:"@seguranca",name:"Segurança",icon:m.shield},{id:"@cenas",name:"Cenas",icon:m.spark}],ss=["#ffcf8a","#fff1d6","#ff8a5c","#ff6fae","#b49cff","#6cc8ff","#5be3a0"],w=e=>v`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`;let b=class extends Q{constructor(){super(...arguments),this.entities={},this.screenName="",this.canEdit=!1,this.ambient=!1,this.settingsButton=!1,this.cardSettings=!1,this.preview=!1,this.startView="",this.wallpanel=!1,this.editing=null,this.draft=null,this.moving=null,this.saving=!1,this.lastReorder=0,this.view="home",this.category="all",this.sheet=null,this.drag=null,this.now=new Date,this.hourly=[],this.warnings=[],this.history={},this.flash=null,this.historyAt={},this.historyWanted=new Set,this.ipmaAt=0,this.ipmaArea=null,this.forecastAt=0}connectedCallback(){super.connectedCallback(),this.clock=window.setInterval(()=>this.now=new Date,1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clock)}willUpdate(e){if(e.has("startView")&&this.startView&&(this.view=this.startView,this.category="all"),this.preview)return;e.has("home")&&this.view!=="home"&&!this.view.startsWith("@")&&!this.home.rooms.some(a=>a.id===this.view)&&(this.view="home");const t=this.home?.settings?.ipma_area??null;(t!==this.ipmaArea||t&&Date.now()-this.ipmaAt>is)&&(this.ipmaArea=t,this.ipmaAt=Date.now(),t&&this.conn?this.loadWarnings(t):this.warnings=[]),this.home?.weather&&Date.now()-this.forecastAt>30*6e4&&this.conn&&(this.forecastAt=Date.now(),this.loadForecast(this.home.weather))}async loadForecast(e){try{const t=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"hourly"},target:{entity_id:e},return_response:!0});this.hourly=(t.response?.[e]?.forecast??[]).slice(1,7).filter((a,i)=>i%2===0)}catch{this.hourly=[]}}updated(){if(this.preview)return;const e=Date.now(),t=[...this.historyWanted].filter(a=>e-(this.historyAt[a]??0)>as);this.historyWanted.clear(),t.length&&this.conn&&(t.forEach(a=>this.historyAt[a]=e),this.loadHistory(t))}async loadHistory(e){try{const t=await this.conn.sendMessagePromise({type:"history/history_during_period",start_time:new Date(Date.now()-864e5).toISOString(),entity_ids:e,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),a={...this.history};for(const i of e){const s=(t[i]??[]).map(o=>parseFloat(o.s)).filter(o=>!Number.isNaN(o)),r=Math.max(1,Math.ceil(s.length/48));a[i]=s.filter((o,n)=>n%r===0||n===s.length-1)}this.history=a}catch(t){console.warn("Pine3 Home: history",t)}}async loadWarnings(e){try{const t=await this.conn.sendMessagePromise({type:"pine3_home/ipma_warnings",area:e}),a=Date.now();this.warnings=t.warnings.filter(i=>!i.endTime||new Date(i.endTime).getTime()>a).sort((i,s)=>(ue[s.awarenessLevelID]??0)-(ue[i.awarenessLevelID]??0))}catch{}}call(e,t,a,i={}){Ci(this.conn,e,t,i,{entity_id:a}).catch(s=>console.warn("Pine3 Home:",s))}toggle(e){const t=k(e),a=this.entities[e];if(t==="lock")return this.call("lock",a?.state==="locked"?"unlock":"lock",e);if(t==="cover")return this.call("cover","toggle",e);if(t==="vacuum")return this.call("vacuum",a?.state==="cleaning"?"return_to_base":"start",e);if(t==="media_player")return this.call("media_player","media_play_pause",e);if(t==="scene"||t==="script")return this.call(t,"turn_on",e);this.call(t==="input_boolean"?"input_boolean":"homeassistant","toggle",e)}level(e){if(this.drag?.key===e.key)return this.drag.value;if(e.kind==="room-lights")return ji(e.entities,this.entities);const t=this.entities[e.entity];return e.kind==="light"?F(t):e.kind==="cover"?t?.attributes.current_position??(t?.state==="open"?100:0):null}setLevel(e,t){if(t=Math.round(t),e.kind==="room-lights"||e.kind==="light"){const a=e.kind==="light"?e.entity:e.entities;t<=0?this.call("light","turn_off",a):this.call("light","turn_on",a,{brightness_pct:t})}else e.kind==="cover"&&this.call("cover","set_cover_position",e.entity,{position:t})}slidable(e){if(e.kind==="room-lights")return!0;const t=this.entities[e.entity??""];return t?e.kind==="light"?(t.attributes.supported_color_modes??[]).some(a=>a!=="onoff"):e.kind==="cover"?(t.attributes.supported_features&4)===4:!1:!1}down(e,t){if(e.target.closest("button"))return;if(this.editing){this.press={key:t.key,x:e.clientX,y:e.clientY,rect:e.currentTarget.getBoundingClientRect(),dragging:!1,long:!1,timer:0};return}const a=e.currentTarget,i={key:t.key,x:e.clientX,y:e.clientY,rect:a.getBoundingClientRect(),dragging:!1,long:!1,timer:0};i.timer=window.setTimeout(()=>{i.long=!0,this.longPress(t)},ts),this.press=i}move(e,t){const a=this.press;if(!a||a.key!==t.key||a.long)return;if(this.editing)return this.moveInEdit(e,a);const i=e.clientX-a.x,s=e.clientY-a.y;if(!a.dragging){if(Math.abs(s)>_t&&Math.abs(s)>Math.abs(i))return this.cancel();if(Math.abs(i)<_t||!this.slidable(t))return;a.dragging=!0,clearTimeout(a.timer),e.currentTarget.setPointerCapture(e.pointerId)}const r=Math.max(0,Math.min(100,(e.clientX-a.rect.left)/a.rect.width*100));this.drag={key:t.key,value:Math.round(r)}}up(e,t){const a=this.press;if(!(!a||a.key!==t.key)){if(clearTimeout(a.timer),this.press=void 0,this.editing){this.moving=null;return}if(!a.long){if(a.dragging){const i=this.drag?.value??0;this.setLevel(t,i),window.setTimeout(()=>{this.drag?.key===t.key&&(this.drag=null)},1500);return}this.tap(t)}}}cancel(){this.press&&clearTimeout(this.press.timer),this.press=void 0,this.moving=null}reset(){this.stopEdit(),this.sheet=null,this.drag=null,this.view="home",this.category="all",this.main()?.scrollTo({top:0})}get busy(){return!!this.editing||!!this.press}main(){return this.renderRoot?.querySelector(".main")??null}renderGear(e="di gear"){return this.settingsButton?c`<button class=${e} aria-label="Definições" title="Definições"
      @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}>
      ${w(m.gear)}${e.includes("di")?c`<span class="lb">Definições</span>`:l}</button>`:l}arranged(e,t){const a=this.editing===e&&this.draft?this.draft:this.dashboard.layouts?.[e];return le(t,a,this.home)}startEdit(e,t){const a=this.dashboard.layouts?.[e];this.draft={items:le(t,a,this.home).map(i=>({key:i.key,size:i.size})),hidden:[...a?.hidden??[]]},this.editing=e,this.category="all",this.sheet=null}stopEdit(){this.editing=null,this.draft=null,this.moving=null}async saveLayout(e){const t=this.editing;if(t){this.saving=!0;try{const a=await this.conn.sendMessagePromise({type:"pine3_home/dashboards/layout",dashboard_id:this.dashboard.id,view:t,layout:e});this.dashboard={...this.dashboard,layouts:a.dashboard.layouts},this.stopEdit()}catch(a){console.warn("Pine3 Home: layout",a),alert("Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel.")}finally{this.saving=!1}}}moveInEdit(e,t){if(!t.dragging){if(Math.hypot(e.clientX-t.x,e.clientY-t.y)<_t)return;t.dragging=!0,this.moving=t.key,e.currentTarget.setPointerCapture(e.pointerId)}const a=this.renderRoot.elementsFromPoint(e.clientX,e.clientY).map(n=>n.closest?.(".w")).find(n=>n&&n.dataset.key&&n.dataset.key!==t.key);if(!a||!this.draft||Date.now()-this.lastReorder<180)return;const i=[...this.draft.items],s=i.findIndex(n=>n.key===t.key),r=i.findIndex(n=>n.key===a.dataset.key);if(s<0||r<0)return;const[o]=i.splice(s,1);i.splice(r,0,o),this.lastReorder=Date.now(),this.draft={...this.draft,items:i}}hideWidget(e){this.draft&&(this.draft={items:this.draft.items.filter(t=>t.key!==e),hidden:[...this.draft.hidden,e]})}resizeWidget(e){if(!this.draft)return;const t=Ne(e.kind),a=t[(t.indexOf(e.size)+1)%t.length];this.draft={...this.draft,items:this.draft.items.map(i=>i.key===e.key?{...i,size:a}:i)}}addWidget(e){this.draft&&(this.draft={items:[...this.draft.items,{key:e.key,size:e.size}],hidden:this.draft.hidden.filter(t=>t!==e.key)})}editControls(e,t){return this.editing===e?c`<button class="pill" @click=${()=>this.stopEdit()}>Cancelar</button>
        ${this.dashboard.layouts?.[e]?c`<button class="pill" ?disabled=${this.saving} @click=${()=>this.saveLayout(null)}>${w(m.restore)} Repor</button>`:l}
        <button class="pill pri" ?disabled=${this.saving} @click=${()=>this.saveLayout(this.draft)}>${w(m.check)} Concluído</button>`:this.canEdit&&!this.editing?c`<button class="pill icon" aria-label="Editar esta vista" title="Editar" @click=${()=>this.startEdit(e,t)}>${w(m.edit)}</button>`:l}renderPicker(e,t){if(this.editing!==e||!this.draft)return l;const a=Ki(t,this.draft,this.home);return c`<div class="picker">
      <div class="phd"><span class="k">Adicionar · toca para pôr no fim</span><span class="k">Arrasta os cartões para mudar a ordem</span></div>
      <div class="prow">${a.length?a.map(i=>c`<button class="pk" @click=${()=>this.addWidget(i)}><span>${i.name}</span><em>${i.room?.name??""}</em></button>`):c`<span class="k">Já está tudo nesta vista.</span>`}</div>
    </div>`}tap(e){switch(e.kind){case"room-lights":{const t=e.entities.some(a=>this.entities[a]?.state==="on");return this.call("light",t?"turn_off":"turn_on",e.entities)}case"climate":case"weather":case"sensor":case"binary":case"scenes":e.entity&&(this.sheet=e.entity);return;case"scene":this.call(k(e.entity),"turn_on",e.entity),this.flash=e.key,window.setTimeout(()=>{this.flash===e.key&&(this.flash=null)},1200);return;case"camera":this.sheet=e.entity;return;case"lock":this.entities[e.entity]?.state!=="locked"?this.call("lock","lock",e.entity):this.sheet=e.entity;return;default:e.entity&&this.toggle(e.entity)}}longPress(e){if(e.kind==="room-lights"&&e.room){this.openRoom(e.room.id);return}e.entity&&(this.sheet=e.entity)}openRoom(e){this.editing&&this.editing!==e&&this.stopEdit(),this.view=e,this.category="all",this.sheet=null}get dark(){return this.dashboard.theme==="claro"?!1:this.dashboard.theme==="auto"?this.entities["sun.sun"]?.state!=="above_horizon":!0}render(){if(!this.home)return l;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(a=>a.id===this.view),t={vd:!0,light:!this.dark,editing:!!this.editing,[`dock-${this.dashboard.dock}`]:!0};return c`<div class=${p(t)}>
      ${this.renderDock()}
      <main class="main">${e?this.renderRoom(e):this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):l}
    </div>`}renderAmbient(){const e=V(this.home,this.entities),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],s=this.now.getHours()*60+this.now.getMinutes(),r=(s%7-3)*.8,o=(s%5-2)*.8,n=[e.lightsOn?`${e.lightsOn} luz${e.lightsOn>1?"es":""} acesa${e.lightsOn>1?"s":""}`:null,e.alerts?e.alertText:null].filter(Boolean);return c`<div class="vd amb" role="button" aria-label="Tocar para acordar">
      <div class="ambc" style=${`transform:translate(calc(var(--u) * ${r}), calc(var(--u) * ${o}))`}>
        <div class="atime">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</div>
        <div class="adate">${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</div>
        <div class="arow">
          ${t?c`<span class="awx">${oe(t.state)}<b>${a!=null?`${Math.round(a)}°`:""}</b>${tt[t.state]??t.state}</span>`:l}
          ${i?c`<span class=${`ipma ${i.awarenessLevelID}`}><i></i>Aviso ${At[i.awarenessLevelID]??""} · ${i.awarenessTypeName.toLowerCase()}</span>`:l}
        </div>
        <div class=${p({astatus:!0,att:e.alerts>0})}>${n.length?n.join(" · "):"Tudo tranquilo em casa"}</div>
      </div>
      <span class="ahint">${this.wallpanel?"Aproxima-te ou toca para acordar":"Toca para acordar"}</span>
    </div>`}renderDock(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden));return c`<nav class="dock" aria-label="Vistas">
      <button class=${p({di:!0,on:this.view==="home"})} @click=${()=>this.openRoom("home")} aria-label="Casa">
        ${w(m.home)}<span class="lb">Casa</span>
      </button>
      <span class="sep"></span>
      <div class="rooms">
        ${e.map(t=>{const a=z(t).filter(i=>this.entities[i]?.state==="on").length;return c`<button class=${p({di:!0,rm:!0,on:this.view===t.id,lit:a>0})} @click=${()=>this.openRoom(t.id)} aria-label=${t.name}>
            ${a?c`<span class="glow"></span>`:l}${w(U(t.icon))}<span class="lb">${t.name}</span>
            ${a?c`<span class="bdg">${a}</span>`:l}
          </button>`})}
      </div>
      <span class="sep"></span>
      ${pe.filter(t=>this.viewWidgets(t.id).length).map(t=>{const a=t.id==="@seguranca"?V(this.home,this.entities).alerts:0;return c`<button class=${p({di:!0,on:this.view===t.id})} @click=${()=>this.openRoom(t.id)} aria-label=${t.name}>
          ${w(t.icon)}<span class="lb">${t.name}</span>${a?c`<span class="bdg alert">${a}</span>`:l}
        </button>`})}
      ${this.renderGear()}
    </nav>`}renderHeader(e,t,a=l){const i=V(this.home,this.entities),s=this.home.persons.map(r=>this.entities[r]).filter(r=>!!r);return c`<header class="hdr">
      <div class="t"><span>${t}</span><b>${e}</b></div>
      <div class="chips">
        ${this.editing?l:c`${i.temp?c`<span class="chip"><i style="background:#34c759;color:#06210f">${w(m.therm)}</i><span>Clima<small>${i.temp}</small></span></span>`:l}
        <span class="chip"><i style="background:#ffcf8a;color:#2a1a04">${w(m.bulb)}</i><span>Luzes<small>${i.lightsOn?`${i.lightsOn} acesa${i.lightsOn>1?"s":""}`:"apagadas"}</small></span></span>
        <span class="chip"><i style=${i.alerts?"background:#ff8a5c;color:#2a0f04":"background:#5be3a0;color:#06210f"}>${w(m.shield)}</i><span>Segurança<small>${i.alertText}</small></span></span>
        ${s.length?c`<div class="people">${s.map(r=>{const o=r.attributes.entity_picture,n=r.attributes.friendly_name??r.entity_id;return c`<span class="av" title=${n} style=${o?`background-image:url(${o})`:""}>${o?"":n[0]}${r.state==="home"?c`<i></i>`:l}</span>`})}</div>`:l}`}
        ${a}
      </div>
    </header>`}greeting(){const e=this.now.getHours();return`${e<6?"Boa noite":e<13?"Bom dia":e<20?"Boa tarde":"Boa noite"} · ${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}`}renderHome(){const e=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),t=Et(this.home,this.entities),a=this.arranged("home",t),i=this.editing==="home";return c`${i?this.renderHeader("A editar","Casa",this.editControls("home",t)):this.renderHeader(e,this.greeting(),this.editControls("home",t))}
      ${a.length||i?c`<div class=${p({grid:!0,edit:i})}>${a.map(s=>this.renderWidget(s))}</div>`:c`<p class="empty">Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.</p>`}
      ${this.renderPicker("home",t)}`}viewWidgets(e){return e==="@clima"?Fi(this.home,this.entities):e==="@seguranca"?qi(this.home,this.entities):e==="@cenas"?Gi(this.home,this.entities):[]}renderView(e){const t=pe.find(n=>n.id===e),a=this.viewWidgets(e),i=this.arranged(e,a),s=this.editing===e,r=V(this.home,this.entities),o=e==="@clima"?r.temp??"":e==="@seguranca"?r.alertText:`${i.length} cenas e rotinas`;return c`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${w(m.back)}</button>
        <b>${t.name}</b><span>${s?"a editar":o}</span>
        <div class="act">${this.editControls(e,a)}</div>
      </div>
      ${i.length||s?c`<div class=${p({grid:!0,edit:s})}>${i.map(n=>this.renderWidget(n))}</div>`:c`<p class="empty">Nada para mostrar aqui.</p>`}
      ${this.renderPicker(e,a)}`}renderRoom(e){const t=Zi(e,this.home.settings?.shown),a=this.arranged(e.id,t),i=this.editing===e.id,s=g=>g.length?a.filter(M=>g.includes(M.kind)).length:a.length,r=Wi.filter(g=>s(g.kinds)>0),o=r.find(g=>g.id===this.category)??r[0],n=!i&&o&&o.kinds.length?a.filter(g=>o.kinds.includes(g.kind)):a,d=z(e),u=e.temperature?this.entities[e.temperature]?.state:null,h=e.humidity?this.entities[e.humidity]?.state:null,f=[u&&u!=="unavailable"?`${A(parseFloat(u))}°`:null,h&&h!=="unavailable"?`${A(parseFloat(h),0)}%`:null,e.floor].filter(Boolean).join(" · ");return c`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${w(m.back)}</button>
        <b>${e.name}</b><span>${i?"a editar":f}</span>
        <div class="act">
          ${d.length&&!i?c`<button class="pill" @click=${()=>this.call("light","turn_on",d)}>${w(m.bulb)} Acender</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",d)}>Apagar</button>`:l}
          ${this.editControls(e.id,t)}
        </div>
      </div>
      ${r.length>2&&!i?c`<div class="cats">${r.map(g=>c`<button class=${p({on:g===o})} @click=${()=>this.category=g.id}>${g.name}<em>${s(g.kinds)}</em></button>`)}</div>`:l}
      <div class=${p({grid:!0,edit:i})}>${n.map(g=>this.renderWidget(g))}</div>
      ${this.renderPicker(e.id,t)}`}renderWidget(e){const t=e.entity?this.entities[e.entity]:void 0;if(e.entity&&e.kind!=="weather"&&!t)return l;const a=this.widgetBody(e,t),i={w:!0,[e.size]:!0,on:(a.on??!1)||this.flash===e.key,att:a.att??!1,off:!!e.entity&&Bi(t),dragging:this.drag?.key===e.key,moving:this.moving===e.key,[`k-${e.kind}`]:!0,idle:e.kind==="climate"&&t?.state==="off"},s=!!this.editing;return c`<div class=${p(i)} style=${a.style??""} data-key=${e.key}
        @pointerdown=${r=>this.down(r,e)} @pointermove=${r=>this.move(r,e)}
        @pointerup=${r=>this.up(r,e)} @pointercancel=${()=>this.cancel()} @contextmenu=${r=>r.preventDefault()}>
      ${a.fill!=null?c`<div class="fill" style=${yi({width:`${a.fill}%`,"--fc":a.color??"255,207,138"})}></div>`:l}
      ${a.art??l}
      <span class="nm">${e.entity&&this.home.settings?.names?.[e.entity]||e.name}${a.tag?c`<em>${a.tag}</em>`:l}</span>
      ${a.extra??l}
      <div class="hero" style=${a.heroStyle??""}>${a.hero}${a.small?c`<small>${a.small}</small>`:l}</div>
      ${s?l:a.ctl??l}
      ${s?c`<button class="rmv" aria-label=${`Esconder ${e.name}`} @click=${()=>this.hideWidget(e.key)}>${w(m.minus)}</button>
          <button class="handle" aria-label=${`Mudar o tamanho de ${e.name}`} @click=${()=>this.resizeWidget(e)}>${w(m.resize)}<b>${e.size.toUpperCase()}</b></button>`:l}
    </div>`}widgetBody(e,t){const a=this.level(e);switch(e.kind){case"room-lights":{const i=e.entities.filter(r=>this.entities[r]?.state==="on"),s=i.length?ct(this.entities[i[0]]):"#ffcf8a";return{hero:a?`${a}%`:"Off",small:i.length?i.map(r=>this.name(r,e.room)).slice(0,2).join(" e "):`${e.entities.length} luz${e.entities.length>1?"es":""}`,tag:e.entities.length>1?`${i.length}/${e.entities.length} luzes`:void 0,art:ne(this.typeOf(i[0]??e.entities[0]),a??0,s),fill:a||null,color:me(s),on:a>0}}case"light":{const i=ct(t);return{hero:a?`${a}%`:"Off",tag:e.sub&&this.view==="home"?e.sub:void 0,art:ne(this.typeOf(e.entity),a??0,i),fill:a||null,color:me(i),on:(a??0)>0,heroStyle:a?`color:${i}`:""}}case"cover":{const i=a??0;return{hero:`${i}%`,small:es[t.state]??t.state,art:Mi(i),fill:i,color:"170,200,230"}}case"climate":{const i=t.attributes.temperature,s=t.state,r=(t.attributes.hvac_modes??[]).filter(u=>["heat","cool","off","auto","heat_cool"].includes(u)).slice(0,3),o=s==="cool"?"#6cc8ff":s==="off"?"#5d646e":"#ff9f43",n=t.attributes.current_temperature,d=de[t.attributes.hvac_action??s]??Lt[s]??s;return{hero:s==="off"?"Off":i!=null?`${A(i)}°`:"—",small:[d,n!=null?`agora ${A(n)}°`:null].filter(Boolean).join(" · "),tag:e.sub,art:Vi(s==="off"?null:i??null,o),heroStyle:e.size==="l"?"font-size:calc(var(--u)*7)":"",extra:r.length>1?c`<div class="seg">${r.map(u=>c`<button class=${p({on:u===s})} @click=${()=>this.call("climate","set_hvac_mode",e.entity,{hvac_mode:u})}>${Lt[u]}</button>`)}</div>`:l,ctl:i!=null&&s!=="off"?c`<div class="ctl"><button aria-label="Baixar" @click=${()=>this.stepTemp(e.entity,-1)}>${w(m.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(e.entity,1)}>${w(m.plus)}</button></div>`:l}}case"weather":{const i=t?.state??"",s=t?.attributes.temperature,r=this.warnings[0];return{hero:s!=null?`${Math.round(s)}°`:"—",small:tt[i]??i,art:oe(i),extra:r?c`<span class=${`ipma ${r.awarenessLevelID}`}><i></i>Aviso ${At[r.awarenessLevelID]??""} · ${r.awarenessTypeName.toLowerCase()}${this.warnings.length>1?` +${this.warnings.length-1}`:""}</span>`:l,ctl:this.hourly.length?c`<div class="hrs">${this.hourly.map(o=>c`<span>${new Date(o.datetime).getHours()}h<b>${Math.round(o.temperature)}°</b>${o.precipitation_probability?`${o.precipitation_probability}%`:""}</span>`)}</div>`:l}}case"lock":{const i=t.state!=="locked";return{hero:i?t.state==="unlocked"?"Destrancada":t.state:"Trancada",small:i?"tocar para trancar":"toque longo para abrir",art:Hi(i),att:t.state==="unlocked",heroStyle:"font-size:calc(var(--u)*1.85)"}}case"media":{const i=t.state==="playing",s=t.attributes.media_title??(B(t)?"Ligado":"Desligado"),r=t.attributes.media_artist??t.attributes.app_name??"";return{hero:s,small:r,tag:e.sub,art:Si(t.attributes.entity_picture),on:i,heroStyle:"font-size:calc(var(--u)*2.4)",ctl:B(t)?c`<div class="ctl"><button class="pri" aria-label=${i?"Pausa":"Tocar"} @click=${()=>this.call("media_player","media_play_pause",e.entity)}>${w(i?m.pause:m.play)}</button>
                <button aria-label="Seguinte" @click=${()=>this.call("media_player","media_next_track",e.entity)}>${w(m.next)}</button></div>`:l}}case"vacuum":{const i=t.attributes.battery_level;return{hero:i!=null?`${i}%`:he[t.state]??t.state,small:he[t.state]??t.state,art:zi(t.state==="cleaning"),on:t.state==="cleaning"}}case"scenes":return{hero:"",extra:c`<div class="scn">${e.entities.map(i=>c`<button @click=${()=>this.call(k(i),"turn_on",i)}>${w(m.spark)}${this.name(i)}</button>`)}</div>`};case"fan":return{hero:B(t)?t.attributes.percentage!=null?`${t.attributes.percentage}%`:"On":"Off",art:Pi(B(t)),on:B(t)};case"switch":case"outlet":{const i=B(t);return{hero:i?"On":"Off",art:Ei(i),on:i}}case"binary":{const i=t.state==="on",s=t.attributes.device_class;return{hero:s&&["door","window","garage_door","opening"].includes(s)?i?"Aberta":"Fechada":s==="motion"||s==="occupancy"?i?"Movimento":"Calmo":i?"On":"Off",att:i&&!!s&&["door","window","garage_door","opening","moisture","smoke","gas"].includes(s),heroStyle:"font-size:calc(var(--u)*2.4)"}}case"sensor":{const i=t.attributes.unit_of_measurement??"",s=parseFloat(t.state),r=t.attributes.device_class;Number.isNaN(s)||this.historyWanted.add(e.entity);const o=this.history[e.entity],n=o&&o.length>1?`${A(Math.min(...o),0)}–${A(Math.max(...o),0)}`:void 0;return{hero:Number.isNaN(s)?t.state:`${A(s)}${i==="°C"?"°":i==="%"?"%":""}`,small:i&&i!=="°C"&&i!=="%"?i:e.sub,tag:n,art:Oi(r==="humidity"?"#3db8f5":r==="temperature"?"#ff9f43":"#5be3a0",o)}}case"clock":return{hero:this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),small:this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})};case"scene":return{hero:"",art:Ti(),extra:c`<span class="go">${this.flash===e.key?"Ativada":"Tocar para ativar"}</span>`};case"camera":{const i=t.attributes.entity_picture,s=Math.floor(this.now.getTime()/1e4);return{hero:"",tag:e.sub,art:i?c`<img class="cam" src=${`${i}${i.includes("?")?"&":"?"}t=${s}`} alt="" loading="lazy" />`:l}}}}name(e,t){const a=this.home.settings?.names?.[e];if(a)return a;for(const s of this.home.rooms){const r=s.devices.find(o=>o.id===e);if(r)return r.name}const i=this.entities[e]?.attributes.friendly_name??e.split(".")[1];return t&&i.toLowerCase().startsWith(t.name.toLowerCase()+" ")?i.slice(t.name.length+1):i}stepTemp(e,t){const a=this.entities[e],i=a?.attributes.target_temp_step??.5,s=a?.attributes.temperature??20,r=a?.attributes.min_temp??7,o=a?.attributes.max_temp??35;this.call("climate","set_temperature",e,{temperature:Math.max(r,Math.min(o,Math.round((s+t*i)*10)/10))})}renderSheet(e){const t=this.entities[e];if(!t)return l;const a=k(e),i=this.home.rooms.find(r=>r.devices.some(o=>o.id===e)),s=a==="light"?"luz":a==="cover"?"estore":a==="climate"?"clima":a==="lock"?"fechadura":a==="media_player"?"média":a==="weather"?"tempo":"";return c`<div class="scrim" @click=${()=>this.sheet=null}></div>
      <aside class="sheet" role="dialog" aria-label=${this.name(e,i)}>
        <div class="shd"><span class="k">${[i?.name,s].filter(Boolean).join(" · ")}</span>
          <button class="x" aria-label="Fechar" @click=${()=>this.sheet=null}>${w(m.close)}</button></div>
        <h4>${this.name(e,i)}</h4>
        ${this.sheetBody(e,t)}
        ${this.thisCard(e)}
      </aside>`}deviceOf(e){for(const t of this.home.rooms){const a=t.devices.find(i=>i.id===e);if(a)return a}}typeOf(e){const t=this.home.settings?.types?.[e];if(t&&J[t])return t;const a=this.deviceOf(e);return Pt(e,this.entities[e],{name:a?.name,model:a?.model,manufacturer:a?.manufacturer})}saveHouse(e){this.home={...this.home,settings:{...this.home.settings??{},...e}},this.conn.sendMessagePromise({type:"pine3_home/home/settings",...e}).catch(t=>console.warn("Pine3 Home: settings",t))}thisCard(e){if(!this.cardSettings||!this.deviceOf(e)&&!this.home.rooms.some(h=>h.entities?.some(f=>f.id===e)))return l;const t=this.home.settings??{},a=Te[k(e)]??[],i=this.typeOf(e),s=this.deviceOf(e),r=Pt(e,this.entities[e],{name:s?.name,model:s?.model,manufacturer:s?.manufacturer}),o=!!t.types?.[e],n=h=>{const f={...t.types??{}};h&&h!==r?f[e]=h:delete f[e],this.saveHouse({types:f})},d=h=>{const f={...t.names??{}},g=this.deviceOf(e)?.name;h&&h!==g?f[e]=h.slice(0,40):delete f[e],this.saveHouse({names:f})},u=(t.hidden??[]).includes(e);return c`<div class="this">
      <span class="k">Este cartão · vale para todos os estilos e painéis</span>
      ${a.length>1?c`<div class="tchips" role="group" aria-label="Tipo">${a.map(h=>c`<button class=${p({on:h===i})} aria-pressed=${h===i}
            @click=${()=>n(h)}>${w(J[h].icon)}${J[h].name}</button>`)}</div>
          <span class="auto">${o?c`Escolhido por ti. <button class="lnk" @click=${()=>n(null)}>Voltar ao automático (${J[r].name.toLowerCase()})</button>`:`Adivinhado pelo nome e pelo modelo: ${J[r].name.toLowerCase()}.`}</span>`:l}
      <label class="fld"><span>Nome</span><input .value=${this.name(e)} maxlength="40" @change=${h=>d(h.target.value.trim())} /></label>
      <div class="fld"><span>Esconder este cartão</span>
        <button class="sw" role="switch" aria-checked=${u} aria-label="Esconder este cartão"
          @click=${()=>{this.saveHouse({hidden:u?(t.hidden??[]).filter(h=>h!==e):[...t.hidden??[],e]}),u||(this.sheet=null)}}></button></div>
    </div>`}bigSlider(e,t,a,i,s){const r=this.drag?.key===e?this.drag.value:t,o=n=>{const d=n.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(n.clientX-d.left)/d.width*100)))};return c`<div class="bigsl" role="slider" aria-label=${i} aria-valuenow=${r} aria-valuemin="0" aria-valuemax="100"
      @pointerdown=${n=>{n.currentTarget.setPointerCapture(n.pointerId),this.drag={key:e,value:o(n)}}}
      @pointermove=${n=>{this.drag?.key===e&&n.buttons&&(this.drag={key:e,value:o(n)})}}
      @pointerup=${n=>{const d=o(n);s(d),this.drag={key:e,value:d},window.setTimeout(()=>{this.drag?.key===e&&(this.drag=null)},1500)}}>
      <i style=${`width:${r}%;background:${a}`}></i><b>${r}%</b></div>`}sheetBody(e,t){const a=k(e);if(a==="light"){const s=t.attributes.supported_color_modes??[],r=s.includes("color_temp"),o=s.some(h=>["hs","rgb","rgbw","rgbww","xy"].includes(h)),n=ct(t),d=t.attributes.min_color_temp_kelvin??2200,u=t.attributes.max_color_temp_kelvin??6500;return c`${s.some(h=>h!=="onoff")?this.bigSlider(`sheet-${e}`,F(t),`linear-gradient(90deg,${n},#fff3e0)`,"Brilho",h=>h?this.call("light","turn_on",e,{brightness_pct:h}):this.call("light","turn_off",e)):l}
        ${r?c`<span class="k">Branco</span><div class="tbar" @click=${h=>{const f=h.currentTarget.getBoundingClientRect(),g=(h.clientX-f.left)/f.width;this.call("light","turn_on",e,{color_temp_kelvin:Math.round(d+g*(u-d))})}}></div>`:l}
        ${o?c`<span class="k">Cores</span><div class="pre">${ss.map(h=>c`<button aria-label=${h} style=${`background:${h}`} class=${p({on:h===n})} @click=${()=>this.call("light","turn_on",e,{rgb_color:De(h)})}></button>`)}</div>`:l}
        <div class="foot"><button class="pill" @click=${()=>this.toggle(e)}>${w(m.power)} ${t.state==="on"?"Desligar":"Ligar"}</button></div>`}if(a==="cover"){const s=t.attributes.current_position??(t.state==="open"?100:0);return c`${t.attributes.supported_features&4?this.bigSlider(`sheet-${e}`,s,"linear-gradient(90deg,#a9b6c4,#dfe6ee)","Posição",r=>this.call("cover","set_cover_position",e,{position:r})):l}
        <div class="foot"><button class="pill" @click=${()=>this.call("cover","open_cover",e)}>Abrir</button><button class="pill" @click=${()=>this.call("cover","stop_cover",e)}>Parar</button><button class="pill" @click=${()=>this.call("cover","close_cover",e)}>Fechar</button></div>`}if(a==="climate"){const s=t.attributes.temperature,r=t.attributes.hvac_modes??[];return c`<div class="bigtemp">${s!=null?`${A(s)}°`:"—"}<small>${de[t.attributes.hvac_action??t.state]??""}${t.attributes.current_temperature!=null?` · agora ${A(t.attributes.current_temperature)}°`:""}</small></div>
        <div class="ctl big"><button aria-label="Baixar" @click=${()=>this.stepTemp(e,-1)}>${w(m.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(e,1)}>${w(m.plus)}</button></div>
        <span class="k">Modo</span><div class="seg wide">${r.map(o=>c`<button class=${p({on:o===t.state})} @click=${()=>this.call("climate","set_hvac_mode",e,{hvac_mode:o})}>${Lt[o]??o}</button>`)}</div>`}if(a==="lock"){const s=t.state==="locked";return c`<div class="bigtemp">${s?"Trancada":t.state==="unlocked"?"Destrancada":t.state}</div>
        <div class="foot">${s?c`<button class="pill warn" @click=${()=>{this.call("lock","unlock",e),this.sheet=null}}>${w(m.unlock)} Destrancar</button>`:c`<button class="pill pri" @click=${()=>this.call("lock","lock",e)}>${w(m.lock)} Trancar</button>`}</div>`}if(a==="media_player"){const s=Math.round((t.attributes.volume_level??0)*100);return c`<div class="bigtemp" style="font-size:calc(var(--u)*2.6)">${t.attributes.media_title??t.state}<small>${t.attributes.media_artist??""}</small></div>
        ${t.attributes.volume_level!=null?this.bigSlider(`vol-${e}`,s,"linear-gradient(90deg,#3db8f5,#9be0ff)","Volume",r=>this.call("media_player","volume_set",e,{volume_level:r/100})):l}
        <div class="foot"><button class="pill pri" @click=${()=>this.call("media_player","media_play_pause",e)}>${w(t.state==="playing"?m.pause:m.play)} ${t.state==="playing"?"Pausa":"Tocar"}</button>
          <button class="pill" @click=${()=>this.call("media_player","media_next_track",e)}>${w(m.next)}</button>
          <button class="pill" @click=${()=>this.toggle(e)}>${w(m.power)}</button></div>`}if(a==="camera"){const s=t.attributes.entity_picture;return s?c`<img class="camlg" src=${`${s}${s.includes("?")?"&":"?"}t=${Math.floor(this.now.getTime()/1e4)}`} alt=${this.name(e)} />`:c`<p class="k">Sem imagem</p>`}if(a==="weather"){const s=n=>new Date(n).toLocaleString("pt-PT",{weekday:"short",hour:"2-digit",minute:"2-digit"}),r=t.attributes.temperature,o=[t.attributes.humidity!=null?`${t.attributes.humidity}%`:null,t.attributes.wind_speed!=null?`vento ${A(t.attributes.wind_speed,0)} ${t.attributes.wind_speed_unit??""}`:null].filter(Boolean);return c`<div class="bigtemp">${r!=null?`${Math.round(r)}°`:"—"}<small>${[tt[t.state]??t.state,...o].join(" · ")}</small></div>
        <div class="hrs">${this.hourly.map(n=>c`<span>${new Date(n.datetime).getHours()}h<b>${Math.round(n.temperature)}°</b>${n.precipitation_probability?`${n.precipitation_probability}%`:""}</span>`)}</div>
        ${this.warnings.map(n=>c`<div class=${`warn ${n.awarenessLevelID}`}><b>Aviso ${At[n.awarenessLevelID]??""} · ${n.awarenessTypeName}</b>
          <span>${s(n.startTime)} → ${s(n.endTime)}</span>${n.text?c`<p>${n.text}</p>`:l}</div>`)}
        ${this.home.settings?.ipma_area?l:c`<p class="hint">Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.</p>`}`}const i=t.attributes.unit_of_measurement??"";return c`<div class="bigtemp">${t.state}${i?` ${i}`:""}</div>
      ${["switch","light","fan","input_boolean","vacuum"].includes(a)?c`<div class="foot"><button class="pill pri" @click=${()=>this.toggle(e)}>${w(m.power)} ${B(t)?"Desligar":"Ligar"}</button></div>`:l}`}};b.styles=q;x([L({attribute:!1})],b.prototype,"home",2);x([L({attribute:!1})],b.prototype,"entities",2);x([L({attribute:!1})],b.prototype,"dashboard",2);x([L({attribute:!1})],b.prototype,"conn",2);x([L()],b.prototype,"screenName",2);x([L({type:Boolean})],b.prototype,"canEdit",2);x([L({type:Boolean})],b.prototype,"ambient",2);x([L({type:Boolean})],b.prototype,"settingsButton",2);x([L({type:Boolean})],b.prototype,"cardSettings",2);x([L({type:Boolean})],b.prototype,"preview",2);x([L()],b.prototype,"startView",2);x([L({type:Boolean})],b.prototype,"wallpanel",2);x([y()],b.prototype,"editing",2);x([y()],b.prototype,"draft",2);x([y()],b.prototype,"moving",2);x([y()],b.prototype,"saving",2);x([y()],b.prototype,"view",2);x([y()],b.prototype,"category",2);x([y()],b.prototype,"sheet",2);x([y()],b.prototype,"drag",2);x([y()],b.prototype,"now",2);x([y()],b.prototype,"hourly",2);x([y()],b.prototype,"warnings",2);x([y()],b.prototype,"history",2);x([y()],b.prototype,"flash",2);b=x([D("pine3-vidro")],b);function De(e){const t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function me(e){if(e.startsWith("#"))return De(e).join(",");const t=e.match(/\d+/g);return t?t.slice(0,3).join(","):"255,207,138"}var rs=Object.getOwnPropertyDescriptor,os=(e,t,a,i)=>{for(var s=i>1?void 0:i?rs(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=o(s)||s);return s};const fe=e=>v`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,ns=[{id:"home",name:"Casa",color:"#ffd166",icon:m.home},{id:"@divisoes",name:"Divisões",color:"#d9f2e3",icon:m.room},{id:"@clima",name:"Clima",color:"#ffb08a",icon:m.therm},{id:"@seguranca",name:"Segurança",color:"#bfe0ff",icon:m.shield},{id:"@cenas",name:"Cenas",color:"#ffd0c2",icon:m.spark}],ge=["#ffd166","#d9f2e3","#c9b8ff","#ffd0c2","#bfe0ff","#ffb08a","#e9f5a8"],be={key:"clock",kind:"clock",size:"l",name:""};let Ot=class extends b{render(){if(!this.home)return l;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(a=>a.id===this.view),t={vd:!0,bento:!0,editing:!!this.editing};return c`<div class=${p(t)}>
      ${this.renderPills()}
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderRooms():this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):l}
    </div>`}renderPills(){const e=this.home.rooms.some(i=>i.id===this.view),t=V(this.home,this.entities).alerts,a=ns.filter(i=>i.id==="home"||i.id==="@divisoes"||this.viewWidgets(i.id).length);return c`<nav class="bnav" aria-label="Vistas">
      ${a.map(i=>{const s=this.view===i.id||i.id==="@divisoes"&&e;return c`<button class=${p({on:s})} style=${`--c:${i.color}`} @click=${()=>this.openRoom(i.id)}>
          ${fe(i.icon)}${i.name}${i.id==="@seguranca"&&t?c`<span class="bb">${t}</span>`:l}
        </button>`})}
      ${this.view==="home"?c`<span class="btools">${this.editControls("home",[be,...Et(this.home,this.entities)])}</span>`:l}
      ${this.renderGear("bgear")}
      <span class="clk">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</span>
    </nav>`}renderHome(){const e=[be,...Et(this.home,this.entities)],t=this.arranged("home",e),a=this.editing==="home";return c`<div class=${p({grid:!0,edit:a})}>${t.map(i=>this.renderWidget(i))}</div>
      ${this.renderPicker("home",e)}`}renderRooms(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden));return c`<div class="grid">${e.map((t,a)=>{const i=z(t),s=i.filter(o=>this.entities[o]?.state==="on").length,r=t.temperature?parseFloat(this.entities[t.temperature]?.state??""):NaN;return c`<button class=${p({w:!0,s:!0,room:!0,dim:!s})} style=${`--rc:${ge[a%ge.length]}`} @click=${()=>this.openRoom(t.id)}>
        <span class="nm">${fe(U(t.icon))}${Number.isNaN(r)?l:c`<em>${A(r)}°</em>`}</span>
        <div class="hero">${t.name}<small>${at(i.length,s,t.devices.length)}</small></div>
      </button>`})}</div>`}};Ot.styles=[q,N`
    .vd.bento {
      --card: #fff;
      --rim: 0 1px 0 rgba(26, 22, 18, 0.05);
      --muted: rgba(26, 22, 18, 0.6);
      --name: #1a1612;
      --acc: #ff7a50;
      --warm: #ffd166;
      --well: rgba(26, 22, 18, 0.08);
      --line: rgba(26, 22, 18, 0.12);
      --sheet: #fff;
      --on-card: #ffd166;
      --on-hero: #1a1612;
      --fg: #1a1612;
      background: #efe9df;
      color: #1a1612;
    }
    /* navigation: coloured pills, the active one black */
    .bnav {
      position: absolute;
      z-index: 3;
      left: calc(var(--u) * 2);
      right: calc(var(--u) * 2);
      top: calc(var(--u) * 1.6);
      height: calc(var(--u) * 4.4);
      display: flex;
      gap: calc(var(--u) * 0.6);
      align-items: center;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .bnav::-webkit-scrollbar {
      display: none;
    }
    .bnav button {
      flex: none;
      position: relative;
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 0.6);
      height: calc(var(--u) * 3.8);
      padding: 0 calc(var(--u) * 1.5);
      border-radius: 99px;
      font-weight: 700;
      font-size: calc(var(--u) * 1.3);
      background: var(--c);
      color: #1a1612;
    }
    .bnav button .ic {
      font-size: calc(var(--u) * 1.6);
    }
    .bnav button.on {
      background: #1a1612;
      color: #fff;
    }
    .bnav .bb {
      min-width: calc(var(--u) * 1.8);
      height: calc(var(--u) * 1.8);
      border-radius: 99px;
      background: #ff7a50;
      color: #2a0f04;
      display: grid;
      place-items: center;
      font-size: calc(var(--u) * 1);
      padding: 0 calc(var(--u) * 0.4);
      box-sizing: border-box;
    }
    .bnav .clk {
      margin-left: auto;
      flex: none;
      font-weight: 800;
      font-size: calc(var(--u) * 2);
      letter-spacing: -0.03em;
      font-variant-numeric: tabular-nums;
      padding-left: calc(var(--u) * 1);
    }
    .bento .main {
      top: calc(var(--u) * 7.2);
      left: calc(var(--u) * 2);
      right: calc(var(--u) * 2);
    }
    .bento .picker {
      left: calc(var(--u) * 2);
    }
    .bnav .btools {
      margin-left: auto;
      display: flex;
      gap: calc(var(--u) * 0.6);
      flex: none;
    }
    .bnav .bgear {
      margin-left: auto;
      flex: none;
      width: calc(var(--u) * 3.8);
      padding: 0;
      justify-content: center;
      background: #fff;
      font-size: calc(var(--u) * 1.8);
    }
    .bnav .btools + .bgear {
      margin-left: 0;
    }
    .bnav .bgear + .clk {
      margin-left: 0;
    }
    .bnav .btools + .clk {
      margin-left: 0;
    }
    .bnav .btools .pill {
      height: calc(var(--u) * 3.8);
      padding-top: 0;
      padding-bottom: 0;
      font-weight: 700;
      background: #fff;
      color: #1a1612;
    }
    .bnav .btools .pill.icon {
      width: calc(var(--u) * 3.8);
      justify-content: center;
    }
    .bnav .btools .pill.pri {
      background: #1a1612;
      color: #fff;
    }
    .bento .pk {
      background: #efe9df;
      box-shadow: none;
    }
    .bento .w .hero {
      color: inherit !important;
    }
    .bento .rtop .back,
    .bento .pill {
      box-shadow: none;
    }
    .bento .pill.pri {
      background: #1a1612;
      color: #fff;
    }

    /* blocks: flat colour, big heavy numbers, no illustrations */
    .bento .w {
      border-radius: calc(var(--u) * 2.4);
      padding: calc(var(--u) * 1.6);
      box-shadow: var(--rim);
    }
    .bento .w .art {
      display: none;
    }
    .bento .w .nm {
      font-weight: 700;
      font-size: calc(var(--u) * 1.3);
    }
    .bento .w .hero {
      font-weight: 800;
      letter-spacing: -0.06em;
      font-size: calc(var(--u) * 4.4);
    }
    .bento .w .hero small {
      font-weight: 600;
      letter-spacing: 0;
      color: inherit;
      opacity: 0.65;
    }
    .bento .w.l .hero,
    .bento .w.xl .hero {
      font-size: calc(var(--u) * 8);
      line-height: 0.85;
    }
    .bento .w .fill {
      background: rgba(26, 22, 18, 0.08);
      border-right: 2px solid rgba(26, 22, 18, 0.25);
    }
    .bento .w.on .hero {
      color: inherit;
    }
    .bento .k-room-lights.on,
    .bento .k-light.on {
      background: #ffd166;
    }
    .bento .k-room-lights:not(.on),
    .bento .k-light:not(.on) {
      background: #3a342c;
      color: #efe9df;
    }
    .bento .k-room-lights:not(.on) .nm,
    .bento .k-light:not(.on) .nm {
      color: #efe9df;
    }
    .bento .k-clock {
      background: #1a1612;
      color: #f6efe4;
      cursor: default;
    }
    .bento .k-clock .hero {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      font-variant-numeric: tabular-nums;
    }
    .bento .k-clock .hero small::first-letter {
      text-transform: uppercase;
    }
    .bento .k-climate {
      background: #ff7a50;
      color: #2a0f04;
    }
    .bento .k-climate.idle {
      background: #d9d2c6;
      color: #4a443c;
    }
    .bento .k-climate .nm,
    .bento .k-climate .nm em {
      color: inherit;
    }
    .bento .k-weather {
      background: linear-gradient(135deg, #8fc5ff, #5a8fe0);
      color: #fff;
    }
    .bento .k-weather .nm,
    .bento .k-weather .hrs b {
      color: #fff;
    }
    .bento .k-weather .hrs {
      color: rgba(255, 255, 255, 0.8);
    }
    .bento .k-weather .ipma {
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.35);
    }
    .bento .k-cover {
      background: #d9f2e3;
    }
    .bento .k-media {
      background: #c9b8ff;
    }
    .bento .k-media .hero {
      font-size: calc(var(--u) * 2.6) !important;
    }
    .bento .k-lock {
      background: #bfe0ff;
    }
    .bento .w.att {
      background: #ffb08a;
      box-shadow: none;
    }
    .bento .w.att .hero {
      color: #2a0f04;
    }
    .bento .k-scenes,
    .bento .k-scene {
      background: #ffd0c2;
    }
    .bento .k-scene.on {
      background: #1a1612;
      color: #ffd0c2;
    }
    .bento .k-scene.on .nm,
    .bento .k-scene.on .go {
      color: #ffd0c2;
    }
    .bento .k-fan,
    .bento .k-switch,
    .bento .k-outlet {
      background: #fff;
    }
    .bento .k-fan.on,
    .bento .k-switch.on,
    .bento .k-outlet.on {
      background: #e9f5a8;
    }
    .bento .seg {
      background: rgba(26, 22, 18, 0.1);
    }
    .bento .seg button {
      color: inherit;
      font-weight: 600;
    }
    .bento .seg button.on {
      background: #1a1612;
      color: #ff7a50;
    }
    .bento .ctl button {
      background: rgba(26, 22, 18, 0.12);
      box-shadow: none;
    }
    .bento .ctl button.pri {
      background: #1a1612;
      color: #fff;
    }
    .bento .scn button {
      background: rgba(26, 22, 18, 0.1);
      box-shadow: none;
      font-weight: 600;
    }
    .bento .cats button.on {
      background: #1a1612;
      color: #fff;
    }
    /* Divisões */
    .bento .w.room {
      background: var(--rc);
      text-align: left;
      color: #1a1612;
    }
    .bento .w.room.dim {
      background: #fff;
    }
    .bento .w.room .nm {
      font-size: calc(var(--u) * 2.2);
      align-items: center;
    }
    .bento .w.room .nm em {
      font-size: calc(var(--u) * 1.3);
      font-weight: 700;
      color: #1a1612;
    }
    .bento .w.room .hero {
      font-size: calc(var(--u) * 2.6);
      letter-spacing: -0.04em;
      white-space: normal;
    }
    /* the sheet: white paper */
    .bento .sheet {
      box-shadow: 0 calc(var(--u) * 3) calc(var(--u) * 6) calc(var(--u) * -2) rgba(26, 22, 18, 0.35);
    }
    .bento .bigsl {
      background: #efe9df;
      box-shadow: none;
    }
    .bento .scrim {
      background: rgba(26, 22, 18, 0.35);
    }
  `];Ot=os([D("pine3-bento")],Ot);var cs=Object.getOwnPropertyDescriptor,ls=(e,t,a,i)=>{for(var s=i>1?void 0:i?cs(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=o(s)||s);return s};const Y=e=>v`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,ve={home:"Casa","@divisoes":"Divisões","@clima":"Clima","@seguranca":"Segurança","@cenas":"Cenas"},ds=70,hs=v`<svg viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 22 Q18 8 36 18 T70 14 T100 18 V46 H0Z" fill="#3c3552" opacity=".85"/>
  <path d="M0 30 Q22 18 46 28 T100 26 V46 H0Z" fill="#252a40"/>
  <path d="M0 38 Q30 30 60 36 T100 34 V46 H0Z" fill="#171b2a"/></svg>`;let Tt=class extends b{get order(){return["home","@divisoes",...["@clima","@seguranca","@cenas"].filter(e=>this.viewWidgets(e).length)]}get current(){return this.home.rooms.some(e=>e.id===this.view)?"@divisoes":this.view}step(e){const t=this.order,a=Math.max(0,t.indexOf(this.current));this.openRoom(t[(a+e+t.length)%t.length])}swipeDown(e){const t=e.target;this.editing||this.sheet||t.closest(".w, button, .sheet, .picker, .bigsl")||(this.swipe={x:e.clientX,y:e.clientY,id:e.pointerId})}swipeUp(e){const t=this.swipe;if(this.swipe=void 0,!t||t.id!==e.pointerId)return;const a=e.clientX-t.x;Math.abs(a)>ds&&Math.abs(a)>Math.abs(e.clientY-t.y)*1.5&&this.step(a<0?1:-1)}render(){if(!this.home)return l;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(o=>o.id===this.view),t=V(this.home,this.entities).lightsOn>0,a=this.view==="home",i={vd:!0,moldura:!0,dim:!t,editing:!!this.editing},s=this.order,r=this.current;return c`<div class=${p(i)} @pointerdown=${o=>this.swipeDown(o)} @pointerup=${o=>this.swipeUp(o)}
        @pointercancel=${()=>this.swipe=void 0}>
      <div class="hills">${hs}</div>
      ${a?this.renderFrame():c`<div class="panel"><main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderRoomList():this.renderView(this.view)}</main></div>`}
      <div class="pager">
        <b>${e?e.name:ve[r]??""}</b>
        <div class="dots">${s.map(o=>c`<button class=${p({on:o===r})} aria-label=${ve[o]} @click=${()=>this.openRoom(o)}></button>`)}</div>
        ${this.renderGear("mgear")}
      </div>
      ${this.editing?l:c`<button class="edge l" aria-label="Vista anterior" @click=${()=>this.step(-1)}>${Y(m.back)}</button>
          <button class="edge r" aria-label="Vista seguinte" @click=${()=>this.step(1)}>${Y(m.back)}</button>`}
      ${a?c`<span class="hint">desliza para o lado para mudar de vista</span>`:l}
      ${this.sheet?this.renderSheet(this.sheet):l}
    </div>`}renderFrame(){const e=V(this.home,this.entities),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],s=this.home.rooms.filter(h=>!h.hidden&&z(h).length),r=this.home.rooms.flatMap(h=>h.devices).find(h=>!h.hidden&&k(h.id)==="climate"),o=this.home.rooms.flatMap(h=>h.devices).find(h=>!h.hidden&&k(h.id)==="lock"),n=r?this.entities[r.id]:void 0,d=o?this.entities[o.id]:void 0,u=[e.lightsOn?`${e.lightsOn} luz${e.lightsOn>1?"es":""} acesa${e.lightsOn>1?"s":""}`:"luzes apagadas",e.alerts?e.alertText:null].filter(Boolean);return c`<div class="tl">
        <b>${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</span>
      </div>
      <div class="tr">
        ${t?c`<b>${a!=null?`${Math.round(a)}°`:""}</b>${this.weatherWord(t.state)}<br />`:l}
        ${u.join(" · ")}
        ${i?c`<br /><span class=${`ipma ${i.awarenessLevelID}`}><i></i>Aviso ${{yellow:"amarelo",orange:"laranja",red:"vermelho"}[i.awarenessLevelID]??""} · ${i.awarenessTypeName.toLowerCase()}</span>`:l}
      </div>
      <div class="strip">
        ${s.map(h=>{const f=z(h).filter(g=>this.entities[g]?.state==="on").length;return c`<button class=${p({q:!0,on:f>0})} @click=${()=>this.openRoom(h.id)}>
            <i>${Y(U(h.icon))}</i><span>${h.name}<small>${f?`${f} luz${f>1?"es":""}`:"apagada"}</small></span>
          </button>`})}
        ${r&&n?c`<button class=${p({q:!0,on:n.state!=="off"})} @click=${()=>this.openRoom("@clima")}>
              <i>${Y(m.therm)}</i><span>${n.state==="off"?"Off":`${A(n.attributes.temperature??0)}°`}<small>clima</small></span>
            </button>`:l}
        ${o&&d?c`<button class=${p({q:!0,alert:d.state==="unlocked"})}
                @click=${()=>d.state==="locked"?this.sheet=o.id:this.call("lock","lock",o.id)}>
              <i>${Y(d.state==="locked"?m.lock:m.unlock)}</i><span>${o.name}<small>${d.state==="locked"?"trancada":"destrancada · tocar"}</small></span>
            </button>`:l}
      </div>`}weatherWord(e){return{"clear-night":"Céu limpo",cloudy:"Nublado",fog:"Nevoeiro",lightning:"Trovoada","lightning-rainy":"Trovoada e chuva",partlycloudy:"Pouco nublado",pouring:"Chuva forte",rainy:"Chuva",snowy:"Neve",sunny:"Sol",windy:"Vento"}[e]??e}renderRoomList(){const e=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden)),t=V(this.home,this.entities).lightsOn;return c`<div class="rtop"><b>Divisões</b><span>${t?`${t} luz${t>1?"es":""} acesa${t>1?"s":""}`:"tudo apagado"}</span></div>
      <div class="grid">${e.map(a=>{const i=z(a),s=i.filter(o=>this.entities[o]?.state==="on").length,r=a.temperature?parseFloat(this.entities[a.temperature]?.state??""):NaN;return c`<button class=${p({w:!0,s:!0,rc:!0,on:s>0})} @click=${()=>this.openRoom(a.id)}>
          <span class="nm">${a.name}${Number.isNaN(r)?l:c`<em>${A(r)}°</em>`}</span>
          <div class="hero">${Y(U(a.icon))}<small>${at(i.length,s,a.devices.length)}</small></div>
        </button>`})}</div>`}};Tt.styles=[q,N`
    .vd.moldura {
      --card: linear-gradient(180deg, #ffffff, #f8f6f2);
      --rim: inset 0 1px 0 #fff, inset 0 0 0 1px rgba(29, 31, 43, 0.06), 0 calc(var(--u) * 1) calc(var(--u) * 2) calc(var(--u) * -1.4) rgba(30, 30, 50, 0.25);
      --muted: #7a7468;
      --name: #3b3a42;
      --acc: #e8892f;
      --warm: #ffcf85;
      --well: rgba(29, 31, 43, 0.06);
      --line: rgba(29, 31, 43, 0.1);
      --sheet: linear-gradient(180deg, #fffdf9, #f4f0ea);
      --on-card: linear-gradient(180deg, #fff6e6, #ffecd0);
      --on-hero: #8a5a12;
      --fg: #1d1f2b;
      color: #fff;
      background: radial-gradient(60% 40% at 72% 30%, rgba(255, 214, 150, 0.75), transparent 70%),
        linear-gradient(180deg, #f2b27a 0%, #e48a6a 32%, #7c5a8c 58%, #2f3552 76%, #1a1f30 100%);
      transition: background 1.2s;
    }
    .vd.moldura.dim {
      background: radial-gradient(60% 40% at 72% 30%, rgba(255, 214, 150, 0.35), transparent 70%),
        linear-gradient(180deg, #a9765a 0%, #8f5f55 32%, #4d3a5c 58%, #1f2438 76%, #11141f 100%);
    }
    .hills {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 46%;
      pointer-events: none;
    }
    .hills svg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .tl {
      position: absolute;
      left: calc(var(--u) * 3.4);
      top: calc(var(--u) * 3);
      text-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 2) rgba(0, 0, 0, 0.25);
    }
    .tl b {
      display: block;
      font-weight: 200;
      font-size: calc(var(--u) * 11);
      line-height: 0.85;
      letter-spacing: -0.06em;
      font-variant-numeric: tabular-nums;
    }
    .tl span {
      display: block;
      margin-top: calc(var(--u) * 0.8);
      font-size: calc(var(--u) * 1.7);
      opacity: 0.92;
    }
    .tl span::first-letter {
      text-transform: uppercase;
    }
    .tr {
      position: absolute;
      left: calc(var(--u) * 3.6);
      top: calc(var(--u) * 18);
      font-size: calc(var(--u) * 1.5);
      line-height: 1.5;
      text-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 1.6) rgba(0, 0, 0, 0.25);
    }
    .tr b {
      font-weight: 300;
      font-size: calc(var(--u) * 3.6);
      display: block;
      line-height: 1;
    }
    .tr .ipma {
      color: #fff;
      background: rgba(20, 22, 34, 0.35);
      border-color: rgba(255, 255, 255, 0.3);
      text-shadow: none;
    }
    .strip {
      position: absolute;
      left: calc(var(--u) * 3);
      right: calc(var(--u) * 3);
      bottom: calc(var(--u) * 4.4);
      display: flex;
      gap: calc(var(--u) * 0.7);
      padding: calc(var(--u) * 0.8);
      border-radius: 99px;
      background: rgba(20, 22, 34, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.18);
      overflow-x: auto;
      scrollbar-width: none;
      width: fit-content;
      max-width: calc(100% - var(--u) * 6);
      box-sizing: border-box;
    }
    .strip::-webkit-scrollbar {
      display: none;
    }
    .q {
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 0.7);
      padding: calc(var(--u) * 0.5) calc(var(--u) * 1.2) calc(var(--u) * 0.5) calc(var(--u) * 0.5);
      border-radius: 99px;
      background: rgba(255, 255, 255, 0.1);
      font-size: calc(var(--u) * 1.2);
      font-weight: 500;
      white-space: nowrap;
      line-height: 1.2;
      flex: none;
      text-align: left;
    }
    .q i {
      width: calc(var(--u) * 2.8);
      height: calc(var(--u) * 2.8);
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: rgba(255, 255, 255, 0.18);
      font-size: calc(var(--u) * 1.4);
    }
    .q.on i {
      background: #ffcf85;
      color: #1d1f2b;
    }
    .q.alert i {
      background: #ff7a50;
      color: #2a0f04;
    }
    .q small {
      display: block;
      font-size: calc(var(--u) * 1);
      opacity: 0.7;
      font-weight: 400;
    }
    .pager {
      position: absolute;
      right: calc(var(--u) * 3);
      top: calc(var(--u) * 2.4);
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: calc(var(--u) * 0.7);
      text-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 1.4) rgba(0, 0, 0, 0.3);
    }
    .pager b {
      font-weight: 300;
      font-size: calc(var(--u) * 2.2);
      letter-spacing: -0.02em;
    }
    .mgear {
      margin-top: calc(var(--u) * 0.4);
      font-size: calc(var(--u) * 2);
      color: rgba(255, 255, 255, 0.85);
    }
    .dots {
      display: flex;
      gap: calc(var(--u) * 0.6);
    }
    .dots button {
      width: calc(var(--u) * 0.9);
      height: calc(var(--u) * 0.9);
      border-radius: 99px;
      background: rgba(255, 255, 255, 0.45);
      transition: width 0.25s;
    }
    .dots button.on {
      background: #fff;
      width: calc(var(--u) * 2.4);
    }
    .edge {
      position: absolute;
      top: 50%;
      z-index: 3;
      width: calc(var(--u) * 3.4);
      height: calc(var(--u) * 8);
      margin-top: calc(var(--u) * -4);
      display: grid;
      place-items: center;
      color: rgba(255, 255, 255, 0.75);
      font-size: calc(var(--u) * 2.4);
    }
    .edge.l {
      left: calc(var(--u) * 0.3);
    }
    .edge.r {
      right: calc(var(--u) * 0.3);
      transform: scaleX(-1);
    }
    .hint {
      position: absolute;
      left: 50%;
      bottom: calc(var(--u) * 1.4);
      transform: translateX(-50%);
      font-size: calc(var(--u) * 1.05);
      color: rgba(255, 255, 255, 0.7);
      white-space: nowrap;
    }
    /* the light panel over the picture */
    .panel {
      position: absolute;
      left: calc(var(--u) * 5);
      right: calc(var(--u) * 5);
      top: calc(var(--u) * 8.4);
      bottom: calc(var(--u) * 3.4);
      border-radius: calc(var(--u) * 2.6);
      background: rgba(250, 246, 240, 0.94);
      color: var(--fg);
      box-shadow: 0 calc(var(--u) * 2) calc(var(--u) * 5) calc(var(--u) * -2) rgba(0, 0, 0, 0.4);
      overflow: hidden;
      animation: fade 0.3s;
    }
    .moldura .main {
      inset: 0;
      padding: calc(var(--u) * 2);
    }
    .moldura .picker {
      left: calc(var(--u) * 5);
      right: calc(var(--u) * 5);
    }
    .moldura .w.rc {
      text-align: left;
    }
    .moldura .w.rc .hero {
      font-size: calc(var(--u) * 2.4);
      color: var(--muted);
    }
    .moldura .w.rc.on .hero {
      color: #c77a1c;
    }
    .moldura .w.rc .nm em {
      color: var(--fg);
      font-weight: 600;
    }
    .moldura .seg {
      background: rgba(29, 31, 43, 0.07);
    }
    .moldura .cats button.on {
      color: #fff;
    }
    @container (max-width: 760px) {
      .panel {
        left: calc(var(--u) * 1.2);
        right: calc(var(--u) * 1.2);
      }
      .edge {
        display: none;
      }
      .tr {
        top: calc(var(--u) * 22);
      }
    }
  `];Tt=ls([D("pine3-moldura")],Tt);var us=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,Ie=(e,t,a,i)=>{for(var s=i>1?void 0:i?ps(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&us(t,a,s),s};const ms=[{id:"home",name:"Casa"},{id:"@divisoes",name:"Divisões"},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Segurança"},{id:"@cenas",name:"Cenas"}],fs=["nenhuma","uma","duas","três","quatro","cinco","seis","sete","oito","nove","dez"],gs={yellow:"amarelo",orange:"laranja",red:"vermelho"};let $t=class extends b{constructor(){super(...arguments),this.open=null}get pages(){return ms.filter(e=>e.id==="home"||e.id==="@divisoes"||this.viewWidgets(e.id).length)}render(){if(!this.home)return l;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(s=>s.id===this.view),t=this.pages,a=e?"@divisoes":this.view,i=Math.max(0,t.findIndex(s=>s.id===a));return c`<div class=${p({vd:!0,editorial:!0,editing:!!this.editing})}>
      <nav class="toc" aria-label="Índice">
        ${t.map(s=>c`<button class=${p({on:s.id===a})} @click=${()=>this.openRoom(s.id)}>${s.name}</button>`)}
        ${this.renderGear("egear")}
        <span class="no">N.º ${i+1} / ${t.length}</span>
      </nav>
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?c`<div class="rtop"><b>Divisões</b><span>${this.lightsLine()}</span></div>${this.renderList(!0)}`:this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):l}
    </div>`}lightsLine(){const e=V(this.home,this.entities).lightsOn;return e?`${e} luz${e>1?"es":""} acesa${e>1?"s":""}`:"tudo apagado"}sentence(){const e=V(this.home,this.entities),t=this.home.rooms.map(u=>u.temperature?parseFloat(this.entities[u.temperature]?.state??""):NaN).filter(u=>!Number.isNaN(u)),a=t.length?Math.round(t.reduce((u,h)=>u+h,0)/t.length):null,i=e.lightsOn>=4?"acolhedora":e.lightsOn?"calma":"às escuras",s=`${fs[e.lightsOn]??e.lightsOn} ${e.lightsOn===1?"luz":"luzes"}`,r=this.home.rooms.flatMap(u=>u.devices).find(u=>!u.hidden&&k(u.id)==="lock"),o=r?this.entities[r.id]?.state:void 0,n=r&&o?o==="locked"?c`a ${r.name.toLowerCase()} trancada`:c`a ${r.name.toLowerCase()} <em>ainda destrancada</em>`:null,d=[s,a!=null?`${a} graus`:null].filter(Boolean).join(", ");return c`A casa está <em>${i}</em>: ${d}${n?c`, e ${n}`:l}.`}renderHome(){const e=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}).split(":"),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],s=[...this.home.scenes,...this.home.scripts].filter(o=>this.entities[o]).slice(0,4),r=this.home.persons.map(o=>this.entities[o]).filter(o=>o?.state==="home");return c`<div class="ed">
      <div class="left">
        <div class="ttl">${e[0]}<em>:</em>${e[1]}</div>
        <div class="sub">${this.sentence()}</div>
        ${s.length?c`<div class="scn">${s.map(o=>c`<button class=${p({on:this.flash===o})} @click=${()=>this.tap({key:o,kind:"scene",size:"s",name:"",entity:o})}>
              ${(this.entities[o].attributes.friendly_name??o).toLowerCase()}</button>`)}</div>`:l}
        <div class="meta">
          ${t?c`<div>Lá fora<b>${a!=null?`${Math.round(a)}°, `:""}${this.weatherWord(t.state)}</b></div>`:l}
          ${i?c`<div class="warnm">Aviso ${gs[i.awarenessLevelID]??""}<b>${i.awarenessTypeName.toLowerCase()}</b></div>`:l}
          ${r.length?c`<div>Em casa<b>${r.map(o=>(o.attributes.friendly_name??"").split(" ")[0]).join(", ")}</b></div>`:l}
        </div>
      </div>
      ${this.renderList(!1)}
    </div>`}weatherWord(e){return{"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",lightning:"trovoada","lightning-rainy":"trovoada",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve",sunny:"sol",windy:"vento"}[e]??e}renderList(e){const t=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden));return c`<div class=${p({list:!0,full:e})}>${t.map(a=>this.renderRow(a))}</div>`}renderRow(e){const t=z(e),a=t.filter(d=>this.entities[d]?.state==="on").length,i=e.temperature?parseFloat(this.entities[e.temperature]?.state??""):NaN,s=e.devices.find(d=>k(d.id)==="lock"),r=s&&this.entities[s.id]?.state==="unlocked",o=this.open===e.id,n=`${at(t.length,a,e.devices.length)}${Number.isNaN(i)?"":` · ${A(i,0)}°`}`;return c`<div class=${p({r:!0,on:a>0})}>
      <div class="h">
        <button class="nmb" aria-expanded=${o} @click=${()=>this.open=o?null:e.id}>${e.name}</button>
        <span>${n}</span>
        ${r?c`<button class="tg warn" @click=${()=>this.call("lock","lock",s.id)}>trancar</button>`:t.length?c`<button class="tg" @click=${()=>this.call("light",a?"turn_off":"turn_on",t)}>${a?"on":"off"}</button>`:c`<button class="tg" @click=${()=>this.openRoom(e.id)}>abrir</button>`}
      </div>
      ${o?c`<div class="ctrls">
            ${t.map(d=>this.lineControl(d,e))}
            <button class="more" @click=${()=>this.openRoom(e.id)}>ver tudo em ${e.name.toLowerCase()} →</button>
          </div>`:l}
    </div>`}lineControl(e,t){const a=this.entities[e],i=`line-${e}`,s=this.drag?.key===i?this.drag.value:F(a),r=o=>{const n=o.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(o.clientX-n.left)/n.width*100)))};return c`<div class="lc">
      <span>${this.name(e,t)}</span><b>${s?`${s}%`:"—"}</b>
      <div class="line" role="slider" aria-label=${this.name(e,t)} aria-valuenow=${s} aria-valuemin="0" aria-valuemax="100"
        @pointerdown=${o=>{o.currentTarget.setPointerCapture(o.pointerId),this.drag={key:i,value:r(o)}}}
        @pointermove=${o=>{this.drag?.key===i&&o.buttons&&(this.drag={key:i,value:r(o)})}}
        @pointerup=${o=>{const n=r(o);this.call("light",n?"turn_on":"turn_off",e,n?{brightness_pct:n}:{}),this.drag={key:i,value:n},window.setTimeout(()=>{this.drag?.key===i&&(this.drag=null)},1500)}}><i style=${`width:${s}%`}></i></div>
    </div>`}};$t.styles=[q,N`
    .vd.editorial {
      --serif: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif;
      --mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      --card: transparent;
      --rim: none;
      --muted: rgba(20, 17, 13, 0.6);
      --name: #14110d;
      --acc: #c2410c;
      --well: rgba(20, 17, 13, 0.06);
      --line: rgba(20, 17, 13, 0.2);
      --sheet: #f6f2ea;
      --on-card: transparent;
      --on-hero: #c2410c;
      --fg: #14110d;
      background: #f1ece3;
      color: #14110d;
    }
    .toc {
      position: absolute;
      z-index: 3;
      left: calc(var(--u) * 3.4);
      right: calc(var(--u) * 3.4);
      top: calc(var(--u) * 1.8);
      display: flex;
      gap: calc(var(--u) * 2.4);
      align-items: baseline;
      border-bottom: calc(var(--u) * 0.2) solid #14110d;
      padding-bottom: calc(var(--u) * 0.8);
      font-family: var(--serif);
      font-size: calc(var(--u) * 2.2);
      overflow-x: auto;
      scrollbar-width: none;
    }
    .toc button {
      flex: none;
      color: rgba(20, 17, 13, 0.55);
    }
    .toc button.on {
      font-style: italic;
      color: #c2410c;
    }
    .toc .egear {
      margin-left: auto;
      flex: none;
      font-size: calc(var(--u) * 1.8);
      color: rgba(20, 17, 13, 0.6);
      align-self: center;
    }
    .toc .egear + .no {
      margin-left: calc(var(--u) * 1.2);
    }
    .toc .no {
      font-family: var(--mono);
      font-size: calc(var(--u) * 1);
      letter-spacing: 0.1em;
      color: rgba(20, 17, 13, 0.5);
      margin-left: auto;
      flex: none;
    }
    .editorial .main {
      top: calc(var(--u) * 7.6);
      left: calc(var(--u) * 3.4);
      right: calc(var(--u) * 3.4);
    }
    .editorial .picker {
      left: calc(var(--u) * 3.4);
      right: calc(var(--u) * 3.4);
      border-radius: 0;
      background: #f6f2ea;
      box-shadow: 0 calc(var(--u) * -0.2) 0 #14110d;
    }
    /* Casa */
    .ed {
      display: grid;
      grid-template-columns: 1fr 1.25fr;
      gap: calc(var(--u) * 4);
      min-height: calc(100cqh - var(--u) * 10);
    }
    .left {
      display: flex;
      flex-direction: column;
    }
    .ttl {
      font-family: var(--serif);
      font-size: calc(var(--u) * 11);
      line-height: 0.8;
      letter-spacing: -0.02em;
      font-variant-numeric: lining-nums;
    }
    .ttl em,
    .sub em {
      font-style: italic;
      color: #c2410c;
    }
    .sub {
      font-family: var(--serif);
      font-size: calc(var(--u) * 2.4);
      line-height: 1.2;
      margin-top: calc(var(--u) * 1.8);
      max-width: calc(var(--u) * 34);
    }
    .scn {
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--u) * 0.6) calc(var(--u) * 1.6);
      margin-top: auto;
      padding-top: calc(var(--u) * 2);
      font-family: var(--serif);
      font-size: calc(var(--u) * 2.2);
    }
    .ed .scn button {
      background: none;
      box-shadow: none;
      padding: 0;
      border-radius: 0;
      font-weight: 400;
      font-size: inherit;
      border-bottom: 1px solid rgba(20, 17, 13, 0.3);
    }
    .ed .scn button.on {
      font-style: italic;
      color: #c2410c;
      border-color: #c2410c;
    }
    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--u) * 1) calc(var(--u) * 3);
      margin-top: calc(var(--u) * 2);
      font-size: calc(var(--u) * 1.1);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .meta b {
      display: block;
      font-family: var(--serif);
      font-size: calc(var(--u) * 2.4);
      font-weight: 400;
      letter-spacing: 0;
      text-transform: none;
    }
    .meta .warnm {
      color: #c2410c;
    }
    .list {
      display: flex;
      flex-direction: column;
      border-top: calc(var(--u) * 0.2) solid #14110d;
      align-self: start;
    }
    .r {
      padding: calc(var(--u) * 1) 0;
      border-bottom: 1px solid rgba(20, 17, 13, 0.18);
    }
    .h {
      display: grid;
      grid-template-columns: 1fr auto auto;
      align-items: baseline;
      gap: calc(var(--u) * 2);
    }
    .nmb {
      text-align: left;
      font-family: var(--serif);
      font-size: calc(var(--u) * 3);
      line-height: 1;
    }
    .h span {
      font-size: calc(var(--u) * 1.15);
      letter-spacing: 0.04em;
      color: var(--muted);
    }
    .tg {
      font-family: var(--mono);
      font-size: calc(var(--u) * 1.1);
      padding: calc(var(--u) * 0.35) calc(var(--u) * 0.9);
      border: 1px solid #14110d;
      border-radius: 99px;
      min-width: calc(var(--u) * 4);
      text-align: center;
    }
    .r.on .nmb {
      font-style: italic;
      color: #c2410c;
    }
    .r.on .tg {
      background: #14110d;
      color: #f1ece3;
    }
    .tg.warn,
    .r.on .tg.warn {
      background: none;
      border-color: #c2410c;
      color: #c2410c;
    }
    .ctrls {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: calc(var(--u) * 1.6);
      margin-top: calc(var(--u) * 1.2);
    }
    .lc {
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 0.3);
      font-size: calc(var(--u) * 1.1);
    }
    .lc b {
      font-family: var(--serif);
      font-weight: 400;
      font-size: calc(var(--u) * 1.9);
    }
    .line {
      height: calc(var(--u) * 3);
      position: relative;
      touch-action: none;
      cursor: ew-resize;
    }
    .line::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: calc(var(--u) * 0.3);
      margin-top: calc(var(--u) * -0.15);
      background: rgba(20, 17, 13, 0.18);
    }
    .line i {
      position: absolute;
      left: 0;
      top: 50%;
      height: calc(var(--u) * 0.3);
      margin-top: calc(var(--u) * -0.15);
      background: #c2410c;
    }
    .line i::after {
      content: "";
      position: absolute;
      right: calc(var(--u) * -0.9);
      top: calc(var(--u) * -0.8);
      width: calc(var(--u) * 1.9);
      height: calc(var(--u) * 1.9);
      border-radius: 50%;
      background: #c2410c;
    }
    .more {
      grid-column: 1 / -1;
      justify-self: start;
      font-family: var(--serif);
      font-style: italic;
      font-size: calc(var(--u) * 1.6);
      color: #c2410c;
    }
    .list.full .nmb {
      font-size: calc(var(--u) * 3.6);
    }
    /* widgets on paper: no boxes, a rule on top, serif numbers, no illustrations */
    .editorial .w {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      border-top: 1px solid #14110d;
      padding: calc(var(--u) * 1) 0 calc(var(--u) * 1.2);
    }
    .editorial .w .art,
    .editorial .w .spark {
      display: none;
    }
    .editorial .w .nm {
      font-size: calc(var(--u) * 1.1);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-weight: 500;
    }
    .editorial .w .hero {
      font-family: var(--serif);
      font-weight: 400;
      letter-spacing: -0.02em;
      color: #14110d !important;
    }
    .editorial .w.on .hero {
      font-style: italic;
      color: #c2410c !important;
    }
    .editorial .w.att .hero {
      color: #c2410c !important;
    }
    .editorial .w.att {
      box-shadow: none;
      border-top-color: #c2410c;
    }
    .editorial .w .fill {
      top: auto;
      height: calc(var(--u) * 0.3);
      background: #c2410c;
      border: 0;
    }
    .editorial .rtop b {
      font-family: var(--serif);
      font-weight: 400;
    }
    .editorial .rtop .back,
    .editorial .pill {
      background: transparent;
      box-shadow: inset 0 0 0 1px #14110d;
    }
    .editorial .pill.pri,
    .editorial .ctl button.pri {
      background: #14110d;
      color: #f1ece3;
      box-shadow: none;
    }
    .editorial .seg {
      background: transparent;
      box-shadow: inset 0 0 0 1px rgba(20, 17, 13, 0.4);
    }
    .editorial .seg button.on {
      background: #14110d;
      color: #f1ece3;
    }
    .editorial .ctl button {
      background: transparent;
      box-shadow: inset 0 0 0 1px #14110d;
    }
    .editorial .cats button.on {
      background: #14110d;
      color: #f1ece3;
    }
    .editorial .scn button:active {
      background: none;
    }
    .editorial .w .scn button {
      background: none;
      box-shadow: none;
      border-bottom: 1px solid rgba(20, 17, 13, 0.3);
      border-radius: 0;
      padding: 0;
      font-family: var(--serif);
      font-size: calc(var(--u) * 1.8);
    }
    .editorial .sheet {
      border-radius: 0;
      box-shadow: calc(var(--u) * -0.2) 0 0 #14110d, 0 calc(var(--u) * 2) calc(var(--u) * 5) rgba(20, 17, 13, 0.25);
    }
    .editorial .sheet h4,
    .editorial .bigtemp {
      font-family: var(--serif);
      font-weight: 400;
    }
    .editorial .bigsl {
      border-radius: 0;
      background: rgba(20, 17, 13, 0.08);
      box-shadow: none;
    }
    .editorial .scrim {
      background: rgba(241, 236, 227, 0.6);
    }
    .editorial .grid.edit .w {
      outline-color: #c2410c;
    }
    @container (max-width: 760px) {
      .ed {
        grid-template-columns: 1fr;
      }
      .ctrls {
        grid-template-columns: 1fr;
      }
    }
  `];Ie([y()],$t.prototype,"open",2);$t=Ie([D("pine3-editorial")],$t);var bs=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,Ft=(e,t,a,i)=>{for(var s=i>1?void 0:i?vs(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&bs(t,a,s),s};const $s=[{id:"home",name:"Casa"},{id:"@divisoes",name:"Div."},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Seg."},{id:"@cenas",name:"Cenas"}],j=270,ws=16,ys=30;let ut=class extends b{constructor(){super(...arguments),this.faderRoom=null,this.dial=null}render(){if(!this.home)return l;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(s=>s.id===this.view),t=e?"@divisoes":this.view,a=$s.filter(s=>s.id==="home"||s.id==="@divisoes"||this.viewWidgets(s.id).length),i=V(this.home,this.entities).alerts;return c`<div class=${p({vd:!0,instrumento:!0,editing:!!this.editing})}>
      <nav class="bank" aria-label="Vistas">
        ${a.map(s=>c`<button class=${p({key:!0,on:s.id===t})} @click=${()=>this.openRoom(s.id)}>
          <span class=${p({led:!0,on:s.id===t,alarm:s.id==="@seguranca"&&i>0})}></span>${s.name}
        </button>`)}
        ${this.settingsButton?c`<button class="key set" @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}><span class="led"></span>Def.</button>`:l}
      </nav>
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderSwitches(!0):this.view.startsWith("@")?this.renderView(this.view):this.renderConsole()}</main>
      ${this.sheet?this.renderSheet(this.sheet):l}
    </div>`}lightRooms(){return this.home.rooms.filter(e=>!e.hidden&&z(e).length)}renderConsole(){const e=this.home.weather?this.entities[this.home.weather]:void 0,t=e?.attributes.temperature,a=this.warnings[0],i=[...this.home.scenes,...this.home.scripts].filter(n=>this.entities[n]).slice(0,3),s=this.home.rooms.flatMap(n=>n.devices).find(n=>!n.hidden&&k(n.id)==="lock"),r=s?this.entities[s.id]?.state==="locked":!0,o=this.now.toLocaleDateString("pt-PT",{weekday:"short",day:"numeric",month:"short"}).replace(/\./g,"");return c`<div class="console">
      <section class="mod disp">
        <div class="lab"><span>Hora</span><span>${o}</span></div>
        <b>${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</b>
        <span class="ln">${e?`${t!=null?`${Math.round(t)}° · `:""}${tt[e.state]??e.state}`:""}${a?` · aviso ${a.awarenessTypeName.toLowerCase()}`:""}</span>
        <div class="keys">
          ${i.map((n,d)=>c`<button class=${p({btn:!0,on:this.flash===n})} @click=${()=>this.tap({key:n,kind:"scene",size:"s",name:"",entity:n})}>
            ${d+1} ${(this.entities[n].attributes.friendly_name??n).split(" ")[0]}</button>`)}
          ${s?c`<button class=${p({btn:!0,lockw:!r})} @click=${()=>r?this.sheet=s.id:this.call("lock","lock",s.id)}>
                <span class=${p({led:!0,g:r,on:!0})}></span>${r?"Tranc.":"Porta"}</button>`:l}
        </div>
      </section>
      ${this.renderKnob()}
      ${this.renderFaders()}
      ${this.renderSwitches(!1)}
    </div>`}renderKnob(){const e=this.home.rooms.flatMap($=>$.devices.map(S=>({d:S,r:$}))).find(({d:$})=>!$.hidden&&k($.id)==="climate");if(!e)return c`<section class="mod knob"><div class="lab"><span>Clima</span></div><p class="k">Sem termóstato</p></section>`;const t=this.entities[e.d.id],a=!!t&&t.state!=="off",i=t?.attributes.min_temp??ws,s=Math.min(t?.attributes.max_temp??ys,i+14),r=this.dial??t?.attributes.temperature??i,o=Math.max(0,Math.min(1,(r-i)/(s-i))),n=-j/2+o*j,d=Array.from({length:29},($,S)=>{const G=(-j/2+S*j/28)*Math.PI/180,mt=S%4?44:41,We=a&&S/28<=o;return v`<line x1=${50+47*Math.sin(G)} y1=${50-47*Math.cos(G)} x2=${50+mt*Math.sin(G)} y2=${50-mt*Math.cos(G)}
        stroke=${We?"#ff6a1a":"#6b6a66"} stroke-width=${S%4?1:1.8} stroke-linecap="round"/>`}),u=t?.attributes.target_temp_step??.5,h=$=>{const S=$.currentTarget.getBoundingClientRect(),G=Math.atan2($.clientX-(S.left+S.width/2),-($.clientY-(S.top+S.height/2)))*180/Math.PI,mt=Math.max(0,Math.min(1,(G+j/2)/j));return Math.round((i+mt*(s-i))/u)*u},f=(t?.attributes.hvac_modes??[]).filter($=>["cool","heat","off","auto","heat_cool"].includes($)).slice(0,3),g={cool:"Frio",heat:"Calor",off:"Off",auto:"Auto",heat_cool:"Auto"},M=t?.attributes.current_temperature;return c`<section class="mod knob">
      <div class="lab"><span>Clima · ${e.r.name}${M!=null?` · ${A(M)}°`:""}</span><span class=${p({led:!0,on:a})}></span></div>
      <div class="dialw" role="slider" aria-label="Temperatura" aria-valuenow=${r} aria-valuemin=${i} aria-valuemax=${s}
        @pointerdown=${$=>{a&&($.currentTarget.setPointerCapture($.pointerId),this.dial=h($))}}
        @pointermove=${$=>{this.dial!=null&&$.buttons&&(this.dial=h($))}}
        @pointerup=${$=>{if(this.dial==null)return;const S=h($);this.call("climate","set_temperature",e.d.id,{temperature:S}),window.setTimeout(()=>this.dial=null,1500)}}>
        <svg viewBox="0 0 100 100" aria-hidden="true">${d}</svg>
        <div class="kn"><i style=${`transform:rotate(${a?n:-j/2}deg)`}></i></div>
        <div class="ktx"><div>${a?`${A(r)}°`:"off"}<small>${a?"roda":"desligado"}</small></div></div>
      </div>
      <div class="keys">${f.map($=>c`<button class=${p({btn:!0,on:t?.state===$})} @click=${()=>this.call("climate","set_hvac_mode",e.d.id,{hvac_mode:$})}>${g[$]}</button>`)}</div>
    </section>`}renderFaders(){const e=this.lightRooms(),t=e.find(r=>r.id===this.faderRoom)??e[0];if(!t)return c`<section class="mod fad"><div class="lab"><span>Faders</span></div></section>`;const a=t.devices.filter(r=>!r.hidden&&k(r.id)==="cover"&&this.entities[r.id]?.attributes.supported_features&4),i=[...z(t).map(r=>({id:r,v:F(this.entities[r]),n:this.name(r,t),cover:!1})),...a.map(r=>({id:r.id,v:this.entities[r.id]?.attributes.current_position??0,n:r.name,cover:!0}))].slice(0,4),s=r=>{const o=r.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(o.bottom-r.clientY)/o.height*100)))};return c`<section class="mod fad">
      <div class="lab"><span>Faders</span><span class="led g on"></span></div>
      <div class="sel">${e.map(r=>c`<button class=${p({btn:!0,on:r.id===t.id})} @click=${()=>this.faderRoom=r.id}>${r.name.slice(0,5)}</button>`)}</div>
      <div class="faders">${i.map(r=>{const o=`fd-${r.id}`,n=this.drag?.key===o?this.drag.value:r.v;return c`<div class="fd"><b>${n}</b>
          <div class="tk" role="slider" aria-label=${r.n} aria-valuenow=${n} aria-valuemin="0" aria-valuemax="100"
            @pointerdown=${d=>{d.currentTarget.setPointerCapture(d.pointerId),this.drag={key:o,value:s(d)}}}
            @pointermove=${d=>{this.drag?.key===o&&d.buttons&&(this.drag={key:o,value:s(d)})}}
            @pointerup=${d=>{const u=s(d);r.cover?this.call("cover","set_cover_position",r.id,{position:u}):this.call("light",u?"turn_on":"turn_off",r.id,u?{brightness_pct:u}:{}),this.drag={key:o,value:u},window.setTimeout(()=>{this.drag?.key===o&&(this.drag=null)},1500)}}><div class="cap" style=${`bottom:calc((100% - var(--u) * 2.1) * ${n/100})`}></div></div>
          <span>${r.n}</span></div>`})}</div>
    </section>`}renderSwitches(e){const t=e?this.home.rooms.filter(i=>!i.hidden&&i.devices.some(s=>!s.hidden)):this.lightRooms().slice(0,6),a=V(this.home,this.entities).lightsOn;return c`<section class=${p({mod:!0,sw:!0,full:e})}>
      <div class="lab"><span>${e?"Divisões":"Luzes"}</span><span>${a} acesa${a===1?"":"s"}</span></div>
      <div class="rows">${t.map(i=>{const s=z(i),r=s.filter(n=>this.entities[n]?.state==="on"),o=r.length?Math.max(...r.map(n=>F(this.entities[n]))):0;return c`<div class="rk">
          <button class=${p({rocker:!0,on:r.length>0})} aria-label=${`Luzes de ${i.name}`} ?disabled=${!s.length}
            @click=${()=>this.call("light",r.length?"turn_off":"turn_on",s)}><i></i></button>
          <button class="rkn" @click=${()=>this.openRoom(i.id)}><b>${i.name}</b><span>${s.length?r.length?`${o}%`:"off":`${i.devices.length} disp.`}</span></button>
        </div>`})}</div>
    </section>`}};ut.styles=[q,N`
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
  `];Ft([y()],ut.prototype,"faderRoom",2);Ft([y()],ut.prototype,"dial",2);ut=Ft([D("pine3-instrumento")],ut);var ks=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,Be=(e,t,a,i)=>{for(var s=i>1?void 0:i?xs(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&ks(t,a,s),s};const X=e=>v`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,Mt=[{id:"home",name:"Casa",icon:m.home},{id:"@divisoes",name:"Divisões",icon:m.room},{id:"@clima",name:"Clima",icon:m.therm},{id:"@seguranca",name:"Segurança",icon:m.shield},{id:"@cenas",name:"Cenas",icon:m.spark}];let wt=class extends b{constructor(){super(...arguments),this.wheel=!1}get views(){return Mt.filter(e=>e.id==="home"||e.id==="@divisoes"||this.viewWidgets(e.id).length)}go(e){this.wheel=!1,this.openRoom(e)}render(){if(!this.home)return l;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(i=>i.id===this.view),t=e?"@divisoes":this.view,a=Mt.find(i=>i.id===t)??Mt[0];return c`<div class=${p({vd:!0,orbita:!0,editing:!!this.editing})}>
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderOrbList():this.view.startsWith("@")?this.renderView(this.view):this.renderSky()}</main>
      ${this.wheel?this.renderWheel(t):l}
      ${this.editing?l:c`<button class="hub" aria-label="Mudar de vista" aria-expanded=${this.wheel} @click=${()=>this.wheel=!this.wheel}>
            <i>${X(this.wheel?m.close:a.icon)}</i><span><b>${e?e.name:a.name}</b><small>toca para mudar de vista</small></span>
          </button>`}
      ${this.sheet?this.renderSheet(this.sheet):l}
    </div>`}renderWheel(e){const t=[...this.views];this.settingsButton&&t.push({id:"@settings",name:"Definições",icon:m.gear});const a=t.length;return c`<div class="radial" @click=${i=>{i.target===i.currentTarget&&(this.wheel=!1)}}>
      ${t.map((i,s)=>{const r=Math.PI+(a===1?Math.PI/2:s*Math.PI/(a-1)),o=50+30*Math.cos(r),n=88+30*(5/3)*Math.sin(r);return c`<button class=${p({rb:!0,on:i.id===e})} style=${`left:${o.toFixed(1)}%;top:${n.toFixed(1)}%;animation-delay:${s*30}ms`}
          @click=${()=>i.id==="@settings"?(this.wheel=!1,this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))):this.go(i.id)}>${X(i.icon)}${i.name}</button>`})}
    </div>`}renderSky(){const e=V(this.home,this.entities),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.home.rooms.filter(h=>!h.hidden&&h.devices.some(f=>!f.hidden));i.length;const s=this.home.rooms.flatMap(h=>h.devices.filter(f=>!f.hidden)),r=s.find(h=>k(h.id)==="climate"),o=s.find(h=>k(h.id)==="lock"),n=r?this.entities[r.id]:void 0,d=o?this.entities[o.id]:void 0,u=this.warnings[0];return c`<div class="sky">
      <div class="core">
        <b>${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${this.now.toLocaleDateString("pt-PT",{weekday:"long"})}${t?` · ${a!=null?`${Math.round(a)}° `:""}${tt[t.state]??t.state}`:""}</span>
        <span>${e.lightsOn?`${e.lightsOn} luz${e.lightsOn>1?"es":""} acesa${e.lightsOn>1?"s":""}`:"tudo apagado"}</span>
        ${u?c`<span class=${`ipma ${u.awarenessLevelID}`}><i></i>${u.awarenessTypeName.toLowerCase()}</span>`:l}
      </div>
      ${this.ring(i,r&&n?r.id:null,o&&d?o.id:null)}
    </div>`}ring(e,t,a){const i=e.map(r=>({key:r.id,render:(o,n)=>{const d=z(r),u=d.filter(M=>this.entities[M]?.state==="on"),h=Math.min(14,9+u.length*1.5),f=u.length?ct(this.entities[u[0]]):"#ffcf85",g=u.length?Math.round(u.reduce((M,$)=>M+F(this.entities[$]),0)/u.length):0;return c`<button class=${p({orb:!0,on:u.length>0})} style=${`left:${o}%;top:${n}%;--s:calc(var(--u) * ${h});--c:${f};--g:${.15+g/300}`}
          @click=${()=>this.openRoom(r.id)} aria-label=${r.name}>
          ${X(U(r.icon))}<b>${r.name}</b><span>${at(d.length,u.length,r.devices.length)}</span>
        </button>`}}));if(t){const r=this.entities[t];i.splice(Math.min(1,i.length),0,{key:t,render:(o,n)=>c`<button class=${p({orb:!0,ac:r.state!=="off"})} style=${`left:${o}%;top:${n}%;--s:calc(var(--u) * 8)`} @click=${()=>this.openRoom("@clima")}>
          ${X(m.therm)}<b>${r.state==="off"?"Off":`${A(r.attributes.temperature??0)}°`}</b><span>clima</span></button>`})}if(a){const r=this.entities[a];i.push({key:a,render:(o,n)=>c`<button class=${p({orb:!0,alert:r.state==="unlocked"})} style=${`left:${o}%;top:${n}%;--s:calc(var(--u) * 8)`}
          @click=${()=>r.state==="locked"?this.sheet=a:this.call("lock","lock",a)}>
          ${X(r.state==="locked"?m.lock:m.unlock)}<b>Porta</b><span>${r.state==="locked"?"trancada":"trancar"}</span></button>`})}const s=i.length;return i.map((r,o)=>{const n=-Math.PI/2+o*2*Math.PI/Math.max(s,1)+(s%2?0:Math.PI/s);return r.render(+(50+36*Math.cos(n)).toFixed(1),+(50+34*Math.sin(n)).toFixed(1))})}renderOrbList(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden));return c`<div class="rtop"><b>Divisões</b><span>${V(this.home,this.entities).lightsOn} luzes acesas</span></div>
      <div class="orbs">${e.map(t=>{const a=z(t),i=a.filter(o=>this.entities[o]?.state==="on"),s=i.length?ct(this.entities[i[0]]):"#ffcf85",r=t.temperature?parseFloat(this.entities[t.temperature]?.state??""):NaN;return c`<button class=${p({orb:!0,flat:!0,on:i.length>0})} style=${`--c:${s};--g:.3`} @click=${()=>this.openRoom(t.id)}>
          ${X(U(t.icon))}<b>${t.name}</b><span>${at(a.length,i.length,t.devices.length)}${Number.isNaN(r)?"":` · ${A(r,0)}°`}</span>
        </button>`})}</div>`}};wt.styles=[q,N`
    .vd.orbita {
      --card: rgba(255, 255, 255, 0.06);
      --rim: inset 0 0 0 1px rgba(160, 180, 255, 0.16), 0 calc(var(--u) * 1) calc(var(--u) * 3) calc(var(--u) * -1) rgba(0, 0, 10, 0.5);
      --muted: #8d97c9;
      --name: #c9d0f2;
      --acc: #ffb36b;
      --warm: #ffb36b;
      --well: rgba(255, 255, 255, 0.08);
      --line: rgba(160, 180, 255, 0.16);
      --sheet: linear-gradient(180deg, #1d2552, #141a3c);
      --on-card: radial-gradient(120% 120% at 30% 20%, rgba(255, 196, 120, 0.32), rgba(255, 140, 90, 0.1));
      --on-hero: #fff1dc;
      --fg: #e8ecff;
      background: radial-gradient(60% 80% at 50% 45%, #1b2350 0%, #0b1026 60%, #070a18 100%);
      color: #e8ecff;
    }
    .orbita .main {
      left: calc(var(--u) * 3);
      right: calc(var(--u) * 3);
      top: calc(var(--u) * 2.4);
      bottom: 0;
      padding-bottom: calc(var(--u) * 10);
    }
    .orbita .w {
      border-radius: calc(var(--u) * 3);
    }
    .orbita .picker {
      left: calc(var(--u) * 3);
      bottom: calc(var(--u) * 9);
    }
    .sky {
      position: relative;
      height: calc(100cqh - var(--u) * 12.4);
    }
    .core {
      position: absolute;
      left: 50%;
      top: 50%;
      width: calc(var(--u) * 21);
      height: calc(var(--u) * 21);
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: radial-gradient(circle at 40% 35%, #2a3470, #141a3c 70%);
      box-shadow: 0 0 0 calc(var(--u) * 0.2) rgba(160, 180, 255, 0.18), 0 0 calc(var(--u) * 6) rgba(90, 110, 255, 0.25);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: calc(var(--u) * 0.4);
      text-align: center;
    }
    .core b {
      font-weight: 200;
      font-size: calc(var(--u) * 6);
      letter-spacing: -0.05em;
      line-height: 1;
      font-variant-numeric: tabular-nums;
    }
    .core span {
      font-size: calc(var(--u) * 1.15);
      color: #8d97c9;
      max-width: 80%;
    }
    .core .ipma {
      margin: 0;
      align-self: center;
      font-size: calc(var(--u) * 0.95);
    }
    .orb {
      position: absolute;
      width: var(--s, calc(var(--u) * 9));
      height: var(--s, calc(var(--u) * 9));
      transform: translate(-50%, -50%);
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: calc(var(--u) * 0.2);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(160, 180, 255, 0.18);
      transition: width 0.4s, height 0.4s, box-shadow 0.4s, background 0.4s;
      padding: calc(var(--u) * 0.6);
      box-sizing: border-box;
    }
    .orb:active {
      transform: translate(-50%, -50%) scale(0.95);
    }
    .orb .ic {
      font-size: calc(var(--u) * 1.8);
      opacity: 0.85;
    }
    .orb b {
      font-size: calc(var(--u) * 1.3);
      font-weight: 600;
      line-height: 1.1;
    }
    .orb span {
      font-size: calc(var(--u) * 0.95);
      color: #8d97c9;
      line-height: 1.15;
    }
    .orb.on {
      background: radial-gradient(circle at 35% 30%, var(--c), rgba(255, 140, 90, 0.25) 72%);
      border-color: rgba(255, 210, 150, 0.5);
      box-shadow: 0 0 calc(var(--u) * 4) rgba(255, 180, 110, var(--g, 0.35));
      color: #2a1406;
    }
    .orb.on span {
      color: #5a3216;
    }
    .orb.ac {
      background: radial-gradient(circle at 35% 30%, #ff8a5c, #a1361c);
      border: 0;
      color: #fff;
    }
    .orb.ac span {
      color: #ffd5c4;
    }
    .orb.alert {
      border-color: #ff7a66;
      box-shadow: 0 0 calc(var(--u) * 3) rgba(255, 122, 102, 0.4);
    }
    .orbs {
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--u) * 2);
      padding-top: calc(var(--u) * 1);
    }
    .orb.flat {
      position: relative;
      transform: none;
      width: calc(var(--u) * 16);
      height: calc(var(--u) * 16);
    }
    .orb.flat:active {
      transform: scale(0.95);
    }
    .hub {
      position: absolute;
      left: 50%;
      bottom: calc(var(--u) * 1.6);
      transform: translateX(-50%);
      z-index: 6;
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 1);
      padding: calc(var(--u) * 0.6) calc(var(--u) * 1.6) calc(var(--u) * 0.6) calc(var(--u) * 0.6);
      border-radius: 99px;
      background: rgba(20, 26, 60, 0.85);
      border: 1px solid rgba(160, 180, 255, 0.25);
      text-align: left;
    }
    .hub i {
      width: calc(var(--u) * 4.6);
      height: calc(var(--u) * 4.6);
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: linear-gradient(135deg, #ffb36b, #ff7a50);
      color: #1a1020;
      font-size: calc(var(--u) * 2);
    }
    .hub b {
      display: block;
      font-weight: 500;
      font-size: calc(var(--u) * 1.5);
    }
    .hub small {
      display: block;
      font-size: calc(var(--u) * 1);
      color: #8d97c9;
    }
    .radial {
      position: absolute;
      inset: 0;
      z-index: 5;
      background: rgba(5, 8, 20, 0.72);
      animation: fade 0.2s;
    }
    .rb {
      position: absolute;
      width: calc(var(--u) * 9.4);
      height: calc(var(--u) * 9.4);
      transform: translate(-50%, -50%);
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: calc(var(--u) * 0.4);
      background: #1b2350;
      border: 1px solid rgba(160, 180, 255, 0.3);
      font-size: calc(var(--u) * 1.15);
      font-weight: 600;
      animation: pop 0.25s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
    }
    .rb .ic {
      font-size: calc(var(--u) * 2.2);
      color: #ffb36b;
    }
    .rb.on {
      background: linear-gradient(135deg, #ffb36b, #ff7a50);
      color: #1a1020;
    }
    .rb.on .ic {
      color: #1a1020;
    }
    @keyframes pop {
      from {
        transform: translate(-50%, -50%) scale(0.3);
        opacity: 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .rb,
      .radial {
        animation: none;
      }
    }
    .orbita .seg button.on,
    .orbita .cats button.on {
      background: #ffb36b;
      color: #1a1020;
    }
    .orbita .ctl button.pri,
    .orbita .pill.pri {
      background: linear-gradient(135deg, #ffb36b, #ff7a50);
      color: #1a1020;
      box-shadow: none;
    }
    @container (max-width: 760px) {
      .core {
        width: calc(var(--u) * 26);
        height: calc(var(--u) * 26);
      }
    }
  `];Be([y()],wt.prototype,"wheel",2);wt=Be([D("pine3-orbita")],wt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs={},_s=(e,t=Cs)=>e._$AH=t;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls=Wt(class extends Zt{constructor(){super(...arguments),this.key=l}render(e,t){return this.key=e,t}update(e,[t,a]){return t!==this.key&&(_s(e),this.key=t),a}});var As=Object.getOwnPropertyDescriptor,Ms=(e,t,a,i)=>{for(var s=i>1?void 0:i?As(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=o(s)||s);return s};const Vt=e=>v`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,Ht=[{id:"home",name:"Casa",color:"#f6d34a",icon:m.home},{id:"@divisoes",name:"Divisões",color:"#9fd8b8",icon:m.room},{id:"@clima",name:"Clima",color:"#ff8f6b",icon:m.therm},{id:"@seguranca",name:"Segurança",color:"#9cc4f2",icon:m.shield},{id:"@cenas",name:"Cenas",color:"#f7a98a",icon:m.spark}];let Rt=class extends b{render(){if(!this.home)return l;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(s=>s.id===this.view),t=e?"@divisoes":this.view,a=Ht.filter(s=>s.id==="home"||s.id==="@divisoes"||this.viewWidgets(s.id).length),i=(Ht.find(s=>s.id===t)??Ht[0]).color;return c`<div class=${p({vd:!0,carteira:!0,editing:!!this.editing})}>
      <nav class="stack" aria-label="Vistas">
        ${a.map(s=>c`<button class=${p({wtab:!0,on:s.id===t})} style=${`--c:${s.color}`} @click=${()=>this.openRoom(s.id)}>
          ${Vt(s.icon)}<span>${s.name}</span></button>`)}
        ${this.settingsButton?c`<button class="wtab gear" style="--c:#d6cfc2" @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}>
              ${Vt(m.gear)}<span>Definições</span></button>`:l}
      </nav>
      <div class="wcard" style=${`--c:${i}`}>
        ${Ls(t,c`<main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderRows(!0):this.view.startsWith("@")?this.renderView(this.view):this.renderFront()}</main>`)}
      </div>
      ${this.sheet?this.renderSheet(this.sheet):l}
    </div>`}renderFront(){const e=this.home.weather?this.entities[this.home.weather]:void 0,t=e?.attributes.temperature,a=this.warnings[0],i=[...this.home.scenes,...this.home.scripts].filter(s=>this.entities[s]).slice(0,4);return c`<div class="front">
      <div class="l">
        <div class="big">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</div>
        <span class="date">${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</span>
        ${i.length?c`<div class="pills">${i.map(s=>c`<button class=${p({on:this.flash===s})}
              @click=${()=>this.tap({key:s,kind:"scene",size:"s",name:"",entity:s})}>${this.entities[s].attributes.friendly_name??s}</button>`)}</div>`:l}
        ${e?c`<div class="wxg">${t!=null?`${Math.round(t)}°`:""}<small>${tt[e.state]??e.state}${a?` · aviso ${a.awarenessTypeName.toLowerCase()}`:""}</small></div>`:l}
      </div>
      ${this.renderRows(!1)}
    </div>`}renderRows(e){const t=this.home.rooms.filter(s=>!s.hidden&&s.devices.some(r=>!r.hidden)),a=this.home.rooms.flatMap(s=>s.devices).find(s=>!s.hidden&&k(s.id)==="lock"),i=a?this.entities[a.id]:void 0;return c`<div class=${p({rows:!0,full:e})}>
      ${e?c`<div class="rtop"><b>Divisões</b><span>${V(this.home,this.entities).lightsOn} luzes acesas</span></div>`:l}
      ${t.map(s=>{const r=z(s),o=r.filter(d=>this.entities[d]?.state==="on").length,n=s.temperature?parseFloat(this.entities[s.temperature]?.state??""):NaN;return c`<div class="rowg">
          <button class="rn" @click=${()=>this.openRoom(s.id)}>${e?Vt(U(s.icon)):l}<span><b>${s.name}</b>
            <small>${at(r.length,o,s.devices.length)}${Number.isNaN(n)?"":` · ${A(n)}°`}</small></span></button>
          ${r.length?c`<button class=${p({tg:!0,on:o>0})} role="switch" aria-checked=${o>0} aria-label=${`Luzes de ${s.name}`}
                @click=${()=>this.call("light",o?"turn_off":"turn_on",r)}><i></i></button>`:l}
        </div>`})}
      ${a&&i?c`<div class="rowg">
            <span class="rn"><span><b>${a.name}</b><small>${i.state==="locked"?"trancada":"destrancada · tocar para trancar"}</small></span></span>
            <button class=${p({tg:!0,on:i.state==="locked"})} role="switch" aria-checked=${i.state==="locked"} aria-label=${`Trancar ${a.name}`}
              @click=${()=>i.state==="locked"?this.sheet=a.id:this.call("lock","lock",a.id)}><i></i></button>
          </div>`:l}
    </div>`}};Rt.styles=[q,N`
    .vd.carteira {
      --card: rgba(255, 255, 255, 0.55);
      --rim: none;
      --muted: rgba(27, 26, 23, 0.6);
      --name: #1b1a17;
      --acc: #1b1a17;
      --warm: #1b1a17;
      --well: rgba(27, 26, 23, 0.08);
      --line: rgba(27, 26, 23, 0.12);
      --sheet: #f6f2ea;
      --on-card: #1b1a17;
      --on-hero: #fff;
      --fg: #1b1a17;
      background: #e8e2d6;
      color: #1b1a17;
    }
    .stack {
      position: absolute;
      z-index: 2;
      right: calc(var(--u) * 1.4);
      top: calc(var(--u) * 1.4);
      bottom: calc(var(--u) * 1.4);
      width: calc(var(--u) * 10);
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 0.5);
    }
    .wtab {
      flex: 1;
      max-height: calc(var(--u) * 14);
      border-radius: calc(var(--u) * 1.6);
      background: var(--c);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: calc(var(--u) * 0.5);
      padding: 0 calc(var(--u) * 1.2);
      font-weight: 700;
      font-size: calc(var(--u) * 1.15);
      text-align: left;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .wtab .ic {
      font-size: calc(var(--u) * 1.8);
    }
    .wtab.on {
      transform: translateX(calc(var(--u) * -1.2));
      box-shadow: 0 calc(var(--u) * 0.8) calc(var(--u) * 1.6) calc(var(--u) * -0.8) rgba(0, 0, 0, 0.35);
    }
    .wtab.gear {
      flex: 0 0 auto;
      height: calc(var(--u) * 7);
      margin-top: auto;
    }
    .wcard {
      position: absolute;
      left: calc(var(--u) * 1.4);
      right: calc(var(--u) * 13);
      top: calc(var(--u) * 1.4);
      bottom: calc(var(--u) * 1.4);
      border-radius: calc(var(--u) * 2.6);
      background: var(--c);
      box-shadow: 0 calc(var(--u) * 1.4) calc(var(--u) * 3) calc(var(--u) * -1.6) rgba(0, 0, 0, 0.35);
      overflow: hidden;
      transition: background 0.3s;
    }
    .carteira .main {
      inset: 0;
      padding: calc(var(--u) * 2.2);
      animation: gin 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes gin {
      from {
        transform: translateX(calc(var(--u) * 5));
        opacity: 0.3;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .carteira .main {
        animation: none;
      }
    }
    .carteira .picker {
      left: calc(var(--u) * 1.4);
      right: calc(var(--u) * 13);
    }
    .front {
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: calc(var(--u) * 2.4);
      min-height: calc(100cqh - var(--u) * 7.2);
    }
    .l {
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 1);
    }
    .big {
      font-weight: 800;
      font-size: calc(var(--u) * 10);
      letter-spacing: -0.07em;
      line-height: 0.85;
      font-variant-numeric: tabular-nums;
    }
    .date {
      font-size: calc(var(--u) * 1.5);
      font-weight: 600;
      opacity: 0.7;
    }
    .date::first-letter {
      text-transform: uppercase;
    }
    .pills {
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--u) * 0.6);
      margin-top: calc(var(--u) * 1.2);
    }
    .pills button {
      padding: calc(var(--u) * 0.7) calc(var(--u) * 1.3);
      border-radius: 99px;
      background: rgba(27, 26, 23, 0.08);
      font-weight: 700;
      font-size: calc(var(--u) * 1.2);
    }
    .pills button.on {
      background: #1b1a17;
      color: #fff;
    }
    .wxg {
      margin-top: auto;
      font-weight: 700;
      font-size: calc(var(--u) * 3.2);
      letter-spacing: -0.04em;
    }
    .wxg small {
      display: block;
      font-size: calc(var(--u) * 1.3);
      font-weight: 600;
      opacity: 0.65;
      letter-spacing: 0;
    }
    .rows {
      display: flex;
      flex-direction: column;
    }
    .rowg {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: calc(var(--u) * 1);
      padding: calc(var(--u) * 1) 0;
      border-bottom: calc(var(--u) * 0.15) solid rgba(27, 26, 23, 0.12);
    }
    .rn {
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 1);
      text-align: left;
      min-width: 0;
    }
    .rn .ic {
      font-size: calc(var(--u) * 2.4);
    }
    .rn b {
      display: block;
      font-weight: 700;
      font-size: calc(var(--u) * 1.8);
    }
    .rn small {
      display: block;
      font-size: calc(var(--u) * 1.2);
      opacity: 0.6;
    }
    .rows.full .rn b {
      font-size: calc(var(--u) * 2.4);
    }
    .tg {
      width: calc(var(--u) * 6);
      height: calc(var(--u) * 3.4);
      border-radius: 99px;
      background: rgba(27, 26, 23, 0.15);
      position: relative;
      flex: none;
    }
    .tg i {
      position: absolute;
      left: calc(var(--u) * 0.3);
      top: calc(var(--u) * 0.3);
      width: calc(var(--u) * 2.8);
      height: calc(var(--u) * 2.8);
      border-radius: 50%;
      background: #fff;
      transition: left 0.15s;
    }
    .tg.on {
      background: #1b1a17;
    }
    .tg.on i {
      left: calc(var(--u) * 2.9);
    }
    /* widgets on the coloured card: translucent paper, bold numbers, no illustrations */
    .carteira .w {
      box-shadow: none;
      border-radius: calc(var(--u) * 1.8);
    }
    .carteira .w .art {
      display: none;
    }
    .carteira .w .hero {
      font-weight: 700;
      letter-spacing: -0.05em;
      color: inherit !important;
    }
    .carteira .w.on {
      color: #fff;
    }
    .carteira .w.on .nm,
    .carteira .w.on .nm em,
    .carteira .w.on .hero small {
      color: rgba(255, 255, 255, 0.75);
    }
    .carteira .w .fill {
      background: rgba(27, 26, 23, 0.1);
      border-right: 2px solid rgba(27, 26, 23, 0.35);
    }
    .carteira .w.on .fill {
      background: rgba(255, 255, 255, 0.12);
      border-right-color: rgba(255, 255, 255, 0.5);
    }
    .carteira .rtop .back,
    .carteira .pill {
      background: rgba(255, 255, 255, 0.55);
      box-shadow: none;
    }
    .carteira .pill.pri,
    .carteira .seg button.on,
    .carteira .cats button.on,
    .carteira .ctl button.pri {
      background: #1b1a17;
      color: #fff;
    }
    .carteira .w.on .ctl button {
      background: rgba(255, 255, 255, 0.14);
      color: #fff;
    }
    .carteira .w.on .ctl button.pri {
      background: #fff;
      color: #1b1a17;
    }
    .carteira .seg {
      background: rgba(27, 26, 23, 0.08);
    }
    .carteira .ctl button {
      background: rgba(27, 26, 23, 0.08);
      box-shadow: none;
    }
    @container (max-width: 760px) {
      .front {
        grid-template-columns: 1fr;
      }
      .stack {
        width: calc(var(--u) * 7);
      }
      .wtab span {
        display: none;
      }
      .wcard,
      .carteira .picker {
        right: calc(var(--u) * 9.4);
      }
    }
  `];Rt=Ms([D("pine3-carteira")],Rt);const je={vidro:"pine3-vidro",bento:"pine3-bento",moldura:"pine3-moldura",editorial:"pine3-editorial",instrumento:"pine3-instrumento",orbita:"pine3-orbita",carteira:"pine3-carteira"},$e=e=>ma(je[e]??"pine3-vidro"),Xs=Object.values(je).join(", "),zt={vidro:"linear-gradient(180deg,#262b31,#0f1113)",bento:"linear-gradient(135deg,#ffd166 0 33%,#efe9df 33% 66%,#ff7a50 66%)",moldura:"linear-gradient(180deg,#f2b27a,#7c5a8c 60%,#1a1f30)",editorial:"repeating-linear-gradient(180deg,#f1ece3 0 22%,#14110d 22% 24%)",instrumento:"radial-gradient(circle at 60% 50%,#ff6a1a 0 12%,#3a3a38 13%)",orbita:"radial-gradient(circle,#3a3f5a 0 30%,#20232f 31%)",carteira:"linear-gradient(180deg,#e9e4da,#cfc6b6)",lente:"linear-gradient(135deg,#e6e9ee,#c9ced6)"},St={vidro:"Vidro",bento:"Bento",moldura:"Moldura",editorial:"Editorial",instrumento:"Instrumento",orbita:"Órbita",carteira:"Carteira",lente:"Lente"},Vs=["vidro","bento","moldura","editorial","instrumento","orbita","carteira"],Hs={grafite:"Grafite (escuro)",claro:"Claro",auto:"Automático (pôr do sol)"},we={AVR:"Aveiro",BJA:"Beja",BRG:"Braga",BGC:"Bragança",CBO:"Castelo Branco",CBR:"Coimbra",EVR:"Évora",FAR:"Faro",GDA:"Guarda",LRA:"Leiria",LSB:"Lisboa",PTG:"Portalegre",PTO:"Porto",STM:"Santarém",STB:"Setúbal",VCT:"Viana do Castelo",VRL:"Vila Real",VIS:"Viseu",MCN:"Madeira · Costa Norte",MCS:"Madeira · Costa Sul",MRM:"Madeira · Regiões Montanhosas",MPS:"Porto Santo",AOR:"Açores · Grupo Oriental",ACE:"Açores · Grupo Central",AOC:"Açores · Grupo Ocidental"},zs=[[0,"Nunca"],[1,"1 minuto"],[2,"2 minutos"],[5,"5 minutos"],[10,"10 minutos"],[30,"30 minutos"]],Ss={auto:"Automático (dia 50%, noite 12%)",low:"Sempre baixo (12%)",off:"Não mexer"};var Ps=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,_=(e,t,a,i)=>{for(var s=i>1?void 0:i?Es(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&Ps(t,a,s),s};const Os=[{id:"aparencia",name:"Aparência",icon:Ua},{id:"divisoes",name:"Divisões",icon:gi},{id:"entidades",name:"Entidades",icon:Ea},{id:"ambiente",name:"Face ambiente",icon:vi},{id:"casa",name:"Casa",icon:Ta},{id:"ecras",name:"Ecrãs e painéis",icon:hi},{id:"sistema",name:"Sistema",icon:Ve}],Ts=["vidro","bento","moldura","editorial","instrumento","orbita","carteira","lente"],Rs={bento:"pílulas no topo",orbita:"uma roda que abre do botão em baixo",carteira:"separadores à direita, como cartões numa carteira",moldura:"deslizar, com pontos no canto",editorial:"índice em palavras",instrumento:"banco de teclas"},yt=1334,Nt=800,E=e=>v`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`;let C=class extends Q{constructor(){super(...arguments),this.entities={},this.dashboards=[],this.dashboardId="",this.version="",this.start="aparencia",this.code="",this.section="aparencia",this.screens=[],this.pending=[],this.screenName="",this.message=null,this.scale=.4,this.pvView="home",this.original={},this.query="",this.pinSet=null,this.newPin="",this.diagnostics=!1,this.iconFor=null}connectedCallback(){super.connectedCallback(),this.section=this.start,this.loadScreens(),this.ws({type:"pine3_home/pin/status"}).then(e=>this.pinSet=e.set).catch(()=>{}),this.timer=window.setInterval(()=>this.loadPending(),4e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.resize?.disconnect(),this.thumbResize?.disconnect()}updated(e){const t=this.renderRoot.querySelector(".pv");t&&!this.resize&&(this.resize=new ResizeObserver(()=>this.scale=t.clientWidth/yt),this.resize.observe(t)),!t&&this.resize&&(this.resize.disconnect(),this.resize=void 0);const a=this.renderRoot.querySelector(".styles"),i=a?.querySelector(".thumb-live");a&&i&&(!this.thumbResize||this.thumbGrid!==a)&&(this.thumbResize?.disconnect(),this.thumbGrid=a,this.thumbResize=new ResizeObserver(()=>a.style.setProperty("--ts",String(i.clientWidth/yt))),this.thumbResize.observe(i)),e.has("start")&&(this.section=this.start)}get dash(){return this.dashboards.find(e=>e.id===this.dashboardId)??this.dashboards[0]}ws(e){return this.conn.sendMessagePromise(e)}async run(e,t){this.message=null;try{await e(),t&&(this.message={ok:!0,text:t})}catch(a){this.message={ok:!1,text:a.message??String(a)}}}async loadScreens(){try{this.screens=(await this.ws({type:"pine3_home/screens"})).screens,await this.loadPending()}catch{}}async loadPending(){if(this.section==="ecras")try{this.pending=(await this.ws({type:"pine3_home/screens/pending"})).pending}catch{}}save(e){const t=this.dash;this.original[t.id]||(this.original={...this.original,[t.id]:{...t}});const a={...t,...e};return this.dashboards=this.dashboards.map(i=>i.id===t.id?a:i),this.emit("dashboards",this.dashboards),this.run(async()=>{const i=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:t.id,name:a.name,style:a.style,...e}});this.dashboards=i.dashboards,this.emit("dashboards",i.dashboards)})}emit(e,t){this.dispatchEvent(new CustomEvent(`pine3-${e}`,{detail:t,bubbles:!0,composed:!0}))}close(){this.emit("settings-close",null)}render(){return this.dash?c`<div class="wrap">
      <nav class="side" aria-label="Definições">
        <div class="top">
          <button class="x" aria-label="Fechar as definições" @click=${()=>this.close()}>${E(Me)}</button>
          <b>Definições</b>
        </div>
        ${Os.map(e=>c`<button class=${p({item:!0,on:e.id===this.section})} @click=${()=>{this.section=e.id,this.message=null,this.loadPending()}}>
          <i>${E(e.icon)}</i>${e.name}</button>`)}
        ${Object.keys(this.original).length?c`<button class="undo" @click=${()=>this.undo()}>Desfazer alterações</button>`:l}
        <button class="done" @click=${()=>this.close()}>Concluído</button>
      </nav>
      <main class="content">
        ${this.message?c`<p class=${p({msg:!0,bad:!this.message.ok})} role="status">${this.message.text}</p>`:l}
        ${this.section==="aparencia"?this.renderAppearance():l}
        ${this.section==="divisoes"?this.renderRooms():l}
        ${this.section==="entidades"?this.renderEntities():l}
        ${this.section==="ambiente"?this.renderAmbient():l}
        ${this.section==="casa"?this.renderHouse():l}
        ${this.section==="ecras"?this.renderScreens():l}
        ${this.section==="sistema"?this.renderSystem():l}
      </main>
    </div>`:l}dashPicker(){return this.dashboards.length<2?l:c`<div class="dpick">
      <span>A editar o painel</span>
      ${this.dashboards.map(e=>c`<button class=${p({chip:!0,on:e.id===this.dash.id})} @click=${()=>this.emit("dashboard-select",e.id)}>${e.name}</button>`)}
    </div>`}renderAppearance(){const e=this.dash,t=$e(e.style),a=e.style==="vidro";return c`<section class="card">
        <h2>Aparência</h2>
        <p class="muted">O estilo, o tema e a navegação do painel <b>${e.name}</b>. Vês o resultado já aqui; fica guardado no Home Assistant para todos os ecrãs que mostram este painel.</p>
        ${this.dashPicker()}
        <div class="pv" style=${`height:${Math.round(Nt*this.scale)}px`} aria-label="Pré-visualização">
          <div class="pvin" style=${`transform:scale(${this.scale})`}>
            ${re`<${t} .home=${this.home} .entities=${this.entities} .dashboard=${e} .conn=${this.conn} .startView=${this.pvView}></${t}>`}
          </div>
        </div>
        <div class="pvviews" aria-label="Vista na pré-visualização">
          ${this.previewViews().map(([i,s])=>c`<button class=${p({chip:!0,on:i===this.pvView})} @click=${()=>this.pvView=i}>${s}</button>`)}
        </div>
      </section>
      <section class="card">
        <h3>Estilo</h3>
        <div class="styles">${Ts.map(i=>{const s=Vs.includes(i);return c`<button class=${p({sty:!0,on:i===e.style})} ?disabled=${!s} aria-pressed=${i===e.style}
            @click=${()=>this.save({style:i})}>
            ${s?this.thumb(i):c`<i style=${`background:${zt[i]}`}></i>`}
            <span>${St[i]}${s?"":c`<small>em breve</small>`}</span></button>`})}</div>
      </section>
      <section class="card">
        <h3>Tema</h3>
        <p class="muted">${a?"Claro, escuro, ou escuro ao pôr do sol.":"Só no Vidro: os outros estilos têm a sua própria paleta."}</p>
        <div class="seg">${Object.entries(Hs).map(([i,s])=>c`<button class=${p({on:i===e.theme})} ?disabled=${!a} @click=${()=>this.save({theme:i})}>${s}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Navegação</h3>
        <p class="muted">${a?"A dock do Vidro, à esquerda ou em baixo.":`Este estilo navega com ${Rs[e.style]??"a sua própria navegação"}.`}</p>
        <div class="seg">${[["left","Dock à esquerda"],["bottom","Dock em baixo"]].map(([i,s])=>c`<button class=${p({on:i===e.dock})} ?disabled=${!a} @click=${()=>this.save({dock:i})}>${s}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Editar a grelha nos ecrãs</h3>
        <div class="row">
          <span>Os tablets que mostram este painel podem mudar a ordem, o tamanho e os cartões de cada vista (o lápis).</span>
          <button class="sw" role="switch" aria-checked=${e.screen_edit!==!1} aria-label="Editar a grelha nos ecrãs"
            @click=${()=>this.save({screen_edit:e.screen_edit===!1})}></button>
        </div>
      </section>`}renderAmbient(){const e=this.dash;return c`<section class="card">
        <h2>Face ambiente</h2>
        <p class="muted">Um relógio calmo com o tempo e a casa numa linha, depois de alguns minutos sem tocar no ecrã. O primeiro toque só acorda.</p>
        ${this.dashPicker()}
        <h3>Aparece depois de</h3>
        <div class="seg">${zs.map(([t,a])=>c`<button class=${p({on:t===(e.ambient_after??2)})} @click=${()=>this.save({ambient_after:t})}>${a}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Brilho na face ambiente</h3>
        <p class="muted">Só nos tablets com a app Pine3 Wallpanel. Fora da face ambiente, o brilho é o do sistema.</p>
        <div class="seg">${Object.entries(Ss).map(([t,a])=>c`<button class=${p({on:t===(e.ambient_brightness??"auto")})} @click=${()=>this.save({ambient_brightness:t})}>${a}</button>`)}</div>
      </section>`}renderHouse(){const e=this.home.settings?.ipma_area??"";return c`<section class="card">
      <h2>Casa</h2>
      <p class="muted">O que é da casa e vale para todos os painéis.</p>
      <h3>Avisos do IPMA</h3>
      <p class="muted">Os avisos da tua área aparecem no cartão do tempo, na face ambiente e no topo de cada estilo.</p>
      <select class="sel" aria-label="Área dos avisos do IPMA" @change=${t=>{const a=t.target.value;this.run(()=>this.ws({type:"pine3_home/home/settings",ipma_area:a||null}),a?`Avisos do IPMA: ${we[a]}.`:"Avisos do IPMA desligados.")}}>
        <option value="" ?selected=${!e}>Sem avisos</option>
        ${Object.entries(we).map(([t,a])=>c`<option value=${t} ?selected=${t===e}>${a}</option>`)}
      </select>
    </section>`}renderScreens(){const e=`${location.origin}/pine3/ecra`;return c`<section class="card">
        <h2>Emparelhar um ecrã</h2>
        <p class="muted">No tablet, abre <b>${e}</b>. Aparece um código de 6 algarismos: escreve-o aqui, ou lê o QR com o telemóvel.</p>
        <div class="pair">
          <input class="code" inputmode="numeric" maxlength="6" placeholder="000000" aria-label="Código do ecrã" .value=${this.code}
            @input=${t=>this.code=t.target.value.replace(/\D/g,"").slice(0,6)} />
          <input class="txt" maxlength="40" placeholder="Nome, p.ex. Cozinha" aria-label="Nome do ecrã" .value=${this.screenName}
            @input=${t=>this.screenName=t.target.value} />
          <button class="pri" ?disabled=${this.code.length!==6} @click=${()=>this.approve()}>Emparelhar com ${this.dash.name}</button>
        </div>
        ${this.pending.length?c`<p class="muted">À espera: ${this.pending.map(t=>c`<button class="chip" @click=${()=>this.code=t.code}>${t.code}</button>`)}</p>`:l}
      </section>
      <section class="card">
        <h3>Ecrãs</h3>
        ${this.screens.length?c`<div class="list">${this.screens.map(t=>c`<div class="row">
              <i class="thumb" style=${`background:${zt[this.dashboards.find(a=>a.id===t.dashboard)?.style??"vidro"]}`}></i>
              <span class="grow"><input class="txt inline" .value=${t.name} aria-label="Nome do ecrã" @change=${a=>this.updateScreen(t,{name:a.target.value.trim()||t.name})} />
                <small>${t.active===!1?"token revogado":t.last_used?`visto ${new Date(t.last_used).toLocaleString("pt-PT")}`:"ainda não ligou"}</small></span>
              <select class="sel" aria-label=${`Painel de ${t.name}`} @change=${a=>this.updateScreen(t,{dashboard:a.target.value})}>
                ${this.dashboards.map(a=>c`<option value=${a.id} ?selected=${a.id===t.dashboard}>${a.name} · ${St[a.style]}</option>`)}
              </select>
              <button class="danger" @click=${()=>this.removeScreen(t)}>Remover</button>
            </div>`)}</div>`:c`<p class="muted">Ainda não há ecrãs emparelhados.</p>`}
      </section>
      <section class="card">
        <h3>Painéis</h3>
        <p class="muted">Cada painel tem o seu estilo e a sua disposição. Cada ecrã mostra um painel.</p>
        <div class="list">${this.dashboards.map(t=>c`<div class="row">
          <i class="thumb" style=${`background:${zt[t.style]}`}></i>
          <span class="grow"><input class="txt inline" .value=${t.name} aria-label="Nome do painel" @change=${a=>this.renameDashboard(t,a.target.value.trim())} />
            <small>${St[t.style]} · ${this.screens.filter(a=>a.dashboard===t.id).length} ecrã(s)</small></span>
          ${t.id===this.dash.id?c`<span class="badge">a ver</span>`:c`<button @click=${()=>this.emit("dashboard-select",t.id)}>Ver e editar</button>`}
          ${this.dashboards.length>1?c`<button class="danger" @click=${()=>this.removeDashboard(t)}>Remover</button>`:l}
        </div>`)}</div>
        <button class="add" @click=${()=>this.addDashboard()}>${E(Se)} Novo painel</button>
      </section>`}renderSystem(){const e=Object.keys(this.dash.layouts??{});return c`<section class="card">
      <h2>Sistema</h2>
      <div class="row"><span class="grow">Versão<small>Pine3 Home ${this.version}</small></span></div>
      <div class="row"><span class="grow">Disposição de ${this.dash.name}<small>${e.length?`arrumada à mão em ${e.length} vista(s)`:"automática"}</small></span>
        ${e.length?c`<button @click=${()=>this.resetLayouts()}>Repor a automática</button>`:l}</div>
      <div class="row"><span class="grow">Página dos ecrãs de parede<small>${location.origin}/pine3/ecra</small></span></div>
    </section>
    <section class="card">
      <h3>PIN das definições nos ecrãs</h3>
      <p class="muted">Nos ecrãs de parede, o ⚙ pede este PIN antes de abrir as definições. Depois de o escreverem, ficam com acesso durante 10 minutos. Cinco tentativas erradas seguidas bloqueiam o PIN durante 5 minutos.</p>
      <div class="row">
        <span class="grow">${this.pinSet?"PIN definido":"Sem PIN: os ecrãs não abrem as definições"}<small>${this.pinSet?"Escreve outro para o mudar.":"De 4 a 8 algarismos."}</small></span>
        <input class="code" type="password" inputmode="numeric" maxlength="8" placeholder="••••" aria-label="Novo PIN" .value=${this.newPin}
          @input=${t=>this.newPin=t.target.value.replace(/\D/g,"").slice(0,8)} />
        <button class="pri" ?disabled=${this.newPin.length<4} @click=${()=>this.setPin(this.newPin)}>${this.pinSet?"Mudar o PIN":"Guardar o PIN"}</button>
        ${this.pinSet?c`<button class="danger" @click=${()=>this.setPin(null)}>Remover</button>`:l}
      </div>
    </section>`}get hs(){return this.home.settings??{}}saveHouse(e){return this.home={...this.home,settings:{...this.hs,...e}},this.run(()=>this.ws({type:"pine3_home/home/settings",...e}))}renderRooms(){const e=this.home.rooms,t=this.hs.hidden_rooms??[],a=(i,s)=>{const r=i+s;if(r<0||r>=e.length)return;const o=e.map(n=>n.id);[o[i],o[r]]=[o[r],o[i]],this.home={...this.home,rooms:o.map(n=>e.find(d=>d.id===n))},this.saveHouse({room_order:o})};return c`<section class="card">
      <h2>Divisões</h2>
      <p class="muted">A ordem, o ícone e as divisões que aparecem. Vale para a dock, a Casa e todos os estilos e painéis. As divisões vêm das áreas do Home Assistant.</p>
      <div class="list">${e.map((i,s)=>{const r=!t.includes(i.id);return c`<div class=${p({row:!0,off:!r})}>
          <span class="mv">
            <button class="ib" aria-label=${`Subir ${i.name}`} ?disabled=${s===0} @click=${()=>a(s,-1)}>${E(La)}</button>
            <button class="ib" aria-label=${`Descer ${i.name}`} ?disabled=${s===e.length-1} @click=${()=>a(s,1)}>${E(Ca)}</button>
          </span>
          <button class="ricon" aria-label=${`Ícone de ${i.name}`} aria-expanded=${this.iconFor===i.id} @click=${()=>this.iconFor=this.iconFor===i.id?null:i.id}>${E(Ct(i.icon))}</button>
          <span class="grow">${i.name}<small>${i.devices.filter(o=>!o.hidden).length} de ${i.devices.length} dispositivos${i.floor?` · ${i.floor}`:""}</small></span>
          <button class="sw" role="switch" aria-checked=${r} aria-label=${`Mostrar ${i.name}`}
            @click=${()=>void this.saveHouse({hidden_rooms:r?[...t,i.id]:t.filter(o=>o!==i.id)})}></button>
          ${this.iconFor===i.id?c`<div class="icons">${_i.map(o=>c`<button class=${p({ib:!0,on:o===i.icon})} aria-label=${o.replace("mdi:","")}
                @click=${()=>{this.iconFor=null,this.saveHouse({room_icons:{...this.hs.room_icons??{},[i.id]:o}})}}>${E(Ct(o))}</button>`)}</div>`:l}
        </div>`})}</div>
    </section>`}visible(e){return e.primary?!(this.hs.hidden??[]).includes(e.id):(this.hs.shown??[]).includes(e.id)}toggleEntity(e){const t=this.hs.hidden??[],a=this.hs.shown??[];return e.primary?this.saveHouse({hidden:t.includes(e.id)?t.filter(i=>i!==e.id):[...t,e.id]}):this.saveHouse({shown:a.includes(e.id)?a.filter(i=>i!==e.id):[...a,e.id]})}renderEntities(){const e=this.query.trim().toLowerCase(),t=i=>(this.diagnostics||!i.category)&&(!e||`${i.name} ${i.id}`.toLowerCase().includes(e)),a=this.home.rooms.map(i=>({r:i,ents:(i.entities??[]).filter(t).sort((s,r)=>Number(r.primary)-Number(s.primary))})).filter(i=>i.ents.length);return c`<section class="card">
        <h2>Entidades</h2>
        <p class="muted">O que aparece nos painéis. Cada dispositivo tem um cartão com a sua entidade <b>principal</b>; as <b>secundárias</b> (o consumo de uma tomada, o interruptor de uma TV, um sensor de diagnóstico) podem ter um cartão próprio.</p>
        <label class="search">${E(ja)}<input type="search" placeholder="Procurar por nome ou entidade" aria-label="Procurar entidade"
          .value=${this.query} @input=${i=>this.query=i.target.value} /></label>
        <div class="row"><span>Mostrar entidades de diagnóstico e configuração</span>
          <button class="sw" role="switch" aria-checked=${this.diagnostics} aria-label="Mostrar entidades de diagnóstico" @click=${()=>this.diagnostics=!this.diagnostics}></button></div>
      </section>
      ${a.length?a.map(({r:i,ents:s})=>this.entityRoom(i,s)):c`<section class="card"><p class="muted">Nenhuma entidade com "${this.query}".</p></section>`}`}entityRoom(e,t){const a=(e.entities??[]).filter(s=>this.diagnostics||!s.category),i=a.filter(s=>this.visible(s)).length;return c`<section class="card">
      <h3 class="rh">${E(Ct(e.icon))} ${e.name} <small>${i} de ${a.length} visíveis</small></h3>
      <div class="list">${t.map(s=>{const r=this.visible(s);return c`<div class=${p({row:!0,off:!r})}>
          <span class="grow">${this.hs.names?.[s.id]??s.name}<small class="mono">${s.id}</small></span>
          ${this.typePicker(e,s)}
          <span class=${p({badge:!0,sec:!s.primary})}>${s.primary?"Principal":s.category?"Diagnóstico":"Secundária"}</span>
          <button class="sw" role="switch" aria-checked=${r} aria-label=${`Mostrar ${s.name}`} @click=${()=>this.toggleEntity(s)}></button>
        </div>`})}</div>
    </section>`}typePicker(e,t){const a=Te[t.id.split(".")[0]]??[];if(a.length<2)return l;const i=e.devices.find(o=>o.id===t.id),s=Pt(t.id,this.entities[t.id],{name:i?.name??t.name,model:i?.model,manufacturer:i?.manufacturer}),r=this.hs.types?.[t.id]??s;return c`<select class="sel tsel" aria-label=${`Tipo de ${t.name}`} @change=${o=>{const n=o.target.value,d={...this.hs.types??{}};n===s?delete d[t.id]:d[t.id]=n,this.saveHouse({types:d})}}>${a.map(o=>c`<option value=${o} ?selected=${o===r}>${J[o].name}${o===s?" (automático)":""}</option>`)}</select>`}previewViews(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden)).map(t=>[t.id,t.name]);return[["home","Casa"],...e,["@clima","Clima"],["@seguranca","Segurança"],["@cenas","Cenas"]]}thumb(e){const t=$e(e),a={...this.dash,style:e};return c`<i class="thumb-live"><span class="tin">
      ${re`<${t} preview .home=${this.home} .entities=${this.entities} .dashboard=${a} .conn=${this.conn}></${t}>`}
    </span></i>`}undo(){const e=this.original;return this.run(async()=>{let t=this.dashboards;for(const a of Object.values(e))t=(await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:a.id,name:a.name,style:a.style,dock:a.dock,theme:a.theme,screen_edit:a.screen_edit!==!1,...a.ambient_after!=null?{ambient_after:a.ambient_after}:{},...a.ambient_brightness?{ambient_brightness:a.ambient_brightness}:{}}})).dashboards;this.dashboards=t,this.original={},this.emit("dashboards",t)},"Alterações desfeitas.")}setPin(e){return this.run(async()=>{const t=await this.ws({type:"pine3_home/pin/set",pin:e});this.pinSet=t.set,this.newPin=""},e?"PIN guardado.":"PIN removido: os ecrãs deixam de abrir as definições.")}approve(){const e=this.screenName.trim()||"Ecrã";return this.run(async()=>{await this.ws({type:"pine3_home/screens/approve",code:this.code,name:e,dashboard:this.dash.id}),this.code="",this.screenName="",location.search.includes("code=")&&history.replaceState(null,"",location.pathname),await this.loadScreens()},`${e} emparelhado. O ecrã liga-se dentro de segundos.`)}updateScreen(e,t){return this.run(async()=>{await this.ws({type:"pine3_home/screens/update",screen_id:e.id,...t}),await this.loadScreens()})}removeScreen(e){if(confirm(`Remover ${e.name}? O ecrã volta a pedir um código.`))return this.run(async()=>{await this.ws({type:"pine3_home/screens/remove",screen_id:e.id}),await this.loadScreens()},`${e.name} removido.`)}renameDashboard(e,t){if(!(!t||t===e.name))return this.run(async()=>{const a=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:e.id,name:t,style:e.style}});this.dashboards=a.dashboards,this.emit("dashboards",a.dashboards)})}addDashboard(){let e=this.dashboards.length+1;for(;this.dashboards.some(a=>a.id===`painel-${e}`);)e++;const t={id:`painel-${e}`,name:`Painel ${e}`,style:"vidro"};return this.run(async()=>{const a=await this.ws({type:"pine3_home/dashboards/save",dashboard:t});this.dashboards=a.dashboards,this.emit("dashboards",a.dashboards),this.emit("dashboard-select",t.id),this.section="aparencia"},`${t.name} criado: escolhe o estilo.`)}removeDashboard(e){if(confirm(`Remover o painel ${e.name}? Os ecrãs que o mostram passam para o primeiro painel.`))return this.run(async()=>{const t=await this.ws({type:"pine3_home/dashboards/remove",dashboard_id:e.id});this.dashboards=t.dashboards,this.emit("dashboards",t.dashboards),e.id===this.dash.id&&this.emit("dashboard-select",t.dashboards[0].id),await this.loadScreens()},`${e.name} removido.`)}resetLayouts(){if(confirm(`Repor a disposição automática de todas as vistas de ${this.dash.name}?`))return this.run(async()=>{for(const t of Object.keys(this.dash.layouts??{}))await this.ws({type:"pine3_home/dashboards/layout",dashboard_id:this.dash.id,view:t,layout:null});const e=await this.ws({type:"pine3_home/dashboards"});this.dashboards=e.dashboards,this.emit("dashboards",e.dashboards)},"Disposição reposta.")}};C.styles=N`
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
      width: ${yt}px;
      height: ${Nt}px;
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
      width: ${yt}px;
      height: ${Nt}px;
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
  `;_([L({attribute:!1})],C.prototype,"conn",2);_([L({attribute:!1})],C.prototype,"home",2);_([L({attribute:!1})],C.prototype,"entities",2);_([L({attribute:!1})],C.prototype,"dashboards",2);_([L()],C.prototype,"dashboardId",2);_([L()],C.prototype,"version",2);_([L()],C.prototype,"start",2);_([L()],C.prototype,"code",2);_([y()],C.prototype,"section",2);_([y()],C.prototype,"screens",2);_([y()],C.prototype,"pending",2);_([y()],C.prototype,"screenName",2);_([y()],C.prototype,"message",2);_([y()],C.prototype,"scale",2);_([y()],C.prototype,"pvView",2);_([y()],C.prototype,"original",2);_([y()],C.prototype,"query",2);_([y()],C.prototype,"pinSet",2);_([y()],C.prototype,"newPin",2);_([y()],C.prototype,"diagnostics",2);_([y()],C.prototype,"iconFor",2);C=_([D("pine3-settings")],C);export{l as A,R as E,Xs as S,Q as a,c as b,Ws as c,Zs as d,Fs as e,Gs as f,Us as g,Ys as h,N as i,Zt as j,Ee as k,Wt as l,Bs as m,L as n,qs as p,y as r,$e as s,D as t,re as u};
