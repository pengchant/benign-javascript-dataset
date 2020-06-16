
window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
if (window.ue_ihb === 1) {

var ue_csm = window,
    ue_hob = +new Date();
(function(d){var e=d.ue=d.ue||{},f=Date.now||function(){return+new Date};e.d=function(b){return f()-(b?0:d.ue_t0)};e.stub=function(b,a){if(!b[a]){var c=[];b[a]=function(){c.push([c.slice.call(arguments),e.d(),d.ue_id])};b[a].replay=function(b){for(var a;a=c.shift();)b(a[0],a[1],a[2])};b[a].isStub=1}};e.exec=function(b,a){return function(){try{return b.apply(this,arguments)}catch(c){ueLogError(c,{attribution:a||"undefined",logLevel:"WARN"})}}}})(ue_csm);


    var ue_err_chan = 'jserr-rw';
(function(d,e){function h(f,b){if(!(a.ec>a.mxe)&&f){a.ter.push(f);b=b||{};var c=f.logLevel||b.logLevel;c&&c!==k&&c!==m&&c!==n&&c!==p||a.ec++;c&&c!=k||a.ecf++;b.pageURL=""+(e.location?e.location.href:"");b.logLevel=c;b.attribution=f.attribution||b.attribution;a.erl.push({ex:f,info:b})}}function l(a,b,c,e,g){d.ueLogError({m:a,f:b,l:c,c:""+e,err:g,fromOnError:1,args:arguments},g?{attribution:g.attribution,logLevel:g.logLevel}:void 0);return!1}var k="FATAL",m="ERROR",n="WARN",p="DOWNGRADED",a={ec:0,ecf:0,
pec:0,ts:0,erl:[],ter:[],mxe:50,startTimer:function(){a.ts++;setInterval(function(){d.ue&&a.pec<a.ec&&d.uex("at");a.pec=a.ec},1E4)}};l.skipTrace=1;h.skipTrace=1;h.isStub=1;d.ueLogError=h;d.ue_err=a;e.onerror=l})(ue_csm,window);


var ue_id = 'CVD5S15BBNFDZZ1SM5C3',
    ue_url = '/gp/uedata',
    ue_navtiming = 1,
    ue_mid = 'ATVPDKIKX0DER',
    ue_sid = '137-5657076-9915411',
    ue_sn = 'www.amazon.com',
    ue_furl = 'fls-na.amazon.com',
    ue_surl = 'https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
    ue_int = 0,
    ue_fcsn = 1,
    ue_urt = 3,
    ue_rpl_ns = 'cel-rpl',
    ue_ddq = 1,
    ue_fpf = '//fls-na.amazon.com/1/batch/1/OP/ATVPDKIKX0DER:137-5657076-9915411:CVD5S15BBNFDZZ1SM5C3$uedata=s:',
    ue_sbuimp = 1,
    ue_csa_pl = 1,

    ue_swi = 1;
function ue_viz(){(function(c,e,a){function k(b){if(c.ue.viz.length<p&&!l){var a=b.type;b=b.originalEvent;/^focus./.test(a)&&b&&(b.toElement||b.fromElement||b.relatedTarget)||(a=e[m]||("blur"==a||"focusout"==a?"hidden":"visible"),c.ue.viz.push(a+":"+(+new Date-c.ue.t0)),"visible"==a&&(ue.isl&&uex("at"),l=1))}}for(var l=0,f,g,m,n=["","webkit","o","ms","moz"],d=0,p=20,h=0;h<n.length&&!d;h++)if(a=n[h],f=(a?a+"H":"h")+"idden",d="boolean"==typeof e[f])g=a+"visibilitychange",m=(a?a+"V":"v")+"isibilityState";
k({});d&&e.addEventListener(g,k,0);c.ue&&d&&(c.ue.pageViz={event:g,propHid:f})})(ue_csm,document,window)};

(function(d,k,K){function E(a){return a&&a.replace&&a.replace(/^\s+|\s+$/g,"")}function r(a){return"undefined"===typeof a}function F(a,b){for(var c in b)b[t](c)&&(a[c]=b[c])}function G(a){try{var b=K.cookie.match(RegExp("(^| )"+a+"=([^;]+)"));if(b)return b[2].trim()}catch(c){}}function L(p,b,c){p&&(d.ue_id=a.id=a.rid=p,w=w.replace(/((.*?:){2})(\w+)/,function(a,b){return b+p}));b&&(w=w.replace(/(.*?:)(\w|-)+/,function(a,c){return c+b}),d.ue_sid=b);c&&a.tag("page-source:"+c);d.ue_fpf=w}function M(){var a=
{};return function(b){b&&(a[b]=1);b=[];for(var c in a)a[t](c)&&b.push(c);return b}}function x(d,b,c,e){e=e||+new B;var f,m,y=k.csa;if(b||r(c)){if(d){f=b?h("t",b)||h("t",b,{}):a.t;f[d]=e;for(m in c)c[t](m)&&h(m,b,c[m]);!b&&k.ue_csa_pl&&y&&y("PageTiming")("mark",Z[d]||d)}return e}}function h(d,b,c){var e=b&&b!=a.id?a.sc[b]:a;e||(e=a.sc[b]={});"id"===d&&c&&(N=1);return e[d]=c||e[d]}function O(d,b,c,e,f){c="on"+c;var h=b[c];"function"===typeof h?d&&(a.h[d]=h):h=function(){};b[c]=function(a){f?(e(a),h(a)):
(h(a),e(a))};b[c]&&(b[c].isUeh=1)}function P(p,b,c,e){function q(b,c){var d=[b],g=0,e={},f,k;c?(d.push("m=1"),e[c]=1):e=a.sc;for(k in e)if(e[t](k)){var q=h("wb",k),m=h("t",k)||{},n=h("t0",k)||a.t0,l;if(c||2==q){q=q?g++:"";d.push("sc"+q+"="+k);for(l in m)3>=l.length&&!r(m[l])&&null!==m[l]&&d.push(l+q+"="+(m[l]-n));d.push("t"+q+"="+m[p]);if(h("ctb",k)||h("wb",k))f=1}}!v&&f&&d.push("ctb=1");return d.join("&")}function m(b,c,g,e){if(b){var f=d.ue_err;d.ue_url&&!e&&b&&0<b.length&&(e=new Image,a.iel.push(e),
e.src=b,a.count&&a.count("postbackImageSize",b.length));if(w){var h=k.encodeURIComponent;h&&b&&(e=new Image,b=""+d.ue_fpf+h(b)+":"+(+new B-d.ue_t0),a.iel.push(e),e.src=b)}else a.log&&(a.log(b,"uedata",{n:1}),a.ielf.push(b));f&&!f.ts&&f.startTimer();a.b&&(f=a.b,a.b="",m(f,c,g,1))}}function y(b){var c=z?z.type:C,d=c&&2!=c,e=a.bfini;N||(e&&1<e&&(b+="&bfform=1",d||(a.isBFT=e-1)),2==c&&(b+="&bfnt=1",a.isBFT=a.isBFT||1),a.ssw&&a.isBFT&&(r(a.isNRBF)&&(c=a.ssw(a.oid),c.e||r(c.val)||(a.isNRBF=1<c.val?0:1)),
r(a.isNRBF)||(b+="&nrbf="+a.isNRBF)),a.isBFT&&!a.isNRBF&&(b+="&bft="+a.isBFT));return b}if(!a.paused&&(b||r(c))){for(var l in c)c[t](l)&&h(l,b,c[l]);x("pc",b,c);l=h("id",b)||a.id;var g=a.url+"?"+p+"&v="+a.v+"&id="+l,v=h("ctb",b)||h("wb",b),n,u;v&&(g+="&ctb="+v);1<d.ueinit&&(g+="&ic="+d.ueinit);if(!("ld"!=p&&"ul"!=p||b&&b!=l)){if("ld"==p){try{k[H]&&k[H].isUeh&&(k[H]=null)}catch(G){}if(k.chrome)for(u=0;u<I.length;u++)Q(D,I[u]);(u=K.ue_backdetect)&&u.ue_back&&u.ue_back.value++;d._uess&&(n=d._uess());
a.isl=1}a._bf&&(g+="&bf="+a._bf());d.ue_navtiming&&f&&(h("ctb",l,"1"),x("tc",C,C,J));A&&!R&&(f&&F(a.t,{na_:f.navigationStart,ul_:f.unloadEventStart,_ul:f.unloadEventEnd,rd_:f.redirectStart,_rd:f.redirectEnd,fe_:f.fetchStart,lk_:f.domainLookupStart,_lk:f.domainLookupEnd,co_:f.connectStart,_co:f.connectEnd,sc_:f.secureConnectionStart,rq_:f.requestStart,rs_:f.responseStart,_rs:f.responseEnd,dl_:f.domLoading,di_:f.domInteractive,de_:f.domContentLoadedEventStart,_de:f.domContentLoadedEventEnd,_dc:f.domComplete,
ld_:f.loadEventStart,_ld:f.loadEventEnd,ntd:("function"!==typeof A.now||r(J)?0:new B(J+A.now())-new B)+a.t0}),z&&F(a.t,{ty:z.type+a.t0,rc:z.redirectCount+a.t0}),R=1);F(a.t,{hob:d.ue_hob,hoe:d.ue_hoe});a.ifr&&(g+="&ifr=1")}x(p,b,c,e);c="ld"==p&&b&&h("wb",b);var s;c||b&&b!==l||$(b);c||l==a.oid||aa(l,(h("t",b)||{}).tc||+h("t0",b),+h("t0",b));(e=d.ue_mbl)&&e.cnt&&!c&&(g+=e.cnt());c?h("wb",b,2):"ld"==p&&(a.lid=E(l));for(s in a.sc)if(1==h("wb",s))break;if(c){if(a.s)return;g=q(g,null)}else e=q(g,null),e!=
g&&(e=y(e),a.b=e),n&&(g+=n),g=q(g,b||a.id);g=y(g);if(a.b||c)for(s in a.sc)2==h("wb",s)&&delete a.sc[s];n=0;a._rt&&(g+="&rt="+a._rt());c||(a.s=0,(n=d.ue_err)&&0<n.ec&&n.pec<n.ec&&(n.pec=n.ec,g+="&ec="+n.ec+"&ecf="+n.ecf),n=h("ctb",b),h("t",b,{}));a.tag&&a.tag().length&&(g+="&csmtags="+a.tag().join("|"),a.tag=M());s=a.viz||[];(e=s.length)&&(g+="&viz="+s.splice(0,e).join("|"));r(d.ue_pty)||(g+="&pty="+d.ue_pty+"&spty="+d.ue_spty+"&pti="+d.ue_pti);a.tabid&&(g+="&tid="+a.tabid);a.aftb&&(g+="&aftb=1");
!a._ui||b&&b!=l||(g+=a._ui());a.a=g;m(g,p,n,c)}}function $(a){var b=k.ue_csm_markers||{},c;for(c in b)b[t](c)&&x(c,a,C,b[c])}function v(a,b,c){c=c||k;if(c[S])c[S](a,b,!1);else if(c[T])c[T]("on"+a,b)}function Q(a,b,c){c=c||k;if(c[U])c[U](a,b,!1);else if(c[V])c[V]("on"+a,b)}function W(){function a(){d.onUl()}function b(a){return function(){c[a]||(c[a]=1,P(a))}}var c={},e,f;d.onLd=b("ld");d.onLdEnd=b("ld");d.onUl=b("ul");e={stop:b("os")};k.chrome?(v(D,a),I.push(a)):e[D]=d.onUl;for(f in e)e[t](f)&&O(0,
k,f,e[f]);d.ue_viz&&ue_viz();v("load",d.onLd);x("ue")}function aa(f,b,c){var e=d.ue_mbl,h=k.csa,m=h&&h("SPA"),h=h&&h("Content");e&&e.ajax&&e.ajax(b,c);m&&h&&(m("newPage",{requestId:f,transitionType:"soft"}),h("get","page")("emit","loaded"));a.tag("ajax-transition")}d.ueinit=(d.ueinit||0)+1;var a=d.ue=d.ue||{};a.t0=k.aPageStart||d.ue_t0;a.id=d.ue_id;a.url=d.ue_url;a.rid=d.ue_id;a.a="";a.b="";a.h={};a.s=1;a.t={};a.sc={};a.iel=[];a.ielf=[];a.viz=[];a.v="0.212181.0";a.paused=!1;var t="hasOwnProperty",
D="beforeunload",H="on"+D,S="addEventListener",U="removeEventListener",T="attachEvent",V="detachEvent",Z={cf:"criticalFeature",af:"aboveTheFold",fn:"functional",bb:"bodyBegin",be:"bodyEnd",ld:"loaded"},B=k.Date,A=k.performance||k.webkitPerformance,f=(A||{}).timing,z=(A||{}).navigation,J=(f||{}).navigationStart,w=d.ue_fpf,N=0,R=0,I=[],C;a.oid=E(a.id);a.lid=E(a.id);a._t0=a.t0;a.tag=M();a.ifr=k.top!==k.self||k.frameElement?1:0;a.attach=v;a.detach=Q;if("000-0000000-8675309"===d.ue_sid){var X=G("cdn-rid"),
Y=G("session-id");X&&Y&&L(X,Y,"cdn")}d.uei=W;d.ueh=O;d.ues=h;d.uet=x;d.uex=P;a.reset=L;a.pause=function(d){a.paused=d};W()})(ue_csm,window,ue_csm.document);


ue.stub(ue,"event");ue.stub(ue,"onSushiUnload");ue.stub(ue,"onSushiFlush");

ue.stub(ue,"log");ue.stub(ue,"onunload");ue.stub(ue,"onflush");
(function(c){var a=c.ue;a.cv={};a.cv.scopes={};a.count=function(d,c,b){var e={},f=a.cv,g=b&&0===b.c;e.counter=d;e.value=c;e.t=a.d();b&&b.scope&&(f=a.cv.scopes[b.scope]=a.cv.scopes[b.scope]||{},e.scope=b.scope);if(void 0===c)return f[d];f[d]=c;d=0;b&&b.bf&&(d=1);ue_csm.ue_sclog||!a.clog||0!==d||g?a.log&&a.log(e,"csmcount",{c:1,bf:d}):a.clog(e,"csmcount",{bf:d})};a.count("baselineCounter2",1);a&&a.event&&(a.event({requestId:c.ue_id||"rid",server:c.ue_sn||"sn",obfuscatedMarketplaceId:c.ue_mid||"mid"},
"csm","csm.CSMBaselineEvent.4"),a.count("nexusBaselineCounter",1,{bf:1}))})(ue_csm);



var ue_hoe = +new Date();
}
window.ueinit = window.ue_ihb;
