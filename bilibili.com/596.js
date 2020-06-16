
!function(global){
  if (
    /\/preview\//.test(global.location.href) || global.location.search.indexOf('__activity-plat-preview=1') >= 0
  ) {
    return false;
  }
  var ua = navigator.userAgent;
  var isSymbian = /(?:SymbianOS)/.test(ua) || /(?:Windows Phone)/.test(ua);
  var isAndroid = /(?:Android)/.test(ua);
  var isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (/(?:Firefox)/.test(ua) && /(?:Tablet)/.test(ua));
  var isPhone = /(?:iPhone)/.test(ua) && !isTablet;
  
  var isMobile = isPhone || isAndroid || isSymbian;
  var isPc = !isMobile;

  var jumpUrl = 'https://www.bilibili.com/blackboard/activity-foodh5.html';
  var plat = 'PC'

  if (
    (plat === 'H5' && (isPc && !isTablet)) ||
    (plat === 'PC' && (isMobile || isTablet))
  ) {
    global.location.href = jumpUrl + (jumpUrl.indexOf('?') > -1 ? '' : window.location.search + window.location.hash);
  }
}(window);
