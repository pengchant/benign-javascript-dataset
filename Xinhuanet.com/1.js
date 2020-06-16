
/* var userAgent = navigator.userAgent.toLowerCase(),
     l = window.location;
 var platform;
 if (userAgent == null || userAgent == '' || (l.href.indexOf('f=pad') != -1)) {
     platform = 'web'
 } else {
     if (userAgent.indexOf("mi pad") != -1 || userAgent.indexOf("xiaomi/miuibrowser") != -1 || userAgent.indexOf(
             "ipad") != -1) {
         platform = 'pad';
         //location.href = "http://www.news.cn/ipad/index.htm" ;
     } else if (userAgent.match(/iphone/i) || userAgent.match(/iphone os/i) || userAgent.match(/android/i) ||
         userAgent.match(/windows mobile/i) || userAgent.match(/ucweb/i)) {
         platform = 'phone'
             //location.href = "http://www.news.cn/webmobile.htm";
         location.href = "http://m.news.cn";
     } else if (userAgent.indexOf('gecko') > -1 && userAgent.indexOf('khtml') == -1 && userAgent.indexOf('firefox') ==
         -1 && userAgent.indexOf('11.0') == -1) {
         platform = 'other mobile';
         //location.href = "http://www.news.cn/webmobile.htm";
         location.href = "http://m.news.cn";
     }
 }*/
!function(_url){
var ua = navigator.userAgent.toLowerCase(),
isM = ua.indexOf("mobile")!==-1,
l = window.location.href,
stopPc = l.indexOf("f=pad") !== -1
;
if(isM && !stopPc ) window.location.href = _url || "http://m.news.cn";
}("http://m.news.cn")

