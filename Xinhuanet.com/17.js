   
$(function(){   
$(".tab5k .tab_title5k li").mouseover(function () {   
$(this).addClass('active5k');   
$(this).siblings().removeClass('active5k')   
var _index = $(this).index();   
$(this).parent().parent().parent().find('.tab_box_content5k').eq(_index).show().siblings().hide();   
})            
})
