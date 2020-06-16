   
$(function(){   
$(".tab01 .tab_title01 li").mouseover(function () {   
$(this).addClass('active01');   
$(this).siblings().removeClass('active01')   
var _index = $(this).index();   
$(this).parent().parent().parent().find('.tab_box_content01').eq(_index).show().siblings().hide();   
})            
})
