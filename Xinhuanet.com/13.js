   
$(function(){   
$(".tab .tab_title li").mouseover(function () {   
$(this).addClass('active');   
$(this).siblings().removeClass('active')   
var _index = $(this).index();   
$(this).parent().parent().parent().find('.tab_box_content').eq(_index).show().siblings().hide();   
})            
})
