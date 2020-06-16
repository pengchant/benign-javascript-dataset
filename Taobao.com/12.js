
    // 移除之前在tbhome路径下的sw
    if ('serviceWorker' in navigator) {
      var serviceWorker = navigator.serviceWorker;
      serviceWorker.getRegistrations ? serviceWorker.getRegistrations().then(function(sws) {
        sws.forEach(function(sw) {
          if (sw.scope === 'https://www.taobao.com/tbhome/') {
            sw.unregister();
          }
        });
      }) : serviceWorker.getRegistration && serviceWorker.getRegistration().then(function(sw) {
        if (sw && sw.scope === 'https://www.taobao.com/tbhome/') {
          sw.unregister();
        }
      });
    }
  