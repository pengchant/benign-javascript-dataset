if (KISSY.version-1.4>0) {
KISSY.use("node,gallery/datalazyload/1.0.1/index",function(b,a,f){var e=function(d,a){var c=b.one(d).attr("data-name");b.one(a).hasClass("tb-finish")||b.use(c,function(b,c){new c(d,a)})};a=b.DOM.viewportHeight();a=500<a?a:500;var g=new f({diff:{top:a,bottom:a},autoDestroy:false,placeholder:"//g.alicdn.com/s.gif"});b.all('#guid-1428041354449,#guid-14283924997120').each(function(a){var b=a.attr("data-name"),c=a.one("."+b);c.hasClass("tb-lazyload")?g.addCallback(a,function(){e(a,c[0])}):e(a,c[0])})});
} else {
KISSY.use("node",function(S){S.all('#guid-1428041354449,#guid-14283924997120').each(function(a){var b=a.attr("data-name"),c=a.one("."+b);c.hasClass("tb-finish")||S.use(b,function(b,d){new d(a[0],c[0])})})});
}