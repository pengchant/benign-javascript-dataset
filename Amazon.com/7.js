
  window.P && P.when('A','ready').execute(function(A) {
    var $ = A.$;
    $('.feed-carousel').first().addClass('first-carousel');
    P.register('gw-first-carousel');
    if($('#desktop-ad-atf').height() === 0) {
      $('.gw-ad-row .a-fixed-right-grid-inner').css('padding-right','0px');
    }
  });
