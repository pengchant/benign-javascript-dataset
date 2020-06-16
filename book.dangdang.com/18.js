
$(function(){

$('.img').live('mouseenter',function(){ $(this).parent('li').find(".name a").attr("style","text-decoration: underline;color: #ec7814");});

$('.img').live('mouseleave',function(){  $(this).parent('li').find(".name a").attr("style"," ");});


})
