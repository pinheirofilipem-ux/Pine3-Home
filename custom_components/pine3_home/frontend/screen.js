import{A as _,E as It,w as W,i as wt,n as ut,r as F,a as pe,c as d,t as yt,b as He}from"./chunks/base-BYQr5Ns4.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={ATTRIBUTE:1,CHILD:2},Wt=t=>(...e)=>({_$litDirective$:t,values:e});let Ft=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,i){this._$Ct=e,this._$AM=a,this._$Ci=i}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ot=class extends Ft{constructor(e){if(super(e),this.it=_,e.type!==jt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===_||e==null)return this._t=void 0,this.it=e;if(e===It)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const a=[e];return a.raw=a,this._t={_$litType$:this.constructor.resultType,strings:a,values:[]}}};Ot.directiveName="unsafeHTML",Ot.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Dt extends Ot{}Dt.directiveName="unsafeSVG",Dt.resultType=2;const Ee=Wt(Dt);function ze(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var me={exports:{}};(function(t,e){var a=function(){var i=function(L,A){var w=236,x=17,f=L,k=n[A],l=null,c=0,$=null,b=[],y={},O=function(g,p){c=f*4+17,l=function(u){for(var m=new Array(u),v=0;v<u;v+=1){m[v]=new Array(u);for(var C=0;C<u;C+=1)m[v][C]=null}return m}(c),D(0,0),D(c-7,0),D(0,c-7),X(),Y(),lt(g,p),f>=7&&ot(g),$==null&&($=Te(f,k,b)),dt($,p)},D=function(g,p){for(var u=-1;u<=7;u+=1)if(!(g+u<=-1||c<=g+u))for(var m=-1;m<=7;m+=1)p+m<=-1||c<=p+m||(0<=u&&u<=6&&(m==0||m==6)||0<=m&&m<=6&&(u==0||u==6)||2<=u&&u<=4&&2<=m&&m<=4?l[g+u][p+m]=!0:l[g+u][p+m]=!1)},I=function(){for(var g=0,p=0,u=0;u<8;u+=1){O(!0,u);var m=o.getLostPoint(y);(u==0||g>m)&&(g=m,p=u)}return p},Y=function(){for(var g=8;g<c-8;g+=1)l[g][6]==null&&(l[g][6]=g%2==0);for(var p=8;p<c-8;p+=1)l[6][p]==null&&(l[6][p]=p%2==0)},X=function(){for(var g=o.getPatternPosition(f),p=0;p<g.length;p+=1)for(var u=0;u<g.length;u+=1){var m=g[p],v=g[u];if(l[m][v]==null)for(var C=-2;C<=2;C+=1)for(var H=-2;H<=2;H+=1)C==-2||C==2||H==-2||H==2||C==0&&H==0?l[m+C][v+H]=!0:l[m+C][v+H]=!1}},ot=function(g){for(var p=o.getBCHTypeNumber(f),u=0;u<18;u+=1){var m=!g&&(p>>u&1)==1;l[Math.floor(u/3)][u%3+c-8-3]=m}for(var u=0;u<18;u+=1){var m=!g&&(p>>u&1)==1;l[u%3+c-8-3][Math.floor(u/3)]=m}},lt=function(g,p){for(var u=k<<3|p,m=o.getBCHTypeInfo(u),v=0;v<15;v+=1){var C=!g&&(m>>v&1)==1;v<6?l[v][8]=C:v<8?l[v+1][8]=C:l[c-15+v][8]=C}for(var v=0;v<15;v+=1){var C=!g&&(m>>v&1)==1;v<8?l[8][c-v-1]=C:v<9?l[8][15-v-1+1]=C:l[8][15-v-1]=C}l[c-8][8]=!g},dt=function(g,p){for(var u=-1,m=c-1,v=7,C=0,H=o.getMaskFunction(p),V=c-1;V>0;V-=2)for(V==6&&(V-=1);;){for(var j=0;j<2;j+=1)if(l[m][V-j]==null){var K=!1;C<g.length&&(K=(g[C]>>>v&1)==1);var E=H(m,V-j);E&&(K=!K),l[m][V-j]=K,v-=1,v==-1&&(C+=1,v=7)}if(m+=u,m<0||c<=m){m-=u,u=-u;break}}},pt=function(g,p){for(var u=0,m=0,v=0,C=new Array(p.length),H=new Array(p.length),V=0;V<p.length;V+=1){var j=p[V].dataCount,K=p[V].totalCount-j;m=Math.max(m,j),v=Math.max(v,K),C[V]=new Array(j);for(var E=0;E<C[V].length;E+=1)C[V][E]=255&g.getBuffer()[E+u];u+=j;var tt=o.getErrorCorrectPolynomial(K),et=M(C[V],tt.getLength()-1),Gt=et.mod(tt);H[V]=new Array(tt.getLength()-1);for(var E=0;E<H[V].length;E+=1){var Yt=E+Gt.getLength()-H[V].length;H[V][E]=Yt>=0?Gt.getAt(Yt):0}}for(var Kt=0,E=0;E<p.length;E+=1)Kt+=p[E].totalCount;for(var Tt=new Array(Kt),_t=0,E=0;E<m;E+=1)for(var V=0;V<p.length;V+=1)E<C[V].length&&(Tt[_t]=C[V][E],_t+=1);for(var E=0;E<v;E+=1)for(var V=0;V<p.length;V+=1)E<H[V].length&&(Tt[_t]=H[V][E],_t+=1);return Tt},Te=function(g,p,u){for(var m=T.getRSBlocks(g,p),v=Z(),C=0;C<u.length;C+=1){var H=u[C];v.put(H.getMode(),4),v.put(H.getLength(),o.getLengthInBits(H.getMode(),g)),H.write(v)}for(var V=0,C=0;C<m.length;C+=1)V+=m[C].dataCount;if(v.getLengthInBits()>V*8)throw"code length overflow. ("+v.getLengthInBits()+">"+V*8+")";for(v.getLengthInBits()+4<=V*8&&v.put(0,4);v.getLengthInBits()%8!=0;)v.putBit(!1);for(;!(v.getLengthInBits()>=V*8||(v.put(w,8),v.getLengthInBits()>=V*8));)v.put(x,8);return pt(v,m)};y.addData=function(g,p){p=p||"Byte";var u=null;switch(p){case"Numeric":u=R(g);break;case"Alphanumeric":u=Q(g);break;case"Byte":u=S(g);break;case"Kanji":u=U(g);break;default:throw"mode:"+p}b.push(u),$=null},y.isDark=function(g,p){if(g<0||c<=g||p<0||c<=p)throw g+","+p;return l[g][p]},y.getModuleCount=function(){return c},y.make=function(){if(f<1){for(var g=1;g<40;g++){for(var p=T.getRSBlocks(g,k),u=Z(),m=0;m<b.length;m++){var v=b[m];u.put(v.getMode(),4),u.put(v.getLength(),o.getLengthInBits(v.getMode(),g)),v.write(u)}for(var C=0,m=0;m<p.length;m++)C+=p[m].dataCount;if(u.getLengthInBits()<=C*8)break}f=g}O(!1,I())},y.createTableTag=function(g,p){g=g||2,p=typeof p>"u"?g*4:p;var u="";u+='<table style="',u+=" border-width: 0px; border-style: none;",u+=" border-collapse: collapse;",u+=" padding: 0px; margin: "+p+"px;",u+='">',u+="<tbody>";for(var m=0;m<y.getModuleCount();m+=1){u+="<tr>";for(var v=0;v<y.getModuleCount();v+=1)u+='<td style="',u+=" border-width: 0px; border-style: none;",u+=" border-collapse: collapse;",u+=" padding: 0px; margin: 0px;",u+=" width: "+g+"px;",u+=" height: "+g+"px;",u+=" background-color: ",u+=y.isDark(m,v)?"#000000":"#ffffff",u+=";",u+='"/>';u+="</tr>"}return u+="</tbody>",u+="</table>",u},y.createSvgTag=function(g,p,u,m){var v={};typeof arguments[0]=="object"&&(v=arguments[0],g=v.cellSize,p=v.margin,u=v.alt,m=v.title),g=g||2,p=typeof p>"u"?g*4:p,u=typeof u=="string"?{text:u}:u||{},u.text=u.text||null,u.id=u.text?u.id||"qrcode-description":null,m=typeof m=="string"?{text:m}:m||{},m.text=m.text||null,m.id=m.text?m.id||"qrcode-title":null;var C=y.getModuleCount()*g+p*2,H,V,j,K,E="",tt;for(tt="l"+g+",0 0,"+g+" -"+g+",0 0,-"+g+"z ",E+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',E+=v.scalable?"":' width="'+C+'px" height="'+C+'px"',E+=' viewBox="0 0 '+C+" "+C+'" ',E+=' preserveAspectRatio="xMinYMin meet"',E+=m.text||u.text?' role="img" aria-labelledby="'+mt([m.id,u.id].join(" ").trim())+'"':"",E+=">",E+=m.text?'<title id="'+mt(m.id)+'">'+mt(m.text)+"</title>":"",E+=u.text?'<description id="'+mt(u.id)+'">'+mt(u.text)+"</description>":"",E+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',E+='<path d="',j=0;j<y.getModuleCount();j+=1)for(K=j*g+p,H=0;H<y.getModuleCount();H+=1)y.isDark(j,H)&&(V=H*g+p,E+="M"+V+","+K+tt);return E+='" stroke="transparent" fill="black"/>',E+="</svg>",E},y.createDataURL=function(g,p){g=g||2,p=typeof p>"u"?g*4:p;var u=y.getModuleCount()*g+p*2,m=p,v=u-p;return Ae(u,u,function(C,H){if(m<=C&&C<v&&m<=H&&H<v){var V=Math.floor((C-m)/g),j=Math.floor((H-m)/g);return y.isDark(j,V)?0:1}else return 1})},y.createImgTag=function(g,p,u){g=g||2,p=typeof p>"u"?g*4:p;var m=y.getModuleCount()*g+p*2,v="";return v+="<img",v+=' src="',v+=y.createDataURL(g,p),v+='"',v+=' width="',v+=m,v+='"',v+=' height="',v+=m,v+='"',u&&(v+=' alt="',v+=mt(u),v+='"'),v+="/>",v};var mt=function(g){for(var p="",u=0;u<g.length;u+=1){var m=g.charAt(u);switch(m){case"<":p+="&lt;";break;case">":p+="&gt;";break;case"&":p+="&amp;";break;case'"':p+="&quot;";break;default:p+=m;break}}return p},Ve=function(g){var p=1;g=typeof g>"u"?p*2:g;var u=y.getModuleCount()*p+g*2,m=g,v=u-g,C,H,V,j,K,E={"██":"█","█ ":"▀"," █":"▄","  ":" "},tt={"██":"▀","█ ":"▀"," █":" ","  ":" "},et="";for(C=0;C<u;C+=2){for(V=Math.floor((C-m)/p),j=Math.floor((C+1-m)/p),H=0;H<u;H+=1)K="█",m<=H&&H<v&&m<=C&&C<v&&y.isDark(V,Math.floor((H-m)/p))&&(K=" "),m<=H&&H<v&&m<=C+1&&C+1<v&&y.isDark(j,Math.floor((H-m)/p))?K+=" ":K+="█",et+=g<1&&C+1>=v?tt[K]:E[K];et+=`
`}return u%2&&g>0?et.substring(0,et.length-u-1)+Array(u+1).join("▀"):et.substring(0,et.length-1)};return y.createASCII=function(g,p){if(g=g||1,g<2)return Ve(p);g-=1,p=typeof p>"u"?g*2:p;var u=y.getModuleCount()*g+p*2,m=p,v=u-p,C,H,V,j,K=Array(g+1).join("██"),E=Array(g+1).join("  "),tt="",et="";for(C=0;C<u;C+=1){for(V=Math.floor((C-m)/g),et="",H=0;H<u;H+=1)j=1,m<=H&&H<v&&m<=C&&C<v&&y.isDark(V,Math.floor((H-m)/g))&&(j=0),et+=j?K:E;for(V=0;V<g;V+=1)tt+=et+`
`}return tt.substring(0,tt.length-1)},y.renderTo2dContext=function(g,p){p=p||2;for(var u=y.getModuleCount(),m=0;m<u;m++)for(var v=0;v<u;v++)g.fillStyle=y.isDark(m,v)?"black":"white",g.fillRect(m*p,v*p,p,p)},y};i.stringToBytesFuncs={default:function(L){for(var A=[],w=0;w<L.length;w+=1){var x=L.charCodeAt(w);A.push(x&255)}return A}},i.stringToBytes=i.stringToBytesFuncs.default,i.createStringToBytes=function(L,A){var w=function(){for(var f=At(L),k=function(){var Y=f.read();if(Y==-1)throw"eof";return Y},l=0,c={};;){var $=f.read();if($==-1)break;var b=k(),y=k(),O=k(),D=String.fromCharCode($<<8|b),I=y<<8|O;c[D]=I,l+=1}if(l!=A)throw l+" != "+A;return c}(),x=63;return function(f){for(var k=[],l=0;l<f.length;l+=1){var c=f.charCodeAt(l);if(c<128)k.push(c);else{var $=w[f.charAt(l)];typeof $=="number"?($&255)==$?k.push($):(k.push($>>>8),k.push($&255)):k.push(x)}}return k}};var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},s={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o=function(){var L=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],A=1335,w=7973,x=21522,f={},k=function(l){for(var c=0;l!=0;)c+=1,l>>>=1;return c};return f.getBCHTypeInfo=function(l){for(var c=l<<10;k(c)-k(A)>=0;)c^=A<<k(c)-k(A);return(l<<10|c)^x},f.getBCHTypeNumber=function(l){for(var c=l<<12;k(c)-k(w)>=0;)c^=w<<k(c)-k(w);return l<<12|c},f.getPatternPosition=function(l){return L[l-1]},f.getMaskFunction=function(l){switch(l){case s.PATTERN000:return function(c,$){return(c+$)%2==0};case s.PATTERN001:return function(c,$){return c%2==0};case s.PATTERN010:return function(c,$){return $%3==0};case s.PATTERN011:return function(c,$){return(c+$)%3==0};case s.PATTERN100:return function(c,$){return(Math.floor(c/2)+Math.floor($/3))%2==0};case s.PATTERN101:return function(c,$){return c*$%2+c*$%3==0};case s.PATTERN110:return function(c,$){return(c*$%2+c*$%3)%2==0};case s.PATTERN111:return function(c,$){return(c*$%3+(c+$)%2)%2==0};default:throw"bad maskPattern:"+l}},f.getErrorCorrectPolynomial=function(l){for(var c=M([1],0),$=0;$<l;$+=1)c=c.multiply(M([1,h.gexp($)],0));return c},f.getLengthInBits=function(l,c){if(1<=c&&c<10)switch(l){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw"mode:"+l}else if(c<27)switch(l){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw"mode:"+l}else if(c<41)switch(l){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw"mode:"+l}else throw"type:"+c},f.getLostPoint=function(l){for(var c=l.getModuleCount(),$=0,b=0;b<c;b+=1)for(var y=0;y<c;y+=1){for(var O=0,D=l.isDark(b,y),I=-1;I<=1;I+=1)if(!(b+I<0||c<=b+I))for(var Y=-1;Y<=1;Y+=1)y+Y<0||c<=y+Y||I==0&&Y==0||D==l.isDark(b+I,y+Y)&&(O+=1);O>5&&($+=3+O-5)}for(var b=0;b<c-1;b+=1)for(var y=0;y<c-1;y+=1){var X=0;l.isDark(b,y)&&(X+=1),l.isDark(b+1,y)&&(X+=1),l.isDark(b,y+1)&&(X+=1),l.isDark(b+1,y+1)&&(X+=1),(X==0||X==4)&&($+=3)}for(var b=0;b<c;b+=1)for(var y=0;y<c-6;y+=1)l.isDark(b,y)&&!l.isDark(b,y+1)&&l.isDark(b,y+2)&&l.isDark(b,y+3)&&l.isDark(b,y+4)&&!l.isDark(b,y+5)&&l.isDark(b,y+6)&&($+=40);for(var y=0;y<c;y+=1)for(var b=0;b<c-6;b+=1)l.isDark(b,y)&&!l.isDark(b+1,y)&&l.isDark(b+2,y)&&l.isDark(b+3,y)&&l.isDark(b+4,y)&&!l.isDark(b+5,y)&&l.isDark(b+6,y)&&($+=40);for(var ot=0,y=0;y<c;y+=1)for(var b=0;b<c;b+=1)l.isDark(b,y)&&(ot+=1);var lt=Math.abs(100*ot/c/c-50)/5;return $+=lt*10,$},f}(),h=function(){for(var L=new Array(256),A=new Array(256),w=0;w<8;w+=1)L[w]=1<<w;for(var w=8;w<256;w+=1)L[w]=L[w-4]^L[w-5]^L[w-6]^L[w-8];for(var w=0;w<255;w+=1)A[L[w]]=w;var x={};return x.glog=function(f){if(f<1)throw"glog("+f+")";return A[f]},x.gexp=function(f){for(;f<0;)f+=255;for(;f>=256;)f-=255;return L[f]},x}();function M(L,A){if(typeof L.length>"u")throw L.length+"/"+A;var w=function(){for(var f=0;f<L.length&&L[f]==0;)f+=1;for(var k=new Array(L.length-f+A),l=0;l<L.length-f;l+=1)k[l]=L[l+f];return k}(),x={};return x.getAt=function(f){return w[f]},x.getLength=function(){return w.length},x.multiply=function(f){for(var k=new Array(x.getLength()+f.getLength()-1),l=0;l<x.getLength();l+=1)for(var c=0;c<f.getLength();c+=1)k[l+c]^=h.gexp(h.glog(x.getAt(l))+h.glog(f.getAt(c)));return M(k,0)},x.mod=function(f){if(x.getLength()-f.getLength()<0)return x;for(var k=h.glog(x.getAt(0))-h.glog(f.getAt(0)),l=new Array(x.getLength()),c=0;c<x.getLength();c+=1)l[c]=x.getAt(c);for(var c=0;c<f.getLength();c+=1)l[c]^=h.gexp(h.glog(f.getAt(c))+k);return M(l,0).mod(f)},x}var T=function(){var L=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],A=function(f,k){var l={};return l.totalCount=f,l.dataCount=k,l},w={},x=function(f,k){switch(k){case n.L:return L[(f-1)*4+0];case n.M:return L[(f-1)*4+1];case n.Q:return L[(f-1)*4+2];case n.H:return L[(f-1)*4+3];default:return}};return w.getRSBlocks=function(f,k){var l=x(f,k);if(typeof l>"u")throw"bad rs block @ typeNumber:"+f+"/errorCorrectionLevel:"+k;for(var c=l.length/3,$=[],b=0;b<c;b+=1)for(var y=l[b*3+0],O=l[b*3+1],D=l[b*3+2],I=0;I<y;I+=1)$.push(A(O,D));return $},w}(),Z=function(){var L=[],A=0,w={};return w.getBuffer=function(){return L},w.getAt=function(x){var f=Math.floor(x/8);return(L[f]>>>7-x%8&1)==1},w.put=function(x,f){for(var k=0;k<f;k+=1)w.putBit((x>>>f-k-1&1)==1)},w.getLengthInBits=function(){return A},w.putBit=function(x){var f=Math.floor(A/8);L.length<=f&&L.push(0),x&&(L[f]|=128>>>A%8),A+=1},w},R=function(L){var A=r.MODE_NUMBER,w=L,x={};x.getMode=function(){return A},x.getLength=function(l){return w.length},x.write=function(l){for(var c=w,$=0;$+2<c.length;)l.put(f(c.substring($,$+3)),10),$+=3;$<c.length&&(c.length-$==1?l.put(f(c.substring($,$+1)),4):c.length-$==2&&l.put(f(c.substring($,$+2)),7))};var f=function(l){for(var c=0,$=0;$<l.length;$+=1)c=c*10+k(l.charAt($));return c},k=function(l){if("0"<=l&&l<="9")return l.charCodeAt(0)-48;throw"illegal char :"+l};return x},Q=function(L){var A=r.MODE_ALPHA_NUM,w=L,x={};x.getMode=function(){return A},x.getLength=function(k){return w.length},x.write=function(k){for(var l=w,c=0;c+1<l.length;)k.put(f(l.charAt(c))*45+f(l.charAt(c+1)),11),c+=2;c<l.length&&k.put(f(l.charAt(c)),6)};var f=function(k){if("0"<=k&&k<="9")return k.charCodeAt(0)-48;if("A"<=k&&k<="Z")return k.charCodeAt(0)-65+10;switch(k){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+k}};return x},S=function(L){var A=r.MODE_8BIT_BYTE,w=i.stringToBytes(L),x={};return x.getMode=function(){return A},x.getLength=function(f){return w.length},x.write=function(f){for(var k=0;k<w.length;k+=1)f.put(w[k],8)},x},U=function(L){var A=r.MODE_KANJI,w=i.stringToBytesFuncs.SJIS;if(!w)throw"sjis not supported.";(function(k,l){var c=w(k);if(c.length!=2||(c[0]<<8|c[1])!=l)throw"sjis not supported."})("友",38726);var x=w(L),f={};return f.getMode=function(){return A},f.getLength=function(k){return~~(x.length/2)},f.write=function(k){for(var l=x,c=0;c+1<l.length;){var $=(255&l[c])<<8|255&l[c+1];if(33088<=$&&$<=40956)$-=33088;else if(57408<=$&&$<=60351)$-=49472;else throw"illegal char at "+(c+1)+"/"+$;$=($>>>8&255)*192+($&255),k.put($,13),c+=2}if(c<l.length)throw"illegal char at "+(c+1)},f},rt=function(){var L=[],A={};return A.writeByte=function(w){L.push(w&255)},A.writeShort=function(w){A.writeByte(w),A.writeByte(w>>>8)},A.writeBytes=function(w,x,f){x=x||0,f=f||w.length;for(var k=0;k<f;k+=1)A.writeByte(w[k+x])},A.writeString=function(w){for(var x=0;x<w.length;x+=1)A.writeByte(w.charCodeAt(x))},A.toByteArray=function(){return L},A.toString=function(){var w="";w+="[";for(var x=0;x<L.length;x+=1)x>0&&(w+=","),w+=L[x];return w+="]",w},A},gt=function(){var L=0,A=0,w=0,x="",f={},k=function(c){x+=String.fromCharCode(l(c&63))},l=function(c){if(!(c<0)){if(c<26)return 65+c;if(c<52)return 97+(c-26);if(c<62)return 48+(c-52);if(c==62)return 43;if(c==63)return 47}throw"n:"+c};return f.writeByte=function(c){for(L=L<<8|c&255,A+=8,w+=1;A>=6;)k(L>>>A-6),A-=6},f.flush=function(){if(A>0&&(k(L<<6-A),L=0,A=0),w%3!=0)for(var c=3-w%3,$=0;$<c;$+=1)x+="="},f.toString=function(){return x},f},At=function(L){var A=L,w=0,x=0,f=0,k={};k.read=function(){for(;f<8;){if(w>=A.length){if(f==0)return-1;throw"unexpected end of file./"+f}var c=A.charAt(w);if(w+=1,c=="=")return f=0,-1;if(c.match(/^\s$/))continue;x=x<<6|l(c.charCodeAt(0)),f+=6}var $=x>>>f-8&255;return f-=8,$};var l=function(c){if(65<=c&&c<=90)return c-65;if(97<=c&&c<=122)return c-97+26;if(48<=c&&c<=57)return c-48+52;if(c==43)return 62;if(c==47)return 63;throw"c:"+c};return k},Le=function(L,A){var w=L,x=A,f=new Array(L*A),k={};k.setPixel=function(b,y,O){f[y*w+b]=O},k.write=function(b){b.writeString("GIF87a"),b.writeShort(w),b.writeShort(x),b.writeByte(128),b.writeByte(0),b.writeByte(0),b.writeByte(0),b.writeByte(0),b.writeByte(0),b.writeByte(255),b.writeByte(255),b.writeByte(255),b.writeString(","),b.writeShort(0),b.writeShort(0),b.writeShort(w),b.writeShort(x),b.writeByte(0);var y=2,O=c(y);b.writeByte(y);for(var D=0;O.length-D>255;)b.writeByte(255),b.writeBytes(O,D,255),D+=255;b.writeByte(O.length-D),b.writeBytes(O,D,O.length-D),b.writeByte(0),b.writeString(";")};var l=function(b){var y=b,O=0,D=0,I={};return I.write=function(Y,X){if(Y>>>X)throw"length over";for(;O+X>=8;)y.writeByte(255&(Y<<O|D)),X-=8-O,Y>>>=8-O,D=0,O=0;D=Y<<O|D,O=O+X},I.flush=function(){O>0&&y.writeByte(D)},I},c=function(b){for(var y=1<<b,O=(1<<b)+1,D=b+1,I=$(),Y=0;Y<y;Y+=1)I.add(String.fromCharCode(Y));I.add(String.fromCharCode(y)),I.add(String.fromCharCode(O));var X=rt(),ot=l(X);ot.write(y,D);var lt=0,dt=String.fromCharCode(f[lt]);for(lt+=1;lt<f.length;){var pt=String.fromCharCode(f[lt]);lt+=1,I.contains(dt+pt)?dt=dt+pt:(ot.write(I.indexOf(dt),D),I.size()<4095&&(I.size()==1<<D&&(D+=1),I.add(dt+pt)),dt=pt)}return ot.write(I.indexOf(dt),D),ot.write(O,D),ot.flush(),X.toByteArray()},$=function(){var b={},y=0,O={};return O.add=function(D){if(O.contains(D))throw"dup key:"+D;b[D]=y,y+=1},O.size=function(){return y},O.indexOf=function(D){return b[D]},O.contains=function(D){return typeof b[D]<"u"},O};return k},Ae=function(L,A,w){for(var x=Le(L,A),f=0;f<A;f+=1)for(var k=0;k<L;k+=1)x.setPixel(k,f,w(k,f));var l=rt();x.write(l);for(var c=gt(),$=l.toByteArray(),b=0;b<$.length;b+=1)c.writeByte($[b]);return c.flush(),"data:image/gif;base64,"+c};return i}();(function(){a.stringToBytesFuncs["UTF-8"]=function(i){function r(n){for(var s=[],o=0;o<n.length;o++){var h=n.charCodeAt(o);h<128?s.push(h):h<2048?s.push(192|h>>6,128|h&63):h<55296||h>=57344?s.push(224|h>>12,128|h>>6&63,128|h&63):(o++,h=65536+((h&1023)<<10|n.charCodeAt(o)&1023),s.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return s}return r(i)}})(),function(i){t.exports=i()}(function(){return a})})(me);var Pe=me.exports;const Oe=ze(Pe),De=1,kt=2,Vt=3,Se=4,Re=5;function Be(t){return{type:"auth",access_token:t}}function Ne(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function Ie(){return{type:"get_states"}}function je(t,e,a,i,r){const n={type:"call_service",domain:t,service:e,target:i,return_response:r};return a&&(n.service_data=a),n}function We(t){const e={type:"subscribe_events"};return t&&(e.event_type=t),e}function Xt(t){return{type:"unsubscribe_events",subscription:t}}function Fe(){return{type:"ping"}}function Ue(t,e){return{type:"result",success:!1,error:{code:t,message:e}}}const ve=(t,e,a,i)=>{const[r,n,s]=t.split(".",3);return Number(r)>e||Number(r)===e&&(i===void 0?Number(n)>=a:Number(n)>a)||i!==void 0&&Number(r)===e&&Number(n)===a&&Number(s)>=i},qe="auth_invalid",Ze="auth_ok";function Ge(t){if(!t.auth)throw Se;const e=t.auth;let a=e.expired?e.refreshAccessToken().then(()=>{a=void 0},()=>{a=void 0}):void 0;const i=e.wsUrl;function r(n,s,o){const h=new WebSocket(i);let M=!1;const T=()=>{if(h.removeEventListener("close",T),M){o(kt);return}if(n===0){o(De);return}const Q=n===-1?-1:n-1;setTimeout(()=>r(Q,s,o),1e3)},Z=async Q=>{try{e.expired&&await(a||e.refreshAccessToken()),h.send(JSON.stringify(Be(e.accessToken)))}catch(S){M=S===kt,h.close()}},R=async Q=>{const S=JSON.parse(Q.data);switch(S.type){case qe:M=!0,h.close();break;case Ze:h.removeEventListener("open",Z),h.removeEventListener("message",R),h.removeEventListener("close",T),h.removeEventListener("error",T),h.haVersion=S.ha_version,ve(h.haVersion,2022,9)&&h.send(JSON.stringify(Ne())),s(h);break}};h.addEventListener("open",Z),h.addEventListener("message",R),h.addEventListener("close",T),h.addEventListener("error",T)}return new Promise((n,s)=>r(t.setupRetry,n,s))}class Ye{constructor(e,a){this._handleMessage=i=>{let r=JSON.parse(i.data);Array.isArray(r)||(r=[r]),r.forEach(n=>{const s=this.commands.get(n.id);switch(n.type){case"event":s?s.callback(n.event):(console.warn(`Received event for unknown subscription ${n.id}. Unsubscribing.`),this.sendMessagePromise(Xt(n.id)).catch(o=>{}));break;case"result":s&&(n.success?(s.resolve(n.result),"subscribe"in s||this.commands.delete(n.id)):(s.reject(n.error),this.commands.delete(n.id)));break;case"pong":s?(s.resolve(),this.commands.delete(n.id)):console.warn(`Received unknown pong response ${n.id}`);break}})},this._handleClose=async()=>{const i=this.commands;if(this.commandId=1,this.oldSubscriptions=this.commands,this.commands=new Map,this.socket=void 0,i.forEach(s=>{"subscribe"in s||s.reject(Ue(Vt,"Connection lost"))}),this.closeRequested)return;this.fireEvent("disconnected");const r=Object.assign(Object.assign({},this.options),{setupRetry:0}),n=s=>{setTimeout(async()=>{if(!this.closeRequested)try{const o=await r.createSocket(r);this._setSocket(o)}catch(o){if(this._queuedMessages){const h=this._queuedMessages;this._queuedMessages=void 0;for(const M of h)M.reject&&M.reject(Vt)}o===kt?this.fireEvent("reconnect-error",o):n(s+1)}},Math.min(s,5)*1e3)};this.suspendReconnectPromise&&(await this.suspendReconnectPromise,this.suspendReconnectPromise=void 0,this._queuedMessages=[]),n(0)},this.options=a,this.commandId=2,this.commands=new Map,this.eventListeners=new Map,this.closeRequested=!1,this._setSocket(e)}get connected(){return this.socket!==void 0&&this.socket.readyState==this.socket.OPEN}_setSocket(e){this.socket=e,this.haVersion=e.haVersion,e.addEventListener("message",this._handleMessage),e.addEventListener("close",this._handleClose);const a=this.oldSubscriptions;a&&(this.oldSubscriptions=void 0,a.forEach(r=>{"subscribe"in r&&r.subscribe&&r.subscribe().then(n=>{r.unsubscribe=n,r.resolve()})}));const i=this._queuedMessages;if(i){this._queuedMessages=void 0;for(const r of i)r.resolve()}this.fireEvent("ready")}addEventListener(e,a){let i=this.eventListeners.get(e);i||(i=[],this.eventListeners.set(e,i)),i.push(a)}removeEventListener(e,a){const i=this.eventListeners.get(e);if(!i)return;const r=i.indexOf(a);r!==-1&&i.splice(r,1)}fireEvent(e,a){(this.eventListeners.get(e)||[]).forEach(i=>i(this,a))}suspendReconnectUntil(e){this.suspendReconnectPromise=e}suspend(){if(!this.suspendReconnectPromise)throw new Error("Suspend promise not set");this.socket&&this.socket.close()}reconnect(e=!1){if(this.socket){if(!e){this.socket.close();return}this.socket.removeEventListener("message",this._handleMessage),this.socket.removeEventListener("close",this._handleClose),this.socket.close(),this._handleClose()}}close(){this.closeRequested=!0,this.socket&&this.socket.close()}async subscribeEvents(e,a){return this.subscribeMessage(e,We(a))}ping(){return this.sendMessagePromise(Fe())}sendMessage(e,a){if(!this.connected)throw Vt;if(this._queuedMessages){if(a)throw new Error("Cannot queue with commandId");this._queuedMessages.push({resolve:()=>this.sendMessage(e)});return}a||(a=this._genCmdId()),e.id=a,this.socket.send(JSON.stringify(e))}sendMessagePromise(e){return new Promise((a,i)=>{if(this._queuedMessages){this._queuedMessages.push({reject:i,resolve:async()=>{try{a(await this.sendMessagePromise(e))}catch(n){i(n)}}});return}const r=this._genCmdId();this.commands.set(r,{resolve:a,reject:i}),this.sendMessage(e,r)})}async subscribeMessage(e,a,i){this._queuedMessages&&await new Promise((n,s)=>{this._queuedMessages.push({resolve:n,reject:s})});let r;return await new Promise((n,s)=>{const o=this._genCmdId();r={resolve:n,reject:s,callback:e,subscribe:i?.resubscribe!==!1?()=>this.subscribeMessage(e,a):void 0,unsubscribe:async()=>{this.connected&&await this.sendMessagePromise(Xt(o)),this.commands.delete(o)}},this.commands.set(o,r);try{this.sendMessage(a,o)}catch{}}),()=>r.unsubscribe()}_genCmdId(){return++this.commandId}}const Ke=t=>t*1e3+Date.now();async function Xe(t,e,a){const i=typeof location<"u"&&location;if(i&&i.protocol==="https:"){const o=document.createElement("a");if(o.href=t,o.protocol==="http:"&&o.hostname!=="localhost")throw Re}const r=new FormData;e!==null&&r.append("client_id",e),Object.keys(a).forEach(o=>{r.append(o,a[o])});const n=await fetch(`${t}/auth/token`,{method:"POST",credentials:"same-origin",body:r});if(!n.ok)throw n.status===400||n.status===403?kt:new Error("Unable to fetch tokens");const s=await n.json();return s.hassUrl=t,s.clientId=e,s.expires=Ke(s.expires_in),s}class Je{constructor(e,a){this.data=e,this._saveTokens=a}get wsUrl(){return`ws${this.data.hassUrl.substr(4)}/api/websocket`}get accessToken(){return this.data.access_token}get expired(){return Date.now()>this.data.expires}async refreshAccessToken(){if(!this.data.refresh_token)throw new Error("No refresh_token");const e=await Xe(this.data.hassUrl,this.data.clientId,{grant_type:"refresh_token",refresh_token:this.data.refresh_token});e.refresh_token=this.data.refresh_token,this.data=e,this._saveTokens&&this._saveTokens(e)}async revoke(){if(!this.data.refresh_token)throw new Error("No refresh_token to revoke");const e=new FormData;e.append("token",this.data.refresh_token),await fetch(`${this.data.hassUrl}/auth/revoke`,{method:"POST",credentials:"same-origin",body:e}),this._saveTokens&&this._saveTokens(null)}}function Qe(t,e){return new Je({hassUrl:t,clientId:null,expires:Date.now()+1e11,refresh_token:"",access_token:e,expires_in:1e11})}const ta=t=>{let e=[];function a(r){let n=[];for(let s=0;s<e.length;s++)e[s]===r?r=null:n.push(e[s]);e=n}function i(r,n){t=n?r:Object.assign(Object.assign({},t),r);let s=e;for(let o=0;o<s.length;o++)s[o](t)}return{get state(){return t},action(r){function n(s){i(s,!1)}return function(){let s=[t];for(let h=0;h<arguments.length;h++)s.push(arguments[h]);let o=r.apply(this,s);if(o!=null)return o instanceof Promise?o.then(n):n(o)}},setState:i,clearState(){t=void 0},subscribe(r){return e.push(r),()=>{a(r)}}}},ea=5e3,Jt=(t,e,a,i,r={unsubGrace:!0})=>{if(t[e])return t[e];let n=0,s,o,h=ta();const M=()=>{if(!a)throw new Error("Collection does not support refresh");return a(t).then(U=>h.setState(U,!0))},T=()=>M().catch(U=>{if(t.connected)throw U}),Z=()=>{if(o!==void 0){clearTimeout(o),o=void 0;return}i&&(s=i(t,h)),a&&(t.addEventListener("ready",T),T()),t.addEventListener("disconnected",S)},R=()=>{o=void 0,s&&s.then(U=>{U()}),h.clearState(),t.removeEventListener("ready",M),t.removeEventListener("disconnected",S)},Q=()=>{o=setTimeout(R,ea)},S=()=>{o&&(clearTimeout(o),R())};return t[e]={get state(){return h.state},refresh:M,subscribe(U){n++,n===1&&Z();const rt=h.subscribe(U);return h.state!==void 0&&setTimeout(()=>U(h.state),0),()=>{rt(),n--,n||(r.unsubGrace?Q():R())}}},t[e]},aa=t=>t.sendMessagePromise(Ie()),ia=(t,e,a,i,r,n)=>t.sendMessagePromise(je(e,a,i,r,n));function ra(t,e){const a=Object.assign({},t.state);if(e.a)for(const i in e.a){const r=e.a[i];let n=new Date(r.lc*1e3).toISOString();a[i]={entity_id:i,state:r.s,attributes:r.a,context:typeof r.c=="string"?{id:r.c,parent_id:null,user_id:null}:r.c,last_changed:n,last_updated:r.lu?new Date(r.lu*1e3).toISOString():n}}if(e.r)for(const i of e.r)delete a[i];if(e.c)for(const i in e.c){let r=a[i];if(!r){console.warn("Received state update for unknown entity",i);continue}r=Object.assign({},r);const{"+":n,"-":s}=e.c[i],o=n?.a||s?.a,h=o?Object.assign({},r.attributes):r.attributes;if(n&&(n.s!==void 0&&(r.state=n.s),n.c&&(typeof n.c=="string"?r.context=Object.assign(Object.assign({},r.context),{id:n.c}):r.context=Object.assign(Object.assign({},r.context),n.c)),n.lc?r.last_updated=r.last_changed=new Date(n.lc*1e3).toISOString():n.lu&&(r.last_updated=new Date(n.lu*1e3).toISOString()),n.a&&Object.assign(h,n.a)),s?.a)for(const M of s.a)delete h[M];o&&(r.attributes=h),a[i]=r}t.setState(a,!0)}const na=(t,e)=>t.subscribeMessage(a=>ra(e,a),{type:"subscribe_entities"});function sa(t,e){const a=t.state;if(a===void 0)return;const{entity_id:i,new_state:r}=e.data;if(r)t.setState({[r.entity_id]:r});else{const n=Object.assign({},a);delete n[i],t.setState(n,!0)}}async function oa(t){const e=await aa(t),a={};for(let i=0;i<e.length;i++){const r=e[i];a[r.entity_id]=r}return a}const ca=(t,e)=>t.subscribeEvents(a=>sa(e,a),"state_changed"),la=t=>ve(t.haVersion,2022,4,0)?Jt(t,"_ent",void 0,na):Jt(t,"_ent",oa,ca),da=(t,e)=>la(t).subscribe(e);async function ua(t){const e=Object.assign({setupRetry:0,createSocket:Ge},t),a=await e.createSocket(e);return new Ye(a,e)}const St="pine3_home.token",ha="/api/pine3_home";function fa(){try{return localStorage.getItem(St)}catch{return null}}function Qt(t){try{t?localStorage.setItem(St,t):localStorage.removeItem(St)}catch{}}async function be(t,e){const a=await fetch(`${ha}${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e??{})}),i=await a.json().catch(()=>({}));if(!a.ok)throw new Error(i.error??i.message??`HTTP ${a.status}`);return i}const ga=()=>be("/pair/start"),pa=t=>be("/pair/status",{pair_id:t.pair_id,secret:t.secret});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=Wt(class extends Ft{constructor(t){if(super(t),t.type!==jt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const a=t.element.classList;for(const i of this.st)i in e||(a.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||this.nt?.has(i)||(r?(a.add(i),this.st.add(i)):(a.remove(i),this.st.delete(i)))}return It}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we="important",ma=" !"+we,va=Wt(class extends Ft{constructor(t){if(super(t),t.type!==jt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,a)=>{const i=t[a];return i==null?e:e+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:a}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?a.removeProperty(i):a[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const n=typeof r=="string"&&r.endsWith(ma);i.includes("-")||n?a.setProperty(i,n?r.slice(0,-11):r,n?we:""):a[i]=r}}return It}});var ba="M10 10V12H8V10H10M16 12V10H14V12H16M21 14V22H3V14H4V10C4 5.58 7.58 2 12 2S20 5.58 20 10V14H21M7 16H5V20H7V16M11 16H9V20H11V16M11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08M13 14H18V10C18 7.03 15.84 4.56 13 4.08V14M15 16H13V20H15V16M19 16H17V20H19V16Z",wa="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z",ya="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",ka="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",$a="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",xa="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z",_a="M3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8V19H19V17H15V19H13V8H5V19H3V8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6M16 10.5V11H18V10.5C18 10.22 17.78 10 17.5 10H16.5C16.22 10 16 10.22 16 10.5M16 14.5V15H18V14.5C18 14.22 17.78 14 17.5 14H16.5C16.22 14 16 14.22 16 14.5Z",Ca="M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z",Ma="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z",La="M8.66,13.07C6.92,13.07 5.5,11.66 5.5,9.93C5.5,9.22 5.76,8.54 6.19,8C5.77,7.46 5.5,6.78 5.5,6.07C5.5,4.34 6.93,2.93 8.66,2.93L9.09,2.96C9.56,1.81 10.69,1 12,1C13.31,1 14.44,1.81 14.91,2.96L15.34,2.93C17.07,2.93 18.5,4.34 18.5,6.07C18.5,6.78 18.24,7.46 17.81,8C18.23,8.54 18.5,9.22 18.5,9.93C18.5,11.66 17.07,13.07 15.34,13.07L14.91,13.04C14.44,14.19 13.31,15 12,15C10.69,15 9.56,14.19 9.09,13.04L8.66,13.07M12,13C12.62,13 13.12,12.5 13.14,11.9L13.03,10.81C12.71,10.93 12.36,11 12,11C11.64,11 11.3,10.93 11,10.81L10.86,11.9C10.88,12.5 11.38,13 12,13M15.34,11.07C15.97,11.07 16.5,10.56 16.5,9.92C16.5,9.5 16.23,9.08 15.83,8.89L14.95,8.47C14.83,9.21 14.44,9.85 13.89,10.3L14.7,10.87C14.88,11 15.1,11.07 15.34,11.07M14.69,5.13L13.87,5.69C14.43,6.14 14.82,6.78 14.94,7.5L15.82,7.1C16.23,6.9 16.5,6.5 16.5,6.07C16.5,5.44 15.97,4.93 15.34,4.93C15.11,4.93 14.89,5 14.69,5.13M12,3C11.38,3 10.88,3.5 10.86,4.1L11,5.19C11.3,5.07 11.64,5 12,5C12.36,5 12.71,5.07 13.03,5.19L13.14,4.1C13.12,3.5 12.62,3 12,3M8.66,4.93C8.03,4.93 7.5,5.44 7.5,6.07C7.5,6.5 7.77,6.9 8.17,7.1L9.05,7.5C9.17,6.78 9.56,6.14 10.11,5.69L9.3,5.13C9.12,5 8.9,4.93 8.66,4.93M8.17,8.9C7.77,9.1 7.5,9.5 7.5,9.92C7.5,10.55 8.03,11.06 8.66,11.06C8.89,11.06 9.11,11 9.31,10.86L10.12,10.31C9.56,9.86 9.17,9.22 9.05,8.5L8.17,8.9M12,22A9,9 0 0,1 3,13A9,9 0 0,1 12,22A9,9 0 0,1 21,13A9,9 0 0,1 12,22M14.44,19.56C16.34,18.85 17.85,17.34 18.56,15.44C16.66,16.14 15.15,17.66 14.44,19.56M5.44,15.44C6.15,17.34 7.66,18.85 9.56,19.56C8.86,17.66 7.34,16.15 5.44,15.44Z",Aa="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",Ta="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z",Va="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",Ha="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",Ea="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",za="M19,13H5V11H19V13Z",Pa="M14,19H18V5H14M6,19H10V5H6V19Z",Oa="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z",Da="M8,5.14V19.14L19,12.14L8,5.14Z",Sa="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",Ra="M2,15C3.67,14.25 5.33,13.5 7,13.17V5A3,3 0 0,1 10,2C11.31,2 12.42,2.83 12.83,4H10A1,1 0 0,0 9,5V6H14V5A3,3 0 0,1 17,2C18.31,2 19.42,2.83 19.83,4H17A1,1 0 0,0 16,5V14.94C18,14.62 20,13 22,13V15C19.78,15 17.56,17 15.33,17C13.11,17 10.89,15 8.67,15C6.44,15 4.22,16 2,17V15M14,8H9V10H14V8M14,12H9V13C10.67,13.16 12.33,14.31 14,14.79V12M2,19C4.22,18 6.44,17 8.67,17C10.89,17 13.11,19 15.33,19C17.56,19 19.78,17 22,17V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V19Z",Ba="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",Na="M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z",Ia="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z",ja="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14",Wa="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z",Fa="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z",Ua="M16,18H18V6H16M6,18L14.5,12L6,6V18Z",qa="M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z",Za="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z",Ga="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z",Ya="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12",Ka="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",Xa="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",Ja="M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z";const z={home:Ta,therm:Xa,bulb:Va,shield:ja,spark:xa,play:Da,pause:Pa,next:Ua,minus:za,plus:Sa,close:$a,back:ka,lock:Ha,unlock:Ea,power:Ba,room:Ka,edit:Oa,resize:Na,check:ya,restore:Ia},Qa={"mdi:shower":Wa,"mdi:silverware-fork-knife":Fa,"mdi:table-chair":Ga,"mdi:sofa":qa,"mdi:bed":wa,"mdi:teddy-bear":Ya,"mdi:desk":_a,"mdi:garage":Aa,"mdi:flower":La,"mdi:balcony":ba,"mdi:pool":Ra,"mdi:washing-machine":Ja,"mdi:door":Ca,"mdi:dumbbell":Ma,"mdi:stairs":Za},Mt=t=>t&&Qa[t]||z.room;let ti=0;const ye=t=>`${t}${++ti}`,st=t=>W`<svg class="art" viewBox="0 0 60 60" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">${t}</svg>`;function te(t,e="#ffcf8a"){const a=ye("l");return st(W`<defs><radialGradient id=${a} cx="36" cy="40" r="28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${e} stop-opacity=${t/100*.85}/><stop offset="1" stop-color=${e} stop-opacity="0"/></radialGradient></defs>
    <circle cx="36" cy="40" r="28" fill=${`url(#${a})`}/><line x1="36" y1="0" x2="36" y2="22" stroke="#6b717a" stroke-width=".8"/>
    <path d="M25 34 L47 34 L41.5 21 L30.5 21 Z" fill=${t?"#d9c6a3":"#4a4f57"}/><ellipse cx="36" cy="34.5" rx="11" ry="1.7" fill=${t?"#fff2d6":"#3a3e45"}/>`)}function ei(t){const e=Math.max(0,Math.min(100,100-t)),a=Array.from({length:Math.round(e/11)},(i,r)=>W`<line x1="20" x2="54" y1=${12+r*4.2} y2=${12+r*4.2} stroke="#8796a6" stroke-width=".5"/>`);return st(W`<rect x="20" y="10" width="34" height="46" rx="2" fill="#2d4a66" opacity=".6"/><circle cx="44" cy="22" r="5" fill="#ffd27a" opacity=".5"/>
    <rect x="20" y="10" width="34" height=${(46*e/100).toFixed(1)} fill="#a9b6c4"/>${a}<rect x="18" y="8" width="38" height="3" rx="1" fill="#5d646e"/>`)}function ai(t,e="#ff9f43"){const a=t==null?0:Math.max(0,Math.min(1,(t-16)/14));return st(W`<circle cx="40" cy="36" r="17" fill="#2a2e34" stroke="#454a52"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="2.6" stroke-dasharray=${`${(a*81).toFixed(1)} 82`} transform="rotate(135 40 36)" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="7" opacity=".08"/>`)}function ii(t){return st(W`<rect x="28" y="12" width="24" height="44" rx="3" fill="#3a3f46"/><rect x="31" y="15" width="18" height="38" rx="2" fill="#2b2f35"/>
    <circle cx="34" cy="34" r="1.6" fill=${t?"#ff8a5c":"#5be3a0"}/><rect x=${t?44:38} y="33.2" width="6" height="1.6" rx=".8" fill="#8a919b"/>`)}function ri(t){return st(W`<ellipse cx="40" cy="50" rx="16" ry="4" fill="#000" opacity=".3"/><ellipse cx="40" cy="44" rx="15" ry="6" fill="#d8dce1"/><rect x="25" y="38" width="30" height="6" fill="#d8dce1"/>
    <ellipse cx="40" cy="38" rx="15" ry="6" fill="#eef0f3"/><circle cx="40" cy="36" r="3.4" fill=${t?"#5be3a0":"#c4c9cf"}/>
    ${t?W`<path d="M10 50 Q20 46 26 48" stroke="#5be3a0" stroke-width=".8" fill="none" stroke-dasharray="1.2 1.2" opacity=".8"/>`:null}`)}function ni(t){if(t)return st(W`<image href=${t} x="26" y="14" width="30" height="30" preserveAspectRatio="xMidYMid slice" transform="rotate(6 41 29)"/>`);const e=ye("a");return st(W`<defs><linearGradient id=${e} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3a35f"/><stop offset=".5" stop-color="#d96d6d"/><stop offset=".75" stop-color="#5c4a8a"/><stop offset="1" stop-color="#2e2a54"/></linearGradient></defs>
    <rect x="26" y="14" width="30" height="30" rx="3" fill=${`url(#${e})`} transform="rotate(6 41 29)"/><circle cx="46" cy="22" r="3" fill="#ffe7b8" opacity=".9" transform="rotate(6 41 29)"/>`)}function ee(t){const e=!/rain|pour|snow|fog|cloudy$|lightning|night/.test(t)||t==="partlycloudy",a=t!=="sunny"&&t!=="clear-night",i=/rain|pour|lightning/.test(t),r=t==="clear-night";return st(W`${e?W`<circle cx="44" cy="20" r="8" fill="#ffd27a" opacity=".85"/>`:null}
    ${r?W`<path d="M46 12a9 9 0 1 0 6 14 7 7 0 1 1-6-14z" fill="#e8e3c8" opacity=".9"/>`:null}
    ${a?W`<path d="M28 36h20a6 6 0 0 0 .6-12 9 9 0 0 0-17 2.5A5 5 0 0 0 28 36z" fill="#cfd6df"/>`:null}
    ${i?W`<path d="M32 40l-2 6M38 40l-2 6M44 40l-2 6" stroke="#6cc8ff" stroke-width="1.4" stroke-linecap="round"/>`:null}`)}function si(t){return st(W`<g transform="translate(40 34)"><g class=${t?"spin":""}>
    ${[0,120,240].map(e=>W`<ellipse cx="0" cy="-8" rx="4" ry="8" fill="#cfd6df" opacity=".85" transform=${`rotate(${e})`}/>`)}
    </g><circle r="2.6" fill="#8a919b"/></g>`)}function oi(t){return st(W`<rect x="28" y="20" width="24" height="24" rx="6" fill="#3a3f46"/><circle cx="36" cy="32" r="1.8" fill="#1b1e22"/><circle cx="44" cy="32" r="1.8" fill="#1b1e22"/>
    <circle cx="48" cy="24" r="1.4" fill=${t?"#5be3a0":"#5d646e"}/>`)}function ci(t,e){let a="M0 26 L100 26";if(e&&e.length>1){const i=Math.min(...e),n=Math.max(...e)-i||1;a=e.map((o,h)=>[h/(e.length-1)*100,34-(o-i)/n*26]).map(([o,h],M)=>`${M?"L":"M"}${o.toFixed(1)} ${h.toFixed(1)}`).join(" ")}return W`<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d=${`${a} V40 H0Z`} fill=${t} opacity=".12"/><path d=${a} fill="none" stroke=${t} stroke-width="1.4" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity=".85"/></svg>`}function li(){return st(W`<circle cx="42" cy="34" r="14" fill="#b49cff" opacity=".18"/><path d="M42 22l2.6 7.4L52 32l-7.4 2.6L42 42l-2.6-7.4L32 32l7.4-2.6z" fill="#d9ccff"/><path d="M52 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#ffe2b0"/>`)}const q=t=>t.split(".")[0],ht=t=>!!t&&!["off","unavailable","unknown","closed","locked","idle","standby","docked"].includes(t.state),di=t=>!t||t.state==="unavailable";function bt(t){if(!t||t.state!=="on")return 0;const e=t.attributes.brightness;return e==null?100:Math.max(1,Math.round(e/255*100))}function Ht(t){const e=t?.attributes.rgb_color,a=t?.attributes.color_mode;if(e&&a&&!["color_temp","brightness","onoff","white"].includes(a))return`rgb(${e.join(",")})`;const i=t?.attributes.color_temp_kelvin;return i?i>=5e3?"#e6f0ff":i>=3800?"#fff1d6":"#ffcf8a":"#ffcf8a"}const nt=t=>t.devices.filter(e=>q(e.id)==="light"&&!e.hidden).map(e=>e.id);function ui(t,e){const a=t.filter(i=>e[i]?.state==="on");return a.length?Math.round(a.reduce((i,r)=>i+bt(e[r]),0)/a.length):0}const ae={light:"light",climate:"climate",lock:"lock",cover:"cover",media_player:"media",vacuum:"vacuum",fan:"fan",switch:"switch",input_boolean:"switch",outlet:"outlet",sensor:"sensor",binary_sensor:"binary",camera:"camera"};function Ut(t,e){const a=ae[t.kind??q(t.id)]??ae[q(t.id)];if(!a)return null;const i=a==="climate"?"l":a==="media"||a==="camera"?"m":"s";return{key:t.id,kind:a,size:i,name:t.name,sub:e?.name,entity:t.id,room:e}}function Rt(t,e){const a=t.rooms.filter(s=>!s.hidden),i=a.flatMap(s=>s.devices.filter(o=>!o.hidden).map(o=>({d:o,r:s}))),r=s=>i.filter(({d:o})=>(o.kind??q(o.id))===s),n=[];return a.forEach((s,o)=>{const h=nt(s);h.length&&n.push({key:`room-${s.id}`,kind:"room-lights",size:o===0?"m":"s",name:s.name,entities:h,room:s})}),r("climate").forEach(({d:s,r:o},h)=>n.push({key:s.id,kind:"climate",size:h===0?"l":"m",name:s.name,sub:o.name,entity:s.id,room:o})),t.weather&&e[t.weather]&&n.push({key:t.weather,kind:"weather",size:"l",name:"Tempo",entity:t.weather}),r("lock").forEach(({d:s,r:o})=>n.push({key:s.id,kind:"lock",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),r("cover").forEach(({d:s,r:o})=>n.push({key:s.id,kind:"cover",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),r("media_player").sort((s,o)=>+(e[o.d.id]?.state==="playing")-+(e[s.d.id]?.state==="playing")).slice(0,2).forEach(({d:s,r:o})=>n.push({key:s.id,kind:"media",size:"m",name:s.name,sub:o.name,entity:s.id,room:o})),r("vacuum").forEach(({d:s,r:o})=>n.push({key:s.id,kind:"vacuum",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),t.scenes.length&&n.push({key:"scenes",kind:"scenes",size:"m",name:"Cenas",entities:t.scenes.slice(0,6)}),n}const hi=[{id:"all",name:"Tudo",kinds:[]},{id:"lights",name:"Luzes",kinds:["light"]},{id:"climate",name:"Clima",kinds:["climate","fan"]},{id:"covers",name:"Estores",kinds:["cover"]},{id:"media",name:"Média",kinds:["media"]},{id:"other",name:"Outros",kinds:["switch","outlet","lock","vacuum","sensor","binary","camera"]}];function fi(t){return t.devices.filter(e=>!e.hidden).map(e=>Ut(e,t)).filter(e=>!!e)}function at(t,e){const a=t.rooms.filter(o=>!o.hidden).flatMap(o=>o.devices),i=a.filter(o=>q(o.id)==="light"&&e[o.id]?.state==="on").length,r=a.filter(o=>q(o.id)==="lock"&&e[o.id]?.state==="unlocked").length,n=a.filter(o=>q(o.id)==="binary_sensor"&&["door","window","garage_door","opening"].includes(e[o.id]?.attributes.device_class)&&e[o.id]?.state==="on").length,s=t.rooms.map(o=>o.temperature?parseFloat(e[o.temperature]?.state??""):NaN).filter(o=>!Number.isNaN(o));return{lightsOn:i,alerts:r+n,alertText:r?`${r} destrancada${r>1?"s":""}`:n?`${n} aberta${n>1?"s":""}`:"tudo fechado",temp:s.length?`${Math.round(Math.min(...s))}–${Math.round(Math.max(...s))}°`:null}}const J=(t,e=1)=>t.toLocaleString("pt-PT",{maximumFractionDigits:e}),gi=["door","window","garage_door","opening"],ke=t=>t.rooms.filter(e=>!e.hidden).flatMap(e=>e.devices.filter(a=>!a.hidden).map(a=>({d:a,r:e})));function pi(t,e){const a=[],i=ke(t);return i.filter(({d:r})=>q(r.id)==="climate").forEach(({d:r,r:n})=>a.push({key:r.id,kind:"climate",size:"l",name:r.name,sub:n.name,entity:r.id,room:n})),t.weather&&e[t.weather]&&a.push({key:t.weather,kind:"weather",size:"l",name:"Tempo",entity:t.weather}),i.filter(({d:r})=>q(r.id)==="fan").forEach(({d:r,r:n})=>a.push({key:r.id,kind:"fan",size:"s",name:r.name,sub:n.name,entity:r.id,room:n})),t.rooms.filter(r=>!r.hidden).forEach(r=>{r.temperature&&e[r.temperature]&&a.push({key:`t-${r.id}`,kind:"sensor",size:"s",name:r.name,sub:"temperatura",entity:r.temperature,room:r}),r.humidity&&e[r.humidity]&&a.push({key:`h-${r.id}`,kind:"sensor",size:"s",name:r.name,sub:"humidade",entity:r.humidity,room:r})}),a}function mi(t,e){const a=ke(t),i=a.filter(({d:s})=>q(s.id)==="lock"),r=a.filter(({d:s})=>q(s.id)==="binary_sensor"&&[...gi,"motion","occupancy","presence","moisture","smoke","gas"].includes(e[s.id]?.attributes.device_class));r.sort((s,o)=>+(e[o.d.id]?.state==="on")-+(e[s.d.id]?.state==="on"));const n=a.filter(({d:s})=>q(s.id)==="camera");return[...i.map(({d:s,r:o})=>({key:s.id,kind:"lock",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),...r.map(({d:s,r:o})=>({key:s.id,kind:"binary",size:"s",name:s.name,sub:o.name,entity:s.id,room:o})),...n.map(({d:s,r:o})=>({key:s.id,kind:"camera",size:"m",name:s.name,sub:o.name,entity:s.id,room:o}))]}function vi(t,e){return[...t.scenes,...t.scripts].filter(a=>e[a]).map(a=>({key:a,kind:"scene",size:"s",name:e[a].attributes.friendly_name??a,entity:a}))}const bi=["climate","weather","media","scenes","camera","clock"],$e=t=>bi.includes(t)?["m","l","xl"]:["s","m","l"];function wi(t,e){for(const a of t.rooms){const i=a.devices.find(r=>r.id===e);if(i)return Ut(i,a)}return null}function ie(t,e,a){if(!e)return t;const i=new Map(t.map(o=>[o.key,o])),r=new Set(e.hidden),n=[],s=new Set;for(const o of e.items){if(s.has(o.key)||r.has(o.key))continue;const h=i.get(o.key)??wi(a,o.key);if(!h)continue;s.add(o.key);const M=o.size&&$e(h.kind).includes(o.size)?o.size:h.size;n.push({...h,size:M})}for(const o of t)!s.has(o.key)&&!r.has(o.key)&&n.push(o);return n}function yi(t,e,a){const i=new Set(e.items.map(s=>s.key)),r=t.filter(s=>e.hidden.includes(s.key)),n=a.rooms.filter(s=>!s.hidden).flatMap(s=>s.devices.filter(o=>!o.hidden).map(o=>Ut(o,s))).filter(s=>!!s&&!i.has(s.key)&&!r.some(o=>o.key===s.key)&&!t.some(o=>o.key===s.key&&!e.hidden.includes(o.key)));return[...r,...n]}function qt(t,e,a){return t?e?e===t?t===1?"luz acesa":`${t} luzes acesas`:`${e} de ${t} luzes acesas`:t===1?"luz apagada":"luzes apagadas":`${a} dispositivo${a===1?"":"s"}`}const xt=wt`
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
`;var ki=Object.defineProperty,$i=Object.getOwnPropertyDescriptor,G=(t,e,a,i)=>{for(var r=i>1?void 0:i?$i(e,a):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,a,r):s(r))||r);return i&&r&&ki(e,a,r),r};const xi=550,Et=10,zt={heat:"Calor",cool:"Frio",heat_cool:"Auto",auto:"Auto",dry:"Seco",fan_only:"Ventilar",off:"Off"},re={heating:"a aquecer",cooling:"a arrefecer",idle:"em pausa",off:"desligado",drying:"a secar",fan:"a ventilar"},Ct={"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",hail:"granizo",lightning:"trovoada","lightning-rainy":"trovoada e chuva",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve","snowy-rainy":"chuva e neve",sunny:"sol",windy:"vento","windy-variant":"vento",exceptional:"excecional"},ne={cleaning:"a limpar",docked:"na base",returning:"a voltar à base",paused:"em pausa",idle:"parado",error:"erro"},_i={open:"aberto",closed:"fechado",opening:"a abrir",closing:"a fechar"},Pt={yellow:"amarelo",orange:"laranja",red:"vermelho"},se={yellow:1,orange:2,red:3},Ci=10*6e4,Mi=10*6e4,oe=[{id:"@clima",name:"Clima",icon:z.therm},{id:"@seguranca",name:"Segurança",icon:z.shield},{id:"@cenas",name:"Cenas",icon:z.spark}],Li=["#ffcf8a","#fff1d6","#ff8a5c","#ff6fae","#b49cff","#6cc8ff","#5be3a0"],B=t=>W`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`;let N=class extends pe{constructor(){super(...arguments),this.entities={},this.screenName="",this.canEdit=!1,this.ambient=!1,this.wallpanel=!1,this.editing=null,this.draft=null,this.moving=null,this.saving=!1,this.lastReorder=0,this.view="home",this.category="all",this.sheet=null,this.drag=null,this.now=new Date,this.hourly=[],this.warnings=[],this.history={},this.flash=null,this.historyAt={},this.historyWanted=new Set,this.ipmaAt=0,this.ipmaArea=null,this.forecastAt=0}connectedCallback(){super.connectedCallback(),this.clock=window.setInterval(()=>this.now=new Date,1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clock)}willUpdate(t){t.has("home")&&this.view!=="home"&&!this.view.startsWith("@")&&!this.home.rooms.some(a=>a.id===this.view)&&(this.view="home");const e=this.home?.settings?.ipma_area??null;(e!==this.ipmaArea||e&&Date.now()-this.ipmaAt>Mi)&&(this.ipmaArea=e,this.ipmaAt=Date.now(),e&&this.conn?this.loadWarnings(e):this.warnings=[]),this.home?.weather&&Date.now()-this.forecastAt>30*6e4&&this.conn&&(this.forecastAt=Date.now(),this.loadForecast(this.home.weather))}async loadForecast(t){try{const e=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"hourly"},target:{entity_id:t},return_response:!0});this.hourly=(e.response?.[t]?.forecast??[]).slice(1,7).filter((a,i)=>i%2===0)}catch{this.hourly=[]}}updated(){const t=Date.now(),e=[...this.historyWanted].filter(a=>t-(this.historyAt[a]??0)>Ci);this.historyWanted.clear(),e.length&&this.conn&&(e.forEach(a=>this.historyAt[a]=t),this.loadHistory(e))}async loadHistory(t){try{const e=await this.conn.sendMessagePromise({type:"history/history_during_period",start_time:new Date(Date.now()-864e5).toISOString(),entity_ids:t,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),a={...this.history};for(const i of t){const r=(e[i]??[]).map(s=>parseFloat(s.s)).filter(s=>!Number.isNaN(s)),n=Math.max(1,Math.ceil(r.length/48));a[i]=r.filter((s,o)=>o%n===0||o===r.length-1)}this.history=a}catch(e){console.warn("Pine3 Home: history",e)}}async loadWarnings(t){try{const e=await this.conn.sendMessagePromise({type:"pine3_home/ipma_warnings",area:t}),a=Date.now();this.warnings=e.warnings.filter(i=>!i.endTime||new Date(i.endTime).getTime()>a).sort((i,r)=>(se[r.awarenessLevelID]??0)-(se[i.awarenessLevelID]??0))}catch{}}call(t,e,a,i={}){ia(this.conn,t,e,i,{entity_id:a}).catch(r=>console.warn("Pine3 Home:",r))}toggle(t){const e=q(t),a=this.entities[t];if(e==="lock")return this.call("lock",a?.state==="locked"?"unlock":"lock",t);if(e==="cover")return this.call("cover","toggle",t);if(e==="vacuum")return this.call("vacuum",a?.state==="cleaning"?"return_to_base":"start",t);if(e==="media_player")return this.call("media_player","media_play_pause",t);if(e==="scene"||e==="script")return this.call(e,"turn_on",t);this.call(e==="input_boolean"?"input_boolean":"homeassistant","toggle",t)}level(t){if(this.drag?.key===t.key)return this.drag.value;if(t.kind==="room-lights")return ui(t.entities,this.entities);const e=this.entities[t.entity];return t.kind==="light"?bt(e):t.kind==="cover"?e?.attributes.current_position??(e?.state==="open"?100:0):null}setLevel(t,e){if(e=Math.round(e),t.kind==="room-lights"||t.kind==="light"){const a=t.kind==="light"?t.entity:t.entities;e<=0?this.call("light","turn_off",a):this.call("light","turn_on",a,{brightness_pct:e})}else t.kind==="cover"&&this.call("cover","set_cover_position",t.entity,{position:e})}slidable(t){if(t.kind==="room-lights")return!0;const e=this.entities[t.entity??""];return e?t.kind==="light"?(e.attributes.supported_color_modes??[]).some(a=>a!=="onoff"):t.kind==="cover"?(e.attributes.supported_features&4)===4:!1:!1}down(t,e){if(t.target.closest("button"))return;if(this.editing){this.press={key:e.key,x:t.clientX,y:t.clientY,rect:t.currentTarget.getBoundingClientRect(),dragging:!1,long:!1,timer:0};return}const a=t.currentTarget,i={key:e.key,x:t.clientX,y:t.clientY,rect:a.getBoundingClientRect(),dragging:!1,long:!1,timer:0};i.timer=window.setTimeout(()=>{i.long=!0,this.longPress(e)},xi),this.press=i}move(t,e){const a=this.press;if(!a||a.key!==e.key||a.long)return;if(this.editing)return this.moveInEdit(t,a);const i=t.clientX-a.x,r=t.clientY-a.y;if(!a.dragging){if(Math.abs(r)>Et&&Math.abs(r)>Math.abs(i))return this.cancel();if(Math.abs(i)<Et||!this.slidable(e))return;a.dragging=!0,clearTimeout(a.timer),t.currentTarget.setPointerCapture(t.pointerId)}const n=Math.max(0,Math.min(100,(t.clientX-a.rect.left)/a.rect.width*100));this.drag={key:e.key,value:Math.round(n)}}up(t,e){const a=this.press;if(!(!a||a.key!==e.key)){if(clearTimeout(a.timer),this.press=void 0,this.editing){this.moving=null;return}if(!a.long){if(a.dragging){const i=this.drag?.value??0;this.setLevel(e,i),window.setTimeout(()=>{this.drag?.key===e.key&&(this.drag=null)},1500);return}this.tap(e)}}}cancel(){this.press&&clearTimeout(this.press.timer),this.press=void 0,this.moving=null}reset(){this.stopEdit(),this.sheet=null,this.drag=null,this.view="home",this.category="all",this.main()?.scrollTo({top:0})}get busy(){return!!this.editing||!!this.press}main(){return this.renderRoot?.querySelector(".main")??null}arranged(t,e){const a=this.editing===t&&this.draft?this.draft:this.dashboard.layouts?.[t];return ie(e,a,this.home)}startEdit(t,e){const a=this.dashboard.layouts?.[t];this.draft={items:ie(e,a,this.home).map(i=>({key:i.key,size:i.size})),hidden:[...a?.hidden??[]]},this.editing=t,this.category="all",this.sheet=null}stopEdit(){this.editing=null,this.draft=null,this.moving=null}async saveLayout(t){const e=this.editing;if(e){this.saving=!0;try{const a=await this.conn.sendMessagePromise({type:"pine3_home/dashboards/layout",dashboard_id:this.dashboard.id,view:e,layout:t});this.dashboard={...this.dashboard,layouts:a.dashboard.layouts},this.stopEdit()}catch(a){console.warn("Pine3 Home: layout",a),alert("Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel.")}finally{this.saving=!1}}}moveInEdit(t,e){if(!e.dragging){if(Math.hypot(t.clientX-e.x,t.clientY-e.y)<Et)return;e.dragging=!0,this.moving=e.key,t.currentTarget.setPointerCapture(t.pointerId)}const a=this.renderRoot.elementsFromPoint(t.clientX,t.clientY).map(o=>o.closest?.(".w")).find(o=>o&&o.dataset.key&&o.dataset.key!==e.key);if(!a||!this.draft||Date.now()-this.lastReorder<180)return;const i=[...this.draft.items],r=i.findIndex(o=>o.key===e.key),n=i.findIndex(o=>o.key===a.dataset.key);if(r<0||n<0)return;const[s]=i.splice(r,1);i.splice(n,0,s),this.lastReorder=Date.now(),this.draft={...this.draft,items:i}}hideWidget(t){this.draft&&(this.draft={items:this.draft.items.filter(e=>e.key!==t),hidden:[...this.draft.hidden,t]})}resizeWidget(t){if(!this.draft)return;const e=$e(t.kind),a=e[(e.indexOf(t.size)+1)%e.length];this.draft={...this.draft,items:this.draft.items.map(i=>i.key===t.key?{...i,size:a}:i)}}addWidget(t){this.draft&&(this.draft={items:[...this.draft.items,{key:t.key,size:t.size}],hidden:this.draft.hidden.filter(e=>e!==t.key)})}editControls(t,e){return this.editing===t?d`<button class="pill" @click=${()=>this.stopEdit()}>Cancelar</button>
        ${this.dashboard.layouts?.[t]?d`<button class="pill" ?disabled=${this.saving} @click=${()=>this.saveLayout(null)}>${B(z.restore)} Repor</button>`:_}
        <button class="pill pri" ?disabled=${this.saving} @click=${()=>this.saveLayout(this.draft)}>${B(z.check)} Concluído</button>`:this.canEdit&&!this.editing?d`<button class="pill icon" aria-label="Editar esta vista" title="Editar" @click=${()=>this.startEdit(t,e)}>${B(z.edit)}</button>`:_}renderPicker(t,e){if(this.editing!==t||!this.draft)return _;const a=yi(e,this.draft,this.home);return d`<div class="picker">
      <div class="phd"><span class="k">Adicionar · toca para pôr no fim</span><span class="k">Arrasta os cartões para mudar a ordem</span></div>
      <div class="prow">${a.length?a.map(i=>d`<button class="pk" @click=${()=>this.addWidget(i)}><span>${i.name}</span><em>${i.room?.name??""}</em></button>`):d`<span class="k">Já está tudo nesta vista.</span>`}</div>
    </div>`}tap(t){switch(t.kind){case"room-lights":{const e=t.entities.some(a=>this.entities[a]?.state==="on");return this.call("light",e?"turn_off":"turn_on",t.entities)}case"climate":case"weather":case"sensor":case"binary":case"scenes":t.entity&&(this.sheet=t.entity);return;case"scene":this.call(q(t.entity),"turn_on",t.entity),this.flash=t.key,window.setTimeout(()=>{this.flash===t.key&&(this.flash=null)},1200);return;case"camera":this.sheet=t.entity;return;case"lock":this.entities[t.entity]?.state!=="locked"?this.call("lock","lock",t.entity):this.sheet=t.entity;return;default:t.entity&&this.toggle(t.entity)}}longPress(t){if(t.kind==="room-lights"&&t.room){this.openRoom(t.room.id);return}t.entity&&(this.sheet=t.entity)}openRoom(t){this.editing&&this.editing!==t&&this.stopEdit(),this.view=t,this.category="all",this.sheet=null}get dark(){return this.dashboard.theme==="claro"?!1:this.dashboard.theme==="auto"?this.entities["sun.sun"]?.state!=="above_horizon":!0}render(){if(!this.home)return _;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(a=>a.id===this.view),e={vd:!0,light:!this.dark,editing:!!this.editing,[`dock-${this.dashboard.dock}`]:!0};return d`<div class=${P(e)}>
      ${this.renderDock()}
      <main class="main">${t?this.renderRoom(t):this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):_}
    </div>`}renderAmbient(){const t=at(this.home,this.entities),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,i=this.warnings[0],r=this.now.getHours()*60+this.now.getMinutes(),n=(r%7-3)*.8,s=(r%5-2)*.8,o=[t.lightsOn?`${t.lightsOn} luz${t.lightsOn>1?"es":""} acesa${t.lightsOn>1?"s":""}`:null,t.alerts?t.alertText:null].filter(Boolean);return d`<div class="vd amb" role="button" aria-label="Tocar para acordar">
      <div class="ambc" style=${`transform:translate(calc(var(--u) * ${n}), calc(var(--u) * ${s}))`}>
        <div class="atime">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</div>
        <div class="adate">${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</div>
        <div class="arow">
          ${e?d`<span class="awx">${ee(e.state)}<b>${a!=null?`${Math.round(a)}°`:""}</b>${Ct[e.state]??e.state}</span>`:_}
          ${i?d`<span class=${`ipma ${i.awarenessLevelID}`}><i></i>Aviso ${Pt[i.awarenessLevelID]??""} · ${i.awarenessTypeName.toLowerCase()}</span>`:_}
        </div>
        <div class=${P({astatus:!0,att:t.alerts>0})}>${o.length?o.join(" · "):"Tudo tranquilo em casa"}</div>
      </div>
      <span class="ahint">${this.wallpanel?"Aproxima-te ou toca para acordar":"Toca para acordar"}</span>
    </div>`}renderDock(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(a=>!a.hidden));return d`<nav class="dock" aria-label="Vistas">
      <button class=${P({di:!0,on:this.view==="home"})} @click=${()=>this.openRoom("home")} aria-label="Casa">
        ${B(z.home)}<span class="lb">Casa</span>
      </button>
      <span class="sep"></span>
      <div class="rooms">
        ${t.map(e=>{const a=nt(e).filter(i=>this.entities[i]?.state==="on").length;return d`<button class=${P({di:!0,rm:!0,on:this.view===e.id,lit:a>0})} @click=${()=>this.openRoom(e.id)} aria-label=${e.name}>
            ${a?d`<span class="glow"></span>`:_}${B(Mt(e.icon))}<span class="lb">${e.name}</span>
            ${a?d`<span class="bdg">${a}</span>`:_}
          </button>`})}
      </div>
      <span class="sep"></span>
      ${oe.filter(e=>this.viewWidgets(e.id).length).map(e=>{const a=e.id==="@seguranca"?at(this.home,this.entities).alerts:0;return d`<button class=${P({di:!0,on:this.view===e.id})} @click=${()=>this.openRoom(e.id)} aria-label=${e.name}>
          ${B(e.icon)}<span class="lb">${e.name}</span>${a?d`<span class="bdg alert">${a}</span>`:_}
        </button>`})}
    </nav>`}renderHeader(t,e,a=_){const i=at(this.home,this.entities),r=this.home.persons.map(n=>this.entities[n]).filter(n=>!!n);return d`<header class="hdr">
      <div class="t"><span>${e}</span><b>${t}</b></div>
      <div class="chips">
        ${this.editing?_:d`${i.temp?d`<span class="chip"><i style="background:#34c759;color:#06210f">${B(z.therm)}</i><span>Clima<small>${i.temp}</small></span></span>`:_}
        <span class="chip"><i style="background:#ffcf8a;color:#2a1a04">${B(z.bulb)}</i><span>Luzes<small>${i.lightsOn?`${i.lightsOn} acesa${i.lightsOn>1?"s":""}`:"apagadas"}</small></span></span>
        <span class="chip"><i style=${i.alerts?"background:#ff8a5c;color:#2a0f04":"background:#5be3a0;color:#06210f"}>${B(z.shield)}</i><span>Segurança<small>${i.alertText}</small></span></span>
        ${r.length?d`<div class="people">${r.map(n=>{const s=n.attributes.entity_picture,o=n.attributes.friendly_name??n.entity_id;return d`<span class="av" title=${o} style=${s?`background-image:url(${s})`:""}>${s?"":o[0]}${n.state==="home"?d`<i></i>`:_}</span>`})}</div>`:_}`}
        ${a}
      </div>
    </header>`}greeting(){const t=this.now.getHours();return`${t<6?"Boa noite":t<13?"Bom dia":t<20?"Boa tarde":"Boa noite"} · ${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}`}renderHome(){const t=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),e=Rt(this.home,this.entities),a=this.arranged("home",e),i=this.editing==="home";return d`${i?this.renderHeader("A editar","Casa",this.editControls("home",e)):this.renderHeader(t,this.greeting(),this.editControls("home",e))}
      ${a.length||i?d`<div class=${P({grid:!0,edit:i})}>${a.map(r=>this.renderWidget(r))}</div>`:d`<p class="empty">Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.</p>`}
      ${this.renderPicker("home",e)}`}viewWidgets(t){return t==="@clima"?pi(this.home,this.entities):t==="@seguranca"?mi(this.home,this.entities):t==="@cenas"?vi(this.home,this.entities):[]}renderView(t){const e=oe.find(o=>o.id===t),a=this.viewWidgets(t),i=this.arranged(t,a),r=this.editing===t,n=at(this.home,this.entities),s=t==="@clima"?n.temp??"":t==="@seguranca"?n.alertText:`${i.length} cenas e rotinas`;return d`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${B(z.back)}</button>
        <b>${e.name}</b><span>${r?"a editar":s}</span>
        <div class="act">${this.editControls(t,a)}</div>
      </div>
      ${i.length||r?d`<div class=${P({grid:!0,edit:r})}>${i.map(o=>this.renderWidget(o))}</div>`:d`<p class="empty">Nada para mostrar aqui.</p>`}
      ${this.renderPicker(t,a)}`}renderRoom(t){const e=fi(t),a=this.arranged(t.id,e),i=this.editing===t.id,r=R=>R.length?a.filter(Q=>R.includes(Q.kind)).length:a.length,n=hi.filter(R=>r(R.kinds)>0),s=n.find(R=>R.id===this.category)??n[0],o=!i&&s&&s.kinds.length?a.filter(R=>s.kinds.includes(R.kind)):a,h=nt(t),M=t.temperature?this.entities[t.temperature]?.state:null,T=t.humidity?this.entities[t.humidity]?.state:null,Z=[M&&M!=="unavailable"?`${J(parseFloat(M))}°`:null,T&&T!=="unavailable"?`${J(parseFloat(T),0)}%`:null,t.floor].filter(Boolean).join(" · ");return d`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${B(z.back)}</button>
        <b>${t.name}</b><span>${i?"a editar":Z}</span>
        <div class="act">
          ${h.length&&!i?d`<button class="pill" @click=${()=>this.call("light","turn_on",h)}>${B(z.bulb)} Acender</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",h)}>Apagar</button>`:_}
          ${this.editControls(t.id,e)}
        </div>
      </div>
      ${n.length>2&&!i?d`<div class="cats">${n.map(R=>d`<button class=${P({on:R===s})} @click=${()=>this.category=R.id}>${R.name}<em>${r(R.kinds)}</em></button>`)}</div>`:_}
      <div class=${P({grid:!0,edit:i})}>${o.map(R=>this.renderWidget(R))}</div>
      ${this.renderPicker(t.id,e)}`}renderWidget(t){const e=t.entity?this.entities[t.entity]:void 0;if(t.entity&&t.kind!=="weather"&&!e)return _;const a=this.widgetBody(t,e),i={w:!0,[t.size]:!0,on:(a.on??!1)||this.flash===t.key,att:a.att??!1,off:!!t.entity&&di(e),dragging:this.drag?.key===t.key,moving:this.moving===t.key,[`k-${t.kind}`]:!0,idle:t.kind==="climate"&&e?.state==="off"},r=!!this.editing;return d`<div class=${P(i)} style=${a.style??""} data-key=${t.key}
        @pointerdown=${n=>this.down(n,t)} @pointermove=${n=>this.move(n,t)}
        @pointerup=${n=>this.up(n,t)} @pointercancel=${()=>this.cancel()} @contextmenu=${n=>n.preventDefault()}>
      ${a.fill!=null?d`<div class="fill" style=${va({width:`${a.fill}%`,"--fc":a.color??"255,207,138"})}></div>`:_}
      ${a.art??_}
      <span class="nm">${t.name}${a.tag?d`<em>${a.tag}</em>`:_}</span>
      ${a.extra??_}
      <div class="hero" style=${a.heroStyle??""}>${a.hero}${a.small?d`<small>${a.small}</small>`:_}</div>
      ${r?_:a.ctl??_}
      ${r?d`<button class="rmv" aria-label=${`Esconder ${t.name}`} @click=${()=>this.hideWidget(t.key)}>${B(z.minus)}</button>
          <button class="handle" aria-label=${`Mudar o tamanho de ${t.name}`} @click=${()=>this.resizeWidget(t)}>${B(z.resize)}<b>${t.size.toUpperCase()}</b></button>`:_}
    </div>`}widgetBody(t,e){const a=this.level(t);switch(t.kind){case"room-lights":{const i=t.entities.filter(n=>this.entities[n]?.state==="on"),r=i.length?Ht(this.entities[i[0]]):"#ffcf8a";return{hero:a?`${a}%`:"Off",small:i.length?i.map(n=>this.name(n,t.room)).slice(0,2).join(" e "):`${t.entities.length} luz${t.entities.length>1?"es":""}`,tag:t.entities.length>1?`${i.length}/${t.entities.length} luzes`:void 0,art:te(a??0,r),fill:a||null,color:ce(r),on:a>0}}case"light":{const i=Ht(e);return{hero:a?`${a}%`:"Off",tag:t.sub&&this.view==="home"?t.sub:void 0,art:te(a??0,i),fill:a||null,color:ce(i),on:(a??0)>0,heroStyle:a?`color:${i}`:""}}case"cover":{const i=a??0;return{hero:`${i}%`,small:_i[e.state]??e.state,art:ei(i),fill:i,color:"170,200,230"}}case"climate":{const i=e.attributes.temperature,r=e.state,n=(e.attributes.hvac_modes??[]).filter(M=>["heat","cool","off","auto","heat_cool"].includes(M)).slice(0,3),s=r==="cool"?"#6cc8ff":r==="off"?"#5d646e":"#ff9f43",o=e.attributes.current_temperature,h=re[e.attributes.hvac_action??r]??zt[r]??r;return{hero:r==="off"?"Off":i!=null?`${J(i)}°`:"—",small:[h,o!=null?`agora ${J(o)}°`:null].filter(Boolean).join(" · "),tag:t.sub,art:ai(r==="off"?null:i??null,s),heroStyle:t.size==="l"?"font-size:calc(var(--u)*7)":"",extra:n.length>1?d`<div class="seg">${n.map(M=>d`<button class=${P({on:M===r})} @click=${()=>this.call("climate","set_hvac_mode",t.entity,{hvac_mode:M})}>${zt[M]}</button>`)}</div>`:_,ctl:i!=null&&r!=="off"?d`<div class="ctl"><button aria-label="Baixar" @click=${()=>this.stepTemp(t.entity,-1)}>${B(z.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(t.entity,1)}>${B(z.plus)}</button></div>`:_}}case"weather":{const i=e?.state??"",r=e?.attributes.temperature,n=this.warnings[0];return{hero:r!=null?`${Math.round(r)}°`:"—",small:Ct[i]??i,art:ee(i),extra:n?d`<span class=${`ipma ${n.awarenessLevelID}`}><i></i>Aviso ${Pt[n.awarenessLevelID]??""} · ${n.awarenessTypeName.toLowerCase()}${this.warnings.length>1?` +${this.warnings.length-1}`:""}</span>`:_,ctl:this.hourly.length?d`<div class="hrs">${this.hourly.map(s=>d`<span>${new Date(s.datetime).getHours()}h<b>${Math.round(s.temperature)}°</b>${s.precipitation_probability?`${s.precipitation_probability}%`:""}</span>`)}</div>`:_}}case"lock":{const i=e.state!=="locked";return{hero:i?e.state==="unlocked"?"Destrancada":e.state:"Trancada",small:i?"tocar para trancar":"toque longo para abrir",art:ii(i),att:e.state==="unlocked",heroStyle:"font-size:calc(var(--u)*1.85)"}}case"media":{const i=e.state==="playing",r=e.attributes.media_title??(ht(e)?"Ligado":"Desligado"),n=e.attributes.media_artist??e.attributes.app_name??"";return{hero:r,small:n,tag:t.sub,art:ni(e.attributes.entity_picture),on:i,heroStyle:"font-size:calc(var(--u)*2.4)",ctl:ht(e)?d`<div class="ctl"><button class="pri" aria-label=${i?"Pausa":"Tocar"} @click=${()=>this.call("media_player","media_play_pause",t.entity)}>${B(i?z.pause:z.play)}</button>
                <button aria-label="Seguinte" @click=${()=>this.call("media_player","media_next_track",t.entity)}>${B(z.next)}</button></div>`:_}}case"vacuum":{const i=e.attributes.battery_level;return{hero:i!=null?`${i}%`:ne[e.state]??e.state,small:ne[e.state]??e.state,art:ri(e.state==="cleaning"),on:e.state==="cleaning"}}case"scenes":return{hero:"",extra:d`<div class="scn">${t.entities.map(i=>d`<button @click=${()=>this.call(q(i),"turn_on",i)}>${B(z.spark)}${this.name(i)}</button>`)}</div>`};case"fan":return{hero:ht(e)?e.attributes.percentage!=null?`${e.attributes.percentage}%`:"On":"Off",art:si(ht(e)),on:ht(e)};case"switch":case"outlet":{const i=ht(e);return{hero:i?"On":"Off",art:oi(i),on:i}}case"binary":{const i=e.state==="on",r=e.attributes.device_class;return{hero:r&&["door","window","garage_door","opening"].includes(r)?i?"Aberta":"Fechada":r==="motion"||r==="occupancy"?i?"Movimento":"Calmo":i?"On":"Off",att:i&&!!r&&["door","window","garage_door","opening","moisture","smoke","gas"].includes(r),heroStyle:"font-size:calc(var(--u)*2.4)"}}case"sensor":{const i=e.attributes.unit_of_measurement??"",r=parseFloat(e.state),n=e.attributes.device_class;Number.isNaN(r)||this.historyWanted.add(t.entity);const s=this.history[t.entity],o=s&&s.length>1?`${J(Math.min(...s),0)}–${J(Math.max(...s),0)}`:void 0;return{hero:Number.isNaN(r)?e.state:`${J(r)}${i==="°C"?"°":i==="%"?"%":""}`,small:i&&i!=="°C"&&i!=="%"?i:t.sub,tag:o,art:ci(n==="humidity"?"#3db8f5":n==="temperature"?"#ff9f43":"#5be3a0",s)}}case"clock":return{hero:this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),small:this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})};case"scene":return{hero:"",art:li(),extra:d`<span class="go">${this.flash===t.key?"Ativada":"Tocar para ativar"}</span>`};case"camera":{const i=e.attributes.entity_picture,r=Math.floor(this.now.getTime()/1e4);return{hero:"",tag:t.sub,art:i?d`<img class="cam" src=${`${i}${i.includes("?")?"&":"?"}t=${r}`} alt="" loading="lazy" />`:_}}}}name(t,e){for(const i of this.home.rooms){const r=i.devices.find(n=>n.id===t);if(r)return r.name}const a=this.entities[t]?.attributes.friendly_name??t.split(".")[1];return e&&a.toLowerCase().startsWith(e.name.toLowerCase()+" ")?a.slice(e.name.length+1):a}stepTemp(t,e){const a=this.entities[t],i=a?.attributes.target_temp_step??.5,r=a?.attributes.temperature??20,n=a?.attributes.min_temp??7,s=a?.attributes.max_temp??35;this.call("climate","set_temperature",t,{temperature:Math.max(n,Math.min(s,Math.round((r+e*i)*10)/10))})}renderSheet(t){const e=this.entities[t];if(!e)return _;const a=q(t),i=this.home.rooms.find(n=>n.devices.some(s=>s.id===t)),r=a==="light"?"luz":a==="cover"?"estore":a==="climate"?"clima":a==="lock"?"fechadura":a==="media_player"?"média":a==="weather"?"tempo":"";return d`<div class="scrim" @click=${()=>this.sheet=null}></div>
      <aside class="sheet" role="dialog" aria-label=${this.name(t,i)}>
        <div class="shd"><span class="k">${[i?.name,r].filter(Boolean).join(" · ")}</span>
          <button class="x" aria-label="Fechar" @click=${()=>this.sheet=null}>${B(z.close)}</button></div>
        <h4>${this.name(t,i)}</h4>
        ${this.sheetBody(t,e)}
      </aside>`}bigSlider(t,e,a,i,r){const n=this.drag?.key===t?this.drag.value:e,s=o=>{const h=o.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(o.clientX-h.left)/h.width*100)))};return d`<div class="bigsl" role="slider" aria-label=${i} aria-valuenow=${n} aria-valuemin="0" aria-valuemax="100"
      @pointerdown=${o=>{o.currentTarget.setPointerCapture(o.pointerId),this.drag={key:t,value:s(o)}}}
      @pointermove=${o=>{this.drag?.key===t&&o.buttons&&(this.drag={key:t,value:s(o)})}}
      @pointerup=${o=>{const h=s(o);r(h),this.drag={key:t,value:h},window.setTimeout(()=>{this.drag?.key===t&&(this.drag=null)},1500)}}>
      <i style=${`width:${n}%;background:${a}`}></i><b>${n}%</b></div>`}sheetBody(t,e){const a=q(t);if(a==="light"){const r=e.attributes.supported_color_modes??[],n=r.includes("color_temp"),s=r.some(T=>["hs","rgb","rgbw","rgbww","xy"].includes(T)),o=Ht(e),h=e.attributes.min_color_temp_kelvin??2200,M=e.attributes.max_color_temp_kelvin??6500;return d`${r.some(T=>T!=="onoff")?this.bigSlider(`sheet-${t}`,bt(e),`linear-gradient(90deg,${o},#fff3e0)`,"Brilho",T=>T?this.call("light","turn_on",t,{brightness_pct:T}):this.call("light","turn_off",t)):_}
        ${n?d`<span class="k">Branco</span><div class="tbar" @click=${T=>{const Z=T.currentTarget.getBoundingClientRect(),R=(T.clientX-Z.left)/Z.width;this.call("light","turn_on",t,{color_temp_kelvin:Math.round(h+R*(M-h))})}}></div>`:_}
        ${s?d`<span class="k">Cores</span><div class="pre">${Li.map(T=>d`<button aria-label=${T} style=${`background:${T}`} class=${P({on:T===o})} @click=${()=>this.call("light","turn_on",t,{rgb_color:xe(T)})}></button>`)}</div>`:_}
        <div class="foot"><button class="pill" @click=${()=>this.toggle(t)}>${B(z.power)} ${e.state==="on"?"Desligar":"Ligar"}</button></div>`}if(a==="cover"){const r=e.attributes.current_position??(e.state==="open"?100:0);return d`${e.attributes.supported_features&4?this.bigSlider(`sheet-${t}`,r,"linear-gradient(90deg,#a9b6c4,#dfe6ee)","Posição",n=>this.call("cover","set_cover_position",t,{position:n})):_}
        <div class="foot"><button class="pill" @click=${()=>this.call("cover","open_cover",t)}>Abrir</button><button class="pill" @click=${()=>this.call("cover","stop_cover",t)}>Parar</button><button class="pill" @click=${()=>this.call("cover","close_cover",t)}>Fechar</button></div>`}if(a==="climate"){const r=e.attributes.temperature,n=e.attributes.hvac_modes??[];return d`<div class="bigtemp">${r!=null?`${J(r)}°`:"—"}<small>${re[e.attributes.hvac_action??e.state]??""}${e.attributes.current_temperature!=null?` · agora ${J(e.attributes.current_temperature)}°`:""}</small></div>
        <div class="ctl big"><button aria-label="Baixar" @click=${()=>this.stepTemp(t,-1)}>${B(z.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(t,1)}>${B(z.plus)}</button></div>
        <span class="k">Modo</span><div class="seg wide">${n.map(s=>d`<button class=${P({on:s===e.state})} @click=${()=>this.call("climate","set_hvac_mode",t,{hvac_mode:s})}>${zt[s]??s}</button>`)}</div>`}if(a==="lock"){const r=e.state==="locked";return d`<div class="bigtemp">${r?"Trancada":e.state==="unlocked"?"Destrancada":e.state}</div>
        <div class="foot">${r?d`<button class="pill warn" @click=${()=>{this.call("lock","unlock",t),this.sheet=null}}>${B(z.unlock)} Destrancar</button>`:d`<button class="pill pri" @click=${()=>this.call("lock","lock",t)}>${B(z.lock)} Trancar</button>`}</div>`}if(a==="media_player"){const r=Math.round((e.attributes.volume_level??0)*100);return d`<div class="bigtemp" style="font-size:calc(var(--u)*2.6)">${e.attributes.media_title??e.state}<small>${e.attributes.media_artist??""}</small></div>
        ${e.attributes.volume_level!=null?this.bigSlider(`vol-${t}`,r,"linear-gradient(90deg,#3db8f5,#9be0ff)","Volume",n=>this.call("media_player","volume_set",t,{volume_level:n/100})):_}
        <div class="foot"><button class="pill pri" @click=${()=>this.call("media_player","media_play_pause",t)}>${B(e.state==="playing"?z.pause:z.play)} ${e.state==="playing"?"Pausa":"Tocar"}</button>
          <button class="pill" @click=${()=>this.call("media_player","media_next_track",t)}>${B(z.next)}</button>
          <button class="pill" @click=${()=>this.toggle(t)}>${B(z.power)}</button></div>`}if(a==="camera"){const r=e.attributes.entity_picture;return r?d`<img class="camlg" src=${`${r}${r.includes("?")?"&":"?"}t=${Math.floor(this.now.getTime()/1e4)}`} alt=${this.name(t)} />`:d`<p class="k">Sem imagem</p>`}if(a==="weather"){const r=o=>new Date(o).toLocaleString("pt-PT",{weekday:"short",hour:"2-digit",minute:"2-digit"}),n=e.attributes.temperature,s=[e.attributes.humidity!=null?`${e.attributes.humidity}%`:null,e.attributes.wind_speed!=null?`vento ${J(e.attributes.wind_speed,0)} ${e.attributes.wind_speed_unit??""}`:null].filter(Boolean);return d`<div class="bigtemp">${n!=null?`${Math.round(n)}°`:"—"}<small>${[Ct[e.state]??e.state,...s].join(" · ")}</small></div>
        <div class="hrs">${this.hourly.map(o=>d`<span>${new Date(o.datetime).getHours()}h<b>${Math.round(o.temperature)}°</b>${o.precipitation_probability?`${o.precipitation_probability}%`:""}</span>`)}</div>
        ${this.warnings.map(o=>d`<div class=${`warn ${o.awarenessLevelID}`}><b>Aviso ${Pt[o.awarenessLevelID]??""} · ${o.awarenessTypeName}</b>
          <span>${r(o.startTime)} → ${r(o.endTime)}</span>${o.text?d`<p>${o.text}</p>`:_}</div>`)}
        ${this.home.settings?.ipma_area?_:d`<p class="hint">Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.</p>`}`}const i=e.attributes.unit_of_measurement??"";return d`<div class="bigtemp">${e.state}${i?` ${i}`:""}</div>
      ${["switch","light","fan","input_boolean","vacuum"].includes(a)?d`<div class="foot"><button class="pill pri" @click=${()=>this.toggle(t)}>${B(z.power)} ${ht(e)?"Desligar":"Ligar"}</button></div>`:_}`}};N.styles=xt;G([ut({attribute:!1})],N.prototype,"home",2);G([ut({attribute:!1})],N.prototype,"entities",2);G([ut({attribute:!1})],N.prototype,"dashboard",2);G([ut({attribute:!1})],N.prototype,"conn",2);G([ut()],N.prototype,"screenName",2);G([ut({type:Boolean})],N.prototype,"canEdit",2);G([ut({type:Boolean})],N.prototype,"ambient",2);G([ut({type:Boolean})],N.prototype,"wallpanel",2);G([F()],N.prototype,"editing",2);G([F()],N.prototype,"draft",2);G([F()],N.prototype,"moving",2);G([F()],N.prototype,"saving",2);G([F()],N.prototype,"view",2);G([F()],N.prototype,"category",2);G([F()],N.prototype,"sheet",2);G([F()],N.prototype,"drag",2);G([F()],N.prototype,"now",2);G([F()],N.prototype,"hourly",2);G([F()],N.prototype,"warnings",2);G([F()],N.prototype,"history",2);G([F()],N.prototype,"flash",2);N=G([yt("pine3-vidro")],N);function xe(t){const e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function ce(t){if(t.startsWith("#"))return xe(t).join(",");const e=t.match(/\d+/g);return e?e.slice(0,3).join(","):"255,207,138"}var Ai=Object.getOwnPropertyDescriptor,Ti=(t,e,a,i)=>{for(var r=i>1?void 0:i?Ai(e,a):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=s(r)||r);return r};const le=t=>W`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`,Vi=[{id:"home",name:"Casa",color:"#ffd166",icon:z.home},{id:"@divisoes",name:"Divisões",color:"#d9f2e3",icon:z.room},{id:"@clima",name:"Clima",color:"#ffb08a",icon:z.therm},{id:"@seguranca",name:"Segurança",color:"#bfe0ff",icon:z.shield},{id:"@cenas",name:"Cenas",color:"#ffd0c2",icon:z.spark}],de=["#ffd166","#d9f2e3","#c9b8ff","#ffd0c2","#bfe0ff","#ffb08a","#e9f5a8"],ue={key:"clock",kind:"clock",size:"l",name:""};let Bt=class extends N{render(){if(!this.home)return _;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(a=>a.id===this.view),e={vd:!0,bento:!0,editing:!!this.editing};return d`<div class=${P(e)}>
      ${this.renderPills()}
      <main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderRooms():this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):_}
    </div>`}renderPills(){const t=this.home.rooms.some(i=>i.id===this.view),e=at(this.home,this.entities).alerts,a=Vi.filter(i=>i.id==="home"||i.id==="@divisoes"||this.viewWidgets(i.id).length);return d`<nav class="bnav" aria-label="Vistas">
      ${a.map(i=>{const r=this.view===i.id||i.id==="@divisoes"&&t;return d`<button class=${P({on:r})} style=${`--c:${i.color}`} @click=${()=>this.openRoom(i.id)}>
          ${le(i.icon)}${i.name}${i.id==="@seguranca"&&e?d`<span class="bb">${e}</span>`:_}
        </button>`})}
      ${this.view==="home"?d`<span class="btools">${this.editControls("home",[ue,...Rt(this.home,this.entities)])}</span>`:_}
      <span class="clk">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</span>
    </nav>`}renderHome(){const t=[ue,...Rt(this.home,this.entities)],e=this.arranged("home",t),a=this.editing==="home";return d`<div class=${P({grid:!0,edit:a})}>${e.map(i=>this.renderWidget(i))}</div>
      ${this.renderPicker("home",t)}`}renderRooms(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(a=>!a.hidden));return d`<div class="grid">${t.map((e,a)=>{const i=nt(e),r=i.filter(s=>this.entities[s]?.state==="on").length,n=e.temperature?parseFloat(this.entities[e.temperature]?.state??""):NaN;return d`<button class=${P({w:!0,s:!0,room:!0,dim:!r})} style=${`--rc:${de[a%de.length]}`} @click=${()=>this.openRoom(e.id)}>
        <span class="nm">${le(Mt(e.icon))}${Number.isNaN(n)?_:d`<em>${J(n)}°</em>`}</span>
        <div class="hero">${e.name}<small>${qt(i.length,r,e.devices.length)}</small></div>
      </button>`})}</div>`}};Bt.styles=[xt,wt`
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
  `];Bt=Ti([yt("pine3-bento")],Bt);var Hi=Object.getOwnPropertyDescriptor,Ei=(t,e,a,i)=>{for(var r=i>1?void 0:i?Hi(e,a):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=s(r)||r);return r};const vt=t=>W`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`,he={home:"Casa","@divisoes":"Divisões","@clima":"Clima","@seguranca":"Segurança","@cenas":"Cenas"},zi=70,Pi=W`<svg viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 22 Q18 8 36 18 T70 14 T100 18 V46 H0Z" fill="#3c3552" opacity=".85"/>
  <path d="M0 30 Q22 18 46 28 T100 26 V46 H0Z" fill="#252a40"/>
  <path d="M0 38 Q30 30 60 36 T100 34 V46 H0Z" fill="#171b2a"/></svg>`;let Nt=class extends N{get order(){return["home","@divisoes",...["@clima","@seguranca","@cenas"].filter(t=>this.viewWidgets(t).length)]}get current(){return this.home.rooms.some(t=>t.id===this.view)?"@divisoes":this.view}step(t){const e=this.order,a=Math.max(0,e.indexOf(this.current));this.openRoom(e[(a+t+e.length)%e.length])}swipeDown(t){const e=t.target;this.editing||this.sheet||e.closest(".w, button, .sheet, .picker, .bigsl")||(this.swipe={x:t.clientX,y:t.clientY,id:t.pointerId})}swipeUp(t){const e=this.swipe;if(this.swipe=void 0,!e||e.id!==t.pointerId)return;const a=t.clientX-e.x;Math.abs(a)>zi&&Math.abs(a)>Math.abs(t.clientY-e.y)*1.5&&this.step(a<0?1:-1)}render(){if(!this.home)return _;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(s=>s.id===this.view),e=at(this.home,this.entities).lightsOn>0,a=this.view==="home",i={vd:!0,moldura:!0,dim:!e,editing:!!this.editing},r=this.order,n=this.current;return d`<div class=${P(i)} @pointerdown=${s=>this.swipeDown(s)} @pointerup=${s=>this.swipeUp(s)}
        @pointercancel=${()=>this.swipe=void 0}>
      <div class="hills">${Pi}</div>
      ${a?this.renderFrame():d`<div class="panel"><main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderRoomList():this.renderView(this.view)}</main></div>`}
      <div class="pager">
        <b>${t?t.name:he[n]??""}</b>
        <div class="dots">${r.map(s=>d`<button class=${P({on:s===n})} aria-label=${he[s]} @click=${()=>this.openRoom(s)}></button>`)}</div>
      </div>
      ${this.editing?_:d`<button class="edge l" aria-label="Vista anterior" @click=${()=>this.step(-1)}>${vt(z.back)}</button>
          <button class="edge r" aria-label="Vista seguinte" @click=${()=>this.step(1)}>${vt(z.back)}</button>`}
      ${a?d`<span class="hint">desliza para o lado para mudar de vista</span>`:_}
      ${this.sheet?this.renderSheet(this.sheet):_}
    </div>`}renderFrame(){const t=at(this.home,this.entities),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,i=this.warnings[0],r=this.home.rooms.filter(T=>!T.hidden&&nt(T).length),n=this.home.rooms.flatMap(T=>T.devices).find(T=>!T.hidden&&q(T.id)==="climate"),s=this.home.rooms.flatMap(T=>T.devices).find(T=>!T.hidden&&q(T.id)==="lock"),o=n?this.entities[n.id]:void 0,h=s?this.entities[s.id]:void 0,M=[t.lightsOn?`${t.lightsOn} luz${t.lightsOn>1?"es":""} acesa${t.lightsOn>1?"s":""}`:"luzes apagadas",t.alerts?t.alertText:null].filter(Boolean);return d`<div class="tl">
        <b>${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</span>
      </div>
      <div class="tr">
        ${e?d`<b>${a!=null?`${Math.round(a)}°`:""}</b>${this.weatherWord(e.state)}<br />`:_}
        ${M.join(" · ")}
        ${i?d`<br /><span class=${`ipma ${i.awarenessLevelID}`}><i></i>Aviso ${{yellow:"amarelo",orange:"laranja",red:"vermelho"}[i.awarenessLevelID]??""} · ${i.awarenessTypeName.toLowerCase()}</span>`:_}
      </div>
      <div class="strip">
        ${r.map(T=>{const Z=nt(T).filter(R=>this.entities[R]?.state==="on").length;return d`<button class=${P({q:!0,on:Z>0})} @click=${()=>this.openRoom(T.id)}>
            <i>${vt(Mt(T.icon))}</i><span>${T.name}<small>${Z?`${Z} luz${Z>1?"es":""}`:"apagada"}</small></span>
          </button>`})}
        ${n&&o?d`<button class=${P({q:!0,on:o.state!=="off"})} @click=${()=>this.openRoom("@clima")}>
              <i>${vt(z.therm)}</i><span>${o.state==="off"?"Off":`${J(o.attributes.temperature??0)}°`}<small>clima</small></span>
            </button>`:_}
        ${s&&h?d`<button class=${P({q:!0,alert:h.state==="unlocked"})}
                @click=${()=>h.state==="locked"?this.sheet=s.id:this.call("lock","lock",s.id)}>
              <i>${vt(h.state==="locked"?z.lock:z.unlock)}</i><span>${s.name}<small>${h.state==="locked"?"trancada":"destrancada · tocar"}</small></span>
            </button>`:_}
      </div>`}weatherWord(t){return{"clear-night":"Céu limpo",cloudy:"Nublado",fog:"Nevoeiro",lightning:"Trovoada","lightning-rainy":"Trovoada e chuva",partlycloudy:"Pouco nublado",pouring:"Chuva forte",rainy:"Chuva",snowy:"Neve",sunny:"Sol",windy:"Vento"}[t]??t}renderRoomList(){const t=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden)),e=at(this.home,this.entities).lightsOn;return d`<div class="rtop"><b>Divisões</b><span>${e?`${e} luz${e>1?"es":""} acesa${e>1?"s":""}`:"tudo apagado"}</span></div>
      <div class="grid">${t.map(a=>{const i=nt(a),r=i.filter(s=>this.entities[s]?.state==="on").length,n=a.temperature?parseFloat(this.entities[a.temperature]?.state??""):NaN;return d`<button class=${P({w:!0,s:!0,rc:!0,on:r>0})} @click=${()=>this.openRoom(a.id)}>
          <span class="nm">${a.name}${Number.isNaN(n)?_:d`<em>${J(n)}°</em>`}</span>
          <div class="hero">${vt(Mt(a.icon))}<small>${qt(i.length,r,a.devices.length)}</small></div>
        </button>`})}</div>`}};Nt.styles=[xt,wt`
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
  `];Nt=Ei([yt("pine3-moldura")],Nt);var Oi=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,_e=(t,e,a,i)=>{for(var r=i>1?void 0:i?Di(e,a):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,a,r):s(r))||r);return i&&r&&Oi(e,a,r),r};const Si=[{id:"home",name:"Casa"},{id:"@divisoes",name:"Divisões"},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Segurança"},{id:"@cenas",name:"Cenas"}],Ri=["nenhuma","uma","duas","três","quatro","cinco","seis","sete","oito","nove","dez"],Bi={yellow:"amarelo",orange:"laranja",red:"vermelho"};let Lt=class extends N{constructor(){super(...arguments),this.open=null}get pages(){return Si.filter(t=>t.id==="home"||t.id==="@divisoes"||this.viewWidgets(t.id).length)}render(){if(!this.home)return _;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(r=>r.id===this.view),e=this.pages,a=t?"@divisoes":this.view,i=Math.max(0,e.findIndex(r=>r.id===a));return d`<div class=${P({vd:!0,editorial:!0,editing:!!this.editing})}>
      <nav class="toc" aria-label="Índice">
        ${e.map(r=>d`<button class=${P({on:r.id===a})} @click=${()=>this.openRoom(r.id)}>${r.name}</button>`)}
        <span class="no">N.º ${i+1} / ${e.length}</span>
      </nav>
      <main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?d`<div class="rtop"><b>Divisões</b><span>${this.lightsLine()}</span></div>${this.renderList(!0)}`:this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):_}
    </div>`}lightsLine(){const t=at(this.home,this.entities).lightsOn;return t?`${t} luz${t>1?"es":""} acesa${t>1?"s":""}`:"tudo apagado"}sentence(){const t=at(this.home,this.entities),e=this.home.rooms.map(M=>M.temperature?parseFloat(this.entities[M.temperature]?.state??""):NaN).filter(M=>!Number.isNaN(M)),a=e.length?Math.round(e.reduce((M,T)=>M+T,0)/e.length):null,i=t.lightsOn>=4?"acolhedora":t.lightsOn?"calma":"às escuras",r=`${Ri[t.lightsOn]??t.lightsOn} ${t.lightsOn===1?"luz":"luzes"}`,n=this.home.rooms.flatMap(M=>M.devices).find(M=>!M.hidden&&q(M.id)==="lock"),s=n?this.entities[n.id]?.state:void 0,o=n&&s?s==="locked"?d`a ${n.name.toLowerCase()} trancada`:d`a ${n.name.toLowerCase()} <em>ainda destrancada</em>`:null,h=[r,a!=null?`${a} graus`:null].filter(Boolean).join(", ");return d`A casa está <em>${i}</em>: ${h}${o?d`, e ${o}`:_}.`}renderHome(){const t=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}).split(":"),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,i=this.warnings[0],r=[...this.home.scenes,...this.home.scripts].filter(s=>this.entities[s]).slice(0,4),n=this.home.persons.map(s=>this.entities[s]).filter(s=>s?.state==="home");return d`<div class="ed">
      <div class="left">
        <div class="ttl">${t[0]}<em>:</em>${t[1]}</div>
        <div class="sub">${this.sentence()}</div>
        ${r.length?d`<div class="scn">${r.map(s=>d`<button class=${P({on:this.flash===s})} @click=${()=>this.tap({key:s,kind:"scene",size:"s",name:"",entity:s})}>
              ${(this.entities[s].attributes.friendly_name??s).toLowerCase()}</button>`)}</div>`:_}
        <div class="meta">
          ${e?d`<div>Lá fora<b>${a!=null?`${Math.round(a)}°, `:""}${this.weatherWord(e.state)}</b></div>`:_}
          ${i?d`<div class="warnm">Aviso ${Bi[i.awarenessLevelID]??""}<b>${i.awarenessTypeName.toLowerCase()}</b></div>`:_}
          ${n.length?d`<div>Em casa<b>${n.map(s=>(s.attributes.friendly_name??"").split(" ")[0]).join(", ")}</b></div>`:_}
        </div>
      </div>
      ${this.renderList(!1)}
    </div>`}weatherWord(t){return{"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",lightning:"trovoada","lightning-rainy":"trovoada",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve",sunny:"sol",windy:"vento"}[t]??t}renderList(t){const e=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden));return d`<div class=${P({list:!0,full:t})}>${e.map(a=>this.renderRow(a))}</div>`}renderRow(t){const e=nt(t),a=e.filter(h=>this.entities[h]?.state==="on").length,i=t.temperature?parseFloat(this.entities[t.temperature]?.state??""):NaN,r=t.devices.find(h=>q(h.id)==="lock"),n=r&&this.entities[r.id]?.state==="unlocked",s=this.open===t.id,o=`${qt(e.length,a,t.devices.length)}${Number.isNaN(i)?"":` · ${J(i,0)}°`}`;return d`<div class=${P({r:!0,on:a>0})}>
      <div class="h">
        <button class="nmb" aria-expanded=${s} @click=${()=>this.open=s?null:t.id}>${t.name}</button>
        <span>${o}</span>
        ${n?d`<button class="tg warn" @click=${()=>this.call("lock","lock",r.id)}>trancar</button>`:e.length?d`<button class="tg" @click=${()=>this.call("light",a?"turn_off":"turn_on",e)}>${a?"on":"off"}</button>`:d`<button class="tg" @click=${()=>this.openRoom(t.id)}>abrir</button>`}
      </div>
      ${s?d`<div class="ctrls">
            ${e.map(h=>this.lineControl(h,t))}
            <button class="more" @click=${()=>this.openRoom(t.id)}>ver tudo em ${t.name.toLowerCase()} →</button>
          </div>`:_}
    </div>`}lineControl(t,e){const a=this.entities[t],i=`line-${t}`,r=this.drag?.key===i?this.drag.value:bt(a),n=s=>{const o=s.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(s.clientX-o.left)/o.width*100)))};return d`<div class="lc">
      <span>${this.name(t,e)}</span><b>${r?`${r}%`:"—"}</b>
      <div class="line" role="slider" aria-label=${this.name(t,e)} aria-valuenow=${r} aria-valuemin="0" aria-valuemax="100"
        @pointerdown=${s=>{s.currentTarget.setPointerCapture(s.pointerId),this.drag={key:i,value:n(s)}}}
        @pointermove=${s=>{this.drag?.key===i&&s.buttons&&(this.drag={key:i,value:n(s)})}}
        @pointerup=${s=>{const o=n(s);this.call("light",o?"turn_on":"turn_off",t,o?{brightness_pct:o}:{}),this.drag={key:i,value:o},window.setTimeout(()=>{this.drag?.key===i&&(this.drag=null)},1500)}}><i style=${`width:${r}%`}></i></div>
    </div>`}};Lt.styles=[xt,wt`
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
  `];_e([F()],Lt.prototype,"open",2);Lt=_e([yt("pine3-editorial")],Lt);var Ni=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,Zt=(t,e,a,i)=>{for(var r=i>1?void 0:i?Ii(e,a):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,a,r):s(r))||r);return i&&r&&Ni(e,a,r),r};const ji=[{id:"home",name:"Casa"},{id:"@divisoes",name:"Div."},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Seg."},{id:"@cenas",name:"Cenas"}],ft=270,Wi=16,Fi=30;let $t=class extends N{constructor(){super(...arguments),this.faderRoom=null,this.dial=null}render(){if(!this.home)return _;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(r=>r.id===this.view),e=t?"@divisoes":this.view,a=ji.filter(r=>r.id==="home"||r.id==="@divisoes"||this.viewWidgets(r.id).length),i=at(this.home,this.entities).alerts;return d`<div class=${P({vd:!0,instrumento:!0,editing:!!this.editing})}>
      <nav class="bank" aria-label="Vistas">
        ${a.map(r=>d`<button class=${P({key:!0,on:r.id===e})} @click=${()=>this.openRoom(r.id)}>
          <span class=${P({led:!0,on:r.id===e,alarm:r.id==="@seguranca"&&i>0})}></span>${r.name}
        </button>`)}
      </nav>
      <main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderSwitches(!0):this.view.startsWith("@")?this.renderView(this.view):this.renderConsole()}</main>
      ${this.sheet?this.renderSheet(this.sheet):_}
    </div>`}lightRooms(){return this.home.rooms.filter(t=>!t.hidden&&nt(t).length)}renderConsole(){const t=this.home.weather?this.entities[this.home.weather]:void 0,e=t?.attributes.temperature,a=this.warnings[0],i=[...this.home.scenes,...this.home.scripts].filter(o=>this.entities[o]).slice(0,3),r=this.home.rooms.flatMap(o=>o.devices).find(o=>!o.hidden&&q(o.id)==="lock"),n=r?this.entities[r.id]?.state==="locked":!0,s=this.now.toLocaleDateString("pt-PT",{weekday:"short",day:"numeric",month:"short"}).replace(/\./g,"");return d`<div class="console">
      <section class="mod disp">
        <div class="lab"><span>Hora</span><span>${s}</span></div>
        <b>${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</b>
        <span class="ln">${t?`${e!=null?`${Math.round(e)}° · `:""}${Ct[t.state]??t.state}`:""}${a?` · aviso ${a.awarenessTypeName.toLowerCase()}`:""}</span>
        <div class="keys">
          ${i.map((o,h)=>d`<button class=${P({btn:!0,on:this.flash===o})} @click=${()=>this.tap({key:o,kind:"scene",size:"s",name:"",entity:o})}>
            ${h+1} ${(this.entities[o].attributes.friendly_name??o).split(" ")[0]}</button>`)}
          ${r?d`<button class=${P({btn:!0,lockw:!n})} @click=${()=>n?this.sheet=r.id:this.call("lock","lock",r.id)}>
                <span class=${P({led:!0,g:n,on:!0})}></span>${n?"Tranc.":"Porta"}</button>`:_}
        </div>
      </section>
      ${this.renderKnob()}
      ${this.renderFaders()}
      ${this.renderSwitches(!1)}
    </div>`}renderKnob(){const t=this.home.rooms.flatMap(S=>S.devices.map(U=>({d:U,r:S}))).find(({d:S})=>!S.hidden&&q(S.id)==="climate");if(!t)return d`<section class="mod knob"><div class="lab"><span>Clima</span></div><p class="k">Sem termóstato</p></section>`;const e=this.entities[t.d.id],a=!!e&&e.state!=="off",i=e?.attributes.min_temp??Wi,r=Math.min(e?.attributes.max_temp??Fi,i+14),n=this.dial??e?.attributes.temperature??i,s=Math.max(0,Math.min(1,(n-i)/(r-i))),o=-ft/2+s*ft,h=Array.from({length:29},(S,U)=>{const rt=(-ft/2+U*ft/28)*Math.PI/180,gt=U%4?44:41,At=a&&U/28<=s;return W`<line x1=${50+47*Math.sin(rt)} y1=${50-47*Math.cos(rt)} x2=${50+gt*Math.sin(rt)} y2=${50-gt*Math.cos(rt)}
        stroke=${At?"#ff6a1a":"#6b6a66"} stroke-width=${U%4?1:1.8} stroke-linecap="round"/>`}),M=e?.attributes.target_temp_step??.5,T=S=>{const U=S.currentTarget.getBoundingClientRect(),rt=Math.atan2(S.clientX-(U.left+U.width/2),-(S.clientY-(U.top+U.height/2)))*180/Math.PI,gt=Math.max(0,Math.min(1,(rt+ft/2)/ft));return Math.round((i+gt*(r-i))/M)*M},Z=(e?.attributes.hvac_modes??[]).filter(S=>["cool","heat","off","auto","heat_cool"].includes(S)).slice(0,3),R={cool:"Frio",heat:"Calor",off:"Off",auto:"Auto",heat_cool:"Auto"},Q=e?.attributes.current_temperature;return d`<section class="mod knob">
      <div class="lab"><span>Clima · ${t.r.name}${Q!=null?` · ${J(Q)}°`:""}</span><span class=${P({led:!0,on:a})}></span></div>
      <div class="dialw" role="slider" aria-label="Temperatura" aria-valuenow=${n} aria-valuemin=${i} aria-valuemax=${r}
        @pointerdown=${S=>{a&&(S.currentTarget.setPointerCapture(S.pointerId),this.dial=T(S))}}
        @pointermove=${S=>{this.dial!=null&&S.buttons&&(this.dial=T(S))}}
        @pointerup=${S=>{if(this.dial==null)return;const U=T(S);this.call("climate","set_temperature",t.d.id,{temperature:U}),window.setTimeout(()=>this.dial=null,1500)}}>
        <svg viewBox="0 0 100 100" aria-hidden="true">${h}</svg>
        <div class="kn"><i style=${`transform:rotate(${a?o:-ft/2}deg)`}></i></div>
        <div class="ktx"><div>${a?`${J(n)}°`:"off"}<small>${a?"roda":"desligado"}</small></div></div>
      </div>
      <div class="keys">${Z.map(S=>d`<button class=${P({btn:!0,on:e?.state===S})} @click=${()=>this.call("climate","set_hvac_mode",t.d.id,{hvac_mode:S})}>${R[S]}</button>`)}</div>
    </section>`}renderFaders(){const t=this.lightRooms(),e=t.find(n=>n.id===this.faderRoom)??t[0];if(!e)return d`<section class="mod fad"><div class="lab"><span>Faders</span></div></section>`;const a=e.devices.filter(n=>!n.hidden&&q(n.id)==="cover"&&this.entities[n.id]?.attributes.supported_features&4),i=[...nt(e).map(n=>({id:n,v:bt(this.entities[n]),n:this.name(n,e),cover:!1})),...a.map(n=>({id:n.id,v:this.entities[n.id]?.attributes.current_position??0,n:n.name,cover:!0}))].slice(0,4),r=n=>{const s=n.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(s.bottom-n.clientY)/s.height*100)))};return d`<section class="mod fad">
      <div class="lab"><span>Faders</span><span class="led g on"></span></div>
      <div class="sel">${t.map(n=>d`<button class=${P({btn:!0,on:n.id===e.id})} @click=${()=>this.faderRoom=n.id}>${n.name.slice(0,5)}</button>`)}</div>
      <div class="faders">${i.map(n=>{const s=`fd-${n.id}`,o=this.drag?.key===s?this.drag.value:n.v;return d`<div class="fd"><b>${o}</b>
          <div class="tk" role="slider" aria-label=${n.n} aria-valuenow=${o} aria-valuemin="0" aria-valuemax="100"
            @pointerdown=${h=>{h.currentTarget.setPointerCapture(h.pointerId),this.drag={key:s,value:r(h)}}}
            @pointermove=${h=>{this.drag?.key===s&&h.buttons&&(this.drag={key:s,value:r(h)})}}
            @pointerup=${h=>{const M=r(h);n.cover?this.call("cover","set_cover_position",n.id,{position:M}):this.call("light",M?"turn_on":"turn_off",n.id,M?{brightness_pct:M}:{}),this.drag={key:s,value:M},window.setTimeout(()=>{this.drag?.key===s&&(this.drag=null)},1500)}}><div class="cap" style=${`bottom:calc((100% - var(--u) * 2.1) * ${o/100})`}></div></div>
          <span>${n.n}</span></div>`})}</div>
    </section>`}renderSwitches(t){const e=t?this.home.rooms.filter(i=>!i.hidden&&i.devices.some(r=>!r.hidden)):this.lightRooms().slice(0,6),a=at(this.home,this.entities).lightsOn;return d`<section class=${P({mod:!0,sw:!0,full:t})}>
      <div class="lab"><span>${t?"Divisões":"Luzes"}</span><span>${a} acesa${a===1?"":"s"}</span></div>
      <div class="rows">${e.map(i=>{const r=nt(i),n=r.filter(o=>this.entities[o]?.state==="on"),s=n.length?Math.max(...n.map(o=>bt(this.entities[o]))):0;return d`<div class="rk">
          <button class=${P({rocker:!0,on:n.length>0})} aria-label=${`Luzes de ${i.name}`} ?disabled=${!r.length}
            @click=${()=>this.call("light",n.length?"turn_off":"turn_on",r)}><i></i></button>
          <button class="rkn" @click=${()=>this.openRoom(i.id)}><b>${i.name}</b><span>${r.length?n.length?`${s}%`:"off":`${i.devices.length} disp.`}</span></button>
        </div>`})}</div>
    </section>`}};$t.styles=[xt,wt`
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
  `];Zt([F()],$t.prototype,"faderRoom",2);Zt([F()],$t.prototype,"dial",2);$t=Zt([yt("pine3-instrumento")],$t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=Symbol.for(""),Ui=t=>{if(t?.r===Ce)return t?._$litStatic$},qi=t=>({_$litStatic$:t,r:Ce}),fe=new Map,Zi=t=>(e,...a)=>{const i=a.length;let r,n;const s=[],o=[];let h,M=0,T=!1;for(;M<i;){for(h=e[M];M<i&&(n=a[M],(r=Ui(n))!==void 0);)h+=r+e[++M],T=!0;M!==i&&o.push(n),s.push(h),M++}if(M===i&&s.push(e[i]),T){const Z=s.join("$$lit$$");(e=fe.get(Z))===void 0&&(s.raw=s,fe.set(Z,e=s)),a=o}return t(e,...a)},Gi=Zi(d);function Me(){const t=window.Pine3Wallpanel;return/Pine3Wallpanel\/\d+/.test(navigator.userAgent)&&t&&typeof t.version=="function"?t:null}function Yi(t){const e=a=>{const i=a.detail?.type;(i==="motion"||i==="sleep"||i==="wake")&&t(i)};return window.addEventListener("pine3wallpanel",e),()=>window.removeEventListener("pine3wallpanel",e)}const Ki=.12,Xi=.5;let ge=null;function Ji(t,e,a){const i=Me();if(!i)return;let r=-1;if(t&&e!=="off"){const n=new Date().getHours(),s=a??(n<7||n>=21);r=e==="low"||s?Ki:Xi}if(r!==ge){ge=r;try{i.setBrightness(r)}catch(n){console.warn("Pine3 Home: Pine3 Wallpanel",n)}}}var Qi=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,ct=(t,e,a,i)=>{for(var r=i>1?void 0:i?tr(e,a):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,a,r):s(r))||r);return i&&r&&Qi(e,a,r),r};const er={vidro:"pine3-vidro",bento:"pine3-bento",moldura:"pine3-moldura",editorial:"pine3-editorial",instrumento:"pine3-instrumento"},ar=2e3,ir="/pine3-home";let it=class extends pe{constructor(){super(...arguments),this.phase="starting",this.error="",this.errorDetail="",this.entities={},this.now=new Date,this.unsubs=[],this.ambient=!1,this.lastActivity=Date.now(),this.onActivity=t=>this.activity(t)}connectedCallback(){super.connectedCallback(),this.clockTimer=window.setInterval(()=>this.now=new Date,15e3),window.addEventListener("pointerdown",this.onActivity,!0),window.addEventListener("keydown",this.onActivity,!0),this.idleTimer=window.setInterval(()=>this.checkIdle(),5e3),this.offWallpanel=Yi(e=>{e==="sleep"&&(this.ambient=!1,this.vidro?.reset()),this.activity()});const t=fa();t?this.connect(t):this.beginPairing()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clockTimer),clearInterval(this.idleTimer),window.removeEventListener("pointerdown",this.onActivity,!0),window.removeEventListener("keydown",this.onActivity,!0),this.offWallpanel?.(),clearTimeout(this.pollTimer),this.teardown()}teardown(){this.unsubs.forEach(t=>t()),this.unsubs=[],this.conn?.close(),this.conn=void 0}get vidro(){return this.renderRoot.querySelector("pine3-vidro, pine3-bento, pine3-moldura, pine3-editorial, pine3-instrumento")}activity(t){this.lastActivity=Date.now(),this.ambient&&(this.ambient=!1,t&&(t.stopPropagation(),t.preventDefault()))}checkIdle(){if(this.phase!=="ready"||this.ambient||!this.me)return;const t=this.me.dashboard.ambient_after??2;!t||this.vidro?.busy||Date.now()-this.lastActivity>t*6e4&&(this.ambient=!0,this.vidro?.reset())}updated(){const t=this.entities["sun.sun"]?.state;Ji(this.ambient,this.me?.dashboard.ambient_brightness,t?t==="below_horizon":null)}async beginPairing(){clearTimeout(this.pollTimer),this.phase="pairing",this.pair=void 0;try{this.pair=await ga(),this.poll()}catch(t){this.error=t.message==="too_many"?"Há demasiados códigos à espera. Tenta daqui a pouco.":"Não foi possível pedir um código.",this.pollTimer=window.setTimeout(()=>this.beginPairing(),1e4)}}poll(){this.pollTimer=window.setTimeout(async()=>{if(this.pair){try{const t=await pa(this.pair);if(t.status==="approved"){Qt(t.token),this.connect(t.token);return}if(t.status==="expired"){this.beginPairing();return}}catch{}this.poll()}},ar)}async connect(t){this.phase="connecting",this.teardown();try{const e=await ua({auth:Qe(location.origin,t)});this.conn=e,this.me=await e.sendMessagePromise({type:"pine3_home/me"}),this.home=await e.sendMessagePromise({type:"pine3_home/home"}),this.unsubs.push(da(e,a=>this.entities=a)),this.unsubs.push(await e.subscribeMessage(async a=>{this.home=a;try{this.me=await e.sendMessagePromise({type:"pine3_home/me"})}catch{}},{type:"pine3_home/subscribe"})),e.addEventListener("ready",async()=>{this.me=await e.sendMessagePromise({type:"pine3_home/me"})}),this.phase="ready"}catch(e){if(e===kt){Qt(null),this.beginPairing();return}this.phase="error",this.error="Sem ligação ao Home Assistant. A tentar de novo…",this.errorDetail=rr(e),console.warn("Pine3 Home: connect",e),this.pollTimer=window.setTimeout(()=>this.connect(t),5e3)}}qr(t){const e=Oe(0,"M");return e.addData(`${location.origin}${ir}?code=${t}`),e.make(),Ee(e.createSvgTag({cellSize:6,margin:2,scalable:!0}))}renderPairing(){const t=this.pair?.code;return d`<main class="center">
      <div class="pane pairing">
        <div class="text">
          <span class="muted eyebrow">Pine3 Home</span>
          <h1>Emparelhar este ecrã</h1>
          <p class="muted">No Home Assistant, abre <strong>Pine3 Home</strong> e escreve este código, ou lê o QR com o telemóvel.</p>
          <div class="code" aria-live="polite">${t?`${t.slice(0,3)} ${t.slice(3)}`:"··· ···"}</div>
          ${this.error?d`<p class="bad">${this.error}</p>`:d`<p class="muted small">O código muda a cada 10 minutos.</p>`}
        </div>
        ${t?d`<div class="qr">${this.qr(t)}</div>`:_}
      </div>
    </main>`}renderReady(){const t=this.me;if(!this.home||!this.conn)return d`<main class="center"><p class="muted">A carregar a casa…</p></main>`;const e=qi(er[t.dashboard.style]??"pine3-vidro");return Gi`<${e} .home=${this.home} .entities=${this.entities} .dashboard=${t.dashboard} .conn=${this.conn}
      .screenName=${t.screen?.name??""} ?ambient=${this.ambient} .wallpanel=${Me()!==null}
      ?canEdit=${t.is_admin||t.dashboard.screen_edit!==!1}></${e}>`}render(){switch(this.phase){case"pairing":return this.renderPairing();case"ready":return this.me?this.renderReady():_;case"error":return d`<main class="center"><div class="errbox"><p class="muted">${this.error}</p>${this.errorDetail?d`<p class="detail">${this.errorDetail}</p>`:_}</div></main>`;default:return d`<main class="center"><p class="muted">A ligar…</p></main>`}}};it.styles=[He,wt`
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
      .errbox {
        text-align: center;
      }
      .detail {
        font-family: ui-monospace, Menlo, Consolas, monospace;
        font-size: 0.8rem;
        color: rgba(238, 241, 244, 0.4);
      }
      .small {
        font-size: 0.85rem;
      }
      .bad {
        color: var(--p3-bad);
      }
    `];ct([F()],it.prototype,"phase",2);ct([F()],it.prototype,"pair",2);ct([F()],it.prototype,"error",2);ct([F()],it.prototype,"errorDetail",2);ct([F()],it.prototype,"me",2);ct([F()],it.prototype,"home",2);ct([F()],it.prototype,"entities",2);ct([F()],it.prototype,"now",2);ct([F()],it.prototype,"ambient",2);it=ct([yt("pine3-screen")],it);function rr(t){if(typeof t=="number")return`erro ${t}`;if(t&&typeof t=="object"){const e=t;return[e.code,e.message].filter(Boolean).join(": ")}return String(t??"")}
