
  
  (function () {
  
     var id = '#chaoshi_top_28';
     var elId = 'chaoshi_top_28';
     var data = window.data['chaoshi_top_28'];
     var portal_floor_id = data.portal_floor_id;
    
   $(id).bind('beforerender', function (e, next) {
    var $this = $(this);
    seajs.use('v3/widget/chaoshi_top_render', function (Top) {
      new Top({
        $el: $this,
        elId: elId,
        groupIdsAd: data.groupIdsAd,
        next: next
      });
    });
    });
    $(id).bind('done', function () {
      var $this = $(this);
      seajs.use(['v3/widget/chaoshi_top'], function (Top) {
        new Top({
          $el: $this,
          portal_floor_id: portal_floor_id
        });
      });
    });
   }());
  
