
  
  (function () {
  
      var id = '#chaoshi_buy_6';
      var elId = 'chaoshi_buy_6';
      var data = window.data[elId];
    
    $(id).bind('beforerender', function (e, next) {
      var $this = $(this);
      seajs.use('v3/widget/chaoshi_buy_render', function (Buy) {
        new Buy({
          $el: $this,
          elId: elId,
          groupIdsSku: data.groupIdsSku,
          next: next
        });
      });
    });
    $(id).bind('done', function () {
      var $this = $(this);
      seajs.use('v3/widget/chaoshi_buy', function (Buy) {
        new Buy({
          $el: $this
        });
      });
    });
   }());
  
