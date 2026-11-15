import{A as L,E as zt,w as I,i as yt,n as lt,r as U,a as ce,c as p,t as wt,b as Me}from"./chunks/base-BYQr5Ns4.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={ATTRIBUTE:1,CHILD:2},St=t=>(...e)=>({_$litDirective$:t,values:e});let Bt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,r){this._$Ct=e,this._$AM=a,this._$Ci=r}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let At=class extends Bt{constructor(e){if(super(e),this.it=L,e.type!==Dt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===L||e==null)return this._t=void 0,this.it=e;if(e===zt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const a=[e];return a.raw=a,this._t={_$litType$:this.constructor.resultType,strings:a,values:[]}}};At.directiveName="unsafeHTML",At.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Tt extends At{}Tt.directiveName="unsafeSVG",Tt.resultType=2;const Le=St(Tt);function Ae(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var le={exports:{}};(function(t,e){var a=function(){var r=function(C,M){var y=236,x=17,u=C,k=s[M],l=null,c=0,$=null,b=[],w={},O=function(h,f){c=u*4+17,l=function(d){for(var g=new Array(d),m=0;m<d;m+=1){g[m]=new Array(d);for(var _=0;_<d;_+=1)g[m][_]=null}return g}(c),z(0,0),z(c-7,0),z(0,c-7),Y(),q(),nt(h,f),u>=7&&rt(h),$==null&&($=_e(u,k,b)),st($,f)},z=function(h,f){for(var d=-1;d<=7;d+=1)if(!(h+d<=-1||c<=h+d))for(var g=-1;g<=7;g+=1)f+g<=-1||c<=f+g||(0<=d&&d<=6&&(g==0||g==6)||0<=g&&g<=6&&(d==0||d==6)||2<=d&&d<=4&&2<=g&&g<=4?l[h+d][f+g]=!0:l[h+d][f+g]=!1)},B=function(){for(var h=0,f=0,d=0;d<8;d+=1){O(!0,d);var g=o.getLostPoint(w);(d==0||h>g)&&(h=g,f=d)}return f},q=function(){for(var h=8;h<c-8;h+=1)l[h][6]==null&&(l[h][6]=h%2==0);for(var f=8;f<c-8;f+=1)l[6][f]==null&&(l[6][f]=f%2==0)},Y=function(){for(var h=o.getPatternPosition(u),f=0;f<h.length;f+=1)for(var d=0;d<h.length;d+=1){var g=h[f],m=h[d];if(l[g][m]==null)for(var _=-2;_<=2;_+=1)for(var V=-2;V<=2;V+=1)_==-2||_==2||V==-2||V==2||_==0&&V==0?l[g+_][m+V]=!0:l[g+_][m+V]=!1}},rt=function(h){for(var f=o.getBCHTypeNumber(u),d=0;d<18;d+=1){var g=!h&&(f>>d&1)==1;l[Math.floor(d/3)][d%3+c-8-3]=g}for(var d=0;d<18;d+=1){var g=!h&&(f>>d&1)==1;l[d%3+c-8-3][Math.floor(d/3)]=g}},nt=function(h,f){for(var d=k<<3|f,g=o.getBCHTypeInfo(d),m=0;m<15;m+=1){var _=!h&&(g>>m&1)==1;m<6?l[m][8]=_:m<8?l[m+1][8]=_:l[c-15+m][8]=_}for(var m=0;m<15;m+=1){var _=!h&&(g>>m&1)==1;m<8?l[8][c-m-1]=_:m<9?l[8][15-m-1+1]=_:l[8][15-m-1]=_}l[c-8][8]=!h},st=function(h,f){for(var d=-1,g=c-1,m=7,_=0,V=o.getMaskFunction(f),T=c-1;T>0;T-=2)for(T==6&&(T-=1);;){for(var N=0;N<2;N+=1)if(l[g][T-N]==null){var Z=!1;_<h.length&&(Z=(h[_]>>>m&1)==1);var E=V(g,T-N);E&&(Z=!Z),l[g][T-N]=Z,m-=1,m==-1&&(_+=1,m=7)}if(g+=d,g<0||c<=g){g-=d,d=-d;break}}},ht=function(h,f){for(var d=0,g=0,m=0,_=new Array(f.length),V=new Array(f.length),T=0;T<f.length;T+=1){var N=f[T].dataCount,Z=f[T].totalCount-N;g=Math.max(g,N),m=Math.max(m,Z),_[T]=new Array(N);for(var E=0;E<_[T].length;E+=1)_[T][E]=255&h.getBuffer()[E+d];d+=N;var X=o.getErrorCorrectPolynomial(Z),Q=H(_[T],X.getLength()-1),It=Q.mod(X);V[T]=new Array(X.getLength()-1);for(var E=0;E<V[T].length;E+=1){var jt=E+It.getLength()-V[T].length;V[T][E]=jt>=0?It.getAt(jt):0}}for(var Wt=0,E=0;E<f.length;E+=1)Wt+=f[E].totalCount;for(var kt=new Array(Wt),mt=0,E=0;E<g;E+=1)for(var T=0;T<f.length;T+=1)E<_[T].length&&(kt[mt]=_[T][E],mt+=1);for(var E=0;E<m;E+=1)for(var T=0;T<f.length;T+=1)E<V[T].length&&(kt[mt]=V[T][E],mt+=1);return kt},_e=function(h,f,d){for(var g=A.getRSBlocks(h,f),m=F(),_=0;_<d.length;_+=1){var V=d[_];m.put(V.getMode(),4),m.put(V.getLength(),o.getLengthInBits(V.getMode(),h)),V.write(m)}for(var T=0,_=0;_<g.length;_+=1)T+=g[_].dataCount;if(m.getLengthInBits()>T*8)throw"code length overflow. ("+m.getLengthInBits()+">"+T*8+")";for(m.getLengthInBits()+4<=T*8&&m.put(0,4);m.getLengthInBits()%8!=0;)m.putBit(!1);for(;!(m.getLengthInBits()>=T*8||(m.put(y,8),m.getLengthInBits()>=T*8));)m.put(x,8);return ht(m,g)};w.addData=function(h,f){f=f||"Byte";var d=null;switch(f){case"Numeric":d=S(h);break;case"Alphanumeric":d=et(h);break;case"Byte":d=it(h);break;case"Kanji":d=at(h);break;default:throw"mode:"+f}b.push(d),$=null},w.isDark=function(h,f){if(h<0||c<=h||f<0||c<=f)throw h+","+f;return l[h][f]},w.getModuleCount=function(){return c},w.make=function(){if(u<1){for(var h=1;h<40;h++){for(var f=A.getRSBlocks(h,k),d=F(),g=0;g<b.length;g++){var m=b[g];d.put(m.getMode(),4),d.put(m.getLength(),o.getLengthInBits(m.getMode(),h)),m.write(d)}for(var _=0,g=0;g<f.length;g++)_+=f[g].dataCount;if(d.getLengthInBits()<=_*8)break}u=h}O(!1,B())},w.createTableTag=function(h,f){h=h||2,f=typeof f>"u"?h*4:f;var d="";d+='<table style="',d+=" border-width: 0px; border-style: none;",d+=" border-collapse: collapse;",d+=" padding: 0px; margin: "+f+"px;",d+='">',d+="<tbody>";for(var g=0;g<w.getModuleCount();g+=1){d+="<tr>";for(var m=0;m<w.getModuleCount();m+=1)d+='<td style="',d+=" border-width: 0px; border-style: none;",d+=" border-collapse: collapse;",d+=" padding: 0px; margin: 0px;",d+=" width: "+h+"px;",d+=" height: "+h+"px;",d+=" background-color: ",d+=w.isDark(g,m)?"#000000":"#ffffff",d+=";",d+='"/>';d+="</tr>"}return d+="</tbody>",d+="</table>",d},w.createSvgTag=function(h,f,d,g){var m={};typeof arguments[0]=="object"&&(m=arguments[0],h=m.cellSize,f=m.margin,d=m.alt,g=m.title),h=h||2,f=typeof f>"u"?h*4:f,d=typeof d=="string"?{text:d}:d||{},d.text=d.text||null,d.id=d.text?d.id||"qrcode-description":null,g=typeof g=="string"?{text:g}:g||{},g.text=g.text||null,g.id=g.text?g.id||"qrcode-title":null;var _=w.getModuleCount()*h+f*2,V,T,N,Z,E="",X;for(X="l"+h+",0 0,"+h+" -"+h+",0 0,-"+h+"z ",E+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',E+=m.scalable?"":' width="'+_+'px" height="'+_+'px"',E+=' viewBox="0 0 '+_+" "+_+'" ',E+=' preserveAspectRatio="xMinYMin meet"',E+=g.text||d.text?' role="img" aria-labelledby="'+ft([g.id,d.id].join(" ").trim())+'"':"",E+=">",E+=g.text?'<title id="'+ft(g.id)+'">'+ft(g.text)+"</title>":"",E+=d.text?'<description id="'+ft(d.id)+'">'+ft(d.text)+"</description>":"",E+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',E+='<path d="',N=0;N<w.getModuleCount();N+=1)for(Z=N*h+f,V=0;V<w.getModuleCount();V+=1)w.isDark(N,V)&&(T=V*h+f,E+="M"+T+","+Z+X);return E+='" stroke="transparent" fill="black"/>',E+="</svg>",E},w.createDataURL=function(h,f){h=h||2,f=typeof f>"u"?h*4:f;var d=w.getModuleCount()*h+f*2,g=f,m=d-f;return xe(d,d,function(_,V){if(g<=_&&_<m&&g<=V&&V<m){var T=Math.floor((_-g)/h),N=Math.floor((V-g)/h);return w.isDark(N,T)?0:1}else return 1})},w.createImgTag=function(h,f,d){h=h||2,f=typeof f>"u"?h*4:f;var g=w.getModuleCount()*h+f*2,m="";return m+="<img",m+=' src="',m+=w.createDataURL(h,f),m+='"',m+=' width="',m+=g,m+='"',m+=' height="',m+=g,m+='"',d&&(m+=' alt="',m+=ft(d),m+='"'),m+="/>",m};var ft=function(h){for(var f="",d=0;d<h.length;d+=1){var g=h.charAt(d);switch(g){case"<":f+="&lt;";break;case">":f+="&gt;";break;case"&":f+="&amp;";break;case'"':f+="&quot;";break;default:f+=g;break}}return f},Ce=function(h){var f=1;h=typeof h>"u"?f*2:h;var d=w.getModuleCount()*f+h*2,g=h,m=d-h,_,V,T,N,Z,E={"██":"█","█ ":"▀"," █":"▄","  ":" "},X={"██":"▀","█ ":"▀"," █":" ","  ":" "},Q="";for(_=0;_<d;_+=2){for(T=Math.floor((_-g)/f),N=Math.floor((_+1-g)/f),V=0;V<d;V+=1)Z="█",g<=V&&V<m&&g<=_&&_<m&&w.isDark(T,Math.floor((V-g)/f))&&(Z=" "),g<=V&&V<m&&g<=_+1&&_+1<m&&w.isDark(N,Math.floor((V-g)/f))?Z+=" ":Z+="█",Q+=h<1&&_+1>=m?X[Z]:E[Z];Q+=`
`}return d%2&&h>0?Q.substring(0,Q.length-d-1)+Array(d+1).join("▀"):Q.substring(0,Q.length-1)};return w.createASCII=function(h,f){if(h=h||1,h<2)return Ce(f);h-=1,f=typeof f>"u"?h*2:f;var d=w.getModuleCount()*h+f*2,g=f,m=d-f,_,V,T,N,Z=Array(h+1).join("██"),E=Array(h+1).join("  "),X="",Q="";for(_=0;_<d;_+=1){for(T=Math.floor((_-g)/h),Q="",V=0;V<d;V+=1)N=1,g<=V&&V<m&&g<=_&&_<m&&w.isDark(T,Math.floor((V-g)/h))&&(N=0),Q+=N?Z:E;for(T=0;T<h;T+=1)X+=Q+`
`}return X.substring(0,X.length-1)},w.renderTo2dContext=function(h,f){f=f||2;for(var d=w.getModuleCount(),g=0;g<d;g++)for(var m=0;m<d;m++)h.fillStyle=w.isDark(g,m)?"black":"white",h.fillRect(g*f,m*f,f,f)},w};r.stringToBytesFuncs={default:function(C){for(var M=[],y=0;y<C.length;y+=1){var x=C.charCodeAt(y);M.push(x&255)}return M}},r.stringToBytes=r.stringToBytesFuncs.default,r.createStringToBytes=function(C,M){var y=function(){for(var u=ke(C),k=function(){var q=u.read();if(q==-1)throw"eof";return q},l=0,c={};;){var $=u.read();if($==-1)break;var b=k(),w=k(),O=k(),z=String.fromCharCode($<<8|b),B=w<<8|O;c[z]=B,l+=1}if(l!=M)throw l+" != "+M;return c}(),x=63;return function(u){for(var k=[],l=0;l<u.length;l+=1){var c=u.charCodeAt(l);if(c<128)k.push(c);else{var $=y[u.charAt(l)];typeof $=="number"?($&255)==$?k.push($):(k.push($>>>8),k.push($&255)):k.push(x)}}return k}};var i={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},s={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o=function(){var C=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],M=1335,y=7973,x=21522,u={},k=function(l){for(var c=0;l!=0;)c+=1,l>>>=1;return c};return u.getBCHTypeInfo=function(l){for(var c=l<<10;k(c)-k(M)>=0;)c^=M<<k(c)-k(M);return(l<<10|c)^x},u.getBCHTypeNumber=function(l){for(var c=l<<12;k(c)-k(y)>=0;)c^=y<<k(c)-k(y);return l<<12|c},u.getPatternPosition=function(l){return C[l-1]},u.getMaskFunction=function(l){switch(l){case n.PATTERN000:return function(c,$){return(c+$)%2==0};case n.PATTERN001:return function(c,$){return c%2==0};case n.PATTERN010:return function(c,$){return $%3==0};case n.PATTERN011:return function(c,$){return(c+$)%3==0};case n.PATTERN100:return function(c,$){return(Math.floor(c/2)+Math.floor($/3))%2==0};case n.PATTERN101:return function(c,$){return c*$%2+c*$%3==0};case n.PATTERN110:return function(c,$){return(c*$%2+c*$%3)%2==0};case n.PATTERN111:return function(c,$){return(c*$%3+(c+$)%2)%2==0};default:throw"bad maskPattern:"+l}},u.getErrorCorrectPolynomial=function(l){for(var c=H([1],0),$=0;$<l;$+=1)c=c.multiply(H([1,v.gexp($)],0));return c},u.getLengthInBits=function(l,c){if(1<=c&&c<10)switch(l){case i.MODE_NUMBER:return 10;case i.MODE_ALPHA_NUM:return 9;case i.MODE_8BIT_BYTE:return 8;case i.MODE_KANJI:return 8;default:throw"mode:"+l}else if(c<27)switch(l){case i.MODE_NUMBER:return 12;case i.MODE_ALPHA_NUM:return 11;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 10;default:throw"mode:"+l}else if(c<41)switch(l){case i.MODE_NUMBER:return 14;case i.MODE_ALPHA_NUM:return 13;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 12;default:throw"mode:"+l}else throw"type:"+c},u.getLostPoint=function(l){for(var c=l.getModuleCount(),$=0,b=0;b<c;b+=1)for(var w=0;w<c;w+=1){for(var O=0,z=l.isDark(b,w),B=-1;B<=1;B+=1)if(!(b+B<0||c<=b+B))for(var q=-1;q<=1;q+=1)w+q<0||c<=w+q||B==0&&q==0||z==l.isDark(b+B,w+q)&&(O+=1);O>5&&($+=3+O-5)}for(var b=0;b<c-1;b+=1)for(var w=0;w<c-1;w+=1){var Y=0;l.isDark(b,w)&&(Y+=1),l.isDark(b+1,w)&&(Y+=1),l.isDark(b,w+1)&&(Y+=1),l.isDark(b+1,w+1)&&(Y+=1),(Y==0||Y==4)&&($+=3)}for(var b=0;b<c;b+=1)for(var w=0;w<c-6;w+=1)l.isDark(b,w)&&!l.isDark(b,w+1)&&l.isDark(b,w+2)&&l.isDark(b,w+3)&&l.isDark(b,w+4)&&!l.isDark(b,w+5)&&l.isDark(b,w+6)&&($+=40);for(var w=0;w<c;w+=1)for(var b=0;b<c-6;b+=1)l.isDark(b,w)&&!l.isDark(b+1,w)&&l.isDark(b+2,w)&&l.isDark(b+3,w)&&l.isDark(b+4,w)&&!l.isDark(b+5,w)&&l.isDark(b+6,w)&&($+=40);for(var rt=0,w=0;w<c;w+=1)for(var b=0;b<c;b+=1)l.isDark(b,w)&&(rt+=1);var nt=Math.abs(100*rt/c/c-50)/5;return $+=nt*10,$},u}(),v=function(){for(var C=new Array(256),M=new Array(256),y=0;y<8;y+=1)C[y]=1<<y;for(var y=8;y<256;y+=1)C[y]=C[y-4]^C[y-5]^C[y-6]^C[y-8];for(var y=0;y<255;y+=1)M[C[y]]=y;var x={};return x.glog=function(u){if(u<1)throw"glog("+u+")";return M[u]},x.gexp=function(u){for(;u<0;)u+=255;for(;u>=256;)u-=255;return C[u]},x}();function H(C,M){if(typeof C.length>"u")throw C.length+"/"+M;var y=function(){for(var u=0;u<C.length&&C[u]==0;)u+=1;for(var k=new Array(C.length-u+M),l=0;l<C.length-u;l+=1)k[l]=C[l+u];return k}(),x={};return x.getAt=function(u){return y[u]},x.getLength=function(){return y.length},x.multiply=function(u){for(var k=new Array(x.getLength()+u.getLength()-1),l=0;l<x.getLength();l+=1)for(var c=0;c<u.getLength();c+=1)k[l+c]^=v.gexp(v.glog(x.getAt(l))+v.glog(u.getAt(c)));return H(k,0)},x.mod=function(u){if(x.getLength()-u.getLength()<0)return x;for(var k=v.glog(x.getAt(0))-v.glog(u.getAt(0)),l=new Array(x.getLength()),c=0;c<x.getLength();c+=1)l[c]=x.getAt(c);for(var c=0;c<u.getLength();c+=1)l[c]^=v.gexp(v.glog(u.getAt(c))+k);return H(l,0).mod(u)},x}var A=function(){var C=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],M=function(u,k){var l={};return l.totalCount=u,l.dataCount=k,l},y={},x=function(u,k){switch(k){case s.L:return C[(u-1)*4+0];case s.M:return C[(u-1)*4+1];case s.Q:return C[(u-1)*4+2];case s.H:return C[(u-1)*4+3];default:return}};return y.getRSBlocks=function(u,k){var l=x(u,k);if(typeof l>"u")throw"bad rs block @ typeNumber:"+u+"/errorCorrectionLevel:"+k;for(var c=l.length/3,$=[],b=0;b<c;b+=1)for(var w=l[b*3+0],O=l[b*3+1],z=l[b*3+2],B=0;B<w;B+=1)$.push(M(O,z));return $},y}(),F=function(){var C=[],M=0,y={};return y.getBuffer=function(){return C},y.getAt=function(x){var u=Math.floor(x/8);return(C[u]>>>7-x%8&1)==1},y.put=function(x,u){for(var k=0;k<u;k+=1)y.putBit((x>>>u-k-1&1)==1)},y.getLengthInBits=function(){return M},y.putBit=function(x){var u=Math.floor(M/8);C.length<=u&&C.push(0),x&&(C[u]|=128>>>M%8),M+=1},y},S=function(C){var M=i.MODE_NUMBER,y=C,x={};x.getMode=function(){return M},x.getLength=function(l){return y.length},x.write=function(l){for(var c=y,$=0;$+2<c.length;)l.put(u(c.substring($,$+3)),10),$+=3;$<c.length&&(c.length-$==1?l.put(u(c.substring($,$+1)),4):c.length-$==2&&l.put(u(c.substring($,$+2)),7))};var u=function(l){for(var c=0,$=0;$<l.length;$+=1)c=c*10+k(l.charAt($));return c},k=function(l){if("0"<=l&&l<="9")return l.charCodeAt(0)-48;throw"illegal char :"+l};return x},et=function(C){var M=i.MODE_ALPHA_NUM,y=C,x={};x.getMode=function(){return M},x.getLength=function(k){return y.length},x.write=function(k){for(var l=y,c=0;c+1<l.length;)k.put(u(l.charAt(c))*45+u(l.charAt(c+1)),11),c+=2;c<l.length&&k.put(u(l.charAt(c)),6)};var u=function(k){if("0"<=k&&k<="9")return k.charCodeAt(0)-48;if("A"<=k&&k<="Z")return k.charCodeAt(0)-65+10;switch(k){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+k}};return x},it=function(C){var M=i.MODE_8BIT_BYTE,y=r.stringToBytes(C),x={};return x.getMode=function(){return M},x.getLength=function(u){return y.length},x.write=function(u){for(var k=0;k<y.length;k+=1)u.put(y[k],8)},x},at=function(C){var M=i.MODE_KANJI,y=r.stringToBytesFuncs.SJIS;if(!y)throw"sjis not supported.";(function(k,l){var c=y(k);if(c.length!=2||(c[0]<<8|c[1])!=l)throw"sjis not supported."})("友",38726);var x=y(C),u={};return u.getMode=function(){return M},u.getLength=function(k){return~~(x.length/2)},u.write=function(k){for(var l=x,c=0;c+1<l.length;){var $=(255&l[c])<<8|255&l[c+1];if(33088<=$&&$<=40956)$-=33088;else if(57408<=$&&$<=60351)$-=49472;else throw"illegal char at "+(c+1)+"/"+$;$=($>>>8&255)*192+($&255),k.put($,13),c+=2}if(c<l.length)throw"illegal char at "+(c+1)},u},vt=function(){var C=[],M={};return M.writeByte=function(y){C.push(y&255)},M.writeShort=function(y){M.writeByte(y),M.writeByte(y>>>8)},M.writeBytes=function(y,x,u){x=x||0,u=u||y.length;for(var k=0;k<u;k+=1)M.writeByte(y[k+x])},M.writeString=function(y){for(var x=0;x<y.length;x+=1)M.writeByte(y.charCodeAt(x))},M.toByteArray=function(){return C},M.toString=function(){var y="";y+="[";for(var x=0;x<C.length;x+=1)x>0&&(y+=","),y+=C[x];return y+="]",y},M},we=function(){var C=0,M=0,y=0,x="",u={},k=function(c){x+=String.fromCharCode(l(c&63))},l=function(c){if(!(c<0)){if(c<26)return 65+c;if(c<52)return 97+(c-26);if(c<62)return 48+(c-52);if(c==62)return 43;if(c==63)return 47}throw"n:"+c};return u.writeByte=function(c){for(C=C<<8|c&255,M+=8,y+=1;M>=6;)k(C>>>M-6),M-=6},u.flush=function(){if(M>0&&(k(C<<6-M),C=0,M=0),y%3!=0)for(var c=3-y%3,$=0;$<c;$+=1)x+="="},u.toString=function(){return x},u},ke=function(C){var M=C,y=0,x=0,u=0,k={};k.read=function(){for(;u<8;){if(y>=M.length){if(u==0)return-1;throw"unexpected end of file./"+u}var c=M.charAt(y);if(y+=1,c=="=")return u=0,-1;if(c.match(/^\s$/))continue;x=x<<6|l(c.charCodeAt(0)),u+=6}var $=x>>>u-8&255;return u-=8,$};var l=function(c){if(65<=c&&c<=90)return c-65;if(97<=c&&c<=122)return c-97+26;if(48<=c&&c<=57)return c-48+52;if(c==43)return 62;if(c==47)return 63;throw"c:"+c};return k},$e=function(C,M){var y=C,x=M,u=new Array(C*M),k={};k.setPixel=function(b,w,O){u[w*y+b]=O},k.write=function(b){b.writeString("GIF87a"),b.writeShort(y),b.writeShort(x),b.writeByte(128),b.writeByte(0),b.writeByte(0),b.writeByte(0),b.writeByte(0),b.writeByte(0),b.writeByte(255),b.writeByte(255),b.writeByte(255),b.writeString(","),b.writeShort(0),b.writeShort(0),b.writeShort(y),b.writeShort(x),b.writeByte(0);var w=2,O=c(w);b.writeByte(w);for(var z=0;O.length-z>255;)b.writeByte(255),b.writeBytes(O,z,255),z+=255;b.writeByte(O.length-z),b.writeBytes(O,z,O.length-z),b.writeByte(0),b.writeString(";")};var l=function(b){var w=b,O=0,z=0,B={};return B.write=function(q,Y){if(q>>>Y)throw"length over";for(;O+Y>=8;)w.writeByte(255&(q<<O|z)),Y-=8-O,q>>>=8-O,z=0,O=0;z=q<<O|z,O=O+Y},B.flush=function(){O>0&&w.writeByte(z)},B},c=function(b){for(var w=1<<b,O=(1<<b)+1,z=b+1,B=$(),q=0;q<w;q+=1)B.add(String.fromCharCode(q));B.add(String.fromCharCode(w)),B.add(String.fromCharCode(O));var Y=vt(),rt=l(Y);rt.write(w,z);var nt=0,st=String.fromCharCode(u[nt]);for(nt+=1;nt<u.length;){var ht=String.fromCharCode(u[nt]);nt+=1,B.contains(st+ht)?st=st+ht:(rt.write(B.indexOf(st),z),B.size()<4095&&(B.size()==1<<z&&(z+=1),B.add(st+ht)),st=ht)}return rt.write(B.indexOf(st),z),rt.write(O,z),rt.flush(),Y.toByteArray()},$=function(){var b={},w=0,O={};return O.add=function(z){if(O.contains(z))throw"dup key:"+z;b[z]=w,w+=1},O.size=function(){return w},O.indexOf=function(z){return b[z]},O.contains=function(z){return typeof b[z]<"u"},O};return k},xe=function(C,M,y){for(var x=$e(C,M),u=0;u<M;u+=1)for(var k=0;k<C;k+=1)x.setPixel(k,u,y(k,u));var l=vt();x.write(l);for(var c=we(),$=l.toByteArray(),b=0;b<$.length;b+=1)c.writeByte($[b]);return c.flush(),"data:image/gif;base64,"+c};return r}();(function(){a.stringToBytesFuncs["UTF-8"]=function(r){function i(s){for(var n=[],o=0;o<s.length;o++){var v=s.charCodeAt(o);v<128?n.push(v):v<2048?n.push(192|v>>6,128|v&63):v<55296||v>=57344?n.push(224|v>>12,128|v>>6&63,128|v&63):(o++,v=65536+((v&1023)<<10|s.charCodeAt(o)&1023),n.push(240|v>>18,128|v>>12&63,128|v>>6&63,128|v&63))}return n}return i(r)}})(),function(r){t.exports=r()}(function(){return a})})(le);var Te=le.exports;const Ve=Ae(Te),He=1,pt=2,$t=3,Ee=4,Pe=5;function Oe(t){return{type:"auth",access_token:t}}function ze(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function De(){return{type:"get_states"}}function Se(t,e,a,r,i){const s={type:"call_service",domain:t,service:e,target:r,return_response:i};return a&&(s.service_data=a),s}function Be(t){const e={type:"subscribe_events"};return t&&(e.event_type=t),e}function Ut(t){return{type:"unsubscribe_events",subscription:t}}function Re(){return{type:"ping"}}function Ne(t,e){return{type:"result",success:!1,error:{code:t,message:e}}}const de=(t,e,a,r)=>{const[i,s,n]=t.split(".",3);return Number(i)>e||Number(i)===e&&(r===void 0?Number(s)>=a:Number(s)>a)||r!==void 0&&Number(i)===e&&Number(s)===a&&Number(n)>=r},Ie="auth_invalid",je="auth_ok";function We(t){if(!t.auth)throw Ee;const e=t.auth;let a=e.expired?e.refreshAccessToken().then(()=>{a=void 0},()=>{a=void 0}):void 0;const r=e.wsUrl;function i(s,n,o){const v=new WebSocket(r);let H=!1;const A=()=>{if(v.removeEventListener("close",A),H){o(pt);return}if(s===0){o(He);return}const et=s===-1?-1:s-1;setTimeout(()=>i(et,n,o),1e3)},F=async et=>{try{e.expired&&await(a||e.refreshAccessToken()),v.send(JSON.stringify(Oe(e.accessToken)))}catch(it){H=it===pt,v.close()}},S=async et=>{const it=JSON.parse(et.data);switch(it.type){case Ie:H=!0,v.close();break;case je:v.removeEventListener("open",F),v.removeEventListener("message",S),v.removeEventListener("close",A),v.removeEventListener("error",A),v.haVersion=it.ha_version,de(v.haVersion,2022,9)&&v.send(JSON.stringify(ze())),n(v);break}};v.addEventListener("open",F),v.addEventListener("message",S),v.addEventListener("close",A),v.addEventListener("error",A)}return new Promise((s,n)=>i(t.setupRetry,s,n))}class Ue{constructor(e,a){this._handleMessage=r=>{let i=JSON.parse(r.data);Array.isArray(i)||(i=[i]),i.forEach(s=>{const n=this.commands.get(s.id);switch(s.type){case"event":n?n.callback(s.event):(console.warn(`Received event for unknown subscription ${s.id}. Unsubscribing.`),this.sendMessagePromise(Ut(s.id)).catch(o=>{}));break;case"result":n&&(s.success?(n.resolve(s.result),"subscribe"in n||this.commands.delete(s.id)):(n.reject(s.error),this.commands.delete(s.id)));break;case"pong":n?(n.resolve(),this.commands.delete(s.id)):console.warn(`Received unknown pong response ${s.id}`);break}})},this._handleClose=async()=>{const r=this.commands;if(this.commandId=1,this.oldSubscriptions=this.commands,this.commands=new Map,this.socket=void 0,r.forEach(n=>{"subscribe"in n||n.reject(Ne($t,"Connection lost"))}),this.closeRequested)return;this.fireEvent("disconnected");const i=Object.assign(Object.assign({},this.options),{setupRetry:0}),s=n=>{setTimeout(async()=>{if(!this.closeRequested)try{const o=await i.createSocket(i);this._setSocket(o)}catch(o){if(this._queuedMessages){const v=this._queuedMessages;this._queuedMessages=void 0;for(const H of v)H.reject&&H.reject($t)}o===pt?this.fireEvent("reconnect-error",o):s(n+1)}},Math.min(n,5)*1e3)};this.suspendReconnectPromise&&(await this.suspendReconnectPromise,this.suspendReconnectPromise=void 0,this._queuedMessages=[]),s(0)},this.options=a,this.commandId=2,this.commands=new Map,this.eventListeners=new Map,this.closeRequested=!1,this._setSocket(e)}get connected(){return this.socket!==void 0&&this.socket.readyState==this.socket.OPEN}_setSocket(e){this.socket=e,this.haVersion=e.haVersion,e.addEventListener("message",this._handleMessage),e.addEventListener("close",this._handleClose);const a=this.oldSubscriptions;a&&(this.oldSubscriptions=void 0,a.forEach(i=>{"subscribe"in i&&i.subscribe&&i.subscribe().then(s=>{i.unsubscribe=s,i.resolve()})}));const r=this._queuedMessages;if(r){this._queuedMessages=void 0;for(const i of r)i.resolve()}this.fireEvent("ready")}addEventListener(e,a){let r=this.eventListeners.get(e);r||(r=[],this.eventListeners.set(e,r)),r.push(a)}removeEventListener(e,a){const r=this.eventListeners.get(e);if(!r)return;const i=r.indexOf(a);i!==-1&&r.splice(i,1)}fireEvent(e,a){(this.eventListeners.get(e)||[]).forEach(r=>r(this,a))}suspendReconnectUntil(e){this.suspendReconnectPromise=e}suspend(){if(!this.suspendReconnectPromise)throw new Error("Suspend promise not set");this.socket&&this.socket.close()}reconnect(e=!1){if(this.socket){if(!e){this.socket.close();return}this.socket.removeEventListener("message",this._handleMessage),this.socket.removeEventListener("close",this._handleClose),this.socket.close(),this._handleClose()}}close(){this.closeRequested=!0,this.socket&&this.socket.close()}async subscribeEvents(e,a){return this.subscribeMessage(e,Be(a))}ping(){return this.sendMessagePromise(Re())}sendMessage(e,a){if(!this.connected)throw $t;if(this._queuedMessages){if(a)throw new Error("Cannot queue with commandId");this._queuedMessages.push({resolve:()=>this.sendMessage(e)});return}a||(a=this._genCmdId()),e.id=a,this.socket.send(JSON.stringify(e))}sendMessagePromise(e){return new Promise((a,r)=>{if(this._queuedMessages){this._queuedMessages.push({reject:r,resolve:async()=>{try{a(await this.sendMessagePromise(e))}catch(s){r(s)}}});return}const i=this._genCmdId();this.commands.set(i,{resolve:a,reject:r}),this.sendMessage(e,i)})}async subscribeMessage(e,a,r){this._queuedMessages&&await new Promise((s,n)=>{this._queuedMessages.push({resolve:s,reject:n})});let i;return await new Promise((s,n)=>{const o=this._genCmdId();i={resolve:s,reject:n,callback:e,subscribe:r?.resubscribe!==!1?()=>this.subscribeMessage(e,a):void 0,unsubscribe:async()=>{this.connected&&await this.sendMessagePromise(Ut(o)),this.commands.delete(o)}},this.commands.set(o,i);try{this.sendMessage(a,o)}catch{}}),()=>i.unsubscribe()}_genCmdId(){return++this.commandId}}const Fe=t=>t*1e3+Date.now();async function qe(t,e,a){const r=typeof location<"u"&&location;if(r&&r.protocol==="https:"){const o=document.createElement("a");if(o.href=t,o.protocol==="http:"&&o.hostname!=="localhost")throw Pe}const i=new FormData;e!==null&&i.append("client_id",e),Object.keys(a).forEach(o=>{i.append(o,a[o])});const s=await fetch(`${t}/auth/token`,{method:"POST",credentials:"same-origin",body:i});if(!s.ok)throw s.status===400||s.status===403?pt:new Error("Unable to fetch tokens");const n=await s.json();return n.hassUrl=t,n.clientId=e,n.expires=Fe(n.expires_in),n}class Ze{constructor(e,a){this.data=e,this._saveTokens=a}get wsUrl(){return`ws${this.data.hassUrl.substr(4)}/api/websocket`}get accessToken(){return this.data.access_token}get expired(){return Date.now()>this.data.expires}async refreshAccessToken(){if(!this.data.refresh_token)throw new Error("No refresh_token");const e=await qe(this.data.hassUrl,this.data.clientId,{grant_type:"refresh_token",refresh_token:this.data.refresh_token});e.refresh_token=this.data.refresh_token,this.data=e,this._saveTokens&&this._saveTokens(e)}async revoke(){if(!this.data.refresh_token)throw new Error("No refresh_token to revoke");const e=new FormData;e.append("token",this.data.refresh_token),await fetch(`${this.data.hassUrl}/auth/revoke`,{method:"POST",credentials:"same-origin",body:e}),this._saveTokens&&this._saveTokens(null)}}function Ge(t,e){return new Ze({hassUrl:t,clientId:null,expires:Date.now()+1e11,refresh_token:"",access_token:e,expires_in:1e11})}const Ye=t=>{let e=[];function a(i){let s=[];for(let n=0;n<e.length;n++)e[n]===i?i=null:s.push(e[n]);e=s}function r(i,s){t=s?i:Object.assign(Object.assign({},t),i);let n=e;for(let o=0;o<n.length;o++)n[o](t)}return{get state(){return t},action(i){function s(n){r(n,!1)}return function(){let n=[t];for(let v=0;v<arguments.length;v++)n.push(arguments[v]);let o=i.apply(this,n);if(o!=null)return o instanceof Promise?o.then(s):s(o)}},setState:r,clearState(){t=void 0},subscribe(i){return e.push(i),()=>{a(i)}}}},Ke=5e3,Ft=(t,e,a,r,i={unsubGrace:!0})=>{if(t[e])return t[e];let s=0,n,o,v=Ye();const H=()=>{if(!a)throw new Error("Collection does not support refresh");return a(t).then(at=>v.setState(at,!0))},A=()=>H().catch(at=>{if(t.connected)throw at}),F=()=>{if(o!==void 0){clearTimeout(o),o=void 0;return}r&&(n=r(t,v)),a&&(t.addEventListener("ready",A),A()),t.addEventListener("disconnected",it)},S=()=>{o=void 0,n&&n.then(at=>{at()}),v.clearState(),t.removeEventListener("ready",H),t.removeEventListener("disconnected",it)},et=()=>{o=setTimeout(S,Ke)},it=()=>{o&&(clearTimeout(o),S())};return t[e]={get state(){return v.state},refresh:H,subscribe(at){s++,s===1&&F();const vt=v.subscribe(at);return v.state!==void 0&&setTimeout(()=>at(v.state),0),()=>{vt(),s--,s||(i.unsubGrace?et():S())}}},t[e]},Xe=t=>t.sendMessagePromise(De()),Qe=(t,e,a,r,i,s)=>t.sendMessagePromise(Se(e,a,r,i,s));function Je(t,e){const a=Object.assign({},t.state);if(e.a)for(const r in e.a){const i=e.a[r];let s=new Date(i.lc*1e3).toISOString();a[r]={entity_id:r,state:i.s,attributes:i.a,context:typeof i.c=="string"?{id:i.c,parent_id:null,user_id:null}:i.c,last_changed:s,last_updated:i.lu?new Date(i.lu*1e3).toISOString():s}}if(e.r)for(const r of e.r)delete a[r];if(e.c)for(const r in e.c){let i=a[r];if(!i){console.warn("Received state update for unknown entity",r);continue}i=Object.assign({},i);const{"+":s,"-":n}=e.c[r],o=s?.a||n?.a,v=o?Object.assign({},i.attributes):i.attributes;if(s&&(s.s!==void 0&&(i.state=s.s),s.c&&(typeof s.c=="string"?i.context=Object.assign(Object.assign({},i.context),{id:s.c}):i.context=Object.assign(Object.assign({},i.context),s.c)),s.lc?i.last_updated=i.last_changed=new Date(s.lc*1e3).toISOString():s.lu&&(i.last_updated=new Date(s.lu*1e3).toISOString()),s.a&&Object.assign(v,s.a)),n?.a)for(const H of n.a)delete v[H];o&&(i.attributes=v),a[r]=i}t.setState(a,!0)}const ta=(t,e)=>t.subscribeMessage(a=>Je(e,a),{type:"subscribe_entities"});function ea(t,e){const a=t.state;if(a===void 0)return;const{entity_id:r,new_state:i}=e.data;if(i)t.setState({[i.entity_id]:i});else{const s=Object.assign({},a);delete s[r],t.setState(s,!0)}}async function aa(t){const e=await Xe(t),a={};for(let r=0;r<e.length;r++){const i=e[r];a[i.entity_id]=i}return a}const ra=(t,e)=>t.subscribeEvents(a=>ea(e,a),"state_changed"),ia=t=>de(t.haVersion,2022,4,0)?Ft(t,"_ent",void 0,ta):Ft(t,"_ent",aa,ra),na=(t,e)=>ia(t).subscribe(e);async function sa(t){const e=Object.assign({setupRetry:0,createSocket:We},t),a=await e.createSocket(e);return new Ue(a,e)}const Vt="pine3_home.token",oa="/api/pine3_home";function ca(){try{return localStorage.getItem(Vt)}catch{return null}}function qt(t){try{t?localStorage.setItem(Vt,t):localStorage.removeItem(Vt)}catch{}}async function ue(t,e){const a=await fetch(`${oa}${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e??{})}),r=await a.json().catch(()=>({}));if(!a.ok)throw new Error(r.error??r.message??`HTTP ${a.status}`);return r}const la=()=>ue("/pair/start"),da=t=>ue("/pair/status",{pair_id:t.pair_id,secret:t.secret});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=St(class extends Bt{constructor(t){if(super(t),t.type!==Dt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const a=t.element.classList;for(const r of this.st)r in e||(a.remove(r),this.st.delete(r));for(const r in e){const i=!!e[r];i===this.st.has(r)||this.nt?.has(r)||(i?(a.add(r),this.st.add(r)):(a.remove(r),this.st.delete(r)))}return zt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he="important",ua=" !"+he,ha=St(class extends Bt{constructor(t){if(super(t),t.type!==Dt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,a)=>{const r=t[a];return r==null?e:e+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:a}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?a.removeProperty(r):a[r]=null);for(const r in e){const i=e[r];if(i!=null){this.ft.add(r);const s=typeof i=="string"&&i.endsWith(ua);r.includes("-")||s?a.setProperty(r,s?i.slice(0,-11):i,s?he:""):a[r]=i}}return zt}});var fa="M10 10V12H8V10H10M16 12V10H14V12H16M21 14V22H3V14H4V10C4 5.58 7.58 2 12 2S20 5.58 20 10V14H21M7 16H5V20H7V16M11 16H9V20H11V16M11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08M13 14H18V10C18 7.03 15.84 4.56 13 4.08V14M15 16H13V20H15V16M19 16H17V20H19V16Z",ga="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z",pa="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",va="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",ma="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",ba="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z",ya="M3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8V19H19V17H15V19H13V8H5V19H3V8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6M16 10.5V11H18V10.5C18 10.22 17.78 10 17.5 10H16.5C16.22 10 16 10.22 16 10.5M16 14.5V15H18V14.5C18 14.22 17.78 14 17.5 14H16.5C16.22 14 16 14.22 16 14.5Z",wa="M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z",ka="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z",$a="M8.66,13.07C6.92,13.07 5.5,11.66 5.5,9.93C5.5,9.22 5.76,8.54 6.19,8C5.77,7.46 5.5,6.78 5.5,6.07C5.5,4.34 6.93,2.93 8.66,2.93L9.09,2.96C9.56,1.81 10.69,1 12,1C13.31,1 14.44,1.81 14.91,2.96L15.34,2.93C17.07,2.93 18.5,4.34 18.5,6.07C18.5,6.78 18.24,7.46 17.81,8C18.23,8.54 18.5,9.22 18.5,9.93C18.5,11.66 17.07,13.07 15.34,13.07L14.91,13.04C14.44,14.19 13.31,15 12,15C10.69,15 9.56,14.19 9.09,13.04L8.66,13.07M12,13C12.62,13 13.12,12.5 13.14,11.9L13.03,10.81C12.71,10.93 12.36,11 12,11C11.64,11 11.3,10.93 11,10.81L10.86,11.9C10.88,12.5 11.38,13 12,13M15.34,11.07C15.97,11.07 16.5,10.56 16.5,9.92C16.5,9.5 16.23,9.08 15.83,8.89L14.95,8.47C14.83,9.21 14.44,9.85 13.89,10.3L14.7,10.87C14.88,11 15.1,11.07 15.34,11.07M14.69,5.13L13.87,5.69C14.43,6.14 14.82,6.78 14.94,7.5L15.82,7.1C16.23,6.9 16.5,6.5 16.5,6.07C16.5,5.44 15.97,4.93 15.34,4.93C15.11,4.93 14.89,5 14.69,5.13M12,3C11.38,3 10.88,3.5 10.86,4.1L11,5.19C11.3,5.07 11.64,5 12,5C12.36,5 12.71,5.07 13.03,5.19L13.14,4.1C13.12,3.5 12.62,3 12,3M8.66,4.93C8.03,4.93 7.5,5.44 7.5,6.07C7.5,6.5 7.77,6.9 8.17,7.1L9.05,7.5C9.17,6.78 9.56,6.14 10.11,5.69L9.3,5.13C9.12,5 8.9,4.93 8.66,4.93M8.17,8.9C7.77,9.1 7.5,9.5 7.5,9.92C7.5,10.55 8.03,11.06 8.66,11.06C8.89,11.06 9.11,11 9.31,10.86L10.12,10.31C9.56,9.86 9.17,9.22 9.05,8.5L8.17,8.9M12,22A9,9 0 0,1 3,13A9,9 0 0,1 12,22A9,9 0 0,1 21,13A9,9 0 0,1 12,22M14.44,19.56C16.34,18.85 17.85,17.34 18.56,15.44C16.66,16.14 15.15,17.66 14.44,19.56M5.44,15.44C6.15,17.34 7.66,18.85 9.56,19.56C8.86,17.66 7.34,16.15 5.44,15.44Z",xa="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",_a="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z",Ca="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",Ma="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",La="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",Aa="M19,13H5V11H19V13Z",Ta="M14,19H18V5H14M6,19H10V5H6V19Z",Va="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z",Ha="M8,5.14V19.14L19,12.14L8,5.14Z",Ea="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",Pa="M2,15C3.67,14.25 5.33,13.5 7,13.17V5A3,3 0 0,1 10,2C11.31,2 12.42,2.83 12.83,4H10A1,1 0 0,0 9,5V6H14V5A3,3 0 0,1 17,2C18.31,2 19.42,2.83 19.83,4H17A1,1 0 0,0 16,5V14.94C18,14.62 20,13 22,13V15C19.78,15 17.56,17 15.33,17C13.11,17 10.89,15 8.67,15C6.44,15 4.22,16 2,17V15M14,8H9V10H14V8M14,12H9V13C10.67,13.16 12.33,14.31 14,14.79V12M2,19C4.22,18 6.44,17 8.67,17C10.89,17 13.11,19 15.33,19C17.56,19 19.78,17 22,17V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V19Z",Oa="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",za="M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z",Da="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z",Sa="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14",Ba="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z",Ra="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z",Na="M16,18H18V6H16M6,18L14.5,12L6,6V18Z",Ia="M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z",ja="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z",Wa="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z",Ua="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12",Fa="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",qa="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",Za="M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z";const P={home:_a,therm:qa,bulb:Ca,shield:Sa,spark:ba,play:Ha,pause:Ta,next:Na,minus:Aa,plus:Ea,close:ma,back:va,lock:Ma,unlock:La,power:Oa,room:Fa,edit:Va,resize:za,check:pa,restore:Da},Ga={"mdi:shower":Ba,"mdi:silverware-fork-knife":Ra,"mdi:table-chair":Wa,"mdi:sofa":Ia,"mdi:bed":ga,"mdi:teddy-bear":Ua,"mdi:desk":ya,"mdi:garage":xa,"mdi:flower":$a,"mdi:balcony":fa,"mdi:pool":Pa,"mdi:washing-machine":Za,"mdi:door":wa,"mdi:dumbbell":ka,"mdi:stairs":ja},bt=t=>t&&Ga[t]||P.room;let Ya=0;const fe=t=>`${t}${++Ya}`,J=t=>I`<svg class="art" viewBox="0 0 60 60" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">${t}</svg>`;function Zt(t,e="#ffcf8a"){const a=fe("l");return J(I`<defs><radialGradient id=${a} cx="36" cy="40" r="28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${e} stop-opacity=${t/100*.85}/><stop offset="1" stop-color=${e} stop-opacity="0"/></radialGradient></defs>
    <circle cx="36" cy="40" r="28" fill=${`url(#${a})`}/><line x1="36" y1="0" x2="36" y2="22" stroke="#6b717a" stroke-width=".8"/>
    <path d="M25 34 L47 34 L41.5 21 L30.5 21 Z" fill=${t?"#d9c6a3":"#4a4f57"}/><ellipse cx="36" cy="34.5" rx="11" ry="1.7" fill=${t?"#fff2d6":"#3a3e45"}/>`)}function Ka(t){const e=Math.max(0,Math.min(100,100-t)),a=Array.from({length:Math.round(e/11)},(r,i)=>I`<line x1="20" x2="54" y1=${12+i*4.2} y2=${12+i*4.2} stroke="#8796a6" stroke-width=".5"/>`);return J(I`<rect x="20" y="10" width="34" height="46" rx="2" fill="#2d4a66" opacity=".6"/><circle cx="44" cy="22" r="5" fill="#ffd27a" opacity=".5"/>
    <rect x="20" y="10" width="34" height=${(46*e/100).toFixed(1)} fill="#a9b6c4"/>${a}<rect x="18" y="8" width="38" height="3" rx="1" fill="#5d646e"/>`)}function Xa(t,e="#ff9f43"){const a=t==null?0:Math.max(0,Math.min(1,(t-16)/14));return J(I`<circle cx="40" cy="36" r="17" fill="#2a2e34" stroke="#454a52"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="2.6" stroke-dasharray=${`${(a*81).toFixed(1)} 82`} transform="rotate(135 40 36)" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="7" opacity=".08"/>`)}function Qa(t){return J(I`<rect x="28" y="12" width="24" height="44" rx="3" fill="#3a3f46"/><rect x="31" y="15" width="18" height="38" rx="2" fill="#2b2f35"/>
    <circle cx="34" cy="34" r="1.6" fill=${t?"#ff8a5c":"#5be3a0"}/><rect x=${t?44:38} y="33.2" width="6" height="1.6" rx=".8" fill="#8a919b"/>`)}function Ja(t){return J(I`<ellipse cx="40" cy="50" rx="16" ry="4" fill="#000" opacity=".3"/><ellipse cx="40" cy="44" rx="15" ry="6" fill="#d8dce1"/><rect x="25" y="38" width="30" height="6" fill="#d8dce1"/>
    <ellipse cx="40" cy="38" rx="15" ry="6" fill="#eef0f3"/><circle cx="40" cy="36" r="3.4" fill=${t?"#5be3a0":"#c4c9cf"}/>
    ${t?I`<path d="M10 50 Q20 46 26 48" stroke="#5be3a0" stroke-width=".8" fill="none" stroke-dasharray="1.2 1.2" opacity=".8"/>`:null}`)}function tr(t){if(t)return J(I`<image href=${t} x="26" y="14" width="30" height="30" preserveAspectRatio="xMidYMid slice" transform="rotate(6 41 29)"/>`);const e=fe("a");return J(I`<defs><linearGradient id=${e} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3a35f"/><stop offset=".5" stop-color="#d96d6d"/><stop offset=".75" stop-color="#5c4a8a"/><stop offset="1" stop-color="#2e2a54"/></linearGradient></defs>
    <rect x="26" y="14" width="30" height="30" rx="3" fill=${`url(#${e})`} transform="rotate(6 41 29)"/><circle cx="46" cy="22" r="3" fill="#ffe7b8" opacity=".9" transform="rotate(6 41 29)"/>`)}function Gt(t){const e=!/rain|pour|snow|fog|cloudy$|lightning|night/.test(t)||t==="partlycloudy",a=t!=="sunny"&&t!=="clear-night",r=/rain|pour|lightning/.test(t),i=t==="clear-night";return J(I`${e?I`<circle cx="44" cy="20" r="8" fill="#ffd27a" opacity=".85"/>`:null}
    ${i?I`<path d="M46 12a9 9 0 1 0 6 14 7 7 0 1 1-6-14z" fill="#e8e3c8" opacity=".9"/>`:null}
    ${a?I`<path d="M28 36h20a6 6 0 0 0 .6-12 9 9 0 0 0-17 2.5A5 5 0 0 0 28 36z" fill="#cfd6df"/>`:null}
    ${r?I`<path d="M32 40l-2 6M38 40l-2 6M44 40l-2 6" stroke="#6cc8ff" stroke-width="1.4" stroke-linecap="round"/>`:null}`)}function er(t){return J(I`<g transform="translate(40 34)"><g class=${t?"spin":""}>
    ${[0,120,240].map(e=>I`<ellipse cx="0" cy="-8" rx="4" ry="8" fill="#cfd6df" opacity=".85" transform=${`rotate(${e})`}/>`)}
    </g><circle r="2.6" fill="#8a919b"/></g>`)}function ar(t){return J(I`<rect x="28" y="20" width="24" height="24" rx="6" fill="#3a3f46"/><circle cx="36" cy="32" r="1.8" fill="#1b1e22"/><circle cx="44" cy="32" r="1.8" fill="#1b1e22"/>
    <circle cx="48" cy="24" r="1.4" fill=${t?"#5be3a0":"#5d646e"}/>`)}function rr(t,e){let a="M0 26 L100 26";if(e&&e.length>1){const r=Math.min(...e),s=Math.max(...e)-r||1;a=e.map((o,v)=>[v/(e.length-1)*100,34-(o-r)/s*26]).map(([o,v],H)=>`${H?"L":"M"}${o.toFixed(1)} ${v.toFixed(1)}`).join(" ")}return I`<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d=${`${a} V40 H0Z`} fill=${t} opacity=".12"/><path d=${a} fill="none" stroke=${t} stroke-width="1.4" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity=".85"/></svg>`}function ir(){return J(I`<circle cx="42" cy="34" r="14" fill="#b49cff" opacity=".18"/><path d="M42 22l2.6 7.4L52 32l-7.4 2.6L42 42l-2.6-7.4L32 32l7.4-2.6z" fill="#d9ccff"/><path d="M52 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#ffe2b0"/>`)}const G=t=>t.split(".")[0],dt=t=>!!t&&!["off","unavailable","unknown","closed","locked","idle","standby","docked"].includes(t.state),nr=t=>!t||t.state==="unavailable";function Ht(t){if(!t||t.state!=="on")return 0;const e=t.attributes.brightness;return e==null?100:Math.max(1,Math.round(e/255*100))}function xt(t){const e=t?.attributes.rgb_color,a=t?.attributes.color_mode;if(e&&a&&!["color_temp","brightness","onoff","white"].includes(a))return`rgb(${e.join(",")})`;const r=t?.attributes.color_temp_kelvin;return r?r>=5e3?"#e6f0ff":r>=3800?"#fff1d6":"#ffcf8a":"#ffcf8a"}const ut=t=>t.devices.filter(e=>G(e.id)==="light"&&!e.hidden).map(e=>e.id);function sr(t,e){const a=t.filter(r=>e[r]?.state==="on");return a.length?Math.round(a.reduce((r,i)=>r+Ht(e[i]),0)/a.length):0}const Yt={light:"light",climate:"climate",lock:"lock",cover:"cover",media_player:"media",vacuum:"vacuum",fan:"fan",switch:"switch",input_boolean:"switch",outlet:"outlet",sensor:"sensor",binary_sensor:"binary",camera:"camera"};function Rt(t,e){const a=Yt[t.kind??G(t.id)]??Yt[G(t.id)];if(!a)return null;const r=a==="climate"?"l":a==="media"||a==="camera"?"m":"s";return{key:t.id,kind:a,size:r,name:t.name,sub:e?.name,entity:t.id,room:e}}function Et(t,e){const a=t.rooms.filter(n=>!n.hidden),r=a.flatMap(n=>n.devices.filter(o=>!o.hidden).map(o=>({d:o,r:n}))),i=n=>r.filter(({d:o})=>(o.kind??G(o.id))===n),s=[];return a.forEach((n,o)=>{const v=ut(n);v.length&&s.push({key:`room-${n.id}`,kind:"room-lights",size:o===0?"m":"s",name:n.name,entities:v,room:n})}),i("climate").forEach(({d:n,r:o},v)=>s.push({key:n.id,kind:"climate",size:v===0?"l":"m",name:n.name,sub:o.name,entity:n.id,room:o})),t.weather&&e[t.weather]&&s.push({key:t.weather,kind:"weather",size:"l",name:"Tempo",entity:t.weather}),i("lock").forEach(({d:n,r:o})=>s.push({key:n.id,kind:"lock",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),i("cover").forEach(({d:n,r:o})=>s.push({key:n.id,kind:"cover",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),i("media_player").sort((n,o)=>+(e[o.d.id]?.state==="playing")-+(e[n.d.id]?.state==="playing")).slice(0,2).forEach(({d:n,r:o})=>s.push({key:n.id,kind:"media",size:"m",name:n.name,sub:o.name,entity:n.id,room:o})),i("vacuum").forEach(({d:n,r:o})=>s.push({key:n.id,kind:"vacuum",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),t.scenes.length&&s.push({key:"scenes",kind:"scenes",size:"m",name:"Cenas",entities:t.scenes.slice(0,6)}),s}const or=[{id:"all",name:"Tudo",kinds:[]},{id:"lights",name:"Luzes",kinds:["light"]},{id:"climate",name:"Clima",kinds:["climate","fan"]},{id:"covers",name:"Estores",kinds:["cover"]},{id:"media",name:"Média",kinds:["media"]},{id:"other",name:"Outros",kinds:["switch","outlet","lock","vacuum","sensor","binary","camera"]}];function cr(t){return t.devices.filter(e=>!e.hidden).map(e=>Rt(e,t)).filter(e=>!!e)}function ct(t,e){const a=t.rooms.filter(o=>!o.hidden).flatMap(o=>o.devices),r=a.filter(o=>G(o.id)==="light"&&e[o.id]?.state==="on").length,i=a.filter(o=>G(o.id)==="lock"&&e[o.id]?.state==="unlocked").length,s=a.filter(o=>G(o.id)==="binary_sensor"&&["door","window","garage_door","opening"].includes(e[o.id]?.attributes.device_class)&&e[o.id]?.state==="on").length,n=t.rooms.map(o=>o.temperature?parseFloat(e[o.temperature]?.state??""):NaN).filter(o=>!Number.isNaN(o));return{lightsOn:r,alerts:i+s,alertText:i?`${i} destrancada${i>1?"s":""}`:s?`${s} aberta${s>1?"s":""}`:"tudo fechado",temp:n.length?`${Math.round(Math.min(...n))}–${Math.round(Math.max(...n))}°`:null}}const K=(t,e=1)=>t.toLocaleString("pt-PT",{maximumFractionDigits:e}),lr=["door","window","garage_door","opening"],ge=t=>t.rooms.filter(e=>!e.hidden).flatMap(e=>e.devices.filter(a=>!a.hidden).map(a=>({d:a,r:e})));function dr(t,e){const a=[],r=ge(t);return r.filter(({d:i})=>G(i.id)==="climate").forEach(({d:i,r:s})=>a.push({key:i.id,kind:"climate",size:"l",name:i.name,sub:s.name,entity:i.id,room:s})),t.weather&&e[t.weather]&&a.push({key:t.weather,kind:"weather",size:"l",name:"Tempo",entity:t.weather}),r.filter(({d:i})=>G(i.id)==="fan").forEach(({d:i,r:s})=>a.push({key:i.id,kind:"fan",size:"s",name:i.name,sub:s.name,entity:i.id,room:s})),t.rooms.filter(i=>!i.hidden).forEach(i=>{i.temperature&&e[i.temperature]&&a.push({key:`t-${i.id}`,kind:"sensor",size:"s",name:i.name,sub:"temperatura",entity:i.temperature,room:i}),i.humidity&&e[i.humidity]&&a.push({key:`h-${i.id}`,kind:"sensor",size:"s",name:i.name,sub:"humidade",entity:i.humidity,room:i})}),a}function ur(t,e){const a=ge(t),r=a.filter(({d:n})=>G(n.id)==="lock"),i=a.filter(({d:n})=>G(n.id)==="binary_sensor"&&[...lr,"motion","occupancy","presence","moisture","smoke","gas"].includes(e[n.id]?.attributes.device_class));i.sort((n,o)=>+(e[o.d.id]?.state==="on")-+(e[n.d.id]?.state==="on"));const s=a.filter(({d:n})=>G(n.id)==="camera");return[...r.map(({d:n,r:o})=>({key:n.id,kind:"lock",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),...i.map(({d:n,r:o})=>({key:n.id,kind:"binary",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),...s.map(({d:n,r:o})=>({key:n.id,kind:"camera",size:"m",name:n.name,sub:o.name,entity:n.id,room:o}))]}function hr(t,e){return[...t.scenes,...t.scripts].filter(a=>e[a]).map(a=>({key:a,kind:"scene",size:"s",name:e[a].attributes.friendly_name??a,entity:a}))}const fr=["climate","weather","media","scenes","camera","clock"],pe=t=>fr.includes(t)?["m","l","xl"]:["s","m","l"];function gr(t,e){for(const a of t.rooms){const r=a.devices.find(i=>i.id===e);if(r)return Rt(r,a)}return null}function Kt(t,e,a){if(!e)return t;const r=new Map(t.map(o=>[o.key,o])),i=new Set(e.hidden),s=[],n=new Set;for(const o of e.items){if(n.has(o.key)||i.has(o.key))continue;const v=r.get(o.key)??gr(a,o.key);if(!v)continue;n.add(o.key);const H=o.size&&pe(v.kind).includes(o.size)?o.size:v.size;s.push({...v,size:H})}for(const o of t)!n.has(o.key)&&!i.has(o.key)&&s.push(o);return s}function pr(t,e,a){const r=new Set(e.items.map(n=>n.key)),i=t.filter(n=>e.hidden.includes(n.key)),s=a.rooms.filter(n=>!n.hidden).flatMap(n=>n.devices.filter(o=>!o.hidden).map(o=>Rt(o,n))).filter(n=>!!n&&!r.has(n.key)&&!i.some(o=>o.key===n.key)&&!t.some(o=>o.key===n.key&&!e.hidden.includes(o.key)));return[...i,...s]}function ve(t,e,a){return t?e?e===t?t===1?"luz acesa":`${t} luzes acesas`:`${e} de ${t} luzes acesas`:t===1?"luz apagada":"luzes apagadas":`${a} dispositivo${a===1?"":"s"}`}const Nt=yt`
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
`;var vr=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,W=(t,e,a,r)=>{for(var i=r>1?void 0:r?mr(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(r?n(e,a,i):n(i))||i);return r&&i&&vr(e,a,i),i};const br=550,_t=10,Ct={heat:"Calor",cool:"Frio",heat_cool:"Auto",auto:"Auto",dry:"Seco",fan_only:"Ventilar",off:"Off"},Xt={heating:"a aquecer",cooling:"a arrefecer",idle:"em pausa",off:"desligado",drying:"a secar",fan:"a ventilar"},Mt={"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",hail:"granizo",lightning:"trovoada","lightning-rainy":"trovoada e chuva",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve","snowy-rainy":"chuva e neve",sunny:"sol",windy:"vento","windy-variant":"vento",exceptional:"excecional"},Qt={cleaning:"a limpar",docked:"na base",returning:"a voltar à base",paused:"em pausa",idle:"parado",error:"erro"},yr={open:"aberto",closed:"fechado",opening:"a abrir",closing:"a fechar"},Lt={yellow:"amarelo",orange:"laranja",red:"vermelho"},Jt={yellow:1,orange:2,red:3},wr=10*6e4,kr=10*6e4,te=[{id:"@clima",name:"Clima",icon:P.therm},{id:"@seguranca",name:"Segurança",icon:P.shield},{id:"@cenas",name:"Cenas",icon:P.spark}],$r=["#ffcf8a","#fff1d6","#ff8a5c","#ff6fae","#b49cff","#6cc8ff","#5be3a0"],D=t=>I`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`;let R=class extends ce{constructor(){super(...arguments),this.entities={},this.screenName="",this.canEdit=!1,this.ambient=!1,this.wallpanel=!1,this.editing=null,this.draft=null,this.moving=null,this.saving=!1,this.lastReorder=0,this.view="home",this.category="all",this.sheet=null,this.drag=null,this.now=new Date,this.hourly=[],this.warnings=[],this.history={},this.flash=null,this.historyAt={},this.historyWanted=new Set,this.ipmaAt=0,this.ipmaArea=null,this.forecastAt=0}connectedCallback(){super.connectedCallback(),this.clock=window.setInterval(()=>this.now=new Date,1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clock)}willUpdate(t){t.has("home")&&this.view!=="home"&&!this.view.startsWith("@")&&!this.home.rooms.some(a=>a.id===this.view)&&(this.view="home");const e=this.home?.settings?.ipma_area??null;(e!==this.ipmaArea||e&&Date.now()-this.ipmaAt>kr)&&(this.ipmaArea=e,this.ipmaAt=Date.now(),e&&this.conn?this.loadWarnings(e):this.warnings=[]),this.home?.weather&&Date.now()-this.forecastAt>30*6e4&&this.conn&&(this.forecastAt=Date.now(),this.loadForecast(this.home.weather))}async loadForecast(t){try{const e=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"hourly"},target:{entity_id:t},return_response:!0});this.hourly=(e.response?.[t]?.forecast??[]).slice(1,7).filter((a,r)=>r%2===0)}catch{this.hourly=[]}}updated(){const t=Date.now(),e=[...this.historyWanted].filter(a=>t-(this.historyAt[a]??0)>wr);this.historyWanted.clear(),e.length&&this.conn&&(e.forEach(a=>this.historyAt[a]=t),this.loadHistory(e))}async loadHistory(t){try{const e=await this.conn.sendMessagePromise({type:"history/history_during_period",start_time:new Date(Date.now()-864e5).toISOString(),entity_ids:t,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),a={...this.history};for(const r of t){const i=(e[r]??[]).map(n=>parseFloat(n.s)).filter(n=>!Number.isNaN(n)),s=Math.max(1,Math.ceil(i.length/48));a[r]=i.filter((n,o)=>o%s===0||o===i.length-1)}this.history=a}catch(e){console.warn("Pine3 Home: history",e)}}async loadWarnings(t){try{const e=await this.conn.sendMessagePromise({type:"pine3_home/ipma_warnings",area:t}),a=Date.now();this.warnings=e.warnings.filter(r=>!r.endTime||new Date(r.endTime).getTime()>a).sort((r,i)=>(Jt[i.awarenessLevelID]??0)-(Jt[r.awarenessLevelID]??0))}catch{}}call(t,e,a,r={}){Qe(this.conn,t,e,r,{entity_id:a}).catch(i=>console.warn("Pine3 Home:",i))}toggle(t){const e=G(t),a=this.entities[t];if(e==="lock")return this.call("lock",a?.state==="locked"?"unlock":"lock",t);if(e==="cover")return this.call("cover","toggle",t);if(e==="vacuum")return this.call("vacuum",a?.state==="cleaning"?"return_to_base":"start",t);if(e==="media_player")return this.call("media_player","media_play_pause",t);if(e==="scene"||e==="script")return this.call(e,"turn_on",t);this.call(e==="input_boolean"?"input_boolean":"homeassistant","toggle",t)}level(t){if(this.drag?.key===t.key)return this.drag.value;if(t.kind==="room-lights")return sr(t.entities,this.entities);const e=this.entities[t.entity];return t.kind==="light"?Ht(e):t.kind==="cover"?e?.attributes.current_position??(e?.state==="open"?100:0):null}setLevel(t,e){if(e=Math.round(e),t.kind==="room-lights"||t.kind==="light"){const a=t.kind==="light"?t.entity:t.entities;e<=0?this.call("light","turn_off",a):this.call("light","turn_on",a,{brightness_pct:e})}else t.kind==="cover"&&this.call("cover","set_cover_position",t.entity,{position:e})}slidable(t){if(t.kind==="room-lights")return!0;const e=this.entities[t.entity??""];return e?t.kind==="light"?(e.attributes.supported_color_modes??[]).some(a=>a!=="onoff"):t.kind==="cover"?(e.attributes.supported_features&4)===4:!1:!1}down(t,e){if(t.target.closest("button"))return;if(this.editing){this.press={key:e.key,x:t.clientX,y:t.clientY,rect:t.currentTarget.getBoundingClientRect(),dragging:!1,long:!1,timer:0};return}const a=t.currentTarget,r={key:e.key,x:t.clientX,y:t.clientY,rect:a.getBoundingClientRect(),dragging:!1,long:!1,timer:0};r.timer=window.setTimeout(()=>{r.long=!0,this.longPress(e)},br),this.press=r}move(t,e){const a=this.press;if(!a||a.key!==e.key||a.long)return;if(this.editing)return this.moveInEdit(t,a);const r=t.clientX-a.x,i=t.clientY-a.y;if(!a.dragging){if(Math.abs(i)>_t&&Math.abs(i)>Math.abs(r))return this.cancel();if(Math.abs(r)<_t||!this.slidable(e))return;a.dragging=!0,clearTimeout(a.timer),t.currentTarget.setPointerCapture(t.pointerId)}const s=Math.max(0,Math.min(100,(t.clientX-a.rect.left)/a.rect.width*100));this.drag={key:e.key,value:Math.round(s)}}up(t,e){const a=this.press;if(!(!a||a.key!==e.key)){if(clearTimeout(a.timer),this.press=void 0,this.editing){this.moving=null;return}if(!a.long){if(a.dragging){const r=this.drag?.value??0;this.setLevel(e,r),window.setTimeout(()=>{this.drag?.key===e.key&&(this.drag=null)},1500);return}this.tap(e)}}}cancel(){this.press&&clearTimeout(this.press.timer),this.press=void 0,this.moving=null}reset(){this.stopEdit(),this.sheet=null,this.drag=null,this.view="home",this.category="all",this.main()?.scrollTo({top:0})}get busy(){return!!this.editing||!!this.press}main(){return this.renderRoot?.querySelector(".main")??null}arranged(t,e){const a=this.editing===t&&this.draft?this.draft:this.dashboard.layouts?.[t];return Kt(e,a,this.home)}startEdit(t,e){const a=this.dashboard.layouts?.[t];this.draft={items:Kt(e,a,this.home).map(r=>({key:r.key,size:r.size})),hidden:[...a?.hidden??[]]},this.editing=t,this.category="all",this.sheet=null}stopEdit(){this.editing=null,this.draft=null,this.moving=null}async saveLayout(t){const e=this.editing;if(e){this.saving=!0;try{const a=await this.conn.sendMessagePromise({type:"pine3_home/dashboards/layout",dashboard_id:this.dashboard.id,view:e,layout:t});this.dashboard={...this.dashboard,layouts:a.dashboard.layouts},this.stopEdit()}catch(a){console.warn("Pine3 Home: layout",a),alert("Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel.")}finally{this.saving=!1}}}moveInEdit(t,e){if(!e.dragging){if(Math.hypot(t.clientX-e.x,t.clientY-e.y)<_t)return;e.dragging=!0,this.moving=e.key,t.currentTarget.setPointerCapture(t.pointerId)}const a=this.renderRoot.elementsFromPoint(t.clientX,t.clientY).map(o=>o.closest?.(".w")).find(o=>o&&o.dataset.key&&o.dataset.key!==e.key);if(!a||!this.draft||Date.now()-this.lastReorder<180)return;const r=[...this.draft.items],i=r.findIndex(o=>o.key===e.key),s=r.findIndex(o=>o.key===a.dataset.key);if(i<0||s<0)return;const[n]=r.splice(i,1);r.splice(s,0,n),this.lastReorder=Date.now(),this.draft={...this.draft,items:r}}hideWidget(t){this.draft&&(this.draft={items:this.draft.items.filter(e=>e.key!==t),hidden:[...this.draft.hidden,t]})}resizeWidget(t){if(!this.draft)return;const e=pe(t.kind),a=e[(e.indexOf(t.size)+1)%e.length];this.draft={...this.draft,items:this.draft.items.map(r=>r.key===t.key?{...r,size:a}:r)}}addWidget(t){this.draft&&(this.draft={items:[...this.draft.items,{key:t.key,size:t.size}],hidden:this.draft.hidden.filter(e=>e!==t.key)})}editControls(t,e){return this.editing===t?p`<button class="pill" @click=${()=>this.stopEdit()}>Cancelar</button>
        ${this.dashboard.layouts?.[t]?p`<button class="pill" ?disabled=${this.saving} @click=${()=>this.saveLayout(null)}>${D(P.restore)} Repor</button>`:L}
        <button class="pill pri" ?disabled=${this.saving} @click=${()=>this.saveLayout(this.draft)}>${D(P.check)} Concluído</button>`:this.canEdit&&!this.editing?p`<button class="pill icon" aria-label="Editar esta vista" title="Editar" @click=${()=>this.startEdit(t,e)}>${D(P.edit)}</button>`:L}renderPicker(t,e){if(this.editing!==t||!this.draft)return L;const a=pr(e,this.draft,this.home);return p`<div class="picker">
      <div class="phd"><span class="k">Adicionar · toca para pôr no fim</span><span class="k">Arrasta os cartões para mudar a ordem</span></div>
      <div class="prow">${a.length?a.map(r=>p`<button class="pk" @click=${()=>this.addWidget(r)}><span>${r.name}</span><em>${r.room?.name??""}</em></button>`):p`<span class="k">Já está tudo nesta vista.</span>`}</div>
    </div>`}tap(t){switch(t.kind){case"room-lights":{const e=t.entities.some(a=>this.entities[a]?.state==="on");return this.call("light",e?"turn_off":"turn_on",t.entities)}case"climate":case"weather":case"sensor":case"binary":case"scenes":t.entity&&(this.sheet=t.entity);return;case"scene":this.call(G(t.entity),"turn_on",t.entity),this.flash=t.key,window.setTimeout(()=>{this.flash===t.key&&(this.flash=null)},1200);return;case"camera":this.sheet=t.entity;return;case"lock":this.entities[t.entity]?.state!=="locked"?this.call("lock","lock",t.entity):this.sheet=t.entity;return;default:t.entity&&this.toggle(t.entity)}}longPress(t){if(t.kind==="room-lights"&&t.room){this.openRoom(t.room.id);return}t.entity&&(this.sheet=t.entity)}openRoom(t){this.editing&&this.editing!==t&&this.stopEdit(),this.view=t,this.category="all",this.sheet=null}get dark(){return this.dashboard.theme==="claro"?!1:this.dashboard.theme==="auto"?this.entities["sun.sun"]?.state!=="above_horizon":!0}render(){if(!this.home)return L;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(a=>a.id===this.view),e={vd:!0,light:!this.dark,editing:!!this.editing,[`dock-${this.dashboard.dock}`]:!0};return p`<div class=${j(e)}>
      ${this.renderDock()}
      <main class="main">${t?this.renderRoom(t):this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):L}
    </div>`}renderAmbient(){const t=ct(this.home,this.entities),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,r=this.warnings[0],i=this.now.getHours()*60+this.now.getMinutes(),s=(i%7-3)*.8,n=(i%5-2)*.8,o=[t.lightsOn?`${t.lightsOn} luz${t.lightsOn>1?"es":""} acesa${t.lightsOn>1?"s":""}`:null,t.alerts?t.alertText:null].filter(Boolean);return p`<div class="vd amb" role="button" aria-label="Tocar para acordar">
      <div class="ambc" style=${`transform:translate(calc(var(--u) * ${s}), calc(var(--u) * ${n}))`}>
        <div class="atime">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</div>
        <div class="adate">${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</div>
        <div class="arow">
          ${e?p`<span class="awx">${Gt(e.state)}<b>${a!=null?`${Math.round(a)}°`:""}</b>${Mt[e.state]??e.state}</span>`:L}
          ${r?p`<span class=${`ipma ${r.awarenessLevelID}`}><i></i>Aviso ${Lt[r.awarenessLevelID]??""} · ${r.awarenessTypeName.toLowerCase()}</span>`:L}
        </div>
        <div class=${j({astatus:!0,att:t.alerts>0})}>${o.length?o.join(" · "):"Tudo tranquilo em casa"}</div>
      </div>
      <span class="ahint">${this.wallpanel?"Aproxima-te ou toca para acordar":"Toca para acordar"}</span>
    </div>`}renderDock(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(a=>!a.hidden));return p`<nav class="dock" aria-label="Vistas">
      <button class=${j({di:!0,on:this.view==="home"})} @click=${()=>this.openRoom("home")} aria-label="Casa">
        ${D(P.home)}<span class="lb">Casa</span>
      </button>
      <span class="sep"></span>
      <div class="rooms">
        ${t.map(e=>{const a=ut(e).filter(r=>this.entities[r]?.state==="on").length;return p`<button class=${j({di:!0,rm:!0,on:this.view===e.id,lit:a>0})} @click=${()=>this.openRoom(e.id)} aria-label=${e.name}>
            ${a?p`<span class="glow"></span>`:L}${D(bt(e.icon))}<span class="lb">${e.name}</span>
            ${a?p`<span class="bdg">${a}</span>`:L}
          </button>`})}
      </div>
      <span class="sep"></span>
      ${te.filter(e=>this.viewWidgets(e.id).length).map(e=>{const a=e.id==="@seguranca"?ct(this.home,this.entities).alerts:0;return p`<button class=${j({di:!0,on:this.view===e.id})} @click=${()=>this.openRoom(e.id)} aria-label=${e.name}>
          ${D(e.icon)}<span class="lb">${e.name}</span>${a?p`<span class="bdg alert">${a}</span>`:L}
        </button>`})}
    </nav>`}renderHeader(t,e,a=L){const r=ct(this.home,this.entities),i=this.home.persons.map(s=>this.entities[s]).filter(s=>!!s);return p`<header class="hdr">
      <div class="t"><span>${e}</span><b>${t}</b></div>
      <div class="chips">
        ${this.editing?L:p`${r.temp?p`<span class="chip"><i style="background:#34c759;color:#06210f">${D(P.therm)}</i><span>Clima<small>${r.temp}</small></span></span>`:L}
        <span class="chip"><i style="background:#ffcf8a;color:#2a1a04">${D(P.bulb)}</i><span>Luzes<small>${r.lightsOn?`${r.lightsOn} acesa${r.lightsOn>1?"s":""}`:"apagadas"}</small></span></span>
        <span class="chip"><i style=${r.alerts?"background:#ff8a5c;color:#2a0f04":"background:#5be3a0;color:#06210f"}>${D(P.shield)}</i><span>Segurança<small>${r.alertText}</small></span></span>
        ${i.length?p`<div class="people">${i.map(s=>{const n=s.attributes.entity_picture,o=s.attributes.friendly_name??s.entity_id;return p`<span class="av" title=${o} style=${n?`background-image:url(${n})`:""}>${n?"":o[0]}${s.state==="home"?p`<i></i>`:L}</span>`})}</div>`:L}`}
        ${a}
      </div>
    </header>`}greeting(){const t=this.now.getHours();return`${t<6?"Boa noite":t<13?"Bom dia":t<20?"Boa tarde":"Boa noite"} · ${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}`}renderHome(){const t=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),e=Et(this.home,this.entities),a=this.arranged("home",e),r=this.editing==="home";return p`${r?this.renderHeader("A editar","Casa",this.editControls("home",e)):this.renderHeader(t,this.greeting(),this.editControls("home",e))}
      ${a.length||r?p`<div class=${j({grid:!0,edit:r})}>${a.map(i=>this.renderWidget(i))}</div>`:p`<p class="empty">Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.</p>`}
      ${this.renderPicker("home",e)}`}viewWidgets(t){return t==="@clima"?dr(this.home,this.entities):t==="@seguranca"?ur(this.home,this.entities):t==="@cenas"?hr(this.home,this.entities):[]}renderView(t){const e=te.find(o=>o.id===t),a=this.viewWidgets(t),r=this.arranged(t,a),i=this.editing===t,s=ct(this.home,this.entities),n=t==="@clima"?s.temp??"":t==="@seguranca"?s.alertText:`${r.length} cenas e rotinas`;return p`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${D(P.back)}</button>
        <b>${e.name}</b><span>${i?"a editar":n}</span>
        <div class="act">${this.editControls(t,a)}</div>
      </div>
      ${r.length||i?p`<div class=${j({grid:!0,edit:i})}>${r.map(o=>this.renderWidget(o))}</div>`:p`<p class="empty">Nada para mostrar aqui.</p>`}
      ${this.renderPicker(t,a)}`}renderRoom(t){const e=cr(t),a=this.arranged(t.id,e),r=this.editing===t.id,i=S=>S.length?a.filter(et=>S.includes(et.kind)).length:a.length,s=or.filter(S=>i(S.kinds)>0),n=s.find(S=>S.id===this.category)??s[0],o=!r&&n&&n.kinds.length?a.filter(S=>n.kinds.includes(S.kind)):a,v=ut(t),H=t.temperature?this.entities[t.temperature]?.state:null,A=t.humidity?this.entities[t.humidity]?.state:null,F=[H&&H!=="unavailable"?`${K(parseFloat(H))}°`:null,A&&A!=="unavailable"?`${K(parseFloat(A),0)}%`:null,t.floor].filter(Boolean).join(" · ");return p`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${D(P.back)}</button>
        <b>${t.name}</b><span>${r?"a editar":F}</span>
        <div class="act">
          ${v.length&&!r?p`<button class="pill" @click=${()=>this.call("light","turn_on",v)}>${D(P.bulb)} Acender</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",v)}>Apagar</button>`:L}
          ${this.editControls(t.id,e)}
        </div>
      </div>
      ${s.length>2&&!r?p`<div class="cats">${s.map(S=>p`<button class=${j({on:S===n})} @click=${()=>this.category=S.id}>${S.name}<em>${i(S.kinds)}</em></button>`)}</div>`:L}
      <div class=${j({grid:!0,edit:r})}>${o.map(S=>this.renderWidget(S))}</div>
      ${this.renderPicker(t.id,e)}`}renderWidget(t){const e=t.entity?this.entities[t.entity]:void 0;if(t.entity&&t.kind!=="weather"&&!e)return L;const a=this.widgetBody(t,e),r={w:!0,[t.size]:!0,on:(a.on??!1)||this.flash===t.key,att:a.att??!1,off:!!t.entity&&nr(e),dragging:this.drag?.key===t.key,moving:this.moving===t.key,[`k-${t.kind}`]:!0,idle:t.kind==="climate"&&e?.state==="off"},i=!!this.editing;return p`<div class=${j(r)} style=${a.style??""} data-key=${t.key}
        @pointerdown=${s=>this.down(s,t)} @pointermove=${s=>this.move(s,t)}
        @pointerup=${s=>this.up(s,t)} @pointercancel=${()=>this.cancel()} @contextmenu=${s=>s.preventDefault()}>
      ${a.fill!=null?p`<div class="fill" style=${ha({width:`${a.fill}%`,"--fc":a.color??"255,207,138"})}></div>`:L}
      ${a.art??L}
      <span class="nm">${t.name}${a.tag?p`<em>${a.tag}</em>`:L}</span>
      ${a.extra??L}
      <div class="hero" style=${a.heroStyle??""}>${a.hero}${a.small?p`<small>${a.small}</small>`:L}</div>
      ${i?L:a.ctl??L}
      ${i?p`<button class="rmv" aria-label=${`Esconder ${t.name}`} @click=${()=>this.hideWidget(t.key)}>${D(P.minus)}</button>
          <button class="handle" aria-label=${`Mudar o tamanho de ${t.name}`} @click=${()=>this.resizeWidget(t)}>${D(P.resize)}<b>${t.size.toUpperCase()}</b></button>`:L}
    </div>`}widgetBody(t,e){const a=this.level(t);switch(t.kind){case"room-lights":{const r=t.entities.filter(s=>this.entities[s]?.state==="on"),i=r.length?xt(this.entities[r[0]]):"#ffcf8a";return{hero:a?`${a}%`:"Off",small:r.length?r.map(s=>this.name(s,t.room)).slice(0,2).join(" e "):`${t.entities.length} luz${t.entities.length>1?"es":""}`,tag:t.entities.length>1?`${r.length}/${t.entities.length} luzes`:void 0,art:Zt(a??0,i),fill:a||null,color:ee(i),on:a>0}}case"light":{const r=xt(e);return{hero:a?`${a}%`:"Off",tag:t.sub&&this.view==="home"?t.sub:void 0,art:Zt(a??0,r),fill:a||null,color:ee(r),on:(a??0)>0,heroStyle:a?`color:${r}`:""}}case"cover":{const r=a??0;return{hero:`${r}%`,small:yr[e.state]??e.state,art:Ka(r),fill:r,color:"170,200,230"}}case"climate":{const r=e.attributes.temperature,i=e.state,s=(e.attributes.hvac_modes??[]).filter(H=>["heat","cool","off","auto","heat_cool"].includes(H)).slice(0,3),n=i==="cool"?"#6cc8ff":i==="off"?"#5d646e":"#ff9f43",o=e.attributes.current_temperature,v=Xt[e.attributes.hvac_action??i]??Ct[i]??i;return{hero:i==="off"?"Off":r!=null?`${K(r)}°`:"—",small:[v,o!=null?`agora ${K(o)}°`:null].filter(Boolean).join(" · "),tag:t.sub,art:Xa(i==="off"?null:r??null,n),heroStyle:t.size==="l"?"font-size:calc(var(--u)*7)":"",extra:s.length>1?p`<div class="seg">${s.map(H=>p`<button class=${j({on:H===i})} @click=${()=>this.call("climate","set_hvac_mode",t.entity,{hvac_mode:H})}>${Ct[H]}</button>`)}</div>`:L,ctl:r!=null&&i!=="off"?p`<div class="ctl"><button aria-label="Baixar" @click=${()=>this.stepTemp(t.entity,-1)}>${D(P.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(t.entity,1)}>${D(P.plus)}</button></div>`:L}}case"weather":{const r=e?.state??"",i=e?.attributes.temperature,s=this.warnings[0];return{hero:i!=null?`${Math.round(i)}°`:"—",small:Mt[r]??r,art:Gt(r),extra:s?p`<span class=${`ipma ${s.awarenessLevelID}`}><i></i>Aviso ${Lt[s.awarenessLevelID]??""} · ${s.awarenessTypeName.toLowerCase()}${this.warnings.length>1?` +${this.warnings.length-1}`:""}</span>`:L,ctl:this.hourly.length?p`<div class="hrs">${this.hourly.map(n=>p`<span>${new Date(n.datetime).getHours()}h<b>${Math.round(n.temperature)}°</b>${n.precipitation_probability?`${n.precipitation_probability}%`:""}</span>`)}</div>`:L}}case"lock":{const r=e.state!=="locked";return{hero:r?e.state==="unlocked"?"Destrancada":e.state:"Trancada",small:r?"tocar para trancar":"toque longo para abrir",art:Qa(r),att:e.state==="unlocked",heroStyle:"font-size:calc(var(--u)*1.85)"}}case"media":{const r=e.state==="playing",i=e.attributes.media_title??(dt(e)?"Ligado":"Desligado"),s=e.attributes.media_artist??e.attributes.app_name??"";return{hero:i,small:s,tag:t.sub,art:tr(e.attributes.entity_picture),on:r,heroStyle:"font-size:calc(var(--u)*2.4)",ctl:dt(e)?p`<div class="ctl"><button class="pri" aria-label=${r?"Pausa":"Tocar"} @click=${()=>this.call("media_player","media_play_pause",t.entity)}>${D(r?P.pause:P.play)}</button>
                <button aria-label="Seguinte" @click=${()=>this.call("media_player","media_next_track",t.entity)}>${D(P.next)}</button></div>`:L}}case"vacuum":{const r=e.attributes.battery_level;return{hero:r!=null?`${r}%`:Qt[e.state]??e.state,small:Qt[e.state]??e.state,art:Ja(e.state==="cleaning"),on:e.state==="cleaning"}}case"scenes":return{hero:"",extra:p`<div class="scn">${t.entities.map(r=>p`<button @click=${()=>this.call(G(r),"turn_on",r)}>${D(P.spark)}${this.name(r)}</button>`)}</div>`};case"fan":return{hero:dt(e)?e.attributes.percentage!=null?`${e.attributes.percentage}%`:"On":"Off",art:er(dt(e)),on:dt(e)};case"switch":case"outlet":{const r=dt(e);return{hero:r?"On":"Off",art:ar(r),on:r}}case"binary":{const r=e.state==="on",i=e.attributes.device_class;return{hero:i&&["door","window","garage_door","opening"].includes(i)?r?"Aberta":"Fechada":i==="motion"||i==="occupancy"?r?"Movimento":"Calmo":r?"On":"Off",att:r&&!!i&&["door","window","garage_door","opening","moisture","smoke","gas"].includes(i),heroStyle:"font-size:calc(var(--u)*2.4)"}}case"sensor":{const r=e.attributes.unit_of_measurement??"",i=parseFloat(e.state),s=e.attributes.device_class;Number.isNaN(i)||this.historyWanted.add(t.entity);const n=this.history[t.entity],o=n&&n.length>1?`${K(Math.min(...n),0)}–${K(Math.max(...n),0)}`:void 0;return{hero:Number.isNaN(i)?e.state:`${K(i)}${r==="°C"?"°":r==="%"?"%":""}`,small:r&&r!=="°C"&&r!=="%"?r:t.sub,tag:o,art:rr(s==="humidity"?"#3db8f5":s==="temperature"?"#ff9f43":"#5be3a0",n)}}case"clock":return{hero:this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),small:this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})};case"scene":return{hero:"",art:ir(),extra:p`<span class="go">${this.flash===t.key?"Ativada":"Tocar para ativar"}</span>`};case"camera":{const r=e.attributes.entity_picture,i=Math.floor(this.now.getTime()/1e4);return{hero:"",tag:t.sub,art:r?p`<img class="cam" src=${`${r}${r.includes("?")?"&":"?"}t=${i}`} alt="" loading="lazy" />`:L}}}}name(t,e){for(const r of this.home.rooms){const i=r.devices.find(s=>s.id===t);if(i)return i.name}const a=this.entities[t]?.attributes.friendly_name??t.split(".")[1];return e&&a.toLowerCase().startsWith(e.name.toLowerCase()+" ")?a.slice(e.name.length+1):a}stepTemp(t,e){const a=this.entities[t],r=a?.attributes.target_temp_step??.5,i=a?.attributes.temperature??20,s=a?.attributes.min_temp??7,n=a?.attributes.max_temp??35;this.call("climate","set_temperature",t,{temperature:Math.max(s,Math.min(n,Math.round((i+e*r)*10)/10))})}renderSheet(t){const e=this.entities[t];if(!e)return L;const a=G(t),r=this.home.rooms.find(s=>s.devices.some(n=>n.id===t)),i=a==="light"?"luz":a==="cover"?"estore":a==="climate"?"clima":a==="lock"?"fechadura":a==="media_player"?"média":a==="weather"?"tempo":"";return p`<div class="scrim" @click=${()=>this.sheet=null}></div>
      <aside class="sheet" role="dialog" aria-label=${this.name(t,r)}>
        <div class="shd"><span class="k">${[r?.name,i].filter(Boolean).join(" · ")}</span>
          <button class="x" aria-label="Fechar" @click=${()=>this.sheet=null}>${D(P.close)}</button></div>
        <h4>${this.name(t,r)}</h4>
        ${this.sheetBody(t,e)}
      </aside>`}bigSlider(t,e,a,r,i){const s=this.drag?.key===t?this.drag.value:e,n=o=>{const v=o.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(o.clientX-v.left)/v.width*100)))};return p`<div class="bigsl" role="slider" aria-label=${r} aria-valuenow=${s} aria-valuemin="0" aria-valuemax="100"
      @pointerdown=${o=>{o.currentTarget.setPointerCapture(o.pointerId),this.drag={key:t,value:n(o)}}}
      @pointermove=${o=>{this.drag?.key===t&&o.buttons&&(this.drag={key:t,value:n(o)})}}
      @pointerup=${o=>{const v=n(o);i(v),this.drag={key:t,value:v},window.setTimeout(()=>{this.drag?.key===t&&(this.drag=null)},1500)}}>
      <i style=${`width:${s}%;background:${a}`}></i><b>${s}%</b></div>`}sheetBody(t,e){const a=G(t);if(a==="light"){const i=e.attributes.supported_color_modes??[],s=i.includes("color_temp"),n=i.some(A=>["hs","rgb","rgbw","rgbww","xy"].includes(A)),o=xt(e),v=e.attributes.min_color_temp_kelvin??2200,H=e.attributes.max_color_temp_kelvin??6500;return p`${i.some(A=>A!=="onoff")?this.bigSlider(`sheet-${t}`,Ht(e),`linear-gradient(90deg,${o},#fff3e0)`,"Brilho",A=>A?this.call("light","turn_on",t,{brightness_pct:A}):this.call("light","turn_off",t)):L}
        ${s?p`<span class="k">Branco</span><div class="tbar" @click=${A=>{const F=A.currentTarget.getBoundingClientRect(),S=(A.clientX-F.left)/F.width;this.call("light","turn_on",t,{color_temp_kelvin:Math.round(v+S*(H-v))})}}></div>`:L}
        ${n?p`<span class="k">Cores</span><div class="pre">${$r.map(A=>p`<button aria-label=${A} style=${`background:${A}`} class=${j({on:A===o})} @click=${()=>this.call("light","turn_on",t,{rgb_color:me(A)})}></button>`)}</div>`:L}
        <div class="foot"><button class="pill" @click=${()=>this.toggle(t)}>${D(P.power)} ${e.state==="on"?"Desligar":"Ligar"}</button></div>`}if(a==="cover"){const i=e.attributes.current_position??(e.state==="open"?100:0);return p`${e.attributes.supported_features&4?this.bigSlider(`sheet-${t}`,i,"linear-gradient(90deg,#a9b6c4,#dfe6ee)","Posição",s=>this.call("cover","set_cover_position",t,{position:s})):L}
        <div class="foot"><button class="pill" @click=${()=>this.call("cover","open_cover",t)}>Abrir</button><button class="pill" @click=${()=>this.call("cover","stop_cover",t)}>Parar</button><button class="pill" @click=${()=>this.call("cover","close_cover",t)}>Fechar</button></div>`}if(a==="climate"){const i=e.attributes.temperature,s=e.attributes.hvac_modes??[];return p`<div class="bigtemp">${i!=null?`${K(i)}°`:"—"}<small>${Xt[e.attributes.hvac_action??e.state]??""}${e.attributes.current_temperature!=null?` · agora ${K(e.attributes.current_temperature)}°`:""}</small></div>
        <div class="ctl big"><button aria-label="Baixar" @click=${()=>this.stepTemp(t,-1)}>${D(P.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(t,1)}>${D(P.plus)}</button></div>
        <span class="k">Modo</span><div class="seg wide">${s.map(n=>p`<button class=${j({on:n===e.state})} @click=${()=>this.call("climate","set_hvac_mode",t,{hvac_mode:n})}>${Ct[n]??n}</button>`)}</div>`}if(a==="lock"){const i=e.state==="locked";return p`<div class="bigtemp">${i?"Trancada":e.state==="unlocked"?"Destrancada":e.state}</div>
        <div class="foot">${i?p`<button class="pill warn" @click=${()=>{this.call("lock","unlock",t),this.sheet=null}}>${D(P.unlock)} Destrancar</button>`:p`<button class="pill pri" @click=${()=>this.call("lock","lock",t)}>${D(P.lock)} Trancar</button>`}</div>`}if(a==="media_player"){const i=Math.round((e.attributes.volume_level??0)*100);return p`<div class="bigtemp" style="font-size:calc(var(--u)*2.6)">${e.attributes.media_title??e.state}<small>${e.attributes.media_artist??""}</small></div>
        ${e.attributes.volume_level!=null?this.bigSlider(`vol-${t}`,i,"linear-gradient(90deg,#3db8f5,#9be0ff)","Volume",s=>this.call("media_player","volume_set",t,{volume_level:s/100})):L}
        <div class="foot"><button class="pill pri" @click=${()=>this.call("media_player","media_play_pause",t)}>${D(e.state==="playing"?P.pause:P.play)} ${e.state==="playing"?"Pausa":"Tocar"}</button>
          <button class="pill" @click=${()=>this.call("media_player","media_next_track",t)}>${D(P.next)}</button>
          <button class="pill" @click=${()=>this.toggle(t)}>${D(P.power)}</button></div>`}if(a==="camera"){const i=e.attributes.entity_picture;return i?p`<img class="camlg" src=${`${i}${i.includes("?")?"&":"?"}t=${Math.floor(this.now.getTime()/1e4)}`} alt=${this.name(t)} />`:p`<p class="k">Sem imagem</p>`}if(a==="weather"){const i=o=>new Date(o).toLocaleString("pt-PT",{weekday:"short",hour:"2-digit",minute:"2-digit"}),s=e.attributes.temperature,n=[e.attributes.humidity!=null?`${e.attributes.humidity}%`:null,e.attributes.wind_speed!=null?`vento ${K(e.attributes.wind_speed,0)} ${e.attributes.wind_speed_unit??""}`:null].filter(Boolean);return p`<div class="bigtemp">${s!=null?`${Math.round(s)}°`:"—"}<small>${[Mt[e.state]??e.state,...n].join(" · ")}</small></div>
        <div class="hrs">${this.hourly.map(o=>p`<span>${new Date(o.datetime).getHours()}h<b>${Math.round(o.temperature)}°</b>${o.precipitation_probability?`${o.precipitation_probability}%`:""}</span>`)}</div>
        ${this.warnings.map(o=>p`<div class=${`warn ${o.awarenessLevelID}`}><b>Aviso ${Lt[o.awarenessLevelID]??""} · ${o.awarenessTypeName}</b>
          <span>${i(o.startTime)} → ${i(o.endTime)}</span>${o.text?p`<p>${o.text}</p>`:L}</div>`)}
        ${this.home.settings?.ipma_area?L:p`<p class="hint">Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.</p>`}`}const r=e.attributes.unit_of_measurement??"";return p`<div class="bigtemp">${e.state}${r?` ${r}`:""}</div>
      ${["switch","light","fan","input_boolean","vacuum"].includes(a)?p`<div class="foot"><button class="pill pri" @click=${()=>this.toggle(t)}>${D(P.power)} ${dt(e)?"Desligar":"Ligar"}</button></div>`:L}`}};R.styles=Nt;W([lt({attribute:!1})],R.prototype,"home",2);W([lt({attribute:!1})],R.prototype,"entities",2);W([lt({attribute:!1})],R.prototype,"dashboard",2);W([lt({attribute:!1})],R.prototype,"conn",2);W([lt()],R.prototype,"screenName",2);W([lt({type:Boolean})],R.prototype,"canEdit",2);W([lt({type:Boolean})],R.prototype,"ambient",2);W([lt({type:Boolean})],R.prototype,"wallpanel",2);W([U()],R.prototype,"editing",2);W([U()],R.prototype,"draft",2);W([U()],R.prototype,"moving",2);W([U()],R.prototype,"saving",2);W([U()],R.prototype,"view",2);W([U()],R.prototype,"category",2);W([U()],R.prototype,"sheet",2);W([U()],R.prototype,"drag",2);W([U()],R.prototype,"now",2);W([U()],R.prototype,"hourly",2);W([U()],R.prototype,"warnings",2);W([U()],R.prototype,"history",2);W([U()],R.prototype,"flash",2);R=W([wt("pine3-vidro")],R);function me(t){const e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function ee(t){if(t.startsWith("#"))return me(t).join(",");const e=t.match(/\d+/g);return e?e.slice(0,3).join(","):"255,207,138"}var xr=Object.getOwnPropertyDescriptor,_r=(t,e,a,r)=>{for(var i=r>1?void 0:r?xr(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(i)||i);return i};const ae=t=>I`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`,Cr=[{id:"home",name:"Casa",color:"#ffd166",icon:P.home},{id:"@divisoes",name:"Divisões",color:"#d9f2e3",icon:P.room},{id:"@clima",name:"Clima",color:"#ffb08a",icon:P.therm},{id:"@seguranca",name:"Segurança",color:"#bfe0ff",icon:P.shield},{id:"@cenas",name:"Cenas",color:"#ffd0c2",icon:P.spark}],re=["#ffd166","#d9f2e3","#c9b8ff","#ffd0c2","#bfe0ff","#ffb08a","#e9f5a8"],ie={key:"clock",kind:"clock",size:"l",name:""};let Pt=class extends R{render(){if(!this.home)return L;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(a=>a.id===this.view),e={vd:!0,bento:!0,editing:!!this.editing};return p`<div class=${j(e)}>
      ${this.renderPills()}
      <main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderRooms():this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):L}
    </div>`}renderPills(){const t=this.home.rooms.some(r=>r.id===this.view),e=ct(this.home,this.entities).alerts,a=Cr.filter(r=>r.id==="home"||r.id==="@divisoes"||this.viewWidgets(r.id).length);return p`<nav class="bnav" aria-label="Vistas">
      ${a.map(r=>{const i=this.view===r.id||r.id==="@divisoes"&&t;return p`<button class=${j({on:i})} style=${`--c:${r.color}`} @click=${()=>this.openRoom(r.id)}>
          ${ae(r.icon)}${r.name}${r.id==="@seguranca"&&e?p`<span class="bb">${e}</span>`:L}
        </button>`})}
      ${this.view==="home"?p`<span class="btools">${this.editControls("home",[ie,...Et(this.home,this.entities)])}</span>`:L}
      <span class="clk">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</span>
    </nav>`}renderHome(){const t=[ie,...Et(this.home,this.entities)],e=this.arranged("home",t),a=this.editing==="home";return p`<div class=${j({grid:!0,edit:a})}>${e.map(r=>this.renderWidget(r))}</div>
      ${this.renderPicker("home",t)}`}renderRooms(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(a=>!a.hidden));return p`<div class="grid">${t.map((e,a)=>{const r=ut(e),i=r.filter(n=>this.entities[n]?.state==="on").length,s=e.temperature?parseFloat(this.entities[e.temperature]?.state??""):NaN;return p`<button class=${j({w:!0,s:!0,room:!0,dim:!i})} style=${`--rc:${re[a%re.length]}`} @click=${()=>this.openRoom(e.id)}>
        <span class="nm">${ae(bt(e.icon))}${Number.isNaN(s)?L:p`<em>${K(s)}°</em>`}</span>
        <div class="hero">${e.name}<small>${ve(r.length,i,e.devices.length)}</small></div>
      </button>`})}</div>`}};Pt.styles=[Nt,yt`
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
  `];Pt=_r([wt("pine3-bento")],Pt);var Mr=Object.getOwnPropertyDescriptor,Lr=(t,e,a,r)=>{for(var i=r>1?void 0:r?Mr(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(i)||i);return i};const gt=t=>I`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`,ne={home:"Casa","@divisoes":"Divisões","@clima":"Clima","@seguranca":"Segurança","@cenas":"Cenas"},Ar=70,Tr=I`<svg viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 22 Q18 8 36 18 T70 14 T100 18 V46 H0Z" fill="#3c3552" opacity=".85"/>
  <path d="M0 30 Q22 18 46 28 T100 26 V46 H0Z" fill="#252a40"/>
  <path d="M0 38 Q30 30 60 36 T100 34 V46 H0Z" fill="#171b2a"/></svg>`;let Ot=class extends R{get order(){return["home","@divisoes",...["@clima","@seguranca","@cenas"].filter(t=>this.viewWidgets(t).length)]}get current(){return this.home.rooms.some(t=>t.id===this.view)?"@divisoes":this.view}step(t){const e=this.order,a=Math.max(0,e.indexOf(this.current));this.openRoom(e[(a+t+e.length)%e.length])}swipeDown(t){const e=t.target;this.editing||this.sheet||e.closest(".w, button, .sheet, .picker, .bigsl")||(this.swipe={x:t.clientX,y:t.clientY,id:t.pointerId})}swipeUp(t){const e=this.swipe;if(this.swipe=void 0,!e||e.id!==t.pointerId)return;const a=t.clientX-e.x;Math.abs(a)>Ar&&Math.abs(a)>Math.abs(t.clientY-e.y)*1.5&&this.step(a<0?1:-1)}render(){if(!this.home)return L;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(n=>n.id===this.view),e=ct(this.home,this.entities).lightsOn>0,a=this.view==="home",r={vd:!0,moldura:!0,dim:!e,editing:!!this.editing},i=this.order,s=this.current;return p`<div class=${j(r)} @pointerdown=${n=>this.swipeDown(n)} @pointerup=${n=>this.swipeUp(n)}
        @pointercancel=${()=>this.swipe=void 0}>
      <div class="hills">${Tr}</div>
      ${a?this.renderFrame():p`<div class="panel"><main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderRoomList():this.renderView(this.view)}</main></div>`}
      <div class="pager">
        <b>${t?t.name:ne[s]??""}</b>
        <div class="dots">${i.map(n=>p`<button class=${j({on:n===s})} aria-label=${ne[n]} @click=${()=>this.openRoom(n)}></button>`)}</div>
      </div>
      ${this.editing?L:p`<button class="edge l" aria-label="Vista anterior" @click=${()=>this.step(-1)}>${gt(P.back)}</button>
          <button class="edge r" aria-label="Vista seguinte" @click=${()=>this.step(1)}>${gt(P.back)}</button>`}
      ${a?p`<span class="hint">desliza para o lado para mudar de vista</span>`:L}
      ${this.sheet?this.renderSheet(this.sheet):L}
    </div>`}renderFrame(){const t=ct(this.home,this.entities),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,r=this.warnings[0],i=this.home.rooms.filter(A=>!A.hidden&&ut(A).length),s=this.home.rooms.flatMap(A=>A.devices).find(A=>!A.hidden&&G(A.id)==="climate"),n=this.home.rooms.flatMap(A=>A.devices).find(A=>!A.hidden&&G(A.id)==="lock"),o=s?this.entities[s.id]:void 0,v=n?this.entities[n.id]:void 0,H=[t.lightsOn?`${t.lightsOn} luz${t.lightsOn>1?"es":""} acesa${t.lightsOn>1?"s":""}`:"luzes apagadas",t.alerts?t.alertText:null].filter(Boolean);return p`<div class="tl">
        <b>${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</span>
      </div>
      <div class="tr">
        ${e?p`<b>${a!=null?`${Math.round(a)}°`:""}</b>${this.weatherWord(e.state)}<br />`:L}
        ${H.join(" · ")}
        ${r?p`<br /><span class=${`ipma ${r.awarenessLevelID}`}><i></i>Aviso ${{yellow:"amarelo",orange:"laranja",red:"vermelho"}[r.awarenessLevelID]??""} · ${r.awarenessTypeName.toLowerCase()}</span>`:L}
      </div>
      <div class="strip">
        ${i.map(A=>{const F=ut(A).filter(S=>this.entities[S]?.state==="on").length;return p`<button class=${j({q:!0,on:F>0})} @click=${()=>this.openRoom(A.id)}>
            <i>${gt(bt(A.icon))}</i><span>${A.name}<small>${F?`${F} luz${F>1?"es":""}`:"apagada"}</small></span>
          </button>`})}
        ${s&&o?p`<button class=${j({q:!0,on:o.state!=="off"})} @click=${()=>this.openRoom("@clima")}>
              <i>${gt(P.therm)}</i><span>${o.state==="off"?"Off":`${K(o.attributes.temperature??0)}°`}<small>clima</small></span>
            </button>`:L}
        ${n&&v?p`<button class=${j({q:!0,alert:v.state==="unlocked"})}
                @click=${()=>v.state==="locked"?this.sheet=n.id:this.call("lock","lock",n.id)}>
              <i>${gt(v.state==="locked"?P.lock:P.unlock)}</i><span>${n.name}<small>${v.state==="locked"?"trancada":"destrancada · tocar"}</small></span>
            </button>`:L}
      </div>`}weatherWord(t){return{"clear-night":"Céu limpo",cloudy:"Nublado",fog:"Nevoeiro",lightning:"Trovoada","lightning-rainy":"Trovoada e chuva",partlycloudy:"Pouco nublado",pouring:"Chuva forte",rainy:"Chuva",snowy:"Neve",sunny:"Sol",windy:"Vento"}[t]??t}renderRoomList(){const t=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(r=>!r.hidden)),e=ct(this.home,this.entities).lightsOn;return p`<div class="rtop"><b>Divisões</b><span>${e?`${e} luz${e>1?"es":""} acesa${e>1?"s":""}`:"tudo apagado"}</span></div>
      <div class="grid">${t.map(a=>{const r=ut(a),i=r.filter(n=>this.entities[n]?.state==="on").length,s=a.temperature?parseFloat(this.entities[a.temperature]?.state??""):NaN;return p`<button class=${j({w:!0,s:!0,rc:!0,on:i>0})} @click=${()=>this.openRoom(a.id)}>
          <span class="nm">${a.name}${Number.isNaN(s)?L:p`<em>${K(s)}°</em>`}</span>
          <div class="hero">${gt(bt(a.icon))}<small>${ve(r.length,i,a.devices.length)}</small></div>
        </button>`})}</div>`}};Ot.styles=[Nt,yt`
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
  `];Ot=Lr([wt("pine3-moldura")],Ot);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=Symbol.for(""),Vr=t=>{if(t?.r===be)return t?._$litStatic$},Hr=t=>({_$litStatic$:t,r:be}),se=new Map,Er=t=>(e,...a)=>{const r=a.length;let i,s;const n=[],o=[];let v,H=0,A=!1;for(;H<r;){for(v=e[H];H<r&&(s=a[H],(i=Vr(s))!==void 0);)v+=i+e[++H],A=!0;H!==r&&o.push(s),n.push(v),H++}if(H===r&&n.push(e[r]),A){const F=n.join("$$lit$$");(e=se.get(F))===void 0&&(n.raw=n,se.set(F,e=n)),a=o}return t(e,...a)},Pr=Er(p);function ye(){const t=window.Pine3Wallpanel;return/Pine3Wallpanel\/\d+/.test(navigator.userAgent)&&t&&typeof t.version=="function"?t:null}function Or(t){const e=a=>{const r=a.detail?.type;(r==="motion"||r==="sleep"||r==="wake")&&t(r)};return window.addEventListener("pine3wallpanel",e),()=>window.removeEventListener("pine3wallpanel",e)}const zr=.12,Dr=.5;let oe=null;function Sr(t,e,a){const r=ye();if(!r)return;let i=-1;if(t&&e!=="off"){const s=new Date().getHours(),n=a??(s<7||s>=21);i=e==="low"||n?zr:Dr}if(i!==oe){oe=i;try{r.setBrightness(i)}catch(s){console.warn("Pine3 Home: Pine3 Wallpanel",s)}}}var Br=Object.defineProperty,Rr=Object.getOwnPropertyDescriptor,ot=(t,e,a,r)=>{for(var i=r>1?void 0:r?Rr(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(r?n(e,a,i):n(i))||i);return r&&i&&Br(e,a,i),i};const Nr={vidro:"pine3-vidro",bento:"pine3-bento",moldura:"pine3-moldura"},Ir=2e3,jr="/pine3-home";let tt=class extends ce{constructor(){super(...arguments),this.phase="starting",this.error="",this.entities={},this.now=new Date,this.unsubs=[],this.ambient=!1,this.lastActivity=Date.now(),this.onActivity=t=>this.activity(t)}connectedCallback(){super.connectedCallback(),this.clockTimer=window.setInterval(()=>this.now=new Date,15e3),window.addEventListener("pointerdown",this.onActivity,!0),window.addEventListener("keydown",this.onActivity,!0),this.idleTimer=window.setInterval(()=>this.checkIdle(),5e3),this.offWallpanel=Or(e=>{e==="sleep"&&(this.ambient=!1,this.vidro?.reset()),this.activity()});const t=ca();t?this.connect(t):this.beginPairing()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clockTimer),clearInterval(this.idleTimer),window.removeEventListener("pointerdown",this.onActivity,!0),window.removeEventListener("keydown",this.onActivity,!0),this.offWallpanel?.(),clearTimeout(this.pollTimer),this.teardown()}teardown(){this.unsubs.forEach(t=>t()),this.unsubs=[],this.conn?.close(),this.conn=void 0}get vidro(){return this.renderRoot.querySelector("pine3-vidro, pine3-bento, pine3-moldura")}activity(t){this.lastActivity=Date.now(),this.ambient&&(this.ambient=!1,t&&(t.stopPropagation(),t.preventDefault()))}checkIdle(){if(this.phase!=="ready"||this.ambient||!this.me)return;const t=this.me.dashboard.ambient_after??2;!t||this.vidro?.busy||Date.now()-this.lastActivity>t*6e4&&(this.ambient=!0,this.vidro?.reset())}updated(){const t=this.entities["sun.sun"]?.state;Sr(this.ambient,this.me?.dashboard.ambient_brightness,t?t==="below_horizon":null)}async beginPairing(){clearTimeout(this.pollTimer),this.phase="pairing",this.pair=void 0;try{this.pair=await la(),this.poll()}catch(t){this.error=t.message==="too_many"?"Há demasiados códigos à espera. Tenta daqui a pouco.":"Não foi possível pedir um código.",this.pollTimer=window.setTimeout(()=>this.beginPairing(),1e4)}}poll(){this.pollTimer=window.setTimeout(async()=>{if(this.pair){try{const t=await da(this.pair);if(t.status==="approved"){qt(t.token),this.connect(t.token);return}if(t.status==="expired"){this.beginPairing();return}}catch{}this.poll()}},Ir)}async connect(t){this.phase="connecting",this.teardown();try{const e=await sa({auth:Ge(location.origin,t)});this.conn=e,this.me=await e.sendMessagePromise({type:"pine3_home/me"}),this.home=await e.sendMessagePromise({type:"pine3_home/home"}),this.unsubs.push(na(e,a=>this.entities=a)),this.unsubs.push(await e.subscribeMessage(a=>this.home=a,{type:"pine3_home/subscribe"})),this.unsubs.push(await e.subscribeEvents(async()=>{this.me=await e.sendMessagePromise({type:"pine3_home/me"})},"pine3_home_updated")),e.addEventListener("ready",async()=>{this.me=await e.sendMessagePromise({type:"pine3_home/me"})}),this.phase="ready"}catch(e){if(e===pt){qt(null),this.beginPairing();return}this.phase="error",this.error="Sem ligação ao Home Assistant. A tentar de novo…",this.pollTimer=window.setTimeout(()=>this.connect(t),5e3)}}qr(t){const e=Ve(0,"M");return e.addData(`${location.origin}${jr}?code=${t}`),e.make(),Le(e.createSvgTag({cellSize:6,margin:2,scalable:!0}))}renderPairing(){const t=this.pair?.code;return p`<main class="center">
      <div class="pane pairing">
        <div class="text">
          <span class="muted eyebrow">Pine3 Home</span>
          <h1>Emparelhar este ecrã</h1>
          <p class="muted">No Home Assistant, abre <strong>Pine3 Home</strong> e escreve este código, ou lê o QR com o telemóvel.</p>
          <div class="code" aria-live="polite">${t?`${t.slice(0,3)} ${t.slice(3)}`:"··· ···"}</div>
          ${this.error?p`<p class="bad">${this.error}</p>`:p`<p class="muted small">O código muda a cada 10 minutos.</p>`}
        </div>
        ${t?p`<div class="qr">${this.qr(t)}</div>`:L}
      </div>
    </main>`}renderReady(){const t=this.me;if(!this.home||!this.conn)return p`<main class="center"><p class="muted">A carregar a casa…</p></main>`;const e=Hr(Nr[t.dashboard.style]??"pine3-vidro");return Pr`<${e} .home=${this.home} .entities=${this.entities} .dashboard=${t.dashboard} .conn=${this.conn}
      .screenName=${t.screen?.name??""} ?ambient=${this.ambient} .wallpanel=${ye()!==null}
      ?canEdit=${t.is_admin||t.dashboard.screen_edit!==!1}></${e}>`}render(){switch(this.phase){case"pairing":return this.renderPairing();case"ready":return this.me?this.renderReady():L;case"error":return p`<main class="center"><p class="muted">${this.error}</p></main>`;default:return p`<main class="center"><p class="muted">A ligar…</p></main>`}}};tt.styles=[Me,yt`
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
    `];ot([U()],tt.prototype,"phase",2);ot([U()],tt.prototype,"pair",2);ot([U()],tt.prototype,"error",2);ot([U()],tt.prototype,"me",2);ot([U()],tt.prototype,"home",2);ot([U()],tt.prototype,"entities",2);ot([U()],tt.prototype,"now",2);ot([U()],tt.prototype,"ambient",2);tt=ot([wt("pine3-screen")],tt);
