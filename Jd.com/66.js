
  
  (function () {
  
      var id = '#chaoshi_like_26';
   	  var elId = 'chaoshi_like_26';
    
    $(id).bind('beforerender', function (e, next) {
      var $this = $(this);
      seajs.use(['v3/widget/chaoshi_like_render'], function (Like) {
        new Like({
          $el: $this,
          elId: elId,
          domStr: $this.html(),
          next: next
        });
      });
    });
   $(id).bind('done', function () {
      var $this = $(this);
      seajs.use(['v3/widget/chaoshi_like'], function (Like) {
        new Like({
          $el: $this,
          elId: elId
        });
      });
    });
   }());
  
