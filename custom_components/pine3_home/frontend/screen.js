import{A as T,E as At,w as j,i as Kt,n as ct,r as U,a as Yt,c as $,t as Jt,b as fe}from"./chunks/base-BYQr5Ns4.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={ATTRIBUTE:1,CHILD:2},Ht=t=>(...e)=>({_$litDirective$:t,values:e});let Vt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,r){this._$Ct=e,this._$AM=a,this._$Ci=r}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $t=class extends Vt{constructor(e){if(super(e),this.it=T,e.type!==Tt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===T||e==null)return this._t=void 0,this.it=e;if(e===At)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const a=[e];return a.raw=a,this._t={_$litType$:this.constructor.resultType,strings:a,values:[]}}};$t.directiveName="unsafeHTML",$t.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _t extends $t{}_t.directiveName="unsafeSVG",_t.resultType=2;const pe=Ht(_t);function ge(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xt={exports:{}};(function(t,e){var a=function(){var r=function(C,M){var b=236,x=17,d=C,w=n[M],l=null,c=0,k=null,v=[],y={},V=function(h,f){c=d*4+17,l=function(u){for(var p=new Array(u),g=0;g<u;g+=1){p[g]=new Array(u);for(var _=0;_<u;_+=1)p[g][_]=null}return p}(c),E(0,0),E(c-7,0),E(0,c-7),q(),W(),nt(h,f),d>=7&&at(h),k==null&&(k=de(d,w,v)),st(k,f)},E=function(h,f){for(var u=-1;u<=7;u+=1)if(!(h+u<=-1||c<=h+u))for(var p=-1;p<=7;p+=1)f+p<=-1||c<=f+p||(0<=u&&u<=6&&(p==0||p==6)||0<=p&&p<=6&&(u==0||u==6)||2<=u&&u<=4&&2<=p&&p<=4?l[h+u][f+p]=!0:l[h+u][f+p]=!1)},B=function(){for(var h=0,f=0,u=0;u<8;u+=1){V(!0,u);var p=o.getLostPoint(y);(u==0||h>p)&&(h=p,f=u)}return f},W=function(){for(var h=8;h<c-8;h+=1)l[h][6]==null&&(l[h][6]=h%2==0);for(var f=8;f<c-8;f+=1)l[6][f]==null&&(l[6][f]=f%2==0)},q=function(){for(var h=o.getPatternPosition(d),f=0;f<h.length;f+=1)for(var u=0;u<h.length;u+=1){var p=h[f],g=h[u];if(l[p][g]==null)for(var _=-2;_<=2;_+=1)for(var A=-2;A<=2;A+=1)_==-2||_==2||A==-2||A==2||_==0&&A==0?l[p+_][g+A]=!0:l[p+_][g+A]=!1}},at=function(h){for(var f=o.getBCHTypeNumber(d),u=0;u<18;u+=1){var p=!h&&(f>>u&1)==1;l[Math.floor(u/3)][u%3+c-8-3]=p}for(var u=0;u<18;u+=1){var p=!h&&(f>>u&1)==1;l[u%3+c-8-3][Math.floor(u/3)]=p}},nt=function(h,f){for(var u=w<<3|f,p=o.getBCHTypeInfo(u),g=0;g<15;g+=1){var _=!h&&(p>>g&1)==1;g<6?l[g][8]=_:g<8?l[g+1][8]=_:l[c-15+g][8]=_}for(var g=0;g<15;g+=1){var _=!h&&(p>>g&1)==1;g<8?l[8][c-g-1]=_:g<9?l[8][15-g-1+1]=_:l[8][15-g-1]=_}l[c-8][8]=!h},st=function(h,f){for(var u=-1,p=c-1,g=7,_=0,A=o.getMaskFunction(f),L=c-1;L>0;L-=2)for(L==6&&(L-=1);;){for(var z=0;z<2;z+=1)if(l[p][L-z]==null){var F=!1;_<h.length&&(F=(h[_]>>>g&1)==1);var H=A(p,L-z);H&&(F=!F),l[p][L-z]=F,g-=1,g==-1&&(_+=1,g=7)}if(p+=u,p<0||c<=p){p-=u,u=-u;break}}},ut=function(h,f){for(var u=0,p=0,g=0,_=new Array(f.length),A=new Array(f.length),L=0;L<f.length;L+=1){var z=f[L].dataCount,F=f[L].totalCount-z;p=Math.max(p,z),g=Math.max(g,F),_[L]=new Array(z);for(var H=0;H<_[L].length;H+=1)_[L][H]=255&h.getBuffer()[H+u];u+=z;var Y=o.getErrorCorrectPolynomial(F),J=P(_[L],Y.getLength()-1),Pt=J.mod(Y);A[L]=new Array(Y.getLength()-1);for(var H=0;H<A[L].length;H+=1){var Dt=H+Pt.getLength()-A[L].length;A[L][H]=Dt>=0?Pt.getAt(Dt):0}}for(var Ot=0,H=0;H<f.length;H+=1)Ot+=f[H].totalCount;for(var vt=new Array(Ot),pt=0,H=0;H<p;H+=1)for(var L=0;L<f.length;L+=1)H<_[L].length&&(vt[pt]=_[L][H],pt+=1);for(var H=0;H<g;H+=1)for(var L=0;L<f.length;L+=1)H<A[L].length&&(vt[pt]=A[L][H],pt+=1);return vt},de=function(h,f,u){for(var p=O.getRSBlocks(h,f),g=K(),_=0;_<u.length;_+=1){var A=u[_];g.put(A.getMode(),4),g.put(A.getLength(),o.getLengthInBits(A.getMode(),h)),A.write(g)}for(var L=0,_=0;_<p.length;_+=1)L+=p[_].dataCount;if(g.getLengthInBits()>L*8)throw"code length overflow. ("+g.getLengthInBits()+">"+L*8+")";for(g.getLengthInBits()+4<=L*8&&g.put(0,4);g.getLengthInBits()%8!=0;)g.putBit(!1);for(;!(g.getLengthInBits()>=L*8||(g.put(b,8),g.getLengthInBits()>=L*8));)g.put(x,8);return ut(g,p)};y.addData=function(h,f){f=f||"Byte";var u=null;switch(f){case"Numeric":u=R(h);break;case"Alphanumeric":u=tt(h);break;case"Byte":u=it(h);break;case"Kanji":u=et(h);break;default:throw"mode:"+f}v.push(u),k=null},y.isDark=function(h,f){if(h<0||c<=h||f<0||c<=f)throw h+","+f;return l[h][f]},y.getModuleCount=function(){return c},y.make=function(){if(d<1){for(var h=1;h<40;h++){for(var f=O.getRSBlocks(h,w),u=K(),p=0;p<v.length;p++){var g=v[p];u.put(g.getMode(),4),u.put(g.getLength(),o.getLengthInBits(g.getMode(),h)),g.write(u)}for(var _=0,p=0;p<f.length;p++)_+=f[p].dataCount;if(u.getLengthInBits()<=_*8)break}d=h}V(!1,B())},y.createTableTag=function(h,f){h=h||2,f=typeof f>"u"?h*4:f;var u="";u+='<table style="',u+=" border-width: 0px; border-style: none;",u+=" border-collapse: collapse;",u+=" padding: 0px; margin: "+f+"px;",u+='">',u+="<tbody>";for(var p=0;p<y.getModuleCount();p+=1){u+="<tr>";for(var g=0;g<y.getModuleCount();g+=1)u+='<td style="',u+=" border-width: 0px; border-style: none;",u+=" border-collapse: collapse;",u+=" padding: 0px; margin: 0px;",u+=" width: "+h+"px;",u+=" height: "+h+"px;",u+=" background-color: ",u+=y.isDark(p,g)?"#000000":"#ffffff",u+=";",u+='"/>';u+="</tr>"}return u+="</tbody>",u+="</table>",u},y.createSvgTag=function(h,f,u,p){var g={};typeof arguments[0]=="object"&&(g=arguments[0],h=g.cellSize,f=g.margin,u=g.alt,p=g.title),h=h||2,f=typeof f>"u"?h*4:f,u=typeof u=="string"?{text:u}:u||{},u.text=u.text||null,u.id=u.text?u.id||"qrcode-description":null,p=typeof p=="string"?{text:p}:p||{},p.text=p.text||null,p.id=p.text?p.id||"qrcode-title":null;var _=y.getModuleCount()*h+f*2,A,L,z,F,H="",Y;for(Y="l"+h+",0 0,"+h+" -"+h+",0 0,-"+h+"z ",H+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',H+=g.scalable?"":' width="'+_+'px" height="'+_+'px"',H+=' viewBox="0 0 '+_+" "+_+'" ',H+=' preserveAspectRatio="xMinYMin meet"',H+=p.text||u.text?' role="img" aria-labelledby="'+dt([p.id,u.id].join(" ").trim())+'"':"",H+=">",H+=p.text?'<title id="'+dt(p.id)+'">'+dt(p.text)+"</title>":"",H+=u.text?'<description id="'+dt(u.id)+'">'+dt(u.text)+"</description>":"",H+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',H+='<path d="',z=0;z<y.getModuleCount();z+=1)for(F=z*h+f,A=0;A<y.getModuleCount();A+=1)y.isDark(z,A)&&(L=A*h+f,H+="M"+L+","+F+Y);return H+='" stroke="transparent" fill="black"/>',H+="</svg>",H},y.createDataURL=function(h,f){h=h||2,f=typeof f>"u"?h*4:f;var u=y.getModuleCount()*h+f*2,p=f,g=u-f;return ue(u,u,function(_,A){if(p<=_&&_<g&&p<=A&&A<g){var L=Math.floor((_-p)/h),z=Math.floor((A-p)/h);return y.isDark(z,L)?0:1}else return 1})},y.createImgTag=function(h,f,u){h=h||2,f=typeof f>"u"?h*4:f;var p=y.getModuleCount()*h+f*2,g="";return g+="<img",g+=' src="',g+=y.createDataURL(h,f),g+='"',g+=' width="',g+=p,g+='"',g+=' height="',g+=p,g+='"',u&&(g+=' alt="',g+=dt(u),g+='"'),g+="/>",g};var dt=function(h){for(var f="",u=0;u<h.length;u+=1){var p=h.charAt(u);switch(p){case"<":f+="&lt;";break;case">":f+="&gt;";break;case"&":f+="&amp;";break;case'"':f+="&quot;";break;default:f+=p;break}}return f},he=function(h){var f=1;h=typeof h>"u"?f*2:h;var u=y.getModuleCount()*f+h*2,p=h,g=u-h,_,A,L,z,F,H={"██":"█","█ ":"▀"," █":"▄","  ":" "},Y={"██":"▀","█ ":"▀"," █":" ","  ":" "},J="";for(_=0;_<u;_+=2){for(L=Math.floor((_-p)/f),z=Math.floor((_+1-p)/f),A=0;A<u;A+=1)F="█",p<=A&&A<g&&p<=_&&_<g&&y.isDark(L,Math.floor((A-p)/f))&&(F=" "),p<=A&&A<g&&p<=_+1&&_+1<g&&y.isDark(z,Math.floor((A-p)/f))?F+=" ":F+="█",J+=h<1&&_+1>=g?Y[F]:H[F];J+=`
`}return u%2&&h>0?J.substring(0,J.length-u-1)+Array(u+1).join("▀"):J.substring(0,J.length-1)};return y.createASCII=function(h,f){if(h=h||1,h<2)return he(f);h-=1,f=typeof f>"u"?h*2:f;var u=y.getModuleCount()*h+f*2,p=f,g=u-f,_,A,L,z,F=Array(h+1).join("██"),H=Array(h+1).join("  "),Y="",J="";for(_=0;_<u;_+=1){for(L=Math.floor((_-p)/h),J="",A=0;A<u;A+=1)z=1,p<=A&&A<g&&p<=_&&_<g&&y.isDark(L,Math.floor((A-p)/h))&&(z=0),J+=z?F:H;for(L=0;L<h;L+=1)Y+=J+`
`}return Y.substring(0,Y.length-1)},y.renderTo2dContext=function(h,f){f=f||2;for(var u=y.getModuleCount(),p=0;p<u;p++)for(var g=0;g<u;g++)h.fillStyle=y.isDark(p,g)?"black":"white",h.fillRect(p*f,g*f,f,f)},y};r.stringToBytesFuncs={default:function(C){for(var M=[],b=0;b<C.length;b+=1){var x=C.charCodeAt(b);M.push(x&255)}return M}},r.stringToBytes=r.stringToBytesFuncs.default,r.createStringToBytes=function(C,M){var b=function(){for(var d=ce(C),w=function(){var W=d.read();if(W==-1)throw"eof";return W},l=0,c={};;){var k=d.read();if(k==-1)break;var v=w(),y=w(),V=w(),E=String.fromCharCode(k<<8|v),B=y<<8|V;c[E]=B,l+=1}if(l!=M)throw l+" != "+M;return c}(),x=63;return function(d){for(var w=[],l=0;l<d.length;l+=1){var c=d.charCodeAt(l);if(c<128)w.push(c);else{var k=b[d.charAt(l)];typeof k=="number"?(k&255)==k?w.push(k):(w.push(k>>>8),w.push(k&255)):w.push(x)}}return w}};var i={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},s={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o=function(){var C=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],M=1335,b=7973,x=21522,d={},w=function(l){for(var c=0;l!=0;)c+=1,l>>>=1;return c};return d.getBCHTypeInfo=function(l){for(var c=l<<10;w(c)-w(M)>=0;)c^=M<<w(c)-w(M);return(l<<10|c)^x},d.getBCHTypeNumber=function(l){for(var c=l<<12;w(c)-w(b)>=0;)c^=b<<w(c)-w(b);return l<<12|c},d.getPatternPosition=function(l){return C[l-1]},d.getMaskFunction=function(l){switch(l){case s.PATTERN000:return function(c,k){return(c+k)%2==0};case s.PATTERN001:return function(c,k){return c%2==0};case s.PATTERN010:return function(c,k){return k%3==0};case s.PATTERN011:return function(c,k){return(c+k)%3==0};case s.PATTERN100:return function(c,k){return(Math.floor(c/2)+Math.floor(k/3))%2==0};case s.PATTERN101:return function(c,k){return c*k%2+c*k%3==0};case s.PATTERN110:return function(c,k){return(c*k%2+c*k%3)%2==0};case s.PATTERN111:return function(c,k){return(c*k%3+(c+k)%2)%2==0};default:throw"bad maskPattern:"+l}},d.getErrorCorrectPolynomial=function(l){for(var c=P([1],0),k=0;k<l;k+=1)c=c.multiply(P([1,m.gexp(k)],0));return c},d.getLengthInBits=function(l,c){if(1<=c&&c<10)switch(l){case i.MODE_NUMBER:return 10;case i.MODE_ALPHA_NUM:return 9;case i.MODE_8BIT_BYTE:return 8;case i.MODE_KANJI:return 8;default:throw"mode:"+l}else if(c<27)switch(l){case i.MODE_NUMBER:return 12;case i.MODE_ALPHA_NUM:return 11;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 10;default:throw"mode:"+l}else if(c<41)switch(l){case i.MODE_NUMBER:return 14;case i.MODE_ALPHA_NUM:return 13;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 12;default:throw"mode:"+l}else throw"type:"+c},d.getLostPoint=function(l){for(var c=l.getModuleCount(),k=0,v=0;v<c;v+=1)for(var y=0;y<c;y+=1){for(var V=0,E=l.isDark(v,y),B=-1;B<=1;B+=1)if(!(v+B<0||c<=v+B))for(var W=-1;W<=1;W+=1)y+W<0||c<=y+W||B==0&&W==0||E==l.isDark(v+B,y+W)&&(V+=1);V>5&&(k+=3+V-5)}for(var v=0;v<c-1;v+=1)for(var y=0;y<c-1;y+=1){var q=0;l.isDark(v,y)&&(q+=1),l.isDark(v+1,y)&&(q+=1),l.isDark(v,y+1)&&(q+=1),l.isDark(v+1,y+1)&&(q+=1),(q==0||q==4)&&(k+=3)}for(var v=0;v<c;v+=1)for(var y=0;y<c-6;y+=1)l.isDark(v,y)&&!l.isDark(v,y+1)&&l.isDark(v,y+2)&&l.isDark(v,y+3)&&l.isDark(v,y+4)&&!l.isDark(v,y+5)&&l.isDark(v,y+6)&&(k+=40);for(var y=0;y<c;y+=1)for(var v=0;v<c-6;v+=1)l.isDark(v,y)&&!l.isDark(v+1,y)&&l.isDark(v+2,y)&&l.isDark(v+3,y)&&l.isDark(v+4,y)&&!l.isDark(v+5,y)&&l.isDark(v+6,y)&&(k+=40);for(var at=0,y=0;y<c;y+=1)for(var v=0;v<c;v+=1)l.isDark(v,y)&&(at+=1);var nt=Math.abs(100*at/c/c-50)/5;return k+=nt*10,k},d}(),m=function(){for(var C=new Array(256),M=new Array(256),b=0;b<8;b+=1)C[b]=1<<b;for(var b=8;b<256;b+=1)C[b]=C[b-4]^C[b-5]^C[b-6]^C[b-8];for(var b=0;b<255;b+=1)M[C[b]]=b;var x={};return x.glog=function(d){if(d<1)throw"glog("+d+")";return M[d]},x.gexp=function(d){for(;d<0;)d+=255;for(;d>=256;)d-=255;return C[d]},x}();function P(C,M){if(typeof C.length>"u")throw C.length+"/"+M;var b=function(){for(var d=0;d<C.length&&C[d]==0;)d+=1;for(var w=new Array(C.length-d+M),l=0;l<C.length-d;l+=1)w[l]=C[l+d];return w}(),x={};return x.getAt=function(d){return b[d]},x.getLength=function(){return b.length},x.multiply=function(d){for(var w=new Array(x.getLength()+d.getLength()-1),l=0;l<x.getLength();l+=1)for(var c=0;c<d.getLength();c+=1)w[l+c]^=m.gexp(m.glog(x.getAt(l))+m.glog(d.getAt(c)));return P(w,0)},x.mod=function(d){if(x.getLength()-d.getLength()<0)return x;for(var w=m.glog(x.getAt(0))-m.glog(d.getAt(0)),l=new Array(x.getLength()),c=0;c<x.getLength();c+=1)l[c]=x.getAt(c);for(var c=0;c<d.getLength();c+=1)l[c]^=m.gexp(m.glog(d.getAt(c))+w);return P(l,0).mod(d)},x}var O=function(){var C=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],M=function(d,w){var l={};return l.totalCount=d,l.dataCount=w,l},b={},x=function(d,w){switch(w){case n.L:return C[(d-1)*4+0];case n.M:return C[(d-1)*4+1];case n.Q:return C[(d-1)*4+2];case n.H:return C[(d-1)*4+3];default:return}};return b.getRSBlocks=function(d,w){var l=x(d,w);if(typeof l>"u")throw"bad rs block @ typeNumber:"+d+"/errorCorrectionLevel:"+w;for(var c=l.length/3,k=[],v=0;v<c;v+=1)for(var y=l[v*3+0],V=l[v*3+1],E=l[v*3+2],B=0;B<y;B+=1)k.push(M(V,E));return k},b}(),K=function(){var C=[],M=0,b={};return b.getBuffer=function(){return C},b.getAt=function(x){var d=Math.floor(x/8);return(C[d]>>>7-x%8&1)==1},b.put=function(x,d){for(var w=0;w<d;w+=1)b.putBit((x>>>d-w-1&1)==1)},b.getLengthInBits=function(){return M},b.putBit=function(x){var d=Math.floor(M/8);C.length<=d&&C.push(0),x&&(C[d]|=128>>>M%8),M+=1},b},R=function(C){var M=i.MODE_NUMBER,b=C,x={};x.getMode=function(){return M},x.getLength=function(l){return b.length},x.write=function(l){for(var c=b,k=0;k+2<c.length;)l.put(d(c.substring(k,k+3)),10),k+=3;k<c.length&&(c.length-k==1?l.put(d(c.substring(k,k+1)),4):c.length-k==2&&l.put(d(c.substring(k,k+2)),7))};var d=function(l){for(var c=0,k=0;k<l.length;k+=1)c=c*10+w(l.charAt(k));return c},w=function(l){if("0"<=l&&l<="9")return l.charCodeAt(0)-48;throw"illegal char :"+l};return x},tt=function(C){var M=i.MODE_ALPHA_NUM,b=C,x={};x.getMode=function(){return M},x.getLength=function(w){return b.length},x.write=function(w){for(var l=b,c=0;c+1<l.length;)w.put(d(l.charAt(c))*45+d(l.charAt(c+1)),11),c+=2;c<l.length&&w.put(d(l.charAt(c)),6)};var d=function(w){if("0"<=w&&w<="9")return w.charCodeAt(0)-48;if("A"<=w&&w<="Z")return w.charCodeAt(0)-65+10;switch(w){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+w}};return x},it=function(C){var M=i.MODE_8BIT_BYTE,b=r.stringToBytes(C),x={};return x.getMode=function(){return M},x.getLength=function(d){return b.length},x.write=function(d){for(var w=0;w<b.length;w+=1)d.put(b[w],8)},x},et=function(C){var M=i.MODE_KANJI,b=r.stringToBytesFuncs.SJIS;if(!b)throw"sjis not supported.";(function(w,l){var c=b(w);if(c.length!=2||(c[0]<<8|c[1])!=l)throw"sjis not supported."})("友",38726);var x=b(C),d={};return d.getMode=function(){return M},d.getLength=function(w){return~~(x.length/2)},d.write=function(w){for(var l=x,c=0;c+1<l.length;){var k=(255&l[c])<<8|255&l[c+1];if(33088<=k&&k<=40956)k-=33088;else if(57408<=k&&k<=60351)k-=49472;else throw"illegal char at "+(c+1)+"/"+k;k=(k>>>8&255)*192+(k&255),w.put(k,13),c+=2}if(c<l.length)throw"illegal char at "+(c+1)},d},ft=function(){var C=[],M={};return M.writeByte=function(b){C.push(b&255)},M.writeShort=function(b){M.writeByte(b),M.writeByte(b>>>8)},M.writeBytes=function(b,x,d){x=x||0,d=d||b.length;for(var w=0;w<d;w+=1)M.writeByte(b[w+x])},M.writeString=function(b){for(var x=0;x<b.length;x+=1)M.writeByte(b.charCodeAt(x))},M.toByteArray=function(){return C},M.toString=function(){var b="";b+="[";for(var x=0;x<C.length;x+=1)x>0&&(b+=","),b+=C[x];return b+="]",b},M},oe=function(){var C=0,M=0,b=0,x="",d={},w=function(c){x+=String.fromCharCode(l(c&63))},l=function(c){if(!(c<0)){if(c<26)return 65+c;if(c<52)return 97+(c-26);if(c<62)return 48+(c-52);if(c==62)return 43;if(c==63)return 47}throw"n:"+c};return d.writeByte=function(c){for(C=C<<8|c&255,M+=8,b+=1;M>=6;)w(C>>>M-6),M-=6},d.flush=function(){if(M>0&&(w(C<<6-M),C=0,M=0),b%3!=0)for(var c=3-b%3,k=0;k<c;k+=1)x+="="},d.toString=function(){return x},d},ce=function(C){var M=C,b=0,x=0,d=0,w={};w.read=function(){for(;d<8;){if(b>=M.length){if(d==0)return-1;throw"unexpected end of file./"+d}var c=M.charAt(b);if(b+=1,c=="=")return d=0,-1;if(c.match(/^\s$/))continue;x=x<<6|l(c.charCodeAt(0)),d+=6}var k=x>>>d-8&255;return d-=8,k};var l=function(c){if(65<=c&&c<=90)return c-65;if(97<=c&&c<=122)return c-97+26;if(48<=c&&c<=57)return c-48+52;if(c==43)return 62;if(c==47)return 63;throw"c:"+c};return w},le=function(C,M){var b=C,x=M,d=new Array(C*M),w={};w.setPixel=function(v,y,V){d[y*b+v]=V},w.write=function(v){v.writeString("GIF87a"),v.writeShort(b),v.writeShort(x),v.writeByte(128),v.writeByte(0),v.writeByte(0),v.writeByte(0),v.writeByte(0),v.writeByte(0),v.writeByte(255),v.writeByte(255),v.writeByte(255),v.writeString(","),v.writeShort(0),v.writeShort(0),v.writeShort(b),v.writeShort(x),v.writeByte(0);var y=2,V=c(y);v.writeByte(y);for(var E=0;V.length-E>255;)v.writeByte(255),v.writeBytes(V,E,255),E+=255;v.writeByte(V.length-E),v.writeBytes(V,E,V.length-E),v.writeByte(0),v.writeString(";")};var l=function(v){var y=v,V=0,E=0,B={};return B.write=function(W,q){if(W>>>q)throw"length over";for(;V+q>=8;)y.writeByte(255&(W<<V|E)),q-=8-V,W>>>=8-V,E=0,V=0;E=W<<V|E,V=V+q},B.flush=function(){V>0&&y.writeByte(E)},B},c=function(v){for(var y=1<<v,V=(1<<v)+1,E=v+1,B=k(),W=0;W<y;W+=1)B.add(String.fromCharCode(W));B.add(String.fromCharCode(y)),B.add(String.fromCharCode(V));var q=ft(),at=l(q);at.write(y,E);var nt=0,st=String.fromCharCode(d[nt]);for(nt+=1;nt<d.length;){var ut=String.fromCharCode(d[nt]);nt+=1,B.contains(st+ut)?st=st+ut:(at.write(B.indexOf(st),E),B.size()<4095&&(B.size()==1<<E&&(E+=1),B.add(st+ut)),st=ut)}return at.write(B.indexOf(st),E),at.write(V,E),at.flush(),q.toByteArray()},k=function(){var v={},y=0,V={};return V.add=function(E){if(V.contains(E))throw"dup key:"+E;v[E]=y,y+=1},V.size=function(){return y},V.indexOf=function(E){return v[E]},V.contains=function(E){return typeof v[E]<"u"},V};return w},ue=function(C,M,b){for(var x=le(C,M),d=0;d<M;d+=1)for(var w=0;w<C;w+=1)x.setPixel(w,d,b(w,d));var l=ft();x.write(l);for(var c=oe(),k=l.toByteArray(),v=0;v<k.length;v+=1)c.writeByte(k[v]);return c.flush(),"data:image/gif;base64,"+c};return r}();(function(){a.stringToBytesFuncs["UTF-8"]=function(r){function i(n){for(var s=[],o=0;o<n.length;o++){var m=n.charCodeAt(o);m<128?s.push(m):m<2048?s.push(192|m>>6,128|m&63):m<55296||m>=57344?s.push(224|m>>12,128|m>>6&63,128|m&63):(o++,m=65536+((m&1023)<<10|n.charCodeAt(o)&1023),s.push(240|m>>18,128|m>>12&63,128|m>>6&63,128|m&63))}return s}return i(r)}})(),function(r){t.exports=r()}(function(){return a})})(Xt);var ve=Xt.exports;const me=ge(ve),be=1,ht=2,mt=3,ye=4,we=5;function ke(t){return{type:"auth",access_token:t}}function xe(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function $e(){return{type:"get_states"}}function _e(t,e,a,r,i){const n={type:"call_service",domain:t,service:e,target:r,return_response:i};return a&&(n.service_data=a),n}function Ce(t){const e={type:"subscribe_events"};return t&&(e.event_type=t),e}function St(t){return{type:"unsubscribe_events",subscription:t}}function Me(){return{type:"ping"}}function Le(t,e){return{type:"result",success:!1,error:{code:t,message:e}}}const Qt=(t,e,a,r)=>{const[i,n,s]=t.split(".",3);return Number(i)>e||Number(i)===e&&(r===void 0?Number(n)>=a:Number(n)>a)||r!==void 0&&Number(i)===e&&Number(n)===a&&Number(s)>=r},Ae="auth_invalid",Te="auth_ok";function He(t){if(!t.auth)throw ye;const e=t.auth;let a=e.expired?e.refreshAccessToken().then(()=>{a=void 0},()=>{a=void 0}):void 0;const r=e.wsUrl;function i(n,s,o){const m=new WebSocket(r);let P=!1;const O=()=>{if(m.removeEventListener("close",O),P){o(ht);return}if(n===0){o(be);return}const tt=n===-1?-1:n-1;setTimeout(()=>i(tt,s,o),1e3)},K=async tt=>{try{e.expired&&await(a||e.refreshAccessToken()),m.send(JSON.stringify(ke(e.accessToken)))}catch(it){P=it===ht,m.close()}},R=async tt=>{const it=JSON.parse(tt.data);switch(it.type){case Ae:P=!0,m.close();break;case Te:m.removeEventListener("open",K),m.removeEventListener("message",R),m.removeEventListener("close",O),m.removeEventListener("error",O),m.haVersion=it.ha_version,Qt(m.haVersion,2022,9)&&m.send(JSON.stringify(xe())),s(m);break}};m.addEventListener("open",K),m.addEventListener("message",R),m.addEventListener("close",O),m.addEventListener("error",O)}return new Promise((n,s)=>i(t.setupRetry,n,s))}class Ve{constructor(e,a){this._handleMessage=r=>{let i=JSON.parse(r.data);Array.isArray(i)||(i=[i]),i.forEach(n=>{const s=this.commands.get(n.id);switch(n.type){case"event":s?s.callback(n.event):(console.warn(`Received event for unknown subscription ${n.id}. Unsubscribing.`),this.sendMessagePromise(St(n.id)).catch(o=>{}));break;case"result":s&&(n.success?(s.resolve(n.result),"subscribe"in s||this.commands.delete(n.id)):(s.reject(n.error),this.commands.delete(n.id)));break;case"pong":s?(s.resolve(),this.commands.delete(n.id)):console.warn(`Received unknown pong response ${n.id}`);break}})},this._handleClose=async()=>{const r=this.commands;if(this.commandId=1,this.oldSubscriptions=this.commands,this.commands=new Map,this.socket=void 0,r.forEach(s=>{"subscribe"in s||s.reject(Le(mt,"Connection lost"))}),this.closeRequested)return;this.fireEvent("disconnected");const i=Object.assign(Object.assign({},this.options),{setupRetry:0}),n=s=>{setTimeout(async()=>{if(!this.closeRequested)try{const o=await i.createSocket(i);this._setSocket(o)}catch(o){if(this._queuedMessages){const m=this._queuedMessages;this._queuedMessages=void 0;for(const P of m)P.reject&&P.reject(mt)}o===ht?this.fireEvent("reconnect-error",o):n(s+1)}},Math.min(s,5)*1e3)};this.suspendReconnectPromise&&(await this.suspendReconnectPromise,this.suspendReconnectPromise=void 0,this._queuedMessages=[]),n(0)},this.options=a,this.commandId=2,this.commands=new Map,this.eventListeners=new Map,this.closeRequested=!1,this._setSocket(e)}get connected(){return this.socket!==void 0&&this.socket.readyState==this.socket.OPEN}_setSocket(e){this.socket=e,this.haVersion=e.haVersion,e.addEventListener("message",this._handleMessage),e.addEventListener("close",this._handleClose);const a=this.oldSubscriptions;a&&(this.oldSubscriptions=void 0,a.forEach(i=>{"subscribe"in i&&i.subscribe&&i.subscribe().then(n=>{i.unsubscribe=n,i.resolve()})}));const r=this._queuedMessages;if(r){this._queuedMessages=void 0;for(const i of r)i.resolve()}this.fireEvent("ready")}addEventListener(e,a){let r=this.eventListeners.get(e);r||(r=[],this.eventListeners.set(e,r)),r.push(a)}removeEventListener(e,a){const r=this.eventListeners.get(e);if(!r)return;const i=r.indexOf(a);i!==-1&&r.splice(i,1)}fireEvent(e,a){(this.eventListeners.get(e)||[]).forEach(r=>r(this,a))}suspendReconnectUntil(e){this.suspendReconnectPromise=e}suspend(){if(!this.suspendReconnectPromise)throw new Error("Suspend promise not set");this.socket&&this.socket.close()}reconnect(e=!1){if(this.socket){if(!e){this.socket.close();return}this.socket.removeEventListener("message",this._handleMessage),this.socket.removeEventListener("close",this._handleClose),this.socket.close(),this._handleClose()}}close(){this.closeRequested=!0,this.socket&&this.socket.close()}async subscribeEvents(e,a){return this.subscribeMessage(e,Ce(a))}ping(){return this.sendMessagePromise(Me())}sendMessage(e,a){if(!this.connected)throw mt;if(this._queuedMessages){if(a)throw new Error("Cannot queue with commandId");this._queuedMessages.push({resolve:()=>this.sendMessage(e)});return}a||(a=this._genCmdId()),e.id=a,this.socket.send(JSON.stringify(e))}sendMessagePromise(e){return new Promise((a,r)=>{if(this._queuedMessages){this._queuedMessages.push({reject:r,resolve:async()=>{try{a(await this.sendMessagePromise(e))}catch(n){r(n)}}});return}const i=this._genCmdId();this.commands.set(i,{resolve:a,reject:r}),this.sendMessage(e,i)})}async subscribeMessage(e,a,r){this._queuedMessages&&await new Promise((n,s)=>{this._queuedMessages.push({resolve:n,reject:s})});let i;return await new Promise((n,s)=>{const o=this._genCmdId();i={resolve:n,reject:s,callback:e,subscribe:r?.resubscribe!==!1?()=>this.subscribeMessage(e,a):void 0,unsubscribe:async()=>{this.connected&&await this.sendMessagePromise(St(o)),this.commands.delete(o)}},this.commands.set(o,i);try{this.sendMessage(a,o)}catch{}}),()=>i.unsubscribe()}_genCmdId(){return++this.commandId}}const Ee=t=>t*1e3+Date.now();async function Pe(t,e,a){const r=typeof location<"u"&&location;if(r&&r.protocol==="https:"){const o=document.createElement("a");if(o.href=t,o.protocol==="http:"&&o.hostname!=="localhost")throw we}const i=new FormData;e!==null&&i.append("client_id",e),Object.keys(a).forEach(o=>{i.append(o,a[o])});const n=await fetch(`${t}/auth/token`,{method:"POST",credentials:"same-origin",body:i});if(!n.ok)throw n.status===400||n.status===403?ht:new Error("Unable to fetch tokens");const s=await n.json();return s.hassUrl=t,s.clientId=e,s.expires=Ee(s.expires_in),s}class De{constructor(e,a){this.data=e,this._saveTokens=a}get wsUrl(){return`ws${this.data.hassUrl.substr(4)}/api/websocket`}get accessToken(){return this.data.access_token}get expired(){return Date.now()>this.data.expires}async refreshAccessToken(){if(!this.data.refresh_token)throw new Error("No refresh_token");const e=await Pe(this.data.hassUrl,this.data.clientId,{grant_type:"refresh_token",refresh_token:this.data.refresh_token});e.refresh_token=this.data.refresh_token,this.data=e,this._saveTokens&&this._saveTokens(e)}async revoke(){if(!this.data.refresh_token)throw new Error("No refresh_token to revoke");const e=new FormData;e.append("token",this.data.refresh_token),await fetch(`${this.data.hassUrl}/auth/revoke`,{method:"POST",credentials:"same-origin",body:e}),this._saveTokens&&this._saveTokens(null)}}function Oe(t,e){return new De({hassUrl:t,clientId:null,expires:Date.now()+1e11,refresh_token:"",access_token:e,expires_in:1e11})}const Se=t=>{let e=[];function a(i){let n=[];for(let s=0;s<e.length;s++)e[s]===i?i=null:n.push(e[s]);e=n}function r(i,n){t=n?i:Object.assign(Object.assign({},t),i);let s=e;for(let o=0;o<s.length;o++)s[o](t)}return{get state(){return t},action(i){function n(s){r(s,!1)}return function(){let s=[t];for(let m=0;m<arguments.length;m++)s.push(arguments[m]);let o=i.apply(this,s);if(o!=null)return o instanceof Promise?o.then(n):n(o)}},setState:r,clearState(){t=void 0},subscribe(i){return e.push(i),()=>{a(i)}}}},Be=5e3,Bt=(t,e,a,r,i={unsubGrace:!0})=>{if(t[e])return t[e];let n=0,s,o,m=Se();const P=()=>{if(!a)throw new Error("Collection does not support refresh");return a(t).then(et=>m.setState(et,!0))},O=()=>P().catch(et=>{if(t.connected)throw et}),K=()=>{if(o!==void 0){clearTimeout(o),o=void 0;return}r&&(s=r(t,m)),a&&(t.addEventListener("ready",O),O()),t.addEventListener("disconnected",it)},R=()=>{o=void 0,s&&s.then(et=>{et()}),m.clearState(),t.removeEventListener("ready",P),t.removeEventListener("disconnected",it)},tt=()=>{o=setTimeout(R,Be)},it=()=>{o&&(clearTimeout(o),R())};return t[e]={get state(){return m.state},refresh:P,subscribe(et){n++,n===1&&K();const ft=m.subscribe(et);return m.state!==void 0&&setTimeout(()=>et(m.state),0),()=>{ft(),n--,n||(i.unsubGrace?tt():R())}}},t[e]},Re=t=>t.sendMessagePromise($e()),ze=(t,e,a,r,i,n)=>t.sendMessagePromise(_e(e,a,r,i,n));function Ie(t,e){const a=Object.assign({},t.state);if(e.a)for(const r in e.a){const i=e.a[r];let n=new Date(i.lc*1e3).toISOString();a[r]={entity_id:r,state:i.s,attributes:i.a,context:typeof i.c=="string"?{id:i.c,parent_id:null,user_id:null}:i.c,last_changed:n,last_updated:i.lu?new Date(i.lu*1e3).toISOString():n}}if(e.r)for(const r of e.r)delete a[r];if(e.c)for(const r in e.c){let i=a[r];if(!i){console.warn("Received state update for unknown entity",r);continue}i=Object.assign({},i);const{"+":n,"-":s}=e.c[r],o=n?.a||s?.a,m=o?Object.assign({},i.attributes):i.attributes;if(n&&(n.s!==void 0&&(i.state=n.s),n.c&&(typeof n.c=="string"?i.context=Object.assign(Object.assign({},i.context),{id:n.c}):i.context=Object.assign(Object.assign({},i.context),n.c)),n.lc?i.last_updated=i.last_changed=new Date(n.lc*1e3).toISOString():n.lu&&(i.last_updated=new Date(n.lu*1e3).toISOString()),n.a&&Object.assign(m,n.a)),s?.a)for(const P of s.a)delete m[P];o&&(i.attributes=m),a[r]=i}t.setState(a,!0)}const Ne=(t,e)=>t.subscribeMessage(a=>Ie(e,a),{type:"subscribe_entities"});function je(t,e){const a=t.state;if(a===void 0)return;const{entity_id:r,new_state:i}=e.data;if(i)t.setState({[i.entity_id]:i});else{const n=Object.assign({},a);delete n[r],t.setState(n,!0)}}async function Ue(t){const e=await Re(t),a={};for(let r=0;r<e.length;r++){const i=e[r];a[i.entity_id]=i}return a}const We=(t,e)=>t.subscribeEvents(a=>je(e,a),"state_changed"),Fe=t=>Qt(t.haVersion,2022,4,0)?Bt(t,"_ent",void 0,Ne):Bt(t,"_ent",Ue,We),Ze=(t,e)=>Fe(t).subscribe(e);async function qe(t){const e=Object.assign({setupRetry:0,createSocket:He},t),a=await e.createSocket(e);return new Ve(a,e)}const Ct="pine3_home.token",Ge="/api/pine3_home";function Ke(){try{return localStorage.getItem(Ct)}catch{return null}}function Rt(t){try{t?localStorage.setItem(Ct,t):localStorage.removeItem(Ct)}catch{}}async function te(t,e){const a=await fetch(`${Ge}${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e??{})}),r=await a.json().catch(()=>({}));if(!a.ok)throw new Error(r.error??r.message??`HTTP ${a.status}`);return r}const Ye=()=>te("/pair/start"),Je=t=>te("/pair/status",{pair_id:t.pair_id,secret:t.secret});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=Ht(class extends Vt{constructor(t){if(super(t),t.type!==Tt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const a=t.element.classList;for(const r of this.st)r in e||(a.remove(r),this.st.delete(r));for(const r in e){const i=!!e[r];i===this.st.has(r)||this.nt?.has(r)||(i?(a.add(r),this.st.add(r)):(a.remove(r),this.st.delete(r)))}return At}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee="important",Xe=" !"+ee,Qe=Ht(class extends Vt{constructor(t){if(super(t),t.type!==Tt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,a)=>{const r=t[a];return r==null?e:e+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:a}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?a.removeProperty(r):a[r]=null);for(const r in e){const i=e[r];if(i!=null){this.ft.add(r);const n=typeof i=="string"&&i.endsWith(Xe);r.includes("-")||n?a.setProperty(r,n?i.slice(0,-11):i,n?ee:""):a[r]=i}}return At}});var ta="M10 10V12H8V10H10M16 12V10H14V12H16M21 14V22H3V14H4V10C4 5.58 7.58 2 12 2S20 5.58 20 10V14H21M7 16H5V20H7V16M11 16H9V20H11V16M11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08M13 14H18V10C18 7.03 15.84 4.56 13 4.08V14M15 16H13V20H15V16M19 16H17V20H19V16Z",ea="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z",aa="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",ra="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",ia="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",na="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z",sa="M3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8V19H19V17H15V19H13V8H5V19H3V8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6M16 10.5V11H18V10.5C18 10.22 17.78 10 17.5 10H16.5C16.22 10 16 10.22 16 10.5M16 14.5V15H18V14.5C18 14.22 17.78 14 17.5 14H16.5C16.22 14 16 14.22 16 14.5Z",oa="M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z",ca="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z",la="M8.66,13.07C6.92,13.07 5.5,11.66 5.5,9.93C5.5,9.22 5.76,8.54 6.19,8C5.77,7.46 5.5,6.78 5.5,6.07C5.5,4.34 6.93,2.93 8.66,2.93L9.09,2.96C9.56,1.81 10.69,1 12,1C13.31,1 14.44,1.81 14.91,2.96L15.34,2.93C17.07,2.93 18.5,4.34 18.5,6.07C18.5,6.78 18.24,7.46 17.81,8C18.23,8.54 18.5,9.22 18.5,9.93C18.5,11.66 17.07,13.07 15.34,13.07L14.91,13.04C14.44,14.19 13.31,15 12,15C10.69,15 9.56,14.19 9.09,13.04L8.66,13.07M12,13C12.62,13 13.12,12.5 13.14,11.9L13.03,10.81C12.71,10.93 12.36,11 12,11C11.64,11 11.3,10.93 11,10.81L10.86,11.9C10.88,12.5 11.38,13 12,13M15.34,11.07C15.97,11.07 16.5,10.56 16.5,9.92C16.5,9.5 16.23,9.08 15.83,8.89L14.95,8.47C14.83,9.21 14.44,9.85 13.89,10.3L14.7,10.87C14.88,11 15.1,11.07 15.34,11.07M14.69,5.13L13.87,5.69C14.43,6.14 14.82,6.78 14.94,7.5L15.82,7.1C16.23,6.9 16.5,6.5 16.5,6.07C16.5,5.44 15.97,4.93 15.34,4.93C15.11,4.93 14.89,5 14.69,5.13M12,3C11.38,3 10.88,3.5 10.86,4.1L11,5.19C11.3,5.07 11.64,5 12,5C12.36,5 12.71,5.07 13.03,5.19L13.14,4.1C13.12,3.5 12.62,3 12,3M8.66,4.93C8.03,4.93 7.5,5.44 7.5,6.07C7.5,6.5 7.77,6.9 8.17,7.1L9.05,7.5C9.17,6.78 9.56,6.14 10.11,5.69L9.3,5.13C9.12,5 8.9,4.93 8.66,4.93M8.17,8.9C7.77,9.1 7.5,9.5 7.5,9.92C7.5,10.55 8.03,11.06 8.66,11.06C8.89,11.06 9.11,11 9.31,10.86L10.12,10.31C9.56,9.86 9.17,9.22 9.05,8.5L8.17,8.9M12,22A9,9 0 0,1 3,13A9,9 0 0,1 12,22A9,9 0 0,1 21,13A9,9 0 0,1 12,22M14.44,19.56C16.34,18.85 17.85,17.34 18.56,15.44C16.66,16.14 15.15,17.66 14.44,19.56M5.44,15.44C6.15,17.34 7.66,18.85 9.56,19.56C8.86,17.66 7.34,16.15 5.44,15.44Z",ua="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",da="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z",ha="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",fa="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",pa="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",ga="M19,13H5V11H19V13Z",va="M14,19H18V5H14M6,19H10V5H6V19Z",ma="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z",ba="M8,5.14V19.14L19,12.14L8,5.14Z",ya="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",wa="M2,15C3.67,14.25 5.33,13.5 7,13.17V5A3,3 0 0,1 10,2C11.31,2 12.42,2.83 12.83,4H10A1,1 0 0,0 9,5V6H14V5A3,3 0 0,1 17,2C18.31,2 19.42,2.83 19.83,4H17A1,1 0 0,0 16,5V14.94C18,14.62 20,13 22,13V15C19.78,15 17.56,17 15.33,17C13.11,17 10.89,15 8.67,15C6.44,15 4.22,16 2,17V15M14,8H9V10H14V8M14,12H9V13C10.67,13.16 12.33,14.31 14,14.79V12M2,19C4.22,18 6.44,17 8.67,17C10.89,17 13.11,19 15.33,19C17.56,19 19.78,17 22,17V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V19Z",ka="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",xa="M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z",$a="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z",_a="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14",Ca="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z",Ma="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z",La="M16,18H18V6H16M6,18L14.5,12L6,6V18Z",Aa="M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z",Ta="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z",Ha="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z",Va="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12",Ea="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",Pa="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",Da="M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z";const D={home:da,therm:Pa,bulb:ha,shield:_a,spark:na,play:ba,pause:va,next:La,minus:ga,plus:ya,close:ia,back:ra,lock:fa,unlock:pa,power:ka,room:Ea,edit:ma,resize:xa,check:aa,restore:$a},Oa={"mdi:shower":Ca,"mdi:silverware-fork-knife":Ma,"mdi:table-chair":Ha,"mdi:sofa":Aa,"mdi:bed":ea,"mdi:teddy-bear":Va,"mdi:desk":sa,"mdi:garage":ua,"mdi:flower":la,"mdi:balcony":ta,"mdi:pool":wa,"mdi:washing-machine":Da,"mdi:door":oa,"mdi:dumbbell":ca,"mdi:stairs":Ta},Sa=t=>t&&Oa[t]||D.room;let Ba=0;const ae=t=>`${t}${++Ba}`,X=t=>j`<svg class="art" viewBox="0 0 60 60" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">${t}</svg>`;function zt(t,e="#ffcf8a"){const a=ae("l");return X(j`<defs><radialGradient id=${a} cx="36" cy="40" r="28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${e} stop-opacity=${t/100*.85}/><stop offset="1" stop-color=${e} stop-opacity="0"/></radialGradient></defs>
    <circle cx="36" cy="40" r="28" fill=${`url(#${a})`}/><line x1="36" y1="0" x2="36" y2="22" stroke="#6b717a" stroke-width=".8"/>
    <path d="M25 34 L47 34 L41.5 21 L30.5 21 Z" fill=${t?"#d9c6a3":"#4a4f57"}/><ellipse cx="36" cy="34.5" rx="11" ry="1.7" fill=${t?"#fff2d6":"#3a3e45"}/>`)}function Ra(t){const e=Math.max(0,Math.min(100,100-t)),a=Array.from({length:Math.round(e/11)},(r,i)=>j`<line x1="20" x2="54" y1=${12+i*4.2} y2=${12+i*4.2} stroke="#8796a6" stroke-width=".5"/>`);return X(j`<rect x="20" y="10" width="34" height="46" rx="2" fill="#2d4a66" opacity=".6"/><circle cx="44" cy="22" r="5" fill="#ffd27a" opacity=".5"/>
    <rect x="20" y="10" width="34" height=${(46*e/100).toFixed(1)} fill="#a9b6c4"/>${a}<rect x="18" y="8" width="38" height="3" rx="1" fill="#5d646e"/>`)}function za(t,e="#ff9f43"){const a=t==null?0:Math.max(0,Math.min(1,(t-16)/14));return X(j`<circle cx="40" cy="36" r="17" fill="#2a2e34" stroke="#454a52"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="2.6" stroke-dasharray=${`${(a*81).toFixed(1)} 82`} transform="rotate(135 40 36)" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="7" opacity=".08"/>`)}function Ia(t){return X(j`<rect x="28" y="12" width="24" height="44" rx="3" fill="#3a3f46"/><rect x="31" y="15" width="18" height="38" rx="2" fill="#2b2f35"/>
    <circle cx="34" cy="34" r="1.6" fill=${t?"#ff8a5c":"#5be3a0"}/><rect x=${t?44:38} y="33.2" width="6" height="1.6" rx=".8" fill="#8a919b"/>`)}function Na(t){return X(j`<ellipse cx="40" cy="50" rx="16" ry="4" fill="#000" opacity=".3"/><ellipse cx="40" cy="44" rx="15" ry="6" fill="#d8dce1"/><rect x="25" y="38" width="30" height="6" fill="#d8dce1"/>
    <ellipse cx="40" cy="38" rx="15" ry="6" fill="#eef0f3"/><circle cx="40" cy="36" r="3.4" fill=${t?"#5be3a0":"#c4c9cf"}/>
    ${t?j`<path d="M10 50 Q20 46 26 48" stroke="#5be3a0" stroke-width=".8" fill="none" stroke-dasharray="1.2 1.2" opacity=".8"/>`:null}`)}function ja(t){if(t)return X(j`<image href=${t} x="26" y="14" width="30" height="30" preserveAspectRatio="xMidYMid slice" transform="rotate(6 41 29)"/>`);const e=ae("a");return X(j`<defs><linearGradient id=${e} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3a35f"/><stop offset=".5" stop-color="#d96d6d"/><stop offset=".75" stop-color="#5c4a8a"/><stop offset="1" stop-color="#2e2a54"/></linearGradient></defs>
    <rect x="26" y="14" width="30" height="30" rx="3" fill=${`url(#${e})`} transform="rotate(6 41 29)"/><circle cx="46" cy="22" r="3" fill="#ffe7b8" opacity=".9" transform="rotate(6 41 29)"/>`)}function It(t){const e=!/rain|pour|snow|fog|cloudy$|lightning|night/.test(t)||t==="partlycloudy",a=t!=="sunny"&&t!=="clear-night",r=/rain|pour|lightning/.test(t),i=t==="clear-night";return X(j`${e?j`<circle cx="44" cy="20" r="8" fill="#ffd27a" opacity=".85"/>`:null}
    ${i?j`<path d="M46 12a9 9 0 1 0 6 14 7 7 0 1 1-6-14z" fill="#e8e3c8" opacity=".9"/>`:null}
    ${a?j`<path d="M28 36h20a6 6 0 0 0 .6-12 9 9 0 0 0-17 2.5A5 5 0 0 0 28 36z" fill="#cfd6df"/>`:null}
    ${r?j`<path d="M32 40l-2 6M38 40l-2 6M44 40l-2 6" stroke="#6cc8ff" stroke-width="1.4" stroke-linecap="round"/>`:null}`)}function Ua(t){return X(j`<g transform="translate(40 34)"><g class=${t?"spin":""}>
    ${[0,120,240].map(e=>j`<ellipse cx="0" cy="-8" rx="4" ry="8" fill="#cfd6df" opacity=".85" transform=${`rotate(${e})`}/>`)}
    </g><circle r="2.6" fill="#8a919b"/></g>`)}function Wa(t){return X(j`<rect x="28" y="20" width="24" height="24" rx="6" fill="#3a3f46"/><circle cx="36" cy="32" r="1.8" fill="#1b1e22"/><circle cx="44" cy="32" r="1.8" fill="#1b1e22"/>
    <circle cx="48" cy="24" r="1.4" fill=${t?"#5be3a0":"#5d646e"}/>`)}function Fa(t,e){let a="M0 26 L100 26";if(e&&e.length>1){const r=Math.min(...e),n=Math.max(...e)-r||1;a=e.map((o,m)=>[m/(e.length-1)*100,34-(o-r)/n*26]).map(([o,m],P)=>`${P?"L":"M"}${o.toFixed(1)} ${m.toFixed(1)}`).join(" ")}return j`<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d=${`${a} V40 H0Z`} fill=${t} opacity=".12"/><path d=${a} fill="none" stroke=${t} stroke-width="1.4" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity=".85"/></svg>`}function Za(){return X(j`<circle cx="42" cy="34" r="14" fill="#b49cff" opacity=".18"/><path d="M42 22l2.6 7.4L52 32l-7.4 2.6L42 42l-2.6-7.4L32 32l7.4-2.6z" fill="#d9ccff"/><path d="M52 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#ffe2b0"/>`)}const Z=t=>t.split(".")[0],lt=t=>!!t&&!["off","unavailable","unknown","closed","locked","idle","standby","docked"].includes(t.state),qa=t=>!t||t.state==="unavailable";function Mt(t){if(!t||t.state!=="on")return 0;const e=t.attributes.brightness;return e==null?100:Math.max(1,Math.round(e/255*100))}function bt(t){const e=t?.attributes.rgb_color,a=t?.attributes.color_mode;if(e&&a&&!["color_temp","brightness","onoff","white"].includes(a))return`rgb(${e.join(",")})`;const r=t?.attributes.color_temp_kelvin;return r?r>=5e3?"#e6f0ff":r>=3800?"#fff1d6":"#ffcf8a":"#ffcf8a"}const Lt=t=>t.devices.filter(e=>Z(e.id)==="light"&&!e.hidden).map(e=>e.id);function Ga(t,e){const a=t.filter(r=>e[r]?.state==="on");return a.length?Math.round(a.reduce((r,i)=>r+Mt(e[i]),0)/a.length):0}const Nt={light:"light",climate:"climate",lock:"lock",cover:"cover",media_player:"media",vacuum:"vacuum",fan:"fan",switch:"switch",input_boolean:"switch",outlet:"outlet",sensor:"sensor",binary_sensor:"binary",camera:"camera"};function Et(t,e){const a=Nt[t.kind??Z(t.id)]??Nt[Z(t.id)];if(!a)return null;const r=a==="climate"?"l":a==="media"||a==="camera"?"m":"s";return{key:t.id,kind:a,size:r,name:t.name,sub:e?.name,entity:t.id,room:e}}function Ka(t,e){const a=t.rooms.filter(s=>!s.hidden),r=a.flatMap(s=>s.devices.filter(o=>!o.hidden).map(o=>({d:o,r:s}))),i=s=>r.filter(({d:o})=>(o.kind??Z(o.id))===s),n=[];return a.forEach((s,o)=>{const m=Lt(s);m.length&&n.push({key:`room-${s.id}`,kind:"room-lights",size:o===0?"m":"s",name:s.name,entities:m,room:s})}),i("climate").forEach(({d:s,r:o},m)=>n.push({key:s.id,kind:"climate",size:m===0?"l":"m",name:s.name,sub:o.name,entity:s.id,room:o})),t.weather&&e[t.weather]&&n.push({key:t.weather,kind:"weather",size:"l",name:"Tempo",entity:t.weather}),i("lock").forEach(({d:s,r:o})=>n.push({key:s.id,kind:"lock",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),i("cover").forEach(({d:s,r:o})=>n.push({key:s.id,kind:"cover",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),i("media_player").sort((s,o)=>+(e[o.d.id]?.state==="playing")-+(e[s.d.id]?.state==="playing")).slice(0,2).forEach(({d:s,r:o})=>n.push({key:s.id,kind:"media",size:"m",name:s.name,sub:o.name,entity:s.id,room:o})),i("vacuum").forEach(({d:s,r:o})=>n.push({key:s.id,kind:"vacuum",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),t.scenes.length&&n.push({key:"scenes",kind:"scenes",size:"m",name:"Cenas",entities:t.scenes.slice(0,6)}),n}const Ya=[{id:"all",name:"Tudo",kinds:[]},{id:"lights",name:"Luzes",kinds:["light"]},{id:"climate",name:"Clima",kinds:["climate","fan"]},{id:"covers",name:"Estores",kinds:["cover"]},{id:"media",name:"Média",kinds:["media"]},{id:"other",name:"Outros",kinds:["switch","outlet","lock","vacuum","sensor","binary","camera"]}];function Ja(t){return t.devices.filter(e=>!e.hidden).map(e=>Et(e,t)).filter(e=>!!e)}function gt(t,e){const a=t.rooms.filter(o=>!o.hidden).flatMap(o=>o.devices),r=a.filter(o=>Z(o.id)==="light"&&e[o.id]?.state==="on").length,i=a.filter(o=>Z(o.id)==="lock"&&e[o.id]?.state==="unlocked").length,n=a.filter(o=>Z(o.id)==="binary_sensor"&&["door","window","garage_door","opening"].includes(e[o.id]?.attributes.device_class)&&e[o.id]?.state==="on").length,s=t.rooms.map(o=>o.temperature?parseFloat(e[o.temperature]?.state??""):NaN).filter(o=>!Number.isNaN(o));return{lightsOn:r,alerts:i+n,alertText:i?`${i} destrancada${i>1?"s":""}`:n?`${n} aberta${n>1?"s":""}`:"tudo fechado",temp:s.length?`${Math.round(Math.min(...s))}–${Math.round(Math.max(...s))}°`:null}}const rt=(t,e=1)=>t.toLocaleString("pt-PT",{maximumFractionDigits:e}),Xa=["door","window","garage_door","opening"],re=t=>t.rooms.filter(e=>!e.hidden).flatMap(e=>e.devices.filter(a=>!a.hidden).map(a=>({d:a,r:e})));function Qa(t,e){const a=[],r=re(t);return r.filter(({d:i})=>Z(i.id)==="climate").forEach(({d:i,r:n})=>a.push({key:i.id,kind:"climate",size:"l",name:i.name,sub:n.name,entity:i.id,room:n})),t.weather&&e[t.weather]&&a.push({key:t.weather,kind:"weather",size:"l",name:"Tempo",entity:t.weather}),r.filter(({d:i})=>Z(i.id)==="fan").forEach(({d:i,r:n})=>a.push({key:i.id,kind:"fan",size:"s",name:i.name,sub:n.name,entity:i.id,room:n})),t.rooms.filter(i=>!i.hidden).forEach(i=>{i.temperature&&e[i.temperature]&&a.push({key:`t-${i.id}`,kind:"sensor",size:"s",name:i.name,sub:"temperatura",entity:i.temperature,room:i}),i.humidity&&e[i.humidity]&&a.push({key:`h-${i.id}`,kind:"sensor",size:"s",name:i.name,sub:"humidade",entity:i.humidity,room:i})}),a}function tr(t,e){const a=re(t),r=a.filter(({d:s})=>Z(s.id)==="lock"),i=a.filter(({d:s})=>Z(s.id)==="binary_sensor"&&[...Xa,"motion","occupancy","presence","moisture","smoke","gas"].includes(e[s.id]?.attributes.device_class));i.sort((s,o)=>+(e[o.d.id]?.state==="on")-+(e[s.d.id]?.state==="on"));const n=a.filter(({d:s})=>Z(s.id)==="camera");return[...r.map(({d:s,r:o})=>({key:s.id,kind:"lock",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),...i.map(({d:s,r:o})=>({key:s.id,kind:"binary",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),...n.map(({d:s,r:o})=>({key:s.id,kind:"camera",size:"m",name:s.name,sub:o.name,entity:s.id,room:o}))]}function er(t,e){return[...t.scenes,...t.scripts].filter(a=>e[a]).map(a=>({key:a,kind:"scene",size:"s",name:e[a].attributes.friendly_name??a,entity:a}))}const ar=["climate","weather","media","scenes","camera"],ie=t=>ar.includes(t)?["m","l","xl"]:["s","m","l"];function rr(t,e){for(const a of t.rooms){const r=a.devices.find(i=>i.id===e);if(r)return Et(r,a)}return null}function jt(t,e,a){if(!e)return t;const r=new Map(t.map(o=>[o.key,o])),i=new Set(e.hidden),n=[],s=new Set;for(const o of e.items){if(s.has(o.key)||i.has(o.key))continue;const m=r.get(o.key)??rr(a,o.key);if(!m)continue;s.add(o.key);const P=o.size&&ie(m.kind).includes(o.size)?o.size:m.size;n.push({...m,size:P})}for(const o of t)!s.has(o.key)&&!i.has(o.key)&&n.push(o);return n}function ir(t,e,a){const r=new Set(e.items.map(s=>s.key)),i=t.filter(s=>e.hidden.includes(s.key)),n=a.rooms.filter(s=>!s.hidden).flatMap(s=>s.devices.filter(o=>!o.hidden).map(o=>Et(o,s))).filter(s=>!!s&&!r.has(s.key)&&!i.some(o=>o.key===s.key)&&!t.some(o=>o.key===s.key&&!e.hidden.includes(o.key)));return[...i,...n]}const nr=Kt`
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
`;var sr=Object.defineProperty,or=Object.getOwnPropertyDescriptor,N=(t,e,a,r)=>{for(var i=r>1?void 0:r?or(e,a):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=(r?s(e,a,i):s(i))||i);return r&&i&&sr(e,a,i),i};const cr=550,yt=10,wt={heat:"Calor",cool:"Frio",heat_cool:"Auto",auto:"Auto",dry:"Seco",fan_only:"Ventilar",off:"Off"},Ut={heating:"a aquecer",cooling:"a arrefecer",idle:"em pausa",off:"desligado",drying:"a secar",fan:"a ventilar"},kt={"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",hail:"granizo",lightning:"trovoada","lightning-rainy":"trovoada e chuva",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve","snowy-rainy":"chuva e neve",sunny:"sol",windy:"vento","windy-variant":"vento",exceptional:"excecional"},Wt={cleaning:"a limpar",docked:"na base",returning:"a voltar à base",paused:"em pausa",idle:"parado",error:"erro"},lr={open:"aberto",closed:"fechado",opening:"a abrir",closing:"a fechar"},xt={yellow:"amarelo",orange:"laranja",red:"vermelho"},Ft={yellow:1,orange:2,red:3},ur=10*6e4,dr=10*6e4,Zt=[{id:"@clima",name:"Clima",icon:D.therm},{id:"@seguranca",name:"Segurança",icon:D.shield},{id:"@cenas",name:"Cenas",icon:D.spark}],hr=["#ffcf8a","#fff1d6","#ff8a5c","#ff6fae","#b49cff","#6cc8ff","#5be3a0"],S=t=>j`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`;let I=class extends Yt{constructor(){super(...arguments),this.entities={},this.screenName="",this.canEdit=!1,this.ambient=!1,this.wallpanel=!1,this.editing=null,this.draft=null,this.moving=null,this.saving=!1,this.lastReorder=0,this.view="home",this.category="all",this.sheet=null,this.drag=null,this.now=new Date,this.hourly=[],this.warnings=[],this.history={},this.flash=null,this.historyAt={},this.historyWanted=new Set,this.ipmaAt=0,this.ipmaArea=null,this.forecastAt=0}connectedCallback(){super.connectedCallback(),this.clock=window.setInterval(()=>this.now=new Date,1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clock)}willUpdate(t){t.has("home")&&this.view!=="home"&&!this.view.startsWith("@")&&!this.home.rooms.some(a=>a.id===this.view)&&(this.view="home");const e=this.home?.settings?.ipma_area??null;(e!==this.ipmaArea||e&&Date.now()-this.ipmaAt>dr)&&(this.ipmaArea=e,this.ipmaAt=Date.now(),e&&this.conn?this.loadWarnings(e):this.warnings=[]),this.home?.weather&&Date.now()-this.forecastAt>30*6e4&&this.conn&&(this.forecastAt=Date.now(),this.loadForecast(this.home.weather))}async loadForecast(t){try{const e=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"hourly"},target:{entity_id:t},return_response:!0});this.hourly=(e.response?.[t]?.forecast??[]).slice(1,7).filter((a,r)=>r%2===0)}catch{this.hourly=[]}}updated(){const t=Date.now(),e=[...this.historyWanted].filter(a=>t-(this.historyAt[a]??0)>ur);this.historyWanted.clear(),e.length&&this.conn&&(e.forEach(a=>this.historyAt[a]=t),this.loadHistory(e))}async loadHistory(t){try{const e=await this.conn.sendMessagePromise({type:"history/history_during_period",start_time:new Date(Date.now()-864e5).toISOString(),entity_ids:t,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),a={...this.history};for(const r of t){const i=(e[r]??[]).map(s=>parseFloat(s.s)).filter(s=>!Number.isNaN(s)),n=Math.max(1,Math.ceil(i.length/48));a[r]=i.filter((s,o)=>o%n===0||o===i.length-1)}this.history=a}catch(e){console.warn("Pine3 Home: history",e)}}async loadWarnings(t){try{const e=await this.conn.sendMessagePromise({type:"pine3_home/ipma_warnings",area:t}),a=Date.now();this.warnings=e.warnings.filter(r=>!r.endTime||new Date(r.endTime).getTime()>a).sort((r,i)=>(Ft[i.awarenessLevelID]??0)-(Ft[r.awarenessLevelID]??0))}catch{}}call(t,e,a,r={}){ze(this.conn,t,e,r,{entity_id:a}).catch(i=>console.warn("Pine3 Home:",i))}toggle(t){const e=Z(t),a=this.entities[t];if(e==="lock")return this.call("lock",a?.state==="locked"?"unlock":"lock",t);if(e==="cover")return this.call("cover","toggle",t);if(e==="vacuum")return this.call("vacuum",a?.state==="cleaning"?"return_to_base":"start",t);if(e==="media_player")return this.call("media_player","media_play_pause",t);if(e==="scene"||e==="script")return this.call(e,"turn_on",t);this.call(e==="input_boolean"?"input_boolean":"homeassistant","toggle",t)}level(t){if(this.drag?.key===t.key)return this.drag.value;if(t.kind==="room-lights")return Ga(t.entities,this.entities);const e=this.entities[t.entity];return t.kind==="light"?Mt(e):t.kind==="cover"?e?.attributes.current_position??(e?.state==="open"?100:0):null}setLevel(t,e){if(e=Math.round(e),t.kind==="room-lights"||t.kind==="light"){const a=t.kind==="light"?t.entity:t.entities;e<=0?this.call("light","turn_off",a):this.call("light","turn_on",a,{brightness_pct:e})}else t.kind==="cover"&&this.call("cover","set_cover_position",t.entity,{position:e})}slidable(t){if(t.kind==="room-lights")return!0;const e=this.entities[t.entity??""];return e?t.kind==="light"?(e.attributes.supported_color_modes??[]).some(a=>a!=="onoff"):t.kind==="cover"?(e.attributes.supported_features&4)===4:!1:!1}down(t,e){if(t.target.closest("button"))return;if(this.editing){this.press={key:e.key,x:t.clientX,y:t.clientY,rect:t.currentTarget.getBoundingClientRect(),dragging:!1,long:!1,timer:0};return}const a=t.currentTarget,r={key:e.key,x:t.clientX,y:t.clientY,rect:a.getBoundingClientRect(),dragging:!1,long:!1,timer:0};r.timer=window.setTimeout(()=>{r.long=!0,this.longPress(e)},cr),this.press=r}move(t,e){const a=this.press;if(!a||a.key!==e.key||a.long)return;if(this.editing)return this.moveInEdit(t,a);const r=t.clientX-a.x,i=t.clientY-a.y;if(!a.dragging){if(Math.abs(i)>yt&&Math.abs(i)>Math.abs(r))return this.cancel();if(Math.abs(r)<yt||!this.slidable(e))return;a.dragging=!0,clearTimeout(a.timer),t.currentTarget.setPointerCapture(t.pointerId)}const n=Math.max(0,Math.min(100,(t.clientX-a.rect.left)/a.rect.width*100));this.drag={key:e.key,value:Math.round(n)}}up(t,e){const a=this.press;if(!(!a||a.key!==e.key)){if(clearTimeout(a.timer),this.press=void 0,this.editing){this.moving=null;return}if(!a.long){if(a.dragging){const r=this.drag?.value??0;this.setLevel(e,r),window.setTimeout(()=>{this.drag?.key===e.key&&(this.drag=null)},1500);return}this.tap(e)}}}cancel(){this.press&&clearTimeout(this.press.timer),this.press=void 0,this.moving=null}reset(){this.stopEdit(),this.sheet=null,this.drag=null,this.view="home",this.category="all",this.main()?.scrollTo({top:0})}get busy(){return!!this.editing||!!this.press}main(){return this.renderRoot?.querySelector(".main")??null}arranged(t,e){const a=this.editing===t&&this.draft?this.draft:this.dashboard.layouts?.[t];return jt(e,a,this.home)}startEdit(t,e){const a=this.dashboard.layouts?.[t];this.draft={items:jt(e,a,this.home).map(r=>({key:r.key,size:r.size})),hidden:[...a?.hidden??[]]},this.editing=t,this.category="all",this.sheet=null}stopEdit(){this.editing=null,this.draft=null,this.moving=null}async saveLayout(t){const e=this.editing;if(e){this.saving=!0;try{const a=await this.conn.sendMessagePromise({type:"pine3_home/dashboards/layout",dashboard_id:this.dashboard.id,view:e,layout:t});this.dashboard={...this.dashboard,layouts:a.dashboard.layouts},this.stopEdit()}catch(a){console.warn("Pine3 Home: layout",a),alert("Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel.")}finally{this.saving=!1}}}moveInEdit(t,e){if(!e.dragging){if(Math.hypot(t.clientX-e.x,t.clientY-e.y)<yt)return;e.dragging=!0,this.moving=e.key,t.currentTarget.setPointerCapture(t.pointerId)}const a=this.renderRoot.elementsFromPoint(t.clientX,t.clientY).map(o=>o.closest?.(".w")).find(o=>o&&o.dataset.key&&o.dataset.key!==e.key);if(!a||!this.draft||Date.now()-this.lastReorder<180)return;const r=[...this.draft.items],i=r.findIndex(o=>o.key===e.key),n=r.findIndex(o=>o.key===a.dataset.key);if(i<0||n<0)return;const[s]=r.splice(i,1);r.splice(n,0,s),this.lastReorder=Date.now(),this.draft={...this.draft,items:r}}hideWidget(t){this.draft&&(this.draft={items:this.draft.items.filter(e=>e.key!==t),hidden:[...this.draft.hidden,t]})}resizeWidget(t){if(!this.draft)return;const e=ie(t.kind),a=e[(e.indexOf(t.size)+1)%e.length];this.draft={...this.draft,items:this.draft.items.map(r=>r.key===t.key?{...r,size:a}:r)}}addWidget(t){this.draft&&(this.draft={items:[...this.draft.items,{key:t.key,size:t.size}],hidden:this.draft.hidden.filter(e=>e!==t.key)})}editControls(t,e){return this.editing===t?$`<button class="pill" @click=${()=>this.stopEdit()}>Cancelar</button>
        ${this.dashboard.layouts?.[t]?$`<button class="pill" ?disabled=${this.saving} @click=${()=>this.saveLayout(null)}>${S(D.restore)} Repor</button>`:T}
        <button class="pill pri" ?disabled=${this.saving} @click=${()=>this.saveLayout(this.draft)}>${S(D.check)} Concluído</button>`:this.canEdit&&!this.editing?$`<button class="pill icon" aria-label="Editar esta vista" title="Editar" @click=${()=>this.startEdit(t,e)}>${S(D.edit)}</button>`:T}renderPicker(t,e){if(this.editing!==t||!this.draft)return T;const a=ir(e,this.draft,this.home);return $`<div class="picker">
      <div class="phd"><span class="k">Adicionar · toca para pôr no fim</span><span class="k">Arrasta os cartões para mudar a ordem</span></div>
      <div class="prow">${a.length?a.map(r=>$`<button class="pk" @click=${()=>this.addWidget(r)}><span>${r.name}</span><em>${r.room?.name??""}</em></button>`):$`<span class="k">Já está tudo nesta vista.</span>`}</div>
    </div>`}tap(t){switch(t.kind){case"room-lights":{const e=t.entities.some(a=>this.entities[a]?.state==="on");return this.call("light",e?"turn_off":"turn_on",t.entities)}case"climate":case"weather":case"sensor":case"binary":case"scenes":t.entity&&(this.sheet=t.entity);return;case"scene":this.call(Z(t.entity),"turn_on",t.entity),this.flash=t.key,window.setTimeout(()=>{this.flash===t.key&&(this.flash=null)},1200);return;case"camera":this.sheet=t.entity;return;case"lock":this.entities[t.entity]?.state!=="locked"?this.call("lock","lock",t.entity):this.sheet=t.entity;return;default:t.entity&&this.toggle(t.entity)}}longPress(t){if(t.kind==="room-lights"&&t.room){this.openRoom(t.room.id);return}t.entity&&(this.sheet=t.entity)}openRoom(t){this.editing&&this.editing!==t&&this.stopEdit(),this.view=t,this.category="all",this.sheet=null}get dark(){return this.dashboard.theme==="claro"?!1:this.dashboard.theme==="auto"?this.entities["sun.sun"]?.state!=="above_horizon":!0}render(){if(!this.home)return T;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(a=>a.id===this.view),e={vd:!0,light:!this.dark,editing:!!this.editing,[`dock-${this.dashboard.dock}`]:!0};return $`<div class=${G(e)}>
      ${this.renderDock()}
      <main class="main">${t?this.renderRoom(t):this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):T}
    </div>`}renderAmbient(){const t=gt(this.home,this.entities),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,r=this.warnings[0],i=this.now.getHours()*60+this.now.getMinutes(),n=(i%7-3)*.8,s=(i%5-2)*.8,o=[t.lightsOn?`${t.lightsOn} luz${t.lightsOn>1?"es":""} acesa${t.lightsOn>1?"s":""}`:null,t.alerts?t.alertText:null].filter(Boolean);return $`<div class="vd amb" role="button" aria-label="Tocar para acordar">
      <div class="ambc" style=${`transform:translate(calc(var(--u) * ${n}), calc(var(--u) * ${s}))`}>
        <div class="atime">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</div>
        <div class="adate">${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</div>
        <div class="arow">
          ${e?$`<span class="awx">${It(e.state)}<b>${a!=null?`${Math.round(a)}°`:""}</b>${kt[e.state]??e.state}</span>`:T}
          ${r?$`<span class=${`ipma ${r.awarenessLevelID}`}><i></i>Aviso ${xt[r.awarenessLevelID]??""} · ${r.awarenessTypeName.toLowerCase()}</span>`:T}
        </div>
        <div class=${G({astatus:!0,att:t.alerts>0})}>${o.length?o.join(" · "):"Tudo tranquilo em casa"}</div>
      </div>
      <span class="ahint">${this.wallpanel?"Aproxima-te ou toca para acordar":"Toca para acordar"}</span>
    </div>`}renderDock(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(a=>!a.hidden));return $`<nav class="dock" aria-label="Vistas">
      <button class=${G({di:!0,on:this.view==="home"})} @click=${()=>this.openRoom("home")} aria-label="Casa">
        ${S(D.home)}<span class="lb">Casa</span>
      </button>
      <span class="sep"></span>
      <div class="rooms">
        ${t.map(e=>{const a=Lt(e).filter(r=>this.entities[r]?.state==="on").length;return $`<button class=${G({di:!0,rm:!0,on:this.view===e.id,lit:a>0})} @click=${()=>this.openRoom(e.id)} aria-label=${e.name}>
            ${a?$`<span class="glow"></span>`:T}${S(Sa(e.icon))}<span class="lb">${e.name}</span>
            ${a?$`<span class="bdg">${a}</span>`:T}
          </button>`})}
      </div>
      <span class="sep"></span>
      ${Zt.filter(e=>this.viewWidgets(e.id).length).map(e=>{const a=e.id==="@seguranca"?gt(this.home,this.entities).alerts:0;return $`<button class=${G({di:!0,on:this.view===e.id})} @click=${()=>this.openRoom(e.id)} aria-label=${e.name}>
          ${S(e.icon)}<span class="lb">${e.name}</span>${a?$`<span class="bdg alert">${a}</span>`:T}
        </button>`})}
    </nav>`}renderHeader(t,e,a=T){const r=gt(this.home,this.entities),i=this.home.persons.map(n=>this.entities[n]).filter(n=>!!n);return $`<header class="hdr">
      <div class="t"><span>${e}</span><b>${t}</b></div>
      <div class="chips">
        ${this.editing?T:$`${r.temp?$`<span class="chip"><i style="background:#34c759;color:#06210f">${S(D.therm)}</i><span>Clima<small>${r.temp}</small></span></span>`:T}
        <span class="chip"><i style="background:#ffcf8a;color:#2a1a04">${S(D.bulb)}</i><span>Luzes<small>${r.lightsOn?`${r.lightsOn} acesa${r.lightsOn>1?"s":""}`:"apagadas"}</small></span></span>
        <span class="chip"><i style=${r.alerts?"background:#ff8a5c;color:#2a0f04":"background:#5be3a0;color:#06210f"}>${S(D.shield)}</i><span>Segurança<small>${r.alertText}</small></span></span>
        ${i.length?$`<div class="people">${i.map(n=>{const s=n.attributes.entity_picture,o=n.attributes.friendly_name??n.entity_id;return $`<span class="av" title=${o} style=${s?`background-image:url(${s})`:""}>${s?"":o[0]}${n.state==="home"?$`<i></i>`:T}</span>`})}</div>`:T}`}
        ${a}
      </div>
    </header>`}greeting(){const t=this.now.getHours();return`${t<6?"Boa noite":t<13?"Bom dia":t<20?"Boa tarde":"Boa noite"} · ${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}`}renderHome(){const t=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),e=Ka(this.home,this.entities),a=this.arranged("home",e),r=this.editing==="home";return $`${r?this.renderHeader("A editar","Casa",this.editControls("home",e)):this.renderHeader(t,this.greeting(),this.editControls("home",e))}
      ${a.length||r?$`<div class=${G({grid:!0,edit:r})}>${a.map(i=>this.renderWidget(i))}</div>`:$`<p class="empty">Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.</p>`}
      ${this.renderPicker("home",e)}`}viewWidgets(t){return t==="@clima"?Qa(this.home,this.entities):t==="@seguranca"?tr(this.home,this.entities):t==="@cenas"?er(this.home,this.entities):[]}renderView(t){const e=Zt.find(o=>o.id===t),a=this.viewWidgets(t),r=this.arranged(t,a),i=this.editing===t,n=gt(this.home,this.entities),s=t==="@clima"?n.temp??"":t==="@seguranca"?n.alertText:`${r.length} cenas e rotinas`;return $`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${S(D.back)}</button>
        <b>${e.name}</b><span>${i?"a editar":s}</span>
        <div class="act">${this.editControls(t,a)}</div>
      </div>
      ${r.length||i?$`<div class=${G({grid:!0,edit:i})}>${r.map(o=>this.renderWidget(o))}</div>`:$`<p class="empty">Nada para mostrar aqui.</p>`}
      ${this.renderPicker(t,a)}`}renderRoom(t){const e=Ja(t),a=this.arranged(t.id,e),r=this.editing===t.id,i=R=>R.length?a.filter(tt=>R.includes(tt.kind)).length:a.length,n=Ya.filter(R=>i(R.kinds)>0),s=n.find(R=>R.id===this.category)??n[0],o=!r&&s&&s.kinds.length?a.filter(R=>s.kinds.includes(R.kind)):a,m=Lt(t),P=t.temperature?this.entities[t.temperature]?.state:null,O=t.humidity?this.entities[t.humidity]?.state:null,K=[P&&P!=="unavailable"?`${rt(parseFloat(P))}°`:null,O&&O!=="unavailable"?`${rt(parseFloat(O),0)}%`:null,t.floor].filter(Boolean).join(" · ");return $`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${S(D.back)}</button>
        <b>${t.name}</b><span>${r?"a editar":K}</span>
        <div class="act">
          ${m.length&&!r?$`<button class="pill" @click=${()=>this.call("light","turn_on",m)}>${S(D.bulb)} Acender</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",m)}>Apagar</button>`:T}
          ${this.editControls(t.id,e)}
        </div>
      </div>
      ${n.length>2&&!r?$`<div class="cats">${n.map(R=>$`<button class=${G({on:R===s})} @click=${()=>this.category=R.id}>${R.name}<em>${i(R.kinds)}</em></button>`)}</div>`:T}
      <div class=${G({grid:!0,edit:r})}>${o.map(R=>this.renderWidget(R))}</div>
      ${this.renderPicker(t.id,e)}`}renderWidget(t){const e=t.entity?this.entities[t.entity]:void 0;if(t.entity&&t.kind!=="weather"&&!e)return T;const a=this.widgetBody(t,e),r={w:!0,[t.size]:!0,on:(a.on??!1)||this.flash===t.key,att:a.att??!1,off:qa(e)&&t.kind!=="room-lights"&&t.kind!=="scenes",dragging:this.drag?.key===t.key,moving:this.moving===t.key},i=!!this.editing;return $`<div class=${G(r)} style=${a.style??""} data-key=${t.key}
        @pointerdown=${n=>this.down(n,t)} @pointermove=${n=>this.move(n,t)}
        @pointerup=${n=>this.up(n,t)} @pointercancel=${()=>this.cancel()} @contextmenu=${n=>n.preventDefault()}>
      ${a.fill!=null?$`<div class="fill" style=${Qe({width:`${a.fill}%`,"--fc":a.color??"255,207,138"})}></div>`:T}
      ${a.art??T}
      <span class="nm">${t.name}${a.tag?$`<em>${a.tag}</em>`:T}</span>
      ${a.extra??T}
      <div class="hero" style=${a.heroStyle??""}>${a.hero}${a.small?$`<small>${a.small}</small>`:T}</div>
      ${i?T:a.ctl??T}
      ${i?$`<button class="rmv" aria-label=${`Esconder ${t.name}`} @click=${()=>this.hideWidget(t.key)}>${S(D.minus)}</button>
          <button class="handle" aria-label=${`Mudar o tamanho de ${t.name}`} @click=${()=>this.resizeWidget(t)}>${S(D.resize)}<b>${t.size.toUpperCase()}</b></button>`:T}
    </div>`}widgetBody(t,e){const a=this.level(t);switch(t.kind){case"room-lights":{const r=t.entities.filter(n=>this.entities[n]?.state==="on"),i=r.length?bt(this.entities[r[0]]):"#ffcf8a";return{hero:a?`${a}%`:"Off",small:r.length?r.map(n=>this.name(n,t.room)).slice(0,2).join(" e "):`${t.entities.length} luz${t.entities.length>1?"es":""}`,tag:t.entities.length>1?`${r.length}/${t.entities.length} luzes`:void 0,art:zt(a??0,i),fill:a||null,color:qt(i),on:a>0}}case"light":{const r=bt(e);return{hero:a?`${a}%`:"Off",tag:t.sub&&this.view==="home"?t.sub:void 0,art:zt(a??0,r),fill:a||null,color:qt(r),on:(a??0)>0,heroStyle:a?`color:${r}`:""}}case"cover":{const r=a??0;return{hero:`${r}%`,small:lr[e.state]??e.state,art:Ra(r),fill:r,color:"170,200,230"}}case"climate":{const r=e.attributes.temperature,i=e.state,n=(e.attributes.hvac_modes??[]).filter(P=>["heat","cool","off","auto","heat_cool"].includes(P)).slice(0,3),s=i==="cool"?"#6cc8ff":i==="off"?"#5d646e":"#ff9f43",o=e.attributes.current_temperature,m=Ut[e.attributes.hvac_action??i]??wt[i]??i;return{hero:i==="off"?"Off":r!=null?`${rt(r)}°`:"—",small:[m,o!=null?`agora ${rt(o)}°`:null].filter(Boolean).join(" · "),tag:t.sub,art:za(i==="off"?null:r??null,s),heroStyle:t.size==="l"?"font-size:calc(var(--u)*7)":"",extra:n.length>1?$`<div class="seg">${n.map(P=>$`<button class=${G({on:P===i})} @click=${()=>this.call("climate","set_hvac_mode",t.entity,{hvac_mode:P})}>${wt[P]}</button>`)}</div>`:T,ctl:r!=null&&i!=="off"?$`<div class="ctl"><button aria-label="Baixar" @click=${()=>this.stepTemp(t.entity,-1)}>${S(D.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(t.entity,1)}>${S(D.plus)}</button></div>`:T}}case"weather":{const r=e?.state??"",i=e?.attributes.temperature,n=this.warnings[0];return{hero:i!=null?`${Math.round(i)}°`:"—",small:kt[r]??r,art:It(r),extra:n?$`<span class=${`ipma ${n.awarenessLevelID}`}><i></i>Aviso ${xt[n.awarenessLevelID]??""} · ${n.awarenessTypeName.toLowerCase()}${this.warnings.length>1?` +${this.warnings.length-1}`:""}</span>`:T,ctl:this.hourly.length?$`<div class="hrs">${this.hourly.map(s=>$`<span>${new Date(s.datetime).getHours()}h<b>${Math.round(s.temperature)}°</b>${s.precipitation_probability?`${s.precipitation_probability}%`:""}</span>`)}</div>`:T}}case"lock":{const r=e.state!=="locked";return{hero:r?e.state==="unlocked"?"Destrancada":e.state:"Trancada",small:r?"tocar para trancar":"toque longo para abrir",art:Ia(r),att:e.state==="unlocked",heroStyle:"font-size:calc(var(--u)*1.85)"}}case"media":{const r=e.state==="playing",i=e.attributes.media_title??(lt(e)?"Ligado":"Desligado"),n=e.attributes.media_artist??e.attributes.app_name??"";return{hero:i,small:n,tag:t.sub,art:ja(e.attributes.entity_picture),on:r,heroStyle:"font-size:calc(var(--u)*2.4)",ctl:lt(e)?$`<div class="ctl"><button class="pri" aria-label=${r?"Pausa":"Tocar"} @click=${()=>this.call("media_player","media_play_pause",t.entity)}>${S(r?D.pause:D.play)}</button>
                <button aria-label="Seguinte" @click=${()=>this.call("media_player","media_next_track",t.entity)}>${S(D.next)}</button></div>`:T}}case"vacuum":{const r=e.attributes.battery_level;return{hero:r!=null?`${r}%`:Wt[e.state]??e.state,small:Wt[e.state]??e.state,art:Na(e.state==="cleaning"),on:e.state==="cleaning"}}case"scenes":return{hero:"",extra:$`<div class="scn">${t.entities.map(r=>$`<button @click=${()=>this.call(Z(r),"turn_on",r)}>${S(D.spark)}${this.name(r)}</button>`)}</div>`};case"fan":return{hero:lt(e)?e.attributes.percentage!=null?`${e.attributes.percentage}%`:"On":"Off",art:Ua(lt(e)),on:lt(e)};case"switch":case"outlet":{const r=lt(e);return{hero:r?"On":"Off",art:Wa(r),on:r}}case"binary":{const r=e.state==="on",i=e.attributes.device_class;return{hero:i&&["door","window","garage_door","opening"].includes(i)?r?"Aberta":"Fechada":i==="motion"||i==="occupancy"?r?"Movimento":"Calmo":r?"On":"Off",att:r&&!!i&&["door","window","garage_door","opening","moisture","smoke","gas"].includes(i),heroStyle:"font-size:calc(var(--u)*2.4)"}}case"sensor":{const r=e.attributes.unit_of_measurement??"",i=parseFloat(e.state),n=e.attributes.device_class;Number.isNaN(i)||this.historyWanted.add(t.entity);const s=this.history[t.entity],o=s&&s.length>1?`${rt(Math.min(...s),0)}–${rt(Math.max(...s),0)}`:void 0;return{hero:Number.isNaN(i)?e.state:`${rt(i)}${r==="°C"?"°":r==="%"?"%":""}`,small:r&&r!=="°C"&&r!=="%"?r:t.sub,tag:o,art:Fa(n==="humidity"?"#3db8f5":n==="temperature"?"#ff9f43":"#5be3a0",s)}}case"scene":return{hero:"",art:Za(),extra:$`<span class="go">${this.flash===t.key?"Ativada":"Tocar para ativar"}</span>`};case"camera":{const r=e.attributes.entity_picture,i=Math.floor(this.now.getTime()/1e4);return{hero:"",tag:t.sub,art:r?$`<img class="cam" src=${`${r}${r.includes("?")?"&":"?"}t=${i}`} alt="" loading="lazy" />`:T}}}}name(t,e){for(const r of this.home.rooms){const i=r.devices.find(n=>n.id===t);if(i)return i.name}const a=this.entities[t]?.attributes.friendly_name??t.split(".")[1];return e&&a.toLowerCase().startsWith(e.name.toLowerCase()+" ")?a.slice(e.name.length+1):a}stepTemp(t,e){const a=this.entities[t],r=a?.attributes.target_temp_step??.5,i=a?.attributes.temperature??20,n=a?.attributes.min_temp??7,s=a?.attributes.max_temp??35;this.call("climate","set_temperature",t,{temperature:Math.max(n,Math.min(s,Math.round((i+e*r)*10)/10))})}renderSheet(t){const e=this.entities[t];if(!e)return T;const a=Z(t),r=this.home.rooms.find(n=>n.devices.some(s=>s.id===t)),i=a==="light"?"luz":a==="cover"?"estore":a==="climate"?"clima":a==="lock"?"fechadura":a==="media_player"?"média":a==="weather"?"tempo":"";return $`<div class="scrim" @click=${()=>this.sheet=null}></div>
      <aside class="sheet" role="dialog" aria-label=${this.name(t,r)}>
        <div class="shd"><span class="k">${[r?.name,i].filter(Boolean).join(" · ")}</span>
          <button class="x" aria-label="Fechar" @click=${()=>this.sheet=null}>${S(D.close)}</button></div>
        <h4>${this.name(t,r)}</h4>
        ${this.sheetBody(t,e)}
      </aside>`}bigSlider(t,e,a,r,i){const n=this.drag?.key===t?this.drag.value:e,s=o=>{const m=o.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(o.clientX-m.left)/m.width*100)))};return $`<div class="bigsl" role="slider" aria-label=${r} aria-valuenow=${n} aria-valuemin="0" aria-valuemax="100"
      @pointerdown=${o=>{o.currentTarget.setPointerCapture(o.pointerId),this.drag={key:t,value:s(o)}}}
      @pointermove=${o=>{this.drag?.key===t&&o.buttons&&(this.drag={key:t,value:s(o)})}}
      @pointerup=${o=>{const m=s(o);i(m),this.drag={key:t,value:m},window.setTimeout(()=>{this.drag?.key===t&&(this.drag=null)},1500)}}>
      <i style=${`width:${n}%;background:${a}`}></i><b>${n}%</b></div>`}sheetBody(t,e){const a=Z(t);if(a==="light"){const i=e.attributes.supported_color_modes??[],n=i.includes("color_temp"),s=i.some(O=>["hs","rgb","rgbw","rgbww","xy"].includes(O)),o=bt(e),m=e.attributes.min_color_temp_kelvin??2200,P=e.attributes.max_color_temp_kelvin??6500;return $`${i.some(O=>O!=="onoff")?this.bigSlider(`sheet-${t}`,Mt(e),`linear-gradient(90deg,${o},#fff3e0)`,"Brilho",O=>O?this.call("light","turn_on",t,{brightness_pct:O}):this.call("light","turn_off",t)):T}
        ${n?$`<span class="k">Branco</span><div class="tbar" @click=${O=>{const K=O.currentTarget.getBoundingClientRect(),R=(O.clientX-K.left)/K.width;this.call("light","turn_on",t,{color_temp_kelvin:Math.round(m+R*(P-m))})}}></div>`:T}
        ${s?$`<span class="k">Cores</span><div class="pre">${hr.map(O=>$`<button aria-label=${O} style=${`background:${O}`} class=${G({on:O===o})} @click=${()=>this.call("light","turn_on",t,{rgb_color:ne(O)})}></button>`)}</div>`:T}
        <div class="foot"><button class="pill" @click=${()=>this.toggle(t)}>${S(D.power)} ${e.state==="on"?"Desligar":"Ligar"}</button></div>`}if(a==="cover"){const i=e.attributes.current_position??(e.state==="open"?100:0);return $`${e.attributes.supported_features&4?this.bigSlider(`sheet-${t}`,i,"linear-gradient(90deg,#a9b6c4,#dfe6ee)","Posição",n=>this.call("cover","set_cover_position",t,{position:n})):T}
        <div class="foot"><button class="pill" @click=${()=>this.call("cover","open_cover",t)}>Abrir</button><button class="pill" @click=${()=>this.call("cover","stop_cover",t)}>Parar</button><button class="pill" @click=${()=>this.call("cover","close_cover",t)}>Fechar</button></div>`}if(a==="climate"){const i=e.attributes.temperature,n=e.attributes.hvac_modes??[];return $`<div class="bigtemp">${i!=null?`${rt(i)}°`:"—"}<small>${Ut[e.attributes.hvac_action??e.state]??""}${e.attributes.current_temperature!=null?` · agora ${rt(e.attributes.current_temperature)}°`:""}</small></div>
        <div class="ctl big"><button aria-label="Baixar" @click=${()=>this.stepTemp(t,-1)}>${S(D.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(t,1)}>${S(D.plus)}</button></div>
        <span class="k">Modo</span><div class="seg wide">${n.map(s=>$`<button class=${G({on:s===e.state})} @click=${()=>this.call("climate","set_hvac_mode",t,{hvac_mode:s})}>${wt[s]??s}</button>`)}</div>`}if(a==="lock"){const i=e.state==="locked";return $`<div class="bigtemp">${i?"Trancada":e.state==="unlocked"?"Destrancada":e.state}</div>
        <div class="foot">${i?$`<button class="pill warn" @click=${()=>{this.call("lock","unlock",t),this.sheet=null}}>${S(D.unlock)} Destrancar</button>`:$`<button class="pill pri" @click=${()=>this.call("lock","lock",t)}>${S(D.lock)} Trancar</button>`}</div>`}if(a==="media_player"){const i=Math.round((e.attributes.volume_level??0)*100);return $`<div class="bigtemp" style="font-size:calc(var(--u)*2.6)">${e.attributes.media_title??e.state}<small>${e.attributes.media_artist??""}</small></div>
        ${e.attributes.volume_level!=null?this.bigSlider(`vol-${t}`,i,"linear-gradient(90deg,#3db8f5,#9be0ff)","Volume",n=>this.call("media_player","volume_set",t,{volume_level:n/100})):T}
        <div class="foot"><button class="pill pri" @click=${()=>this.call("media_player","media_play_pause",t)}>${S(e.state==="playing"?D.pause:D.play)} ${e.state==="playing"?"Pausa":"Tocar"}</button>
          <button class="pill" @click=${()=>this.call("media_player","media_next_track",t)}>${S(D.next)}</button>
          <button class="pill" @click=${()=>this.toggle(t)}>${S(D.power)}</button></div>`}if(a==="camera"){const i=e.attributes.entity_picture;return i?$`<img class="camlg" src=${`${i}${i.includes("?")?"&":"?"}t=${Math.floor(this.now.getTime()/1e4)}`} alt=${this.name(t)} />`:$`<p class="k">Sem imagem</p>`}if(a==="weather"){const i=o=>new Date(o).toLocaleString("pt-PT",{weekday:"short",hour:"2-digit",minute:"2-digit"}),n=e.attributes.temperature,s=[e.attributes.humidity!=null?`${e.attributes.humidity}%`:null,e.attributes.wind_speed!=null?`vento ${rt(e.attributes.wind_speed,0)} ${e.attributes.wind_speed_unit??""}`:null].filter(Boolean);return $`<div class="bigtemp">${n!=null?`${Math.round(n)}°`:"—"}<small>${[kt[e.state]??e.state,...s].join(" · ")}</small></div>
        <div class="hrs">${this.hourly.map(o=>$`<span>${new Date(o.datetime).getHours()}h<b>${Math.round(o.temperature)}°</b>${o.precipitation_probability?`${o.precipitation_probability}%`:""}</span>`)}</div>
        ${this.warnings.map(o=>$`<div class=${`warn ${o.awarenessLevelID}`}><b>Aviso ${xt[o.awarenessLevelID]??""} · ${o.awarenessTypeName}</b>
          <span>${i(o.startTime)} → ${i(o.endTime)}</span>${o.text?$`<p>${o.text}</p>`:T}</div>`)}
        ${this.home.settings?.ipma_area?T:$`<p class="hint">Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.</p>`}`}const r=e.attributes.unit_of_measurement??"";return $`<div class="bigtemp">${e.state}${r?` ${r}`:""}</div>
      ${["switch","light","fan","input_boolean","vacuum"].includes(a)?$`<div class="foot"><button class="pill pri" @click=${()=>this.toggle(t)}>${S(D.power)} ${lt(e)?"Desligar":"Ligar"}</button></div>`:T}`}};I.styles=nr;N([ct({attribute:!1})],I.prototype,"home",2);N([ct({attribute:!1})],I.prototype,"entities",2);N([ct({attribute:!1})],I.prototype,"dashboard",2);N([ct({attribute:!1})],I.prototype,"conn",2);N([ct()],I.prototype,"screenName",2);N([ct({type:Boolean})],I.prototype,"canEdit",2);N([ct({type:Boolean})],I.prototype,"ambient",2);N([ct({type:Boolean})],I.prototype,"wallpanel",2);N([U()],I.prototype,"editing",2);N([U()],I.prototype,"draft",2);N([U()],I.prototype,"moving",2);N([U()],I.prototype,"saving",2);N([U()],I.prototype,"view",2);N([U()],I.prototype,"category",2);N([U()],I.prototype,"sheet",2);N([U()],I.prototype,"drag",2);N([U()],I.prototype,"now",2);N([U()],I.prototype,"hourly",2);N([U()],I.prototype,"warnings",2);N([U()],I.prototype,"history",2);N([U()],I.prototype,"flash",2);I=N([Jt("pine3-vidro")],I);function ne(t){const e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function qt(t){if(t.startsWith("#"))return ne(t).join(",");const e=t.match(/\d+/g);return e?e.slice(0,3).join(","):"255,207,138"}function se(){const t=window.Pine3Wallpanel;return/Pine3Wallpanel\/\d+/.test(navigator.userAgent)&&t&&typeof t.version=="function"?t:null}function fr(t){const e=a=>{const r=a.detail?.type;(r==="motion"||r==="sleep"||r==="wake")&&t(r)};return window.addEventListener("pine3wallpanel",e),()=>window.removeEventListener("pine3wallpanel",e)}const pr=.12,gr=.5;let Gt=null;function vr(t,e,a){const r=se();if(!r)return;let i=-1;if(t&&e!=="off"){const n=new Date().getHours(),s=a??(n<7||n>=21);i=e==="low"||s?pr:gr}if(i!==Gt){Gt=i;try{r.setBrightness(i)}catch(n){console.warn("Pine3 Home: Pine3 Wallpanel",n)}}}var mr=Object.defineProperty,br=Object.getOwnPropertyDescriptor,ot=(t,e,a,r)=>{for(var i=r>1?void 0:r?br(e,a):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=(r?s(e,a,i):s(i))||i);return r&&i&&mr(e,a,i),i};const yr=2e3,wr="/pine3-home";let Q=class extends Yt{constructor(){super(...arguments),this.phase="starting",this.error="",this.entities={},this.now=new Date,this.unsubs=[],this.ambient=!1,this.lastActivity=Date.now(),this.onActivity=t=>this.activity(t)}connectedCallback(){super.connectedCallback(),this.clockTimer=window.setInterval(()=>this.now=new Date,15e3),window.addEventListener("pointerdown",this.onActivity,!0),window.addEventListener("keydown",this.onActivity,!0),this.idleTimer=window.setInterval(()=>this.checkIdle(),5e3),this.offWallpanel=fr(e=>{e==="sleep"&&(this.ambient=!1,this.vidro?.reset()),this.activity()});const t=Ke();t?this.connect(t):this.beginPairing()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clockTimer),clearInterval(this.idleTimer),window.removeEventListener("pointerdown",this.onActivity,!0),window.removeEventListener("keydown",this.onActivity,!0),this.offWallpanel?.(),clearTimeout(this.pollTimer),this.teardown()}teardown(){this.unsubs.forEach(t=>t()),this.unsubs=[],this.conn?.close(),this.conn=void 0}get vidro(){return this.renderRoot.querySelector("pine3-vidro")}activity(t){this.lastActivity=Date.now(),this.ambient&&(this.ambient=!1,t&&(t.stopPropagation(),t.preventDefault()))}checkIdle(){if(this.phase!=="ready"||this.ambient||!this.me)return;const t=this.me.dashboard.ambient_after??2;!t||this.vidro?.busy||Date.now()-this.lastActivity>t*6e4&&(this.ambient=!0,this.vidro?.reset())}updated(){const t=this.entities["sun.sun"]?.state;vr(this.ambient,this.me?.dashboard.ambient_brightness,t?t==="below_horizon":null)}async beginPairing(){clearTimeout(this.pollTimer),this.phase="pairing",this.pair=void 0;try{this.pair=await Ye(),this.poll()}catch(t){this.error=t.message==="too_many"?"Há demasiados códigos à espera. Tenta daqui a pouco.":"Não foi possível pedir um código.",this.pollTimer=window.setTimeout(()=>this.beginPairing(),1e4)}}poll(){this.pollTimer=window.setTimeout(async()=>{if(this.pair){try{const t=await Je(this.pair);if(t.status==="approved"){Rt(t.token),this.connect(t.token);return}if(t.status==="expired"){this.beginPairing();return}}catch{}this.poll()}},yr)}async connect(t){this.phase="connecting",this.teardown();try{const e=await qe({auth:Oe(location.origin,t)});this.conn=e,this.me=await e.sendMessagePromise({type:"pine3_home/me"}),this.home=await e.sendMessagePromise({type:"pine3_home/home"}),this.unsubs.push(Ze(e,a=>this.entities=a)),this.unsubs.push(await e.subscribeMessage(a=>this.home=a,{type:"pine3_home/subscribe"})),this.unsubs.push(await e.subscribeEvents(async()=>{this.me=await e.sendMessagePromise({type:"pine3_home/me"})},"pine3_home_updated")),e.addEventListener("ready",async()=>{this.me=await e.sendMessagePromise({type:"pine3_home/me"})}),this.phase="ready"}catch(e){if(e===ht){Rt(null),this.beginPairing();return}this.phase="error",this.error="Sem ligação ao Home Assistant. A tentar de novo…",this.pollTimer=window.setTimeout(()=>this.connect(t),5e3)}}qr(t){const e=me(0,"M");return e.addData(`${location.origin}${wr}?code=${t}`),e.make(),pe(e.createSvgTag({cellSize:6,margin:2,scalable:!0}))}renderPairing(){const t=this.pair?.code;return $`<main class="center">
      <div class="pane pairing">
        <div class="text">
          <span class="muted eyebrow">Pine3 Home</span>
          <h1>Emparelhar este ecrã</h1>
          <p class="muted">No Home Assistant, abre <strong>Pine3 Home</strong> e escreve este código, ou lê o QR com o telemóvel.</p>
          <div class="code" aria-live="polite">${t?`${t.slice(0,3)} ${t.slice(3)}`:"··· ···"}</div>
          ${this.error?$`<p class="bad">${this.error}</p>`:$`<p class="muted small">O código muda a cada 10 minutos.</p>`}
        </div>
        ${t?$`<div class="qr">${this.qr(t)}</div>`:T}
      </div>
    </main>`}renderReady(){const t=this.me;return!this.home||!this.conn?$`<main class="center"><p class="muted">A carregar a casa…</p></main>`:$`<pine3-vidro .home=${this.home} .entities=${this.entities} .dashboard=${t.dashboard} .conn=${this.conn}
      .screenName=${t.screen?.name??""} ?ambient=${this.ambient} .wallpanel=${se()!==null} ?canEdit=${t.is_admin||t.dashboard.screen_edit!==!1}></pine3-vidro>`}render(){switch(this.phase){case"pairing":return this.renderPairing();case"ready":return this.me?this.renderReady():T;case"error":return $`<main class="center"><p class="muted">${this.error}</p></main>`;default:return $`<main class="center"><p class="muted">A ligar…</p></main>`}}};Q.styles=[fe,Kt`
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
    `];ot([U()],Q.prototype,"phase",2);ot([U()],Q.prototype,"pair",2);ot([U()],Q.prototype,"error",2);ot([U()],Q.prototype,"me",2);ot([U()],Q.prototype,"home",2);ot([U()],Q.prototype,"entities",2);ot([U()],Q.prototype,"now",2);ot([U()],Q.prototype,"ambient",2);Q=ot([Jt("pine3-screen")],Q);
