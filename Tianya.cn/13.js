


$(function(){
$('.close-img').click(function(){
$(this).parent().hide();
})
})

setTimeout(function(){document.getElementById("lunbo-wt").style.display="none";},10000);



$(".picScroll01").slide({mainCell: ".picList",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:1,vis:4});
//,autoPlay:true  自动滚动  前/后按钮是否继续循环，若为false则当翻动到最前/后页时，前/后按钮点击无效，同时增加prevStop/nextStop类名控制样色
			


$('.main-mar').width($('.xxqg').outerWidth()+$('.gb_index_top_hrg1').outerWidth()+$('.xg_learn_pic').outerWidth()+$('.gb_index_top_hrg').outerWidth()+$('.gb_index_top_lh').outerWidth()+$('.rmtzx').outerWidth()+70)

			function addScript(url) {
				for(var index = 0; index < url.length; index++) {
					var element = url[index];
					var scriptObj = document.createElement("script");
					scriptObj.src = element;
					scriptObj.type = "text/javascript";
					document.getElementsByTagName("body")[0].appendChild(scriptObj);
				}
			}
			if(navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0) {

				$("#ampOutBox").hide();
				$("#focus_img").html('<iframe class="wloadIframeAD" width="100%" height="100%" scrolling="no" frameborder="0" border="0" marginwidth="0" marginheight="0" src="http://www.wenming.cn/gxym/2017index_ifr/index.shtml"></iframe>');
				$('.sy-vid').hide();
				$('.xgb-hxgq').show();
				$('.player-box').hide();

			} else {
				var urlArr = ["http://images1.wenming.cn/web_wenming/amp.resources/all.js"]
				addScript(urlArr);
			}
		