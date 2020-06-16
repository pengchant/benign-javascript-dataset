  // 该script标签勿动！！！需放在整个底部广告代码的最上方。
    // 动态加载script，保留，勿删(浮层/下推/底纹/浮动通栏)
    function loadScript(url, callback) {
      var script = document.createElement('script')
      script.src = url
      script.onload = function() {
        callback && callback()
        script.parentNode.removeChild(script)
      }
      var target = document.getElementsByTagName('script')[0]
      target.parentNode.insertBefore(script, target)
    }
  // onload事件监听，保留，勿删
  function evenHandler (elem, type, fn) {
    if (elem.addEventListener) {
      elem.addEventListener(type, fn, false);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + type, fn);
    } 
  }
  // 判断是否监听load
  function canUseLoad () {
    var noLoad = false;
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 0
    noLoad = isIE || isEdge || isIE11 || isSafari
    return !noLoad;
  }
