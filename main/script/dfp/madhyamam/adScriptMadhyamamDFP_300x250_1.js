(function(E){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},ca=function(a){if(!(a instanceof Array)){a=ba(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={V:!0},ia={};try{ia.__proto__=ha;fa=ia.V;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea,ka=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},h=this||self,oa=function(a){if(a&&a!=h)return la(a.document);null===ma&&(ma=la(h.document));return ma},pa=/^[\w+/_-]+[=]{0,2}$/,ma=null,la=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&pa.test(a)?a:""},qa=function(a){a=a.split(".");for(var b=h,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b},ra=function(){},k=function(a){a.v=void 0;a.f=function(){return a.v?a.v:a.v=new a}},sa="closure_uid_"+(1E9*Math.random()>>>0),ta=0,ua=function(a,b){for(var c in b)a[c]=b[c]},m=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var p=function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},va=function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var l=f[g];b.call(void 0,l,g,a)&&(d[e++]=l)}return d},q=function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},wa=function(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]},xa=function(a,b){a:{for(var c="string"===typeof a?a.split(""):a,d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){b=d;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]},r=function(a,b){a:if("string"===typeof a)a="string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);else{for(var c=0;c<a.length;c++)if(c in a&&a[c]===b){a=c;break a}a=-1}return 0<=a};var t=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var ya={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var v=function(a,b){this.b=a===u&&b||"";this.c=za};v.prototype.j=!0;v.prototype.a=function(){return this.b};var Aa=function(a){return a instanceof v&&a.constructor===v&&a.c===za?a.b:"type_error:Const"},za={},u={};var w=function(a,b){this.c=a===Ba&&b||"";this.g=Ca};w.prototype.j=!0;w.prototype.a=function(){return this.c.toString()};w.prototype.u=!0;w.prototype.b=function(){return 1};var x=function(a){return a instanceof w&&a.constructor===w&&a.g===Ca?a.c:"type_error:TrustedResourceUrl"},Da=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,Ca={},Ea=function(a,b,c){if(null==c)return b;if("string"===typeof c)return c?a+encodeURIComponent(c):"";for(var d in c){var e=c[d];e=Array.isArray(e)?e:[e];for(var f=0;f<e.length;f++){var g=e[f];null!=g&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(d)+"="+encodeURIComponent(String(g)))}}return b},Ba={};var Fa=function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Na=function(a){if(!Ga.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ha,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ia,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ja,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ka,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(La,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ma,"&#0;"));return a},Ha=/&/g,Ia=/</g,Ja=/>/g,Ka=/"/g,La=/'/g,Ma=/\x00/g,Ga=/[\x00&<>"']/,Pa=function(a,b){var c=0;a=Fa(String(a)).split(".");b=Fa(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=Oa(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Oa(0==f[2].length,0==g[2].length)||Oa(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c},Oa=function(a,b){return a<b?-1:a>b?1:0};var y=function(a,b){this.c=a===Qa&&b||"";this.g=Ra};y.prototype.j=!0;y.prototype.a=function(){return this.c.toString()};y.prototype.u=!0;y.prototype.b=function(){return 1};var Sa=function(a){return a instanceof y&&a.constructor===y&&a.g===Ra?a.c:"type_error:SafeUrl"},Ta=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ra={},Qa={};var z;a:{var Ua=h.navigator;if(Ua){var Va=Ua.userAgent;if(Va){z=Va;break a}}z=""};var A=function(){this.c="";this.i=Wa;this.g=null};A.prototype.u=!0;A.prototype.b=function(){return this.g};A.prototype.j=!0;A.prototype.a=function(){return this.c.toString()};var Xa=function(a){return a instanceof A&&a.constructor===A&&a.i===Wa?a.c:"type_error:SafeHtml"},Za=function(a){if(a instanceof A)return a;var b="object"==typeof a,c=null;b&&a.u&&(c=a.b());a=Na(b&&a.j?a.a():String(a));return Ya(a,c)},$a=/^[a-zA-Z0-9-]+$/,ab={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},cb=function(a,b){var c={src:a},d={};a={};for(var e in c)a[e]=c[e];for(e in d)a[e]=d[e];if(b)for(e in b){var f=e.toLowerCase();if(f in c)throw Error("");f in d&&delete a[f];a[e]=b[e]}b=null;e="";if(a)for(g in a){if(!$a.test(g))throw Error("");d=a[g];if(null!=d){c=g;if(d instanceof v)d=Aa(d);else{if("style"==c.toLowerCase())throw Error("");if(/^on/i.test(c))throw Error("");if(c.toLowerCase()in ab)if(d instanceof w)d=x(d).toString();else if(d instanceof y)d=Sa(d);else if("string"===typeof d)d instanceof y||(d="object"==typeof d&&d.j?d.a():String(d),Ta.test(d)||(d="about:invalid#zClosurez"),d=new y(Qa,d)),d=d.a();else throw Error("");}d.j&&(d=d.a());c=c+'="'+Na(String(d))+'"';e+=" "+c}}var g="<script"+e;e=void 0;null==e?e=[]:Array.isArray(e)||(e=[e]);!0===ya.script?g+=">":(b=bb(e),g+=">"+Xa(b).toString()+"\x3c/script>",b=b.b());(a=a&&a.dir)&&(/^(ltr|rtl|auto)$/i.test(a)?b=0:b=null);return Ya(g,b)},eb=function(a){var b=Za(db),c=b.b(),d=[],e=function(f){Array.isArray(f)?p(f,e):(f=Za(f),d.push(Xa(f).toString()),f=f.b(),0==c?c=f:0!=f&&c!=f&&(c=null))};p(a,e);return Ya(d.join(Xa(b).toString()),c)},bb=function(a){return eb(Array.prototype.slice.call(arguments))},Wa={},Ya=function(a,b){var c=new A;c.c=a;c.g=b;return c},fb=new A;fb.c=h.trustedTypes&&h.trustedTypes.emptyHTML?h.trustedTypes.emptyHTML:"";fb.g=0;var db=fb;var gb=function(a,b){a.write(Xa(b))},hb=function(a){var b=oa(a.ownerDocument&&a.ownerDocument.defaultView);b&&a.setAttribute("nonce",b)};var ib=function(a){ib[" "](a);return a};ib[" "]=ra;var B=function(){},jb="function"==typeof Uint8Array,D=function(a,b,c,d){a.a=null;b||(b=[]);a.l=void 0;a.c=-1;a.h=b;a:{if(b=a.h.length){--b;var e=a.h[b];if(!(null===e||"object"!=typeof e||Array.isArray(e)||jb&&e instanceof Uint8Array)){a.g=b-a.c;a.b=e;break a}}a.g=Number.MAX_VALUE}a.i={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.g?(e+=a.c,a.h[e]=a.h[e]||C):(kb(a),a.b[e]=a.b[e]||C);if(d&&d.length)for(b=0;b<d.length;b++)lb(a,d[b])},C=[],kb=function(a){var b=a.g+a.c;a.h[b]||(a.b=a.h[b]={})},F=function(a,b){if(b<a.g){b+=a.c;var c=a.h[b];return c===C?a.h[b]=[]:c}if(a.b)return c=a.b[b],c===C?a.b[b]=[]:c},G=function(a,b,c){a=F(a,b);return null==a?c:a},mb=function(a,b){a=F(a,b);a=null==a?a:+a;return null==a?0:a},nb=function(a,b,c){b<a.g?a.h[b+a.c]=c:(kb(a),a.b[b]=c)},lb=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],g=F(a,f);null!=g&&(c=f,d=g,nb(a,f,void 0))}return c?(nb(a,c,d),c):0},H=function(a,b,c){a.a||(a.a={});if(!a.a[c]){var d=F(a,c);d&&(a.a[c]=new b(d))}return a.a[c]},I=function(a,b,c){a.a||(a.a={});if(!a.a[c]){for(var d=F(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.a[c]=e}b=a.a[c];b==C&&(b=a.a[c]=[]);return b},ob=function(a,b,c){a.a||(a.a={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].h;a.a[b]=c;nb(a,b,d)};var qb=function(a){pb();return new w(Ba,a)},pb=ra;var rb=function(){return-1!=z.indexOf("iPad")||-1!=z.indexOf("Android")&&-1==z.indexOf("Mobile")||-1!=z.indexOf("Silk")};var sb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var wb=function(a,b){if(!tb()&&!ub()){var c=Math.random();if(c<b)return c=vb(h),a[Math.floor(c*a.length)]}return null},vb=function(a){if(!a.crypto)return Math.random();try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},xb=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},ub=t(function(){a:{var a=["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"];for(var b=yb,c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){a=!0;break a}a=!1}return a||1E-4>Math.random()}),tb=t(function(){return yb("MSIE")}),yb=function(a){return-1!=z.indexOf(a)},zb=/^(-?[0-9.]{1,30})$/,Ab=function(a,b){return zb.test(a)&&(a=Number(a),!isNaN(a))?a:void 0==b?null:b},Bb=function(){try{return oa()}catch(a){}},Cb=t(function(){return rb()||-1==z.indexOf("iPod")&&-1==z.indexOf("iPhone")&&-1==z.indexOf("Android")&&-1==z.indexOf("IEMobile")?rb()?1:0:2}),Db=function(a){var b="https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_dupeid";xb(a,function(c,d){c&&(b+="&"+d+"="+encodeURIComponent(c))});window.fetch(b,{keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"})};var J=function(a){D(this,a,Eb,Fb)};m(J,B);var Eb=[2,8],Fb=[[3,4,5],[6,7]];var Gb=function(a){return null!=a?!a:a},Hb=function(a,b){for(var c=!1,d=0;d<a.length;d++){var e=a[d].call();if(e==b)return e;null==e&&(c=!0)}if(!c)return!b},Jb=function(a,b){var c=I(a,J,2);if(!c.length)return Ib(a,b);a=G(a,1,0);if(1==a)return Gb(Jb(c[0],b));c=q(c,function(d){return function(){return Jb(d,b)}});switch(a){case 2:return Hb(c,!1);case 3:return Hb(c,!0)}},Ib=function(a,b){var c=lb(a,Fb[0]);a:{switch(c){case 3:var d=G(a,3,0);break a;case 4:d=G(a,4,0);break a;case 5:d=G(a,5,0);break a}d=void 0}if(d&&(b=(b=b[c])&&b[d])){try{var e=b.apply(null,F(a,8))}catch(f){return}b=G(a,1,0);if(4==b)return!!e;d=null!=e;if(5==b)return d;if(12==b)a=G(a,7,"");else a:{switch(c){case 4:a=mb(a,6);break a;case 5:a=G(a,7,"");break a}a=void 0}if(null!=a){if(6==b)return e===a;if(9==b)return 0==Pa(e,a);if(d)switch(b){case 7:return e<a;case 8:return e>a;case 12:return(new RegExp(a)).test(e);case 10:return-1==Pa(e,a);case 11:return 1==Pa(e,a)}}}},Kb=function(a,b){return!a||!(!b||!Jb(a,b))};var Mb=function(a){D(this,a,Lb,null)};m(Mb,B);var Lb=[4];var K=function(a){D(this,a,Nb,Ob)};m(K,B);var Pb=function(a){D(this,a,null,null)};m(Pb,B);var Nb=[5],Ob=[[1,2,3,6,7]];var L=function(){var a={};this.a=(a[3]={},a[4]={},a[5]={},a)};k(L);var Qb=/^true$/.test("false");var Rb=Qb,Sb=function(a,b){switch(b){case 1:return G(a,1,0);case 2:return G(a,2,0);case 3:return G(a,3,0);case 6:return G(a,6,0);default:return null}},Tb=function(a,b){if(!a)return null;switch(b){case 1:return a=F(a,1),a=null==a?a:!!a,null==a?!1:a;case 7:return G(a,3,"");case 2:return mb(a,2);case 3:return G(a,3,"");case 6:return F(a,4);default:return null}},Ub=t(function(){if(!Rb)return{};try{var a=window.sessionStorage&&window.sessionStorage.getItem("GGDFSSK");if(a)return JSON.parse(a)}catch(b){}return{}}),Wb=function(a,b,c,d){d=void 0===d?0:d;var e=Ub();if(e[a]&&null!=e[a][b])return e[a][b];b=M(d)[a][b];if(!b)return c;b=new K(b);b=Vb(b);a=Tb(b,a);return null!=a?a:c},Vb=function(a){var b=L.f().a;if(b){var c=xa(I(a,Pb,5),function(d){return Kb(H(d,J,1),b)});if(c)return H(c,Mb,2)}return H(a,Mb,4)},Xb=function(){this.a={};this.b=[]};k(Xb);var Yb=function(a,b,c){return!!Wb(1,a,void 0===b?!1:b,c)},Zb=function(a,b,c){b=void 0===b?0:b;a=Number(Wb(2,a,b,c));return isNaN(a)?b:a},$b=function(a,b,c){return Wb(3,a,void 0===b?"":b,c)},ac=function(a,b,c){b=void 0===b?[]:b;return Wb(6,a,b,c)},M=function(a){var b={};return Xb.f().a[a]||(Xb.f().a[a]=(b[1]={},b[2]={},b[3]={},b[6]={},b))},bc=function(a,b){var c=M(b);xb(a,function(d,e){return xb(d,function(f,g){return c[e][g]=f})})},cc=function(a,b){var c=M(b);p(a,function(d){var e=lb(d,Ob[0]),f=Sb(d,e);f&&(c[e][f]=d.h)})},dc=function(a,b){var c=M(b);p(a,function(d){var e=new K(d),f=lb(e,Ob[0]);(e=Sb(e,f))&&(c[f][e]||(c[f][e]=d))})},ec=function(){return q(Object.keys(Xb.f().a),function(a){return Number(a)})},fc=function(a){r(Xb.f().b,a)||bc(M(4),a)};var N=function(a){this.methodName=a},gc=new N(1),hc=new N(15),ic=new N(2),jc=new N(3),kc=new N(4),lc=new N(5),mc=new N(6),nc=new N(7),oc=new N(8),pc=new N(9),qc=new N(10),rc=new N(11),sc=new N(12),tc=new N(13),uc=new N(14),O=function(a,b,c){c.hasOwnProperty(a.methodName)||Object.defineProperty(c,String(a.methodName),{value:b})},P=function(a,b,c){return b[a.methodName]||c||function(){}},vc=function(a){O(lc,Yb,a);O(mc,Zb,a);O(nc,$b,a);O(oc,ac,a);O(tc,dc,a);O(hc,fc,a)},wc=function(a){O(kc,function(b){L.f().a=b},a);O(pc,function(b,c){var d=L.f();d.a[3][b]||(d.a[3][b]=c)},a);O(qc,function(b,c){var d=L.f();d.a[4][b]||(d.a[4][b]=c)},a);O(rc,function(b,c){var d=L.f();d.a[5][b]||(d.a[5][b]=c)},a);O(uc,function(b){for(var c=L.f(),d=ba([3,4,5]),e=d.next();!e.done;e=d.next())e=e.value,ua(c.a[e],b[e])},a)},xc=function(a){a.hasOwnProperty("init-done")||Object.defineProperty(a,"init-done",{value:!0})};var yc=function(){this.b=function(a,b){return void 0===b?!1:b};this.c=function(a,b){return void 0===b?0:b};this.a=function(){}},zc=function(a,b,c){a.b=function(d,e){return P(lc,b)(d,e,c)};a.c=function(d,e){return P(mc,b)(d,e,c)};a.a=function(){P(hc,b)(c)}};k(yc);var Q=function(a){var b=void 0===b?!1:b;return yc.f().b(a,b)};var Ac=function(){};var Bc=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var Cc=null,Dc=function(){if(null===Cc){Cc="";try{var a="";try{a=h.top.location.hash}catch(c){a=h.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);Cc=b?b[1]:""}}catch(c){}}return Cc};var R=function(){this.a=function(){};this.b=function(){return[]}},Ec=function(a,b,c){a.a=function(d){P(ic,b,function(){return[]})(d,c)};a.b=function(){return P(jc,b,function(){return[]})(c)}};k(R);var Fc=function(a,b){a=qa(a);a="function"===typeof a?a():a;return typeof a===b?a:void 0},Gc=function(){var a={};this[3]=(a[8]=function(b){return!!qa(b)},a[9]=function(b){b=qa(b);var c=typeof b;if(c="function"==("object"!=c?c:b?Array.isArray(b)?"array":c:"null"))b=b&&b.toString&&b.toString(),c="string"===typeof b&&-1!=b.indexOf("[native code]");return c},a[10]=function(){return window==window.top},a[6]=function(b){return r(R.f().b(),parseInt(b,10))},a[27]=function(b){b=Fc(b,"boolean");return void 0!==b?b:void 0},a);a={};this[4]=(a[3]=function(){return Cb()},a[6]=function(b){b=Fc(b,"number");return void 0!==b?b:void 0},a);a={};this[5]=(a[2]=function(){return window.location.href},a[3]=function(){try{return window.top.location.hash}catch(b){return""}},a[4]=function(b){b=Fc(b,"string");return void 0!==b?b:void 0},a)};k(Gc);var Hc=function(){var a=void 0===a?h:a;return a.ggeac||(a.ggeac={})};var Jc=function(a){D(this,a,Ic,null)};m(Jc,B);var Ic=[2];Jc.prototype.getId=function(){return G(this,1,0)};Jc.prototype.m=function(){return G(this,7,0)};var Lc=function(a){D(this,a,Kc,null)};m(Lc,B);var Kc=[2];Lc.prototype.m=function(){return G(this,5,0)};var Nc=function(a){D(this,a,Mc,null)};m(Nc,B);var S=function(a){D(this,a,Oc,null)};m(S,B);var Mc=[1,4,2,3],Oc=[2];S.prototype.m=function(){return G(this,1,0)};var Pc=[12,13],Qc=function(){},Rc=function(a,b,c,d){var e=void 0===d?{}:d;d=void 0===e.I?!1:e.I;var f=void 0===e.L?{}:e.L;e=void 0===e.R?[]:e.R;a.a=b;a.i=d;a.g=f;b={};a.b=(b[c]=e,b[4]=[],b);a.c={};(c=Dc())&&p(c.split(",")||[],function(g){(g=parseInt(g,10))&&(a.c[g]=!0)});return a},Wc=function(a,b,c){var d=[],e=Sc(a.a,b);if(e.length){9!==b&&(a.a=Tc(a.a,b));var f=r(Pc,b);p(e,function(g){if(g=Uc(a,g,c)){var l=g.getId();d.push(l);Vc(a,l,f?4:c);var n=I(g,K,2);n&&(f?p(ec(),function(na){return cc(n,na)}):cc(n,c))}})}return d},Vc=function(a,b,c){a.b[c]||(a.b[c]=[]);a=a.b[c];r(a,b)?Db({eids:JSON.stringify(a),dup:b}):a.push(b)},Xc=function(a,b){a.a.push.apply(a.a,ca(va(q(b,function(c){return new S(c)}),function(c){return!r(Pc,c.m())})))},Uc=function(a,b,c){var d=L.f().a;if(!Kb(H(b,J,3),d))return null;var e=I(b,Jc,2),f=e.length*G(b,1,0),g=G(b,6,0);if(g){f=d[4];switch(c){case 2:var l=f[8];break;case 1:l=f[7]}f=null;if(l)try{f=l(g)}catch(n){}null===f&&(f=Math.floor(1E3*vb(window)));b=Yc(b,f);return!b||d&&!Kb(H(b,J,3),d)?null:Zc(a,[b],1)}g=d?va(e,function(n){return Kb(H(n,J,3),d)}):e;return g.length?(b=G(b,4,0))?$c(a,b,f,g):Zc(a,g,f/1E3):null},$c=function(a,b,c,d){var e=null!=a.g[b]?a.g[b]:1E3;if(0>=e)return null;d=Zc(a,d,c/e);a.g[b]=d?0:e-c;return d},Zc=function(a,b,c){var d=a.c,e=wa(b,function(f){return!!d[f.getId()]});return e?e:a.i?null:wb(b,c)},ad=function(a,b){O(gc,function(c){a.c[c]=!0},b);O(ic,function(c,d){return Wc(a,c,d)},b);O(jc,function(c){return(a.b[c]||[]).concat(a.b[4])},b);O(sc,function(c){return Xc(a,c)},b)};k(Qc);var Sc=function(a,b){return(a=wa(a,function(c){return c.m()==b}))&&I(a,Lc,2)||[]},Tc=function(a,b){return va(a,function(c){return c.m()!=b})},Yc=function(a,b){var c=I(a,Jc,2),d=c.length,e=G(a,1,0);a=G(a,8,0);var f=(b-a)%d;return b<a||b-a-f>=d*e-1?null:c[f]};var bd=function(){this.a=function(){}};k(bd);var cd=function(a){bd.f().a(a)};var fd=function(a){var b=dd.f(),c={I:T(211),L:T(227),R:T(226)},d=void 0,e=2;d=void 0===d?Hc():d;e=void 0===e?0:e;d.hasOwnProperty("init-done")?(P(sc,d)(q(I(a,S,2),function(f){return f.h})),P(tc,d)(q(I(a,K,1),function(f){return f.h}),e),b&&P(uc,d)(b),ed(d,e)):(ad(Rc(Qc.f(),I(a,S,2),e,c),d),vc(d),wc(d),xc(d),ed(d,e),cc(I(a,K,1),e),Rb=Rb||!(!c||!c.W),cd(Gc.f()),b&&cd(b))},ed=function(a,b){a=void 0===a?Hc():a;b=void 0===b?0:b;var c=a,d=b;d=void 0===d?0:d;Ec(R.f(),c,d);c=a;b=void 0===b?0:b;zc(yc.f(),c,b);bd.f().a=P(uc,a);yc.f().a()};var gd=function(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");try{e.rel="preload";if(b instanceof w)var f=x(b).toString();else{if(b instanceof y)var g=Sa(b);else{if(b instanceof y)var l=b;else b="object"==typeof b&&b.j?b.a():String(b),Ta.test(b)||(b="about:invalid#zClosurez"),l=new y(Qa,b);g=Sa(l)}f=g}e.href=f}catch(n){return}d&&(e.as=d);c&&e.setAttribute("nonce",c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(n){}};var hd=/^\.google\.(com?\.)?[a-z]{2,3}$/,id=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,jd=function(a){return hd.test(a)&&!id.test(a)},kd=function(a){return a.replace(/[\W]/g,function(b){return"&#"+b.charCodeAt()+";"})},U=h,ld=function(a,b){a="https://adservice"+(b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(h.location.hostname)];V[3]>=+new Date&&b.push("adsid="+encodeURIComponent(V[1]));return a+"?"+b.join("&")},V,W,md=function(){U=h;V=U.googleToken=U.googleToken||{};var a=+new Date;V[1]&&V[3]>a&&0<V[2]||(V[1]="",V[2]=-1,V[3]=-1,V[4]="",V[6]="");W=U.googleIMState=U.googleIMState||{};jd(W[1])||(W[1]=".google.com");Array.isArray(W[5])||(W[5]=[]);"boolean"!==typeof W[6]&&(W[6]=!1);Array.isArray(W[7])||(W[7]=[]);"number"!==typeof W[8]&&(W[8]=0)},nd=function(a){try{a()}catch(b){h.setTimeout(function(){throw b;},0)}},pd=function(a){"complete"==h.document.readyState||"loaded"==h.document.readyState||h.document.currentScript&&h.document.currentScript.async?od(3):a()},qd=0,rd={o:function(){return 0<W[8]},C:function(){W[8]++},N:function(){0<W[8]&&W[8]--},O:function(){W[8]=0},s:function(){},S:function(){return!1},J:function(){return W[5]},H:nd},sd={o:function(){return W[6]},C:function(){W[6]=!0},N:function(){W[6]=!1},O:function(){W[6]=!1},s:function(){},S:function(){return".google.com"!=W[1]&&2<++qd},J:function(){return W[7]},H:function(a){pd(function(){nd(a)})}},od=function(a){if(1E-5>Math.random()){h.google_image_requests||(h.google_image_requests=[]);var b=h.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;h.google_image_requests.push(b)}};rd.s=function(){if(!rd.o()){var a=h.document,b=function(e){e=ld("js",e);var f=Bb();gd(a,e,f);f=a.createElement("script");f.type="text/javascript";f.onerror=function(){return h.processGoogleToken({},2)};e=qb(e);f.src=x(e);hb(f);try{(a.head||a.body||a.documentElement).appendChild(f),rd.C()}catch(g){}},c=W[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);h.setTimeout(function(){return h.processGoogleToken(d,1)},1E3)}};sd.s=function(){if(!sd.o()){var a=h.document,b=ld("sync.js",W[1]),c=Bb();gd(a,b,c);b=kd(b);var d=ib("script"),e="";c&&(e='nonce="'+kd(c)+'"');var f="<"+d+' src="'+b+'" '+e+"></"+d+"><"+(d+" "+e+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+d+">");pd(function(){a.write(f);sd.C()})}};var td=function(a){md();V[3]>=+new Date&&V[2]>=+new Date||a.s()},vd=function(){h.processGoogleToken=h.processGoogleToken||function(a,b){return ud(rd,a,b)};td(rd)},wd=function(){h.processGoogleTokenSync=h.processGoogleTokenSync||function(a,b){return ud(sd,a,b)};td(sd)},ud=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",e="NT"==d,f=parseInt(b.freshLifetimeSecs||"",10),g=parseInt(b.validLifetimeSecs||"",10),l=b["1p_jar"]||"";b=b.pucrd||"";md();1==c?a.O():a.N();if(!d&&a.S())jd(".google.com")&&(W[1]=".google.com"),a.s();else{var n=U.googleToken=U.googleToken||{},na=0==c&&d&&"string"===typeof d&&!e&&"number"===typeof f&&0<f&&"number"===typeof g&&0<g&&"string"===typeof l;e=e&&!a.o()&&(!(V[3]>=+new Date)||"NT"==V[1]);var Kd=!(V[3]>=+new Date)&&0!=c;if(na||e||Kd)e=+new Date,f=e+1E3*f,g=e+1E3*g,od(c),n[5]=c,n[1]=d,n[2]=f,n[3]=g,n[4]=l,n[6]=b,md();if(na||!a.o()){c=a.J();for(d=0;d<c.length;d++)a.H(c[d]);c.length=0}}};var xd=function(a){a=void 0===a?h:a;return(a=a.performance)&&a.now?a.now():null};var X=h.performance,yd=!!(X&&X.mark&&X.measure&&X.clearMarks),zd=t(function(){var a;if(a=yd)a=Dc(),a=!!a.indexOf&&0<=a.indexOf("1337");return a});var Ad=function(a,b,c){this.a=void 0===a?null:a;this.g=void 0===b?"jserror":b;this.b=null;this.c=void 0===c?.01:c;this.l=this.i},Bd=function(a,b){a.b=b};Ad.prototype.i=function(a,b,c,d,e){c=void 0===c?this.c:c;e=void 0===e?this.g:e;if(Math.random()>c)return!1;b.error&&b.meta&&b.id||(b=new Bc(b,{context:a,id:e}));if(d||this.b)b.meta={},this.b&&this.b(b.meta),d&&d(b.meta);h.google_js_errors=h.google_js_errors||[];h.google_js_errors.push(b);h.error_rep_loaded||(b=h.document,a=b.createElement("script"),c=qb(h.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js"),a.src=x(c),hb(a),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),h.error_rep_loaded=!0);return!1};var Cd=function(a,b){try{var c=a.a&&a.a.start("420",3);b();a.a&&c&&a.a.a(c)}catch(d){if(a.a&&c&&(b=c)&&X&&zd()&&(X.clearMarks("goog_"+b.label+"_"+b.uniqueId+"_start"),X.clearMarks("goog_"+b.label+"_"+b.uniqueId+"_end")),!a.l(420,d,a.c,void 0,a.g))throw d;}};var Dd=new v(u,"gpt/pubads_impl_"),Ed=new v(u,"https://securepubads.g.doubleclick.net/");var Fd=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(c){var d=a.google_lt_queue=a.google_lt_queue||[];p(c.getEntries(),function(e){return d.push(e)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var Gd=function(a){var b=xd(a);b&&(b={label:"1",type:9,value:b},a=a.google_js_reporting_queue=a.google_js_reporting_queue||[],2048>a.length&&a.push(b))},Hd=function(a,b,c){var d=window;return function(){var e=xd(),f=3;try{var g=b.apply(this,arguments)}catch(l){f=13;if(c)return c(a,l),g;throw l;}finally{d.google_measure_js_timing&&e&&(e={label:a.toString(),value:e,duration:(xd()||0)-e,type:f},f=d.google_js_reporting_queue=d.google_js_reporting_queue||[],2048>f.length&&f.push(e))}return g}},Id=function(a,b){return Hd(a,b,function(c,d){(new Ad).i(c,d)})};function Y(a,b){return null==b?"&"+a+"=null":"&"+a+"="+Math.floor(b)}var Ld=function(){var a=this;this.K=this.U=this.A=this.l=this.g=0;this.M=!1;this.B=this.i=this.c=0;this.P=.1>Math.random();this.T=h===h.top;var b=document.querySelector("[data-google-query-id]");if(this.a=b?b.getAttribute("data-google-query-id"):null)b=null;else{if("number"!==typeof h.goog_pvsid)try{Object.defineProperty(h,"goog_pvsid",{value:Math.floor(Math.random()*Math.pow(2,52))})}catch(c){}b=Number(h.goog_pvsid)||-1}this.F=b;this.P&&(b="https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics"+(this.a?"&qqid="+encodeURIComponent(this.a):Y("pvsid",this.F)),b+=Y("test",1),b+="&top="+(this.T?1:0),Jd(b));this.D=new PerformanceObserver(Id(640,function(c){c=ba(c.getEntries());for(var d=c.next();!d.done;d=c.next()){d=d.value;if("layout-shift"===d.entryType){var e=d;e.hadRecentInput||Q(241)&&!(.01<e.value)||(a.g+=Number(e.value),Number(e.value)>a.l&&(a.l=Number(e.value)),a.A+=1)}"largest-contentful-paint"===d.entryType&&(e=d,a.U=Math.floor(e.renderTime||e.loadTime));"first-input"===d.entryType&&(e=d,a.K=Number((e.processingStart-e.startTime).toFixed(3)),a.M=!0);"longtask"===d.entryType&&(a.c+=d.duration,d.duration>a.i&&(a.i=d.duration),a.B+=1)}}));this.G=!1;this.b=Id(641,this.b.bind(this))};ka(Ld,Ac);var Md=function(){var a=new Ld;a.D.observe({entryTypes:["layout-shift","largest-contentful-paint","first-input","longtask"],buffered:!Q(240)});document.addEventListener("unload",a.b);document.addEventListener("visibilitychange",a.b)};Ld.prototype.b=function(){var a=document;if(2===({visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0)&&!this.G){this.G=!0;this.D.takeRecords();a="https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";window.LayoutShift&&(a+="&cls="+this.g.toFixed(3),a+="&mls="+this.l.toFixed(3),a+=Y("nls",this.A));window.LargestContentfulPaint&&(a+=Y("lcp",this.U));window.PerformanceEventTiming&&this.M&&(a+=Y("fid",this.K));window.PerformanceLongTaskTiming&&(a+=Y("cbt",this.c),a+=Y("mbt",this.i),a+=Y("nlt",this.B));for(var b=0,c=ba(document.getElementsByTagName("iframe")),d=c.next();!d.done;d=c.next())if(d=d.value,d.id.includes("google_ads_iframe_")||d.id.includes("aswift"))b+=1;a+=Y("nif",b);b=window.google_unique_id;a+=Y("ifi","number"===typeof b?b:0);b=R.f().b();a+="&eid="+encodeURIComponent(b.join());this.P&&(a+=Y("test",1));a+="&top="+(this.T?1:0);a+=this.a?"&qqid="+encodeURIComponent(this.a):Y("pvsid",this.F);Jd(a)}};function Jd(a){window.fetch(a,{keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"})};var Nd=["https://adservice.google.com"],Od=function(a){this.c=Nd;this.a=2;this.b=a};ka(Od,Ac);var Pd=function(a){!document.hasTrustToken||3<=a.a||(a.a=3,p(a.c,function(b){window.fetch(b+"/tt/r",{keepalive:!0,redirect:"follow",method:"get",X:{type:"srr-token-redemption",issuer:b,refreshPolicy:"none"}}).then(function(c){if(!c.ok)throw Error(c.status+": Network response was not ok!");a.a=5;a.b({issuer:b,state:5})}).catch(function(c){c&&"NoModificationAllowedError"===c.name?(a.a=5,a.b({issuer:b,state:5})):4>a.a&&a.b({issuer:null,state:4})})}))};var Qd=function(){return h.googletag||(h.googletag={})},Rd=function(a,b){var c=Qd();c.hasOwnProperty(a)||(c[a]=b)},Sd=function(a,b){a.addEventListener?a.addEventListener("load",b,!1):a.attachEvent&&a.attachEvent("onload",b)};var Z={247:"https://securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,37:.01,38:.001,58:1,150:".google.co.in",211:!1,152:[],172:null,191:"",192:"",190:"",245:{},180:null,246:[],227:{},226:[],248:0,228:"//www.googletagservices.com/pubconsole/",249:!1,250:{}};Z[6]=function(a,b){b=void 0===b?!0:b;try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return b;case "http:":return!1}}catch(d){}return!0}(window);Z[49]=(new Date).getTime();Z[36]=/^true$/.test("false");Z[148]=Qb;Z[221]=/^true$/.test("");Z[204]=Ab("{{MOD}}",-1);var Td=function(){ua(this,Z)};k(Td);var T=function(a){return Td.f()[a]},Ud=function(a,b){Td.f()[a]=b},Vd=Qd(),Wd=Td.f();ua(Wd,Vd._vars_);Vd._vars_=Wd;var Xd=function(a,b){a=[a];for(var c=b.length-1;0<=c;--c)a.push(typeof b[c],b[c]);return a.join("\x0B")};var Yd=function(a,b){var c=b||Xd;return function(){var d=this||h;d=d.closure_memoize_cache_||(d.closure_memoize_cache_={});var e=Object.prototype.hasOwnProperty.call(a,sa)&&a[sa]||(a[sa]=++ta);e=c(e,arguments);return d.hasOwnProperty(e)?d[e]:d[e]=a.apply(this,arguments)}}(function(a){return a&&a.src?/^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src)?0:1:2},function(a,b){return a+"\x0B"+(b&&b[0]&&b[0].src)}),Zd=function(){return 0===Yd(T(172))};var $d=function(){return Ab("1")||0};Rd("getVersion",function(){return"2020061205"});var dd=function(){var a={};this[3]=(a[3]=Zd,a[2]=T(36),a[17]=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=String;var e=void 0===e?window:e;if(e=(e=e.location.href.match(sb)[3]||null)?decodeURI(e):e){var f=e.length;if(0==f)e=0;else{for(var g=305419896,l=0;l<f;l++)g^=(g<<5)+(g>>2)+e.charCodeAt(l)&4294967295;e=0<g?g:4294967296+g}}else e=null;return r(c,d(e))},a[21]=function(){return T(148)},a);a={};this[4]=(a[1]=function(){return T(204)},a[4]=$d,a);this[5]={}};k(dd);var ae=[],be=function(a){var b=new Nc(T(246));a=new Nc(a||ae);if(!I(b,K,1).length&&I(a,K,1).length){var c=I(a,K,1);ob(b,1,c)}!I(b,S,2).length&&I(a,S,2).length&&(a=I(a,S,2),ob(b,2,a));fd(b)};var ce=function(a){if(a=a.scripts)for(var b=0;b<a.length;b++){var c=a[b];if(-1<c.src.indexOf("/tag/js/gpt"))return c}return null},de=function(a){var b=a.currentScript;return"complete"!=a.readyState&&"loaded"!=a.readyState&&!(b&&b.async)},ee=function(){var a=[Ed,Dd,new v(u,"2020061205"),new v(u,".js")];for(var b="",c=0;c<a.length;c++)b+=Aa(a[c]);a=new w(Ba,b);var d=void 0===d?0:d;(d=yc.f().c(24,d))?(d=String(d),a=Da.exec(x(a).toString()),b=a[3]||"",d=new w(Ba,a[1]+Ea("?",a[2]||"",d)+Ea("#",b,void 0))):d=a;return d},fe=function(a,b){Ud(172,a.currentScript||ce(a));new be(b);R.f().a(12);R.f().a(5);Q(200)||Q(220)||(a=T(150),md(),jd(a)&&(W[1]=a));Q(312)&&Pd(new Od(function(c){Ud(250,c)}))},ge=function(a,b,c){var d=Qd();a=a||d.fifWin||window;b=b||a.document;var e=d.fifWin?window:a;Rd("cmd",[]);if(d.evalScripts)d.evalScripts();else{fe(b,c);try{a.PerformanceObserver&&(a.PerformanceLongTaskTiming&&Fd(a),Q(203)&&!window.google_plmetrics&&(Md(),window.google_plmetrics=!0))}catch(n){}Q(339)&&Ud(249,!0);Gd(a);a=ee();c=Q(200)||Q(239);if(de(b)){var f="gpt-impl-"+Math.random();try{gb(b,cb(a,{id:f,nonce:oa()}))}catch(n){}b.getElementById(f)&&(d._loadStarted_=!0,c||wd())}if(!d._loadStarted_){c||vd();b=d.fifWin?e.document:b;var g=b.createElement("script");g.src=x(a);hb(g);g.async=!0;var l=b.head||b.body||b.documentElement;"complete"!==e.document.readyState&&d.fifWin?Sd(e,function(){return void l.appendChild(g)}):l.appendChild(g);d._loadStarted_=!0}}};var he;a:{try{if(Array.isArray(E)){he=E;break a}}catch(a){}he=[]}(function(a,b,c){var d=new Ad(null,"gpt_exception",.01);Bd(d,function(e){e.methodId=420});Cd(d,function(){return ge(a,b,c)})})(void 0,void 0,he);}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this,[[[289,null,null,[1]],[null,7,null,[null,0.1]],[322,null,null,[1]],[20,null,null,[],[[[1,[[4,null,1]]],[1]]]],[252,null,null,[1]],[293,null,null,[1]],[333,null,null,[1]],[275,null,null,[1]],[258,null,null,[1]],[74,null,null,[1]],[198,null,null,[1]],[326,null,null,[1]],[null,8,null,[null,-1]],[237,null,null,[],[[[4,null,8,null,null,null,null,["googletag.fifWin"]],[1]]]],[null,28,null,[null,0.01]],[null,51,null,[null,1000]],[139,null,null,[1]],[298,null,null,[1]],[89,null,null,[1]],[null,null,2,[null,null,"1-0-37"]],[340,null,null,[1]],[215,null,null,[1]],[null,39,null,[null,72]],[null,38,null,[null,24]],[null,40,null,[null,5]],[null,33,null,[null,250]],[269,null,null,[1]],[330,null,null,[1]],[287,null,null,[1]],[321,null,null,[1]],[238,null,null,[],[[[4,null,8,null,null,null,null,["googletag.fifWin"]],[1]]]],[null,32,null,[]]],[[4,[[null,[[44713783]]],[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]]],[null,[[44716833,[[null,7,null,[null,0.03]],[212,null,null,[1]]]],[44719570,[[null,7,null,[null,0.03]],[212,null,null,[1]]]]]],[null,[[44717978,[[null,7,null,[null,0.02]],[212,null,null,[1]]]],[44719803,[[null,7,null,[null,0.02]],[212,null,null,[1]]]],[44719804,[[null,7,null,[null,0.02]],[212,null,null,[1]]]],[676982681]]],[null,[[44718034,[[null,7,null,[null,0.02]],[212,null,null,[1]]]],[44719513,[[null,7,null,[null,0.02]],[212,null,null,[1]]]]]],[null,[[21063927],[21063928,[[null,16,null,[null,500]]]],[21063929,[[null,16,null,[null,500]]]],[21063930,[[null,16,null,[null,750]]]],[21063931,[[null,16,null,[null,1000]]]],[21063932,[[null,17,null,[null,50]]]],[21063933,[[null,17,null,[null,100]]]],[21063934,[[null,17,null,[null,150]]]],[21063935,[[null,17,null,[null,200]]]],[21063936,[[null,18,null,[null,1]]]],[21063937,[[null,18,null,[null,250]]]],[21063938,[[null,18,null,[null,500]]]],[21063939,[[null,18,null,[null,750]]]],[21063940,[[null,18,null,[null,1000]]]]]],[null,[[21063941],[21063942,[[null,16,null,[null,250]]]],[21063943,[[null,16,null,[null,500]]]],[21063944,[[null,16,null,[null,750]]]],[21063945,[[null,16,null,[null,1000]]]],[21063946,[[null,17,null,[null,50]]]],[21063947,[[null,17,null,[null,100]]]],[21063948,[[null,17,null,[null,150]]]],[21063949,[[null,17,null,[null,200]]]],[21063950,[[null,18,null,[null,250]]]],[21063951,[[null,18,null,[null,500]]]],[21063952,[[null,18,null,[null,750]]]],[21063953,[[null,18,null,[null,1000]]]]]],[null,[[21063962],[21063963,[[null,18,null,[null,1]]]]]],[null,[[21064500],[21064501,[[136,null,null,[1]]]],[21064502,[[136,null,null,[1]],[137,null,null,[1]]]]]],[null,[[21065571],[21065572,[[74,null,null,[1]],[198,null,null,[1]]]]]],[null,[[21065573],[21065574,[[74,null,null,[1]],[198,null,null,[1]]]]]],[null,[[21065693],[21065694],[21065695],[21065696,[[263,null,null,[1]]]],[21065697,[[267,null,null,[1]]]],[21065698,[[286,null,null,[1]]]]]]]],[3,[[null,[[44716830],[44716831],[44717742],[44717743]]],[null,[[44716832],[44717744],[44717745]]],[null,[[44717747]]],[null,[[44718189]]],[null,[[676982680]]],[null,[[676982863],[676982882]]],[null,[[676982960],[676982994],[676982998]]],[null,[[676982975],[676982980]]],[null,[[1337,[[82,null,null,[1]],[188,null,null,[1]]]]]],[5,[[20194812,[[20,null,null,[1]]]],[20194813]],null,3],[500,[[21060610],[21060611,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["21061508"]]],[500,[[21060697],[21060698,[[87,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["Uint8Array"]],[4,null,11]]]],[100,[[21061497],[21061498,[[86,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,9,null,null,null,null,["requestAnimationFrame"]]]]],[100,[[21061545],[21061546,[[79,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["google_ltobserver"]]]]],[50,[[21061999],[21062000,[[81,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,10]]]],[1,[[21062330],[21062331,[[null,8,null,[null,800]]]],[21062332,[[null,8,null,[null,10000]]]]],null,3],[5,[[21062899],[21062900,[[98,null,null,[1]]]],[21062901,[[98,null,null,[1]]]]]],[1,[[21062970],[21062971,[[109,null,null,[1]]]]]],[5,[[21063046],[21063047],[21063048]],[2,[[4,null,7],[4,null,8,null,null,null,null,["TextDecoder"]],[4,null,10]]],9],[null,[[21063635],[21063636,[[104,null,null,[1]]]]],null,22],[1,[[21063669],[21063670]],[4,null,8,null,null,null,null,["TextDecoder"]],9],[10,[[21063671],[21063817],[21063818],[21063910],[21063911],[21066299]]],[50,[[21064169],[21064170,[[168,null,null,[1]]]]]],[10,[[21064211],[21064212,[[177,null,null,[1]]]]]],[10,[[21064365],[21064366,[[null,null,null,[null,null,null,["u_tz"]],null,7]]],[21064367,[[null,null,null,[null,null,null,["u_his"]],null,7]]],[21064368,[[null,null,null,[null,null,null,["u_ah","u_aw"]],null,7]]],[21064369,[[null,null,null,[null,null,null,["u_cd"]],null,7]]],[21064370,[[null,null,null,[null,null,null,["u_nplug"]],null,7]]],[21064371,[[null,null,null,[null,null,null,["u_nmime"]],null,7]]],[21064372,[[null,null,null,[null,null,null,["flash"]],null,7]]]],null,15],[5,[[21064623,[[98,null,null,[1]]]],[21064624,[[98,null,null,[1]]]]]],[10,[[21065112],[21065113,[[162,null,null,[1]]]]]],[10,[[21065138],[21065139,[[148,null,null,[1]]]]]],[null,[[21065198,[[null,null,null,[null,null,null,["v","1-0-37"]],null,1]]],[21065199,[[null,null,2,[null,null,"1-0-37"]]]]]],[1,[[21065352],[21065353,[[123,null,null,[1]]]]]],[50,[[21065516],[21065517,[[49,null,null,[1]]]]]],[null,[[21065803],[21065804,[[329,null,null,[1]]]]]],[50,[[21065928],[21065929,[[null,45,null,[null,0.5]],[291,null,null,[1]],[327,null,null,[1]]]]]],[50,[[21065975],[21065976,[[319,null,null,[1]]]]]],[10,[[21066039],[21066040]]],[1000,[[21066090,null,[2,[[8,null,null,1,null,9],[7,null,null,1,null,15]]]],[21066091,null,[2,[[8,null,null,1,null,14],[7,null,null,1,null,20]]]],[21066092,null,[2,[[8,null,null,1,null,19],[7,null,null,1,null,25]]]],[21066093,null,[2,[[8,null,null,1,null,24],[7,null,null,1,null,30]]]],[21066094,null,[2,[[8,null,null,1,null,29],[7,null,null,1,null,35]]]],[21066095,null,[2,[[8,null,null,1,null,34],[7,null,null,1,null,40]]]],[21066096,null,[2,[[8,null,null,1,null,39],[7,null,null,1,null,45]]]],[21066097,null,[2,[[8,null,null,1,null,44],[7,null,null,1,null,50]]]]],[4,null,3]],[10,[[21066165],[21066166,null,[4,null,8,null,null,null,null,["location.origin"]]]]],[null,[[21066244],[21066245,[[322,null,null,[1]]]],[21066246,[[143,null,null,[1]],[322,null,null,[1]]]]]],[10,[[21066288],[21066289,[[null,52,null,[null,1]],[null,56,null,[null,600]],[null,47,null,[null,1]],[null,55,null,[null,180]],[null,46,null,[null,1]]]]]],[100,[[21066300],[21066301,[[null,59,null,[null,1]]]]]],[50,[[21066340],[21066342,[[296,null,null,[1]]]]],null,20],[1000,[[22316437,null,[2,[[8,null,null,1,null,-1],[7,null,null,1,null,5]]]],[22316438,null,[2,[[8,null,null,1,null,4],[7,null,null,1,null,10]]]]],[4,null,3]],[null,[[21065729,null,[4,null,6,null,null,null,null,["21065725"]]],[21065730,[[null,35,null,[null,10]]],[4,null,6,null,null,null,null,["21065725"]]]],[4,null,9,null,null,null,null,["LayoutShift"]]]]],[6,[[null,[[20205494],[20205495]]],[null,[[21062379,[[23,null,null,[1]]]]]],[1000,[[21064215,null,[4,null,6,null,null,null,null,["21064211"]]],[21064216,null,[4,null,6,null,null,null,null,["21064212"]]]],[4,null,19]],[1000,[[21066247,null,[2,[[1,[[4,null,12]]],[4,null,6,null,null,null,null,["21066244"]]]]],[21066248,null,[2,[[1,[[4,null,12]]],[4,null,6,null,null,null,null,["21066246"]]]]]]],[1000,[[21066249,null,[2,[[4,null,12],[4,null,6,null,null,null,null,["21066244"]]]]],[21066250,null,[2,[[4,null,12],[4,null,6,null,null,null,null,["21066246"]]]]]]],[1000,[[21066251,null,[2,[[4,null,10],[4,null,6,null,null,null,null,["21066244"]]]]],[21066252,null,[2,[[4,null,10],[4,null,6,null,null,null,null,["21066246"]]]]]]],[1000,[[21066253,null,[2,[[1,[[4,null,10]]],[4,null,6,null,null,null,null,["21066244"]]]]],[21066254,null,[2,[[1,[[4,null,10]]],[4,null,6,null,null,null,null,["21066246"]]]]]]]]],[5,[[10,[[21061507],[21061508,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1000,[[21062812,[[23,null,null,[1]]],[4,null,8,null,null,null,null,["_gmptnl"]]]],[12,null,null,null,2,null,"today\\.line\\.me/.+/(main|article)"]],[1000,[[21064113,[[23,null,null,[1]]],[4,null,8,null,null,null,null,["webkit.messageHandlers._gmptnl"]]]],[12,null,null,null,2,null,"today\\.line\\.me/.+/(main|article)"]],[10,[[21065645],[21065646,[[305,null,null,[1]]]]],[4,null,9,null,null,null,null,["window.fetch"]]],[1,[[21066028],[21066029,[[200,null,null,[1]]]],[21066030,[[220,null,null,[1]]]]],null,24],[50,[[21066031],[21066032,[[239,null,null,[1]]]]],null,24],[10,[[21066272],[21066273,[[339,null,null,[1]]]]]],[1,[[21066334],[21066335,[[342,null,null,[1]]]]]],[1,[[21066390],[21066391,[[346,null,null,[1]]]]]],[1000,[[21066454,[[null,7,null,[null,1]],[null,24,null,[null,21066454]],[60,null,null,[1]],[null,28,null,[null,0.1]],[null,25,null,[null,21066454]]],[6,null,null,4,null,2]],[21066455,[[null,7,null,[null,1]],[null,24,null,[null,21066455]],[60,null,null,[1]],[null,28,null,[null,0.1]],[null,25,null,[null,21066455]]],[6,null,null,4,null,3]],[21066456,[[null,7,null,[null,1]],[null,24,null,[null,21066456]],[60,null,null,[1]],[null,28,null,[null,0.1]],[null,25,null,[null,21066456]]],[6,null,null,4,null,4]],[21066457,[[null,7,null,[null,1]],[null,24,null,[null,21066457]],[60,null,null,[1]],[null,28,null,[null,0.1]],[null,25,null,[null,21066457]]],[6,null,null,4,null,5]],[21066458,[[null,7,null,[null,1]],[null,24,null,[null,21066458]],[60,null,null,[1]],[null,28,null,[null,0.1]],[null,25,null,[null,21066458]]],[6,null,null,4,null,6]],[21066459,[[null,7,null,[null,1]],[null,24,null,[null,21066459]],[60,null,null,[1]],[null,28,null,[null,0.1]],[null,25,null,[null,21066459]]],[6,null,null,4,null,7]]],[4,null,3],1]]],[13,[[500,[[21065350],[21065351]],[2,[[3,[[4,null,6,null,null,null,null,["21061508"]],[4,null,6,null,null,null,null,["21060549"]]]],[4,null,9,null,null,null,null,["ReportingObserver"]]]]],[100,[[21065726,null,[4,null,6,null,null,null,null,["21065725"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,["21065725"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,["21065725"]]]],[4,null,9,null,null,null,null,["LayoutShift"]]],[50,[[21066347],[21066348,null,[4,null,8,null,null,null,null,["Date.now"]]],[21066349,null,[4,null,9,null,null,null,null,["Date.now"]]]]],[50,[[21066352,null,[1,[[4,null,9,null,null,null,null,["Date.now"]]]]]]],[50,[[21066353,null,[1,[[4,null,8,null,null,null,null,["Date.now"]]]]]]],[null,[[21066392],[21066393,[[338,null,null,[1]]]]]]]],[2,[[10,[[21066169],[21066170,[[274,null,null,[1]]]]]],[1,[[21066173],[21066174],[21066181],[21066182]],null,null,null,43,21],[1,[[21066183],[21066184]],null,null,null,43,null,500],[100,[[21066283],[21066284,[[274,null,null,[1]]]]],[3,[[4,null,15,null,null,null,null,["479"]],[4,null,15,null,null,null,null,["4288"]],[4,null,15,null,null,null,null,["7190"]],[4,null,15,null,null,null,null,["1010633"]],[4,null,15,null,null,null,null,["23328537"]],[4,null,15,null,null,null,null,["32730525"]],[4,null,15,null,null,null,null,["42159803"]],[4,null,15,null,null,null,null,["43863810"]],[4,null,15,null,null,null,null,["44520695"]],[4,null,15,null,null,null,null,["89844762"]],[4,null,15,null,null,null,null,["103997693"]],[4,null,15,null,null,null,null,["120157152"]],[4,null,15,null,null,null,null,["154013155"]],[4,null,15,null,null,null,null,["365560878"]],[4,null,15,null,null,null,null,["21643048729"]],[4,null,15,null,null,null,null,["21715515940"]]]]]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]]],[1,[[21065755],[21065756,[[312,null,null,[1]]]]],null,21],[1,[[21065757],[21065758,[[312,null,null,[1]]]]],[4,null,9,null,null,null,null,["hasTrustToken"]],21],[1,[[21065784]]],[1,[[21065785,null,[4,null,8,null,null,null,null,["navigator.connection.saveData"]]]]],[1,[[21065786,null,[4,null,27,null,null,null,null,["navigator.connection.saveData"]]]]],[1,[[21065787,null,[1,[[4,null,27,null,null,null,null,["navigator.connection.saveData"]]]]]]]]]]])

// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','https://www.google-analytics.com/analytics.js','ubga');
//
// ubga('create', 'UA-90028727-2', 'auto');
// ubga('send', 'pageview');

var s1 = document.createElement('script');
s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
s1.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(s1);

var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

var GEO_CODE = '';
(function (){
  var request = new XMLHttpRequest();
		url = 'https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ';
		request.open('GET', url, true);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				var data = request.responseText;
				data = JSON.parse(data);
				if(data.status == "success") {
          GEO_CODE = data.countryCode;
				}
				else {
					console.error("Geo Request Failed");
				}
			}
			else {
				console.error('Request failed from server');
			}
      mainHbRun();
		};
		request.onerror = function() {
			console.error('Request failed to Reach GEO Server');
      mainHbRun();
		};
		request.send();
})();

const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var div_1_sizes = [[300, 250], [200, 200], [250, 250]];

var adUnits = [
    {
        code: '/21956033520/madhyamam.com_wm3_300x250',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'openx', params: {unit: '541046178', delDomain: 'yieldbird-d.openx.net'} },
          { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '738922'} },
          { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
          { bidder: 'nobid', params: { siteId : '21986889043'} },
          { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] }, /* one placementId for all sizes */
          { bidder: 'criteo', params: {networkId: '10545'} },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2964156'} },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
        ]
    }
];

// ======== DO NOT EDIT BELOW THIS LINE =========== //
// var googletag = googletag || {};
// googletag.cmd = googletag.cmd || [];

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    var iframe = document.getElementById('gpt_pb_iframe');
    var iframeDoc = iframe.contentWindow.document;
    var adServerTargeting = ubpbjs.getAdserverTargetingForAdUnitCode('/21956033520/madhyamam.com_wm3_300x250');
    if (adServerTargeting && adServerTargeting['hb_adid']) {
		// googletag.cmd.push(function() {
    //         ubpbjs.que.push(function() {
    //             ubpbjs.setTargetingForGPTAsync();
    //             googletag.pubads().refresh([ub_slot1]);
    //         });
    //     });
      ubpbjs.que.push(function() {
         ubpbjs.setTargetingForGPTAsync();
         ubpbjs.renderAd(iframeDoc, adServerTargeting['hb_adid']);
      });
    }
    else{
      iframe.width = div_1_sizes[0][0];
      iframe.height = div_1_sizes[0][1];
      iframeDoc.write('<head></head><body>' + passbackTagHtml + '</body>');
      iframeDoc.close();
    }

}
// in case ubpbjs doesn't load
// setTimeout(function() {
//     initAdserver();
// }, FAILSAFE_TIMEOUT);
//
// var ub_slot1;
// googletag.cmd.push(function() {
//     ub_slot1 = googletag.defineSlot('/21956033520/madhyamam.com_wm3_300x250', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
//     googletag.pubads().collapseEmptyDivs(true);
//     googletag.pubads().setCentering(true);
//     googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
//     googletag.pubads().enableSingleRequest();
// 	  googletag.pubads().set("page_url", "%%PATTERN:url%%");
//     gwoogletag.enableServices();
// });

var passbackTagHtml = '<script async src="https://www.googletagservices.com/tag/js/gpt.js"><\/script><script>window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot("/21956033520/madhyamam.com_wm3_300x250", [[200, 200], [250, 250], [300, 250]], "div-gpt-ad-1592306328157-0").addService(googletag.pubads());googletag.pubads().enableSingleRequest();googletag.pubads().set("page_url", "'+URL+'");googletag.pubads().enableLazyLoad({fetchMarginPercent: 200,renderMarginPercent: 100,mobileScaling: 2.0});googletag.enableServices();});<\/script><div id="div-gpt-ad-1592306328157-0"><script>googletag.cmd.push(function() { googletag.display("div-gpt-ad-1592306328157-0"); });<\/script></div>';


function send_bids_for_analytics() {
  function forEach(responses, cb) {
    Object.keys(responses).forEach(function(adUnitCode) {
      var response = responses[adUnitCode];
      response.bids.forEach(function(bid) {
        cb(adUnitCode, bid);
      });
    });
  }
  var winners = ubpbjs.getAllWinningBids();
  var output = [];
  forEach(ubpbjs.getBidResponses(), function(code, bid) {
    output.push({
      bid: {
        bidderCode: bid.bidderCode,
        mediaType: bid.mediaType,
        adId: bid.adId,
        cpm: bid.cpm,
        pbHg: bid.pbHg,
        currency: bid.currency,
        creativeId: bid.creativeId,
      },
      adunit: code,
      auctionId: bid.auctionId,
      date: new Date().toLocaleDateString("en-US", {timeZone: "Asia/Kolkata"}),
      client: 'madhyamam',
      rendered: !!winners.find(function(winner) {
        return winner.adId==bid.adId;
      })
    });
  });
  send_bids_to_server(output);
}

function send_bids_to_server(obj){
		var request = new XMLHttpRequest();
		url = 'https://unibots.warw.in/save_bids';
  	request.open('POST', url, true);
  	request.setRequestHeader("Content-type", "application/json");
  	request.onload = function() {
  		if (request.status >= 200 && request.status < 400) {
  			var data = request.responseText;
  			data = JSON.parse(data);
  			if(data.error == true) {
  				console.log(data.msg);
  				console.log(data.errmsg);
  			}
  			else if(data.error == false) {
  				//closeloader();
  				// console.log("Request Completed Successfully");
  			}
  		}
  		else {
  			// We reached our target server, but it returned an error
  			console.log('Request failed from server');
  		}
  	};
  	request.onerror = function() {
  		console.log('Request failed');
  	};
  	request.send(JSON.stringify(obj));
}

function mainHbRun(){
  ubpbjs.que.push(function() {
      ubpbjs.addAdUnits(adUnits);
      ubpbjs.bidderSettings = {
      'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
      'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
      'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
      'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
      'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
      'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
      'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
      //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

      '33across': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'emx_digital': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'rhythmone': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'eplanning': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
    };
      ubpbjs.setConfig({

      	priceGranularity: customConfigObjectA,
       //consentManagement: { gdpr: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true }, usp: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400 } },
       userSync: {
           iframeEnabled: true,
           syncsPerBidder: 999, // and no more than 3 syncs at a time
           // syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
           filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
           // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
           userIds: [{
               name: "id5Id",
               params: {
                   partner: 438,            // change to the Partner Number you received from ID5
               },
               storage: {
                   type: "cookie",
                   name: "id5id.1st",       // create a cookie with this name
                   expires: 90,             // cookie lasts for 90 days
                   refreshInSeconds: 8*3600 // refresh ID every 8 hours to ensure it is fresh
               }
           }],
           auctionDelay: 500},
        debug: true,
        useBidCache: true,
        enableSendAllBids: false, // Default will be `true` as of 1.0
        bidderSequence: 'random', // Default is random
        publisherDomain: 'https://www.madhyamam.com/',
        bidderTimeout: PREBID_TIMEOUT+500,
        "currency": {
           // enables currency feature
           "adServerCurrency": "AED",
           "granularityMultiplier":3 ,
           // optionally override the default rate file
           "conversionRateFile": "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/currency/currency.json",
           // optionally provide a default rate in case the file can't be read
           "defaultRates": { "USD": { "AED": 3.67 }}
         }
        //pubcid: {expInterval: },
        //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
       });
      ubpbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT,
        labels: [GEO_CODE],
      });

      ubpbjs.onEvent('auctionEnd', function(){
        setTimeout(function(){
          send_bids_for_analytics();
        }, 5000);
      });

      // ubpbjs.enableAnalytics([{
      //   provider: 'ga',
      //   options: {
      //     global: 'ubga'
      //   }
      // }]);
  });
  // in case ubpbjs doesn't load
  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);
}
