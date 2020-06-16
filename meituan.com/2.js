!(function (win, doc, ns) {
    var cacheFunName = '_MeiTuanALogObject';
    win[cacheFunName] = ns;
    if (!win[ns]) {
        var _LX = function () {
            _LX.q.push(arguments);
            return _LX;
        };
        _LX.q = _LX.q || [];
        _LX.l = +new Date();
        win[ns] = _LX;
    }
})(window, document, 'LXAnalytics');
var valLab = null;
var environment = null;
//- 补充pv事件信息
LXAnalytics('pageView', valLab, environment);
;(function(exports, undefined){
    /**
    * on
    */
    function on(el, type, fn){
        if(!(el instanceof Node)) throw new TypeError('`element` must be a Element');
        if(typeof type !== 'string') throw new TypeError('`type` must be a String');
        if(typeof fn !== 'function') throw new TypeError('`handler` must be a Function');
        return el.addEventListener(type, fn);
    }
    // bind dom ready
    on(document, 'DOMContentLoaded', function(){
        // @docs http://lx.docs.sankuai.com/web/#_4
        on(document, 'click', function(e){
            var el = e.target;
            while(el) {
                var bid = el.getAttribute('data-bid');
                var lab = el.getAttribute('data-lab');
                if(bid !== null){
                    try {
                        LXAnalytics('moduleClick', bid, JSON.parse(lab));
                        break;
                    } catch (e) {
                        console.log(e)
                    }
                }
                var el = el.parentElement;
            }
        });
    });

})(this);