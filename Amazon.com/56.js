
      window.$Nav && $Nav.declare('config.prefetchUrls', ["https://images-na.ssl-images-amazon.com/images/G/01/authportal/common/images/amazon_logo_no-org_mid._CB485934470_.png","https://images-na.ssl-images-amazon.com/images/G/01/authportal/common/images/amznbtn-sprite03._CB485966112_.png","https://images-na.ssl-images-amazon.com/images/G/01/authportal/flex/reduced-nav/ap-flex-reduced-nav-2.0._CB485968702_.js","https://images-na.ssl-images-amazon.com/images/G/01/authportal/flex/reduced-nav/ap-flex-reduced-nav-2.1._CB485967487_.css","https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global_bluebeacon-1x_optimized_layout1._CB468670774_.png","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/buttons/sign-in-secure._CB485941572_.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/login/fwcim._CB454428048_.js","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._CB485935036_.gif"]);
window.$Nav && $Nav.declare('config.prefetch',function() {
    var pUrls = window.$Nav.getNow('config.prefetchUrls');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('A').execute(function (A) { A.preload(pUrls); });
});

  /*  */
  
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('A').execute(function(A){
  if(A.preload){
    A.preload('https://images-na.ssl-images-amazon.com/images/I/417L6LIsU6L._RC|71yMMOALcbL.js,61nu+N-SMyL.js,41W9ohA0e+L.js,11vrNkbdcvL.js,21qaguVEGfL.js,41pGxpj0ctL.js,51MzEF-M1PL.js,313jWehHlpL.js_.js?AUIClients/NavDesktopMetaAsset#desktop');
    A.preload('https://images-na.ssl-images-amazon.com/images/I/21l5OKCEfWL._RC|715JHEZrTJL.css,21TJB5pc5TL.css,31FX6DlOvlL.css,21lRUdwotiL.css,41TCfXduFuL.css,11G4HxMtMSL.css,31OvHRW+XiL.css,01XHMOHpK1L.css_.css?AUIClients/NavDesktopMetaAsset#desktop');
  }
});




    window.$Nav && $Nav.declare('config.flyoutURL', null);
    window.$Nav && $Nav.declare('btf.lite');
    window.$Nav && $Nav.declare('btf.full');
    window.$Nav && $Nav.declare('btf.exists');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).register('navCF');
  