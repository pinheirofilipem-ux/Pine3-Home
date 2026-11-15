import{A as P,E as Ct,w as N,i as Zt,n as ht,r as Z,a as qt,c as $,t as Wt,b as oe}from"./chunks/base-BYQr5Ns4.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={ATTRIBUTE:1,CHILD:2},Lt=t=>(...e)=>({_$litDirective$:t,values:e});let At=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wt=class extends At{constructor(e){if(super(e),this.it=P,e.type!==Mt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===P||e==null)return this._t=void 0,this.it=e;if(e===Ct)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};wt.directiveName="unsafeHTML",wt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class kt extends wt{}kt.directiveName="unsafeSVG",kt.resultType=2;const ce=Lt(kt);function le(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gt={exports:{}};(function(t,e){var r=function(){var i=function(C,M){var m=236,x=17,d=C,w=s[M],l=null,o=0,k=null,v=[],b={},H=function(h,f){o=d*4+17,l=function(u){for(var p=new Array(u),g=0;g<u;g+=1){p[g]=new Array(u);for(var _=0;_<u;_+=1)p[g][_]=null}return p}(o),E(0,0),E(o-7,0),E(0,o-7),F(),I(),at(h,f),d>=7&&X(h),k==null&&(k=ne(d,w,v)),it(k,f)},E=function(h,f){for(var u=-1;u<=7;u+=1)if(!(h+u<=-1||o<=h+u))for(var p=-1;p<=7;p+=1)f+p<=-1||o<=f+p||(0<=u&&u<=6&&(p==0||p==6)||0<=p&&p<=6&&(u==0||u==6)||2<=u&&u<=4&&2<=p&&p<=4?l[h+u][f+p]=!0:l[h+u][f+p]=!1)},S=function(){for(var h=0,f=0,u=0;u<8;u+=1){H(!0,u);var p=c.getLostPoint(b);(u==0||h>p)&&(h=p,f=u)}return f},I=function(){for(var h=8;h<o-8;h+=1)l[h][6]==null&&(l[h][6]=h%2==0);for(var f=8;f<o-8;f+=1)l[6][f]==null&&(l[6][f]=f%2==0)},F=function(){for(var h=c.getPatternPosition(d),f=0;f<h.length;f+=1)for(var u=0;u<h.length;u+=1){var p=h[f],g=h[u];if(l[p][g]==null)for(var _=-2;_<=2;_+=1)for(var A=-2;A<=2;A+=1)_==-2||_==2||A==-2||A==2||_==0&&A==0?l[p+_][g+A]=!0:l[p+_][g+A]=!1}},X=function(h){for(var f=c.getBCHTypeNumber(d),u=0;u<18;u+=1){var p=!h&&(f>>u&1)==1;l[Math.floor(u/3)][u%3+o-8-3]=p}for(var u=0;u<18;u+=1){var p=!h&&(f>>u&1)==1;l[u%3+o-8-3][Math.floor(u/3)]=p}},at=function(h,f){for(var u=w<<3|f,p=c.getBCHTypeInfo(u),g=0;g<15;g+=1){var _=!h&&(p>>g&1)==1;g<6?l[g][8]=_:g<8?l[g+1][8]=_:l[o-15+g][8]=_}for(var g=0;g<15;g+=1){var _=!h&&(p>>g&1)==1;g<8?l[8][o-g-1]=_:g<9?l[8][15-g-1+1]=_:l[8][15-g-1]=_}l[o-8][8]=!h},it=function(h,f){for(var u=-1,p=o-1,g=7,_=0,A=c.getMaskFunction(f),L=o-1;L>0;L-=2)for(L==6&&(L-=1);;){for(var B=0;B<2;B+=1)if(l[p][L-B]==null){var z=!1;_<h.length&&(z=(h[_]>>>g&1)==1);var T=A(p,L-B);T&&(z=!z),l[p][L-B]=z,g-=1,g==-1&&(_+=1,g=7)}if(p+=u,p<0||o<=p){p-=u,u=-u;break}}},lt=function(h,f){for(var u=0,p=0,g=0,_=new Array(f.length),A=new Array(f.length),L=0;L<f.length;L+=1){var B=f[L].dataCount,z=f[L].totalCount-B;p=Math.max(p,B),g=Math.max(g,z),_[L]=new Array(B);for(var T=0;T<_[L].length;T+=1)_[L][T]=255&h.getBuffer()[T+u];u+=B;var G=c.getErrorCorrectPolynomial(z),K=O(_[L],G.getLength()-1),Tt=K.mod(G);A[L]=new Array(G.getLength()-1);for(var T=0;T<A[L].length;T+=1){var Vt=T+Tt.getLength()-A[L].length;A[L][T]=Vt>=0?Tt.getAt(Vt):0}}for(var Ht=0,T=0;T<f.length;T+=1)Ht+=f[T].totalCount;for(var gt=new Array(Ht),pt=0,T=0;T<p;T+=1)for(var L=0;L<f.length;L+=1)T<_[L].length&&(gt[pt]=_[L][T],pt+=1);for(var T=0;T<g;T+=1)for(var L=0;L<f.length;L+=1)T<A[L].length&&(gt[pt]=A[L][T],pt+=1);return gt},ne=function(h,f,u){for(var p=V.getRSBlocks(h,f),g=W(),_=0;_<u.length;_+=1){var A=u[_];g.put(A.getMode(),4),g.put(A.getLength(),c.getLengthInBits(A.getMode(),h)),A.write(g)}for(var L=0,_=0;_<p.length;_+=1)L+=p[_].dataCount;if(g.getLengthInBits()>L*8)throw"code length overflow. ("+g.getLengthInBits()+">"+L*8+")";for(g.getLengthInBits()+4<=L*8&&g.put(0,4);g.getLengthInBits()%8!=0;)g.putBit(!1);for(;!(g.getLengthInBits()>=L*8||(g.put(m,8),g.getLengthInBits()>=L*8));)g.put(x,8);return lt(g,p)};b.addData=function(h,f){f=f||"Byte";var u=null;switch(f){case"Numeric":u=J(h);break;case"Alphanumeric":u=st(h);break;case"Byte":u=rt(h);break;case"Kanji":u=Q(h);break;default:throw"mode:"+f}v.push(u),k=null},b.isDark=function(h,f){if(h<0||o<=h||f<0||o<=f)throw h+","+f;return l[h][f]},b.getModuleCount=function(){return o},b.make=function(){if(d<1){for(var h=1;h<40;h++){for(var f=V.getRSBlocks(h,w),u=W(),p=0;p<v.length;p++){var g=v[p];u.put(g.getMode(),4),u.put(g.getLength(),c.getLengthInBits(g.getMode(),h)),g.write(u)}for(var _=0,p=0;p<f.length;p++)_+=f[p].dataCount;if(u.getLengthInBits()<=_*8)break}d=h}H(!1,S())},b.createTableTag=function(h,f){h=h||2,f=typeof f>"u"?h*4:f;var u="";u+='<table style="',u+=" border-width: 0px; border-style: none;",u+=" border-collapse: collapse;",u+=" padding: 0px; margin: "+f+"px;",u+='">',u+="<tbody>";for(var p=0;p<b.getModuleCount();p+=1){u+="<tr>";for(var g=0;g<b.getModuleCount();g+=1)u+='<td style="',u+=" border-width: 0px; border-style: none;",u+=" border-collapse: collapse;",u+=" padding: 0px; margin: 0px;",u+=" width: "+h+"px;",u+=" height: "+h+"px;",u+=" background-color: ",u+=b.isDark(p,g)?"#000000":"#ffffff",u+=";",u+='"/>';u+="</tr>"}return u+="</tbody>",u+="</table>",u},b.createSvgTag=function(h,f,u,p){var g={};typeof arguments[0]=="object"&&(g=arguments[0],h=g.cellSize,f=g.margin,u=g.alt,p=g.title),h=h||2,f=typeof f>"u"?h*4:f,u=typeof u=="string"?{text:u}:u||{},u.text=u.text||null,u.id=u.text?u.id||"qrcode-description":null,p=typeof p=="string"?{text:p}:p||{},p.text=p.text||null,p.id=p.text?p.id||"qrcode-title":null;var _=b.getModuleCount()*h+f*2,A,L,B,z,T="",G;for(G="l"+h+",0 0,"+h+" -"+h+",0 0,-"+h+"z ",T+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',T+=g.scalable?"":' width="'+_+'px" height="'+_+'px"',T+=' viewBox="0 0 '+_+" "+_+'" ',T+=' preserveAspectRatio="xMinYMin meet"',T+=p.text||u.text?' role="img" aria-labelledby="'+ut([p.id,u.id].join(" ").trim())+'"':"",T+=">",T+=p.text?'<title id="'+ut(p.id)+'">'+ut(p.text)+"</title>":"",T+=u.text?'<description id="'+ut(u.id)+'">'+ut(u.text)+"</description>":"",T+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',T+='<path d="',B=0;B<b.getModuleCount();B+=1)for(z=B*h+f,A=0;A<b.getModuleCount();A+=1)b.isDark(B,A)&&(L=A*h+f,T+="M"+L+","+z+G);return T+='" stroke="transparent" fill="black"/>',T+="</svg>",T},b.createDataURL=function(h,f){h=h||2,f=typeof f>"u"?h*4:f;var u=b.getModuleCount()*h+f*2,p=f,g=u-f;return ie(u,u,function(_,A){if(p<=_&&_<g&&p<=A&&A<g){var L=Math.floor((_-p)/h),B=Math.floor((A-p)/h);return b.isDark(B,L)?0:1}else return 1})},b.createImgTag=function(h,f,u){h=h||2,f=typeof f>"u"?h*4:f;var p=b.getModuleCount()*h+f*2,g="";return g+="<img",g+=' src="',g+=b.createDataURL(h,f),g+='"',g+=' width="',g+=p,g+='"',g+=' height="',g+=p,g+='"',u&&(g+=' alt="',g+=ut(u),g+='"'),g+="/>",g};var ut=function(h){for(var f="",u=0;u<h.length;u+=1){var p=h.charAt(u);switch(p){case"<":f+="&lt;";break;case">":f+="&gt;";break;case"&":f+="&amp;";break;case'"':f+="&quot;";break;default:f+=p;break}}return f},se=function(h){var f=1;h=typeof h>"u"?f*2:h;var u=b.getModuleCount()*f+h*2,p=h,g=u-h,_,A,L,B,z,T={"██":"█","█ ":"▀"," █":"▄","  ":" "},G={"██":"▀","█ ":"▀"," █":" ","  ":" "},K="";for(_=0;_<u;_+=2){for(L=Math.floor((_-p)/f),B=Math.floor((_+1-p)/f),A=0;A<u;A+=1)z="█",p<=A&&A<g&&p<=_&&_<g&&b.isDark(L,Math.floor((A-p)/f))&&(z=" "),p<=A&&A<g&&p<=_+1&&_+1<g&&b.isDark(B,Math.floor((A-p)/f))?z+=" ":z+="█",K+=h<1&&_+1>=g?G[z]:T[z];K+=`
`}return u%2&&h>0?K.substring(0,K.length-u-1)+Array(u+1).join("▀"):K.substring(0,K.length-1)};return b.createASCII=function(h,f){if(h=h||1,h<2)return se(f);h-=1,f=typeof f>"u"?h*2:f;var u=b.getModuleCount()*h+f*2,p=f,g=u-f,_,A,L,B,z=Array(h+1).join("██"),T=Array(h+1).join("  "),G="",K="";for(_=0;_<u;_+=1){for(L=Math.floor((_-p)/h),K="",A=0;A<u;A+=1)B=1,p<=A&&A<g&&p<=_&&_<g&&b.isDark(L,Math.floor((A-p)/h))&&(B=0),K+=B?z:T;for(L=0;L<h;L+=1)G+=K+`
`}return G.substring(0,G.length-1)},b.renderTo2dContext=function(h,f){f=f||2;for(var u=b.getModuleCount(),p=0;p<u;p++)for(var g=0;g<u;g++)h.fillStyle=b.isDark(p,g)?"black":"white",h.fillRect(p*f,g*f,f,f)},b};i.stringToBytesFuncs={default:function(C){for(var M=[],m=0;m<C.length;m+=1){var x=C.charCodeAt(m);M.push(x&255)}return M}},i.stringToBytes=i.stringToBytesFuncs.default,i.createStringToBytes=function(C,M){var m=function(){for(var d=re(C),w=function(){var I=d.read();if(I==-1)throw"eof";return I},l=0,o={};;){var k=d.read();if(k==-1)break;var v=w(),b=w(),H=w(),E=String.fromCharCode(k<<8|v),S=b<<8|H;o[E]=S,l+=1}if(l!=M)throw l+" != "+M;return o}(),x=63;return function(d){for(var w=[],l=0;l<d.length;l+=1){var o=d.charCodeAt(l);if(o<128)w.push(o);else{var k=m[d.charAt(l)];typeof k=="number"?(k&255)==k?w.push(k):(w.push(k>>>8),w.push(k&255)):w.push(x)}}return w}};var a={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},s={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},c=function(){var C=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],M=1335,m=7973,x=21522,d={},w=function(l){for(var o=0;l!=0;)o+=1,l>>>=1;return o};return d.getBCHTypeInfo=function(l){for(var o=l<<10;w(o)-w(M)>=0;)o^=M<<w(o)-w(M);return(l<<10|o)^x},d.getBCHTypeNumber=function(l){for(var o=l<<12;w(o)-w(m)>=0;)o^=m<<w(o)-w(m);return l<<12|o},d.getPatternPosition=function(l){return C[l-1]},d.getMaskFunction=function(l){switch(l){case n.PATTERN000:return function(o,k){return(o+k)%2==0};case n.PATTERN001:return function(o,k){return o%2==0};case n.PATTERN010:return function(o,k){return k%3==0};case n.PATTERN011:return function(o,k){return(o+k)%3==0};case n.PATTERN100:return function(o,k){return(Math.floor(o/2)+Math.floor(k/3))%2==0};case n.PATTERN101:return function(o,k){return o*k%2+o*k%3==0};case n.PATTERN110:return function(o,k){return(o*k%2+o*k%3)%2==0};case n.PATTERN111:return function(o,k){return(o*k%3+(o+k)%2)%2==0};default:throw"bad maskPattern:"+l}},d.getErrorCorrectPolynomial=function(l){for(var o=O([1],0),k=0;k<l;k+=1)o=o.multiply(O([1,y.gexp(k)],0));return o},d.getLengthInBits=function(l,o){if(1<=o&&o<10)switch(l){case a.MODE_NUMBER:return 10;case a.MODE_ALPHA_NUM:return 9;case a.MODE_8BIT_BYTE:return 8;case a.MODE_KANJI:return 8;default:throw"mode:"+l}else if(o<27)switch(l){case a.MODE_NUMBER:return 12;case a.MODE_ALPHA_NUM:return 11;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 10;default:throw"mode:"+l}else if(o<41)switch(l){case a.MODE_NUMBER:return 14;case a.MODE_ALPHA_NUM:return 13;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 12;default:throw"mode:"+l}else throw"type:"+o},d.getLostPoint=function(l){for(var o=l.getModuleCount(),k=0,v=0;v<o;v+=1)for(var b=0;b<o;b+=1){for(var H=0,E=l.isDark(v,b),S=-1;S<=1;S+=1)if(!(v+S<0||o<=v+S))for(var I=-1;I<=1;I+=1)b+I<0||o<=b+I||S==0&&I==0||E==l.isDark(v+S,b+I)&&(H+=1);H>5&&(k+=3+H-5)}for(var v=0;v<o-1;v+=1)for(var b=0;b<o-1;b+=1){var F=0;l.isDark(v,b)&&(F+=1),l.isDark(v+1,b)&&(F+=1),l.isDark(v,b+1)&&(F+=1),l.isDark(v+1,b+1)&&(F+=1),(F==0||F==4)&&(k+=3)}for(var v=0;v<o;v+=1)for(var b=0;b<o-6;b+=1)l.isDark(v,b)&&!l.isDark(v,b+1)&&l.isDark(v,b+2)&&l.isDark(v,b+3)&&l.isDark(v,b+4)&&!l.isDark(v,b+5)&&l.isDark(v,b+6)&&(k+=40);for(var b=0;b<o;b+=1)for(var v=0;v<o-6;v+=1)l.isDark(v,b)&&!l.isDark(v+1,b)&&l.isDark(v+2,b)&&l.isDark(v+3,b)&&l.isDark(v+4,b)&&!l.isDark(v+5,b)&&l.isDark(v+6,b)&&(k+=40);for(var X=0,b=0;b<o;b+=1)for(var v=0;v<o;v+=1)l.isDark(v,b)&&(X+=1);var at=Math.abs(100*X/o/o-50)/5;return k+=at*10,k},d}(),y=function(){for(var C=new Array(256),M=new Array(256),m=0;m<8;m+=1)C[m]=1<<m;for(var m=8;m<256;m+=1)C[m]=C[m-4]^C[m-5]^C[m-6]^C[m-8];for(var m=0;m<255;m+=1)M[C[m]]=m;var x={};return x.glog=function(d){if(d<1)throw"glog("+d+")";return M[d]},x.gexp=function(d){for(;d<0;)d+=255;for(;d>=256;)d-=255;return C[d]},x}();function O(C,M){if(typeof C.length>"u")throw C.length+"/"+M;var m=function(){for(var d=0;d<C.length&&C[d]==0;)d+=1;for(var w=new Array(C.length-d+M),l=0;l<C.length-d;l+=1)w[l]=C[l+d];return w}(),x={};return x.getAt=function(d){return m[d]},x.getLength=function(){return m.length},x.multiply=function(d){for(var w=new Array(x.getLength()+d.getLength()-1),l=0;l<x.getLength();l+=1)for(var o=0;o<d.getLength();o+=1)w[l+o]^=y.gexp(y.glog(x.getAt(l))+y.glog(d.getAt(o)));return O(w,0)},x.mod=function(d){if(x.getLength()-d.getLength()<0)return x;for(var w=y.glog(x.getAt(0))-y.glog(d.getAt(0)),l=new Array(x.getLength()),o=0;o<x.getLength();o+=1)l[o]=x.getAt(o);for(var o=0;o<d.getLength();o+=1)l[o]^=y.gexp(y.glog(d.getAt(o))+w);return O(l,0).mod(d)},x}var V=function(){var C=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],M=function(d,w){var l={};return l.totalCount=d,l.dataCount=w,l},m={},x=function(d,w){switch(w){case s.L:return C[(d-1)*4+0];case s.M:return C[(d-1)*4+1];case s.Q:return C[(d-1)*4+2];case s.H:return C[(d-1)*4+3];default:return}};return m.getRSBlocks=function(d,w){var l=x(d,w);if(typeof l>"u")throw"bad rs block @ typeNumber:"+d+"/errorCorrectionLevel:"+w;for(var o=l.length/3,k=[],v=0;v<o;v+=1)for(var b=l[v*3+0],H=l[v*3+1],E=l[v*3+2],S=0;S<b;S+=1)k.push(M(H,E));return k},m}(),W=function(){var C=[],M=0,m={};return m.getBuffer=function(){return C},m.getAt=function(x){var d=Math.floor(x/8);return(C[d]>>>7-x%8&1)==1},m.put=function(x,d){for(var w=0;w<d;w+=1)m.putBit((x>>>d-w-1&1)==1)},m.getLengthInBits=function(){return M},m.putBit=function(x){var d=Math.floor(M/8);C.length<=d&&C.push(0),x&&(C[d]|=128>>>M%8),M+=1},m},J=function(C){var M=a.MODE_NUMBER,m=C,x={};x.getMode=function(){return M},x.getLength=function(l){return m.length},x.write=function(l){for(var o=m,k=0;k+2<o.length;)l.put(d(o.substring(k,k+3)),10),k+=3;k<o.length&&(o.length-k==1?l.put(d(o.substring(k,k+1)),4):o.length-k==2&&l.put(d(o.substring(k,k+2)),7))};var d=function(l){for(var o=0,k=0;k<l.length;k+=1)o=o*10+w(l.charAt(k));return o},w=function(l){if("0"<=l&&l<="9")return l.charCodeAt(0)-48;throw"illegal char :"+l};return x},st=function(C){var M=a.MODE_ALPHA_NUM,m=C,x={};x.getMode=function(){return M},x.getLength=function(w){return m.length},x.write=function(w){for(var l=m,o=0;o+1<l.length;)w.put(d(l.charAt(o))*45+d(l.charAt(o+1)),11),o+=2;o<l.length&&w.put(d(l.charAt(o)),6)};var d=function(w){if("0"<=w&&w<="9")return w.charCodeAt(0)-48;if("A"<=w&&w<="Z")return w.charCodeAt(0)-65+10;switch(w){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+w}};return x},rt=function(C){var M=a.MODE_8BIT_BYTE,m=i.stringToBytes(C),x={};return x.getMode=function(){return M},x.getLength=function(d){return m.length},x.write=function(d){for(var w=0;w<m.length;w+=1)d.put(m[w],8)},x},Q=function(C){var M=a.MODE_KANJI,m=i.stringToBytesFuncs.SJIS;if(!m)throw"sjis not supported.";(function(w,l){var o=m(w);if(o.length!=2||(o[0]<<8|o[1])!=l)throw"sjis not supported."})("友",38726);var x=m(C),d={};return d.getMode=function(){return M},d.getLength=function(w){return~~(x.length/2)},d.write=function(w){for(var l=x,o=0;o+1<l.length;){var k=(255&l[o])<<8|255&l[o+1];if(33088<=k&&k<=40956)k-=33088;else if(57408<=k&&k<=60351)k-=49472;else throw"illegal char at "+(o+1)+"/"+k;k=(k>>>8&255)*192+(k&255),w.put(k,13),o+=2}if(o<l.length)throw"illegal char at "+(o+1)},d},ft=function(){var C=[],M={};return M.writeByte=function(m){C.push(m&255)},M.writeShort=function(m){M.writeByte(m),M.writeByte(m>>>8)},M.writeBytes=function(m,x,d){x=x||0,d=d||m.length;for(var w=0;w<d;w+=1)M.writeByte(m[w+x])},M.writeString=function(m){for(var x=0;x<m.length;x+=1)M.writeByte(m.charCodeAt(x))},M.toByteArray=function(){return C},M.toString=function(){var m="";m+="[";for(var x=0;x<C.length;x+=1)x>0&&(m+=","),m+=C[x];return m+="]",m},M},ee=function(){var C=0,M=0,m=0,x="",d={},w=function(o){x+=String.fromCharCode(l(o&63))},l=function(o){if(!(o<0)){if(o<26)return 65+o;if(o<52)return 97+(o-26);if(o<62)return 48+(o-52);if(o==62)return 43;if(o==63)return 47}throw"n:"+o};return d.writeByte=function(o){for(C=C<<8|o&255,M+=8,m+=1;M>=6;)w(C>>>M-6),M-=6},d.flush=function(){if(M>0&&(w(C<<6-M),C=0,M=0),m%3!=0)for(var o=3-m%3,k=0;k<o;k+=1)x+="="},d.toString=function(){return x},d},re=function(C){var M=C,m=0,x=0,d=0,w={};w.read=function(){for(;d<8;){if(m>=M.length){if(d==0)return-1;throw"unexpected end of file./"+d}var o=M.charAt(m);if(m+=1,o=="=")return d=0,-1;if(o.match(/^\s$/))continue;x=x<<6|l(o.charCodeAt(0)),d+=6}var k=x>>>d-8&255;return d-=8,k};var l=function(o){if(65<=o&&o<=90)return o-65;if(97<=o&&o<=122)return o-97+26;if(48<=o&&o<=57)return o-48+52;if(o==43)return 62;if(o==47)return 63;throw"c:"+o};return w},ae=function(C,M){var m=C,x=M,d=new Array(C*M),w={};w.setPixel=function(v,b,H){d[b*m+v]=H},w.write=function(v){v.writeString("GIF87a"),v.writeShort(m),v.writeShort(x),v.writeByte(128),v.writeByte(0),v.writeByte(0),v.writeByte(0),v.writeByte(0),v.writeByte(0),v.writeByte(255),v.writeByte(255),v.writeByte(255),v.writeString(","),v.writeShort(0),v.writeShort(0),v.writeShort(m),v.writeShort(x),v.writeByte(0);var b=2,H=o(b);v.writeByte(b);for(var E=0;H.length-E>255;)v.writeByte(255),v.writeBytes(H,E,255),E+=255;v.writeByte(H.length-E),v.writeBytes(H,E,H.length-E),v.writeByte(0),v.writeString(";")};var l=function(v){var b=v,H=0,E=0,S={};return S.write=function(I,F){if(I>>>F)throw"length over";for(;H+F>=8;)b.writeByte(255&(I<<H|E)),F-=8-H,I>>>=8-H,E=0,H=0;E=I<<H|E,H=H+F},S.flush=function(){H>0&&b.writeByte(E)},S},o=function(v){for(var b=1<<v,H=(1<<v)+1,E=v+1,S=k(),I=0;I<b;I+=1)S.add(String.fromCharCode(I));S.add(String.fromCharCode(b)),S.add(String.fromCharCode(H));var F=ft(),X=l(F);X.write(b,E);var at=0,it=String.fromCharCode(d[at]);for(at+=1;at<d.length;){var lt=String.fromCharCode(d[at]);at+=1,S.contains(it+lt)?it=it+lt:(X.write(S.indexOf(it),E),S.size()<4095&&(S.size()==1<<E&&(E+=1),S.add(it+lt)),it=lt)}return X.write(S.indexOf(it),E),X.write(H,E),X.flush(),F.toByteArray()},k=function(){var v={},b=0,H={};return H.add=function(E){if(H.contains(E))throw"dup key:"+E;v[E]=b,b+=1},H.size=function(){return b},H.indexOf=function(E){return v[E]},H.contains=function(E){return typeof v[E]<"u"},H};return w},ie=function(C,M,m){for(var x=ae(C,M),d=0;d<M;d+=1)for(var w=0;w<C;w+=1)x.setPixel(w,d,m(w,d));var l=ft();x.write(l);for(var o=ee(),k=l.toByteArray(),v=0;v<k.length;v+=1)o.writeByte(k[v]);return o.flush(),"data:image/gif;base64,"+o};return i}();(function(){r.stringToBytesFuncs["UTF-8"]=function(i){function a(s){for(var n=[],c=0;c<s.length;c++){var y=s.charCodeAt(c);y<128?n.push(y):y<2048?n.push(192|y>>6,128|y&63):y<55296||y>=57344?n.push(224|y>>12,128|y>>6&63,128|y&63):(c++,y=65536+((y&1023)<<10|s.charCodeAt(c)&1023),n.push(240|y>>18,128|y>>12&63,128|y>>6&63,128|y&63))}return n}return a(i)}})(),function(i){t.exports=i()}(function(){return r})})(Gt);var ue=Gt.exports;const de=le(ue),he=1,dt=2,vt=3,fe=4,pe=5;function ge(t){return{type:"auth",access_token:t}}function ve(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function me(){return{type:"get_states"}}function be(t,e,r,i,a){const s={type:"call_service",domain:t,service:e,target:i,return_response:a};return r&&(s.service_data=r),s}function ye(t){const e={type:"subscribe_events"};return t&&(e.event_type=t),e}function Et(t){return{type:"unsubscribe_events",subscription:t}}function we(){return{type:"ping"}}function ke(t,e){return{type:"result",success:!1,error:{code:t,message:e}}}const Kt=(t,e,r,i)=>{const[a,s,n]=t.split(".",3);return Number(a)>e||Number(a)===e&&(i===void 0?Number(s)>=r:Number(s)>r)||i!==void 0&&Number(a)===e&&Number(s)===r&&Number(n)>=i},xe="auth_invalid",_e="auth_ok";function $e(t){if(!t.auth)throw fe;const e=t.auth;let r=e.expired?e.refreshAccessToken().then(()=>{r=void 0},()=>{r=void 0}):void 0;const i=e.wsUrl;function a(s,n,c){const y=new WebSocket(i);let O=!1;const V=()=>{if(y.removeEventListener("close",V),O){c(dt);return}if(s===0){c(he);return}const st=s===-1?-1:s-1;setTimeout(()=>a(st,n,c),1e3)},W=async st=>{try{e.expired&&await(r||e.refreshAccessToken()),y.send(JSON.stringify(ge(e.accessToken)))}catch(rt){O=rt===dt,y.close()}},J=async st=>{const rt=JSON.parse(st.data);switch(rt.type){case xe:O=!0,y.close();break;case _e:y.removeEventListener("open",W),y.removeEventListener("message",J),y.removeEventListener("close",V),y.removeEventListener("error",V),y.haVersion=rt.ha_version,Kt(y.haVersion,2022,9)&&y.send(JSON.stringify(ve())),n(y);break}};y.addEventListener("open",W),y.addEventListener("message",J),y.addEventListener("close",V),y.addEventListener("error",V)}return new Promise((s,n)=>a(t.setupRetry,s,n))}class Ce{constructor(e,r){this._handleMessage=i=>{let a=JSON.parse(i.data);Array.isArray(a)||(a=[a]),a.forEach(s=>{const n=this.commands.get(s.id);switch(s.type){case"event":n?n.callback(s.event):(console.warn(`Received event for unknown subscription ${s.id}. Unsubscribing.`),this.sendMessagePromise(Et(s.id)).catch(c=>{}));break;case"result":n&&(s.success?(n.resolve(s.result),"subscribe"in n||this.commands.delete(s.id)):(n.reject(s.error),this.commands.delete(s.id)));break;case"pong":n?(n.resolve(),this.commands.delete(s.id)):console.warn(`Received unknown pong response ${s.id}`);break}})},this._handleClose=async()=>{const i=this.commands;if(this.commandId=1,this.oldSubscriptions=this.commands,this.commands=new Map,this.socket=void 0,i.forEach(n=>{"subscribe"in n||n.reject(ke(vt,"Connection lost"))}),this.closeRequested)return;this.fireEvent("disconnected");const a=Object.assign(Object.assign({},this.options),{setupRetry:0}),s=n=>{setTimeout(async()=>{if(!this.closeRequested)try{const c=await a.createSocket(a);this._setSocket(c)}catch(c){if(this._queuedMessages){const y=this._queuedMessages;this._queuedMessages=void 0;for(const O of y)O.reject&&O.reject(vt)}c===dt?this.fireEvent("reconnect-error",c):s(n+1)}},Math.min(n,5)*1e3)};this.suspendReconnectPromise&&(await this.suspendReconnectPromise,this.suspendReconnectPromise=void 0,this._queuedMessages=[]),s(0)},this.options=r,this.commandId=2,this.commands=new Map,this.eventListeners=new Map,this.closeRequested=!1,this._setSocket(e)}get connected(){return this.socket!==void 0&&this.socket.readyState==this.socket.OPEN}_setSocket(e){this.socket=e,this.haVersion=e.haVersion,e.addEventListener("message",this._handleMessage),e.addEventListener("close",this._handleClose);const r=this.oldSubscriptions;r&&(this.oldSubscriptions=void 0,r.forEach(a=>{"subscribe"in a&&a.subscribe&&a.subscribe().then(s=>{a.unsubscribe=s,a.resolve()})}));const i=this._queuedMessages;if(i){this._queuedMessages=void 0;for(const a of i)a.resolve()}this.fireEvent("ready")}addEventListener(e,r){let i=this.eventListeners.get(e);i||(i=[],this.eventListeners.set(e,i)),i.push(r)}removeEventListener(e,r){const i=this.eventListeners.get(e);if(!i)return;const a=i.indexOf(r);a!==-1&&i.splice(a,1)}fireEvent(e,r){(this.eventListeners.get(e)||[]).forEach(i=>i(this,r))}suspendReconnectUntil(e){this.suspendReconnectPromise=e}suspend(){if(!this.suspendReconnectPromise)throw new Error("Suspend promise not set");this.socket&&this.socket.close()}reconnect(e=!1){if(this.socket){if(!e){this.socket.close();return}this.socket.removeEventListener("message",this._handleMessage),this.socket.removeEventListener("close",this._handleClose),this.socket.close(),this._handleClose()}}close(){this.closeRequested=!0,this.socket&&this.socket.close()}async subscribeEvents(e,r){return this.subscribeMessage(e,ye(r))}ping(){return this.sendMessagePromise(we())}sendMessage(e,r){if(!this.connected)throw vt;if(this._queuedMessages){if(r)throw new Error("Cannot queue with commandId");this._queuedMessages.push({resolve:()=>this.sendMessage(e)});return}r||(r=this._genCmdId()),e.id=r,this.socket.send(JSON.stringify(e))}sendMessagePromise(e){return new Promise((r,i)=>{if(this._queuedMessages){this._queuedMessages.push({reject:i,resolve:async()=>{try{r(await this.sendMessagePromise(e))}catch(s){i(s)}}});return}const a=this._genCmdId();this.commands.set(a,{resolve:r,reject:i}),this.sendMessage(e,a)})}async subscribeMessage(e,r,i){this._queuedMessages&&await new Promise((s,n)=>{this._queuedMessages.push({resolve:s,reject:n})});let a;return await new Promise((s,n)=>{const c=this._genCmdId();a={resolve:s,reject:n,callback:e,subscribe:i?.resubscribe!==!1?()=>this.subscribeMessage(e,r):void 0,unsubscribe:async()=>{this.connected&&await this.sendMessagePromise(Et(c)),this.commands.delete(c)}},this.commands.set(c,a);try{this.sendMessage(r,c)}catch{}}),()=>a.unsubscribe()}_genCmdId(){return++this.commandId}}const Me=t=>t*1e3+Date.now();async function Le(t,e,r){const i=typeof location<"u"&&location;if(i&&i.protocol==="https:"){const c=document.createElement("a");if(c.href=t,c.protocol==="http:"&&c.hostname!=="localhost")throw pe}const a=new FormData;e!==null&&a.append("client_id",e),Object.keys(r).forEach(c=>{a.append(c,r[c])});const s=await fetch(`${t}/auth/token`,{method:"POST",credentials:"same-origin",body:a});if(!s.ok)throw s.status===400||s.status===403?dt:new Error("Unable to fetch tokens");const n=await s.json();return n.hassUrl=t,n.clientId=e,n.expires=Me(n.expires_in),n}class Ae{constructor(e,r){this.data=e,this._saveTokens=r}get wsUrl(){return`ws${this.data.hassUrl.substr(4)}/api/websocket`}get accessToken(){return this.data.access_token}get expired(){return Date.now()>this.data.expires}async refreshAccessToken(){if(!this.data.refresh_token)throw new Error("No refresh_token");const e=await Le(this.data.hassUrl,this.data.clientId,{grant_type:"refresh_token",refresh_token:this.data.refresh_token});e.refresh_token=this.data.refresh_token,this.data=e,this._saveTokens&&this._saveTokens(e)}async revoke(){if(!this.data.refresh_token)throw new Error("No refresh_token to revoke");const e=new FormData;e.append("token",this.data.refresh_token),await fetch(`${this.data.hassUrl}/auth/revoke`,{method:"POST",credentials:"same-origin",body:e}),this._saveTokens&&this._saveTokens(null)}}function Te(t,e){return new Ae({hassUrl:t,clientId:null,expires:Date.now()+1e11,refresh_token:"",access_token:e,expires_in:1e11})}const Ve=t=>{let e=[];function r(a){let s=[];for(let n=0;n<e.length;n++)e[n]===a?a=null:s.push(e[n]);e=s}function i(a,s){t=s?a:Object.assign(Object.assign({},t),a);let n=e;for(let c=0;c<n.length;c++)n[c](t)}return{get state(){return t},action(a){function s(n){i(n,!1)}return function(){let n=[t];for(let y=0;y<arguments.length;y++)n.push(arguments[y]);let c=a.apply(this,n);if(c!=null)return c instanceof Promise?c.then(s):s(c)}},setState:i,clearState(){t=void 0},subscribe(a){return e.push(a),()=>{r(a)}}}},He=5e3,Pt=(t,e,r,i,a={unsubGrace:!0})=>{if(t[e])return t[e];let s=0,n,c,y=Ve();const O=()=>{if(!r)throw new Error("Collection does not support refresh");return r(t).then(Q=>y.setState(Q,!0))},V=()=>O().catch(Q=>{if(t.connected)throw Q}),W=()=>{if(c!==void 0){clearTimeout(c),c=void 0;return}i&&(n=i(t,y)),r&&(t.addEventListener("ready",V),V()),t.addEventListener("disconnected",rt)},J=()=>{c=void 0,n&&n.then(Q=>{Q()}),y.clearState(),t.removeEventListener("ready",O),t.removeEventListener("disconnected",rt)},st=()=>{c=setTimeout(J,He)},rt=()=>{c&&(clearTimeout(c),J())};return t[e]={get state(){return y.state},refresh:O,subscribe(Q){s++,s===1&&W();const ft=y.subscribe(Q);return y.state!==void 0&&setTimeout(()=>Q(y.state),0),()=>{ft(),s--,s||(a.unsubGrace?st():J())}}},t[e]},Ee=t=>t.sendMessagePromise(me()),Pe=(t,e,r,i,a,s)=>t.sendMessagePromise(be(e,r,i,a,s));function Oe(t,e){const r=Object.assign({},t.state);if(e.a)for(const i in e.a){const a=e.a[i];let s=new Date(a.lc*1e3).toISOString();r[i]={entity_id:i,state:a.s,attributes:a.a,context:typeof a.c=="string"?{id:a.c,parent_id:null,user_id:null}:a.c,last_changed:s,last_updated:a.lu?new Date(a.lu*1e3).toISOString():s}}if(e.r)for(const i of e.r)delete r[i];if(e.c)for(const i in e.c){let a=r[i];if(!a){console.warn("Received state update for unknown entity",i);continue}a=Object.assign({},a);const{"+":s,"-":n}=e.c[i],c=s?.a||n?.a,y=c?Object.assign({},a.attributes):a.attributes;if(s&&(s.s!==void 0&&(a.state=s.s),s.c&&(typeof s.c=="string"?a.context=Object.assign(Object.assign({},a.context),{id:s.c}):a.context=Object.assign(Object.assign({},a.context),s.c)),s.lc?a.last_updated=a.last_changed=new Date(s.lc*1e3).toISOString():s.lu&&(a.last_updated=new Date(s.lu*1e3).toISOString()),s.a&&Object.assign(y,s.a)),n?.a)for(const O of n.a)delete y[O];c&&(a.attributes=y),r[i]=a}t.setState(r,!0)}const De=(t,e)=>t.subscribeMessage(r=>Oe(e,r),{type:"subscribe_entities"});function Se(t,e){const r=t.state;if(r===void 0)return;const{entity_id:i,new_state:a}=e.data;if(a)t.setState({[a.entity_id]:a});else{const s=Object.assign({},r);delete s[i],t.setState(s,!0)}}async function Be(t){const e=await Ee(t),r={};for(let i=0;i<e.length;i++){const a=e[i];r[a.entity_id]=a}return r}const Re=(t,e)=>t.subscribeEvents(r=>Se(e,r),"state_changed"),Ne=t=>Kt(t.haVersion,2022,4,0)?Pt(t,"_ent",void 0,De):Pt(t,"_ent",Be,Re),Ie=(t,e)=>Ne(t).subscribe(e);async function ze(t){const e=Object.assign({setupRetry:0,createSocket:$e},t),r=await e.createSocket(e);return new Ce(r,e)}const xt="pine3_home.token",je="/api/pine3_home";function Ue(){try{return localStorage.getItem(xt)}catch{return null}}function Ot(t){try{t?localStorage.setItem(xt,t):localStorage.removeItem(xt)}catch{}}async function Yt(t,e){const r=await fetch(`${je}${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e??{})}),i=await r.json().catch(()=>({}));if(!r.ok)throw new Error(i.error??i.message??`HTTP ${r.status}`);return i}const Fe=()=>Yt("/pair/start"),Ze=t=>Yt("/pair/status",{pair_id:t.pair_id,secret:t.secret});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=Lt(class extends At{constructor(t){if(super(t),t.type!==Mt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const r=t.element.classList;for(const i of this.st)i in e||(r.remove(i),this.st.delete(i));for(const i in e){const a=!!e[i];a===this.st.has(i)||this.nt?.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Ct}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt="important",qe=" !"+Jt,We=Lt(class extends At{constructor(t){if(super(t),t.type!==Mt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const i=t[r];return i==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in e){const a=e[i];if(a!=null){this.ft.add(i);const s=typeof a=="string"&&a.endsWith(qe);i.includes("-")||s?r.setProperty(i,s?a.slice(0,-11):a,s?Jt:""):r[i]=a}}return Ct}});var Ge="M10 10V12H8V10H10M16 12V10H14V12H16M21 14V22H3V14H4V10C4 5.58 7.58 2 12 2S20 5.58 20 10V14H21M7 16H5V20H7V16M11 16H9V20H11V16M11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08M13 14H18V10C18 7.03 15.84 4.56 13 4.08V14M15 16H13V20H15V16M19 16H17V20H19V16Z",Ke="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z",Ye="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",Je="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",Qe="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z",Xe="M3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8V19H19V17H15V19H13V8H5V19H3V8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6M16 10.5V11H18V10.5C18 10.22 17.78 10 17.5 10H16.5C16.22 10 16 10.22 16 10.5M16 14.5V15H18V14.5C18 14.22 17.78 14 17.5 14H16.5C16.22 14 16 14.22 16 14.5Z",tr="M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z",er="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z",rr="M8.66,13.07C6.92,13.07 5.5,11.66 5.5,9.93C5.5,9.22 5.76,8.54 6.19,8C5.77,7.46 5.5,6.78 5.5,6.07C5.5,4.34 6.93,2.93 8.66,2.93L9.09,2.96C9.56,1.81 10.69,1 12,1C13.31,1 14.44,1.81 14.91,2.96L15.34,2.93C17.07,2.93 18.5,4.34 18.5,6.07C18.5,6.78 18.24,7.46 17.81,8C18.23,8.54 18.5,9.22 18.5,9.93C18.5,11.66 17.07,13.07 15.34,13.07L14.91,13.04C14.44,14.19 13.31,15 12,15C10.69,15 9.56,14.19 9.09,13.04L8.66,13.07M12,13C12.62,13 13.12,12.5 13.14,11.9L13.03,10.81C12.71,10.93 12.36,11 12,11C11.64,11 11.3,10.93 11,10.81L10.86,11.9C10.88,12.5 11.38,13 12,13M15.34,11.07C15.97,11.07 16.5,10.56 16.5,9.92C16.5,9.5 16.23,9.08 15.83,8.89L14.95,8.47C14.83,9.21 14.44,9.85 13.89,10.3L14.7,10.87C14.88,11 15.1,11.07 15.34,11.07M14.69,5.13L13.87,5.69C14.43,6.14 14.82,6.78 14.94,7.5L15.82,7.1C16.23,6.9 16.5,6.5 16.5,6.07C16.5,5.44 15.97,4.93 15.34,4.93C15.11,4.93 14.89,5 14.69,5.13M12,3C11.38,3 10.88,3.5 10.86,4.1L11,5.19C11.3,5.07 11.64,5 12,5C12.36,5 12.71,5.07 13.03,5.19L13.14,4.1C13.12,3.5 12.62,3 12,3M8.66,4.93C8.03,4.93 7.5,5.44 7.5,6.07C7.5,6.5 7.77,6.9 8.17,7.1L9.05,7.5C9.17,6.78 9.56,6.14 10.11,5.69L9.3,5.13C9.12,5 8.9,4.93 8.66,4.93M8.17,8.9C7.77,9.1 7.5,9.5 7.5,9.92C7.5,10.55 8.03,11.06 8.66,11.06C8.89,11.06 9.11,11 9.31,10.86L10.12,10.31C9.56,9.86 9.17,9.22 9.05,8.5L8.17,8.9M12,22A9,9 0 0,1 3,13A9,9 0 0,1 12,22A9,9 0 0,1 21,13A9,9 0 0,1 12,22M14.44,19.56C16.34,18.85 17.85,17.34 18.56,15.44C16.66,16.14 15.15,17.66 14.44,19.56M5.44,15.44C6.15,17.34 7.66,18.85 9.56,19.56C8.86,17.66 7.34,16.15 5.44,15.44Z",ar="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",ir="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z",nr="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",sr="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",or="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",cr="M19,13H5V11H19V13Z",lr="M14,19H18V5H14M6,19H10V5H6V19Z",ur="M8,5.14V19.14L19,12.14L8,5.14Z",dr="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",hr="M2,15C3.67,14.25 5.33,13.5 7,13.17V5A3,3 0 0,1 10,2C11.31,2 12.42,2.83 12.83,4H10A1,1 0 0,0 9,5V6H14V5A3,3 0 0,1 17,2C18.31,2 19.42,2.83 19.83,4H17A1,1 0 0,0 16,5V14.94C18,14.62 20,13 22,13V15C19.78,15 17.56,17 15.33,17C13.11,17 10.89,15 8.67,15C6.44,15 4.22,16 2,17V15M14,8H9V10H14V8M14,12H9V13C10.67,13.16 12.33,14.31 14,14.79V12M2,19C4.22,18 6.44,17 8.67,17C10.89,17 13.11,19 15.33,19C17.56,19 19.78,17 22,17V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V19Z",fr="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",pr="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14",gr="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z",vr="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z",mr="M16,18H18V6H16M6,18L14.5,12L6,6V18Z",br="M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z",yr="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z",wr="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z",kr="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12",xr="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",_r="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",$r="M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z";const D={home:ir,therm:_r,bulb:nr,shield:pr,spark:Qe,play:ur,pause:lr,next:mr,minus:cr,plus:dr,close:Je,back:Ye,lock:sr,unlock:or,power:fr,room:xr},Cr={"mdi:shower":gr,"mdi:silverware-fork-knife":vr,"mdi:table-chair":wr,"mdi:sofa":br,"mdi:bed":Ke,"mdi:teddy-bear":kr,"mdi:desk":Xe,"mdi:garage":ar,"mdi:flower":rr,"mdi:balcony":Ge,"mdi:pool":hr,"mdi:washing-machine":$r,"mdi:door":tr,"mdi:dumbbell":er,"mdi:stairs":yr},Mr=t=>t&&Cr[t]||D.room;let Lr=0;const Qt=t=>`${t}${++Lr}`,Y=t=>N`<svg class="art" viewBox="0 0 60 60" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">${t}</svg>`;function Dt(t,e="#ffcf8a"){const r=Qt("l");return Y(N`<defs><radialGradient id=${r} cx="36" cy="40" r="28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${e} stop-opacity=${t/100*.85}/><stop offset="1" stop-color=${e} stop-opacity="0"/></radialGradient></defs>
    <circle cx="36" cy="40" r="28" fill=${`url(#${r})`}/><line x1="36" y1="0" x2="36" y2="22" stroke="#6b717a" stroke-width=".8"/>
    <path d="M25 34 L47 34 L41.5 21 L30.5 21 Z" fill=${t?"#d9c6a3":"#4a4f57"}/><ellipse cx="36" cy="34.5" rx="11" ry="1.7" fill=${t?"#fff2d6":"#3a3e45"}/>`)}function Ar(t){const e=Math.max(0,Math.min(100,100-t)),r=Array.from({length:Math.round(e/11)},(i,a)=>N`<line x1="20" x2="54" y1=${12+a*4.2} y2=${12+a*4.2} stroke="#8796a6" stroke-width=".5"/>`);return Y(N`<rect x="20" y="10" width="34" height="46" rx="2" fill="#2d4a66" opacity=".6"/><circle cx="44" cy="22" r="5" fill="#ffd27a" opacity=".5"/>
    <rect x="20" y="10" width="34" height=${(46*e/100).toFixed(1)} fill="#a9b6c4"/>${r}<rect x="18" y="8" width="38" height="3" rx="1" fill="#5d646e"/>`)}function Tr(t,e="#ff9f43"){const r=t==null?0:Math.max(0,Math.min(1,(t-16)/14));return Y(N`<circle cx="40" cy="36" r="17" fill="#2a2e34" stroke="#454a52"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="2.6" stroke-dasharray=${`${(r*81).toFixed(1)} 82`} transform="rotate(135 40 36)" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="7" opacity=".08"/>`)}function Vr(t){return Y(N`<rect x="28" y="12" width="24" height="44" rx="3" fill="#3a3f46"/><rect x="31" y="15" width="18" height="38" rx="2" fill="#2b2f35"/>
    <circle cx="34" cy="34" r="1.6" fill=${t?"#ff8a5c":"#5be3a0"}/><rect x=${t?44:38} y="33.2" width="6" height="1.6" rx=".8" fill="#8a919b"/>`)}function Hr(t){return Y(N`<ellipse cx="40" cy="50" rx="16" ry="4" fill="#000" opacity=".3"/><ellipse cx="40" cy="44" rx="15" ry="6" fill="#d8dce1"/><rect x="25" y="38" width="30" height="6" fill="#d8dce1"/>
    <ellipse cx="40" cy="38" rx="15" ry="6" fill="#eef0f3"/><circle cx="40" cy="36" r="3.4" fill=${t?"#5be3a0":"#c4c9cf"}/>
    ${t?N`<path d="M10 50 Q20 46 26 48" stroke="#5be3a0" stroke-width=".8" fill="none" stroke-dasharray="1.2 1.2" opacity=".8"/>`:null}`)}function Er(t){if(t)return Y(N`<image href=${t} x="26" y="14" width="30" height="30" preserveAspectRatio="xMidYMid slice" transform="rotate(6 41 29)"/>`);const e=Qt("a");return Y(N`<defs><linearGradient id=${e} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3a35f"/><stop offset=".5" stop-color="#d96d6d"/><stop offset=".75" stop-color="#5c4a8a"/><stop offset="1" stop-color="#2e2a54"/></linearGradient></defs>
    <rect x="26" y="14" width="30" height="30" rx="3" fill=${`url(#${e})`} transform="rotate(6 41 29)"/><circle cx="46" cy="22" r="3" fill="#ffe7b8" opacity=".9" transform="rotate(6 41 29)"/>`)}function Pr(t){const e=!/rain|pour|snow|fog|cloudy$|lightning|night/.test(t)||t==="partlycloudy",r=t!=="sunny"&&t!=="clear-night",i=/rain|pour|lightning/.test(t),a=t==="clear-night";return Y(N`${e?N`<circle cx="44" cy="20" r="8" fill="#ffd27a" opacity=".85"/>`:null}
    ${a?N`<path d="M46 12a9 9 0 1 0 6 14 7 7 0 1 1-6-14z" fill="#e8e3c8" opacity=".9"/>`:null}
    ${r?N`<path d="M28 36h20a6 6 0 0 0 .6-12 9 9 0 0 0-17 2.5A5 5 0 0 0 28 36z" fill="#cfd6df"/>`:null}
    ${i?N`<path d="M32 40l-2 6M38 40l-2 6M44 40l-2 6" stroke="#6cc8ff" stroke-width="1.4" stroke-linecap="round"/>`:null}`)}function Or(t){return Y(N`<g transform="translate(40 34)"><g class=${t?"spin":""}>
    ${[0,120,240].map(e=>N`<ellipse cx="0" cy="-8" rx="4" ry="8" fill="#cfd6df" opacity=".85" transform=${`rotate(${e})`}/>`)}
    </g><circle r="2.6" fill="#8a919b"/></g>`)}function Dr(t){return Y(N`<rect x="28" y="20" width="24" height="24" rx="6" fill="#3a3f46"/><circle cx="36" cy="32" r="1.8" fill="#1b1e22"/><circle cx="44" cy="32" r="1.8" fill="#1b1e22"/>
    <circle cx="48" cy="24" r="1.4" fill=${t?"#5be3a0":"#5d646e"}/>`)}function Sr(t,e){let r="M0 26 L100 26";if(e&&e.length>1){const i=Math.min(...e),s=Math.max(...e)-i||1;r=e.map((c,y)=>[y/(e.length-1)*100,34-(c-i)/s*26]).map(([c,y],O)=>`${O?"L":"M"}${c.toFixed(1)} ${y.toFixed(1)}`).join(" ")}return N`<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d=${`${r} V40 H0Z`} fill=${t} opacity=".12"/><path d=${r} fill="none" stroke=${t} stroke-width="1.4" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity=".85"/></svg>`}function Br(){return Y(N`<circle cx="42" cy="34" r="14" fill="#b49cff" opacity=".18"/><path d="M42 22l2.6 7.4L52 32l-7.4 2.6L42 42l-2.6-7.4L32 32l7.4-2.6z" fill="#d9ccff"/><path d="M52 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#ffe2b0"/>`)}const j=t=>t.split(".")[0],ct=t=>!!t&&!["off","unavailable","unknown","closed","locked","idle","standby","docked"].includes(t.state),Rr=t=>!t||t.state==="unavailable";function _t(t){if(!t||t.state!=="on")return 0;const e=t.attributes.brightness;return e==null?100:Math.max(1,Math.round(e/255*100))}function mt(t){const e=t?.attributes.rgb_color,r=t?.attributes.color_mode;if(e&&r&&!["color_temp","brightness","onoff","white"].includes(r))return`rgb(${e.join(",")})`;const i=t?.attributes.color_temp_kelvin;return i?i>=5e3?"#e6f0ff":i>=3800?"#fff1d6":"#ffcf8a":"#ffcf8a"}const $t=t=>t.devices.filter(e=>j(e.id)==="light"&&!e.hidden).map(e=>e.id);function Nr(t,e){const r=t.filter(i=>e[i]?.state==="on");return r.length?Math.round(r.reduce((i,a)=>i+_t(e[a]),0)/r.length):0}const St={light:"light",climate:"climate",lock:"lock",cover:"cover",media_player:"media",vacuum:"vacuum",fan:"fan",switch:"switch",input_boolean:"switch",outlet:"outlet",sensor:"sensor",binary_sensor:"binary",camera:"camera"};function Ir(t,e){const r=St[t.kind??j(t.id)]??St[j(t.id)];if(!r)return null;const i=r==="climate"?"l":r==="media"||r==="camera"?"m":"s";return{key:t.id,kind:r,size:i,name:t.name,sub:e?.name,entity:t.id,room:e}}function zr(t,e){const r=t.rooms.filter(n=>!n.hidden),i=r.flatMap(n=>n.devices.filter(c=>!c.hidden).map(c=>({d:c,r:n}))),a=n=>i.filter(({d:c})=>(c.kind??j(c.id))===n),s=[];return r.forEach((n,c)=>{const y=$t(n);y.length&&s.push({key:`room-${n.id}`,kind:"room-lights",size:c===0?"m":"s",name:n.name,entities:y,room:n})}),a("climate").forEach(({d:n,r:c},y)=>s.push({key:n.id,kind:"climate",size:y===0?"l":"m",name:n.name,sub:c.name,entity:n.id,room:c})),t.weather&&e[t.weather]&&s.push({key:t.weather,kind:"weather",size:"l",name:"Tempo",entity:t.weather}),a("lock").forEach(({d:n,r:c})=>s.push({key:n.id,kind:"lock",size:"s",name:n.name,sub:c.name,entity:n.id,room:c})),a("cover").forEach(({d:n,r:c})=>s.push({key:n.id,kind:"cover",size:"s",name:n.name,sub:c.name,entity:n.id,room:c})),a("media_player").sort((n,c)=>+(e[c.d.id]?.state==="playing")-+(e[n.d.id]?.state==="playing")).slice(0,2).forEach(({d:n,r:c})=>s.push({key:n.id,kind:"media",size:"m",name:n.name,sub:c.name,entity:n.id,room:c})),a("vacuum").forEach(({d:n,r:c})=>s.push({key:n.id,kind:"vacuum",size:"s",name:n.name,sub:c.name,entity:n.id,room:c})),t.scenes.length&&s.push({key:"scenes",kind:"scenes",size:"m",name:"Cenas",entities:t.scenes.slice(0,6)}),s}const jr=[{id:"all",name:"Tudo",kinds:[]},{id:"lights",name:"Luzes",kinds:["light"]},{id:"climate",name:"Clima",kinds:["climate","fan"]},{id:"covers",name:"Estores",kinds:["cover"]},{id:"media",name:"Média",kinds:["media"]},{id:"other",name:"Outros",kinds:["switch","outlet","lock","vacuum","sensor","binary","camera"]}];function Ur(t){return t.devices.filter(e=>!e.hidden).map(e=>Ir(e,t)).filter(e=>!!e)}function bt(t,e){const r=t.rooms.filter(c=>!c.hidden).flatMap(c=>c.devices),i=r.filter(c=>j(c.id)==="light"&&e[c.id]?.state==="on").length,a=r.filter(c=>j(c.id)==="lock"&&e[c.id]?.state==="unlocked").length,s=r.filter(c=>j(c.id)==="binary_sensor"&&["door","window","garage_door","opening"].includes(e[c.id]?.attributes.device_class)&&e[c.id]?.state==="on").length,n=t.rooms.map(c=>c.temperature?parseFloat(e[c.temperature]?.state??""):NaN).filter(c=>!Number.isNaN(c));return{lightsOn:i,alerts:a+s,alertText:a?`${a} destrancada${a>1?"s":""}`:s?`${s} aberta${s>1?"s":""}`:"tudo fechado",temp:n.length?`${Math.round(Math.min(...n))}–${Math.round(Math.max(...n))}°`:null}}const tt=(t,e=1)=>t.toLocaleString("pt-PT",{maximumFractionDigits:e}),Fr=["door","window","garage_door","opening"],Xt=t=>t.rooms.filter(e=>!e.hidden).flatMap(e=>e.devices.filter(r=>!r.hidden).map(r=>({d:r,r:e})));function Zr(t,e){const r=[],i=Xt(t);return i.filter(({d:a})=>j(a.id)==="climate").forEach(({d:a,r:s})=>r.push({key:a.id,kind:"climate",size:"l",name:a.name,sub:s.name,entity:a.id,room:s})),t.weather&&e[t.weather]&&r.push({key:t.weather,kind:"weather",size:"l",name:"Tempo",entity:t.weather}),i.filter(({d:a})=>j(a.id)==="fan").forEach(({d:a,r:s})=>r.push({key:a.id,kind:"fan",size:"s",name:a.name,sub:s.name,entity:a.id,room:s})),t.rooms.filter(a=>!a.hidden).forEach(a=>{a.temperature&&e[a.temperature]&&r.push({key:`t-${a.id}`,kind:"sensor",size:"s",name:a.name,sub:"temperatura",entity:a.temperature,room:a}),a.humidity&&e[a.humidity]&&r.push({key:`h-${a.id}`,kind:"sensor",size:"s",name:a.name,sub:"humidade",entity:a.humidity,room:a})}),r}function qr(t,e){const r=Xt(t),i=r.filter(({d:n})=>j(n.id)==="lock"),a=r.filter(({d:n})=>j(n.id)==="binary_sensor"&&[...Fr,"motion","occupancy","presence","moisture","smoke","gas"].includes(e[n.id]?.attributes.device_class));a.sort((n,c)=>+(e[c.d.id]?.state==="on")-+(e[n.d.id]?.state==="on"));const s=r.filter(({d:n})=>j(n.id)==="camera");return[...i.map(({d:n,r:c})=>({key:n.id,kind:"lock",size:"s",name:n.name,sub:c.name,entity:n.id,room:c})),...a.map(({d:n,r:c})=>({key:n.id,kind:"binary",size:"s",name:n.name,sub:c.name,entity:n.id,room:c})),...s.map(({d:n,r:c})=>({key:n.id,kind:"camera",size:"m",name:n.name,sub:c.name,entity:n.id,room:c}))]}function Wr(t,e){return[...t.scenes,...t.scripts].filter(r=>e[r]).map(r=>({key:r,kind:"scene",size:"s",name:e[r].attributes.friendly_name??r,entity:r}))}const Gr=Zt`
  :host {
    display: block;
    position: fixed;
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
`;var Kr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,q=(t,e,r,i)=>{for(var a=i>1?void 0:i?Yr(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(a=(i?n(e,r,a):n(a))||a);return i&&a&&Kr(e,r,a),a};const Jr=550,Bt=10,yt={heat:"Calor",cool:"Frio",heat_cool:"Auto",auto:"Auto",dry:"Seco",fan_only:"Ventilar",off:"Off"},Rt={heating:"a aquecer",cooling:"a arrefecer",idle:"em pausa",off:"desligado",drying:"a secar",fan:"a ventilar"},Nt={"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",hail:"granizo",lightning:"trovoada","lightning-rainy":"trovoada e chuva",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve","snowy-rainy":"chuva e neve",sunny:"sol",windy:"vento","windy-variant":"vento",exceptional:"excecional"},It={cleaning:"a limpar",docked:"na base",returning:"a voltar à base",paused:"em pausa",idle:"parado",error:"erro"},Qr={open:"aberto",closed:"fechado",opening:"a abrir",closing:"a fechar"},zt={yellow:"amarelo",orange:"laranja",red:"vermelho"},jt={yellow:1,orange:2,red:3},Xr=10*6e4,ta=10*6e4,Ut=[{id:"@clima",name:"Clima",icon:D.therm},{id:"@seguranca",name:"Segurança",icon:D.shield},{id:"@cenas",name:"Cenas",icon:D.spark}],ea=["#ffcf8a","#fff1d6","#ff8a5c","#ff6fae","#b49cff","#6cc8ff","#5be3a0"],R=t=>N`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`;let U=class extends qt{constructor(){super(...arguments),this.entities={},this.screenName="",this.view="home",this.category="all",this.sheet=null,this.drag=null,this.now=new Date,this.hourly=[],this.warnings=[],this.history={},this.flash=null,this.historyAt={},this.historyWanted=new Set,this.ipmaAt=0,this.ipmaArea=null,this.forecastAt=0}connectedCallback(){super.connectedCallback(),this.clock=window.setInterval(()=>this.now=new Date,1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clock)}willUpdate(t){t.has("home")&&this.view!=="home"&&!this.view.startsWith("@")&&!this.home.rooms.some(r=>r.id===this.view)&&(this.view="home");const e=this.home?.settings?.ipma_area??null;(e!==this.ipmaArea||e&&Date.now()-this.ipmaAt>ta)&&(this.ipmaArea=e,this.ipmaAt=Date.now(),e&&this.conn?this.loadWarnings(e):this.warnings=[]),this.home?.weather&&Date.now()-this.forecastAt>30*6e4&&this.conn&&(this.forecastAt=Date.now(),this.loadForecast(this.home.weather))}async loadForecast(t){try{const e=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"hourly"},target:{entity_id:t},return_response:!0});this.hourly=(e.response?.[t]?.forecast??[]).slice(1,7).filter((r,i)=>i%2===0)}catch{this.hourly=[]}}updated(){const t=Date.now(),e=[...this.historyWanted].filter(r=>t-(this.historyAt[r]??0)>Xr);this.historyWanted.clear(),e.length&&this.conn&&(e.forEach(r=>this.historyAt[r]=t),this.loadHistory(e))}async loadHistory(t){try{const e=await this.conn.sendMessagePromise({type:"history/history_during_period",start_time:new Date(Date.now()-864e5).toISOString(),entity_ids:t,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),r={...this.history};for(const i of t){const a=(e[i]??[]).map(n=>parseFloat(n.s)).filter(n=>!Number.isNaN(n)),s=Math.max(1,Math.ceil(a.length/48));r[i]=a.filter((n,c)=>c%s===0||c===a.length-1)}this.history=r}catch(e){console.warn("Pine3 Home: history",e)}}async loadWarnings(t){try{const e=await this.conn.sendMessagePromise({type:"pine3_home/ipma_warnings",area:t}),r=Date.now();this.warnings=e.warnings.filter(i=>!i.endTime||new Date(i.endTime).getTime()>r).sort((i,a)=>(jt[a.awarenessLevelID]??0)-(jt[i.awarenessLevelID]??0))}catch{}}call(t,e,r,i={}){Pe(this.conn,t,e,i,{entity_id:r}).catch(a=>console.warn("Pine3 Home:",a))}toggle(t){const e=j(t),r=this.entities[t];if(e==="lock")return this.call("lock",r?.state==="locked"?"unlock":"lock",t);if(e==="cover")return this.call("cover","toggle",t);if(e==="vacuum")return this.call("vacuum",r?.state==="cleaning"?"return_to_base":"start",t);if(e==="media_player")return this.call("media_player","media_play_pause",t);if(e==="scene"||e==="script")return this.call(e,"turn_on",t);this.call(e==="input_boolean"?"input_boolean":"homeassistant","toggle",t)}level(t){if(this.drag?.key===t.key)return this.drag.value;if(t.kind==="room-lights")return Nr(t.entities,this.entities);const e=this.entities[t.entity];return t.kind==="light"?_t(e):t.kind==="cover"?e?.attributes.current_position??(e?.state==="open"?100:0):null}setLevel(t,e){if(e=Math.round(e),t.kind==="room-lights"||t.kind==="light"){const r=t.kind==="light"?t.entity:t.entities;e<=0?this.call("light","turn_off",r):this.call("light","turn_on",r,{brightness_pct:e})}else t.kind==="cover"&&this.call("cover","set_cover_position",t.entity,{position:e})}slidable(t){if(t.kind==="room-lights")return!0;const e=this.entities[t.entity??""];return e?t.kind==="light"?(e.attributes.supported_color_modes??[]).some(r=>r!=="onoff"):t.kind==="cover"?(e.attributes.supported_features&4)===4:!1:!1}down(t,e){if(t.target.closest("button"))return;const r=t.currentTarget,i={key:e.key,x:t.clientX,y:t.clientY,rect:r.getBoundingClientRect(),dragging:!1,long:!1,timer:0};i.timer=window.setTimeout(()=>{i.long=!0,this.longPress(e)},Jr),this.press=i}move(t,e){const r=this.press;if(!r||r.key!==e.key||r.long)return;const i=t.clientX-r.x,a=t.clientY-r.y;if(!r.dragging){if(Math.abs(a)>Bt&&Math.abs(a)>Math.abs(i))return this.cancel();if(Math.abs(i)<Bt||!this.slidable(e))return;r.dragging=!0,clearTimeout(r.timer),t.currentTarget.setPointerCapture(t.pointerId)}const s=Math.max(0,Math.min(100,(t.clientX-r.rect.left)/r.rect.width*100));this.drag={key:e.key,value:Math.round(s)}}up(t,e){const r=this.press;if(!(!r||r.key!==e.key)&&(clearTimeout(r.timer),this.press=void 0,!r.long)){if(r.dragging){const i=this.drag?.value??0;this.setLevel(e,i),window.setTimeout(()=>{this.drag?.key===e.key&&(this.drag=null)},1500);return}this.tap(e)}}cancel(){this.press&&clearTimeout(this.press.timer),this.press=void 0}tap(t){switch(t.kind){case"room-lights":{const e=t.entities.some(r=>this.entities[r]?.state==="on");return this.call("light",e?"turn_off":"turn_on",t.entities)}case"climate":case"weather":case"sensor":case"binary":case"scenes":t.entity&&(this.sheet=t.entity);return;case"scene":this.call(j(t.entity),"turn_on",t.entity),this.flash=t.key,window.setTimeout(()=>{this.flash===t.key&&(this.flash=null)},1200);return;case"camera":this.sheet=t.entity;return;case"lock":this.entities[t.entity]?.state!=="locked"?this.call("lock","lock",t.entity):this.sheet=t.entity;return;default:t.entity&&this.toggle(t.entity)}}longPress(t){if(t.kind==="room-lights"&&t.room){this.openRoom(t.room.id);return}t.entity&&(this.sheet=t.entity)}openRoom(t){this.view=t,this.category="all",this.sheet=null}get dark(){return this.dashboard.theme==="claro"?!1:this.dashboard.theme==="auto"?this.entities["sun.sun"]?.state!=="above_horizon":!0}render(){if(!this.home)return P;const t=this.home.rooms.find(r=>r.id===this.view),e={vd:!0,light:!this.dark,[`dock-${this.dashboard.dock}`]:!0};return $`<div class=${nt(e)}>
      ${this.renderDock()}
      <main class="main">${t?this.renderRoom(t):this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):P}
    </div>`}renderDock(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(r=>!r.hidden));return $`<nav class="dock" aria-label="Vistas">
      <button class=${nt({di:!0,on:this.view==="home"})} @click=${()=>this.openRoom("home")} aria-label="Casa">
        ${R(D.home)}<span class="lb">Casa</span>
      </button>
      <span class="sep"></span>
      <div class="rooms">
        ${t.map(e=>{const r=$t(e).filter(i=>this.entities[i]?.state==="on").length;return $`<button class=${nt({di:!0,rm:!0,on:this.view===e.id,lit:r>0})} @click=${()=>this.openRoom(e.id)} aria-label=${e.name}>
            ${r?$`<span class="glow"></span>`:P}${R(Mr(e.icon))}<span class="lb">${e.name}</span>
            ${r?$`<span class="bdg">${r}</span>`:P}
          </button>`})}
      </div>
      <span class="sep"></span>
      ${Ut.filter(e=>this.viewWidgets(e.id).length).map(e=>{const r=e.id==="@seguranca"?bt(this.home,this.entities).alerts:0;return $`<button class=${nt({di:!0,on:this.view===e.id})} @click=${()=>this.openRoom(e.id)} aria-label=${e.name}>
          ${R(e.icon)}<span class="lb">${e.name}</span>${r?$`<span class="bdg alert">${r}</span>`:P}
        </button>`})}
    </nav>`}renderHeader(t,e){const r=bt(this.home,this.entities),i=this.home.persons.map(a=>this.entities[a]).filter(a=>!!a);return $`<header class="hdr">
      <div class="t"><span>${e}</span><b>${t}</b></div>
      <div class="chips">
        ${r.temp?$`<span class="chip"><i style="background:#34c759;color:#06210f">${R(D.therm)}</i><span>Clima<small>${r.temp}</small></span></span>`:P}
        <span class="chip"><i style="background:#ffcf8a;color:#2a1a04">${R(D.bulb)}</i><span>Luzes<small>${r.lightsOn?`${r.lightsOn} acesa${r.lightsOn>1?"s":""}`:"apagadas"}</small></span></span>
        <span class="chip"><i style=${r.alerts?"background:#ff8a5c;color:#2a0f04":"background:#5be3a0;color:#06210f"}>${R(D.shield)}</i><span>Segurança<small>${r.alertText}</small></span></span>
        ${i.length?$`<div class="people">${i.map(a=>{const s=a.attributes.entity_picture,n=a.attributes.friendly_name??a.entity_id;return $`<span class="av" title=${n} style=${s?`background-image:url(${s})`:""}>${s?"":n[0]}${a.state==="home"?$`<i></i>`:P}</span>`})}</div>`:P}
      </div>
    </header>`}greeting(){const t=this.now.getHours();return`${t<6?"Boa noite":t<13?"Bom dia":t<20?"Boa tarde":"Boa noite"} · ${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}`}renderHome(){const t=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),e=zr(this.home,this.entities);return $`${this.renderHeader(t,this.greeting())}
      ${e.length?$`<div class="grid">${e.map(r=>this.renderWidget(r))}</div>`:$`<p class="empty">Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.</p>`}`}viewWidgets(t){return t==="@clima"?Zr(this.home,this.entities):t==="@seguranca"?qr(this.home,this.entities):t==="@cenas"?Wr(this.home,this.entities):[]}renderView(t){const e=Ut.find(s=>s.id===t),r=this.viewWidgets(t),i=bt(this.home,this.entities),a=t==="@clima"?i.temp??"":t==="@seguranca"?i.alertText:`${r.length} cenas e rotinas`;return $`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${R(D.back)}</button>
        <b>${e.name}</b><span>${a}</span>
      </div>
      ${r.length?$`<div class="grid">${r.map(s=>this.renderWidget(s))}</div>`:$`<p class="empty">Nada para mostrar aqui.</p>`}`}renderRoom(t){const e=Ur(t),r=V=>V.length?e.filter(W=>V.includes(W.kind)).length:e.length,i=jr.filter(V=>r(V.kinds)>0),a=i.find(V=>V.id===this.category)??i[0],s=a&&a.kinds.length?e.filter(V=>a.kinds.includes(V.kind)):e,n=$t(t),c=t.temperature?this.entities[t.temperature]?.state:null,y=t.humidity?this.entities[t.humidity]?.state:null,O=[c&&c!=="unavailable"?`${tt(parseFloat(c))}°`:null,y&&y!=="unavailable"?`${tt(parseFloat(y),0)}%`:null,t.floor].filter(Boolean).join(" · ");return $`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${R(D.back)}</button>
        <b>${t.name}</b><span>${O}</span>
        ${n.length?$`<div class="act">
              <button class="pill" @click=${()=>this.call("light","turn_on",n)}>${R(D.bulb)} Acender</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",n)}>Apagar</button>
            </div>`:P}
      </div>
      ${i.length>2?$`<div class="cats">${i.map(V=>$`<button class=${nt({on:V===a})} @click=${()=>this.category=V.id}>${V.name}<em>${r(V.kinds)}</em></button>`)}</div>`:P}
      <div class="grid">${s.map(V=>this.renderWidget(V))}</div>`}renderWidget(t){const e=t.entity?this.entities[t.entity]:void 0;if(t.entity&&t.kind!=="weather"&&!e)return P;const r=this.widgetBody(t,e),i={w:!0,[t.size]:!0,on:(r.on??!1)||this.flash===t.key,att:r.att??!1,off:Rr(e)&&t.kind!=="room-lights"&&t.kind!=="scenes",dragging:this.drag?.key===t.key};return $`<div class=${nt(i)} style=${r.style??""}
        @pointerdown=${a=>this.down(a,t)} @pointermove=${a=>this.move(a,t)}
        @pointerup=${a=>this.up(a,t)} @pointercancel=${()=>this.cancel()} @contextmenu=${a=>a.preventDefault()}>
      ${r.fill!=null?$`<div class="fill" style=${We({width:`${r.fill}%`,"--fc":r.color??"255,207,138"})}></div>`:P}
      ${r.art??P}
      <span class="nm">${t.name}${r.tag?$`<em>${r.tag}</em>`:P}</span>
      ${r.extra??P}
      <div class="hero" style=${r.heroStyle??""}>${r.hero}${r.small?$`<small>${r.small}</small>`:P}</div>
      ${r.ctl??P}
    </div>`}widgetBody(t,e){const r=this.level(t);switch(t.kind){case"room-lights":{const i=t.entities.filter(s=>this.entities[s]?.state==="on"),a=i.length?mt(this.entities[i[0]]):"#ffcf8a";return{hero:r?`${r}%`:"Off",small:i.length?i.map(s=>this.name(s,t.room)).slice(0,2).join(" e "):`${t.entities.length} luz${t.entities.length>1?"es":""}`,tag:t.entities.length>1?`${i.length}/${t.entities.length} luzes`:void 0,art:Dt(r??0,a),fill:r||null,color:Ft(a),on:r>0}}case"light":{const i=mt(e);return{hero:r?`${r}%`:"Off",tag:t.sub&&this.view==="home"?t.sub:void 0,art:Dt(r??0,i),fill:r||null,color:Ft(i),on:(r??0)>0,heroStyle:r?`color:${i}`:""}}case"cover":{const i=r??0;return{hero:`${i}%`,small:Qr[e.state]??e.state,art:Ar(i),fill:i,color:"170,200,230"}}case"climate":{const i=e.attributes.temperature,a=e.state,s=(e.attributes.hvac_modes??[]).filter(O=>["heat","cool","off","auto","heat_cool"].includes(O)).slice(0,3),n=a==="cool"?"#6cc8ff":a==="off"?"#5d646e":"#ff9f43",c=e.attributes.current_temperature,y=Rt[e.attributes.hvac_action??a]??yt[a]??a;return{hero:a==="off"?"Off":i!=null?`${tt(i)}°`:"—",small:[y,c!=null?`agora ${tt(c)}°`:null].filter(Boolean).join(" · "),tag:t.sub,art:Tr(a==="off"?null:i??null,n),heroStyle:t.size==="l"?"font-size:calc(var(--u)*7)":"",extra:s.length>1?$`<div class="seg">${s.map(O=>$`<button class=${nt({on:O===a})} @click=${()=>this.call("climate","set_hvac_mode",t.entity,{hvac_mode:O})}>${yt[O]}</button>`)}</div>`:P,ctl:i!=null&&a!=="off"?$`<div class="ctl"><button aria-label="Baixar" @click=${()=>this.stepTemp(t.entity,-1)}>${R(D.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(t.entity,1)}>${R(D.plus)}</button></div>`:P}}case"weather":{const i=e?.state??"",a=e?.attributes.temperature,s=this.warnings[0];return{hero:a!=null?`${Math.round(a)}°`:"—",small:Nt[i]??i,art:Pr(i),extra:s?$`<span class=${`ipma ${s.awarenessLevelID}`}><i></i>Aviso ${zt[s.awarenessLevelID]??""} · ${s.awarenessTypeName.toLowerCase()}${this.warnings.length>1?` +${this.warnings.length-1}`:""}</span>`:P,ctl:this.hourly.length?$`<div class="hrs">${this.hourly.map(n=>$`<span>${new Date(n.datetime).getHours()}h<b>${Math.round(n.temperature)}°</b>${n.precipitation_probability?`${n.precipitation_probability}%`:""}</span>`)}</div>`:P}}case"lock":{const i=e.state!=="locked";return{hero:i?e.state==="unlocked"?"Destrancada":e.state:"Trancada",small:i?"tocar para trancar":"toque longo para abrir",art:Vr(i),att:e.state==="unlocked",heroStyle:"font-size:calc(var(--u)*1.85)"}}case"media":{const i=e.state==="playing",a=e.attributes.media_title??(ct(e)?"Ligado":"Desligado"),s=e.attributes.media_artist??e.attributes.app_name??"";return{hero:a,small:s,tag:t.sub,art:Er(e.attributes.entity_picture),on:i,heroStyle:"font-size:calc(var(--u)*2.4)",ctl:ct(e)?$`<div class="ctl"><button class="pri" aria-label=${i?"Pausa":"Tocar"} @click=${()=>this.call("media_player","media_play_pause",t.entity)}>${R(i?D.pause:D.play)}</button>
                <button aria-label="Seguinte" @click=${()=>this.call("media_player","media_next_track",t.entity)}>${R(D.next)}</button></div>`:P}}case"vacuum":{const i=e.attributes.battery_level;return{hero:i!=null?`${i}%`:It[e.state]??e.state,small:It[e.state]??e.state,art:Hr(e.state==="cleaning"),on:e.state==="cleaning"}}case"scenes":return{hero:"",extra:$`<div class="scn">${t.entities.map(i=>$`<button @click=${()=>this.call(j(i),"turn_on",i)}>${R(D.spark)}${this.name(i)}</button>`)}</div>`};case"fan":return{hero:ct(e)?e.attributes.percentage!=null?`${e.attributes.percentage}%`:"On":"Off",art:Or(ct(e)),on:ct(e)};case"switch":case"outlet":{const i=ct(e);return{hero:i?"On":"Off",art:Dr(i),on:i}}case"binary":{const i=e.state==="on",a=e.attributes.device_class;return{hero:a&&["door","window","garage_door","opening"].includes(a)?i?"Aberta":"Fechada":a==="motion"||a==="occupancy"?i?"Movimento":"Calmo":i?"On":"Off",att:i&&!!a&&["door","window","garage_door","opening","moisture","smoke","gas"].includes(a),heroStyle:"font-size:calc(var(--u)*2.4)"}}case"sensor":{const i=e.attributes.unit_of_measurement??"",a=parseFloat(e.state),s=e.attributes.device_class;Number.isNaN(a)||this.historyWanted.add(t.entity);const n=this.history[t.entity],c=n&&n.length>1?`${tt(Math.min(...n),0)}–${tt(Math.max(...n),0)}`:void 0;return{hero:Number.isNaN(a)?e.state:`${tt(a)}${i==="°C"?"°":i==="%"?"%":""}`,small:i&&i!=="°C"&&i!=="%"?i:t.sub,tag:c,art:Sr(s==="humidity"?"#3db8f5":s==="temperature"?"#ff9f43":"#5be3a0",n)}}case"scene":return{hero:"",art:Br(),extra:$`<span class="go">${this.flash===t.key?"Ativada":"Tocar para ativar"}</span>`};case"camera":{const i=e.attributes.entity_picture,a=Math.floor(this.now.getTime()/1e4);return{hero:"",tag:t.sub,art:i?$`<img class="cam" src=${`${i}${i.includes("?")?"&":"?"}t=${a}`} alt="" loading="lazy" />`:P}}}}name(t,e){for(const i of this.home.rooms){const a=i.devices.find(s=>s.id===t);if(a)return a.name}const r=this.entities[t]?.attributes.friendly_name??t.split(".")[1];return e&&r.toLowerCase().startsWith(e.name.toLowerCase()+" ")?r.slice(e.name.length+1):r}stepTemp(t,e){const r=this.entities[t],i=r?.attributes.target_temp_step??.5,a=r?.attributes.temperature??20,s=r?.attributes.min_temp??7,n=r?.attributes.max_temp??35;this.call("climate","set_temperature",t,{temperature:Math.max(s,Math.min(n,Math.round((a+e*i)*10)/10))})}renderSheet(t){const e=this.entities[t];if(!e)return P;const r=j(t),i=this.home.rooms.find(s=>s.devices.some(n=>n.id===t)),a=r==="light"?"luz":r==="cover"?"estore":r==="climate"?"clima":r==="lock"?"fechadura":r==="media_player"?"média":r==="weather"?"tempo":"";return $`<div class="scrim" @click=${()=>this.sheet=null}></div>
      <aside class="sheet" role="dialog" aria-label=${this.name(t,i)}>
        <div class="shd"><span class="k">${[i?.name,a].filter(Boolean).join(" · ")}</span>
          <button class="x" aria-label="Fechar" @click=${()=>this.sheet=null}>${R(D.close)}</button></div>
        <h4>${this.name(t,i)}</h4>
        ${this.sheetBody(t,e)}
      </aside>`}bigSlider(t,e,r,i,a){const s=this.drag?.key===t?this.drag.value:e,n=c=>{const y=c.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(c.clientX-y.left)/y.width*100)))};return $`<div class="bigsl" role="slider" aria-label=${i} aria-valuenow=${s} aria-valuemin="0" aria-valuemax="100"
      @pointerdown=${c=>{c.currentTarget.setPointerCapture(c.pointerId),this.drag={key:t,value:n(c)}}}
      @pointermove=${c=>{this.drag?.key===t&&c.buttons&&(this.drag={key:t,value:n(c)})}}
      @pointerup=${c=>{const y=n(c);a(y),this.drag={key:t,value:y},window.setTimeout(()=>{this.drag?.key===t&&(this.drag=null)},1500)}}>
      <i style=${`width:${s}%;background:${r}`}></i><b>${s}%</b></div>`}sheetBody(t,e){const r=j(t);if(r==="light"){const a=e.attributes.supported_color_modes??[],s=a.includes("color_temp"),n=a.some(V=>["hs","rgb","rgbw","rgbww","xy"].includes(V)),c=mt(e),y=e.attributes.min_color_temp_kelvin??2200,O=e.attributes.max_color_temp_kelvin??6500;return $`${a.some(V=>V!=="onoff")?this.bigSlider(`sheet-${t}`,_t(e),`linear-gradient(90deg,${c},#fff3e0)`,"Brilho",V=>V?this.call("light","turn_on",t,{brightness_pct:V}):this.call("light","turn_off",t)):P}
        ${s?$`<span class="k">Branco</span><div class="tbar" @click=${V=>{const W=V.currentTarget.getBoundingClientRect(),J=(V.clientX-W.left)/W.width;this.call("light","turn_on",t,{color_temp_kelvin:Math.round(y+J*(O-y))})}}></div>`:P}
        ${n?$`<span class="k">Cores</span><div class="pre">${ea.map(V=>$`<button aria-label=${V} style=${`background:${V}`} class=${nt({on:V===c})} @click=${()=>this.call("light","turn_on",t,{rgb_color:te(V)})}></button>`)}</div>`:P}
        <div class="foot"><button class="pill" @click=${()=>this.toggle(t)}>${R(D.power)} ${e.state==="on"?"Desligar":"Ligar"}</button></div>`}if(r==="cover"){const a=e.attributes.current_position??(e.state==="open"?100:0);return $`${e.attributes.supported_features&4?this.bigSlider(`sheet-${t}`,a,"linear-gradient(90deg,#a9b6c4,#dfe6ee)","Posição",s=>this.call("cover","set_cover_position",t,{position:s})):P}
        <div class="foot"><button class="pill" @click=${()=>this.call("cover","open_cover",t)}>Abrir</button><button class="pill" @click=${()=>this.call("cover","stop_cover",t)}>Parar</button><button class="pill" @click=${()=>this.call("cover","close_cover",t)}>Fechar</button></div>`}if(r==="climate"){const a=e.attributes.temperature,s=e.attributes.hvac_modes??[];return $`<div class="bigtemp">${a!=null?`${tt(a)}°`:"—"}<small>${Rt[e.attributes.hvac_action??e.state]??""}${e.attributes.current_temperature!=null?` · agora ${tt(e.attributes.current_temperature)}°`:""}</small></div>
        <div class="ctl big"><button aria-label="Baixar" @click=${()=>this.stepTemp(t,-1)}>${R(D.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(t,1)}>${R(D.plus)}</button></div>
        <span class="k">Modo</span><div class="seg wide">${s.map(n=>$`<button class=${nt({on:n===e.state})} @click=${()=>this.call("climate","set_hvac_mode",t,{hvac_mode:n})}>${yt[n]??n}</button>`)}</div>`}if(r==="lock"){const a=e.state==="locked";return $`<div class="bigtemp">${a?"Trancada":e.state==="unlocked"?"Destrancada":e.state}</div>
        <div class="foot">${a?$`<button class="pill warn" @click=${()=>{this.call("lock","unlock",t),this.sheet=null}}>${R(D.unlock)} Destrancar</button>`:$`<button class="pill pri" @click=${()=>this.call("lock","lock",t)}>${R(D.lock)} Trancar</button>`}</div>`}if(r==="media_player"){const a=Math.round((e.attributes.volume_level??0)*100);return $`<div class="bigtemp" style="font-size:calc(var(--u)*2.6)">${e.attributes.media_title??e.state}<small>${e.attributes.media_artist??""}</small></div>
        ${e.attributes.volume_level!=null?this.bigSlider(`vol-${t}`,a,"linear-gradient(90deg,#3db8f5,#9be0ff)","Volume",s=>this.call("media_player","volume_set",t,{volume_level:s/100})):P}
        <div class="foot"><button class="pill pri" @click=${()=>this.call("media_player","media_play_pause",t)}>${R(e.state==="playing"?D.pause:D.play)} ${e.state==="playing"?"Pausa":"Tocar"}</button>
          <button class="pill" @click=${()=>this.call("media_player","media_next_track",t)}>${R(D.next)}</button>
          <button class="pill" @click=${()=>this.toggle(t)}>${R(D.power)}</button></div>`}if(r==="camera"){const a=e.attributes.entity_picture;return a?$`<img class="camlg" src=${`${a}${a.includes("?")?"&":"?"}t=${Math.floor(this.now.getTime()/1e4)}`} alt=${this.name(t)} />`:$`<p class="k">Sem imagem</p>`}if(r==="weather"){const a=c=>new Date(c).toLocaleString("pt-PT",{weekday:"short",hour:"2-digit",minute:"2-digit"}),s=e.attributes.temperature,n=[e.attributes.humidity!=null?`${e.attributes.humidity}%`:null,e.attributes.wind_speed!=null?`vento ${tt(e.attributes.wind_speed,0)} ${e.attributes.wind_speed_unit??""}`:null].filter(Boolean);return $`<div class="bigtemp">${s!=null?`${Math.round(s)}°`:"—"}<small>${[Nt[e.state]??e.state,...n].join(" · ")}</small></div>
        <div class="hrs">${this.hourly.map(c=>$`<span>${new Date(c.datetime).getHours()}h<b>${Math.round(c.temperature)}°</b>${c.precipitation_probability?`${c.precipitation_probability}%`:""}</span>`)}</div>
        ${this.warnings.map(c=>$`<div class=${`warn ${c.awarenessLevelID}`}><b>Aviso ${zt[c.awarenessLevelID]??""} · ${c.awarenessTypeName}</b>
          <span>${a(c.startTime)} → ${a(c.endTime)}</span>${c.text?$`<p>${c.text}</p>`:P}</div>`)}
        ${this.home.settings?.ipma_area?P:$`<p class="hint">Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.</p>`}`}const i=e.attributes.unit_of_measurement??"";return $`<div class="bigtemp">${e.state}${i?` ${i}`:""}</div>
      ${["switch","light","fan","input_boolean","vacuum"].includes(r)?$`<div class="foot"><button class="pill pri" @click=${()=>this.toggle(t)}>${R(D.power)} ${ct(e)?"Desligar":"Ligar"}</button></div>`:P}`}};U.styles=Gr;q([ht({attribute:!1})],U.prototype,"home",2);q([ht({attribute:!1})],U.prototype,"entities",2);q([ht({attribute:!1})],U.prototype,"dashboard",2);q([ht({attribute:!1})],U.prototype,"conn",2);q([ht()],U.prototype,"screenName",2);q([Z()],U.prototype,"view",2);q([Z()],U.prototype,"category",2);q([Z()],U.prototype,"sheet",2);q([Z()],U.prototype,"drag",2);q([Z()],U.prototype,"now",2);q([Z()],U.prototype,"hourly",2);q([Z()],U.prototype,"warnings",2);q([Z()],U.prototype,"history",2);q([Z()],U.prototype,"flash",2);U=q([Wt("pine3-vidro")],U);function te(t){const e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function Ft(t){if(t.startsWith("#"))return te(t).join(",");const e=t.match(/\d+/g);return e?e.slice(0,3).join(","):"255,207,138"}var ra=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,ot=(t,e,r,i)=>{for(var a=i>1?void 0:i?aa(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(a=(i?n(e,r,a):n(a))||a);return i&&a&&ra(e,r,a),a};const ia=2e3,na="/pine3-home";let et=class extends qt{constructor(){super(...arguments),this.phase="starting",this.error="",this.entities={},this.now=new Date,this.unsubs=[]}connectedCallback(){super.connectedCallback(),this.clockTimer=window.setInterval(()=>this.now=new Date,15e3);const t=Ue();t?this.connect(t):this.beginPairing()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clockTimer),clearTimeout(this.pollTimer),this.teardown()}teardown(){this.unsubs.forEach(t=>t()),this.unsubs=[],this.conn?.close(),this.conn=void 0}async beginPairing(){clearTimeout(this.pollTimer),this.phase="pairing",this.pair=void 0;try{this.pair=await Fe(),this.poll()}catch(t){this.error=t.message==="too_many"?"Há demasiados códigos à espera. Tenta daqui a pouco.":"Não foi possível pedir um código.",this.pollTimer=window.setTimeout(()=>this.beginPairing(),1e4)}}poll(){this.pollTimer=window.setTimeout(async()=>{if(this.pair){try{const t=await Ze(this.pair);if(t.status==="approved"){Ot(t.token),this.connect(t.token);return}if(t.status==="expired"){this.beginPairing();return}}catch{}this.poll()}},ia)}async connect(t){this.phase="connecting",this.teardown();try{const e=await ze({auth:Te(location.origin,t)});this.conn=e,this.me=await e.sendMessagePromise({type:"pine3_home/me"}),this.home=await e.sendMessagePromise({type:"pine3_home/home"}),this.unsubs.push(Ie(e,r=>this.entities=r)),this.unsubs.push(await e.subscribeMessage(r=>this.home=r,{type:"pine3_home/subscribe"})),this.unsubs.push(await e.subscribeEvents(async()=>{this.me=await e.sendMessagePromise({type:"pine3_home/me"})},"pine3_home_updated")),e.addEventListener("ready",async()=>{this.me=await e.sendMessagePromise({type:"pine3_home/me"})}),this.phase="ready"}catch(e){if(e===dt){Ot(null),this.beginPairing();return}this.phase="error",this.error="Sem ligação ao Home Assistant. A tentar de novo…",this.pollTimer=window.setTimeout(()=>this.connect(t),5e3)}}qr(t){const e=de(0,"M");return e.addData(`${location.origin}${na}?code=${t}`),e.make(),ce(e.createSvgTag({cellSize:6,margin:2,scalable:!0}))}renderPairing(){const t=this.pair?.code;return $`<main class="center">
      <div class="pane pairing">
        <div class="text">
          <span class="muted eyebrow">Pine3 Home</span>
          <h1>Emparelhar este ecrã</h1>
          <p class="muted">No Home Assistant, abre <strong>Pine3 Home</strong> e escreve este código, ou lê o QR com o telemóvel.</p>
          <div class="code" aria-live="polite">${t?`${t.slice(0,3)} ${t.slice(3)}`:"··· ···"}</div>
          ${this.error?$`<p class="bad">${this.error}</p>`:$`<p class="muted small">O código muda a cada 10 minutos.</p>`}
        </div>
        ${t?$`<div class="qr">${this.qr(t)}</div>`:P}
      </div>
    </main>`}renderReady(){const t=this.me;return!this.home||!this.conn?$`<main class="center"><p class="muted">A carregar a casa…</p></main>`:$`<pine3-vidro .home=${this.home} .entities=${this.entities} .dashboard=${t.dashboard} .conn=${this.conn}
      .screenName=${t.screen?.name??""}></pine3-vidro>`}render(){switch(this.phase){case"pairing":return this.renderPairing();case"ready":return this.me?this.renderReady():P;case"error":return $`<main class="center"><p class="muted">${this.error}</p></main>`;default:return $`<main class="center"><p class="muted">A ligar…</p></main>`}}};et.styles=[oe,Zt`
      :host {
        display: block;
        min-height: 100vh;
        background: var(--p3-bg);
      }
      main {
        min-height: 100vh;
        box-sizing: border-box;
        padding: 24px;
      }
      .center {
        display: grid;
        place-items: center;
      }
      .pairing {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 40px;
        padding: 40px 48px;
        max-width: 860px;
      }
      .pairing .text {
        flex: 1;
        min-width: 260px;
      }
      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: 0.75rem;
      }
      h1 {
        margin: 6px 0 10px;
        font-size: 2rem;
        letter-spacing: -0.02em;
      }
      .code {
        font-size: clamp(3rem, 9vw, 5.5rem);
        font-weight: 600;
        letter-spacing: 0.08em;
        font-variant-numeric: tabular-nums;
        margin: 18px 0 8px;
      }
      .qr {
        width: 220px;
        height: 220px;
        background: #fff;
        border-radius: 18px;
        padding: 10px;
        box-sizing: border-box;
      }
      .qr svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .small {
        font-size: 0.85rem;
      }
      .bad {
        color: var(--p3-bad);
      }
    `];ot([Z()],et.prototype,"phase",2);ot([Z()],et.prototype,"pair",2);ot([Z()],et.prototype,"error",2);ot([Z()],et.prototype,"me",2);ot([Z()],et.prototype,"home",2);ot([Z()],et.prototype,"entities",2);ot([Z()],et.prototype,"now",2);et=ot([Wt("pine3-screen")],et);
