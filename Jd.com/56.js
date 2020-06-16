
  
  (function () {
  
  		var portal_floor_id = '21';
      var id = '#chaoshi_category_21';
      var elId = 'chaoshi_category_21';
      var data = window.data[elId];
    
    $(id).bind('beforerender', function (e, next) {
      var $this = $(this);
      seajs.use('v3/widget/chaoshi_category_render', function (Category) {
        new Category({
          $el: $this,
          elId: elId,
          groupIdsAd: data.groupIdsAd,
          groupIdsSku: data.groupIdsSku,
          next: next
        });
      });
    });
   $(id).bind('done', function () {
      var $this = $(this);
      seajs.use('v3/widget/chaoshi_category', function (Category) {
        new Category({
          $el: $this,
          elId: elId,
          groupIdsAd: data.groupIdsAd,
          title: data.title,
          portal_floor_id: portal_floor_id
        });
      });
    });
   }());
  
