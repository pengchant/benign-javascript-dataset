
$(window).scroll(function(){
        if($(window).scrollTop()>=500){
            $(".book_returntop").css("display", "block");
        }else{
            $(".book_returntop").css("display", "none");
        }
    });
    $(".book_returntop a").click(function(){$('body,html').animate({scrollTop:0},100);
});

