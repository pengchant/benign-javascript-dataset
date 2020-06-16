   
$(function(){   
$(".tab03 .tab_title03 li").mouseover(function () {   
$(this).addClass('active03');   
$(this).siblings().removeClass('active03')   
var _index = $(this).index();   
$(this).parent().parent().parent().find('.tab_box_content03').eq(_index).show().siblings().hide();   
})            
})
