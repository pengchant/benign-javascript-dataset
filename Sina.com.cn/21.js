
						jsLoader({
							name: 'shm',
							callback: function() {
								var ispScroll = new ScrollPic();
								ispScroll.scrollContId = "SI_products"; //内容容器ID

								ispScroll.dotClassName = ""; //点className
								ispScroll.dotOnClassName = "cur"; //当前点className
								ispScroll.listType = ""; //列表类型(number:数字，其它为空)
								ispScroll.listEvent = "onmouseover"; //切换事件
								ispScroll.frameWidth = 238; //显示框宽度
								ispScroll.pageWidth = 238; //翻页宽度
								ispScroll.upright = false; //垂直滚动
								ispScroll.speed = 10; //移动速度(单位毫秒，越小越快)
								ispScroll.space = 40; //每次移动像素(单位px，越大越快)
								ispScroll.autoPlay = true; //自动播放
								ispScroll.autoPlayTime = 10; //自动播放间隔时间(秒)ispScroll.autoPlayTime = typeof(autoPlayTime)!='undefined'?autoPlayTime : [15,5,5,5];
								ispScroll.circularly = true;
								ispScroll.initialize(); //初始化
								SHM.E('SI_products_arrow_l').onmousedown = function() {
									ispScroll.pre();
									return false;
								}
								SHM.E('SI_products_arrow_r').onmousedown = function() {
									ispScroll.next();
									return false;
								}

							}
						});
						