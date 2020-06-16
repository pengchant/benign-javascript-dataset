
$(window).scroll(function(){
	if ($(window).scrollTop()>170){
		$(".silide_ban").show(300);
		}else{
			$(".silide_ban").hide(300);
		};
});
    var timer = setInterval(function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(osTop < 175){
            document.documentElement.scrollTop = document.body.scrollTop = osTop + 5;
        }else{
            clearInterval(timer);
        }
    }, 10);
