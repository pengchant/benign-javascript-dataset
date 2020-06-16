
var timer = setInterval(function(){
var osTop = document.documentElement.scrollTop || document.body.scrollTop;
if(osTop < 175){
	document.documentElement.scrollTop = document.body.scrollTop = osTop + 5;
}else{
	clearInterval(timer);
}
}, 10);
$(window).scroll(function(){
	if ($(window).scrollTop()>172){
		$(".slide_ban").show(300);
		}else{
			$(".slide_ban").hide(300);
		};
});
