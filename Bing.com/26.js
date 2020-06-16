
  $(document).ready(function(){ 
    var uhfCatLogo = $('#uhfCatLogo');
    if(uhfCatLogo.length>0 && uhfCatLogo.attr('href').length==6){
      uhfCatLogo.attr('href','https://about.ads.microsoft.com/en-us/h/a/microsoft-advertising'); 
    }
    var uhfMobileHomeLink = $(".single-link.js-nav-menu.x-hidden-none-mobile-vp a.c-uhf-nav-link");
    if(uhfMobileHomeLink.length>0 && uhfMobileHomeLink.attr('href').length==6){
      uhfMobileHomeLink.attr('href','https://about.ads.microsoft.com/en-us/h/a/microsoft-advertising'); 
    }
  });
