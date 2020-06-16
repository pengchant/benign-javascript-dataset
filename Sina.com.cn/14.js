
	 jsLoader({
                    name: 'shm',
                    callback: function(){             
                           var focusScroll = new ScrollPic();
                           focusScroll.scrollContId = "nwsu_Wrap"; //内容容器ID
                           focusScroll.frameWidth = 50;//显示框宽度
                           focusScroll.pageWidth = 50; //翻页宽度
                           focusScroll.upright = true; //垂直滚动
                           focusScroll.speed = 50; //移动速度(单位毫秒，越小越快)
                           focusScroll.space = 40; //每次移动像素(单位px，越大越快)
                           focusScroll.autoPlay = true; //自动播放
                           focusScroll.autoPlayTime = 5; //自动播放间隔时间(秒)
                           focusScroll.circularly = true;
                           focusScroll.initialize(); //初始化

					}

		})
	