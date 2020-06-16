
  (function () {
    var alipay = window.alipay || (window.alipay = {});
    var s = alipay.security = alipay.security || {};
    s.downloadServer = "https://download.alipay.com" || alipay.security.downloadServer;
    s.securityCenterServer = "https://securitycenter.alipay.com" || alipay.security.securityCenterServer;

          s.hasBrowserControlPolicy = true;
    
          s.certDataAccessPolicy = "";
        s.controlCheckTimeout = Number("3000");
    s.websocketPorts = "27382,45242";
    s.newCertControlDownloadAddress = "";
    s.sid = "web|authcenter_querypwd_login|656b0d59-ea9f-4365-ae3f-6af75fd451a5RZ55";
  })();
