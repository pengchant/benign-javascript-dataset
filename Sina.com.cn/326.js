
(function(){
    if(window.top !== window.self || window._thereIsNoRealTimeMessage){return};
    var script = document.createElement('script');
    script.setAttribute('charset', 'gb2312');
    script.src = '//news.sina.com.cn/js/694/2012/0830/realtime.js?ver=1.5.1';
    document.getElementsByTagName('head')[0].appendChild(script);
})();
