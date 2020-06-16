
var first=0;

$(".banner .frame").slick({
    autoplay:true, 
    autoplaySpeed:6000,
    pauseOnDotsHover:true,
    pauseOnFocus:false,
    speed:600,
    dots:true,
    arrows:false,
    appendDots:".banner .navg",
    pauseOnHover:false,
    customPaging: function(slider, i) {  
        return i + 1;
    },
});
setTimeout(function(){
    $(".banner .slick-active .a1").focus();
},500);

$(".home6 .frame").slick({
    autoplay:true,
    autoplaySpeed:6000,
    speed:600,
    dots:false,
    arrows:false
});

$(".home7 .focus1 .frame").slick({
    autoplay:true,
    autoplaySpeed:6000,
    speed:600,
    dots:true,
    arrows:false,
    appendDots:".home7 .focus1 .navg",
    customPaging: function(slider, i) {  
        return i + 1;
    },
});
$(".home10 .focus1 .frame").slick({
    autoplay:true,
    autoplaySpeed:6000,
    speed:600,
    dots:true,
    arrows:false,
    appendDots:".home10 .focus1 .navg",
    customPaging: function(slider, i) {  
        return i + 1;
    },
});



$(function(){
    $(".body_home").addClass("showdiv");
    //$(".rr").addClass("showdiv");
    $(".home1").removeClass("showdiv");
    setTimeout(function(){
        $(".body_home").addClass("s");
    },500);
    
    //$(".body_b").mCustomScrollbar({});
});



$(".home1 .td").each(function(index, element) {
    var s=GetRandomNum(5,15);
    $(this).css("transition-delay",s*0.1+"s");
    $(this).find(".inner").css("transition-delay",(s+3)*0.1+"s");
});


setInterval(function(){
    $(".home1 .td:has(strong)").removeClass("s");
    var s=GetRandomNum(0,$(".home1 .td:has(strong)").length);
    $(".home1 .td:has(strong)").eq(s).addClass("s");
},5000);



$(".td9,.td12,.td13,.td16,.td22").each(function(index, element) {
    var s=GetRandomNum(5,15);
    $(this).css("animation-delay",s*0.1+"s");
});
$(".home4 .d").each(function(index, element) {
    var s=GetRandomNum(1,7);
    $(this).css("transition-delay",s*0.1+"s");
    $(this).find("span").css("transition-delay",(s+3)*0.1+"s");
});


$(".home2 .item").click(function(){
    $(this).siblings().removeClass("now");
    $(this).addClass("now");
    $(".home2 .pic .d").removeClass("s");
    $(".home2 .pic .d").eq($(this).index()).addClass("s");
});
$(".home2 .item").eq(0).click();

tabdiv(".home3 .title .fz40",".home3 .list","click",3);
$(".home3 .title .fz40:first").click();

$(".rr").click(function(){
    $(".body_b").css("z-index",1);
    $(".body_r").css("z-index",3);
    $(".body_r").addClass("showdiv");
    $(".nav_b").addClass("showdiv");
    $(".rr").removeClass("showdiv");    
    $(".home").addClass("lock");
    setTimeout(function(){
        $(".body_home").removeClass("showdiv");
        $(".home1").addClass("showdiv");
        //$(".home1 .td strong").each(function(index, element) {
            //shownum($(this),3000);
        //});
    },500);
    setTimeout(function(){
        first=1;        
    },1000);
});

$(".bb").click(function(){  
    $(".body_b").addClass("showdiv");//.focus();
    $(".header").addClass("mobile");
    //first=1;
    setTimeout(function(){
        $(".body_home").removeClass("showdiv");//.addClass("leave");
        $(".home5").addClass("showdiv");
        //$(".nav_r").addClass("showdiv");
    },500);
})

$(".rb").click(function(){
    setTimeout(function(){
        $(".ll").click();
    },1100);
    if($(".body_b").hasClass("showdiv")){
        $(".body_r").removeClass("showdiv");
    }
    else{
        $(".bb").click();
        $(".body_b").css("z-index",3);
        $(".body_r").css("z-index",1);
    }
});

$(".body_b").scrollTop(0);

$(".body_home").mousewheel(function(event, delta, deltaX, deltaY){
    /*if(first==0){     
        $(".rr").click();
        setTimeout(function(){
            first=1;
            $(".home").removeClass("showdiv");//.addClass("leave");
        },1200);
    }*/
    //else{
        if(delta<0){
            $(".bb").click();
        }
    //}
});

var sw_k=1;
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if((e.keyCode==40 || e.keyCode==32 || e.keyCode==34) && $(".body_home").hasClass("showdiv")){
        sw_k=0;
        $(".bb").click();
        $(".body_b").animate({scrollTop:0},10);
        $(".body_b").focus();
        setTimeout(function(){sw_k=1;},1000);
    }
    if((e.keyCode==38 || e.keyCode==33) && $(".body_b").hasClass("showdiv") && $(".body_b").scrollTop()==0){
        sw_k=0;
        $(".body_home").addClass("showdiv").focus();
        setTimeout(function(){
            $(".banner .slick-active .a1").focus();
        },500);
        $(".body_b").removeClass("showdiv");        
        $(".home5").removeClass("showdiv");
        if($(".body_b").css("position")=="fixed")$(".header").removeClass("mobile");
        setTimeout(function(){sw_k=1;},1000);
    }
    if((e.keyCode==37 || e.keyCode==38 || e.keyCode==33) && $(".body_r").hasClass("showdiv") && sw==1){
        $(".nav_b .list .item.now").prev().click();
    }
    if((e.keyCode==39 || e.keyCode==40 || e.keyCode==34 || e.keyCode==32) && $(".body_r").hasClass("showdiv") && sw==1){
        $(".nav_b .list .item.now").next().click();
    }
}

$(window).scroll(function(){
    if($(window).width()<=850){
        if($(window).scrollTop()<50){
            $(".header").removeClass("mobile")
        }
        else{
            $(".header").addClass("mobile")
        }
    }
});

$(".ll").click(function(){
    $(".body_r").removeClass("showdiv");
    $(".nav_b").removeClass("showdiv");
    $(".rr").addClass("showdiv");
    $(".home").removeClass("lock")
    setTimeout(function(){      
        $(".nav_b .item:first").click();
        $(".home1").removeClass("showdiv");
        if(!$(".body_b").hasClass("showdiv")){
            $(".body_home").addClass("showdiv").focus();
        }
    },1100);
});

var video1=document.getElementById("video1");

var svgs=[];
$(".home11 .item svg").each(function(index, element) {
    var id=$(this).attr("id");
    svgs[index] = new Vivus(id,{type:'delayed',duration:60});
});
var svgs1=[];
$(".home7 svg").each(function(index, element) {
    var id=$(this).attr("id");
    svgs1[id] = new Vivus(id,{type:'delayed',duration:60,start:'autostart'});
});

$(".home11 .item").mouseenter(function(){
        if($(window).width()>=1024){
            svgs[$(this).index()].reset().play();
        }
    }
);
$(".home7 .dd").mouseenter(function(){
        if($(window).width()>=1024){
            svgs1[$(this).find("svg").attr("id")].reset().play();
        }
    }
)

$(".home11 .item").mouseenter(
    function(){     
        svgs[$(this).index()].reset().play();
    }
);
$(".home7 .dd").mouseenter(
    function(){
        svgs1[$(this).find("svg").attr("id")].reset().play();
    }
);


$(".body_b").scroll(function(){
    $(".home5,.home6 .part1,.home6 .part2,.home7,.home8,.home9,.home10 .part1,.home10 .part2,.home11 .block").each(function(index, element) {
        var e=$(this);
        var fix=parseInt(e.attr("fix"));
        if(!fix && fix!=0){fix=$(window).height()*6*0.1;}
        else{fix=$(window).height()*fix*0.1;}
        //var h=$(window).height()-$(e).height()>0?$(window).height()-$(e).height():0;
        if($(window).scrollTop()>=$(e).offset().top-fix){
            if(!$(e).hasClass("showdiv")){
                $(e).addClass("showdiv");
                if($(e).hasClass("part1")){
                    setTimeout(function(){
                        $(".home9 .part1").addClass("s");
                    },1000);
                }
                if($(e).find("#video1").length>0){
                    video1.play();
                }
                if($(e).parent().hasClass("home11")){
                    setTimeout(function(){
                        for(var i=0;i<svgs.length;i++){
                            svgs[i].play();
                        }
                    },500);
                }
            }           
        }
        else{
            if($(e).hasClass("showdiv")){
                $(e).removeClass("showdiv");
                if($(e).hasClass("part1")){
                    $(".home9 .part1").removeClass("s");
                }
            }
        }
    });
});

$(".body_b").mousewheel(function(event, delta, deltaX, deltaY){
    if(delta>0 && $(".body_b").scrollTop()==0){
        //$(".home").removeClass("leave");
        $(".body_home").addClass("showdiv");
        setTimeout(function(){
            if($(window).width()>850){$(".banner .slick-active .a1").focus();}
            //$(".banner .slick-active .a1").focus();
        },500);
        $(".body_b").removeClass("showdiv");
        // $(".header").removeClass("mobile")
        $(".home5").removeClass("showdiv");
        if($(".body_b").css("position")=="fixed")$(".header").removeClass("mobile");
        //$(".nav_r").removeClass("showdiv");
        
    }
    
    if(deltaY<0 && $(".body_b").scrollTop()+$(window).height()>=$(".body_b .scroll").height()){     
        //$(".rr").click();
        //setTimeout(function(){
            //$(".body_b").scrollTop(0);
        //},1250);
    }
    if(deltaY>0){
        $(".header2").removeClass("lit");
    }
    if(deltaY<0){
        $(".header2").addClass("lit");
    }
});

//初始化文字
function settxt(e){
    var text=$(e).text();
    var l=0;
    var html="";
    while(l<text.length){       
        html+="<i>"+text.substr(l,1)+"</i>";
        l+=1;
    }   
    $(e).html(html);    
}

$(".home1 .td").each(function(index, element) {
    settxt($(this).find("strong"));
});

var ls=100/$(".home2 .list .item").length;
$(".home2 .list").mCustomScrollbar({
  autoDraggerLength: false,  
  axis: 'x',  
  scrollbarPosition: 'outside',
    callbacks:{
        whileScrolling: function(){
            //console.log(this.mcs.leftPct)
            var p=this.mcs.leftPct;
            $(".home2 .list .item").each(function(index, element) {
                if(p>index*ls){
                    $(this).siblings().removeClass("now");
                    $(this).addClass("now");
                }
            });
        }
    }
})


tabdiv(".home8 .l .fz40 a",".home8 .div .list","click",1,300);
tabdiv(".home8 .l .fz40 a",".home8 .l .a a","click",1,300);
$(".home8 .l .fz40 a").eq(0).click();

var sto_r=0;
sto_r=setTimeout(function(){
    if(sto_r!=-1){
        $(".body_r").removeClass("dis");
        $(".rr").addClass("showdiv");
        sto_r=-1;
    }
},10000);

$(window).load(function(){
    if(sto_r!=-1){
        $(".body_r").removeClass("dis");
        $(".rr").addClass("showdiv");
        sto_r=-1;
    }
});
