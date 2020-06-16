
var float_top;
jQuery(document).ready(function($){
	 var $sidebar = $(".xzbk"),
	 $sidebam = $(".pxfbt"),
      $window = $(window),
      offset1 = $sidebar.offset(),
	  offset2 = $sidebam.offset();
      $window.scroll(function() {
        if ($window.scrollTop() > (offset1.top-100)) {
        $sidebar.css({"position":"fixed","top":"80px"})
      } else {
        $sidebar.css({"position":"","top":"0px"})
      }
	  
	if ($window.scrollTop() > offset2.top-20) {
        $sidebam.css({"position":"fixed","top":"80px"})
      } else {
        $sidebam.css({"position":"","top":"0px"})
      }  
	  
	  
    });
});

