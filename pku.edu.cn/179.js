
asideNavFix()//侧边导航栏固定
shareList()//新闻分享
pageSelect() //分页下拉框跳转方法
//分享
var sWSon = document.documentElement.clientWidth;
if(sWSon<=998){
	$('.newsList01').find('.item-share').click(function(e){
		if($(this).find('.bdsharebuttonbox ').hasClass('hide')){
			$(document).find('.bdsharebuttonbox').removeClass('show').addClass('hide')
			fenxiang($(this));
			
		}else{
			$(document).find('.bdsharebuttonbox').removeClass('show').addClass('hide')
		}
	})
	$('.newsList01').find('li').removeClass('imgHover');
}else{
	$('.newsList01').find('.item-share').hover(function(e){
		fenxiang($(this));
	},function(){
		$(document).find('.bdsharebuttonbox').removeClass('show').addClass('hide')
	})
}
