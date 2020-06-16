
  	$(".tuitou_a a").on("click",function(){
  		var url = $(this).data("url");
  		$.ajax({
  			url:url,
  			dataType:"jsonp"
 		});
  	})
  