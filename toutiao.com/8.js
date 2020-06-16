;(function(window) {
    // sentry
    window.Raven && Raven.config('//key@m.toutiao.com/log/sentry/v2/96', {
      whitelistUrls: [/pstatp\.com/],
      shouldSendCallback: function(data) {
        var ua = navigator && navigator.userAgent;
        var isDeviceOK = !/Mobile|Linux/i.test(navigator.userAgent);
        return isDeviceOK;
      },
      tags: {
        bid: 'toutiao_pc',
        pid: 'index_new'
      },
      autoBreadcrumbs: {
        'xhr': false,
        'console': true,
        'dom': true,
        'location': true
      }
    }).install();
  })(window);