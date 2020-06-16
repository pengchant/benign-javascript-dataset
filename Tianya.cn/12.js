
			// 顶部及大图轮播
			/*鼠标移过，左右按钮显示*/


			$(".foucua01").hover(function() {
				$(this).find(".prev,.next").fadeTo("show", 0.1);

			}, function() {
				$(this).find(".prev,.next").hide();
			})

			$(".foucua01").slide({
				titCell: ".num ul",
				mainCell: ".slides_item",
				effect: "fold",
				autoPlay: true,
				delayTime: 1000,
				autoPage: true,
				interTime: 4000
			}); //如果不输出数字autoPage:"<li><a></a></li>"
			$(".foucua11").slide({
				titCell: ".num11 ul",
				mainCell: ".slides_item11",
				effect: "fold",
				autoPlay: true,
				delayTime: 1000,
				autoPage: true,
				interTime: 6000
			}); //如果不输出数字autoPage:"<li><a></a></li>"
			$(".foucua02").slide({
				mainCell: ".slides_item02",
				effect: "fold",
				autoPlay: true,
				delayTime: 1000,
				autoPage: true,
				interTime: 5000
			}); 
	


			$('.num1111 li').text('');
			$('.num11 li').text('');
			$(".foucua111").slide({
				titCell: ".num111 ul",
				mainCell: ".slides_item111",
				effect: "fold",
				autoPlay: true,
				delayTime: 1000,
				autoPage: true,
				interTime: 6000
			}); //如果不输出数字autoPage:"<li><a></a></li>"
			$('.num111 li').text('');
			$(".image-show").hide();
			$(".foucua1111").slide({
				titCell: ".num1111 ul",
				mainCell: ".slides_item1111",
				effect: "fold",
				autoPlay: true,
				delayTime: 1000,
				autoPage: true,
				interTime: 6000
			}); //如果不输出数字autoPage:"<li><a></a></li>"
			$('.num1111 li').text('');

			jQuery(".txtMarquee-top").slide({
				mainCell: ".bd ul",
				autoPlay: true,
				effect: "topMarquee",
				vis: 2,
				interTime: 80,
				trigger: "click"
			});

			$(".image-text1").hover(function() {
				$(this).find(".image-show").show()
			}, function() {
				$(this).find(".image-show").hide()
			});
			$(".pic-95list dl dd").hover(function() {
				$(this).find(".image-show").show()
			}, function() {
				$(this).find(".image-show").hide()
			});
			// 延时加载
			$(document).ready(function() {
				$("img.lazyload").lazyload({
					threshold: 300,
					failurelimit: 30
				});
				var width = $(".itema01").width();
				$(".slides_containera01").css("width", $(".itema01").size() * width);
				var timer = setInterval(move, 6000);
				var iNow = 0;

				function move() {
					if(iNow >= $(".itema01").size()) {
						iNow = 0;
					}
					$(".slides_containera01").animate({
						left: -iNow * width
					})
					iNow++;
				}
			})


			/*八大块切换*/
			$(function() {

				if($.cookie('ids')) {
					var ids = $.cookie('ids').split(',')
					$('.lxx-box').each(function(i, n) {
						$(n).attr('id', ids[i]);
					});
				};

				$('.lxx-box-more').each(function() {
					$(this).click(function() {
						$(this).next().slideDown();
					})
				});

				$('.lxx-lm-box-tit-close').each(function() {
					$(this).click(function() {
						$(this).parents('.lxx-xl-box').slideUp();
					})
				});

				$('.lxx-box .lxx-li').click(function() {
					$('.lxx-xl-box').slideUp();
					/*点击li的index*/
					var lxxindex = $(this).index();
					/*li的box的index*/
					var lxxindex1 = $(this).parents('.lxx-box').index();

					if(lxxindex1 > 8) {
						lxxindex1 = 8;
					} else if(lxxindex1 > 4) {
						lxxindex1 = lxxindex1 - 1;
					}
					/*点击li的box的定位*/
					var a = $('.lxx-box').eq(lxxindex).attr('id');
					/*原box的定位*/
					var b = $('.lxx-box').eq(lxxindex1).attr('id');
					/*改变box的位置*/
					$('.lxx-box').eq(lxxindex).attr('id', b)
					$('.lxx-box').eq(lxxindex1).attr('id', a)

					var ids = []
					$('.lxx-box').each(function(i, n) {
						ids.push($(this).attr('id'));
					});

					$.cookie('ids', ids);
				});
				

			})
		