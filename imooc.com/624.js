
	// 处理图片懒加载
	var htmlFilterInterval;
	(function() {
		htmlFilterInterval = setInterval(function() {
			var articleBox = document.getElementById('article_content');
			if(window.$ && $.fn.lazyload && articleBox) {
				clearInterval(htmlFilterInterval);
				htmlFilterInterval = null;
				$(articleBox).replaceWith(articleEl);
				$('img.lazyload').lazyload({
					load: function() {
						$(this).removeClass('lazyload');
					}
				});

                // 20190801优化-左侧菜单处理
                if(sessionStorage.getItem('read_hide_menu') == undefined || sessionStorage.getItem('read_hide_menu') == 0) {
                    $('.sub-header, .main-con').removeClass('hide-menu');
                    $('.js-switch-menu').attr('title', '隐藏目录')
                }
			}
		},5);
	}());
