
	// 处理长篇幅文章部分显示
	var hideArticleInterval, htmlFilterInterval;
	(function() {
		hideArticleInterval = setInterval(function() {
			contentEl = document.querySelector('.detail-content');
			var height = contentEl.offsetHeight;
			if(contentEl && height > 0) {
				clearInterval(hideArticleInterval);
				hideArticleInterval = null;
				if(height > 3000) {
					contentEl.className += ' long-content';
				}
				document.querySelector('.showMore span').addEventListener('click', function() {
					$('.detail-content').removeClass('long-content');
				});
			}
		},5);
		htmlFilterInterval = setInterval(function() {
			var articleBox = document.getElementById('article_content');
			if(window.$ && $.fn.lazyload && articleBox) {
				clearInterval(htmlFilterInterval);
				htmlFilterInterval = null;
				$(articleBox).replaceWith(articleEl);
				if(twemoji){
					twemoji.parse(document.body);
				}
				$('img.lazyload').lazyload({
					load: function() {
						$(this).removeClass('lazyload');
					}
				});
			}
		},5);
	}());
