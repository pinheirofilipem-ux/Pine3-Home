/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=globalThis,St=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pt=Symbol(),Dt=new WeakMap;let pe=class{constructor(t,a,i){if(this._$cssResult$=!0,i!==Pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=a}get styleSheet(){let t=this.o;const a=this.t;if(St&&t===void 0){const i=a!==void 0&&a.length===1;i&&(t=Dt.get(a)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Dt.set(a,t))}return t}toString(){return this.cssText}};const Re=e=>new pe(typeof e=="string"?e:e+"",void 0,Pt),X=(e,...t)=>{const a=e.length===1?e[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1],e[0]);return new pe(a,e,Pt)},Ne=(e,t)=>{if(St)e.adoptedStyleSheets=t.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(const a of t){const i=document.createElement("style"),s=dt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=a.cssText,e.appendChild(i)}},It=St?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let a="";for(const i of t.cssRules)a+=i.cssText;return Re(a)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:De,defineProperty:Ie,getOwnPropertyDescriptor:Be,getOwnPropertyNames:je,getOwnPropertySymbols:Ze,getPrototypeOf:We}=Object,O=globalThis,Bt=O.trustedTypes,Ue=Bt?Bt.emptyScript:"",Fe=O.reactiveElementPolyfillSupport,tt=(e,t)=>e,ut={toAttribute(e,t){switch(t){case Boolean:e=e?Ue:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=e!==null;break;case Number:a=e===null?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch{a=null}}return a}},Et=(e,t)=>!De(e,t),jt={attribute:!0,type:String,converter:ut,reflect:!1,useDefault:!1,hasChanged:Et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),O.litPropertyMetadata??(O.litPropertyMetadata=new WeakMap);let U=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,a=jt){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(t,a),!a.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,a);s!==void 0&&Ie(this.prototype,t,s)}}static getPropertyDescriptor(t,a,i){const{get:s,set:o}=Be(this.prototype,t)??{get(){return this[a]},set(r){this[a]=r}};return{get:s,set(r){const n=s?.call(this);o?.call(this,r),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??jt}static _$Ei(){if(this.hasOwnProperty(tt("elementProperties")))return;const t=We(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tt("properties"))){const a=this.properties,i=[...je(a),...Ze(a)];for(const s of i)this.createProperty(s,a[s])}const t=this[Symbol.metadata];if(t!==null){const a=litPropertyMetadata.get(t);if(a!==void 0)for(const[i,s]of a)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[a,i]of this.elementProperties){const s=this._$Eu(a,i);s!==void 0&&this._$Eh.set(s,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const a=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)a.unshift(It(s))}else t!==void 0&&a.push(It(t));return a}static _$Eu(t,a){const i=a.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,a=this.constructor.elementProperties;for(const i of a.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,a,i){this._$AK(t,i)}_$ET(t,a){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:ut).toAttribute(a,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,a){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ut;this._$Em=s;const n=r.fromAttribute(a,o.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,a,i,s=!1,o){if(t!==void 0){const r=this.constructor;if(s===!1&&(o=this[t]),i??(i=r.getPropertyOptions(t)),!((i.hasChanged??Et)(o,a)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,a,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,a,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,r??a??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(a=void 0),this._$AL.set(t,a)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i){const{wrapped:r}=o,n=this[s];r!==!0||this._$AL.has(s)||n===void 0||this.C(s,void 0,o,n)}}let t=!1;const a=this._$AL;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(a)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(a)}willUpdate(t){}_$AE(t){this._$EO?.forEach(a=>a.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(a=>this._$ET(a,this[a]))),this._$EM()}updated(t){}firstUpdated(t){}};U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[tt("elementProperties")]=new Map,U[tt("finalized")]=new Map,Fe?.({ReactiveElement:U}),(O.reactiveElementVersions??(O.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=globalThis,Zt=e=>e,pt=et.trustedTypes,Wt=pt?pt.createPolicy("lit-html",{createHTML:e=>e}):void 0,me="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,fe="?"+T,qe=`<${fe}>`,j=document,it=()=>j.createComment(""),st=e=>e===null||typeof e!="object"&&typeof e!="function",Tt=Array.isArray,Ge=e=>Tt(e)||typeof e?.[Symbol.iterator]=="function",$t=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ut=/-->/g,Ft=/>/g,N=RegExp(`>|${$t}(?:([^\\s"'>=/]+)(${$t}*=${$t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Gt=/"/g,ge=/^(?:script|style|textarea|title)$/i,be=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),c=be(1),$=be(2),R=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Yt=new WeakMap,B=j.createTreeWalker(j,129);function ve(e,t){if(!Tt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wt!==void 0?Wt.createHTML(t):t}const Ye=(e,t)=>{const a=e.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",r=Q;for(let n=0;n<a;n++){const l=e[n];let u,h,m=-1,g=0;for(;g<l.length&&(r.lastIndex=g,h=r.exec(l),h!==null);)g=r.lastIndex,r===Q?h[1]==="!--"?r=Ut:h[1]!==void 0?r=Ft:h[2]!==void 0?(ge.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=N):h[3]!==void 0&&(r=N):r===N?h[0]===">"?(r=s??Q,m=-1):h[1]===void 0?m=-2:(m=r.lastIndex-h[2].length,u=h[1],r=h[3]===void 0?N:h[3]==='"'?Gt:qt):r===Gt||r===qt?r=N:r===Ut||r===Ft?r=Q:(r=N,s=void 0);const V=r===N&&e[n+1].startsWith("/>")?" ":"";o+=r===Q?l+qe:m>=0?(i.push(u),l.slice(0,m)+me+l.slice(m)+T+V):l+T+(m===-2?n:V)}return[ve(e,o+(e[a]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class rt{constructor({strings:t,_$litType$:a},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,l=this.parts,[u,h]=Ye(t,a);if(this.el=rt.createElement(u,i),B.currentNode=this.el.content,a===2||a===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=B.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const m of s.getAttributeNames())if(m.endsWith(me)){const g=h[r++],V=s.getAttribute(m).split(T),y=/([.?@])?(.*)/.exec(g);l.push({type:1,index:o,name:y[2],strings:V,ctor:y[1]==="."?Ke:y[1]==="?"?Je:y[1]==="@"?Qe:vt}),s.removeAttribute(m)}else m.startsWith(T)&&(l.push({type:6,index:o}),s.removeAttribute(m));if(ge.test(s.tagName)){const m=s.textContent.split(T),g=m.length-1;if(g>0){s.textContent=pt?pt.emptyScript:"";for(let V=0;V<g;V++)s.append(m[V],it()),B.nextNode(),l.push({type:2,index:++o});s.append(m[g],it())}}}else if(s.nodeType===8)if(s.data===fe)l.push({type:2,index:o});else{let m=-1;for(;(m=s.data.indexOf(T,m+1))!==-1;)l.push({type:7,index:o}),m+=T.length-1}o++}}static createElement(t,a){const i=j.createElement("template");return i.innerHTML=t,i}}function G(e,t,a=e,i){if(t===R)return t;let s=i!==void 0?a._$Co?.[i]:a._$Cl;const o=st(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(e),s._$AT(e,a,i)),i!==void 0?(a._$Co??(a._$Co=[]))[i]=s:a._$Cl=s),s!==void 0&&(t=G(e,s._$AS(e,t.values),s,i)),t}class Xe{constructor(t,a){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:a},parts:i}=this._$AD,s=(t?.creationScope??j).importNode(a,!0);B.currentNode=s;let o=B.nextNode(),r=0,n=0,l=i[0];for(;l!==void 0;){if(r===l.index){let u;l.type===2?u=new nt(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new ta(o,this,t)),this._$AV.push(u),l=i[++n]}r!==l?.index&&(o=B.nextNode(),r++)}return B.currentNode=j,s}p(t){let a=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,a),a+=i.strings.length-2):i._$AI(t[a])),a++}}class nt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,a,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=a,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&t?.nodeType===11&&(t=a.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,a=this){t=G(this,t,a),st(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ge(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&st(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:a,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=rt.createElement(ve(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(a);else{const o=new Xe(s,this),r=o.u(this.options);o.p(a),this.T(r),this._$AH=o}}_$AC(t){let a=Yt.get(t.strings);return a===void 0&&Yt.set(t.strings,a=new rt(t)),a}k(t){Tt(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let i,s=0;for(const o of t)s===a.length?a.push(i=new nt(this.O(it()),this.O(it()),this,this.options)):i=a[s],i._$AI(o),s++;s<a.length&&(this._$AR(i&&i._$AB.nextSibling,s),a.length=s)}_$AR(t=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);t!==this._$AB;){const i=Zt(t).nextSibling;Zt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class vt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,a,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=a,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,a=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=G(this,t,a,0),r=!st(t)||t!==this._$AH&&t!==R,r&&(this._$AH=t);else{const n=t;let l,u;for(t=o[0],l=0;l<o.length-1;l++)u=G(this,n[i+l],a,l),u===R&&(u=this._$AH[l]),r||(r=!st(u)||u!==this._$AH[l]),u===d?t=d:t!==d&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}r&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ke extends vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Je extends vt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Qe extends vt{constructor(t,a,i,s,o){super(t,a,i,s,o),this.type=5}_$AI(t,a=this){if((t=G(this,t,a,0)??d)===R)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ta{constructor(t,a,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=a,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const ea=et.litHtmlPolyfillSupport;ea?.(rt,nt),(et.litHtmlVersions??(et.litHtmlVersions=[])).push("3.3.3");const aa=(e,t,a)=>{const i=a?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const o=a?.renderBefore??null;i._$litPart$=s=new nt(t.insertBefore(it(),o),o,void 0,a??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=globalThis;let q=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var a;const t=super.createRenderRoot();return(a=this.renderOptions).renderBefore??(a.renderBefore=t.firstChild),t}update(t){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=aa(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};q._$litElement$=!0,q.finalized=!0,at.litElementHydrateSupport?.({LitElement:q});const ia=at.litElementPolyfillSupport;ia?.({LitElement:q});(at.litElementVersions??(at.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sa={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:Et},ra=(e=sa,t,a)=>{const{kind:i,metadata:s}=a;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(a.name,e),i==="accessor"){const{name:r}=a;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,l,e,!0,n)},init(n){return n!==void 0&&this.C(r,void 0,e,n),n}}}if(i==="setter"){const{name:r}=a;return function(n){const l=this[r];t.call(this,n),this.requestUpdate(r,l,e,!0,n)}}throw Error("Unsupported decorator location: "+i)};function L(e){return(t,a)=>typeof a=="object"?ra(e,t,a):((i,s,o)=>{const r=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),r?Object.getOwnPropertyDescriptor(s,o):void 0})(e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(e){return L({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=Symbol.for(""),oa=e=>{if(e?.r===$e)return e?._$litStatic$},na=e=>({_$litStatic$:e,r:$e}),Xt=new Map,ca=e=>(t,...a)=>{const i=a.length;let s,o;const r=[],n=[];let l,u=0,h=!1;for(;u<i;){for(l=t[u];u<i&&(o=a[u],(s=oa(o))!==void 0);)l+=s+t[++u],h=!0;u!==i&&n.push(o),r.push(l),u++}if(u===i&&r.push(t[i]),h){const m=r.join("$$lit$$");(t=Xt.get(m))===void 0&&(r.raw=r,Xt.set(m,t=r)),a=n}return e(t,...a)},Kt=ca(c);var la="M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z",da="M11,9A4,4 0 0,1 15,13A4,4 0 0,1 11,17A4,4 0 0,1 7,13A4,4 0 0,1 11,9M11,11A2,2 0 0,0 9,13A2,2 0 0,0 11,15A2,2 0 0,0 13,13A2,2 0 0,0 11,11M7,4H14A4,4 0 0,1 18,8V9H16V8A2,2 0 0,0 14,6H7A2,2 0 0,0 5,8V20H16V18H18V22H3V8A4,4 0 0,1 7,4M16,11C18.5,11 18.5,9 21,9V11C18.5,11 18.5,13 16,13V11M16,15C18.5,15 18.5,13 21,13V15C18.5,15 18.5,17 16,17V15Z",ha="M10 10V12H8V10H10M16 12V10H14V12H16M21 14V22H3V14H4V10C4 5.58 7.58 2 12 2S20 5.58 20 10V14H21M7 16H5V20H7V16M11 16H9V20H11V16M11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08M13 14H18V10C18 7.03 15.84 4.56 13 4.08V14M15 16H13V20H15V16M19 16H17V20H19V16Z",ua="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z",pa="M20 19V3H4V19H2V21H22V19H20M16 9H18V11H16V9M14 11H6V9H14V11M18 7H16V5H18V7M14 5V7H6V5H14M6 19V13H14V14.82C13.55 15.14 13.25 15.66 13.25 16.25C13.25 17.22 14.03 18 15 18S16.75 17.22 16.75 16.25C16.75 15.66 16.45 15.13 16 14.82V13H18V19H6Z",ma="M6.03 12.03L8.03 15.5L5.5 18.68L2 12.62L6.03 12.03M17 18V15.29C17.88 14.9 18.5 14.03 18.5 13C18.5 12.43 18.3 11.9 17.97 11.5L19.94 10.35C20.95 9.76 21.3 8.47 20.71 7.46L19.33 5.06C18.74 4.05 17.45 3.7 16.44 4.28L8.31 9C7.36 9.53 7.03 10.75 7.58 11.71L9.08 14.31C9.63 15.26 10.86 15.59 11.81 15.04L13.69 13.96C13.94 14.55 14.41 15.03 15 15.29V18C15 19.1 15.9 20 17 20H22V18H17Z",fa="M8,9H11V4H13V9H16L20,17H4L8,9M14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18H14Z",ga="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",ba="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",va="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",$a="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",ya="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",ye="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",we="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z",wa="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z",ka="M3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8V19H19V17H15V19H13V8H5V19H3V8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6M16 10.5V11H18V10.5C18 10.22 17.78 10 17.5 10H16.5C16.22 10 16 10.22 16 10.5M16 14.5V15H18V14.5C18 14.22 17.78 14 17.5 14H16.5C16.22 14 16 14.22 16 14.5Z",ke="M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z",xa="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z",Ca="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",_a="M15,2L17,9H7L9,2M11,10H13V20H16V22H8V20H11V10Z",La="M8.66,13.07C6.92,13.07 5.5,11.66 5.5,9.93C5.5,9.22 5.76,8.54 6.19,8C5.77,7.46 5.5,6.78 5.5,6.07C5.5,4.34 6.93,2.93 8.66,2.93L9.09,2.96C9.56,1.81 10.69,1 12,1C13.31,1 14.44,1.81 14.91,2.96L15.34,2.93C17.07,2.93 18.5,4.34 18.5,6.07C18.5,6.78 18.24,7.46 17.81,8C18.23,8.54 18.5,9.22 18.5,9.93C18.5,11.66 17.07,13.07 15.34,13.07L14.91,13.04C14.44,14.19 13.31,15 12,15C10.69,15 9.56,14.19 9.09,13.04L8.66,13.07M12,13C12.62,13 13.12,12.5 13.14,11.9L13.03,10.81C12.71,10.93 12.36,11 12,11C11.64,11 11.3,10.93 11,10.81L10.86,11.9C10.88,12.5 11.38,13 12,13M15.34,11.07C15.97,11.07 16.5,10.56 16.5,9.92C16.5,9.5 16.23,9.08 15.83,8.89L14.95,8.47C14.83,9.21 14.44,9.85 13.89,10.3L14.7,10.87C14.88,11 15.1,11.07 15.34,11.07M14.69,5.13L13.87,5.69C14.43,6.14 14.82,6.78 14.94,7.5L15.82,7.1C16.23,6.9 16.5,6.5 16.5,6.07C16.5,5.44 15.97,4.93 15.34,4.93C15.11,4.93 14.89,5 14.69,5.13M12,3C11.38,3 10.88,3.5 10.86,4.1L11,5.19C11.3,5.07 11.64,5 12,5C12.36,5 12.71,5.07 13.03,5.19L13.14,4.1C13.12,3.5 12.62,3 12,3M8.66,4.93C8.03,4.93 7.5,5.44 7.5,6.07C7.5,6.5 7.77,6.9 8.17,7.1L9.05,7.5C9.17,6.78 9.56,6.14 10.11,5.69L9.3,5.13C9.12,5 8.9,4.93 8.66,4.93M8.17,8.9C7.77,9.1 7.5,9.5 7.5,9.92C7.5,10.55 8.03,11.06 8.66,11.06C8.89,11.06 9.11,11 9.31,10.86L10.12,10.31C9.56,9.86 9.17,9.22 9.05,8.5L8.17,8.9M12,22A9,9 0 0,1 3,13A9,9 0 0,1 12,22A9,9 0 0,1 21,13A9,9 0 0,1 12,22M14.44,19.56C16.34,18.85 17.85,17.34 18.56,15.44C16.66,16.14 15.15,17.66 14.44,19.56M5.44,15.44C6.15,17.34 7.66,18.85 9.56,19.56C8.86,17.66 7.34,16.15 5.44,15.44Z",Aa="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z",Ma="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",Va="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22",Ha="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z",za="M2.95 3L2 6.91L19.34 11.25L20.29 7.34L2.95 3M6.09 6.89L4.16 6.41L4.64 4.46L6.57 4.94L6.09 6.89M9.94 7.86L8 7.38L8.5 5.42L10.42 5.91L9.94 7.86M13.8 8.82L11.87 8.34L12.35 6.39L14.27 6.87L13.8 8.82M17.65 9.79L15.72 9.31L16.2 7.35L18.13 7.84L17.65 9.79M4.66 12.75L3.71 16.66L21.05 21L22 17.1L4.66 12.75M7.8 16.65L5.88 16.16L6.35 14.21L8.28 14.69L7.8 16.65M11.65 17.61L9.73 17.13L10.2 15.18L12.13 15.66L11.65 17.61M15.5 18.58L13.58 18.09L14.06 16.14L16 16.62L15.5 18.58M19.36 19.54L17.43 19.06L17.91 17.11L19.84 17.59L19.36 19.54M6.25 12.11L11 10.2L17.75 11.89L13 13.8L6.25 12.11Z",Sa="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z",Pa="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",xe="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",Ea="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",Ta="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",As="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",Oa="M19,13H5V11H19V13Z",Ra="M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",Na="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z",Da="M14,19H18V5H14M6,19H10V5H6V19Z",Ia="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z",Ba="M8,5.14V19.14L19,12.14L8,5.14Z",Ce="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",ja="M2,15C3.67,14.25 5.33,13.5 7,13.17V5A3,3 0 0,1 10,2C11.31,2 12.42,2.83 12.83,4H10A1,1 0 0,0 9,5V6H14V5A3,3 0 0,1 17,2C18.31,2 19.42,2.83 19.83,4H17A1,1 0 0,0 16,5V14.94C18,14.62 20,13 22,13V15C19.78,15 17.56,17 15.33,17C13.11,17 10.89,15 8.67,15C6.44,15 4.22,16 2,17V15M14,8H9V10H14V8M14,12H9V13C10.67,13.16 12.33,14.31 14,14.79V12M2,19C4.22,18 6.44,17 8.67,17C10.89,17 13.11,19 15.33,19C17.56,19 19.78,17 22,17V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V19Z",Za="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",Wa="M7.5,10.5A1.5,1.5 0 0,1 9,12A1.5,1.5 0 0,1 7.5,13.5C6.66,13.5 6,12.83 6,12A1.5,1.5 0 0,1 7.5,10.5M16.5,10.5A1.5,1.5 0 0,1 18,12A1.5,1.5 0 0,1 16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5M4.22,2H19.78C21,2 22,3 22,4.22V19.78A2.22,2.22 0 0,1 19.78,22H4.22C3,22 2,21 2,19.78V4.22A2.22,2.22 0 0,1 4.22,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",Ua="M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z",Fa="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z",qa="M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6A6,6 0 0,1 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12A6,6 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z",Ga="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14",Ya="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z",Xa="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z",Ka="M16,18H18V6H16M6,18L14.5,12L6,6V18Z",Ja="M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z",Qa="M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z",ti="M20.07,19.07L18.66,17.66C20.11,16.22 21,14.21 21,12C21,9.78 20.11,7.78 18.66,6.34L20.07,4.93C21.88,6.74 23,9.24 23,12C23,14.76 21.88,17.26 20.07,19.07M17.24,16.24L15.83,14.83C16.55,14.11 17,13.11 17,12C17,10.89 16.55,9.89 15.83,9.17L17.24,7.76C18.33,8.85 19,10.35 19,12C19,13.65 18.33,15.15 17.24,16.24M4,3H12A2,2 0 0,1 14,5V19A2,2 0 0,1 12,21H4A2,2 0 0,1 2,19V5A2,2 0 0,1 4,3M8,5A2,2 0 0,0 6,7A2,2 0 0,0 8,9A2,2 0 0,0 10,7A2,2 0 0,0 8,5M8,11A4,4 0 0,0 4,15A4,4 0 0,0 8,19A4,4 0 0,0 12,15A4,4 0 0,0 8,11M8,13A2,2 0 0,1 10,15A2,2 0 0,1 8,17A2,2 0 0,1 6,15A2,2 0 0,1 8,13Z",ei="M9,16.5L9.91,15.59L15.13,20.8L14.21,21.71L9,16.5M15.5,10L16.41,9.09L21.63,14.3L20.71,15.21L15.5,10M6.72,2.72L10.15,6.15L6.15,10.15L2.72,6.72C1.94,5.94 1.94,4.67 2.72,3.89L3.89,2.72C4.67,1.94 5.94,1.94 6.72,2.72M14.57,7.5L15.28,8.21L8.21,15.28L7.5,14.57L6.64,11.07L11.07,6.64L14.57,7.5Z",ai="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z",ii="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z",si="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4M7,8H13V13H7V8M14,8H17V10H14V8M17,11V16H14V11H17M7,14H13V16H7V14Z",ri="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12",oi="M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z",ni="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M16,16L19,8H16.5L15,12.5L13.5,8H5V10H8V16H10V10H11.77L14,16H16Z",ci="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",_e="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",li="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z",di="M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z",hi="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",ui="M21 20V2H3V20H1V23H23V20M19 4V11H13V4M5 4H11V11H5M5 20V13H11V20M13 20V13H19V20Z";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le={ATTRIBUTE:1,CHILD:2},Ae=e=>(...t)=>({_$litDirective$:e,values:t});let Me=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,i){this._$Ct=t,this._$AM=a,this._$Ci=i}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Ae(class extends Me{constructor(e){if(super(e),e.type!==Le.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const a=e.element.classList;for(const i of this.st)i in t||(a.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||this.nt?.has(i)||(s?(a.add(i),this.st.add(i)):(a.remove(i),this.st.delete(i)))}return R}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve="important",pi=" !"+Ve,mi=Ae(class extends Me{constructor(e){if(super(e),e.type!==Le.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const i=e[a];return i==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?a.removeProperty(i):a[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ft.add(i);const o=typeof s=="string"&&s.endsWith(pi);i.includes("-")||o?a.setProperty(i,o?s.slice(0,-11):s,o?Ve:""):a[i]=s}}return R}});function Vs(e){return{type:"auth",access_token:e}}function Hs(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function fi(){return{type:"get_states"}}function gi(e,t,a,i,s){const o={type:"call_service",domain:e,service:t,target:i,return_response:s};return a&&(o.service_data=a),o}function zs(e){const t={type:"subscribe_events"};return e&&(t.event_type=e),t}function Ss(e){return{type:"unsubscribe_events",subscription:e}}function Ps(){return{type:"ping"}}function Es(e,t){return{type:"result",success:!1,error:{code:e,message:t}}}const Ts=e=>e.sendMessagePromise(fi()),bi=(e,t,a,i,s,o)=>e.sendMessagePromise(gi(t,a,i,s,o)),f={home:Ha,therm:_e,bulb:Pa,shield:Ga,spark:wa,play:Ba,pause:Da,next:Ka,minus:Oa,plus:Ce,close:ye,back:va,lock:xe,unlock:Ea,power:Za,room:ci,edit:Ia,resize:Ua,check:ga,restore:Fa,gear:we},Ot={"mdi:shower":Ya,"mdi:silverware-fork-knife":Xa,"mdi:table-chair":ii,"mdi:sofa":Ja,"mdi:bed":ua,"mdi:teddy-bear":ri,"mdi:desk":ka,"mdi:garage":Ma,"mdi:flower":La,"mdi:balcony":ha,"mdi:pool":ja,"mdi:washing-machine":di,"mdi:door":ke,"mdi:dumbbell":xa,"mdi:stairs":ai},vi=Object.keys(Ot),yt=e=>Ot[e]??f.room,mt=e=>e&&Ot[e]||f.room;let $i=0;const J=e=>`${e}${++$i}`,M=e=>$`<svg class="art" viewBox="0 0 60 60" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">${e}</svg>`;function yi(e,t="#ffcf8a"){const a=J("l");return M($`<defs><radialGradient id=${a} cx="36" cy="40" r="28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.85}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="36" cy="40" r="28" fill=${`url(#${a})`}/><line x1="36" y1="0" x2="36" y2="22" stroke="#6b717a" stroke-width=".8"/>
    <path d="M25 34 L47 34 L41.5 21 L30.5 21 Z" fill=${e?"#d9c6a3":"#4a4f57"}/><ellipse cx="36" cy="34.5" rx="11" ry="1.7" fill=${e?"#fff2d6":"#3a3e45"}/>`)}function wi(e){const t=Math.max(0,Math.min(100,100-e)),a=Array.from({length:Math.round(t/11)},(i,s)=>$`<line x1="20" x2="54" y1=${12+s*4.2} y2=${12+s*4.2} stroke="#8796a6" stroke-width=".5"/>`);return M($`<rect x="20" y="10" width="34" height="46" rx="2" fill="#2d4a66" opacity=".6"/><circle cx="44" cy="22" r="5" fill="#ffd27a" opacity=".5"/>
    <rect x="20" y="10" width="34" height=${(46*t/100).toFixed(1)} fill="#a9b6c4"/>${a}<rect x="18" y="8" width="38" height="3" rx="1" fill="#5d646e"/>`)}function ki(e,t="#ff9f43"){const a=e==null?0:Math.max(0,Math.min(1,(e-16)/14));return M($`<circle cx="40" cy="36" r="17" fill="#2a2e34" stroke="#454a52"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${t} stroke-width="2.6" stroke-dasharray=${`${(a*81).toFixed(1)} 82`} transform="rotate(135 40 36)" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${t} stroke-width="7" opacity=".08"/>`)}function xi(e){return M($`<rect x="28" y="12" width="24" height="44" rx="3" fill="#3a3f46"/><rect x="31" y="15" width="18" height="38" rx="2" fill="#2b2f35"/>
    <circle cx="34" cy="34" r="1.6" fill=${e?"#ff8a5c":"#5be3a0"}/><rect x=${e?44:38} y="33.2" width="6" height="1.6" rx=".8" fill="#8a919b"/>`)}function Ci(e){return M($`<ellipse cx="40" cy="50" rx="16" ry="4" fill="#000" opacity=".3"/><ellipse cx="40" cy="44" rx="15" ry="6" fill="#d8dce1"/><rect x="25" y="38" width="30" height="6" fill="#d8dce1"/>
    <ellipse cx="40" cy="38" rx="15" ry="6" fill="#eef0f3"/><circle cx="40" cy="36" r="3.4" fill=${e?"#5be3a0":"#c4c9cf"}/>
    ${e?$`<path d="M10 50 Q20 46 26 48" stroke="#5be3a0" stroke-width=".8" fill="none" stroke-dasharray="1.2 1.2" opacity=".8"/>`:null}`)}function _i(e){if(e)return M($`<image href=${e} x="26" y="14" width="30" height="30" preserveAspectRatio="xMidYMid slice" transform="rotate(6 41 29)"/>`);const t=J("a");return M($`<defs><linearGradient id=${t} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3a35f"/><stop offset=".5" stop-color="#d96d6d"/><stop offset=".75" stop-color="#5c4a8a"/><stop offset="1" stop-color="#2e2a54"/></linearGradient></defs>
    <rect x="26" y="14" width="30" height="30" rx="3" fill=${`url(#${t})`} transform="rotate(6 41 29)"/><circle cx="46" cy="22" r="3" fill="#ffe7b8" opacity=".9" transform="rotate(6 41 29)"/>`)}function Jt(e){const t=!/rain|pour|snow|fog|cloudy$|lightning|night/.test(e)||e==="partlycloudy",a=e!=="sunny"&&e!=="clear-night",i=/rain|pour|lightning/.test(e),s=e==="clear-night";return M($`${t?$`<circle cx="44" cy="20" r="8" fill="#ffd27a" opacity=".85"/>`:null}
    ${s?$`<path d="M46 12a9 9 0 1 0 6 14 7 7 0 1 1-6-14z" fill="#e8e3c8" opacity=".9"/>`:null}
    ${a?$`<path d="M28 36h20a6 6 0 0 0 .6-12 9 9 0 0 0-17 2.5A5 5 0 0 0 28 36z" fill="#cfd6df"/>`:null}
    ${i?$`<path d="M32 40l-2 6M38 40l-2 6M44 40l-2 6" stroke="#6cc8ff" stroke-width="1.4" stroke-linecap="round"/>`:null}`)}function Li(e){return M($`<g transform="translate(40 34)"><g class=${e?"spin":""}>
    ${[0,120,240].map(t=>$`<ellipse cx="0" cy="-8" rx="4" ry="8" fill="#cfd6df" opacity=".85" transform=${`rotate(${t})`}/>`)}
    </g><circle r="2.6" fill="#8a919b"/></g>`)}function Ai(e){return M($`<rect x="28" y="20" width="24" height="24" rx="6" fill="#3a3f46"/><circle cx="36" cy="32" r="1.8" fill="#1b1e22"/><circle cx="44" cy="32" r="1.8" fill="#1b1e22"/>
    <circle cx="48" cy="24" r="1.4" fill=${e?"#5be3a0":"#5d646e"}/>`)}function Mi(e,t){let a="M0 26 L100 26";if(t&&t.length>1){const i=Math.min(...t),o=Math.max(...t)-i||1;a=t.map((n,l)=>[l/(t.length-1)*100,34-(n-i)/o*26]).map(([n,l],u)=>`${u?"L":"M"}${n.toFixed(1)} ${l.toFixed(1)}`).join(" ")}return $`<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d=${`${a} V40 H0Z`} fill=${e} opacity=".12"/><path d=${a} fill="none" stroke=${e} stroke-width="1.4" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity=".85"/></svg>`}function Vi(){return M($`<circle cx="42" cy="34" r="14" fill="#b49cff" opacity=".18"/><path d="M42 22l2.6 7.4L52 32l-7.4 2.6L42 42l-2.6-7.4L32 32l7.4-2.6z" fill="#d9ccff"/><path d="M52 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#ffe2b0"/>`)}function Hi(e,t="#ffcf8a"){const a=J("f");return M($`<defs><radialGradient id=${a} cx="40" cy="22" r="22" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.9}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="40" cy="22" r="22" fill=${`url(#${a})`}/><path d="M33 26 L47 26 L44 14 L36 14Z" fill=${e?"#e6d6b8":"#4a4f57"}/>
    <line x1="40" y1="26" x2="40" y2="56" stroke="#6b717a" stroke-width="1.2"/><ellipse cx="40" cy="57" rx="6" ry="1.2" fill="#555b63"/>`)}function zi(e,t="#ffcf8a"){const a=J("s");return M($`<defs><linearGradient id=${a} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.7}/><stop offset="1" stop-color=${t} stop-opacity="0"/></linearGradient></defs>
    <rect x="12" y="31" width="46" height="25" fill=${`url(#${a})`}/><rect x="12" y="28" width="46" height="3" rx="1.5" fill=${e?t:"#4a4f57"} opacity=${e?.45+e/200:1}/>
    ${[16,23,30,37,44,51].map(i=>$`<circle cx=${i} cy="29.5" r=".8" fill="#fff" opacity=${e?.9:.15}/>`)}`)}function Si(e,t="#ffcf8a"){const a=J("p");return M($`<defs><linearGradient id=${a} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.6}/><stop offset="1" stop-color=${t} stop-opacity="0"/></linearGradient></defs>
    <path d="M34 12 L46 12 L56 58 L24 58Z" fill=${`url(#${a})`}/><rect x="33" y="6" width="14" height="6" rx="2" fill=${e?"#d9c6a3":"#4a4f57"}/>
    <ellipse cx="40" cy="12" rx="6" ry="1.2" fill=${e?"#fff2d6":"#3a3e45"}/>`)}function Pi(e,t="#ffcf8a"){const a=J("b");return M($`<defs><radialGradient id=${a} cx="40" cy="30" r="22" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.8}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="40" cy="30" r="22" fill=${`url(#${a})`}/><line x1="40" y1="0" x2="40" y2="18" stroke="#6b717a" stroke-width=".8"/>
    <rect x="37" y="17" width="6" height="5" rx="1" fill="#8a919b"/><circle cx="40" cy="28" r="7" fill=${e?"#fff2d6":"#4a4f57"}/>`)}function Qt(e,t,a){return e==="lamp"?Hi(t,a):e==="led"?zi(t,a):e==="spot"?Si(t,a):e==="bulb"?Pi(t,a):yi(t,a)}const F={ceiling:{icon:fa,name:"Luz de teto"},lamp:{icon:_a,name:"Candeeiro"},led:{icon:za,name:"Fita LED"},spot:{icon:ei,name:"Spot"},bulb:{icon:Sa,name:"Lâmpada"},tv:{icon:oi,name:"TV"},appletv:{icon:ni,name:"Apple TV"},homepod:{icon:Qa,name:"HomePod"},speaker:{icon:ti,name:"Coluna"},ac:{icon:la,name:"Ar condicionado"},fan:{icon:Ca,name:"Ventoinha"},purifier:{icon:da,name:"Purificador"},blind:{icon:pa,name:"Estore"},door:{icon:ke,name:"Porta"},window:{icon:ui,name:"Janela"},plug:{icon:Wa,name:"Tomada"},sensor:{icon:_e,name:"Sensor"},motion:{icon:Ra,name:"Movimento"},camera:{icon:ma,name:"Câmara"},lock:{icon:xe,name:"Fechadura"},vacuum:{icon:qa,name:"Aspirador"},other:{icon:ya,name:"Outro"}},He={light:["ceiling","lamp","led","spot","bulb"],media_player:["tv","appletv","homepod","speaker"],fan:["fan","purifier"],cover:["blind","door","window"],switch:["plug","tv","fan","other"],input_boolean:["plug","other"],binary_sensor:["door","window","motion","sensor"]},P=(e,...t)=>t.some(a=>e.includes(a));function At(e,t,a={}){const i=e.split(".")[0],s=t?.attributes??{},o=`${a.name??""} ${s.friendly_name??""} ${e}`.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),r=`${a.model??""}`.toLowerCase(),n=`${a.manufacturer??""}`.toLowerCase();return i==="light"?P(o,"fita","led","strip","lightstrip","barra")?"led":P(o,"teto","tecto","ceiling","plafon","lustre","pendente","suspens")?"ceiling":P(o,"spot","foco","embutid")?"spot":P(o,"candeeiro","lamp","abajur","de pe","cabeceira","floor")?"lamp":"ceiling":i==="media_player"?n.includes("apple")&&r.includes("homepod")?"homepod":n.includes("apple")&&r.includes("tv")?"appletv":P(o,"homepod")?"homepod":P(o,"apple tv","appletv")?"appletv":s.device_class==="tv"||P(o,"tv","televis")?"tv":"speaker":i==="climate"?"ac":i==="fan"?P(o,"purif","air clean")||n.includes("philips")&&r.startsWith("ac")?"purifier":"fan":i==="cover"?s.device_class==="door"||s.device_class==="garage"?"door":"blind":i==="lock"?"lock":i==="camera"?"camera":i==="vacuum"?"vacuum":i==="switch"||i==="input_boolean"?P(o,"tv","televis")?"tv":"plug":i==="binary_sensor"?["door","garage_door","opening"].includes(s.device_class)?"door":s.device_class==="window"?"window":["motion","occupancy","presence"].includes(s.device_class)?"motion":"sensor":i==="sensor"?"sensor":"other"}const k=e=>e.split(".")[0],D=e=>!!e&&!["off","unavailable","unknown","closed","locked","idle","standby","docked"].includes(e.state),Ei=e=>!e||e.state==="unavailable";function Y(e){if(!e||e.state!=="on")return 0;const t=e.attributes.brightness;return t==null?100:Math.max(1,Math.round(t/255*100))}function wt(e){const t=e?.attributes.rgb_color,a=e?.attributes.color_mode;if(t&&a&&!["color_temp","brightness","onoff","white"].includes(a))return`rgb(${t.join(",")})`;const i=e?.attributes.color_temp_kelvin;return i?i>=5e3?"#e6f0ff":i>=3800?"#fff1d6":"#ffcf8a":"#ffcf8a"}const S=e=>e.devices.filter(t=>k(t.id)==="light"&&!t.hidden).map(t=>t.id);function Ti(e,t){const a=e.filter(i=>t[i]?.state==="on");return a.length?Math.round(a.reduce((i,s)=>i+Y(t[s]),0)/a.length):0}const te={light:"light",climate:"climate",lock:"lock",cover:"cover",media_player:"media",vacuum:"vacuum",fan:"fan",switch:"switch",input_boolean:"switch",outlet:"outlet",sensor:"sensor",binary_sensor:"binary",camera:"camera"};function ft(e,t){const a=te[e.kind??k(e.id)]??te[k(e.id)];if(!a)return null;const i=a==="climate"?"l":a==="media"||a==="camera"?"m":"s";return{key:e.id,kind:a,size:i,name:e.name,sub:t?.name,entity:e.id,room:t}}function Mt(e,t){const a=e.rooms.filter(r=>!r.hidden),i=a.flatMap(r=>r.devices.filter(n=>!n.hidden).map(n=>({d:n,r}))),s=r=>i.filter(({d:n})=>(n.kind??k(n.id))===r),o=[];return a.forEach((r,n)=>{const l=S(r);l.length&&o.push({key:`room-${r.id}`,kind:"room-lights",size:n===0?"m":"s",name:r.name,entities:l,room:r})}),s("climate").forEach(({d:r,r:n},l)=>o.push({key:r.id,kind:"climate",size:l===0?"l":"m",name:r.name,sub:n.name,entity:r.id,room:n})),e.weather&&t[e.weather]&&o.push({key:e.weather,kind:"weather",size:"l",name:"Tempo",entity:e.weather}),s("lock").forEach(({d:r,r:n})=>o.push({key:r.id,kind:"lock",size:"s",name:r.name,sub:n.name,entity:r.id,room:n})),s("cover").forEach(({d:r,r:n})=>o.push({key:r.id,kind:"cover",size:"s",name:r.name,sub:n.name,entity:r.id,room:n})),s("media_player").sort((r,n)=>+(t[n.d.id]?.state==="playing")-+(t[r.d.id]?.state==="playing")).slice(0,2).forEach(({d:r,r:n})=>o.push({key:r.id,kind:"media",size:"m",name:r.name,sub:n.name,entity:r.id,room:n})),s("vacuum").forEach(({d:r,r:n})=>o.push({key:r.id,kind:"vacuum",size:"s",name:r.name,sub:n.name,entity:r.id,room:n})),e.scenes.length&&o.push({key:"scenes",kind:"scenes",size:"m",name:"Cenas",entities:e.scenes.slice(0,6)}),o}const Oi=[{id:"all",name:"Tudo",kinds:[]},{id:"lights",name:"Luzes",kinds:["light"]},{id:"climate",name:"Clima",kinds:["climate","fan"]},{id:"covers",name:"Estores",kinds:["cover"]},{id:"media",name:"Média",kinds:["media"]},{id:"other",name:"Outros",kinds:["switch","outlet","lock","vacuum","sensor","binary","camera"]}];function Ri(e,t=[]){const a=e.devices.filter(s=>!s.hidden).map(s=>ft(s,e)),i=(e.entities??[]).filter(s=>!s.primary&&t.includes(s.id)).map(s=>ft({id:s.id,name:s.name,kind:k(s.id)},e));return[...a,...i].filter(s=>!!s)}function z(e,t){const a=e.rooms.filter(n=>!n.hidden).flatMap(n=>n.devices),i=a.filter(n=>k(n.id)==="light"&&t[n.id]?.state==="on").length,s=a.filter(n=>k(n.id)==="lock"&&t[n.id]?.state==="unlocked").length,o=a.filter(n=>k(n.id)==="binary_sensor"&&["door","window","garage_door","opening"].includes(t[n.id]?.attributes.device_class)&&t[n.id]?.state==="on").length,r=e.rooms.map(n=>n.temperature?parseFloat(t[n.temperature]?.state??""):NaN).filter(n=>!Number.isNaN(n));return{lightsOn:i,alerts:s+o,alertText:s?`${s} destrancada${s>1?"s":""}`:o?`${o} aberta${o>1?"s":""}`:"tudo fechado",temp:r.length?`${Math.round(Math.min(...r))}–${Math.round(Math.max(...r))}°`:null}}const A=(e,t=1)=>e.toLocaleString("pt-PT",{maximumFractionDigits:t}),Ni=["door","window","garage_door","opening"],ze=e=>e.rooms.filter(t=>!t.hidden).flatMap(t=>t.devices.filter(a=>!a.hidden).map(a=>({d:a,r:t})));function Di(e,t){const a=[],i=ze(e);return i.filter(({d:s})=>k(s.id)==="climate").forEach(({d:s,r:o})=>a.push({key:s.id,kind:"climate",size:"l",name:s.name,sub:o.name,entity:s.id,room:o})),e.weather&&t[e.weather]&&a.push({key:e.weather,kind:"weather",size:"l",name:"Tempo",entity:e.weather}),i.filter(({d:s})=>k(s.id)==="fan").forEach(({d:s,r:o})=>a.push({key:s.id,kind:"fan",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),e.rooms.filter(s=>!s.hidden).forEach(s=>{s.temperature&&t[s.temperature]&&a.push({key:`t-${s.id}`,kind:"sensor",size:"s",name:s.name,sub:"temperatura",entity:s.temperature,room:s}),s.humidity&&t[s.humidity]&&a.push({key:`h-${s.id}`,kind:"sensor",size:"s",name:s.name,sub:"humidade",entity:s.humidity,room:s})}),a}function Ii(e,t){const a=ze(e),i=a.filter(({d:r})=>k(r.id)==="lock"),s=a.filter(({d:r})=>k(r.id)==="binary_sensor"&&[...Ni,"motion","occupancy","presence","moisture","smoke","gas"].includes(t[r.id]?.attributes.device_class));s.sort((r,n)=>+(t[n.d.id]?.state==="on")-+(t[r.d.id]?.state==="on"));const o=a.filter(({d:r})=>k(r.id)==="camera");return[...i.map(({d:r,r:n})=>({key:r.id,kind:"lock",size:"s",name:r.name,sub:n.name,entity:r.id,room:n})),...s.map(({d:r,r:n})=>({key:r.id,kind:"binary",size:"s",name:r.name,sub:n.name,entity:r.id,room:n})),...o.map(({d:r,r:n})=>({key:r.id,kind:"camera",size:"m",name:r.name,sub:n.name,entity:r.id,room:n}))]}function Bi(e,t){return[...e.scenes,...e.scripts].filter(a=>t[a]).map(a=>({key:a,kind:"scene",size:"s",name:t[a].attributes.friendly_name??a,entity:a}))}const ji=["climate","weather","media","scenes","camera","clock"],Se=e=>ji.includes(e)?["m","l","xl"]:["s","m","l"];function Zi(e,t){for(const a of e.rooms){const i=a.devices.find(s=>s.id===t);if(i)return ft(i,a)}return null}function ee(e,t,a){if(!t)return e;const i=new Map(e.map(n=>[n.key,n])),s=new Set(t.hidden),o=[],r=new Set;for(const n of t.items){if(r.has(n.key)||s.has(n.key))continue;const l=i.get(n.key)??Zi(a,n.key);if(!l)continue;r.add(n.key);const u=n.size&&Se(l.kind).includes(n.size)?n.size:l.size;o.push({...l,size:u})}for(const n of e)!r.has(n.key)&&!s.has(n.key)&&o.push(n);return o}function Wi(e,t,a){const i=new Set(t.items.map(r=>r.key)),s=e.filter(r=>t.hidden.includes(r.key)),o=a.rooms.filter(r=>!r.hidden).flatMap(r=>r.devices.filter(n=>!n.hidden).map(n=>ft(n,r))).filter(r=>!!r&&!i.has(r.key)&&!s.some(n=>n.key===r.key)&&!e.some(n=>n.key===r.key&&!t.hidden.includes(n.key)));return[...s,...o]}function Rt(e,t,a){return e?t?t===e?e===1?"luz acesa":`${e} luzes acesas`:`${t} de ${e} luzes acesas`:e===1?"luz apagada":"luzes apagadas":`${a} dispositivo${a===1?"":"s"}`}const ct=X`
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
`;var Ui=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,x=(e,t,a,i)=>{for(var s=i>1?void 0:i?Fi(t,a):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&Ui(t,a,s),s};const qi=550,kt=10,xt={heat:"Calor",cool:"Frio",heat_cool:"Auto",auto:"Auto",dry:"Seco",fan_only:"Ventilar",off:"Off"},ae={heating:"a aquecer",cooling:"a arrefecer",idle:"em pausa",off:"desligado",drying:"a secar",fan:"a ventilar"},ht={"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",hail:"granizo",lightning:"trovoada","lightning-rainy":"trovoada e chuva",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve","snowy-rainy":"chuva e neve",sunny:"sol",windy:"vento","windy-variant":"vento",exceptional:"excecional"},ie={cleaning:"a limpar",docked:"na base",returning:"a voltar à base",paused:"em pausa",idle:"parado",error:"erro"},Gi={open:"aberto",closed:"fechado",opening:"a abrir",closing:"a fechar"},Ct={yellow:"amarelo",orange:"laranja",red:"vermelho"},se={yellow:1,orange:2,red:3},Yi=10*6e4,Xi=10*6e4,re=[{id:"@clima",name:"Clima",icon:f.therm},{id:"@seguranca",name:"Segurança",icon:f.shield},{id:"@cenas",name:"Cenas",icon:f.spark}],Ki=["#ffcf8a","#fff1d6","#ff8a5c","#ff6fae","#b49cff","#6cc8ff","#5be3a0"],v=e=>$`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`;let b=class extends q{constructor(){super(...arguments),this.entities={},this.screenName="",this.canEdit=!1,this.ambient=!1,this.settingsButton=!1,this.cardSettings=!1,this.preview=!1,this.startView="",this.wallpanel=!1,this.editing=null,this.draft=null,this.moving=null,this.saving=!1,this.lastReorder=0,this.view="home",this.category="all",this.sheet=null,this.drag=null,this.now=new Date,this.hourly=[],this.warnings=[],this.history={},this.flash=null,this.historyAt={},this.historyWanted=new Set,this.ipmaAt=0,this.ipmaArea=null,this.forecastAt=0}connectedCallback(){super.connectedCallback(),this.clock=window.setInterval(()=>this.now=new Date,1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clock)}willUpdate(e){if(e.has("startView")&&this.startView&&(this.view=this.startView,this.category="all"),this.preview)return;e.has("home")&&this.view!=="home"&&!this.view.startsWith("@")&&!this.home.rooms.some(a=>a.id===this.view)&&(this.view="home");const t=this.home?.settings?.ipma_area??null;(t!==this.ipmaArea||t&&Date.now()-this.ipmaAt>Xi)&&(this.ipmaArea=t,this.ipmaAt=Date.now(),t&&this.conn?this.loadWarnings(t):this.warnings=[]),this.home?.weather&&Date.now()-this.forecastAt>30*6e4&&this.conn&&(this.forecastAt=Date.now(),this.loadForecast(this.home.weather))}async loadForecast(e){try{const t=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"hourly"},target:{entity_id:e},return_response:!0});this.hourly=(t.response?.[e]?.forecast??[]).slice(1,7).filter((a,i)=>i%2===0)}catch{this.hourly=[]}}updated(){if(this.preview)return;const e=Date.now(),t=[...this.historyWanted].filter(a=>e-(this.historyAt[a]??0)>Yi);this.historyWanted.clear(),t.length&&this.conn&&(t.forEach(a=>this.historyAt[a]=e),this.loadHistory(t))}async loadHistory(e){try{const t=await this.conn.sendMessagePromise({type:"history/history_during_period",start_time:new Date(Date.now()-864e5).toISOString(),entity_ids:e,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),a={...this.history};for(const i of e){const s=(t[i]??[]).map(r=>parseFloat(r.s)).filter(r=>!Number.isNaN(r)),o=Math.max(1,Math.ceil(s.length/48));a[i]=s.filter((r,n)=>n%o===0||n===s.length-1)}this.history=a}catch(t){console.warn("Pine3 Home: history",t)}}async loadWarnings(e){try{const t=await this.conn.sendMessagePromise({type:"pine3_home/ipma_warnings",area:e}),a=Date.now();this.warnings=t.warnings.filter(i=>!i.endTime||new Date(i.endTime).getTime()>a).sort((i,s)=>(se[s.awarenessLevelID]??0)-(se[i.awarenessLevelID]??0))}catch{}}call(e,t,a,i={}){bi(this.conn,e,t,i,{entity_id:a}).catch(s=>console.warn("Pine3 Home:",s))}toggle(e){const t=k(e),a=this.entities[e];if(t==="lock")return this.call("lock",a?.state==="locked"?"unlock":"lock",e);if(t==="cover")return this.call("cover","toggle",e);if(t==="vacuum")return this.call("vacuum",a?.state==="cleaning"?"return_to_base":"start",e);if(t==="media_player")return this.call("media_player","media_play_pause",e);if(t==="scene"||t==="script")return this.call(t,"turn_on",e);this.call(t==="input_boolean"?"input_boolean":"homeassistant","toggle",e)}level(e){if(this.drag?.key===e.key)return this.drag.value;if(e.kind==="room-lights")return Ti(e.entities,this.entities);const t=this.entities[e.entity];return e.kind==="light"?Y(t):e.kind==="cover"?t?.attributes.current_position??(t?.state==="open"?100:0):null}setLevel(e,t){if(t=Math.round(t),e.kind==="room-lights"||e.kind==="light"){const a=e.kind==="light"?e.entity:e.entities;t<=0?this.call("light","turn_off",a):this.call("light","turn_on",a,{brightness_pct:t})}else e.kind==="cover"&&this.call("cover","set_cover_position",e.entity,{position:t})}slidable(e){if(e.kind==="room-lights")return!0;const t=this.entities[e.entity??""];return t?e.kind==="light"?(t.attributes.supported_color_modes??[]).some(a=>a!=="onoff"):e.kind==="cover"?(t.attributes.supported_features&4)===4:!1:!1}down(e,t){if(e.target.closest("button"))return;if(this.editing){this.press={key:t.key,x:e.clientX,y:e.clientY,rect:e.currentTarget.getBoundingClientRect(),dragging:!1,long:!1,timer:0};return}const a=e.currentTarget,i={key:t.key,x:e.clientX,y:e.clientY,rect:a.getBoundingClientRect(),dragging:!1,long:!1,timer:0};i.timer=window.setTimeout(()=>{i.long=!0,this.longPress(t)},qi),this.press=i}move(e,t){const a=this.press;if(!a||a.key!==t.key||a.long)return;if(this.editing)return this.moveInEdit(e,a);const i=e.clientX-a.x,s=e.clientY-a.y;if(!a.dragging){if(Math.abs(s)>kt&&Math.abs(s)>Math.abs(i))return this.cancel();if(Math.abs(i)<kt||!this.slidable(t))return;a.dragging=!0,clearTimeout(a.timer),e.currentTarget.setPointerCapture(e.pointerId)}const o=Math.max(0,Math.min(100,(e.clientX-a.rect.left)/a.rect.width*100));this.drag={key:t.key,value:Math.round(o)}}up(e,t){const a=this.press;if(!(!a||a.key!==t.key)){if(clearTimeout(a.timer),this.press=void 0,this.editing){this.moving=null;return}if(!a.long){if(a.dragging){const i=this.drag?.value??0;this.setLevel(t,i),window.setTimeout(()=>{this.drag?.key===t.key&&(this.drag=null)},1500);return}this.tap(t)}}}cancel(){this.press&&clearTimeout(this.press.timer),this.press=void 0,this.moving=null}reset(){this.stopEdit(),this.sheet=null,this.drag=null,this.view="home",this.category="all",this.main()?.scrollTo({top:0})}get busy(){return!!this.editing||!!this.press}main(){return this.renderRoot?.querySelector(".main")??null}renderGear(e="di gear"){return this.settingsButton?c`<button class=${e} aria-label="Definições" title="Definições"
      @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}>
      ${v(f.gear)}${e.includes("di")?c`<span class="lb">Definições</span>`:d}</button>`:d}arranged(e,t){const a=this.editing===e&&this.draft?this.draft:this.dashboard.layouts?.[e];return ee(t,a,this.home)}startEdit(e,t){const a=this.dashboard.layouts?.[e];this.draft={items:ee(t,a,this.home).map(i=>({key:i.key,size:i.size})),hidden:[...a?.hidden??[]]},this.editing=e,this.category="all",this.sheet=null}stopEdit(){this.editing=null,this.draft=null,this.moving=null}async saveLayout(e){const t=this.editing;if(t){this.saving=!0;try{const a=await this.conn.sendMessagePromise({type:"pine3_home/dashboards/layout",dashboard_id:this.dashboard.id,view:t,layout:e});this.dashboard={...this.dashboard,layouts:a.dashboard.layouts},this.stopEdit()}catch(a){console.warn("Pine3 Home: layout",a),alert("Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel.")}finally{this.saving=!1}}}moveInEdit(e,t){if(!t.dragging){if(Math.hypot(e.clientX-t.x,e.clientY-t.y)<kt)return;t.dragging=!0,this.moving=t.key,e.currentTarget.setPointerCapture(e.pointerId)}const a=this.renderRoot.elementsFromPoint(e.clientX,e.clientY).map(n=>n.closest?.(".w")).find(n=>n&&n.dataset.key&&n.dataset.key!==t.key);if(!a||!this.draft||Date.now()-this.lastReorder<180)return;const i=[...this.draft.items],s=i.findIndex(n=>n.key===t.key),o=i.findIndex(n=>n.key===a.dataset.key);if(s<0||o<0)return;const[r]=i.splice(s,1);i.splice(o,0,r),this.lastReorder=Date.now(),this.draft={...this.draft,items:i}}hideWidget(e){this.draft&&(this.draft={items:this.draft.items.filter(t=>t.key!==e),hidden:[...this.draft.hidden,e]})}resizeWidget(e){if(!this.draft)return;const t=Se(e.kind),a=t[(t.indexOf(e.size)+1)%t.length];this.draft={...this.draft,items:this.draft.items.map(i=>i.key===e.key?{...i,size:a}:i)}}addWidget(e){this.draft&&(this.draft={items:[...this.draft.items,{key:e.key,size:e.size}],hidden:this.draft.hidden.filter(t=>t!==e.key)})}editControls(e,t){return this.editing===e?c`<button class="pill" @click=${()=>this.stopEdit()}>Cancelar</button>
        ${this.dashboard.layouts?.[e]?c`<button class="pill" ?disabled=${this.saving} @click=${()=>this.saveLayout(null)}>${v(f.restore)} Repor</button>`:d}
        <button class="pill pri" ?disabled=${this.saving} @click=${()=>this.saveLayout(this.draft)}>${v(f.check)} Concluído</button>`:this.canEdit&&!this.editing?c`<button class="pill icon" aria-label="Editar esta vista" title="Editar" @click=${()=>this.startEdit(e,t)}>${v(f.edit)}</button>`:d}renderPicker(e,t){if(this.editing!==e||!this.draft)return d;const a=Wi(t,this.draft,this.home);return c`<div class="picker">
      <div class="phd"><span class="k">Adicionar · toca para pôr no fim</span><span class="k">Arrasta os cartões para mudar a ordem</span></div>
      <div class="prow">${a.length?a.map(i=>c`<button class="pk" @click=${()=>this.addWidget(i)}><span>${i.name}</span><em>${i.room?.name??""}</em></button>`):c`<span class="k">Já está tudo nesta vista.</span>`}</div>
    </div>`}tap(e){switch(e.kind){case"room-lights":{const t=e.entities.some(a=>this.entities[a]?.state==="on");return this.call("light",t?"turn_off":"turn_on",e.entities)}case"climate":case"weather":case"sensor":case"binary":case"scenes":e.entity&&(this.sheet=e.entity);return;case"scene":this.call(k(e.entity),"turn_on",e.entity),this.flash=e.key,window.setTimeout(()=>{this.flash===e.key&&(this.flash=null)},1200);return;case"camera":this.sheet=e.entity;return;case"lock":this.entities[e.entity]?.state!=="locked"?this.call("lock","lock",e.entity):this.sheet=e.entity;return;default:e.entity&&this.toggle(e.entity)}}longPress(e){if(e.kind==="room-lights"&&e.room){this.openRoom(e.room.id);return}e.entity&&(this.sheet=e.entity)}openRoom(e){this.editing&&this.editing!==e&&this.stopEdit(),this.view=e,this.category="all",this.sheet=null}get dark(){return this.dashboard.theme==="claro"?!1:this.dashboard.theme==="auto"?this.entities["sun.sun"]?.state!=="above_horizon":!0}render(){if(!this.home)return d;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(a=>a.id===this.view),t={vd:!0,light:!this.dark,editing:!!this.editing,[`dock-${this.dashboard.dock}`]:!0};return c`<div class=${p(t)}>
      ${this.renderDock()}
      <main class="main">${e?this.renderRoom(e):this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):d}
    </div>`}renderAmbient(){const e=z(this.home,this.entities),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],s=this.now.getHours()*60+this.now.getMinutes(),o=(s%7-3)*.8,r=(s%5-2)*.8,n=[e.lightsOn?`${e.lightsOn} luz${e.lightsOn>1?"es":""} acesa${e.lightsOn>1?"s":""}`:null,e.alerts?e.alertText:null].filter(Boolean);return c`<div class="vd amb" role="button" aria-label="Tocar para acordar">
      <div class="ambc" style=${`transform:translate(calc(var(--u) * ${o}), calc(var(--u) * ${r}))`}>
        <div class="atime">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</div>
        <div class="adate">${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</div>
        <div class="arow">
          ${t?c`<span class="awx">${Jt(t.state)}<b>${a!=null?`${Math.round(a)}°`:""}</b>${ht[t.state]??t.state}</span>`:d}
          ${i?c`<span class=${`ipma ${i.awarenessLevelID}`}><i></i>Aviso ${Ct[i.awarenessLevelID]??""} · ${i.awarenessTypeName.toLowerCase()}</span>`:d}
        </div>
        <div class=${p({astatus:!0,att:e.alerts>0})}>${n.length?n.join(" · "):"Tudo tranquilo em casa"}</div>
      </div>
      <span class="ahint">${this.wallpanel?"Aproxima-te ou toca para acordar":"Toca para acordar"}</span>
    </div>`}renderDock(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden));return c`<nav class="dock" aria-label="Vistas">
      <button class=${p({di:!0,on:this.view==="home"})} @click=${()=>this.openRoom("home")} aria-label="Casa">
        ${v(f.home)}<span class="lb">Casa</span>
      </button>
      <span class="sep"></span>
      <div class="rooms">
        ${e.map(t=>{const a=S(t).filter(i=>this.entities[i]?.state==="on").length;return c`<button class=${p({di:!0,rm:!0,on:this.view===t.id,lit:a>0})} @click=${()=>this.openRoom(t.id)} aria-label=${t.name}>
            ${a?c`<span class="glow"></span>`:d}${v(mt(t.icon))}<span class="lb">${t.name}</span>
            ${a?c`<span class="bdg">${a}</span>`:d}
          </button>`})}
      </div>
      <span class="sep"></span>
      ${re.filter(t=>this.viewWidgets(t.id).length).map(t=>{const a=t.id==="@seguranca"?z(this.home,this.entities).alerts:0;return c`<button class=${p({di:!0,on:this.view===t.id})} @click=${()=>this.openRoom(t.id)} aria-label=${t.name}>
          ${v(t.icon)}<span class="lb">${t.name}</span>${a?c`<span class="bdg alert">${a}</span>`:d}
        </button>`})}
      ${this.renderGear()}
    </nav>`}renderHeader(e,t,a=d){const i=z(this.home,this.entities),s=this.home.persons.map(o=>this.entities[o]).filter(o=>!!o);return c`<header class="hdr">
      <div class="t"><span>${t}</span><b>${e}</b></div>
      <div class="chips">
        ${this.editing?d:c`${i.temp?c`<span class="chip"><i style="background:#34c759;color:#06210f">${v(f.therm)}</i><span>Clima<small>${i.temp}</small></span></span>`:d}
        <span class="chip"><i style="background:#ffcf8a;color:#2a1a04">${v(f.bulb)}</i><span>Luzes<small>${i.lightsOn?`${i.lightsOn} acesa${i.lightsOn>1?"s":""}`:"apagadas"}</small></span></span>
        <span class="chip"><i style=${i.alerts?"background:#ff8a5c;color:#2a0f04":"background:#5be3a0;color:#06210f"}>${v(f.shield)}</i><span>Segurança<small>${i.alertText}</small></span></span>
        ${s.length?c`<div class="people">${s.map(o=>{const r=o.attributes.entity_picture,n=o.attributes.friendly_name??o.entity_id;return c`<span class="av" title=${n} style=${r?`background-image:url(${r})`:""}>${r?"":n[0]}${o.state==="home"?c`<i></i>`:d}</span>`})}</div>`:d}`}
        ${a}
      </div>
    </header>`}greeting(){const e=this.now.getHours();return`${e<6?"Boa noite":e<13?"Bom dia":e<20?"Boa tarde":"Boa noite"} · ${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}`}renderHome(){const e=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),t=Mt(this.home,this.entities),a=this.arranged("home",t),i=this.editing==="home";return c`${i?this.renderHeader("A editar","Casa",this.editControls("home",t)):this.renderHeader(e,this.greeting(),this.editControls("home",t))}
      ${a.length||i?c`<div class=${p({grid:!0,edit:i})}>${a.map(s=>this.renderWidget(s))}</div>`:c`<p class="empty">Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.</p>`}
      ${this.renderPicker("home",t)}`}viewWidgets(e){return e==="@clima"?Di(this.home,this.entities):e==="@seguranca"?Ii(this.home,this.entities):e==="@cenas"?Bi(this.home,this.entities):[]}renderView(e){const t=re.find(n=>n.id===e),a=this.viewWidgets(e),i=this.arranged(e,a),s=this.editing===e,o=z(this.home,this.entities),r=e==="@clima"?o.temp??"":e==="@seguranca"?o.alertText:`${i.length} cenas e rotinas`;return c`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${v(f.back)}</button>
        <b>${t.name}</b><span>${s?"a editar":r}</span>
        <div class="act">${this.editControls(e,a)}</div>
      </div>
      ${i.length||s?c`<div class=${p({grid:!0,edit:s})}>${i.map(n=>this.renderWidget(n))}</div>`:c`<p class="empty">Nada para mostrar aqui.</p>`}
      ${this.renderPicker(e,a)}`}renderRoom(e){const t=Ri(e,this.home.settings?.shown),a=this.arranged(e.id,t),i=this.editing===e.id,s=g=>g.length?a.filter(V=>g.includes(V.kind)).length:a.length,o=Oi.filter(g=>s(g.kinds)>0),r=o.find(g=>g.id===this.category)??o[0],n=!i&&r&&r.kinds.length?a.filter(g=>r.kinds.includes(g.kind)):a,l=S(e),u=e.temperature?this.entities[e.temperature]?.state:null,h=e.humidity?this.entities[e.humidity]?.state:null,m=[u&&u!=="unavailable"?`${A(parseFloat(u))}°`:null,h&&h!=="unavailable"?`${A(parseFloat(h),0)}%`:null,e.floor].filter(Boolean).join(" · ");return c`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${v(f.back)}</button>
        <b>${e.name}</b><span>${i?"a editar":m}</span>
        <div class="act">
          ${l.length&&!i?c`<button class="pill" @click=${()=>this.call("light","turn_on",l)}>${v(f.bulb)} Acender</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",l)}>Apagar</button>`:d}
          ${this.editControls(e.id,t)}
        </div>
      </div>
      ${o.length>2&&!i?c`<div class="cats">${o.map(g=>c`<button class=${p({on:g===r})} @click=${()=>this.category=g.id}>${g.name}<em>${s(g.kinds)}</em></button>`)}</div>`:d}
      <div class=${p({grid:!0,edit:i})}>${n.map(g=>this.renderWidget(g))}</div>
      ${this.renderPicker(e.id,t)}`}renderWidget(e){const t=e.entity?this.entities[e.entity]:void 0;if(e.entity&&e.kind!=="weather"&&!t)return d;const a=this.widgetBody(e,t),i={w:!0,[e.size]:!0,on:(a.on??!1)||this.flash===e.key,att:a.att??!1,off:!!e.entity&&Ei(t),dragging:this.drag?.key===e.key,moving:this.moving===e.key,[`k-${e.kind}`]:!0,idle:e.kind==="climate"&&t?.state==="off"},s=!!this.editing;return c`<div class=${p(i)} style=${a.style??""} data-key=${e.key}
        @pointerdown=${o=>this.down(o,e)} @pointermove=${o=>this.move(o,e)}
        @pointerup=${o=>this.up(o,e)} @pointercancel=${()=>this.cancel()} @contextmenu=${o=>o.preventDefault()}>
      ${a.fill!=null?c`<div class="fill" style=${mi({width:`${a.fill}%`,"--fc":a.color??"255,207,138"})}></div>`:d}
      ${a.art??d}
      <span class="nm">${e.entity&&this.home.settings?.names?.[e.entity]||e.name}${a.tag?c`<em>${a.tag}</em>`:d}</span>
      ${a.extra??d}
      <div class="hero" style=${a.heroStyle??""}>${a.hero}${a.small?c`<small>${a.small}</small>`:d}</div>
      ${s?d:a.ctl??d}
      ${s?c`<button class="rmv" aria-label=${`Esconder ${e.name}`} @click=${()=>this.hideWidget(e.key)}>${v(f.minus)}</button>
          <button class="handle" aria-label=${`Mudar o tamanho de ${e.name}`} @click=${()=>this.resizeWidget(e)}>${v(f.resize)}<b>${e.size.toUpperCase()}</b></button>`:d}
    </div>`}widgetBody(e,t){const a=this.level(e);switch(e.kind){case"room-lights":{const i=e.entities.filter(o=>this.entities[o]?.state==="on"),s=i.length?wt(this.entities[i[0]]):"#ffcf8a";return{hero:a?`${a}%`:"Off",small:i.length?i.map(o=>this.name(o,e.room)).slice(0,2).join(" e "):`${e.entities.length} luz${e.entities.length>1?"es":""}`,tag:e.entities.length>1?`${i.length}/${e.entities.length} luzes`:void 0,art:Qt(this.typeOf(i[0]??e.entities[0]),a??0,s),fill:a||null,color:oe(s),on:a>0}}case"light":{const i=wt(t);return{hero:a?`${a}%`:"Off",tag:e.sub&&this.view==="home"?e.sub:void 0,art:Qt(this.typeOf(e.entity),a??0,i),fill:a||null,color:oe(i),on:(a??0)>0,heroStyle:a?`color:${i}`:""}}case"cover":{const i=a??0;return{hero:`${i}%`,small:Gi[t.state]??t.state,art:wi(i),fill:i,color:"170,200,230"}}case"climate":{const i=t.attributes.temperature,s=t.state,o=(t.attributes.hvac_modes??[]).filter(u=>["heat","cool","off","auto","heat_cool"].includes(u)).slice(0,3),r=s==="cool"?"#6cc8ff":s==="off"?"#5d646e":"#ff9f43",n=t.attributes.current_temperature,l=ae[t.attributes.hvac_action??s]??xt[s]??s;return{hero:s==="off"?"Off":i!=null?`${A(i)}°`:"—",small:[l,n!=null?`agora ${A(n)}°`:null].filter(Boolean).join(" · "),tag:e.sub,art:ki(s==="off"?null:i??null,r),heroStyle:e.size==="l"?"font-size:calc(var(--u)*7)":"",extra:o.length>1?c`<div class="seg">${o.map(u=>c`<button class=${p({on:u===s})} @click=${()=>this.call("climate","set_hvac_mode",e.entity,{hvac_mode:u})}>${xt[u]}</button>`)}</div>`:d,ctl:i!=null&&s!=="off"?c`<div class="ctl"><button aria-label="Baixar" @click=${()=>this.stepTemp(e.entity,-1)}>${v(f.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(e.entity,1)}>${v(f.plus)}</button></div>`:d}}case"weather":{const i=t?.state??"",s=t?.attributes.temperature,o=this.warnings[0];return{hero:s!=null?`${Math.round(s)}°`:"—",small:ht[i]??i,art:Jt(i),extra:o?c`<span class=${`ipma ${o.awarenessLevelID}`}><i></i>Aviso ${Ct[o.awarenessLevelID]??""} · ${o.awarenessTypeName.toLowerCase()}${this.warnings.length>1?` +${this.warnings.length-1}`:""}</span>`:d,ctl:this.hourly.length?c`<div class="hrs">${this.hourly.map(r=>c`<span>${new Date(r.datetime).getHours()}h<b>${Math.round(r.temperature)}°</b>${r.precipitation_probability?`${r.precipitation_probability}%`:""}</span>`)}</div>`:d}}case"lock":{const i=t.state!=="locked";return{hero:i?t.state==="unlocked"?"Destrancada":t.state:"Trancada",small:i?"tocar para trancar":"toque longo para abrir",art:xi(i),att:t.state==="unlocked",heroStyle:"font-size:calc(var(--u)*1.85)"}}case"media":{const i=t.state==="playing",s=t.attributes.media_title??(D(t)?"Ligado":"Desligado"),o=t.attributes.media_artist??t.attributes.app_name??"";return{hero:s,small:o,tag:e.sub,art:_i(t.attributes.entity_picture),on:i,heroStyle:"font-size:calc(var(--u)*2.4)",ctl:D(t)?c`<div class="ctl"><button class="pri" aria-label=${i?"Pausa":"Tocar"} @click=${()=>this.call("media_player","media_play_pause",e.entity)}>${v(i?f.pause:f.play)}</button>
                <button aria-label="Seguinte" @click=${()=>this.call("media_player","media_next_track",e.entity)}>${v(f.next)}</button></div>`:d}}case"vacuum":{const i=t.attributes.battery_level;return{hero:i!=null?`${i}%`:ie[t.state]??t.state,small:ie[t.state]??t.state,art:Ci(t.state==="cleaning"),on:t.state==="cleaning"}}case"scenes":return{hero:"",extra:c`<div class="scn">${e.entities.map(i=>c`<button @click=${()=>this.call(k(i),"turn_on",i)}>${v(f.spark)}${this.name(i)}</button>`)}</div>`};case"fan":return{hero:D(t)?t.attributes.percentage!=null?`${t.attributes.percentage}%`:"On":"Off",art:Li(D(t)),on:D(t)};case"switch":case"outlet":{const i=D(t);return{hero:i?"On":"Off",art:Ai(i),on:i}}case"binary":{const i=t.state==="on",s=t.attributes.device_class;return{hero:s&&["door","window","garage_door","opening"].includes(s)?i?"Aberta":"Fechada":s==="motion"||s==="occupancy"?i?"Movimento":"Calmo":i?"On":"Off",att:i&&!!s&&["door","window","garage_door","opening","moisture","smoke","gas"].includes(s),heroStyle:"font-size:calc(var(--u)*2.4)"}}case"sensor":{const i=t.attributes.unit_of_measurement??"",s=parseFloat(t.state),o=t.attributes.device_class;Number.isNaN(s)||this.historyWanted.add(e.entity);const r=this.history[e.entity],n=r&&r.length>1?`${A(Math.min(...r),0)}–${A(Math.max(...r),0)}`:void 0;return{hero:Number.isNaN(s)?t.state:`${A(s)}${i==="°C"?"°":i==="%"?"%":""}`,small:i&&i!=="°C"&&i!=="%"?i:e.sub,tag:n,art:Mi(o==="humidity"?"#3db8f5":o==="temperature"?"#ff9f43":"#5be3a0",r)}}case"clock":return{hero:this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),small:this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})};case"scene":return{hero:"",art:Vi(),extra:c`<span class="go">${this.flash===e.key?"Ativada":"Tocar para ativar"}</span>`};case"camera":{const i=t.attributes.entity_picture,s=Math.floor(this.now.getTime()/1e4);return{hero:"",tag:e.sub,art:i?c`<img class="cam" src=${`${i}${i.includes("?")?"&":"?"}t=${s}`} alt="" loading="lazy" />`:d}}}}name(e,t){const a=this.home.settings?.names?.[e];if(a)return a;for(const s of this.home.rooms){const o=s.devices.find(r=>r.id===e);if(o)return o.name}const i=this.entities[e]?.attributes.friendly_name??e.split(".")[1];return t&&i.toLowerCase().startsWith(t.name.toLowerCase()+" ")?i.slice(t.name.length+1):i}stepTemp(e,t){const a=this.entities[e],i=a?.attributes.target_temp_step??.5,s=a?.attributes.temperature??20,o=a?.attributes.min_temp??7,r=a?.attributes.max_temp??35;this.call("climate","set_temperature",e,{temperature:Math.max(o,Math.min(r,Math.round((s+t*i)*10)/10))})}renderSheet(e){const t=this.entities[e];if(!t)return d;const a=k(e),i=this.home.rooms.find(o=>o.devices.some(r=>r.id===e)),s=a==="light"?"luz":a==="cover"?"estore":a==="climate"?"clima":a==="lock"?"fechadura":a==="media_player"?"média":a==="weather"?"tempo":"";return c`<div class="scrim" @click=${()=>this.sheet=null}></div>
      <aside class="sheet" role="dialog" aria-label=${this.name(e,i)}>
        <div class="shd"><span class="k">${[i?.name,s].filter(Boolean).join(" · ")}</span>
          <button class="x" aria-label="Fechar" @click=${()=>this.sheet=null}>${v(f.close)}</button></div>
        <h4>${this.name(e,i)}</h4>
        ${this.sheetBody(e,t)}
        ${this.thisCard(e)}
      </aside>`}deviceOf(e){for(const t of this.home.rooms){const a=t.devices.find(i=>i.id===e);if(a)return a}}typeOf(e){const t=this.home.settings?.types?.[e];if(t&&F[t])return t;const a=this.deviceOf(e);return At(e,this.entities[e],{name:a?.name,model:a?.model,manufacturer:a?.manufacturer})}saveHouse(e){this.home={...this.home,settings:{...this.home.settings??{},...e}},this.conn.sendMessagePromise({type:"pine3_home/home/settings",...e}).catch(t=>console.warn("Pine3 Home: settings",t))}thisCard(e){if(!this.cardSettings||!this.deviceOf(e)&&!this.home.rooms.some(h=>h.entities?.some(m=>m.id===e)))return d;const t=this.home.settings??{},a=He[k(e)]??[],i=this.typeOf(e),s=this.deviceOf(e),o=At(e,this.entities[e],{name:s?.name,model:s?.model,manufacturer:s?.manufacturer}),r=!!t.types?.[e],n=h=>{const m={...t.types??{}};h&&h!==o?m[e]=h:delete m[e],this.saveHouse({types:m})},l=h=>{const m={...t.names??{}},g=this.deviceOf(e)?.name;h&&h!==g?m[e]=h.slice(0,40):delete m[e],this.saveHouse({names:m})},u=(t.hidden??[]).includes(e);return c`<div class="this">
      <span class="k">Este cartão · vale para todos os estilos e painéis</span>
      ${a.length>1?c`<div class="tchips" role="group" aria-label="Tipo">${a.map(h=>c`<button class=${p({on:h===i})} aria-pressed=${h===i}
            @click=${()=>n(h)}>${v(F[h].icon)}${F[h].name}</button>`)}</div>
          <span class="auto">${r?c`Escolhido por ti. <button class="lnk" @click=${()=>n(null)}>Voltar ao automático (${F[o].name.toLowerCase()})</button>`:`Adivinhado pelo nome e pelo modelo: ${F[o].name.toLowerCase()}.`}</span>`:d}
      <label class="fld"><span>Nome</span><input .value=${this.name(e)} maxlength="40" @change=${h=>l(h.target.value.trim())} /></label>
      <div class="fld"><span>Esconder este cartão</span>
        <button class="sw" role="switch" aria-checked=${u} aria-label="Esconder este cartão"
          @click=${()=>{this.saveHouse({hidden:u?(t.hidden??[]).filter(h=>h!==e):[...t.hidden??[],e]}),u||(this.sheet=null)}}></button></div>
    </div>`}bigSlider(e,t,a,i,s){const o=this.drag?.key===e?this.drag.value:t,r=n=>{const l=n.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(n.clientX-l.left)/l.width*100)))};return c`<div class="bigsl" role="slider" aria-label=${i} aria-valuenow=${o} aria-valuemin="0" aria-valuemax="100"
      @pointerdown=${n=>{n.currentTarget.setPointerCapture(n.pointerId),this.drag={key:e,value:r(n)}}}
      @pointermove=${n=>{this.drag?.key===e&&n.buttons&&(this.drag={key:e,value:r(n)})}}
      @pointerup=${n=>{const l=r(n);s(l),this.drag={key:e,value:l},window.setTimeout(()=>{this.drag?.key===e&&(this.drag=null)},1500)}}>
      <i style=${`width:${o}%;background:${a}`}></i><b>${o}%</b></div>`}sheetBody(e,t){const a=k(e);if(a==="light"){const s=t.attributes.supported_color_modes??[],o=s.includes("color_temp"),r=s.some(h=>["hs","rgb","rgbw","rgbww","xy"].includes(h)),n=wt(t),l=t.attributes.min_color_temp_kelvin??2200,u=t.attributes.max_color_temp_kelvin??6500;return c`${s.some(h=>h!=="onoff")?this.bigSlider(`sheet-${e}`,Y(t),`linear-gradient(90deg,${n},#fff3e0)`,"Brilho",h=>h?this.call("light","turn_on",e,{brightness_pct:h}):this.call("light","turn_off",e)):d}
        ${o?c`<span class="k">Branco</span><div class="tbar" @click=${h=>{const m=h.currentTarget.getBoundingClientRect(),g=(h.clientX-m.left)/m.width;this.call("light","turn_on",e,{color_temp_kelvin:Math.round(l+g*(u-l))})}}></div>`:d}
        ${r?c`<span class="k">Cores</span><div class="pre">${Ki.map(h=>c`<button aria-label=${h} style=${`background:${h}`} class=${p({on:h===n})} @click=${()=>this.call("light","turn_on",e,{rgb_color:Pe(h)})}></button>`)}</div>`:d}
        <div class="foot"><button class="pill" @click=${()=>this.toggle(e)}>${v(f.power)} ${t.state==="on"?"Desligar":"Ligar"}</button></div>`}if(a==="cover"){const s=t.attributes.current_position??(t.state==="open"?100:0);return c`${t.attributes.supported_features&4?this.bigSlider(`sheet-${e}`,s,"linear-gradient(90deg,#a9b6c4,#dfe6ee)","Posição",o=>this.call("cover","set_cover_position",e,{position:o})):d}
        <div class="foot"><button class="pill" @click=${()=>this.call("cover","open_cover",e)}>Abrir</button><button class="pill" @click=${()=>this.call("cover","stop_cover",e)}>Parar</button><button class="pill" @click=${()=>this.call("cover","close_cover",e)}>Fechar</button></div>`}if(a==="climate"){const s=t.attributes.temperature,o=t.attributes.hvac_modes??[];return c`<div class="bigtemp">${s!=null?`${A(s)}°`:"—"}<small>${ae[t.attributes.hvac_action??t.state]??""}${t.attributes.current_temperature!=null?` · agora ${A(t.attributes.current_temperature)}°`:""}</small></div>
        <div class="ctl big"><button aria-label="Baixar" @click=${()=>this.stepTemp(e,-1)}>${v(f.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(e,1)}>${v(f.plus)}</button></div>
        <span class="k">Modo</span><div class="seg wide">${o.map(r=>c`<button class=${p({on:r===t.state})} @click=${()=>this.call("climate","set_hvac_mode",e,{hvac_mode:r})}>${xt[r]??r}</button>`)}</div>`}if(a==="lock"){const s=t.state==="locked";return c`<div class="bigtemp">${s?"Trancada":t.state==="unlocked"?"Destrancada":t.state}</div>
        <div class="foot">${s?c`<button class="pill warn" @click=${()=>{this.call("lock","unlock",e),this.sheet=null}}>${v(f.unlock)} Destrancar</button>`:c`<button class="pill pri" @click=${()=>this.call("lock","lock",e)}>${v(f.lock)} Trancar</button>`}</div>`}if(a==="media_player"){const s=Math.round((t.attributes.volume_level??0)*100);return c`<div class="bigtemp" style="font-size:calc(var(--u)*2.6)">${t.attributes.media_title??t.state}<small>${t.attributes.media_artist??""}</small></div>
        ${t.attributes.volume_level!=null?this.bigSlider(`vol-${e}`,s,"linear-gradient(90deg,#3db8f5,#9be0ff)","Volume",o=>this.call("media_player","volume_set",e,{volume_level:o/100})):d}
        <div class="foot"><button class="pill pri" @click=${()=>this.call("media_player","media_play_pause",e)}>${v(t.state==="playing"?f.pause:f.play)} ${t.state==="playing"?"Pausa":"Tocar"}</button>
          <button class="pill" @click=${()=>this.call("media_player","media_next_track",e)}>${v(f.next)}</button>
          <button class="pill" @click=${()=>this.toggle(e)}>${v(f.power)}</button></div>`}if(a==="camera"){const s=t.attributes.entity_picture;return s?c`<img class="camlg" src=${`${s}${s.includes("?")?"&":"?"}t=${Math.floor(this.now.getTime()/1e4)}`} alt=${this.name(e)} />`:c`<p class="k">Sem imagem</p>`}if(a==="weather"){const s=n=>new Date(n).toLocaleString("pt-PT",{weekday:"short",hour:"2-digit",minute:"2-digit"}),o=t.attributes.temperature,r=[t.attributes.humidity!=null?`${t.attributes.humidity}%`:null,t.attributes.wind_speed!=null?`vento ${A(t.attributes.wind_speed,0)} ${t.attributes.wind_speed_unit??""}`:null].filter(Boolean);return c`<div class="bigtemp">${o!=null?`${Math.round(o)}°`:"—"}<small>${[ht[t.state]??t.state,...r].join(" · ")}</small></div>
        <div class="hrs">${this.hourly.map(n=>c`<span>${new Date(n.datetime).getHours()}h<b>${Math.round(n.temperature)}°</b>${n.precipitation_probability?`${n.precipitation_probability}%`:""}</span>`)}</div>
        ${this.warnings.map(n=>c`<div class=${`warn ${n.awarenessLevelID}`}><b>Aviso ${Ct[n.awarenessLevelID]??""} · ${n.awarenessTypeName}</b>
          <span>${s(n.startTime)} → ${s(n.endTime)}</span>${n.text?c`<p>${n.text}</p>`:d}</div>`)}
        ${this.home.settings?.ipma_area?d:c`<p class="hint">Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.</p>`}`}const i=t.attributes.unit_of_measurement??"";return c`<div class="bigtemp">${t.state}${i?` ${i}`:""}</div>
      ${["switch","light","fan","input_boolean","vacuum"].includes(a)?c`<div class="foot"><button class="pill pri" @click=${()=>this.toggle(e)}>${v(f.power)} ${D(t)?"Desligar":"Ligar"}</button></div>`:d}`}};b.styles=ct;x([L({attribute:!1})],b.prototype,"home",2);x([L({attribute:!1})],b.prototype,"entities",2);x([L({attribute:!1})],b.prototype,"dashboard",2);x([L({attribute:!1})],b.prototype,"conn",2);x([L()],b.prototype,"screenName",2);x([L({type:Boolean})],b.prototype,"canEdit",2);x([L({type:Boolean})],b.prototype,"ambient",2);x([L({type:Boolean})],b.prototype,"settingsButton",2);x([L({type:Boolean})],b.prototype,"cardSettings",2);x([L({type:Boolean})],b.prototype,"preview",2);x([L()],b.prototype,"startView",2);x([L({type:Boolean})],b.prototype,"wallpanel",2);x([w()],b.prototype,"editing",2);x([w()],b.prototype,"draft",2);x([w()],b.prototype,"moving",2);x([w()],b.prototype,"saving",2);x([w()],b.prototype,"view",2);x([w()],b.prototype,"category",2);x([w()],b.prototype,"sheet",2);x([w()],b.prototype,"drag",2);x([w()],b.prototype,"now",2);x([w()],b.prototype,"hourly",2);x([w()],b.prototype,"warnings",2);x([w()],b.prototype,"history",2);x([w()],b.prototype,"flash",2);b=x([K("pine3-vidro")],b);function Pe(e){const t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function oe(e){if(e.startsWith("#"))return Pe(e).join(",");const t=e.match(/\d+/g);return t?t.slice(0,3).join(","):"255,207,138"}var Ji=Object.getOwnPropertyDescriptor,Qi=(e,t,a,i)=>{for(var s=i>1?void 0:i?Ji(t,a):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(s)||s);return s};const ne=e=>$`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,ts=[{id:"home",name:"Casa",color:"#ffd166",icon:f.home},{id:"@divisoes",name:"Divisões",color:"#d9f2e3",icon:f.room},{id:"@clima",name:"Clima",color:"#ffb08a",icon:f.therm},{id:"@seguranca",name:"Segurança",color:"#bfe0ff",icon:f.shield},{id:"@cenas",name:"Cenas",color:"#ffd0c2",icon:f.spark}],ce=["#ffd166","#d9f2e3","#c9b8ff","#ffd0c2","#bfe0ff","#ffb08a","#e9f5a8"],le={key:"clock",kind:"clock",size:"l",name:""};let Vt=class extends b{render(){if(!this.home)return d;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(a=>a.id===this.view),t={vd:!0,bento:!0,editing:!!this.editing};return c`<div class=${p(t)}>
      ${this.renderPills()}
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderRooms():this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):d}
    </div>`}renderPills(){const e=this.home.rooms.some(i=>i.id===this.view),t=z(this.home,this.entities).alerts,a=ts.filter(i=>i.id==="home"||i.id==="@divisoes"||this.viewWidgets(i.id).length);return c`<nav class="bnav" aria-label="Vistas">
      ${a.map(i=>{const s=this.view===i.id||i.id==="@divisoes"&&e;return c`<button class=${p({on:s})} style=${`--c:${i.color}`} @click=${()=>this.openRoom(i.id)}>
          ${ne(i.icon)}${i.name}${i.id==="@seguranca"&&t?c`<span class="bb">${t}</span>`:d}
        </button>`})}
      ${this.view==="home"?c`<span class="btools">${this.editControls("home",[le,...Mt(this.home,this.entities)])}</span>`:d}
      ${this.renderGear("bgear")}
      <span class="clk">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</span>
    </nav>`}renderHome(){const e=[le,...Mt(this.home,this.entities)],t=this.arranged("home",e),a=this.editing==="home";return c`<div class=${p({grid:!0,edit:a})}>${t.map(i=>this.renderWidget(i))}</div>
      ${this.renderPicker("home",e)}`}renderRooms(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden));return c`<div class="grid">${e.map((t,a)=>{const i=S(t),s=i.filter(r=>this.entities[r]?.state==="on").length,o=t.temperature?parseFloat(this.entities[t.temperature]?.state??""):NaN;return c`<button class=${p({w:!0,s:!0,room:!0,dim:!s})} style=${`--rc:${ce[a%ce.length]}`} @click=${()=>this.openRoom(t.id)}>
        <span class="nm">${ne(mt(t.icon))}${Number.isNaN(o)?d:c`<em>${A(o)}°</em>`}</span>
        <div class="hero">${t.name}<small>${Rt(i.length,s,t.devices.length)}</small></div>
      </button>`})}</div>`}};Vt.styles=[ct,X`
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
  `];Vt=Qi([K("pine3-bento")],Vt);var es=Object.getOwnPropertyDescriptor,as=(e,t,a,i)=>{for(var s=i>1?void 0:i?es(t,a):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(s)||s);return s};const W=e=>$`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,de={home:"Casa","@divisoes":"Divisões","@clima":"Clima","@seguranca":"Segurança","@cenas":"Cenas"},is=70,ss=$`<svg viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 22 Q18 8 36 18 T70 14 T100 18 V46 H0Z" fill="#3c3552" opacity=".85"/>
  <path d="M0 30 Q22 18 46 28 T100 26 V46 H0Z" fill="#252a40"/>
  <path d="M0 38 Q30 30 60 36 T100 34 V46 H0Z" fill="#171b2a"/></svg>`;let Ht=class extends b{get order(){return["home","@divisoes",...["@clima","@seguranca","@cenas"].filter(e=>this.viewWidgets(e).length)]}get current(){return this.home.rooms.some(e=>e.id===this.view)?"@divisoes":this.view}step(e){const t=this.order,a=Math.max(0,t.indexOf(this.current));this.openRoom(t[(a+e+t.length)%t.length])}swipeDown(e){const t=e.target;this.editing||this.sheet||t.closest(".w, button, .sheet, .picker, .bigsl")||(this.swipe={x:e.clientX,y:e.clientY,id:e.pointerId})}swipeUp(e){const t=this.swipe;if(this.swipe=void 0,!t||t.id!==e.pointerId)return;const a=e.clientX-t.x;Math.abs(a)>is&&Math.abs(a)>Math.abs(e.clientY-t.y)*1.5&&this.step(a<0?1:-1)}render(){if(!this.home)return d;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(r=>r.id===this.view),t=z(this.home,this.entities).lightsOn>0,a=this.view==="home",i={vd:!0,moldura:!0,dim:!t,editing:!!this.editing},s=this.order,o=this.current;return c`<div class=${p(i)} @pointerdown=${r=>this.swipeDown(r)} @pointerup=${r=>this.swipeUp(r)}
        @pointercancel=${()=>this.swipe=void 0}>
      <div class="hills">${ss}</div>
      ${a?this.renderFrame():c`<div class="panel"><main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderRoomList():this.renderView(this.view)}</main></div>`}
      <div class="pager">
        <b>${e?e.name:de[o]??""}</b>
        <div class="dots">${s.map(r=>c`<button class=${p({on:r===o})} aria-label=${de[r]} @click=${()=>this.openRoom(r)}></button>`)}</div>
        ${this.renderGear("mgear")}
      </div>
      ${this.editing?d:c`<button class="edge l" aria-label="Vista anterior" @click=${()=>this.step(-1)}>${W(f.back)}</button>
          <button class="edge r" aria-label="Vista seguinte" @click=${()=>this.step(1)}>${W(f.back)}</button>`}
      ${a?c`<span class="hint">desliza para o lado para mudar de vista</span>`:d}
      ${this.sheet?this.renderSheet(this.sheet):d}
    </div>`}renderFrame(){const e=z(this.home,this.entities),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],s=this.home.rooms.filter(h=>!h.hidden&&S(h).length),o=this.home.rooms.flatMap(h=>h.devices).find(h=>!h.hidden&&k(h.id)==="climate"),r=this.home.rooms.flatMap(h=>h.devices).find(h=>!h.hidden&&k(h.id)==="lock"),n=o?this.entities[o.id]:void 0,l=r?this.entities[r.id]:void 0,u=[e.lightsOn?`${e.lightsOn} luz${e.lightsOn>1?"es":""} acesa${e.lightsOn>1?"s":""}`:"luzes apagadas",e.alerts?e.alertText:null].filter(Boolean);return c`<div class="tl">
        <b>${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</span>
      </div>
      <div class="tr">
        ${t?c`<b>${a!=null?`${Math.round(a)}°`:""}</b>${this.weatherWord(t.state)}<br />`:d}
        ${u.join(" · ")}
        ${i?c`<br /><span class=${`ipma ${i.awarenessLevelID}`}><i></i>Aviso ${{yellow:"amarelo",orange:"laranja",red:"vermelho"}[i.awarenessLevelID]??""} · ${i.awarenessTypeName.toLowerCase()}</span>`:d}
      </div>
      <div class="strip">
        ${s.map(h=>{const m=S(h).filter(g=>this.entities[g]?.state==="on").length;return c`<button class=${p({q:!0,on:m>0})} @click=${()=>this.openRoom(h.id)}>
            <i>${W(mt(h.icon))}</i><span>${h.name}<small>${m?`${m} luz${m>1?"es":""}`:"apagada"}</small></span>
          </button>`})}
        ${o&&n?c`<button class=${p({q:!0,on:n.state!=="off"})} @click=${()=>this.openRoom("@clima")}>
              <i>${W(f.therm)}</i><span>${n.state==="off"?"Off":`${A(n.attributes.temperature??0)}°`}<small>clima</small></span>
            </button>`:d}
        ${r&&l?c`<button class=${p({q:!0,alert:l.state==="unlocked"})}
                @click=${()=>l.state==="locked"?this.sheet=r.id:this.call("lock","lock",r.id)}>
              <i>${W(l.state==="locked"?f.lock:f.unlock)}</i><span>${r.name}<small>${l.state==="locked"?"trancada":"destrancada · tocar"}</small></span>
            </button>`:d}
      </div>`}weatherWord(e){return{"clear-night":"Céu limpo",cloudy:"Nublado",fog:"Nevoeiro",lightning:"Trovoada","lightning-rainy":"Trovoada e chuva",partlycloudy:"Pouco nublado",pouring:"Chuva forte",rainy:"Chuva",snowy:"Neve",sunny:"Sol",windy:"Vento"}[e]??e}renderRoomList(){const e=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden)),t=z(this.home,this.entities).lightsOn;return c`<div class="rtop"><b>Divisões</b><span>${t?`${t} luz${t>1?"es":""} acesa${t>1?"s":""}`:"tudo apagado"}</span></div>
      <div class="grid">${e.map(a=>{const i=S(a),s=i.filter(r=>this.entities[r]?.state==="on").length,o=a.temperature?parseFloat(this.entities[a.temperature]?.state??""):NaN;return c`<button class=${p({w:!0,s:!0,rc:!0,on:s>0})} @click=${()=>this.openRoom(a.id)}>
          <span class="nm">${a.name}${Number.isNaN(o)?d:c`<em>${A(o)}°</em>`}</span>
          <div class="hero">${W(mt(a.icon))}<small>${Rt(i.length,s,a.devices.length)}</small></div>
        </button>`})}</div>`}};Ht.styles=[ct,X`
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
  `];Ht=as([K("pine3-moldura")],Ht);var rs=Object.defineProperty,os=Object.getOwnPropertyDescriptor,Ee=(e,t,a,i)=>{for(var s=i>1?void 0:i?os(t,a):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&rs(t,a,s),s};const ns=[{id:"home",name:"Casa"},{id:"@divisoes",name:"Divisões"},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Segurança"},{id:"@cenas",name:"Cenas"}],cs=["nenhuma","uma","duas","três","quatro","cinco","seis","sete","oito","nove","dez"],ls={yellow:"amarelo",orange:"laranja",red:"vermelho"};let gt=class extends b{constructor(){super(...arguments),this.open=null}get pages(){return ns.filter(e=>e.id==="home"||e.id==="@divisoes"||this.viewWidgets(e.id).length)}render(){if(!this.home)return d;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(s=>s.id===this.view),t=this.pages,a=e?"@divisoes":this.view,i=Math.max(0,t.findIndex(s=>s.id===a));return c`<div class=${p({vd:!0,editorial:!0,editing:!!this.editing})}>
      <nav class="toc" aria-label="Índice">
        ${t.map(s=>c`<button class=${p({on:s.id===a})} @click=${()=>this.openRoom(s.id)}>${s.name}</button>`)}
        ${this.renderGear("egear")}
        <span class="no">N.º ${i+1} / ${t.length}</span>
      </nav>
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?c`<div class="rtop"><b>Divisões</b><span>${this.lightsLine()}</span></div>${this.renderList(!0)}`:this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):d}
    </div>`}lightsLine(){const e=z(this.home,this.entities).lightsOn;return e?`${e} luz${e>1?"es":""} acesa${e>1?"s":""}`:"tudo apagado"}sentence(){const e=z(this.home,this.entities),t=this.home.rooms.map(u=>u.temperature?parseFloat(this.entities[u.temperature]?.state??""):NaN).filter(u=>!Number.isNaN(u)),a=t.length?Math.round(t.reduce((u,h)=>u+h,0)/t.length):null,i=e.lightsOn>=4?"acolhedora":e.lightsOn?"calma":"às escuras",s=`${cs[e.lightsOn]??e.lightsOn} ${e.lightsOn===1?"luz":"luzes"}`,o=this.home.rooms.flatMap(u=>u.devices).find(u=>!u.hidden&&k(u.id)==="lock"),r=o?this.entities[o.id]?.state:void 0,n=o&&r?r==="locked"?c`a ${o.name.toLowerCase()} trancada`:c`a ${o.name.toLowerCase()} <em>ainda destrancada</em>`:null,l=[s,a!=null?`${a} graus`:null].filter(Boolean).join(", ");return c`A casa está <em>${i}</em>: ${l}${n?c`, e ${n}`:d}.`}renderHome(){const e=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}).split(":"),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],s=[...this.home.scenes,...this.home.scripts].filter(r=>this.entities[r]).slice(0,4),o=this.home.persons.map(r=>this.entities[r]).filter(r=>r?.state==="home");return c`<div class="ed">
      <div class="left">
        <div class="ttl">${e[0]}<em>:</em>${e[1]}</div>
        <div class="sub">${this.sentence()}</div>
        ${s.length?c`<div class="scn">${s.map(r=>c`<button class=${p({on:this.flash===r})} @click=${()=>this.tap({key:r,kind:"scene",size:"s",name:"",entity:r})}>
              ${(this.entities[r].attributes.friendly_name??r).toLowerCase()}</button>`)}</div>`:d}
        <div class="meta">
          ${t?c`<div>Lá fora<b>${a!=null?`${Math.round(a)}°, `:""}${this.weatherWord(t.state)}</b></div>`:d}
          ${i?c`<div class="warnm">Aviso ${ls[i.awarenessLevelID]??""}<b>${i.awarenessTypeName.toLowerCase()}</b></div>`:d}
          ${o.length?c`<div>Em casa<b>${o.map(r=>(r.attributes.friendly_name??"").split(" ")[0]).join(", ")}</b></div>`:d}
        </div>
      </div>
      ${this.renderList(!1)}
    </div>`}weatherWord(e){return{"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",lightning:"trovoada","lightning-rainy":"trovoada",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve",sunny:"sol",windy:"vento"}[e]??e}renderList(e){const t=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden));return c`<div class=${p({list:!0,full:e})}>${t.map(a=>this.renderRow(a))}</div>`}renderRow(e){const t=S(e),a=t.filter(l=>this.entities[l]?.state==="on").length,i=e.temperature?parseFloat(this.entities[e.temperature]?.state??""):NaN,s=e.devices.find(l=>k(l.id)==="lock"),o=s&&this.entities[s.id]?.state==="unlocked",r=this.open===e.id,n=`${Rt(t.length,a,e.devices.length)}${Number.isNaN(i)?"":` · ${A(i,0)}°`}`;return c`<div class=${p({r:!0,on:a>0})}>
      <div class="h">
        <button class="nmb" aria-expanded=${r} @click=${()=>this.open=r?null:e.id}>${e.name}</button>
        <span>${n}</span>
        ${o?c`<button class="tg warn" @click=${()=>this.call("lock","lock",s.id)}>trancar</button>`:t.length?c`<button class="tg" @click=${()=>this.call("light",a?"turn_off":"turn_on",t)}>${a?"on":"off"}</button>`:c`<button class="tg" @click=${()=>this.openRoom(e.id)}>abrir</button>`}
      </div>
      ${r?c`<div class="ctrls">
            ${t.map(l=>this.lineControl(l,e))}
            <button class="more" @click=${()=>this.openRoom(e.id)}>ver tudo em ${e.name.toLowerCase()} →</button>
          </div>`:d}
    </div>`}lineControl(e,t){const a=this.entities[e],i=`line-${e}`,s=this.drag?.key===i?this.drag.value:Y(a),o=r=>{const n=r.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(r.clientX-n.left)/n.width*100)))};return c`<div class="lc">
      <span>${this.name(e,t)}</span><b>${s?`${s}%`:"—"}</b>
      <div class="line" role="slider" aria-label=${this.name(e,t)} aria-valuenow=${s} aria-valuemin="0" aria-valuemax="100"
        @pointerdown=${r=>{r.currentTarget.setPointerCapture(r.pointerId),this.drag={key:i,value:o(r)}}}
        @pointermove=${r=>{this.drag?.key===i&&r.buttons&&(this.drag={key:i,value:o(r)})}}
        @pointerup=${r=>{const n=o(r);this.call("light",n?"turn_on":"turn_off",e,n?{brightness_pct:n}:{}),this.drag={key:i,value:n},window.setTimeout(()=>{this.drag?.key===i&&(this.drag=null)},1500)}}><i style=${`width:${s}%`}></i></div>
    </div>`}};gt.styles=[ct,X`
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
  `];Ee([w()],gt.prototype,"open",2);gt=Ee([K("pine3-editorial")],gt);var ds=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,Nt=(e,t,a,i)=>{for(var s=i>1?void 0:i?hs(t,a):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&ds(t,a,s),s};const us=[{id:"home",name:"Casa"},{id:"@divisoes",name:"Div."},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Seg."},{id:"@cenas",name:"Cenas"}],I=270,ps=16,ms=30;let ot=class extends b{constructor(){super(...arguments),this.faderRoom=null,this.dial=null}render(){if(!this.home)return d;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(s=>s.id===this.view),t=e?"@divisoes":this.view,a=us.filter(s=>s.id==="home"||s.id==="@divisoes"||this.viewWidgets(s.id).length),i=z(this.home,this.entities).alerts;return c`<div class=${p({vd:!0,instrumento:!0,editing:!!this.editing})}>
      <nav class="bank" aria-label="Vistas">
        ${a.map(s=>c`<button class=${p({key:!0,on:s.id===t})} @click=${()=>this.openRoom(s.id)}>
          <span class=${p({led:!0,on:s.id===t,alarm:s.id==="@seguranca"&&i>0})}></span>${s.name}
        </button>`)}
        ${this.settingsButton?c`<button class="key set" @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}><span class="led"></span>Def.</button>`:d}
      </nav>
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderSwitches(!0):this.view.startsWith("@")?this.renderView(this.view):this.renderConsole()}</main>
      ${this.sheet?this.renderSheet(this.sheet):d}
    </div>`}lightRooms(){return this.home.rooms.filter(e=>!e.hidden&&S(e).length)}renderConsole(){const e=this.home.weather?this.entities[this.home.weather]:void 0,t=e?.attributes.temperature,a=this.warnings[0],i=[...this.home.scenes,...this.home.scripts].filter(n=>this.entities[n]).slice(0,3),s=this.home.rooms.flatMap(n=>n.devices).find(n=>!n.hidden&&k(n.id)==="lock"),o=s?this.entities[s.id]?.state==="locked":!0,r=this.now.toLocaleDateString("pt-PT",{weekday:"short",day:"numeric",month:"short"}).replace(/\./g,"");return c`<div class="console">
      <section class="mod disp">
        <div class="lab"><span>Hora</span><span>${r}</span></div>
        <b>${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</b>
        <span class="ln">${e?`${t!=null?`${Math.round(t)}° · `:""}${ht[e.state]??e.state}`:""}${a?` · aviso ${a.awarenessTypeName.toLowerCase()}`:""}</span>
        <div class="keys">
          ${i.map((n,l)=>c`<button class=${p({btn:!0,on:this.flash===n})} @click=${()=>this.tap({key:n,kind:"scene",size:"s",name:"",entity:n})}>
            ${l+1} ${(this.entities[n].attributes.friendly_name??n).split(" ")[0]}</button>`)}
          ${s?c`<button class=${p({btn:!0,lockw:!o})} @click=${()=>o?this.sheet=s.id:this.call("lock","lock",s.id)}>
                <span class=${p({led:!0,g:o,on:!0})}></span>${o?"Tranc.":"Porta"}</button>`:d}
        </div>
      </section>
      ${this.renderKnob()}
      ${this.renderFaders()}
      ${this.renderSwitches(!1)}
    </div>`}renderKnob(){const e=this.home.rooms.flatMap(y=>y.devices.map(H=>({d:H,r:y}))).find(({d:y})=>!y.hidden&&k(y.id)==="climate");if(!e)return c`<section class="mod knob"><div class="lab"><span>Clima</span></div><p class="k">Sem termóstato</p></section>`;const t=this.entities[e.d.id],a=!!t&&t.state!=="off",i=t?.attributes.min_temp??ps,s=Math.min(t?.attributes.max_temp??ms,i+14),o=this.dial??t?.attributes.temperature??i,r=Math.max(0,Math.min(1,(o-i)/(s-i))),n=-I/2+r*I,l=Array.from({length:29},(y,H)=>{const Z=(-I/2+H*I/28)*Math.PI/180,lt=H%4?44:41,Oe=a&&H/28<=r;return $`<line x1=${50+47*Math.sin(Z)} y1=${50-47*Math.cos(Z)} x2=${50+lt*Math.sin(Z)} y2=${50-lt*Math.cos(Z)}
        stroke=${Oe?"#ff6a1a":"#6b6a66"} stroke-width=${H%4?1:1.8} stroke-linecap="round"/>`}),u=t?.attributes.target_temp_step??.5,h=y=>{const H=y.currentTarget.getBoundingClientRect(),Z=Math.atan2(y.clientX-(H.left+H.width/2),-(y.clientY-(H.top+H.height/2)))*180/Math.PI,lt=Math.max(0,Math.min(1,(Z+I/2)/I));return Math.round((i+lt*(s-i))/u)*u},m=(t?.attributes.hvac_modes??[]).filter(y=>["cool","heat","off","auto","heat_cool"].includes(y)).slice(0,3),g={cool:"Frio",heat:"Calor",off:"Off",auto:"Auto",heat_cool:"Auto"},V=t?.attributes.current_temperature;return c`<section class="mod knob">
      <div class="lab"><span>Clima · ${e.r.name}${V!=null?` · ${A(V)}°`:""}</span><span class=${p({led:!0,on:a})}></span></div>
      <div class="dialw" role="slider" aria-label="Temperatura" aria-valuenow=${o} aria-valuemin=${i} aria-valuemax=${s}
        @pointerdown=${y=>{a&&(y.currentTarget.setPointerCapture(y.pointerId),this.dial=h(y))}}
        @pointermove=${y=>{this.dial!=null&&y.buttons&&(this.dial=h(y))}}
        @pointerup=${y=>{if(this.dial==null)return;const H=h(y);this.call("climate","set_temperature",e.d.id,{temperature:H}),window.setTimeout(()=>this.dial=null,1500)}}>
        <svg viewBox="0 0 100 100" aria-hidden="true">${l}</svg>
        <div class="kn"><i style=${`transform:rotate(${a?n:-I/2}deg)`}></i></div>
        <div class="ktx"><div>${a?`${A(o)}°`:"off"}<small>${a?"roda":"desligado"}</small></div></div>
      </div>
      <div class="keys">${m.map(y=>c`<button class=${p({btn:!0,on:t?.state===y})} @click=${()=>this.call("climate","set_hvac_mode",e.d.id,{hvac_mode:y})}>${g[y]}</button>`)}</div>
    </section>`}renderFaders(){const e=this.lightRooms(),t=e.find(o=>o.id===this.faderRoom)??e[0];if(!t)return c`<section class="mod fad"><div class="lab"><span>Faders</span></div></section>`;const a=t.devices.filter(o=>!o.hidden&&k(o.id)==="cover"&&this.entities[o.id]?.attributes.supported_features&4),i=[...S(t).map(o=>({id:o,v:Y(this.entities[o]),n:this.name(o,t),cover:!1})),...a.map(o=>({id:o.id,v:this.entities[o.id]?.attributes.current_position??0,n:o.name,cover:!0}))].slice(0,4),s=o=>{const r=o.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(r.bottom-o.clientY)/r.height*100)))};return c`<section class="mod fad">
      <div class="lab"><span>Faders</span><span class="led g on"></span></div>
      <div class="sel">${e.map(o=>c`<button class=${p({btn:!0,on:o.id===t.id})} @click=${()=>this.faderRoom=o.id}>${o.name.slice(0,5)}</button>`)}</div>
      <div class="faders">${i.map(o=>{const r=`fd-${o.id}`,n=this.drag?.key===r?this.drag.value:o.v;return c`<div class="fd"><b>${n}</b>
          <div class="tk" role="slider" aria-label=${o.n} aria-valuenow=${n} aria-valuemin="0" aria-valuemax="100"
            @pointerdown=${l=>{l.currentTarget.setPointerCapture(l.pointerId),this.drag={key:r,value:s(l)}}}
            @pointermove=${l=>{this.drag?.key===r&&l.buttons&&(this.drag={key:r,value:s(l)})}}
            @pointerup=${l=>{const u=s(l);o.cover?this.call("cover","set_cover_position",o.id,{position:u}):this.call("light",u?"turn_on":"turn_off",o.id,u?{brightness_pct:u}:{}),this.drag={key:r,value:u},window.setTimeout(()=>{this.drag?.key===r&&(this.drag=null)},1500)}}><div class="cap" style=${`bottom:calc((100% - var(--u) * 2.1) * ${n/100})`}></div></div>
          <span>${o.n}</span></div>`})}</div>
    </section>`}renderSwitches(e){const t=e?this.home.rooms.filter(i=>!i.hidden&&i.devices.some(s=>!s.hidden)):this.lightRooms().slice(0,6),a=z(this.home,this.entities).lightsOn;return c`<section class=${p({mod:!0,sw:!0,full:e})}>
      <div class="lab"><span>${e?"Divisões":"Luzes"}</span><span>${a} acesa${a===1?"":"s"}</span></div>
      <div class="rows">${t.map(i=>{const s=S(i),o=s.filter(n=>this.entities[n]?.state==="on"),r=o.length?Math.max(...o.map(n=>Y(this.entities[n]))):0;return c`<div class="rk">
          <button class=${p({rocker:!0,on:o.length>0})} aria-label=${`Luzes de ${i.name}`} ?disabled=${!s.length}
            @click=${()=>this.call("light",o.length?"turn_off":"turn_on",s)}><i></i></button>
          <button class="rkn" @click=${()=>this.openRoom(i.id)}><b>${i.name}</b><span>${s.length?o.length?`${r}%`:"off":`${i.devices.length} disp.`}</span></button>
        </div>`})}</div>
    </section>`}};ot.styles=[ct,X`
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
  `];Nt([w()],ot.prototype,"faderRoom",2);Nt([w()],ot.prototype,"dial",2);ot=Nt([K("pine3-instrumento")],ot);const Te={vidro:"pine3-vidro",bento:"pine3-bento",moldura:"pine3-moldura",editorial:"pine3-editorial",instrumento:"pine3-instrumento"},he=e=>na(Te[e]??"pine3-vidro"),Os=Object.values(Te).join(", "),_t={vidro:"linear-gradient(180deg,#262b31,#0f1113)",bento:"linear-gradient(135deg,#ffd166 0 33%,#efe9df 33% 66%,#ff7a50 66%)",moldura:"linear-gradient(180deg,#f2b27a,#7c5a8c 60%,#1a1f30)",editorial:"repeating-linear-gradient(180deg,#f1ece3 0 22%,#14110d 22% 24%)",instrumento:"radial-gradient(circle at 60% 50%,#ff6a1a 0 12%,#3a3a38 13%)",orbita:"radial-gradient(circle,#3a3f5a 0 30%,#20232f 31%)",carteira:"linear-gradient(180deg,#e9e4da,#cfc6b6)",lente:"linear-gradient(135deg,#e6e9ee,#c9ced6)"},Lt={vidro:"Vidro",bento:"Bento",moldura:"Moldura",editorial:"Editorial",instrumento:"Instrumento",orbita:"Órbita",carteira:"Carteira",lente:"Lente"},fs=["vidro","bento","moldura","editorial","instrumento"],gs={grafite:"Grafite (escuro)",claro:"Claro",auto:"Automático (pôr do sol)"},ue={AVR:"Aveiro",BJA:"Beja",BRG:"Braga",BGC:"Bragança",CBO:"Castelo Branco",CBR:"Coimbra",EVR:"Évora",FAR:"Faro",GDA:"Guarda",LRA:"Leiria",LSB:"Lisboa",PTG:"Portalegre",PTO:"Porto",STM:"Santarém",STB:"Setúbal",VCT:"Viana do Castelo",VRL:"Vila Real",VIS:"Viseu",MCN:"Madeira · Costa Norte",MCS:"Madeira · Costa Sul",MRM:"Madeira · Regiões Montanhosas",MPS:"Porto Santo",AOR:"Açores · Grupo Oriental",ACE:"Açores · Grupo Central",AOC:"Açores · Grupo Ocidental"},bs=[[0,"Nunca"],[1,"1 minuto"],[2,"2 minutos"],[5,"5 minutos"],[10,"10 minutos"],[30,"30 minutos"]],vs={auto:"Automático (dia 50%, noite 12%)",low:"Sempre baixo (12%)",off:"Não mexer"};var $s=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,_=(e,t,a,i)=>{for(var s=i>1?void 0:i?ys(t,a):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&$s(t,a,s),s};const ws=[{id:"aparencia",name:"Aparência",icon:Na},{id:"divisoes",name:"Divisões",icon:li},{id:"entidades",name:"Entidades",icon:Aa},{id:"ambiente",name:"Face ambiente",icon:hi},{id:"casa",name:"Casa",icon:Va},{id:"ecras",name:"Ecrãs e painéis",icon:si},{id:"sistema",name:"Sistema",icon:we}],ks=["vidro","bento","moldura","editorial","instrumento","orbita","carteira","lente"],xs={bento:"pílulas no topo",moldura:"deslizar, com pontos no canto",editorial:"índice em palavras",instrumento:"banco de teclas"},bt=1334,zt=800,E=e=>$`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`;let C=class extends q{constructor(){super(...arguments),this.entities={},this.dashboards=[],this.dashboardId="",this.version="",this.start="aparencia",this.code="",this.section="aparencia",this.screens=[],this.pending=[],this.screenName="",this.message=null,this.scale=.4,this.pvView="home",this.original={},this.query="",this.pinSet=null,this.newPin="",this.diagnostics=!1,this.iconFor=null}connectedCallback(){super.connectedCallback(),this.section=this.start,this.loadScreens(),this.ws({type:"pine3_home/pin/status"}).then(e=>this.pinSet=e.set).catch(()=>{}),this.timer=window.setInterval(()=>this.loadPending(),4e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.resize?.disconnect(),this.thumbResize?.disconnect()}updated(e){const t=this.renderRoot.querySelector(".pv");t&&!this.resize&&(this.resize=new ResizeObserver(()=>this.scale=t.clientWidth/bt),this.resize.observe(t)),!t&&this.resize&&(this.resize.disconnect(),this.resize=void 0);const a=this.renderRoot.querySelector(".styles"),i=a?.querySelector(".thumb-live");a&&i&&(!this.thumbResize||this.thumbGrid!==a)&&(this.thumbResize?.disconnect(),this.thumbGrid=a,this.thumbResize=new ResizeObserver(()=>a.style.setProperty("--ts",String(i.clientWidth/bt))),this.thumbResize.observe(i)),e.has("start")&&(this.section=this.start)}get dash(){return this.dashboards.find(e=>e.id===this.dashboardId)??this.dashboards[0]}ws(e){return this.conn.sendMessagePromise(e)}async run(e,t){this.message=null;try{await e(),t&&(this.message={ok:!0,text:t})}catch(a){this.message={ok:!1,text:a.message??String(a)}}}async loadScreens(){try{this.screens=(await this.ws({type:"pine3_home/screens"})).screens,await this.loadPending()}catch{}}async loadPending(){if(this.section==="ecras")try{this.pending=(await this.ws({type:"pine3_home/screens/pending"})).pending}catch{}}save(e){const t=this.dash;this.original[t.id]||(this.original={...this.original,[t.id]:{...t}});const a={...t,...e};return this.dashboards=this.dashboards.map(i=>i.id===t.id?a:i),this.emit("dashboards",this.dashboards),this.run(async()=>{const i=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:t.id,name:a.name,style:a.style,...e}});this.dashboards=i.dashboards,this.emit("dashboards",i.dashboards)})}emit(e,t){this.dispatchEvent(new CustomEvent(`pine3-${e}`,{detail:t,bubbles:!0,composed:!0}))}close(){this.emit("settings-close",null)}render(){return this.dash?c`<div class="wrap">
      <nav class="side" aria-label="Definições">
        <div class="top">
          <button class="x" aria-label="Fechar as definições" @click=${()=>this.close()}>${E(ye)}</button>
          <b>Definições</b>
        </div>
        ${ws.map(e=>c`<button class=${p({item:!0,on:e.id===this.section})} @click=${()=>{this.section=e.id,this.message=null,this.loadPending()}}>
          <i>${E(e.icon)}</i>${e.name}</button>`)}
        ${Object.keys(this.original).length?c`<button class="undo" @click=${()=>this.undo()}>Desfazer alterações</button>`:d}
        <button class="done" @click=${()=>this.close()}>Concluído</button>
      </nav>
      <main class="content">
        ${this.message?c`<p class=${p({msg:!0,bad:!this.message.ok})} role="status">${this.message.text}</p>`:d}
        ${this.section==="aparencia"?this.renderAppearance():d}
        ${this.section==="divisoes"?this.renderRooms():d}
        ${this.section==="entidades"?this.renderEntities():d}
        ${this.section==="ambiente"?this.renderAmbient():d}
        ${this.section==="casa"?this.renderHouse():d}
        ${this.section==="ecras"?this.renderScreens():d}
        ${this.section==="sistema"?this.renderSystem():d}
      </main>
    </div>`:d}dashPicker(){return this.dashboards.length<2?d:c`<div class="dpick">
      <span>A editar o painel</span>
      ${this.dashboards.map(e=>c`<button class=${p({chip:!0,on:e.id===this.dash.id})} @click=${()=>this.emit("dashboard-select",e.id)}>${e.name}</button>`)}
    </div>`}renderAppearance(){const e=this.dash,t=he(e.style),a=e.style==="vidro";return c`<section class="card">
        <h2>Aparência</h2>
        <p class="muted">O estilo, o tema e a navegação do painel <b>${e.name}</b>. Vês o resultado já aqui; fica guardado no Home Assistant para todos os ecrãs que mostram este painel.</p>
        ${this.dashPicker()}
        <div class="pv" style=${`height:${Math.round(zt*this.scale)}px`} aria-label="Pré-visualização">
          <div class="pvin" style=${`transform:scale(${this.scale})`}>
            ${Kt`<${t} .home=${this.home} .entities=${this.entities} .dashboard=${e} .conn=${this.conn} .startView=${this.pvView}></${t}>`}
          </div>
        </div>
        <div class="pvviews" aria-label="Vista na pré-visualização">
          ${this.previewViews().map(([i,s])=>c`<button class=${p({chip:!0,on:i===this.pvView})} @click=${()=>this.pvView=i}>${s}</button>`)}
        </div>
      </section>
      <section class="card">
        <h3>Estilo</h3>
        <div class="styles">${ks.map(i=>{const s=fs.includes(i);return c`<button class=${p({sty:!0,on:i===e.style})} ?disabled=${!s} aria-pressed=${i===e.style}
            @click=${()=>this.save({style:i})}>
            ${s?this.thumb(i):c`<i style=${`background:${_t[i]}`}></i>`}
            <span>${Lt[i]}${s?"":c`<small>em breve</small>`}</span></button>`})}</div>
      </section>
      <section class="card">
        <h3>Tema</h3>
        <p class="muted">${a?"Claro, escuro, ou escuro ao pôr do sol.":"Só no Vidro: os outros estilos têm a sua própria paleta."}</p>
        <div class="seg">${Object.entries(gs).map(([i,s])=>c`<button class=${p({on:i===e.theme})} ?disabled=${!a} @click=${()=>this.save({theme:i})}>${s}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Navegação</h3>
        <p class="muted">${a?"A dock do Vidro, à esquerda ou em baixo.":`Este estilo navega com ${xs[e.style]??"a sua própria navegação"}.`}</p>
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
        <div class="seg">${bs.map(([t,a])=>c`<button class=${p({on:t===(e.ambient_after??2)})} @click=${()=>this.save({ambient_after:t})}>${a}</button>`)}</div>
      </section>
      <section class="card">
        <h3>Brilho na face ambiente</h3>
        <p class="muted">Só nos tablets com a app Pine3 Wallpanel. Fora da face ambiente, o brilho é o do sistema.</p>
        <div class="seg">${Object.entries(vs).map(([t,a])=>c`<button class=${p({on:t===(e.ambient_brightness??"auto")})} @click=${()=>this.save({ambient_brightness:t})}>${a}</button>`)}</div>
      </section>`}renderHouse(){const e=this.home.settings?.ipma_area??"";return c`<section class="card">
      <h2>Casa</h2>
      <p class="muted">O que é da casa e vale para todos os painéis.</p>
      <h3>Avisos do IPMA</h3>
      <p class="muted">Os avisos da tua área aparecem no cartão do tempo, na face ambiente e no topo de cada estilo.</p>
      <select class="sel" aria-label="Área dos avisos do IPMA" @change=${t=>{const a=t.target.value;this.run(()=>this.ws({type:"pine3_home/home/settings",ipma_area:a||null}),a?`Avisos do IPMA: ${ue[a]}.`:"Avisos do IPMA desligados.")}}>
        <option value="" ?selected=${!e}>Sem avisos</option>
        ${Object.entries(ue).map(([t,a])=>c`<option value=${t} ?selected=${t===e}>${a}</option>`)}
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
        ${this.pending.length?c`<p class="muted">À espera: ${this.pending.map(t=>c`<button class="chip" @click=${()=>this.code=t.code}>${t.code}</button>`)}</p>`:d}
      </section>
      <section class="card">
        <h3>Ecrãs</h3>
        ${this.screens.length?c`<div class="list">${this.screens.map(t=>c`<div class="row">
              <i class="thumb" style=${`background:${_t[this.dashboards.find(a=>a.id===t.dashboard)?.style??"vidro"]}`}></i>
              <span class="grow"><input class="txt inline" .value=${t.name} aria-label="Nome do ecrã" @change=${a=>this.updateScreen(t,{name:a.target.value.trim()||t.name})} />
                <small>${t.active===!1?"token revogado":t.last_used?`visto ${new Date(t.last_used).toLocaleString("pt-PT")}`:"ainda não ligou"}</small></span>
              <select class="sel" aria-label=${`Painel de ${t.name}`} @change=${a=>this.updateScreen(t,{dashboard:a.target.value})}>
                ${this.dashboards.map(a=>c`<option value=${a.id} ?selected=${a.id===t.dashboard}>${a.name} · ${Lt[a.style]}</option>`)}
              </select>
              <button class="danger" @click=${()=>this.removeScreen(t)}>Remover</button>
            </div>`)}</div>`:c`<p class="muted">Ainda não há ecrãs emparelhados.</p>`}
      </section>
      <section class="card">
        <h3>Painéis</h3>
        <p class="muted">Cada painel tem o seu estilo e a sua disposição. Cada ecrã mostra um painel.</p>
        <div class="list">${this.dashboards.map(t=>c`<div class="row">
          <i class="thumb" style=${`background:${_t[t.style]}`}></i>
          <span class="grow"><input class="txt inline" .value=${t.name} aria-label="Nome do painel" @change=${a=>this.renameDashboard(t,a.target.value.trim())} />
            <small>${Lt[t.style]} · ${this.screens.filter(a=>a.dashboard===t.id).length} ecrã(s)</small></span>
          ${t.id===this.dash.id?c`<span class="badge">a ver</span>`:c`<button @click=${()=>this.emit("dashboard-select",t.id)}>Ver e editar</button>`}
          ${this.dashboards.length>1?c`<button class="danger" @click=${()=>this.removeDashboard(t)}>Remover</button>`:d}
        </div>`)}</div>
        <button class="add" @click=${()=>this.addDashboard()}>${E(Ce)} Novo painel</button>
      </section>`}renderSystem(){const e=Object.keys(this.dash.layouts??{});return c`<section class="card">
      <h2>Sistema</h2>
      <div class="row"><span class="grow">Versão<small>Pine3 Home ${this.version}</small></span></div>
      <div class="row"><span class="grow">Disposição de ${this.dash.name}<small>${e.length?`arrumada à mão em ${e.length} vista(s)`:"automática"}</small></span>
        ${e.length?c`<button @click=${()=>this.resetLayouts()}>Repor a automática</button>`:d}</div>
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
        ${this.pinSet?c`<button class="danger" @click=${()=>this.setPin(null)}>Remover</button>`:d}
      </div>
    </section>`}get hs(){return this.home.settings??{}}saveHouse(e){return this.home={...this.home,settings:{...this.hs,...e}},this.run(()=>this.ws({type:"pine3_home/home/settings",...e}))}renderRooms(){const e=this.home.rooms,t=this.hs.hidden_rooms??[],a=(i,s)=>{const o=i+s;if(o<0||o>=e.length)return;const r=e.map(n=>n.id);[r[i],r[o]]=[r[o],r[i]],this.home={...this.home,rooms:r.map(n=>e.find(l=>l.id===n))},this.saveHouse({room_order:r})};return c`<section class="card">
      <h2>Divisões</h2>
      <p class="muted">A ordem, o ícone e as divisões que aparecem. Vale para a dock, a Casa e todos os estilos e painéis. As divisões vêm das áreas do Home Assistant.</p>
      <div class="list">${e.map((i,s)=>{const o=!t.includes(i.id);return c`<div class=${p({row:!0,off:!o})}>
          <span class="mv">
            <button class="ib" aria-label=${`Subir ${i.name}`} ?disabled=${s===0} @click=${()=>a(s,-1)}>${E($a)}</button>
            <button class="ib" aria-label=${`Descer ${i.name}`} ?disabled=${s===e.length-1} @click=${()=>a(s,1)}>${E(ba)}</button>
          </span>
          <button class="ricon" aria-label=${`Ícone de ${i.name}`} aria-expanded=${this.iconFor===i.id} @click=${()=>this.iconFor=this.iconFor===i.id?null:i.id}>${E(yt(i.icon))}</button>
          <span class="grow">${i.name}<small>${i.devices.filter(r=>!r.hidden).length} de ${i.devices.length} dispositivos${i.floor?` · ${i.floor}`:""}</small></span>
          <button class="sw" role="switch" aria-checked=${o} aria-label=${`Mostrar ${i.name}`}
            @click=${()=>void this.saveHouse({hidden_rooms:o?[...t,i.id]:t.filter(r=>r!==i.id)})}></button>
          ${this.iconFor===i.id?c`<div class="icons">${vi.map(r=>c`<button class=${p({ib:!0,on:r===i.icon})} aria-label=${r.replace("mdi:","")}
                @click=${()=>{this.iconFor=null,this.saveHouse({room_icons:{...this.hs.room_icons??{},[i.id]:r}})}}>${E(yt(r))}</button>`)}</div>`:d}
        </div>`})}</div>
    </section>`}visible(e){return e.primary?!(this.hs.hidden??[]).includes(e.id):(this.hs.shown??[]).includes(e.id)}toggleEntity(e){const t=this.hs.hidden??[],a=this.hs.shown??[];return e.primary?this.saveHouse({hidden:t.includes(e.id)?t.filter(i=>i!==e.id):[...t,e.id]}):this.saveHouse({shown:a.includes(e.id)?a.filter(i=>i!==e.id):[...a,e.id]})}renderEntities(){const e=this.query.trim().toLowerCase(),t=i=>(this.diagnostics||!i.category)&&(!e||`${i.name} ${i.id}`.toLowerCase().includes(e)),a=this.home.rooms.map(i=>({r:i,ents:(i.entities??[]).filter(t).sort((s,o)=>Number(o.primary)-Number(s.primary))})).filter(i=>i.ents.length);return c`<section class="card">
        <h2>Entidades</h2>
        <p class="muted">O que aparece nos painéis. Cada dispositivo tem um cartão com a sua entidade <b>principal</b>; as <b>secundárias</b> (o consumo de uma tomada, o interruptor de uma TV, um sensor de diagnóstico) podem ter um cartão próprio.</p>
        <label class="search">${E(Ta)}<input type="search" placeholder="Procurar por nome ou entidade" aria-label="Procurar entidade"
          .value=${this.query} @input=${i=>this.query=i.target.value} /></label>
        <div class="row"><span>Mostrar entidades de diagnóstico e configuração</span>
          <button class="sw" role="switch" aria-checked=${this.diagnostics} aria-label="Mostrar entidades de diagnóstico" @click=${()=>this.diagnostics=!this.diagnostics}></button></div>
      </section>
      ${a.length?a.map(({r:i,ents:s})=>this.entityRoom(i,s)):c`<section class="card"><p class="muted">Nenhuma entidade com "${this.query}".</p></section>`}`}entityRoom(e,t){const a=(e.entities??[]).filter(s=>this.diagnostics||!s.category),i=a.filter(s=>this.visible(s)).length;return c`<section class="card">
      <h3 class="rh">${E(yt(e.icon))} ${e.name} <small>${i} de ${a.length} visíveis</small></h3>
      <div class="list">${t.map(s=>{const o=this.visible(s);return c`<div class=${p({row:!0,off:!o})}>
          <span class="grow">${this.hs.names?.[s.id]??s.name}<small class="mono">${s.id}</small></span>
          ${this.typePicker(e,s)}
          <span class=${p({badge:!0,sec:!s.primary})}>${s.primary?"Principal":s.category?"Diagnóstico":"Secundária"}</span>
          <button class="sw" role="switch" aria-checked=${o} aria-label=${`Mostrar ${s.name}`} @click=${()=>this.toggleEntity(s)}></button>
        </div>`})}</div>
    </section>`}typePicker(e,t){const a=He[t.id.split(".")[0]]??[];if(a.length<2)return d;const i=e.devices.find(r=>r.id===t.id),s=At(t.id,this.entities[t.id],{name:i?.name??t.name,model:i?.model,manufacturer:i?.manufacturer}),o=this.hs.types?.[t.id]??s;return c`<select class="sel tsel" aria-label=${`Tipo de ${t.name}`} @change=${r=>{const n=r.target.value,l={...this.hs.types??{}};n===s?delete l[t.id]:l[t.id]=n,this.saveHouse({types:l})}}>${a.map(r=>c`<option value=${r} ?selected=${r===o}>${F[r].name}${r===s?" (automático)":""}</option>`)}</select>`}previewViews(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden)).map(t=>[t.id,t.name]);return[["home","Casa"],...e,["@clima","Clima"],["@seguranca","Segurança"],["@cenas","Cenas"]]}thumb(e){const t=he(e),a={...this.dash,style:e};return c`<i class="thumb-live"><span class="tin">
      ${Kt`<${t} preview .home=${this.home} .entities=${this.entities} .dashboard=${a} .conn=${this.conn}></${t}>`}
    </span></i>`}undo(){const e=this.original;return this.run(async()=>{let t=this.dashboards;for(const a of Object.values(e))t=(await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:a.id,name:a.name,style:a.style,dock:a.dock,theme:a.theme,screen_edit:a.screen_edit!==!1,...a.ambient_after!=null?{ambient_after:a.ambient_after}:{},...a.ambient_brightness?{ambient_brightness:a.ambient_brightness}:{}}})).dashboards;this.dashboards=t,this.original={},this.emit("dashboards",t)},"Alterações desfeitas.")}setPin(e){return this.run(async()=>{const t=await this.ws({type:"pine3_home/pin/set",pin:e});this.pinSet=t.set,this.newPin=""},e?"PIN guardado.":"PIN removido: os ecrãs deixam de abrir as definições.")}approve(){const e=this.screenName.trim()||"Ecrã";return this.run(async()=>{await this.ws({type:"pine3_home/screens/approve",code:this.code,name:e,dashboard:this.dash.id}),this.code="",this.screenName="",location.search.includes("code=")&&history.replaceState(null,"",location.pathname),await this.loadScreens()},`${e} emparelhado. O ecrã liga-se dentro de segundos.`)}updateScreen(e,t){return this.run(async()=>{await this.ws({type:"pine3_home/screens/update",screen_id:e.id,...t}),await this.loadScreens()})}removeScreen(e){if(confirm(`Remover ${e.name}? O ecrã volta a pedir um código.`))return this.run(async()=>{await this.ws({type:"pine3_home/screens/remove",screen_id:e.id}),await this.loadScreens()},`${e.name} removido.`)}renameDashboard(e,t){if(!(!t||t===e.name))return this.run(async()=>{const a=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:e.id,name:t,style:e.style}});this.dashboards=a.dashboards,this.emit("dashboards",a.dashboards)})}addDashboard(){let e=this.dashboards.length+1;for(;this.dashboards.some(a=>a.id===`painel-${e}`);)e++;const t={id:`painel-${e}`,name:`Painel ${e}`,style:"vidro"};return this.run(async()=>{const a=await this.ws({type:"pine3_home/dashboards/save",dashboard:t});this.dashboards=a.dashboards,this.emit("dashboards",a.dashboards),this.emit("dashboard-select",t.id),this.section="aparencia"},`${t.name} criado: escolhe o estilo.`)}removeDashboard(e){if(confirm(`Remover o painel ${e.name}? Os ecrãs que o mostram passam para o primeiro painel.`))return this.run(async()=>{const t=await this.ws({type:"pine3_home/dashboards/remove",dashboard_id:e.id});this.dashboards=t.dashboards,this.emit("dashboards",t.dashboards),e.id===this.dash.id&&this.emit("dashboard-select",t.dashboards[0].id),await this.loadScreens()},`${e.name} removido.`)}resetLayouts(){if(confirm(`Repor a disposição automática de todas as vistas de ${this.dash.name}?`))return this.run(async()=>{for(const t of Object.keys(this.dash.layouts??{}))await this.ws({type:"pine3_home/dashboards/layout",dashboard_id:this.dash.id,view:t,layout:null});const e=await this.ws({type:"pine3_home/dashboards"});this.dashboards=e.dashboards,this.emit("dashboards",e.dashboards)},"Disposição reposta.")}};C.styles=X`
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
      width: ${bt}px;
      height: ${zt}px;
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
      width: ${bt}px;
      height: ${zt}px;
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
  `;_([L({attribute:!1})],C.prototype,"conn",2);_([L({attribute:!1})],C.prototype,"home",2);_([L({attribute:!1})],C.prototype,"entities",2);_([L({attribute:!1})],C.prototype,"dashboards",2);_([L()],C.prototype,"dashboardId",2);_([L()],C.prototype,"version",2);_([L()],C.prototype,"start",2);_([L()],C.prototype,"code",2);_([w()],C.prototype,"section",2);_([w()],C.prototype,"screens",2);_([w()],C.prototype,"pending",2);_([w()],C.prototype,"screenName",2);_([w()],C.prototype,"message",2);_([w()],C.prototype,"scale",2);_([w()],C.prototype,"pvView",2);_([w()],C.prototype,"original",2);_([w()],C.prototype,"query",2);_([w()],C.prototype,"pinSet",2);_([w()],C.prototype,"newPin",2);_([w()],C.prototype,"diagnostics",2);_([w()],C.prototype,"iconFor",2);C=_([K("pine3-settings")],C);export{d as A,R as E,Os as S,q as a,c as b,Vs as c,Hs as d,Ss as e,Es as f,zs as g,Ts as h,X as i,Me as j,Le as k,Ae as l,As as m,L as n,Ps as p,w as r,he as s,K as t,Kt as u};
