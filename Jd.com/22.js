
  
  (function () {
  
      var id = '#chaoshi_discount_4';
      var elId = 'chaoshi_discount_4';
      var data = window.data[elId];
    
    $(id).bind('beforerender', function (e, next) {
      var $this = $(this);
      seajs.use('v3/widget/chaoshi_discount_render', function (Discount) {
        new Discount({
          $el: $this,
          elId: elId,
          groupIdsSku: data.groupIdsSku,
          next: next
        });
      });
    });
   }());
  
