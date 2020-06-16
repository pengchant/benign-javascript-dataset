
  P.when('GwGridLogic').execute('GridInit', function(g) {
    window.uet && uet('cf', 'gwGridInit', {wb: 1});
    window.uex && uex('ld', 'gwGridInit', {wb: 1});
    g('#gw-card-layout').init();
  });
