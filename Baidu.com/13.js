void function(e,t,n,a,o,c){function r(t){e.attachEvent?e.attachEvent("onload",t,!1):e.addEventListener&&e.addEventListener("load",t)}function i(e,n,a){a=a||15;var o=new Date;o.setTime((new Date).getTime()+1e3*a),t.cookie=e+"="+escape(n)+";path=/;expires="+o.toGMTString()}function s(e){var n=t.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=n?unescape(n[2]):null}function l(){var e=s("PMS_JT");if(e){i("PMS_JT","",-1);try{e=e.match(/{["']s["']:(\d+),["']r["']:["']([\s\S]+)["']}/),e=e&&e[1]&&e[2]?{s:parseInt(e[1]),r:e[2]}:{}}catch(n){e={}}e.r&&t.referrer.replace(/#.*/,"")!=e.r||alog("speed.set","wt",e.s)}}if(e.alogObjectConfig){var d=e.alogObjectConfig.sample,p=e.alogObjectConfig.rand;a="https:"===e.location.protocol?"https://fex.bdstatic.com"+a:"http://fex.bdstatic.com"+a,d&&p&&p>d||(r(function(){alog("speed.set","lt",+new Date),o=t.createElement(n),o.async=!0,o.src=a+"?v="+~(new Date/864e5)+~(new Date/864e5),c=t.getElementsByTagName(n)[0],c.parentNode.insertBefore(o,c)}),l())}}(window,document,"script","/hunter/alog/dp.min.js");