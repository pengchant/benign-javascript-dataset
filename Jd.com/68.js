
  
  (function () {
  
      var id = '#chaoshi_lift_27';
   	  var elId = 'chaoshi_lift_27';
    
    $(id).bind('beforerender', function (e, next) {
      var $this = $(this);
      seajs.use('v3/widget/chaoshi_lift_render', function (Lift) {
      new Lift({
        $el: $this,
        elId: elId,
        next: next
      });
    });
    });
    $(id).bind('done', function () {
      var $this = $(this);
      seajs.use('v3/widget/chaoshi_lift', function (Lift) {
        window.chaoshiLift = new Lift({
          $el: $this
        });
      });
    });
   }());
  
