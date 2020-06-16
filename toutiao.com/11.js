// Init tea log
  window.collectEvent('init', {
    app_id: 2256,
    channel: 'cn',
    log: false, // 开启调试日志
  });
  window.collectEvent('start');
  window.collectEvent('pageview', {
    'from': 'index',
    'utm_source': getQuery().utm_source || ''
  });

  if (window.ttAnalysis) {
    ttAnalysis.setup({
      c: '/'
    });
    ttAnalysis.send('pageview', {});
  }