/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=globalThis,xt=ot.ShadowRoot&&(ot.ShadyCSS===void 0||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ct=Symbol(),Vt=new WeakMap;let ae=class{constructor(t,a,i){if(this._$cssResult$=!0,i!==Ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=a}get styleSheet(){let t=this.o;const a=this.t;if(xt&&t===void 0){const i=a!==void 0&&a.length===1;i&&(t=Vt.get(a)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Vt.set(a,t))}return t}toString(){return this.cssText}};const ke=e=>new ae(typeof e=="string"?e:e+"",void 0,Ct),at=(e,...t)=>{const a=e.length===1?e[0]:t.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new ae(a,e,Ct)},xe=(e,t)=>{if(xt)e.adoptedStyleSheets=t.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(const a of t){const i=document.createElement("style"),r=ot.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=a.cssText,e.appendChild(i)}},zt=xt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let a="";for(const i of t.cssRules)a+=i.cssText;return ke(a)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ce,defineProperty:Le,getOwnPropertyDescriptor:_e,getOwnPropertyNames:Ae,getOwnPropertySymbols:Me,getPrototypeOf:He}=Object,E=globalThis,St=E.trustedTypes,Ve=St?St.emptyScript:"",ze=E.reactiveElementPolyfillSupport,q=(e,t)=>e,lt={toAttribute(e,t){switch(t){case Boolean:e=e?Ve:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=e!==null;break;case Number:a=e===null?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch{a=null}}return a}},Lt=(e,t)=>!Ce(e,t),Et={attribute:!0,type:String,converter:lt,reflect:!1,useDefault:!1,hasChanged:Lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);let B=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,a=Et){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(t,a),!a.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,a);r!==void 0&&Le(this.prototype,t,r)}}static getPropertyDescriptor(t,a,i){const{get:r,set:s}=_e(this.prototype,t)??{get(){return this[a]},set(n){this[a]=n}};return{get:r,set(n){const o=r?.call(this);s?.call(this,n),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const t=He(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const a=this.properties,i=[...Ae(a),...Me(a)];for(const r of i)this.createProperty(r,a[r])}const t=this[Symbol.metadata];if(t!==null){const a=litPropertyMetadata.get(t);if(a!==void 0)for(const[i,r]of a)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[a,i]of this.elementProperties){const r=this._$Eu(a,i);r!==void 0&&this._$Eh.set(r,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const a=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)a.unshift(zt(r))}else t!==void 0&&a.push(zt(t));return a}static _$Eu(t,a){const i=a.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,a=this.constructor.elementProperties;for(const i of a.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,a,i){this._$AK(t,i)}_$ET(t,a){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:lt).toAttribute(a,i.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,a){const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:lt;this._$Em=r;const o=n.fromAttribute(a,s.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(t,a,i,r=!1,s){if(t!==void 0){const n=this.constructor;if(r===!1&&(s=this[t]),i??(i=n.getPropertyOptions(t)),!((i.hasChanged??Lt)(s,a)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,a,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,a,{useDefault:i,reflect:r,wrapped:s},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??a??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(a=void 0),this._$AL.set(t,a)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,s]of i){const{wrapped:n}=s,o=this[r];n!==!0||this._$AL.has(r)||o===void 0||this.C(r,void 0,s,o)}}let t=!1;const a=this._$AL;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(a)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(a)}willUpdate(t){}_$AE(t){this._$EO?.forEach(a=>a.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(a=>this._$ET(a,this[a]))),this._$EM()}updated(t){}firstUpdated(t){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[q("elementProperties")]=new Map,B[q("finalized")]=new Map,ze?.({ReactiveElement:B}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,Tt=e=>e,dt=Y.trustedTypes,Ot=dt?dt.createPolicy("lit-html",{createHTML:e=>e}):void 0,ie="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,re="?"+S,Se=`<${re}>`,N=document,J=()=>N.createComment(""),Q=e=>e===null||typeof e!="object"&&typeof e!="function",_t=Array.isArray,Ee=e=>_t(e)||typeof e?.[Symbol.iterator]=="function",mt=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pt=/-->/g,Rt=/>/g,O=RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Nt=/"/g,se=/^(?:script|style|textarea|title)$/i,ne=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),c=ne(1),y=ne(2),T=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),It=new WeakMap,D=N.createTreeWalker(N,129);function oe(e,t){if(!_t(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(t):t}const Te=(e,t)=>{const a=e.length-1,i=[];let r,s=t===2?"<svg>":t===3?"<math>":"",n=F;for(let o=0;o<a;o++){const l=e[o];let h,u,p=-1,g=0;for(;g<l.length&&(n.lastIndex=g,u=n.exec(l),u!==null);)g=n.lastIndex,n===F?u[1]==="!--"?n=Pt:u[1]!==void 0?n=Rt:u[2]!==void 0?(se.test(u[2])&&(r=RegExp("</"+u[2],"g")),n=O):u[3]!==void 0&&(n=O):n===O?u[0]===">"?(n=r??F,p=-1):u[1]===void 0?p=-2:(p=n.lastIndex-u[2].length,h=u[1],n=u[3]===void 0?O:u[3]==='"'?Nt:Dt):n===Nt||n===Dt?n=O:n===Pt||n===Rt?n=F:(n=O,r=void 0);const _=n===O&&e[o+1].startsWith("/>")?" ":"";s+=n===F?l+Se:p>=0?(i.push(h),l.slice(0,p)+ie+l.slice(p)+S+_):l+S+(p===-2?o:_)}return[oe(e,s+(e[a]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class tt{constructor({strings:t,_$litType$:a},i){let r;this.parts=[];let s=0,n=0;const o=t.length-1,l=this.parts,[h,u]=Te(t,a);if(this.el=tt.createElement(h,i),D.currentNode=this.el.content,a===2||a===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=D.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(ie)){const g=u[n++],_=r.getAttribute(p).split(S),$=/([.?@])?(.*)/.exec(g);l.push({type:1,index:s,name:$[2],strings:_,ctor:$[1]==="."?Pe:$[1]==="?"?Re:$[1]==="@"?De:ft}),r.removeAttribute(p)}else p.startsWith(S)&&(l.push({type:6,index:s}),r.removeAttribute(p));if(se.test(r.tagName)){const p=r.textContent.split(S),g=p.length-1;if(g>0){r.textContent=dt?dt.emptyScript:"";for(let _=0;_<g;_++)r.append(p[_],J()),D.nextNode(),l.push({type:2,index:++s});r.append(p[g],J())}}}else if(r.nodeType===8)if(r.data===re)l.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(S,p+1))!==-1;)l.push({type:7,index:s}),p+=S.length-1}s++}}static createElement(t,a){const i=N.createElement("template");return i.innerHTML=t,i}}function j(e,t,a=e,i){if(t===T)return t;let r=i!==void 0?a._$Co?.[i]:a._$Cl;const s=Q(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(e),r._$AT(e,a,i)),i!==void 0?(a._$Co??(a._$Co=[]))[i]=r:a._$Cl=r),r!==void 0&&(t=j(e,r._$AS(e,t.values),r,i)),t}class Oe{constructor(t,a){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:a},parts:i}=this._$AD,r=(t?.creationScope??N).importNode(a,!0);D.currentNode=r;let s=D.nextNode(),n=0,o=0,l=i[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new it(s,s.nextSibling,this,t):l.type===1?h=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(h=new Ne(s,this,t)),this._$AV.push(h),l=i[++o]}n!==l?.index&&(s=D.nextNode(),n++)}return D.currentNode=N,r}p(t){let a=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,a),a+=i.strings.length-2):i._$AI(t[a])),a++}}class it{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,a,i,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=a,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&t?.nodeType===11&&(t=a.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,a=this){t=j(this,t,a),Q(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ee(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:a,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=tt.createElement(oe(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(a);else{const s=new Oe(r,this),n=s.u(this.options);s.p(a),this.T(n),this._$AH=s}}_$AC(t){let a=It.get(t.strings);return a===void 0&&It.set(t.strings,a=new tt(t)),a}k(t){_t(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let i,r=0;for(const s of t)r===a.length?a.push(i=new it(this.O(J()),this.O(J()),this,this.options)):i=a[r],i._$AI(s),r++;r<a.length&&(this._$AR(i&&i._$AB.nextSibling,r),a.length=r)}_$AR(t=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);t!==this._$AB;){const i=Tt(t).nextSibling;Tt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ft{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,a,i,r,s){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=a,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,a=this,i,r){const s=this.strings;let n=!1;if(s===void 0)t=j(this,t,a,0),n=!Q(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const o=t;let l,h;for(t=s[0],l=0;l<s.length-1;l++)h=j(this,o[i+l],a,l),h===T&&(h=this._$AH[l]),n||(n=!Q(h)||h!==this._$AH[l]),h===d?t=d:t!==d&&(t+=(h??"")+s[l+1]),this._$AH[l]=h}n&&!r&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pe extends ft{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Re extends ft{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class De extends ft{constructor(t,a,i,r,s){super(t,a,i,r,s),this.type=5}_$AI(t,a=this){if((t=j(this,t,a,0)??d)===T)return;const i=this._$AH,r=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==d&&(i===d||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ne{constructor(t,a,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=a,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const Ie=Y.litHtmlPolyfillSupport;Ie?.(tt,it),(Y.litHtmlVersions??(Y.litHtmlVersions=[])).push("3.3.3");const Ze=(e,t,a)=>{const i=a?.renderBefore??t;let r=i._$litPart$;if(r===void 0){const s=a?.renderBefore??null;i._$litPart$=r=new it(t.insertBefore(J(),s),s,void 0,a??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis;let K=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var a;const t=super.createRenderRoot();return(a=this.renderOptions).renderBefore??(a.renderBefore=t.firstChild),t}update(t){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ze(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};K._$litElement$=!0,K.finalized=!0,X.litElementHydrateSupport?.({LitElement:K});const Be=X.litElementPolyfillSupport;Be?.({LitElement:K});(X.litElementVersions??(X.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je={attribute:!0,type:String,converter:lt,reflect:!1,hasChanged:Lt},Ue=(e=je,t,a)=>{const{kind:i,metadata:r}=a;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(a.name,e),i==="accessor"){const{name:n}=a;return{set(o){const l=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,l,e,!0,o)},init(o){return o!==void 0&&this.C(n,void 0,e,o),o}}}if(i==="setter"){const{name:n}=a;return function(o){const l=this[n];t.call(this,o),this.requestUpdate(n,l,e,!0,o)}}throw Error("Unsupported decorator location: "+i)};function H(e){return(t,a)=>typeof a=="object"?Ue(e,t,a):((i,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),n?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(e){return H({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=Symbol.for(""),We=e=>{if(e?.r===ce)return e?._$litStatic$},Fe=e=>({_$litStatic$:e,r:ce}),Zt=new Map,Ge=e=>(t,...a)=>{const i=a.length;let r,s;const n=[],o=[];let l,h=0,u=!1;for(;h<i;){for(l=t[h];h<i&&(s=a[h],(r=We(s))!==void 0);)l+=r+t[++h],u=!0;h!==i&&o.push(s),n.push(l),h++}if(h===i&&n.push(t[i]),u){const p=n.join("$$lit$$");(t=Zt.get(p))===void 0&&(n.raw=n,Zt.set(p,t=n)),a=o}return e(t,...a)},Ki=Ge(c);var qe="M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z",Ye="M11,9A4,4 0 0,1 15,13A4,4 0 0,1 11,17A4,4 0 0,1 7,13A4,4 0 0,1 11,9M11,11A2,2 0 0,0 9,13A2,2 0 0,0 11,15A2,2 0 0,0 13,13A2,2 0 0,0 11,11M7,4H14A4,4 0 0,1 18,8V9H16V8A2,2 0 0,0 14,6H7A2,2 0 0,0 5,8V20H16V18H18V22H3V8A4,4 0 0,1 7,4M16,11C18.5,11 18.5,9 21,9V11C18.5,11 18.5,13 16,13V11M16,15C18.5,15 18.5,13 21,13V15C18.5,15 18.5,17 16,17V15Z",Xe="M10 10V12H8V10H10M16 12V10H14V12H16M21 14V22H3V14H4V10C4 5.58 7.58 2 12 2S20 5.58 20 10V14H21M7 16H5V20H7V16M11 16H9V20H11V16M11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08M13 14H18V10C18 7.03 15.84 4.56 13 4.08V14M15 16H13V20H15V16M19 16H17V20H19V16Z",Ke="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z",Je="M20 19V3H4V19H2V21H22V19H20M16 9H18V11H16V9M14 11H6V9H14V11M18 7H16V5H18V7M14 5V7H6V5H14M6 19V13H14V14.82C13.55 15.14 13.25 15.66 13.25 16.25C13.25 17.22 14.03 18 15 18S16.75 17.22 16.75 16.25C16.75 15.66 16.45 15.13 16 14.82V13H18V19H6Z",Qe="M6.03 12.03L8.03 15.5L5.5 18.68L2 12.62L6.03 12.03M17 18V15.29C17.88 14.9 18.5 14.03 18.5 13C18.5 12.43 18.3 11.9 17.97 11.5L19.94 10.35C20.95 9.76 21.3 8.47 20.71 7.46L19.33 5.06C18.74 4.05 17.45 3.7 16.44 4.28L8.31 9C7.36 9.53 7.03 10.75 7.58 11.71L9.08 14.31C9.63 15.26 10.86 15.59 11.81 15.04L13.69 13.96C13.94 14.55 14.41 15.03 15 15.29V18C15 19.1 15.9 20 17 20H22V18H17Z",ta="M8,9H11V4H13V9H16L20,17H4L8,9M14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18H14Z",ea="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",Ji="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",aa="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",Qi="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",ia="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",ra="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",sa="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z",na="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z",oa="M3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8V19H19V17H15V19H13V8H5V19H3V8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6M16 10.5V11H18V10.5C18 10.22 17.78 10 17.5 10H16.5C16.22 10 16 10.22 16 10.5M16 14.5V15H18V14.5C18 14.22 17.78 14 17.5 14H16.5C16.22 14 16 14.22 16 14.5Z",le="M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z",ca="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z",la="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",da="M15,2L17,9H7L9,2M11,10H13V20H16V22H8V20H11V10Z",ua="M8.66,13.07C6.92,13.07 5.5,11.66 5.5,9.93C5.5,9.22 5.76,8.54 6.19,8C5.77,7.46 5.5,6.78 5.5,6.07C5.5,4.34 6.93,2.93 8.66,2.93L9.09,2.96C9.56,1.81 10.69,1 12,1C13.31,1 14.44,1.81 14.91,2.96L15.34,2.93C17.07,2.93 18.5,4.34 18.5,6.07C18.5,6.78 18.24,7.46 17.81,8C18.23,8.54 18.5,9.22 18.5,9.93C18.5,11.66 17.07,13.07 15.34,13.07L14.91,13.04C14.44,14.19 13.31,15 12,15C10.69,15 9.56,14.19 9.09,13.04L8.66,13.07M12,13C12.62,13 13.12,12.5 13.14,11.9L13.03,10.81C12.71,10.93 12.36,11 12,11C11.64,11 11.3,10.93 11,10.81L10.86,11.9C10.88,12.5 11.38,13 12,13M15.34,11.07C15.97,11.07 16.5,10.56 16.5,9.92C16.5,9.5 16.23,9.08 15.83,8.89L14.95,8.47C14.83,9.21 14.44,9.85 13.89,10.3L14.7,10.87C14.88,11 15.1,11.07 15.34,11.07M14.69,5.13L13.87,5.69C14.43,6.14 14.82,6.78 14.94,7.5L15.82,7.1C16.23,6.9 16.5,6.5 16.5,6.07C16.5,5.44 15.97,4.93 15.34,4.93C15.11,4.93 14.89,5 14.69,5.13M12,3C11.38,3 10.88,3.5 10.86,4.1L11,5.19C11.3,5.07 11.64,5 12,5C12.36,5 12.71,5.07 13.03,5.19L13.14,4.1C13.12,3.5 12.62,3 12,3M8.66,4.93C8.03,4.93 7.5,5.44 7.5,6.07C7.5,6.5 7.77,6.9 8.17,7.1L9.05,7.5C9.17,6.78 9.56,6.14 10.11,5.69L9.3,5.13C9.12,5 8.9,4.93 8.66,4.93M8.17,8.9C7.77,9.1 7.5,9.5 7.5,9.92C7.5,10.55 8.03,11.06 8.66,11.06C8.89,11.06 9.11,11 9.31,10.86L10.12,10.31C9.56,9.86 9.17,9.22 9.05,8.5L8.17,8.9M12,22A9,9 0 0,1 3,13A9,9 0 0,1 12,22A9,9 0 0,1 21,13A9,9 0 0,1 12,22M14.44,19.56C16.34,18.85 17.85,17.34 18.56,15.44C16.66,16.14 15.15,17.66 14.44,19.56M5.44,15.44C6.15,17.34 7.66,18.85 9.56,19.56C8.86,17.66 7.34,16.15 5.44,15.44Z",tr="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z",ha="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",er="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22",pa="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z",fa="M2.95 3L2 6.91L19.34 11.25L20.29 7.34L2.95 3M6.09 6.89L4.16 6.41L4.64 4.46L6.57 4.94L6.09 6.89M9.94 7.86L8 7.38L8.5 5.42L10.42 5.91L9.94 7.86M13.8 8.82L11.87 8.34L12.35 6.39L14.27 6.87L13.8 8.82M17.65 9.79L15.72 9.31L16.2 7.35L18.13 7.84L17.65 9.79M4.66 12.75L3.71 16.66L21.05 21L22 17.1L4.66 12.75M7.8 16.65L5.88 16.16L6.35 14.21L8.28 14.69L7.8 16.65M11.65 17.61L9.73 17.13L10.2 15.18L12.13 15.66L11.65 17.61M15.5 18.58L13.58 18.09L14.06 16.14L16 16.62L15.5 18.58M19.36 19.54L17.43 19.06L17.91 17.11L19.84 17.59L19.36 19.54M6.25 12.11L11 10.2L17.75 11.89L13 13.8L6.25 12.11Z",ma="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z",ga="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",de="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",va="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",ar="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",ir="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",ba="M19,13H5V11H19V13Z",$a="M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",rr="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z",ya="M14,19H18V5H14M6,19H10V5H6V19Z",wa="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z",ka="M8,5.14V19.14L19,12.14L8,5.14Z",xa="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",Ca="M2,15C3.67,14.25 5.33,13.5 7,13.17V5A3,3 0 0,1 10,2C11.31,2 12.42,2.83 12.83,4H10A1,1 0 0,0 9,5V6H14V5A3,3 0 0,1 17,2C18.31,2 19.42,2.83 19.83,4H17A1,1 0 0,0 16,5V14.94C18,14.62 20,13 22,13V15C19.78,15 17.56,17 15.33,17C13.11,17 10.89,15 8.67,15C6.44,15 4.22,16 2,17V15M14,8H9V10H14V8M14,12H9V13C10.67,13.16 12.33,14.31 14,14.79V12M2,19C4.22,18 6.44,17 8.67,17C10.89,17 13.11,19 15.33,19C17.56,19 19.78,17 22,17V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V19Z",La="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",_a="M7.5,10.5A1.5,1.5 0 0,1 9,12A1.5,1.5 0 0,1 7.5,13.5C6.66,13.5 6,12.83 6,12A1.5,1.5 0 0,1 7.5,10.5M16.5,10.5A1.5,1.5 0 0,1 18,12A1.5,1.5 0 0,1 16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5M4.22,2H19.78C21,2 22,3 22,4.22V19.78A2.22,2.22 0 0,1 19.78,22H4.22C3,22 2,21 2,19.78V4.22A2.22,2.22 0 0,1 4.22,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",Aa="M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z",Ma="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z",Ha="M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6A6,6 0 0,1 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12A6,6 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z",Va="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14",za="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z",Sa="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z",Ea="M16,18H18V6H16M6,18L14.5,12L6,6V18Z",Ta="M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z",Oa="M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z",Pa="M20.07,19.07L18.66,17.66C20.11,16.22 21,14.21 21,12C21,9.78 20.11,7.78 18.66,6.34L20.07,4.93C21.88,6.74 23,9.24 23,12C23,14.76 21.88,17.26 20.07,19.07M17.24,16.24L15.83,14.83C16.55,14.11 17,13.11 17,12C17,10.89 16.55,9.89 15.83,9.17L17.24,7.76C18.33,8.85 19,10.35 19,12C19,13.65 18.33,15.15 17.24,16.24M4,3H12A2,2 0 0,1 14,5V19A2,2 0 0,1 12,21H4A2,2 0 0,1 2,19V5A2,2 0 0,1 4,3M8,5A2,2 0 0,0 6,7A2,2 0 0,0 8,9A2,2 0 0,0 10,7A2,2 0 0,0 8,5M8,11A4,4 0 0,0 4,15A4,4 0 0,0 8,19A4,4 0 0,0 12,15A4,4 0 0,0 8,11M8,13A2,2 0 0,1 10,15A2,2 0 0,1 8,17A2,2 0 0,1 6,15A2,2 0 0,1 8,13Z",Ra="M9,16.5L9.91,15.59L15.13,20.8L14.21,21.71L9,16.5M15.5,10L16.41,9.09L21.63,14.3L20.71,15.21L15.5,10M6.72,2.72L10.15,6.15L6.15,10.15L2.72,6.72C1.94,5.94 1.94,4.67 2.72,3.89L3.89,2.72C4.67,1.94 5.94,1.94 6.72,2.72M14.57,7.5L15.28,8.21L8.21,15.28L7.5,14.57L6.64,11.07L11.07,6.64L14.57,7.5Z",Da="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z",Na="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z",sr="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4M7,8H13V13H7V8M14,8H17V10H14V8M17,11V16H14V11H17M7,14H13V16H7V14Z",Ia="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12",Za="M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z",Ba="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M16,16L19,8H16.5L15,12.5L13.5,8H5V10H8V16H10V10H11.77L14,16H16Z",ja="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",ue="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",nr="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z",Ua="M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z",or="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",Wa="M21 20V2H3V20H1V23H23V20M19 4V11H13V4M5 4H11V11H5M5 20V13H11V20M13 20V13H19V20Z";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he={ATTRIBUTE:1,CHILD:2},pe=e=>(...t)=>({_$litDirective$:e,values:t});let fe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,i){this._$Ct=t,this._$AM=a,this._$Ci=i}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=pe(class extends fe{constructor(e){if(super(e),e.type!==he.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const a=e.element.classList;for(const i of this.st)i in t||(a.remove(i),this.st.delete(i));for(const i in t){const r=!!t[i];r===this.st.has(i)||this.nt?.has(i)||(r?(a.add(i),this.st.add(i)):(a.remove(i),this.st.delete(i)))}return T}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me="important",Fa=" !"+me,Ga=pe(class extends fe{constructor(e){if(super(e),e.type!==he.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const i=e[a];return i==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?a.removeProperty(i):a[i]=null);for(const i in t){const r=t[i];if(r!=null){this.ft.add(i);const s=typeof r=="string"&&r.endsWith(Fa);i.includes("-")||s?a.setProperty(i,s?r.slice(0,-11):r,s?me:""):a[i]=r}}return T}});function lr(e){return{type:"auth",access_token:e}}function dr(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function qa(){return{type:"get_states"}}function Ya(e,t,a,i,r){const s={type:"call_service",domain:e,service:t,target:i,return_response:r};return a&&(s.service_data=a),s}function ur(e){const t={type:"subscribe_events"};return e&&(t.event_type=e),t}function hr(e){return{type:"unsubscribe_events",subscription:e}}function pr(){return{type:"ping"}}function fr(e,t){return{type:"result",success:!1,error:{code:e,message:t}}}const mr=e=>e.sendMessagePromise(qa()),Xa=(e,t,a,i,r,s)=>e.sendMessagePromise(Ya(t,a,i,r,s)),f={home:pa,therm:ue,bulb:ga,shield:Va,spark:na,play:ka,pause:ya,next:Ea,minus:ba,plus:xa,close:ra,back:aa,lock:de,unlock:va,power:La,room:ja,edit:wa,resize:Aa,check:ea,restore:Ma,gear:sa},At={"mdi:shower":za,"mdi:silverware-fork-knife":Sa,"mdi:table-chair":Na,"mdi:sofa":Ta,"mdi:bed":Ke,"mdi:teddy-bear":Ia,"mdi:desk":oa,"mdi:garage":ha,"mdi:flower":ua,"mdi:balcony":Xe,"mdi:pool":Ca,"mdi:washing-machine":Ua,"mdi:door":le,"mdi:dumbbell":ca,"mdi:stairs":Da},gr=Object.keys(At),vr=e=>At[e]??f.room,ut=e=>e&&At[e]||f.room;let Ka=0;const W=e=>`${e}${++Ka}`,L=e=>y`<svg class="art" viewBox="0 0 60 60" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">${e}</svg>`;function Ja(e,t="#ffcf8a"){const a=W("l");return L(y`<defs><radialGradient id=${a} cx="36" cy="40" r="28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.85}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="36" cy="40" r="28" fill=${`url(#${a})`}/><line x1="36" y1="0" x2="36" y2="22" stroke="#6b717a" stroke-width=".8"/>
    <path d="M25 34 L47 34 L41.5 21 L30.5 21 Z" fill=${e?"#d9c6a3":"#4a4f57"}/><ellipse cx="36" cy="34.5" rx="11" ry="1.7" fill=${e?"#fff2d6":"#3a3e45"}/>`)}function Qa(e){const t=Math.max(0,Math.min(100,100-e)),a=Array.from({length:Math.round(t/11)},(i,r)=>y`<line x1="20" x2="54" y1=${12+r*4.2} y2=${12+r*4.2} stroke="#8796a6" stroke-width=".5"/>`);return L(y`<rect x="20" y="10" width="34" height="46" rx="2" fill="#2d4a66" opacity=".6"/><circle cx="44" cy="22" r="5" fill="#ffd27a" opacity=".5"/>
    <rect x="20" y="10" width="34" height=${(46*t/100).toFixed(1)} fill="#a9b6c4"/>${a}<rect x="18" y="8" width="38" height="3" rx="1" fill="#5d646e"/>`)}function ti(e,t="#ff9f43"){const a=e==null?0:Math.max(0,Math.min(1,(e-16)/14));return L(y`<circle cx="40" cy="36" r="17" fill="#2a2e34" stroke="#454a52"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${t} stroke-width="2.6" stroke-dasharray=${`${(a*81).toFixed(1)} 82`} transform="rotate(135 40 36)" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${t} stroke-width="7" opacity=".08"/>`)}function ei(e){return L(y`<rect x="28" y="12" width="24" height="44" rx="3" fill="#3a3f46"/><rect x="31" y="15" width="18" height="38" rx="2" fill="#2b2f35"/>
    <circle cx="34" cy="34" r="1.6" fill=${e?"#ff8a5c":"#5be3a0"}/><rect x=${e?44:38} y="33.2" width="6" height="1.6" rx=".8" fill="#8a919b"/>`)}function ai(e){return L(y`<ellipse cx="40" cy="50" rx="16" ry="4" fill="#000" opacity=".3"/><ellipse cx="40" cy="44" rx="15" ry="6" fill="#d8dce1"/><rect x="25" y="38" width="30" height="6" fill="#d8dce1"/>
    <ellipse cx="40" cy="38" rx="15" ry="6" fill="#eef0f3"/><circle cx="40" cy="36" r="3.4" fill=${e?"#5be3a0":"#c4c9cf"}/>
    ${e?y`<path d="M10 50 Q20 46 26 48" stroke="#5be3a0" stroke-width=".8" fill="none" stroke-dasharray="1.2 1.2" opacity=".8"/>`:null}`)}function ii(e){if(e)return L(y`<image href=${e} x="26" y="14" width="30" height="30" preserveAspectRatio="xMidYMid slice" transform="rotate(6 41 29)"/>`);const t=W("a");return L(y`<defs><linearGradient id=${t} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3a35f"/><stop offset=".5" stop-color="#d96d6d"/><stop offset=".75" stop-color="#5c4a8a"/><stop offset="1" stop-color="#2e2a54"/></linearGradient></defs>
    <rect x="26" y="14" width="30" height="30" rx="3" fill=${`url(#${t})`} transform="rotate(6 41 29)"/><circle cx="46" cy="22" r="3" fill="#ffe7b8" opacity=".9" transform="rotate(6 41 29)"/>`)}function Bt(e){const t=!/rain|pour|snow|fog|cloudy$|lightning|night/.test(e)||e==="partlycloudy",a=e!=="sunny"&&e!=="clear-night",i=/rain|pour|lightning/.test(e),r=e==="clear-night";return L(y`${t?y`<circle cx="44" cy="20" r="8" fill="#ffd27a" opacity=".85"/>`:null}
    ${r?y`<path d="M46 12a9 9 0 1 0 6 14 7 7 0 1 1-6-14z" fill="#e8e3c8" opacity=".9"/>`:null}
    ${a?y`<path d="M28 36h20a6 6 0 0 0 .6-12 9 9 0 0 0-17 2.5A5 5 0 0 0 28 36z" fill="#cfd6df"/>`:null}
    ${i?y`<path d="M32 40l-2 6M38 40l-2 6M44 40l-2 6" stroke="#6cc8ff" stroke-width="1.4" stroke-linecap="round"/>`:null}`)}function ri(e){return L(y`<g transform="translate(40 34)"><g class=${e?"spin":""}>
    ${[0,120,240].map(t=>y`<ellipse cx="0" cy="-8" rx="4" ry="8" fill="#cfd6df" opacity=".85" transform=${`rotate(${t})`}/>`)}
    </g><circle r="2.6" fill="#8a919b"/></g>`)}function si(e){return L(y`<rect x="28" y="20" width="24" height="24" rx="6" fill="#3a3f46"/><circle cx="36" cy="32" r="1.8" fill="#1b1e22"/><circle cx="44" cy="32" r="1.8" fill="#1b1e22"/>
    <circle cx="48" cy="24" r="1.4" fill=${e?"#5be3a0":"#5d646e"}/>`)}function ni(e,t){let a="M0 26 L100 26";if(t&&t.length>1){const i=Math.min(...t),s=Math.max(...t)-i||1;a=t.map((o,l)=>[l/(t.length-1)*100,34-(o-i)/s*26]).map(([o,l],h)=>`${h?"L":"M"}${o.toFixed(1)} ${l.toFixed(1)}`).join(" ")}return y`<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d=${`${a} V40 H0Z`} fill=${e} opacity=".12"/><path d=${a} fill="none" stroke=${e} stroke-width="1.4" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity=".85"/></svg>`}function oi(){return L(y`<circle cx="42" cy="34" r="14" fill="#b49cff" opacity=".18"/><path d="M42 22l2.6 7.4L52 32l-7.4 2.6L42 42l-2.6-7.4L32 32l7.4-2.6z" fill="#d9ccff"/><path d="M52 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#ffe2b0"/>`)}function ci(e,t="#ffcf8a"){const a=W("f");return L(y`<defs><radialGradient id=${a} cx="40" cy="22" r="22" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.9}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="40" cy="22" r="22" fill=${`url(#${a})`}/><path d="M33 26 L47 26 L44 14 L36 14Z" fill=${e?"#e6d6b8":"#4a4f57"}/>
    <line x1="40" y1="26" x2="40" y2="56" stroke="#6b717a" stroke-width="1.2"/><ellipse cx="40" cy="57" rx="6" ry="1.2" fill="#555b63"/>`)}function li(e,t="#ffcf8a"){const a=W("s");return L(y`<defs><linearGradient id=${a} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.7}/><stop offset="1" stop-color=${t} stop-opacity="0"/></linearGradient></defs>
    <rect x="12" y="31" width="46" height="25" fill=${`url(#${a})`}/><rect x="12" y="28" width="46" height="3" rx="1.5" fill=${e?t:"#4a4f57"} opacity=${e?.45+e/200:1}/>
    ${[16,23,30,37,44,51].map(i=>y`<circle cx=${i} cy="29.5" r=".8" fill="#fff" opacity=${e?.9:.15}/>`)}`)}function di(e,t="#ffcf8a"){const a=W("p");return L(y`<defs><linearGradient id=${a} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.6}/><stop offset="1" stop-color=${t} stop-opacity="0"/></linearGradient></defs>
    <path d="M34 12 L46 12 L56 58 L24 58Z" fill=${`url(#${a})`}/><rect x="33" y="6" width="14" height="6" rx="2" fill=${e?"#d9c6a3":"#4a4f57"}/>
    <ellipse cx="40" cy="12" rx="6" ry="1.2" fill=${e?"#fff2d6":"#3a3e45"}/>`)}function ui(e,t="#ffcf8a"){const a=W("b");return L(y`<defs><radialGradient id=${a} cx="40" cy="30" r="22" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${t} stop-opacity=${e/100*.8}/><stop offset="1" stop-color=${t} stop-opacity="0"/></radialGradient></defs>
    <circle cx="40" cy="30" r="22" fill=${`url(#${a})`}/><line x1="40" y1="0" x2="40" y2="18" stroke="#6b717a" stroke-width=".8"/>
    <rect x="37" y="17" width="6" height="5" rx="1" fill="#8a919b"/><circle cx="40" cy="28" r="7" fill=${e?"#fff2d6":"#4a4f57"}/>`)}function jt(e,t,a){return e==="lamp"?ci(t,a):e==="led"?li(t,a):e==="spot"?di(t,a):e==="bulb"?ui(t,a):Ja(t,a)}const G={ceiling:{icon:ta,name:"Luz de teto"},lamp:{icon:da,name:"Candeeiro"},led:{icon:fa,name:"Fita LED"},spot:{icon:Ra,name:"Spot"},bulb:{icon:ma,name:"Lâmpada"},tv:{icon:Za,name:"TV"},appletv:{icon:Ba,name:"Apple TV"},homepod:{icon:Oa,name:"HomePod"},speaker:{icon:Pa,name:"Coluna"},ac:{icon:qe,name:"Ar condicionado"},fan:{icon:la,name:"Ventoinha"},purifier:{icon:Ye,name:"Purificador"},blind:{icon:Je,name:"Estore"},door:{icon:le,name:"Porta"},window:{icon:Wa,name:"Janela"},plug:{icon:_a,name:"Tomada"},sensor:{icon:ue,name:"Sensor"},motion:{icon:$a,name:"Movimento"},camera:{icon:Qe,name:"Câmara"},lock:{icon:de,name:"Fechadura"},vacuum:{icon:Ha,name:"Aspirador"},other:{icon:ia,name:"Outro"}},hi={light:["ceiling","lamp","led","spot","bulb"],media_player:["tv","appletv","homepod","speaker"],fan:["fan","purifier"],cover:["blind","door","window"],switch:["plug","tv","fan","other"],input_boolean:["plug","other"],binary_sensor:["door","window","motion","sensor"]},z=(e,...t)=>t.some(a=>e.includes(a));function Ut(e,t,a={}){const i=e.split(".")[0],r=t?.attributes??{},s=`${a.name??""} ${r.friendly_name??""} ${e}`.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),n=`${a.model??""}`.toLowerCase(),o=`${a.manufacturer??""}`.toLowerCase();return i==="light"?z(s,"fita","led","strip","lightstrip","barra")?"led":z(s,"teto","tecto","ceiling","plafon","lustre","pendente","suspens")?"ceiling":z(s,"spot","foco","embutid")?"spot":z(s,"candeeiro","lamp","abajur","de pe","cabeceira","floor")?"lamp":"ceiling":i==="media_player"?o.includes("apple")&&n.includes("homepod")?"homepod":o.includes("apple")&&n.includes("tv")?"appletv":z(s,"homepod")?"homepod":z(s,"apple tv","appletv")?"appletv":r.device_class==="tv"||z(s,"tv","televis")?"tv":"speaker":i==="climate"?"ac":i==="fan"?z(s,"purif","air clean")||o.includes("philips")&&n.startsWith("ac")?"purifier":"fan":i==="cover"?r.device_class==="door"||r.device_class==="garage"?"door":"blind":i==="lock"?"lock":i==="camera"?"camera":i==="vacuum"?"vacuum":i==="switch"||i==="input_boolean"?z(s,"tv","televis")?"tv":"plug":i==="binary_sensor"?["door","garage_door","opening"].includes(r.device_class)?"door":r.device_class==="window"?"window":["motion","occupancy","presence"].includes(r.device_class)?"motion":"sensor":i==="sensor"?"sensor":"other"}const w=e=>e.split(".")[0],P=e=>!!e&&!["off","unavailable","unknown","closed","locked","idle","standby","docked"].includes(e.state),pi=e=>!e||e.state==="unavailable";function U(e){if(!e||e.state!=="on")return 0;const t=e.attributes.brightness;return t==null?100:Math.max(1,Math.round(t/255*100))}function gt(e){const t=e?.attributes.rgb_color,a=e?.attributes.color_mode;if(t&&a&&!["color_temp","brightness","onoff","white"].includes(a))return`rgb(${t.join(",")})`;const i=e?.attributes.color_temp_kelvin;return i?i>=5e3?"#e6f0ff":i>=3800?"#fff1d6":"#ffcf8a":"#ffcf8a"}const V=e=>e.devices.filter(t=>w(t.id)==="light"&&!t.hidden).map(t=>t.id);function fi(e,t){const a=e.filter(i=>t[i]?.state==="on");return a.length?Math.round(a.reduce((i,r)=>i+U(t[r]),0)/a.length):0}const Wt={light:"light",climate:"climate",lock:"lock",cover:"cover",media_player:"media",vacuum:"vacuum",fan:"fan",switch:"switch",input_boolean:"switch",outlet:"outlet",sensor:"sensor",binary_sensor:"binary",camera:"camera"};function ht(e,t){const a=Wt[e.kind??w(e.id)]??Wt[w(e.id)];if(!a)return null;const i=a==="climate"?"l":a==="media"||a==="camera"?"m":"s";return{key:e.id,kind:a,size:i,name:e.name,sub:t?.name,entity:e.id,room:t}}function yt(e,t){const a=e.rooms.filter(n=>!n.hidden),i=a.flatMap(n=>n.devices.filter(o=>!o.hidden).map(o=>({d:o,r:n}))),r=n=>i.filter(({d:o})=>(o.kind??w(o.id))===n),s=[];return a.forEach((n,o)=>{const l=V(n);l.length&&s.push({key:`room-${n.id}`,kind:"room-lights",size:o===0?"m":"s",name:n.name,entities:l,room:n})}),r("climate").forEach(({d:n,r:o},l)=>s.push({key:n.id,kind:"climate",size:l===0?"l":"m",name:n.name,sub:o.name,entity:n.id,room:o})),e.weather&&t[e.weather]&&s.push({key:e.weather,kind:"weather",size:"l",name:"Tempo",entity:e.weather}),r("lock").forEach(({d:n,r:o})=>s.push({key:n.id,kind:"lock",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),r("cover").forEach(({d:n,r:o})=>s.push({key:n.id,kind:"cover",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),r("media_player").sort((n,o)=>+(t[o.d.id]?.state==="playing")-+(t[n.d.id]?.state==="playing")).slice(0,2).forEach(({d:n,r:o})=>s.push({key:n.id,kind:"media",size:"m",name:n.name,sub:o.name,entity:n.id,room:o})),r("vacuum").forEach(({d:n,r:o})=>s.push({key:n.id,kind:"vacuum",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),e.scenes.length&&s.push({key:"scenes",kind:"scenes",size:"m",name:"Cenas",entities:e.scenes.slice(0,6)}),s}const mi=[{id:"all",name:"Tudo",kinds:[]},{id:"lights",name:"Luzes",kinds:["light"]},{id:"climate",name:"Clima",kinds:["climate","fan"]},{id:"covers",name:"Estores",kinds:["cover"]},{id:"media",name:"Média",kinds:["media"]},{id:"other",name:"Outros",kinds:["switch","outlet","lock","vacuum","sensor","binary","camera"]}];function gi(e,t=[]){const a=e.devices.filter(r=>!r.hidden).map(r=>ht(r,e)),i=(e.entities??[]).filter(r=>!r.primary&&t.includes(r.id)).map(r=>ht({id:r.id,name:r.name,kind:w(r.id)},e));return[...a,...i].filter(r=>!!r)}function M(e,t){const a=e.rooms.filter(o=>!o.hidden).flatMap(o=>o.devices),i=a.filter(o=>w(o.id)==="light"&&t[o.id]?.state==="on").length,r=a.filter(o=>w(o.id)==="lock"&&t[o.id]?.state==="unlocked").length,s=a.filter(o=>w(o.id)==="binary_sensor"&&["door","window","garage_door","opening"].includes(t[o.id]?.attributes.device_class)&&t[o.id]?.state==="on").length,n=e.rooms.map(o=>o.temperature?parseFloat(t[o.temperature]?.state??""):NaN).filter(o=>!Number.isNaN(o));return{lightsOn:i,alerts:r+s,alertText:r?`${r} destrancada${r>1?"s":""}`:s?`${s} aberta${s>1?"s":""}`:"tudo fechado",temp:n.length?`${Math.round(Math.min(...n))}–${Math.round(Math.max(...n))}°`:null}}const x=(e,t=1)=>e.toLocaleString("pt-PT",{maximumFractionDigits:t}),vi=["door","window","garage_door","opening"],ge=e=>e.rooms.filter(t=>!t.hidden).flatMap(t=>t.devices.filter(a=>!a.hidden).map(a=>({d:a,r:t})));function bi(e,t){const a=[],i=ge(e);return i.filter(({d:r})=>w(r.id)==="climate").forEach(({d:r,r:s})=>a.push({key:r.id,kind:"climate",size:"l",name:r.name,sub:s.name,entity:r.id,room:s})),e.weather&&t[e.weather]&&a.push({key:e.weather,kind:"weather",size:"l",name:"Tempo",entity:e.weather}),i.filter(({d:r})=>w(r.id)==="fan").forEach(({d:r,r:s})=>a.push({key:r.id,kind:"fan",size:"s",name:r.name,sub:s.name,entity:r.id,room:s})),e.rooms.filter(r=>!r.hidden).forEach(r=>{r.temperature&&t[r.temperature]&&a.push({key:`t-${r.id}`,kind:"sensor",size:"s",name:r.name,sub:"temperatura",entity:r.temperature,room:r}),r.humidity&&t[r.humidity]&&a.push({key:`h-${r.id}`,kind:"sensor",size:"s",name:r.name,sub:"humidade",entity:r.humidity,room:r})}),a}function $i(e,t){const a=ge(e),i=a.filter(({d:n})=>w(n.id)==="lock"),r=a.filter(({d:n})=>w(n.id)==="binary_sensor"&&[...vi,"motion","occupancy","presence","moisture","smoke","gas"].includes(t[n.id]?.attributes.device_class));r.sort((n,o)=>+(t[o.d.id]?.state==="on")-+(t[n.d.id]?.state==="on"));const s=a.filter(({d:n})=>w(n.id)==="camera");return[...i.map(({d:n,r:o})=>({key:n.id,kind:"lock",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),...r.map(({d:n,r:o})=>({key:n.id,kind:"binary",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),...s.map(({d:n,r:o})=>({key:n.id,kind:"camera",size:"m",name:n.name,sub:o.name,entity:n.id,room:o}))]}function yi(e,t){return[...e.scenes,...e.scripts].filter(a=>t[a]).map(a=>({key:a,kind:"scene",size:"s",name:t[a].attributes.friendly_name??a,entity:a}))}const wi=["climate","weather","media","scenes","camera","clock"],ve=e=>wi.includes(e)?["m","l","xl"]:["s","m","l"];function ki(e,t){for(const a of e.rooms){const i=a.devices.find(r=>r.id===t);if(i)return ht(i,a)}return null}function Ft(e,t,a){if(!t)return e;const i=new Map(e.map(o=>[o.key,o])),r=new Set(t.hidden),s=[],n=new Set;for(const o of t.items){if(n.has(o.key)||r.has(o.key))continue;const l=i.get(o.key)??ki(a,o.key);if(!l)continue;n.add(o.key);const h=o.size&&ve(l.kind).includes(o.size)?o.size:l.size;s.push({...l,size:h})}for(const o of e)!n.has(o.key)&&!r.has(o.key)&&s.push(o);return s}function xi(e,t,a){const i=new Set(t.items.map(n=>n.key)),r=e.filter(n=>t.hidden.includes(n.key)),s=a.rooms.filter(n=>!n.hidden).flatMap(n=>n.devices.filter(o=>!o.hidden).map(o=>ht(o,n))).filter(n=>!!n&&!i.has(n.key)&&!r.some(o=>o.key===n.key)&&!e.some(o=>o.key===n.key&&!t.hidden.includes(o.key)));return[...r,...s]}function Mt(e,t,a){return e?t?t===e?e===1?"luz acesa":`${e} luzes acesas`:`${t} de ${e} luzes acesas`:e===1?"luz apagada":"luzes apagadas":`${a} dispositivo${a===1?"":"s"}`}const st=at`
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
`;var Ci=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,k=(e,t,a,i)=>{for(var r=i>1?void 0:i?Li(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,a,r):n(r))||r);return i&&r&&Ci(t,a,r),r};const _i=550,vt=10,bt={heat:"Calor",cool:"Frio",heat_cool:"Auto",auto:"Auto",dry:"Seco",fan_only:"Ventilar",off:"Off"},Gt={heating:"a aquecer",cooling:"a arrefecer",idle:"em pausa",off:"desligado",drying:"a secar",fan:"a ventilar"},ct={"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",hail:"granizo",lightning:"trovoada","lightning-rainy":"trovoada e chuva",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve","snowy-rainy":"chuva e neve",sunny:"sol",windy:"vento","windy-variant":"vento",exceptional:"excecional"},qt={cleaning:"a limpar",docked:"na base",returning:"a voltar à base",paused:"em pausa",idle:"parado",error:"erro"},Ai={open:"aberto",closed:"fechado",opening:"a abrir",closing:"a fechar"},$t={yellow:"amarelo",orange:"laranja",red:"vermelho"},Yt={yellow:1,orange:2,red:3},Mi=10*6e4,Hi=10*6e4,Xt=[{id:"@clima",name:"Clima",icon:f.therm},{id:"@seguranca",name:"Segurança",icon:f.shield},{id:"@cenas",name:"Cenas",icon:f.spark}],Vi=["#ffcf8a","#fff1d6","#ff8a5c","#ff6fae","#b49cff","#6cc8ff","#5be3a0"],v=e=>y`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`;let b=class extends K{constructor(){super(...arguments),this.entities={},this.screenName="",this.canEdit=!1,this.ambient=!1,this.settingsButton=!1,this.preview=!1,this.startView="",this.wallpanel=!1,this.editing=null,this.draft=null,this.moving=null,this.saving=!1,this.lastReorder=0,this.view="home",this.category="all",this.sheet=null,this.drag=null,this.now=new Date,this.hourly=[],this.warnings=[],this.history={},this.flash=null,this.historyAt={},this.historyWanted=new Set,this.ipmaAt=0,this.ipmaArea=null,this.forecastAt=0}connectedCallback(){super.connectedCallback(),this.clock=window.setInterval(()=>this.now=new Date,1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clock)}willUpdate(e){if(e.has("startView")&&this.startView&&(this.view=this.startView,this.category="all"),this.preview)return;e.has("home")&&this.view!=="home"&&!this.view.startsWith("@")&&!this.home.rooms.some(a=>a.id===this.view)&&(this.view="home");const t=this.home?.settings?.ipma_area??null;(t!==this.ipmaArea||t&&Date.now()-this.ipmaAt>Hi)&&(this.ipmaArea=t,this.ipmaAt=Date.now(),t&&this.conn?this.loadWarnings(t):this.warnings=[]),this.home?.weather&&Date.now()-this.forecastAt>30*6e4&&this.conn&&(this.forecastAt=Date.now(),this.loadForecast(this.home.weather))}async loadForecast(e){try{const t=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"hourly"},target:{entity_id:e},return_response:!0});this.hourly=(t.response?.[e]?.forecast??[]).slice(1,7).filter((a,i)=>i%2===0)}catch{this.hourly=[]}}updated(){if(this.preview)return;const e=Date.now(),t=[...this.historyWanted].filter(a=>e-(this.historyAt[a]??0)>Mi);this.historyWanted.clear(),t.length&&this.conn&&(t.forEach(a=>this.historyAt[a]=e),this.loadHistory(t))}async loadHistory(e){try{const t=await this.conn.sendMessagePromise({type:"history/history_during_period",start_time:new Date(Date.now()-864e5).toISOString(),entity_ids:e,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),a={...this.history};for(const i of e){const r=(t[i]??[]).map(n=>parseFloat(n.s)).filter(n=>!Number.isNaN(n)),s=Math.max(1,Math.ceil(r.length/48));a[i]=r.filter((n,o)=>o%s===0||o===r.length-1)}this.history=a}catch(t){console.warn("Pine3 Home: history",t)}}async loadWarnings(e){try{const t=await this.conn.sendMessagePromise({type:"pine3_home/ipma_warnings",area:e}),a=Date.now();this.warnings=t.warnings.filter(i=>!i.endTime||new Date(i.endTime).getTime()>a).sort((i,r)=>(Yt[r.awarenessLevelID]??0)-(Yt[i.awarenessLevelID]??0))}catch{}}call(e,t,a,i={}){Xa(this.conn,e,t,i,{entity_id:a}).catch(r=>console.warn("Pine3 Home:",r))}toggle(e){const t=w(e),a=this.entities[e];if(t==="lock")return this.call("lock",a?.state==="locked"?"unlock":"lock",e);if(t==="cover")return this.call("cover","toggle",e);if(t==="vacuum")return this.call("vacuum",a?.state==="cleaning"?"return_to_base":"start",e);if(t==="media_player")return this.call("media_player","media_play_pause",e);if(t==="scene"||t==="script")return this.call(t,"turn_on",e);this.call(t==="input_boolean"?"input_boolean":"homeassistant","toggle",e)}level(e){if(this.drag?.key===e.key)return this.drag.value;if(e.kind==="room-lights")return fi(e.entities,this.entities);const t=this.entities[e.entity];return e.kind==="light"?U(t):e.kind==="cover"?t?.attributes.current_position??(t?.state==="open"?100:0):null}setLevel(e,t){if(t=Math.round(t),e.kind==="room-lights"||e.kind==="light"){const a=e.kind==="light"?e.entity:e.entities;t<=0?this.call("light","turn_off",a):this.call("light","turn_on",a,{brightness_pct:t})}else e.kind==="cover"&&this.call("cover","set_cover_position",e.entity,{position:t})}slidable(e){if(e.kind==="room-lights")return!0;const t=this.entities[e.entity??""];return t?e.kind==="light"?(t.attributes.supported_color_modes??[]).some(a=>a!=="onoff"):e.kind==="cover"?(t.attributes.supported_features&4)===4:!1:!1}down(e,t){if(e.target.closest("button"))return;if(this.editing){this.press={key:t.key,x:e.clientX,y:e.clientY,rect:e.currentTarget.getBoundingClientRect(),dragging:!1,long:!1,timer:0};return}const a=e.currentTarget,i={key:t.key,x:e.clientX,y:e.clientY,rect:a.getBoundingClientRect(),dragging:!1,long:!1,timer:0};i.timer=window.setTimeout(()=>{i.long=!0,this.longPress(t)},_i),this.press=i}move(e,t){const a=this.press;if(!a||a.key!==t.key||a.long)return;if(this.editing)return this.moveInEdit(e,a);const i=e.clientX-a.x,r=e.clientY-a.y;if(!a.dragging){if(Math.abs(r)>vt&&Math.abs(r)>Math.abs(i))return this.cancel();if(Math.abs(i)<vt||!this.slidable(t))return;a.dragging=!0,clearTimeout(a.timer),e.currentTarget.setPointerCapture(e.pointerId)}const s=Math.max(0,Math.min(100,(e.clientX-a.rect.left)/a.rect.width*100));this.drag={key:t.key,value:Math.round(s)}}up(e,t){const a=this.press;if(!(!a||a.key!==t.key)){if(clearTimeout(a.timer),this.press=void 0,this.editing){this.moving=null;return}if(!a.long){if(a.dragging){const i=this.drag?.value??0;this.setLevel(t,i),window.setTimeout(()=>{this.drag?.key===t.key&&(this.drag=null)},1500);return}this.tap(t)}}}cancel(){this.press&&clearTimeout(this.press.timer),this.press=void 0,this.moving=null}reset(){this.stopEdit(),this.sheet=null,this.drag=null,this.view="home",this.category="all",this.main()?.scrollTo({top:0})}get busy(){return!!this.editing||!!this.press}main(){return this.renderRoot?.querySelector(".main")??null}renderGear(e="di gear"){return this.settingsButton?c`<button class=${e} aria-label="Definições" title="Definições"
      @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}>
      ${v(f.gear)}${e.includes("di")?c`<span class="lb">Definições</span>`:d}</button>`:d}arranged(e,t){const a=this.editing===e&&this.draft?this.draft:this.dashboard.layouts?.[e];return Ft(t,a,this.home)}startEdit(e,t){const a=this.dashboard.layouts?.[e];this.draft={items:Ft(t,a,this.home).map(i=>({key:i.key,size:i.size})),hidden:[...a?.hidden??[]]},this.editing=e,this.category="all",this.sheet=null}stopEdit(){this.editing=null,this.draft=null,this.moving=null}async saveLayout(e){const t=this.editing;if(t){this.saving=!0;try{const a=await this.conn.sendMessagePromise({type:"pine3_home/dashboards/layout",dashboard_id:this.dashboard.id,view:t,layout:e});this.dashboard={...this.dashboard,layouts:a.dashboard.layouts},this.stopEdit()}catch(a){console.warn("Pine3 Home: layout",a),alert("Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel.")}finally{this.saving=!1}}}moveInEdit(e,t){if(!t.dragging){if(Math.hypot(e.clientX-t.x,e.clientY-t.y)<vt)return;t.dragging=!0,this.moving=t.key,e.currentTarget.setPointerCapture(e.pointerId)}const a=this.renderRoot.elementsFromPoint(e.clientX,e.clientY).map(o=>o.closest?.(".w")).find(o=>o&&o.dataset.key&&o.dataset.key!==t.key);if(!a||!this.draft||Date.now()-this.lastReorder<180)return;const i=[...this.draft.items],r=i.findIndex(o=>o.key===t.key),s=i.findIndex(o=>o.key===a.dataset.key);if(r<0||s<0)return;const[n]=i.splice(r,1);i.splice(s,0,n),this.lastReorder=Date.now(),this.draft={...this.draft,items:i}}hideWidget(e){this.draft&&(this.draft={items:this.draft.items.filter(t=>t.key!==e),hidden:[...this.draft.hidden,e]})}resizeWidget(e){if(!this.draft)return;const t=ve(e.kind),a=t[(t.indexOf(e.size)+1)%t.length];this.draft={...this.draft,items:this.draft.items.map(i=>i.key===e.key?{...i,size:a}:i)}}addWidget(e){this.draft&&(this.draft={items:[...this.draft.items,{key:e.key,size:e.size}],hidden:this.draft.hidden.filter(t=>t!==e.key)})}editControls(e,t){return this.editing===e?c`<button class="pill" @click=${()=>this.stopEdit()}>Cancelar</button>
        ${this.dashboard.layouts?.[e]?c`<button class="pill" ?disabled=${this.saving} @click=${()=>this.saveLayout(null)}>${v(f.restore)} Repor</button>`:d}
        <button class="pill pri" ?disabled=${this.saving} @click=${()=>this.saveLayout(this.draft)}>${v(f.check)} Concluído</button>`:this.canEdit&&!this.editing?c`<button class="pill icon" aria-label="Editar esta vista" title="Editar" @click=${()=>this.startEdit(e,t)}>${v(f.edit)}</button>`:d}renderPicker(e,t){if(this.editing!==e||!this.draft)return d;const a=xi(t,this.draft,this.home);return c`<div class="picker">
      <div class="phd"><span class="k">Adicionar · toca para pôr no fim</span><span class="k">Arrasta os cartões para mudar a ordem</span></div>
      <div class="prow">${a.length?a.map(i=>c`<button class="pk" @click=${()=>this.addWidget(i)}><span>${i.name}</span><em>${i.room?.name??""}</em></button>`):c`<span class="k">Já está tudo nesta vista.</span>`}</div>
    </div>`}tap(e){switch(e.kind){case"room-lights":{const t=e.entities.some(a=>this.entities[a]?.state==="on");return this.call("light",t?"turn_off":"turn_on",e.entities)}case"climate":case"weather":case"sensor":case"binary":case"scenes":e.entity&&(this.sheet=e.entity);return;case"scene":this.call(w(e.entity),"turn_on",e.entity),this.flash=e.key,window.setTimeout(()=>{this.flash===e.key&&(this.flash=null)},1200);return;case"camera":this.sheet=e.entity;return;case"lock":this.entities[e.entity]?.state!=="locked"?this.call("lock","lock",e.entity):this.sheet=e.entity;return;default:e.entity&&this.toggle(e.entity)}}longPress(e){if(e.kind==="room-lights"&&e.room){this.openRoom(e.room.id);return}e.entity&&(this.sheet=e.entity)}openRoom(e){this.editing&&this.editing!==e&&this.stopEdit(),this.view=e,this.category="all",this.sheet=null}get dark(){return this.dashboard.theme==="claro"?!1:this.dashboard.theme==="auto"?this.entities["sun.sun"]?.state!=="above_horizon":!0}render(){if(!this.home)return d;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(a=>a.id===this.view),t={vd:!0,light:!this.dark,editing:!!this.editing,[`dock-${this.dashboard.dock}`]:!0};return c`<div class=${m(t)}>
      ${this.renderDock()}
      <main class="main">${e?this.renderRoom(e):this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):d}
    </div>`}renderAmbient(){const e=M(this.home,this.entities),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],r=this.now.getHours()*60+this.now.getMinutes(),s=(r%7-3)*.8,n=(r%5-2)*.8,o=[e.lightsOn?`${e.lightsOn} luz${e.lightsOn>1?"es":""} acesa${e.lightsOn>1?"s":""}`:null,e.alerts?e.alertText:null].filter(Boolean);return c`<div class="vd amb" role="button" aria-label="Tocar para acordar">
      <div class="ambc" style=${`transform:translate(calc(var(--u) * ${s}), calc(var(--u) * ${n}))`}>
        <div class="atime">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</div>
        <div class="adate">${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</div>
        <div class="arow">
          ${t?c`<span class="awx">${Bt(t.state)}<b>${a!=null?`${Math.round(a)}°`:""}</b>${ct[t.state]??t.state}</span>`:d}
          ${i?c`<span class=${`ipma ${i.awarenessLevelID}`}><i></i>Aviso ${$t[i.awarenessLevelID]??""} · ${i.awarenessTypeName.toLowerCase()}</span>`:d}
        </div>
        <div class=${m({astatus:!0,att:e.alerts>0})}>${o.length?o.join(" · "):"Tudo tranquilo em casa"}</div>
      </div>
      <span class="ahint">${this.wallpanel?"Aproxima-te ou toca para acordar":"Toca para acordar"}</span>
    </div>`}renderDock(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden));return c`<nav class="dock" aria-label="Vistas">
      <button class=${m({di:!0,on:this.view==="home"})} @click=${()=>this.openRoom("home")} aria-label="Casa">
        ${v(f.home)}<span class="lb">Casa</span>
      </button>
      <span class="sep"></span>
      <div class="rooms">
        ${e.map(t=>{const a=V(t).filter(i=>this.entities[i]?.state==="on").length;return c`<button class=${m({di:!0,rm:!0,on:this.view===t.id,lit:a>0})} @click=${()=>this.openRoom(t.id)} aria-label=${t.name}>
            ${a?c`<span class="glow"></span>`:d}${v(ut(t.icon))}<span class="lb">${t.name}</span>
            ${a?c`<span class="bdg">${a}</span>`:d}
          </button>`})}
      </div>
      <span class="sep"></span>
      ${Xt.filter(t=>this.viewWidgets(t.id).length).map(t=>{const a=t.id==="@seguranca"?M(this.home,this.entities).alerts:0;return c`<button class=${m({di:!0,on:this.view===t.id})} @click=${()=>this.openRoom(t.id)} aria-label=${t.name}>
          ${v(t.icon)}<span class="lb">${t.name}</span>${a?c`<span class="bdg alert">${a}</span>`:d}
        </button>`})}
      ${this.renderGear()}
    </nav>`}renderHeader(e,t,a=d){const i=M(this.home,this.entities),r=this.home.persons.map(s=>this.entities[s]).filter(s=>!!s);return c`<header class="hdr">
      <div class="t"><span>${t}</span><b>${e}</b></div>
      <div class="chips">
        ${this.editing?d:c`${i.temp?c`<span class="chip"><i style="background:#34c759;color:#06210f">${v(f.therm)}</i><span>Clima<small>${i.temp}</small></span></span>`:d}
        <span class="chip"><i style="background:#ffcf8a;color:#2a1a04">${v(f.bulb)}</i><span>Luzes<small>${i.lightsOn?`${i.lightsOn} acesa${i.lightsOn>1?"s":""}`:"apagadas"}</small></span></span>
        <span class="chip"><i style=${i.alerts?"background:#ff8a5c;color:#2a0f04":"background:#5be3a0;color:#06210f"}>${v(f.shield)}</i><span>Segurança<small>${i.alertText}</small></span></span>
        ${r.length?c`<div class="people">${r.map(s=>{const n=s.attributes.entity_picture,o=s.attributes.friendly_name??s.entity_id;return c`<span class="av" title=${o} style=${n?`background-image:url(${n})`:""}>${n?"":o[0]}${s.state==="home"?c`<i></i>`:d}</span>`})}</div>`:d}`}
        ${a}
      </div>
    </header>`}greeting(){const e=this.now.getHours();return`${e<6?"Boa noite":e<13?"Bom dia":e<20?"Boa tarde":"Boa noite"} · ${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}`}renderHome(){const e=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),t=yt(this.home,this.entities),a=this.arranged("home",t),i=this.editing==="home";return c`${i?this.renderHeader("A editar","Casa",this.editControls("home",t)):this.renderHeader(e,this.greeting(),this.editControls("home",t))}
      ${a.length||i?c`<div class=${m({grid:!0,edit:i})}>${a.map(r=>this.renderWidget(r))}</div>`:c`<p class="empty">Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.</p>`}
      ${this.renderPicker("home",t)}`}viewWidgets(e){return e==="@clima"?bi(this.home,this.entities):e==="@seguranca"?$i(this.home,this.entities):e==="@cenas"?yi(this.home,this.entities):[]}renderView(e){const t=Xt.find(o=>o.id===e),a=this.viewWidgets(e),i=this.arranged(e,a),r=this.editing===e,s=M(this.home,this.entities),n=e==="@clima"?s.temp??"":e==="@seguranca"?s.alertText:`${i.length} cenas e rotinas`;return c`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${v(f.back)}</button>
        <b>${t.name}</b><span>${r?"a editar":n}</span>
        <div class="act">${this.editControls(e,a)}</div>
      </div>
      ${i.length||r?c`<div class=${m({grid:!0,edit:r})}>${i.map(o=>this.renderWidget(o))}</div>`:c`<p class="empty">Nada para mostrar aqui.</p>`}
      ${this.renderPicker(e,a)}`}renderRoom(e){const t=gi(e,this.home.settings?.shown),a=this.arranged(e.id,t),i=this.editing===e.id,r=g=>g.length?a.filter(_=>g.includes(_.kind)).length:a.length,s=mi.filter(g=>r(g.kinds)>0),n=s.find(g=>g.id===this.category)??s[0],o=!i&&n&&n.kinds.length?a.filter(g=>n.kinds.includes(g.kind)):a,l=V(e),h=e.temperature?this.entities[e.temperature]?.state:null,u=e.humidity?this.entities[e.humidity]?.state:null,p=[h&&h!=="unavailable"?`${x(parseFloat(h))}°`:null,u&&u!=="unavailable"?`${x(parseFloat(u),0)}%`:null,e.floor].filter(Boolean).join(" · ");return c`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${v(f.back)}</button>
        <b>${e.name}</b><span>${i?"a editar":p}</span>
        <div class="act">
          ${l.length&&!i?c`<button class="pill" @click=${()=>this.call("light","turn_on",l)}>${v(f.bulb)} Acender</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",l)}>Apagar</button>`:d}
          ${this.editControls(e.id,t)}
        </div>
      </div>
      ${s.length>2&&!i?c`<div class="cats">${s.map(g=>c`<button class=${m({on:g===n})} @click=${()=>this.category=g.id}>${g.name}<em>${r(g.kinds)}</em></button>`)}</div>`:d}
      <div class=${m({grid:!0,edit:i})}>${o.map(g=>this.renderWidget(g))}</div>
      ${this.renderPicker(e.id,t)}`}renderWidget(e){const t=e.entity?this.entities[e.entity]:void 0;if(e.entity&&e.kind!=="weather"&&!t)return d;const a=this.widgetBody(e,t),i={w:!0,[e.size]:!0,on:(a.on??!1)||this.flash===e.key,att:a.att??!1,off:!!e.entity&&pi(t),dragging:this.drag?.key===e.key,moving:this.moving===e.key,[`k-${e.kind}`]:!0,idle:e.kind==="climate"&&t?.state==="off"},r=!!this.editing;return c`<div class=${m(i)} style=${a.style??""} data-key=${e.key}
        @pointerdown=${s=>this.down(s,e)} @pointermove=${s=>this.move(s,e)}
        @pointerup=${s=>this.up(s,e)} @pointercancel=${()=>this.cancel()} @contextmenu=${s=>s.preventDefault()}>
      ${a.fill!=null?c`<div class="fill" style=${Ga({width:`${a.fill}%`,"--fc":a.color??"255,207,138"})}></div>`:d}
      ${a.art??d}
      <span class="nm">${e.entity&&this.home.settings?.names?.[e.entity]||e.name}${a.tag?c`<em>${a.tag}</em>`:d}</span>
      ${a.extra??d}
      <div class="hero" style=${a.heroStyle??""}>${a.hero}${a.small?c`<small>${a.small}</small>`:d}</div>
      ${r?d:a.ctl??d}
      ${r?c`<button class="rmv" aria-label=${`Esconder ${e.name}`} @click=${()=>this.hideWidget(e.key)}>${v(f.minus)}</button>
          <button class="handle" aria-label=${`Mudar o tamanho de ${e.name}`} @click=${()=>this.resizeWidget(e)}>${v(f.resize)}<b>${e.size.toUpperCase()}</b></button>`:d}
    </div>`}widgetBody(e,t){const a=this.level(e);switch(e.kind){case"room-lights":{const i=e.entities.filter(s=>this.entities[s]?.state==="on"),r=i.length?gt(this.entities[i[0]]):"#ffcf8a";return{hero:a?`${a}%`:"Off",small:i.length?i.map(s=>this.name(s,e.room)).slice(0,2).join(" e "):`${e.entities.length} luz${e.entities.length>1?"es":""}`,tag:e.entities.length>1?`${i.length}/${e.entities.length} luzes`:void 0,art:jt(this.typeOf(i[0]??e.entities[0]),a??0,r),fill:a||null,color:Kt(r),on:a>0}}case"light":{const i=gt(t);return{hero:a?`${a}%`:"Off",tag:e.sub&&this.view==="home"?e.sub:void 0,art:jt(this.typeOf(e.entity),a??0,i),fill:a||null,color:Kt(i),on:(a??0)>0,heroStyle:a?`color:${i}`:""}}case"cover":{const i=a??0;return{hero:`${i}%`,small:Ai[t.state]??t.state,art:Qa(i),fill:i,color:"170,200,230"}}case"climate":{const i=t.attributes.temperature,r=t.state,s=(t.attributes.hvac_modes??[]).filter(h=>["heat","cool","off","auto","heat_cool"].includes(h)).slice(0,3),n=r==="cool"?"#6cc8ff":r==="off"?"#5d646e":"#ff9f43",o=t.attributes.current_temperature,l=Gt[t.attributes.hvac_action??r]??bt[r]??r;return{hero:r==="off"?"Off":i!=null?`${x(i)}°`:"—",small:[l,o!=null?`agora ${x(o)}°`:null].filter(Boolean).join(" · "),tag:e.sub,art:ti(r==="off"?null:i??null,n),heroStyle:e.size==="l"?"font-size:calc(var(--u)*7)":"",extra:s.length>1?c`<div class="seg">${s.map(h=>c`<button class=${m({on:h===r})} @click=${()=>this.call("climate","set_hvac_mode",e.entity,{hvac_mode:h})}>${bt[h]}</button>`)}</div>`:d,ctl:i!=null&&r!=="off"?c`<div class="ctl"><button aria-label="Baixar" @click=${()=>this.stepTemp(e.entity,-1)}>${v(f.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(e.entity,1)}>${v(f.plus)}</button></div>`:d}}case"weather":{const i=t?.state??"",r=t?.attributes.temperature,s=this.warnings[0];return{hero:r!=null?`${Math.round(r)}°`:"—",small:ct[i]??i,art:Bt(i),extra:s?c`<span class=${`ipma ${s.awarenessLevelID}`}><i></i>Aviso ${$t[s.awarenessLevelID]??""} · ${s.awarenessTypeName.toLowerCase()}${this.warnings.length>1?` +${this.warnings.length-1}`:""}</span>`:d,ctl:this.hourly.length?c`<div class="hrs">${this.hourly.map(n=>c`<span>${new Date(n.datetime).getHours()}h<b>${Math.round(n.temperature)}°</b>${n.precipitation_probability?`${n.precipitation_probability}%`:""}</span>`)}</div>`:d}}case"lock":{const i=t.state!=="locked";return{hero:i?t.state==="unlocked"?"Destrancada":t.state:"Trancada",small:i?"tocar para trancar":"toque longo para abrir",art:ei(i),att:t.state==="unlocked",heroStyle:"font-size:calc(var(--u)*1.85)"}}case"media":{const i=t.state==="playing",r=t.attributes.media_title??(P(t)?"Ligado":"Desligado"),s=t.attributes.media_artist??t.attributes.app_name??"";return{hero:r,small:s,tag:e.sub,art:ii(t.attributes.entity_picture),on:i,heroStyle:"font-size:calc(var(--u)*2.4)",ctl:P(t)?c`<div class="ctl"><button class="pri" aria-label=${i?"Pausa":"Tocar"} @click=${()=>this.call("media_player","media_play_pause",e.entity)}>${v(i?f.pause:f.play)}</button>
                <button aria-label="Seguinte" @click=${()=>this.call("media_player","media_next_track",e.entity)}>${v(f.next)}</button></div>`:d}}case"vacuum":{const i=t.attributes.battery_level;return{hero:i!=null?`${i}%`:qt[t.state]??t.state,small:qt[t.state]??t.state,art:ai(t.state==="cleaning"),on:t.state==="cleaning"}}case"scenes":return{hero:"",extra:c`<div class="scn">${e.entities.map(i=>c`<button @click=${()=>this.call(w(i),"turn_on",i)}>${v(f.spark)}${this.name(i)}</button>`)}</div>`};case"fan":return{hero:P(t)?t.attributes.percentage!=null?`${t.attributes.percentage}%`:"On":"Off",art:ri(P(t)),on:P(t)};case"switch":case"outlet":{const i=P(t);return{hero:i?"On":"Off",art:si(i),on:i}}case"binary":{const i=t.state==="on",r=t.attributes.device_class;return{hero:r&&["door","window","garage_door","opening"].includes(r)?i?"Aberta":"Fechada":r==="motion"||r==="occupancy"?i?"Movimento":"Calmo":i?"On":"Off",att:i&&!!r&&["door","window","garage_door","opening","moisture","smoke","gas"].includes(r),heroStyle:"font-size:calc(var(--u)*2.4)"}}case"sensor":{const i=t.attributes.unit_of_measurement??"",r=parseFloat(t.state),s=t.attributes.device_class;Number.isNaN(r)||this.historyWanted.add(e.entity);const n=this.history[e.entity],o=n&&n.length>1?`${x(Math.min(...n),0)}–${x(Math.max(...n),0)}`:void 0;return{hero:Number.isNaN(r)?t.state:`${x(r)}${i==="°C"?"°":i==="%"?"%":""}`,small:i&&i!=="°C"&&i!=="%"?i:e.sub,tag:o,art:ni(s==="humidity"?"#3db8f5":s==="temperature"?"#ff9f43":"#5be3a0",n)}}case"clock":return{hero:this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),small:this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})};case"scene":return{hero:"",art:oi(),extra:c`<span class="go">${this.flash===e.key?"Ativada":"Tocar para ativar"}</span>`};case"camera":{const i=t.attributes.entity_picture,r=Math.floor(this.now.getTime()/1e4);return{hero:"",tag:e.sub,art:i?c`<img class="cam" src=${`${i}${i.includes("?")?"&":"?"}t=${r}`} alt="" loading="lazy" />`:d}}}}name(e,t){const a=this.home.settings?.names?.[e];if(a)return a;for(const r of this.home.rooms){const s=r.devices.find(n=>n.id===e);if(s)return s.name}const i=this.entities[e]?.attributes.friendly_name??e.split(".")[1];return t&&i.toLowerCase().startsWith(t.name.toLowerCase()+" ")?i.slice(t.name.length+1):i}stepTemp(e,t){const a=this.entities[e],i=a?.attributes.target_temp_step??.5,r=a?.attributes.temperature??20,s=a?.attributes.min_temp??7,n=a?.attributes.max_temp??35;this.call("climate","set_temperature",e,{temperature:Math.max(s,Math.min(n,Math.round((r+t*i)*10)/10))})}renderSheet(e){const t=this.entities[e];if(!t)return d;const a=w(e),i=this.home.rooms.find(s=>s.devices.some(n=>n.id===e)),r=a==="light"?"luz":a==="cover"?"estore":a==="climate"?"clima":a==="lock"?"fechadura":a==="media_player"?"média":a==="weather"?"tempo":"";return c`<div class="scrim" @click=${()=>this.sheet=null}></div>
      <aside class="sheet" role="dialog" aria-label=${this.name(e,i)}>
        <div class="shd"><span class="k">${[i?.name,r].filter(Boolean).join(" · ")}</span>
          <button class="x" aria-label="Fechar" @click=${()=>this.sheet=null}>${v(f.close)}</button></div>
        <h4>${this.name(e,i)}</h4>
        ${this.sheetBody(e,t)}
        ${this.thisCard(e)}
      </aside>`}deviceOf(e){for(const t of this.home.rooms){const a=t.devices.find(i=>i.id===e);if(a)return a}}typeOf(e){const t=this.home.settings?.types?.[e];if(t&&G[t])return t;const a=this.deviceOf(e);return Ut(e,this.entities[e],{name:a?.name,model:a?.model,manufacturer:a?.manufacturer})}saveHouse(e){this.home={...this.home,settings:{...this.home.settings??{},...e}},this.conn.sendMessagePromise({type:"pine3_home/home/settings",...e}).catch(t=>console.warn("Pine3 Home: settings",t))}thisCard(e){if(!this.settingsButton||!this.deviceOf(e)&&!this.home.rooms.some(u=>u.entities?.some(p=>p.id===e)))return d;const t=this.home.settings??{},a=hi[w(e)]??[],i=this.typeOf(e),r=this.deviceOf(e),s=Ut(e,this.entities[e],{name:r?.name,model:r?.model,manufacturer:r?.manufacturer}),n=!!t.types?.[e],o=u=>{const p={...t.types??{}};u&&u!==s?p[e]=u:delete p[e],this.saveHouse({types:p})},l=u=>{const p={...t.names??{}},g=this.deviceOf(e)?.name;u&&u!==g?p[e]=u.slice(0,40):delete p[e],this.saveHouse({names:p})},h=(t.hidden??[]).includes(e);return c`<div class="this">
      <span class="k">Este cartão · vale para todos os estilos e painéis</span>
      ${a.length>1?c`<div class="tchips" role="group" aria-label="Tipo">${a.map(u=>c`<button class=${m({on:u===i})} aria-pressed=${u===i}
            @click=${()=>o(u)}>${v(G[u].icon)}${G[u].name}</button>`)}</div>
          <span class="auto">${n?c`Escolhido por ti. <button class="lnk" @click=${()=>o(null)}>Voltar ao automático (${G[s].name.toLowerCase()})</button>`:`Adivinhado pelo nome e pelo modelo: ${G[s].name.toLowerCase()}.`}</span>`:d}
      <label class="fld"><span>Nome</span><input .value=${this.name(e)} maxlength="40" @change=${u=>l(u.target.value.trim())} /></label>
      <div class="fld"><span>Esconder este cartão</span>
        <button class="sw" role="switch" aria-checked=${h} aria-label="Esconder este cartão"
          @click=${()=>{this.saveHouse({hidden:h?(t.hidden??[]).filter(u=>u!==e):[...t.hidden??[],e]}),h||(this.sheet=null)}}></button></div>
    </div>`}bigSlider(e,t,a,i,r){const s=this.drag?.key===e?this.drag.value:t,n=o=>{const l=o.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(o.clientX-l.left)/l.width*100)))};return c`<div class="bigsl" role="slider" aria-label=${i} aria-valuenow=${s} aria-valuemin="0" aria-valuemax="100"
      @pointerdown=${o=>{o.currentTarget.setPointerCapture(o.pointerId),this.drag={key:e,value:n(o)}}}
      @pointermove=${o=>{this.drag?.key===e&&o.buttons&&(this.drag={key:e,value:n(o)})}}
      @pointerup=${o=>{const l=n(o);r(l),this.drag={key:e,value:l},window.setTimeout(()=>{this.drag?.key===e&&(this.drag=null)},1500)}}>
      <i style=${`width:${s}%;background:${a}`}></i><b>${s}%</b></div>`}sheetBody(e,t){const a=w(e);if(a==="light"){const r=t.attributes.supported_color_modes??[],s=r.includes("color_temp"),n=r.some(u=>["hs","rgb","rgbw","rgbww","xy"].includes(u)),o=gt(t),l=t.attributes.min_color_temp_kelvin??2200,h=t.attributes.max_color_temp_kelvin??6500;return c`${r.some(u=>u!=="onoff")?this.bigSlider(`sheet-${e}`,U(t),`linear-gradient(90deg,${o},#fff3e0)`,"Brilho",u=>u?this.call("light","turn_on",e,{brightness_pct:u}):this.call("light","turn_off",e)):d}
        ${s?c`<span class="k">Branco</span><div class="tbar" @click=${u=>{const p=u.currentTarget.getBoundingClientRect(),g=(u.clientX-p.left)/p.width;this.call("light","turn_on",e,{color_temp_kelvin:Math.round(l+g*(h-l))})}}></div>`:d}
        ${n?c`<span class="k">Cores</span><div class="pre">${Vi.map(u=>c`<button aria-label=${u} style=${`background:${u}`} class=${m({on:u===o})} @click=${()=>this.call("light","turn_on",e,{rgb_color:be(u)})}></button>`)}</div>`:d}
        <div class="foot"><button class="pill" @click=${()=>this.toggle(e)}>${v(f.power)} ${t.state==="on"?"Desligar":"Ligar"}</button></div>`}if(a==="cover"){const r=t.attributes.current_position??(t.state==="open"?100:0);return c`${t.attributes.supported_features&4?this.bigSlider(`sheet-${e}`,r,"linear-gradient(90deg,#a9b6c4,#dfe6ee)","Posição",s=>this.call("cover","set_cover_position",e,{position:s})):d}
        <div class="foot"><button class="pill" @click=${()=>this.call("cover","open_cover",e)}>Abrir</button><button class="pill" @click=${()=>this.call("cover","stop_cover",e)}>Parar</button><button class="pill" @click=${()=>this.call("cover","close_cover",e)}>Fechar</button></div>`}if(a==="climate"){const r=t.attributes.temperature,s=t.attributes.hvac_modes??[];return c`<div class="bigtemp">${r!=null?`${x(r)}°`:"—"}<small>${Gt[t.attributes.hvac_action??t.state]??""}${t.attributes.current_temperature!=null?` · agora ${x(t.attributes.current_temperature)}°`:""}</small></div>
        <div class="ctl big"><button aria-label="Baixar" @click=${()=>this.stepTemp(e,-1)}>${v(f.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(e,1)}>${v(f.plus)}</button></div>
        <span class="k">Modo</span><div class="seg wide">${s.map(n=>c`<button class=${m({on:n===t.state})} @click=${()=>this.call("climate","set_hvac_mode",e,{hvac_mode:n})}>${bt[n]??n}</button>`)}</div>`}if(a==="lock"){const r=t.state==="locked";return c`<div class="bigtemp">${r?"Trancada":t.state==="unlocked"?"Destrancada":t.state}</div>
        <div class="foot">${r?c`<button class="pill warn" @click=${()=>{this.call("lock","unlock",e),this.sheet=null}}>${v(f.unlock)} Destrancar</button>`:c`<button class="pill pri" @click=${()=>this.call("lock","lock",e)}>${v(f.lock)} Trancar</button>`}</div>`}if(a==="media_player"){const r=Math.round((t.attributes.volume_level??0)*100);return c`<div class="bigtemp" style="font-size:calc(var(--u)*2.6)">${t.attributes.media_title??t.state}<small>${t.attributes.media_artist??""}</small></div>
        ${t.attributes.volume_level!=null?this.bigSlider(`vol-${e}`,r,"linear-gradient(90deg,#3db8f5,#9be0ff)","Volume",s=>this.call("media_player","volume_set",e,{volume_level:s/100})):d}
        <div class="foot"><button class="pill pri" @click=${()=>this.call("media_player","media_play_pause",e)}>${v(t.state==="playing"?f.pause:f.play)} ${t.state==="playing"?"Pausa":"Tocar"}</button>
          <button class="pill" @click=${()=>this.call("media_player","media_next_track",e)}>${v(f.next)}</button>
          <button class="pill" @click=${()=>this.toggle(e)}>${v(f.power)}</button></div>`}if(a==="camera"){const r=t.attributes.entity_picture;return r?c`<img class="camlg" src=${`${r}${r.includes("?")?"&":"?"}t=${Math.floor(this.now.getTime()/1e4)}`} alt=${this.name(e)} />`:c`<p class="k">Sem imagem</p>`}if(a==="weather"){const r=o=>new Date(o).toLocaleString("pt-PT",{weekday:"short",hour:"2-digit",minute:"2-digit"}),s=t.attributes.temperature,n=[t.attributes.humidity!=null?`${t.attributes.humidity}%`:null,t.attributes.wind_speed!=null?`vento ${x(t.attributes.wind_speed,0)} ${t.attributes.wind_speed_unit??""}`:null].filter(Boolean);return c`<div class="bigtemp">${s!=null?`${Math.round(s)}°`:"—"}<small>${[ct[t.state]??t.state,...n].join(" · ")}</small></div>
        <div class="hrs">${this.hourly.map(o=>c`<span>${new Date(o.datetime).getHours()}h<b>${Math.round(o.temperature)}°</b>${o.precipitation_probability?`${o.precipitation_probability}%`:""}</span>`)}</div>
        ${this.warnings.map(o=>c`<div class=${`warn ${o.awarenessLevelID}`}><b>Aviso ${$t[o.awarenessLevelID]??""} · ${o.awarenessTypeName}</b>
          <span>${r(o.startTime)} → ${r(o.endTime)}</span>${o.text?c`<p>${o.text}</p>`:d}</div>`)}
        ${this.home.settings?.ipma_area?d:c`<p class="hint">Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.</p>`}`}const i=t.attributes.unit_of_measurement??"";return c`<div class="bigtemp">${t.state}${i?` ${i}`:""}</div>
      ${["switch","light","fan","input_boolean","vacuum"].includes(a)?c`<div class="foot"><button class="pill pri" @click=${()=>this.toggle(e)}>${v(f.power)} ${P(t)?"Desligar":"Ligar"}</button></div>`:d}`}};b.styles=st;k([H({attribute:!1})],b.prototype,"home",2);k([H({attribute:!1})],b.prototype,"entities",2);k([H({attribute:!1})],b.prototype,"dashboard",2);k([H({attribute:!1})],b.prototype,"conn",2);k([H()],b.prototype,"screenName",2);k([H({type:Boolean})],b.prototype,"canEdit",2);k([H({type:Boolean})],b.prototype,"ambient",2);k([H({type:Boolean})],b.prototype,"settingsButton",2);k([H({type:Boolean})],b.prototype,"preview",2);k([H()],b.prototype,"startView",2);k([H({type:Boolean})],b.prototype,"wallpanel",2);k([C()],b.prototype,"editing",2);k([C()],b.prototype,"draft",2);k([C()],b.prototype,"moving",2);k([C()],b.prototype,"saving",2);k([C()],b.prototype,"view",2);k([C()],b.prototype,"category",2);k([C()],b.prototype,"sheet",2);k([C()],b.prototype,"drag",2);k([C()],b.prototype,"now",2);k([C()],b.prototype,"hourly",2);k([C()],b.prototype,"warnings",2);k([C()],b.prototype,"history",2);k([C()],b.prototype,"flash",2);b=k([rt("pine3-vidro")],b);function be(e){const t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function Kt(e){if(e.startsWith("#"))return be(e).join(",");const t=e.match(/\d+/g);return t?t.slice(0,3).join(","):"255,207,138"}var zi=Object.getOwnPropertyDescriptor,Si=(e,t,a,i)=>{for(var r=i>1?void 0:i?zi(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};const Jt=e=>y`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,Ei=[{id:"home",name:"Casa",color:"#ffd166",icon:f.home},{id:"@divisoes",name:"Divisões",color:"#d9f2e3",icon:f.room},{id:"@clima",name:"Clima",color:"#ffb08a",icon:f.therm},{id:"@seguranca",name:"Segurança",color:"#bfe0ff",icon:f.shield},{id:"@cenas",name:"Cenas",color:"#ffd0c2",icon:f.spark}],Qt=["#ffd166","#d9f2e3","#c9b8ff","#ffd0c2","#bfe0ff","#ffb08a","#e9f5a8"],te={key:"clock",kind:"clock",size:"l",name:""};let wt=class extends b{render(){if(!this.home)return d;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(a=>a.id===this.view),t={vd:!0,bento:!0,editing:!!this.editing};return c`<div class=${m(t)}>
      ${this.renderPills()}
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderRooms():this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):d}
    </div>`}renderPills(){const e=this.home.rooms.some(i=>i.id===this.view),t=M(this.home,this.entities).alerts,a=Ei.filter(i=>i.id==="home"||i.id==="@divisoes"||this.viewWidgets(i.id).length);return c`<nav class="bnav" aria-label="Vistas">
      ${a.map(i=>{const r=this.view===i.id||i.id==="@divisoes"&&e;return c`<button class=${m({on:r})} style=${`--c:${i.color}`} @click=${()=>this.openRoom(i.id)}>
          ${Jt(i.icon)}${i.name}${i.id==="@seguranca"&&t?c`<span class="bb">${t}</span>`:d}
        </button>`})}
      ${this.view==="home"?c`<span class="btools">${this.editControls("home",[te,...yt(this.home,this.entities)])}</span>`:d}
      ${this.renderGear("bgear")}
      <span class="clk">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</span>
    </nav>`}renderHome(){const e=[te,...yt(this.home,this.entities)],t=this.arranged("home",e),a=this.editing==="home";return c`<div class=${m({grid:!0,edit:a})}>${t.map(i=>this.renderWidget(i))}</div>
      ${this.renderPicker("home",e)}`}renderRooms(){const e=this.home.rooms.filter(t=>!t.hidden&&t.devices.some(a=>!a.hidden));return c`<div class="grid">${e.map((t,a)=>{const i=V(t),r=i.filter(n=>this.entities[n]?.state==="on").length,s=t.temperature?parseFloat(this.entities[t.temperature]?.state??""):NaN;return c`<button class=${m({w:!0,s:!0,room:!0,dim:!r})} style=${`--rc:${Qt[a%Qt.length]}`} @click=${()=>this.openRoom(t.id)}>
        <span class="nm">${Jt(ut(t.icon))}${Number.isNaN(s)?d:c`<em>${x(s)}°</em>`}</span>
        <div class="hero">${t.name}<small>${Mt(i.length,r,t.devices.length)}</small></div>
      </button>`})}</div>`}};wt.styles=[st,at`
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
  `];wt=Si([rt("pine3-bento")],wt);var Ti=Object.getOwnPropertyDescriptor,Oi=(e,t,a,i)=>{for(var r=i>1?void 0:i?Ti(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};const Z=e=>y`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${e} fill="currentColor"/></svg>`,ee={home:"Casa","@divisoes":"Divisões","@clima":"Clima","@seguranca":"Segurança","@cenas":"Cenas"},Pi=70,Ri=y`<svg viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 22 Q18 8 36 18 T70 14 T100 18 V46 H0Z" fill="#3c3552" opacity=".85"/>
  <path d="M0 30 Q22 18 46 28 T100 26 V46 H0Z" fill="#252a40"/>
  <path d="M0 38 Q30 30 60 36 T100 34 V46 H0Z" fill="#171b2a"/></svg>`;let kt=class extends b{get order(){return["home","@divisoes",...["@clima","@seguranca","@cenas"].filter(e=>this.viewWidgets(e).length)]}get current(){return this.home.rooms.some(e=>e.id===this.view)?"@divisoes":this.view}step(e){const t=this.order,a=Math.max(0,t.indexOf(this.current));this.openRoom(t[(a+e+t.length)%t.length])}swipeDown(e){const t=e.target;this.editing||this.sheet||t.closest(".w, button, .sheet, .picker, .bigsl")||(this.swipe={x:e.clientX,y:e.clientY,id:e.pointerId})}swipeUp(e){const t=this.swipe;if(this.swipe=void 0,!t||t.id!==e.pointerId)return;const a=e.clientX-t.x;Math.abs(a)>Pi&&Math.abs(a)>Math.abs(e.clientY-t.y)*1.5&&this.step(a<0?1:-1)}render(){if(!this.home)return d;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(n=>n.id===this.view),t=M(this.home,this.entities).lightsOn>0,a=this.view==="home",i={vd:!0,moldura:!0,dim:!t,editing:!!this.editing},r=this.order,s=this.current;return c`<div class=${m(i)} @pointerdown=${n=>this.swipeDown(n)} @pointerup=${n=>this.swipeUp(n)}
        @pointercancel=${()=>this.swipe=void 0}>
      <div class="hills">${Ri}</div>
      ${a?this.renderFrame():c`<div class="panel"><main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderRoomList():this.renderView(this.view)}</main></div>`}
      <div class="pager">
        <b>${e?e.name:ee[s]??""}</b>
        <div class="dots">${r.map(n=>c`<button class=${m({on:n===s})} aria-label=${ee[n]} @click=${()=>this.openRoom(n)}></button>`)}</div>
        ${this.renderGear("mgear")}
      </div>
      ${this.editing?d:c`<button class="edge l" aria-label="Vista anterior" @click=${()=>this.step(-1)}>${Z(f.back)}</button>
          <button class="edge r" aria-label="Vista seguinte" @click=${()=>this.step(1)}>${Z(f.back)}</button>`}
      ${a?c`<span class="hint">desliza para o lado para mudar de vista</span>`:d}
      ${this.sheet?this.renderSheet(this.sheet):d}
    </div>`}renderFrame(){const e=M(this.home,this.entities),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],r=this.home.rooms.filter(u=>!u.hidden&&V(u).length),s=this.home.rooms.flatMap(u=>u.devices).find(u=>!u.hidden&&w(u.id)==="climate"),n=this.home.rooms.flatMap(u=>u.devices).find(u=>!u.hidden&&w(u.id)==="lock"),o=s?this.entities[s.id]:void 0,l=n?this.entities[n.id]:void 0,h=[e.lightsOn?`${e.lightsOn} luz${e.lightsOn>1?"es":""} acesa${e.lightsOn>1?"s":""}`:"luzes apagadas",e.alerts?e.alertText:null].filter(Boolean);return c`<div class="tl">
        <b>${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</span>
      </div>
      <div class="tr">
        ${t?c`<b>${a!=null?`${Math.round(a)}°`:""}</b>${this.weatherWord(t.state)}<br />`:d}
        ${h.join(" · ")}
        ${i?c`<br /><span class=${`ipma ${i.awarenessLevelID}`}><i></i>Aviso ${{yellow:"amarelo",orange:"laranja",red:"vermelho"}[i.awarenessLevelID]??""} · ${i.awarenessTypeName.toLowerCase()}</span>`:d}
      </div>
      <div class="strip">
        ${r.map(u=>{const p=V(u).filter(g=>this.entities[g]?.state==="on").length;return c`<button class=${m({q:!0,on:p>0})} @click=${()=>this.openRoom(u.id)}>
            <i>${Z(ut(u.icon))}</i><span>${u.name}<small>${p?`${p} luz${p>1?"es":""}`:"apagada"}</small></span>
          </button>`})}
        ${s&&o?c`<button class=${m({q:!0,on:o.state!=="off"})} @click=${()=>this.openRoom("@clima")}>
              <i>${Z(f.therm)}</i><span>${o.state==="off"?"Off":`${x(o.attributes.temperature??0)}°`}<small>clima</small></span>
            </button>`:d}
        ${n&&l?c`<button class=${m({q:!0,alert:l.state==="unlocked"})}
                @click=${()=>l.state==="locked"?this.sheet=n.id:this.call("lock","lock",n.id)}>
              <i>${Z(l.state==="locked"?f.lock:f.unlock)}</i><span>${n.name}<small>${l.state==="locked"?"trancada":"destrancada · tocar"}</small></span>
            </button>`:d}
      </div>`}weatherWord(e){return{"clear-night":"Céu limpo",cloudy:"Nublado",fog:"Nevoeiro",lightning:"Trovoada","lightning-rainy":"Trovoada e chuva",partlycloudy:"Pouco nublado",pouring:"Chuva forte",rainy:"Chuva",snowy:"Neve",sunny:"Sol",windy:"Vento"}[e]??e}renderRoomList(){const e=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden)),t=M(this.home,this.entities).lightsOn;return c`<div class="rtop"><b>Divisões</b><span>${t?`${t} luz${t>1?"es":""} acesa${t>1?"s":""}`:"tudo apagado"}</span></div>
      <div class="grid">${e.map(a=>{const i=V(a),r=i.filter(n=>this.entities[n]?.state==="on").length,s=a.temperature?parseFloat(this.entities[a.temperature]?.state??""):NaN;return c`<button class=${m({w:!0,s:!0,rc:!0,on:r>0})} @click=${()=>this.openRoom(a.id)}>
          <span class="nm">${a.name}${Number.isNaN(s)?d:c`<em>${x(s)}°</em>`}</span>
          <div class="hero">${Z(ut(a.icon))}<small>${Mt(i.length,r,a.devices.length)}</small></div>
        </button>`})}</div>`}};kt.styles=[st,at`
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
  `];kt=Oi([rt("pine3-moldura")],kt);var Di=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,$e=(e,t,a,i)=>{for(var r=i>1?void 0:i?Ni(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,a,r):n(r))||r);return i&&r&&Di(t,a,r),r};const Ii=[{id:"home",name:"Casa"},{id:"@divisoes",name:"Divisões"},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Segurança"},{id:"@cenas",name:"Cenas"}],Zi=["nenhuma","uma","duas","três","quatro","cinco","seis","sete","oito","nove","dez"],Bi={yellow:"amarelo",orange:"laranja",red:"vermelho"};let pt=class extends b{constructor(){super(...arguments),this.open=null}get pages(){return Ii.filter(e=>e.id==="home"||e.id==="@divisoes"||this.viewWidgets(e.id).length)}render(){if(!this.home)return d;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(r=>r.id===this.view),t=this.pages,a=e?"@divisoes":this.view,i=Math.max(0,t.findIndex(r=>r.id===a));return c`<div class=${m({vd:!0,editorial:!0,editing:!!this.editing})}>
      <nav class="toc" aria-label="Índice">
        ${t.map(r=>c`<button class=${m({on:r.id===a})} @click=${()=>this.openRoom(r.id)}>${r.name}</button>`)}
        ${this.renderGear("egear")}
        <span class="no">N.º ${i+1} / ${t.length}</span>
      </nav>
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?c`<div class="rtop"><b>Divisões</b><span>${this.lightsLine()}</span></div>${this.renderList(!0)}`:this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):d}
    </div>`}lightsLine(){const e=M(this.home,this.entities).lightsOn;return e?`${e} luz${e>1?"es":""} acesa${e>1?"s":""}`:"tudo apagado"}sentence(){const e=M(this.home,this.entities),t=this.home.rooms.map(h=>h.temperature?parseFloat(this.entities[h.temperature]?.state??""):NaN).filter(h=>!Number.isNaN(h)),a=t.length?Math.round(t.reduce((h,u)=>h+u,0)/t.length):null,i=e.lightsOn>=4?"acolhedora":e.lightsOn?"calma":"às escuras",r=`${Zi[e.lightsOn]??e.lightsOn} ${e.lightsOn===1?"luz":"luzes"}`,s=this.home.rooms.flatMap(h=>h.devices).find(h=>!h.hidden&&w(h.id)==="lock"),n=s?this.entities[s.id]?.state:void 0,o=s&&n?n==="locked"?c`a ${s.name.toLowerCase()} trancada`:c`a ${s.name.toLowerCase()} <em>ainda destrancada</em>`:null,l=[r,a!=null?`${a} graus`:null].filter(Boolean).join(", ");return c`A casa está <em>${i}</em>: ${l}${o?c`, e ${o}`:d}.`}renderHome(){const e=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}).split(":"),t=this.home.weather?this.entities[this.home.weather]:void 0,a=t?.attributes.temperature,i=this.warnings[0],r=[...this.home.scenes,...this.home.scripts].filter(n=>this.entities[n]).slice(0,4),s=this.home.persons.map(n=>this.entities[n]).filter(n=>n?.state==="home");return c`<div class="ed">
      <div class="left">
        <div class="ttl">${e[0]}<em>:</em>${e[1]}</div>
        <div class="sub">${this.sentence()}</div>
        ${r.length?c`<div class="scn">${r.map(n=>c`<button class=${m({on:this.flash===n})} @click=${()=>this.tap({key:n,kind:"scene",size:"s",name:"",entity:n})}>
              ${(this.entities[n].attributes.friendly_name??n).toLowerCase()}</button>`)}</div>`:d}
        <div class="meta">
          ${t?c`<div>Lá fora<b>${a!=null?`${Math.round(a)}°, `:""}${this.weatherWord(t.state)}</b></div>`:d}
          ${i?c`<div class="warnm">Aviso ${Bi[i.awarenessLevelID]??""}<b>${i.awarenessTypeName.toLowerCase()}</b></div>`:d}
          ${s.length?c`<div>Em casa<b>${s.map(n=>(n.attributes.friendly_name??"").split(" ")[0]).join(", ")}</b></div>`:d}
        </div>
      </div>
      ${this.renderList(!1)}
    </div>`}weatherWord(e){return{"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",lightning:"trovoada","lightning-rainy":"trovoada",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve",sunny:"sol",windy:"vento"}[e]??e}renderList(e){const t=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden));return c`<div class=${m({list:!0,full:e})}>${t.map(a=>this.renderRow(a))}</div>`}renderRow(e){const t=V(e),a=t.filter(l=>this.entities[l]?.state==="on").length,i=e.temperature?parseFloat(this.entities[e.temperature]?.state??""):NaN,r=e.devices.find(l=>w(l.id)==="lock"),s=r&&this.entities[r.id]?.state==="unlocked",n=this.open===e.id,o=`${Mt(t.length,a,e.devices.length)}${Number.isNaN(i)?"":` · ${x(i,0)}°`}`;return c`<div class=${m({r:!0,on:a>0})}>
      <div class="h">
        <button class="nmb" aria-expanded=${n} @click=${()=>this.open=n?null:e.id}>${e.name}</button>
        <span>${o}</span>
        ${s?c`<button class="tg warn" @click=${()=>this.call("lock","lock",r.id)}>trancar</button>`:t.length?c`<button class="tg" @click=${()=>this.call("light",a?"turn_off":"turn_on",t)}>${a?"on":"off"}</button>`:c`<button class="tg" @click=${()=>this.openRoom(e.id)}>abrir</button>`}
      </div>
      ${n?c`<div class="ctrls">
            ${t.map(l=>this.lineControl(l,e))}
            <button class="more" @click=${()=>this.openRoom(e.id)}>ver tudo em ${e.name.toLowerCase()} →</button>
          </div>`:d}
    </div>`}lineControl(e,t){const a=this.entities[e],i=`line-${e}`,r=this.drag?.key===i?this.drag.value:U(a),s=n=>{const o=n.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(n.clientX-o.left)/o.width*100)))};return c`<div class="lc">
      <span>${this.name(e,t)}</span><b>${r?`${r}%`:"—"}</b>
      <div class="line" role="slider" aria-label=${this.name(e,t)} aria-valuenow=${r} aria-valuemin="0" aria-valuemax="100"
        @pointerdown=${n=>{n.currentTarget.setPointerCapture(n.pointerId),this.drag={key:i,value:s(n)}}}
        @pointermove=${n=>{this.drag?.key===i&&n.buttons&&(this.drag={key:i,value:s(n)})}}
        @pointerup=${n=>{const o=s(n);this.call("light",o?"turn_on":"turn_off",e,o?{brightness_pct:o}:{}),this.drag={key:i,value:o},window.setTimeout(()=>{this.drag?.key===i&&(this.drag=null)},1500)}}><i style=${`width:${r}%`}></i></div>
    </div>`}};pt.styles=[st,at`
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
  `];$e([C()],pt.prototype,"open",2);pt=$e([rt("pine3-editorial")],pt);var ji=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,Ht=(e,t,a,i)=>{for(var r=i>1?void 0:i?Ui(t,a):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,a,r):n(r))||r);return i&&r&&ji(t,a,r),r};const Wi=[{id:"home",name:"Casa"},{id:"@divisoes",name:"Div."},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Seg."},{id:"@cenas",name:"Cenas"}],R=270,Fi=16,Gi=30;let et=class extends b{constructor(){super(...arguments),this.faderRoom=null,this.dial=null}render(){if(!this.home)return d;if(this.ambient)return this.renderAmbient();const e=this.home.rooms.find(r=>r.id===this.view),t=e?"@divisoes":this.view,a=Wi.filter(r=>r.id==="home"||r.id==="@divisoes"||this.viewWidgets(r.id).length),i=M(this.home,this.entities).alerts;return c`<div class=${m({vd:!0,instrumento:!0,editing:!!this.editing})}>
      <nav class="bank" aria-label="Vistas">
        ${a.map(r=>c`<button class=${m({key:!0,on:r.id===t})} @click=${()=>this.openRoom(r.id)}>
          <span class=${m({led:!0,on:r.id===t,alarm:r.id==="@seguranca"&&i>0})}></span>${r.name}
        </button>`)}
        ${this.settingsButton?c`<button class="key set" @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}><span class="led"></span>Def.</button>`:d}
      </nav>
      <main class="main">${e?this.renderRoom(e):this.view==="@divisoes"?this.renderSwitches(!0):this.view.startsWith("@")?this.renderView(this.view):this.renderConsole()}</main>
      ${this.sheet?this.renderSheet(this.sheet):d}
    </div>`}lightRooms(){return this.home.rooms.filter(e=>!e.hidden&&V(e).length)}renderConsole(){const e=this.home.weather?this.entities[this.home.weather]:void 0,t=e?.attributes.temperature,a=this.warnings[0],i=[...this.home.scenes,...this.home.scripts].filter(o=>this.entities[o]).slice(0,3),r=this.home.rooms.flatMap(o=>o.devices).find(o=>!o.hidden&&w(o.id)==="lock"),s=r?this.entities[r.id]?.state==="locked":!0,n=this.now.toLocaleDateString("pt-PT",{weekday:"short",day:"numeric",month:"short"}).replace(/\./g,"");return c`<div class="console">
      <section class="mod disp">
        <div class="lab"><span>Hora</span><span>${n}</span></div>
        <b>${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</b>
        <span class="ln">${e?`${t!=null?`${Math.round(t)}° · `:""}${ct[e.state]??e.state}`:""}${a?` · aviso ${a.awarenessTypeName.toLowerCase()}`:""}</span>
        <div class="keys">
          ${i.map((o,l)=>c`<button class=${m({btn:!0,on:this.flash===o})} @click=${()=>this.tap({key:o,kind:"scene",size:"s",name:"",entity:o})}>
            ${l+1} ${(this.entities[o].attributes.friendly_name??o).split(" ")[0]}</button>`)}
          ${r?c`<button class=${m({btn:!0,lockw:!s})} @click=${()=>s?this.sheet=r.id:this.call("lock","lock",r.id)}>
                <span class=${m({led:!0,g:s,on:!0})}></span>${s?"Tranc.":"Porta"}</button>`:d}
        </div>
      </section>
      ${this.renderKnob()}
      ${this.renderFaders()}
      ${this.renderSwitches(!1)}
    </div>`}renderKnob(){const e=this.home.rooms.flatMap($=>$.devices.map(A=>({d:A,r:$}))).find(({d:$})=>!$.hidden&&w($.id)==="climate");if(!e)return c`<section class="mod knob"><div class="lab"><span>Clima</span></div><p class="k">Sem termóstato</p></section>`;const t=this.entities[e.d.id],a=!!t&&t.state!=="off",i=t?.attributes.min_temp??Fi,r=Math.min(t?.attributes.max_temp??Gi,i+14),s=this.dial??t?.attributes.temperature??i,n=Math.max(0,Math.min(1,(s-i)/(r-i))),o=-R/2+n*R,l=Array.from({length:29},($,A)=>{const I=(-R/2+A*R/28)*Math.PI/180,nt=A%4?44:41,we=a&&A/28<=n;return y`<line x1=${50+47*Math.sin(I)} y1=${50-47*Math.cos(I)} x2=${50+nt*Math.sin(I)} y2=${50-nt*Math.cos(I)}
        stroke=${we?"#ff6a1a":"#6b6a66"} stroke-width=${A%4?1:1.8} stroke-linecap="round"/>`}),h=t?.attributes.target_temp_step??.5,u=$=>{const A=$.currentTarget.getBoundingClientRect(),I=Math.atan2($.clientX-(A.left+A.width/2),-($.clientY-(A.top+A.height/2)))*180/Math.PI,nt=Math.max(0,Math.min(1,(I+R/2)/R));return Math.round((i+nt*(r-i))/h)*h},p=(t?.attributes.hvac_modes??[]).filter($=>["cool","heat","off","auto","heat_cool"].includes($)).slice(0,3),g={cool:"Frio",heat:"Calor",off:"Off",auto:"Auto",heat_cool:"Auto"},_=t?.attributes.current_temperature;return c`<section class="mod knob">
      <div class="lab"><span>Clima · ${e.r.name}${_!=null?` · ${x(_)}°`:""}</span><span class=${m({led:!0,on:a})}></span></div>
      <div class="dialw" role="slider" aria-label="Temperatura" aria-valuenow=${s} aria-valuemin=${i} aria-valuemax=${r}
        @pointerdown=${$=>{a&&($.currentTarget.setPointerCapture($.pointerId),this.dial=u($))}}
        @pointermove=${$=>{this.dial!=null&&$.buttons&&(this.dial=u($))}}
        @pointerup=${$=>{if(this.dial==null)return;const A=u($);this.call("climate","set_temperature",e.d.id,{temperature:A}),window.setTimeout(()=>this.dial=null,1500)}}>
        <svg viewBox="0 0 100 100" aria-hidden="true">${l}</svg>
        <div class="kn"><i style=${`transform:rotate(${a?o:-R/2}deg)`}></i></div>
        <div class="ktx"><div>${a?`${x(s)}°`:"off"}<small>${a?"roda":"desligado"}</small></div></div>
      </div>
      <div class="keys">${p.map($=>c`<button class=${m({btn:!0,on:t?.state===$})} @click=${()=>this.call("climate","set_hvac_mode",e.d.id,{hvac_mode:$})}>${g[$]}</button>`)}</div>
    </section>`}renderFaders(){const e=this.lightRooms(),t=e.find(s=>s.id===this.faderRoom)??e[0];if(!t)return c`<section class="mod fad"><div class="lab"><span>Faders</span></div></section>`;const a=t.devices.filter(s=>!s.hidden&&w(s.id)==="cover"&&this.entities[s.id]?.attributes.supported_features&4),i=[...V(t).map(s=>({id:s,v:U(this.entities[s]),n:this.name(s,t),cover:!1})),...a.map(s=>({id:s.id,v:this.entities[s.id]?.attributes.current_position??0,n:s.name,cover:!0}))].slice(0,4),r=s=>{const n=s.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(n.bottom-s.clientY)/n.height*100)))};return c`<section class="mod fad">
      <div class="lab"><span>Faders</span><span class="led g on"></span></div>
      <div class="sel">${e.map(s=>c`<button class=${m({btn:!0,on:s.id===t.id})} @click=${()=>this.faderRoom=s.id}>${s.name.slice(0,5)}</button>`)}</div>
      <div class="faders">${i.map(s=>{const n=`fd-${s.id}`,o=this.drag?.key===n?this.drag.value:s.v;return c`<div class="fd"><b>${o}</b>
          <div class="tk" role="slider" aria-label=${s.n} aria-valuenow=${o} aria-valuemin="0" aria-valuemax="100"
            @pointerdown=${l=>{l.currentTarget.setPointerCapture(l.pointerId),this.drag={key:n,value:r(l)}}}
            @pointermove=${l=>{this.drag?.key===n&&l.buttons&&(this.drag={key:n,value:r(l)})}}
            @pointerup=${l=>{const h=r(l);s.cover?this.call("cover","set_cover_position",s.id,{position:h}):this.call("light",h?"turn_on":"turn_off",s.id,h?{brightness_pct:h}:{}),this.drag={key:n,value:h},window.setTimeout(()=>{this.drag?.key===n&&(this.drag=null)},1500)}}><div class="cap" style=${`bottom:calc((100% - var(--u) * 2.1) * ${o/100})`}></div></div>
          <span>${s.n}</span></div>`})}</div>
    </section>`}renderSwitches(e){const t=e?this.home.rooms.filter(i=>!i.hidden&&i.devices.some(r=>!r.hidden)):this.lightRooms().slice(0,6),a=M(this.home,this.entities).lightsOn;return c`<section class=${m({mod:!0,sw:!0,full:e})}>
      <div class="lab"><span>${e?"Divisões":"Luzes"}</span><span>${a} acesa${a===1?"":"s"}</span></div>
      <div class="rows">${t.map(i=>{const r=V(i),s=r.filter(o=>this.entities[o]?.state==="on"),n=s.length?Math.max(...s.map(o=>U(this.entities[o]))):0;return c`<div class="rk">
          <button class=${m({rocker:!0,on:s.length>0})} aria-label=${`Luzes de ${i.name}`} ?disabled=${!r.length}
            @click=${()=>this.call("light",s.length?"turn_off":"turn_on",r)}><i></i></button>
          <button class="rkn" @click=${()=>this.openRoom(i.id)}><b>${i.name}</b><span>${r.length?s.length?`${n}%`:"off":`${i.devices.length} disp.`}</span></button>
        </div>`})}</div>
    </section>`}};et.styles=[st,at`
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
  `];Ht([C()],et.prototype,"faderRoom",2);Ht([C()],et.prototype,"dial",2);et=Ht([rt("pine3-instrumento")],et);const ye={vidro:"pine3-vidro",bento:"pine3-bento",moldura:"pine3-moldura",editorial:"pine3-editorial",instrumento:"pine3-instrumento"},br=e=>Fe(ye[e]??"pine3-vidro"),$r=Object.values(ye).join(", "),yr={vidro:"linear-gradient(180deg,#262b31,#0f1113)",bento:"linear-gradient(135deg,#ffd166 0 33%,#efe9df 33% 66%,#ff7a50 66%)",moldura:"linear-gradient(180deg,#f2b27a,#7c5a8c 60%,#1a1f30)",editorial:"repeating-linear-gradient(180deg,#f1ece3 0 22%,#14110d 22% 24%)",instrumento:"radial-gradient(circle at 60% 50%,#ff6a1a 0 12%,#3a3a38 13%)",orbita:"radial-gradient(circle,#3a3f5a 0 30%,#20232f 31%)",carteira:"linear-gradient(180deg,#e9e4da,#cfc6b6)",lente:"linear-gradient(135deg,#e6e9ee,#c9ced6)"};export{d as A,dr as B,hr as C,G as D,fr as E,ur as F,pr as G,mr as H,fe as I,he as J,T as K,pe as L,$r as M,gr as R,yr as S,hi as T,K as a,nr as b,tr as c,or as d,er as e,sr as f,sa as g,m as h,at as i,c as j,vr as k,Ut as l,rr as m,H as n,ra as o,xa as p,Qi as q,C as r,br as s,Ji as t,Ki as u,ar as v,y as w,rt as x,ir as y,lr as z};
