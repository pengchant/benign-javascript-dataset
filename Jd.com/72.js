
  
  (function () {
  
   var id = '#chaoshi_pop_29';
   var elId = 'chaoshi_pop_29';
   var data = window.data[elId];
    
    $(id).bind('beforerender',function (e, next) {
      var $this = $(this);
      seajs.use('v3/widget/chaoshi_pop_render', function (Pop) {
        new Pop({
          $el: $this,
          elId: elId,
          groupIdsAd: data.groupIdsAd,
          next: next
        });
      });
    });
    $(id).bind('done', function () {
      var $this = $(this);
      seajs.use(['v3/widget/chaoshi_pop'], function (Pop) {
        new Pop({
          $el: $this
        });
      });
    });
   }());
  
