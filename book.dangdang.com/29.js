
(function() {
    var _analysis = document.createElement('script'); 
    _analysis.type = 'text/javascript'; 
    _analysis.async = true;
    _analysis.src = ('https:' == document.location.protocol ? '' : 'http://rum.xdy-cdn.cn/probe/download/_xdy_cdn_rum.js');
    // _analysis.src = ('https:' == document.location.protocol ? '' : 'http://rum.xdy-cdn.cn/probe/download/_xdy_cdn_rum_debug.js'); 
    var script = document.getElementsByTagName('script')[0]; script.parentNode.insertBefore(_analysis, script);
})();
