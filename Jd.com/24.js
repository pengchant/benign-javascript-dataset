
  
  (function () {
  
      var id = '#chaoshi_brand_5';
      var elId = 'chaoshi_brand_5';
      var data = window.data[elId];
    
    $(id).bind('beforerender', function (e, next) {
      var $this = $(this);
      seajs.use('v3/widget/chaoshi_brand_render', function (Brand) {
        new Brand({
          $el: $this,
          elId: elId,
          groupIdsAd: data.groupIdsAd,
          next: next
        });
      });
    });
   }());
  
