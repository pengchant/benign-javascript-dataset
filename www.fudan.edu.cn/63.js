
(function(w, d, tag, path, r, el, s) {w["kankanstatistic"] = r;w[r] = w[r] || function() {(w[r].q = w[r].q || []).push(arguments);};w[r].l = 1 * new Date;el = d.createElement(tag);s = d.getElementsByTagName(tag)[0];el.async = 1;el.src = path;  s.parentNode.insertBefore(el, s); w[r] = el})(window, document, "script", "//skin.kankanews.com/v6/kkstatistic.js", "ka");
if(ka.onreadystatechange===null){
      ka.onreadystatechange = function () {
          if (ka.readyState == 'loaded' || ka.readyState == 'complete') {new KKStatistic({	apiURL : "http://api.kankanews.com/kkstat/kkweb/collect/kankan.json",utmSource : "utm_source"})}
      }
}else{
      ka.onload=function(){new KKStatistic({apiURL : "http://api.kankanews.com/kkstat/kkweb/collect/kankan.json",utmSource : "utm_source"})};
}
