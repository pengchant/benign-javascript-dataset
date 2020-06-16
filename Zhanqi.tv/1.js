
      +function(){
        function checkMobileUA(){try{for(var e=navigator.userAgent.toLocaleLowerCase(),o="",a=0,i=aMobileType.length;a<i;a++)!o&&-1<e.indexOf(aMobileType[a])&&(o=aMobileType[a]);!o&&-1<e.indexOf("mac")&&(o="mac")}catch(e){}return o}var aMobileType=["iphone","ipad","android","mobile","playstation"],ua=checkMobileUA(),host=window.location.host.toLocaleLowerCase();

                ('m.zhanqi.tv' != host && ua && -1 < aMobileType.indexOf(ua)) && (window.location.href = 'http://m.zhanqi.tv' + window.location.pathname + window.location.search + window.location.hash);
              }();
    