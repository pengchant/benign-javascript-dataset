
  P.when('GwGridLogic').execute('BTFGridInit', function(g) {
    window.uet && uet('cf', 'gwBTFGridInit', {wb: 1});
    window.uex && uex('ld', 'gwBTFGridInit', {wb: 1});
    g('#main-content').init();
  });
