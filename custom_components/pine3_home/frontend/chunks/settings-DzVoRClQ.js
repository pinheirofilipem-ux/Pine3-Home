/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=globalThis,aa=yt.ShadowRoot&&(yt.ShadyCSS===void 0||yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ia=Symbol(),wa=new WeakMap;let Ja=class{constructor(t,a,i){if(this._$cssResult$=!0,i!==ia)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=a}get styleSheet(){let t=this.o;const a=this.t;if(aa&&t===void 0){const i=a!==void 0&&a.length===1;i&&(t=wa.get(a)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&wa.set(a,t))}return t}toString(){return this.cssText}};const Gt=e=>new Ja(typeof e=="string"?e:e+"",void 0,ia),_e=(e,...t)=>{const a=e.length===1?e[0]:t.reduce((i,o,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Ja(a,e,ia)},Qi=(e,t)=>{if(aa)e.adoptedStyleSheets=t.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(const a of t){const i=document.createElement("style"),o=yt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=a.cssText,e.appendChild(i)}},ya=aa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let a="";for(const i of t.cssRules)a+=i.cssText;return Gt(a)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:eo,defineProperty:to,getOwnPropertyDescriptor:ao,getOwnPropertyNames:io,getOwnPropertySymbols:oo,getPrototypeOf:so}=Object,Re=globalThis,xa=Re.trustedTypes,ro=xa?xa.emptyScript:"",no=Re.reactiveElementPolyfillSupport,ct=(e,t)=>e,Ct={toAttribute(e,t){switch(t){case Boolean:e=e?ro:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=e!==null;break;case Number:a=e===null?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch{a=null}}return a}},oa=(e,t)=>!eo(e,t),ka={attribute:!0,type:String,converter:Ct,reflect:!1,useDefault:!1,hasChanged:oa};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Re.litPropertyMetadata??(Re.litPropertyMetadata=new WeakMap);let tt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,a=ka){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(t,a),!a.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,a);o!==void 0&&to(this.prototype,t,o)}}static getPropertyDescriptor(t,a,i){const{get:o,set:s}=ao(this.prototype,t)??{get(){return this[a]},set(r){this[a]=r}};return{get:o,set(r){const n=o?.call(this);s?.call(this,r),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ka}static _$Ei(){if(this.hasOwnProperty(ct("elementProperties")))return;const t=so(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ct("properties"))){const a=this.properties,i=[...io(a),...oo(a)];for(const o of i)this.createProperty(o,a[o])}const t=this[Symbol.metadata];if(t!==null){const a=litPropertyMetadata.get(t);if(a!==void 0)for(const[i,o]of a)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[a,i]of this.elementProperties){const o=this._$Eu(a,i);o!==void 0&&this._$Eh.set(o,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const a=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)a.unshift(ya(o))}else t!==void 0&&a.push(ya(t));return a}static _$Eu(t,a){const i=a.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,a=this.constructor.elementProperties;for(const i of a.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qi(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,a,i){this._$AK(t,i)}_$ET(t,a){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:Ct).toAttribute(a,i.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,a){const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ct;this._$Em=o;const n=r.fromAttribute(a,s.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(t,a,i,o=!1,s){if(t!==void 0){const r=this.constructor;if(o===!1&&(s=this[t]),i??(i=r.getPropertyOptions(t)),!((i.hasChanged??oa)(s,a)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,a,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,a,{useDefault:i,reflect:o,wrapped:s},r){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,r??a??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(a=void 0),this._$AL.set(t,a)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i){const{wrapped:r}=s,n=this[o];r!==!0||this._$AL.has(o)||n===void 0||this.C(o,void 0,s,n)}}let t=!1;const a=this._$AL;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(a)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(a)}willUpdate(t){}_$AE(t){this._$EO?.forEach(a=>a.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(a=>this._$ET(a,this[a]))),this._$EM()}updated(t){}firstUpdated(t){}};tt.elementStyles=[],tt.shadowRootOptions={mode:"open"},tt[ct("elementProperties")]=new Map,tt[ct("finalized")]=new Map,no?.({ReactiveElement:tt}),(Re.reactiveElementVersions??(Re.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=globalThis,Ca=e=>e,_t=dt.trustedTypes,_a=_t?_t.createPolicy("lit-html",{createHTML:e=>e}):void 0,Qa="$lit$",Ne=`lit$${Math.random().toFixed(9).slice(2)}$`,ei="?"+Ne,lo=`<${ei}>`,Xe=document,mt=()=>Xe.createComment(""),ft=e=>e===null||typeof e!="object"&&typeof e!="function",sa=Array.isArray,co=e=>sa(e)||typeof e?.[Symbol.iterator]=="function",Ot=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ma=/-->/g,La=/>/g,We=RegExp(`>|${Ot}(?:([^\\s"'>=/]+)(${Ot}*=${Ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Aa=/'/g,Ha=/"/g,ti=/^(?:script|style|textarea|title)$/i,ai=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),c=ai(1),W=ai(2),Ie=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Va=new WeakMap,Ge=Xe.createTreeWalker(Xe,129);function ii(e,t){if(!sa(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return _a!==void 0?_a.createHTML(t):t}const uo=(e,t)=>{const a=e.length-1,i=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=lt;for(let n=0;n<a;n++){const u=e[n];let h,d,g=-1,z=0;for(;z<u.length&&(r.lastIndex=z,d=r.exec(u),d!==null);)z=r.lastIndex,r===lt?d[1]==="!--"?r=Ma:d[1]!==void 0?r=La:d[2]!==void 0?(ti.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=We):d[3]!==void 0&&(r=We):r===We?d[0]===">"?(r=o??lt,g=-1):d[1]===void 0?g=-2:(g=r.lastIndex-d[2].length,h=d[1],r=d[3]===void 0?We:d[3]==='"'?Ha:Aa):r===Ha||r===Aa?r=We:r===Ma||r===La?r=lt:(r=We,o=void 0);const C=r===We&&e[n+1].startsWith("/>")?" ":"";s+=r===lt?u+lo:g>=0?(i.push(h),u.slice(0,g)+Qa+u.slice(g)+Ne+C):u+Ne+(g===-2?n:C)}return[ii(e,s+(e[a]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class gt{constructor({strings:t,_$litType$:a},i){let o;this.parts=[];let s=0,r=0;const n=t.length-1,u=this.parts,[h,d]=uo(t,a);if(this.el=gt.createElement(h,i),Ge.currentNode=this.el.content,a===2||a===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(o=Ge.nextNode())!==null&&u.length<n;){if(o.nodeType===1){if(o.hasAttributes())for(const g of o.getAttributeNames())if(g.endsWith(Qa)){const z=d[r++],C=o.getAttribute(g).split(Ne),_=/([.?@])?(.*)/.exec(z);u.push({type:1,index:s,name:_[2],strings:C,ctor:_[1]==="."?po:_[1]==="?"?mo:_[1]==="@"?fo:St}),o.removeAttribute(g)}else g.startsWith(Ne)&&(u.push({type:6,index:s}),o.removeAttribute(g));if(ti.test(o.tagName)){const g=o.textContent.split(Ne),z=g.length-1;if(z>0){o.textContent=_t?_t.emptyScript:"";for(let C=0;C<z;C++)o.append(g[C],mt()),Ge.nextNode(),u.push({type:2,index:++s});o.append(g[z],mt())}}}else if(o.nodeType===8)if(o.data===ei)u.push({type:2,index:s});else{let g=-1;for(;(g=o.data.indexOf(Ne,g+1))!==-1;)u.push({type:7,index:s}),g+=Ne.length-1}s++}}static createElement(t,a){const i=Xe.createElement("template");return i.innerHTML=t,i}}function st(e,t,a=e,i){if(t===Ie)return t;let o=i!==void 0?a._$Co?.[i]:a._$Cl;const s=ft(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,a,i)),i!==void 0?(a._$Co??(a._$Co=[]))[i]=o:a._$Cl=o),o!==void 0&&(t=st(e,o._$AS(e,t.values),o,i)),t}class ho{constructor(t,a){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:a},parts:i}=this._$AD,o=(t?.creationScope??Xe).importNode(a,!0);Ge.currentNode=o;let s=Ge.nextNode(),r=0,n=0,u=i[0];for(;u!==void 0;){if(r===u.index){let h;u.type===2?h=new bt(s,s.nextSibling,this,t):u.type===1?h=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(h=new go(s,this,t)),this._$AV.push(h),u=i[++n]}r!==u?.index&&(s=Ge.nextNode(),r++)}return Ge.currentNode=Xe,o}p(t){let a=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,a),a+=i.strings.length-2):i._$AI(t[a])),a++}}class bt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,a,i,o){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=a,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&t?.nodeType===11&&(t=a.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,a=this){t=st(this,t,a),ft(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==Ie&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):co(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&ft(this._$AH)?this._$AA.nextSibling.data=t:this.T(Xe.createTextNode(t)),this._$AH=t}$(t){const{values:a,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=gt.createElement(ii(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(a);else{const s=new ho(o,this),r=s.u(this.options);s.p(a),this.T(r),this._$AH=s}}_$AC(t){let a=Va.get(t.strings);return a===void 0&&Va.set(t.strings,a=new gt(t)),a}k(t){sa(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let i,o=0;for(const s of t)o===a.length?a.push(i=new bt(this.O(mt()),this.O(mt()),this,this.options)):i=a[o],i._$AI(s),o++;o<a.length&&(this._$AR(i&&i._$AB.nextSibling,o),a.length=o)}_$AR(t=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);t!==this._$AB;){const i=Ca(t).nextSibling;Ca(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class St{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,a,i,o,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=a,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(t,a=this,i,o){const s=this.strings;let r=!1;if(s===void 0)t=st(this,t,a,0),r=!ft(t)||t!==this._$AH&&t!==Ie,r&&(this._$AH=t);else{const n=t;let u,h;for(t=s[0],u=0;u<s.length-1;u++)h=st(this,n[i+u],a,u),h===Ie&&(h=this._$AH[u]),r||(r=!ft(h)||h!==this._$AH[u]),h===m?t=m:t!==m&&(t+=(h??"")+s[u+1]),this._$AH[u]=h}r&&!o&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class po extends St{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}class mo extends St{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}}class fo extends St{constructor(t,a,i,o,s){super(t,a,i,o,s),this.type=5}_$AI(t,a=this){if((t=st(this,t,a,0)??m)===Ie)return;const i=this._$AH,o=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==m&&(i===m||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class go{constructor(t,a,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=a,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}}const vo=dt.litHtmlPolyfillSupport;vo?.(gt,bt),(dt.litHtmlVersions??(dt.litHtmlVersions=[])).push("3.3.3");const bo=(e,t,a)=>{const i=a?.renderBefore??t;let o=i._$litPart$;if(o===void 0){const s=a?.renderBefore??null;i._$litPart$=o=new bt(t.insertBefore(mt(),s),s,void 0,a??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=globalThis;let Ye=class extends tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var a;const t=super.createRenderRoot();return(a=this.renderOptions).renderBefore??(a.renderBefore=t.firstChild),t}update(t){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=bo(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ie}};Ye._$litElement$=!0,Ye.finalized=!0,ut.litElementHydrateSupport?.({LitElement:Ye});const $o=ut.litElementPolyfillSupport;$o?.({LitElement:Ye});(ut.litElementVersions??(ut.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wo={attribute:!0,type:String,converter:Ct,reflect:!1,hasChanged:oa},yo=(e=wo,t,a)=>{const{kind:i,metadata:o}=a;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(a.name,e),i==="accessor"){const{name:r}=a;return{set(n){const u=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,u,e,!0,n)},init(n){return n!==void 0&&this.C(r,void 0,e,n),n}}}if(i==="setter"){const{name:r}=a;return function(n){const u=this[r];t.call(this,n),this.requestUpdate(r,u,e,!0,n)}}throw Error("Unsupported decorator location: "+i)};function Q(e){return(t,a)=>typeof a=="object"?yo(e,t,a):((i,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,i),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(e){return Q({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oi=Symbol.for(""),xo=e=>{if(e?.r===oi)return e?._$litStatic$},ko=e=>({_$litStatic$:e,r:oi}),za=new Map,Co=e=>(t,...a)=>{const i=a.length;let o,s;const r=[],n=[];let u,h=0,d=!1;for(;h<i;){for(u=t[h];h<i&&(s=a[h],(o=xo(s))!==void 0);)u+=o+t[++h],d=!0;h!==i&&n.push(s),r.push(u),h++}if(h===i&&r.push(t[i]),d){const g=r.join("$$lit$$");(t=za.get(g))===void 0&&(r.raw=r,za.set(g,t=r)),a=n}return e(t,...a)},Sa=Co(c);var si="M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z",ri="M11,9A4,4 0 0,1 15,13A4,4 0 0,1 11,17A4,4 0 0,1 7,13A4,4 0 0,1 11,9M11,11A2,2 0 0,0 9,13A2,2 0 0,0 11,15A2,2 0 0,0 13,13A2,2 0 0,0 11,11M7,4H14A4,4 0 0,1 18,8V9H16V8A2,2 0 0,0 14,6H7A2,2 0 0,0 5,8V20H16V18H18V22H3V8A4,4 0 0,1 7,4M16,11C18.5,11 18.5,9 21,9V11C18.5,11 18.5,13 16,13V11M16,15C18.5,15 18.5,13 21,13V15C18.5,15 18.5,17 16,17V15Z",_o="M4,12H20V14H4V12M4,9H20V11H4V9M16,4L12,8L8,4H11V1H13V4H16M8,19L12,15L16,19H13V22H11V19H8Z",Mo="M13,9V15H16L12,19L8,15H11V9H8L12,5L16,9H13M4,2H20V4H4V2M4,20H20V22H4V20Z",Lo="M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z",Ao="M10 10V12H8V10H10M16 12V10H14V12H16M21 14V22H3V14H4V10C4 5.58 7.58 2 12 2S20 5.58 20 10V14H21M7 16H5V20H7V16M11 16H9V20H11V16M11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08M13 14H18V10C18 7.03 15.84 4.56 13 4.08V14M15 16H13V20H15V16M19 16H17V20H19V16Z",Ho="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z",Vo="M3,2H21A1,1 0 0,1 22,3V5A1,1 0 0,1 21,6H20V13A1,1 0 0,1 19,14H13V16.17C14.17,16.58 15,17.69 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.69 9.83,16.58 11,16.17V14H5A1,1 0 0,1 4,13V6H3A1,1 0 0,1 2,5V3A1,1 0 0,1 3,2M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z",zo="M20 19V3H4V19H2V21H22V19H20M16 9H18V11H16V9M14 11H6V9H14V11M18 7H16V5H18V7M14 5V7H6V5H14M6 19V13H14V14.82C13.55 15.14 13.25 15.66 13.25 16.25C13.25 17.22 14.03 18 15 18S16.75 17.22 16.75 16.25C16.75 15.66 16.45 15.13 16 14.82V13H18V19H6Z",So="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z",ni="M6.03 12.03L8.03 15.5L5.5 18.68L2 12.62L6.03 12.03M17 18V15.29C17.88 14.9 18.5 14.03 18.5 13C18.5 12.43 18.3 11.9 17.97 11.5L19.94 10.35C20.95 9.76 21.3 8.47 20.71 7.46L19.33 5.06C18.74 4.05 17.45 3.7 16.44 4.28L8.31 9C7.36 9.53 7.03 10.75 7.58 11.71L9.08 14.31C9.63 15.26 10.86 15.59 11.81 15.04L13.69 13.96C13.94 14.55 14.41 15.03 15 15.29V18C15 19.1 15.9 20 17 20H22V18H17Z",li="M8,9H11V4H13V9H16L20,17H4L8,9M14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18H14Z",ci="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",Po="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Eo="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",To="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",di="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",ra="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",ui="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z",Oo="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z",No="M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z",Do="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z",Ro="M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z",Io="M3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8V19H19V17H15V19H13V8H5V19H3V8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6M16 10.5V11H18V10.5C18 10.22 17.78 10 17.5 10H16.5C16.22 10 16 10.22 16 10.5M16 14.5V15H18V14.5C18 14.22 17.78 14 17.5 14H16.5C16.22 14 16 14.22 16 14.5Z",na="M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z",jo="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z",qo="M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z",Bo="M15.14,3C14.63,3 14.12,3.2 13.73,3.59L2.59,14.73C1.81,15.5 1.81,16.77 2.59,17.56L5.03,20H12.69L21.41,11.27C22.2,10.5 22.2,9.23 21.41,8.44L16.56,3.59C16.17,3.2 15.65,3 15.14,3M17,18L15,20H22V18",hi="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",pi="M15,2L17,9H7L9,2M11,10H13V20H16V22H8V20H11V10Z",mi="M10,5V10H9V5H5V13H9V12H10V17H9V14H5V19H12V17H13V19H19V17H21V21H3V3H21V15H19V10H13V15H12V9H19V5H10Z",Wo="M8.66,13.07C6.92,13.07 5.5,11.66 5.5,9.93C5.5,9.22 5.76,8.54 6.19,8C5.77,7.46 5.5,6.78 5.5,6.07C5.5,4.34 6.93,2.93 8.66,2.93L9.09,2.96C9.56,1.81 10.69,1 12,1C13.31,1 14.44,1.81 14.91,2.96L15.34,2.93C17.07,2.93 18.5,4.34 18.5,6.07C18.5,6.78 18.24,7.46 17.81,8C18.23,8.54 18.5,9.22 18.5,9.93C18.5,11.66 17.07,13.07 15.34,13.07L14.91,13.04C14.44,14.19 13.31,15 12,15C10.69,15 9.56,14.19 9.09,13.04L8.66,13.07M12,13C12.62,13 13.12,12.5 13.14,11.9L13.03,10.81C12.71,10.93 12.36,11 12,11C11.64,11 11.3,10.93 11,10.81L10.86,11.9C10.88,12.5 11.38,13 12,13M15.34,11.07C15.97,11.07 16.5,10.56 16.5,9.92C16.5,9.5 16.23,9.08 15.83,8.89L14.95,8.47C14.83,9.21 14.44,9.85 13.89,10.3L14.7,10.87C14.88,11 15.1,11.07 15.34,11.07M14.69,5.13L13.87,5.69C14.43,6.14 14.82,6.78 14.94,7.5L15.82,7.1C16.23,6.9 16.5,6.5 16.5,6.07C16.5,5.44 15.97,4.93 15.34,4.93C15.11,4.93 14.89,5 14.69,5.13M12,3C11.38,3 10.88,3.5 10.86,4.1L11,5.19C11.3,5.07 11.64,5 12,5C12.36,5 12.71,5.07 13.03,5.19L13.14,4.1C13.12,3.5 12.62,3 12,3M8.66,4.93C8.03,4.93 7.5,5.44 7.5,6.07C7.5,6.5 7.77,6.9 8.17,7.1L9.05,7.5C9.17,6.78 9.56,6.14 10.11,5.69L9.3,5.13C9.12,5 8.9,4.93 8.66,4.93M8.17,8.9C7.77,9.1 7.5,9.5 7.5,9.92C7.5,10.55 8.03,11.06 8.66,11.06C8.89,11.06 9.11,11 9.31,10.86L10.12,10.31C9.56,9.86 9.17,9.22 9.05,8.5L8.17,8.9M12,22A9,9 0 0,1 3,13A9,9 0 0,1 12,22A9,9 0 0,1 21,13A9,9 0 0,1 12,22M14.44,19.56C16.34,18.85 17.85,17.34 18.56,15.44C16.66,16.14 15.15,17.66 14.44,19.56M5.44,15.44C6.15,17.34 7.66,18.85 9.56,19.56C8.86,17.66 7.34,16.15 5.44,15.44Z",Fo="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z",Zo="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",fi="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22",Uo="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z",gi="M2.95 3L2 6.91L19.34 11.25L20.29 7.34L2.95 3M6.09 6.89L4.16 6.41L4.64 4.46L6.57 4.94L6.09 6.89M9.94 7.86L8 7.38L8.5 5.42L10.42 5.91L9.94 7.86M13.8 8.82L11.87 8.34L12.35 6.39L14.27 6.87L13.8 8.82M17.65 9.79L15.72 9.31L16.2 7.35L18.13 7.84L17.65 9.79M4.66 12.75L3.71 16.66L21.05 21L22 17.1L4.66 12.75M7.8 16.65L5.88 16.16L6.35 14.21L8.28 14.69L7.8 16.65M11.65 17.61L9.73 17.13L10.2 15.18L12.13 15.66L11.65 17.61M15.5 18.58L13.58 18.09L14.06 16.14L16 16.62L15.5 18.58M19.36 19.54L17.43 19.06L17.91 17.11L19.84 17.59L19.36 19.54M6.25 12.11L11 10.2L17.75 11.89L13 13.8L6.25 12.11Z",vi="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z",Go="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",la="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",Yo="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",Xo="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",Ko="M15 17H18V14H20V17H23V19H20V22H18V19H15V17M9 6.5C10.4 6.5 11.5 7.6 11.5 9S10.4 11.5 9 11.5 6.5 10.4 6.5 9 7.6 6.5 9 6.5M9 2C12.9 2 16 5.1 16 9C16 14.2 9 22 9 22S2 14.2 2 9C2 5.1 5.1 2 9 2M9 4C6.2 4 4 6.2 4 9C4 10 4 12 9 18.7C14 12 14 10 14 9C14 6.2 11.8 4 9 4Z",yn="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",bi="M19,13H5V11H19V13Z",$i="M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",Jo="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z",Qo="M14,19H18V5H14M6,19H10V5H6V19Z",es="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z",ts="M8,5.14V19.14L19,12.14L8,5.14Z",ca="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",as="M2,15C3.67,14.25 5.33,13.5 7,13.17V5A3,3 0 0,1 10,2C11.31,2 12.42,2.83 12.83,4H10A1,1 0 0,0 9,5V6H14V5A3,3 0 0,1 17,2C18.31,2 19.42,2.83 19.83,4H17A1,1 0 0,0 16,5V14.94C18,14.62 20,13 22,13V15C19.78,15 17.56,17 15.33,17C13.11,17 10.89,15 8.67,15C6.44,15 4.22,16 2,17V15M14,8H9V10H14V8M14,12H9V13C10.67,13.16 12.33,14.31 14,14.79V12M2,19C4.22,18 6.44,17 8.67,17C10.89,17 13.11,19 15.33,19C17.56,19 19.78,17 22,17V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V19Z",is="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",wi="M7.5,10.5A1.5,1.5 0 0,1 9,12A1.5,1.5 0 0,1 7.5,13.5C6.66,13.5 6,12.83 6,12A1.5,1.5 0 0,1 7.5,10.5M16.5,10.5A1.5,1.5 0 0,1 18,12A1.5,1.5 0 0,1 16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5M4.22,2H19.78C21,2 22,3 22,4.22V19.78A2.22,2.22 0 0,1 19.78,22H4.22C3,22 2,21 2,19.78V4.22A2.22,2.22 0 0,1 4.22,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",os="M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z",ss="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z",yi="M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6A6,6 0 0,1 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12A6,6 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z",rs="M13,4.07V1L8.45,5.55L13,10V6.09C15.84,6.57 18,9.03 18,12C18,14.97 15.84,17.43 13,17.91V19.93C16.95,19.44 20,16.08 20,12C20,7.92 16.95,4.56 13,4.07M7.1,18.32C8.26,19.22 9.61,19.76 11,19.93V17.9C10.13,17.75 9.29,17.41 8.54,16.87L7.1,18.32M6.09,13H4.07C4.24,14.39 4.79,15.73 5.69,16.89L7.1,15.47C6.58,14.72 6.23,13.88 6.09,13M7.11,8.53L5.7,7.11C4.8,8.27 4.24,9.61 4.07,11H6.09C6.23,10.13 6.58,9.28 7.11,8.53Z",ns="M16.89,15.5L18.31,16.89C19.21,15.73 19.76,14.39 19.93,13H17.91C17.77,13.87 17.43,14.72 16.89,15.5M13,17.9V19.92C14.39,19.75 15.74,19.21 16.9,18.31L15.46,16.87C14.71,17.41 13.87,17.76 13,17.9M19.93,11C19.76,9.61 19.21,8.27 18.31,7.11L16.89,8.53C17.43,9.28 17.77,10.13 17.91,11M15.55,5.55L11,1V4.07C7.06,4.56 4,7.92 4,12C4,16.08 7.05,19.44 11,19.93V17.91C8.16,17.43 6,14.97 6,12C6,9.03 8.16,6.57 11,6.09V10L15.55,5.55Z",ls="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14",cs="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z",ds="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z",us="M16,18H18V6H16M6,18L14.5,12L6,6V18Z",hs="M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z",xi="M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z",ki="M20.07,19.07L18.66,17.66C20.11,16.22 21,14.21 21,12C21,9.78 20.11,7.78 18.66,6.34L20.07,4.93C21.88,6.74 23,9.24 23,12C23,14.76 21.88,17.26 20.07,19.07M17.24,16.24L15.83,14.83C16.55,14.11 17,13.11 17,12C17,10.89 16.55,9.89 15.83,9.17L17.24,7.76C18.33,8.85 19,10.35 19,12C19,13.65 18.33,15.15 17.24,16.24M4,3H12A2,2 0 0,1 14,5V19A2,2 0 0,1 12,21H4A2,2 0 0,1 2,19V5A2,2 0 0,1 4,3M8,5A2,2 0 0,0 6,7A2,2 0 0,0 8,9A2,2 0 0,0 10,7A2,2 0 0,0 8,5M8,11A4,4 0 0,0 4,15A4,4 0 0,0 8,19A4,4 0 0,0 12,15A4,4 0 0,0 8,11M8,13A2,2 0 0,1 10,15A2,2 0 0,1 8,17A2,2 0 0,1 6,15A2,2 0 0,1 8,13Z",Ci="M9,16.5L9.91,15.59L15.13,20.8L14.21,21.71L9,16.5M15.5,10L16.41,9.09L21.63,14.3L20.71,15.21L15.5,10M6.72,2.72L10.15,6.15L6.15,10.15L2.72,6.72C1.94,5.94 1.94,4.67 2.72,3.89L3.89,2.72C4.67,1.94 5.94,1.94 6.72,2.72M14.57,7.5L15.28,8.21L8.21,15.28L7.5,14.57L6.64,11.07L11.07,6.64L14.57,7.5Z",ps="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z",ms="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z",fs="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4M7,8H13V13H7V8M14,8H17V10H14V8M17,11V16H14V11H17M7,14H13V16H7V14Z",gs="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12",_i="M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z",Mi="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M16,16L19,8H16.5L15,12.5L13.5,8H5V10H8V16H10V10H11.77L14,16H16Z",vs="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",da="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",bs="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z",$s="M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z",ws="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",Li="M21 20V2H3V20H1V23H23V20M19 4V11H13V4M5 4H11V11H5M5 20V13H11V20M13 20V13H19V20Z";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai={ATTRIBUTE:1,CHILD:2},ua=e=>(...t)=>({_$litDirective$:e,values:t});let ha=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,i){this._$Ct=t,this._$AM=a,this._$Ci=i}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=ua(class extends ha{constructor(e){if(super(e),e.type!==Ai.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const a=e.element.classList;for(const i of this.st)i in t||(a.remove(i),this.st.delete(i));for(const i in t){const o=!!t[i];o===this.st.has(i)||this.nt?.has(i)||(o?(a.add(i),this.st.add(i)):(a.remove(i),this.st.delete(i)))}return Ie}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi="important",ys=" !"+Hi,xs=ua(class extends ha{constructor(e){if(super(e),e.type!==Ai.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const i=e[a];return i==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?a.removeProperty(i):a[i]=null);for(const i in t){const o=t[i];if(o!=null){this.ft.add(i);const s=typeof o=="string"&&o.endsWith(ys);i.includes("-")||s?a.setProperty(i,s?o.slice(0,-11):o,s?Hi:""):a[i]=o}}return Ie}});function kn(e){return{type:"auth",access_token:e}}function Cn(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function ks(){return{type:"get_states"}}function Cs(e,t,a,i,o){const s={type:"call_service",domain:e,service:t,target:i,return_response:o};return a&&(s.service_data=a),s}function _n(e){const t={type:"subscribe_events"};return e&&(t.event_type=e),t}function Mn(e){return{type:"unsubscribe_events",subscription:e}}function Ln(){return{type:"ping"}}function An(e,t){return{type:"result",success:!1,error:{code:e,message:t}}}const Hn=e=>e.sendMessagePromise(ks()),Vi=(e,t,a,i,o,s)=>e.sendMessagePromise(Cs(t,a,i,o,s)),M={home:Uo,therm:da,bulb:Go,shield:ls,spark:Oo,play:ts,pause:Qo,next:us,minus:bi,plus:ca,close:ra,back:Eo,lock:la,unlock:Yo,power:is,room:vs,edit:es,resize:os,check:ci,restore:ss,gear:ui,cube:Do},pa={"mdi:shower":cs,"mdi:silverware-fork-knife":ds,"mdi:table-chair":ms,"mdi:sofa":hs,"mdi:bed":Ho,"mdi:teddy-bear":gs,"mdi:desk":Io,"mdi:garage":Zo,"mdi:flower":Wo,"mdi:balcony":Ao,"mdi:pool":as,"mdi:washing-machine":$s,"mdi:door":na,"mdi:dumbbell":jo,"mdi:stairs":ps},_s=Object.keys(pa),xt=e=>pa[e]??M.room,Ke=e=>e&&pa[e]||M.room;let Ms=0;const rt=e=>`${e}${++Ms}`,be=e=>W`<svg class="art" viewBox="0 0 60 60" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">${e}</svg>`;function Ls(e,t="#ffcf8a"){const a=rt("l");return be(W`<defs><radialGradient id=${a} cx="36" cy="40" r="28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.85}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="36" cy="40" r="28" fill=${`url(#${a})`}/><line x1="36" y1="0" x2="36" y2="22" stroke="#6b717a" stroke-width=".8"/>
    <path d="M25 34 L47 34 L41.5 21 L30.5 21 Z" fill=${e?"#d9c6a3":"#4a4f57"}/><ellipse cx="36" cy="34.5" rx="11" ry="1.7" fill=${e?"#fff2d6":"#3a3e45"}/>`)}function As(e){const t=Math.max(0,Math.min(100,100-e)),a=Array.from({length:Math.round(t/11)},(i,o)=>W`<line x1="20" x2="54" y1=${12+o*4.2} y2=${12+o*4.2} stroke="#8796a6" stroke-width=".5"/>`);return be(W`<rect x="20" y="10" width="34" height="46" rx="2" fill="#2d4a66" opacity=".6"/><circle cx="44" cy="22" r="5" fill="#ffd27a" opacity=".5"/>
    <rect x="20" y="10" width="34" height=${(46*t/100).toFixed(1)} fill="#a9b6c4"/>${a}<rect x="18" y="8" width="38" height="3" rx="1" fill="#5d646e"/>`)}function Hs(e,t="#ff9f43"){const a=e==null?0:Math.max(0,Math.min(1,(e-16)/14));return be(W`<circle cx="40" cy="36" r="17" fill="#2a2e34" stroke="#454a52"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${t} stroke-width="2.6" stroke-dasharray=${`${(a*81).toFixed(1)} 82`} transform="rotate(135 40 36)" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${t} stroke-width="7" opacity=".08"/>`)}function Vs(e){return be(W`<rect x="28" y="12" width="24" height="44" rx="3" fill="#3a3f46"/><rect x="31" y="15" width="18" height="38" rx="2" fill="#2b2f35"/>
    <circle cx="34" cy="34" r="1.6" fill=${e?"#ff8a5c":"#5be3a0"}/><rect x=${e?44:38} y="33.2" width="6" height="1.6" rx=".8" fill="#8a919b"/>`)}function zs(e){return be(W`<ellipse cx="40" cy="50" rx="16" ry="4" fill="#000" opacity=".3"/><ellipse cx="40" cy="44" rx="15" ry="6" fill="#d8dce1"/><rect x="25" y="38" width="30" height="6" fill="#d8dce1"/>
    <ellipse cx="40" cy="38" rx="15" ry="6" fill="#eef0f3"/><circle cx="40" cy="36" r="3.4" fill=${e?"#5be3a0":"#c4c9cf"}/>
    ${e?W`<path d="M10 50 Q20 46 26 48" stroke="#5be3a0" stroke-width=".8" fill="none" stroke-dasharray="1.2 1.2" opacity=".8"/>`:null}`)}function Ss(e){if(e)return be(W`<image href=${e} x="26" y="14" width="30" height="30" preserveAspectRatio="xMidYMid slice" transform="rotate(6 41 29)"/>`);const t=rt("a");return be(W`<defs><linearGradient id=${t} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3a35f"/><stop offset=".5" stop-color="#d96d6d"/><stop offset=".75" stop-color="#5c4a8a"/><stop offset="1" stop-color="#2e2a54"/></linearGradient></defs>
    <rect x="26" y="14" width="30" height="30" rx="3" fill=${`url(#${t})`} transform="rotate(6 41 29)"/><circle cx="46" cy="22" r="3" fill="#ffe7b8" opacity=".9" transform="rotate(6 41 29)"/>`)}function Pa(e){const t=!/rain|pour|snow|fog|cloudy$|lightning|night/.test(e)||e==="partlycloudy",a=e!=="sunny"&&e!=="clear-night",i=/rain|pour|lightning/.test(e),o=e==="clear-night";return be(W`${t?W`<circle cx="44" cy="20" r="8" fill="#ffd27a" opacity=".85"/>`:null}
    ${o?W`<path d="M46 12a9 9 0 1 0 6 14 7 7 0 1 1-6-14z" fill="#e8e3c8" opacity=".9"/>`:null}
    ${a?W`<path d="M28 36h20a6 6 0 0 0 .6-12 9 9 0 0 0-17 2.5A5 5 0 0 0 28 36z" fill="#cfd6df"/>`:null}
    ${i?W`<path d="M32 40l-2 6M38 40l-2 6M44 40l-2 6" stroke="#6cc8ff" stroke-width="1.4" stroke-linecap="round"/>`:null}`)}function Ps(e){return be(W`<g transform="translate(40 34)"><g class=${e?"spin":""}>
    ${[0,120,240].map(t=>W`<ellipse cx="0" cy="-8" rx="4" ry="8" fill="#cfd6df" opacity=".85" transform=${`rotate(${t})`}/>`)}
    </g><circle r="2.6" fill="#8a919b"/></g>`)}function Es(e){return be(W`<rect x="28" y="20" width="24" height="24" rx="6" fill="#3a3f46"/><circle cx="36" cy="32" r="1.8" fill="#1b1e22"/><circle cx="44" cy="32" r="1.8" fill="#1b1e22"/>
    <circle cx="48" cy="24" r="1.4" fill=${e?"#5be3a0":"#5d646e"}/>`)}function Ts(e,t){let a="M0 26 L100 26";if(t&&t.length>1){const i=Math.min(...t),s=Math.max(...t)-i||1;a=t.map((n,u)=>[u/(t.length-1)*100,34-(n-i)/s*26]).map(([n,u],h)=>`${h?"L":"M"}${n.toFixed(1)} ${u.toFixed(1)}`).join(" ")}return W`<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d=${`${a} V40 H0Z`} fill=${e} opacity=".12"/><path d=${a} fill="none" stroke=${e} stroke-width="1.4" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity=".85"/></svg>`}function Os(){return be(W`<circle cx="42" cy="34" r="14" fill="#b49cff" opacity=".18"/><path d="M42 22l2.6 7.4L52 32l-7.4 2.6L42 42l-2.6-7.4L32 32l7.4-2.6z" fill="#d9ccff"/><path d="M52 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#ffe2b0"/>`)}function Ns(e,t="#ffcf8a"){const a=rt("f");return be(W`<defs><radialGradient id=${a} cx="40" cy="22" r="22" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.9}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="40" cy="22" r="22" fill=${`url(#${a})`}/><path d="M33 26 L47 26 L44 14 L36 14Z" fill=${e?"#e6d6b8":"#4a4f57"}/>
    <line x1="40" y1="26" x2="40" y2="56" stroke="#6b717a" stroke-width="1.2"/><ellipse cx="40" cy="57" rx="6" ry="1.2" fill="#555b63"/>`)}function Ds(e,t="#ffcf8a"){const a=rt("s");return be(W`<defs><linearGradient id=${a} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.7}/><stop offset="1" stop-color=${t} stop-opacity="0"/></linearGradient></defs>
    <rect x="12" y="31" width="46" height="25" fill=${`url(#${a})`}/><rect x="12" y="28" width="46" height="3" rx="1.5" fill=${e?t:"#4a4f57"} opacity=${e?.45+e/200:1}/>
    ${[16,23,30,37,44,51].map(i=>W`<circle cx=${i} cy="29.5" r=".8" fill="#fff" opacity=${e?.9:.15}/>`)}`)}function Rs(e,t="#ffcf8a"){const a=rt("p");return be(W`<defs><linearGradient id=${a} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.6}/><stop offset="1" stop-color=${t} stop-opacity="0"/></linearGradient></defs>
    <path d="M34 12 L46 12 L56 58 L24 58Z" fill=${`url(#${a})`}/><rect x="33" y="6" width="14" height="6" rx="2" fill=${e?"#d9c6a3":"#4a4f57"}/>
    <ellipse cx="40" cy="12" rx="6" ry="1.2" fill=${e?"#fff2d6":"#3a3e45"}/>`)}function Is(e,t="#ffcf8a"){const a=rt("b");return be(W`<defs><radialGradient id=${a} cx="40" cy="30" r="22" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.8}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="40" cy="30" r="22" fill=${`url(#${a})`}/><line x1="40" y1="0" x2="40" y2="18" stroke="#6b717a" stroke-width=".8"/>
    <rect x="37" y="17" width="6" height="5" rx="1" fill="#8a919b"/><circle cx="40" cy="28" r="7" fill=${e?"#fff2d6":"#4a4f57"}/>`)}function Ea(e,t,a){return e==="lamp"?Ns(t,a):e==="led"?Ds(t,a):e==="spot"?Rs(t,a):e==="bulb"?Is(t,a):Ls(t,a)}const js={"{n} luz acesa":"{n} light on","{n} luzes acesas":"{n} lights on","{n} acesa":"{n} on","{n} acesas":"{n} on","{n} luz":"{n} light","{n} luzes":"{n} lights","luz acesa":"light on","luz apagada":"light off","luzes apagadas":"lights off","{on} de {total} luzes acesas":"{on} of {total} lights on","{n} dispositivo":"{n} device","{n} dispositivos":"{n} devices","{n} disp.":"{n} dev.","{n} divisão":"{n} room","{n} divisões":"{n} rooms","{n} cena":"{n} scene","{n} cenas":"{n} scenes","{n} cena ou rotina":"{n} scene or routine","{n} cenas e rotinas":"{n} scenes and routines","{n} destrancada":"{n} unlocked","{n} destrancadas":"{n} unlocked","{n} aberta":"{n} open","{n} abertas":"{n} open","tudo fechado":"all closed","tudo apagado":"all off","todas apagadas":"all off",apagadas:"all off",apagada:"off","Tudo tranquilo em casa":"All quiet at home",Casa:"Home",Divisões:"Rooms",Luzes:"Lights",Clima:"Climate",Segurança:"Security",Cenas:"Scenes",Tempo:"Weather","Div.":"Rooms","Seg.":"Sec.","Def.":"Set.",Vistas:"Views",Índice:"Contents","N.º":"No.",Tudo:"All",Estores:"Blinds",Média:"Media",Outros:"Other","Voltar à casa":"Back home","Vista anterior":"Previous view","Vista seguinte":"Next view","desliza para o lado para mudar de vista":"swipe sideways to change view","Mudar de vista":"Change view","toca para mudar de vista":"tap to change view","aperta com dois dedos para ver todas as vistas":"pinch with two fingers to see every view","Todas as vistas":"All views","Todas as vistas · toca numa para aproximar":"All views · tap one to zoom in","ver tudo em {room}":"see everything in the {room}","Nada para mostrar aqui.":"Nothing to show here.","Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.":"There are no rooms with devices yet. Assign areas to your devices in Home Assistant.",Hora:"Time","Lá fora":"Outside",Hoje:"Today","Boa noite":"Good evening","Bom dia":"Good morning","Boa tarde":"Good afternoon",Editar:"Edit","Editar esta vista":"Edit this view","A editar":"Editing",Cancelar:"Cancel",Repor:"Reset",Concluído:"Done","Adicionar · toca para pôr no fim":"Add · tap to put it at the end","Arrasta os cartões para mudar a ordem":"Drag the cards to reorder them","Já está tudo nesta vista.":"Everything is already in this view.","Esconder {name}":"Hide {name}","Mudar o tamanho de {name}":"Resize {name}","Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel.":"Couldn't save. This screen may not be allowed to edit this dashboard.","Tocar para acordar":"Tap to wake","Toca para acordar":"Tap to wake","Aproxima-te ou toca para acordar":"Come closer or tap to wake"," e ":" and ",Acender:"On",Apagar:"Off","Acender todas":"All on","Apagar todas":"All off","Acender as luzes de {name}":"Turn on the {name} lights","Apagar as luzes de {name}":"Turn off the {name} lights","Luzes de {room}":"{room} lights","agora {t}°":"now {t}°",Baixar:"Down",Subir:"Up",Mais:"More",Destrancada:"Unlocked",Trancada:"Locked",destrancada:"unlocked",trancada:"locked","tocar para trancar":"tap to lock","toque longo para abrir":"long press to open","destrancada · tocar":"unlocked · tap","destrancada · tocar para trancar":"unlocked · tap to lock","trancada · toque para mais":"locked · tap for more",trancar:"lock",abrir:"open","Trancar {name}":"Lock {name}","Tranc.":"Locked",Porta:"Door",Ligado:"On",Desligado:"Off",desligado:"off",Pausa:"Pause",Tocar:"Play",Seguinte:"Next",Aberta:"Open",Fechada:"Closed",Movimento:"Motion",Calmo:"Clear",Ativada:"Activated","Tocar para ativar":"Tap to activate","Sem termóstato":"No thermostat",Temperatura:"Temperature",roda:"turn",clima:"climate",Fechar:"Close",luz:"light",estore:"blind",fechadura:"lock",média:"media",tempo:"weather","Este cartão · vale para todos os estilos e painéis":"This card · applies to every style and dashboard",Tipo:"Type","Escolhido por ti.":"Chosen by you.","Voltar ao automático ({type})":"Back to automatic ({type})","Adivinhado pelo nome e pelo modelo: {type}.":"Guessed from the name and model: {type}.",Nome:"Name","Esconder este cartão":"Hide this card",Brilho:"Brightness",Branco:"White",Cores:"Colours",Desligar:"Turn off",Ligar:"Turn on",Posição:"Position",Abrir:"Open",Parar:"Stop",Modo:"Mode",Destrancar:"Unlock",Trancar:"Lock",Volume:"Volume","Sem imagem":"No picture",vento:"wind","Próximas 6 horas":"Next 6 hours","Próximos 5 dias":"Next 5 days","Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.":"Choose the IPMA area in the Pine3 Home panel to see the warnings.",Calor:"Heat",Frio:"Cool",Seco:"Dry",Ventilar:"Fan","a aquecer":"heating","a arrefecer":"cooling","em pausa":"paused","a secar":"drying","a ventilar":"fan","a limpar":"cleaning","na base":"docked","a voltar à base":"returning",parado:"idle",erro:"error",aberto:"open",fechado:"closed","a abrir":"opening","a fechar":"closing","céu limpo":"clear",nublado:"cloudy",nevoeiro:"fog",granizo:"hail",trovoada:"thunderstorm","trovoada e chuva":"thunderstorm and rain","pouco nublado":"partly cloudy","chuva forte":"heavy rain",chuva:"rain",neve:"snow","chuva e neve":"sleet",sol:"sunny",excecional:"exceptional","Céu limpo":"Clear",Nublado:"Cloudy",Nevoeiro:"Fog",Trovoada:"Thunderstorm","Trovoada e chuva":"Thunderstorm and rain","Pouco nublado":"Partly cloudy","Chuva forte":"Heavy rain",Chuva:"Rain",Neve:"Snow",Sol:"Sunny",Vento:"Wind",aviso:"warning","aviso {type}":"{type} warning","Toca para trancar":"Tap to lock","Aviso {level}":"{level} warning",amarelo:"Yellow",laranja:"Orange",vermelho:"Red","Agitação Marítima":"Coastal event",Precipitação:"Rain","Tempo Frio":"Cold","Tempo Quente":"Hot","Luz de teto":"Ceiling light",Candeeiro:"Lamp","Fita LED":"LED strip",Spot:"Spotlight",Lâmpada:"Bulb",Coluna:"Speaker","Ar condicionado":"Air conditioner",Ventoinha:"Fan",Purificador:"Purifier",Estore:"Blind",Janela:"Window",Tomada:"Plug",Sensor:"Sensor",Câmara:"Camera",Fechadura:"Lock",Aspirador:"Vacuum",Outro:"Other",Vidro:"Glass",Moldura:"Frame",Instrumento:"Instrument",Órbita:"Orbit",Carteira:"Wallet",Lente:"Lens","À esquerda":"Left","Em baixo":"Bottom","Grafite (escuro)":"Graphite (dark)",Claro:"Light","Automático (pôr do sol)":"Automatic (sunset)","Automático (dia 50%, noite 12%)":"Automatic (day 50%, night 12%)","Sempre baixo (12%)":"Always low (12%)","Não mexer":"Leave it",Nunca:"Never","1 minuto":"1 minute","2 minutos":"2 minutes","5 minutos":"5 minutes","10 minutos":"10 minutes","30 minutos":"30 minutes","A carregar a casa…":"Loading the house…","A ligar…":"Connecting…","Menu do Home Assistant":"Home Assistant menu","Há demasiados códigos à espera. Tenta daqui a pouco.":"Too many codes are waiting. Try again in a moment.","Não foi possível pedir um código.":"Couldn't get a code.","Sem ligação ao Home Assistant. A tentar de novo…":"No connection to Home Assistant. Trying again…","Sem ligação ao Home Assistant.":"No connection to Home Assistant.","Emparelhar este ecrã":"Pair this screen","No Home Assistant, abre":"In Home Assistant, open","e escreve este código, ou lê o QR com o telemóvel.":"and type this code, or scan the QR code with your phone.","O código muda a cada 10 minutos.":"The code changes every 10 minutes.","Ainda não há PIN. Define-o no Home Assistant: Pine3 Home → ⚙ → Sistema.":"There is no PIN yet. Set it in Home Assistant: Pine3 Home → ⚙ → System.","Ainda não há PIN: define-o no Home Assistant, em Pine3 Home → ⚙ → Sistema.":"There is no PIN yet: set it in Home Assistant, in Pine3 Home → ⚙ → System.","Demasiadas tentativas. Tenta de novo daqui a {n} min.":"Too many tries. Try again in {n} min.","PIN errado.":"Wrong PIN.","É preciso o PIN das definições.":"The settings PIN is needed.","PIN das definições":"Settings PIN","Escreve o PIN":"Enter the PIN",Entrar:"Enter","Esse painel não existe.":"That dashboard doesn't exist.","Este ecrã não pode editar esse painel.":"This screen can't edit that dashboard.","A casa precisa de pelo menos um painel.":"The house needs at least one dashboard.","O código não existe ou já expirou.":"That code doesn't exist or has expired.","Esse ecrã não existe.":"That screen doesn't exist.",Definições:"Settings","Fechar as definições":"Close the settings","Desfazer alterações":"Undo changes","A editar o painel":"Editing the dashboard",Aparência:"Appearance",Entidades:"Entities","Face ambiente":"Ambient face","Ecrãs e painéis":"Screens and dashboards",Sistema:"System","O estilo, o tema e a navegação do painel":"The style, theme and navigation of the dashboard","Vês o resultado já aqui; fica guardado no Home Assistant para todos os ecrãs que mostram este painel.":"You see the result right here; it is saved in Home Assistant for every screen showing this dashboard.","Pré-visualização":"Preview","Vista na pré-visualização":"View in the preview",Estilo:"Style","em breve":"soon",Tema:"Theme","Claro, escuro, ou escuro ao pôr do sol.":"Light, dark, or dark after sunset.","Só no Vidro: os outros estilos têm a sua própria paleta.":"Glass only: the other styles have their own palette.",Navegação:"Navigation","A dock do Vidro, à esquerda ou em baixo.":"Glass's dock, on the left or at the bottom.","Este estilo navega com {nav}.":"This style navigates with {nav}.","a sua própria navegação":"its own navigation","pílulas no topo":"pills at the top","uma roda que abre do botão em baixo":"a wheel that opens from the button at the bottom","separadores à direita, como cartões numa carteira":"tabs on the right, like cards in a wallet","afastar para ver todas as vistas (botão ou pinça) e tocar numa para aproximar":"zooming out to see every view (button or pinch) and tapping one to zoom in","deslizar, com pontos no canto":"swiping, with dots in the corner","índice em palavras":"a table of contents in words","banco de teclas":"a bank of keys","Dock à esquerda":"Dock on the left","Dock em baixo":"Dock at the bottom","Editar a grelha nos ecrãs":"Edit the grid on the screens","Os tablets que mostram este painel podem mudar a ordem, o tamanho e os cartões de cada vista (o lápis).":"Tablets showing this dashboard can change the order, size and cards of each view (the pencil).","Um relógio calmo com o tempo e a casa numa linha, depois de alguns minutos sem tocar no ecrã. O primeiro toque só acorda.":"A calm clock with the weather and the house in one line, after a few minutes without touching the screen. The first tap only wakes it.","Aparece depois de":"Shows after","Brilho na face ambiente":"Brightness on the ambient face","Só nos tablets com a app Pine3 Wallpanel. Fora da face ambiente, o brilho é o do sistema.":"Only on tablets with the Pine3 Wallpanel app. Outside the ambient face, the brightness is the system's.","O que é da casa e vale para todos os painéis.":"What belongs to the house and applies to every dashboard.",Idioma:"Language","Dos painéis, dos ecrãs e destas definições. Automático segue o idioma do Home Assistant.":"Of the dashboards, the screens and these settings. Automatic follows Home Assistant's language.",Automático:"Automatic",automático:"automatic","Avisos do IPMA":"IPMA warnings","Os avisos da tua área aparecem no cartão do tempo, na face ambiente e no topo de cada estilo.":"The warnings for your area show on the weather card, the ambient face and at the top of each style.","Área dos avisos do IPMA":"IPMA warning area","Avisos do IPMA: {area}.":"IPMA warnings: {area}.","Avisos do IPMA desligados.":"IPMA warnings off.","Sem avisos":"No warnings","Emparelhar um ecrã":"Pair a screen","No tablet, abre":"On the tablet, open","Aparece um código de 6 algarismos: escreve-o aqui, ou lê o QR com o telemóvel.":"A 6-digit code appears: type it here, or scan the QR code with your phone.","Código do ecrã":"Screen code","Nome, p.ex. Cozinha":"Name, e.g. Kitchen","Nome do ecrã":"Screen name","Emparelhar com {name}":"Pair with {name}","À espera:":"Waiting:",Ecrãs:"Screens",Ecrã:"Screen","{n} ecrã":"{n} screen","{n} ecrãs":"{n} screens","token revogado":"token revoked","visto {when}":"seen {when}","ainda não ligou":"not connected yet","Painel de {name}":"{name}'s dashboard",Remover:"Remove","Ainda não há ecrãs emparelhados.":"No screens paired yet.",Painéis:"Dashboards","Cada painel tem o seu estilo e a sua disposição. Cada ecrã mostra um painel.":"Each dashboard has its own style and layout. Each screen shows one dashboard.","Nome do painel":"Dashboard name","a ver":"viewing","Ver e editar":"View and edit","Novo painel":"New dashboard","Painel {n}":"Dashboard {n}",Versão:"Version","Disposição de {name}":"Layout of {name}",automática:"automatic","arrumada à mão em {n} vista":"arranged by hand in {n} view","arrumada à mão em {n} vistas":"arranged by hand in {n} views","Repor a automática":"Reset to automatic","Página dos ecrãs de parede":"Wall screen page","PIN das definições nos ecrãs":"Settings PIN on the screens","Nos ecrãs de parede, o ⚙ pede este PIN antes de abrir as definições. Depois de o escreverem, ficam com acesso durante 10 minutos. Cinco tentativas erradas seguidas bloqueiam o PIN durante 5 minutos.":"On wall screens, ⚙ asks for this PIN before opening the settings. Once it is entered, they have access for 10 minutes. Five wrong tries in a row lock the PIN for 5 minutes.","PIN definido":"PIN set","Sem PIN: os ecrãs não abrem as definições":"No PIN: the screens don't open the settings","Escreve outro para o mudar.":"Enter another one to change it.","De 4 a 8 algarismos.":"4 to 8 digits.","Novo PIN":"New PIN","Mudar o PIN":"Change the PIN","Guardar o PIN":"Save the PIN","A ordem, o ícone e as divisões que aparecem. Vale para a dock, a Casa e todos os estilos e painéis. As divisões vêm das áreas do Home Assistant.":"The order, the icon and which rooms show. Applies to the dock, Home and every style and dashboard. Rooms come from Home Assistant's areas.","Subir {name}":"Move {name} up","Descer {name}":"Move {name} down","Ícone de {name}":"{name} icon","{n} de {total} dispositivos":"{n} of {total} devices","Mostrar {name}":"Show {name}","O que aparece nos painéis. Cada dispositivo tem um cartão com a sua entidade principal; as secundárias (o consumo de uma tomada, o interruptor de uma TV, um sensor de diagnóstico) podem ter um cartão próprio.":"What shows on the dashboards. Each device has a card with its main entity; the secondary ones (a plug's power use, a TV's switch, a diagnostic sensor) can have a card of their own.","Procurar por nome ou entidade":"Search by name or entity","Procurar entidade":"Search entity","Mostrar entidades de diagnóstico e configuração":"Show diagnostic and configuration entities","Mostrar entidades de diagnóstico":"Show diagnostic entities","{n} de {total} visíveis":"{n} of {total} shown","Tipo de {name}":"Type of {name}",Principal:"Main",Diagnóstico:"Diagnostic",Secundária:"Secondary","Alterações desfeitas.":"Changes undone.","PIN guardado.":"PIN saved.","PIN removido: os ecrãs deixam de abrir as definições.":"PIN removed: the screens no longer open the settings.","{name} emparelhado. O ecrã liga-se dentro de segundos.":"{name} paired. The screen connects within seconds.","Remover {name}? O ecrã volta a pedir um código.":"Remove {name}? The screen will ask for a code again.","{name} removido.":"{name} removed.","{name} criado: escolhe o estilo.":"{name} created: choose its style.","Remover o painel {name}? Os ecrãs que o mostram passam para o primeiro painel.":"Remove the {name} dashboard? The screens showing it move to the first dashboard.","Repor a disposição automática de todas as vistas de {name}?":"Reset every view of {name} to the automatic layout?","Disposição reposta.":"Layout reset.","Casa 3D":"3D Home",planta:"floor plan",Planta:"Floor plan","3D completo":"Full 3D","3D leve":"Light 3D",Imagem:"Picture","Planta 2D":"2D plan","A Casa 3D neste ecrã":"The 3D Home on this screen","Fica guardado só neste aparelho. Num tablet modesto, a imagem e a planta 2D são as mais leves.":"Saved on this device only. On a modest tablet, the picture and the 2D plan are the lightest.","Piso {n}":"Floor {n}","Todos os pisos":"All floors","Editar planta":"Edit floor plan",Afastar:"Zoom out",Aproximar:"Zoom in","Repor vista":"Reset view",Rodar:"Rotate","Paredes mais baixas":"Lower walls","Paredes mais altas":"Higher walls","Arrasta para mover · Dois dedos para aproximar · Toca numa divisão para a abrir ou numa luz para a ligar":"Drag to move · Pinch to zoom · Tap a room to open it or a light to toggle it","Arrasta para rodar · Dois dedos para aproximar · Toca numa divisão para a abrir ou numa luz para a ligar":"Drag to rotate · Pinch to zoom · Tap a room to open it or a light to toggle it","Ainda não há divisões com dispositivos.":"No rooms with devices yet.","{n} ligado":"{n} on","{n} ligados":"{n} on","{n} divisão acesa":"{n} room lit","{n} divisões acesas":"{n} rooms lit","Tirar da planta":"Remove from plan",Comprimento:"Length",Orientação:"Angle","O comprimento conta em quadrículas da planta. A orientação roda a fita à volta do seu centro.":"Length is in floor-plan cells. The angle turns the strip around its centre.",Divisão:"Room",Dispositivos:"Devices","Esta divisão não tem dispositivos visíveis.":"This room has no visible devices.","Mover e redimensionar":"Move and resize","Pintar quadrículas":"Paint cells","Apagar quadrículas":"Erase cells","Toca na planta para pôr «{e}».":"Tap the plan to place “{e}”.","Escolhe um dispositivo em baixo e toca na planta para o pôr. Arrasta os que já estão na planta para os mudar de sítio.":"Pick a device below and tap the plan to place it. Drag the ones already on the plan to move them.","Toca ou arrasta nas quadrículas para as juntar a «{r}». Pintar por cima de outra divisão passa essas quadrículas para esta.":"Tap or drag over cells to add them to “{r}”. Painting over another room moves those cells to this one.","Escolhe em baixo a divisão a pintar.":"Pick the room to paint below.","Toca ou arrasta nas quadrículas para as tirar da divisão.":"Tap or drag over cells to remove them from their room.","Desenha um retângulo na grelha para colocar «{r}».":"Draw a rectangle on the grid to place “{r}”.","Arrasta uma divisão para a mover e o canto para a redimensionar. Para colocar uma divisão nova, escolhe-a em baixo e desenha-a na grelha.":"Drag a room to move it and its corner to resize it. To place a new room, pick it below and draw it on the grid.","Planta da casa":"Floor plan","Desenha cada piso visto de cima. A Casa 3D usa esta planta: as divisões que não colocares são arrumadas automaticamente.":"Draw each floor from above. The 3D Home uses this plan; rooms you don't place are arranged automatically.","Altura das paredes":"Wall height",Piso:"Floor","Editar forma":"Edit shape","Por colocar":"Not placed yet","Gerar planta automática":"Generate automatic plan","Limpar este piso":"Clear this floor","a editar":"editing"};let it="pt";function qs(e,t){return it=((e&&e!=="auto"?e:t||(typeof navigator<"u"?navigator.language:"pt"))??"pt").toLowerCase().startsWith("pt")?"pt":"en",typeof document<"u"&&(document.documentElement.lang=it==="pt"?"pt-PT":"en"),it}const zi=()=>it,re=()=>it==="pt"?"pt-PT":"en-GB";function l(e,t){let a=it==="en"?js[e]??e:e;return t&&(a=a.replace(/\{(\w+)\}/g,(i,o)=>o in t?String(t[o]):i)),a}const ie=(e,t,a)=>l(e===1?t:a,{n:e});function $e(e){return new Proxy(e,{get:(t,a)=>typeof a=="string"&&typeof t[a]=="string"?l(t[a]):Reflect.get(t,a)})}function Si(e){return new Proxy(e,{get:(t,a)=>(a==="name"||a==="sub")&&typeof Reflect.get(t,a)=="string"?l(Reflect.get(t,a)):Reflect.get(t,a)})}const qe=e=>e.map(Si),Bs={ceiling:{icon:li,name:"Luz de teto"},lamp:{icon:pi,name:"Candeeiro"},led:{icon:gi,name:"Fita LED"},spot:{icon:Ci,name:"Spot"},bulb:{icon:vi,name:"Lâmpada"},tv:{icon:_i,name:"TV"},appletv:{icon:Mi,name:"Apple TV"},homepod:{icon:xi,name:"HomePod"},speaker:{icon:ki,name:"Coluna"},ac:{icon:si,name:"Ar condicionado"},fan:{icon:hi,name:"Ventoinha"},purifier:{icon:ri,name:"Purificador"},blind:{icon:zo,name:"Estore"},door:{icon:na,name:"Porta"},window:{icon:Li,name:"Janela"},plug:{icon:wi,name:"Tomada"},sensor:{icon:da,name:"Sensor"},motion:{icon:$i,name:"Movimento"},camera:{icon:ni,name:"Câmara"},lock:{icon:la,name:"Fechadura"},vacuum:{icon:yi,name:"Aspirador"},other:{icon:di,name:"Outro"}},at=Object.fromEntries(Object.entries(Bs).map(([e,t])=>[e,Si(t)])),Pi={light:["ceiling","lamp","led","spot","bulb"],media_player:["tv","appletv","homepod","speaker"],fan:["fan","purifier"],cover:["blind","door","window"],switch:["plug","tv","fan","other"],input_boolean:["plug","other"],binary_sensor:["door","window","motion","sensor"]},He=(e,...t)=>t.some(a=>e.includes(a));function Yt(e,t,a={}){const i=e.split(".")[0],o=t?.attributes??{},s=`${a.name??""} ${o.friendly_name??""} ${e}`.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),r=`${a.model??""}`.toLowerCase(),n=`${a.manufacturer??""}`.toLowerCase();return i==="light"?He(s,"fita","led","strip","lightstrip","barra")?"led":He(s,"teto","tecto","ceiling","plafon","lustre","pendente","suspens")?"ceiling":He(s,"spot","foco","embutid")?"spot":He(s,"candeeiro","lamp","abajur","de pe","cabeceira","floor")?"lamp":"ceiling":i==="media_player"?n.includes("apple")&&r.includes("homepod")?"homepod":n.includes("apple")&&r.includes("tv")?"appletv":He(s,"homepod")?"homepod":He(s,"apple tv","appletv")?"appletv":o.device_class==="tv"||He(s,"tv","televis")?"tv":"speaker":i==="climate"?"ac":i==="fan"?He(s,"purif","air clean")||n.includes("philips")&&r.startsWith("ac")?"purifier":"fan":i==="cover"?o.device_class==="door"||o.device_class==="garage"?"door":"blind":i==="lock"?"lock":i==="camera"?"camera":i==="vacuum"?"vacuum":i==="switch"||i==="input_boolean"?He(s,"tv","televis")?"tv":"plug":i==="binary_sensor"?["door","garage_door","opening"].includes(o.device_class)?"door":o.device_class==="window"?"window":["motion","occupancy","presence"].includes(o.device_class)?"motion":"sensor":i==="sensor"?"sensor":"other"}const G=e=>e.split(".")[0],Fe=e=>!!e&&!["off","unavailable","unknown","closed","locked","idle","standby","docked"].includes(e.state),Ws=e=>!e||e.state==="unavailable";function Je(e){if(!e||e.state!=="on")return 0;const t=e.attributes.brightness;return t==null?100:Math.max(1,Math.round(t/255*100))}function ht(e){const t=e?.attributes.rgb_color,a=e?.attributes.color_mode;if(t&&a&&!["color_temp","brightness","onoff","white"].includes(a))return`rgb(${t.join(",")})`;const i=e?.attributes.color_temp_kelvin;return i?i>=5e3?"#e6f0ff":i>=3800?"#fff1d6":"#ffcf8a":"#ffcf8a"}const me=e=>e.devices.filter(t=>G(t.id)==="light"&&!t.hidden).map(t=>t.id);function kt(e,t){const a=e.filter(i=>t[i]?.state==="on");return a.length?Math.round(a.reduce((i,o)=>i+Je(t[o]),0)/a.length):0}const Ta={light:"light",climate:"climate",lock:"lock",cover:"cover",media_player:"media",vacuum:"vacuum",fan:"fan",switch:"switch",input_boolean:"switch",outlet:"outlet",sensor:"sensor",binary_sensor:"binary",camera:"camera"};function Mt(e,t){const a=Ta[e.kind??G(e.id)]??Ta[G(e.id)];if(!a)return null;const i=a==="climate"?"l":a==="media"||a==="camera"?"m":"s";return{key:e.id,kind:a,size:i,name:e.name,sub:t?.name,entity:e.id,room:t}}function Xt(e,t){const a=e.rooms.filter(r=>!r.hidden),i=a.flatMap(r=>r.devices.filter(n=>!n.hidden).map(n=>({d:n,r}))),o=r=>i.filter(({d:n})=>(n.kind??G(n.id))===r),s=[];return a.forEach((r,n)=>{const u=me(r);u.length&&s.push({key:`room-${r.id}`,kind:"room-lights",size:n===0?"m":"s",name:r.name,entities:u,room:r})}),o("climate").forEach(({d:r,r:n},u)=>s.push({key:r.id,kind:"climate",size:u===0?"l":"m",name:r.name,sub:n.name,entity:r.id,room:n})),e.weather&&t[e.weather]&&s.push({key:e.weather,kind:"weather",size:"l",name:l("Tempo"),entity:e.weather}),o("lock").forEach(({d:r,r:n})=>s.push({key:r.id,kind:"lock",size:"s",name:r.name,sub:n.name,entity:r.id,room:n})),o("cover").forEach(({d:r,r:n})=>s.push({key:r.id,kind:"cover",size:"s",name:r.name,sub:n.name,entity:r.id,room:n})),o("media_player").sort((r,n)=>+(t[n.d.id]?.state==="playing")-+(t[r.d.id]?.state==="playing")).slice(0,2).forEach(({d:r,r:n})=>s.push({key:r.id,kind:"media",size:"m",name:r.name,sub:n.name,entity:r.id,room:n})),o("vacuum").forEach(({d:r,r:n})=>s.push({key:r.id,kind:"vacuum",size:"s",name:r.name,sub:n.name,entity:r.id,room:n})),e.scenes.length&&s.push({key:"scenes",kind:"scenes",size:"m",name:l("Cenas"),entities:e.scenes.slice(0,6)}),s}const Fs=qe([{id:"all",name:"Tudo",kinds:[]},{id:"lights",name:"Luzes",kinds:["light"]},{id:"climate",name:"Clima",kinds:["climate","fan"]},{id:"covers",name:"Estores",kinds:["cover"]},{id:"media",name:"Média",kinds:["media"]},{id:"other",name:"Outros",kinds:["switch","outlet","lock","vacuum","sensor","binary","camera"]}]);function Zs(e,t=[]){const a=e.devices.filter(o=>!o.hidden).map(o=>Mt(o,e)),i=(e.entities??[]).filter(o=>!o.primary&&t.includes(o.id)).map(o=>Mt({id:o.id,name:o.name,kind:G(o.id)},e));return[...a,...i].filter(o=>!!o)}function ge(e,t){const a=e.rooms.filter(n=>!n.hidden).flatMap(n=>n.devices),i=a.filter(n=>G(n.id)==="light"&&t[n.id]?.state==="on").length,o=a.filter(n=>G(n.id)==="lock"&&t[n.id]?.state==="unlocked").length,s=a.filter(n=>G(n.id)==="binary_sensor"&&["door","window","garage_door","opening"].includes(t[n.id]?.attributes.device_class)&&t[n.id]?.state==="on").length,r=e.rooms.map(n=>n.temperature?parseFloat(t[n.temperature]?.state??""):NaN).filter(n=>!Number.isNaN(n));return{lightsOn:i,alerts:o+s,alertText:o?ie(o,"{n} destrancada","{n} destrancadas"):s?ie(s,"{n} aberta","{n} abertas"):l("tudo fechado"),temp:r.length?`${Math.round(Math.min(...r))}–${Math.round(Math.max(...r))}°`:null}}const le=(e,t=1)=>e.toLocaleString(re(),{maximumFractionDigits:t}),Us=["door","window","garage_door","opening"],Ei=e=>e.rooms.filter(t=>!t.hidden).flatMap(t=>t.devices.filter(a=>!a.hidden).map(a=>({d:a,r:t})));function Gs(e,t){const a=[],i=Ei(e);return i.filter(({d:o})=>G(o.id)==="climate").forEach(({d:o,r:s})=>a.push({key:o.id,kind:"climate",size:"l",name:o.name,sub:s.name,entity:o.id,room:s})),e.weather&&t[e.weather]&&a.push({key:e.weather,kind:"weather",size:"l",name:l("Tempo"),entity:e.weather}),i.filter(({d:o})=>G(o.id)==="fan").forEach(({d:o,r:s})=>a.push({key:o.id,kind:"fan",size:"s",name:o.name,sub:s.name,entity:o.id,room:s})),e.rooms.filter(o=>!o.hidden).forEach(o=>{o.temperature&&t[o.temperature]&&a.push({key:`t-${o.id}`,kind:"sensor",size:"s",name:o.name,sub:"temperatura",entity:o.temperature,room:o}),o.humidity&&t[o.humidity]&&a.push({key:`h-${o.id}`,kind:"sensor",size:"s",name:o.name,sub:"humidade",entity:o.humidity,room:o})}),a}function Ys(e){return e.rooms.filter(t=>!t.hidden).map(t=>({r:t,lights:me(t)})).filter(({lights:t})=>t.length).map(({r:t,lights:a})=>({key:`room-${t.id}`,kind:"room-lights",size:"m",name:t.name,entities:a,room:t}))}function Xs(e,t){const a=Ei(e),i=a.filter(({d:r})=>G(r.id)==="lock"),o=a.filter(({d:r})=>G(r.id)==="binary_sensor"&&[...Us,"motion","occupancy","presence","moisture","smoke","gas"].includes(t[r.id]?.attributes.device_class));o.sort((r,n)=>+(t[n.d.id]?.state==="on")-+(t[r.d.id]?.state==="on"));const s=a.filter(({d:r})=>G(r.id)==="camera");return[...i.map(({d:r,r:n})=>({key:r.id,kind:"lock",size:"s",name:r.name,sub:n.name,entity:r.id,room:n})),...o.map(({d:r,r:n})=>({key:r.id,kind:"binary",size:"s",name:r.name,sub:n.name,entity:r.id,room:n})),...s.map(({d:r,r:n})=>({key:r.id,kind:"camera",size:"m",name:r.name,sub:n.name,entity:r.id,room:n}))]}function Ks(e,t){return[...e.scenes,...e.scripts].filter(a=>t[a]).map(a=>({key:a,kind:"scene",size:"s",name:t[a].attributes.friendly_name??a,entity:a}))}const Js=["climate","weather","media","scenes","camera","clock"],Ti=e=>Js.includes(e)?["m","l","xl"]:["s","m","l"];function Qs(e,t){for(const a of e.rooms){const i=a.devices.find(o=>o.id===t);if(i)return Mt(i,a)}return null}function Oa(e,t,a){if(!t)return e;const i=new Map(e.map(n=>[n.key,n])),o=new Set(t.hidden),s=[],r=new Set;for(const n of t.items){if(r.has(n.key)||o.has(n.key))continue;const u=i.get(n.key)??Qs(a,n.key);if(!u)continue;r.add(n.key);const h=n.size&&Ti(u.kind).includes(n.size)?n.size:u.size;s.push({...u,size:h})}for(const n of e)!r.has(n.key)&&!o.has(n.key)&&s.push(n);return s}function er(e,t,a){const i=new Set(t.items.map(r=>r.key)),o=e.filter(r=>t.hidden.includes(r.key)),s=a.rooms.filter(r=>!r.hidden).flatMap(r=>r.devices.filter(n=>!n.hidden).map(n=>Mt(n,r))).filter(r=>!!r&&!i.has(r.key)&&!o.some(n=>n.key===r.key)&&!e.some(n=>n.key===r.key&&!t.hidden.includes(n.key)));return[...o,...s]}function je(e,t,a){return e?t?t===e?e===1?l("luz acesa"):l("{n} luzes acesas",{n:e}):l("{on} de {total} luzes acesas",{on:t,total:e}):l(e===1?"luz apagada":"luzes apagadas"):ie(a,"{n} dispositivo","{n} dispositivos")}const Be=_e`
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
  button.chip {
    border: 0;
    color: inherit;
    font-family: inherit;
    text-align: left;
    cursor: pointer;
  }
  button.chip:active {
    transform: scale(0.97);
  }
  /* a room card's own light switch */
  .pw {
    position: absolute;
    z-index: 3;
    top: calc(var(--u) * 1.2);
    right: calc(var(--u) * 1.2);
    width: calc(var(--u) * 3.6);
    height: calc(var(--u) * 3.6);
    border-radius: 50%;
    border: 0;
    display: grid;
    place-items: center;
    font-size: calc(var(--u) * 1.8);
    background: rgba(255, 255, 255, 0.12);
    color: var(--fg);
    cursor: pointer;
  }
  .pw.on {
    background: #ffcf8a;
    color: #2a1a04;
  }
  .days {
    position: relative;
    z-index: 2;
    display: grid;
    gap: calc(var(--u) * 0.4);
    margin-top: calc(var(--u) * 1);
    font-size: calc(var(--u) * 1.1);
  }
  .days .day {
    display: grid;
    grid-template-columns: 4.5em 1fr 3em 3em 3em;
    align-items: baseline;
    gap: calc(var(--u) * 0.8);
  }
  .days.compact {
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    color: var(--muted);
  }
  .days.compact .day {
    display: block;
  }
  .days .dn {
    text-transform: capitalize;
  }
  .days.compact b,
  .days.compact .lo {
    display: block;
  }
  .days b {
    color: var(--fg);
    font-weight: 500;
  }
  .days .lo,
  .days .dc,
  .days .rain {
    color: var(--muted);
  }
  .days .rain {
    color: #6cc4ff;
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
  /* with the forecast below, the sky stays in the top half */
  .k-weather:has(.hrs) .art {
    top: 0;
    bottom: auto;
    height: 55%;
    width: 45%;
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
  .vd.moldura .w.on .hero,
  .vd.lente .w.on .hero {
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
`,R=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),pt=e=>e.split(".")[0],N=(e,t)=>l(e,t),Na=(e,t,a,i)=>l(e===1?t:a,{n:e,...i}),Pe={ceiling:["mdi:ceiling-light","Luz de teto","ceiling"],lamp:["mdi:floor-lamp","Candeeiro","light"],led:["mdi:led-strip-variant","Fita LED","strip"],spot:["mdi:spotlight-beam","Spot","ceiling"],bulb:["mdi:lightbulb","Lâmpada","light"],tv:["mdi:television","TV","thing"],appletv:["mdi:television-box","Apple TV","thing"],homepod:["mdi:speaker","HomePod","thing"],speaker:["mdi:speaker-wireless","Coluna","thing"],ac:["mdi:air-conditioner","Ar condicionado","thing"],fan:["mdi:fan","Ventoinha","thing"],purifier:["mdi:air-purifier","Purificador","thing"],blind:["mdi:blinds","Estore","thing"],door:["mdi:door","Porta","thing"],window:["mdi:window-closed-variant","Janela","thing"],plug:["mdi:power-socket-eu","Tomada","thing"],sensor:["mdi:thermometer","Sensor","thing"],motion:["mdi:motion-sensor","Movimento","thing"],camera:["mdi:cctv","Câmara","thing"],lock:["mdi:lock","Fechadura","thing"],vacuum:["mdi:robot-vacuum","Aspirador","thing"],other:["mdi:circle-medium","Outro","thing"]},Ve=(e,...t)=>t.some(a=>e.includes(a));function tr(e,t,a={}){const i=pt(e),o=t?.attributes||{},s=`${a.name||""} ${o.friendly_name||""} ${e}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),r=`${a.model||""}`.toLowerCase(),n=`${a.manufacturer||""}`.toLowerCase();return i==="light"?Ve(s,"fita","led","strip","lightstrip","barra")?"led":Ve(s,"teto","tecto","ceiling","plafon","lustre","pendente","suspens")?"ceiling":Ve(s,"spot","foco","embutid")?"spot":Ve(s,"candeeiro","lamp","abajur","de pe","cabeceira","floor")?"lamp":"ceiling":i==="media_player"?n.includes("apple")&&r.includes("homepod")?"homepod":n.includes("apple")&&r.includes("tv")?"appletv":Ve(s,"homepod")?"homepod":Ve(s,"apple tv","appletv")?"appletv":o.device_class==="tv"||Ve(s,"tv","televis")?"tv":"speaker":i==="climate"?"ac":i==="fan"?Ve(s,"purif","air clean")||n.includes("philips")&&r.startsWith("ac")?"purifier":"fan":i==="cover"?o.device_class==="door"||o.device_class==="garage"?"door":"blind":i==="lock"?"lock":i==="camera"?"camera":i==="vacuum"?"vacuum":i==="switch"||i==="input_boolean"?Ve(s,"tv","televis")?"tv":"plug":i==="binary_sensor"?["door","garage_door","opening"].includes(o.device_class)?"door":o.device_class==="window"?"window":["motion","occupancy","presence"].includes(o.device_class)?"motion":"sensor":i==="sensor"?"sensor":"other"}const ot=e=>({l:Math.min(30,Math.max(.25,Number(e?.l)||1)),r:((Number(e?.r)||0)%360+360)%360}),Lt=(e,t,a,i)=>e?.t&&Pe[e.t]?e.t:tr(t,a,i),Da=1600;function ar(e,t,a){e.fillStyle=a,t&&(e.fillStyle=t);const i=String(e.fillStyle);if(i[0]==="#")return[1,3,5].map(s=>parseInt(i.slice(s,s+2),16));const o=i.match(/[\d.]+/g);return o?o.slice(0,3).map(Number):[246,184,63]}const ye=(e,t)=>`rgba(${e[0]},${e[1]},${e[2]},${Math.max(0,Math.min(1,t)).toFixed(3)})`;function ir(e,t,a,i){const o=e.mode==="plan",s=o?0:t.rx*Math.PI/180,r=o?0:t.rz*Math.PI/180,n=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s),{W:g,D:z,stack:C}=e;let _;if(o)_=Math.max(.2,Math.min(1.6,(a-48)/g,(i-72)/z));else{const X=Math.hypot(g,z)+80;_=Math.max(.35,Math.min(1.25,(a-24)/X,(i-60)/(X*.62+C)))}_*=t.zoom||1;const b=a/2+(t.px||0),A=(o?i/2:i*.52)+(t.py||0),y=a/2,D=i*.35,F=(X,Z,v)=>{const V=X-g/2,p=Z-z/2,$=v-C/2,x=V*n-p*u,w=V*u+p*n,k=w*h-$*d,L=w*d+$*h,T=b+x*_,P=A+k*_;if(o)return[T,P,L];const U=Da/(Da-L);return[y+(T-y)*U,D+(P-D)*U,L]};return F.sc=_,F}function or(e,t,a){let i=!1;for(let o=0,s=e.length-1;o<e.length;s=o++){const[r,n]=e[o],[u,h]=e[s];n>a!=h>a&&t<(u-r)*(a-n)/(h-n)+r&&(i=!i)}return i}function sr(e,t,[a,i],[o,s]){const r=o-a,n=s-i,u=r*r+n*n||1,h=Math.max(0,Math.min(1,((e-a)*r+(t-i)*n)/u));return Math.hypot(e-(a+h*r),t-(i+h*n))}function rr(e,t,a,i){const o=t.querySelector("canvas"),s=t.clientWidth,r=t.clientHeight;if(!o||!s||!r)return()=>null;const n=Math.min(2,window.devicePixelRatio||1),u=Math.round(s*n),h=Math.round(r*n);(o.width!==u||o.height!==h)&&(o.width=u,o.height=h);const d=o.getContext("2d"),g=()=>d.setTransform(n,0,0,n,0,0);g(),d.clearRect(0,0,s,r);const z=getComputedStyle(e),C=ar(d,z.getPropertyValue("--amber").trim(),"#f6b83f"),_=ir(a,i,s,r),b=e.classList.contains("light")?"40,30,46":"255,255,255",A=a.mode==="plan",y=p=>{d.moveTo(p[0][0],p[0][1]);for(let $=1;$<p.length;$++)d.lineTo(p[$][0],p[$][1]);d.closePath()},D=([p,$,x,w],k)=>[_(p,$,k),_(p+x,$,k),_(p+x,$+w,k),_(p,$+w,k)],F=(p,$,x)=>{const w=_(p,$,x),k=_(p+1,$,x),L=_(p,$+1,x);d.setTransform(n*(k[0]-w[0]),n*(k[1]-w[1]),n*(L[0]-w[0]),n*(L[1]-w[1]),n*w[0],n*w[1])},X=a.wall,Z=[],v=[];for(const p of a.floors){const $=p.z;d.beginPath(),y(D(p.slab,$-2)),d.fillStyle=`rgba(${b},.07)`,d.fill(),d.strokeStyle=`rgba(${b},.14)`,d.lineWidth=1,d.stroke();for(const x of p.rooms){const w=x.glow?.rgb||C,k=x.glow?.k??.7,L=x.cells.map(T=>D(T,$));if(x.qs=L,v.push({id:x.id,qs:L}),d.beginPath(),L.forEach(y),d.fillStyle=`rgba(${b},.10)`,d.fill(),x.lit){d.save(),d.clip(),F(x.cx,x.cy,$);const T=Math.max(x.w,x.h)*.62,P=d.createRadialGradient(0,0,0,0,0,T);P.addColorStop(0,ye(w,.85*k)),P.addColorStop(.55,ye(w,.5*k)),P.addColorStop(1,ye(w,.22*k)),d.fillStyle=P,d.fillRect(-T,-T,2*T,2*T),d.restore(),g()}x.shape||(d.beginPath(),L.forEach(y),d.strokeStyle=x.lit?ye(w,.75):`rgba(${b},.16)`,d.lineWidth=1,d.stroke())}for(const x of p.rooms)for(const w of x.lights){if(!w.glow)continue;const k=w.glow.rgb||C,L=w.glow.k;if(d.save(),d.beginPath(),x.qs.forEach(y),d.clip(),F(w.x,w.y,$+1),w.kind==="strip")d.rotate(w.rot*Math.PI/180),d.scale((w.len+30+L*40)/2,(28+L*34)/2);else{const P=(60+L*90)/2;d.scale(P,P)}const T=d.createRadialGradient(0,0,0,0,0,1);T.addColorStop(0,ye(k,.75*L)),T.addColorStop(.55,ye(k,.3*L)),T.addColorStop(1,ye(k,0)),d.fillStyle=T,d.beginPath(),d.arc(0,0,1,0,Math.PI*2),d.fill(),d.restore(),g()}if(A){d.lineCap="round";for(const x of p.rooms){const w=x.glow?.rgb||C;d.beginPath();for(const k of x.edges){const L=_(k[0],k[1],$),T=_(k[2],k[3],$);d.moveTo(L[0],L[1]),d.lineTo(T[0],T[1])}d.strokeStyle=x.lit?ye(w,.8):`rgba(${b},.4)`,d.lineWidth=2.5,x.open&&d.setLineDash([6,4]),d.stroke(),d.setLineDash([])}}else{const x=[];for(const w of p.rooms)for(const k of w.edges){const L=_(k[0],k[1],$),T=_(k[2],k[3],$),P=_(k[0],k[1],$+X),U=_(k[2],k[3],$+X);x.push({R:w,q:[L,T,U,P],d:L[2]+T[2]+P[2]+U[2]})}x.sort((w,k)=>w.d-k.d);for(const{R:w,q:k}of x){const L=w.glow?.rgb||C,T=w.glow?.k??.7;d.beginPath(),y(k),d.fillStyle=`rgba(${b},.10)`,d.fill(),w.lit&&(d.fillStyle=ye(L,.24*T),d.fill()),d.strokeStyle=w.lit?ye(L,.5):`rgba(${b},.22)`,d.lineWidth=1,w.open&&d.setLineDash([4,3]),d.stroke(),d.setLineDash([])}}for(const x of p.rooms)for(const w of x.lights){const k=w.glow?.rgb||C,L=w.glow?.k??1,T=A?$:$+(w.kind==="ceiling"?X-2:3),P=w.on?`rgb(${k.map(fe=>Math.round(fe*.35+255*.65)).join(",")})`:`rgba(${b},.35)`,U=w.on?ye(k,1):`rgba(${b},.6)`;if(w.kind==="strip"){const fe=w.rot*Math.PI/180,ae=w.len/2,Le=_(w.x-Math.cos(fe)*ae,w.y-Math.sin(fe)*ae,T),Te=_(w.x+Math.cos(fe)*ae,w.y+Math.sin(fe)*ae,T);d.lineCap="round",w.on&&(d.strokeStyle=ye(k,.35*L+.15),d.lineWidth=14,d.beginPath(),d.moveTo(Le[0],Le[1]),d.lineTo(Te[0],Te[1]),d.stroke()),d.strokeStyle=U,d.lineWidth=8,d.beginPath(),d.moveTo(Le[0],Le[1]),d.lineTo(Te[0],Te[1]),d.stroke(),d.strokeStyle=P,d.lineWidth=4,d.stroke(),Z.push({id:w.id,seg:[Le,Te]});continue}const[we,I]=_(w.x,w.y,T),xe=w.kind==="ceiling"?10:8;if(w.on){const fe=xe+6+L*14,ae=d.createRadialGradient(we,I,xe*.6,we,I,fe);ae.addColorStop(0,ye(k,.55+.35*L)),ae.addColorStop(1,ye(k,0)),d.fillStyle=ae,d.beginPath(),d.arc(we,I,fe,0,Math.PI*2),d.fill()}d.beginPath(),d.arc(we,I,xe,0,Math.PI*2),d.fillStyle=P,d.fill(),d.strokeStyle=U,d.lineWidth=2,d.stroke(),Z.push({id:w.id,x:we,y:I})}}const V=Math.max(.55,Math.min(1,_.sc)).toFixed(3);return t.querySelectorAll("[data-at]").forEach(p=>{const[$,x,w]=p.dataset.at.split(",").map(Number),[k,L]=_($,x,w);p.style.transform=`translate(${k.toFixed(1)}px,${L.toFixed(1)}px) scale(${V})`}),(p,$)=>{let x=null,w=28;for(const k of Z){const L=k.seg?sr(p,$,k.seg[0],k.seg[1])+4:Math.hypot(p-k.x,$-k.y);L<w&&(w=L,x=k.id)}if(x)return{pin:x};for(let k=v.length-1;k>=0;k--)if(v[k].qs.some(L=>or(L,p,$)))return{room:v[k].id};return null}}const nr=`
.stage.cvs{cursor:grab}
.stage.cvs.flat{cursor:move}
.stage.cvs canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.cvl{position:absolute;left:0;top:0;pointer-events:none;transform-origin:0 0}
@media (max-width:720px){.cvl.fname{display:none}}
.cvl .lb{transform:translate(-50%,-100%);white-space:nowrap;text-align:center;padding:5px 11px;border-radius:13px;background:rgba(20,10,22,.78);border:1px solid rgba(255,255,255,.14);line-height:1.2}
.flat .cvl .lb{transform:translate(-50%,-50%)}
.cvl.lit .lb{background:var(--cream);color:var(--ink)}
.cvl.lit .lb small{color:var(--ink-soft)}
.cvl.fname .lb{background:rgba(20,10,22,.55);border:0;transform:translate(0,-100%)}
.cvl.fname .lb small{font-size:12px;letter-spacing:.18em;text-transform:uppercase}
.cvt{position:absolute;left:0;top:0;pointer-events:auto;cursor:pointer;transform-origin:0 0}
.cvt .mki{transform:translate(-50%,-50%);width:32px;height:32px;border-radius:50%;display:grid;place-items:center;background:rgba(25,14,28,.85);color:#fff;border:2px solid rgba(255,255,255,.45)}
.cvt.on .mki{background:var(--cream);color:var(--ink);border-color:#fff}
.cvt .mki ha-icon{--mdc-icon-size:18px}
`,S=56,Oi=30,Ce=14,lr={1:[2,2],2:[3,2],3:[4,3]},O={rx:58,rz:-38,floor:"all",sc:null,zoom:1,px:0,py:0};function Ra(e){const t=Math.min(4e4,Math.max(1e3,e))/100,a=r=>Math.round(Math.min(255,Math.max(0,r))),i=t<=66?255:329.698727446*Math.pow(t-60,-.1332047592),o=t<=66?99.4708025861*Math.log(t)-161.1195681661:288.1221695283*Math.pow(t-60,-.0755148492),s=t>=66?255:t<=19?0:138.5177312231*Math.log(t-10)-305.0447927307;return[a(i),a(o),a(s)]}function Nt(e,t){const a=e._s(t);if(!a||pt(t)!=="light"||!e._isOn(t))return null;const i=a.attributes,o=i.rgb_color||(i.color_temp_kelvin?Ra(i.color_temp_kelvin):i.color_temp?Ra(1e6/i.color_temp):null),s=i.brightness!=null?Math.max(.25,i.brightness/255):1;return{rgb:o,k:s}}const Ze=e=>e?`${e.rgb?`--lc:rgb(${e.rgb.join(",")});`:""}--li:${e.k.toFixed(2)};`:"";function cr(e){const t=e.filter(s=>s.rgb),a=e.length?Math.max(...e.map(s=>s.k)):.7;if(!t.length)return{rgb:null,k:a};const i=t.reduce((s,r)=>s+r.k,0);return{rgb:[0,1,2].map(s=>Math.round(t.reduce((r,n)=>r+n.rgb[s]*n.k,0)/i)),k:a}}function Ni(e){const t=e.count||0;return t<=3?1:t<=7?2:3}function Di(e,t){const a=e.map(h=>{const[d,g]=lr[t[h.id]||Ni(h)];return{room:h,w:d,d:g}}),i=a.reduce((h,d)=>h+d.w*d.d,0),o=Math.max(6,Math.ceil(Math.sqrt(i)*1.35),...a.map(h=>h.w));let s=0,r=0,n=0,u=0;for(const h of a.sort((d,g)=>g.d-d.d||g.w-d.w))s+h.w>o&&(r+=n,s=0,n=0),h.x=s,h.y=r,s+=h.w,n=Math.max(n,h.d),u=Math.max(u,s);return{items:a,W:u,D:r+n}}function dr(e,t){const a=e._cfg(),i=a.house_layout||{},o=p=>i[p.id]?.f??p.floor_level??0,s=[...new Set(t.map(o))].sort((p,$)=>p-$),r=p=>t.find($=>($.floor_level??0)===p&&$.floor)?.floor||N("Piso {n}",{n:p});O.floor!=="all"&&!s.includes(O.floor)&&(O.floor="all");const n=e._houseMode(),u=n==="image"||n==="plan",h=n==="plan";h&&O.floor==="all"&&s.length&&(O.floor=s[0]);const d=O.floor==="all"?s:[O.floor],g=d.map(p=>{const $=t.filter(I=>o(I)===p),x=$.filter(I=>i[I.id]).map(I=>({room:I,...i[I.id]})),w=Di($.filter(I=>!i[I.id]),a.house_size||{}),k=x.length?Math.max(...x.map(I=>I.x+I.w))+1:0,L=[...x,...w.items.map(I=>({...I,x:I.x+k}))],T=L.length?Math.min(...L.map(I=>I.x)):0,P=L.length?Math.min(...L.map(I=>I.y)):0,U=Math.max(T+1,...L.map(I=>I.x+I.w)),we=Math.max(P+1,...L.map(I=>I.y+I.d));return{lv:p,items:L,x0:T,y0:P,x1:U,y1:we,W:U-T,D:we-P}}),z=Object.keys(i).length>0,C=z?Math.min(...g.map(p=>p.x0)):0,_=z?Math.min(...g.map(p=>p.y0)):0,b=z?Math.max(...g.map(p=>p.x1))-C:Math.max(...g.map(p=>p.W),1),A=z?Math.max(...g.map(p=>p.y1))-_:Math.max(...g.map(p=>p.D),1),y=Math.max(8,Math.min(120,a.wall_height||Oi)),D=Math.max(110,y+100),F={mode:n,wall:y,W:b*S,D:A*S,stack:h?0:(d.length-1)*D,floors:[]},X=g.map((p,$)=>{const x=h?0:$*D,w=z?-C*S:((b-p.W)/2-p.x0)*S,k=z?-_*S:((A-p.D)/2-p.y0)*S,L={z:x,lv:p.lv,slab:[w+p.x0*S-Ce,k+p.y0*S-Ce,p.W*S+2*Ce,p.D*S+2*Ce],rooms:[]};F.floors.push(L);const T=p.items.map(P=>{const U=P.room,we=e._switchables(U),I=we.filter(E=>e._isOn(E)),xe=w+P.x*S,fe=k+P.y*S,ae={id:U.id,name:U.name,w:P.w*S,h:P.d*S,cx:xe+P.w*S/2,cy:fe+P.d*S/2,lights:[],things:[]};L.rooms.push(ae);const Le=a.placements||{},Te=i[U.id]?U.ents.filter(E=>Le[E]&&Le[E].f===o(U)):[],Yi=Te.map(E=>{const ee=Le[E],ve=Lt(ee,E,e._s(E),e._meta?.[E]||{}),[te,,J]=Pe[ve],he=`left:${(ee.x-P.x)/P.w*100}%;top:${(ee.y-P.y)/P.d*100}%`,q=e._isOn(E)?"on":"",B=Nt(e,E),Ae={id:E,x:xe+(ee.x-P.x)*S,y:fe+(ee.y-P.y)*S,on:!!q,glow:B,kind:J};if(J==="thing"?ae.things.push({...Ae,icon:te}):ae.lights.push(J==="strip"?{...Ae,len:ot(ee).l*S,rot:ot(ee).r}:Ae),J==="strip"){const Oe=ot(ee),Ji=Oe.l*S,$a=`--rot:${Oe.r}deg;--len:${Ji}px;`;return`<i class="pin k-strip ${q}" data-pin="${R(E)}" title="${R(e._name(E))}" style="${he};${$a}${Ze(B)}"></i>${B?`<i class="pool k-strip" style="${he};${$a}${Ze(B)}"></i>`:""}`}return J!=="thing"?`<i class="pin k-${J} ${q}" data-pin="${R(E)}" title="${R(e._name(E))}" style="${he};${Ze(B)}"></i>${B?`<i class="pool k-${J}" style="${he};${Ze(B)}"></i>`:""}`:J==="thing"?`<div class="mk3 ${q}" data-mk="${R(E)}" title="${R(e._name(E))}" style="${he}"><div class="mki"><ha-icon icon="${te}"></ha-icon></div></div>`:`<i class="pin k-${J} ${q}" data-pin="${R(E)}" title="${R(e._name(E))}" style="${he}"></i>`}).join(""),nt=U.ents.filter(E=>pt(E)==="light"&&!Te.includes(E)).slice(0,6),fa=e._roomClimate(U),ga=U.ents.some(E=>pt(E)==="binary_sensor"&&["door","window","garage_door","opening"].includes(e._s(E)?.attributes.device_class)&&e._s(E).state==="on"||pt(E)==="cover"&&e._isOn(E)),ue=P.cells?P.cells.map(([E,ee])=>[E-P.x,ee-P.y]):null;let va='<div class="fl"></div><div class="wl n"></div><div class="wl s"></div><div class="wl e"></div><div class="wl w"></div>',Pt=null,Et="";if(ue){const E=new Set(ue.map(([q,B])=>q+","+B)),ee=(q,B)=>E.has(q+","+B);va=ue.map(([q,B])=>{const Ae=q*S,Oe=B*S;return`<div class="fl c" style="left:${Ae}px;top:${Oe}px;width:${S}px;height:${S}px"></div>`+(ee(q,B-1)?"":`<div class="wl ws n" style="left:${Ae}px;top:${Oe}px;width:${S}px;height:var(--wall)"></div>`)+(ee(q,B+1)?"":`<div class="wl ws s" style="left:${Ae}px;top:calc(${Oe+S}px - var(--wall));width:${S}px;height:var(--wall)"></div>`)+(ee(q-1,B)?"":`<div class="wl ws w" style="left:${Ae}px;top:${Oe}px;width:var(--wall);height:${S}px"></div>`)+(ee(q+1,B)?"":`<div class="wl ws e" style="left:calc(${Ae+S}px - var(--wall));top:${Oe}px;width:var(--wall);height:${S}px"></div>`)}).join(""),Pt=nt.map((q,B)=>ue[Math.floor((B+.5)*ue.length/Math.max(1,nt.length))]).map(([q,B])=>[(q+.5)/P.w*100,(B+.5)/P.d*100]);const ve=ue.reduce((q,B)=>q+B[0],0)/ue.length,te=ue.reduce((q,B)=>q+B[1],0)/ue.length,[J,he]=ue.reduce((q,B)=>Math.hypot(B[0]-ve,B[1]-te)<Math.hypot(q[0]-ve,q[1]-te)?B:q,ue[0]);Et=`style="left:${(J+.5)*S}px;top:${(he+.5)*S}px"`}const $t=Math.min(3,Math.max(1,nt.length)),Xi=nt.map((E,ee)=>{const[ve,te]=Pt?Pt[ee]:[(ee%$t+1)/($t+1)*100,(Math.floor(ee/$t)+1)/(Math.ceil(nt.length/$t)+1)*100],J=Nt(e,E),he=`left:${ve}%;top:${te}%`;return ae.lights.push({id:E,x:xe+ve/100*P.w*S,y:fe+te/100*P.d*S,on:e._isOn(E),glow:J,kind:"lamp"}),`<i class="pin ${e._isOn(E)?"on":""}" data-pin="${R(E)}" title="${R(e._name(E))}" style="${he};${Ze(J)}"></i>${J?`<i class="pool" style="${he};${Ze(J)}"></i>`:""}`}).join(""),Tt=[fa.temp&&fa.temp.replace(/,\d/,"").replace(".","").replace("°C","°"),I.length?Na(I.length,"{n} ligado","{n} ligados"):null].filter(Boolean).join(" · "),Ki=U.ents.map(E=>Nt(e,E)).filter(Boolean),ba=I.length?cr(Ki):null;if(Object.assign(ae,{lit:I.length>0,open:ga,glow:ba,meta:Tt}),ue){ae.shape=!0,ae.cells=ue.map(([te,J])=>[xe+te*S,fe+J*S,S,S]);const E=new Set(ue.map(([te,J])=>te+","+J));ae.edges=ue.flatMap(([te,J])=>{const he=xe+te*S,q=fe+J*S,B=[];return E.has(te+","+(J-1))||B.push([he,q,he+S,q]),E.has(te+","+(J+1))||B.push([he,q+S,he+S,q+S]),E.has(te-1+","+J)||B.push([he,q,he,q+S]),E.has(te+1+","+J)||B.push([he+S,q,he+S,q+S]),B}),ae.cx=xe+(ue.reduce((te,J)=>te+J[0],0)/ue.length+.5)*S,ae.cy=fe+(ue.reduce((te,J)=>te+J[1],0)/ue.length+.5)*S;const[ee,ve]=Et.match(/[\d.]+/g).map(Number);ae.lx=xe+ee,ae.ly=fe+ve}else{const E=xe+3,ee=fe+3,ve=xe+P.w*S-3,te=fe+P.d*S-3;ae.cells=[[E,ee,ve-E,te-ee]],ae.edges=[[E,ee,ve,ee],[ve,ee,ve,te],[ve,te,E,te],[E,te,E,ee]],ae.lx=ae.cx,ae.ly=ae.cy}return`<div class="r3 ${I.length?"lit":""} ${ga?"open":""} ${ue?"shape":""}" data-room="${R(U.id)}" style="${Ze(ba)}left:${w+P.x*S}px;top:${k+P.y*S}px;width:${P.w*S}px;height:${P.d*S}px">
        ${va}
        ${Xi}${Yi}
        <div class="lbw" ${Et}><div class="lb"><b>${R(U.name)}</b>${Tt?`<small>${R(Tt)}</small>`:""}</div></div>
      </div>`}).join("");return`<div class="fl3" style="transform:translateZ(${x}px)">
      <div class="slab" style="left:${w+p.x0*S-Ce}px;top:${k+p.y0*S-Ce}px;width:${p.W*S+2*Ce}px;height:${p.D*S+2*Ce}px"></div>
      ${T}
      ${d.length>1?`<div class="lbw flab" style="left:${w+p.x0*S-Ce}px;top:${k+p.y0*S-Ce}px"><div class="lb"><small>${R(r(p.lv))}</small></div></div>`:""}
    </div>`}).join(""),Z=s.length>1?`<div class="chips3">
      ${h?"":`<button class="pill ${O.floor==="all"?"solid":""}" data-floor="all">${N("Todos os pisos")}</button>`}
      ${s.map(p=>`<button class="pill ${O.floor===p?"solid":""}" data-floor="${p}">${R(r(p))}</button>`).join("")}
    </div>`:"",v=u?F.floors.map(p=>[...p.rooms.map($=>`<div class="cvl ${$.lit?"lit":""}" data-at="${$.lx},${$.ly},${h?p.z:p.z+y+26}"><div class="lb"><b>${R($.name)}</b>${$.meta?`<small>${R($.meta)}</small>`:""}</div></div>`),...p.rooms.flatMap($=>$.things.map(x=>`<div class="cvt ${x.on?"on":""}" data-mk="${R(x.id)}" title="${R(e._name(x.id))}" data-at="${x.x},${x.y},${h?p.z:p.z+16}"><div class="mki"><ha-icon icon="${x.icon}"></ha-icon></div></div>`)),d.length>1&&!h?`<div class="cvl fname" data-at="${p.slab[0]},${p.slab[1]},${p.z}"><div class="lb"><small>${R(r(p.lv))}</small></div></div>`:""].join("")).join(""):"";e._house=F;const V=t.filter(p=>e._switchables(p).some($=>e._isOn($))).length;return`<div class="hero"><div><div class="eyebrow">${Na(V,"{n} divisão acesa","{n} divisões acesas")}</div><div class="t" style="margin-top:8px">${N("Casa 3D")}</div></div>
      <div class="right"><button class="pill" data-editplan><ha-icon icon="mdi:floor-plan"></ha-icon>${N("Editar planta")}</button>${e._gear()}</div></div>
    ${Z}
    <div class="stage ${u?`cvs ${h?"flat":""}`:n==="lite"?"lite3d":"glass"}" data-stage>
      ${u?`<canvas></canvas>${t.length?v:""}`:`<div class="scene3d" style="--rx:${O.rx}deg;--rz:${O.rz}deg;--sc:${(O.sc??1)*O.zoom};--px:${O.px}px;--py:${O.py}px;--zi:${(1/O.zoom).toFixed(3)};width:${b*S}px;height:${A*S}px;--stack:${(d.length-1)*D}px;--wall:${y}px">
        ${t.length?X:""}
      </div>`}
      <div class="ctl3">
        <button class="mini" data-zoom="out" title="${N("Afastar")}"><ha-icon icon="mdi:minus"></ha-icon></button>
        <button class="mini" data-zoom="in" title="${N("Aproximar")}"><ha-icon icon="mdi:plus"></ha-icon></button>
        ${h?`<button class="mini" data-rot="reset" title="${N("Repor vista")}"><ha-icon icon="mdi:crosshairs"></ha-icon></button>`:`
        <button class="mini" data-rot="-30" title="${N("Rodar")}"><ha-icon icon="mdi:rotate-left"></ha-icon></button>
        <button class="mini" data-rot="reset" title="${N("Repor vista")}"><ha-icon icon="mdi:crosshairs"></ha-icon></button>
        <button class="mini" data-rot="30" title="${N("Rodar")}"><ha-icon icon="mdi:rotate-right"></ha-icon></button>
        <button class="mini" data-wall="-6" title="${N("Paredes mais baixas")}"><ha-icon icon="mdi:arrow-collapse-vertical"></ha-icon></button>
        <button class="mini" data-wall="6" title="${N("Paredes mais altas")}"><ha-icon icon="mdi:arrow-expand-vertical"></ha-icon></button>`}
      </div>
      <div class="hint3">${N(h?"Arrasta para mover · Dois dedos para aproximar · Toca numa divisão para a abrir ou numa luz para a ligar":"Arrasta para rodar · Dois dedos para aproximar · Toca numa divisão para a abrir ou numa luz para a ligar")}</div>
    </div>
    ${t.length?"":`<div class="empty">${N("Ainda não há divisões com dispositivos.")}</div>`}`}function ur(e,t){const a=t.querySelector("[data-stage]");if(!a)return;const i=a.querySelector(".scene3d"),o=e._house,s=!i&&o&&a.querySelector("canvas"),r=o?.mode==="plan"&&!!s;let n=()=>null;const u=()=>{s&&(n=rr(e,a,o,O))};let h=0;const d=()=>{h||(h=requestAnimationFrame(()=>{if(h=0,s){u();return}const v=i.style;v.setProperty("--rx",O.rx+"deg"),v.setProperty("--rz",O.rz+"deg"),v.setProperty("--sc",(O.sc??1)*O.zoom),v.setProperty("--px",O.px+"px"),v.setProperty("--py",O.py+"px"),v.setProperty("--zi",(1/O.zoom).toFixed(3))}))},g=()=>{if(s){u();return}const v=i.offsetWidth,V=i.offsetHeight,p=Math.hypot(v,V)+80,$=Math.min(1.25,(a.clientWidth-24)/p,(a.clientHeight-60)/(p*.62+parseFloat(i.style.getPropertyValue("--stack")||0)));O.sc=Math.max(.35,$).toFixed(3),i.style.setProperty("--sc",O.sc*O.zoom)};g();const z=()=>[a.clientWidth/2,a.clientHeight*(r?.5:.52)],C=(v,V,p,$,x)=>{v=Math.min(3,Math.max(.6,v));const[w,k]=z(),L=v/$,T=a.clientWidth*v/2,P=a.clientHeight*v/2;O.zoom=v,O.px=Math.max(-T,Math.min(T,p[0]-w-(V[0]-w-x[0])*L)),O.py=Math.max(-P,Math.min(P,p[1]-k-(V[1]-k-x[1])*L)),d()},_=v=>{const V=a.getBoundingClientRect();return[v.clientX-V.left,v.clientY-V.top]},b=new Map;let A=null,y=null,D=!1;const F=()=>{e._drag||(e._drag=!0,a.classList.add("rotating"))};a.addEventListener("pointerdown",v=>{if(!v.target.closest("button")){if(b.set(v.pointerId,_(v)),b.size===2){const[V,p]=[...b.values()];y={d:Math.hypot(V[0]-p[0],V[1]-p[1])||1,m:[(V[0]+p[0])/2,(V[1]+p[1])/2],z:O.zoom,p:[O.px,O.py]},A=null,D=!0,F();for(const $ of b.keys())try{a.setPointerCapture($)}catch{}return}b.size===1&&(A={x:v.clientX,y:v.clientY,rx:O.rx,rz:O.rz,px:O.px,py:O.py},D=!1)}}),a.addEventListener("pointermove",v=>{if(!b.has(v.pointerId))return;if(b.set(v.pointerId,_(v)),y&&b.size>=2){const[$,x]=[...b.values()],w=Math.hypot($[0]-x[0],$[1]-x[1])||1;C(y.z*(w/y.d),y.m,[($[0]+x[0])/2,($[1]+x[1])/2],y.z,y.p);return}if(!A)return;const V=v.clientX-A.x,p=v.clientY-A.y;!D&&Math.hypot(V,p)>8&&(D=!0,a.setPointerCapture(v.pointerId),F()),D&&(r?(O.px=A.px+V,O.py=A.py+p):(O.rz=A.rz-V*.35,O.rx=Math.min(78,Math.max(18,A.rx-p*.25))),d())});const X=v=>{b.delete(v.pointerId),b.size<2&&(y=null),b.size===1&&(A=null),!b.size&&(A=null,e._drag=null,a.classList.remove("rotating"),setTimeout(()=>{D=!1},0))};a.addEventListener("pointerup",X),a.addEventListener("pointercancel",X),a.addEventListener("wheel",v=>{v.preventDefault();const V=_(v);C(O.zoom*Math.exp(-v.deltaY*.0015),V,V,O.zoom,[O.px,O.py])},{passive:!1});const Z=(v,V,p)=>{let $=null,x=p;return a.querySelectorAll(".pin[data-pin], [data-mk] .mki").forEach(w=>{const k=w.getBoundingClientRect(),L=Math.hypot(Math.max(k.left-v,0,v-k.right),Math.max(k.top-V,0,V-k.bottom));L<x&&(x=L,$=w)}),$};a.addEventListener("click",v=>{if(D){v.stopPropagation();return}if(v.target.closest("button"))return;if(s){const x=v.target.closest("[data-mk]");if(x){v.stopPropagation(),e._openModal(x.dataset.mk);return}const w=n(..._(v));w?.pin?(v.stopPropagation(),e._call("homeassistant","toggle",{entity_id:w.pin})):w?.room&&(v.stopPropagation(),e._go("room",w.room));return}const V=Z(v.clientX,v.clientY,26);if(V?.dataset.pin){v.stopPropagation(),e._call("homeassistant","toggle",{entity_id:V.dataset.pin});return}const p=V?.closest("[data-mk]");if(p){v.stopPropagation(),e._openModal(p.dataset.mk);return}const $=v.target.closest("[data-room]");$&&(v.stopPropagation(),e._go("room",$.dataset.room))},!0),t.querySelectorAll("[data-rot]").forEach(v=>v.addEventListener("click",()=>{v.dataset.rot==="reset"?Object.assign(O,{rx:58,rz:-38,zoom:1,px:0,py:0}):O.rz+=Number(v.dataset.rot),d()})),t.querySelectorAll("[data-zoom]").forEach(v=>v.addEventListener("click",()=>{const V=z();C(O.zoom*(v.dataset.zoom==="in"?1.35:1/1.35),V,V,O.zoom,[O.px,O.py])})),t.querySelectorAll("[data-wall]").forEach(v=>v.addEventListener("click",()=>{const V=e._cfg().wall_height||Oi,p=Math.max(10,Math.min(100,V+Number(v.dataset.wall)));p!==V&&(e._saveSettings({wall_height:p}),e._render())})),t.querySelector("[data-editplan]")?.addEventListener("click",()=>e._openSettings("plan")),t.querySelectorAll("[data-floor]").forEach(v=>v.addEventListener("click",()=>{O.floor=v.dataset.floor==="all"?"all":Number(v.dataset.floor),e._render()})),e._fit3d=g}const hr=`
.chips3{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}
.stage{position:relative;margin-top:20px;border-radius:32px;height:min(68vh,640px);min-height:380px;overflow:hidden;perspective:1600px;perspective-origin:50% 35%;cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none}
.stage.rotating{cursor:grabbing}
.scene3d{position:absolute;left:50%;top:52%;transform-style:preserve-3d;transform:translate(calc(-50% + var(--px,0px)),calc(-50% + var(--py,0px))) scale(var(--sc)) rotateX(var(--rx)) rotateZ(var(--rz)) translateZ(calc(var(--stack) / -2));transition:transform .08s linear}
.fl3{position:absolute;inset:0;transform-style:preserve-3d;pointer-events:none}
.fl3 .r3{pointer-events:auto}
.fl3 .r3.shape{pointer-events:none}
.slab{position:absolute;pointer-events:none;border-radius:14px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 60px rgba(0,0,0,.35);transform:translateZ(-2px)}
.r3{position:absolute;transform-style:preserve-3d;cursor:pointer;padding:3px}
.r3 .fl{position:absolute;inset:3px;border-radius:10px;background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.16);transition:background .3s,box-shadow .3s}
.r3:hover .fl{background:rgba(255,255,255,.16)}
.r3{--lc:var(--amber);--li:1}
.r3.lit .fl{background:radial-gradient(circle at 50% 50%,color-mix(in srgb,var(--lc) calc(var(--li) * 85%),transparent) 0%,color-mix(in srgb,var(--lc) calc(var(--li) * 50%),transparent) 55%,color-mix(in srgb,var(--lc) calc(var(--li) * 22%),transparent) 100%);box-shadow:0 0 calc(var(--li) * 44px) color-mix(in srgb,var(--lc) calc(var(--li) * 55%),transparent);border-color:color-mix(in srgb,var(--lc) 70%,#fff)}
.r3 .wl{position:absolute;background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.20);backface-visibility:visible}
.r3.lit .wl{background:color-mix(in srgb,var(--lc) calc(var(--li) * 24%),rgba(255,255,255,.12));border-color:color-mix(in srgb,var(--lc) 45%,rgba(255,255,255,.3))}
.r3.open .wl.s,.r3.open .wl.e{border-style:dashed}
.r3 .wl.n{left:3px;right:3px;top:3px;height:var(--wall);transform-origin:top;transform:rotateX(90deg)}
.r3 .wl.s{left:3px;right:3px;bottom:3px;height:var(--wall);transform-origin:bottom;transform:rotateX(-90deg)}
.r3 .wl.w{top:3px;bottom:3px;left:3px;width:var(--wall);transform-origin:left;transform:rotateY(-90deg)}
.r3 .wl.e{top:3px;bottom:3px;right:3px;width:var(--wall);transform-origin:right;transform:rotateY(90deg)}
.r3.shape{padding:0;pointer-events:none}
.r3.shape .fl.c{inset:auto;border-radius:0;border:0;pointer-events:auto}
.r3.shape.lit .fl.c{background:color-mix(in srgb,var(--lc) calc(var(--li) * 62%),rgba(255,255,255,.12));box-shadow:none}
.r3.shape .pin{pointer-events:auto}
.r3 .wl.ws{right:auto;bottom:auto}
.r3 .wl.ws.n{transform-origin:top;transform:rotateX(90deg)}
.r3 .wl.ws.s{transform-origin:bottom;transform:rotateX(-90deg)}
.r3 .wl.ws.w{transform-origin:left;transform:rotateY(-90deg)}
.r3 .wl.ws.e{transform-origin:right;transform:rotateY(90deg)}
.pin{position:absolute;width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:50%;background:rgba(255,255,255,.35);border:2px solid rgba(255,255,255,.6);transform:translateZ(3px);cursor:pointer}
.pin.k-ceiling{transform:translateZ(calc(var(--wall) - 2px));width:20px;height:20px;margin:-10px 0 0 -10px}
.pin.k-ceiling.on{box-shadow:0 0 calc(10px + var(--li) * 16px) calc(var(--li) * 9px) var(--lc)}
.pin.k-strip{--len:44px;--rot:0deg;width:var(--len);height:8px;margin:-4px 0 0 calc(var(--len) / -2);border-radius:4px;transform:translateZ(3px) rotate(var(--rot))}
.pin.k-strip.on{box-shadow:0 0 calc(8px + var(--li) * 12px) calc(var(--li) * 6px) var(--lc)}
.mk3{position:absolute;transform-style:preserve-3d;pointer-events:auto;cursor:pointer}
.mki{transform:translateZ(16px) rotateZ(calc(var(--rz) * -1)) rotateX(calc(var(--rx) * -1)) translate(-50%,-50%);width:32px;height:32px;border-radius:50%;display:grid;place-items:center;
  background:rgba(25,14,28,.8);color:#fff;border:2px solid rgba(255,255,255,.45);box-shadow:0 4px 12px rgba(0,0,0,.4);transform-origin:0 0}
.mki ha-icon{--mdc-icon-size:18px}
.mk3.on .mki{background:var(--cream);color:var(--ink);border-color:#fff;box-shadow:0 0 16px color-mix(in srgb,var(--amber) 60%,transparent)}
.r3.shape .mk3{pointer-events:auto}
.pin{--lc:var(--amber);--li:1}
.pin.on{background:color-mix(in srgb,var(--lc) 35%,#fff);border-color:var(--lc);box-shadow:0 0 calc(6px + var(--li) * 12px) calc(var(--li) * 5px) var(--lc)}
/* the light it casts on the floor: its own colour, wider and brighter with the brightness */
.pool{--lc:var(--amber);--li:1;position:absolute;width:calc(60px + var(--li) * 90px);height:calc(60px + var(--li) * 90px);border-radius:50%;transform:translate(-50%,-50%) translateZ(1px);pointer-events:none;
  background:radial-gradient(closest-side,color-mix(in srgb,var(--lc) calc(var(--li) * 75%),transparent),color-mix(in srgb,var(--lc) calc(var(--li) * 30%),transparent) 55%,transparent)}
.pool.k-strip{--len:44px;--rot:0deg;width:calc(var(--len) + 30px + var(--li) * 40px);height:calc(28px + var(--li) * 34px);border-radius:999px;transform:translate(-50%,-50%) translateZ(1px) rotate(var(--rot))}
.lbw{position:absolute;left:50%;top:50%;transform-style:preserve-3d;transform:translateZ(calc(var(--wall) + 26px)) rotateZ(calc(var(--rz) * -1)) rotateX(calc(var(--rx) * -1));pointer-events:none}
.lb{transform:translate(-50%,-100%) scale(var(--zi,1));transform-origin:50% 100%;white-space:nowrap;text-align:center;padding:6px 12px;border-radius:14px;background:rgba(20,10,22,.55);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.14);line-height:1.2}
.lb b{display:block;font-family:var(--display);font-weight:500;font-size:15px}
.lb small{display:block;font-size:12px;color:var(--muted)}
.r3.lit .lb{background:color-mix(in srgb,var(--cream) 92%,transparent);color:var(--ink)}
.r3.lit .lb small{color:var(--ink-soft)}
.flab{transform:translateZ(4px) rotateZ(calc(var(--rz) * -1)) rotateX(calc(var(--rx) * -1))}
.flab .lb{background:rgba(20,10,22,.45);border:0;transform:translate(-50%,-50%) scale(var(--zi,1));transform-origin:50% 50%}
.flab .lb small{font-size:13px;letter-spacing:.18em;text-transform:uppercase}
.ctl3{position:absolute;right:16px;top:16px;display:flex;gap:8px}
.hint3{position:absolute;left:0;right:0;bottom:14px;text-align:center;font-size:13px;color:var(--muted);pointer-events:none;padding:0 16px}
@media (max-width:720px){.flab{display:none}}
/* 3D light: the same scene without the costly bits (blur, big shadows, transitions) */
.stage.lite3d,.stage.cvs{background:rgba(255,255,255,.06);border:1px solid var(--line)}
.lite3d .scene3d,.lite3d .r3 .fl{transition:none}
.lite3d .slab,.lite3d .r3.lit .fl,.lite3d .pin.on,.lite3d .pin.k-ceiling.on,.lite3d .pin.k-strip.on,.lite3d .mki,.lite3d .mk3.on .mki{box-shadow:none}
.lite3d .lb{backdrop-filter:none;-webkit-backdrop-filter:none;background:rgba(20,10,22,.8)}
.lite3d .r3.lit .lb{background:var(--cream)}
.lite3d .pool{background:radial-gradient(closest-side,color-mix(in srgb,var(--lc) calc(var(--li) * 55%),transparent),transparent)}
${nr}`,ne=24,pe=16,f={floor:null,armed:null,selected:null,extraFloors:[],tool:"move",brush:null,placeRoom:null,pmArmed:null,pmSel:null},pr=(e,t)=>t[e.id]?.f??e.floor_level??0,Se=(e,t)=>`${e},${t}`;function Kt(e){if(e.cells)return e.cells;const t=[];for(let a=e.y;a<e.y+e.d;a++)for(let i=e.x;i<e.x+e.w;i++)t.push([i,a]);return t}function Ia(e,t){if(!t.length)return null;const a=t.map(h=>h[0]),i=t.map(h=>h[1]),o=Math.min(...a),s=Math.min(...i),r=Math.max(...a)-o+1,n=Math.max(...i)-s+1,u=[...new Map(t.map(h=>[Se(h[0],h[1]),h])).values()].sort((h,d)=>h[1]-d[1]||h[0]-d[0]);return u.length===r*n?{f:e,x:o,y:s,w:r,d:n}:{f:e,x:o,y:s,w:r,d:n,cells:u}}function Ri(e,t){return[...new Set([...e.map(a=>pr(a,t)),...f.extraFloors])].sort((a,i)=>a-i)}function ja(e,t){return e.find(a=>(a.floor_level??0)===t&&a.floor)?.floor||N("Piso {n}",{n:t})}function mr(e,t){const a={},i=[...new Set(e.map(o=>o.floor_level??0))];for(const o of i){const{items:s}=Di(e.filter(r=>(r.floor_level??0)===o),t);for(const r of s)a[r.room.id]={f:o,x:Math.min(r.x,ne-1),y:Math.min(r.y,pe-1),w:Math.min(r.w,ne),d:Math.min(r.d,pe)}}return a}const ce=(e,t)=>`${e/t*100}%`;function fr(e,t,a){return a.entities?a.entities.filter(i=>e._entShown(t,i)&&e._s(i.id)):(a.ents||[]).filter(i=>e._s(i)&&!i.startsWith("scene.")).map(i=>({id:i,name:e._name(i)}))}function gr(e,t,a,i){const o=t.placements||{},s=new Map(a.flatMap(r=>(r.entities||[]).map(n=>[n.id,n])));return Object.entries(o).filter(([r,n])=>n.f===i&&e._s(r)).map(([r,n])=>{const u=Lt(n,r,e._s(r),s.get(r)||{}),h=s.get(r)?.name||e._name(r),d=Pe[u][2]==="strip"?ot(n):null;return`${d?`<i class="pst ${e._isOn(r)?"on":""}" data-pst="${R(r)}" style="left:${ce(n.x,ne)};top:${ce(n.y,pe)};width:${ce(d.l,ne)};transform:translate(-50%,-50%) rotate(${d.r}deg)"></i>`:""}<div class="pm ${f.pmSel===r?"sel":""} ${e._isOn(r)?"on":""} k-${Pe[u][2]}" data-pm="${R(r)}" title="${R(h)}" style="left:${ce(n.x,ne)};top:${ce(n.y,pe)}">
      <ha-icon icon="${Pe[u][0]}"></ha-icon></div>`}).join("")}function vr(e,t,a,i){const o=t.house_layout||{},s=t.placements||{},r=a.filter(C=>o[C.id]?.f===i),n=[...r,...a.filter(C=>!r.includes(C))];(!f.placeRoom||!a.some(C=>C.id===f.placeRoom))&&(f.placeRoom=(r[0]||a[0])?.id);const u=a.find(C=>C.id===f.placeRoom),h=new Map(a.flatMap(C=>(C.entities||[]).map(_=>[_.id,_]))),d=u?fr(e,t,u):[],g=f.pmSel&&s[f.pmSel]?f.pmSel:null,z=g?Lt(s[g],g,e._s(g),h.get(g)||{}):null;return`
    ${g?`<div class="psel">
        <b><ha-icon icon="${Pe[z][0]}"></ha-icon>${R(h.get(g)?.name||e._name(g))}</b>
        <button class="pill" data-pmremove><ha-icon icon="mdi:close"></ha-icon>${N("Tirar da planta")}</button>
        ${Pe[z][2]==="strip"?(()=>{const C=ot(s[g]);return`<div class="pstrip">
            <label><span>${N("Comprimento")}</span><input type="range" min="0.25" max="12" step="0.25" value="${C.l}" data-pslen><b data-pslenv>${C.l.toLocaleString(void 0,{maximumFractionDigits:2})}</b></label>
            <label><span>${N("Orientação")}</span><input type="range" min="0" max="345" step="15" value="${C.r}" data-psrot><b data-psrotv>${C.r}°</b></label>
            <small>${N("O comprimento conta em quadrículas da planta. A orientação roda a fita à volta do seu centro.")}</small></div>`})():""}
        <div class="ptypes">${Object.entries(Pe).map(([C,[_,b]])=>`<button class="pill ${C===z?"solid":""}" data-pmtype="${C}" title="${N(b)}"><ha-icon icon="${_}"></ha-icon>${N(b)}</button>`).join("")}</div>
      </div>`:""}
    <div class="sub">${N("Divisão")}</div>
    <div class="seg">${n.map(C=>`<button class="pill ${C.id===f.placeRoom?"solid":""}" data-proom="${R(C.id)}"><ha-icon icon="${C.icon||"mdi:home-outline"}"></ha-icon>${R(e._roomName(C))}</button>`).join("")}</div>
    <div class="sub">${N("Dispositivos")}</div>
    <div class="seg">${d.length?d.map(C=>{const _=Lt(s[C.id],C.id,e._s(C.id),C),b=!!s[C.id];return`<button class="pill ${f.pmArmed===C.id?"solid":""} ${b?"placed":""}" data-parment="${R(C.id)}"><ha-icon icon="${Pe[_][0]}"></ha-icon>${R(C.name)}${b?' <ha-icon class="ok" icon="mdi:check"></ha-icon>':""}</button>`}).join(""):`<span class="phint">${N("Esta divisão não tem dispositivos visíveis.")}</span>`}</div>`}function br(e,t,a,i,o){const s=`<span class="pn"><ha-icon icon="${t.icon||"mdi:home-outline"}"></ha-icon>${R(e._roomName(t))}</span>`,r=`left:${ce(a.x,ne)};top:${ce(a.y,pe)};width:${ce(a.w,ne)};height:${ce(a.d,pe)}`;if(!a.cells)return`<div class="pr ${i?"sel":""} ${o?"bad":""}" data-pr="${R(t.id)}" style="${r}">
      ${s}<small class="pd">${a.w}×${a.d}</small><i class="rh" data-rh="${R(t.id)}"></i></div>`;const n=new Set(a.cells.map(g=>Se(g[0],g[1]))),u=a.cells.map(([g,z])=>{const C=[!n.has(Se(g,z-1)),!n.has(Se(g+1,z)),!n.has(Se(g,z+1)),!n.has(Se(g-1,z))],_=[C[0]&&C[3],C[0]&&C[1],C[2]&&C[1],C[2]&&C[3]].map(b=>b?"8px":"0").join(" ");return`<i class="pc" style="left:${ce(g-a.x,a.w)};top:${ce(z-a.y,a.d)};width:${ce(1,a.w)};height:${ce(1,a.d)};border-width:${C.map(b=>b?"2px":"0").join(" ")};border-radius:${_}"></i>`}).join(""),[h,d]=a.cells[0];return`<div class="pr shape ${i?"sel":""} ${o?"bad":""}" data-pr="${R(t.id)}" style="${r}">
    ${u}<span class="pnw" style="left:${ce(h-a.x,a.w)};top:${ce(d-a.y,a.d)}">${s}</span></div>`}function $r(e,t,a){const i=t.house_layout||{},o=Ri(a,i);(f.floor==null||!o.includes(f.floor))&&(f.floor=o[0]??0);const s=f.floor,r=a.filter(y=>i[y.id]&&i[y.id].f===s),n=a.filter(y=>!i[y.id]),u=f.selected&&i[f.selected]?a.find(y=>y.id===f.selected):null;f.brush&&!a.some(y=>y.id===f.brush)&&(f.brush=null);const h=new Map,d=new Set;for(const y of r)for(const[D,F]of Kt(i[y.id])){const X=Se(D,F);h.has(X)?(d.add(y.id),d.add(h.get(X))):h.set(X,y.id)}const g=r.map(y=>br(e,y,i[y.id],f.selected===y.id,d.has(y.id))).join(""),z=[["move","mdi:cursor-move",N("Mover e redimensionar")],["paint","mdi:brush",N("Pintar quadrículas")],["erase","mdi:eraser",N("Apagar quadrículas")],["place","mdi:map-marker-plus-outline",N("Dispositivos")]],C=[...r,...n],_=f.brush?e._roomName(a.find(y=>y.id===f.brush)):"",b=f.pmArmed?a.flatMap(y=>y.entities||[]).find(y=>y.id===f.pmArmed)?.name||e._name(f.pmArmed):"",A=f.tool==="place"?f.pmArmed?N("Toca na planta para pôr «{e}».",{e:R(b)}):N("Escolhe um dispositivo em baixo e toca na planta para o pôr. Arrasta os que já estão na planta para os mudar de sítio."):f.tool==="paint"?f.brush?N("Toca ou arrasta nas quadrículas para as juntar a «{r}». Pintar por cima de outra divisão passa essas quadrículas para esta.",{r:R(_)}):N("Escolhe em baixo a divisão a pintar."):f.tool==="erase"?N("Toca ou arrasta nas quadrículas para as tirar da divisão."):f.armed?N("Desenha um retângulo na grelha para colocar «{r}».",{r:R(e._roomName(a.find(y=>y.id===f.armed)||{name:""}))}):N("Arrasta uma divisão para a mover e o canto para a redimensionar. Para colocar uma divisão nova, escolhe-a em baixo e desenha-a na grelha.");return`<div class="panel glass">
      <h3 style="margin-top:0">${N("Planta da casa")}</h3>
      <p>${N("Desenha cada piso visto de cima. A Casa 3D usa esta planta: as divisões que não colocares são arrumadas automaticamente.")}</p>
      <div class="wallh"><b>${N("Altura das paredes")}</b>
        <input type="range" min="10" max="100" step="2" value="${t.wall_height||30}" data-wallh>
        <span data-wallv>${t.wall_height||30}</span></div>
      <div class="seg">${o.map(y=>`<button class="pill ${y===s?"solid":""}" data-pfloor="${y}">${R(ja(a,y))}</button>`).join("")}
        <button class="pill" data-pfloor-add><ha-icon icon="mdi:plus"></ha-icon>${N("Piso")}</button></div>
      <div class="seg ptools">${z.map(([y,D,F])=>`<button class="pill ${f.tool===y?"solid":""}" data-ptool="${y}"><ha-icon icon="${D}"></ha-icon>${F}</button>`).join("")}</div>
      ${f.tool==="paint"?`<div class="seg">${C.map(y=>`<button class="pill ${f.brush===y.id?"solid":""}" data-pbrush="${R(y.id)}"><ha-icon icon="${y.icon||"mdi:home-outline"}"></ha-icon>${R(e._roomName(y))}</button>`).join("")}</div>`:""}
      <div class="pgrid tool-${f.tool}" data-pgrid style="--cols:${ne};--rows:${pe}">${g}${gr(e,t,a,s)}<div class="pdraw" hidden></div></div>
      <div class="phint">${A}</div>
      ${f.tool==="place"?vr(e,t,a,s):""}
      ${u&&f.tool==="move"?`<div class="psel">
          <b><ha-icon icon="${u.icon||"mdi:home-outline"}"></ha-icon>${R(e._roomName(u))}</b>
          <span class="seg sm">${o.map(y=>`<button class="pill ${i[u.id].f===y?"solid":""}" data-pmove="${y}">${R(ja(a,y))}</button>`).join("")}</span>
          <button class="pill" data-pshape><ha-icon icon="mdi:brush"></ha-icon>${N("Editar forma")}</button>
          <button class="pill" data-premove><ha-icon icon="mdi:close"></ha-icon>${N("Tirar da planta")}</button>
        </div>`:""}
      ${n.length&&f.tool==="move"?`<div class="sub">${N("Por colocar")}</div><div class="seg">${n.map(y=>`<button class="pill ${f.armed===y.id?"solid":""}" data-parm="${R(y.id)}"><ha-icon icon="${y.icon||"mdi:home-outline"}"></ha-icon>${R(e._roomName(y))}</button>`).join("")}</div>`:""}
      <div class="row" style="justify-content:flex-start;margin-top:20px">
        <button class="pill" data-pauto><ha-icon icon="mdi:auto-fix"></ha-icon>${N("Gerar planta automática")}</button>
        <button class="pill" data-pclear><ha-icon icon="mdi:eraser-variant"></ha-icon>${N("Limpar este piso")}</button>
      </div>
    </div>`}function wr(e,t,a,i){if(!t.querySelector("[data-pgrid]"))return;const o=()=>a.house_layout={...a.house_layout||{}},s=()=>e._render(),r=()=>t.querySelector("[data-pgrid]"),n=b=>{const A=r().getBoundingClientRect();return{x:(b.clientX-A.left)/A.width*ne,y:(b.clientY-A.top)/A.height*pe}},u=(b,A,y)=>Math.max(A,Math.min(y,b)),h=(b,A)=>t.querySelectorAll(b).forEach(y=>y.addEventListener("click",D=>A(y,D))),d=t.querySelector("[data-wallh]");d&&(d.addEventListener("input",()=>{t.querySelector("[data-wallv]").textContent=d.value}),d.addEventListener("change",()=>{a.wall_height=Number(d.value),s()})),h("[data-pfloor]",b=>{f.floor=Number(b.dataset.pfloor),f.selected=null,s()}),h("[data-pfloor-add]",()=>{const b=Math.max(...Ri(i,a.house_layout||{}),-1)+1;f.extraFloors=[...new Set([...f.extraFloors,b])],f.floor=b,f.selected=null,s()}),h("[data-ptool]",b=>{f.tool=b.dataset.ptool,f.armed=null,f.tool==="paint"&&!f.brush&&(f.brush=f.selected),s()}),h("[data-pbrush]",b=>{f.brush=b.dataset.pbrush,s()});const g=()=>a.placements={...a.placements||{}};h("[data-proom]",b=>{f.placeRoom=b.dataset.proom,f.pmArmed=null,s()}),h("[data-parment]",b=>{const A=b.dataset.parment;f.pmArmed=f.pmArmed===A?null:A,f.pmSel=a.placements?.[A]?A:null,s()}),h("[data-pmremove]",()=>{const b=g();delete b[f.pmSel],f.pmSel=null,s()});const z=(b,A,y,D)=>{const F=t.querySelector(b);if(!F)return;const X=f.pmSel,Z=()=>{const v=g();v[X]={...v[X],[y]:Number(F.value)};const V=ot(v[X]);t.querySelector(A).textContent=D(Number(F.value));const p=t.querySelector(`[data-pst="${CSS.escape(X)}"]`);p&&(p.style.width=ce(V.l,ne),p.style.transform=`translate(-50%,-50%) rotate(${V.r}deg)`)};F.addEventListener("input",Z),F.addEventListener("change",()=>{Z(),s()})};z("[data-pslen]","[data-pslenv]","l",b=>b.toLocaleString(void 0,{maximumFractionDigits:2})),z("[data-psrot]","[data-psrotv]","r",b=>`${b}°`),h("[data-pmtype]",b=>{const A=g();A[f.pmSel]={...A[f.pmSel],t:b.dataset.pmtype},s()}),h("[data-pshape]",()=>{f.tool="paint",f.brush=f.selected,s()}),h("[data-parm]",b=>{f.armed=f.armed===b.dataset.parm?null:b.dataset.parm,f.selected=null,s()}),h("[data-pmove]",b=>{const A=o();A[f.selected]={...A[f.selected],f:Number(b.dataset.pmove)},f.floor=Number(b.dataset.pmove),s()}),h("[data-premove]",()=>{const b=o();delete b[f.selected],f.selected=null,s()}),h("[data-pauto]",()=>{a.house_layout=mr(i,a.house_size||{}),f.selected=null,f.armed=null,s()}),h("[data-pclear]",()=>{const b=o();for(const A of Object.keys(b))b[A].f===f.floor&&delete b[A];f.selected=null,s()}),r().addEventListener("pointerdown",b=>{if(b.preventDefault(),f.tool==="paint"||f.tool==="erase")return _(b);if(f.tool==="place")return C(b);const A=n(b),y=r(),D=b.target.closest("[data-rh]"),F=b.target.closest("[data-pr]"),X=a.house_layout||{};let Z,v,V,p,$;if(D)Z="resize",v=D.dataset.rh;else if(F)Z="move",v=F.dataset.pr;else if(f.armed)Z="draw",v=f.armed;else{f.selected=null,s();return}Z!=="draw"?(V={...X[v]},$=y.querySelector(`[data-pr="${CSS.escape(v)}"]`),f.selected=v,$.classList.add("sel","drag")):($=y.querySelector(".pdraw"),$.hidden=!1),e._drag=!0;const x=L=>{p=L,$.style.left=ce(L.x,ne),$.style.top=ce(L.y,pe),$.style.width=ce(L.w,ne),$.style.height=ce(L.d,pe);const T=$.querySelector(".pd");T&&(T.textContent=`${L.w}×${L.d}`)},w=L=>{const T=n(L);if(Z==="move")x({...V,x:u(Math.round(V.x+T.x-A.x),0,ne-V.w),y:u(Math.round(V.y+T.y-A.y),0,pe-V.d)});else if(Z==="resize")x({...V,w:u(Math.round(V.w+T.x-A.x),1,ne-V.x),d:u(Math.round(V.d+T.y-A.y),1,pe-V.y)});else{const P=u(Math.floor(Math.min(A.x,T.x)),0,ne-1),U=u(Math.floor(Math.min(A.y,T.y)),0,pe-1),we=u(Math.ceil(Math.max(A.x,T.x)),P+1,ne),I=u(Math.ceil(Math.max(A.y,T.y)),U+1,pe);x({f:f.floor,x:P,y:U,w:we-P,d:I-U})}},k=()=>{if(window.removeEventListener("pointermove",w),window.removeEventListener("pointerup",k),window.removeEventListener("pointercancel",k),e._drag=null,p){const L=o();if(Z==="draw")p.w*p.d<2&&(p={...p,w:Math.min(4,ne-p.x),d:Math.min(3,pe-p.y)}),L[v]=p,f.armed=null,f.selected=v;else if(V.cells){const T=p.x-V.x,P=p.y-V.y;L[v]={...p,cells:V.cells.map(([U,we])=>[U+T,we+P])}}else L[v]=p}else if(Z==="draw"){const L=u(Math.floor(A.x),0,ne-4),T=u(Math.floor(A.y),0,pe-3),P={1:[3,3],2:[4,3],3:[5,4]}[a.house_size?.[v]||Ni(i.find(U=>U.id===v)||{})];o()[v]={f:f.floor,x:L,y:T,w:P[0],d:P[1]},f.armed=null,f.selected=v}s()};window.addEventListener("pointermove",w),window.addEventListener("pointerup",k),window.addEventListener("pointercancel",k)});function C(b){const A=($,x)=>u(Math.round($*2)/2,.5,x-.5),y=b.target.closest("[data-pm]"),D=n(b);if(!y){if(!f.pmArmed){f.pmSel=null,s();return}const $=g();$[f.pmArmed]={...$[f.pmArmed]||{},f:f.floor,x:A(D.x,ne),y:A(D.y,pe)},f.pmSel=f.pmArmed,f.pmArmed=null,s();return}const F=y.dataset.pm,X={...(a.placements||{})[F]};let Z=!1,v=null;e._drag=!0;const V=$=>{const x=n($);if(!Z&&Math.hypot(x.x-D.x,x.y-D.y)<.25)return;Z=!0,v={x:A(X.x+x.x-D.x,ne),y:A(X.y+x.y-D.y,pe)};const w=r().querySelector(`[data-pm="${CSS.escape(F)}"]`);w&&(w.style.left=ce(v.x,ne),w.style.top=ce(v.y,pe),w.classList.add("drag"))},p=()=>{if(window.removeEventListener("pointermove",V),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),e._drag=null,v){const $=g();$[F]={...X,...v}}f.pmSel=F,f.pmArmed=null,s()};window.addEventListener("pointermove",V),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p)}function _(b){if(f.tool==="paint"&&!f.brush)return;const A=new Set;e._drag=!0;const y=F=>{const X=n(F),Z=Math.floor(X.x),v=Math.floor(X.y);if(Z<0||v<0||Z>=ne||v>=pe||A.has(Se(Z,v)))return;A.add(Se(Z,v));const V=o(),p=f.floor;for(const $ of Object.keys(V)){if(V[$].f!==p||f.tool==="paint"&&$===f.brush)continue;const x=Kt(V[$]);if(!x.some(([k,L])=>k===Z&&L===v))continue;const w=Ia(p,x.filter(([k,L])=>k!==Z||L!==v));w?V[$]=w:delete V[$]}if(f.tool==="paint"){const $=V[f.brush]&&V[f.brush].f===p?Kt(V[f.brush]):[];V[f.brush]=Ia(p,[...$,[Z,v]]),f.selected=f.brush}e._render()};y(b);const D=()=>{window.removeEventListener("pointermove",y),window.removeEventListener("pointerup",D),window.removeEventListener("pointercancel",D),e._drag=null,e._render()};window.addEventListener("pointermove",y),window.addEventListener("pointerup",D),window.addEventListener("pointercancel",D)}}const yr=`
.pgrid{position:relative;margin-top:16px;width:100%;aspect-ratio:var(--cols)/var(--rows);border-radius:18px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:crosshair;
  background-color:rgba(255,255,255,.04);border:1px solid var(--line);
  background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px);
  background-size:calc(100% / var(--cols)) calc(100% / var(--rows))}
.pgrid.tool-paint{cursor:cell}
.pgrid.tool-erase{cursor:not-allowed}
.ptools{margin-top:12px}
.pr{position:absolute;box-sizing:border-box;border-radius:10px;background:color-mix(in srgb,var(--cream) 88%,transparent);color:var(--ink);border:2px solid transparent;cursor:grab;overflow:hidden;padding:6px 8px;display:flex;flex-direction:column;justify-content:space-between}
.pr.sel{border-color:var(--amber);box-shadow:0 0 0 3px color-mix(in srgb,var(--amber) 35%,transparent)}
.pr.drag{cursor:grabbing;opacity:.9;z-index:2}
.pr.bad{border-color:#ff453a;border-style:dashed}
.pr.shape{background:none;border:0;box-shadow:none;padding:0;overflow:visible;pointer-events:none}
.pc{position:absolute;box-sizing:border-box;background:color-mix(in srgb,var(--cream) 88%,transparent);border:0 solid transparent;pointer-events:auto;cursor:grab}
.pr.shape.sel .pc{border-color:var(--amber);background:color-mix(in srgb,var(--cream) 95%,transparent)}
.pr.shape.bad .pc{border-color:#ff453a;border-style:dashed}
.tool-paint .pr,.tool-paint .pc,.tool-erase .pr,.tool-erase .pc{cursor:inherit}
.pnw{position:absolute;padding:6px 8px;pointer-events:none;max-width:400%;z-index:1}
.pn{display:flex;align-items:center;gap:6px;font-weight:600;font-size:14px;line-height:1.1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--ink)}
.pn ha-icon{--mdc-icon-size:16px;flex:none}
.pd{font-size:11px;color:var(--ink-soft)}
.rh{position:absolute;right:0;bottom:0;width:22px;height:22px;cursor:nwse-resize;background:linear-gradient(135deg,transparent 50%,var(--amber) 50%);border-radius:0 0 8px 0}
.tool-paint .rh,.tool-erase .rh{display:none}
.pdraw{position:absolute;border:2px dashed var(--amber);border-radius:10px;background:color-mix(in srgb,var(--amber) 20%,transparent);pointer-events:none}
.phint{color:var(--muted);font-size:14px;margin-top:10px}
.wallh{display:flex;align-items:center;gap:14px;margin:4px 0 16px;flex-wrap:wrap}
.wallh b{font-size:16px}
.wallh input{flex:1;min-width:160px;accent-color:var(--amber);height:28px}
.wallh span{font-variant-numeric:tabular-nums;color:var(--muted);min-width:28px;text-align:right}
.pm{position:absolute;z-index:3;width:30px;height:30px;margin:-15px 0 0 -15px;border-radius:50%;display:grid;place-items:center;background:rgba(30,18,32,.85);color:#fff;border:2px solid rgba(255,255,255,.5);pointer-events:none;box-shadow:0 3px 10px rgba(0,0,0,.35)}
.pm ha-icon{--mdc-icon-size:17px}
.pst{position:absolute;z-index:2;height:8px;border-radius:4px;background:rgba(255,255,255,.45);box-shadow:0 0 0 1px rgba(0,0,0,.25);pointer-events:none}
.pst.on{background:var(--amber);box-shadow:0 0 12px var(--amber)}
.pstrip{display:flex;flex-direction:column;gap:8px;width:100%;margin:4px 0 6px}
.pstrip label{display:flex;align-items:center;gap:12px}
.pstrip span{width:110px;font-size:14px;color:var(--muted)}
.pstrip input{flex:1;min-width:120px;accent-color:var(--amber);height:28px}
.pstrip b{min-width:46px;text-align:right;font-variant-numeric:tabular-nums}
.pstrip small{color:var(--muted);font-size:12px}
.pm.on.k-light,.pm.on.k-ceiling,.pm.on.k-strip{background:var(--amber);color:var(--ink);border-color:#fff;box-shadow:0 0 14px var(--amber)}
.pm.sel{border-color:var(--amber);box-shadow:0 0 0 4px color-mix(in srgb,var(--amber) 40%,transparent)}
.pm.drag{transform:scale(1.2)}
.tool-place .pm{pointer-events:auto;cursor:grab}
.tool-place .pr,.tool-place .pc{opacity:.75;cursor:copy}
.ptypes{display:flex;flex-wrap:wrap;gap:6px;width:100%}
.ptypes .pill{height:34px;font-size:13px;padding:0 12px}
.pill.placed{border-color:color-mix(in srgb,var(--amber) 60%,transparent)}
.pill .ok{--mdc-icon-size:16px;color:var(--amber)}
.psel{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:14px;padding:12px 14px;border-radius:18px;background:rgba(255,255,255,.06)}
.psel b{display:flex;align-items:center;gap:8px;font-size:16px}
.psel .seg.sm{flex-wrap:wrap}
.psel .pill{height:36px;font-size:14px;padding:0 14px}
@media (max-width:720px){.pn{font-size:11px}.pn ha-icon{display:none}.pd{display:none}.rh{width:16px;height:16px}.ptools .pill{font-size:13px;padding:0 12px}}
`;var xr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,Ee=(e,t,a,i)=>{for(var o=i>1?void 0:i?kr(t,a):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(i?r(t,a,o):r(o))||o);return i&&o&&xr(t,a,o),o};const Cr={"air-conditioner":si,"air-purifier":ri,"arrow-collapse-vertical":_o,"arrow-expand-vertical":Mo,"auto-fix":Lo,blinds:Vo,brush:So,cctv:ni,"ceiling-light":li,check:ci,"circle-medium":di,close:ra,crosshairs:No,"cursor-move":Ro,door:na,eraser:qo,"eraser-variant":Bo,fan:hi,"floor-lamp":pi,"floor-plan":mi,"home-outline":fi,"led-strip-variant":gi,lightbulb:vi,lock:la,"map-marker-plus-outline":Ko,minus:bi,"motion-sensor":$i,plus:ca,"power-socket-eu":wi,"robot-vacuum":yi,"rotate-left":rs,"rotate-right":ns,speaker:xi,"speaker-wireless":ki,"spotlight-beam":Ci,television:_i,"television-box":Mi,thermometer:da,"window-closed-variant":Li};function _r(e){return e.replace(/<ha-icon(?: class="([^"]*)")? icon="mdi:([a-z0-9-]+)"><\/ha-icon>/g,(t,a,i)=>{const o=Cr[i]??xt(`mdi:${i}`);return`<svg class="hi${a?` ${a}`:""}" viewBox="0 0 24 24" aria-hidden="true"><path d="${o}" fill="currentColor"/></svg>`})}const Dt=e=>e.split(".")[0],Ii="pine3_home.house_mode";function ji(){try{return localStorage.getItem(Ii)??"auto"}catch{return"auto"}}function Mr(e){try{localStorage.setItem(Ii,e)}catch{}}function qi(){const e=navigator.deviceMemory;return e!=null&&e<=2||!window.CSS?.supports?.("color","color-mix(in srgb, red, blue)")?"image":e!=null&&e<=4?"lite":"full"}let ke=class extends Ye{constructor(){super(...arguments),this.entities={},this.mode="house",this.canEdit=!1,this.openRoom=()=>{},this.openSheet=()=>{},this.save=()=>{},this._drag=null,this._house=null,this._meta={},this.draft=null,this.lastKey="",this.saveTimer=0,this.resize=new ResizeObserver(()=>this._fit3d?.())}_cfg(){const e=this.home.settings??{};return{...e,house_layout:e.house_layout??{},house_size:e.house_size??{},placements:this.withTypes(e.placements??{})}}_s(e){return this.entities[e]}_name(e){return this.home.settings?.names?.[e]??this._meta[e]?.name??this.entities[e]?.attributes.friendly_name??e}_roomName(e){return e.name}_isOn(e){const t=this.entities[e];if(!t)return!1;const a=Dt(e);return a==="lock"?t.state==="unlocked":a==="climate"?t.state!=="off"&&t.state!=="unavailable":a==="media_player"?!["off","standby","idle","unavailable","unknown"].includes(t.state):a==="vacuum"?["cleaning","returning"].includes(t.state):["on","open","opening","closing","home"].includes(t.state)}_switchables(e){return e.ents.filter(t=>["light","switch","fan","input_boolean"].includes(Dt(t)))}_roomClimate(e){const t=e.temperature?parseFloat(this.entities[e.temperature]?.state??""):NaN,a=e.ents.find(o=>Dt(o)==="climate"&&this.entities[o]?.attributes.current_temperature!=null),i=Number.isNaN(t)?a?this.entities[a].attributes.current_temperature:null:t;return{temp:i!=null?`${Math.round(i)}°`:null}}_entShown(e,t){const a=e.hidden??[];return(t.primary||(e.shown??[]).includes(t.id))&&!a.includes(t.id)}_houseMode(){const e=ji();return e==="auto"?qi():e}_gear(){return""}_go(e,t){this.openRoom(t)}_openModal(e){this.openSheet(e)}_call(e,t,a){if(!this.conn)return;const{entity_id:i,...o}=a;Vi(this.conn,e,t,o,{entity_id:i}).catch(s=>console.warn("Pine3 Home: 3D",s))}_openSettings(e){this.dispatchEvent(new CustomEvent("pine3-settings",{detail:{section:e==="plan"?"planta":e},bubbles:!0,composed:!0}))}_saveSettings(e){this.save(e)}_render(){this.lastKey="",this.paint(),this.mode==="plan"&&this.queueSave()}withTypes(e){const t=this.home.settings?.types??{};return Object.fromEntries(Object.entries(e).map(([a,i])=>[a,i.t||!t[a]?i:{...i,t:t[a]}]))}rooms(){const e=this.home.settings??{},t=new Set(e.shown??[]);return this._meta={},this.home.rooms.filter(a=>!a.hidden).map(a=>{for(const o of a.devices)this._meta[o.id]={name:o.name,model:o.model,manufacturer:o.manufacturer};const i=[...a.devices.filter(o=>!o.hidden).map(o=>o.id),...(a.entities??[]).filter(o=>!o.primary&&t.has(o.id)).map(o=>o.id)];return{id:a.id,name:a.name,icon:a.icon,floor:a.floor,floor_level:a.floor_level??0,ents:i,entities:a.entities,count:i.length,temperature:a.temperature,devices:a.devices}}).filter(a=>a.ents.length)}get d(){if(!this.draft){const e=this._cfg();this.draft={...e,house_layout:{...e.house_layout},placements:{...this.home.settings?.placements??{}}}}return this.draft}queueSave(){window.clearTimeout(this.saveTimer),this.saveTimer=window.setTimeout(()=>{this.saveTimer=0;const e=this.d,t=this.home.settings??{},a={};JSON.stringify(e.house_layout)!==JSON.stringify(t.house_layout??{})&&(a.house_layout=e.house_layout),JSON.stringify(e.placements)!==JSON.stringify(t.placements??{})&&(a.placements=e.placements),(e.wall_height??30)!==(t.wall_height??30)&&(a.wall_height=e.wall_height),Object.keys(a).length&&this.save(a)},400)}key(e){const a=e.flatMap(o=>o.ents).map(o=>{const s=this.entities[o];return s?`${s.state}|${s.attributes.brightness??""}|${s.attributes.rgb_color??""}|${s.attributes.color_temp_kelvin??""}|${s.attributes.current_temperature??""}`:""}),i=e.map(o=>o.temperature?this.entities[o.temperature]?.state:"");return JSON.stringify([this.mode,this.canEdit,this.home.settings,this.home.rooms.map(o=>o.id),a,i,document.documentElement.lang])}paint(){const e=this.renderRoot.querySelector(".root");if(!e||!this.home||this._drag)return;const t=this.rooms(),a=this.key(t);if(a===this.lastKey)return;this.lastKey=a;let i=this.mode==="plan"?$r(this,this.d,t):dr(this,t);this.canEdit||(i=i.replace(/<button class="pill" data-editplan>.*?<\/button>/s,"").replace(/<button class="mini" data-wall="-?\d+"[^>]*>.*?<\/button>/gs,"")),e.innerHTML=_r(i),this.mode==="plan"?wr(this,e,this.d,t):ur(this,e)}connectedCallback(){super.connectedCallback(),this.resize.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resize.disconnect(),window.clearTimeout(this.saveTimer)}updated(e){e.has("home")&&this.mode==="plan"&&this.draft&&!this.saveTimer&&(this.draft=null),this.paint()}render(){return c`<div class=${`root ${this.mode}`}></div>`}};ke.styles=[_e`
      :host {
        display: block;
        --amber: #f6b83f;
        --cream: #fff3dc;
        --ink: #1d1410;
        --ink-soft: rgba(29, 20, 16, 0.65);
        --muted: rgba(255, 255, 255, 0.62);
        --line: rgba(255, 255, 255, 0.14);
        --display: inherit;
        color: #f5f1ea;
        font-family: inherit;
      }
      .root.house {
        border-radius: 28px;
        padding: 18px 20px 20px;
        background: radial-gradient(120% 90% at 50% 0%, #2b2238 0%, #15121c 60%, #0d0b12 100%);
      }
      .root.plan {
        color: #f5f1ea;
      }
      /* the dashboards already say "Casa 3D" above it: keep only the buttons */
      .root.house .hero > div:first-child {
        display: none;
      }
      .root.house .hero {
        justify-content: flex-end;
      }
      .root.house .hero:not(:has(button)) {
        display: none;
      }
      .root.house .stage {
        margin-top: 12px;
      }
      .hi {
        width: 1.15em;
        height: 1.15em;
        flex: none;
      }
      .hero {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
      }
      .hero .t {
        font-size: 30px;
        font-weight: 500;
        letter-spacing: -0.01em;
      }
      .eyebrow,
      .sub {
        font-size: 12px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--muted);
      }
      .sub {
        margin: 18px 0 8px;
      }
      .right,
      .seg,
      .row {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        align-items: center;
      }
      .seg {
        margin-top: 10px;
      }
      .pill,
      .mini {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 40px;
        padding: 0 16px;
        border-radius: 999px;
        border: 1px solid var(--line);
        background: rgba(255, 255, 255, 0.08);
        color: inherit;
        font: inherit;
        font-size: 15px;
        cursor: pointer;
      }
      .pill.solid {
        background: var(--cream);
        color: var(--ink);
        border-color: var(--cream);
      }
      .mini {
        width: 40px;
        padding: 0;
        justify-content: center;
        background: rgba(20, 12, 24, 0.6);
      }
      .mini .hi {
        width: 20px;
        height: 20px;
      }
      .empty {
        margin-top: 16px;
        color: var(--muted);
      }
      .panel h3 {
        font-size: 22px;
        font-weight: 600;
        margin: 0 0 6px;
      }
      .panel p {
        color: var(--muted);
        margin: 0 0 14px;
        line-height: 1.45;
      }
      .stage {
        height: min(68vh, 640px);
      }
      .mki .hi {
        width: 18px;
        height: 18px;
      }
      .pn .hi {
        width: 16px;
        height: 16px;
      }
      .pm .hi {
        width: 17px;
        height: 17px;
      }
      .pill .ok {
        color: var(--amber);
      }
    `,Gt(hr),Gt(yr)];Ee([Q({attribute:!1})],ke.prototype,"home",2);Ee([Q({attribute:!1})],ke.prototype,"entities",2);Ee([Q({attribute:!1})],ke.prototype,"conn",2);Ee([Q()],ke.prototype,"mode",2);Ee([Q({type:Boolean})],ke.prototype,"canEdit",2);Ee([Q({attribute:!1})],ke.prototype,"openRoom",2);Ee([Q({attribute:!1})],ke.prototype,"openSheet",2);Ee([Q({attribute:!1})],ke.prototype,"save",2);ke=Ee([Me("pine3-house")],ke);var Lr=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,oe=(e,t,a,i)=>{for(var o=i>1?void 0:i?Ar(t,a):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(i?r(t,a,o):r(o))||o);return i&&o&&Lr(t,a,o),o};const Hr=550,Rt=10,It=$e({heat:"Calor",cool:"Frio",heat_cool:"Auto",auto:"Auto",dry:"Seco",fan_only:"Ventilar",off:"Off"}),qa=$e({heating:"a aquecer",cooling:"a arrefecer",idle:"em pausa",off:"desligado",drying:"a secar",fan:"a ventilar"}),De=$e({"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",hail:"granizo",lightning:"trovoada","lightning-rainy":"trovoada e chuva",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve","snowy-rainy":"chuva e neve",sunny:"sol",windy:"vento","windy-variant":"vento",exceptional:"excecional"}),Ba=$e({cleaning:"a limpar",docked:"na base",returning:"a voltar à base",paused:"em pausa",idle:"parado",error:"erro"}),Vr=$e({open:"aberto",closed:"fechado",opening:"a abrir",closing:"a fechar"}),jt=$e({yellow:"amarelo",orange:"laranja",red:"vermelho"}),Wa={yellow:1,orange:2,red:3},zr=10*6e4,Sr=10*6e4,Pr=qe([{id:"@luzes",name:"Luzes",icon:M.bulb},{id:"@clima",name:"Clima",icon:M.therm},{id:"@seguranca",name:"Segurança",icon:M.shield},{id:"@cenas",name:"Cenas",icon:M.spark},{id:"@casa3d",name:"Casa 3D",icon:M.cube}]),Er=["#ffcf8a","#fff1d6","#ff8a5c","#ff6fae","#b49cff","#6cc8ff","#5be3a0"],K=e=>W`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`;let j=class extends Ye{constructor(){super(...arguments),this.entities={},this.screenName="",this.canEdit=!1,this.ambient=!1,this.settingsButton=!1,this.cardSettings=!1,this.preview=!1,this.startView="",this.wallpanel=!1,this.editing=null,this.draft=null,this.moving=null,this.saving=!1,this.lastReorder=0,this.view="home",this.category="all",this.sheet=null,this.drag=null,this.now=new Date,this.hourly=[],this.daily=[],this.warnings=[],this.history={},this.flash=null,this.historyAt={},this.historyWanted=new Set,this.ipmaAt=0,this.ipmaArea=null,this.forecastAt=0}connectedCallback(){super.connectedCallback(),this.clock=window.setInterval(()=>this.now=new Date,1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clock)}willUpdate(e){if(e.has("startView")&&this.startView&&(this.view=this.startView,this.category="all"),this.preview)return;e.has("home")&&this.view!=="home"&&!this.view.startsWith("@")&&!this.home.rooms.some(a=>a.id===this.view)&&(this.view="home");const t=this.home?.settings?.ipma_area??null;(t!==this.ipmaArea||t&&Date.now()-this.ipmaAt>Sr)&&(this.ipmaArea=t,this.ipmaAt=Date.now(),t&&this.conn?this.loadWarnings(t):this.warnings=[]),this.home?.weather&&Date.now()-this.forecastAt>30*6e4&&this.conn&&(this.forecastAt=Date.now(),this.loadForecast(this.home.weather))}async loadForecast(e){try{const t=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"hourly"},target:{entity_id:e},return_response:!0});this.hourly=(t.response?.[e]?.forecast??[]).filter(a=>new Date(a.datetime).getTime()>Date.now()-30*6e4).slice(0,6)}catch{this.hourly=[]}try{const t=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"daily"},target:{entity_id:e},return_response:!0});this.daily=(t.response?.[e]?.forecast??[]).slice(0,5)}catch{this.daily=[]}}updated(){if(this.preview)return;const e=Date.now(),t=[...this.historyWanted].filter(a=>e-(this.historyAt[a]??0)>zr);this.historyWanted.clear(),t.length&&this.conn&&(t.forEach(a=>this.historyAt[a]=e),this.loadHistory(t))}async loadHistory(e){try{const t=await this.conn.sendMessagePromise({type:"history/history_during_period",start_time:new Date(Date.now()-864e5).toISOString(),entity_ids:e,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),a={...this.history};for(const i of e){const o=(t[i]??[]).map(r=>parseFloat(r.s)).filter(r=>!Number.isNaN(r)),s=Math.max(1,Math.ceil(o.length/48));a[i]=o.filter((r,n)=>n%s===0||n===o.length-1)}this.history=a}catch(t){console.warn("Pine3 Home: history",t)}}async loadWarnings(e){try{const t=await this.conn.sendMessagePromise({type:"pine3_home/ipma_warnings",area:e}),a=Date.now();this.warnings=t.warnings.filter(i=>!i.endTime||new Date(i.endTime).getTime()>a).sort((i,o)=>(Wa[o.awarenessLevelID]??0)-(Wa[i.awarenessLevelID]??0))}catch{}}call(e,t,a,i={}){Vi(this.conn,e,t,i,{entity_id:a}).catch(o=>console.warn("Pine3 Home:",o))}toggle(e){const t=G(e),a=this.entities[e];if(t==="lock")return this.call("lock",a?.state==="locked"?"unlock":"lock",e);if(t==="cover")return this.call("cover","toggle",e);if(t==="vacuum")return this.call("vacuum",a?.state==="cleaning"?"return_to_base":"start",e);if(t==="media_player")return this.call("media_player","media_play_pause",e);if(t==="scene"||t==="script")return this.call(t,"turn_on",e);this.call(t==="input_boolean"?"input_boolean":"homeassistant","toggle",e)}level(e){if(this.drag?.key===e.key)return this.drag.value;if(e.kind==="room-lights")return kt(e.entities,this.entities);const t=this.entities[e.entity];return e.kind==="light"?Je(t):e.kind==="cover"?t?.attributes.current_position??(t?.state==="open"?100:0):null}setLevel(e,t){if(t=Math.round(t),e.kind==="room-lights"||e.kind==="light"){const a=e.kind==="light"?e.entity:e.entities;t<=0?this.call("light","turn_off",a):this.call("light","turn_on",a,{brightness_pct:t})}else e.kind==="cover"&&this.call("cover","set_cover_position",e.entity,{position:t})}slidable(e){if(e.kind==="room-lights")return!0;const t=this.entities[e.entity??""];return t?e.kind==="light"?(t.attributes.supported_color_modes??[]).some(a=>a!=="onoff"):e.kind==="cover"?(t.attributes.supported_features&4)===4:!1:!1}down(e,t){if(e.target.closest("button"))return;if(this.editing){this.press={key:t.key,x:e.clientX,y:e.clientY,rect:e.currentTarget.getBoundingClientRect(),dragging:!1,long:!1,timer:0};return}const a=e.currentTarget,i={key:t.key,x:e.clientX,y:e.clientY,rect:a.getBoundingClientRect(),dragging:!1,long:!1,timer:0};i.timer=window.setTimeout(()=>{i.long=!0,this.longPress(t)},Hr),this.press=i}move(e,t){const a=this.press;if(!a||a.key!==t.key||a.long)return;if(this.editing)return this.moveInEdit(e,a);const i=e.clientX-a.x,o=e.clientY-a.y;if(!a.dragging){if(Math.abs(o)>Rt&&Math.abs(o)>Math.abs(i))return this.cancel();if(Math.abs(i)<Rt||!this.slidable(t))return;a.dragging=!0,clearTimeout(a.timer),e.currentTarget.setPointerCapture(e.pointerId)}const s=Math.max(0,Math.min(100,(e.clientX-a.rect.left)/a.rect.width*100));this.drag={key:t.key,value:Math.round(s)}}up(e,t){const a=this.press;if(!(!a||a.key!==t.key)){if(clearTimeout(a.timer),this.press=void 0,this.editing){this.moving=null;return}if(!a.long){if(a.dragging){const i=this.drag?.value??0;this.setLevel(t,i),window.setTimeout(()=>{this.drag?.key===t.key&&(this.drag=null)},1500);return}this.tap(t)}}}cancel(){this.press&&clearTimeout(this.press.timer),this.press=void 0,this.moving=null}reset(){this.stopEdit(),this.sheet=null,this.drag=null,this.view="home",this.category="all",this.main()?.scrollTo({top:0})}get busy(){return!!this.editing||!!this.press}main(){return this.renderRoot?.querySelector(".main")??null}renderGear(e="di gear"){return this.settingsButton?c`<button class=${e} aria-label=${l("Definições")} title=${l("Definições")}
      @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}>
      ${K(M.gear)}${e.includes("di")?c`<span class="lb">${l("Definições")}</span>`:m}</button>`:m}arranged(e,t){const a=this.editing===e&&this.draft?this.draft:this.dashboard.layouts?.[e];return Oa(t,a,this.home)}startEdit(e,t){const a=this.dashboard.layouts?.[e];this.draft={items:Oa(t,a,this.home).map(i=>({key:i.key,size:i.size})),hidden:[...a?.hidden??[]]},this.editing=e,this.category="all",this.sheet=null}stopEdit(){this.editing=null,this.draft=null,this.moving=null}async saveLayout(e){const t=this.editing;if(t){this.saving=!0;try{const a=await this.conn.sendMessagePromise({type:"pine3_home/dashboards/layout",dashboard_id:this.dashboard.id,view:t,layout:e});this.dashboard={...this.dashboard,layouts:a.dashboard.layouts},this.stopEdit()}catch(a){console.warn("Pine3 Home: layout",a),alert(l("Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel."))}finally{this.saving=!1}}}moveInEdit(e,t){if(!t.dragging){if(Math.hypot(e.clientX-t.x,e.clientY-t.y)<Rt)return;t.dragging=!0,this.moving=t.key,e.currentTarget.setPointerCapture(e.pointerId)}const a=this.renderRoot.elementsFromPoint(e.clientX,e.clientY).map(n=>n.closest?.(".w")).find(n=>n&&n.dataset.key&&n.dataset.key!==t.key);if(!a||!this.draft||Date.now()-this.lastReorder<180)return;const i=[...this.draft.items],o=i.findIndex(n=>n.key===t.key),s=i.findIndex(n=>n.key===a.dataset.key);if(o<0||s<0)return;const[r]=i.splice(o,1);i.splice(s,0,r),this.lastReorder=Date.now(),this.draft={...this.draft,items:i}}hideWidget(e){this.draft&&(this.draft={items:this.draft.items.filter(t=>t.key!==e),hidden:[...this.draft.hidden,e]})}resizeWidget(e){if(!this.draft)return;const t=Ti(e.kind),a=t[(t.indexOf(e.size)+1)%t.length];this.draft={...this.draft,items:this.draft.items.map(i=>i.key===e.key?{...i,size:a}:i)}}addWidget(e){this.draft&&(this.draft={items:[...this.draft.items,{key:e.key,size:e.size}],hidden:this.draft.hidden.filter(t=>t!==e.key)})}editControls(e,t){return this.editing===e?c`<button class="pill" @click=${()=>this.stopEdit()}>${l("Cancelar")}</button>
        ${this.dashboard.layouts?.[e]?c`<button class="pill" ?disabled=${this.saving} @click=${()=>this.saveLayout(null)}>${K(M.restore)} ${l("Repor")}</button>`:m}
        <button class="pill pri" ?disabled=${this.saving} @click=${()=>this.saveLayout(this.draft)}>${K(M.check)} ${l("Concluído")}</button>`:this.canEdit&&!this.editing?c`<button class="pill icon" aria-label=${l("Editar esta vista")} title=${l("Editar")} @click=${()=>this.startEdit(e,t)}>${K(M.edit)}</button>`:m}renderPicker(e,t){if(this.editing!==e||!this.draft)return m;const a=er(t,this.draft,this.home);return c`<div class="picker">
      <div class="phd"><span class="k">${l("Adicionar · toca para pôr no fim")}</span><span class="k">${l("Arrasta os cartões para mudar a ordem")}</span></div>
      <div class="prow">${a.length?a.map(i=>c`<button class="pk" @click=${()=>this.addWidget(i)}><span>${i.name}</span><em>${i.room?.name??""}</em></button>`):c`<span class="k">${l("Já está tudo nesta vista.")}</span>`}</div>
    </div>`}tap(e){switch(e.kind){case"room-lights":e.room&&this.openRoom(e.room.id);return;case"climate":case"weather":case"sensor":case"binary":case"scenes":e.entity&&(this.sheet=e.entity);return;case"scene":this.call(G(e.entity),"turn_on",e.entity),this.flash=e.key,window.setTimeout(()=>{this.flash===e.key&&(this.flash=null)},1200);return;case"camera":this.sheet=e.entity;return;case"lock":this.entities[e.entity]?.state!=="locked"?this.call("lock","lock",e.entity):this.sheet=e.entity;return;default:e.entity&&this.toggle(e.entity)}}longPress(e){if(e.kind==="room-lights"&&e.room){this.openRoom(e.room.id);return}e.entity&&(this.sheet=e.entity)}openRoom(e){this.editing&&this.editing!==e&&this.stopEdit(),this.view=e,this.category="all",this.sheet=null}get dark(){return this.dashboard.theme==="claro"?!1:this.dashboard.theme==="auto"?this.entities["sun.sun"]?.state!=="above_horizon":!0}render(){if(!this.home)return m;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(a=>a.id===this.view),t={vd:!0,light:!this.dark,editing:!!this.editing,[`dock-${this.dashboard.dock}`]:!0};return c`<div class=${H(t)}>
      ${this.renderDock()}
      <main class="main">${e?this.renderRoom(e):this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):m}
    </div>`}renderAmbient(){const e=ge(this.home,this.entities),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],o=this.now.getHours()*60+this.now.getMinutes(),s=(o%7-3)*.8,r=(o%5-2)*.8,n=[e.lightsOn?ie(e.lightsOn,"{n} luz acesa","{n} luzes acesas"):null,e.alerts?e.alertText:null].filter(Boolean);return c`<div class="vd amb" role="button" aria-label=${l("Tocar para acordar")}>
      <div class="ambc" style=${`transform:translate(calc(var(--u) * ${s}), calc(var(--u) * ${r}))`}>
        <div class="atime">${this.now.toLocaleTimeString(re(),{hour:"2-digit",minute:"2-digit"})}</div>
        <div class="adate">${this.now.toLocaleDateString(re(),{weekday:"long",day:"numeric",month:"long"})}</div>
        <div class="arow">
          ${t?c`<span class="awx">${Pa(t.state)}<b>${a!=null?`${Math.round(a)}°`:""}</b>${De[t.state]??t.state}</span>`:m}
          ${i?c`<span class=${`ipma ${i.awarenessLevelID}`}><i></i>${l("Aviso {level}",{level:jt[i.awarenessLevelID]??""})} · ${l(i.awarenessTypeName).toLowerCase()}</span>`:m}
        </div>
        <div class=${H({astatus:!0,att:e.alerts>0})}>${n.length?n.join(" · "):l("Tudo tranquilo em casa")}</div>
      </div>
      <span class="ahint">${this.wallpanel?l("Aproxima-te ou toca para acordar"):l("Toca para acordar")}</span>
    </div>`}renderDock(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden));return c`<nav class="dock" aria-label=${l("Vistas")}>
      <button class=${H({di:!0,on:this.view==="home"})} @click=${()=>this.openRoom("home")} aria-label=${l("Casa")}>
        ${K(M.home)}<span class="lb">${l("Casa")}</span>
      </button>
      <span class="sep"></span>
      <div class="rooms">
        ${e.map(t=>{const a=me(t).filter(i=>this.entities[i]?.state==="on").length;return c`<button class=${H({di:!0,rm:!0,on:this.view===t.id,lit:a>0})} @click=${()=>this.openRoom(t.id)} aria-label=${t.name}>
            ${a?c`<span class="glow"></span>`:m}${K(Ke(t.icon))}<span class="lb">${t.name}</span>
            ${a?c`<span class="bdg">${a}</span>`:m}
          </button>`})}
      </div>
      ${this.renderGear()}
    </nav>`}renderHours(){return this.hourly.length?c`<div class="hrs">${this.hourly.map(e=>c`<span>${new Date(e.datetime).getHours()}h<b>${Math.round(e.temperature)}°</b>${e.precipitation_probability?`${e.precipitation_probability}%`:c`&nbsp;`}</span>`)}</div>`:m}renderDays(e){return this.daily.length?c`<div class=${H({days:!0,compact:e})}>${this.daily.map((t,a)=>c`<div class="day">
      <span class="dn">${a===0?l("Hoje"):(i=>e?i.slice(0,3):i)(new Date(t.datetime).toLocaleDateString(re(),{weekday:"long"}).replace("-feira",""))}</span>
      ${e?m:c`<span class="dc">${De[t.condition??""]??t.condition??""}</span>`}
      <b>${Math.round(t.temperature)}°</b><span class="lo">${t.templow!=null?`${Math.round(t.templow)}°`:""}</span>
      ${e?m:c`<span class="rain">${t.precipitation_probability?`${t.precipitation_probability}%`:""}</span>`}
    </div>`)}</div>`:m}renderHeader(e,t,a=m){const i=ge(this.home,this.entities),o=(n,u,h,d,g)=>this.viewAvailable(n)?c`<button class="chip" @click=${()=>this.openRoom(n)}><i style=${u}>${K(h)}</i><span>${d}<small>${g}</small></span></button>`:m,s=this.home.scenes.length+this.home.scripts.length,r=this.home.rooms.filter(n=>!n.hidden&&me(n).some(u=>this.entities[u]?.state==="on")).length;return c`<header class="hdr">
      <div class="t"><span>${t}</span><b>${e}</b></div>
      <div class="chips">
        ${this.editing?m:c`${o("@clima","background:#34c759;color:#06210f",M.therm,l("Clima"),i.temp??"")}
            ${o("@luzes","background:#ffcf8a;color:#2a1a04",M.bulb,l("Luzes"),i.lightsOn?ie(i.lightsOn,"{n} acesa","{n} acesas"):l("apagadas"))}
            ${o("@seguranca",i.alerts?"background:#ff8a5c;color:#2a0f04":"background:#5be3a0;color:#06210f",M.shield,l("Segurança"),i.alertText)}
            ${o("@cenas","background:#c9b8ff;color:#1d1530",M.spark,l("Cenas"),ie(s,"{n} cena","{n} cenas"))}
            ${o("@casa3d","background:#a9c7ff;color:#0b1a33",M.cube,l("Casa 3D"),ie(r,"{n} divisão acesa","{n} divisões acesas"))}`}
        ${a}
      </div>
    </header>`}greeting(){const e=this.now.getHours();return`${l(e<6?"Boa noite":e<13?"Bom dia":e<20?"Boa tarde":"Boa noite")} · ${this.now.toLocaleDateString(re(),{weekday:"long",day:"numeric",month:"long"})}`}renderHome(){const e=this.now.toLocaleTimeString(re(),{hour:"2-digit",minute:"2-digit"}),t=Xt(this.home,this.entities),a=this.arranged("home",t),i=this.editing==="home";return c`${i?this.renderHeader(l("A editar"),l("Casa"),this.editControls("home",t)):this.renderHeader(e,this.greeting(),this.editControls("home",t))}
      ${a.length||i?c`<div class=${H({grid:!0,edit:i})}>${a.map(o=>this.renderWidget(o))}</div>`:c`<p class="empty">${l("Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.")}</p>`}
      ${this.renderPicker("home",t)}`}viewWidgets(e){return e==="@luzes"?Ys(this.home):e==="@clima"?Gs(this.home,this.entities):e==="@seguranca"?Xs(this.home,this.entities):e==="@cenas"?Ks(this.home,this.entities):[]}viewAvailable(e){return e==="@casa3d"?this.home.rooms.some(t=>!t.hidden&&t.devices.some(a=>!a.hidden)):this.viewWidgets(e).length>0}renderHouse(){const e=this.home.rooms.filter(t=>!t.hidden&&me(t).some(a=>this.entities[a]?.state==="on")).length;return c`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label=${l("Voltar à casa")}>${K(M.back)}</button>
        <b>${l("Casa 3D")}</b><span>${ie(e,"{n} divisão acesa","{n} divisões acesas")}</span>
      </div>
      <pine3-house class="house3d" .home=${this.home} .entities=${this.entities} .conn=${this.conn} ?canEdit=${this.settingsButton}
        .openRoom=${t=>this.openRoom(t)} .openSheet=${t=>this.sheet=t}
        .save=${t=>this.saveHouse(t)}></pine3-house>`}renderView(e){if(e==="@casa3d")return this.renderHouse();const t=Pr.find(u=>u.id===e),a=this.viewWidgets(e),i=this.arranged(e,a),o=this.editing===e,s=ge(this.home,this.entities),r=e==="@luzes"?s.lightsOn?ie(s.lightsOn,"{n} acesa","{n} acesas"):l("todas apagadas"):e==="@clima"?s.temp??"":e==="@seguranca"?s.alertText:ie(i.length,"{n} cena ou rotina","{n} cenas e rotinas"),n=e==="@luzes"?a.flatMap(u=>u.entities??[]):[];return c`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label=${l("Voltar à casa")}>${K(M.back)}</button>
        <b>${t.name}</b><span>${o?l("a editar"):r}</span>
        <div class="act">
          ${n.length&&!o?c`<button class="pill" @click=${()=>this.call("light","turn_on",n)}>${K(M.bulb)} ${l("Acender todas")}</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",n)}>${l("Apagar todas")}</button>`:m}
          ${this.editControls(e,a)}
        </div>
      </div>
      ${i.length||o?c`<div class=${H({grid:!0,edit:o})}>${i.map(u=>this.renderWidget(u))}</div>`:c`<p class="empty">${l("Nada para mostrar aqui.")}</p>`}
      ${this.renderPicker(e,a)}`}renderRoom(e){const t=Zs(e,this.home.settings?.shown),a=this.arranged(e.id,t),i=this.editing===e.id,o=z=>z.length?a.filter(C=>z.includes(C.kind)).length:a.length,s=Fs.filter(z=>o(z.kinds)>0),r=s.find(z=>z.id===this.category)??s[0],n=!i&&r&&r.kinds.length?a.filter(z=>r.kinds.includes(z.kind)):a,u=me(e),h=e.temperature?this.entities[e.temperature]?.state:null,d=e.humidity?this.entities[e.humidity]?.state:null,g=[h&&h!=="unavailable"?`${le(parseFloat(h))}°`:null,d&&d!=="unavailable"?`${le(parseFloat(d),0)}%`:null,e.floor].filter(Boolean).join(" · ");return c`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label=${l("Voltar à casa")}>${K(M.back)}</button>
        <b>${e.name}</b><span>${i?"a editar":g}</span>
        <div class="act">
          ${u.length&&!i?c`<button class="pill" @click=${()=>this.call("light","turn_on",u)}>${K(M.bulb)} ${l("Acender")}</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",u)}>${l("Apagar")}</button>`:m}
          ${this.editControls(e.id,t)}
        </div>
      </div>
      ${s.length>2&&!i?c`<div class="cats">${s.map(z=>c`<button class=${H({on:z===r})} @click=${()=>this.category=z.id}>${z.name}<em>${o(z.kinds)}</em></button>`)}</div>`:m}
      <div class=${H({grid:!0,edit:i})}>${n.map(z=>this.renderWidget(z))}</div>
      ${this.renderPicker(e.id,t)}`}renderWidget(e){const t=e.entity?this.entities[e.entity]:void 0;if(e.entity&&e.kind!=="weather"&&!t)return m;const a=this.widgetBody(e,t),i={w:!0,[e.size]:!0,on:(a.on??!1)||this.flash===e.key,att:a.att??!1,off:!!e.entity&&Ws(t),dragging:this.drag?.key===e.key,moving:this.moving===e.key,[`k-${e.kind}`]:!0,idle:e.kind==="climate"&&t?.state==="off"},o=!!this.editing;return c`<div class=${H(i)} style=${a.style??""} data-key=${e.key}
        @pointerdown=${s=>this.down(s,e)} @pointermove=${s=>this.move(s,e)}
        @pointerup=${s=>this.up(s,e)} @pointercancel=${()=>this.cancel()} @contextmenu=${s=>s.preventDefault()}>
      ${a.fill!=null?c`<div class="fill" style=${xs({width:`${a.fill}%`,"--fc":a.color??"255,207,138"})}></div>`:m}
      ${a.art??m}
      <span class="nm">${e.entity&&this.home.settings?.names?.[e.entity]||e.name}${a.tag?c`<em>${a.tag}</em>`:m}</span>
      ${a.extra??m}
      <div class="hero" style=${a.heroStyle??""}>${a.hero}${a.small?c`<small>${a.small}</small>`:m}</div>
      ${o?m:a.ctl??m}
      ${o?c`<button class="rmv" aria-label=${l("Esconder {name}",{name:e.name})} @click=${()=>this.hideWidget(e.key)}>${K(M.minus)}</button>
          <button class="handle" aria-label=${l("Mudar o tamanho de {name}",{name:e.name})} @click=${()=>this.resizeWidget(e)}>${K(M.resize)}<b>${e.size.toUpperCase()}</b></button>`:m}
    </div>`}widgetBody(e,t){const a=this.level(e);switch(e.kind){case"room-lights":{const i=e.entities.filter(r=>this.entities[r]?.state==="on"),o=i.length?ht(this.entities[i[0]]):"#ffcf8a",s=e.entities.length;return{hero:a?`${a}%`:"Off",small:i.length?`${s>1?`${i.length}/${s} · `:""}${i.map(r=>this.name(r,e.room)).slice(0,2).join(l(" e "))}`:ie(s,"{n} luz","{n} luzes"),art:Ea(this.typeOf(i[0]??e.entities[0]),a??0,o),fill:a||null,color:Fa(o),on:a>0,extra:c`<button class=${H({pw:!0,on:i.length>0})} aria-label=${l(i.length?"Apagar as luzes de {name}":"Acender as luzes de {name}",{name:e.name})}
            @click=${()=>this.call("light",i.length?"turn_off":"turn_on",e.entities)}>${K(M.power)}</button>`}}case"light":{const i=ht(t);return{hero:a?`${a}%`:"Off",tag:e.sub&&this.view==="home"?e.sub:void 0,art:Ea(this.typeOf(e.entity),a??0,i),fill:a||null,color:Fa(i),on:(a??0)>0,heroStyle:a?`color:${i}`:""}}case"cover":{const i=a??0;return{hero:`${i}%`,small:Vr[t.state]??t.state,art:As(i),fill:i,color:"170,200,230"}}case"climate":{const i=t.attributes.temperature,o=t.state,s=(t.attributes.hvac_modes??[]).filter(h=>["heat","cool","off","auto","heat_cool"].includes(h)).slice(0,3),r=o==="cool"?"#6cc8ff":o==="off"?"#5d646e":"#ff9f43",n=t.attributes.current_temperature,u=qa[t.attributes.hvac_action??o]??It[o]??o;return{hero:o==="off"?"Off":i!=null?`${le(i)}°`:"—",small:[u,n!=null?l("agora {t}°",{t:le(n)}):null].filter(Boolean).join(" · "),tag:e.sub,art:Hs(o==="off"?null:i??null,r),heroStyle:e.size==="l"?"font-size:calc(var(--u)*7)":"",extra:s.length>1?c`<div class="seg">${s.map(h=>c`<button class=${H({on:h===o})} @click=${()=>this.call("climate","set_hvac_mode",e.entity,{hvac_mode:h})}>${It[h]}</button>`)}</div>`:m,ctl:i!=null&&o!=="off"?c`<div class="ctl"><button aria-label=${l("Baixar")} @click=${()=>this.stepTemp(e.entity,-1)}>${K(M.minus)}</button><button aria-label=${l("Subir")} @click=${()=>this.stepTemp(e.entity,1)}>${K(M.plus)}</button></div>`:m}}case"weather":{const i=t?.state??"",o=t?.attributes.temperature,s=this.warnings[0];return{hero:o!=null?`${Math.round(o)}°`:"—",small:De[i]??i,art:Pa(i),extra:s?c`<span class=${`ipma ${s.awarenessLevelID}`}><i></i>${l("Aviso {level}",{level:jt[s.awarenessLevelID]??""})} · ${l(s.awarenessTypeName).toLowerCase()}${this.warnings.length>1?` +${this.warnings.length-1}`:""}</span>`:m,ctl:c`${this.renderHours()}${e.size==="l"||e.size==="xl"?this.renderDays(!0):m}`}}case"lock":{const i=t.state!=="locked";return{hero:i?t.state==="unlocked"?l("Destrancada"):t.state:l("Trancada"),small:l(i?"tocar para trancar":"toque longo para abrir"),art:Vs(i),att:t.state==="unlocked",heroStyle:"font-size:calc(var(--u)*1.85)"}}case"media":{const i=t.state==="playing",o=t.attributes.media_title??(Fe(t)?l("Ligado"):l("Desligado")),s=t.attributes.media_artist??t.attributes.app_name??"";return{hero:o,small:s,tag:e.sub,art:Ss(t.attributes.entity_picture),on:i,heroStyle:"font-size:calc(var(--u)*2.4)",ctl:Fe(t)?c`<div class="ctl"><button class="pri" aria-label=${l(i?"Pausa":"Tocar")} @click=${()=>this.call("media_player","media_play_pause",e.entity)}>${K(i?M.pause:M.play)}</button>
                <button aria-label=${l("Seguinte")} @click=${()=>this.call("media_player","media_next_track",e.entity)}>${K(M.next)}</button></div>`:m}}case"vacuum":{const i=t.attributes.battery_level;return{hero:i!=null?`${i}%`:Ba[t.state]??t.state,small:Ba[t.state]??t.state,art:zs(t.state==="cleaning"),on:t.state==="cleaning"}}case"scenes":return{hero:"",extra:c`<div class="scn">${e.entities.map(i=>c`<button @click=${()=>this.call(G(i),"turn_on",i)}>${K(M.spark)}${this.name(i)}</button>`)}</div>`};case"fan":return{hero:Fe(t)?t.attributes.percentage!=null?`${t.attributes.percentage}%`:"On":"Off",art:Ps(Fe(t)),on:Fe(t)};case"switch":case"outlet":{const i=Fe(t);return{hero:i?"On":"Off",art:Es(i),on:i}}case"binary":{const i=t.state==="on",o=t.attributes.device_class;return{hero:o&&["door","window","garage_door","opening"].includes(o)?l(i?"Aberta":"Fechada"):o==="motion"||o==="occupancy"?l(i?"Movimento":"Calmo"):i?"On":"Off",att:i&&!!o&&["door","window","garage_door","opening","moisture","smoke","gas"].includes(o),heroStyle:"font-size:calc(var(--u)*2.4)"}}case"sensor":{const i=t.attributes.unit_of_measurement??"",o=parseFloat(t.state),s=t.attributes.device_class;Number.isNaN(o)||this.historyWanted.add(e.entity);const r=this.history[e.entity],n=r&&r.length>1?`${le(Math.min(...r),0)}–${le(Math.max(...r),0)}`:void 0;return{hero:Number.isNaN(o)?t.state:`${le(o)}${i==="°C"?"°":i==="%"?"%":""}`,small:i&&i!=="°C"&&i!=="%"?i:e.sub,tag:n,art:Ts(s==="humidity"?"#3db8f5":s==="temperature"?"#ff9f43":"#5be3a0",r)}}case"clock":return{hero:this.now.toLocaleTimeString(re(),{hour:"2-digit",minute:"2-digit"}),small:this.now.toLocaleDateString(re(),{weekday:"long",day:"numeric",month:"long"})};case"scene":return{hero:"",art:Os(),extra:c`<span class="go">${this.flash===e.key?l("Ativada"):l("Tocar para ativar")}</span>`};case"camera":{const i=t.attributes.entity_picture,o=Math.floor(this.now.getTime()/1e4);return{hero:"",tag:e.sub,art:i?c`<img class="cam" src=${`${i}${i.includes("?")?"&":"?"}t=${o}`} alt="" loading="lazy" />`:m}}}}name(e,t){const a=this.home.settings?.names?.[e];if(a)return a;for(const o of this.home.rooms){const s=o.devices.find(r=>r.id===e);if(s)return s.name}const i=this.entities[e]?.attributes.friendly_name??e.split(".")[1];return t&&i.toLowerCase().startsWith(t.name.toLowerCase()+" ")?i.slice(t.name.length+1):i}stepTemp(e,t){const a=this.entities[e],i=a?.attributes.target_temp_step??.5,o=a?.attributes.temperature??20,s=a?.attributes.min_temp??7,r=a?.attributes.max_temp??35;this.call("climate","set_temperature",e,{temperature:Math.max(s,Math.min(r,Math.round((o+t*i)*10)/10))})}renderSheet(e){const t=this.entities[e];if(!t)return m;const a=G(e),i=this.home.rooms.find(s=>s.devices.some(r=>r.id===e)),o=l(a==="light"?"luz":a==="cover"?"estore":a==="climate"?"clima":a==="lock"?"fechadura":a==="media_player"?"média":a==="weather"?"tempo":"");return c`<div class="scrim" @click=${()=>this.sheet=null}></div>
      <aside class="sheet" role="dialog" aria-label=${this.name(e,i)}>
        <div class="shd"><span class="k">${[i?.name,o].filter(Boolean).join(" · ")}</span>
          <button class="x" aria-label=${l("Fechar")} @click=${()=>this.sheet=null}>${K(M.close)}</button></div>
        <h4>${this.name(e,i)}</h4>
        ${this.sheetBody(e,t)}
        ${this.thisCard(e)}
      </aside>`}deviceOf(e){for(const t of this.home.rooms){const a=t.devices.find(i=>i.id===e);if(a)return a}}typeOf(e){const t=this.home.settings?.types?.[e];if(t&&at[t])return t;const a=this.deviceOf(e);return Yt(e,this.entities[e],{name:a?.name,model:a?.model,manufacturer:a?.manufacturer})}saveHouse(e){this.home={...this.home,settings:{...this.home.settings??{},...e}},this.conn.sendMessagePromise({type:"pine3_home/home/settings",...e}).catch(t=>console.warn("Pine3 Home: settings",t))}thisCard(e){if(!this.cardSettings||!this.deviceOf(e)&&!this.home.rooms.some(d=>d.entities?.some(g=>g.id===e)))return m;const t=this.home.settings??{},a=Pi[G(e)]??[],i=this.typeOf(e),o=this.deviceOf(e),s=Yt(e,this.entities[e],{name:o?.name,model:o?.model,manufacturer:o?.manufacturer}),r=!!t.types?.[e],n=d=>{const g={...t.types??{}};d&&d!==s?g[e]=d:delete g[e],this.saveHouse({types:g})},u=d=>{const g={...t.names??{}},z=this.deviceOf(e)?.name;d&&d!==z?g[e]=d.slice(0,40):delete g[e],this.saveHouse({names:g})},h=(t.hidden??[]).includes(e);return c`<div class="this">
      <span class="k">${l("Este cartão · vale para todos os estilos e painéis")}</span>
      ${a.length>1?c`<div class="tchips" role="group" aria-label=${l("Tipo")}>${a.map(d=>c`<button class=${H({on:d===i})} aria-pressed=${d===i}
            @click=${()=>n(d)}>${K(at[d].icon)}${at[d].name}</button>`)}</div>
          <span class="auto">${r?c`${l("Escolhido por ti.")} <button class="lnk" @click=${()=>n(null)}>${l("Voltar ao automático ({type})",{type:at[s].name.toLowerCase()})}</button>`:l("Adivinhado pelo nome e pelo modelo: {type}.",{type:at[s].name.toLowerCase()})}</span>`:m}
      <label class="fld"><span>${l("Nome")}</span><input .value=${this.name(e)} maxlength="40" @change=${d=>u(d.target.value.trim())} /></label>
      <div class="fld"><span>${l("Esconder este cartão")}</span>
        <button class="sw" role="switch" aria-checked=${h} aria-label=${l("Esconder este cartão")}
          @click=${()=>{this.saveHouse({hidden:h?(t.hidden??[]).filter(d=>d!==e):[...t.hidden??[],e]}),h||(this.sheet=null)}}></button></div>
    </div>`}bigSlider(e,t,a,i,o){const s=this.drag?.key===e?this.drag.value:t,r=n=>{const u=n.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(n.clientX-u.left)/u.width*100)))};return c`<div class="bigsl" role="slider" aria-label=${i} aria-valuenow=${s} aria-valuemin="0" aria-valuemax="100"
      @pointerdown=${n=>{n.currentTarget.setPointerCapture(n.pointerId),this.drag={key:e,value:r(n)}}}
      @pointermove=${n=>{this.drag?.key===e&&n.buttons&&(this.drag={key:e,value:r(n)})}}
      @pointerup=${n=>{const u=r(n);o(u),this.drag={key:e,value:u},window.setTimeout(()=>{this.drag?.key===e&&(this.drag=null)},1500)}}>
      <i style=${`width:${s}%;background:${a}`}></i><b>${s}%</b></div>`}sheetBody(e,t){const a=G(e);if(a==="light"){const o=t.attributes.supported_color_modes??[],s=o.includes("color_temp"),r=o.some(d=>["hs","rgb","rgbw","rgbww","xy"].includes(d)),n=ht(t),u=t.attributes.min_color_temp_kelvin??2200,h=t.attributes.max_color_temp_kelvin??6500;return c`${o.some(d=>d!=="onoff")?this.bigSlider(`sheet-${e}`,Je(t),`linear-gradient(90deg,${n},#fff3e0)`,l("Brilho"),d=>d?this.call("light","turn_on",e,{brightness_pct:d}):this.call("light","turn_off",e)):m}
        ${s?c`<span class="k">${l("Branco")}</span><div class="tbar" @click=${d=>{const g=d.currentTarget.getBoundingClientRect(),z=(d.clientX-g.left)/g.width;this.call("light","turn_on",e,{color_temp_kelvin:Math.round(u+z*(h-u))})}}></div>`:m}
        ${r?c`<span class="k">${l("Cores")}</span><div class="pre">${Er.map(d=>c`<button aria-label=${d} style=${`background:${d}`} class=${H({on:d===n})} @click=${()=>this.call("light","turn_on",e,{rgb_color:Bi(d)})}></button>`)}</div>`:m}
        <div class="foot"><button class="pill" @click=${()=>this.toggle(e)}>${K(M.power)} ${t.state==="on"?l("Desligar"):l("Ligar")}</button></div>`}if(a==="cover"){const o=t.attributes.current_position??(t.state==="open"?100:0);return c`${t.attributes.supported_features&4?this.bigSlider(`sheet-${e}`,o,"linear-gradient(90deg,#a9b6c4,#dfe6ee)",l("Posição"),s=>this.call("cover","set_cover_position",e,{position:s})):m}
        <div class="foot"><button class="pill" @click=${()=>this.call("cover","open_cover",e)}>${l("Abrir")}</button><button class="pill" @click=${()=>this.call("cover","stop_cover",e)}>${l("Parar")}</button><button class="pill" @click=${()=>this.call("cover","close_cover",e)}>${l("Fechar")}</button></div>`}if(a==="climate"){const o=t.attributes.temperature,s=t.attributes.hvac_modes??[];return c`<div class="bigtemp">${o!=null?`${le(o)}°`:"—"}<small>${qa[t.attributes.hvac_action??t.state]??""}${t.attributes.current_temperature!=null?` · agora ${le(t.attributes.current_temperature)}°`:""}</small></div>
        <div class="ctl big"><button aria-label=${l("Baixar")} @click=${()=>this.stepTemp(e,-1)}>${K(M.minus)}</button><button aria-label=${l("Subir")} @click=${()=>this.stepTemp(e,1)}>${K(M.plus)}</button></div>
        <span class="k">${l("Modo")}</span><div class="seg wide">${s.map(r=>c`<button class=${H({on:r===t.state})} @click=${()=>this.call("climate","set_hvac_mode",e,{hvac_mode:r})}>${It[r]??r}</button>`)}</div>`}if(a==="lock"){const o=t.state==="locked";return c`<div class="bigtemp">${o?l("Trancada"):t.state==="unlocked"?l("Destrancada"):t.state}</div>
        <div class="foot">${o?c`<button class="pill warn" @click=${()=>{this.call("lock","unlock",e),this.sheet=null}}>${K(M.unlock)} ${l("Destrancar")}</button>`:c`<button class="pill pri" @click=${()=>this.call("lock","lock",e)}>${K(M.lock)} ${l("Trancar")}</button>`}</div>`}if(a==="media_player"){const o=Math.round((t.attributes.volume_level??0)*100);return c`<div class="bigtemp" style="font-size:calc(var(--u)*2.6)">${t.attributes.media_title??t.state}<small>${t.attributes.media_artist??""}</small></div>
        ${t.attributes.volume_level!=null?this.bigSlider(`vol-${e}`,o,"linear-gradient(90deg,#3db8f5,#9be0ff)",l("Volume"),s=>this.call("media_player","volume_set",e,{volume_level:s/100})):m}
        <div class="foot"><button class="pill pri" @click=${()=>this.call("media_player","media_play_pause",e)}>${K(t.state==="playing"?M.pause:M.play)} ${t.state==="playing"?l("Pausa"):l("Tocar")}</button>
          <button class="pill" @click=${()=>this.call("media_player","media_next_track",e)}>${K(M.next)}</button>
          <button class="pill" @click=${()=>this.toggle(e)}>${K(M.power)}</button></div>`}if(a==="camera"){const o=t.attributes.entity_picture;return o?c`<img class="camlg" src=${`${o}${o.includes("?")?"&":"?"}t=${Math.floor(this.now.getTime()/1e4)}`} alt=${this.name(e)} />`:c`<p class="k">${l("Sem imagem")}</p>`}if(a==="weather"){const o=n=>new Date(n).toLocaleString(re(),{weekday:"short",hour:"2-digit",minute:"2-digit"}),s=t.attributes.temperature,r=[t.attributes.humidity!=null?`${t.attributes.humidity}%`:null,t.attributes.wind_speed!=null?`${l("vento")} ${le(t.attributes.wind_speed,0)} ${t.attributes.wind_speed_unit??""}`:null].filter(Boolean);return c`<div class="bigtemp">${s!=null?`${Math.round(s)}°`:"—"}<small>${[De[t.state]??t.state,...r].join(" · ")}</small></div>
        ${this.hourly.length?c`<span class="k">${l("Próximas 6 horas")}</span>${this.renderHours()}`:m}
        ${this.daily.length?c`<span class="k">${l("Próximos 5 dias")}</span>${this.renderDays(!1)}`:m}
        ${this.warnings.map(n=>c`<div class=${`warn ${n.awarenessLevelID}`}><b>${l("Aviso {level}",{level:jt[n.awarenessLevelID]??""})} · ${l(n.awarenessTypeName)}</b>
          <span>${o(n.startTime)} → ${o(n.endTime)}</span>${n.text?c`<p>${n.text}</p>`:m}</div>`)}
        ${this.home.settings?.ipma_area?m:c`<p class="hint">${l("Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.")}</p>`}`}const i=t.attributes.unit_of_measurement??"";return c`<div class="bigtemp">${t.state}${i?` ${i}`:""}</div>
      ${["switch","light","fan","input_boolean","vacuum"].includes(a)?c`<div class="foot"><button class="pill pri" @click=${()=>this.toggle(e)}>${K(M.power)} ${Fe(t)?l("Desligar"):l("Ligar")}</button></div>`:m}`}};j.styles=Be;oe([Q({attribute:!1})],j.prototype,"home",2);oe([Q({attribute:!1})],j.prototype,"entities",2);oe([Q({attribute:!1})],j.prototype,"dashboard",2);oe([Q({attribute:!1})],j.prototype,"conn",2);oe([Q()],j.prototype,"screenName",2);oe([Q({type:Boolean})],j.prototype,"canEdit",2);oe([Q({type:Boolean})],j.prototype,"ambient",2);oe([Q({type:Boolean})],j.prototype,"settingsButton",2);oe([Q({type:Boolean})],j.prototype,"cardSettings",2);oe([Q({type:Boolean})],j.prototype,"preview",2);oe([Q()],j.prototype,"startView",2);oe([Q({type:Boolean})],j.prototype,"wallpanel",2);oe([Y()],j.prototype,"editing",2);oe([Y()],j.prototype,"draft",2);oe([Y()],j.prototype,"moving",2);oe([Y()],j.prototype,"saving",2);oe([Y()],j.prototype,"view",2);oe([Y()],j.prototype,"category",2);oe([Y()],j.prototype,"sheet",2);oe([Y()],j.prototype,"drag",2);oe([Y()],j.prototype,"now",2);oe([Y()],j.prototype,"hourly",2);oe([Y()],j.prototype,"daily",2);oe([Y()],j.prototype,"warnings",2);oe([Y()],j.prototype,"history",2);oe([Y()],j.prototype,"flash",2);j=oe([Me("pine3-vidro")],j);function Bi(e){const t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function Fa(e){if(e.startsWith("#"))return Bi(e).join(",");const t=e.match(/\d+/g);return t?t.slice(0,3).join(","):"255,207,138"}var Tr=Object.getOwnPropertyDescriptor,Or=(e,t,a,i)=>{for(var o=i>1?void 0:i?Tr(t,a):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(o)||o);return o};const Za=e=>W`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,Nr=qe([{id:"home",name:"Casa",color:"#ffd166",icon:M.home},{id:"@divisoes",name:"Divisões",color:"#d9f2e3",icon:M.room},{id:"@clima",name:"Clima",color:"#ffb08a",icon:M.therm},{id:"@seguranca",name:"Segurança",color:"#bfe0ff",icon:M.shield},{id:"@cenas",name:"Cenas",color:"#ffd0c2",icon:M.spark},{id:"@casa3d",name:"Casa 3D",color:"#d8cdf5",icon:M.cube}]),Ua=["#ffd166","#d9f2e3","#c9b8ff","#ffd0c2","#bfe0ff","#ffb08a","#e9f5a8"],Ga={key:"clock",kind:"clock",size:"l",name:""};let Jt=class extends j{render(){if(!this.home)return m;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(a=>a.id===this.view),t={vd:!0,bento:!0,editing:!!this.editing};return c`<div class=${H(t)}>
      ${this.renderPills()}
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderRooms():this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):m}
    </div>`}renderPills(){const e=this.home.rooms.some(i=>i.id===this.view),t=ge(this.home,this.entities).alerts,a=Nr.filter(i=>i.id==="home"||i.id==="@divisoes"||this.viewAvailable(i.id));return c`<nav class="bnav" aria-label=${l("Vistas")}>
      ${a.map(i=>{const o=this.view===i.id||i.id==="@divisoes"&&e;return c`<button class=${H({on:o})} style=${`--c:${i.color}`} @click=${()=>this.openRoom(i.id)}>
          ${Za(i.icon)}${i.name}${i.id==="@seguranca"&&t?c`<span class="bb">${t}</span>`:m}
        </button>`})}
      ${this.view==="home"?c`<span class="btools">${this.editControls("home",[Ga,...Xt(this.home,this.entities)])}</span>`:m}
      ${this.renderGear("bgear")}
      <span class="clk">${this.now.toLocaleTimeString(re(),{hour:"2-digit",minute:"2-digit"})}</span>
    </nav>`}renderHome(){const e=[Ga,...Xt(this.home,this.entities)],t=this.arranged("home",e),a=this.editing==="home";return c`<div class=${H({grid:!0,edit:a})}>${t.map(i=>this.renderWidget(i))}</div>
      ${this.renderPicker("home",e)}`}renderRooms(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden));return c`<div class="grid">${e.map((t,a)=>{const i=me(t),o=i.filter(r=>this.entities[r]?.state==="on").length,s=t.temperature?parseFloat(this.entities[t.temperature]?.state??""):NaN;return c`<button class=${H({w:!0,s:!0,room:!0,dim:!o})} style=${`--rc:${Ua[a%Ua.length]}`} @click=${()=>this.openRoom(t.id)}>
        <span class="nm">${Za(Ke(t.icon))}${Number.isNaN(s)?m:c`<em>${le(s)}°</em>`}</span>
        <div class="hero">${t.name}<small>${je(i.length,o,t.devices.length)}</small></div>
      </button>`})}</div>`}};Jt.styles=[Be,_e`
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
  `];Jt=Or([Me("pine3-bento")],Jt);var Dr=Object.getOwnPropertyDescriptor,Rr=(e,t,a,i)=>{for(var o=i>1?void 0:i?Dr(t,a):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(o)||o);return o};const Qe=e=>W`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,Ya=$e({home:"Casa","@divisoes":"Divisões","@clima":"Clima","@seguranca":"Segurança","@cenas":"Cenas","@casa3d":"Casa 3D"}),Ir=70,jr=W`<svg viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 22 Q18 8 36 18 T70 14 T100 18 V46 H0Z" fill="#3c3552" opacity=".85"/>
  <path d="M0 30 Q22 18 46 28 T100 26 V46 H0Z" fill="#252a40"/>
  <path d="M0 38 Q30 30 60 36 T100 34 V46 H0Z" fill="#171b2a"/></svg>`;let Qt=class extends j{get order(){return["home","@divisoes",...["@clima","@seguranca","@cenas","@casa3d"].filter(e=>this.viewAvailable(e))]}get current(){return this.home.rooms.some(e=>e.id===this.view)?"@divisoes":this.view}step(e){const t=this.order,a=Math.max(0,t.indexOf(this.current));this.openRoom(t[(a+e+t.length)%t.length])}swipeDown(e){const t=e.target;this.editing||this.sheet||t.closest(".w, button, .sheet, .picker, .bigsl, pine3-house")||(this.swipe={x:e.clientX,y:e.clientY,id:e.pointerId})}swipeUp(e){const t=this.swipe;if(this.swipe=void 0,!t||t.id!==e.pointerId)return;const a=e.clientX-t.x;Math.abs(a)>Ir&&Math.abs(a)>Math.abs(e.clientY-t.y)*1.5&&this.step(a<0?1:-1)}render(){if(!this.home)return m;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(r=>r.id===this.view),t=ge(this.home,this.entities).lightsOn>0,a=this.view==="home",i={vd:!0,moldura:!0,dim:!t,editing:!!this.editing},o=this.order,s=this.current;return c`<div class=${H(i)} @pointerdown=${r=>this.swipeDown(r)} @pointerup=${r=>this.swipeUp(r)}
        @pointercancel=${()=>this.swipe=void 0}>
      <div class="hills">${jr}</div>
      ${a?this.renderFrame():c`<div class="panel"><main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderRoomList():this.renderView(this.view)}</main></div>`}
      <div class="pager">
        <b>${e?e.name:Ya[s]??""}</b>
        <div class="dots">${o.map(r=>c`<button class=${H({on:r===s})} aria-label=${Ya[r]} @click=${()=>this.openRoom(r)}></button>`)}</div>
        ${this.renderGear("mgear")}
      </div>
      ${this.editing?m:c`<button class="edge l" aria-label=${l("Vista anterior")} @click=${()=>this.step(-1)}>${Qe(M.back)}</button>
          <button class="edge r" aria-label=${l("Vista seguinte")} @click=${()=>this.step(1)}>${Qe(M.back)}</button>`}
      ${a?c`<span class="hint">${l("desliza para o lado para mudar de vista")}</span>`:m}
      ${this.sheet?this.renderSheet(this.sheet):m}
    </div>`}renderFrame(){const e=ge(this.home,this.entities),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],o=this.home.rooms.filter(d=>!d.hidden&&me(d).length),s=this.home.rooms.flatMap(d=>d.devices).find(d=>!d.hidden&&G(d.id)==="climate"),r=this.home.rooms.flatMap(d=>d.devices).find(d=>!d.hidden&&G(d.id)==="lock"),n=s?this.entities[s.id]:void 0,u=r?this.entities[r.id]:void 0,h=[e.lightsOn?ie(e.lightsOn,"{n} luz acesa","{n} luzes acesas"):l("luzes apagadas"),e.alerts?e.alertText:null].filter(Boolean);return c`<div class="tl">
        <b>${this.now.toLocaleTimeString(re(),{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${this.now.toLocaleDateString(re(),{weekday:"long",day:"numeric",month:"long"})}</span>
      </div>
      <div class="tr">
        ${t?c`<b>${a!=null?`${Math.round(a)}°`:""}</b>${this.weatherWord(t.state)}<br />`:m}
        ${h.join(" · ")}
        ${i?c`<br /><span class=${`ipma ${i.awarenessLevelID}`}><i></i>${l("Aviso {level}",{level:l({yellow:"amarelo",orange:"laranja",red:"vermelho"}[i.awarenessLevelID]??"")})} · ${l(i.awarenessTypeName).toLowerCase()}</span>`:m}
      </div>
      <div class="strip">
        ${o.map(d=>{const g=me(d).filter(z=>this.entities[z]?.state==="on").length;return c`<button class=${H({q:!0,on:g>0})} @click=${()=>this.openRoom(d.id)}>
            <i>${Qe(Ke(d.icon))}</i><span>${d.name}<small>${g?ie(g,"{n} luz","{n} luzes"):l("apagada")}</small></span>
          </button>`})}
        ${s&&n?c`<button class=${H({q:!0,on:n.state!=="off"})} @click=${()=>this.openRoom("@clima")}>
              <i>${Qe(M.therm)}</i><span>${n.state==="off"?"Off":`${le(n.attributes.temperature??0)}°`}<small>${l("clima")}</small></span>
            </button>`:m}
        ${r&&u?c`<button class=${H({q:!0,alert:u.state==="unlocked"})}
                @click=${()=>u.state==="locked"?this.sheet=r.id:this.call("lock","lock",r.id)}>
              <i>${Qe(u.state==="locked"?M.lock:M.unlock)}</i><span>${r.name}<small>${u.state==="locked"?l("trancada"):l("destrancada · tocar")}</small></span>
            </button>`:m}
      </div>`}weatherWord(e){const t={"clear-night":"Céu limpo",cloudy:"Nublado",fog:"Nevoeiro",lightning:"Trovoada","lightning-rainy":"Trovoada e chuva",partlycloudy:"Pouco nublado",pouring:"Chuva forte",rainy:"Chuva",snowy:"Neve",sunny:"Sol",windy:"Vento"};return t[e]?l(t[e]):e}renderRoomList(){const e=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden)),t=ge(this.home,this.entities).lightsOn;return c`<div class="rtop"><b>${l("Divisões")}</b><span>${t?ie(t,"{n} luz acesa","{n} luzes acesas"):l("tudo apagado")}</span></div>
      <div class="grid">${e.map(a=>{const i=me(a),o=i.filter(r=>this.entities[r]?.state==="on").length,s=a.temperature?parseFloat(this.entities[a.temperature]?.state??""):NaN;return c`<button class=${H({w:!0,s:!0,rc:!0,on:o>0})} @click=${()=>this.openRoom(a.id)}>
          <span class="nm">${a.name}${Number.isNaN(s)?m:c`<em>${le(s)}°</em>`}</span>
          <div class="hero">${Qe(Ke(a.icon))}<small>${je(i.length,o,a.devices.length)}</small></div>
        </button>`})}</div>`}};Qt.styles=[Be,_e`
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
  `];Qt=Rr([Me("pine3-moldura")],Qt);var qr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Wi=(e,t,a,i)=>{for(var o=i>1?void 0:i?Br(t,a):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(i?r(t,a,o):r(o))||o);return i&&o&&qr(t,a,o),o};const Wr=qe([{id:"home",name:"Casa"},{id:"@divisoes",name:"Divisões"},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Segurança"},{id:"@cenas",name:"Cenas"},{id:"@casa3d",name:"Casa 3D"}]),Fr=["nenhuma","uma","duas","três","quatro","cinco","seis","sete","oito","nove","dez"],Zr=["no","one","two","three","four","five","six","seven","eight","nine","ten"],Ur=$e({yellow:"amarelo",orange:"laranja",red:"vermelho"});let At=class extends j{constructor(){super(...arguments),this.open=null}get pages(){return Wr.filter(e=>e.id==="home"||e.id==="@divisoes"||this.viewAvailable(e.id))}render(){if(!this.home)return m;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(o=>o.id===this.view),t=this.pages,a=e?"@divisoes":this.view,i=Math.max(0,t.findIndex(o=>o.id===a));return c`<div class=${H({vd:!0,editorial:!0,editing:!!this.editing})}>
      <nav class="toc" aria-label=${l("Índice")}>
        ${t.map(o=>c`<button class=${H({on:o.id===a})} @click=${()=>this.openRoom(o.id)}>${o.name}</button>`)}
        ${this.renderGear("egear")}
        <span class="no">${l("N.º")} ${i+1} / ${t.length}</span>
      </nav>
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?c`<div class="rtop"><b>${l("Divisões")}</b><span>${this.lightsLine()}</span></div>${this.renderList(!0)}`:this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):m}
    </div>`}lightsLine(){const e=ge(this.home,this.entities).lightsOn;return e?ie(e,"{n} luz acesa","{n} luzes acesas"):l("tudo apagado")}sentence(){const e=ge(this.home,this.entities),t=this.home.rooms.map(h=>h.temperature?parseFloat(this.entities[h.temperature]?.state??""):NaN).filter(h=>!Number.isNaN(h)),a=t.length?Math.round(t.reduce((h,d)=>h+d,0)/t.length):null,i=this.home.rooms.flatMap(h=>h.devices).find(h=>!h.hidden&&G(h.id)==="lock"),o=i?this.entities[i.id]?.state:void 0;if(zi()==="en"){const h=e.lightsOn>=4?"cosy":e.lightsOn?"calm":"dark",d=`${Zr[e.lightsOn]??e.lightsOn} ${e.lightsOn===1?"light":"lights"}`,g=i&&o?o==="locked"?c`the ${i.name.toLowerCase()} locked`:c`the ${i.name.toLowerCase()} <em>still unlocked</em>`:null,z=[d,a!=null?`${a} degrees`:null].filter(Boolean).join(", ");return c`The house is <em>${h}</em>: ${z}${g?c`, and ${g}`:m}.`}const s=e.lightsOn>=4?"acolhedora":e.lightsOn?"calma":"às escuras",r=`${Fr[e.lightsOn]??e.lightsOn} ${e.lightsOn===1?"luz":"luzes"}`,n=i&&o?o==="locked"?c`a ${i.name.toLowerCase()} trancada`:c`a ${i.name.toLowerCase()} <em>ainda destrancada</em>`:null,u=[r,a!=null?`${a} graus`:null].filter(Boolean).join(", ");return c`A casa está <em>${s}</em>: ${u}${n?c`, e ${n}`:m}.`}renderHome(){const e=this.now.toLocaleTimeString(re(),{hour:"2-digit",minute:"2-digit"}).split(":"),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],o=[...this.home.scenes,...this.home.scripts].filter(s=>this.entities[s]).slice(0,4);return c`<div class="ed">
      <div class="left">
        <div class="ttl">${e[0]}<em>:</em>${e[1]}</div>
        <div class="sub">${this.sentence()}</div>
        ${o.length?c`<div class="scn">${o.map(s=>c`<button class=${H({on:this.flash===s})} @click=${()=>this.tap({key:s,kind:"scene",size:"s",name:"",entity:s})}>
              ${(this.entities[s].attributes.friendly_name??s).toLowerCase()}</button>`)}</div>`:m}
        <div class="meta">
          ${t?c`<div>${l("Lá fora")}<b>${a!=null?`${Math.round(a)}°, `:""}${this.weatherWord(t.state)}</b></div>`:m}
          ${i?c`<div class="warnm">${l("Aviso {level}",{level:Ur[i.awarenessLevelID]??""})}<b>${l(i.awarenessTypeName).toLowerCase()}</b></div>`:m}
        </div>
      </div>
      ${this.renderList(!1)}
    </div>`}weatherWord(e){const t={"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",lightning:"trovoada","lightning-rainy":"trovoada",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve",sunny:"sol",windy:"vento"};return t[e]?l(t[e]):e}renderList(e){const t=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden));return c`<div class=${H({list:!0,full:e})}>${t.map(a=>this.renderRow(a))}</div>`}renderRow(e){const t=me(e),a=t.filter(u=>this.entities[u]?.state==="on").length,i=e.temperature?parseFloat(this.entities[e.temperature]?.state??""):NaN,o=e.devices.find(u=>G(u.id)==="lock"),s=o&&this.entities[o.id]?.state==="unlocked",r=this.open===e.id,n=`${je(t.length,a,e.devices.length)}${Number.isNaN(i)?"":` · ${le(i,0)}°`}`;return c`<div class=${H({r:!0,on:a>0})}>
      <div class="h">
        <button class="nmb" aria-expanded=${r} @click=${()=>this.open=r?null:e.id}>${e.name}</button>
        <span>${n}</span>
        ${s?c`<button class="tg warn" @click=${()=>this.call("lock","lock",o.id)}>${l("trancar")}</button>`:t.length?c`<button class="tg" @click=${()=>this.call("light",a?"turn_off":"turn_on",t)}>${a?"on":"off"}</button>`:c`<button class="tg" @click=${()=>this.openRoom(e.id)}>${l("abrir")}</button>`}
      </div>
      ${r?c`<div class="ctrls">
            ${t.map(u=>this.lineControl(u,e))}
            <button class="more" @click=${()=>this.openRoom(e.id)}>${l("ver tudo em {room}",{room:e.name.toLowerCase()})} →</button>
          </div>`:m}
    </div>`}lineControl(e,t){const a=this.entities[e],i=`line-${e}`,o=this.drag?.key===i?this.drag.value:Je(a),s=r=>{const n=r.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(r.clientX-n.left)/n.width*100)))};return c`<div class="lc">
      <span>${this.name(e,t)}</span><b>${o?`${o}%`:"—"}</b>
      <div class="line" role="slider" aria-label=${this.name(e,t)} aria-valuenow=${o} aria-valuemin="0" aria-valuemax="100"
        @pointerdown=${r=>{r.currentTarget.setPointerCapture(r.pointerId),this.drag={key:i,value:s(r)}}}
        @pointermove=${r=>{this.drag?.key===i&&r.buttons&&(this.drag={key:i,value:s(r)})}}
        @pointerup=${r=>{const n=s(r);this.call("light",n?"turn_on":"turn_off",e,n?{brightness_pct:n}:{}),this.drag={key:i,value:n},window.setTimeout(()=>{this.drag?.key===i&&(this.drag=null)},1500)}}><i style=${`width:${o}%`}></i></div>
    </div>`}};At.styles=[Be,_e`
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
  `];Wi([Y()],At.prototype,"open",2);At=Wi([Me("pine3-editorial")],At);var Gr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,ma=(e,t,a,i)=>{for(var o=i>1?void 0:i?Yr(t,a):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(i?r(t,a,o):r(o))||o);return i&&o&&Gr(t,a,o),o};const Xr=qe([{id:"home",name:"Casa"},{id:"@divisoes",name:"Div."},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Seg."},{id:"@cenas",name:"Cenas"},{id:"@casa3d",name:"3D"}]),Ue=270,Kr=16,Jr=30;let vt=class extends j{constructor(){super(...arguments),this.faderRoom=null,this.dial=null}render(){if(!this.home)return m;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(o=>o.id===this.view),t=e?"@divisoes":this.view,a=Xr.filter(o=>o.id==="home"||o.id==="@divisoes"||this.viewAvailable(o.id)),i=ge(this.home,this.entities).alerts;return c`<div class=${H({vd:!0,instrumento:!0,editing:!!this.editing})}>
      <nav class="bank" aria-label=${l("Vistas")}>
        ${a.map(o=>c`<button class=${H({key:!0,on:o.id===t})} @click=${()=>this.openRoom(o.id)}>
          <span class=${H({led:!0,on:o.id===t,alarm:o.id==="@seguranca"&&i>0})}></span>${o.name}
        </button>`)}
        ${this.settingsButton?c`<button class="key set" @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}><span class="led"></span>${l("Def.")}</button>`:m}
      </nav>
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderSwitches(!0):this.view.startsWith("@")?this.renderView(this.view):this.renderConsole()}</main>
      ${this.sheet?this.renderSheet(this.sheet):m}
    </div>`}lightRooms(){return this.home.rooms.filter(e=>!e.hidden&&me(e).length)}renderConsole(){const e=this.home.weather?this.entities[this.home.weather]:void 0,t=e?.attributes.temperature,a=this.warnings[0],i=[...this.home.scenes,...this.home.scripts].filter(n=>this.entities[n]).slice(0,3),o=this.home.rooms.flatMap(n=>n.devices).find(n=>!n.hidden&&G(n.id)==="lock"),s=o?this.entities[o.id]?.state==="locked":!0,r=this.now.toLocaleDateString(re(),{weekday:"short",day:"numeric",month:"short"}).replace(/\./g,"");return c`<div class="console">
      <section class="mod disp">
        <div class="lab"><span>${l("Hora")}</span><span>${r}</span></div>
        <b>${this.now.toLocaleTimeString(re(),{hour:"2-digit",minute:"2-digit"})}</b>
        <span class="ln">${e?`${t!=null?`${Math.round(t)}° · `:""}${De[e.state]??e.state}`:""}${a?` · ${l("aviso {type}",{type:l(a.awarenessTypeName).toLowerCase()})}`:""}</span>
        <div class="keys">
          ${i.map((n,u)=>c`<button class=${H({btn:!0,on:this.flash===n})} @click=${()=>this.tap({key:n,kind:"scene",size:"s",name:"",entity:n})}>
            ${u+1} ${(this.entities[n].attributes.friendly_name??n).split(" ")[0]}</button>`)}
          ${o?c`<button class=${H({btn:!0,lockw:!s})} @click=${()=>s?this.sheet=o.id:this.call("lock","lock",o.id)}>
                <span class=${H({led:!0,g:s,on:!0})}></span>${l(s?"Tranc.":"Porta")}</button>`:m}
        </div>
      </section>
      ${this.renderKnob()}
      ${this.renderFaders()}
      ${this.renderSwitches(!1)}
    </div>`}renderKnob(){const e=this.home.rooms.flatMap(_=>_.devices.map(b=>({d:b,r:_}))).find(({d:_})=>!_.hidden&&G(_.id)==="climate");if(!e)return c`<section class="mod knob"><div class="lab"><span>${l("Clima")}</span></div><p class="k">${l("Sem termóstato")}</p></section>`;const t=this.entities[e.d.id],a=!!t&&t.state!=="off",i=t?.attributes.min_temp??Kr,o=Math.min(t?.attributes.max_temp??Jr,i+14),s=this.dial??t?.attributes.temperature??i,r=Math.max(0,Math.min(1,(s-i)/(o-i))),n=-Ue/2+r*Ue,u=Array.from({length:29},(_,b)=>{const A=(-Ue/2+b*Ue/28)*Math.PI/180,y=b%4?44:41,D=a&&b/28<=r;return W`<line x1=${50+47*Math.sin(A)} y1=${50-47*Math.cos(A)} x2=${50+y*Math.sin(A)} y2=${50-y*Math.cos(A)}
        stroke=${D?"#ff6a1a":"#6b6a66"} stroke-width=${b%4?1:1.8} stroke-linecap="round"/>`}),h=t?.attributes.target_temp_step??.5,d=_=>{const b=_.currentTarget.getBoundingClientRect(),A=Math.atan2(_.clientX-(b.left+b.width/2),-(_.clientY-(b.top+b.height/2)))*180/Math.PI,y=Math.max(0,Math.min(1,(A+Ue/2)/Ue));return Math.round((i+y*(o-i))/h)*h},g=(t?.attributes.hvac_modes??[]).filter(_=>["cool","heat","off","auto","heat_cool"].includes(_)).slice(0,3),z=$e({cool:"Frio",heat:"Calor",off:"Off",auto:"Auto",heat_cool:"Auto"}),C=t?.attributes.current_temperature;return c`<section class="mod knob">
      <div class="lab"><span>${l("Clima")} · ${e.r.name}${C!=null?` · ${le(C)}°`:""}</span><span class=${H({led:!0,on:a})}></span></div>
      <div class="dialw" role="slider" aria-label=${l("Temperatura")} aria-valuenow=${s} aria-valuemin=${i} aria-valuemax=${o}
        @pointerdown=${_=>{a&&(_.currentTarget.setPointerCapture(_.pointerId),this.dial=d(_))}}
        @pointermove=${_=>{this.dial!=null&&_.buttons&&(this.dial=d(_))}}
        @pointerup=${_=>{if(this.dial==null)return;const b=d(_);this.call("climate","set_temperature",e.d.id,{temperature:b}),window.setTimeout(()=>this.dial=null,1500)}}>
        <svg viewBox="0 0 100 100" aria-hidden="true">${u}</svg>
        <div class="kn"><i style=${`transform:rotate(${a?n:-Ue/2}deg)`}></i></div>
        <div class="ktx"><div>${a?`${le(s)}°`:"off"}<small>${l(a?"roda":"desligado")}</small></div></div>
      </div>
      <div class="keys">${g.map(_=>c`<button class=${H({btn:!0,on:t?.state===_})} @click=${()=>this.call("climate","set_hvac_mode",e.d.id,{hvac_mode:_})}>${z[_]}</button>`)}</div>
    </section>`}renderFaders(){const e=this.lightRooms(),t=e.find(s=>s.id===this.faderRoom)??e[0];if(!t)return c`<section class="mod fad"><div class="lab"><span>Faders</span></div></section>`;const a=t.devices.filter(s=>!s.hidden&&G(s.id)==="cover"&&this.entities[s.id]?.attributes.supported_features&4),i=[...me(t).map(s=>({id:s,v:Je(this.entities[s]),n:this.name(s,t),cover:!1})),...a.map(s=>({id:s.id,v:this.entities[s.id]?.attributes.current_position??0,n:s.name,cover:!0}))].slice(0,4),o=s=>{const r=s.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(r.bottom-s.clientY)/r.height*100)))};return c`<section class="mod fad">
      <div class="lab"><span>Faders</span><span class="led g on"></span></div>
      <div class="sel">${e.map(s=>c`<button class=${H({btn:!0,on:s.id===t.id})} @click=${()=>this.faderRoom=s.id}>${s.name.slice(0,5)}</button>`)}</div>
      <div class="faders">${i.map(s=>{const r=`fd-${s.id}`,n=this.drag?.key===r?this.drag.value:s.v;return c`<div class="fd"><b>${n}</b>
          <div class="tk" role="slider" aria-label=${s.n} aria-valuenow=${n} aria-valuemin="0" aria-valuemax="100"
            @pointerdown=${u=>{u.currentTarget.setPointerCapture(u.pointerId),this.drag={key:r,value:o(u)}}}
            @pointermove=${u=>{this.drag?.key===r&&u.buttons&&(this.drag={key:r,value:o(u)})}}
            @pointerup=${u=>{const h=o(u);s.cover?this.call("cover","set_cover_position",s.id,{position:h}):this.call("light",h?"turn_on":"turn_off",s.id,h?{brightness_pct:h}:{}),this.drag={key:r,value:h},window.setTimeout(()=>{this.drag?.key===r&&(this.drag=null)},1500)}}><div class="cap" style=${`bottom:calc((100% - var(--u) * 2.1) * ${n/100})`}></div></div>
          <span>${s.n}</span></div>`})}</div>
    </section>`}renderSwitches(e){const t=e?this.home.rooms.filter(i=>!i.hidden&&i.devices.some(o=>!o.hidden)):this.lightRooms().slice(0,6),a=ge(this.home,this.entities).lightsOn;return c`<section class=${H({mod:!0,sw:!0,full:e})}>
      <div class="lab"><span>${l(e?"Divisões":"Luzes")}</span><span>${ie(a,"{n} acesa","{n} acesas")}</span></div>
      <div class="rows">${t.map(i=>{const o=me(i),s=o.filter(n=>this.entities[n]?.state==="on"),r=s.length?Math.max(...s.map(n=>Je(this.entities[n]))):0;return c`<div class="rk">
          <button class=${H({rocker:!0,on:s.length>0})} aria-label=${l("Luzes de {room}",{room:i.name})} ?disabled=${!o.length}
            @click=${()=>this.call("light",s.length?"turn_off":"turn_on",o)}><i></i></button>
          <button class="rkn" @click=${()=>this.openRoom(i.id)}><b>${i.name}</b><span>${o.length?s.length?`${r}%`:"off":l("{n} disp.",{n:i.devices.length})}</span></button>
        </div>`})}</div>
    </section>`}};vt.styles=[Be,_e`
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
  `];ma([Y()],vt.prototype,"faderRoom",2);ma([Y()],vt.prototype,"dial",2);vt=ma([Me("pine3-instrumento")],vt);var Qr=Object.defineProperty,en=Object.getOwnPropertyDescriptor,Fi=(e,t,a,i)=>{for(var o=i>1?void 0:i?en(t,a):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(i?r(t,a,o):r(o))||o);return i&&o&&Qr(t,a,o),o};const et=e=>W`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,qt=qe([{id:"home",name:"Casa",icon:M.home},{id:"@divisoes",name:"Divisões",icon:M.room},{id:"@clima",name:"Clima",icon:M.therm},{id:"@seguranca",name:"Segurança",icon:M.shield},{id:"@cenas",name:"Cenas",icon:M.spark},{id:"@casa3d",name:"Casa 3D",icon:M.cube}]);let Ht=class extends j{constructor(){super(...arguments),this.wheel=!1}get views(){return qt.filter(e=>e.id==="home"||e.id==="@divisoes"||this.viewAvailable(e.id))}go(e){this.wheel=!1,this.openRoom(e)}render(){if(!this.home)return m;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(i=>i.id===this.view),t=e?"@divisoes":this.view,a=qt.find(i=>i.id===t)??qt[0];return c`<div class=${H({vd:!0,orbita:!0,editing:!!this.editing})}>
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderOrbList():this.view.startsWith("@")?this.renderView(this.view):this.renderSky()}</main>
      ${this.wheel?this.renderWheel(t):m}
      ${this.editing?m:c`<button class="hub" aria-label=${l("Mudar de vista")} aria-expanded=${this.wheel} @click=${()=>this.wheel=!this.wheel}>
            <i>${et(this.wheel?M.close:a.icon)}</i><span><b>${e?e.name:a.name}</b><small>${l("toca para mudar de vista")}</small></span>
          </button>`}
      ${this.sheet?this.renderSheet(this.sheet):m}
    </div>`}renderWheel(e){const t=[...this.views];this.settingsButton&&t.push({id:"@settings",name:l("Definições"),icon:M.gear});const a=t.length;return c`<div class="radial" @click=${i=>{i.target===i.currentTarget&&(this.wheel=!1)}}>
      ${t.map((i,o)=>{const s=Math.PI+(a===1?Math.PI/2:o*Math.PI/(a-1)),r=50+30*Math.cos(s),n=88+30*(5/3)*Math.sin(s);return c`<button class=${H({rb:!0,on:i.id===e})} style=${`left:${r.toFixed(1)}%;top:${n.toFixed(1)}%;animation-delay:${o*30}ms`}
          @click=${()=>i.id==="@settings"?(this.wheel=!1,this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))):this.go(i.id)}>${et(i.icon)}${i.name}</button>`})}
    </div>`}renderSky(){const e=ge(this.home,this.entities),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.home.rooms.filter(d=>!d.hidden&&d.devices.some(g=>!g.hidden));i.length;const o=this.home.rooms.flatMap(d=>d.devices.filter(g=>!g.hidden)),s=o.find(d=>G(d.id)==="climate"),r=o.find(d=>G(d.id)==="lock"),n=s?this.entities[s.id]:void 0,u=r?this.entities[r.id]:void 0,h=this.warnings[0];return c`<div class="sky">
      <div class="core">
        <b>${this.now.toLocaleTimeString(re(),{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${this.now.toLocaleDateString(re(),{weekday:"long"})}${t?` · ${a!=null?`${Math.round(a)}° `:""}${De[t.state]??t.state}`:""}</span>
        <span>${e.lightsOn?ie(e.lightsOn,"{n} luz acesa","{n} luzes acesas"):l("tudo apagado")}</span>
        ${h?c`<span class=${`ipma ${h.awarenessLevelID}`}><i></i>${l(h.awarenessTypeName).toLowerCase()}</span>`:m}
      </div>
      ${this.ring(i,s&&n?s.id:null,r&&u?r.id:null)}
    </div>`}ring(e,t,a){const i=e.map(s=>({key:s.id,render:(r,n)=>{const u=me(s),h=u.filter(C=>this.entities[C]?.state==="on"),d=Math.min(14,9+h.length*1.5),g=h.length?ht(this.entities[h[0]]):"#ffcf85",z=h.length?Math.round(h.reduce((C,_)=>C+Je(this.entities[_]),0)/h.length):0;return c`<button class=${H({orb:!0,on:h.length>0})} style=${`left:${r}%;top:${n}%;--s:calc(var(--u) * ${d});--c:${g};--g:${.15+z/300}`}
          @click=${()=>this.openRoom(s.id)} aria-label=${s.name}>
          ${et(Ke(s.icon))}<b>${s.name}</b><span>${je(u.length,h.length,s.devices.length)}</span>
        </button>`}}));if(t){const s=this.entities[t];i.splice(Math.min(1,i.length),0,{key:t,render:(r,n)=>c`<button class=${H({orb:!0,ac:s.state!=="off"})} style=${`left:${r}%;top:${n}%;--s:calc(var(--u) * 8)`} @click=${()=>this.openRoom("@clima")}>
          ${et(M.therm)}<b>${s.state==="off"?"Off":`${le(s.attributes.temperature??0)}°`}</b><span>${l("clima")}</span></button>`})}if(a){const s=this.entities[a];i.push({key:a,render:(r,n)=>c`<button class=${H({orb:!0,alert:s.state==="unlocked"})} style=${`left:${r}%;top:${n}%;--s:calc(var(--u) * 8)`}
          @click=${()=>s.state==="locked"?this.sheet=a:this.call("lock","lock",a)}>
          ${et(s.state==="locked"?M.lock:M.unlock)}<b>${l("Porta")}</b><span>${s.state==="locked"?l("trancada"):l("trancar")}</span></button>`})}const o=i.length;return i.map((s,r)=>{const n=-Math.PI/2+r*2*Math.PI/Math.max(o,1)+(o%2?0:Math.PI/o);return s.render(+(50+36*Math.cos(n)).toFixed(1),+(50+34*Math.sin(n)).toFixed(1))})}renderOrbList(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden));return c`<div class="rtop"><b>${l("Divisões")}</b><span>${ie(ge(this.home,this.entities).lightsOn,"{n} luz acesa","{n} luzes acesas")}</span></div>
      <div class="orbs">${e.map(t=>{const a=me(t),i=a.filter(r=>this.entities[r]?.state==="on"),o=i.length?ht(this.entities[i[0]]):"#ffcf85",s=t.temperature?parseFloat(this.entities[t.temperature]?.state??""):NaN;return c`<button class=${H({orb:!0,flat:!0,on:i.length>0})} style=${`--c:${o};--g:.3`} @click=${()=>this.openRoom(t.id)}>
          ${et(Ke(t.icon))}<b>${t.name}</b><span>${je(a.length,i.length,t.devices.length)}${Number.isNaN(s)?"":` · ${le(s,0)}°`}</span>
        </button>`})}</div>`}};Ht.styles=[Be,_e`
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
  `];Fi([Y()],Ht.prototype,"wheel",2);Ht=Fi([Me("pine3-orbita")],Ht);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tn={},an=(e,t=tn)=>e._$AH=t;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=ua(class extends ha{constructor(){super(...arguments),this.key=m}render(e,t){return this.key=e,t}update(e,[t,a]){return t!==this.key&&(an(e),this.key=t),a}});var on=Object.getOwnPropertyDescriptor,sn=(e,t,a,i)=>{for(var o=i>1?void 0:i?on(t,a):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(o)||o);return o};const Bt=e=>W`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,Wt=qe([{id:"home",name:"Casa",color:"#f6d34a",icon:M.home},{id:"@divisoes",name:"Divisões",color:"#9fd8b8",icon:M.room},{id:"@clima",name:"Clima",color:"#ff8f6b",icon:M.therm},{id:"@seguranca",name:"Segurança",color:"#9cc4f2",icon:M.shield},{id:"@cenas",name:"Cenas",color:"#f7a98a",icon:M.spark},{id:"@casa3d",name:"Casa 3D",color:"#c9bdf0",icon:M.cube}]);let ea=class extends j{render(){if(!this.home)return m;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(o=>o.id===this.view),t=e?"@divisoes":this.view,a=Wt.filter(o=>o.id==="home"||o.id==="@divisoes"||this.viewAvailable(o.id)),i=(Wt.find(o=>o.id===t)??Wt[0]).color;return c`<div class=${H({vd:!0,carteira:!0,editing:!!this.editing})}>
      <nav class="stack" aria-label=${l("Vistas")}>
        ${a.map(o=>c`<button class=${H({wtab:!0,on:o.id===t})} style=${`--c:${o.color}`} @click=${()=>this.openRoom(o.id)}>
          ${Bt(o.icon)}<span>${o.name}</span></button>`)}
        ${this.settingsButton?c`<button class="wtab gear" style="--c:#d6cfc2" @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}>
              ${Bt(M.gear)}<span>${l("Definições")}</span></button>`:m}
      </nav>
      <div class="wcard" style=${`--c:${i}`}>
        ${Zi(t,c`<main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderRows(!0):this.view.startsWith("@")?this.renderView(this.view):this.renderFront()}</main>`)}
      </div>
      ${this.sheet?this.renderSheet(this.sheet):m}
    </div>`}renderFront(){const e=this.home.weather?this.entities[this.home.weather]:void 0,t=e?.attributes.temperature,a=this.warnings[0],i=[...this.home.scenes,...this.home.scripts].filter(o=>this.entities[o]).slice(0,4);return c`<div class="front">
      <div class="l">
        <div class="big">${this.now.toLocaleTimeString(re(),{hour:"2-digit",minute:"2-digit"})}</div>
        <span class="date">${this.now.toLocaleDateString(re(),{weekday:"long",day:"numeric",month:"long"})}</span>
        ${i.length?c`<div class="pills">${i.map(o=>c`<button class=${H({on:this.flash===o})}
              @click=${()=>this.tap({key:o,kind:"scene",size:"s",name:"",entity:o})}>${this.entities[o].attributes.friendly_name??o}</button>`)}</div>`:m}
        ${e?c`<div class="wxg">${t!=null?`${Math.round(t)}°`:""}<small>${De[e.state]??e.state}${a?` · ${l("aviso {type}",{type:l(a.awarenessTypeName).toLowerCase()})}`:""}</small></div>`:m}
      </div>
      ${this.renderRows(!1)}
    </div>`}renderRows(e){const t=this.home.rooms.filter(o=>!o.hidden&&o.devices.some(s=>!s.hidden)),a=this.home.rooms.flatMap(o=>o.devices).find(o=>!o.hidden&&G(o.id)==="lock"),i=a?this.entities[a.id]:void 0;return c`<div class=${H({rows:!0,full:e})}>
      ${e?c`<div class="rtop"><b>${l("Divisões")}</b><span>${ie(ge(this.home,this.entities).lightsOn,"{n} luz acesa","{n} luzes acesas")}</span></div>`:m}
      ${t.map(o=>{const s=me(o),r=s.filter(u=>this.entities[u]?.state==="on").length,n=o.temperature?parseFloat(this.entities[o.temperature]?.state??""):NaN;return c`<div class="rowg">
          <button class="rn" @click=${()=>this.openRoom(o.id)}>${e?Bt(Ke(o.icon)):m}<span><b>${o.name}</b>
            <small>${je(s.length,r,o.devices.length)}${Number.isNaN(n)?"":` · ${le(n)}°`}</small></span></button>
          ${s.length?c`<button class=${H({tg:!0,on:r>0})} role="switch" aria-checked=${r>0} aria-label=${l("Luzes de {room}",{room:o.name})}
                @click=${()=>this.call("light",r?"turn_off":"turn_on",s)}><i></i></button>`:m}
        </div>`})}
      ${a&&i?c`<div class="rowg">
            <span class="rn"><span><b>${a.name}</b><small>${i.state==="locked"?l("trancada"):l("destrancada · tocar para trancar")}</small></span></span>
            <button class=${H({tg:!0,on:i.state==="locked"})} role="switch" aria-checked=${i.state==="locked"} aria-label=${l("Trancar {name}",{name:a.name})}
              @click=${()=>i.state==="locked"?this.sheet=a.id:this.call("lock","lock",a.id)}><i></i></button>
          </div>`:m}
    </div>`}};ea.styles=[Be,_e`
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
  `];ea=sn([Me("pine3-carteira")],ea);var rn=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,Ui=(e,t,a,i)=>{for(var o=i>1?void 0:i?nn(t,a):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(i?r(t,a,o):r(o))||o);return i&&o&&rn(t,a,o),o};const wt=e=>W`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,ln=$e({home:"Casa","@divisoes":"Divisões","@clima":"Clima","@seguranca":"Segurança","@cenas":"Cenas","@casa3d":"Casa 3D"}),cn=60;let Vt=class extends j{constructor(){super(...arguments),this.overview=!1}go(e){this.overview=!1,this.openRoom(e)}touchStart(e){this.pinch=e.touches.length===2&&!e.target.closest?.("pine3-house")?this.spread(e):void 0}touchMove(e){this.pinch==null||e.touches.length!==2||this.editing||this.pinch-this.spread(e)>cn&&(this.pinch=void 0,this.overview=!0)}spread(e){const[t,a]=[e.touches[0],e.touches[1]];return Math.hypot(t.clientX-a.clientX,t.clientY-a.clientY)}render(){if(!this.home)return m;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(t=>t.id===this.view);return c`<div class=${H({vd:!0,lente:!0,editing:!!this.editing})}
        @touchstart=${t=>this.touchStart(t)} @touchmove=${t=>this.touchMove(t)}>
      ${this.overview?this.renderOverview():c`<div class="crumb">${this.view==="home"?c`<b>${l("Casa")}</b>`:c`<button @click=${()=>this.go("home")}>${l("Casa")}</button> › ${e?c`<button @click=${()=>this.go("@divisoes")}>${l("Divisões")}</button> › <b>${e.name}</b>`:c`<b>${ln[this.view]??""}</b>`}`}</div>
          ${Zi(this.view,c`<main class="main zin">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderRoomRows(!0):this.view.startsWith("@")?this.renderView(this.view):this.renderFront()}</main>`)}
          ${this.editing?m:c`<span class="pinch">${l("aperta com dois dedos para ver todas as vistas")}</span>`}`}
      ${this.editing?m:c`<div class="tools">
            ${this.settingsButton?c`<button class="lensbtn round" aria-label=${l("Definições")} @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}>${wt(M.gear)}</button>`:m}
            <button class="lensbtn" @click=${()=>this.overview=!this.overview}><i>${wt(this.overview?M.close:M.room)}</i>${this.overview?l("Fechar"):l("Todas as vistas")}</button>
          </div>`}
      ${this.sheet?this.renderSheet(this.sheet):m}
    </div>`}renderOverview(){const e=ge(this.home,this.entities),t=this.home.rooms.filter(r=>!r.hidden&&r.devices.some(n=>!n.hidden)),a=this.home.rooms.flatMap(r=>r.devices).find(r=>!r.hidden&&G(r.id)==="climate"),i=a?this.entities[a.id]:void 0,o=r=>r.map(n=>{const u=kt(me(n),this.entities);return c`<i class=${u?"on":""} style=${`height:${20+u*.7}%`}></i>`}),s=[{id:"home",name:l("Casa"),sub:`${ie(e.lightsOn,"{n} luz","{n} luzes")} · ${this.now.toLocaleTimeString(re(),{hour:"2-digit",minute:"2-digit"})}`,ill:o(t)},{id:"@divisoes",name:l("Divisões"),sub:ie(t.length,"{n} divisão","{n} divisões"),ill:o(t)}];this.viewWidgets("@clima").length&&s.push({id:"@clima",name:l("Clima"),sub:i?i.state==="off"?l("desligado"):`${le(i.attributes.temperature??0)}°`:e.temp??"",ill:m}),this.viewWidgets("@seguranca").length&&s.push({id:"@seguranca",name:l("Segurança"),sub:e.alertText,ill:m}),this.viewAvailable("@casa3d")&&s.push({id:"@casa3d",name:l("Casa 3D"),sub:ie(t.length,"{n} divisão","{n} divisões"),ill:m}),this.viewWidgets("@cenas").length&&s.push({id:"@cenas",name:l("Cenas"),sub:ie(this.home.scenes.length+this.home.scripts.length,"{n} cena ou rotina","{n} cenas e rotinas"),ill:m});for(const r of t){const n=me(r);s.push({id:r.id,name:r.name,sub:je(n.length,n.filter(u=>this.entities[u]?.state==="on").length,r.devices.length),ill:n.map(u=>{const h=this.entities[u]?.state==="on"?kt([u],this.entities):0;return c`<i class=${h?"on":""} style=${`height:${20+h*.7}%`}></i>`})})}return c`<span class="ovh">${l("Todas as vistas · toca numa para aproximar")}</span>
      <div class="ov">${s.map((r,n)=>c`<button class=${H({mini:!0,cur:r.id===this.view})} style=${`animation-delay:${n*25}ms`} @click=${()=>this.go(r.id)}>
        <b>${r.name}</b><span>${r.sub}</span><div class="ill">${r.ill}</div></button>`)}</div>`}renderFront(){const e=this.home.weather?this.entities[this.home.weather]:void 0,t=e?.attributes.temperature,a=this.warnings[0],i=this.home.rooms.flatMap(d=>d.devices.filter(g=>!g.hidden)),o=i.find(d=>G(d.id)==="climate"),s=i.find(d=>G(d.id)==="lock"),r=o?this.entities[o.id]:void 0,n=s?this.entities[s.id]:void 0,u=[...this.home.scenes,...this.home.scripts].filter(d=>this.entities[d]).slice(0,6),h=this.now.toLocaleDateString(re(),{weekday:"long",day:"numeric",month:"long"});return c`<div class="lhome">
      <div class="hh">
        <b>${this.now.toLocaleTimeString(re(),{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${h}${e?` · ${t!=null?`${Math.round(t)}° `:""}${De[e.state]??e.state}`:""}${a?c` · <em>${l("aviso {type}",{type:l(a.awarenessTypeName).toLowerCase()})}</em>`:m}</span>
      </div>
      <div class="tile trooms"><b>${l("Divisões")}</b>${this.renderRoomRows(!1)}</div>
      ${o&&r?c`<div class="tile">
            <b>${o.name}</b><span>${r.state==="off"?l("desligado"):l("agora {t}°",{t:le(r.attributes.current_temperature??0)})}</span>
            <div class="tt">${r.state==="off"?"Off":`${le(r.attributes.temperature??0)}°`}</div>
            <div class="pmh">
              <button aria-label=${l("Baixar")} ?disabled=${r.state==="off"} @click=${()=>this.stepTemp(o.id,-1)}>${wt(M.minus)}</button>
              <button aria-label=${l("Subir")} ?disabled=${r.state==="off"} @click=${()=>this.stepTemp(o.id,1)}>${wt(M.plus)}</button>
              <button aria-label=${l("Mais")} @click=${()=>this.sheet=o.id}>…</button>
            </div>
          </div>`:c`<div class="tile"><b>${l("Clima")}</b><span>${ge(this.home,this.entities).temp??"—"}</span></div>`}
      ${s&&n?c`<button class="tile" @click=${()=>n.state==="locked"?this.sheet=s.id:this.call("lock","lock",s.id)}>
            <b>${s.name}</b><span>${n.state==="locked"?l("trancada · toque para mais"):l("destrancada")}</span>
            <div class=${H({tt:!0,small:!0,alert:n.state!=="locked"})}>${n.state==="locked"?l("Trancada"):l("Toca para trancar")}</div>
          </button>`:c`<div class="tile"><b>${l("Segurança")}</b><span>${ge(this.home,this.entities).alertText}</span></div>`}
      <div class="tile wide"><b>${l("Cenas")}</b>
        <div class="chh">${u.map(d=>c`<button class=${H({on:this.flash===d})}
          @click=${()=>this.tap({key:d,kind:"scene",size:"s",name:"",entity:d})}>${this.entities[d].attributes.friendly_name??d}</button>`)}</div>
      </div>
    </div>`}renderRoomRows(e){const t=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden));return c`${e?c`<div class="rtop"><b>${l("Divisões")}</b><span>${ie(ge(this.home,this.entities).lightsOn,"{n} luz acesa","{n} luzes acesas")}</span></div>`:m}
      <div class=${H({rows:!0,full:e})}>${t.map(a=>{const i=me(a),o=`bar-${a.id}`,s=this.drag?.key===o?this.drag.value:kt(i,this.entities),r=n=>{const u=n.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(n.clientX-u.left)/u.width*100)))};return c`<div class="rr">
          <button class="rname" @click=${()=>this.go(a.id)}>${a.name}${e?c`<small>${je(i.length,i.filter(n=>this.entities[n]?.state==="on").length,a.devices.length)}</small>`:m}</button>
          ${i.length?c`<div class="bar" role="slider" aria-label=${l("Luzes de {room}",{room:a.name})} aria-valuenow=${s} aria-valuemin="0" aria-valuemax="100"
                @pointerdown=${n=>{n.currentTarget.setPointerCapture(n.pointerId),this.drag={key:o,value:r(n)}}}
                @pointermove=${n=>{this.drag?.key===o&&n.buttons&&(this.drag={key:o,value:r(n)})}}
                @pointerup=${n=>{const u=r(n);this.call("light",u?"turn_on":"turn_off",i,u?{brightness_pct:u}:{}),this.drag={key:o,value:u},window.setTimeout(()=>{this.drag?.key===o&&(this.drag=null)},1500)}}><i style=${`width:${s}%`}></i></div>
              <span class="lv">${s?`${s}%`:"off"}</span>`:c`<span class="none">${ie(a.devices.length,"{n} dispositivo","{n} dispositivos")}</span><span></span>`}
        </div>`})}</div>`}};Vt.styles=[Be,_e`
    .vd.lente {
      --card: #fff;
      --rim: 0 calc(var(--u) * 0.2) calc(var(--u) * 0.6) rgba(20, 24, 33, 0.06);
      --muted: #6a7383;
      --name: #141821;
      --acc: #2a5bd7;
      --warm: #ffb02e;
      --well: #eef0f4;
      --line: rgba(20, 24, 33, 0.1);
      --sheet: #fff;
      --on-card: #fff6e3;
      --on-hero: #8a5a12;
      --fg: #141821;
      background: #e6e9ee;
      color: #141821;
    }
    .lente .main {
      top: calc(var(--u) * 6.4);
      left: calc(var(--u) * 2);
      right: calc(var(--u) * 2);
    }
    .zin {
      animation: zin 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes zin {
      from {
        transform: scale(0.94);
        opacity: 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .zin,
      .mini {
        animation: none !important;
      }
    }
    .crumb {
      position: absolute;
      z-index: 3;
      left: calc(var(--u) * 2);
      top: calc(var(--u) * 2.2);
      font-size: calc(var(--u) * 1.3);
      color: #6a7383;
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 0.5);
    }
    .crumb button {
      color: #6a7383;
    }
    .crumb b {
      color: #141821;
      font-weight: 600;
    }
    .tools {
      position: absolute;
      z-index: 4;
      right: calc(var(--u) * 1.6);
      top: calc(var(--u) * 1.4);
      display: flex;
      gap: calc(var(--u) * 0.6);
    }
    .lensbtn {
      display: flex;
      align-items: center;
      gap: calc(var(--u) * 0.6);
      padding: calc(var(--u) * 0.6) calc(var(--u) * 1.2) calc(var(--u) * 0.6) calc(var(--u) * 0.7);
      border-radius: 99px;
      background: #fff;
      box-shadow: 0 calc(var(--u) * 0.3) calc(var(--u) * 1) rgba(20, 24, 33, 0.12);
      font-weight: 600;
      font-size: calc(var(--u) * 1.2);
    }
    .lensbtn i {
      width: calc(var(--u) * 2.6);
      height: calc(var(--u) * 2.6);
      border-radius: 50%;
      background: #2a5bd7;
      color: #fff;
      display: grid;
      place-items: center;
      font-size: calc(var(--u) * 1.4);
    }
    .lensbtn.round {
      padding: calc(var(--u) * 0.6);
      font-size: calc(var(--u) * 1.8);
    }
    .pinch {
      position: absolute;
      left: 50%;
      bottom: calc(var(--u) * 0.8);
      transform: translateX(-50%);
      font-size: calc(var(--u) * 1.05);
      color: #6a7383;
      white-space: nowrap;
      pointer-events: none;
    }
    /* overview */
    .ovh {
      position: absolute;
      left: calc(var(--u) * 2);
      top: calc(var(--u) * 2.2);
      font-size: calc(var(--u) * 1.3);
      color: #6a7383;
    }
    .ov {
      position: absolute;
      left: calc(var(--u) * 2);
      right: calc(var(--u) * 2);
      top: calc(var(--u) * 6);
      bottom: calc(var(--u) * 2);
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-auto-rows: minmax(calc(var(--u) * 15), 1fr);
      gap: calc(var(--u) * 1.6);
      overflow-y: auto;
    }
    .mini {
      border-radius: calc(var(--u) * 2);
      background: #fff;
      box-shadow: 0 calc(var(--u) * 0.4) calc(var(--u) * 1.6) rgba(20, 24, 33, 0.1);
      padding: calc(var(--u) * 1.6);
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 0.5);
      text-align: left;
      animation: zout 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
    }
    @keyframes zout {
      from {
        transform: scale(1.15);
        opacity: 0;
      }
    }
    .mini:active {
      transform: scale(0.97);
    }
    .mini.cur {
      outline: calc(var(--u) * 0.3) solid #2a5bd7;
    }
    .mini b {
      font-size: calc(var(--u) * 1.8);
      font-weight: 600;
    }
    .mini span {
      font-size: calc(var(--u) * 1.2);
      color: #6a7383;
    }
    .ill {
      margin-top: auto;
      display: flex;
      gap: calc(var(--u) * 0.4);
      align-items: flex-end;
      height: calc(var(--u) * 5);
    }
    .ill i {
      flex: 1;
      border-radius: calc(var(--u) * 0.6);
      background: #eceef2;
    }
    .ill i.on {
      background: #ffd27a;
    }
    /* Casa */
    .lhome {
      display: grid;
      grid-template-columns: 1.2fr 1fr 1fr;
      grid-auto-rows: auto;
      gap: calc(var(--u) * 1.2);
      align-content: start;
    }
    .hh {
      grid-column: 1 / -1;
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: calc(var(--u) * 2);
    }
    .hh b {
      font-weight: 300;
      font-size: calc(var(--u) * 6);
      letter-spacing: -0.05em;
      line-height: 0.9;
      font-variant-numeric: tabular-nums;
    }
    .hh span {
      font-size: calc(var(--u) * 1.4);
      color: #6a7383;
      margin-bottom: calc(var(--u) * 0.6);
    }
    .hh span::first-letter {
      text-transform: uppercase;
    }
    .hh em {
      font-style: normal;
      color: #c2410c;
    }
    .tile {
      border-radius: calc(var(--u) * 1.8);
      background: #fff;
      box-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 0.6) rgba(20, 24, 33, 0.06);
      padding: calc(var(--u) * 1.4);
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 0.6);
      min-width: 0;
      min-height: calc(var(--u) * 16);
      text-align: left;
    }
    .tile > b {
      font-size: calc(var(--u) * 1.6);
      font-weight: 600;
    }
    .tile > span {
      font-size: calc(var(--u) * 1.15);
      color: #6a7383;
    }
    .trooms {
      grid-row: span 2;
    }
    .tile.wide {
      grid-column: 2 / 4;
    }
    .tt {
      font-weight: 300;
      font-size: calc(var(--u) * 5);
      letter-spacing: -0.05em;
      line-height: 1;
      margin-top: auto;
    }
    .tt.small {
      font-size: calc(var(--u) * 2.8);
      color: #1f7a4d;
    }
    .tt.small.alert {
      color: #c2410c;
    }
    .pmh {
      display: flex;
      gap: calc(var(--u) * 0.6);
    }
    .pmh button {
      flex: 1;
      height: calc(var(--u) * 3.6);
      border-radius: 99px;
      background: #eef0f4;
      display: grid;
      place-items: center;
      font-size: calc(var(--u) * 2);
    }
    .pmh button:disabled {
      opacity: 0.4;
    }
    .chh {
      display: flex;
      gap: calc(var(--u) * 0.5);
      flex-wrap: wrap;
    }
    .chh button {
      padding: calc(var(--u) * 0.55) calc(var(--u) * 1.1);
      border-radius: 99px;
      background: #eef0f4;
      font-size: calc(var(--u) * 1.15);
      font-weight: 600;
    }
    .chh button.on {
      background: #2a5bd7;
      color: #fff;
    }
    .rows {
      display: flex;
      flex-direction: column;
      gap: calc(var(--u) * 0.4);
    }
    .rr {
      display: grid;
      grid-template-columns: minmax(calc(var(--u) * 9), 0.9fr) 2fr calc(var(--u) * 5);
      align-items: center;
      gap: calc(var(--u) * 1);
      padding: calc(var(--u) * 0.6) 0;
    }
    .rows.full .rr {
      background: #fff;
      border-radius: calc(var(--u) * 1.6);
      padding: calc(var(--u) * 1.2) calc(var(--u) * 1.4);
      box-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 0.6) rgba(20, 24, 33, 0.06);
    }
    .rname {
      text-align: left;
      font-size: calc(var(--u) * 1.4);
      font-weight: 600;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .rname small {
      font-weight: 400;
      font-size: calc(var(--u) * 1.05);
      color: #6a7383;
    }
    .rows.full .rname {
      font-size: calc(var(--u) * 1.9);
    }
    .bar {
      height: calc(var(--u) * 2.6);
      border-radius: 99px;
      background: #eceef2;
      position: relative;
      overflow: hidden;
      touch-action: none;
      cursor: ew-resize;
    }
    .bar i {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background: linear-gradient(90deg, #ffd27a, #ffb02e);
      border-radius: 99px;
    }
    .lv {
      font-family: ui-monospace, "SF Mono", Menlo, monospace;
      font-size: calc(var(--u) * 1.1);
      text-align: right;
    }
    .none {
      font-size: calc(var(--u) * 1.05);
      color: #6a7383;
    }
    /* the usual widgets: white cards, blue accent */
    .lente .seg {
      background: #eef0f4;
    }
    .lente .seg button.on,
    .lente .cats button.on,
    .lente .pill.pri,
    .lente .ctl button.pri {
      background: #2a5bd7;
      color: #fff;
      box-shadow: none;
    }
    .lente .ctl button {
      background: #eef0f4;
      box-shadow: none;
    }
    .lente .rtop .back,
    .lente .pill {
      box-shadow: 0 calc(var(--u) * 0.2) calc(var(--u) * 0.6) rgba(20, 24, 33, 0.08);
    }
    .lente .w .fill {
      background: rgba(255, 176, 46, 0.14);
      border-right: 2px solid rgba(255, 176, 46, 0.6);
    }
    .lente .bigsl {
      background: #eef0f4;
      box-shadow: none;
    }
    .lente .scrim {
      background: rgba(20, 24, 33, 0.3);
    }
    .lente .tchips button.on {
      color: #fff;
    }
    @container (max-width: 760px) {
      .lhome {
        grid-template-columns: 1fr 1fr;
      }
      .trooms,
      .tile.wide {
        grid-column: 1 / -1;
        grid-row: auto;
      }
      .ov {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `];Ui([Y()],Vt.prototype,"overview",2);Vt=Ui([Me("pine3-lente")],Vt);const Gi={vidro:"pine3-vidro",bento:"pine3-bento",moldura:"pine3-moldura",editorial:"pine3-editorial",instrumento:"pine3-instrumento",orbita:"pine3-orbita",carteira:"pine3-carteira",lente:"pine3-lente"},Xa=e=>ko(Gi[e]??"pine3-vidro"),Vn=Object.values(Gi).join(", "),Ft={vidro:"linear-gradient(180deg,#262b31,#0f1113)",bento:"linear-gradient(135deg,#ffd166 0 33%,#efe9df 33% 66%,#ff7a50 66%)",moldura:"linear-gradient(180deg,#f2b27a,#7c5a8c 60%,#1a1f30)",editorial:"repeating-linear-gradient(180deg,#f1ece3 0 22%,#14110d 22% 24%)",instrumento:"radial-gradient(circle at 60% 50%,#ff6a1a 0 12%,#3a3a38 13%)",orbita:"radial-gradient(circle,#3a3f5a 0 30%,#20232f 31%)",carteira:"linear-gradient(180deg,#e9e4da,#cfc6b6)",lente:"linear-gradient(135deg,#e6e9ee,#c9ced6)"},Zt=$e({vidro:"Vidro",bento:"Bento",moldura:"Moldura",editorial:"Editorial",instrumento:"Instrumento",orbita:"Órbita",carteira:"Carteira",lente:"Lente"}),dn=["vidro","bento","moldura","editorial","instrumento","orbita","carteira","lente"];$e({left:"À esquerda",bottom:"Em baixo"});const un=$e({grafite:"Grafite (escuro)",claro:"Claro",auto:"Automático (pôr do sol)"}),Ka={AVR:"Aveiro",BJA:"Beja",BRG:"Braga",BGC:"Bragança",CBO:"Castelo Branco",CBR:"Coimbra",EVR:"Évora",FAR:"Faro",GDA:"Guarda",LRA:"Leiria",LSB:"Lisboa",PTG:"Portalegre",PTO:"Porto",STM:"Santarém",STB:"Setúbal",VCT:"Viana do Castelo",VRL:"Vila Real",VIS:"Viseu",MCN:"Madeira · Costa Norte",MCS:"Madeira · Costa Sul",MRM:"Madeira · Regiões Montanhosas",MPS:"Porto Santo",AOR:"Açores · Grupo Oriental",ACE:"Açores · Grupo Central",AOC:"Açores · Grupo Ocidental"},hn=[[0,"Nunca"],[1,"1 minuto"],[2,"2 minutos"],[5,"5 minutos"],[10,"10 minutos"],[30,"30 minutos"]],pn=$e({auto:"Automático (dia 50%, noite 12%)",low:"Sempre baixo (12%)",off:"Não mexer"});var mn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,de=(e,t,a,i)=>{for(var o=i>1?void 0:i?fn(t,a):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(i?r(t,a,o):r(o))||o);return i&&o&&mn(t,a,o),o};const Ut=qe([{id:"aparencia",name:"Aparência",icon:Jo},{id:"divisoes",name:"Divisões",icon:bs},{id:"planta",name:"Planta",icon:mi},{id:"entidades",name:"Entidades",icon:Fo},{id:"ambiente",name:"Face ambiente",icon:ws},{id:"casa",name:"Casa",icon:fi},{id:"ecras",name:"Ecrãs e painéis",icon:fs},{id:"sistema",name:"Sistema",icon:ui}]),gn=["vidro","bento","moldura","editorial","instrumento","orbita","carteira","lente"],vn=$e({bento:"pílulas no topo",orbita:"uma roda que abre do botão em baixo",carteira:"separadores à direita, como cartões numa carteira",lente:"afastar para ver todas as vistas (botão ou pinça) e tocar numa para aproximar",moldura:"deslizar, com pontos no canto",editorial:"índice em palavras",instrumento:"banco de teclas"}),zt=1334,ta=800,ze=e=>W`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`;let se=class extends Ye{constructor(){super(...arguments),this.entities={},this.dashboards=[],this.dashboardId="",this.version="",this.start="aparencia",this.code="",this.section="aparencia",this.screens=[],this.pending=[],this.screenName="",this.message=null,this.scale=.4,this.pvView="home",this.original={},this.query="",this.pinSet=null,this.newPin="",this.diagnostics=!1,this.iconFor=null}connectedCallback(){super.connectedCallback(),this.section=Ut.some(e=>e.id===this.start)?this.start:"aparencia",this.loadScreens(),this.ws({type:"pine3_home/pin/status"}).then(e=>this.pinSet=e.set).catch(()=>{}),this.timer=window.setInterval(()=>this.loadPending(),4e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.resize?.disconnect(),this.thumbResize?.disconnect()}updated(e){const t=this.renderRoot.querySelector(".pv");t&&!this.resize&&(this.resize=new ResizeObserver(()=>this.scale=t.clientWidth/zt),this.resize.observe(t)),!t&&this.resize&&(this.resize.disconnect(),this.resize=void 0);const a=this.renderRoot.querySelector(".styles"),i=a?.querySelector(".thumb-live");a&&i&&(!this.thumbResize||this.thumbGrid!==a)&&(this.thumbResize?.disconnect(),this.thumbGrid=a,this.thumbResize=new ResizeObserver(()=>a.style.setProperty("--ts",String(i.clientWidth/zt))),this.thumbResize.observe(i)),e.has("start")&&(this.section=Ut.some(o=>o.id===this.start)?this.start:"aparencia")}get dash(){return this.dashboards.find(e=>e.id===this.dashboardId)??this.dashboards[0]}ws(e){return this.conn.sendMessagePromise(e)}async run(e,t){this.message=null;try{await e(),t&&(this.message={ok:!0,text:t})}catch(a){this.message={ok:!1,text:l(a.message??String(a))}}}async loadScreens(){try{this.screens=(await this.ws({type:"pine3_home/screens"})).screens,await this.loadPending()}catch{}}async loadPending(){if(this.section==="ecras")try{this.pending=(await this.ws({type:"pine3_home/screens/pending"})).pending}catch{}}save(e){const t=this.dash;this.original[t.id]||(this.original={...this.original,[t.id]:{...t}});const a={...t,...e};return this.dashboards=this.dashboards.map(i=>i.id===t.id?a:i),this.emit("dashboards",this.dashboards),this.run(async()=>{const i=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:t.id,name:a.name,style:a.style,...e}});this.dashboards=i.dashboards,this.emit("dashboards",i.dashboards)})}emit(e,t){this.dispatchEvent(new CustomEvent(`pine3-${e}`,{detail:t,bubbles:!0,composed:!0}))}close(){this.emit("settings-close",null)}render(){return this.dash?c`<div class="wrap">
      <nav class="side" aria-label=${l("Definições")}>
        <div class="top">
          <button class="x" aria-label=${l("Fechar as definições")} @click=${()=>this.close()}>${ze(ra)}</button>
          <b>${l("Definições")}</b>
        </div>
        ${Ut.map(e=>c`<button class=${H({item:!0,on:e.id===this.section})} @click=${()=>{this.section=e.id,this.message=null,this.loadPending()}}>
          <i>${ze(e.icon)}</i>${e.name}</button>`)}
        ${Object.keys(this.original).length?c`<button class="undo" @click=${()=>this.undo()}>${l("Desfazer alterações")}</button>`:m}
        <button class="done" @click=${()=>this.close()}>${l("Concluído")}</button>
      </nav>
      <main class="content">
        ${this.message?c`<p class=${H({msg:!0,bad:!this.message.ok})} role="status">${this.message.text}</p>`:m}
        ${this.section==="aparencia"?this.renderAppearance():m}
        ${this.section==="divisoes"?this.renderRooms():m}
        ${this.section==="planta"?this.renderPlan():m}
        ${this.section==="entidades"?this.renderEntities():m}
        ${this.section==="ambiente"?this.renderAmbient():m}
        ${this.section==="casa"?this.renderHouse():m}
        ${this.section==="ecras"?this.renderScreens():m}
        ${this.section==="sistema"?this.renderSystem():m}
      </main>
    </div>`:m}dashPicker(){return this.dashboards.length<2?m:c`<div class="dpick">
      <span>${l("A editar o painel")}</span>
      ${this.dashboards.map(e=>c`<button class=${H({chip:!0,on:e.id===this.dash.id})} @click=${()=>this.emit("dashboard-select",e.id)}>${e.name}</button>`)}
    </div>`}renderAppearance(){const e=this.dash,t=Xa(e.style),a=e.style==="vidro";return c`<section class="card">
        <h2>${l("Aparência")}</h2>
        <p class="muted">${l("O estilo, o tema e a navegação do painel")} <b>${e.name}</b>. ${l("Vês o resultado já aqui; fica guardado no Home Assistant para todos os ecrãs que mostram este painel.")}</p>
        ${this.dashPicker()}
        <div class="pv" style=${`height:${Math.round(ta*this.scale)}px`} aria-label=${l("Pré-visualização")}>
          <div class="pvin" style=${`transform:scale(${this.scale})`}>
            ${Sa`<${t} .home=${this.home} .entities=${this.entities} .dashboard=${e} .conn=${this.conn} .startView=${this.pvView}></${t}>`}
          </div>
        </div>
        <div class="pvviews" aria-label=${l("Vista na pré-visualização")}>
          ${this.previewViews().map(([i,o])=>c`<button class=${H({chip:!0,on:i===this.pvView})} @click=${()=>this.pvView=i}>${o}</button>`)}
        </div>
      </section>
      <section class="card">
        <h3>${l("Estilo")}</h3>
        <div class="styles">${gn.map(i=>{const o=dn.includes(i);return c`<button class=${H({sty:!0,on:i===e.style})} ?disabled=${!o} aria-pressed=${i===e.style}
            @click=${()=>this.save({style:i})}>
            ${o?this.thumb(i):c`<i style=${`background:${Ft[i]}`}></i>`}
            <span>${Zt[i]}${o?"":c`<small>${l("em breve")}</small>`}</span></button>`})}</div>
      </section>
      <section class="card">
        <h3>${l("Tema")}</h3>
        <p class="muted">${l(a?"Claro, escuro, ou escuro ao pôr do sol.":"Só no Vidro: os outros estilos têm a sua própria paleta.")}</p>
        <div class="seg">${Object.entries(un).map(([i,o])=>c`<button class=${H({on:i===e.theme})} ?disabled=${!a} @click=${()=>this.save({theme:i})}>${o}</button>`)}</div>
      </section>
      <section class="card">
        <h3>${l("Navegação")}</h3>
        <p class="muted">${a?l("A dock do Vidro, à esquerda ou em baixo."):l("Este estilo navega com {nav}.",{nav:vn[e.style]??l("a sua própria navegação")})}</p>
        <div class="seg">${[["left",l("Dock à esquerda")],["bottom",l("Dock em baixo")]].map(([i,o])=>c`<button class=${H({on:i===e.dock})} ?disabled=${!a} @click=${()=>this.save({dock:i})}>${o}</button>`)}</div>
      </section>
      <section class="card">
        <h3>${l("Editar a grelha nos ecrãs")}</h3>
        <div class="row">
          <span>${l("Os tablets que mostram este painel podem mudar a ordem, o tamanho e os cartões de cada vista (o lápis).")}</span>
          <button class="sw" role="switch" aria-checked=${e.screen_edit!==!1} aria-label=${l("Editar a grelha nos ecrãs")}
            @click=${()=>this.save({screen_edit:e.screen_edit===!1})}></button>
        </div>
      </section>`}renderPlan(){const e=ji(),t={auto:l("Automático"),full:l("3D completo"),lite:l("3D leve"),image:l("Imagem"),plan:l("Planta 2D")};return c`<section class="card">
        <pine3-house mode="plan" canEdit .home=${this.home} .entities=${this.entities} .conn=${this.conn}
          .save=${a=>void this.saveHouse(a)}></pine3-house>
      </section>
      <section class="card">
        <h3>${l("A Casa 3D neste ecrã")}</h3>
        <p class="muted">${l("Fica guardado só neste aparelho. Num tablet modesto, a imagem e a planta 2D são as mais leves.")}</p>
        <div class="seg">${Object.keys(t).map(a=>c`<button class=${H({on:a===e})}
          @click=${()=>{Mr(a),this.requestUpdate()}}>${a==="auto"?`${t.auto} (${t[qi()]})`:t[a]}</button>`)}</div>
      </section>`}renderAmbient(){const e=this.dash;return c`<section class="card">
        <h2>${l("Face ambiente")}</h2>
        <p class="muted">${l("Um relógio calmo com o tempo e a casa numa linha, depois de alguns minutos sem tocar no ecrã. O primeiro toque só acorda.")}</p>
        ${this.dashPicker()}
        <h3>${l("Aparece depois de")}</h3>
        <div class="seg">${hn.map(([t,a])=>c`<button class=${H({on:t===(e.ambient_after??2)})} @click=${()=>this.save({ambient_after:t})}>${l(a)}</button>`)}</div>
      </section>
      <section class="card">
        <h3>${l("Brilho na face ambiente")}</h3>
        <p class="muted">${l("Só nos tablets com a app Pine3 Wallpanel. Fora da face ambiente, o brilho é o do sistema.")}</p>
        <div class="seg">${Object.entries(pn).map(([t,a])=>c`<button class=${H({on:t===(e.ambient_brightness??"auto")})} @click=${()=>this.save({ambient_brightness:t})}>${a}</button>`)}</div>
      </section>`}renderHouse(){const e=this.home.settings?.ipma_area??"",t=this.hs.language??"auto",a=i=>{qs(i,this.home.language),this.saveHouse({language:i})};return c`<section class="card">
      <h2>${l("Casa")}</h2>
      <p class="muted">${l("O que é da casa e vale para todos os painéis.")}</p>
      <h3>${zi()==="pt"?"Idioma · Language":"Language · Idioma"}</h3>
      <p class="muted">${l("Dos painéis, dos ecrãs e destas definições. Automático segue o idioma do Home Assistant.")}</p>
      <div class="seg">${[["auto",l("Automático")],["pt","Português"],["en","English"]].map(([i,o])=>c`<button class=${H({on:i===t})} @click=${()=>a(i)}>${o}</button>`)}</div>
      <h3>${l("Avisos do IPMA")}</h3>
      <p class="muted">${l("Os avisos da tua área aparecem no cartão do tempo, na face ambiente e no topo de cada estilo.")}</p>
      <select class="sel" aria-label=${l("Área dos avisos do IPMA")} @change=${i=>{const o=i.target.value;this.run(()=>this.ws({type:"pine3_home/home/settings",ipma_area:o||null}),o?l("Avisos do IPMA: {area}.",{area:Ka[o]}):l("Avisos do IPMA desligados."))}}>
        <option value="" ?selected=${!e}>${l("Sem avisos")}</option>
        ${Object.entries(Ka).map(([i,o])=>c`<option value=${i} ?selected=${i===e}>${o}</option>`)}
      </select>
    </section>`}renderScreens(){const e=`${location.origin}/pine3/ecra`;return c`<section class="card">
        <h2>${l("Emparelhar um ecrã")}</h2>
        <p class="muted">${l("No tablet, abre")} <b>${e}</b>. ${l("Aparece um código de 6 algarismos: escreve-o aqui, ou lê o QR com o telemóvel.")}</p>
        <div class="pair">
          <input class="code" inputmode="numeric" maxlength="6" placeholder="000000" aria-label=${l("Código do ecrã")} .value=${this.code}
            @input=${t=>this.code=t.target.value.replace(/\D/g,"").slice(0,6)} />
          <input class="txt" maxlength="40" placeholder=${l("Nome, p.ex. Cozinha")} aria-label=${l("Nome do ecrã")} .value=${this.screenName}
            @input=${t=>this.screenName=t.target.value} />
          <button class="pri" ?disabled=${this.code.length!==6} @click=${()=>this.approve()}>${l("Emparelhar com {name}",{name:this.dash.name})}</button>
        </div>
        ${this.pending.length?c`<p class="muted">${l("À espera:")} ${this.pending.map(t=>c`<button class="chip" @click=${()=>this.code=t.code}>${t.code}</button>`)}</p>`:m}
      </section>
      <section class="card">
        <h3>${l("Ecrãs")}</h3>
        ${this.screens.length?c`<div class="list">${this.screens.map(t=>c`<div class="row">
              <i class="thumb" style=${`background:${Ft[this.dashboards.find(a=>a.id===t.dashboard)?.style??"vidro"]}`}></i>
              <span class="grow"><input class="txt inline" .value=${t.name} aria-label=${l("Nome do ecrã")} @change=${a=>this.updateScreen(t,{name:a.target.value.trim()||t.name})} />
                <small>${t.active===!1?l("token revogado"):t.last_used?l("visto {when}",{when:new Date(t.last_used).toLocaleString(re())}):l("ainda não ligou")}</small></span>
              <select class="sel" aria-label=${l("Painel de {name}",{name:t.name})} @change=${a=>this.updateScreen(t,{dashboard:a.target.value})}>
                ${this.dashboards.map(a=>c`<option value=${a.id} ?selected=${a.id===t.dashboard}>${a.name} · ${Zt[a.style]}</option>`)}
              </select>
              <button class="danger" @click=${()=>this.removeScreen(t)}>${l("Remover")}</button>
            </div>`)}</div>`:c`<p class="muted">${l("Ainda não há ecrãs emparelhados.")}</p>`}
      </section>
      <section class="card">
        <h3>${l("Painéis")}</h3>
        <p class="muted">${l("Cada painel tem o seu estilo e a sua disposição. Cada ecrã mostra um painel.")}</p>
        <div class="list">${this.dashboards.map(t=>c`<div class="row">
          <i class="thumb" style=${`background:${Ft[t.style]}`}></i>
          <span class="grow"><input class="txt inline" .value=${t.name} aria-label=${l("Nome do painel")} @change=${a=>this.renameDashboard(t,a.target.value.trim())} />
            <small>${Zt[t.style]} · ${ie(this.screens.filter(a=>a.dashboard===t.id).length,"{n} ecrã","{n} ecrãs")}</small></span>
          ${t.id===this.dash.id?c`<span class="badge">${l("a ver")}</span>`:c`<button @click=${()=>this.emit("dashboard-select",t.id)}>${l("Ver e editar")}</button>`}
          ${this.dashboards.length>1?c`<button class="danger" @click=${()=>this.removeDashboard(t)}>${l("Remover")}</button>`:m}
        </div>`)}</div>
        <button class="add" @click=${()=>this.addDashboard()}>${ze(ca)} ${l("Novo painel")}</button>
      </section>`}renderSystem(){const e=Object.keys(this.dash.layouts??{});return c`<section class="card">
      <h2>${l("Sistema")}</h2>
      <div class="row"><span class="grow">${l("Versão")}<small>Pine3 Home ${this.version}</small></span></div>
      <div class="row"><span class="grow">${l("Disposição de {name}",{name:this.dash.name})}<small>${e.length?ie(e.length,"arrumada à mão em {n} vista","arrumada à mão em {n} vistas"):l("automática")}</small></span>
        ${e.length?c`<button @click=${()=>this.resetLayouts()}>${l("Repor a automática")}</button>`:m}</div>
      <div class="row"><span class="grow">${l("Página dos ecrãs de parede")}<small>${location.origin}/pine3/ecra</small></span></div>
    </section>
    <section class="card">
      <h3>${l("PIN das definições nos ecrãs")}</h3>
      <p class="muted">${l("Nos ecrãs de parede, o ⚙ pede este PIN antes de abrir as definições. Depois de o escreverem, ficam com acesso durante 10 minutos. Cinco tentativas erradas seguidas bloqueiam o PIN durante 5 minutos.")}</p>
      <div class="row">
        <span class="grow">${this.pinSet?l("PIN definido"):l("Sem PIN: os ecrãs não abrem as definições")}<small>${this.pinSet?l("Escreve outro para o mudar."):l("De 4 a 8 algarismos.")}</small></span>
        <input class="code" type="password" inputmode="numeric" maxlength="8" placeholder="••••" aria-label=${l("Novo PIN")} .value=${this.newPin}
          @input=${t=>this.newPin=t.target.value.replace(/\D/g,"").slice(0,8)} />
        <button class="pri" ?disabled=${this.newPin.length<4} @click=${()=>this.setPin(this.newPin)}>${this.pinSet?l("Mudar o PIN"):l("Guardar o PIN")}</button>
        ${this.pinSet?c`<button class="danger" @click=${()=>this.setPin(null)}>${l("Remover")}</button>`:m}
      </div>
    </section>`}get hs(){return this.home.settings??{}}saveHouse(e){return this.home={...this.home,settings:{...this.hs,...e}},this.run(()=>this.ws({type:"pine3_home/home/settings",...e}))}renderRooms(){const e=this.home.rooms,t=this.hs.hidden_rooms??[],a=(i,o)=>{const s=i+o;if(s<0||s>=e.length)return;const r=e.map(n=>n.id);[r[i],r[s]]=[r[s],r[i]],this.home={...this.home,rooms:r.map(n=>e.find(u=>u.id===n))},this.saveHouse({room_order:r})};return c`<section class="card">
      <h2>${l("Divisões")}</h2>
      <p class="muted">${l("A ordem, o ícone e as divisões que aparecem. Vale para a dock, a Casa e todos os estilos e painéis. As divisões vêm das áreas do Home Assistant.")}</p>
      <div class="list">${e.map((i,o)=>{const s=!t.includes(i.id);return c`<div class=${H({row:!0,off:!s})}>
          <span class="mv">
            <button class="ib" aria-label=${l("Subir {name}",{name:i.name})} ?disabled=${o===0} @click=${()=>a(o,-1)}>${ze(To)}</button>
            <button class="ib" aria-label=${l("Descer {name}",{name:i.name})} ?disabled=${o===e.length-1} @click=${()=>a(o,1)}>${ze(Po)}</button>
          </span>
          <button class="ricon" aria-label=${l("Ícone de {name}",{name:i.name})} aria-expanded=${this.iconFor===i.id} @click=${()=>this.iconFor=this.iconFor===i.id?null:i.id}>${ze(xt(i.icon))}</button>
          <span class="grow">${i.name}<small>${l("{n} de {total} dispositivos",{n:i.devices.filter(r=>!r.hidden).length,total:i.devices.length})}${i.floor?` · ${i.floor}`:""}</small></span>
          <button class="sw" role="switch" aria-checked=${s} aria-label=${l("Mostrar {name}",{name:i.name})}
            @click=${()=>void this.saveHouse({hidden_rooms:s?[...t,i.id]:t.filter(r=>r!==i.id)})}></button>
          ${this.iconFor===i.id?c`<div class="icons">${_s.map(r=>c`<button class=${H({ib:!0,on:r===i.icon})} aria-label=${r.replace("mdi:","")}
                @click=${()=>{this.iconFor=null,this.saveHouse({room_icons:{...this.hs.room_icons??{},[i.id]:r}})}}>${ze(xt(r))}</button>`)}</div>`:m}
        </div>`})}</div>
    </section>`}visible(e){return e.primary?!(this.hs.hidden??[]).includes(e.id):(this.hs.shown??[]).includes(e.id)}toggleEntity(e){const t=this.hs.hidden??[],a=this.hs.shown??[];return e.primary?this.saveHouse({hidden:t.includes(e.id)?t.filter(i=>i!==e.id):[...t,e.id]}):this.saveHouse({shown:a.includes(e.id)?a.filter(i=>i!==e.id):[...a,e.id]})}renderEntities(){const e=this.query.trim().toLowerCase(),t=i=>(this.diagnostics||!i.category)&&(!e||`${i.name} ${i.id}`.toLowerCase().includes(e)),a=this.home.rooms.map(i=>({r:i,ents:(i.entities??[]).filter(t).sort((o,s)=>Number(s.primary)-Number(o.primary))})).filter(i=>i.ents.length);return c`<section class="card">
        <h2>${l("Entidades")}</h2>
        <p class="muted">${l("O que aparece nos painéis. Cada dispositivo tem um cartão com a sua entidade principal; as secundárias (o consumo de uma tomada, o interruptor de uma TV, um sensor de diagnóstico) podem ter um cartão próprio.")}</p>
        <label class="search">${ze(Xo)}<input type="search" placeholder=${l("Procurar por nome ou entidade")} aria-label=${l("Procurar entidade")}
          .value=${this.query} @input=${i=>this.query=i.target.value} /></label>
        <div class="row"><span>${l("Mostrar entidades de diagnóstico e configuração")}</span>
          <button class="sw" role="switch" aria-checked=${this.diagnostics} aria-label=${l("Mostrar entidades de diagnóstico")} @click=${()=>this.diagnostics=!this.diagnostics}></button></div>
      </section>
      ${a.length?a.map(({r:i,ents:o})=>this.entityRoom(i,o)):c`<section class="card"><p class="muted">Nenhuma entidade com "${this.query}".</p></section>`}`}entityRoom(e,t){const a=(e.entities??[]).filter(o=>this.diagnostics||!o.category),i=a.filter(o=>this.visible(o)).length;return c`<section class="card">
      <h3 class="rh">${ze(xt(e.icon))} ${e.name} <small>${l("{n} de {total} visíveis",{n:i,total:a.length})}</small></h3>
      <div class="list">${t.map(o=>{const s=this.visible(o);return c`<div class=${H({row:!0,off:!s})}>
          <span class="grow">${this.hs.names?.[o.id]??o.name}<small class="mono">${o.id}</small></span>
          ${this.typePicker(e,o)}
          <span class=${H({badge:!0,sec:!o.primary})}>${l(o.primary?"Principal":o.category?"Diagnóstico":"Secundária")}</span>
          <button class="sw" role="switch" aria-checked=${s} aria-label=${l("Mostrar {name}",{name:o.name})} @click=${()=>this.toggleEntity(o)}></button>
        </div>`})}</div>
    </section>`}typePicker(e,t){const a=Pi[t.id.split(".")[0]]??[];if(a.length<2)return m;const i=e.devices.find(r=>r.id===t.id),o=Yt(t.id,this.entities[t.id],{name:i?.name??t.name,model:i?.model,manufacturer:i?.manufacturer}),s=this.hs.types?.[t.id]??o;return c`<select class="sel tsel" aria-label=${l("Tipo de {name}",{name:t.name})} @change=${r=>{const n=r.target.value,u={...this.hs.types??{}};n===o?delete u[t.id]:u[t.id]=n,this.saveHouse({types:u})}}>${a.map(r=>c`<option value=${r} ?selected=${r===s}>${at[r].name}${r===o?` (${l("automático")})`:""}</option>`)}</select>`}previewViews(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden)).map(t=>[t.id,t.name]);return[["home",l("Casa")],...e,["@luzes",l("Luzes")],["@clima",l("Clima")],["@seguranca",l("Segurança")],["@cenas",l("Cenas")]]}thumb(e){const t=Xa(e),a={...this.dash,style:e};return c`<i class="thumb-live"><span class="tin">
      ${Sa`<${t} preview .home=${this.home} .entities=${this.entities} .dashboard=${a} .conn=${this.conn}></${t}>`}
    </span></i>`}undo(){const e=this.original;return this.run(async()=>{let t=this.dashboards;for(const a of Object.values(e))t=(await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:a.id,name:a.name,style:a.style,dock:a.dock,theme:a.theme,screen_edit:a.screen_edit!==!1,...a.ambient_after!=null?{ambient_after:a.ambient_after}:{},...a.ambient_brightness?{ambient_brightness:a.ambient_brightness}:{}}})).dashboards;this.dashboards=t,this.original={},this.emit("dashboards",t)},l("Alterações desfeitas."))}setPin(e){return this.run(async()=>{const t=await this.ws({type:"pine3_home/pin/set",pin:e});this.pinSet=t.set,this.newPin=""},l(e?"PIN guardado.":"PIN removido: os ecrãs deixam de abrir as definições."))}approve(){const e=this.screenName.trim()||l("Ecrã");return this.run(async()=>{await this.ws({type:"pine3_home/screens/approve",code:this.code,name:e,dashboard:this.dash.id}),this.code="",this.screenName="",location.search.includes("code=")&&history.replaceState(null,"",location.pathname),await this.loadScreens()},l("{name} emparelhado. O ecrã liga-se dentro de segundos.",{name:e}))}updateScreen(e,t){return this.run(async()=>{await this.ws({type:"pine3_home/screens/update",screen_id:e.id,...t}),await this.loadScreens()})}removeScreen(e){if(confirm(l("Remover {name}? O ecrã volta a pedir um código.",{name:e.name})))return this.run(async()=>{await this.ws({type:"pine3_home/screens/remove",screen_id:e.id}),await this.loadScreens()},l("{name} removido.",{name:e.name}))}renameDashboard(e,t){if(!(!t||t===e.name))return this.run(async()=>{const a=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:e.id,name:t,style:e.style}});this.dashboards=a.dashboards,this.emit("dashboards",a.dashboards)})}addDashboard(){let e=this.dashboards.length+1;for(;this.dashboards.some(a=>a.id===`painel-${e}`);)e++;const t={id:`painel-${e}`,name:l("Painel {n}",{n:e}),style:"vidro"};return this.run(async()=>{const a=await this.ws({type:"pine3_home/dashboards/save",dashboard:t});this.dashboards=a.dashboards,this.emit("dashboards",a.dashboards),this.emit("dashboard-select",t.id),this.section="aparencia"},l("{name} criado: escolhe o estilo.",{name:t.name}))}removeDashboard(e){if(confirm(l("Remover o painel {name}? Os ecrãs que o mostram passam para o primeiro painel.",{name:e.name})))return this.run(async()=>{const t=await this.ws({type:"pine3_home/dashboards/remove",dashboard_id:e.id});this.dashboards=t.dashboards,this.emit("dashboards",t.dashboards),e.id===this.dash.id&&this.emit("dashboard-select",t.dashboards[0].id),await this.loadScreens()},l("{name} removido.",{name:e.name}))}resetLayouts(){if(confirm(l("Repor a disposição automática de todas as vistas de {name}?",{name:this.dash.name})))return this.run(async()=>{for(const t of Object.keys(this.dash.layouts??{}))await this.ws({type:"pine3_home/dashboards/layout",dashboard_id:this.dash.id,view:t,layout:null});const e=await this.ws({type:"pine3_home/dashboards"});this.dashboards=e.dashboards,this.emit("dashboards",e.dashboards)},l("Disposição reposta."))}};se.styles=_e`
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
      width: ${zt}px;
      height: ${ta}px;
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
      width: ${zt}px;
      height: ${ta}px;
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
  `;de([Q({attribute:!1})],se.prototype,"conn",2);de([Q({attribute:!1})],se.prototype,"home",2);de([Q({attribute:!1})],se.prototype,"entities",2);de([Q({attribute:!1})],se.prototype,"dashboards",2);de([Q()],se.prototype,"dashboardId",2);de([Q()],se.prototype,"version",2);de([Q()],se.prototype,"start",2);de([Q()],se.prototype,"code",2);de([Y()],se.prototype,"section",2);de([Y()],se.prototype,"screens",2);de([Y()],se.prototype,"pending",2);de([Y()],se.prototype,"screenName",2);de([Y()],se.prototype,"message",2);de([Y()],se.prototype,"scale",2);de([Y()],se.prototype,"pvView",2);de([Y()],se.prototype,"original",2);de([Y()],se.prototype,"query",2);de([Y()],se.prototype,"pinSet",2);de([Y()],se.prototype,"newPin",2);de([Y()],se.prototype,"diagnostics",2);de([Y()],se.prototype,"iconFor",2);se=de([Me("pine3-settings")],se);export{m as A,Ie as E,Vn as S,Ye as a,c as b,Xa as c,Me as d,kn as e,Cn as f,Mn as g,An as h,_e as i,_n as j,Hn as k,ha as l,yn as m,Q as n,Ai as o,Ln as p,ua as q,Y as r,qs as s,l as t,Sa as u};
