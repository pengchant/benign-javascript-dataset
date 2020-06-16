
    jsLoader({
        name : 'shm',
        callback : function() {
            for(var i = 0, l = 2; i < l; i++){
                var focusScroll = new ScrollPic();
                focusScroll.scrollContId = "SI_Scroll_Wrap_t0" + i; //内容容器ID
                focusScroll.dotListId = "SI_Scroll_Dot_Lists_t0" + i;//点列表ID
                focusScroll.arrLeftId = "SI_Scroll_Arr_L_t0" + i;
                focusScroll.arrRightId = "SI_Scroll_Arr_R_t0" + i;
                focusScroll.dotClassName = "";//点className
                focusScroll.dotOnClassName = "cur";//当前点className
                focusScroll.listType = "";//列表类型(number:数字，其它为空)
                focusScroll.listEvent = "onmouseover"; //切换事件
                focusScroll.frameWidth = 1000;//显示框宽度
                focusScroll.pageWidth = 1000; //翻页宽度
                focusScroll.upright = false; //垂直滚动
                focusScroll.speed = 10; //移动速度(单位毫秒，越小越快)
                focusScroll.space = 40; //每次移动像素(单位px，越大越快)
                focusScroll.autoPlay = false; //自动播放
                focusScroll.autoPlayTime = 15; //自动播放间隔时间(秒)
                focusScroll.circularly = true;
                focusScroll.initialize(); //初始化
            }
            var tabArr = SHM.dom.byClass("mod54-tab"),
                contArr = SHM.dom.byClass("mod54-cont");

            var defaultSelectedNavIndex = (Math.random()*10|0) < 5 ? 0 : 1;

            SHM.app.tab.switchByEle(tabArr[defaultSelectedNavIndex]);
            contArr[defaultSelectedNavIndex?0:1].style.display = "none";
        }
    });
    