/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"c":[".demo-unit,.tk-proxima-nova,body,h2,h3","\"proxima-nova\",sans-serif",".header h1,.hero h1,.hero h2,.tk-omnes-pro","\"omnes-pro\",sans-serif"],"f":"//use.typekit.net/c/7920e4/omnes-pro:n2:n3,proxima-nova:n1:n4:n7.X33:M:2,X35:M:2,Vmv:M:2,W0V:M:2,W0Y:M:2/{format}{/extras*}?3bb2a6e53c9684ffdc9a9ef41b5b2a62553bd91442ddce50a774a53b51e50fff003fcbb90346b758043274f51223406c775488c413f40b7982e15f0d8c4ab77de6d380b7be1a6229e1428db987ce96d851265ff9e335e11ec3ae67453953939ed123b942204c2fcef281e49f04b7a3c70ec4591944dd6a744bcae7c1d3c1624a3f74d937e0d19f99238f305173461e75bb276dc9bb910b458e47b5ef798791f9d90e4ba98f3f645ac5fda569859abcff065dc8ef65311a7f132099e88dfb573598d8f1700be19c261403ad512df8405f9e546b95fcc7b6cfcc7cfda7c6b663c51b6d7e15262203568fa5b53595c37196688afa91e1adb77cb4db3741da7760175e226f7080b637ea780d13899f43bcb5857c5467cf1bbf60b9b21df1bd4976b329c9dce28618d8541b44c868ea6e4ac1831c9ee1c7da212f1f5de2313dadbb7e334d0e67c3f3eed324ab1ba183a9178345f3a1fc58fa849ed47946d30061cb81cfd0a674acc948c26945b44b7ecffa8309f85e6d826490e1fb6b417f254b1c909d204614a57dd4ffe5f7e5560e8f8f865de5c9965445d1a58a970a676dcccdd882e2335fe7","fn":["omnes-pro",["n2","n3"],"proxima-nova",["n1","n4","n7"]],"k":"//use.typekit.net/{id}.js","p":"//p.typekit.net/p.gif?s=1&k=ajf8ggy&ht=tk&h={host}&f=139.175.171.7994.7992&a=22525&_={_}","w":"ajf8ggy"};
/*{"created":"2013-07-23T11:25:42Z","k":"1.6.0"}*/
;(function(window,document,undefined){
var h=void 0,k=!0,l=null,m=!1;function n(a){return function(){return this[a]}}var aa=this;function ba(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==h?d[e]=b:d=d[e]?d[e]:d[e]={}}function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return q.apply(l,arguments)}var fa=Date.now||function(){return+new Date};
function ga(a,b){this.da=a;this.V=b||a;this.v=this.V.document;this.ea=h}ga.prototype.createElement=function(a,b,c){a=this.v.createElement(a);if(b)for(var d in b)if(b.hasOwnProperty(d))if("style"==d){var e=a,f=b[d];ha(this)?e.setAttribute("style",f):e.style.cssText=f}else a.setAttribute(d,b[d]);c&&a.appendChild(this.v.createTextNode(c));return a};function r(a,b,c){a=a.v.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}
function ia(a,b){function c(){a.v.body?b():setTimeout(c,0)}c()}function s(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return;c.push(b);a.className=c.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function t(a,b){for(var c=a.className.split(/\s+/),d=[],e=0,f=c.length;e<f;e++)c[e]!=b&&d.push(c[e]);a.className=d.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}
function ja(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return k;return m}function ha(a){if(a.ea===h){var b=a.v.createElement("p");b.innerHTML='<a style="top:1px;">w</a>';a.ea=/top/.test(b.getElementsByTagName("a")[0].getAttribute("style"))}return a.ea}function u(a){var b=a.V.location.protocol;"about:"==b&&(b=a.da.location.protocol);return"https:"===("https:"==b?"https:":"http:")}
function ka(a,b,c){var d=a.v.getElementsByTagName("head")[0];if(d){var e=a.v.createElement("script");e.src=b;var f=m;e.onload=e.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=k,c&&c(),e.onload=e.onreadystatechange=l,"HEAD"==e.parentNode.tagName&&d.removeChild(e)};d.appendChild(e)}}function v(a,b,c){this.Wa=a;this.ha=b;this.Va=c}ba("internalWebfont.BrowserInfo",v);v.prototype.Ja=n("Wa");v.prototype.hasWebFontSupport=v.prototype.Ja;
v.prototype.Ka=n("ha");v.prototype.hasWebKitFallbackBug=v.prototype.Ka;v.prototype.La=n("Va");v.prototype.hasWebKitMetricsBug=v.prototype.La;function w(a,b,c,d){this.g=a!=l?a:l;this.o=b!=l?b:l;this.J=c!=l?c:l;this.j=d!=l?d:l}var la=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;function x(a,b){return a.g>b.g||a.g===b.g&&a.o>b.o||a.g===b.g&&a.o===b.o&&a.J>b.J?1:a.g<b.g||a.g===b.g&&a.o<b.o||a.g===b.g&&a.o===b.o&&a.J<b.J?-1:0}function z(a,b){return 0===x(a,b)||1===x(a,b)}
w.prototype.toString=function(){return[this.g,this.o||"",this.J||"",this.j||""].join("")};function B(a){a=la.exec(a);var b=l,c=l,d=l,e=l;a&&(a[1]!==l&&a[1]&&(b=parseInt(a[1],10)),a[2]!==l&&a[2]&&(c=parseInt(a[2],10)),a[3]!==l&&a[3]&&(d=parseInt(a[3],10)),a[4]!==l&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new w(b,c,d,e)}function C(a,b,c,d,e,f,g,j,p,y,ca){this.W=a;this.q=b;this.Ua=c;this.B=d;this.F=e;this.za=f;this.m=g;this.l=j;this.Qa=p;this.S=y;this.A=ca}
ba("internalWebfont.UserAgent",C);C.prototype.getName=n("W");C.prototype.getName=C.prototype.getName;C.prototype.Ia=n("Ua");C.prototype.getVersion=C.prototype.Ia;C.prototype.Ea=n("B");C.prototype.getEngine=C.prototype.Ea;C.prototype.Fa=n("za");C.prototype.getEngineVersion=C.prototype.Fa;C.prototype.Ga=n("m");C.prototype.getPlatform=C.prototype.Ga;C.prototype.Ha=n("Qa");C.prototype.getPlatformVersion=C.prototype.Ha;C.prototype.Da=n("S");C.prototype.getDocumentMode=C.prototype.Da;C.prototype.Ca=n("A");
C.prototype.getBrowserInfo=C.prototype.Ca;function oa(a,b){this.e=a;this.R=b}var pa=new C("Unknown",new w,"Unknown","Unknown",new w,"Unknown","Unknown",new w,"Unknown",h,new v(m,m,m));
oa.prototype.parse=function(){var a;if(-1!=this.e.indexOf("MSIE")){a=D(this);var b=E(this),c=B(b),d=F(this.e,/MSIE ([\d\w\.]+)/,1),e=B(d);a=new C("MSIE",e,d,"MSIE",e,d,a,c,b,G(this.R),new v("Windows"==a&&6<=e.g||"Windows Phone"==a&&8<=c.g,m,m))}else if(-1!=this.e.indexOf("Opera"))a:{a="Unknown";var b=F(this.e,/Presto\/([\d\w\.]+)/,1),c=B(b),d=E(this),e=B(d),f=G(this.R);c.g!==l?a="Presto":(-1!=this.e.indexOf("Gecko")&&(a="Gecko"),b=F(this.e,/rv:([^\)]+)/,1),c=B(b));if(-1!=this.e.indexOf("Opera Mini/")){var g=
F(this.e,/Opera Mini\/([\d\.]+)/,1),j=B(g);a=new C("OperaMini",j,g,a,c,b,D(this),e,d,f,new v(m,m,m))}else{if(-1!=this.e.indexOf("Version/")&&(g=F(this.e,/Version\/([\d\.]+)/,1),j=B(g),j.g!==l)){a=new C("Opera",j,g,a,c,b,D(this),e,d,f,new v(10<=j.g,m,m));break a}g=F(this.e,/Opera[\/ ]([\d\.]+)/,1);j=B(g);a=j.g!==l?new C("Opera",j,g,a,c,b,D(this),e,d,f,new v(10<=j.g,m,m)):new C("Opera",new w,"Unknown",a,c,b,D(this),e,d,f,new v(m,m,m))}}else/OPR\/[\d.]+/.test(this.e)?a=qa(this):/AppleWeb(K|k)it/.test(this.e)?
a=qa(this):-1!=this.e.indexOf("Gecko")?(a="Unknown",b=new w,c="Unknown",d=E(this),e=B(d),f=m,-1!=this.e.indexOf("Firefox")?(a="Firefox",c=F(this.e,/Firefox\/([\d\w\.]+)/,1),b=B(c),f=3<=b.g&&5<=b.o):-1!=this.e.indexOf("Mozilla")&&(a="Mozilla"),g=F(this.e,/rv:([^\)]+)/,1),j=B(g),f||(f=1<j.g||1==j.g&&9<j.o||1==j.g&&9==j.o&&2<=j.J||g.match(/1\.9\.1b[123]/)!=l||g.match(/1\.9\.1\.[\d\.]+/)!=l),a=new C(a,b,c,"Gecko",j,g,D(this),e,d,G(this.R),new v(f,m,m))):a=pa;return a};
function D(a){var b=F(a.e,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=F(a.e,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function E(a){var b=F(a.e,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=F(a.e,/Windows Phone( OS)? ([^;)]+)/,2))||(b=F(a.e,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=F(a.e,/(?:Linux|CrOS) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=F(a.e,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function qa(a){var b=D(a),c=E(a),d=B(c),e=F(a.e,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),f=B(e),g="Unknown",j=new w,p="Unknown",y=m;/OPR\/[\d.]+/.test(a.e)?g="Opera":-1!=a.e.indexOf("Chrome")||-1!=a.e.indexOf("CrMo")||-1!=a.e.indexOf("CriOS")?g="Chrome":/Silk\/\d/.test(a.e)?g="Silk":"BlackBerry"==b||"Android"==b?g="BuiltinBrowser":-1!=a.e.indexOf("PhantomJS")?g="PhantomJS":-1!=a.e.indexOf("Safari")?g="Safari":-1!=a.e.indexOf("AdobeAIR")&&(g="AdobeAIR");"BuiltinBrowser"==g?p="Unknown":"Silk"==g?p=F(a.e,
/Silk\/([\d\._]+)/,1):"Chrome"==g?p=F(a.e,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.e.indexOf("Version/")?p=F(a.e,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==g?p=F(a.e,/AdobeAIR\/([\d\.]+)/,1):"Opera"==g?p=F(a.e,/OPR\/([\d.]+)/,1):"PhantomJS"==g&&(p=F(a.e,/PhantomJS\/([\d.]+)/,1));j=B(p);y="AdobeAIR"==g?2<j.g||2==j.g&&5<=j.o:"BlackBerry"==b?10<=d.g:"Android"==b?2<d.g||2==d.g&&1<d.o:526<=f.g||525<=f.g&&13<=f.o;return new C(g,j,p,"AppleWebKit",f,e,b,d,c,G(a.R),new v(y,536>f.g||536==f.g&&11>f.o,"iPhone"==
b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function F(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function G(a){if(a.documentMode)return a.documentMode}function ra(a){this.Oa=a||"-"}ra.prototype.j=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Oa)};function sa(a,b,c){this.h=a;this.n=b;this.$=c;this.s="wf";this.r=new ra("-")}
function ta(a){t(a.n,a.r.j(a.s,"loading"));ja(a.n,a.r.j(a.s,"active"))||s(a.n,a.r.j(a.s,"inactive"));H(a,"inactive")}function H(a,b,c){if(a.$[b])if(c)a.$[b](c.getName(),J(c));else a.$[b]()}function K(a,b){this.W=a;this.ia=4;this.X="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.X=c[1],this.ia=parseInt(c[2],10))}K.prototype.getName=n("W");function J(a){return a.X+a.ia}function L(a,b){this.h=a;this.O=b;this.D=this.h.createElement("span",{"aria-hidden":"true"},this.O)}
function ua(a,b){var c=a.D,d;d=[];for(var e=b.W.split(/,\s*/),f=0;f<e.length;f++){var g=e[f].replace(/['"]/g,"");-1==g.indexOf(" ")?d.push(g):d.push("'"+g+"'")}d=d.join(",");e="normal";f=b.ia+"00";"o"===b.X?e="oblique":"i"===b.X&&(e="italic");d="position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+d+";"+("font-style:"+e+";font-weight:"+f+";");ha(a.h)?c.setAttribute("style",d):c.style.cssText=
d}function va(a){r(a.h,"body",a.D)}L.prototype.remove=function(){var a=this.D;a.parentNode&&a.parentNode.removeChild(a)};function wa(a,b,c,d,e,f,g,j){this.ja=a;this.Na=b;this.h=c;this.C=d;this.O=j||"BESbswy";this.A=e;this.P={};this.fa=f||5E3;this.ta=g||l;this.N=this.M=l;a=new L(this.h,this.O);va(a);for(var p in M)M.hasOwnProperty(p)&&(ua(a,new K(M[p],J(this.C))),this.P[M[p]]=a.D.offsetWidth);a.remove()}var M={bb:"serif",ab:"sans-serif",Ya:"monospace"};
wa.prototype.start=function(){this.M=new L(this.h,this.O);va(this.M);this.N=new L(this.h,this.O);va(this.N);this.Sa=fa();ua(this.M,new K(this.C.getName()+",serif",J(this.C)));ua(this.N,new K(this.C.getName()+",sans-serif",J(this.C)));xa(this)};function ya(a,b,c){for(var d in M)if(M.hasOwnProperty(d)&&b===a.P[M[d]]&&c===a.P[M[d]])return k;return m}
function xa(a){var b=a.M.D.offsetWidth,c=a.N.D.offsetWidth;b===a.P.serif&&c===a.P["sans-serif"]||a.A.ha&&ya(a,b,c)?fa()-a.Sa>=a.fa?a.A.ha&&ya(a,b,c)&&(a.ta===l||a.ta.hasOwnProperty(a.C.getName()))?za(a,a.ja):za(a,a.Na):setTimeout(q(function(){xa(this)},a),25):za(a,a.ja)}function za(a,b){a.M.remove();a.N.remove();b(a.C)}function N(a,b,c,d){this.h=b;this.G=c;this.ba=0;this.wa=this.qa=m;this.fa=d;this.A=a.A}
N.prototype.ga=function(a,b,c,d){if(0===a.length&&d)ta(this.G);else{this.ba+=a.length;d&&(this.qa=d);for(d=0;d<a.length;d++){var e=a[d],f=b[e.getName()],g=this.G,j=e;s(g.n,g.r.j(g.s,j.getName(),J(j).toString(),"loading"));H(g,"fontloading",j);(new wa(q(this.Aa,this),q(this.Ba,this),this.h,e,this.A,this.fa,c,f)).start()}}};
N.prototype.Aa=function(a){var b=this.G;t(b.n,b.r.j(b.s,a.getName(),J(a).toString(),"loading"));t(b.n,b.r.j(b.s,a.getName(),J(a).toString(),"inactive"));s(b.n,b.r.j(b.s,a.getName(),J(a).toString(),"active"));H(b,"fontactive",a);this.wa=k;Aa(this)};N.prototype.Ba=function(a){var b=this.G;t(b.n,b.r.j(b.s,a.getName(),J(a).toString(),"loading"));ja(b.n,b.r.j(b.s,a.getName(),J(a).toString(),"active"))||s(b.n,b.r.j(b.s,a.getName(),J(a).toString(),"inactive"));H(b,"fontinactive",a);Aa(this)};
function Aa(a){0==--a.ba&&a.qa&&(a.wa?(a=a.G,t(a.n,a.r.j(a.s,"loading")),t(a.n,a.r.j(a.s,"inactive")),s(a.n,a.r.j(a.s,"active")),H(a,"active")):ta(a.G))}function Ba(){var a=[{name:"font-family",value:O.c[i+1]}];this.Ra=[O.c[i]];this.ma=a}function Ca(a){for(var b=a.Ra.join(","),c=[],d=0;d<a.ma.length;d++){var e=a.ma[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function Da(a){this.h=a}Da.prototype.toString=function(){return encodeURIComponent(this.h.V.location.hostname||this.h.da.location.hostname)};
function Ea(a,b){this.t=a;this.z=b}Ea.prototype.toString=function(){for(var a=[],b=0;b<this.z.length;b++)for(var c=this.z[b],d=c.H(),c=c.H(this.t),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=k;break a}f=m}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)c=a.slice(0>d-4?0:d-4,d),b.unshift(parseInt(c,2).toString(16));return b.join("")};function P(a){this.Ta=a}
P.prototype.j=function(a,b){var c=b||{},d=this.Ta.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Fa(a,b,c,d){this.L=a;this.T=b;this.fb=c;this.gb=d;this.oa={};this.na={}}Fa.prototype.H=function(a){return a?(this.oa[a]||this.T).slice(0):this.T.slice(0)};Fa.prototype.ga=function(a,b,c){var d=[],e={};Ga(this,b,d,e);a(d,e,c)};
function Ga(a,b,c,d){c.push(a.L);d[a.L]=a.H(b);a=a.na[b]||[];for(b=0;b<a.length;b++){for(var e=a[b],f=e.L,g=m,j=0;j<c.length;j++)c[j]==f&&(g=k);g||(c.push(f),d[f]=e.H())}}function Ha(a,b){this.L=a;this.T=b}Ha.prototype.H=n("T");function Ia(){this.la=this.ya=this.K=this.U=this.pa=k}function Q(a){return"Windows"===a.m}function R(a){return Q(a)&&0===x(a.l,new w(5,1))||Q(a)&&0===x(a.l,new w(5,2))||Q(a)&&0===x(a.l,new w(6,0))||Q(a)&&z(a.l,new w(6,1))}
function S(a){return"Macintosh"===a.m&&(z(a.l,new w(10,4))||a.l.g===l)}function Ja(a,b){return b.pa&&("iPhone"===a.m||"iPod"===a.m)}function Ka(a,b){return Ja(a,b)&&z(a.l,new w(4,2))&&-1===x(a.l,new w(5))}function La(a,b){return b.U&&"iPad"===a.m&&z(a.l,new w(4,2))&&-1===x(a.l,new w(5))}function U(a,b){return b.K&&"Android"===a.m}function Ma(a,b){return U(a,b)&&z(a.l,new w(2,2))&&-1===x(a.l,new w(3,1))}function Na(a,b){return U(a,b)&&z(a.l,new w(3,1))&&-1===x(a.l,new w(4,1))}
function V(a){return"Linux"===a.m||"Ubuntu"===a.m}function Oa(a){return"Gecko"===a.B&&0===x(a.F,new w(1,9,1))&&!/^b[1-3]$/.test(a.F.j||"")}function Pa(a){return"Safari"===a.getName()&&"AppleWebKit"===a.B||"Unknown"===a.getName()&&"AppleWebKit"===a.B&&("iPhone"===a.m||"iPad"===a.m||"iPod"===a.m)}function Qa(a){return"Safari"===a.getName()&&"AppleWebKit"===a.B&&z(a.F,new w(525,13))&&-1===x(a.F,new w(534,50))}function Ra(a){return"Opera"===a.getName()&&z(a.q,new w(10,54))&&-1===x(a.q,new w(11,10))}
function Sa(a){return"BuiltinBrowser"===a.getName()}function Ta(a){this.va=a}function Ua(a,b){return b}
var Va={Za:"a",$a:"b",eb:"d",cb:"f",Xa:"i"},Wa={a:function(a,b){return Qa(a)&&R(a)||Sa(a)&&(Ma(a,b)||U(a,b)&&z(a.l,new w(4,1)))||b.K&&"Silk"===a.getName()&&-1===x(a.q,new w(2))&&(Ma(a,b)||S)||b.K&&"Silk"===a.getName()&&z(a.q,new w(2))&&U(a,b)&&z(a.l,new w(4,1))||Pa(a)&&(La(a,b)||Ka(a,b))||Oa(a)&&(R(a)||V(a))||Ra(a)&&(R(a)||V(a))||("Chrome"===a.getName()&&1===x(a.q,new w(4,0,249))&&-1===x(a.q,new w(6))||0===x(a.q,new w(4,0,249))&&(a.q.j===l||4<=a.q.j))&&(R(a)||V(a)||S(a))||"Chrome"===a.getName()&&
z(a.q,new w(6))&&(La(a,b)||Ka(a,b))||"AdobeAIR"===a.getName()&&z(a.q,new w(2,5))&&(Q(a)&&a.l.g===l||V(a))},b:function(a){return Oa(a)&&S(a)||Qa(a)&&S(a)||Ra(a)&&S(a)||"AdobeAIR"===a.getName()&&z(a.q,new w(2,5))&&S(a)},d:function(a,b){return"Chrome"===a.getName()&&z(a.q,new w(6))&&(R(a)||V(a)||S(a)||U(a,b)||"CrOS"===a.m||b.U&&"iPad"===a.m&&z(a.l,new w(5))||Ja(a,b)&&z(a.l,new w(5)))||"Gecko"===a.B&&1===x(a.F,new w(1,9,1))&&(R(a)||V(a)||S(a)||U(a,b))||"Safari"===a.getName()&&("AppleWebKit"===a.B&&z(a.F,
new w(534,50)))&&(R(a)||S(a))||Pa(a)&&(b.U&&"iPad"===a.m&&z(a.l,new w(5))||Ja(a,b)&&z(a.l,new w(5)))||"Opera"===a.getName()&&z(a.q,new w(11,10))&&(R(a)||V(a)||S(a)||U(a,b))||"MSIE"===a.getName()&&9<=a.S&&(Q(a)&&z(a.l,new w(6,1))||Q(a)&&0===x(a.l,new w(6,0)))||"MSIE"===a.getName()&&b.ya&&"Windows Phone"===a.m&&z(a.l,new w(8))||Sa(a)&&b.la&&"BlackBerry"===a.m&&z(a.l,new w(10))},f:function(a,b){return Sa(a)&&Na(a,b)||b.K&&"Silk"===a.getName()&&z(a.q,new w(2))&&(Na(a,b)||V(a))},i:function(a){return"MSIE"===
a.getName()&&(z(a.q,new w(6,0))&&(a.S===h||9>a.S))&&R(a)}};function Xa(a,b){var c=b||new Ia,d;for(d in Va){var e=Va[d];if(Wa[e](a,c))return e}return l}var Ya={};
Ya.i=new Ta(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+e;c.push(new Ha(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++)for(var f=c[e],g=0;g<f.length;g++){var j=f[g];if(a[j]){d=d.concat(a[j]);break}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=k,a.push(f));c=[];for(d=0;d<b.length;d++){e=b[d];for(f=0;f<a.length;f++)g=a[f],g==e&&
c.push(g)}return c});var W={};W.a=W.b=W.d=function(){return[]};W.f=function(a){return[new Da(a)]};W.i=function(a,b,c){return[new Da(a),new Ea(b,c)]};function X(a){this.h=a;this.Z=this.e=this.t=l;this.z=[];this.Q=[];this.xa=this.aa=l}X.prototype.supportsConfiguredBrowser=function(){return!!this.t};
X.prototype.init=function(){if(0<this.Q.length){for(var a=[],b=0;b<this.Q.length;b++)a.push(Ca(this.Q[b]));var b=this.h,a=a.join(""),c=this.h.v.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));r(b,"head",c)}};
X.prototype.load=function(a,b){if(this.t){for(var c=Ya[this.t]||new Ta(Ua),d=0;d<this.z.length;d++){for(var e=this.z[d],f=this.t,g=c,j=[],p=e.L.split(",")[0].replace(/"|'/g,""),y=e.H(),ca=j,A=h,T=[],I={},ma=0;ma<y.length;ma++)A=y[ma],0<A.length&&!I[A]&&(I[A]=k,T.push(A));y=T;g=g.va?g.va(p,y,ca):y;e.oa[f]=g;e.na[f]=j}if(this.aa){c=W[this.t](this.h,this.t,this.z);d=this.t;e=[];for(f=0;f<c.length;f++)e.push(c[f].toString());c=this.aa.j(u(this.h),{format:d,extras:e});r(this.h,"head",this.h.createElement("link",
{rel:"stylesheet",href:c}))}if(a){var na=this,ob=this.t;ia(this.h,function(){for(var c=0;c<na.z.length;c++)na.z[c].ga(a,ob,b&&c==na.z.length-1)})}}};X.prototype.collectFontFamilies=function(a,b){if(this.t)for(var c=0;c<this.z.length;c++)Ga(this.z[c],this.t,a,b)};
X.prototype.performOptionalActions=function(){if(this.ca){var a=this,b=this.e,c=this.h;ia(this.h,function(){var d=a.ca;if(d.ua){var e=window.__adobewebfontsappname__,e=e?e.toString().substr(0,20):"",d=d.ua.j(u(c),{host:encodeURIComponent(c.V.location.hostname||c.da.location.hostname),app:encodeURIComponent(e),_:(+new Date).toString()}),f=new Image(1,1);f.src=d;f.onload=function(){f.onload=l}}d=a.ca;d.ka&&(d=d.ka.j(b,c),r(c,"body",d))})}};
function Za(a,b,c,d){this.Pa=a;this.h=b;this.e=c;this.n=d;this.u=[]}Za.prototype.Y=function(a){this.u.push(a)};Za.prototype.load=function(a,b){var c=a,d=b||{};if("string"==typeof c)c=[c];else if(!c||!c.length)d=c||{},c=[];if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++){var j=this.Pa.j(u(this.h),{id:encodeURIComponent(c[g])});ka(this.h,j,function(){0==--f&&$a(e,d)})}else $a(this,d)};
function $a(a,b){if(0!=a.u.length){for(var c=new sa(a.h,a.n,b),d=m,e=0;e<a.u.length;e++)a.u[e].init(),d=d||a.u[e].supportsConfiguredBrowser();if(d){s(c.n,c.r.j(c.s,"loading"));H(c,"loading");for(var f=new N(a.e,a.h,c),c=function(a,b,c){for(var d=[],e=0;e<a.length;e+=1){var A=a[e];if(b[A])for(var T=b[A],I=0;I<T.length;I+=1)d.push(new K(A,T[I]));else d.push(new K(A))}f.ga(d,{},l,c)},d=0;d<a.u.length;d++)e=a.u[d],e.supportsConfiguredBrowser()&&(e.load(c,d==a.u.length-1),e.performOptionalActions(window))}else ta(c);
a.u=[]}}function ab(a){this.I=a;this.u=[]}ab.prototype.Y=function(a){this.u.push(a)};ab.prototype.load=function(){var a=this.I.__webfonttypekitmodule__;if(a)for(var b=0;b<this.u.length;b++){var c=this.u[b],d=a[c.xa];d&&d(function(a,b,d){a=[];b={};var j=(new oa(navigator.userAgent,document)).parse(),p=c;p.e=j;p.t=Xa(p.e,p.Z);c.supportsConfiguredBrowser()&&(c.init(),c.load(l),c.collectFontFamilies(a,b),c.performOptionalActions(window));d(c.supportsConfiguredBrowser(),a,b)})}};
function bb(a,b,c,d){this.I=a;this.v=b;this.Ma=c;this.ra=d}
bb.prototype.j=function(a,b){var c=this.v.createElement("img");c.setAttribute("width",62);c.setAttribute("height",25);c.setAttribute("src",this.Ma.j(u(b)));c.setAttribute("class","typekit-badge");c.setAttribute("alt","Fonts by Typekit");c.setAttribute("title","Information about the fonts used on this site");c.style.position="fixed";c.style.zIndex=2E9;c.style.right=0;c.style.bottom=0;c.style.cursor="pointer";c.style.border=0;"Opera"!=a.getName()&&(c.style.content="none");c.style.display="inline";c.style["float"]=
"none";c.style.height="25px";c.style.left="auto";c.style.margin=0;c.style.maxHeight="25px";c.style.maxWidth="62px";c.style.minHeight="25px";c.style.minWidth="62px";c.style.orphans=2;c.style.outline="none";c.style.overflow="visible";c.style.padding=0;c.style.pageBreakAfter="auto";c.style.pageBreakBefore="auto";c.style.pageBreakInside="auto";c.style.tableLayout="auto";c.style.textIndent=0;c.style.top="auto";c.style.unicodeBidi="normal";c.style.verticalAlign="baseline";c.style.visibility="visible";c.style.widows=
2;c.style.width="65px";if(this.ra){var d=this.v,e=this.ra;cb(this,c,"click",function(){d.location.href=e})}var f=a.m;if("MSIE"==a.getName()&&"Windows Phone"!=f){c.style.position="absolute";var g=this,j=function(){var a=db(g,"scrollLeft","scrollTop"),b=db(g,"clientWidth","clientHeight");c.style.bottom="auto";c.style.right="auto";c.style.top=a[1]+b[1]-25+"px";c.style.left=a[0]+b[0]-3-62+"px"};cb(this,this.I,"scroll",j);cb(this,this.I,"resize",j)}if("iPhone"==f||"iPod"==f||"iPad"==f||"Android"==f||"Windows Phone"==
f||"BlackBerry"==f)c.style.display="none";return c};function db(a,b,c){var d=0,e=0;a=a.v;if(a.documentElement&&(a.documentElement[b]||a.documentElement[c]))d=a.documentElement[b],e=a.documentElement[c];else if(a.body&&(a.body[b]||a.body[c]))d=a.body[b],e=a.body[c];return[d,e]}function cb(a,b,c,d){if(b.attachEvent){var e=a.I;b["e"+c+d]=d;b[c+d]=function(){b["e"+c+d](e.event)};b.attachEvent("on"+c,b[c+d])}else b.addEventListener(c,d,m)}var eb=(new oa(navigator.userAgent,document)).parse();
window.Typekit||(window.Typekit={});if(!window.Typekit.load){var fb=window.Typekit.config||{},gb=l;fb.k&&(gb=new P(fb.k));var Y=new Za(gb,new ga(window),eb,document.documentElement),hb=new ab(window);window.Typekit.load=function(){Y.load.apply(Y,arguments)};window.Typekit.addKit=function(){Y.Y.apply(Y,arguments)}}var ib,jb=l,kb=l,lb=l,mb,Z,$,O=window.Typekit.config||{};O.b&&(jb=new P(O.b),kb=new bb(window,document,jb,O.bu));O.p&&(lb=new P(O.p));mb=new function(){var a=lb;this.ka=kb;this.ua=a};$=new X(new ga(window));
$.ca=mb;Z=new Ia;Z.pa=!O.si;Z.U=!O.st;Z.K=!O.sa;Z.ya=!O.sw;Z.la=!O.sb;$.Z=Z;O.w&&($.xa=O.w);O.f&&(ib=new P(O.f),$.aa=ib);var i;if(O.fn)for(i=0;i<O.fn.length;i+=2)$.z.push(new Fa(O.fn[i],O.fn[i+1]));if(O.c)for(i=0;i<O.c.length;i+=2)$.Q.push(new Ba);var nb;if(nb=hb)nb=!!hb.I.__webfonttypekitmodule__;nb?(hb.Y($),hb.load()):($.e=eb,$.t=Xa($.e,$.Z),window.Typekit.addKit($));
})(this,document);
