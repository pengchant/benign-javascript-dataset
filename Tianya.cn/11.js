
			$(document).ready(function() {
				//地区切换
				$('.province_icon').click(function(e) {
					e.preventDefault();
					var province = $(this).parents('.province_more').find('.province');

					if(province.css('display') === 'none') {
						province.slideDown(300)
					} else {
						province.slideUp(300)
					}
				});

				var newsC = $('#news-list-C ul')
				$('.province_top .right img').click(function(e) {
					e.preventDefault();
					$(this).parents('.province').slideUp(300);
				});

				var txt1 = '';
				$('.box_title01 .province_box li').click(function(e) {
					var index1 = $(this).index('.box_title01 .province_box li');
					txt1 = $('.box_title01 .province_box li').eq(index1).text();
					for(var a = 0, len1 = dataInfo1.length; a < len1; a++) {
						if(dataInfo1[a].province === txt1) {
							url1 = dataInfo1[a].url;
							$('.lx-wz').attr({
								'href': url1,
								'target': "blank"
							});

						}
					}
					var url = $(this).data('url');
					if(url) {
						loadData(url);
						$(this).parents('.box_title').find('.tab_province a').html($(e.target).html());
						$('.province_top .right img').trigger('click');
					}
				})

				//根据ip获取城市。
				var province = '';
				var target = '';
				
				var dataInfo1 = [{
						province: '北京',
						url: 'http://www.wenming.cn/dfcz/bj/'
					},
					{
						province: '天津',
						url: 'http://www.wenming.cn/dfcz/tj/'
					},
					{
						province: '广西',
						url: 'http://www.wenming.cn/dfcz/gx/'
					},
					{
						province: '新疆',
						url: 'http://www.wenming.cn/dfcz/xj/'
					},
					{
						province: '四川',
						url: 'http://www.wenming.cn/dfcz/sc/'
					},
					{
						province: '安徽',
						url: 'http://www.wenming.cn/dfcz/ah/'
					},
					{
						province: '陕西',
						url: 'http://www.wenming.cn/dfcz/sx_1689/'
					},
					{
						province: '云南',
						url: 'http://www.wenming.cn/dfcz/yn/'
					},
					{
						province: '贵州',
						url: 'http://www.wenming.cn/dfcz/gz/'
					},
					{
						province: '辽宁',
						url: 'http://www.wenming.cn/dfcz/ln/'
					},
					{
						province: '湖北',
						url: 'http://www.wenming.cn/dfcz/hb_1679/'
					},
					{
						province: '河北',
						url: 'http://www.wenming.cn/dfcz/hb/'
					},
					{
						province: '山西',
						url: 'http://www.wenming.cn/dfcz/sx/'
					},
					{
						province: '湖南',
						url: 'http://www.wenming.cn/dfcz/hn_1680/'
					},
					{
						province: '浙江',
						url: 'http://www.wenming.cn/dfcz/zj/'
					},
					{
						province: '青海',
						url: 'http://www.wenming.cn/dfcz/qh/'
					},
					{
						province: '吉林',
						url: 'http://www.wenming.cn/dfcz/jl/'
					},
					{
						province: '福建',
						url: 'http://www.wenming.cn/dfcz/fj/'
					},
					{
						province: '江西',
						url: 'http://www.wenming.cn/dfcz/jx/'
					},
					{
						province: '内蒙古',
						url: 'http://www.wenming.cn/dfcz/nmg/'
					},
					{
						province: '广东',
						url: 'http://www.wenming.cn/dfcz/gd/'
					},
					{
						province: '甘肃',
						url: 'http://www.wenming.cn/dfcz/gs/'
					},
					{
						province: '重庆',
						url: 'http://www.wenming.cn/dfcz/zq/'
					},
					{
						province: '山东',
						url: 'http://www.wenming.cn/dfcz/sd/'
					},
					{
						province: '黑龙江',
						url: 'http://www.wenming.cn/dfcz/hlj/'
					},
					{
						province: '上海',
						url: 'http://www.wenming.cn/dfcz/sh/'
					},
					{
						province: '兵团',
						url: 'http://www.wenming.cn/dfcz/bt_1/'
					},
					{
						province: '河南',
						url: 'http://www.wenming.cn/dfcz/hn/'
					},
					{
						province: '江苏',
						url: 'http://www.wenming.cn/dfcz/js/'
					},
					{
						province: '西藏',
						url: 'http://www.wenming.cn/dfcz/xz/'
					},
					{
						province: '宁夏',
						url: 'http://www.wenming.cn/dfcz/nx/'
					},
					{
						province: '海南',
						url: 'http://www.wenming.cn/dfcz/hn_1683/'
					}
				];

				function loadData(url, fn) {
					$.ajax({
						type: "get",
						url: url,
						dataType: "xml",
						error: function(xml) {
							//alert("加载XML 文件出错!");
						},
						success: function(xml) {
							var html = '';
							$(xml).find("item").each(function(i) {
								var title = $(this).find("title").text();
								var href = $(this).find("id").text();
								var time = $(this).find("time").text();
								var pic = $(this).find("pic").text();
								html += '<li><a href=' + href + ' target="_blank">' + title + '</a></li>';
							})
							newsC.html(html);
							fn && fn();
						}
					})
				}

			});
		