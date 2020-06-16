
        var container = document.getElementById('_umfp');
        var containerImg = document.getElementById('_umfp_img');
        containerImg.src = ' https://ynuf.alipay.com/service/clear.png?xt=' + window.umToken + '&xa=check-web-hichina-com';

        um.init({
          timeout: 2000,
          timestamp: Date.now(),
          token: window.umToken,
          serviceUrl: 'https://ynuf.alipay.com/service/um.json',
          appName: 'check-web-hichina-com',
          containers: { flash: container, dcp: container }
        });
      