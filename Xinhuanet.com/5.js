
var _screenH = $(window).height();
// 右侧导航栏
var productBodyEv={
    $_silder : $("#productBody .sliderLine"),
    $_list : $("#productBody .list"),
    $_listItem : $("#productBody .list li"),
    $_twoCode : $("#productBody .twoCode"),
    init:function(){
		$("#productBody img").each(function(){
			$(this).attr("src",$(this).attr("data-original"));
		});
/*		if(_screenH-223 <= 590){//屏幕高度-本身TOP值 < 本身高度
            $("#productBody").css("top",(_screenH-590)/2+200);
			$("#productBody .tools").css("bottom",'-60px');
        }*/
        productBodyEv.bodyEv();
        productBodyEv.showTwoCode();
        productBodyEv.goTop();
        productBodyEv.closeBody();
        productBodyEv.listItem();
        var $_scrollAdLi = $(".scrollAd li");
        var scrollAdLiLen = $_scrollAdLi.length;
        var str = "";
        if(scrollAdLiLen==1){
            $("#productBody .scrollAd .btn").hide();
        }
        for(i=0;i<scrollAdLiLen;i++){
            str+='<li></li>';
        };
        $(".scrollAd .hd").append(str);
        $_scrollAdLi.show();
        $(".scrollAd").slide({ mainCell:".pic",effect:"leftLoop", autoPlay:true,autoPage:true,interTime:3000,prevCell:".adPrev",nextCell:".adNext"});
		
        if($(".scrollZt").children().length>1){
            $("#productBody .ad2").slide({ mainCell:".scrollZt",effect:"fold", autoPlay:true,autoPage:true,interTime:6000});
        }; 
		
		var isTouchDevice = 'ontouchstart' in window;
		if(isTouchDevice){
			$("#productBody").hide();
		}

    },
    listItem:function(){
        productBodyEv.$_listItem.hover(
            function(){
                $(this).addClass("on").find(".floatItem").stop().animate({"width":260},300);
            },
            function(){
                $(this).removeClass("on").find(".floatItem").stop().animate({"width":98},300);
            }
        )
    },
    showTwoCode:function(){
        productBodyEv.$_twoCode.hover(
            function(){
                $(this).find("div").slideDown();
            },
            function(){
                $(this).find("div").slideUp();
            }
        );
    },
    goTop:function(){
        $("#productBody .goTop").click(function(){
            $('html,body').animate({
                scrollTop : '0px'
            }, 200);
        });
    },
    closeBody:function(){
        $("#productBody .close").click(function(){
            $("#productBody").slideUp();
        });
    },
    bodyEv:function(){
        $("#productBody").hover(
            function(){
                $(this).find(".lazyload").each(function(){
                    $(this).attr("src",$(this).attr("data-original")).removeClass("lazyload");
                })
            },
            function(){}
        )
    }
};

productBodyEv.init();

/*$(function(){
	var goUrl = "http://www.xinhuanet.com/index_1.htm";
	$("a").each(function(index, element) {
		var _src = $(this).attr("href");
		if(_src=="http://www.news.cn"||_src=="http://www.xinhuanet.com"||_src=="http://www.news.cn/"||_src=="http://www.xinhuanet.com/"){
			$(this).attr("href",goUrl)
		}
	});	
})*/

