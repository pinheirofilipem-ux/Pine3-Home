/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=globalThis,Ge=ke.ShadowRoot&&(ke.ShadyCSS===void 0||ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ye=Symbol(),at=new WeakMap;let Ht=class{constructor(e,a,i){if(this._$cssResult$=!0,i!==Ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(Ge&&e===void 0){const i=a!==void 0&&a.length===1;i&&(e=at.get(a)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&at.set(a,e))}return e}toString(){return this.cssText}};const aa=t=>new Ht(typeof t=="string"?t:t+"",void 0,Ye),D=(t,...e)=>{const a=t.length===1?t[0]:e.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new Ht(a,t,Ye)},ia=(t,e)=>{if(Ge)t.adoptedStyleSheets=e.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(const a of e){const i=document.createElement("style"),s=ke.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=a.cssText,t.appendChild(i)}},it=Ge?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let a="";for(const i of e.cssRules)a+=i.cssText;return aa(a)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sa,defineProperty:oa,getOwnPropertyDescriptor:ra,getOwnPropertyNames:na,getOwnPropertySymbols:ca,getPrototypeOf:la}=Object,W=globalThis,st=W.trustedTypes,da=st?st.emptyScript:"",ua=W.reactiveElementPolyfillSupport,ue=(t,e)=>t,Ce={toAttribute(t,e){switch(e){case Boolean:t=t?da:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=t!==null;break;case Number:a=t===null?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch{a=null}}return a}},Xe=(t,e)=>!sa(t,e),ot={attribute:!0,type:String,converter:Ce,reflect:!1,useDefault:!1,hasChanged:Xe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),W.litPropertyMetadata??(W.litPropertyMetadata=new WeakMap);let se=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=ot){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(e,a),!a.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,a);s!==void 0&&oa(this.prototype,e,s)}}static getPropertyDescriptor(e,a,i){const{get:s,set:o}=ra(this.prototype,e)??{get(){return this[a]},set(r){this[a]=r}};return{get:s,set(r){const c=s?.call(this);o?.call(this,r),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ot}static _$Ei(){if(this.hasOwnProperty(ue("elementProperties")))return;const e=la(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ue("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ue("properties"))){const a=this.properties,i=[...na(a),...ca(a)];for(const s of i)this.createProperty(s,a[s])}const e=this[Symbol.metadata];if(e!==null){const a=litPropertyMetadata.get(e);if(a!==void 0)for(const[i,s]of a)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[a,i]of this.elementProperties){const s=this._$Eu(a,i);s!==void 0&&this._$Eh.set(s,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)a.unshift(it(s))}else e!==void 0&&a.push(it(e));return a}static _$Eu(e,a){const i=a.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const i of a.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ia(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,a,i){this._$AK(e,i)}_$ET(e,a){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:Ce).toAttribute(a,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,a){const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Ce;this._$Em=s;const c=r.fromAttribute(a,o.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(e,a,i,s=!1,o){if(e!==void 0){const r=this.constructor;if(s===!1&&(o=this[e]),i??(i=r.getPropertyOptions(e)),!((i.hasChanged??Xe)(o,a)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,a,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,a,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??a??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(a=void 0),this._$AL.set(e,a)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i){const{wrapped:r}=o,c=this[s];r!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,o,c)}}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(a)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach(a=>a.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(a=>this._$ET(a,this[a]))),this._$EM()}updated(e){}firstUpdated(e){}};se.elementStyles=[],se.shadowRootOptions={mode:"open"},se[ue("elementProperties")]=new Map,se[ue("finalized")]=new Map,ua?.({ReactiveElement:se}),(W.reactiveElementVersions??(W.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=globalThis,rt=t=>t,Ae=he.trustedTypes,nt=Ae?Ae.createPolicy("lit-html",{createHTML:t=>t}):void 0,Vt="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,zt="?"+B,ha=`<${zt}>`,Q=document,ge=()=>Q.createComment(""),fe=t=>t===null||typeof t!="object"&&typeof t!="function",Ke=Array.isArray,pa=t=>Ke(t)||typeof t?.[Symbol.iterator]=="function",Se=`[ 	
\f\r]`,de=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,lt=/>/g,G=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,ut=/"/g,St=/^(?:script|style|textarea|title)$/i,Pt=t=>(e,...a)=>({_$litType$:t,strings:e,values:a}),l=Pt(1),$=Pt(2),F=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ht=new WeakMap,K=Q.createTreeWalker(Q,129);function Tt(t,e){if(!Ke(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return nt!==void 0?nt.createHTML(e):e}const ma=(t,e)=>{const a=t.length-1,i=[];let s,o=e===2?"<svg>":e===3?"<math>":"",r=de;for(let c=0;c<a;c++){const d=t[c];let p,h,f=-1,b=0;for(;b<d.length&&(r.lastIndex=b,h=r.exec(d),h!==null);)b=r.lastIndex,r===de?h[1]==="!--"?r=ct:h[1]!==void 0?r=lt:h[2]!==void 0?(St.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=G):h[3]!==void 0&&(r=G):r===G?h[0]===">"?(r=s??de,f=-1):h[1]===void 0?f=-2:(f=r.lastIndex-h[2].length,p=h[1],r=h[3]===void 0?G:h[3]==='"'?ut:dt):r===ut||r===dt?r=G:r===ct||r===lt?r=de:(r=G,s=void 0);const P=r===G&&t[c+1].startsWith("/>")?" ":"";o+=r===de?d+ha:f>=0?(i.push(p),d.slice(0,f)+Vt+d.slice(f)+B+P):d+B+(f===-2?c:P)}return[Tt(t,o+(t[a]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class be{constructor({strings:e,_$litType$:a},i){let s;this.parts=[];let o=0,r=0;const c=e.length-1,d=this.parts,[p,h]=ma(e,a);if(this.el=be.createElement(p,i),K.currentNode=this.el.content,a===2||a===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=K.nextNode())!==null&&d.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(Vt)){const b=h[r++],P=s.getAttribute(f).split(B),w=/([.?@])?(.*)/.exec(b);d.push({type:1,index:o,name:w[2],strings:P,ctor:w[1]==="."?fa:w[1]==="?"?ba:w[1]==="@"?va:ze}),s.removeAttribute(f)}else f.startsWith(B)&&(d.push({type:6,index:o}),s.removeAttribute(f));if(St.test(s.tagName)){const f=s.textContent.split(B),b=f.length-1;if(b>0){s.textContent=Ae?Ae.emptyScript:"";for(let P=0;P<b;P++)s.append(f[P],ge()),K.nextNode(),d.push({type:2,index:++o});s.append(f[b],ge())}}}else if(s.nodeType===8)if(s.data===zt)d.push({type:2,index:o});else{let f=-1;for(;(f=s.data.indexOf(B,f+1))!==-1;)d.push({type:7,index:o}),f+=B.length-1}o++}}static createElement(e,a){const i=Q.createElement("template");return i.innerHTML=e,i}}function ce(t,e,a=t,i){if(e===F)return e;let s=i!==void 0?a._$Co?.[i]:a._$Cl;const o=fe(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(t),s._$AT(t,a,i)),i!==void 0?(a._$Co??(a._$Co=[]))[i]=s:a._$Cl=s),s!==void 0&&(e=ce(t,s._$AS(t,e.values),s,i)),e}class ga{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:i}=this._$AD,s=(e?.creationScope??Q).importNode(a,!0);K.currentNode=s;let o=K.nextNode(),r=0,c=0,d=i[0];for(;d!==void 0;){if(r===d.index){let p;d.type===2?p=new $e(o,o.nextSibling,this,e):d.type===1?p=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(p=new $a(o,this,e)),this._$AV.push(p),d=i[++c]}r!==d?.index&&(o=K.nextNode(),r++)}return K.currentNode=Q,s}p(e){let a=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,a),a+=i.strings.length-2):i._$AI(e[a])),a++}}class $e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,i,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&e?.nodeType===11&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=ce(this,e,a),fe(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==F&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):pa(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Q.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=be.createElement(Tt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(a);else{const o=new ga(s,this),r=o.u(this.options);o.p(a),this.T(r),this._$AH=o}}_$AC(e){let a=ht.get(e.strings);return a===void 0&&ht.set(e.strings,a=new be(e)),a}k(e){Ke(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let i,s=0;for(const o of e)s===a.length?a.push(i=new $e(this.O(ge()),this.O(ge()),this,this.options)):i=a[s],i._$AI(o),s++;s<a.length&&(this._$AR(i&&i._$AB.nextSibling,s),a.length=s)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e!==this._$AB;){const i=rt(e).nextSibling;rt(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ze{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=a,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(e,a=this,i,s){const o=this.strings;let r=!1;if(o===void 0)e=ce(this,e,a,0),r=!fe(e)||e!==this._$AH&&e!==F,r&&(this._$AH=e);else{const c=e;let d,p;for(e=o[0],d=0;d<o.length-1;d++)p=ce(this,c[i+d],a,d),p===F&&(p=this._$AH[d]),r||(r=!fe(p)||p!==this._$AH[d]),p===u?e=u:e!==u&&(e+=(p??"")+o[d+1]),this._$AH[d]=p}r&&!s&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class fa extends ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class ba extends ze{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class va extends ze{constructor(e,a,i,s,o){super(e,a,i,s,o),this.type=5}_$AI(e,a=this){if((e=ce(this,e,a,0)??u)===F)return;const i=this._$AH,s=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==u&&(i===u||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class $a{constructor(e,a,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ce(this,e)}}const wa=he.litHtmlPolyfillSupport;wa?.(be,$e),(he.litHtmlVersions??(he.litHtmlVersions=[])).push("3.3.3");const ya=(t,e,a)=>{const i=a?.renderBefore??e;let s=i._$litPart$;if(s===void 0){const o=a?.renderBefore??null;i._$litPart$=s=new $e(e.insertBefore(ge(),o),o,void 0,a??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=globalThis;let re=class extends se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var a;const e=super.createRenderRoot();return(a=this.renderOptions).renderBefore??(a.renderBefore=e.firstChild),e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ya(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};re._$litElement$=!0,re.finalized=!0,pe.litElementHydrateSupport?.({LitElement:re});const ka=pe.litElementPolyfillSupport;ka?.({LitElement:re});(pe.litElementVersions??(pe.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=t=>(e,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xa={attribute:!0,type:String,converter:Ce,reflect:!1,hasChanged:Xe},Ca=(t=xa,e,a)=>{const{kind:i,metadata:s}=a;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(a.name,t),i==="accessor"){const{name:r}=a;return{set(c){const d=e.get.call(this);e.set.call(this,c),this.requestUpdate(r,d,t,!0,c)},init(c){return c!==void 0&&this.C(r,void 0,t,c),c}}}if(i==="setter"){const{name:r}=a;return function(c){const d=this[r];e.call(this,c),this.requestUpdate(r,d,t,!0,c)}}throw Error("Unsupported decorator location: "+i)};function V(t){return(e,a)=>typeof a=="object"?Ca(t,e,a):((i,s,o)=>{const r=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),r?Object.getOwnPropertyDescriptor(s,o):void 0})(t,e,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(t){return V({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=Symbol.for(""),Aa=t=>{if(t?.r===Et)return t?._$litStatic$},_a=t=>({_$litStatic$:t,r:Et}),pt=new Map,La=t=>(e,...a)=>{const i=a.length;let s,o;const r=[],c=[];let d,p=0,h=!1;for(;p<i;){for(d=e[p];p<i&&(o=a[p],(s=Aa(o))!==void 0);)d+=s+e[++p],h=!0;p!==i&&c.push(o),r.push(d),p++}if(p===i&&r.push(e[i]),h){const f=r.join("$$lit$$");(e=pt.get(f))===void 0&&(r.raw=r,pt.set(f,e=r)),a=c}return t(e,...a)},mt=La(l);var Ma="M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z",Ha="M11,9A4,4 0 0,1 15,13A4,4 0 0,1 11,17A4,4 0 0,1 7,13A4,4 0 0,1 11,9M11,11A2,2 0 0,0 9,13A2,2 0 0,0 11,15A2,2 0 0,0 13,13A2,2 0 0,0 11,11M7,4H14A4,4 0 0,1 18,8V9H16V8A2,2 0 0,0 14,6H7A2,2 0 0,0 5,8V20H16V18H18V22H3V8A4,4 0 0,1 7,4M16,11C18.5,11 18.5,9 21,9V11C18.5,11 18.5,13 16,13V11M16,15C18.5,15 18.5,13 21,13V15C18.5,15 18.5,17 16,17V15Z",Va="M10 10V12H8V10H10M16 12V10H14V12H16M21 14V22H3V14H4V10C4 5.58 7.58 2 12 2S20 5.58 20 10V14H21M7 16H5V20H7V16M11 16H9V20H11V16M11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08M13 14H18V10C18 7.03 15.84 4.56 13 4.08V14M15 16H13V20H15V16M19 16H17V20H19V16Z",za="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z",Sa="M20 19V3H4V19H2V21H22V19H20M16 9H18V11H16V9M14 11H6V9H14V11M18 7H16V5H18V7M14 5V7H6V5H14M6 19V13H14V14.82C13.55 15.14 13.25 15.66 13.25 16.25C13.25 17.22 14.03 18 15 18S16.75 17.22 16.75 16.25C16.75 15.66 16.45 15.13 16 14.82V13H18V19H6Z",Pa="M6.03 12.03L8.03 15.5L5.5 18.68L2 12.62L6.03 12.03M17 18V15.29C17.88 14.9 18.5 14.03 18.5 13C18.5 12.43 18.3 11.9 17.97 11.5L19.94 10.35C20.95 9.76 21.3 8.47 20.71 7.46L19.33 5.06C18.74 4.05 17.45 3.7 16.44 4.28L8.31 9C7.36 9.53 7.03 10.75 7.58 11.71L9.08 14.31C9.63 15.26 10.86 15.59 11.81 15.04L13.69 13.96C13.94 14.55 14.41 15.03 15 15.29V18C15 19.1 15.9 20 17 20H22V18H17Z",Ta="M8,9H11V4H13V9H16L20,17H4L8,9M14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18H14Z",Ea="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",Oa="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Na="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",Ra="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",Da="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",Ot="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",Nt="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z",Ia="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z",Ba="M3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8V19H19V17H15V19H13V8H5V19H3V8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6M16 10.5V11H18V10.5C18 10.22 17.78 10 17.5 10H16.5C16.22 10 16 10.22 16 10.5M16 14.5V15H18V14.5C18 14.22 17.78 14 17.5 14H16.5C16.22 14 16 14.22 16 14.5Z",Rt="M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z",ja="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z",Wa="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",Fa="M15,2L17,9H7L9,2M11,10H13V20H16V22H8V20H11V10Z",qa="M8.66,13.07C6.92,13.07 5.5,11.66 5.5,9.93C5.5,9.22 5.76,8.54 6.19,8C5.77,7.46 5.5,6.78 5.5,6.07C5.5,4.34 6.93,2.93 8.66,2.93L9.09,2.96C9.56,1.81 10.69,1 12,1C13.31,1 14.44,1.81 14.91,2.96L15.34,2.93C17.07,2.93 18.5,4.34 18.5,6.07C18.5,6.78 18.24,7.46 17.81,8C18.23,8.54 18.5,9.22 18.5,9.93C18.5,11.66 17.07,13.07 15.34,13.07L14.91,13.04C14.44,14.19 13.31,15 12,15C10.69,15 9.56,14.19 9.09,13.04L8.66,13.07M12,13C12.62,13 13.12,12.5 13.14,11.9L13.03,10.81C12.71,10.93 12.36,11 12,11C11.64,11 11.3,10.93 11,10.81L10.86,11.9C10.88,12.5 11.38,13 12,13M15.34,11.07C15.97,11.07 16.5,10.56 16.5,9.92C16.5,9.5 16.23,9.08 15.83,8.89L14.95,8.47C14.83,9.21 14.44,9.85 13.89,10.3L14.7,10.87C14.88,11 15.1,11.07 15.34,11.07M14.69,5.13L13.87,5.69C14.43,6.14 14.82,6.78 14.94,7.5L15.82,7.1C16.23,6.9 16.5,6.5 16.5,6.07C16.5,5.44 15.97,4.93 15.34,4.93C15.11,4.93 14.89,5 14.69,5.13M12,3C11.38,3 10.88,3.5 10.86,4.1L11,5.19C11.3,5.07 11.64,5 12,5C12.36,5 12.71,5.07 13.03,5.19L13.14,4.1C13.12,3.5 12.62,3 12,3M8.66,4.93C8.03,4.93 7.5,5.44 7.5,6.07C7.5,6.5 7.77,6.9 8.17,7.1L9.05,7.5C9.17,6.78 9.56,6.14 10.11,5.69L9.3,5.13C9.12,5 8.9,4.93 8.66,4.93M8.17,8.9C7.77,9.1 7.5,9.5 7.5,9.92C7.5,10.55 8.03,11.06 8.66,11.06C8.89,11.06 9.11,11 9.31,10.86L10.12,10.31C9.56,9.86 9.17,9.22 9.05,8.5L8.17,8.9M12,22A9,9 0 0,1 3,13A9,9 0 0,1 12,22A9,9 0 0,1 21,13A9,9 0 0,1 12,22M14.44,19.56C16.34,18.85 17.85,17.34 18.56,15.44C16.66,16.14 15.15,17.66 14.44,19.56M5.44,15.44C6.15,17.34 7.66,18.85 9.56,19.56C8.86,17.66 7.34,16.15 5.44,15.44Z",Ua="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z",Za="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",Ga="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22",Ya="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z",Xa="M2.95 3L2 6.91L19.34 11.25L20.29 7.34L2.95 3M6.09 6.89L4.16 6.41L4.64 4.46L6.57 4.94L6.09 6.89M9.94 7.86L8 7.38L8.5 5.42L10.42 5.91L9.94 7.86M13.8 8.82L11.87 8.34L12.35 6.39L14.27 6.87L13.8 8.82M17.65 9.79L15.72 9.31L16.2 7.35L18.13 7.84L17.65 9.79M4.66 12.75L3.71 16.66L21.05 21L22 17.1L4.66 12.75M7.8 16.65L5.88 16.16L6.35 14.21L8.28 14.69L7.8 16.65M11.65 17.61L9.73 17.13L10.2 15.18L12.13 15.66L11.65 17.61M15.5 18.58L13.58 18.09L14.06 16.14L16 16.62L15.5 18.58M19.36 19.54L17.43 19.06L17.91 17.11L19.84 17.59L19.36 19.54M6.25 12.11L11 10.2L17.75 11.89L13 13.8L6.25 12.11Z",Ka="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z",Qa="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",Dt="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",Ja="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",ei="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",no="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",ti="M19,13H5V11H19V13Z",ai="M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",ii="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z",si="M14,19H18V5H14M6,19H10V5H6V19Z",oi="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z",ri="M8,5.14V19.14L19,12.14L8,5.14Z",It="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",ni="M2,15C3.67,14.25 5.33,13.5 7,13.17V5A3,3 0 0,1 10,2C11.31,2 12.42,2.83 12.83,4H10A1,1 0 0,0 9,5V6H14V5A3,3 0 0,1 17,2C18.31,2 19.42,2.83 19.83,4H17A1,1 0 0,0 16,5V14.94C18,14.62 20,13 22,13V15C19.78,15 17.56,17 15.33,17C13.11,17 10.89,15 8.67,15C6.44,15 4.22,16 2,17V15M14,8H9V10H14V8M14,12H9V13C10.67,13.16 12.33,14.31 14,14.79V12M2,19C4.22,18 6.44,17 8.67,17C10.89,17 13.11,19 15.33,19C17.56,19 19.78,17 22,17V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V19Z",ci="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",li="M7.5,10.5A1.5,1.5 0 0,1 9,12A1.5,1.5 0 0,1 7.5,13.5C6.66,13.5 6,12.83 6,12A1.5,1.5 0 0,1 7.5,10.5M16.5,10.5A1.5,1.5 0 0,1 18,12A1.5,1.5 0 0,1 16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5M4.22,2H19.78C21,2 22,3 22,4.22V19.78A2.22,2.22 0 0,1 19.78,22H4.22C3,22 2,21 2,19.78V4.22A2.22,2.22 0 0,1 4.22,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",di="M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z",ui="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z",hi="M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6A6,6 0 0,1 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12A6,6 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z",pi="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14",mi="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z",gi="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z",fi="M16,18H18V6H16M6,18L14.5,12L6,6V18Z",bi="M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z",vi="M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z",$i="M20.07,19.07L18.66,17.66C20.11,16.22 21,14.21 21,12C21,9.78 20.11,7.78 18.66,6.34L20.07,4.93C21.88,6.74 23,9.24 23,12C23,14.76 21.88,17.26 20.07,19.07M17.24,16.24L15.83,14.83C16.55,14.11 17,13.11 17,12C17,10.89 16.55,9.89 15.83,9.17L17.24,7.76C18.33,8.85 19,10.35 19,12C19,13.65 18.33,15.15 17.24,16.24M4,3H12A2,2 0 0,1 14,5V19A2,2 0 0,1 12,21H4A2,2 0 0,1 2,19V5A2,2 0 0,1 4,3M8,5A2,2 0 0,0 6,7A2,2 0 0,0 8,9A2,2 0 0,0 10,7A2,2 0 0,0 8,5M8,11A4,4 0 0,0 4,15A4,4 0 0,0 8,19A4,4 0 0,0 12,15A4,4 0 0,0 8,11M8,13A2,2 0 0,1 10,15A2,2 0 0,1 8,17A2,2 0 0,1 6,15A2,2 0 0,1 8,13Z",wi="M9,16.5L9.91,15.59L15.13,20.8L14.21,21.71L9,16.5M15.5,10L16.41,9.09L21.63,14.3L20.71,15.21L15.5,10M6.72,2.72L10.15,6.15L6.15,10.15L2.72,6.72C1.94,5.94 1.94,4.67 2.72,3.89L3.89,2.72C4.67,1.94 5.94,1.94 6.72,2.72M14.57,7.5L15.28,8.21L8.21,15.28L7.5,14.57L6.64,11.07L11.07,6.64L14.57,7.5Z",yi="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z",ki="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z",xi="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4M7,8H13V13H7V8M14,8H17V10H14V8M17,11V16H14V11H17M7,14H13V16H7V14Z",Ci="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12",Ai="M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z",_i="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M16,16L19,8H16.5L15,12.5L13.5,8H5V10H8V16H10V10H11.77L14,16H16Z",Li="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",Bt="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",Mi="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z",Hi="M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z",Vi="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",zi="M21 20V2H3V20H1V23H23V20M19 4V11H13V4M5 4H11V11H5M5 20V13H11V20M13 20V13H19V20Z";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={ATTRIBUTE:1,CHILD:2},Qe=t=>(...e)=>({_$litDirective$:t,values:e});let Je=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,i){this._$Ct=e,this._$AM=a,this._$Ci=i}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=Qe(class extends Je{constructor(t){if(super(t),t.type!==jt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const a=t.element.classList;for(const i of this.st)i in e||(a.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||this.nt?.has(i)||(s?(a.add(i),this.st.add(i)):(a.remove(i),this.st.delete(i)))}return F}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt="important",Si=" !"+Wt,Pi=Qe(class extends Je{constructor(t){if(super(t),t.type!==jt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,a)=>{const i=t[a];return i==null?e:e+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:a}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?a.removeProperty(i):a[i]=null);for(const i in e){const s=e[i];if(s!=null){this.ft.add(i);const o=typeof s=="string"&&s.endsWith(Si);i.includes("-")||o?a.setProperty(i,o?s.slice(0,-11):s,o?Wt:""):a[i]=s}}return F}});function lo(t){return{type:"auth",access_token:t}}function uo(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function Ti(){return{type:"get_states"}}function Ei(t,e,a,i,s){const o={type:"call_service",domain:t,service:e,target:i,return_response:s};return a&&(o.service_data=a),o}function ho(t){const e={type:"subscribe_events"};return t&&(e.event_type=t),e}function po(t){return{type:"unsubscribe_events",subscription:t}}function mo(){return{type:"ping"}}function go(t,e){return{type:"result",success:!1,error:{code:t,message:e}}}const fo=t=>t.sendMessagePromise(Ti()),Oi=(t,e,a,i,s,o)=>t.sendMessagePromise(Ei(e,a,i,s,o)),g={home:Ya,therm:Bt,bulb:Qa,shield:pi,spark:Ia,play:ri,pause:si,next:fi,minus:ti,plus:It,close:Ot,back:Na,lock:Dt,unlock:Ja,power:ci,room:Li,edit:oi,resize:di,check:Ea,restore:ui,gear:Nt},et={"mdi:shower":mi,"mdi:silverware-fork-knife":gi,"mdi:table-chair":ki,"mdi:sofa":bi,"mdi:bed":za,"mdi:teddy-bear":Ci,"mdi:desk":Ba,"mdi:garage":Za,"mdi:flower":qa,"mdi:balcony":Va,"mdi:pool":ni,"mdi:washing-machine":Hi,"mdi:door":Rt,"mdi:dumbbell":ja,"mdi:stairs":yi},Ni=Object.keys(et),Pe=t=>et[t]??g.room,J=t=>t&&et[t]||g.room;let Ri=0;const le=t=>`${t}${++Ri}`,T=t=>$`<svg class="art" viewBox="0 0 60 60" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">${t}</svg>`;function Di(t,e="#ffcf8a"){const a=le("l");return T($`<defs><radialGradient id=${a} cx="36" cy="40" r="28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${e} stop-opacity=${t/100*.85}/><stop offset="1" stop-color=${e} stop-opacity="0"/></radialGradient></defs>
    <circle cx="36" cy="40" r="28" fill=${`url(#${a})`}/><line x1="36" y1="0" x2="36" y2="22" stroke="#6b717a" stroke-width=".8"/>
    <path d="M25 34 L47 34 L41.5 21 L30.5 21 Z" fill=${t?"#d9c6a3":"#4a4f57"}/><ellipse cx="36" cy="34.5" rx="11" ry="1.7" fill=${t?"#fff2d6":"#3a3e45"}/>`)}function Ii(t){const e=Math.max(0,Math.min(100,100-t)),a=Array.from({length:Math.round(e/11)},(i,s)=>$`<line x1="20" x2="54" y1=${12+s*4.2} y2=${12+s*4.2} stroke="#8796a6" stroke-width=".5"/>`);return T($`<rect x="20" y="10" width="34" height="46" rx="2" fill="#2d4a66" opacity=".6"/><circle cx="44" cy="22" r="5" fill="#ffd27a" opacity=".5"/>
    <rect x="20" y="10" width="34" height=${(46*e/100).toFixed(1)} fill="#a9b6c4"/>${a}<rect x="18" y="8" width="38" height="3" rx="1" fill="#5d646e"/>`)}function Bi(t,e="#ff9f43"){const a=t==null?0:Math.max(0,Math.min(1,(t-16)/14));return T($`<circle cx="40" cy="36" r="17" fill="#2a2e34" stroke="#454a52"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="2.6" stroke-dasharray=${`${(a*81).toFixed(1)} 82`} transform="rotate(135 40 36)" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="7" opacity=".08"/>`)}function ji(t){return T($`<rect x="28" y="12" width="24" height="44" rx="3" fill="#3a3f46"/><rect x="31" y="15" width="18" height="38" rx="2" fill="#2b2f35"/>
    <circle cx="34" cy="34" r="1.6" fill=${t?"#ff8a5c":"#5be3a0"}/><rect x=${t?44:38} y="33.2" width="6" height="1.6" rx=".8" fill="#8a919b"/>`)}function Wi(t){return T($`<ellipse cx="40" cy="50" rx="16" ry="4" fill="#000" opacity=".3"/><ellipse cx="40" cy="44" rx="15" ry="6" fill="#d8dce1"/><rect x="25" y="38" width="30" height="6" fill="#d8dce1"/>
    <ellipse cx="40" cy="38" rx="15" ry="6" fill="#eef0f3"/><circle cx="40" cy="36" r="3.4" fill=${t?"#5be3a0":"#c4c9cf"}/>
    ${t?$`<path d="M10 50 Q20 46 26 48" stroke="#5be3a0" stroke-width=".8" fill="none" stroke-dasharray="1.2 1.2" opacity=".8"/>`:null}`)}function Fi(t){if(t)return T($`<image href=${t} x="26" y="14" width="30" height="30" preserveAspectRatio="xMidYMid slice" transform="rotate(6 41 29)"/>`);const e=le("a");return T($`<defs><linearGradient id=${e} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3a35f"/><stop offset=".5" stop-color="#d96d6d"/><stop offset=".75" stop-color="#5c4a8a"/><stop offset="1" stop-color="#2e2a54"/></linearGradient></defs>
    <rect x="26" y="14" width="30" height="30" rx="3" fill=${`url(#${e})`} transform="rotate(6 41 29)"/><circle cx="46" cy="22" r="3" fill="#ffe7b8" opacity=".9" transform="rotate(6 41 29)"/>`)}function gt(t){const e=!/rain|pour|snow|fog|cloudy$|lightning|night/.test(t)||t==="partlycloudy",a=t!=="sunny"&&t!=="clear-night",i=/rain|pour|lightning/.test(t),s=t==="clear-night";return T($`${e?$`<circle cx="44" cy="20" r="8" fill="#ffd27a" opacity=".85"/>`:null}
    ${s?$`<path d="M46 12a9 9 0 1 0 6 14 7 7 0 1 1-6-14z" fill="#e8e3c8" opacity=".9"/>`:null}
    ${a?$`<path d="M28 36h20a6 6 0 0 0 .6-12 9 9 0 0 0-17 2.5A5 5 0 0 0 28 36z" fill="#cfd6df"/>`:null}
    ${i?$`<path d="M32 40l-2 6M38 40l-2 6M44 40l-2 6" stroke="#6cc8ff" stroke-width="1.4" stroke-linecap="round"/>`:null}`)}function qi(t){return T($`<g transform="translate(40 34)"><g class=${t?"spin":""}>
    ${[0,120,240].map(e=>$`<ellipse cx="0" cy="-8" rx="4" ry="8" fill="#cfd6df" opacity=".85" transform=${`rotate(${e})`}/>`)}
    </g><circle r="2.6" fill="#8a919b"/></g>`)}function Ui(t){return T($`<rect x="28" y="20" width="24" height="24" rx="6" fill="#3a3f46"/><circle cx="36" cy="32" r="1.8" fill="#1b1e22"/><circle cx="44" cy="32" r="1.8" fill="#1b1e22"/>
    <circle cx="48" cy="24" r="1.4" fill=${t?"#5be3a0":"#5d646e"}/>`)}function Zi(t,e){let a="M0 26 L100 26";if(e&&e.length>1){const i=Math.min(...e),o=Math.max(...e)-i||1;a=e.map((c,d)=>[d/(e.length-1)*100,34-(c-i)/o*26]).map(([c,d],p)=>`${p?"L":"M"}${c.toFixed(1)} ${d.toFixed(1)}`).join(" ")}return $`<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d=${`${a} V40 H0Z`} fill=${t} opacity=".12"/><path d=${a} fill="none" stroke=${t} stroke-width="1.4" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity=".85"/></svg>`}function Gi(){return T($`<circle cx="42" cy="34" r="14" fill="#b49cff" opacity=".18"/><path d="M42 22l2.6 7.4L52 32l-7.4 2.6L42 42l-2.6-7.4L32 32l7.4-2.6z" fill="#d9ccff"/><path d="M52 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#ffe2b0"/>`)}function Yi(t,e="#ffcf8a"){const a=le("f");return T($`<defs><radialGradient id=${a} cx="40" cy="22" r="22" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${e} stop-opacity=${t/100*.9}/><stop offset="1" stop-color=${e} stop-opacity="0"/></radialGradient></defs>
    <circle cx="40" cy="22" r="22" fill=${`url(#${a})`}/><path d="M33 26 L47 26 L44 14 L36 14Z" fill=${t?"#e6d6b8":"#4a4f57"}/>
    <line x1="40" y1="26" x2="40" y2="56" stroke="#6b717a" stroke-width="1.2"/><ellipse cx="40" cy="57" rx="6" ry="1.2" fill="#555b63"/>`)}function Xi(t,e="#ffcf8a"){const a=le("s");return T($`<defs><linearGradient id=${a} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${e} stop-opacity=${t/100*.7}/><stop offset="1" stop-color=${e} stop-opacity="0"/></linearGradient></defs>
    <rect x="12" y="31" width="46" height="25" fill=${`url(#${a})`}/><rect x="12" y="28" width="46" height="3" rx="1.5" fill=${t?e:"#4a4f57"} opacity=${t?.45+t/200:1}/>
    ${[16,23,30,37,44,51].map(i=>$`<circle cx=${i} cy="29.5" r=".8" fill="#fff" opacity=${t?.9:.15}/>`)}`)}function Ki(t,e="#ffcf8a"){const a=le("p");return T($`<defs><linearGradient id=${a} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${e} stop-opacity=${t/100*.6}/><stop offset="1" stop-color=${e} stop-opacity="0"/></linearGradient></defs>
    <path d="M34 12 L46 12 L56 58 L24 58Z" fill=${`url(#${a})`}/><rect x="33" y="6" width="14" height="6" rx="2" fill=${t?"#d9c6a3":"#4a4f57"}/>
    <ellipse cx="40" cy="12" rx="6" ry="1.2" fill=${t?"#fff2d6":"#3a3e45"}/>`)}function Qi(t,e="#ffcf8a"){const a=le("b");return T($`<defs><radialGradient id=${a} cx="40" cy="30" r="22" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${e} stop-opacity=${t/100*.8}/><stop offset="1" stop-color=${e} stop-opacity="0"/></radialGradient></defs>
    <circle cx="40" cy="30" r="22" fill=${`url(#${a})`}/><line x1="40" y1="0" x2="40" y2="18" stroke="#6b717a" stroke-width=".8"/>
    <rect x="37" y="17" width="6" height="5" rx="1" fill="#8a919b"/><circle cx="40" cy="28" r="7" fill=${t?"#fff2d6":"#4a4f57"}/>`)}function ft(t,e,a){return t==="lamp"?Yi(e,a):t==="led"?Xi(e,a):t==="spot"?Ki(e,a):t==="bulb"?Qi(e,a):Di(e,a)}const Ji={"{n} luz acesa":"{n} light on","{n} luzes acesas":"{n} lights on","{n} acesa":"{n} on","{n} acesas":"{n} on","{n} luz":"{n} light","{n} luzes":"{n} lights","luz acesa":"light on","luz apagada":"light off","luzes apagadas":"lights off","{on} de {total} luzes acesas":"{on} of {total} lights on","{n} dispositivo":"{n} device","{n} dispositivos":"{n} devices","{n} disp.":"{n} dev.","{n} divisão":"{n} room","{n} divisões":"{n} rooms","{n} cena":"{n} scene","{n} cenas":"{n} scenes","{n} cena ou rotina":"{n} scene or routine","{n} cenas e rotinas":"{n} scenes and routines","{n} destrancada":"{n} unlocked","{n} destrancadas":"{n} unlocked","{n} aberta":"{n} open","{n} abertas":"{n} open","tudo fechado":"all closed","tudo apagado":"all off","todas apagadas":"all off",apagadas:"all off",apagada:"off","Tudo tranquilo em casa":"All quiet at home",Casa:"Home",Divisões:"Rooms",Luzes:"Lights",Clima:"Climate",Segurança:"Security",Cenas:"Scenes",Tempo:"Weather","Div.":"Rooms","Seg.":"Sec.","Def.":"Set.",Vistas:"Views",Índice:"Contents","N.º":"No.",Tudo:"All",Estores:"Blinds",Média:"Media",Outros:"Other","Voltar à casa":"Back home","Vista anterior":"Previous view","Vista seguinte":"Next view","desliza para o lado para mudar de vista":"swipe sideways to change view","Mudar de vista":"Change view","toca para mudar de vista":"tap to change view","aperta com dois dedos para ver todas as vistas":"pinch with two fingers to see every view","Todas as vistas":"All views","Todas as vistas · toca numa para aproximar":"All views · tap one to zoom in","ver tudo em {room}":"see everything in the {room}","Nada para mostrar aqui.":"Nothing to show here.","Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.":"There are no rooms with devices yet. Assign areas to your devices in Home Assistant.",Hora:"Time","Lá fora":"Outside",Hoje:"Today","Boa noite":"Good evening","Bom dia":"Good morning","Boa tarde":"Good afternoon",Editar:"Edit","Editar esta vista":"Edit this view","A editar":"Editing",Cancelar:"Cancel",Repor:"Reset",Concluído:"Done","Adicionar · toca para pôr no fim":"Add · tap to put it at the end","Arrasta os cartões para mudar a ordem":"Drag the cards to reorder them","Já está tudo nesta vista.":"Everything is already in this view.","Esconder {name}":"Hide {name}","Mudar o tamanho de {name}":"Resize {name}","Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel.":"Couldn't save. This screen may not be allowed to edit this dashboard.","Tocar para acordar":"Tap to wake","Toca para acordar":"Tap to wake","Aproxima-te ou toca para acordar":"Come closer or tap to wake"," e ":" and ",Acender:"On",Apagar:"Off","Acender todas":"All on","Apagar todas":"All off","Acender as luzes de {name}":"Turn on the {name} lights","Apagar as luzes de {name}":"Turn off the {name} lights","Luzes de {room}":"{room} lights","agora {t}°":"now {t}°",Baixar:"Down",Subir:"Up",Mais:"More",Destrancada:"Unlocked",Trancada:"Locked",destrancada:"unlocked",trancada:"locked","tocar para trancar":"tap to lock","toque longo para abrir":"long press to open","destrancada · tocar":"unlocked · tap","destrancada · tocar para trancar":"unlocked · tap to lock","trancada · toque para mais":"locked · tap for more",trancar:"lock",abrir:"open","Trancar {name}":"Lock {name}","Tranc.":"Locked",Porta:"Door",Ligado:"On",Desligado:"Off",desligado:"off",Pausa:"Pause",Tocar:"Play",Seguinte:"Next",Aberta:"Open",Fechada:"Closed",Movimento:"Motion",Calmo:"Clear",Ativada:"Activated","Tocar para ativar":"Tap to activate","Sem termóstato":"No thermostat",Temperatura:"Temperature",roda:"turn",clima:"climate",Fechar:"Close",luz:"light",estore:"blind",fechadura:"lock",média:"media",tempo:"weather","Este cartão · vale para todos os estilos e painéis":"This card · applies to every style and dashboard",Tipo:"Type","Escolhido por ti.":"Chosen by you.","Voltar ao automático ({type})":"Back to automatic ({type})","Adivinhado pelo nome e pelo modelo: {type}.":"Guessed from the name and model: {type}.",Nome:"Name","Esconder este cartão":"Hide this card",Brilho:"Brightness",Branco:"White",Cores:"Colours",Desligar:"Turn off",Ligar:"Turn on",Posição:"Position",Abrir:"Open",Parar:"Stop",Modo:"Mode",Destrancar:"Unlock",Trancar:"Lock",Volume:"Volume","Sem imagem":"No picture",vento:"wind","Próximas 6 horas":"Next 6 hours","Próximos 5 dias":"Next 5 days","Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.":"Choose the IPMA area in the Pine3 Home panel to see the warnings.",Calor:"Heat",Frio:"Cool",Seco:"Dry",Ventilar:"Fan","a aquecer":"heating","a arrefecer":"cooling","em pausa":"paused","a secar":"drying","a ventilar":"fan","a limpar":"cleaning","na base":"docked","a voltar à base":"returning",parado:"idle",erro:"error",aberto:"open",fechado:"closed","a abrir":"opening","a fechar":"closing","céu limpo":"clear",nublado:"cloudy",nevoeiro:"fog",granizo:"hail",trovoada:"thunderstorm","trovoada e chuva":"thunderstorm and rain","pouco nublado":"partly cloudy","chuva forte":"heavy rain",chuva:"rain",neve:"snow","chuva e neve":"sleet",sol:"sunny",excecional:"exceptional","Céu limpo":"Clear",Nublado:"Cloudy",Nevoeiro:"Fog",Trovoada:"Thunderstorm","Trovoada e chuva":"Thunderstorm and rain","Pouco nublado":"Partly cloudy","Chuva forte":"Heavy rain",Chuva:"Rain",Neve:"Snow",Sol:"Sunny",Vento:"Wind",aviso:"warning","aviso {type}":"{type} warning","Toca para trancar":"Tap to lock","Aviso {level}":"{level} warning",amarelo:"Yellow",laranja:"Orange",vermelho:"Red","Agitação Marítima":"Coastal event",Precipitação:"Rain","Tempo Frio":"Cold","Tempo Quente":"Hot","Luz de teto":"Ceiling light",Candeeiro:"Lamp","Fita LED":"LED strip",Spot:"Spotlight",Lâmpada:"Bulb",Coluna:"Speaker","Ar condicionado":"Air conditioner",Ventoinha:"Fan",Purificador:"Purifier",Estore:"Blind",Janela:"Window",Tomada:"Plug",Sensor:"Sensor",Câmara:"Camera",Fechadura:"Lock",Aspirador:"Vacuum",Outro:"Other",Vidro:"Glass",Moldura:"Frame",Instrumento:"Instrument",Órbita:"Orbit",Carteira:"Wallet",Lente:"Lens","À esquerda":"Left","Em baixo":"Bottom","Grafite (escuro)":"Graphite (dark)",Claro:"Light","Automático (pôr do sol)":"Automatic (sunset)","Automático (dia 50%, noite 12%)":"Automatic (day 50%, night 12%)","Sempre baixo (12%)":"Always low (12%)","Não mexer":"Leave it",Nunca:"Never","1 minuto":"1 minute","2 minutos":"2 minutes","5 minutos":"5 minutes","10 minutos":"10 minutes","30 minutos":"30 minutes","A carregar a casa…":"Loading the house…","A ligar…":"Connecting…","Menu do Home Assistant":"Home Assistant menu","Há demasiados códigos à espera. Tenta daqui a pouco.":"Too many codes are waiting. Try again in a moment.","Não foi possível pedir um código.":"Couldn't get a code.","Sem ligação ao Home Assistant. A tentar de novo…":"No connection to Home Assistant. Trying again…","Sem ligação ao Home Assistant.":"No connection to Home Assistant.","Emparelhar este ecrã":"Pair this screen","No Home Assistant, abre":"In Home Assistant, open","e escreve este código, ou lê o QR com o telemóvel.":"and type this code, or scan the QR code with your phone.","O código muda a cada 10 minutos.":"The code changes every 10 minutes.","Ainda não há PIN. Define-o no Home Assistant: Pine3 Home → ⚙ → Sistema.":"There is no PIN yet. Set it in Home Assistant: Pine3 Home → ⚙ → System.","Ainda não há PIN: define-o no Home Assistant, em Pine3 Home → ⚙ → Sistema.":"There is no PIN yet: set it in Home Assistant, in Pine3 Home → ⚙ → System.","Demasiadas tentativas. Tenta de novo daqui a {n} min.":"Too many tries. Try again in {n} min.","PIN errado.":"Wrong PIN.","É preciso o PIN das definições.":"The settings PIN is needed.","PIN das definições":"Settings PIN","Escreve o PIN":"Enter the PIN",Entrar:"Enter","Esse painel não existe.":"That dashboard doesn't exist.","Este ecrã não pode editar esse painel.":"This screen can't edit that dashboard.","A casa precisa de pelo menos um painel.":"The house needs at least one dashboard.","O código não existe ou já expirou.":"That code doesn't exist or has expired.","Esse ecrã não existe.":"That screen doesn't exist.",Definições:"Settings","Fechar as definições":"Close the settings","Desfazer alterações":"Undo changes","A editar o painel":"Editing the dashboard",Aparência:"Appearance",Entidades:"Entities","Face ambiente":"Ambient face","Ecrãs e painéis":"Screens and dashboards",Sistema:"System","O estilo, o tema e a navegação do painel":"The style, theme and navigation of the dashboard","Vês o resultado já aqui; fica guardado no Home Assistant para todos os ecrãs que mostram este painel.":"You see the result right here; it is saved in Home Assistant for every screen showing this dashboard.","Pré-visualização":"Preview","Vista na pré-visualização":"View in the preview",Estilo:"Style","em breve":"soon",Tema:"Theme","Claro, escuro, ou escuro ao pôr do sol.":"Light, dark, or dark after sunset.","Só no Vidro: os outros estilos têm a sua própria paleta.":"Glass only: the other styles have their own palette.",Navegação:"Navigation","A dock do Vidro, à esquerda ou em baixo.":"Glass's dock, on the left or at the bottom.","Este estilo navega com {nav}.":"This style navigates with {nav}.","a sua própria navegação":"its own navigation","pílulas no topo":"pills at the top","uma roda que abre do botão em baixo":"a wheel that opens from the button at the bottom","separadores à direita, como cartões numa carteira":"tabs on the right, like cards in a wallet","afastar para ver todas as vistas (botão ou pinça) e tocar numa para aproximar":"zooming out to see every view (button or pinch) and tapping one to zoom in","deslizar, com pontos no canto":"swiping, with dots in the corner","índice em palavras":"a table of contents in words","banco de teclas":"a bank of keys","Dock à esquerda":"Dock on the left","Dock em baixo":"Dock at the bottom","Editar a grelha nos ecrãs":"Edit the grid on the screens","Os tablets que mostram este painel podem mudar a ordem, o tamanho e os cartões de cada vista (o lápis).":"Tablets showing this dashboard can change the order, size and cards of each view (the pencil).","Um relógio calmo com o tempo e a casa numa linha, depois de alguns minutos sem tocar no ecrã. O primeiro toque só acorda.":"A calm clock with the weather and the house in one line, after a few minutes without touching the screen. The first tap only wakes it.","Aparece depois de":"Shows after","Brilho na face ambiente":"Brightness on the ambient face","Só nos tablets com a app Pine3 Wallpanel. Fora da face ambiente, o brilho é o do sistema.":"Only on tablets with the Pine3 Wallpanel app. Outside the ambient face, the brightness is the system's.","O que é da casa e vale para todos os painéis.":"What belongs to the house and applies to every dashboard.",Idioma:"Language","Dos painéis, dos ecrãs e destas definições. Automático segue o idioma do Home Assistant.":"Of the dashboards, the screens and these settings. Automatic follows Home Assistant's language.",Automático:"Automatic",automático:"automatic","Avisos do IPMA":"IPMA warnings","Os avisos da tua área aparecem no cartão do tempo, na face ambiente e no topo de cada estilo.":"The warnings for your area show on the weather card, the ambient face and at the top of each style.","Área dos avisos do IPMA":"IPMA warning area","Avisos do IPMA: {area}.":"IPMA warnings: {area}.","Avisos do IPMA desligados.":"IPMA warnings off.","Sem avisos":"No warnings","Emparelhar um ecrã":"Pair a screen","No tablet, abre":"On the tablet, open","Aparece um código de 6 algarismos: escreve-o aqui, ou lê o QR com o telemóvel.":"A 6-digit code appears: type it here, or scan the QR code with your phone.","Código do ecrã":"Screen code","Nome, p.ex. Cozinha":"Name, e.g. Kitchen","Nome do ecrã":"Screen name","Emparelhar com {name}":"Pair with {name}","À espera:":"Waiting:",Ecrãs:"Screens",Ecrã:"Screen","{n} ecrã":"{n} screen","{n} ecrãs":"{n} screens","token revogado":"token revoked","visto {when}":"seen {when}","ainda não ligou":"not connected yet","Painel de {name}":"{name}'s dashboard",Remover:"Remove","Ainda não há ecrãs emparelhados.":"No screens paired yet.",Painéis:"Dashboards","Cada painel tem o seu estilo e a sua disposição. Cada ecrã mostra um painel.":"Each dashboard has its own style and layout. Each screen shows one dashboard.","Nome do painel":"Dashboard name","a ver":"viewing","Ver e editar":"View and edit","Novo painel":"New dashboard","Painel {n}":"Dashboard {n}",Versão:"Version","Disposição de {name}":"Layout of {name}",automática:"automatic","arrumada à mão em {n} vista":"arranged by hand in {n} view","arrumada à mão em {n} vistas":"arranged by hand in {n} views","Repor a automática":"Reset to automatic","Página dos ecrãs de parede":"Wall screen page","PIN das definições nos ecrãs":"Settings PIN on the screens","Nos ecrãs de parede, o ⚙ pede este PIN antes de abrir as definições. Depois de o escreverem, ficam com acesso durante 10 minutos. Cinco tentativas erradas seguidas bloqueiam o PIN durante 5 minutos.":"On wall screens, ⚙ asks for this PIN before opening the settings. Once it is entered, they have access for 10 minutes. Five wrong tries in a row lock the PIN for 5 minutes.","PIN definido":"PIN set","Sem PIN: os ecrãs não abrem as definições":"No PIN: the screens don't open the settings","Escreve outro para o mudar.":"Enter another one to change it.","De 4 a 8 algarismos.":"4 to 8 digits.","Novo PIN":"New PIN","Mudar o PIN":"Change the PIN","Guardar o PIN":"Save the PIN","A ordem, o ícone e as divisões que aparecem. Vale para a dock, a Casa e todos os estilos e painéis. As divisões vêm das áreas do Home Assistant.":"The order, the icon and which rooms show. Applies to the dock, Home and every style and dashboard. Rooms come from Home Assistant's areas.","Subir {name}":"Move {name} up","Descer {name}":"Move {name} down","Ícone de {name}":"{name} icon","{n} de {total} dispositivos":"{n} of {total} devices","Mostrar {name}":"Show {name}","O que aparece nos painéis. Cada dispositivo tem um cartão com a sua entidade principal; as secundárias (o consumo de uma tomada, o interruptor de uma TV, um sensor de diagnóstico) podem ter um cartão próprio.":"What shows on the dashboards. Each device has a card with its main entity; the secondary ones (a plug's power use, a TV's switch, a diagnostic sensor) can have a card of their own.","Procurar por nome ou entidade":"Search by name or entity","Procurar entidade":"Search entity","Mostrar entidades de diagnóstico e configuração":"Show diagnostic and configuration entities","Mostrar entidades de diagnóstico":"Show diagnostic entities","{n} de {total} visíveis":"{n} of {total} shown","Tipo de {name}":"Type of {name}",Principal:"Main",Diagnóstico:"Diagnostic",Secundária:"Secondary","Alterações desfeitas.":"Changes undone.","PIN guardado.":"PIN saved.","PIN removido: os ecrãs deixam de abrir as definições.":"PIN removed: the screens no longer open the settings.","{name} emparelhado. O ecrã liga-se dentro de segundos.":"{name} paired. The screen connects within seconds.","Remover {name}? O ecrã volta a pedir um código.":"Remove {name}? The screen will ask for a code again.","{name} removido.":"{name} removed.","{name} criado: escolhe o estilo.":"{name} created: choose its style.","Remover o painel {name}? Os ecrãs que o mostram passam para o primeiro painel.":"Remove the {name} dashboard? The screens showing it move to the first dashboard.","Repor a disposição automática de todas as vistas de {name}?":"Reset every view of {name} to the automatic layout?","Disposição reposta.":"Layout reset."};let ne="pt";function es(t,e){return ne=((t&&t!=="auto"?t:e||(typeof navigator<"u"?navigator.language:"pt"))??"pt").toLowerCase().startsWith("pt")?"pt":"en",typeof document<"u"&&(document.documentElement.lang=ne==="pt"?"pt-PT":"en"),ne}const Ft=()=>ne,L=()=>ne==="pt"?"pt-PT":"en-GB";function n(t,e){let a=ne==="en"?Ji[t]??t:t;return e&&(a=a.replace(/\{(\w+)\}/g,(i,s)=>s in e?String(e[s]):i)),a}const A=(t,e,a)=>n(t===1?e:a,{n:t});function E(t){return new Proxy(t,{get:(e,a)=>typeof a=="string"&&typeof e[a]=="string"?n(e[a]):Reflect.get(e,a)})}function qt(t){return new Proxy(t,{get:(e,a)=>(a==="name"||a==="sub")&&typeof Reflect.get(e,a)=="string"?n(Reflect.get(e,a)):Reflect.get(e,a)})}const U=t=>t.map(qt),ts={ceiling:{icon:Ta,name:"Luz de teto"},lamp:{icon:Fa,name:"Candeeiro"},led:{icon:Xa,name:"Fita LED"},spot:{icon:wi,name:"Spot"},bulb:{icon:Ka,name:"Lâmpada"},tv:{icon:Ai,name:"TV"},appletv:{icon:_i,name:"Apple TV"},homepod:{icon:vi,name:"HomePod"},speaker:{icon:$i,name:"Coluna"},ac:{icon:Ma,name:"Ar condicionado"},fan:{icon:Wa,name:"Ventoinha"},purifier:{icon:Ha,name:"Purificador"},blind:{icon:Sa,name:"Estore"},door:{icon:Rt,name:"Porta"},window:{icon:zi,name:"Janela"},plug:{icon:li,name:"Tomada"},sensor:{icon:Bt,name:"Sensor"},motion:{icon:ai,name:"Movimento"},camera:{icon:Pa,name:"Câmara"},lock:{icon:Dt,name:"Fechadura"},vacuum:{icon:hi,name:"Aspirador"},other:{icon:Da,name:"Outro"}},oe=Object.fromEntries(Object.entries(ts).map(([t,e])=>[t,qt(e)])),Ut={light:["ceiling","lamp","led","spot","bulb"],media_player:["tv","appletv","homepod","speaker"],fan:["fan","purifier"],cover:["blind","door","window"],switch:["plug","tv","fan","other"],input_boolean:["plug","other"],binary_sensor:["door","window","motion","sensor"]},N=(t,...e)=>e.some(a=>t.includes(a));function je(t,e,a={}){const i=t.split(".")[0],s=e?.attributes??{},o=`${a.name??""} ${s.friendly_name??""} ${t}`.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),r=`${a.model??""}`.toLowerCase(),c=`${a.manufacturer??""}`.toLowerCase();return i==="light"?N(o,"fita","led","strip","lightstrip","barra")?"led":N(o,"teto","tecto","ceiling","plafon","lustre","pendente","suspens")?"ceiling":N(o,"spot","foco","embutid")?"spot":N(o,"candeeiro","lamp","abajur","de pe","cabeceira","floor")?"lamp":"ceiling":i==="media_player"?c.includes("apple")&&r.includes("homepod")?"homepod":c.includes("apple")&&r.includes("tv")?"appletv":N(o,"homepod")?"homepod":N(o,"apple tv","appletv")?"appletv":s.device_class==="tv"||N(o,"tv","televis")?"tv":"speaker":i==="climate"?"ac":i==="fan"?N(o,"purif","air clean")||c.includes("philips")&&r.startsWith("ac")?"purifier":"fan":i==="cover"?s.device_class==="door"||s.device_class==="garage"?"door":"blind":i==="lock"?"lock":i==="camera"?"camera":i==="vacuum"?"vacuum":i==="switch"||i==="input_boolean"?N(o,"tv","televis")?"tv":"plug":i==="binary_sensor"?["door","garage_door","opening"].includes(s.device_class)?"door":s.device_class==="window"?"window":["motion","occupancy","presence"].includes(s.device_class)?"motion":"sensor":i==="sensor"?"sensor":"other"}const y=t=>t.split(".")[0],Y=t=>!!t&&!["off","unavailable","unknown","closed","locked","idle","standby","docked"].includes(t.state),as=t=>!t||t.state==="unavailable";function ee(t){if(!t||t.state!=="on")return 0;const e=t.attributes.brightness;return e==null?100:Math.max(1,Math.round(e/255*100))}function me(t){const e=t?.attributes.rgb_color,a=t?.attributes.color_mode;if(e&&a&&!["color_temp","brightness","onoff","white"].includes(a))return`rgb(${e.join(",")})`;const i=t?.attributes.color_temp_kelvin;return i?i>=5e3?"#e6f0ff":i>=3800?"#fff1d6":"#ffcf8a":"#ffcf8a"}const S=t=>t.devices.filter(e=>y(e.id)==="light"&&!e.hidden).map(e=>e.id);function xe(t,e){const a=t.filter(i=>e[i]?.state==="on");return a.length?Math.round(a.reduce((i,s)=>i+ee(e[s]),0)/a.length):0}const bt={light:"light",climate:"climate",lock:"lock",cover:"cover",media_player:"media",vacuum:"vacuum",fan:"fan",switch:"switch",input_boolean:"switch",outlet:"outlet",sensor:"sensor",binary_sensor:"binary",camera:"camera"};function _e(t,e){const a=bt[t.kind??y(t.id)]??bt[y(t.id)];if(!a)return null;const i=a==="climate"?"l":a==="media"||a==="camera"?"m":"s";return{key:t.id,kind:a,size:i,name:t.name,sub:e?.name,entity:t.id,room:e}}function We(t,e){const a=t.rooms.filter(r=>!r.hidden),i=a.flatMap(r=>r.devices.filter(c=>!c.hidden).map(c=>({d:c,r}))),s=r=>i.filter(({d:c})=>(c.kind??y(c.id))===r),o=[];return a.forEach((r,c)=>{const d=S(r);d.length&&o.push({key:`room-${r.id}`,kind:"room-lights",size:c===0?"m":"s",name:r.name,entities:d,room:r})}),s("climate").forEach(({d:r,r:c},d)=>o.push({key:r.id,kind:"climate",size:d===0?"l":"m",name:r.name,sub:c.name,entity:r.id,room:c})),t.weather&&e[t.weather]&&o.push({key:t.weather,kind:"weather",size:"l",name:n("Tempo"),entity:t.weather}),s("lock").forEach(({d:r,r:c})=>o.push({key:r.id,kind:"lock",size:"s",name:r.name,sub:c.name,entity:r.id,room:c})),s("cover").forEach(({d:r,r:c})=>o.push({key:r.id,kind:"cover",size:"s",name:r.name,sub:c.name,entity:r.id,room:c})),s("media_player").sort((r,c)=>+(e[c.d.id]?.state==="playing")-+(e[r.d.id]?.state==="playing")).slice(0,2).forEach(({d:r,r:c})=>o.push({key:r.id,kind:"media",size:"m",name:r.name,sub:c.name,entity:r.id,room:c})),s("vacuum").forEach(({d:r,r:c})=>o.push({key:r.id,kind:"vacuum",size:"s",name:r.name,sub:c.name,entity:r.id,room:c})),t.scenes.length&&o.push({key:"scenes",kind:"scenes",size:"m",name:n("Cenas"),entities:t.scenes.slice(0,6)}),o}const is=U([{id:"all",name:"Tudo",kinds:[]},{id:"lights",name:"Luzes",kinds:["light"]},{id:"climate",name:"Clima",kinds:["climate","fan"]},{id:"covers",name:"Estores",kinds:["cover"]},{id:"media",name:"Média",kinds:["media"]},{id:"other",name:"Outros",kinds:["switch","outlet","lock","vacuum","sensor","binary","camera"]}]);function ss(t,e=[]){const a=t.devices.filter(s=>!s.hidden).map(s=>_e(s,t)),i=(t.entities??[]).filter(s=>!s.primary&&e.includes(s.id)).map(s=>_e({id:s.id,name:s.name,kind:y(s.id)},t));return[...a,...i].filter(s=>!!s)}function z(t,e){const a=t.rooms.filter(c=>!c.hidden).flatMap(c=>c.devices),i=a.filter(c=>y(c.id)==="light"&&e[c.id]?.state==="on").length,s=a.filter(c=>y(c.id)==="lock"&&e[c.id]?.state==="unlocked").length,o=a.filter(c=>y(c.id)==="binary_sensor"&&["door","window","garage_door","opening"].includes(e[c.id]?.attributes.device_class)&&e[c.id]?.state==="on").length,r=t.rooms.map(c=>c.temperature?parseFloat(e[c.temperature]?.state??""):NaN).filter(c=>!Number.isNaN(c));return{lightsOn:i,alerts:s+o,alertText:s?A(s,"{n} destrancada","{n} destrancadas"):o?A(o,"{n} aberta","{n} abertas"):n("tudo fechado"),temp:r.length?`${Math.round(Math.min(...r))}–${Math.round(Math.max(...r))}°`:null}}const M=(t,e=1)=>t.toLocaleString(L(),{maximumFractionDigits:e}),os=["door","window","garage_door","opening"],Zt=t=>t.rooms.filter(e=>!e.hidden).flatMap(e=>e.devices.filter(a=>!a.hidden).map(a=>({d:a,r:e})));function rs(t,e){const a=[],i=Zt(t);return i.filter(({d:s})=>y(s.id)==="climate").forEach(({d:s,r:o})=>a.push({key:s.id,kind:"climate",size:"l",name:s.name,sub:o.name,entity:s.id,room:o})),t.weather&&e[t.weather]&&a.push({key:t.weather,kind:"weather",size:"l",name:n("Tempo"),entity:t.weather}),i.filter(({d:s})=>y(s.id)==="fan").forEach(({d:s,r:o})=>a.push({key:s.id,kind:"fan",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),t.rooms.filter(s=>!s.hidden).forEach(s=>{s.temperature&&e[s.temperature]&&a.push({key:`t-${s.id}`,kind:"sensor",size:"s",name:s.name,sub:"temperatura",entity:s.temperature,room:s}),s.humidity&&e[s.humidity]&&a.push({key:`h-${s.id}`,kind:"sensor",size:"s",name:s.name,sub:"humidade",entity:s.humidity,room:s})}),a}function ns(t){return t.rooms.filter(e=>!e.hidden).map(e=>({r:e,lights:S(e)})).filter(({lights:e})=>e.length).map(({r:e,lights:a})=>({key:`room-${e.id}`,kind:"room-lights",size:"m",name:e.name,entities:a,room:e}))}function cs(t,e){const a=Zt(t),i=a.filter(({d:r})=>y(r.id)==="lock"),s=a.filter(({d:r})=>y(r.id)==="binary_sensor"&&[...os,"motion","occupancy","presence","moisture","smoke","gas"].includes(e[r.id]?.attributes.device_class));s.sort((r,c)=>+(e[c.d.id]?.state==="on")-+(e[r.d.id]?.state==="on"));const o=a.filter(({d:r})=>y(r.id)==="camera");return[...i.map(({d:r,r:c})=>({key:r.id,kind:"lock",size:"s",name:r.name,sub:c.name,entity:r.id,room:c})),...s.map(({d:r,r:c})=>({key:r.id,kind:"binary",size:"s",name:r.name,sub:c.name,entity:r.id,room:c})),...o.map(({d:r,r:c})=>({key:r.id,kind:"camera",size:"m",name:r.name,sub:c.name,entity:r.id,room:c}))]}function ls(t,e){return[...t.scenes,...t.scripts].filter(a=>e[a]).map(a=>({key:a,kind:"scene",size:"s",name:e[a].attributes.friendly_name??a,entity:a}))}const ds=["climate","weather","media","scenes","camera","clock"],Gt=t=>ds.includes(t)?["m","l","xl"]:["s","m","l"];function us(t,e){for(const a of t.rooms){const i=a.devices.find(s=>s.id===e);if(i)return _e(i,a)}return null}function vt(t,e,a){if(!e)return t;const i=new Map(t.map(c=>[c.key,c])),s=new Set(e.hidden),o=[],r=new Set;for(const c of e.items){if(r.has(c.key)||s.has(c.key))continue;const d=i.get(c.key)??us(a,c.key);if(!d)continue;r.add(c.key);const p=c.size&&Gt(d.kind).includes(c.size)?c.size:d.size;o.push({...d,size:p})}for(const c of t)!r.has(c.key)&&!s.has(c.key)&&o.push(c);return o}function hs(t,e,a){const i=new Set(e.items.map(r=>r.key)),s=t.filter(r=>e.hidden.includes(r.key)),o=a.rooms.filter(r=>!r.hidden).flatMap(r=>r.devices.filter(c=>!c.hidden).map(c=>_e(c,r))).filter(r=>!!r&&!i.has(r.key)&&!s.some(c=>c.key===r.key)&&!t.some(c=>c.key===r.key&&!e.hidden.includes(c.key)));return[...s,...o]}function q(t,e,a){return t?e?e===t?t===1?n("luz acesa"):n("{n} luzes acesas",{n:t}):n("{on} de {total} luzes acesas",{on:e,total:t}):n(t===1?"luz apagada":"luzes apagadas"):A(a,"{n} dispositivo","{n} dispositivos")}const Z=D`
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
`;var ps=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,C=(t,e,a,i)=>{for(var s=i>1?void 0:i?ms(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&ps(e,a,s),s};const gs=550,Te=10,Ee=E({heat:"Calor",cool:"Frio",heat_cool:"Auto",auto:"Auto",dry:"Seco",fan_only:"Ventilar",off:"Off"}),$t=E({heating:"a aquecer",cooling:"a arrefecer",idle:"em pausa",off:"desligado",drying:"a secar",fan:"a ventilar"}),j=E({"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",hail:"granizo",lightning:"trovoada","lightning-rainy":"trovoada e chuva",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve","snowy-rainy":"chuva e neve",sunny:"sol",windy:"vento","windy-variant":"vento",exceptional:"excecional"}),wt=E({cleaning:"a limpar",docked:"na base",returning:"a voltar à base",paused:"em pausa",idle:"parado",error:"erro"}),fs=E({open:"aberto",closed:"fechado",opening:"a abrir",closing:"a fechar"}),Oe=E({yellow:"amarelo",orange:"laranja",red:"vermelho"}),yt={yellow:1,orange:2,red:3},bs=10*6e4,vs=10*6e4,$s=U([{id:"@luzes",name:"Luzes",icon:g.bulb},{id:"@clima",name:"Clima",icon:g.therm},{id:"@seguranca",name:"Segurança",icon:g.shield},{id:"@cenas",name:"Cenas",icon:g.spark}]),ws=["#ffcf8a","#fff1d6","#ff8a5c","#ff6fae","#b49cff","#6cc8ff","#5be3a0"],x=t=>$`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`;let v=class extends re{constructor(){super(...arguments),this.entities={},this.screenName="",this.canEdit=!1,this.ambient=!1,this.settingsButton=!1,this.cardSettings=!1,this.preview=!1,this.startView="",this.wallpanel=!1,this.editing=null,this.draft=null,this.moving=null,this.saving=!1,this.lastReorder=0,this.view="home",this.category="all",this.sheet=null,this.drag=null,this.now=new Date,this.hourly=[],this.daily=[],this.warnings=[],this.history={},this.flash=null,this.historyAt={},this.historyWanted=new Set,this.ipmaAt=0,this.ipmaArea=null,this.forecastAt=0}connectedCallback(){super.connectedCallback(),this.clock=window.setInterval(()=>this.now=new Date,1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clock)}willUpdate(t){if(t.has("startView")&&this.startView&&(this.view=this.startView,this.category="all"),this.preview)return;t.has("home")&&this.view!=="home"&&!this.view.startsWith("@")&&!this.home.rooms.some(a=>a.id===this.view)&&(this.view="home");const e=this.home?.settings?.ipma_area??null;(e!==this.ipmaArea||e&&Date.now()-this.ipmaAt>vs)&&(this.ipmaArea=e,this.ipmaAt=Date.now(),e&&this.conn?this.loadWarnings(e):this.warnings=[]),this.home?.weather&&Date.now()-this.forecastAt>30*6e4&&this.conn&&(this.forecastAt=Date.now(),this.loadForecast(this.home.weather))}async loadForecast(t){try{const e=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"hourly"},target:{entity_id:t},return_response:!0});this.hourly=(e.response?.[t]?.forecast??[]).filter(a=>new Date(a.datetime).getTime()>Date.now()-30*6e4).slice(0,6)}catch{this.hourly=[]}try{const e=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"daily"},target:{entity_id:t},return_response:!0});this.daily=(e.response?.[t]?.forecast??[]).slice(0,5)}catch{this.daily=[]}}updated(){if(this.preview)return;const t=Date.now(),e=[...this.historyWanted].filter(a=>t-(this.historyAt[a]??0)>bs);this.historyWanted.clear(),e.length&&this.conn&&(e.forEach(a=>this.historyAt[a]=t),this.loadHistory(e))}async loadHistory(t){try{const e=await this.conn.sendMessagePromise({type:"history/history_during_period",start_time:new Date(Date.now()-864e5).toISOString(),entity_ids:t,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),a={...this.history};for(const i of t){const s=(e[i]??[]).map(r=>parseFloat(r.s)).filter(r=>!Number.isNaN(r)),o=Math.max(1,Math.ceil(s.length/48));a[i]=s.filter((r,c)=>c%o===0||c===s.length-1)}this.history=a}catch(e){console.warn("Pine3 Home: history",e)}}async loadWarnings(t){try{const e=await this.conn.sendMessagePromise({type:"pine3_home/ipma_warnings",area:t}),a=Date.now();this.warnings=e.warnings.filter(i=>!i.endTime||new Date(i.endTime).getTime()>a).sort((i,s)=>(yt[s.awarenessLevelID]??0)-(yt[i.awarenessLevelID]??0))}catch{}}call(t,e,a,i={}){Oi(this.conn,t,e,i,{entity_id:a}).catch(s=>console.warn("Pine3 Home:",s))}toggle(t){const e=y(t),a=this.entities[t];if(e==="lock")return this.call("lock",a?.state==="locked"?"unlock":"lock",t);if(e==="cover")return this.call("cover","toggle",t);if(e==="vacuum")return this.call("vacuum",a?.state==="cleaning"?"return_to_base":"start",t);if(e==="media_player")return this.call("media_player","media_play_pause",t);if(e==="scene"||e==="script")return this.call(e,"turn_on",t);this.call(e==="input_boolean"?"input_boolean":"homeassistant","toggle",t)}level(t){if(this.drag?.key===t.key)return this.drag.value;if(t.kind==="room-lights")return xe(t.entities,this.entities);const e=this.entities[t.entity];return t.kind==="light"?ee(e):t.kind==="cover"?e?.attributes.current_position??(e?.state==="open"?100:0):null}setLevel(t,e){if(e=Math.round(e),t.kind==="room-lights"||t.kind==="light"){const a=t.kind==="light"?t.entity:t.entities;e<=0?this.call("light","turn_off",a):this.call("light","turn_on",a,{brightness_pct:e})}else t.kind==="cover"&&this.call("cover","set_cover_position",t.entity,{position:e})}slidable(t){if(t.kind==="room-lights")return!0;const e=this.entities[t.entity??""];return e?t.kind==="light"?(e.attributes.supported_color_modes??[]).some(a=>a!=="onoff"):t.kind==="cover"?(e.attributes.supported_features&4)===4:!1:!1}down(t,e){if(t.target.closest("button"))return;if(this.editing){this.press={key:e.key,x:t.clientX,y:t.clientY,rect:t.currentTarget.getBoundingClientRect(),dragging:!1,long:!1,timer:0};return}const a=t.currentTarget,i={key:e.key,x:t.clientX,y:t.clientY,rect:a.getBoundingClientRect(),dragging:!1,long:!1,timer:0};i.timer=window.setTimeout(()=>{i.long=!0,this.longPress(e)},gs),this.press=i}move(t,e){const a=this.press;if(!a||a.key!==e.key||a.long)return;if(this.editing)return this.moveInEdit(t,a);const i=t.clientX-a.x,s=t.clientY-a.y;if(!a.dragging){if(Math.abs(s)>Te&&Math.abs(s)>Math.abs(i))return this.cancel();if(Math.abs(i)<Te||!this.slidable(e))return;a.dragging=!0,clearTimeout(a.timer),t.currentTarget.setPointerCapture(t.pointerId)}const o=Math.max(0,Math.min(100,(t.clientX-a.rect.left)/a.rect.width*100));this.drag={key:e.key,value:Math.round(o)}}up(t,e){const a=this.press;if(!(!a||a.key!==e.key)){if(clearTimeout(a.timer),this.press=void 0,this.editing){this.moving=null;return}if(!a.long){if(a.dragging){const i=this.drag?.value??0;this.setLevel(e,i),window.setTimeout(()=>{this.drag?.key===e.key&&(this.drag=null)},1500);return}this.tap(e)}}}cancel(){this.press&&clearTimeout(this.press.timer),this.press=void 0,this.moving=null}reset(){this.stopEdit(),this.sheet=null,this.drag=null,this.view="home",this.category="all",this.main()?.scrollTo({top:0})}get busy(){return!!this.editing||!!this.press}main(){return this.renderRoot?.querySelector(".main")??null}renderGear(t="di gear"){return this.settingsButton?l`<button class=${t} aria-label=${n("Definições")} title=${n("Definições")}
      @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}>
      ${x(g.gear)}${t.includes("di")?l`<span class="lb">${n("Definições")}</span>`:u}</button>`:u}arranged(t,e){const a=this.editing===t&&this.draft?this.draft:this.dashboard.layouts?.[t];return vt(e,a,this.home)}startEdit(t,e){const a=this.dashboard.layouts?.[t];this.draft={items:vt(e,a,this.home).map(i=>({key:i.key,size:i.size})),hidden:[...a?.hidden??[]]},this.editing=t,this.category="all",this.sheet=null}stopEdit(){this.editing=null,this.draft=null,this.moving=null}async saveLayout(t){const e=this.editing;if(e){this.saving=!0;try{const a=await this.conn.sendMessagePromise({type:"pine3_home/dashboards/layout",dashboard_id:this.dashboard.id,view:e,layout:t});this.dashboard={...this.dashboard,layouts:a.dashboard.layouts},this.stopEdit()}catch(a){console.warn("Pine3 Home: layout",a),alert(n("Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel."))}finally{this.saving=!1}}}moveInEdit(t,e){if(!e.dragging){if(Math.hypot(t.clientX-e.x,t.clientY-e.y)<Te)return;e.dragging=!0,this.moving=e.key,t.currentTarget.setPointerCapture(t.pointerId)}const a=this.renderRoot.elementsFromPoint(t.clientX,t.clientY).map(c=>c.closest?.(".w")).find(c=>c&&c.dataset.key&&c.dataset.key!==e.key);if(!a||!this.draft||Date.now()-this.lastReorder<180)return;const i=[...this.draft.items],s=i.findIndex(c=>c.key===e.key),o=i.findIndex(c=>c.key===a.dataset.key);if(s<0||o<0)return;const[r]=i.splice(s,1);i.splice(o,0,r),this.lastReorder=Date.now(),this.draft={...this.draft,items:i}}hideWidget(t){this.draft&&(this.draft={items:this.draft.items.filter(e=>e.key!==t),hidden:[...this.draft.hidden,t]})}resizeWidget(t){if(!this.draft)return;const e=Gt(t.kind),a=e[(e.indexOf(t.size)+1)%e.length];this.draft={...this.draft,items:this.draft.items.map(i=>i.key===t.key?{...i,size:a}:i)}}addWidget(t){this.draft&&(this.draft={items:[...this.draft.items,{key:t.key,size:t.size}],hidden:this.draft.hidden.filter(e=>e!==t.key)})}editControls(t,e){return this.editing===t?l`<button class="pill" @click=${()=>this.stopEdit()}>${n("Cancelar")}</button>
        ${this.dashboard.layouts?.[t]?l`<button class="pill" ?disabled=${this.saving} @click=${()=>this.saveLayout(null)}>${x(g.restore)} ${n("Repor")}</button>`:u}
        <button class="pill pri" ?disabled=${this.saving} @click=${()=>this.saveLayout(this.draft)}>${x(g.check)} ${n("Concluído")}</button>`:this.canEdit&&!this.editing?l`<button class="pill icon" aria-label=${n("Editar esta vista")} title=${n("Editar")} @click=${()=>this.startEdit(t,e)}>${x(g.edit)}</button>`:u}renderPicker(t,e){if(this.editing!==t||!this.draft)return u;const a=hs(e,this.draft,this.home);return l`<div class="picker">
      <div class="phd"><span class="k">${n("Adicionar · toca para pôr no fim")}</span><span class="k">${n("Arrasta os cartões para mudar a ordem")}</span></div>
      <div class="prow">${a.length?a.map(i=>l`<button class="pk" @click=${()=>this.addWidget(i)}><span>${i.name}</span><em>${i.room?.name??""}</em></button>`):l`<span class="k">${n("Já está tudo nesta vista.")}</span>`}</div>
    </div>`}tap(t){switch(t.kind){case"room-lights":t.room&&this.openRoom(t.room.id);return;case"climate":case"weather":case"sensor":case"binary":case"scenes":t.entity&&(this.sheet=t.entity);return;case"scene":this.call(y(t.entity),"turn_on",t.entity),this.flash=t.key,window.setTimeout(()=>{this.flash===t.key&&(this.flash=null)},1200);return;case"camera":this.sheet=t.entity;return;case"lock":this.entities[t.entity]?.state!=="locked"?this.call("lock","lock",t.entity):this.sheet=t.entity;return;default:t.entity&&this.toggle(t.entity)}}longPress(t){if(t.kind==="room-lights"&&t.room){this.openRoom(t.room.id);return}t.entity&&(this.sheet=t.entity)}openRoom(t){this.editing&&this.editing!==t&&this.stopEdit(),this.view=t,this.category="all",this.sheet=null}get dark(){return this.dashboard.theme==="claro"?!1:this.dashboard.theme==="auto"?this.entities["sun.sun"]?.state!=="above_horizon":!0}render(){if(!this.home)return u;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(a=>a.id===this.view),e={vd:!0,light:!this.dark,editing:!!this.editing,[`dock-${this.dashboard.dock}`]:!0};return l`<div class=${m(e)}>
      ${this.renderDock()}
      <main class="main">${t?this.renderRoom(t):this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):u}
    </div>`}renderAmbient(){const t=z(this.home,this.entities),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,i=this.warnings[0],s=this.now.getHours()*60+this.now.getMinutes(),o=(s%7-3)*.8,r=(s%5-2)*.8,c=[t.lightsOn?A(t.lightsOn,"{n} luz acesa","{n} luzes acesas"):null,t.alerts?t.alertText:null].filter(Boolean);return l`<div class="vd amb" role="button" aria-label=${n("Tocar para acordar")}>
      <div class="ambc" style=${`transform:translate(calc(var(--u) * ${o}), calc(var(--u) * ${r}))`}>
        <div class="atime">${this.now.toLocaleTimeString(L(),{hour:"2-digit",minute:"2-digit"})}</div>
        <div class="adate">${this.now.toLocaleDateString(L(),{weekday:"long",day:"numeric",month:"long"})}</div>
        <div class="arow">
          ${e?l`<span class="awx">${gt(e.state)}<b>${a!=null?`${Math.round(a)}°`:""}</b>${j[e.state]??e.state}</span>`:u}
          ${i?l`<span class=${`ipma ${i.awarenessLevelID}`}><i></i>${n("Aviso {level}",{level:Oe[i.awarenessLevelID]??""})} · ${n(i.awarenessTypeName).toLowerCase()}</span>`:u}
        </div>
        <div class=${m({astatus:!0,att:t.alerts>0})}>${c.length?c.join(" · "):n("Tudo tranquilo em casa")}</div>
      </div>
      <span class="ahint">${this.wallpanel?n("Aproxima-te ou toca para acordar"):n("Toca para acordar")}</span>
    </div>`}renderDock(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(a=>!a.hidden));return l`<nav class="dock" aria-label=${n("Vistas")}>
      <button class=${m({di:!0,on:this.view==="home"})} @click=${()=>this.openRoom("home")} aria-label=${n("Casa")}>
        ${x(g.home)}<span class="lb">${n("Casa")}</span>
      </button>
      <span class="sep"></span>
      <div class="rooms">
        ${t.map(e=>{const a=S(e).filter(i=>this.entities[i]?.state==="on").length;return l`<button class=${m({di:!0,rm:!0,on:this.view===e.id,lit:a>0})} @click=${()=>this.openRoom(e.id)} aria-label=${e.name}>
            ${a?l`<span class="glow"></span>`:u}${x(J(e.icon))}<span class="lb">${e.name}</span>
            ${a?l`<span class="bdg">${a}</span>`:u}
          </button>`})}
      </div>
      ${this.renderGear()}
    </nav>`}renderHours(){return this.hourly.length?l`<div class="hrs">${this.hourly.map(t=>l`<span>${new Date(t.datetime).getHours()}h<b>${Math.round(t.temperature)}°</b>${t.precipitation_probability?`${t.precipitation_probability}%`:l`&nbsp;`}</span>`)}</div>`:u}renderDays(t){return this.daily.length?l`<div class=${m({days:!0,compact:t})}>${this.daily.map((e,a)=>l`<div class="day">
      <span class="dn">${a===0?n("Hoje"):(i=>t?i.slice(0,3):i)(new Date(e.datetime).toLocaleDateString(L(),{weekday:"long"}).replace("-feira",""))}</span>
      ${t?u:l`<span class="dc">${j[e.condition??""]??e.condition??""}</span>`}
      <b>${Math.round(e.temperature)}°</b><span class="lo">${e.templow!=null?`${Math.round(e.templow)}°`:""}</span>
      ${t?u:l`<span class="rain">${e.precipitation_probability?`${e.precipitation_probability}%`:""}</span>`}
    </div>`)}</div>`:u}renderHeader(t,e,a=u){const i=z(this.home,this.entities),s=(r,c,d,p,h)=>this.viewWidgets(r).length?l`<button class="chip" @click=${()=>this.openRoom(r)}><i style=${c}>${x(d)}</i><span>${p}<small>${h}</small></span></button>`:u,o=this.home.scenes.length+this.home.scripts.length;return l`<header class="hdr">
      <div class="t"><span>${e}</span><b>${t}</b></div>
      <div class="chips">
        ${this.editing?u:l`${s("@clima","background:#34c759;color:#06210f",g.therm,n("Clima"),i.temp??"")}
            ${s("@luzes","background:#ffcf8a;color:#2a1a04",g.bulb,n("Luzes"),i.lightsOn?A(i.lightsOn,"{n} acesa","{n} acesas"):n("apagadas"))}
            ${s("@seguranca",i.alerts?"background:#ff8a5c;color:#2a0f04":"background:#5be3a0;color:#06210f",g.shield,n("Segurança"),i.alertText)}
            ${s("@cenas","background:#c9b8ff;color:#1d1530",g.spark,n("Cenas"),A(o,"{n} cena","{n} cenas"))}`}
        ${a}
      </div>
    </header>`}greeting(){const t=this.now.getHours();return`${n(t<6?"Boa noite":t<13?"Bom dia":t<20?"Boa tarde":"Boa noite")} · ${this.now.toLocaleDateString(L(),{weekday:"long",day:"numeric",month:"long"})}`}renderHome(){const t=this.now.toLocaleTimeString(L(),{hour:"2-digit",minute:"2-digit"}),e=We(this.home,this.entities),a=this.arranged("home",e),i=this.editing==="home";return l`${i?this.renderHeader(n("A editar"),n("Casa"),this.editControls("home",e)):this.renderHeader(t,this.greeting(),this.editControls("home",e))}
      ${a.length||i?l`<div class=${m({grid:!0,edit:i})}>${a.map(s=>this.renderWidget(s))}</div>`:l`<p class="empty">${n("Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.")}</p>`}
      ${this.renderPicker("home",e)}`}viewWidgets(t){return t==="@luzes"?ns(this.home):t==="@clima"?rs(this.home,this.entities):t==="@seguranca"?cs(this.home,this.entities):t==="@cenas"?ls(this.home,this.entities):[]}renderView(t){const e=$s.find(d=>d.id===t),a=this.viewWidgets(t),i=this.arranged(t,a),s=this.editing===t,o=z(this.home,this.entities),r=t==="@luzes"?o.lightsOn?A(o.lightsOn,"{n} acesa","{n} acesas"):n("todas apagadas"):t==="@clima"?o.temp??"":t==="@seguranca"?o.alertText:A(i.length,"{n} cena ou rotina","{n} cenas e rotinas"),c=t==="@luzes"?a.flatMap(d=>d.entities??[]):[];return l`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label=${n("Voltar à casa")}>${x(g.back)}</button>
        <b>${e.name}</b><span>${s?"a editar":r}</span>
        <div class="act">
          ${c.length&&!s?l`<button class="pill" @click=${()=>this.call("light","turn_on",c)}>${x(g.bulb)} ${n("Acender todas")}</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",c)}>${n("Apagar todas")}</button>`:u}
          ${this.editControls(t,a)}
        </div>
      </div>
      ${i.length||s?l`<div class=${m({grid:!0,edit:s})}>${i.map(d=>this.renderWidget(d))}</div>`:l`<p class="empty">${n("Nada para mostrar aqui.")}</p>`}
      ${this.renderPicker(t,a)}`}renderRoom(t){const e=ss(t,this.home.settings?.shown),a=this.arranged(t.id,e),i=this.editing===t.id,s=b=>b.length?a.filter(P=>b.includes(P.kind)).length:a.length,o=is.filter(b=>s(b.kinds)>0),r=o.find(b=>b.id===this.category)??o[0],c=!i&&r&&r.kinds.length?a.filter(b=>r.kinds.includes(b.kind)):a,d=S(t),p=t.temperature?this.entities[t.temperature]?.state:null,h=t.humidity?this.entities[t.humidity]?.state:null,f=[p&&p!=="unavailable"?`${M(parseFloat(p))}°`:null,h&&h!=="unavailable"?`${M(parseFloat(h),0)}%`:null,t.floor].filter(Boolean).join(" · ");return l`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label=${n("Voltar à casa")}>${x(g.back)}</button>
        <b>${t.name}</b><span>${i?"a editar":f}</span>
        <div class="act">
          ${d.length&&!i?l`<button class="pill" @click=${()=>this.call("light","turn_on",d)}>${x(g.bulb)} ${n("Acender")}</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",d)}>${n("Apagar")}</button>`:u}
          ${this.editControls(t.id,e)}
        </div>
      </div>
      ${o.length>2&&!i?l`<div class="cats">${o.map(b=>l`<button class=${m({on:b===r})} @click=${()=>this.category=b.id}>${b.name}<em>${s(b.kinds)}</em></button>`)}</div>`:u}
      <div class=${m({grid:!0,edit:i})}>${c.map(b=>this.renderWidget(b))}</div>
      ${this.renderPicker(t.id,e)}`}renderWidget(t){const e=t.entity?this.entities[t.entity]:void 0;if(t.entity&&t.kind!=="weather"&&!e)return u;const a=this.widgetBody(t,e),i={w:!0,[t.size]:!0,on:(a.on??!1)||this.flash===t.key,att:a.att??!1,off:!!t.entity&&as(e),dragging:this.drag?.key===t.key,moving:this.moving===t.key,[`k-${t.kind}`]:!0,idle:t.kind==="climate"&&e?.state==="off"},s=!!this.editing;return l`<div class=${m(i)} style=${a.style??""} data-key=${t.key}
        @pointerdown=${o=>this.down(o,t)} @pointermove=${o=>this.move(o,t)}
        @pointerup=${o=>this.up(o,t)} @pointercancel=${()=>this.cancel()} @contextmenu=${o=>o.preventDefault()}>
      ${a.fill!=null?l`<div class="fill" style=${Pi({width:`${a.fill}%`,"--fc":a.color??"255,207,138"})}></div>`:u}
      ${a.art??u}
      <span class="nm">${t.entity&&this.home.settings?.names?.[t.entity]||t.name}${a.tag?l`<em>${a.tag}</em>`:u}</span>
      ${a.extra??u}
      <div class="hero" style=${a.heroStyle??""}>${a.hero}${a.small?l`<small>${a.small}</small>`:u}</div>
      ${s?u:a.ctl??u}
      ${s?l`<button class="rmv" aria-label=${n("Esconder {name}",{name:t.name})} @click=${()=>this.hideWidget(t.key)}>${x(g.minus)}</button>
          <button class="handle" aria-label=${n("Mudar o tamanho de {name}",{name:t.name})} @click=${()=>this.resizeWidget(t)}>${x(g.resize)}<b>${t.size.toUpperCase()}</b></button>`:u}
    </div>`}widgetBody(t,e){const a=this.level(t);switch(t.kind){case"room-lights":{const i=t.entities.filter(r=>this.entities[r]?.state==="on"),s=i.length?me(this.entities[i[0]]):"#ffcf8a",o=t.entities.length;return{hero:a?`${a}%`:"Off",small:i.length?`${o>1?`${i.length}/${o} · `:""}${i.map(r=>this.name(r,t.room)).slice(0,2).join(n(" e "))}`:A(o,"{n} luz","{n} luzes"),art:ft(this.typeOf(i[0]??t.entities[0]),a??0,s),fill:a||null,color:kt(s),on:a>0,extra:l`<button class=${m({pw:!0,on:i.length>0})} aria-label=${n(i.length?"Apagar as luzes de {name}":"Acender as luzes de {name}",{name:t.name})}
            @click=${()=>this.call("light",i.length?"turn_off":"turn_on",t.entities)}>${x(g.power)}</button>`}}case"light":{const i=me(e);return{hero:a?`${a}%`:"Off",tag:t.sub&&this.view==="home"?t.sub:void 0,art:ft(this.typeOf(t.entity),a??0,i),fill:a||null,color:kt(i),on:(a??0)>0,heroStyle:a?`color:${i}`:""}}case"cover":{const i=a??0;return{hero:`${i}%`,small:fs[e.state]??e.state,art:Ii(i),fill:i,color:"170,200,230"}}case"climate":{const i=e.attributes.temperature,s=e.state,o=(e.attributes.hvac_modes??[]).filter(p=>["heat","cool","off","auto","heat_cool"].includes(p)).slice(0,3),r=s==="cool"?"#6cc8ff":s==="off"?"#5d646e":"#ff9f43",c=e.attributes.current_temperature,d=$t[e.attributes.hvac_action??s]??Ee[s]??s;return{hero:s==="off"?"Off":i!=null?`${M(i)}°`:"—",small:[d,c!=null?n("agora {t}°",{t:M(c)}):null].filter(Boolean).join(" · "),tag:t.sub,art:Bi(s==="off"?null:i??null,r),heroStyle:t.size==="l"?"font-size:calc(var(--u)*7)":"",extra:o.length>1?l`<div class="seg">${o.map(p=>l`<button class=${m({on:p===s})} @click=${()=>this.call("climate","set_hvac_mode",t.entity,{hvac_mode:p})}>${Ee[p]}</button>`)}</div>`:u,ctl:i!=null&&s!=="off"?l`<div class="ctl"><button aria-label=${n("Baixar")} @click=${()=>this.stepTemp(t.entity,-1)}>${x(g.minus)}</button><button aria-label=${n("Subir")} @click=${()=>this.stepTemp(t.entity,1)}>${x(g.plus)}</button></div>`:u}}case"weather":{const i=e?.state??"",s=e?.attributes.temperature,o=this.warnings[0];return{hero:s!=null?`${Math.round(s)}°`:"—",small:j[i]??i,art:gt(i),extra:o?l`<span class=${`ipma ${o.awarenessLevelID}`}><i></i>${n("Aviso {level}",{level:Oe[o.awarenessLevelID]??""})} · ${n(o.awarenessTypeName).toLowerCase()}${this.warnings.length>1?` +${this.warnings.length-1}`:""}</span>`:u,ctl:l`${this.renderHours()}${t.size==="l"||t.size==="xl"?this.renderDays(!0):u}`}}case"lock":{const i=e.state!=="locked";return{hero:i?e.state==="unlocked"?n("Destrancada"):e.state:n("Trancada"),small:n(i?"tocar para trancar":"toque longo para abrir"),art:ji(i),att:e.state==="unlocked",heroStyle:"font-size:calc(var(--u)*1.85)"}}case"media":{const i=e.state==="playing",s=e.attributes.media_title??(Y(e)?n("Ligado"):n("Desligado")),o=e.attributes.media_artist??e.attributes.app_name??"";return{hero:s,small:o,tag:t.sub,art:Fi(e.attributes.entity_picture),on:i,heroStyle:"font-size:calc(var(--u)*2.4)",ctl:Y(e)?l`<div class="ctl"><button class="pri" aria-label=${n(i?"Pausa":"Tocar")} @click=${()=>this.call("media_player","media_play_pause",t.entity)}>${x(i?g.pause:g.play)}</button>
                <button aria-label=${n("Seguinte")} @click=${()=>this.call("media_player","media_next_track",t.entity)}>${x(g.next)}</button></div>`:u}}case"vacuum":{const i=e.attributes.battery_level;return{hero:i!=null?`${i}%`:wt[e.state]??e.state,small:wt[e.state]??e.state,art:Wi(e.state==="cleaning"),on:e.state==="cleaning"}}case"scenes":return{hero:"",extra:l`<div class="scn">${t.entities.map(i=>l`<button @click=${()=>this.call(y(i),"turn_on",i)}>${x(g.spark)}${this.name(i)}</button>`)}</div>`};case"fan":return{hero:Y(e)?e.attributes.percentage!=null?`${e.attributes.percentage}%`:"On":"Off",art:qi(Y(e)),on:Y(e)};case"switch":case"outlet":{const i=Y(e);return{hero:i?"On":"Off",art:Ui(i),on:i}}case"binary":{const i=e.state==="on",s=e.attributes.device_class;return{hero:s&&["door","window","garage_door","opening"].includes(s)?n(i?"Aberta":"Fechada"):s==="motion"||s==="occupancy"?n(i?"Movimento":"Calmo"):i?"On":"Off",att:i&&!!s&&["door","window","garage_door","opening","moisture","smoke","gas"].includes(s),heroStyle:"font-size:calc(var(--u)*2.4)"}}case"sensor":{const i=e.attributes.unit_of_measurement??"",s=parseFloat(e.state),o=e.attributes.device_class;Number.isNaN(s)||this.historyWanted.add(t.entity);const r=this.history[t.entity],c=r&&r.length>1?`${M(Math.min(...r),0)}–${M(Math.max(...r),0)}`:void 0;return{hero:Number.isNaN(s)?e.state:`${M(s)}${i==="°C"?"°":i==="%"?"%":""}`,small:i&&i!=="°C"&&i!=="%"?i:t.sub,tag:c,art:Zi(o==="humidity"?"#3db8f5":o==="temperature"?"#ff9f43":"#5be3a0",r)}}case"clock":return{hero:this.now.toLocaleTimeString(L(),{hour:"2-digit",minute:"2-digit"}),small:this.now.toLocaleDateString(L(),{weekday:"long",day:"numeric",month:"long"})};case"scene":return{hero:"",art:Gi(),extra:l`<span class="go">${this.flash===t.key?n("Ativada"):n("Tocar para ativar")}</span>`};case"camera":{const i=e.attributes.entity_picture,s=Math.floor(this.now.getTime()/1e4);return{hero:"",tag:t.sub,art:i?l`<img class="cam" src=${`${i}${i.includes("?")?"&":"?"}t=${s}`} alt="" loading="lazy" />`:u}}}}name(t,e){const a=this.home.settings?.names?.[t];if(a)return a;for(const s of this.home.rooms){const o=s.devices.find(r=>r.id===t);if(o)return o.name}const i=this.entities[t]?.attributes.friendly_name??t.split(".")[1];return e&&i.toLowerCase().startsWith(e.name.toLowerCase()+" ")?i.slice(e.name.length+1):i}stepTemp(t,e){const a=this.entities[t],i=a?.attributes.target_temp_step??.5,s=a?.attributes.temperature??20,o=a?.attributes.min_temp??7,r=a?.attributes.max_temp??35;this.call("climate","set_temperature",t,{temperature:Math.max(o,Math.min(r,Math.round((s+e*i)*10)/10))})}renderSheet(t){const e=this.entities[t];if(!e)return u;const a=y(t),i=this.home.rooms.find(o=>o.devices.some(r=>r.id===t)),s=n(a==="light"?"luz":a==="cover"?"estore":a==="climate"?"clima":a==="lock"?"fechadura":a==="media_player"?"média":a==="weather"?"tempo":"");return l`<div class="scrim" @click=${()=>this.sheet=null}></div>
      <aside class="sheet" role="dialog" aria-label=${this.name(t,i)}>
        <div class="shd"><span class="k">${[i?.name,s].filter(Boolean).join(" · ")}</span>
          <button class="x" aria-label=${n("Fechar")} @click=${()=>this.sheet=null}>${x(g.close)}</button></div>
        <h4>${this.name(t,i)}</h4>
        ${this.sheetBody(t,e)}
        ${this.thisCard(t)}
      </aside>`}deviceOf(t){for(const e of this.home.rooms){const a=e.devices.find(i=>i.id===t);if(a)return a}}typeOf(t){const e=this.home.settings?.types?.[t];if(e&&oe[e])return e;const a=this.deviceOf(t);return je(t,this.entities[t],{name:a?.name,model:a?.model,manufacturer:a?.manufacturer})}saveHouse(t){this.home={...this.home,settings:{...this.home.settings??{},...t}},this.conn.sendMessagePromise({type:"pine3_home/home/settings",...t}).catch(e=>console.warn("Pine3 Home: settings",e))}thisCard(t){if(!this.cardSettings||!this.deviceOf(t)&&!this.home.rooms.some(h=>h.entities?.some(f=>f.id===t)))return u;const e=this.home.settings??{},a=Ut[y(t)]??[],i=this.typeOf(t),s=this.deviceOf(t),o=je(t,this.entities[t],{name:s?.name,model:s?.model,manufacturer:s?.manufacturer}),r=!!e.types?.[t],c=h=>{const f={...e.types??{}};h&&h!==o?f[t]=h:delete f[t],this.saveHouse({types:f})},d=h=>{const f={...e.names??{}},b=this.deviceOf(t)?.name;h&&h!==b?f[t]=h.slice(0,40):delete f[t],this.saveHouse({names:f})},p=(e.hidden??[]).includes(t);return l`<div class="this">
      <span class="k">${n("Este cartão · vale para todos os estilos e painéis")}</span>
      ${a.length>1?l`<div class="tchips" role="group" aria-label=${n("Tipo")}>${a.map(h=>l`<button class=${m({on:h===i})} aria-pressed=${h===i}
            @click=${()=>c(h)}>${x(oe[h].icon)}${oe[h].name}</button>`)}</div>
          <span class="auto">${r?l`${n("Escolhido por ti.")} <button class="lnk" @click=${()=>c(null)}>${n("Voltar ao automático ({type})",{type:oe[o].name.toLowerCase()})}</button>`:n("Adivinhado pelo nome e pelo modelo: {type}.",{type:oe[o].name.toLowerCase()})}</span>`:u}
      <label class="fld"><span>${n("Nome")}</span><input .value=${this.name(t)} maxlength="40" @change=${h=>d(h.target.value.trim())} /></label>
      <div class="fld"><span>${n("Esconder este cartão")}</span>
        <button class="sw" role="switch" aria-checked=${p} aria-label=${n("Esconder este cartão")}
          @click=${()=>{this.saveHouse({hidden:p?(e.hidden??[]).filter(h=>h!==t):[...e.hidden??[],t]}),p||(this.sheet=null)}}></button></div>
    </div>`}bigSlider(t,e,a,i,s){const o=this.drag?.key===t?this.drag.value:e,r=c=>{const d=c.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(c.clientX-d.left)/d.width*100)))};return l`<div class="bigsl" role="slider" aria-label=${i} aria-valuenow=${o} aria-valuemin="0" aria-valuemax="100"
      @pointerdown=${c=>{c.currentTarget.setPointerCapture(c.pointerId),this.drag={key:t,value:r(c)}}}
      @pointermove=${c=>{this.drag?.key===t&&c.buttons&&(this.drag={key:t,value:r(c)})}}
      @pointerup=${c=>{const d=r(c);s(d),this.drag={key:t,value:d},window.setTimeout(()=>{this.drag?.key===t&&(this.drag=null)},1500)}}>
      <i style=${`width:${o}%;background:${a}`}></i><b>${o}%</b></div>`}sheetBody(t,e){const a=y(t);if(a==="light"){const s=e.attributes.supported_color_modes??[],o=s.includes("color_temp"),r=s.some(h=>["hs","rgb","rgbw","rgbww","xy"].includes(h)),c=me(e),d=e.attributes.min_color_temp_kelvin??2200,p=e.attributes.max_color_temp_kelvin??6500;return l`${s.some(h=>h!=="onoff")?this.bigSlider(`sheet-${t}`,ee(e),`linear-gradient(90deg,${c},#fff3e0)`,n("Brilho"),h=>h?this.call("light","turn_on",t,{brightness_pct:h}):this.call("light","turn_off",t)):u}
        ${o?l`<span class="k">${n("Branco")}</span><div class="tbar" @click=${h=>{const f=h.currentTarget.getBoundingClientRect(),b=(h.clientX-f.left)/f.width;this.call("light","turn_on",t,{color_temp_kelvin:Math.round(d+b*(p-d))})}}></div>`:u}
        ${r?l`<span class="k">${n("Cores")}</span><div class="pre">${ws.map(h=>l`<button aria-label=${h} style=${`background:${h}`} class=${m({on:h===c})} @click=${()=>this.call("light","turn_on",t,{rgb_color:Yt(h)})}></button>`)}</div>`:u}
        <div class="foot"><button class="pill" @click=${()=>this.toggle(t)}>${x(g.power)} ${e.state==="on"?n("Desligar"):n("Ligar")}</button></div>`}if(a==="cover"){const s=e.attributes.current_position??(e.state==="open"?100:0);return l`${e.attributes.supported_features&4?this.bigSlider(`sheet-${t}`,s,"linear-gradient(90deg,#a9b6c4,#dfe6ee)",n("Posição"),o=>this.call("cover","set_cover_position",t,{position:o})):u}
        <div class="foot"><button class="pill" @click=${()=>this.call("cover","open_cover",t)}>${n("Abrir")}</button><button class="pill" @click=${()=>this.call("cover","stop_cover",t)}>${n("Parar")}</button><button class="pill" @click=${()=>this.call("cover","close_cover",t)}>${n("Fechar")}</button></div>`}if(a==="climate"){const s=e.attributes.temperature,o=e.attributes.hvac_modes??[];return l`<div class="bigtemp">${s!=null?`${M(s)}°`:"—"}<small>${$t[e.attributes.hvac_action??e.state]??""}${e.attributes.current_temperature!=null?` · agora ${M(e.attributes.current_temperature)}°`:""}</small></div>
        <div class="ctl big"><button aria-label=${n("Baixar")} @click=${()=>this.stepTemp(t,-1)}>${x(g.minus)}</button><button aria-label=${n("Subir")} @click=${()=>this.stepTemp(t,1)}>${x(g.plus)}</button></div>
        <span class="k">${n("Modo")}</span><div class="seg wide">${o.map(r=>l`<button class=${m({on:r===e.state})} @click=${()=>this.call("climate","set_hvac_mode",t,{hvac_mode:r})}>${Ee[r]??r}</button>`)}</div>`}if(a==="lock"){const s=e.state==="locked";return l`<div class="bigtemp">${s?n("Trancada"):e.state==="unlocked"?n("Destrancada"):e.state}</div>
        <div class="foot">${s?l`<button class="pill warn" @click=${()=>{this.call("lock","unlock",t),this.sheet=null}}>${x(g.unlock)} ${n("Destrancar")}</button>`:l`<button class="pill pri" @click=${()=>this.call("lock","lock",t)}>${x(g.lock)} ${n("Trancar")}</button>`}</div>`}if(a==="media_player"){const s=Math.round((e.attributes.volume_level??0)*100);return l`<div class="bigtemp" style="font-size:calc(var(--u)*2.6)">${e.attributes.media_title??e.state}<small>${e.attributes.media_artist??""}</small></div>
        ${e.attributes.volume_level!=null?this.bigSlider(`vol-${t}`,s,"linear-gradient(90deg,#3db8f5,#9be0ff)",n("Volume"),o=>this.call("media_player","volume_set",t,{volume_level:o/100})):u}
        <div class="foot"><button class="pill pri" @click=${()=>this.call("media_player","media_play_pause",t)}>${x(e.state==="playing"?g.pause:g.play)} ${e.state==="playing"?n("Pausa"):n("Tocar")}</button>
          <button class="pill" @click=${()=>this.call("media_player","media_next_track",t)}>${x(g.next)}</button>
          <button class="pill" @click=${()=>this.toggle(t)}>${x(g.power)}</button></div>`}if(a==="camera"){const s=e.attributes.entity_picture;return s?l`<img class="camlg" src=${`${s}${s.includes("?")?"&":"?"}t=${Math.floor(this.now.getTime()/1e4)}`} alt=${this.name(t)} />`:l`<p class="k">${n("Sem imagem")}</p>`}if(a==="weather"){const s=c=>new Date(c).toLocaleString(L(),{weekday:"short",hour:"2-digit",minute:"2-digit"}),o=e.attributes.temperature,r=[e.attributes.humidity!=null?`${e.attributes.humidity}%`:null,e.attributes.wind_speed!=null?`${n("vento")} ${M(e.attributes.wind_speed,0)} ${e.attributes.wind_speed_unit??""}`:null].filter(Boolean);return l`<div class="bigtemp">${o!=null?`${Math.round(o)}°`:"—"}<small>${[j[e.state]??e.state,...r].join(" · ")}</small></div>
        ${this.hourly.length?l`<span class="k">${n("Próximas 6 horas")}</span>${this.renderHours()}`:u}
        ${this.daily.length?l`<span class="k">${n("Próximos 5 dias")}</span>${this.renderDays(!1)}`:u}
        ${this.warnings.map(c=>l`<div class=${`warn ${c.awarenessLevelID}`}><b>${n("Aviso {level}",{level:Oe[c.awarenessLevelID]??""})} · ${n(c.awarenessTypeName)}</b>
          <span>${s(c.startTime)} → ${s(c.endTime)}</span>${c.text?l`<p>${c.text}</p>`:u}</div>`)}
        ${this.home.settings?.ipma_area?u:l`<p class="hint">${n("Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.")}</p>`}`}const i=e.attributes.unit_of_measurement??"";return l`<div class="bigtemp">${e.state}${i?` ${i}`:""}</div>
      ${["switch","light","fan","input_boolean","vacuum"].includes(a)?l`<div class="foot"><button class="pill pri" @click=${()=>this.toggle(t)}>${x(g.power)} ${Y(e)?n("Desligar"):n("Ligar")}</button></div>`:u}`}};v.styles=Z;C([V({attribute:!1})],v.prototype,"home",2);C([V({attribute:!1})],v.prototype,"entities",2);C([V({attribute:!1})],v.prototype,"dashboard",2);C([V({attribute:!1})],v.prototype,"conn",2);C([V()],v.prototype,"screenName",2);C([V({type:Boolean})],v.prototype,"canEdit",2);C([V({type:Boolean})],v.prototype,"ambient",2);C([V({type:Boolean})],v.prototype,"settingsButton",2);C([V({type:Boolean})],v.prototype,"cardSettings",2);C([V({type:Boolean})],v.prototype,"preview",2);C([V()],v.prototype,"startView",2);C([V({type:Boolean})],v.prototype,"wallpanel",2);C([k()],v.prototype,"editing",2);C([k()],v.prototype,"draft",2);C([k()],v.prototype,"moving",2);C([k()],v.prototype,"saving",2);C([k()],v.prototype,"view",2);C([k()],v.prototype,"category",2);C([k()],v.prototype,"sheet",2);C([k()],v.prototype,"drag",2);C([k()],v.prototype,"now",2);C([k()],v.prototype,"hourly",2);C([k()],v.prototype,"daily",2);C([k()],v.prototype,"warnings",2);C([k()],v.prototype,"history",2);C([k()],v.prototype,"flash",2);v=C([I("pine3-vidro")],v);function Yt(t){const e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function kt(t){if(t.startsWith("#"))return Yt(t).join(",");const e=t.match(/\d+/g);return e?e.slice(0,3).join(","):"255,207,138"}var ys=Object.getOwnPropertyDescriptor,ks=(t,e,a,i)=>{for(var s=i>1?void 0:i?ys(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=r(s)||s);return s};const xt=t=>$`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`,xs=U([{id:"home",name:"Casa",color:"#ffd166",icon:g.home},{id:"@divisoes",name:"Divisões",color:"#d9f2e3",icon:g.room},{id:"@clima",name:"Clima",color:"#ffb08a",icon:g.therm},{id:"@seguranca",name:"Segurança",color:"#bfe0ff",icon:g.shield},{id:"@cenas",name:"Cenas",color:"#ffd0c2",icon:g.spark}]),Ct=["#ffd166","#d9f2e3","#c9b8ff","#ffd0c2","#bfe0ff","#ffb08a","#e9f5a8"],At={key:"clock",kind:"clock",size:"l",name:""};let Fe=class extends v{render(){if(!this.home)return u;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(a=>a.id===this.view),e={vd:!0,bento:!0,editing:!!this.editing};return l`<div class=${m(e)}>
      ${this.renderPills()}
      <main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderRooms():this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):u}
    </div>`}renderPills(){const t=this.home.rooms.some(i=>i.id===this.view),e=z(this.home,this.entities).alerts,a=xs.filter(i=>i.id==="home"||i.id==="@divisoes"||this.viewWidgets(i.id).length);return l`<nav class="bnav" aria-label=${n("Vistas")}>
      ${a.map(i=>{const s=this.view===i.id||i.id==="@divisoes"&&t;return l`<button class=${m({on:s})} style=${`--c:${i.color}`} @click=${()=>this.openRoom(i.id)}>
          ${xt(i.icon)}${i.name}${i.id==="@seguranca"&&e?l`<span class="bb">${e}</span>`:u}
        </button>`})}
      ${this.view==="home"?l`<span class="btools">${this.editControls("home",[At,...We(this.home,this.entities)])}</span>`:u}
      ${this.renderGear("bgear")}
      <span class="clk">${this.now.toLocaleTimeString(L(),{hour:"2-digit",minute:"2-digit"})}</span>
    </nav>`}renderHome(){const t=[At,...We(this.home,this.entities)],e=this.arranged("home",t),a=this.editing==="home";return l`<div class=${m({grid:!0,edit:a})}>${e.map(i=>this.renderWidget(i))}</div>
      ${this.renderPicker("home",t)}`}renderRooms(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(a=>!a.hidden));return l`<div class="grid">${t.map((e,a)=>{const i=S(e),s=i.filter(r=>this.entities[r]?.state==="on").length,o=e.temperature?parseFloat(this.entities[e.temperature]?.state??""):NaN;return l`<button class=${m({w:!0,s:!0,room:!0,dim:!s})} style=${`--rc:${Ct[a%Ct.length]}`} @click=${()=>this.openRoom(e.id)}>
        <span class="nm">${xt(J(e.icon))}${Number.isNaN(o)?u:l`<em>${M(o)}°</em>`}</span>
        <div class="hero">${e.name}<small>${q(i.length,s,e.devices.length)}</small></div>
      </button>`})}</div>`}};Fe.styles=[Z,D`
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
  `];Fe=ks([I("pine3-bento")],Fe);var Cs=Object.getOwnPropertyDescriptor,As=(t,e,a,i)=>{for(var s=i>1?void 0:i?Cs(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=r(s)||s);return s};const ae=t=>$`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`,_t=E({home:"Casa","@divisoes":"Divisões","@clima":"Clima","@seguranca":"Segurança","@cenas":"Cenas"}),_s=70,Ls=$`<svg viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 22 Q18 8 36 18 T70 14 T100 18 V46 H0Z" fill="#3c3552" opacity=".85"/>
  <path d="M0 30 Q22 18 46 28 T100 26 V46 H0Z" fill="#252a40"/>
  <path d="M0 38 Q30 30 60 36 T100 34 V46 H0Z" fill="#171b2a"/></svg>`;let qe=class extends v{get order(){return["home","@divisoes",...["@clima","@seguranca","@cenas"].filter(t=>this.viewWidgets(t).length)]}get current(){return this.home.rooms.some(t=>t.id===this.view)?"@divisoes":this.view}step(t){const e=this.order,a=Math.max(0,e.indexOf(this.current));this.openRoom(e[(a+t+e.length)%e.length])}swipeDown(t){const e=t.target;this.editing||this.sheet||e.closest(".w, button, .sheet, .picker, .bigsl")||(this.swipe={x:t.clientX,y:t.clientY,id:t.pointerId})}swipeUp(t){const e=this.swipe;if(this.swipe=void 0,!e||e.id!==t.pointerId)return;const a=t.clientX-e.x;Math.abs(a)>_s&&Math.abs(a)>Math.abs(t.clientY-e.y)*1.5&&this.step(a<0?1:-1)}render(){if(!this.home)return u;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(r=>r.id===this.view),e=z(this.home,this.entities).lightsOn>0,a=this.view==="home",i={vd:!0,moldura:!0,dim:!e,editing:!!this.editing},s=this.order,o=this.current;return l`<div class=${m(i)} @pointerdown=${r=>this.swipeDown(r)} @pointerup=${r=>this.swipeUp(r)}
        @pointercancel=${()=>this.swipe=void 0}>
      <div class="hills">${Ls}</div>
      ${a?this.renderFrame():l`<div class="panel"><main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderRoomList():this.renderView(this.view)}</main></div>`}
      <div class="pager">
        <b>${t?t.name:_t[o]??""}</b>
        <div class="dots">${s.map(r=>l`<button class=${m({on:r===o})} aria-label=${_t[r]} @click=${()=>this.openRoom(r)}></button>`)}</div>
        ${this.renderGear("mgear")}
      </div>
      ${this.editing?u:l`<button class="edge l" aria-label=${n("Vista anterior")} @click=${()=>this.step(-1)}>${ae(g.back)}</button>
          <button class="edge r" aria-label=${n("Vista seguinte")} @click=${()=>this.step(1)}>${ae(g.back)}</button>`}
      ${a?l`<span class="hint">${n("desliza para o lado para mudar de vista")}</span>`:u}
      ${this.sheet?this.renderSheet(this.sheet):u}
    </div>`}renderFrame(){const t=z(this.home,this.entities),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,i=this.warnings[0],s=this.home.rooms.filter(h=>!h.hidden&&S(h).length),o=this.home.rooms.flatMap(h=>h.devices).find(h=>!h.hidden&&y(h.id)==="climate"),r=this.home.rooms.flatMap(h=>h.devices).find(h=>!h.hidden&&y(h.id)==="lock"),c=o?this.entities[o.id]:void 0,d=r?this.entities[r.id]:void 0,p=[t.lightsOn?A(t.lightsOn,"{n} luz acesa","{n} luzes acesas"):n("luzes apagadas"),t.alerts?t.alertText:null].filter(Boolean);return l`<div class="tl">
        <b>${this.now.toLocaleTimeString(L(),{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${this.now.toLocaleDateString(L(),{weekday:"long",day:"numeric",month:"long"})}</span>
      </div>
      <div class="tr">
        ${e?l`<b>${a!=null?`${Math.round(a)}°`:""}</b>${this.weatherWord(e.state)}<br />`:u}
        ${p.join(" · ")}
        ${i?l`<br /><span class=${`ipma ${i.awarenessLevelID}`}><i></i>${n("Aviso {level}",{level:n({yellow:"amarelo",orange:"laranja",red:"vermelho"}[i.awarenessLevelID]??"")})} · ${n(i.awarenessTypeName).toLowerCase()}</span>`:u}
      </div>
      <div class="strip">
        ${s.map(h=>{const f=S(h).filter(b=>this.entities[b]?.state==="on").length;return l`<button class=${m({q:!0,on:f>0})} @click=${()=>this.openRoom(h.id)}>
            <i>${ae(J(h.icon))}</i><span>${h.name}<small>${f?A(f,"{n} luz","{n} luzes"):n("apagada")}</small></span>
          </button>`})}
        ${o&&c?l`<button class=${m({q:!0,on:c.state!=="off"})} @click=${()=>this.openRoom("@clima")}>
              <i>${ae(g.therm)}</i><span>${c.state==="off"?"Off":`${M(c.attributes.temperature??0)}°`}<small>${n("clima")}</small></span>
            </button>`:u}
        ${r&&d?l`<button class=${m({q:!0,alert:d.state==="unlocked"})}
                @click=${()=>d.state==="locked"?this.sheet=r.id:this.call("lock","lock",r.id)}>
              <i>${ae(d.state==="locked"?g.lock:g.unlock)}</i><span>${r.name}<small>${d.state==="locked"?n("trancada"):n("destrancada · tocar")}</small></span>
            </button>`:u}
      </div>`}weatherWord(t){const e={"clear-night":"Céu limpo",cloudy:"Nublado",fog:"Nevoeiro",lightning:"Trovoada","lightning-rainy":"Trovoada e chuva",partlycloudy:"Pouco nublado",pouring:"Chuva forte",rainy:"Chuva",snowy:"Neve",sunny:"Sol",windy:"Vento"};return e[t]?n(e[t]):t}renderRoomList(){const t=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden)),e=z(this.home,this.entities).lightsOn;return l`<div class="rtop"><b>${n("Divisões")}</b><span>${e?A(e,"{n} luz acesa","{n} luzes acesas"):n("tudo apagado")}</span></div>
      <div class="grid">${t.map(a=>{const i=S(a),s=i.filter(r=>this.entities[r]?.state==="on").length,o=a.temperature?parseFloat(this.entities[a.temperature]?.state??""):NaN;return l`<button class=${m({w:!0,s:!0,rc:!0,on:s>0})} @click=${()=>this.openRoom(a.id)}>
          <span class="nm">${a.name}${Number.isNaN(o)?u:l`<em>${M(o)}°</em>`}</span>
          <div class="hero">${ae(J(a.icon))}<small>${q(i.length,s,a.devices.length)}</small></div>
        </button>`})}</div>`}};qe.styles=[Z,D`
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
  `];qe=As([I("pine3-moldura")],qe);var Ms=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,Xt=(t,e,a,i)=>{for(var s=i>1?void 0:i?Hs(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Ms(e,a,s),s};const Vs=U([{id:"home",name:"Casa"},{id:"@divisoes",name:"Divisões"},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Segurança"},{id:"@cenas",name:"Cenas"}]),zs=["nenhuma","uma","duas","três","quatro","cinco","seis","sete","oito","nove","dez"],Ss=["no","one","two","three","four","five","six","seven","eight","nine","ten"],Ps=E({yellow:"amarelo",orange:"laranja",red:"vermelho"});let Le=class extends v{constructor(){super(...arguments),this.open=null}get pages(){return Vs.filter(t=>t.id==="home"||t.id==="@divisoes"||this.viewWidgets(t.id).length)}render(){if(!this.home)return u;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(s=>s.id===this.view),e=this.pages,a=t?"@divisoes":this.view,i=Math.max(0,e.findIndex(s=>s.id===a));return l`<div class=${m({vd:!0,editorial:!0,editing:!!this.editing})}>
      <nav class="toc" aria-label=${n("Índice")}>
        ${e.map(s=>l`<button class=${m({on:s.id===a})} @click=${()=>this.openRoom(s.id)}>${s.name}</button>`)}
        ${this.renderGear("egear")}
        <span class="no">${n("N.º")} ${i+1} / ${e.length}</span>
      </nav>
      <main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?l`<div class="rtop"><b>${n("Divisões")}</b><span>${this.lightsLine()}</span></div>${this.renderList(!0)}`:this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):u}
    </div>`}lightsLine(){const t=z(this.home,this.entities).lightsOn;return t?A(t,"{n} luz acesa","{n} luzes acesas"):n("tudo apagado")}sentence(){const t=z(this.home,this.entities),e=this.home.rooms.map(p=>p.temperature?parseFloat(this.entities[p.temperature]?.state??""):NaN).filter(p=>!Number.isNaN(p)),a=e.length?Math.round(e.reduce((p,h)=>p+h,0)/e.length):null,i=this.home.rooms.flatMap(p=>p.devices).find(p=>!p.hidden&&y(p.id)==="lock"),s=i?this.entities[i.id]?.state:void 0;if(Ft()==="en"){const p=t.lightsOn>=4?"cosy":t.lightsOn?"calm":"dark",h=`${Ss[t.lightsOn]??t.lightsOn} ${t.lightsOn===1?"light":"lights"}`,f=i&&s?s==="locked"?l`the ${i.name.toLowerCase()} locked`:l`the ${i.name.toLowerCase()} <em>still unlocked</em>`:null,b=[h,a!=null?`${a} degrees`:null].filter(Boolean).join(", ");return l`The house is <em>${p}</em>: ${b}${f?l`, and ${f}`:u}.`}const o=t.lightsOn>=4?"acolhedora":t.lightsOn?"calma":"às escuras",r=`${zs[t.lightsOn]??t.lightsOn} ${t.lightsOn===1?"luz":"luzes"}`,c=i&&s?s==="locked"?l`a ${i.name.toLowerCase()} trancada`:l`a ${i.name.toLowerCase()} <em>ainda destrancada</em>`:null,d=[r,a!=null?`${a} graus`:null].filter(Boolean).join(", ");return l`A casa está <em>${o}</em>: ${d}${c?l`, e ${c}`:u}.`}renderHome(){const t=this.now.toLocaleTimeString(L(),{hour:"2-digit",minute:"2-digit"}).split(":"),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,i=this.warnings[0],s=[...this.home.scenes,...this.home.scripts].filter(o=>this.entities[o]).slice(0,4);return l`<div class="ed">
      <div class="left">
        <div class="ttl">${t[0]}<em>:</em>${t[1]}</div>
        <div class="sub">${this.sentence()}</div>
        ${s.length?l`<div class="scn">${s.map(o=>l`<button class=${m({on:this.flash===o})} @click=${()=>this.tap({key:o,kind:"scene",size:"s",name:"",entity:o})}>
              ${(this.entities[o].attributes.friendly_name??o).toLowerCase()}</button>`)}</div>`:u}
        <div class="meta">
          ${e?l`<div>${n("Lá fora")}<b>${a!=null?`${Math.round(a)}°, `:""}${this.weatherWord(e.state)}</b></div>`:u}
          ${i?l`<div class="warnm">${n("Aviso {level}",{level:Ps[i.awarenessLevelID]??""})}<b>${n(i.awarenessTypeName).toLowerCase()}</b></div>`:u}
        </div>
      </div>
      ${this.renderList(!1)}
    </div>`}weatherWord(t){const e={"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",lightning:"trovoada","lightning-rainy":"trovoada",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve",sunny:"sol",windy:"vento"};return e[t]?n(e[t]):t}renderList(t){const e=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden));return l`<div class=${m({list:!0,full:t})}>${e.map(a=>this.renderRow(a))}</div>`}renderRow(t){const e=S(t),a=e.filter(d=>this.entities[d]?.state==="on").length,i=t.temperature?parseFloat(this.entities[t.temperature]?.state??""):NaN,s=t.devices.find(d=>y(d.id)==="lock"),o=s&&this.entities[s.id]?.state==="unlocked",r=this.open===t.id,c=`${q(e.length,a,t.devices.length)}${Number.isNaN(i)?"":` · ${M(i,0)}°`}`;return l`<div class=${m({r:!0,on:a>0})}>
      <div class="h">
        <button class="nmb" aria-expanded=${r} @click=${()=>this.open=r?null:t.id}>${t.name}</button>
        <span>${c}</span>
        ${o?l`<button class="tg warn" @click=${()=>this.call("lock","lock",s.id)}>${n("trancar")}</button>`:e.length?l`<button class="tg" @click=${()=>this.call("light",a?"turn_off":"turn_on",e)}>${a?"on":"off"}</button>`:l`<button class="tg" @click=${()=>this.openRoom(t.id)}>${n("abrir")}</button>`}
      </div>
      ${r?l`<div class="ctrls">
            ${e.map(d=>this.lineControl(d,t))}
            <button class="more" @click=${()=>this.openRoom(t.id)}>${n("ver tudo em {room}",{room:t.name.toLowerCase()})} →</button>
          </div>`:u}
    </div>`}lineControl(t,e){const a=this.entities[t],i=`line-${t}`,s=this.drag?.key===i?this.drag.value:ee(a),o=r=>{const c=r.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(r.clientX-c.left)/c.width*100)))};return l`<div class="lc">
      <span>${this.name(t,e)}</span><b>${s?`${s}%`:"—"}</b>
      <div class="line" role="slider" aria-label=${this.name(t,e)} aria-valuenow=${s} aria-valuemin="0" aria-valuemax="100"
        @pointerdown=${r=>{r.currentTarget.setPointerCapture(r.pointerId),this.drag={key:i,value:o(r)}}}
        @pointermove=${r=>{this.drag?.key===i&&r.buttons&&(this.drag={key:i,value:o(r)})}}
        @pointerup=${r=>{const c=o(r);this.call("light",c?"turn_on":"turn_off",t,c?{brightness_pct:c}:{}),this.drag={key:i,value:c},window.setTimeout(()=>{this.drag?.key===i&&(this.drag=null)},1500)}}><i style=${`width:${s}%`}></i></div>
    </div>`}};Le.styles=[Z,D`
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
  `];Xt([k()],Le.prototype,"open",2);Le=Xt([I("pine3-editorial")],Le);var Ts=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,tt=(t,e,a,i)=>{for(var s=i>1?void 0:i?Es(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Ts(e,a,s),s};const Os=U([{id:"home",name:"Casa"},{id:"@divisoes",name:"Div."},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Seg."},{id:"@cenas",name:"Cenas"}]),X=270,Ns=16,Rs=30;let ve=class extends v{constructor(){super(...arguments),this.faderRoom=null,this.dial=null}render(){if(!this.home)return u;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(s=>s.id===this.view),e=t?"@divisoes":this.view,a=Os.filter(s=>s.id==="home"||s.id==="@divisoes"||this.viewWidgets(s.id).length),i=z(this.home,this.entities).alerts;return l`<div class=${m({vd:!0,instrumento:!0,editing:!!this.editing})}>
      <nav class="bank" aria-label=${n("Vistas")}>
        ${a.map(s=>l`<button class=${m({key:!0,on:s.id===e})} @click=${()=>this.openRoom(s.id)}>
          <span class=${m({led:!0,on:s.id===e,alarm:s.id==="@seguranca"&&i>0})}></span>${s.name}
        </button>`)}
        ${this.settingsButton?l`<button class="key set" @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}><span class="led"></span>${n("Def.")}</button>`:u}
      </nav>
      <main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderSwitches(!0):this.view.startsWith("@")?this.renderView(this.view):this.renderConsole()}</main>
      ${this.sheet?this.renderSheet(this.sheet):u}
    </div>`}lightRooms(){return this.home.rooms.filter(t=>!t.hidden&&S(t).length)}renderConsole(){const t=this.home.weather?this.entities[this.home.weather]:void 0,e=t?.attributes.temperature,a=this.warnings[0],i=[...this.home.scenes,...this.home.scripts].filter(c=>this.entities[c]).slice(0,3),s=this.home.rooms.flatMap(c=>c.devices).find(c=>!c.hidden&&y(c.id)==="lock"),o=s?this.entities[s.id]?.state==="locked":!0,r=this.now.toLocaleDateString(L(),{weekday:"short",day:"numeric",month:"short"}).replace(/\./g,"");return l`<div class="console">
      <section class="mod disp">
        <div class="lab"><span>${n("Hora")}</span><span>${r}</span></div>
        <b>${this.now.toLocaleTimeString(L(),{hour:"2-digit",minute:"2-digit"})}</b>
        <span class="ln">${t?`${e!=null?`${Math.round(e)}° · `:""}${j[t.state]??t.state}`:""}${a?` · ${n("aviso {type}",{type:n(a.awarenessTypeName).toLowerCase()})}`:""}</span>
        <div class="keys">
          ${i.map((c,d)=>l`<button class=${m({btn:!0,on:this.flash===c})} @click=${()=>this.tap({key:c,kind:"scene",size:"s",name:"",entity:c})}>
            ${d+1} ${(this.entities[c].attributes.friendly_name??c).split(" ")[0]}</button>`)}
          ${s?l`<button class=${m({btn:!0,lockw:!o})} @click=${()=>o?this.sheet=s.id:this.call("lock","lock",s.id)}>
                <span class=${m({led:!0,g:o,on:!0})}></span>${n(o?"Tranc.":"Porta")}</button>`:u}
        </div>
      </section>
      ${this.renderKnob()}
      ${this.renderFaders()}
      ${this.renderSwitches(!1)}
    </div>`}renderKnob(){const t=this.home.rooms.flatMap(w=>w.devices.map(O=>({d:O,r:w}))).find(({d:w})=>!w.hidden&&y(w.id)==="climate");if(!t)return l`<section class="mod knob"><div class="lab"><span>${n("Clima")}</span></div><p class="k">${n("Sem termóstato")}</p></section>`;const e=this.entities[t.d.id],a=!!e&&e.state!=="off",i=e?.attributes.min_temp??Ns,s=Math.min(e?.attributes.max_temp??Rs,i+14),o=this.dial??e?.attributes.temperature??i,r=Math.max(0,Math.min(1,(o-i)/(s-i))),c=-X/2+r*X,d=Array.from({length:29},(w,O)=>{const te=(-X/2+O*X/28)*Math.PI/180,we=O%4?44:41,ta=a&&O/28<=r;return $`<line x1=${50+47*Math.sin(te)} y1=${50-47*Math.cos(te)} x2=${50+we*Math.sin(te)} y2=${50-we*Math.cos(te)}
        stroke=${ta?"#ff6a1a":"#6b6a66"} stroke-width=${O%4?1:1.8} stroke-linecap="round"/>`}),p=e?.attributes.target_temp_step??.5,h=w=>{const O=w.currentTarget.getBoundingClientRect(),te=Math.atan2(w.clientX-(O.left+O.width/2),-(w.clientY-(O.top+O.height/2)))*180/Math.PI,we=Math.max(0,Math.min(1,(te+X/2)/X));return Math.round((i+we*(s-i))/p)*p},f=(e?.attributes.hvac_modes??[]).filter(w=>["cool","heat","off","auto","heat_cool"].includes(w)).slice(0,3),b=E({cool:"Frio",heat:"Calor",off:"Off",auto:"Auto",heat_cool:"Auto"}),P=e?.attributes.current_temperature;return l`<section class="mod knob">
      <div class="lab"><span>${n("Clima")} · ${t.r.name}${P!=null?` · ${M(P)}°`:""}</span><span class=${m({led:!0,on:a})}></span></div>
      <div class="dialw" role="slider" aria-label=${n("Temperatura")} aria-valuenow=${o} aria-valuemin=${i} aria-valuemax=${s}
        @pointerdown=${w=>{a&&(w.currentTarget.setPointerCapture(w.pointerId),this.dial=h(w))}}
        @pointermove=${w=>{this.dial!=null&&w.buttons&&(this.dial=h(w))}}
        @pointerup=${w=>{if(this.dial==null)return;const O=h(w);this.call("climate","set_temperature",t.d.id,{temperature:O}),window.setTimeout(()=>this.dial=null,1500)}}>
        <svg viewBox="0 0 100 100" aria-hidden="true">${d}</svg>
        <div class="kn"><i style=${`transform:rotate(${a?c:-X/2}deg)`}></i></div>
        <div class="ktx"><div>${a?`${M(o)}°`:"off"}<small>${n(a?"roda":"desligado")}</small></div></div>
      </div>
      <div class="keys">${f.map(w=>l`<button class=${m({btn:!0,on:e?.state===w})} @click=${()=>this.call("climate","set_hvac_mode",t.d.id,{hvac_mode:w})}>${b[w]}</button>`)}</div>
    </section>`}renderFaders(){const t=this.lightRooms(),e=t.find(o=>o.id===this.faderRoom)??t[0];if(!e)return l`<section class="mod fad"><div class="lab"><span>Faders</span></div></section>`;const a=e.devices.filter(o=>!o.hidden&&y(o.id)==="cover"&&this.entities[o.id]?.attributes.supported_features&4),i=[...S(e).map(o=>({id:o,v:ee(this.entities[o]),n:this.name(o,e),cover:!1})),...a.map(o=>({id:o.id,v:this.entities[o.id]?.attributes.current_position??0,n:o.name,cover:!0}))].slice(0,4),s=o=>{const r=o.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(r.bottom-o.clientY)/r.height*100)))};return l`<section class="mod fad">
      <div class="lab"><span>Faders</span><span class="led g on"></span></div>
      <div class="sel">${t.map(o=>l`<button class=${m({btn:!0,on:o.id===e.id})} @click=${()=>this.faderRoom=o.id}>${o.name.slice(0,5)}</button>`)}</div>
      <div class="faders">${i.map(o=>{const r=`fd-${o.id}`,c=this.drag?.key===r?this.drag.value:o.v;return l`<div class="fd"><b>${c}</b>
          <div class="tk" role="slider" aria-label=${o.n} aria-valuenow=${c} aria-valuemin="0" aria-valuemax="100"
            @pointerdown=${d=>{d.currentTarget.setPointerCapture(d.pointerId),this.drag={key:r,value:s(d)}}}
            @pointermove=${d=>{this.drag?.key===r&&d.buttons&&(this.drag={key:r,value:s(d)})}}
            @pointerup=${d=>{const p=s(d);o.cover?this.call("cover","set_cover_position",o.id,{position:p}):this.call("light",p?"turn_on":"turn_off",o.id,p?{brightness_pct:p}:{}),this.drag={key:r,value:p},window.setTimeout(()=>{this.drag?.key===r&&(this.drag=null)},1500)}}><div class="cap" style=${`bottom:calc((100% - var(--u) * 2.1) * ${c/100})`}></div></div>
          <span>${o.n}</span></div>`})}</div>
    </section>`}renderSwitches(t){const e=t?this.home.rooms.filter(i=>!i.hidden&&i.devices.some(s=>!s.hidden)):this.lightRooms().slice(0,6),a=z(this.home,this.entities).lightsOn;return l`<section class=${m({mod:!0,sw:!0,full:t})}>
      <div class="lab"><span>${n(t?"Divisões":"Luzes")}</span><span>${A(a,"{n} acesa","{n} acesas")}</span></div>
      <div class="rows">${e.map(i=>{const s=S(i),o=s.filter(c=>this.entities[c]?.state==="on"),r=o.length?Math.max(...o.map(c=>ee(this.entities[c]))):0;return l`<div class="rk">
          <button class=${m({rocker:!0,on:o.length>0})} aria-label=${n("Luzes de {room}",{room:i.name})} ?disabled=${!s.length}
            @click=${()=>this.call("light",o.length?"turn_off":"turn_on",s)}><i></i></button>
          <button class="rkn" @click=${()=>this.openRoom(i.id)}><b>${i.name}</b><span>${s.length?o.length?`${r}%`:"off":n("{n} disp.",{n:i.devices.length})}</span></button>
        </div>`})}</div>
    </section>`}};ve.styles=[Z,D`
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
  `];tt([k()],ve.prototype,"faderRoom",2);tt([k()],ve.prototype,"dial",2);ve=tt([I("pine3-instrumento")],ve);var Ds=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,Kt=(t,e,a,i)=>{for(var s=i>1?void 0:i?Is(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Ds(e,a,s),s};const ie=t=>$`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`,Ne=U([{id:"home",name:"Casa",icon:g.home},{id:"@divisoes",name:"Divisões",icon:g.room},{id:"@clima",name:"Clima",icon:g.therm},{id:"@seguranca",name:"Segurança",icon:g.shield},{id:"@cenas",name:"Cenas",icon:g.spark}]);let Me=class extends v{constructor(){super(...arguments),this.wheel=!1}get views(){return Ne.filter(t=>t.id==="home"||t.id==="@divisoes"||this.viewWidgets(t.id).length)}go(t){this.wheel=!1,this.openRoom(t)}render(){if(!this.home)return u;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(i=>i.id===this.view),e=t?"@divisoes":this.view,a=Ne.find(i=>i.id===e)??Ne[0];return l`<div class=${m({vd:!0,orbita:!0,editing:!!this.editing})}>
      <main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderOrbList():this.view.startsWith("@")?this.renderView(this.view):this.renderSky()}</main>
      ${this.wheel?this.renderWheel(e):u}
      ${this.editing?u:l`<button class="hub" aria-label=${n("Mudar de vista")} aria-expanded=${this.wheel} @click=${()=>this.wheel=!this.wheel}>
            <i>${ie(this.wheel?g.close:a.icon)}</i><span><b>${t?t.name:a.name}</b><small>${n("toca para mudar de vista")}</small></span>
          </button>`}
      ${this.sheet?this.renderSheet(this.sheet):u}
    </div>`}renderWheel(t){const e=[...this.views];this.settingsButton&&e.push({id:"@settings",name:n("Definições"),icon:g.gear});const a=e.length;return l`<div class="radial" @click=${i=>{i.target===i.currentTarget&&(this.wheel=!1)}}>
      ${e.map((i,s)=>{const o=Math.PI+(a===1?Math.PI/2:s*Math.PI/(a-1)),r=50+30*Math.cos(o),c=88+30*(5/3)*Math.sin(o);return l`<button class=${m({rb:!0,on:i.id===t})} style=${`left:${r.toFixed(1)}%;top:${c.toFixed(1)}%;animation-delay:${s*30}ms`}
          @click=${()=>i.id==="@settings"?(this.wheel=!1,this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))):this.go(i.id)}>${ie(i.icon)}${i.name}</button>`})}
    </div>`}renderSky(){const t=z(this.home,this.entities),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,i=this.home.rooms.filter(h=>!h.hidden&&h.devices.some(f=>!f.hidden));i.length;const s=this.home.rooms.flatMap(h=>h.devices.filter(f=>!f.hidden)),o=s.find(h=>y(h.id)==="climate"),r=s.find(h=>y(h.id)==="lock"),c=o?this.entities[o.id]:void 0,d=r?this.entities[r.id]:void 0,p=this.warnings[0];return l`<div class="sky">
      <div class="core">
        <b>${this.now.toLocaleTimeString(L(),{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${this.now.toLocaleDateString(L(),{weekday:"long"})}${e?` · ${a!=null?`${Math.round(a)}° `:""}${j[e.state]??e.state}`:""}</span>
        <span>${t.lightsOn?A(t.lightsOn,"{n} luz acesa","{n} luzes acesas"):n("tudo apagado")}</span>
        ${p?l`<span class=${`ipma ${p.awarenessLevelID}`}><i></i>${n(p.awarenessTypeName).toLowerCase()}</span>`:u}
      </div>
      ${this.ring(i,o&&c?o.id:null,r&&d?r.id:null)}
    </div>`}ring(t,e,a){const i=t.map(o=>({key:o.id,render:(r,c)=>{const d=S(o),p=d.filter(P=>this.entities[P]?.state==="on"),h=Math.min(14,9+p.length*1.5),f=p.length?me(this.entities[p[0]]):"#ffcf85",b=p.length?Math.round(p.reduce((P,w)=>P+ee(this.entities[w]),0)/p.length):0;return l`<button class=${m({orb:!0,on:p.length>0})} style=${`left:${r}%;top:${c}%;--s:calc(var(--u) * ${h});--c:${f};--g:${.15+b/300}`}
          @click=${()=>this.openRoom(o.id)} aria-label=${o.name}>
          ${ie(J(o.icon))}<b>${o.name}</b><span>${q(d.length,p.length,o.devices.length)}</span>
        </button>`}}));if(e){const o=this.entities[e];i.splice(Math.min(1,i.length),0,{key:e,render:(r,c)=>l`<button class=${m({orb:!0,ac:o.state!=="off"})} style=${`left:${r}%;top:${c}%;--s:calc(var(--u) * 8)`} @click=${()=>this.openRoom("@clima")}>
          ${ie(g.therm)}<b>${o.state==="off"?"Off":`${M(o.attributes.temperature??0)}°`}</b><span>${n("clima")}</span></button>`})}if(a){const o=this.entities[a];i.push({key:a,render:(r,c)=>l`<button class=${m({orb:!0,alert:o.state==="unlocked"})} style=${`left:${r}%;top:${c}%;--s:calc(var(--u) * 8)`}
          @click=${()=>o.state==="locked"?this.sheet=a:this.call("lock","lock",a)}>
          ${ie(o.state==="locked"?g.lock:g.unlock)}<b>${n("Porta")}</b><span>${o.state==="locked"?n("trancada"):n("trancar")}</span></button>`})}const s=i.length;return i.map((o,r)=>{const c=-Math.PI/2+r*2*Math.PI/Math.max(s,1)+(s%2?0:Math.PI/s);return o.render(+(50+36*Math.cos(c)).toFixed(1),+(50+34*Math.sin(c)).toFixed(1))})}renderOrbList(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(a=>!a.hidden));return l`<div class="rtop"><b>${n("Divisões")}</b><span>${A(z(this.home,this.entities).lightsOn,"{n} luz acesa","{n} luzes acesas")}</span></div>
      <div class="orbs">${t.map(e=>{const a=S(e),i=a.filter(r=>this.entities[r]?.state==="on"),s=i.length?me(this.entities[i[0]]):"#ffcf85",o=e.temperature?parseFloat(this.entities[e.temperature]?.state??""):NaN;return l`<button class=${m({orb:!0,flat:!0,on:i.length>0})} style=${`--c:${s};--g:.3`} @click=${()=>this.openRoom(e.id)}>
          ${ie(J(e.icon))}<b>${e.name}</b><span>${q(a.length,i.length,e.devices.length)}${Number.isNaN(o)?"":` · ${M(o,0)}°`}</span>
        </button>`})}</div>`}};Me.styles=[Z,D`
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
  `];Kt([k()],Me.prototype,"wheel",2);Me=Kt([I("pine3-orbita")],Me);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs={},js=(t,e=Bs)=>t._$AH=e;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=Qe(class extends Je{constructor(){super(...arguments),this.key=u}render(t,e){return this.key=t,e}update(t,[e,a]){return e!==this.key&&(js(t),this.key=e),a}});var Ws=Object.getOwnPropertyDescriptor,Fs=(t,e,a,i)=>{for(var s=i>1?void 0:i?Ws(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=r(s)||s);return s};const Re=t=>$`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`,De=U([{id:"home",name:"Casa",color:"#f6d34a",icon:g.home},{id:"@divisoes",name:"Divisões",color:"#9fd8b8",icon:g.room},{id:"@clima",name:"Clima",color:"#ff8f6b",icon:g.therm},{id:"@seguranca",name:"Segurança",color:"#9cc4f2",icon:g.shield},{id:"@cenas",name:"Cenas",color:"#f7a98a",icon:g.spark}]);let Ue=class extends v{render(){if(!this.home)return u;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(s=>s.id===this.view),e=t?"@divisoes":this.view,a=De.filter(s=>s.id==="home"||s.id==="@divisoes"||this.viewWidgets(s.id).length),i=(De.find(s=>s.id===e)??De[0]).color;return l`<div class=${m({vd:!0,carteira:!0,editing:!!this.editing})}>
      <nav class="stack" aria-label=${n("Vistas")}>
        ${a.map(s=>l`<button class=${m({wtab:!0,on:s.id===e})} style=${`--c:${s.color}`} @click=${()=>this.openRoom(s.id)}>
          ${Re(s.icon)}<span>${s.name}</span></button>`)}
        ${this.settingsButton?l`<button class="wtab gear" style="--c:#d6cfc2" @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}>
              ${Re(g.gear)}<span>${n("Definições")}</span></button>`:u}
      </nav>
      <div class="wcard" style=${`--c:${i}`}>
        ${Qt(e,l`<main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderRows(!0):this.view.startsWith("@")?this.renderView(this.view):this.renderFront()}</main>`)}
      </div>
      ${this.sheet?this.renderSheet(this.sheet):u}
    </div>`}renderFront(){const t=this.home.weather?this.entities[this.home.weather]:void 0,e=t?.attributes.temperature,a=this.warnings[0],i=[...this.home.scenes,...this.home.scripts].filter(s=>this.entities[s]).slice(0,4);return l`<div class="front">
      <div class="l">
        <div class="big">${this.now.toLocaleTimeString(L(),{hour:"2-digit",minute:"2-digit"})}</div>
        <span class="date">${this.now.toLocaleDateString(L(),{weekday:"long",day:"numeric",month:"long"})}</span>
        ${i.length?l`<div class="pills">${i.map(s=>l`<button class=${m({on:this.flash===s})}
              @click=${()=>this.tap({key:s,kind:"scene",size:"s",name:"",entity:s})}>${this.entities[s].attributes.friendly_name??s}</button>`)}</div>`:u}
        ${t?l`<div class="wxg">${e!=null?`${Math.round(e)}°`:""}<small>${j[t.state]??t.state}${a?` · ${n("aviso {type}",{type:n(a.awarenessTypeName).toLowerCase()})}`:""}</small></div>`:u}
      </div>
      ${this.renderRows(!1)}
    </div>`}renderRows(t){const e=this.home.rooms.filter(s=>!s.hidden&&s.devices.some(o=>!o.hidden)),a=this.home.rooms.flatMap(s=>s.devices).find(s=>!s.hidden&&y(s.id)==="lock"),i=a?this.entities[a.id]:void 0;return l`<div class=${m({rows:!0,full:t})}>
      ${t?l`<div class="rtop"><b>${n("Divisões")}</b><span>${A(z(this.home,this.entities).lightsOn,"{n} luz acesa","{n} luzes acesas")}</span></div>`:u}
      ${e.map(s=>{const o=S(s),r=o.filter(d=>this.entities[d]?.state==="on").length,c=s.temperature?parseFloat(this.entities[s.temperature]?.state??""):NaN;return l`<div class="rowg">
          <button class="rn" @click=${()=>this.openRoom(s.id)}>${t?Re(J(s.icon)):u}<span><b>${s.name}</b>
            <small>${q(o.length,r,s.devices.length)}${Number.isNaN(c)?"":` · ${M(c)}°`}</small></span></button>
          ${o.length?l`<button class=${m({tg:!0,on:r>0})} role="switch" aria-checked=${r>0} aria-label=${n("Luzes de {room}",{room:s.name})}
                @click=${()=>this.call("light",r?"turn_off":"turn_on",o)}><i></i></button>`:u}
        </div>`})}
      ${a&&i?l`<div class="rowg">
            <span class="rn"><span><b>${a.name}</b><small>${i.state==="locked"?n("trancada"):n("destrancada · tocar para trancar")}</small></span></span>
            <button class=${m({tg:!0,on:i.state==="locked"})} role="switch" aria-checked=${i.state==="locked"} aria-label=${n("Trancar {name}",{name:a.name})}
              @click=${()=>i.state==="locked"?this.sheet=a.id:this.call("lock","lock",a.id)}><i></i></button>
          </div>`:u}
    </div>`}};Ue.styles=[Z,D`
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
  `];Ue=Fs([I("pine3-carteira")],Ue);var qs=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Jt=(t,e,a,i)=>{for(var s=i>1?void 0:i?Us(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&qs(e,a,s),s};const ye=t=>$`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`,Zs=E({home:"Casa","@divisoes":"Divisões","@clima":"Clima","@seguranca":"Segurança","@cenas":"Cenas"}),Gs=60;let He=class extends v{constructor(){super(...arguments),this.overview=!1}go(t){this.overview=!1,this.openRoom(t)}touchStart(t){this.pinch=t.touches.length===2?this.spread(t):void 0}touchMove(t){this.pinch==null||t.touches.length!==2||this.editing||this.pinch-this.spread(t)>Gs&&(this.pinch=void 0,this.overview=!0)}spread(t){const[e,a]=[t.touches[0],t.touches[1]];return Math.hypot(e.clientX-a.clientX,e.clientY-a.clientY)}render(){if(!this.home)return u;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(e=>e.id===this.view);return l`<div class=${m({vd:!0,lente:!0,editing:!!this.editing})}
        @touchstart=${e=>this.touchStart(e)} @touchmove=${e=>this.touchMove(e)}>
      ${this.overview?this.renderOverview():l`<div class="crumb">${this.view==="home"?l`<b>${n("Casa")}</b>`:l`<button @click=${()=>this.go("home")}>${n("Casa")}</button> › ${t?l`<button @click=${()=>this.go("@divisoes")}>${n("Divisões")}</button> › <b>${t.name}</b>`:l`<b>${Zs[this.view]??""}</b>`}`}</div>
          ${Qt(this.view,l`<main class="main zin">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderRoomRows(!0):this.view.startsWith("@")?this.renderView(this.view):this.renderFront()}</main>`)}
          ${this.editing?u:l`<span class="pinch">${n("aperta com dois dedos para ver todas as vistas")}</span>`}`}
      ${this.editing?u:l`<div class="tools">
            ${this.settingsButton?l`<button class="lensbtn round" aria-label=${n("Definições")} @click=${()=>this.dispatchEvent(new CustomEvent("pine3-settings",{bubbles:!0,composed:!0}))}>${ye(g.gear)}</button>`:u}
            <button class="lensbtn" @click=${()=>this.overview=!this.overview}><i>${ye(this.overview?g.close:g.room)}</i>${this.overview?n("Fechar"):n("Todas as vistas")}</button>
          </div>`}
      ${this.sheet?this.renderSheet(this.sheet):u}
    </div>`}renderOverview(){const t=z(this.home,this.entities),e=this.home.rooms.filter(r=>!r.hidden&&r.devices.some(c=>!c.hidden)),a=this.home.rooms.flatMap(r=>r.devices).find(r=>!r.hidden&&y(r.id)==="climate"),i=a?this.entities[a.id]:void 0,s=r=>r.map(c=>{const d=xe(S(c),this.entities);return l`<i class=${d?"on":""} style=${`height:${20+d*.7}%`}></i>`}),o=[{id:"home",name:n("Casa"),sub:`${A(t.lightsOn,"{n} luz","{n} luzes")} · ${this.now.toLocaleTimeString(L(),{hour:"2-digit",minute:"2-digit"})}`,ill:s(e)},{id:"@divisoes",name:n("Divisões"),sub:A(e.length,"{n} divisão","{n} divisões"),ill:s(e)}];this.viewWidgets("@clima").length&&o.push({id:"@clima",name:n("Clima"),sub:i?i.state==="off"?n("desligado"):`${M(i.attributes.temperature??0)}°`:t.temp??"",ill:u}),this.viewWidgets("@seguranca").length&&o.push({id:"@seguranca",name:n("Segurança"),sub:t.alertText,ill:u}),this.viewWidgets("@cenas").length&&o.push({id:"@cenas",name:n("Cenas"),sub:A(this.home.scenes.length+this.home.scripts.length,"{n} cena ou rotina","{n} cenas e rotinas"),ill:u});for(const r of e){const c=S(r);o.push({id:r.id,name:r.name,sub:q(c.length,c.filter(d=>this.entities[d]?.state==="on").length,r.devices.length),ill:c.map(d=>{const p=this.entities[d]?.state==="on"?xe([d],this.entities):0;return l`<i class=${p?"on":""} style=${`height:${20+p*.7}%`}></i>`})})}return l`<span class="ovh">${n("Todas as vistas · toca numa para aproximar")}</span>
      <div class="ov">${o.map((r,c)=>l`<button class=${m({mini:!0,cur:r.id===this.view})} style=${`animation-delay:${c*25}ms`} @click=${()=>this.go(r.id)}>
        <b>${r.name}</b><span>${r.sub}</span><div class="ill">${r.ill}</div></button>`)}</div>`}renderFront(){const t=this.home.weather?this.entities[this.home.weather]:void 0,e=t?.attributes.temperature,a=this.warnings[0],i=this.home.rooms.flatMap(h=>h.devices.filter(f=>!f.hidden)),s=i.find(h=>y(h.id)==="climate"),o=i.find(h=>y(h.id)==="lock"),r=s?this.entities[s.id]:void 0,c=o?this.entities[o.id]:void 0,d=[...this.home.scenes,...this.home.scripts].filter(h=>this.entities[h]).slice(0,6),p=this.now.toLocaleDateString(L(),{weekday:"long",day:"numeric",month:"long"});return l`<div class="lhome">
      <div class="hh">
        <b>${this.now.toLocaleTimeString(L(),{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${p}${t?` · ${e!=null?`${Math.round(e)}° `:""}${j[t.state]??t.state}`:""}${a?l` · <em>${n("aviso {type}",{type:n(a.awarenessTypeName).toLowerCase()})}</em>`:u}</span>
      </div>
      <div class="tile trooms"><b>${n("Divisões")}</b>${this.renderRoomRows(!1)}</div>
      ${s&&r?l`<div class="tile">
            <b>${s.name}</b><span>${r.state==="off"?n("desligado"):n("agora {t}°",{t:M(r.attributes.current_temperature??0)})}</span>
            <div class="tt">${r.state==="off"?"Off":`${M(r.attributes.temperature??0)}°`}</div>
            <div class="pmh">
              <button aria-label=${n("Baixar")} ?disabled=${r.state==="off"} @click=${()=>this.stepTemp(s.id,-1)}>${ye(g.minus)}</button>
              <button aria-label=${n("Subir")} ?disabled=${r.state==="off"} @click=${()=>this.stepTemp(s.id,1)}>${ye(g.plus)}</button>
              <button aria-label=${n("Mais")} @click=${()=>this.sheet=s.id}>…</button>
            </div>
          </div>`:l`<div class="tile"><b>${n("Clima")}</b><span>${z(this.home,this.entities).temp??"—"}</span></div>`}
      ${o&&c?l`<button class="tile" @click=${()=>c.state==="locked"?this.sheet=o.id:this.call("lock","lock",o.id)}>
            <b>${o.name}</b><span>${c.state==="locked"?n("trancada · toque para mais"):n("destrancada")}</span>
            <div class=${m({tt:!0,small:!0,alert:c.state!=="locked"})}>${c.state==="locked"?n("Trancada"):n("Toca para trancar")}</div>
          </button>`:l`<div class="tile"><b>${n("Segurança")}</b><span>${z(this.home,this.entities).alertText}</span></div>`}
      <div class="tile wide"><b>${n("Cenas")}</b>
        <div class="chh">${d.map(h=>l`<button class=${m({on:this.flash===h})}
          @click=${()=>this.tap({key:h,kind:"scene",size:"s",name:"",entity:h})}>${this.entities[h].attributes.friendly_name??h}</button>`)}</div>
      </div>
    </div>`}renderRoomRows(t){const e=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden));return l`${t?l`<div class="rtop"><b>${n("Divisões")}</b><span>${A(z(this.home,this.entities).lightsOn,"{n} luz acesa","{n} luzes acesas")}</span></div>`:u}
      <div class=${m({rows:!0,full:t})}>${e.map(a=>{const i=S(a),s=`bar-${a.id}`,o=this.drag?.key===s?this.drag.value:xe(i,this.entities),r=c=>{const d=c.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(c.clientX-d.left)/d.width*100)))};return l`<div class="rr">
          <button class="rname" @click=${()=>this.go(a.id)}>${a.name}${t?l`<small>${q(i.length,i.filter(c=>this.entities[c]?.state==="on").length,a.devices.length)}</small>`:u}</button>
          ${i.length?l`<div class="bar" role="slider" aria-label=${n("Luzes de {room}",{room:a.name})} aria-valuenow=${o} aria-valuemin="0" aria-valuemax="100"
                @pointerdown=${c=>{c.currentTarget.setPointerCapture(c.pointerId),this.drag={key:s,value:r(c)}}}
                @pointermove=${c=>{this.drag?.key===s&&c.buttons&&(this.drag={key:s,value:r(c)})}}
                @pointerup=${c=>{const d=r(c);this.call("light",d?"turn_on":"turn_off",i,d?{brightness_pct:d}:{}),this.drag={key:s,value:d},window.setTimeout(()=>{this.drag?.key===s&&(this.drag=null)},1500)}}><i style=${`width:${o}%`}></i></div>
              <span class="lv">${o?`${o}%`:"off"}</span>`:l`<span class="none">${A(a.devices.length,"{n} dispositivo","{n} dispositivos")}</span><span></span>`}
        </div>`})}</div>`}};He.styles=[Z,D`
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
  `];Jt([k()],He.prototype,"overview",2);He=Jt([I("pine3-lente")],He);const ea={vidro:"pine3-vidro",bento:"pine3-bento",moldura:"pine3-moldura",editorial:"pine3-editorial",instrumento:"pine3-instrumento",orbita:"pine3-orbita",carteira:"pine3-carteira",lente:"pine3-lente"},Lt=t=>_a(ea[t]??"pine3-vidro"),bo=Object.values(ea).join(", "),Ie={vidro:"linear-gradient(180deg,#262b31,#0f1113)",bento:"linear-gradient(135deg,#ffd166 0 33%,#efe9df 33% 66%,#ff7a50 66%)",moldura:"linear-gradient(180deg,#f2b27a,#7c5a8c 60%,#1a1f30)",editorial:"repeating-linear-gradient(180deg,#f1ece3 0 22%,#14110d 22% 24%)",instrumento:"radial-gradient(circle at 60% 50%,#ff6a1a 0 12%,#3a3a38 13%)",orbita:"radial-gradient(circle,#3a3f5a 0 30%,#20232f 31%)",carteira:"linear-gradient(180deg,#e9e4da,#cfc6b6)",lente:"linear-gradient(135deg,#e6e9ee,#c9ced6)"},Be=E({vidro:"Vidro",bento:"Bento",moldura:"Moldura",editorial:"Editorial",instrumento:"Instrumento",orbita:"Órbita",carteira:"Carteira",lente:"Lente"}),Ys=["vidro","bento","moldura","editorial","instrumento","orbita","carteira","lente"];E({left:"À esquerda",bottom:"Em baixo"});const Xs=E({grafite:"Grafite (escuro)",claro:"Claro",auto:"Automático (pôr do sol)"}),Mt={AVR:"Aveiro",BJA:"Beja",BRG:"Braga",BGC:"Bragança",CBO:"Castelo Branco",CBR:"Coimbra",EVR:"Évora",FAR:"Faro",GDA:"Guarda",LRA:"Leiria",LSB:"Lisboa",PTG:"Portalegre",PTO:"Porto",STM:"Santarém",STB:"Setúbal",VCT:"Viana do Castelo",VRL:"Vila Real",VIS:"Viseu",MCN:"Madeira · Costa Norte",MCS:"Madeira · Costa Sul",MRM:"Madeira · Regiões Montanhosas",MPS:"Porto Santo",AOR:"Açores · Grupo Oriental",ACE:"Açores · Grupo Central",AOC:"Açores · Grupo Ocidental"},Ks=[[0,"Nunca"],[1,"1 minuto"],[2,"2 minutos"],[5,"5 minutos"],[10,"10 minutos"],[30,"30 minutos"]],Qs=E({auto:"Automático (dia 50%, noite 12%)",low:"Sempre baixo (12%)",off:"Não mexer"});var Js=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,H=(t,e,a,i)=>{for(var s=i>1?void 0:i?eo(e,a):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&Js(e,a,s),s};const to=U([{id:"aparencia",name:"Aparência",icon:ii},{id:"divisoes",name:"Divisões",icon:Mi},{id:"entidades",name:"Entidades",icon:Ua},{id:"ambiente",name:"Face ambiente",icon:Vi},{id:"casa",name:"Casa",icon:Ga},{id:"ecras",name:"Ecrãs e painéis",icon:xi},{id:"sistema",name:"Sistema",icon:Nt}]),ao=["vidro","bento","moldura","editorial","instrumento","orbita","carteira","lente"],io=E({bento:"pílulas no topo",orbita:"uma roda que abre do botão em baixo",carteira:"separadores à direita, como cartões numa carteira",lente:"afastar para ver todas as vistas (botão ou pinça) e tocar numa para aproximar",moldura:"deslizar, com pontos no canto",editorial:"índice em palavras",instrumento:"banco de teclas"}),Ve=1334,Ze=800,R=t=>$`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`;let _=class extends re{constructor(){super(...arguments),this.entities={},this.dashboards=[],this.dashboardId="",this.version="",this.start="aparencia",this.code="",this.section="aparencia",this.screens=[],this.pending=[],this.screenName="",this.message=null,this.scale=.4,this.pvView="home",this.original={},this.query="",this.pinSet=null,this.newPin="",this.diagnostics=!1,this.iconFor=null}connectedCallback(){super.connectedCallback(),this.section=this.start,this.loadScreens(),this.ws({type:"pine3_home/pin/status"}).then(t=>this.pinSet=t.set).catch(()=>{}),this.timer=window.setInterval(()=>this.loadPending(),4e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.resize?.disconnect(),this.thumbResize?.disconnect()}updated(t){const e=this.renderRoot.querySelector(".pv");e&&!this.resize&&(this.resize=new ResizeObserver(()=>this.scale=e.clientWidth/Ve),this.resize.observe(e)),!e&&this.resize&&(this.resize.disconnect(),this.resize=void 0);const a=this.renderRoot.querySelector(".styles"),i=a?.querySelector(".thumb-live");a&&i&&(!this.thumbResize||this.thumbGrid!==a)&&(this.thumbResize?.disconnect(),this.thumbGrid=a,this.thumbResize=new ResizeObserver(()=>a.style.setProperty("--ts",String(i.clientWidth/Ve))),this.thumbResize.observe(i)),t.has("start")&&(this.section=this.start)}get dash(){return this.dashboards.find(t=>t.id===this.dashboardId)??this.dashboards[0]}ws(t){return this.conn.sendMessagePromise(t)}async run(t,e){this.message=null;try{await t(),e&&(this.message={ok:!0,text:e})}catch(a){this.message={ok:!1,text:n(a.message??String(a))}}}async loadScreens(){try{this.screens=(await this.ws({type:"pine3_home/screens"})).screens,await this.loadPending()}catch{}}async loadPending(){if(this.section==="ecras")try{this.pending=(await this.ws({type:"pine3_home/screens/pending"})).pending}catch{}}save(t){const e=this.dash;this.original[e.id]||(this.original={...this.original,[e.id]:{...e}});const a={...e,...t};return this.dashboards=this.dashboards.map(i=>i.id===e.id?a:i),this.emit("dashboards",this.dashboards),this.run(async()=>{const i=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:e.id,name:a.name,style:a.style,...t}});this.dashboards=i.dashboards,this.emit("dashboards",i.dashboards)})}emit(t,e){this.dispatchEvent(new CustomEvent(`pine3-${t}`,{detail:e,bubbles:!0,composed:!0}))}close(){this.emit("settings-close",null)}render(){return this.dash?l`<div class="wrap">
      <nav class="side" aria-label=${n("Definições")}>
        <div class="top">
          <button class="x" aria-label=${n("Fechar as definições")} @click=${()=>this.close()}>${R(Ot)}</button>
          <b>${n("Definições")}</b>
        </div>
        ${to.map(t=>l`<button class=${m({item:!0,on:t.id===this.section})} @click=${()=>{this.section=t.id,this.message=null,this.loadPending()}}>
          <i>${R(t.icon)}</i>${t.name}</button>`)}
        ${Object.keys(this.original).length?l`<button class="undo" @click=${()=>this.undo()}>${n("Desfazer alterações")}</button>`:u}
        <button class="done" @click=${()=>this.close()}>${n("Concluído")}</button>
      </nav>
      <main class="content">
        ${this.message?l`<p class=${m({msg:!0,bad:!this.message.ok})} role="status">${this.message.text}</p>`:u}
        ${this.section==="aparencia"?this.renderAppearance():u}
        ${this.section==="divisoes"?this.renderRooms():u}
        ${this.section==="entidades"?this.renderEntities():u}
        ${this.section==="ambiente"?this.renderAmbient():u}
        ${this.section==="casa"?this.renderHouse():u}
        ${this.section==="ecras"?this.renderScreens():u}
        ${this.section==="sistema"?this.renderSystem():u}
      </main>
    </div>`:u}dashPicker(){return this.dashboards.length<2?u:l`<div class="dpick">
      <span>${n("A editar o painel")}</span>
      ${this.dashboards.map(t=>l`<button class=${m({chip:!0,on:t.id===this.dash.id})} @click=${()=>this.emit("dashboard-select",t.id)}>${t.name}</button>`)}
    </div>`}renderAppearance(){const t=this.dash,e=Lt(t.style),a=t.style==="vidro";return l`<section class="card">
        <h2>${n("Aparência")}</h2>
        <p class="muted">${n("O estilo, o tema e a navegação do painel")} <b>${t.name}</b>. ${n("Vês o resultado já aqui; fica guardado no Home Assistant para todos os ecrãs que mostram este painel.")}</p>
        ${this.dashPicker()}
        <div class="pv" style=${`height:${Math.round(Ze*this.scale)}px`} aria-label=${n("Pré-visualização")}>
          <div class="pvin" style=${`transform:scale(${this.scale})`}>
            ${mt`<${e} .home=${this.home} .entities=${this.entities} .dashboard=${t} .conn=${this.conn} .startView=${this.pvView}></${e}>`}
          </div>
        </div>
        <div class="pvviews" aria-label=${n("Vista na pré-visualização")}>
          ${this.previewViews().map(([i,s])=>l`<button class=${m({chip:!0,on:i===this.pvView})} @click=${()=>this.pvView=i}>${s}</button>`)}
        </div>
      </section>
      <section class="card">
        <h3>${n("Estilo")}</h3>
        <div class="styles">${ao.map(i=>{const s=Ys.includes(i);return l`<button class=${m({sty:!0,on:i===t.style})} ?disabled=${!s} aria-pressed=${i===t.style}
            @click=${()=>this.save({style:i})}>
            ${s?this.thumb(i):l`<i style=${`background:${Ie[i]}`}></i>`}
            <span>${Be[i]}${s?"":l`<small>${n("em breve")}</small>`}</span></button>`})}</div>
      </section>
      <section class="card">
        <h3>${n("Tema")}</h3>
        <p class="muted">${n(a?"Claro, escuro, ou escuro ao pôr do sol.":"Só no Vidro: os outros estilos têm a sua própria paleta.")}</p>
        <div class="seg">${Object.entries(Xs).map(([i,s])=>l`<button class=${m({on:i===t.theme})} ?disabled=${!a} @click=${()=>this.save({theme:i})}>${s}</button>`)}</div>
      </section>
      <section class="card">
        <h3>${n("Navegação")}</h3>
        <p class="muted">${a?n("A dock do Vidro, à esquerda ou em baixo."):n("Este estilo navega com {nav}.",{nav:io[t.style]??n("a sua própria navegação")})}</p>
        <div class="seg">${[["left",n("Dock à esquerda")],["bottom",n("Dock em baixo")]].map(([i,s])=>l`<button class=${m({on:i===t.dock})} ?disabled=${!a} @click=${()=>this.save({dock:i})}>${s}</button>`)}</div>
      </section>
      <section class="card">
        <h3>${n("Editar a grelha nos ecrãs")}</h3>
        <div class="row">
          <span>${n("Os tablets que mostram este painel podem mudar a ordem, o tamanho e os cartões de cada vista (o lápis).")}</span>
          <button class="sw" role="switch" aria-checked=${t.screen_edit!==!1} aria-label=${n("Editar a grelha nos ecrãs")}
            @click=${()=>this.save({screen_edit:t.screen_edit===!1})}></button>
        </div>
      </section>`}renderAmbient(){const t=this.dash;return l`<section class="card">
        <h2>${n("Face ambiente")}</h2>
        <p class="muted">${n("Um relógio calmo com o tempo e a casa numa linha, depois de alguns minutos sem tocar no ecrã. O primeiro toque só acorda.")}</p>
        ${this.dashPicker()}
        <h3>${n("Aparece depois de")}</h3>
        <div class="seg">${Ks.map(([e,a])=>l`<button class=${m({on:e===(t.ambient_after??2)})} @click=${()=>this.save({ambient_after:e})}>${n(a)}</button>`)}</div>
      </section>
      <section class="card">
        <h3>${n("Brilho na face ambiente")}</h3>
        <p class="muted">${n("Só nos tablets com a app Pine3 Wallpanel. Fora da face ambiente, o brilho é o do sistema.")}</p>
        <div class="seg">${Object.entries(Qs).map(([e,a])=>l`<button class=${m({on:e===(t.ambient_brightness??"auto")})} @click=${()=>this.save({ambient_brightness:e})}>${a}</button>`)}</div>
      </section>`}renderHouse(){const t=this.home.settings?.ipma_area??"",e=this.hs.language??"auto",a=i=>{es(i,this.home.language),this.saveHouse({language:i})};return l`<section class="card">
      <h2>${n("Casa")}</h2>
      <p class="muted">${n("O que é da casa e vale para todos os painéis.")}</p>
      <h3>${Ft()==="pt"?"Idioma · Language":"Language · Idioma"}</h3>
      <p class="muted">${n("Dos painéis, dos ecrãs e destas definições. Automático segue o idioma do Home Assistant.")}</p>
      <div class="seg">${[["auto",n("Automático")],["pt","Português"],["en","English"]].map(([i,s])=>l`<button class=${m({on:i===e})} @click=${()=>a(i)}>${s}</button>`)}</div>
      <h3>${n("Avisos do IPMA")}</h3>
      <p class="muted">${n("Os avisos da tua área aparecem no cartão do tempo, na face ambiente e no topo de cada estilo.")}</p>
      <select class="sel" aria-label=${n("Área dos avisos do IPMA")} @change=${i=>{const s=i.target.value;this.run(()=>this.ws({type:"pine3_home/home/settings",ipma_area:s||null}),s?n("Avisos do IPMA: {area}.",{area:Mt[s]}):n("Avisos do IPMA desligados."))}}>
        <option value="" ?selected=${!t}>${n("Sem avisos")}</option>
        ${Object.entries(Mt).map(([i,s])=>l`<option value=${i} ?selected=${i===t}>${s}</option>`)}
      </select>
    </section>`}renderScreens(){const t=`${location.origin}/pine3/ecra`;return l`<section class="card">
        <h2>${n("Emparelhar um ecrã")}</h2>
        <p class="muted">${n("No tablet, abre")} <b>${t}</b>. ${n("Aparece um código de 6 algarismos: escreve-o aqui, ou lê o QR com o telemóvel.")}</p>
        <div class="pair">
          <input class="code" inputmode="numeric" maxlength="6" placeholder="000000" aria-label=${n("Código do ecrã")} .value=${this.code}
            @input=${e=>this.code=e.target.value.replace(/\D/g,"").slice(0,6)} />
          <input class="txt" maxlength="40" placeholder=${n("Nome, p.ex. Cozinha")} aria-label=${n("Nome do ecrã")} .value=${this.screenName}
            @input=${e=>this.screenName=e.target.value} />
          <button class="pri" ?disabled=${this.code.length!==6} @click=${()=>this.approve()}>${n("Emparelhar com {name}",{name:this.dash.name})}</button>
        </div>
        ${this.pending.length?l`<p class="muted">${n("À espera:")} ${this.pending.map(e=>l`<button class="chip" @click=${()=>this.code=e.code}>${e.code}</button>`)}</p>`:u}
      </section>
      <section class="card">
        <h3>${n("Ecrãs")}</h3>
        ${this.screens.length?l`<div class="list">${this.screens.map(e=>l`<div class="row">
              <i class="thumb" style=${`background:${Ie[this.dashboards.find(a=>a.id===e.dashboard)?.style??"vidro"]}`}></i>
              <span class="grow"><input class="txt inline" .value=${e.name} aria-label=${n("Nome do ecrã")} @change=${a=>this.updateScreen(e,{name:a.target.value.trim()||e.name})} />
                <small>${e.active===!1?n("token revogado"):e.last_used?n("visto {when}",{when:new Date(e.last_used).toLocaleString(L())}):n("ainda não ligou")}</small></span>
              <select class="sel" aria-label=${n("Painel de {name}",{name:e.name})} @change=${a=>this.updateScreen(e,{dashboard:a.target.value})}>
                ${this.dashboards.map(a=>l`<option value=${a.id} ?selected=${a.id===e.dashboard}>${a.name} · ${Be[a.style]}</option>`)}
              </select>
              <button class="danger" @click=${()=>this.removeScreen(e)}>${n("Remover")}</button>
            </div>`)}</div>`:l`<p class="muted">${n("Ainda não há ecrãs emparelhados.")}</p>`}
      </section>
      <section class="card">
        <h3>${n("Painéis")}</h3>
        <p class="muted">${n("Cada painel tem o seu estilo e a sua disposição. Cada ecrã mostra um painel.")}</p>
        <div class="list">${this.dashboards.map(e=>l`<div class="row">
          <i class="thumb" style=${`background:${Ie[e.style]}`}></i>
          <span class="grow"><input class="txt inline" .value=${e.name} aria-label=${n("Nome do painel")} @change=${a=>this.renameDashboard(e,a.target.value.trim())} />
            <small>${Be[e.style]} · ${A(this.screens.filter(a=>a.dashboard===e.id).length,"{n} ecrã","{n} ecrãs")}</small></span>
          ${e.id===this.dash.id?l`<span class="badge">${n("a ver")}</span>`:l`<button @click=${()=>this.emit("dashboard-select",e.id)}>${n("Ver e editar")}</button>`}
          ${this.dashboards.length>1?l`<button class="danger" @click=${()=>this.removeDashboard(e)}>${n("Remover")}</button>`:u}
        </div>`)}</div>
        <button class="add" @click=${()=>this.addDashboard()}>${R(It)} ${n("Novo painel")}</button>
      </section>`}renderSystem(){const t=Object.keys(this.dash.layouts??{});return l`<section class="card">
      <h2>${n("Sistema")}</h2>
      <div class="row"><span class="grow">${n("Versão")}<small>Pine3 Home ${this.version}</small></span></div>
      <div class="row"><span class="grow">${n("Disposição de {name}",{name:this.dash.name})}<small>${t.length?A(t.length,"arrumada à mão em {n} vista","arrumada à mão em {n} vistas"):n("automática")}</small></span>
        ${t.length?l`<button @click=${()=>this.resetLayouts()}>${n("Repor a automática")}</button>`:u}</div>
      <div class="row"><span class="grow">${n("Página dos ecrãs de parede")}<small>${location.origin}/pine3/ecra</small></span></div>
    </section>
    <section class="card">
      <h3>${n("PIN das definições nos ecrãs")}</h3>
      <p class="muted">${n("Nos ecrãs de parede, o ⚙ pede este PIN antes de abrir as definições. Depois de o escreverem, ficam com acesso durante 10 minutos. Cinco tentativas erradas seguidas bloqueiam o PIN durante 5 minutos.")}</p>
      <div class="row">
        <span class="grow">${this.pinSet?n("PIN definido"):n("Sem PIN: os ecrãs não abrem as definições")}<small>${this.pinSet?n("Escreve outro para o mudar."):n("De 4 a 8 algarismos.")}</small></span>
        <input class="code" type="password" inputmode="numeric" maxlength="8" placeholder="••••" aria-label=${n("Novo PIN")} .value=${this.newPin}
          @input=${e=>this.newPin=e.target.value.replace(/\D/g,"").slice(0,8)} />
        <button class="pri" ?disabled=${this.newPin.length<4} @click=${()=>this.setPin(this.newPin)}>${this.pinSet?n("Mudar o PIN"):n("Guardar o PIN")}</button>
        ${this.pinSet?l`<button class="danger" @click=${()=>this.setPin(null)}>${n("Remover")}</button>`:u}
      </div>
    </section>`}get hs(){return this.home.settings??{}}saveHouse(t){return this.home={...this.home,settings:{...this.hs,...t}},this.run(()=>this.ws({type:"pine3_home/home/settings",...t}))}renderRooms(){const t=this.home.rooms,e=this.hs.hidden_rooms??[],a=(i,s)=>{const o=i+s;if(o<0||o>=t.length)return;const r=t.map(c=>c.id);[r[i],r[o]]=[r[o],r[i]],this.home={...this.home,rooms:r.map(c=>t.find(d=>d.id===c))},this.saveHouse({room_order:r})};return l`<section class="card">
      <h2>${n("Divisões")}</h2>
      <p class="muted">${n("A ordem, o ícone e as divisões que aparecem. Vale para a dock, a Casa e todos os estilos e painéis. As divisões vêm das áreas do Home Assistant.")}</p>
      <div class="list">${t.map((i,s)=>{const o=!e.includes(i.id);return l`<div class=${m({row:!0,off:!o})}>
          <span class="mv">
            <button class="ib" aria-label=${n("Subir {name}",{name:i.name})} ?disabled=${s===0} @click=${()=>a(s,-1)}>${R(Ra)}</button>
            <button class="ib" aria-label=${n("Descer {name}",{name:i.name})} ?disabled=${s===t.length-1} @click=${()=>a(s,1)}>${R(Oa)}</button>
          </span>
          <button class="ricon" aria-label=${n("Ícone de {name}",{name:i.name})} aria-expanded=${this.iconFor===i.id} @click=${()=>this.iconFor=this.iconFor===i.id?null:i.id}>${R(Pe(i.icon))}</button>
          <span class="grow">${i.name}<small>${n("{n} de {total} dispositivos",{n:i.devices.filter(r=>!r.hidden).length,total:i.devices.length})}${i.floor?` · ${i.floor}`:""}</small></span>
          <button class="sw" role="switch" aria-checked=${o} aria-label=${n("Mostrar {name}",{name:i.name})}
            @click=${()=>void this.saveHouse({hidden_rooms:o?[...e,i.id]:e.filter(r=>r!==i.id)})}></button>
          ${this.iconFor===i.id?l`<div class="icons">${Ni.map(r=>l`<button class=${m({ib:!0,on:r===i.icon})} aria-label=${r.replace("mdi:","")}
                @click=${()=>{this.iconFor=null,this.saveHouse({room_icons:{...this.hs.room_icons??{},[i.id]:r}})}}>${R(Pe(r))}</button>`)}</div>`:u}
        </div>`})}</div>
    </section>`}visible(t){return t.primary?!(this.hs.hidden??[]).includes(t.id):(this.hs.shown??[]).includes(t.id)}toggleEntity(t){const e=this.hs.hidden??[],a=this.hs.shown??[];return t.primary?this.saveHouse({hidden:e.includes(t.id)?e.filter(i=>i!==t.id):[...e,t.id]}):this.saveHouse({shown:a.includes(t.id)?a.filter(i=>i!==t.id):[...a,t.id]})}renderEntities(){const t=this.query.trim().toLowerCase(),e=i=>(this.diagnostics||!i.category)&&(!t||`${i.name} ${i.id}`.toLowerCase().includes(t)),a=this.home.rooms.map(i=>({r:i,ents:(i.entities??[]).filter(e).sort((s,o)=>Number(o.primary)-Number(s.primary))})).filter(i=>i.ents.length);return l`<section class="card">
        <h2>${n("Entidades")}</h2>
        <p class="muted">${n("O que aparece nos painéis. Cada dispositivo tem um cartão com a sua entidade principal; as secundárias (o consumo de uma tomada, o interruptor de uma TV, um sensor de diagnóstico) podem ter um cartão próprio.")}</p>
        <label class="search">${R(ei)}<input type="search" placeholder=${n("Procurar por nome ou entidade")} aria-label=${n("Procurar entidade")}
          .value=${this.query} @input=${i=>this.query=i.target.value} /></label>
        <div class="row"><span>${n("Mostrar entidades de diagnóstico e configuração")}</span>
          <button class="sw" role="switch" aria-checked=${this.diagnostics} aria-label=${n("Mostrar entidades de diagnóstico")} @click=${()=>this.diagnostics=!this.diagnostics}></button></div>
      </section>
      ${a.length?a.map(({r:i,ents:s})=>this.entityRoom(i,s)):l`<section class="card"><p class="muted">Nenhuma entidade com "${this.query}".</p></section>`}`}entityRoom(t,e){const a=(t.entities??[]).filter(s=>this.diagnostics||!s.category),i=a.filter(s=>this.visible(s)).length;return l`<section class="card">
      <h3 class="rh">${R(Pe(t.icon))} ${t.name} <small>${n("{n} de {total} visíveis",{n:i,total:a.length})}</small></h3>
      <div class="list">${e.map(s=>{const o=this.visible(s);return l`<div class=${m({row:!0,off:!o})}>
          <span class="grow">${this.hs.names?.[s.id]??s.name}<small class="mono">${s.id}</small></span>
          ${this.typePicker(t,s)}
          <span class=${m({badge:!0,sec:!s.primary})}>${n(s.primary?"Principal":s.category?"Diagnóstico":"Secundária")}</span>
          <button class="sw" role="switch" aria-checked=${o} aria-label=${n("Mostrar {name}",{name:s.name})} @click=${()=>this.toggleEntity(s)}></button>
        </div>`})}</div>
    </section>`}typePicker(t,e){const a=Ut[e.id.split(".")[0]]??[];if(a.length<2)return u;const i=t.devices.find(r=>r.id===e.id),s=je(e.id,this.entities[e.id],{name:i?.name??e.name,model:i?.model,manufacturer:i?.manufacturer}),o=this.hs.types?.[e.id]??s;return l`<select class="sel tsel" aria-label=${n("Tipo de {name}",{name:e.name})} @change=${r=>{const c=r.target.value,d={...this.hs.types??{}};c===s?delete d[e.id]:d[e.id]=c,this.saveHouse({types:d})}}>${a.map(r=>l`<option value=${r} ?selected=${r===o}>${oe[r].name}${r===s?` (${n("automático")})`:""}</option>`)}</select>`}previewViews(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(a=>!a.hidden)).map(e=>[e.id,e.name]);return[["home",n("Casa")],...t,["@luzes",n("Luzes")],["@clima",n("Clima")],["@seguranca",n("Segurança")],["@cenas",n("Cenas")]]}thumb(t){const e=Lt(t),a={...this.dash,style:t};return l`<i class="thumb-live"><span class="tin">
      ${mt`<${e} preview .home=${this.home} .entities=${this.entities} .dashboard=${a} .conn=${this.conn}></${e}>`}
    </span></i>`}undo(){const t=this.original;return this.run(async()=>{let e=this.dashboards;for(const a of Object.values(t))e=(await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:a.id,name:a.name,style:a.style,dock:a.dock,theme:a.theme,screen_edit:a.screen_edit!==!1,...a.ambient_after!=null?{ambient_after:a.ambient_after}:{},...a.ambient_brightness?{ambient_brightness:a.ambient_brightness}:{}}})).dashboards;this.dashboards=e,this.original={},this.emit("dashboards",e)},n("Alterações desfeitas."))}setPin(t){return this.run(async()=>{const e=await this.ws({type:"pine3_home/pin/set",pin:t});this.pinSet=e.set,this.newPin=""},n(t?"PIN guardado.":"PIN removido: os ecrãs deixam de abrir as definições."))}approve(){const t=this.screenName.trim()||n("Ecrã");return this.run(async()=>{await this.ws({type:"pine3_home/screens/approve",code:this.code,name:t,dashboard:this.dash.id}),this.code="",this.screenName="",location.search.includes("code=")&&history.replaceState(null,"",location.pathname),await this.loadScreens()},n("{name} emparelhado. O ecrã liga-se dentro de segundos.",{name:t}))}updateScreen(t,e){return this.run(async()=>{await this.ws({type:"pine3_home/screens/update",screen_id:t.id,...e}),await this.loadScreens()})}removeScreen(t){if(confirm(n("Remover {name}? O ecrã volta a pedir um código.",{name:t.name})))return this.run(async()=>{await this.ws({type:"pine3_home/screens/remove",screen_id:t.id}),await this.loadScreens()},n("{name} removido.",{name:t.name}))}renameDashboard(t,e){if(!(!e||e===t.name))return this.run(async()=>{const a=await this.ws({type:"pine3_home/dashboards/save",dashboard:{id:t.id,name:e,style:t.style}});this.dashboards=a.dashboards,this.emit("dashboards",a.dashboards)})}addDashboard(){let t=this.dashboards.length+1;for(;this.dashboards.some(a=>a.id===`painel-${t}`);)t++;const e={id:`painel-${t}`,name:n("Painel {n}",{n:t}),style:"vidro"};return this.run(async()=>{const a=await this.ws({type:"pine3_home/dashboards/save",dashboard:e});this.dashboards=a.dashboards,this.emit("dashboards",a.dashboards),this.emit("dashboard-select",e.id),this.section="aparencia"},n("{name} criado: escolhe o estilo.",{name:e.name}))}removeDashboard(t){if(confirm(n("Remover o painel {name}? Os ecrãs que o mostram passam para o primeiro painel.",{name:t.name})))return this.run(async()=>{const e=await this.ws({type:"pine3_home/dashboards/remove",dashboard_id:t.id});this.dashboards=e.dashboards,this.emit("dashboards",e.dashboards),t.id===this.dash.id&&this.emit("dashboard-select",e.dashboards[0].id),await this.loadScreens()},n("{name} removido.",{name:t.name}))}resetLayouts(){if(confirm(n("Repor a disposição automática de todas as vistas de {name}?",{name:this.dash.name})))return this.run(async()=>{for(const e of Object.keys(this.dash.layouts??{}))await this.ws({type:"pine3_home/dashboards/layout",dashboard_id:this.dash.id,view:e,layout:null});const t=await this.ws({type:"pine3_home/dashboards"});this.dashboards=t.dashboards,this.emit("dashboards",t.dashboards)},n("Disposição reposta."))}};_.styles=D`
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
      width: ${Ve}px;
      height: ${Ze}px;
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
      width: ${Ve}px;
      height: ${Ze}px;
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
  `;H([V({attribute:!1})],_.prototype,"conn",2);H([V({attribute:!1})],_.prototype,"home",2);H([V({attribute:!1})],_.prototype,"entities",2);H([V({attribute:!1})],_.prototype,"dashboards",2);H([V()],_.prototype,"dashboardId",2);H([V()],_.prototype,"version",2);H([V()],_.prototype,"start",2);H([V()],_.prototype,"code",2);H([k()],_.prototype,"section",2);H([k()],_.prototype,"screens",2);H([k()],_.prototype,"pending",2);H([k()],_.prototype,"screenName",2);H([k()],_.prototype,"message",2);H([k()],_.prototype,"scale",2);H([k()],_.prototype,"pvView",2);H([k()],_.prototype,"original",2);H([k()],_.prototype,"query",2);H([k()],_.prototype,"pinSet",2);H([k()],_.prototype,"newPin",2);H([k()],_.prototype,"diagnostics",2);H([k()],_.prototype,"iconFor",2);_=H([I("pine3-settings")],_);export{u as A,F as E,bo as S,re as a,l as b,Lt as c,I as d,lo as e,uo as f,po as g,go as h,D as i,ho as j,fo as k,Je as l,no as m,V as n,jt as o,mo as p,Qe as q,k as r,es as s,n as t,mt as u};
