import{A as C,E as St,w as j,i as vt,n as dt,r as W,a as de,c as u,t as mt,b as Ae}from"./chunks/base-BYQr5Ns4.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt={ATTRIBUTE:1,CHILD:2},Bt=t=>(...e)=>({_$litDirective$:t,values:e});let Nt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,i){this._$Ct=e,this._$AM=a,this._$Ci=i}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ht=class extends Nt{constructor(e){if(super(e),this.it=C,e.type!==Rt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===C||e==null)return this._t=void 0,this.it=e;if(e===St)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const a=[e];return a.raw=a,this._t={_$litType$:this.constructor.resultType,strings:a,values:[]}}};Ht.directiveName="unsafeHTML",Ht.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Et extends Ht{}Et.directiveName="unsafeSVG",Et.resultType=2;const Te=Bt(Et);function Ve(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ue={exports:{}};(function(t,e){var a=function(){var i=function(M,L){var w=236,x=17,h=M,k=s[L],l=null,c=0,$=null,b=[],y={},P=function(f,p){c=h*4+17,l=function(d){for(var v=new Array(d),m=0;m<d;m+=1){v[m]=new Array(d);for(var _=0;_<d;_+=1)v[m][_]=null}return v}(c),O(0,0),O(c-7,0),O(0,c-7),Y(),Z(),ot(f,p),h>=7&&it(f),$==null&&($=Me(h,k,b)),ct($,p)},O=function(f,p){for(var d=-1;d<=7;d+=1)if(!(f+d<=-1||c<=f+d))for(var v=-1;v<=7;v+=1)p+v<=-1||c<=p+v||(0<=d&&d<=6&&(v==0||v==6)||0<=v&&v<=6&&(d==0||d==6)||2<=d&&d<=4&&2<=v&&v<=4?l[f+d][p+v]=!0:l[f+d][p+v]=!1)},B=function(){for(var f=0,p=0,d=0;d<8;d+=1){P(!0,d);var v=o.getLostPoint(y);(d==0||f>v)&&(f=v,p=d)}return p},Z=function(){for(var f=8;f<c-8;f+=1)l[f][6]==null&&(l[f][6]=f%2==0);for(var p=8;p<c-8;p+=1)l[6][p]==null&&(l[6][p]=p%2==0)},Y=function(){for(var f=o.getPatternPosition(h),p=0;p<f.length;p+=1)for(var d=0;d<f.length;d+=1){var v=f[p],m=f[d];if(l[v][m]==null)for(var _=-2;_<=2;_+=1)for(var H=-2;H<=2;H+=1)_==-2||_==2||H==-2||H==2||_==0&&H==0?l[v+_][m+H]=!0:l[v+_][m+H]=!1}},it=function(f){for(var p=o.getBCHTypeNumber(h),d=0;d<18;d+=1){var v=!f&&(p>>d&1)==1;l[Math.floor(d/3)][d%3+c-8-3]=v}for(var d=0;d<18;d+=1){var v=!f&&(p>>d&1)==1;l[d%3+c-8-3][Math.floor(d/3)]=v}},ot=function(f,p){for(var d=k<<3|p,v=o.getBCHTypeInfo(d),m=0;m<15;m+=1){var _=!f&&(v>>m&1)==1;m<6?l[m][8]=_:m<8?l[m+1][8]=_:l[c-15+m][8]=_}for(var m=0;m<15;m+=1){var _=!f&&(v>>m&1)==1;m<8?l[8][c-m-1]=_:m<9?l[8][15-m-1+1]=_:l[8][15-m-1]=_}l[c-8][8]=!f},ct=function(f,p){for(var d=-1,v=c-1,m=7,_=0,H=o.getMaskFunction(p),V=c-1;V>0;V-=2)for(V==6&&(V-=1);;){for(var I=0;I<2;I+=1)if(l[v][V-I]==null){var G=!1;_<f.length&&(G=(f[_]>>>m&1)==1);var E=H(v,V-I);E&&(G=!G),l[v][V-I]=G,m-=1,m==-1&&(_+=1,m=7)}if(v+=d,v<0||c<=v){v-=d,d=-d;break}}},ht=function(f,p){for(var d=0,v=0,m=0,_=new Array(p.length),H=new Array(p.length),V=0;V<p.length;V+=1){var I=p[V].dataCount,G=p[V].totalCount-I;v=Math.max(v,I),m=Math.max(m,G),_[V]=new Array(I);for(var E=0;E<_[V].length;E+=1)_[V][E]=255&f.getBuffer()[E+d];d+=I;var X=o.getErrorCorrectPolynomial(G),Q=A(_[V],X.getLength()-1),Wt=Q.mod(X);H[V]=new Array(X.getLength()-1);for(var E=0;E<H[V].length;E+=1){var Ut=E+Wt.getLength()-H[V].length;H[V][E]=Ut>=0?Wt.getAt(Ut):0}}for(var Ft=0,E=0;E<p.length;E+=1)Ft+=p[E].totalCount;for(var _t=new Array(Ft),wt=0,E=0;E<v;E+=1)for(var V=0;V<p.length;V+=1)E<_[V].length&&(_t[wt]=_[V][E],wt+=1);for(var E=0;E<m;E+=1)for(var V=0;V<p.length;V+=1)E<H[V].length&&(_t[wt]=H[V][E],wt+=1);return _t},Me=function(f,p,d){for(var v=T.getRSBlocks(f,p),m=q(),_=0;_<d.length;_+=1){var H=d[_];m.put(H.getMode(),4),m.put(H.getLength(),o.getLengthInBits(H.getMode(),f)),H.write(m)}for(var V=0,_=0;_<v.length;_+=1)V+=v[_].dataCount;if(m.getLengthInBits()>V*8)throw"code length overflow. ("+m.getLengthInBits()+">"+V*8+")";for(m.getLengthInBits()+4<=V*8&&m.put(0,4);m.getLengthInBits()%8!=0;)m.putBit(!1);for(;!(m.getLengthInBits()>=V*8||(m.put(w,8),m.getLengthInBits()>=V*8));)m.put(x,8);return ht(m,v)};y.addData=function(f,p){p=p||"Byte";var d=null;switch(p){case"Numeric":d=S(f);break;case"Alphanumeric":d=et(f);break;case"Byte":d=st(f);break;case"Kanji":d=at(f);break;default:throw"mode:"+p}b.push(d),$=null},y.isDark=function(f,p){if(f<0||c<=f||p<0||c<=p)throw f+","+p;return l[f][p]},y.getModuleCount=function(){return c},y.make=function(){if(h<1){for(var f=1;f<40;f++){for(var p=T.getRSBlocks(f,k),d=q(),v=0;v<b.length;v++){var m=b[v];d.put(m.getMode(),4),d.put(m.getLength(),o.getLengthInBits(m.getMode(),f)),m.write(d)}for(var _=0,v=0;v<p.length;v++)_+=p[v].dataCount;if(d.getLengthInBits()<=_*8)break}h=f}P(!1,B())},y.createTableTag=function(f,p){f=f||2,p=typeof p>"u"?f*4:p;var d="";d+='<table style="',d+=" border-width: 0px; border-style: none;",d+=" border-collapse: collapse;",d+=" padding: 0px; margin: "+p+"px;",d+='">',d+="<tbody>";for(var v=0;v<y.getModuleCount();v+=1){d+="<tr>";for(var m=0;m<y.getModuleCount();m+=1)d+='<td style="',d+=" border-width: 0px; border-style: none;",d+=" border-collapse: collapse;",d+=" padding: 0px; margin: 0px;",d+=" width: "+f+"px;",d+=" height: "+f+"px;",d+=" background-color: ",d+=y.isDark(v,m)?"#000000":"#ffffff",d+=";",d+='"/>';d+="</tr>"}return d+="</tbody>",d+="</table>",d},y.createSvgTag=function(f,p,d,v){var m={};typeof arguments[0]=="object"&&(m=arguments[0],f=m.cellSize,p=m.margin,d=m.alt,v=m.title),f=f||2,p=typeof p>"u"?f*4:p,d=typeof d=="string"?{text:d}:d||{},d.text=d.text||null,d.id=d.text?d.id||"qrcode-description":null,v=typeof v=="string"?{text:v}:v||{},v.text=v.text||null,v.id=v.text?v.id||"qrcode-title":null;var _=y.getModuleCount()*f+p*2,H,V,I,G,E="",X;for(X="l"+f+",0 0,"+f+" -"+f+",0 0,-"+f+"z ",E+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',E+=m.scalable?"":' width="'+_+'px" height="'+_+'px"',E+=' viewBox="0 0 '+_+" "+_+'" ',E+=' preserveAspectRatio="xMinYMin meet"',E+=v.text||d.text?' role="img" aria-labelledby="'+ft([v.id,d.id].join(" ").trim())+'"':"",E+=">",E+=v.text?'<title id="'+ft(v.id)+'">'+ft(v.text)+"</title>":"",E+=d.text?'<description id="'+ft(d.id)+'">'+ft(d.text)+"</description>":"",E+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',E+='<path d="',I=0;I<y.getModuleCount();I+=1)for(G=I*f+p,H=0;H<y.getModuleCount();H+=1)y.isDark(I,H)&&(V=H*f+p,E+="M"+V+","+G+X);return E+='" stroke="transparent" fill="black"/>',E+="</svg>",E},y.createDataURL=function(f,p){f=f||2,p=typeof p>"u"?f*4:p;var d=y.getModuleCount()*f+p*2,v=p,m=d-p;return Ce(d,d,function(_,H){if(v<=_&&_<m&&v<=H&&H<m){var V=Math.floor((_-v)/f),I=Math.floor((H-v)/f);return y.isDark(I,V)?0:1}else return 1})},y.createImgTag=function(f,p,d){f=f||2,p=typeof p>"u"?f*4:p;var v=y.getModuleCount()*f+p*2,m="";return m+="<img",m+=' src="',m+=y.createDataURL(f,p),m+='"',m+=' width="',m+=v,m+='"',m+=' height="',m+=v,m+='"',d&&(m+=' alt="',m+=ft(d),m+='"'),m+="/>",m};var ft=function(f){for(var p="",d=0;d<f.length;d+=1){var v=f.charAt(d);switch(v){case"<":p+="&lt;";break;case">":p+="&gt;";break;case"&":p+="&amp;";break;case'"':p+="&quot;";break;default:p+=v;break}}return p},Le=function(f){var p=1;f=typeof f>"u"?p*2:f;var d=y.getModuleCount()*p+f*2,v=f,m=d-f,_,H,V,I,G,E={"██":"█","█ ":"▀"," █":"▄","  ":" "},X={"██":"▀","█ ":"▀"," █":" ","  ":" "},Q="";for(_=0;_<d;_+=2){for(V=Math.floor((_-v)/p),I=Math.floor((_+1-v)/p),H=0;H<d;H+=1)G="█",v<=H&&H<m&&v<=_&&_<m&&y.isDark(V,Math.floor((H-v)/p))&&(G=" "),v<=H&&H<m&&v<=_+1&&_+1<m&&y.isDark(I,Math.floor((H-v)/p))?G+=" ":G+="█",Q+=f<1&&_+1>=m?X[G]:E[G];Q+=`
`}return d%2&&f>0?Q.substring(0,Q.length-d-1)+Array(d+1).join("▀"):Q.substring(0,Q.length-1)};return y.createASCII=function(f,p){if(f=f||1,f<2)return Le(p);f-=1,p=typeof p>"u"?f*2:p;var d=y.getModuleCount()*f+p*2,v=p,m=d-p,_,H,V,I,G=Array(f+1).join("██"),E=Array(f+1).join("  "),X="",Q="";for(_=0;_<d;_+=1){for(V=Math.floor((_-v)/f),Q="",H=0;H<d;H+=1)I=1,v<=H&&H<m&&v<=_&&_<m&&y.isDark(V,Math.floor((H-v)/f))&&(I=0),Q+=I?G:E;for(V=0;V<f;V+=1)X+=Q+`
`}return X.substring(0,X.length-1)},y.renderTo2dContext=function(f,p){p=p||2;for(var d=y.getModuleCount(),v=0;v<d;v++)for(var m=0;m<d;m++)f.fillStyle=y.isDark(v,m)?"black":"white",f.fillRect(v*p,m*p,p,p)},y};i.stringToBytesFuncs={default:function(M){for(var L=[],w=0;w<M.length;w+=1){var x=M.charCodeAt(w);L.push(x&255)}return L}},i.stringToBytes=i.stringToBytesFuncs.default,i.createStringToBytes=function(M,L){var w=function(){for(var h=xe(M),k=function(){var Z=h.read();if(Z==-1)throw"eof";return Z},l=0,c={};;){var $=h.read();if($==-1)break;var b=k(),y=k(),P=k(),O=String.fromCharCode($<<8|b),B=y<<8|P;c[O]=B,l+=1}if(l!=L)throw l+" != "+L;return c}(),x=63;return function(h){for(var k=[],l=0;l<h.length;l+=1){var c=h.charCodeAt(l);if(c<128)k.push(c);else{var $=w[h.charAt(l)];typeof $=="number"?($&255)==$?k.push($):(k.push($>>>8),k.push($&255)):k.push(x)}}return k}};var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},s={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o=function(){var M=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],L=1335,w=7973,x=21522,h={},k=function(l){for(var c=0;l!=0;)c+=1,l>>>=1;return c};return h.getBCHTypeInfo=function(l){for(var c=l<<10;k(c)-k(L)>=0;)c^=L<<k(c)-k(L);return(l<<10|c)^x},h.getBCHTypeNumber=function(l){for(var c=l<<12;k(c)-k(w)>=0;)c^=w<<k(c)-k(w);return l<<12|c},h.getPatternPosition=function(l){return M[l-1]},h.getMaskFunction=function(l){switch(l){case n.PATTERN000:return function(c,$){return(c+$)%2==0};case n.PATTERN001:return function(c,$){return c%2==0};case n.PATTERN010:return function(c,$){return $%3==0};case n.PATTERN011:return function(c,$){return(c+$)%3==0};case n.PATTERN100:return function(c,$){return(Math.floor(c/2)+Math.floor($/3))%2==0};case n.PATTERN101:return function(c,$){return c*$%2+c*$%3==0};case n.PATTERN110:return function(c,$){return(c*$%2+c*$%3)%2==0};case n.PATTERN111:return function(c,$){return(c*$%3+(c+$)%2)%2==0};default:throw"bad maskPattern:"+l}},h.getErrorCorrectPolynomial=function(l){for(var c=A([1],0),$=0;$<l;$+=1)c=c.multiply(A([1,g.gexp($)],0));return c},h.getLengthInBits=function(l,c){if(1<=c&&c<10)switch(l){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw"mode:"+l}else if(c<27)switch(l){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw"mode:"+l}else if(c<41)switch(l){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw"mode:"+l}else throw"type:"+c},h.getLostPoint=function(l){for(var c=l.getModuleCount(),$=0,b=0;b<c;b+=1)for(var y=0;y<c;y+=1){for(var P=0,O=l.isDark(b,y),B=-1;B<=1;B+=1)if(!(b+B<0||c<=b+B))for(var Z=-1;Z<=1;Z+=1)y+Z<0||c<=y+Z||B==0&&Z==0||O==l.isDark(b+B,y+Z)&&(P+=1);P>5&&($+=3+P-5)}for(var b=0;b<c-1;b+=1)for(var y=0;y<c-1;y+=1){var Y=0;l.isDark(b,y)&&(Y+=1),l.isDark(b+1,y)&&(Y+=1),l.isDark(b,y+1)&&(Y+=1),l.isDark(b+1,y+1)&&(Y+=1),(Y==0||Y==4)&&($+=3)}for(var b=0;b<c;b+=1)for(var y=0;y<c-6;y+=1)l.isDark(b,y)&&!l.isDark(b,y+1)&&l.isDark(b,y+2)&&l.isDark(b,y+3)&&l.isDark(b,y+4)&&!l.isDark(b,y+5)&&l.isDark(b,y+6)&&($+=40);for(var y=0;y<c;y+=1)for(var b=0;b<c-6;b+=1)l.isDark(b,y)&&!l.isDark(b+1,y)&&l.isDark(b+2,y)&&l.isDark(b+3,y)&&l.isDark(b+4,y)&&!l.isDark(b+5,y)&&l.isDark(b+6,y)&&($+=40);for(var it=0,y=0;y<c;y+=1)for(var b=0;b<c;b+=1)l.isDark(b,y)&&(it+=1);var ot=Math.abs(100*it/c/c-50)/5;return $+=ot*10,$},h}(),g=function(){for(var M=new Array(256),L=new Array(256),w=0;w<8;w+=1)M[w]=1<<w;for(var w=8;w<256;w+=1)M[w]=M[w-4]^M[w-5]^M[w-6]^M[w-8];for(var w=0;w<255;w+=1)L[M[w]]=w;var x={};return x.glog=function(h){if(h<1)throw"glog("+h+")";return L[h]},x.gexp=function(h){for(;h<0;)h+=255;for(;h>=256;)h-=255;return M[h]},x}();function A(M,L){if(typeof M.length>"u")throw M.length+"/"+L;var w=function(){for(var h=0;h<M.length&&M[h]==0;)h+=1;for(var k=new Array(M.length-h+L),l=0;l<M.length-h;l+=1)k[l]=M[l+h];return k}(),x={};return x.getAt=function(h){return w[h]},x.getLength=function(){return w.length},x.multiply=function(h){for(var k=new Array(x.getLength()+h.getLength()-1),l=0;l<x.getLength();l+=1)for(var c=0;c<h.getLength();c+=1)k[l+c]^=g.gexp(g.glog(x.getAt(l))+g.glog(h.getAt(c)));return A(k,0)},x.mod=function(h){if(x.getLength()-h.getLength()<0)return x;for(var k=g.glog(x.getAt(0))-g.glog(h.getAt(0)),l=new Array(x.getLength()),c=0;c<x.getLength();c+=1)l[c]=x.getAt(c);for(var c=0;c<h.getLength();c+=1)l[c]^=g.gexp(g.glog(h.getAt(c))+k);return A(l,0).mod(h)},x}var T=function(){var M=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],L=function(h,k){var l={};return l.totalCount=h,l.dataCount=k,l},w={},x=function(h,k){switch(k){case s.L:return M[(h-1)*4+0];case s.M:return M[(h-1)*4+1];case s.Q:return M[(h-1)*4+2];case s.H:return M[(h-1)*4+3];default:return}};return w.getRSBlocks=function(h,k){var l=x(h,k);if(typeof l>"u")throw"bad rs block @ typeNumber:"+h+"/errorCorrectionLevel:"+k;for(var c=l.length/3,$=[],b=0;b<c;b+=1)for(var y=l[b*3+0],P=l[b*3+1],O=l[b*3+2],B=0;B<y;B+=1)$.push(L(P,O));return $},w}(),q=function(){var M=[],L=0,w={};return w.getBuffer=function(){return M},w.getAt=function(x){var h=Math.floor(x/8);return(M[h]>>>7-x%8&1)==1},w.put=function(x,h){for(var k=0;k<h;k+=1)w.putBit((x>>>h-k-1&1)==1)},w.getLengthInBits=function(){return L},w.putBit=function(x){var h=Math.floor(L/8);M.length<=h&&M.push(0),x&&(M[h]|=128>>>L%8),L+=1},w},S=function(M){var L=r.MODE_NUMBER,w=M,x={};x.getMode=function(){return L},x.getLength=function(l){return w.length},x.write=function(l){for(var c=w,$=0;$+2<c.length;)l.put(h(c.substring($,$+3)),10),$+=3;$<c.length&&(c.length-$==1?l.put(h(c.substring($,$+1)),4):c.length-$==2&&l.put(h(c.substring($,$+2)),7))};var h=function(l){for(var c=0,$=0;$<l.length;$+=1)c=c*10+k(l.charAt($));return c},k=function(l){if("0"<=l&&l<="9")return l.charCodeAt(0)-48;throw"illegal char :"+l};return x},et=function(M){var L=r.MODE_ALPHA_NUM,w=M,x={};x.getMode=function(){return L},x.getLength=function(k){return w.length},x.write=function(k){for(var l=w,c=0;c+1<l.length;)k.put(h(l.charAt(c))*45+h(l.charAt(c+1)),11),c+=2;c<l.length&&k.put(h(l.charAt(c)),6)};var h=function(k){if("0"<=k&&k<="9")return k.charCodeAt(0)-48;if("A"<=k&&k<="Z")return k.charCodeAt(0)-65+10;switch(k){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+k}};return x},st=function(M){var L=r.MODE_8BIT_BYTE,w=i.stringToBytes(M),x={};return x.getMode=function(){return L},x.getLength=function(h){return w.length},x.write=function(h){for(var k=0;k<w.length;k+=1)h.put(w[k],8)},x},at=function(M){var L=r.MODE_KANJI,w=i.stringToBytesFuncs.SJIS;if(!w)throw"sjis not supported.";(function(k,l){var c=w(k);if(c.length!=2||(c[0]<<8|c[1])!=l)throw"sjis not supported."})("友",38726);var x=w(M),h={};return h.getMode=function(){return L},h.getLength=function(k){return~~(x.length/2)},h.write=function(k){for(var l=x,c=0;c+1<l.length;){var $=(255&l[c])<<8|255&l[c+1];if(33088<=$&&$<=40956)$-=33088;else if(57408<=$&&$<=60351)$-=49472;else throw"illegal char at "+(c+1)+"/"+$;$=($>>>8&255)*192+($&255),k.put($,13),c+=2}if(c<l.length)throw"illegal char at "+(c+1)},h},bt=function(){var M=[],L={};return L.writeByte=function(w){M.push(w&255)},L.writeShort=function(w){L.writeByte(w),L.writeByte(w>>>8)},L.writeBytes=function(w,x,h){x=x||0,h=h||w.length;for(var k=0;k<h;k+=1)L.writeByte(w[k+x])},L.writeString=function(w){for(var x=0;x<w.length;x+=1)L.writeByte(w.charCodeAt(x))},L.toByteArray=function(){return M},L.toString=function(){var w="";w+="[";for(var x=0;x<M.length;x+=1)x>0&&(w+=","),w+=M[x];return w+="]",w},L},$e=function(){var M=0,L=0,w=0,x="",h={},k=function(c){x+=String.fromCharCode(l(c&63))},l=function(c){if(!(c<0)){if(c<26)return 65+c;if(c<52)return 97+(c-26);if(c<62)return 48+(c-52);if(c==62)return 43;if(c==63)return 47}throw"n:"+c};return h.writeByte=function(c){for(M=M<<8|c&255,L+=8,w+=1;L>=6;)k(M>>>L-6),L-=6},h.flush=function(){if(L>0&&(k(M<<6-L),M=0,L=0),w%3!=0)for(var c=3-w%3,$=0;$<c;$+=1)x+="="},h.toString=function(){return x},h},xe=function(M){var L=M,w=0,x=0,h=0,k={};k.read=function(){for(;h<8;){if(w>=L.length){if(h==0)return-1;throw"unexpected end of file./"+h}var c=L.charAt(w);if(w+=1,c=="=")return h=0,-1;if(c.match(/^\s$/))continue;x=x<<6|l(c.charCodeAt(0)),h+=6}var $=x>>>h-8&255;return h-=8,$};var l=function(c){if(65<=c&&c<=90)return c-65;if(97<=c&&c<=122)return c-97+26;if(48<=c&&c<=57)return c-48+52;if(c==43)return 62;if(c==47)return 63;throw"c:"+c};return k},_e=function(M,L){var w=M,x=L,h=new Array(M*L),k={};k.setPixel=function(b,y,P){h[y*w+b]=P},k.write=function(b){b.writeString("GIF87a"),b.writeShort(w),b.writeShort(x),b.writeByte(128),b.writeByte(0),b.writeByte(0),b.writeByte(0),b.writeByte(0),b.writeByte(0),b.writeByte(255),b.writeByte(255),b.writeByte(255),b.writeString(","),b.writeShort(0),b.writeShort(0),b.writeShort(w),b.writeShort(x),b.writeByte(0);var y=2,P=c(y);b.writeByte(y);for(var O=0;P.length-O>255;)b.writeByte(255),b.writeBytes(P,O,255),O+=255;b.writeByte(P.length-O),b.writeBytes(P,O,P.length-O),b.writeByte(0),b.writeString(";")};var l=function(b){var y=b,P=0,O=0,B={};return B.write=function(Z,Y){if(Z>>>Y)throw"length over";for(;P+Y>=8;)y.writeByte(255&(Z<<P|O)),Y-=8-P,Z>>>=8-P,O=0,P=0;O=Z<<P|O,P=P+Y},B.flush=function(){P>0&&y.writeByte(O)},B},c=function(b){for(var y=1<<b,P=(1<<b)+1,O=b+1,B=$(),Z=0;Z<y;Z+=1)B.add(String.fromCharCode(Z));B.add(String.fromCharCode(y)),B.add(String.fromCharCode(P));var Y=bt(),it=l(Y);it.write(y,O);var ot=0,ct=String.fromCharCode(h[ot]);for(ot+=1;ot<h.length;){var ht=String.fromCharCode(h[ot]);ot+=1,B.contains(ct+ht)?ct=ct+ht:(it.write(B.indexOf(ct),O),B.size()<4095&&(B.size()==1<<O&&(O+=1),B.add(ct+ht)),ct=ht)}return it.write(B.indexOf(ct),O),it.write(P,O),it.flush(),Y.toByteArray()},$=function(){var b={},y=0,P={};return P.add=function(O){if(P.contains(O))throw"dup key:"+O;b[O]=y,y+=1},P.size=function(){return y},P.indexOf=function(O){return b[O]},P.contains=function(O){return typeof b[O]<"u"},P};return k},Ce=function(M,L,w){for(var x=_e(M,L),h=0;h<L;h+=1)for(var k=0;k<M;k+=1)x.setPixel(k,h,w(k,h));var l=bt();x.write(l);for(var c=$e(),$=l.toByteArray(),b=0;b<$.length;b+=1)c.writeByte($[b]);return c.flush(),"data:image/gif;base64,"+c};return i}();(function(){a.stringToBytesFuncs["UTF-8"]=function(i){function r(s){for(var n=[],o=0;o<s.length;o++){var g=s.charCodeAt(o);g<128?n.push(g):g<2048?n.push(192|g>>6,128|g&63):g<55296||g>=57344?n.push(224|g>>12,128|g>>6&63,128|g&63):(o++,g=65536+((g&1023)<<10|s.charCodeAt(o)&1023),n.push(240|g>>18,128|g>>12&63,128|g>>6&63,128|g&63))}return n}return r(i)}})(),function(i){t.exports=i()}(function(){return a})})(ue);var He=ue.exports;const Ee=Ve(He),ze=1,pt=2,Ct=3,Pe=4,Oe=5;function De(t){return{type:"auth",access_token:t}}function Se(){return{type:"supported_features",id:1,features:{coalesce_messages:1}}}function Re(){return{type:"get_states"}}function Be(t,e,a,i,r){const s={type:"call_service",domain:t,service:e,target:i,return_response:r};return a&&(s.service_data=a),s}function Ne(t){const e={type:"subscribe_events"};return t&&(e.event_type=t),e}function qt(t){return{type:"unsubscribe_events",subscription:t}}function Ie(){return{type:"ping"}}function je(t,e){return{type:"result",success:!1,error:{code:t,message:e}}}const he=(t,e,a,i)=>{const[r,s,n]=t.split(".",3);return Number(r)>e||Number(r)===e&&(i===void 0?Number(s)>=a:Number(s)>a)||i!==void 0&&Number(r)===e&&Number(s)===a&&Number(n)>=i},We="auth_invalid",Ue="auth_ok";function Fe(t){if(!t.auth)throw Pe;const e=t.auth;let a=e.expired?e.refreshAccessToken().then(()=>{a=void 0},()=>{a=void 0}):void 0;const i=e.wsUrl;function r(s,n,o){const g=new WebSocket(i);let A=!1;const T=()=>{if(g.removeEventListener("close",T),A){o(pt);return}if(s===0){o(ze);return}const et=s===-1?-1:s-1;setTimeout(()=>r(et,n,o),1e3)},q=async et=>{try{e.expired&&await(a||e.refreshAccessToken()),g.send(JSON.stringify(De(e.accessToken)))}catch(st){A=st===pt,g.close()}},S=async et=>{const st=JSON.parse(et.data);switch(st.type){case We:A=!0,g.close();break;case Ue:g.removeEventListener("open",q),g.removeEventListener("message",S),g.removeEventListener("close",T),g.removeEventListener("error",T),g.haVersion=st.ha_version,he(g.haVersion,2022,9)&&g.send(JSON.stringify(Se())),n(g);break}};g.addEventListener("open",q),g.addEventListener("message",S),g.addEventListener("close",T),g.addEventListener("error",T)}return new Promise((s,n)=>r(t.setupRetry,s,n))}class qe{constructor(e,a){this._handleMessage=i=>{let r=JSON.parse(i.data);Array.isArray(r)||(r=[r]),r.forEach(s=>{const n=this.commands.get(s.id);switch(s.type){case"event":n?n.callback(s.event):(console.warn(`Received event for unknown subscription ${s.id}. Unsubscribing.`),this.sendMessagePromise(qt(s.id)).catch(o=>{}));break;case"result":n&&(s.success?(n.resolve(s.result),"subscribe"in n||this.commands.delete(s.id)):(n.reject(s.error),this.commands.delete(s.id)));break;case"pong":n?(n.resolve(),this.commands.delete(s.id)):console.warn(`Received unknown pong response ${s.id}`);break}})},this._handleClose=async()=>{const i=this.commands;if(this.commandId=1,this.oldSubscriptions=this.commands,this.commands=new Map,this.socket=void 0,i.forEach(n=>{"subscribe"in n||n.reject(je(Ct,"Connection lost"))}),this.closeRequested)return;this.fireEvent("disconnected");const r=Object.assign(Object.assign({},this.options),{setupRetry:0}),s=n=>{setTimeout(async()=>{if(!this.closeRequested)try{const o=await r.createSocket(r);this._setSocket(o)}catch(o){if(this._queuedMessages){const g=this._queuedMessages;this._queuedMessages=void 0;for(const A of g)A.reject&&A.reject(Ct)}o===pt?this.fireEvent("reconnect-error",o):s(n+1)}},Math.min(n,5)*1e3)};this.suspendReconnectPromise&&(await this.suspendReconnectPromise,this.suspendReconnectPromise=void 0,this._queuedMessages=[]),s(0)},this.options=a,this.commandId=2,this.commands=new Map,this.eventListeners=new Map,this.closeRequested=!1,this._setSocket(e)}get connected(){return this.socket!==void 0&&this.socket.readyState==this.socket.OPEN}_setSocket(e){this.socket=e,this.haVersion=e.haVersion,e.addEventListener("message",this._handleMessage),e.addEventListener("close",this._handleClose);const a=this.oldSubscriptions;a&&(this.oldSubscriptions=void 0,a.forEach(r=>{"subscribe"in r&&r.subscribe&&r.subscribe().then(s=>{r.unsubscribe=s,r.resolve()})}));const i=this._queuedMessages;if(i){this._queuedMessages=void 0;for(const r of i)r.resolve()}this.fireEvent("ready")}addEventListener(e,a){let i=this.eventListeners.get(e);i||(i=[],this.eventListeners.set(e,i)),i.push(a)}removeEventListener(e,a){const i=this.eventListeners.get(e);if(!i)return;const r=i.indexOf(a);r!==-1&&i.splice(r,1)}fireEvent(e,a){(this.eventListeners.get(e)||[]).forEach(i=>i(this,a))}suspendReconnectUntil(e){this.suspendReconnectPromise=e}suspend(){if(!this.suspendReconnectPromise)throw new Error("Suspend promise not set");this.socket&&this.socket.close()}reconnect(e=!1){if(this.socket){if(!e){this.socket.close();return}this.socket.removeEventListener("message",this._handleMessage),this.socket.removeEventListener("close",this._handleClose),this.socket.close(),this._handleClose()}}close(){this.closeRequested=!0,this.socket&&this.socket.close()}async subscribeEvents(e,a){return this.subscribeMessage(e,Ne(a))}ping(){return this.sendMessagePromise(Ie())}sendMessage(e,a){if(!this.connected)throw Ct;if(this._queuedMessages){if(a)throw new Error("Cannot queue with commandId");this._queuedMessages.push({resolve:()=>this.sendMessage(e)});return}a||(a=this._genCmdId()),e.id=a,this.socket.send(JSON.stringify(e))}sendMessagePromise(e){return new Promise((a,i)=>{if(this._queuedMessages){this._queuedMessages.push({reject:i,resolve:async()=>{try{a(await this.sendMessagePromise(e))}catch(s){i(s)}}});return}const r=this._genCmdId();this.commands.set(r,{resolve:a,reject:i}),this.sendMessage(e,r)})}async subscribeMessage(e,a,i){this._queuedMessages&&await new Promise((s,n)=>{this._queuedMessages.push({resolve:s,reject:n})});let r;return await new Promise((s,n)=>{const o=this._genCmdId();r={resolve:s,reject:n,callback:e,subscribe:i?.resubscribe!==!1?()=>this.subscribeMessage(e,a):void 0,unsubscribe:async()=>{this.connected&&await this.sendMessagePromise(qt(o)),this.commands.delete(o)}},this.commands.set(o,r);try{this.sendMessage(a,o)}catch{}}),()=>r.unsubscribe()}_genCmdId(){return++this.commandId}}const Ze=t=>t*1e3+Date.now();async function Ge(t,e,a){const i=typeof location<"u"&&location;if(i&&i.protocol==="https:"){const o=document.createElement("a");if(o.href=t,o.protocol==="http:"&&o.hostname!=="localhost")throw Oe}const r=new FormData;e!==null&&r.append("client_id",e),Object.keys(a).forEach(o=>{r.append(o,a[o])});const s=await fetch(`${t}/auth/token`,{method:"POST",credentials:"same-origin",body:r});if(!s.ok)throw s.status===400||s.status===403?pt:new Error("Unable to fetch tokens");const n=await s.json();return n.hassUrl=t,n.clientId=e,n.expires=Ze(n.expires_in),n}class Ye{constructor(e,a){this.data=e,this._saveTokens=a}get wsUrl(){return`ws${this.data.hassUrl.substr(4)}/api/websocket`}get accessToken(){return this.data.access_token}get expired(){return Date.now()>this.data.expires}async refreshAccessToken(){if(!this.data.refresh_token)throw new Error("No refresh_token");const e=await Ge(this.data.hassUrl,this.data.clientId,{grant_type:"refresh_token",refresh_token:this.data.refresh_token});e.refresh_token=this.data.refresh_token,this.data=e,this._saveTokens&&this._saveTokens(e)}async revoke(){if(!this.data.refresh_token)throw new Error("No refresh_token to revoke");const e=new FormData;e.append("token",this.data.refresh_token),await fetch(`${this.data.hassUrl}/auth/revoke`,{method:"POST",credentials:"same-origin",body:e}),this._saveTokens&&this._saveTokens(null)}}function Ke(t,e){return new Ye({hassUrl:t,clientId:null,expires:Date.now()+1e11,refresh_token:"",access_token:e,expires_in:1e11})}const Xe=t=>{let e=[];function a(r){let s=[];for(let n=0;n<e.length;n++)e[n]===r?r=null:s.push(e[n]);e=s}function i(r,s){t=s?r:Object.assign(Object.assign({},t),r);let n=e;for(let o=0;o<n.length;o++)n[o](t)}return{get state(){return t},action(r){function s(n){i(n,!1)}return function(){let n=[t];for(let g=0;g<arguments.length;g++)n.push(arguments[g]);let o=r.apply(this,n);if(o!=null)return o instanceof Promise?o.then(s):s(o)}},setState:i,clearState(){t=void 0},subscribe(r){return e.push(r),()=>{a(r)}}}},Qe=5e3,Zt=(t,e,a,i,r={unsubGrace:!0})=>{if(t[e])return t[e];let s=0,n,o,g=Xe();const A=()=>{if(!a)throw new Error("Collection does not support refresh");return a(t).then(at=>g.setState(at,!0))},T=()=>A().catch(at=>{if(t.connected)throw at}),q=()=>{if(o!==void 0){clearTimeout(o),o=void 0;return}i&&(n=i(t,g)),a&&(t.addEventListener("ready",T),T()),t.addEventListener("disconnected",st)},S=()=>{o=void 0,n&&n.then(at=>{at()}),g.clearState(),t.removeEventListener("ready",A),t.removeEventListener("disconnected",st)},et=()=>{o=setTimeout(S,Qe)},st=()=>{o&&(clearTimeout(o),S())};return t[e]={get state(){return g.state},refresh:A,subscribe(at){s++,s===1&&q();const bt=g.subscribe(at);return g.state!==void 0&&setTimeout(()=>at(g.state),0),()=>{bt(),s--,s||(r.unsubGrace?et():S())}}},t[e]},Je=t=>t.sendMessagePromise(Re()),ta=(t,e,a,i,r,s)=>t.sendMessagePromise(Be(e,a,i,r,s));function ea(t,e){const a=Object.assign({},t.state);if(e.a)for(const i in e.a){const r=e.a[i];let s=new Date(r.lc*1e3).toISOString();a[i]={entity_id:i,state:r.s,attributes:r.a,context:typeof r.c=="string"?{id:r.c,parent_id:null,user_id:null}:r.c,last_changed:s,last_updated:r.lu?new Date(r.lu*1e3).toISOString():s}}if(e.r)for(const i of e.r)delete a[i];if(e.c)for(const i in e.c){let r=a[i];if(!r){console.warn("Received state update for unknown entity",i);continue}r=Object.assign({},r);const{"+":s,"-":n}=e.c[i],o=s?.a||n?.a,g=o?Object.assign({},r.attributes):r.attributes;if(s&&(s.s!==void 0&&(r.state=s.s),s.c&&(typeof s.c=="string"?r.context=Object.assign(Object.assign({},r.context),{id:s.c}):r.context=Object.assign(Object.assign({},r.context),s.c)),s.lc?r.last_updated=r.last_changed=new Date(s.lc*1e3).toISOString():s.lu&&(r.last_updated=new Date(s.lu*1e3).toISOString()),s.a&&Object.assign(g,s.a)),n?.a)for(const A of n.a)delete g[A];o&&(r.attributes=g),a[i]=r}t.setState(a,!0)}const aa=(t,e)=>t.subscribeMessage(a=>ea(e,a),{type:"subscribe_entities"});function ia(t,e){const a=t.state;if(a===void 0)return;const{entity_id:i,new_state:r}=e.data;if(r)t.setState({[r.entity_id]:r});else{const s=Object.assign({},a);delete s[i],t.setState(s,!0)}}async function ra(t){const e=await Je(t),a={};for(let i=0;i<e.length;i++){const r=e[i];a[r.entity_id]=r}return a}const na=(t,e)=>t.subscribeEvents(a=>ia(e,a),"state_changed"),sa=t=>he(t.haVersion,2022,4,0)?Zt(t,"_ent",void 0,aa):Zt(t,"_ent",ra,na),oa=(t,e)=>sa(t).subscribe(e);async function ca(t){const e=Object.assign({setupRetry:0,createSocket:Fe},t),a=await e.createSocket(e);return new qe(a,e)}const zt="pine3_home.token",la="/api/pine3_home";function da(){try{return localStorage.getItem(zt)}catch{return null}}function Gt(t){try{t?localStorage.setItem(zt,t):localStorage.removeItem(zt)}catch{}}async function fe(t,e){const a=await fetch(`${la}${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e??{})}),i=await a.json().catch(()=>({}));if(!a.ok)throw new Error(i.error??i.message??`HTTP ${a.status}`);return i}const ua=()=>fe("/pair/start"),ha=t=>fe("/pair/status",{pair_id:t.pair_id,secret:t.secret});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=Bt(class extends Nt{constructor(t){if(super(t),t.type!==Rt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const a=t.element.classList;for(const i of this.st)i in e||(a.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||this.nt?.has(i)||(r?(a.add(i),this.st.add(i)):(a.remove(i),this.st.delete(i)))}return St}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge="important",fa=" !"+ge,ga=Bt(class extends Nt{constructor(t){if(super(t),t.type!==Rt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,a)=>{const i=t[a];return i==null?e:e+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:a}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?a.removeProperty(i):a[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const s=typeof r=="string"&&r.endsWith(fa);i.includes("-")||s?a.setProperty(i,s?r.slice(0,-11):r,s?ge:""):a[i]=r}}return St}});var pa="M10 10V12H8V10H10M16 12V10H14V12H16M21 14V22H3V14H4V10C4 5.58 7.58 2 12 2S20 5.58 20 10V14H21M7 16H5V20H7V16M11 16H9V20H11V16M11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08M13 14H18V10C18 7.03 15.84 4.56 13 4.08V14M15 16H13V20H15V16M19 16H17V20H19V16Z",va="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z",ma="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",ba="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",wa="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",ya="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z",ka="M3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8V19H19V17H15V19H13V8H5V19H3V8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6M16 10.5V11H18V10.5C18 10.22 17.78 10 17.5 10H16.5C16.22 10 16 10.22 16 10.5M16 14.5V15H18V14.5C18 14.22 17.78 14 17.5 14H16.5C16.22 14 16 14.22 16 14.5Z",$a="M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z",xa="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z",_a="M8.66,13.07C6.92,13.07 5.5,11.66 5.5,9.93C5.5,9.22 5.76,8.54 6.19,8C5.77,7.46 5.5,6.78 5.5,6.07C5.5,4.34 6.93,2.93 8.66,2.93L9.09,2.96C9.56,1.81 10.69,1 12,1C13.31,1 14.44,1.81 14.91,2.96L15.34,2.93C17.07,2.93 18.5,4.34 18.5,6.07C18.5,6.78 18.24,7.46 17.81,8C18.23,8.54 18.5,9.22 18.5,9.93C18.5,11.66 17.07,13.07 15.34,13.07L14.91,13.04C14.44,14.19 13.31,15 12,15C10.69,15 9.56,14.19 9.09,13.04L8.66,13.07M12,13C12.62,13 13.12,12.5 13.14,11.9L13.03,10.81C12.71,10.93 12.36,11 12,11C11.64,11 11.3,10.93 11,10.81L10.86,11.9C10.88,12.5 11.38,13 12,13M15.34,11.07C15.97,11.07 16.5,10.56 16.5,9.92C16.5,9.5 16.23,9.08 15.83,8.89L14.95,8.47C14.83,9.21 14.44,9.85 13.89,10.3L14.7,10.87C14.88,11 15.1,11.07 15.34,11.07M14.69,5.13L13.87,5.69C14.43,6.14 14.82,6.78 14.94,7.5L15.82,7.1C16.23,6.9 16.5,6.5 16.5,6.07C16.5,5.44 15.97,4.93 15.34,4.93C15.11,4.93 14.89,5 14.69,5.13M12,3C11.38,3 10.88,3.5 10.86,4.1L11,5.19C11.3,5.07 11.64,5 12,5C12.36,5 12.71,5.07 13.03,5.19L13.14,4.1C13.12,3.5 12.62,3 12,3M8.66,4.93C8.03,4.93 7.5,5.44 7.5,6.07C7.5,6.5 7.77,6.9 8.17,7.1L9.05,7.5C9.17,6.78 9.56,6.14 10.11,5.69L9.3,5.13C9.12,5 8.9,4.93 8.66,4.93M8.17,8.9C7.77,9.1 7.5,9.5 7.5,9.92C7.5,10.55 8.03,11.06 8.66,11.06C8.89,11.06 9.11,11 9.31,10.86L10.12,10.31C9.56,9.86 9.17,9.22 9.05,8.5L8.17,8.9M12,22A9,9 0 0,1 3,13A9,9 0 0,1 12,22A9,9 0 0,1 21,13A9,9 0 0,1 12,22M14.44,19.56C16.34,18.85 17.85,17.34 18.56,15.44C16.66,16.14 15.15,17.66 14.44,19.56M5.44,15.44C6.15,17.34 7.66,18.85 9.56,19.56C8.86,17.66 7.34,16.15 5.44,15.44Z",Ca="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",Ma="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z",La="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",Aa="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",Ta="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",Va="M19,13H5V11H19V13Z",Ha="M14,19H18V5H14M6,19H10V5H6V19Z",Ea="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z",za="M8,5.14V19.14L19,12.14L8,5.14Z",Pa="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",Oa="M2,15C3.67,14.25 5.33,13.5 7,13.17V5A3,3 0 0,1 10,2C11.31,2 12.42,2.83 12.83,4H10A1,1 0 0,0 9,5V6H14V5A3,3 0 0,1 17,2C18.31,2 19.42,2.83 19.83,4H17A1,1 0 0,0 16,5V14.94C18,14.62 20,13 22,13V15C19.78,15 17.56,17 15.33,17C13.11,17 10.89,15 8.67,15C6.44,15 4.22,16 2,17V15M14,8H9V10H14V8M14,12H9V13C10.67,13.16 12.33,14.31 14,14.79V12M2,19C4.22,18 6.44,17 8.67,17C10.89,17 13.11,19 15.33,19C17.56,19 19.78,17 22,17V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V19Z",Da="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",Sa="M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z",Ra="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z",Ba="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14",Na="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z",Ia="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z",ja="M16,18H18V6H16M6,18L14.5,12L6,6V18Z",Wa="M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z",Ua="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z",Fa="M12 22H6A2 2 0 0 1 8 20V8H2V5H16V8H10V20A2 2 0 0 1 12 22M22 2V22H20V15H15V22H13V14A2 2 0 0 1 15 12H20V2Z",qa="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12",Za="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",Ga="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",Ya="M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z";const z={home:Ma,therm:Ga,bulb:La,shield:Ba,spark:ya,play:za,pause:Ha,next:ja,minus:Va,plus:Pa,close:wa,back:ba,lock:Aa,unlock:Ta,power:Da,room:Za,edit:Ea,resize:Sa,check:ma,restore:Ra},Ka={"mdi:shower":Na,"mdi:silverware-fork-knife":Ia,"mdi:table-chair":Fa,"mdi:sofa":Wa,"mdi:bed":va,"mdi:teddy-bear":qa,"mdi:desk":ka,"mdi:garage":Ca,"mdi:flower":_a,"mdi:balcony":pa,"mdi:pool":Oa,"mdi:washing-machine":Ya,"mdi:door":$a,"mdi:dumbbell":xa,"mdi:stairs":Ua},yt=t=>t&&Ka[t]||z.room;let Xa=0;const pe=t=>`${t}${++Xa}`,tt=t=>j`<svg class="art" viewBox="0 0 60 60" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">${t}</svg>`;function Yt(t,e="#ffcf8a"){const a=pe("l");return tt(j`<defs><radialGradient id=${a} cx="36" cy="40" r="28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${e} stop-opacity=${t/100*.85}/><stop offset="1" stop-color=${e} stop-opacity="0"/></radialGradient></defs>
    <circle cx="36" cy="40" r="28" fill=${`url(#${a})`}/><line x1="36" y1="0" x2="36" y2="22" stroke="#6b717a" stroke-width=".8"/>
    <path d="M25 34 L47 34 L41.5 21 L30.5 21 Z" fill=${t?"#d9c6a3":"#4a4f57"}/><ellipse cx="36" cy="34.5" rx="11" ry="1.7" fill=${t?"#fff2d6":"#3a3e45"}/>`)}function Qa(t){const e=Math.max(0,Math.min(100,100-t)),a=Array.from({length:Math.round(e/11)},(i,r)=>j`<line x1="20" x2="54" y1=${12+r*4.2} y2=${12+r*4.2} stroke="#8796a6" stroke-width=".5"/>`);return tt(j`<rect x="20" y="10" width="34" height="46" rx="2" fill="#2d4a66" opacity=".6"/><circle cx="44" cy="22" r="5" fill="#ffd27a" opacity=".5"/>
    <rect x="20" y="10" width="34" height=${(46*e/100).toFixed(1)} fill="#a9b6c4"/>${a}<rect x="18" y="8" width="38" height="3" rx="1" fill="#5d646e"/>`)}function Ja(t,e="#ff9f43"){const a=t==null?0:Math.max(0,Math.min(1,(t-16)/14));return tt(j`<circle cx="40" cy="36" r="17" fill="#2a2e34" stroke="#454a52"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="2.6" stroke-dasharray=${`${(a*81).toFixed(1)} 82`} transform="rotate(135 40 36)" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${e} stroke-width="7" opacity=".08"/>`)}function ti(t){return tt(j`<rect x="28" y="12" width="24" height="44" rx="3" fill="#3a3f46"/><rect x="31" y="15" width="18" height="38" rx="2" fill="#2b2f35"/>
    <circle cx="34" cy="34" r="1.6" fill=${t?"#ff8a5c":"#5be3a0"}/><rect x=${t?44:38} y="33.2" width="6" height="1.6" rx=".8" fill="#8a919b"/>`)}function ei(t){return tt(j`<ellipse cx="40" cy="50" rx="16" ry="4" fill="#000" opacity=".3"/><ellipse cx="40" cy="44" rx="15" ry="6" fill="#d8dce1"/><rect x="25" y="38" width="30" height="6" fill="#d8dce1"/>
    <ellipse cx="40" cy="38" rx="15" ry="6" fill="#eef0f3"/><circle cx="40" cy="36" r="3.4" fill=${t?"#5be3a0":"#c4c9cf"}/>
    ${t?j`<path d="M10 50 Q20 46 26 48" stroke="#5be3a0" stroke-width=".8" fill="none" stroke-dasharray="1.2 1.2" opacity=".8"/>`:null}`)}function ai(t){if(t)return tt(j`<image href=${t} x="26" y="14" width="30" height="30" preserveAspectRatio="xMidYMid slice" transform="rotate(6 41 29)"/>`);const e=pe("a");return tt(j`<defs><linearGradient id=${e} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3a35f"/><stop offset=".5" stop-color="#d96d6d"/><stop offset=".75" stop-color="#5c4a8a"/><stop offset="1" stop-color="#2e2a54"/></linearGradient></defs>
    <rect x="26" y="14" width="30" height="30" rx="3" fill=${`url(#${e})`} transform="rotate(6 41 29)"/><circle cx="46" cy="22" r="3" fill="#ffe7b8" opacity=".9" transform="rotate(6 41 29)"/>`)}function Kt(t){const e=!/rain|pour|snow|fog|cloudy$|lightning|night/.test(t)||t==="partlycloudy",a=t!=="sunny"&&t!=="clear-night",i=/rain|pour|lightning/.test(t),r=t==="clear-night";return tt(j`${e?j`<circle cx="44" cy="20" r="8" fill="#ffd27a" opacity=".85"/>`:null}
    ${r?j`<path d="M46 12a9 9 0 1 0 6 14 7 7 0 1 1-6-14z" fill="#e8e3c8" opacity=".9"/>`:null}
    ${a?j`<path d="M28 36h20a6 6 0 0 0 .6-12 9 9 0 0 0-17 2.5A5 5 0 0 0 28 36z" fill="#cfd6df"/>`:null}
    ${i?j`<path d="M32 40l-2 6M38 40l-2 6M44 40l-2 6" stroke="#6cc8ff" stroke-width="1.4" stroke-linecap="round"/>`:null}`)}function ii(t){return tt(j`<g transform="translate(40 34)"><g class=${t?"spin":""}>
    ${[0,120,240].map(e=>j`<ellipse cx="0" cy="-8" rx="4" ry="8" fill="#cfd6df" opacity=".85" transform=${`rotate(${e})`}/>`)}
    </g><circle r="2.6" fill="#8a919b"/></g>`)}function ri(t){return tt(j`<rect x="28" y="20" width="24" height="24" rx="6" fill="#3a3f46"/><circle cx="36" cy="32" r="1.8" fill="#1b1e22"/><circle cx="44" cy="32" r="1.8" fill="#1b1e22"/>
    <circle cx="48" cy="24" r="1.4" fill=${t?"#5be3a0":"#5d646e"}/>`)}function ni(t,e){let a="M0 26 L100 26";if(e&&e.length>1){const i=Math.min(...e),s=Math.max(...e)-i||1;a=e.map((o,g)=>[g/(e.length-1)*100,34-(o-i)/s*26]).map(([o,g],A)=>`${A?"L":"M"}${o.toFixed(1)} ${g.toFixed(1)}`).join(" ")}return j`<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d=${`${a} V40 H0Z`} fill=${t} opacity=".12"/><path d=${a} fill="none" stroke=${t} stroke-width="1.4" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity=".85"/></svg>`}function si(){return tt(j`<circle cx="42" cy="34" r="14" fill="#b49cff" opacity=".18"/><path d="M42 22l2.6 7.4L52 32l-7.4 2.6L42 42l-2.6-7.4L32 32l7.4-2.6z" fill="#d9ccff"/><path d="M52 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#ffe2b0"/>`)}const F=t=>t.split(".")[0],ut=t=>!!t&&!["off","unavailable","unknown","closed","locked","idle","standby","docked"].includes(t.state),oi=t=>!t||t.state==="unavailable";function kt(t){if(!t||t.state!=="on")return 0;const e=t.attributes.brightness;return e==null?100:Math.max(1,Math.round(e/255*100))}function Mt(t){const e=t?.attributes.rgb_color,a=t?.attributes.color_mode;if(e&&a&&!["color_temp","brightness","onoff","white"].includes(a))return`rgb(${e.join(",")})`;const i=t?.attributes.color_temp_kelvin;return i?i>=5e3?"#e6f0ff":i>=3800?"#fff1d6":"#ffcf8a":"#ffcf8a"}const lt=t=>t.devices.filter(e=>F(e.id)==="light"&&!e.hidden).map(e=>e.id);function ci(t,e){const a=t.filter(i=>e[i]?.state==="on");return a.length?Math.round(a.reduce((i,r)=>i+kt(e[r]),0)/a.length):0}const Xt={light:"light",climate:"climate",lock:"lock",cover:"cover",media_player:"media",vacuum:"vacuum",fan:"fan",switch:"switch",input_boolean:"switch",outlet:"outlet",sensor:"sensor",binary_sensor:"binary",camera:"camera"};function It(t,e){const a=Xt[t.kind??F(t.id)]??Xt[F(t.id)];if(!a)return null;const i=a==="climate"?"l":a==="media"||a==="camera"?"m":"s";return{key:t.id,kind:a,size:i,name:t.name,sub:e?.name,entity:t.id,room:e}}function Pt(t,e){const a=t.rooms.filter(n=>!n.hidden),i=a.flatMap(n=>n.devices.filter(o=>!o.hidden).map(o=>({d:o,r:n}))),r=n=>i.filter(({d:o})=>(o.kind??F(o.id))===n),s=[];return a.forEach((n,o)=>{const g=lt(n);g.length&&s.push({key:`room-${n.id}`,kind:"room-lights",size:o===0?"m":"s",name:n.name,entities:g,room:n})}),r("climate").forEach(({d:n,r:o},g)=>s.push({key:n.id,kind:"climate",size:g===0?"l":"m",name:n.name,sub:o.name,entity:n.id,room:o})),t.weather&&e[t.weather]&&s.push({key:t.weather,kind:"weather",size:"l",name:"Tempo",entity:t.weather}),r("lock").forEach(({d:n,r:o})=>s.push({key:n.id,kind:"lock",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),r("cover").forEach(({d:n,r:o})=>s.push({key:n.id,kind:"cover",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),r("media_player").sort((n,o)=>+(e[o.d.id]?.state==="playing")-+(e[n.d.id]?.state==="playing")).slice(0,2).forEach(({d:n,r:o})=>s.push({key:n.id,kind:"media",size:"m",name:n.name,sub:o.name,entity:n.id,room:o})),r("vacuum").forEach(({d:n,r:o})=>s.push({key:n.id,kind:"vacuum",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),t.scenes.length&&s.push({key:"scenes",kind:"scenes",size:"m",name:"Cenas",entities:t.scenes.slice(0,6)}),s}const li=[{id:"all",name:"Tudo",kinds:[]},{id:"lights",name:"Luzes",kinds:["light"]},{id:"climate",name:"Clima",kinds:["climate","fan"]},{id:"covers",name:"Estores",kinds:["cover"]},{id:"media",name:"Média",kinds:["media"]},{id:"other",name:"Outros",kinds:["switch","outlet","lock","vacuum","sensor","binary","camera"]}];function di(t){return t.devices.filter(e=>!e.hidden).map(e=>It(e,t)).filter(e=>!!e)}function rt(t,e){const a=t.rooms.filter(o=>!o.hidden).flatMap(o=>o.devices),i=a.filter(o=>F(o.id)==="light"&&e[o.id]?.state==="on").length,r=a.filter(o=>F(o.id)==="lock"&&e[o.id]?.state==="unlocked").length,s=a.filter(o=>F(o.id)==="binary_sensor"&&["door","window","garage_door","opening"].includes(e[o.id]?.attributes.device_class)&&e[o.id]?.state==="on").length,n=t.rooms.map(o=>o.temperature?parseFloat(e[o.temperature]?.state??""):NaN).filter(o=>!Number.isNaN(o));return{lightsOn:i,alerts:r+s,alertText:r?`${r} destrancada${r>1?"s":""}`:s?`${s} aberta${s>1?"s":""}`:"tudo fechado",temp:n.length?`${Math.round(Math.min(...n))}–${Math.round(Math.max(...n))}°`:null}}const K=(t,e=1)=>t.toLocaleString("pt-PT",{maximumFractionDigits:e}),ui=["door","window","garage_door","opening"],ve=t=>t.rooms.filter(e=>!e.hidden).flatMap(e=>e.devices.filter(a=>!a.hidden).map(a=>({d:a,r:e})));function hi(t,e){const a=[],i=ve(t);return i.filter(({d:r})=>F(r.id)==="climate").forEach(({d:r,r:s})=>a.push({key:r.id,kind:"climate",size:"l",name:r.name,sub:s.name,entity:r.id,room:s})),t.weather&&e[t.weather]&&a.push({key:t.weather,kind:"weather",size:"l",name:"Tempo",entity:t.weather}),i.filter(({d:r})=>F(r.id)==="fan").forEach(({d:r,r:s})=>a.push({key:r.id,kind:"fan",size:"s",name:r.name,sub:s.name,entity:r.id,room:s})),t.rooms.filter(r=>!r.hidden).forEach(r=>{r.temperature&&e[r.temperature]&&a.push({key:`t-${r.id}`,kind:"sensor",size:"s",name:r.name,sub:"temperatura",entity:r.temperature,room:r}),r.humidity&&e[r.humidity]&&a.push({key:`h-${r.id}`,kind:"sensor",size:"s",name:r.name,sub:"humidade",entity:r.humidity,room:r})}),a}function fi(t,e){const a=ve(t),i=a.filter(({d:n})=>F(n.id)==="lock"),r=a.filter(({d:n})=>F(n.id)==="binary_sensor"&&[...ui,"motion","occupancy","presence","moisture","smoke","gas"].includes(e[n.id]?.attributes.device_class));r.sort((n,o)=>+(e[o.d.id]?.state==="on")-+(e[n.d.id]?.state==="on"));const s=a.filter(({d:n})=>F(n.id)==="camera");return[...i.map(({d:n,r:o})=>({key:n.id,kind:"lock",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),...r.map(({d:n,r:o})=>({key:n.id,kind:"binary",size:"s",name:n.name,sub:o.name,entity:n.id,room:o})),...s.map(({d:n,r:o})=>({key:n.id,kind:"camera",size:"m",name:n.name,sub:o.name,entity:n.id,room:o}))]}function gi(t,e){return[...t.scenes,...t.scripts].filter(a=>e[a]).map(a=>({key:a,kind:"scene",size:"s",name:e[a].attributes.friendly_name??a,entity:a}))}const pi=["climate","weather","media","scenes","camera","clock"],me=t=>pi.includes(t)?["m","l","xl"]:["s","m","l"];function vi(t,e){for(const a of t.rooms){const i=a.devices.find(r=>r.id===e);if(i)return It(i,a)}return null}function Qt(t,e,a){if(!e)return t;const i=new Map(t.map(o=>[o.key,o])),r=new Set(e.hidden),s=[],n=new Set;for(const o of e.items){if(n.has(o.key)||r.has(o.key))continue;const g=i.get(o.key)??vi(a,o.key);if(!g)continue;n.add(o.key);const A=o.size&&me(g.kind).includes(o.size)?o.size:g.size;s.push({...g,size:A})}for(const o of t)!n.has(o.key)&&!r.has(o.key)&&s.push(o);return s}function mi(t,e,a){const i=new Set(e.items.map(n=>n.key)),r=t.filter(n=>e.hidden.includes(n.key)),s=a.rooms.filter(n=>!n.hidden).flatMap(n=>n.devices.filter(o=>!o.hidden).map(o=>It(o,n))).filter(n=>!!n&&!i.has(n.key)&&!r.some(o=>o.key===n.key)&&!t.some(o=>o.key===n.key&&!e.hidden.includes(o.key)));return[...r,...s]}function jt(t,e,a){return t?e?e===t?t===1?"luz acesa":`${t} luzes acesas`:`${e} de ${t} luzes acesas`:t===1?"luz apagada":"luzes apagadas":`${a} dispositivo${a===1?"":"s"}`}const xt=vt`
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
`;var bi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,U=(t,e,a,i)=>{for(var r=i>1?void 0:i?wi(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,a,r):n(r))||r);return i&&r&&bi(e,a,r),r};const yi=550,Lt=10,At={heat:"Calor",cool:"Frio",heat_cool:"Auto",auto:"Auto",dry:"Seco",fan_only:"Ventilar",off:"Off"},Jt={heating:"a aquecer",cooling:"a arrefecer",idle:"em pausa",off:"desligado",drying:"a secar",fan:"a ventilar"},Tt={"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",hail:"granizo",lightning:"trovoada","lightning-rainy":"trovoada e chuva",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve","snowy-rainy":"chuva e neve",sunny:"sol",windy:"vento","windy-variant":"vento",exceptional:"excecional"},te={cleaning:"a limpar",docked:"na base",returning:"a voltar à base",paused:"em pausa",idle:"parado",error:"erro"},ki={open:"aberto",closed:"fechado",opening:"a abrir",closing:"a fechar"},Vt={yellow:"amarelo",orange:"laranja",red:"vermelho"},ee={yellow:1,orange:2,red:3},$i=10*6e4,xi=10*6e4,ae=[{id:"@clima",name:"Clima",icon:z.therm},{id:"@seguranca",name:"Segurança",icon:z.shield},{id:"@cenas",name:"Cenas",icon:z.spark}],_i=["#ffcf8a","#fff1d6","#ff8a5c","#ff6fae","#b49cff","#6cc8ff","#5be3a0"],D=t=>j`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`;let N=class extends de{constructor(){super(...arguments),this.entities={},this.screenName="",this.canEdit=!1,this.ambient=!1,this.wallpanel=!1,this.editing=null,this.draft=null,this.moving=null,this.saving=!1,this.lastReorder=0,this.view="home",this.category="all",this.sheet=null,this.drag=null,this.now=new Date,this.hourly=[],this.warnings=[],this.history={},this.flash=null,this.historyAt={},this.historyWanted=new Set,this.ipmaAt=0,this.ipmaArea=null,this.forecastAt=0}connectedCallback(){super.connectedCallback(),this.clock=window.setInterval(()=>this.now=new Date,1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clock)}willUpdate(t){t.has("home")&&this.view!=="home"&&!this.view.startsWith("@")&&!this.home.rooms.some(a=>a.id===this.view)&&(this.view="home");const e=this.home?.settings?.ipma_area??null;(e!==this.ipmaArea||e&&Date.now()-this.ipmaAt>xi)&&(this.ipmaArea=e,this.ipmaAt=Date.now(),e&&this.conn?this.loadWarnings(e):this.warnings=[]),this.home?.weather&&Date.now()-this.forecastAt>30*6e4&&this.conn&&(this.forecastAt=Date.now(),this.loadForecast(this.home.weather))}async loadForecast(t){try{const e=await this.conn.sendMessagePromise({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"hourly"},target:{entity_id:t},return_response:!0});this.hourly=(e.response?.[t]?.forecast??[]).slice(1,7).filter((a,i)=>i%2===0)}catch{this.hourly=[]}}updated(){const t=Date.now(),e=[...this.historyWanted].filter(a=>t-(this.historyAt[a]??0)>$i);this.historyWanted.clear(),e.length&&this.conn&&(e.forEach(a=>this.historyAt[a]=t),this.loadHistory(e))}async loadHistory(t){try{const e=await this.conn.sendMessagePromise({type:"history/history_during_period",start_time:new Date(Date.now()-864e5).toISOString(),entity_ids:t,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),a={...this.history};for(const i of t){const r=(e[i]??[]).map(n=>parseFloat(n.s)).filter(n=>!Number.isNaN(n)),s=Math.max(1,Math.ceil(r.length/48));a[i]=r.filter((n,o)=>o%s===0||o===r.length-1)}this.history=a}catch(e){console.warn("Pine3 Home: history",e)}}async loadWarnings(t){try{const e=await this.conn.sendMessagePromise({type:"pine3_home/ipma_warnings",area:t}),a=Date.now();this.warnings=e.warnings.filter(i=>!i.endTime||new Date(i.endTime).getTime()>a).sort((i,r)=>(ee[r.awarenessLevelID]??0)-(ee[i.awarenessLevelID]??0))}catch{}}call(t,e,a,i={}){ta(this.conn,t,e,i,{entity_id:a}).catch(r=>console.warn("Pine3 Home:",r))}toggle(t){const e=F(t),a=this.entities[t];if(e==="lock")return this.call("lock",a?.state==="locked"?"unlock":"lock",t);if(e==="cover")return this.call("cover","toggle",t);if(e==="vacuum")return this.call("vacuum",a?.state==="cleaning"?"return_to_base":"start",t);if(e==="media_player")return this.call("media_player","media_play_pause",t);if(e==="scene"||e==="script")return this.call(e,"turn_on",t);this.call(e==="input_boolean"?"input_boolean":"homeassistant","toggle",t)}level(t){if(this.drag?.key===t.key)return this.drag.value;if(t.kind==="room-lights")return ci(t.entities,this.entities);const e=this.entities[t.entity];return t.kind==="light"?kt(e):t.kind==="cover"?e?.attributes.current_position??(e?.state==="open"?100:0):null}setLevel(t,e){if(e=Math.round(e),t.kind==="room-lights"||t.kind==="light"){const a=t.kind==="light"?t.entity:t.entities;e<=0?this.call("light","turn_off",a):this.call("light","turn_on",a,{brightness_pct:e})}else t.kind==="cover"&&this.call("cover","set_cover_position",t.entity,{position:e})}slidable(t){if(t.kind==="room-lights")return!0;const e=this.entities[t.entity??""];return e?t.kind==="light"?(e.attributes.supported_color_modes??[]).some(a=>a!=="onoff"):t.kind==="cover"?(e.attributes.supported_features&4)===4:!1:!1}down(t,e){if(t.target.closest("button"))return;if(this.editing){this.press={key:e.key,x:t.clientX,y:t.clientY,rect:t.currentTarget.getBoundingClientRect(),dragging:!1,long:!1,timer:0};return}const a=t.currentTarget,i={key:e.key,x:t.clientX,y:t.clientY,rect:a.getBoundingClientRect(),dragging:!1,long:!1,timer:0};i.timer=window.setTimeout(()=>{i.long=!0,this.longPress(e)},yi),this.press=i}move(t,e){const a=this.press;if(!a||a.key!==e.key||a.long)return;if(this.editing)return this.moveInEdit(t,a);const i=t.clientX-a.x,r=t.clientY-a.y;if(!a.dragging){if(Math.abs(r)>Lt&&Math.abs(r)>Math.abs(i))return this.cancel();if(Math.abs(i)<Lt||!this.slidable(e))return;a.dragging=!0,clearTimeout(a.timer),t.currentTarget.setPointerCapture(t.pointerId)}const s=Math.max(0,Math.min(100,(t.clientX-a.rect.left)/a.rect.width*100));this.drag={key:e.key,value:Math.round(s)}}up(t,e){const a=this.press;if(!(!a||a.key!==e.key)){if(clearTimeout(a.timer),this.press=void 0,this.editing){this.moving=null;return}if(!a.long){if(a.dragging){const i=this.drag?.value??0;this.setLevel(e,i),window.setTimeout(()=>{this.drag?.key===e.key&&(this.drag=null)},1500);return}this.tap(e)}}}cancel(){this.press&&clearTimeout(this.press.timer),this.press=void 0,this.moving=null}reset(){this.stopEdit(),this.sheet=null,this.drag=null,this.view="home",this.category="all",this.main()?.scrollTo({top:0})}get busy(){return!!this.editing||!!this.press}main(){return this.renderRoot?.querySelector(".main")??null}arranged(t,e){const a=this.editing===t&&this.draft?this.draft:this.dashboard.layouts?.[t];return Qt(e,a,this.home)}startEdit(t,e){const a=this.dashboard.layouts?.[t];this.draft={items:Qt(e,a,this.home).map(i=>({key:i.key,size:i.size})),hidden:[...a?.hidden??[]]},this.editing=t,this.category="all",this.sheet=null}stopEdit(){this.editing=null,this.draft=null,this.moving=null}async saveLayout(t){const e=this.editing;if(e){this.saving=!0;try{const a=await this.conn.sendMessagePromise({type:"pine3_home/dashboards/layout",dashboard_id:this.dashboard.id,view:e,layout:t});this.dashboard={...this.dashboard,layouts:a.dashboard.layouts},this.stopEdit()}catch(a){console.warn("Pine3 Home: layout",a),alert("Não foi possível guardar. Este ecrã pode não ter permissão para editar este painel.")}finally{this.saving=!1}}}moveInEdit(t,e){if(!e.dragging){if(Math.hypot(t.clientX-e.x,t.clientY-e.y)<Lt)return;e.dragging=!0,this.moving=e.key,t.currentTarget.setPointerCapture(t.pointerId)}const a=this.renderRoot.elementsFromPoint(t.clientX,t.clientY).map(o=>o.closest?.(".w")).find(o=>o&&o.dataset.key&&o.dataset.key!==e.key);if(!a||!this.draft||Date.now()-this.lastReorder<180)return;const i=[...this.draft.items],r=i.findIndex(o=>o.key===e.key),s=i.findIndex(o=>o.key===a.dataset.key);if(r<0||s<0)return;const[n]=i.splice(r,1);i.splice(s,0,n),this.lastReorder=Date.now(),this.draft={...this.draft,items:i}}hideWidget(t){this.draft&&(this.draft={items:this.draft.items.filter(e=>e.key!==t),hidden:[...this.draft.hidden,t]})}resizeWidget(t){if(!this.draft)return;const e=me(t.kind),a=e[(e.indexOf(t.size)+1)%e.length];this.draft={...this.draft,items:this.draft.items.map(i=>i.key===t.key?{...i,size:a}:i)}}addWidget(t){this.draft&&(this.draft={items:[...this.draft.items,{key:t.key,size:t.size}],hidden:this.draft.hidden.filter(e=>e!==t.key)})}editControls(t,e){return this.editing===t?u`<button class="pill" @click=${()=>this.stopEdit()}>Cancelar</button>
        ${this.dashboard.layouts?.[t]?u`<button class="pill" ?disabled=${this.saving} @click=${()=>this.saveLayout(null)}>${D(z.restore)} Repor</button>`:C}
        <button class="pill pri" ?disabled=${this.saving} @click=${()=>this.saveLayout(this.draft)}>${D(z.check)} Concluído</button>`:this.canEdit&&!this.editing?u`<button class="pill icon" aria-label="Editar esta vista" title="Editar" @click=${()=>this.startEdit(t,e)}>${D(z.edit)}</button>`:C}renderPicker(t,e){if(this.editing!==t||!this.draft)return C;const a=mi(e,this.draft,this.home);return u`<div class="picker">
      <div class="phd"><span class="k">Adicionar · toca para pôr no fim</span><span class="k">Arrasta os cartões para mudar a ordem</span></div>
      <div class="prow">${a.length?a.map(i=>u`<button class="pk" @click=${()=>this.addWidget(i)}><span>${i.name}</span><em>${i.room?.name??""}</em></button>`):u`<span class="k">Já está tudo nesta vista.</span>`}</div>
    </div>`}tap(t){switch(t.kind){case"room-lights":{const e=t.entities.some(a=>this.entities[a]?.state==="on");return this.call("light",e?"turn_off":"turn_on",t.entities)}case"climate":case"weather":case"sensor":case"binary":case"scenes":t.entity&&(this.sheet=t.entity);return;case"scene":this.call(F(t.entity),"turn_on",t.entity),this.flash=t.key,window.setTimeout(()=>{this.flash===t.key&&(this.flash=null)},1200);return;case"camera":this.sheet=t.entity;return;case"lock":this.entities[t.entity]?.state!=="locked"?this.call("lock","lock",t.entity):this.sheet=t.entity;return;default:t.entity&&this.toggle(t.entity)}}longPress(t){if(t.kind==="room-lights"&&t.room){this.openRoom(t.room.id);return}t.entity&&(this.sheet=t.entity)}openRoom(t){this.editing&&this.editing!==t&&this.stopEdit(),this.view=t,this.category="all",this.sheet=null}get dark(){return this.dashboard.theme==="claro"?!1:this.dashboard.theme==="auto"?this.entities["sun.sun"]?.state!=="above_horizon":!0}render(){if(!this.home)return C;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(a=>a.id===this.view),e={vd:!0,light:!this.dark,editing:!!this.editing,[`dock-${this.dashboard.dock}`]:!0};return u`<div class=${R(e)}>
      ${this.renderDock()}
      <main class="main">${t?this.renderRoom(t):this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):C}
    </div>`}renderAmbient(){const t=rt(this.home,this.entities),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,i=this.warnings[0],r=this.now.getHours()*60+this.now.getMinutes(),s=(r%7-3)*.8,n=(r%5-2)*.8,o=[t.lightsOn?`${t.lightsOn} luz${t.lightsOn>1?"es":""} acesa${t.lightsOn>1?"s":""}`:null,t.alerts?t.alertText:null].filter(Boolean);return u`<div class="vd amb" role="button" aria-label="Tocar para acordar">
      <div class="ambc" style=${`transform:translate(calc(var(--u) * ${s}), calc(var(--u) * ${n}))`}>
        <div class="atime">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</div>
        <div class="adate">${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</div>
        <div class="arow">
          ${e?u`<span class="awx">${Kt(e.state)}<b>${a!=null?`${Math.round(a)}°`:""}</b>${Tt[e.state]??e.state}</span>`:C}
          ${i?u`<span class=${`ipma ${i.awarenessLevelID}`}><i></i>Aviso ${Vt[i.awarenessLevelID]??""} · ${i.awarenessTypeName.toLowerCase()}</span>`:C}
        </div>
        <div class=${R({astatus:!0,att:t.alerts>0})}>${o.length?o.join(" · "):"Tudo tranquilo em casa"}</div>
      </div>
      <span class="ahint">${this.wallpanel?"Aproxima-te ou toca para acordar":"Toca para acordar"}</span>
    </div>`}renderDock(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(a=>!a.hidden));return u`<nav class="dock" aria-label="Vistas">
      <button class=${R({di:!0,on:this.view==="home"})} @click=${()=>this.openRoom("home")} aria-label="Casa">
        ${D(z.home)}<span class="lb">Casa</span>
      </button>
      <span class="sep"></span>
      <div class="rooms">
        ${t.map(e=>{const a=lt(e).filter(i=>this.entities[i]?.state==="on").length;return u`<button class=${R({di:!0,rm:!0,on:this.view===e.id,lit:a>0})} @click=${()=>this.openRoom(e.id)} aria-label=${e.name}>
            ${a?u`<span class="glow"></span>`:C}${D(yt(e.icon))}<span class="lb">${e.name}</span>
            ${a?u`<span class="bdg">${a}</span>`:C}
          </button>`})}
      </div>
      <span class="sep"></span>
      ${ae.filter(e=>this.viewWidgets(e.id).length).map(e=>{const a=e.id==="@seguranca"?rt(this.home,this.entities).alerts:0;return u`<button class=${R({di:!0,on:this.view===e.id})} @click=${()=>this.openRoom(e.id)} aria-label=${e.name}>
          ${D(e.icon)}<span class="lb">${e.name}</span>${a?u`<span class="bdg alert">${a}</span>`:C}
        </button>`})}
    </nav>`}renderHeader(t,e,a=C){const i=rt(this.home,this.entities),r=this.home.persons.map(s=>this.entities[s]).filter(s=>!!s);return u`<header class="hdr">
      <div class="t"><span>${e}</span><b>${t}</b></div>
      <div class="chips">
        ${this.editing?C:u`${i.temp?u`<span class="chip"><i style="background:#34c759;color:#06210f">${D(z.therm)}</i><span>Clima<small>${i.temp}</small></span></span>`:C}
        <span class="chip"><i style="background:#ffcf8a;color:#2a1a04">${D(z.bulb)}</i><span>Luzes<small>${i.lightsOn?`${i.lightsOn} acesa${i.lightsOn>1?"s":""}`:"apagadas"}</small></span></span>
        <span class="chip"><i style=${i.alerts?"background:#ff8a5c;color:#2a0f04":"background:#5be3a0;color:#06210f"}>${D(z.shield)}</i><span>Segurança<small>${i.alertText}</small></span></span>
        ${r.length?u`<div class="people">${r.map(s=>{const n=s.attributes.entity_picture,o=s.attributes.friendly_name??s.entity_id;return u`<span class="av" title=${o} style=${n?`background-image:url(${n})`:""}>${n?"":o[0]}${s.state==="home"?u`<i></i>`:C}</span>`})}</div>`:C}`}
        ${a}
      </div>
    </header>`}greeting(){const t=this.now.getHours();return`${t<6?"Boa noite":t<13?"Bom dia":t<20?"Boa tarde":"Boa noite"} · ${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}`}renderHome(){const t=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),e=Pt(this.home,this.entities),a=this.arranged("home",e),i=this.editing==="home";return u`${i?this.renderHeader("A editar","Casa",this.editControls("home",e)):this.renderHeader(t,this.greeting(),this.editControls("home",e))}
      ${a.length||i?u`<div class=${R({grid:!0,edit:i})}>${a.map(r=>this.renderWidget(r))}</div>`:u`<p class="empty">Ainda não há divisões com dispositivos. Atribui áreas aos dispositivos no Home Assistant.</p>`}
      ${this.renderPicker("home",e)}`}viewWidgets(t){return t==="@clima"?hi(this.home,this.entities):t==="@seguranca"?fi(this.home,this.entities):t==="@cenas"?gi(this.home,this.entities):[]}renderView(t){const e=ae.find(o=>o.id===t),a=this.viewWidgets(t),i=this.arranged(t,a),r=this.editing===t,s=rt(this.home,this.entities),n=t==="@clima"?s.temp??"":t==="@seguranca"?s.alertText:`${i.length} cenas e rotinas`;return u`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${D(z.back)}</button>
        <b>${e.name}</b><span>${r?"a editar":n}</span>
        <div class="act">${this.editControls(t,a)}</div>
      </div>
      ${i.length||r?u`<div class=${R({grid:!0,edit:r})}>${i.map(o=>this.renderWidget(o))}</div>`:u`<p class="empty">Nada para mostrar aqui.</p>`}
      ${this.renderPicker(t,a)}`}renderRoom(t){const e=di(t),a=this.arranged(t.id,e),i=this.editing===t.id,r=S=>S.length?a.filter(et=>S.includes(et.kind)).length:a.length,s=li.filter(S=>r(S.kinds)>0),n=s.find(S=>S.id===this.category)??s[0],o=!i&&n&&n.kinds.length?a.filter(S=>n.kinds.includes(S.kind)):a,g=lt(t),A=t.temperature?this.entities[t.temperature]?.state:null,T=t.humidity?this.entities[t.humidity]?.state:null,q=[A&&A!=="unavailable"?`${K(parseFloat(A))}°`:null,T&&T!=="unavailable"?`${K(parseFloat(T),0)}%`:null,t.floor].filter(Boolean).join(" · ");return u`<div class="rtop">
        <button class="back" @click=${()=>this.openRoom("home")} aria-label="Voltar à casa">${D(z.back)}</button>
        <b>${t.name}</b><span>${i?"a editar":q}</span>
        <div class="act">
          ${g.length&&!i?u`<button class="pill" @click=${()=>this.call("light","turn_on",g)}>${D(z.bulb)} Acender</button>
              <button class="pill pri" @click=${()=>this.call("light","turn_off",g)}>Apagar</button>`:C}
          ${this.editControls(t.id,e)}
        </div>
      </div>
      ${s.length>2&&!i?u`<div class="cats">${s.map(S=>u`<button class=${R({on:S===n})} @click=${()=>this.category=S.id}>${S.name}<em>${r(S.kinds)}</em></button>`)}</div>`:C}
      <div class=${R({grid:!0,edit:i})}>${o.map(S=>this.renderWidget(S))}</div>
      ${this.renderPicker(t.id,e)}`}renderWidget(t){const e=t.entity?this.entities[t.entity]:void 0;if(t.entity&&t.kind!=="weather"&&!e)return C;const a=this.widgetBody(t,e),i={w:!0,[t.size]:!0,on:(a.on??!1)||this.flash===t.key,att:a.att??!1,off:!!t.entity&&oi(e),dragging:this.drag?.key===t.key,moving:this.moving===t.key,[`k-${t.kind}`]:!0,idle:t.kind==="climate"&&e?.state==="off"},r=!!this.editing;return u`<div class=${R(i)} style=${a.style??""} data-key=${t.key}
        @pointerdown=${s=>this.down(s,t)} @pointermove=${s=>this.move(s,t)}
        @pointerup=${s=>this.up(s,t)} @pointercancel=${()=>this.cancel()} @contextmenu=${s=>s.preventDefault()}>
      ${a.fill!=null?u`<div class="fill" style=${ga({width:`${a.fill}%`,"--fc":a.color??"255,207,138"})}></div>`:C}
      ${a.art??C}
      <span class="nm">${t.name}${a.tag?u`<em>${a.tag}</em>`:C}</span>
      ${a.extra??C}
      <div class="hero" style=${a.heroStyle??""}>${a.hero}${a.small?u`<small>${a.small}</small>`:C}</div>
      ${r?C:a.ctl??C}
      ${r?u`<button class="rmv" aria-label=${`Esconder ${t.name}`} @click=${()=>this.hideWidget(t.key)}>${D(z.minus)}</button>
          <button class="handle" aria-label=${`Mudar o tamanho de ${t.name}`} @click=${()=>this.resizeWidget(t)}>${D(z.resize)}<b>${t.size.toUpperCase()}</b></button>`:C}
    </div>`}widgetBody(t,e){const a=this.level(t);switch(t.kind){case"room-lights":{const i=t.entities.filter(s=>this.entities[s]?.state==="on"),r=i.length?Mt(this.entities[i[0]]):"#ffcf8a";return{hero:a?`${a}%`:"Off",small:i.length?i.map(s=>this.name(s,t.room)).slice(0,2).join(" e "):`${t.entities.length} luz${t.entities.length>1?"es":""}`,tag:t.entities.length>1?`${i.length}/${t.entities.length} luzes`:void 0,art:Yt(a??0,r),fill:a||null,color:ie(r),on:a>0}}case"light":{const i=Mt(e);return{hero:a?`${a}%`:"Off",tag:t.sub&&this.view==="home"?t.sub:void 0,art:Yt(a??0,i),fill:a||null,color:ie(i),on:(a??0)>0,heroStyle:a?`color:${i}`:""}}case"cover":{const i=a??0;return{hero:`${i}%`,small:ki[e.state]??e.state,art:Qa(i),fill:i,color:"170,200,230"}}case"climate":{const i=e.attributes.temperature,r=e.state,s=(e.attributes.hvac_modes??[]).filter(A=>["heat","cool","off","auto","heat_cool"].includes(A)).slice(0,3),n=r==="cool"?"#6cc8ff":r==="off"?"#5d646e":"#ff9f43",o=e.attributes.current_temperature,g=Jt[e.attributes.hvac_action??r]??At[r]??r;return{hero:r==="off"?"Off":i!=null?`${K(i)}°`:"—",small:[g,o!=null?`agora ${K(o)}°`:null].filter(Boolean).join(" · "),tag:t.sub,art:Ja(r==="off"?null:i??null,n),heroStyle:t.size==="l"?"font-size:calc(var(--u)*7)":"",extra:s.length>1?u`<div class="seg">${s.map(A=>u`<button class=${R({on:A===r})} @click=${()=>this.call("climate","set_hvac_mode",t.entity,{hvac_mode:A})}>${At[A]}</button>`)}</div>`:C,ctl:i!=null&&r!=="off"?u`<div class="ctl"><button aria-label="Baixar" @click=${()=>this.stepTemp(t.entity,-1)}>${D(z.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(t.entity,1)}>${D(z.plus)}</button></div>`:C}}case"weather":{const i=e?.state??"",r=e?.attributes.temperature,s=this.warnings[0];return{hero:r!=null?`${Math.round(r)}°`:"—",small:Tt[i]??i,art:Kt(i),extra:s?u`<span class=${`ipma ${s.awarenessLevelID}`}><i></i>Aviso ${Vt[s.awarenessLevelID]??""} · ${s.awarenessTypeName.toLowerCase()}${this.warnings.length>1?` +${this.warnings.length-1}`:""}</span>`:C,ctl:this.hourly.length?u`<div class="hrs">${this.hourly.map(n=>u`<span>${new Date(n.datetime).getHours()}h<b>${Math.round(n.temperature)}°</b>${n.precipitation_probability?`${n.precipitation_probability}%`:""}</span>`)}</div>`:C}}case"lock":{const i=e.state!=="locked";return{hero:i?e.state==="unlocked"?"Destrancada":e.state:"Trancada",small:i?"tocar para trancar":"toque longo para abrir",art:ti(i),att:e.state==="unlocked",heroStyle:"font-size:calc(var(--u)*1.85)"}}case"media":{const i=e.state==="playing",r=e.attributes.media_title??(ut(e)?"Ligado":"Desligado"),s=e.attributes.media_artist??e.attributes.app_name??"";return{hero:r,small:s,tag:t.sub,art:ai(e.attributes.entity_picture),on:i,heroStyle:"font-size:calc(var(--u)*2.4)",ctl:ut(e)?u`<div class="ctl"><button class="pri" aria-label=${i?"Pausa":"Tocar"} @click=${()=>this.call("media_player","media_play_pause",t.entity)}>${D(i?z.pause:z.play)}</button>
                <button aria-label="Seguinte" @click=${()=>this.call("media_player","media_next_track",t.entity)}>${D(z.next)}</button></div>`:C}}case"vacuum":{const i=e.attributes.battery_level;return{hero:i!=null?`${i}%`:te[e.state]??e.state,small:te[e.state]??e.state,art:ei(e.state==="cleaning"),on:e.state==="cleaning"}}case"scenes":return{hero:"",extra:u`<div class="scn">${t.entities.map(i=>u`<button @click=${()=>this.call(F(i),"turn_on",i)}>${D(z.spark)}${this.name(i)}</button>`)}</div>`};case"fan":return{hero:ut(e)?e.attributes.percentage!=null?`${e.attributes.percentage}%`:"On":"Off",art:ii(ut(e)),on:ut(e)};case"switch":case"outlet":{const i=ut(e);return{hero:i?"On":"Off",art:ri(i),on:i}}case"binary":{const i=e.state==="on",r=e.attributes.device_class;return{hero:r&&["door","window","garage_door","opening"].includes(r)?i?"Aberta":"Fechada":r==="motion"||r==="occupancy"?i?"Movimento":"Calmo":i?"On":"Off",att:i&&!!r&&["door","window","garage_door","opening","moisture","smoke","gas"].includes(r),heroStyle:"font-size:calc(var(--u)*2.4)"}}case"sensor":{const i=e.attributes.unit_of_measurement??"",r=parseFloat(e.state),s=e.attributes.device_class;Number.isNaN(r)||this.historyWanted.add(t.entity);const n=this.history[t.entity],o=n&&n.length>1?`${K(Math.min(...n),0)}–${K(Math.max(...n),0)}`:void 0;return{hero:Number.isNaN(r)?e.state:`${K(r)}${i==="°C"?"°":i==="%"?"%":""}`,small:i&&i!=="°C"&&i!=="%"?i:t.sub,tag:o,art:ni(s==="humidity"?"#3db8f5":s==="temperature"?"#ff9f43":"#5be3a0",n)}}case"clock":return{hero:this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}),small:this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})};case"scene":return{hero:"",art:si(),extra:u`<span class="go">${this.flash===t.key?"Ativada":"Tocar para ativar"}</span>`};case"camera":{const i=e.attributes.entity_picture,r=Math.floor(this.now.getTime()/1e4);return{hero:"",tag:t.sub,art:i?u`<img class="cam" src=${`${i}${i.includes("?")?"&":"?"}t=${r}`} alt="" loading="lazy" />`:C}}}}name(t,e){for(const i of this.home.rooms){const r=i.devices.find(s=>s.id===t);if(r)return r.name}const a=this.entities[t]?.attributes.friendly_name??t.split(".")[1];return e&&a.toLowerCase().startsWith(e.name.toLowerCase()+" ")?a.slice(e.name.length+1):a}stepTemp(t,e){const a=this.entities[t],i=a?.attributes.target_temp_step??.5,r=a?.attributes.temperature??20,s=a?.attributes.min_temp??7,n=a?.attributes.max_temp??35;this.call("climate","set_temperature",t,{temperature:Math.max(s,Math.min(n,Math.round((r+e*i)*10)/10))})}renderSheet(t){const e=this.entities[t];if(!e)return C;const a=F(t),i=this.home.rooms.find(s=>s.devices.some(n=>n.id===t)),r=a==="light"?"luz":a==="cover"?"estore":a==="climate"?"clima":a==="lock"?"fechadura":a==="media_player"?"média":a==="weather"?"tempo":"";return u`<div class="scrim" @click=${()=>this.sheet=null}></div>
      <aside class="sheet" role="dialog" aria-label=${this.name(t,i)}>
        <div class="shd"><span class="k">${[i?.name,r].filter(Boolean).join(" · ")}</span>
          <button class="x" aria-label="Fechar" @click=${()=>this.sheet=null}>${D(z.close)}</button></div>
        <h4>${this.name(t,i)}</h4>
        ${this.sheetBody(t,e)}
      </aside>`}bigSlider(t,e,a,i,r){const s=this.drag?.key===t?this.drag.value:e,n=o=>{const g=o.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(o.clientX-g.left)/g.width*100)))};return u`<div class="bigsl" role="slider" aria-label=${i} aria-valuenow=${s} aria-valuemin="0" aria-valuemax="100"
      @pointerdown=${o=>{o.currentTarget.setPointerCapture(o.pointerId),this.drag={key:t,value:n(o)}}}
      @pointermove=${o=>{this.drag?.key===t&&o.buttons&&(this.drag={key:t,value:n(o)})}}
      @pointerup=${o=>{const g=n(o);r(g),this.drag={key:t,value:g},window.setTimeout(()=>{this.drag?.key===t&&(this.drag=null)},1500)}}>
      <i style=${`width:${s}%;background:${a}`}></i><b>${s}%</b></div>`}sheetBody(t,e){const a=F(t);if(a==="light"){const r=e.attributes.supported_color_modes??[],s=r.includes("color_temp"),n=r.some(T=>["hs","rgb","rgbw","rgbww","xy"].includes(T)),o=Mt(e),g=e.attributes.min_color_temp_kelvin??2200,A=e.attributes.max_color_temp_kelvin??6500;return u`${r.some(T=>T!=="onoff")?this.bigSlider(`sheet-${t}`,kt(e),`linear-gradient(90deg,${o},#fff3e0)`,"Brilho",T=>T?this.call("light","turn_on",t,{brightness_pct:T}):this.call("light","turn_off",t)):C}
        ${s?u`<span class="k">Branco</span><div class="tbar" @click=${T=>{const q=T.currentTarget.getBoundingClientRect(),S=(T.clientX-q.left)/q.width;this.call("light","turn_on",t,{color_temp_kelvin:Math.round(g+S*(A-g))})}}></div>`:C}
        ${n?u`<span class="k">Cores</span><div class="pre">${_i.map(T=>u`<button aria-label=${T} style=${`background:${T}`} class=${R({on:T===o})} @click=${()=>this.call("light","turn_on",t,{rgb_color:be(T)})}></button>`)}</div>`:C}
        <div class="foot"><button class="pill" @click=${()=>this.toggle(t)}>${D(z.power)} ${e.state==="on"?"Desligar":"Ligar"}</button></div>`}if(a==="cover"){const r=e.attributes.current_position??(e.state==="open"?100:0);return u`${e.attributes.supported_features&4?this.bigSlider(`sheet-${t}`,r,"linear-gradient(90deg,#a9b6c4,#dfe6ee)","Posição",s=>this.call("cover","set_cover_position",t,{position:s})):C}
        <div class="foot"><button class="pill" @click=${()=>this.call("cover","open_cover",t)}>Abrir</button><button class="pill" @click=${()=>this.call("cover","stop_cover",t)}>Parar</button><button class="pill" @click=${()=>this.call("cover","close_cover",t)}>Fechar</button></div>`}if(a==="climate"){const r=e.attributes.temperature,s=e.attributes.hvac_modes??[];return u`<div class="bigtemp">${r!=null?`${K(r)}°`:"—"}<small>${Jt[e.attributes.hvac_action??e.state]??""}${e.attributes.current_temperature!=null?` · agora ${K(e.attributes.current_temperature)}°`:""}</small></div>
        <div class="ctl big"><button aria-label="Baixar" @click=${()=>this.stepTemp(t,-1)}>${D(z.minus)}</button><button aria-label="Subir" @click=${()=>this.stepTemp(t,1)}>${D(z.plus)}</button></div>
        <span class="k">Modo</span><div class="seg wide">${s.map(n=>u`<button class=${R({on:n===e.state})} @click=${()=>this.call("climate","set_hvac_mode",t,{hvac_mode:n})}>${At[n]??n}</button>`)}</div>`}if(a==="lock"){const r=e.state==="locked";return u`<div class="bigtemp">${r?"Trancada":e.state==="unlocked"?"Destrancada":e.state}</div>
        <div class="foot">${r?u`<button class="pill warn" @click=${()=>{this.call("lock","unlock",t),this.sheet=null}}>${D(z.unlock)} Destrancar</button>`:u`<button class="pill pri" @click=${()=>this.call("lock","lock",t)}>${D(z.lock)} Trancar</button>`}</div>`}if(a==="media_player"){const r=Math.round((e.attributes.volume_level??0)*100);return u`<div class="bigtemp" style="font-size:calc(var(--u)*2.6)">${e.attributes.media_title??e.state}<small>${e.attributes.media_artist??""}</small></div>
        ${e.attributes.volume_level!=null?this.bigSlider(`vol-${t}`,r,"linear-gradient(90deg,#3db8f5,#9be0ff)","Volume",s=>this.call("media_player","volume_set",t,{volume_level:s/100})):C}
        <div class="foot"><button class="pill pri" @click=${()=>this.call("media_player","media_play_pause",t)}>${D(e.state==="playing"?z.pause:z.play)} ${e.state==="playing"?"Pausa":"Tocar"}</button>
          <button class="pill" @click=${()=>this.call("media_player","media_next_track",t)}>${D(z.next)}</button>
          <button class="pill" @click=${()=>this.toggle(t)}>${D(z.power)}</button></div>`}if(a==="camera"){const r=e.attributes.entity_picture;return r?u`<img class="camlg" src=${`${r}${r.includes("?")?"&":"?"}t=${Math.floor(this.now.getTime()/1e4)}`} alt=${this.name(t)} />`:u`<p class="k">Sem imagem</p>`}if(a==="weather"){const r=o=>new Date(o).toLocaleString("pt-PT",{weekday:"short",hour:"2-digit",minute:"2-digit"}),s=e.attributes.temperature,n=[e.attributes.humidity!=null?`${e.attributes.humidity}%`:null,e.attributes.wind_speed!=null?`vento ${K(e.attributes.wind_speed,0)} ${e.attributes.wind_speed_unit??""}`:null].filter(Boolean);return u`<div class="bigtemp">${s!=null?`${Math.round(s)}°`:"—"}<small>${[Tt[e.state]??e.state,...n].join(" · ")}</small></div>
        <div class="hrs">${this.hourly.map(o=>u`<span>${new Date(o.datetime).getHours()}h<b>${Math.round(o.temperature)}°</b>${o.precipitation_probability?`${o.precipitation_probability}%`:""}</span>`)}</div>
        ${this.warnings.map(o=>u`<div class=${`warn ${o.awarenessLevelID}`}><b>Aviso ${Vt[o.awarenessLevelID]??""} · ${o.awarenessTypeName}</b>
          <span>${r(o.startTime)} → ${r(o.endTime)}</span>${o.text?u`<p>${o.text}</p>`:C}</div>`)}
        ${this.home.settings?.ipma_area?C:u`<p class="hint">Escolhe a área do IPMA no painel Pine3 Home para ver os avisos.</p>`}`}const i=e.attributes.unit_of_measurement??"";return u`<div class="bigtemp">${e.state}${i?` ${i}`:""}</div>
      ${["switch","light","fan","input_boolean","vacuum"].includes(a)?u`<div class="foot"><button class="pill pri" @click=${()=>this.toggle(t)}>${D(z.power)} ${ut(e)?"Desligar":"Ligar"}</button></div>`:C}`}};N.styles=xt;U([dt({attribute:!1})],N.prototype,"home",2);U([dt({attribute:!1})],N.prototype,"entities",2);U([dt({attribute:!1})],N.prototype,"dashboard",2);U([dt({attribute:!1})],N.prototype,"conn",2);U([dt()],N.prototype,"screenName",2);U([dt({type:Boolean})],N.prototype,"canEdit",2);U([dt({type:Boolean})],N.prototype,"ambient",2);U([dt({type:Boolean})],N.prototype,"wallpanel",2);U([W()],N.prototype,"editing",2);U([W()],N.prototype,"draft",2);U([W()],N.prototype,"moving",2);U([W()],N.prototype,"saving",2);U([W()],N.prototype,"view",2);U([W()],N.prototype,"category",2);U([W()],N.prototype,"sheet",2);U([W()],N.prototype,"drag",2);U([W()],N.prototype,"now",2);U([W()],N.prototype,"hourly",2);U([W()],N.prototype,"warnings",2);U([W()],N.prototype,"history",2);U([W()],N.prototype,"flash",2);N=U([mt("pine3-vidro")],N);function be(t){const e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function ie(t){if(t.startsWith("#"))return be(t).join(",");const e=t.match(/\d+/g);return e?e.slice(0,3).join(","):"255,207,138"}var Ci=Object.getOwnPropertyDescriptor,Mi=(t,e,a,i)=>{for(var r=i>1?void 0:i?Ci(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r};const re=t=>j`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`,Li=[{id:"home",name:"Casa",color:"#ffd166",icon:z.home},{id:"@divisoes",name:"Divisões",color:"#d9f2e3",icon:z.room},{id:"@clima",name:"Clima",color:"#ffb08a",icon:z.therm},{id:"@seguranca",name:"Segurança",color:"#bfe0ff",icon:z.shield},{id:"@cenas",name:"Cenas",color:"#ffd0c2",icon:z.spark}],ne=["#ffd166","#d9f2e3","#c9b8ff","#ffd0c2","#bfe0ff","#ffb08a","#e9f5a8"],se={key:"clock",kind:"clock",size:"l",name:""};let Ot=class extends N{render(){if(!this.home)return C;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(a=>a.id===this.view),e={vd:!0,bento:!0,editing:!!this.editing};return u`<div class=${R(e)}>
      ${this.renderPills()}
      <main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderRooms():this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):C}
    </div>`}renderPills(){const t=this.home.rooms.some(i=>i.id===this.view),e=rt(this.home,this.entities).alerts,a=Li.filter(i=>i.id==="home"||i.id==="@divisoes"||this.viewWidgets(i.id).length);return u`<nav class="bnav" aria-label="Vistas">
      ${a.map(i=>{const r=this.view===i.id||i.id==="@divisoes"&&t;return u`<button class=${R({on:r})} style=${`--c:${i.color}`} @click=${()=>this.openRoom(i.id)}>
          ${re(i.icon)}${i.name}${i.id==="@seguranca"&&e?u`<span class="bb">${e}</span>`:C}
        </button>`})}
      ${this.view==="home"?u`<span class="btools">${this.editControls("home",[se,...Pt(this.home,this.entities)])}</span>`:C}
      <span class="clk">${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</span>
    </nav>`}renderHome(){const t=[se,...Pt(this.home,this.entities)],e=this.arranged("home",t),a=this.editing==="home";return u`<div class=${R({grid:!0,edit:a})}>${e.map(i=>this.renderWidget(i))}</div>
      ${this.renderPicker("home",t)}`}renderRooms(){const t=this.home.rooms.filter(e=>!e.hidden&&e.devices.some(a=>!a.hidden));return u`<div class="grid">${t.map((e,a)=>{const i=lt(e),r=i.filter(n=>this.entities[n]?.state==="on").length,s=e.temperature?parseFloat(this.entities[e.temperature]?.state??""):NaN;return u`<button class=${R({w:!0,s:!0,room:!0,dim:!r})} style=${`--rc:${ne[a%ne.length]}`} @click=${()=>this.openRoom(e.id)}>
        <span class="nm">${re(yt(e.icon))}${Number.isNaN(s)?C:u`<em>${K(s)}°</em>`}</span>
        <div class="hero">${e.name}<small>${jt(i.length,r,e.devices.length)}</small></div>
      </button>`})}</div>`}};Ot.styles=[xt,vt`
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
  `];Ot=Mi([mt("pine3-bento")],Ot);var Ai=Object.getOwnPropertyDescriptor,Ti=(t,e,a,i)=>{for(var r=i>1?void 0:i?Ai(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(r)||r);return r};const gt=t=>j`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d=${t} fill="currentColor"/></svg>`,oe={home:"Casa","@divisoes":"Divisões","@clima":"Clima","@seguranca":"Segurança","@cenas":"Cenas"},Vi=70,Hi=j`<svg viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 22 Q18 8 36 18 T70 14 T100 18 V46 H0Z" fill="#3c3552" opacity=".85"/>
  <path d="M0 30 Q22 18 46 28 T100 26 V46 H0Z" fill="#252a40"/>
  <path d="M0 38 Q30 30 60 36 T100 34 V46 H0Z" fill="#171b2a"/></svg>`;let Dt=class extends N{get order(){return["home","@divisoes",...["@clima","@seguranca","@cenas"].filter(t=>this.viewWidgets(t).length)]}get current(){return this.home.rooms.some(t=>t.id===this.view)?"@divisoes":this.view}step(t){const e=this.order,a=Math.max(0,e.indexOf(this.current));this.openRoom(e[(a+t+e.length)%e.length])}swipeDown(t){const e=t.target;this.editing||this.sheet||e.closest(".w, button, .sheet, .picker, .bigsl")||(this.swipe={x:t.clientX,y:t.clientY,id:t.pointerId})}swipeUp(t){const e=this.swipe;if(this.swipe=void 0,!e||e.id!==t.pointerId)return;const a=t.clientX-e.x;Math.abs(a)>Vi&&Math.abs(a)>Math.abs(t.clientY-e.y)*1.5&&this.step(a<0?1:-1)}render(){if(!this.home)return C;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(n=>n.id===this.view),e=rt(this.home,this.entities).lightsOn>0,a=this.view==="home",i={vd:!0,moldura:!0,dim:!e,editing:!!this.editing},r=this.order,s=this.current;return u`<div class=${R(i)} @pointerdown=${n=>this.swipeDown(n)} @pointerup=${n=>this.swipeUp(n)}
        @pointercancel=${()=>this.swipe=void 0}>
      <div class="hills">${Hi}</div>
      ${a?this.renderFrame():u`<div class="panel"><main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?this.renderRoomList():this.renderView(this.view)}</main></div>`}
      <div class="pager">
        <b>${t?t.name:oe[s]??""}</b>
        <div class="dots">${r.map(n=>u`<button class=${R({on:n===s})} aria-label=${oe[n]} @click=${()=>this.openRoom(n)}></button>`)}</div>
      </div>
      ${this.editing?C:u`<button class="edge l" aria-label="Vista anterior" @click=${()=>this.step(-1)}>${gt(z.back)}</button>
          <button class="edge r" aria-label="Vista seguinte" @click=${()=>this.step(1)}>${gt(z.back)}</button>`}
      ${a?u`<span class="hint">desliza para o lado para mudar de vista</span>`:C}
      ${this.sheet?this.renderSheet(this.sheet):C}
    </div>`}renderFrame(){const t=rt(this.home,this.entities),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,i=this.warnings[0],r=this.home.rooms.filter(T=>!T.hidden&&lt(T).length),s=this.home.rooms.flatMap(T=>T.devices).find(T=>!T.hidden&&F(T.id)==="climate"),n=this.home.rooms.flatMap(T=>T.devices).find(T=>!T.hidden&&F(T.id)==="lock"),o=s?this.entities[s.id]:void 0,g=n?this.entities[n.id]:void 0,A=[t.lightsOn?`${t.lightsOn} luz${t.lightsOn>1?"es":""} acesa${t.lightsOn>1?"s":""}`:"luzes apagadas",t.alerts?t.alertText:null].filter(Boolean);return u`<div class="tl">
        <b>${this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"})}</b>
        <span>${this.now.toLocaleDateString("pt-PT",{weekday:"long",day:"numeric",month:"long"})}</span>
      </div>
      <div class="tr">
        ${e?u`<b>${a!=null?`${Math.round(a)}°`:""}</b>${this.weatherWord(e.state)}<br />`:C}
        ${A.join(" · ")}
        ${i?u`<br /><span class=${`ipma ${i.awarenessLevelID}`}><i></i>Aviso ${{yellow:"amarelo",orange:"laranja",red:"vermelho"}[i.awarenessLevelID]??""} · ${i.awarenessTypeName.toLowerCase()}</span>`:C}
      </div>
      <div class="strip">
        ${r.map(T=>{const q=lt(T).filter(S=>this.entities[S]?.state==="on").length;return u`<button class=${R({q:!0,on:q>0})} @click=${()=>this.openRoom(T.id)}>
            <i>${gt(yt(T.icon))}</i><span>${T.name}<small>${q?`${q} luz${q>1?"es":""}`:"apagada"}</small></span>
          </button>`})}
        ${s&&o?u`<button class=${R({q:!0,on:o.state!=="off"})} @click=${()=>this.openRoom("@clima")}>
              <i>${gt(z.therm)}</i><span>${o.state==="off"?"Off":`${K(o.attributes.temperature??0)}°`}<small>clima</small></span>
            </button>`:C}
        ${n&&g?u`<button class=${R({q:!0,alert:g.state==="unlocked"})}
                @click=${()=>g.state==="locked"?this.sheet=n.id:this.call("lock","lock",n.id)}>
              <i>${gt(g.state==="locked"?z.lock:z.unlock)}</i><span>${n.name}<small>${g.state==="locked"?"trancada":"destrancada · tocar"}</small></span>
            </button>`:C}
      </div>`}weatherWord(t){return{"clear-night":"Céu limpo",cloudy:"Nublado",fog:"Nevoeiro",lightning:"Trovoada","lightning-rainy":"Trovoada e chuva",partlycloudy:"Pouco nublado",pouring:"Chuva forte",rainy:"Chuva",snowy:"Neve",sunny:"Sol",windy:"Vento"}[t]??t}renderRoomList(){const t=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden)),e=rt(this.home,this.entities).lightsOn;return u`<div class="rtop"><b>Divisões</b><span>${e?`${e} luz${e>1?"es":""} acesa${e>1?"s":""}`:"tudo apagado"}</span></div>
      <div class="grid">${t.map(a=>{const i=lt(a),r=i.filter(n=>this.entities[n]?.state==="on").length,s=a.temperature?parseFloat(this.entities[a.temperature]?.state??""):NaN;return u`<button class=${R({w:!0,s:!0,rc:!0,on:r>0})} @click=${()=>this.openRoom(a.id)}>
          <span class="nm">${a.name}${Number.isNaN(s)?C:u`<em>${K(s)}°</em>`}</span>
          <div class="hero">${gt(yt(a.icon))}<small>${jt(i.length,r,a.devices.length)}</small></div>
        </button>`})}</div>`}};Dt.styles=[xt,vt`
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
  `];Dt=Ti([mt("pine3-moldura")],Dt);var Ei=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,we=(t,e,a,i)=>{for(var r=i>1?void 0:i?zi(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,a,r):n(r))||r);return i&&r&&Ei(e,a,r),r};const Pi=[{id:"home",name:"Casa"},{id:"@divisoes",name:"Divisões"},{id:"@clima",name:"Clima"},{id:"@seguranca",name:"Segurança"},{id:"@cenas",name:"Cenas"}],Oi=["nenhuma","uma","duas","três","quatro","cinco","seis","sete","oito","nove","dez"],Di={yellow:"amarelo",orange:"laranja",red:"vermelho"};let $t=class extends N{constructor(){super(...arguments),this.open=null}get pages(){return Pi.filter(t=>t.id==="home"||t.id==="@divisoes"||this.viewWidgets(t.id).length)}render(){if(!this.home)return C;if(this.ambient)return this.renderAmbient();const t=this.home.rooms.find(r=>r.id===this.view),e=this.pages,a=t?"@divisoes":this.view,i=Math.max(0,e.findIndex(r=>r.id===a));return u`<div class=${R({vd:!0,editorial:!0,editing:!!this.editing})}>
      <nav class="toc" aria-label="Índice">
        ${e.map(r=>u`<button class=${R({on:r.id===a})} @click=${()=>this.openRoom(r.id)}>${r.name}</button>`)}
        <span class="no">N.º ${i+1} / ${e.length}</span>
      </nav>
      <main class="main">${t?this.renderRoom(t):this.view==="@divisoes"?u`<div class="rtop"><b>Divisões</b><span>${this.lightsLine()}</span></div>${this.renderList(!0)}`:this.view.startsWith("@")?this.renderView(this.view):this.renderHome()}</main>
      ${this.sheet?this.renderSheet(this.sheet):C}
    </div>`}lightsLine(){const t=rt(this.home,this.entities).lightsOn;return t?`${t} luz${t>1?"es":""} acesa${t>1?"s":""}`:"tudo apagado"}sentence(){const t=rt(this.home,this.entities),e=this.home.rooms.map(A=>A.temperature?parseFloat(this.entities[A.temperature]?.state??""):NaN).filter(A=>!Number.isNaN(A)),a=e.length?Math.round(e.reduce((A,T)=>A+T,0)/e.length):null,i=t.lightsOn>=4?"acolhedora":t.lightsOn?"calma":"às escuras",r=`${Oi[t.lightsOn]??t.lightsOn} ${t.lightsOn===1?"luz":"luzes"}`,s=this.home.rooms.flatMap(A=>A.devices).find(A=>!A.hidden&&F(A.id)==="lock"),n=s?this.entities[s.id]?.state:void 0,o=s&&n?n==="locked"?u`a ${s.name.toLowerCase()} trancada`:u`a ${s.name.toLowerCase()} <em>ainda destrancada</em>`:null,g=[r,a!=null?`${a} graus`:null].filter(Boolean).join(", ");return u`A casa está <em>${i}</em>: ${g}${o?u`, e ${o}`:C}.`}renderHome(){const t=this.now.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"}).split(":"),e=this.home.weather?this.entities[this.home.weather]:void 0,a=e?.attributes.temperature,i=this.warnings[0],r=[...this.home.scenes,...this.home.scripts].filter(n=>this.entities[n]).slice(0,4),s=this.home.persons.map(n=>this.entities[n]).filter(n=>n?.state==="home");return u`<div class="ed">
      <div class="left">
        <div class="ttl">${t[0]}<em>:</em>${t[1]}</div>
        <div class="sub">${this.sentence()}</div>
        ${r.length?u`<div class="scn">${r.map(n=>u`<button class=${R({on:this.flash===n})} @click=${()=>this.tap({key:n,kind:"scene",size:"s",name:"",entity:n})}>
              ${(this.entities[n].attributes.friendly_name??n).toLowerCase()}</button>`)}</div>`:C}
        <div class="meta">
          ${e?u`<div>Lá fora<b>${a!=null?`${Math.round(a)}°, `:""}${this.weatherWord(e.state)}</b></div>`:C}
          ${i?u`<div class="warnm">Aviso ${Di[i.awarenessLevelID]??""}<b>${i.awarenessTypeName.toLowerCase()}</b></div>`:C}
          ${s.length?u`<div>Em casa<b>${s.map(n=>(n.attributes.friendly_name??"").split(" ")[0]).join(", ")}</b></div>`:C}
        </div>
      </div>
      ${this.renderList(!1)}
    </div>`}weatherWord(t){return{"clear-night":"céu limpo",cloudy:"nublado",fog:"nevoeiro",lightning:"trovoada","lightning-rainy":"trovoada",partlycloudy:"pouco nublado",pouring:"chuva forte",rainy:"chuva",snowy:"neve",sunny:"sol",windy:"vento"}[t]??t}renderList(t){const e=this.home.rooms.filter(a=>!a.hidden&&a.devices.some(i=>!i.hidden));return u`<div class=${R({list:!0,full:t})}>${e.map(a=>this.renderRow(a))}</div>`}renderRow(t){const e=lt(t),a=e.filter(g=>this.entities[g]?.state==="on").length,i=t.temperature?parseFloat(this.entities[t.temperature]?.state??""):NaN,r=t.devices.find(g=>F(g.id)==="lock"),s=r&&this.entities[r.id]?.state==="unlocked",n=this.open===t.id,o=`${jt(e.length,a,t.devices.length)}${Number.isNaN(i)?"":` · ${K(i,0)}°`}`;return u`<div class=${R({r:!0,on:a>0})}>
      <div class="h">
        <button class="nmb" aria-expanded=${n} @click=${()=>this.open=n?null:t.id}>${t.name}</button>
        <span>${o}</span>
        ${s?u`<button class="tg warn" @click=${()=>this.call("lock","lock",r.id)}>trancar</button>`:e.length?u`<button class="tg" @click=${()=>this.call("light",a?"turn_off":"turn_on",e)}>${a?"on":"off"}</button>`:u`<button class="tg" @click=${()=>this.openRoom(t.id)}>abrir</button>`}
      </div>
      ${n?u`<div class="ctrls">
            ${e.map(g=>this.lineControl(g,t))}
            <button class="more" @click=${()=>this.openRoom(t.id)}>ver tudo em ${t.name.toLowerCase()} →</button>
          </div>`:C}
    </div>`}lineControl(t,e){const a=this.entities[t],i=`line-${t}`,r=this.drag?.key===i?this.drag.value:kt(a),s=n=>{const o=n.currentTarget.getBoundingClientRect();return Math.round(Math.max(0,Math.min(100,(n.clientX-o.left)/o.width*100)))};return u`<div class="lc">
      <span>${this.name(t,e)}</span><b>${r?`${r}%`:"—"}</b>
      <div class="line" role="slider" aria-label=${this.name(t,e)} aria-valuenow=${r} aria-valuemin="0" aria-valuemax="100"
        @pointerdown=${n=>{n.currentTarget.setPointerCapture(n.pointerId),this.drag={key:i,value:s(n)}}}
        @pointermove=${n=>{this.drag?.key===i&&n.buttons&&(this.drag={key:i,value:s(n)})}}
        @pointerup=${n=>{const o=s(n);this.call("light",o?"turn_on":"turn_off",t,o?{brightness_pct:o}:{}),this.drag={key:i,value:o},window.setTimeout(()=>{this.drag?.key===i&&(this.drag=null)},1500)}}><i style=${`width:${r}%`}></i></div>
    </div>`}};$t.styles=[xt,vt`
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
  `];we([W()],$t.prototype,"open",2);$t=we([mt("pine3-editorial")],$t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=Symbol.for(""),Si=t=>{if(t?.r===ye)return t?._$litStatic$},Ri=t=>({_$litStatic$:t,r:ye}),ce=new Map,Bi=t=>(e,...a)=>{const i=a.length;let r,s;const n=[],o=[];let g,A=0,T=!1;for(;A<i;){for(g=e[A];A<i&&(s=a[A],(r=Si(s))!==void 0);)g+=r+e[++A],T=!0;A!==i&&o.push(s),n.push(g),A++}if(A===i&&n.push(e[i]),T){const q=n.join("$$lit$$");(e=ce.get(q))===void 0&&(n.raw=n,ce.set(q,e=n)),a=o}return t(e,...a)},Ni=Bi(u);function ke(){const t=window.Pine3Wallpanel;return/Pine3Wallpanel\/\d+/.test(navigator.userAgent)&&t&&typeof t.version=="function"?t:null}function Ii(t){const e=a=>{const i=a.detail?.type;(i==="motion"||i==="sleep"||i==="wake")&&t(i)};return window.addEventListener("pine3wallpanel",e),()=>window.removeEventListener("pine3wallpanel",e)}const ji=.12,Wi=.5;let le=null;function Ui(t,e,a){const i=ke();if(!i)return;let r=-1;if(t&&e!=="off"){const s=new Date().getHours(),n=a??(s<7||s>=21);r=e==="low"||n?ji:Wi}if(r!==le){le=r;try{i.setBrightness(r)}catch(s){console.warn("Pine3 Home: Pine3 Wallpanel",s)}}}var Fi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,nt=(t,e,a,i)=>{for(var r=i>1?void 0:i?qi(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,a,r):n(r))||r);return i&&r&&Fi(e,a,r),r};const Zi={vidro:"pine3-vidro",bento:"pine3-bento",moldura:"pine3-moldura",editorial:"pine3-editorial"},Gi=2e3,Yi="/pine3-home";let J=class extends de{constructor(){super(...arguments),this.phase="starting",this.error="",this.errorDetail="",this.entities={},this.now=new Date,this.unsubs=[],this.ambient=!1,this.lastActivity=Date.now(),this.onActivity=t=>this.activity(t)}connectedCallback(){super.connectedCallback(),this.clockTimer=window.setInterval(()=>this.now=new Date,15e3),window.addEventListener("pointerdown",this.onActivity,!0),window.addEventListener("keydown",this.onActivity,!0),this.idleTimer=window.setInterval(()=>this.checkIdle(),5e3),this.offWallpanel=Ii(e=>{e==="sleep"&&(this.ambient=!1,this.vidro?.reset()),this.activity()});const t=da();t?this.connect(t):this.beginPairing()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clockTimer),clearInterval(this.idleTimer),window.removeEventListener("pointerdown",this.onActivity,!0),window.removeEventListener("keydown",this.onActivity,!0),this.offWallpanel?.(),clearTimeout(this.pollTimer),this.teardown()}teardown(){this.unsubs.forEach(t=>t()),this.unsubs=[],this.conn?.close(),this.conn=void 0}get vidro(){return this.renderRoot.querySelector("pine3-vidro, pine3-bento, pine3-moldura, pine3-editorial")}activity(t){this.lastActivity=Date.now(),this.ambient&&(this.ambient=!1,t&&(t.stopPropagation(),t.preventDefault()))}checkIdle(){if(this.phase!=="ready"||this.ambient||!this.me)return;const t=this.me.dashboard.ambient_after??2;!t||this.vidro?.busy||Date.now()-this.lastActivity>t*6e4&&(this.ambient=!0,this.vidro?.reset())}updated(){const t=this.entities["sun.sun"]?.state;Ui(this.ambient,this.me?.dashboard.ambient_brightness,t?t==="below_horizon":null)}async beginPairing(){clearTimeout(this.pollTimer),this.phase="pairing",this.pair=void 0;try{this.pair=await ua(),this.poll()}catch(t){this.error=t.message==="too_many"?"Há demasiados códigos à espera. Tenta daqui a pouco.":"Não foi possível pedir um código.",this.pollTimer=window.setTimeout(()=>this.beginPairing(),1e4)}}poll(){this.pollTimer=window.setTimeout(async()=>{if(this.pair){try{const t=await ha(this.pair);if(t.status==="approved"){Gt(t.token),this.connect(t.token);return}if(t.status==="expired"){this.beginPairing();return}}catch{}this.poll()}},Gi)}async connect(t){this.phase="connecting",this.teardown();try{const e=await ca({auth:Ke(location.origin,t)});this.conn=e,this.me=await e.sendMessagePromise({type:"pine3_home/me"}),this.home=await e.sendMessagePromise({type:"pine3_home/home"}),this.unsubs.push(oa(e,a=>this.entities=a)),this.unsubs.push(await e.subscribeMessage(async a=>{this.home=a;try{this.me=await e.sendMessagePromise({type:"pine3_home/me"})}catch{}},{type:"pine3_home/subscribe"})),e.addEventListener("ready",async()=>{this.me=await e.sendMessagePromise({type:"pine3_home/me"})}),this.phase="ready"}catch(e){if(e===pt){Gt(null),this.beginPairing();return}this.phase="error",this.error="Sem ligação ao Home Assistant. A tentar de novo…",this.errorDetail=Ki(e),console.warn("Pine3 Home: connect",e),this.pollTimer=window.setTimeout(()=>this.connect(t),5e3)}}qr(t){const e=Ee(0,"M");return e.addData(`${location.origin}${Yi}?code=${t}`),e.make(),Te(e.createSvgTag({cellSize:6,margin:2,scalable:!0}))}renderPairing(){const t=this.pair?.code;return u`<main class="center">
      <div class="pane pairing">
        <div class="text">
          <span class="muted eyebrow">Pine3 Home</span>
          <h1>Emparelhar este ecrã</h1>
          <p class="muted">No Home Assistant, abre <strong>Pine3 Home</strong> e escreve este código, ou lê o QR com o telemóvel.</p>
          <div class="code" aria-live="polite">${t?`${t.slice(0,3)} ${t.slice(3)}`:"··· ···"}</div>
          ${this.error?u`<p class="bad">${this.error}</p>`:u`<p class="muted small">O código muda a cada 10 minutos.</p>`}
        </div>
        ${t?u`<div class="qr">${this.qr(t)}</div>`:C}
      </div>
    </main>`}renderReady(){const t=this.me;if(!this.home||!this.conn)return u`<main class="center"><p class="muted">A carregar a casa…</p></main>`;const e=Ri(Zi[t.dashboard.style]??"pine3-vidro");return Ni`<${e} .home=${this.home} .entities=${this.entities} .dashboard=${t.dashboard} .conn=${this.conn}
      .screenName=${t.screen?.name??""} ?ambient=${this.ambient} .wallpanel=${ke()!==null}
      ?canEdit=${t.is_admin||t.dashboard.screen_edit!==!1}></${e}>`}render(){switch(this.phase){case"pairing":return this.renderPairing();case"ready":return this.me?this.renderReady():C;case"error":return u`<main class="center"><div class="errbox"><p class="muted">${this.error}</p>${this.errorDetail?u`<p class="detail">${this.errorDetail}</p>`:C}</div></main>`;default:return u`<main class="center"><p class="muted">A ligar…</p></main>`}}};J.styles=[Ae,vt`
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
    `];nt([W()],J.prototype,"phase",2);nt([W()],J.prototype,"pair",2);nt([W()],J.prototype,"error",2);nt([W()],J.prototype,"errorDetail",2);nt([W()],J.prototype,"me",2);nt([W()],J.prototype,"home",2);nt([W()],J.prototype,"entities",2);nt([W()],J.prototype,"now",2);nt([W()],J.prototype,"ambient",2);J=nt([mt("pine3-screen")],J);function Ki(t){if(typeof t=="number")return`erro ${t}`;if(t&&typeof t=="object"){const e=t;return[e.code,e.message].filter(Boolean).join(": ")}return String(t??"")}
