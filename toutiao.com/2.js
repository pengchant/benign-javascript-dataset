window.Slardar && window.Slardar('config', {
    sampleRate: 1,
    bid: 'toutiao_pc',
    pid: 'index_new',
    ignoreAjax: [/\/action_log\//, /\/stream\/widget\//],
    ignoreStatic: [/\.tanx\.com\//, /\.alicdn\.com\//, /\.mediav\.com/],
  });