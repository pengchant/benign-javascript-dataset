 
	$(function(){ 
		// 文章日历 			 
		$(".rili2").sudyPubdate({         
			target:".news_date",      // 日期元素 			
			lang: "en",             //  月份语言，支持"en"英文，"cn"中文, "num"数字，默认为数字
			separator:"-",          // 文章日期之间分隔符的，默认是后台输出的"-"号
		  format:"年月日",           // 文章日期格式，默认为年月日
			tpl: '<div class="news_year">%d%</div><div class="news_days">%m%</div>'
		  // 自定义输出格式  %Y%代表年，%m%代表月, %d%代表日, %w%代表星期, %M%代表翻译后月份，%W%代表翻译后星期
		});
	});
