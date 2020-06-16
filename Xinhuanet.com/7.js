
$(function() {
    //包框广告关闭按钮
    var foo = function() {
        $("#bkTop,#bkLeft,#bkRight,#bkCloseLeft,#bkCloseRight").hide();
        $("#boxBg").css({
            "background": "none",
            "padding-top": "0"
        });
        $("#topBody").css({
            "width": "100%"
        })
    };
    $("body").on("click", "#bkCloseLeft,#bkCloseRight", foo);
    /*小头条下侧临时广告*/
    $("#part3LAd").slide({
mainCell: ".bd ul",
autoPlay: true,
delayTime: 700,
interTime:5000,
});
    //大头条发bigsize
    /*if($('#fonts').html()==="bigsize"){
$('#headArea h1 a').css({ "font-size":"36px"});
}*/
  /*  if ($('#fonts').html().indexOf("bigsize") >= 0) {
        $('#headArea h1 a').css({
            "font-size": "36px"
        });
    }
    if ($('#fonts').html().indexOf("red") >= 0) {
        $('#headArea h1 a').css({
            "color": "#db000a"
        });
        $('#headArea .hots p a').css({
            "color": "#db000a"
        });
    }*/
})
