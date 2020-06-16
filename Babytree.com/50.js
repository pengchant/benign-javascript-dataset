
    var query = new QueryBabyTreeAds();
    query.queryMultiAds([{"rgid":2578,"srv":"BBAD"},{"rgid":2579,"srv":"BBAD"},{"rgid":2580,"srv":"BBAD"}]);

    $(window).load(function () {
        $('#slider2578_2579_2580').flexslider({
            animation: "slide", //slide,fade
            animationLoop: true,
            //itemWidth: 400,
            //itemMargin: 5,
            //maxItems: 1,
            //minItems: 1,
            controlNav: true, //是否显示控制菜单
            directionNav: false, //是否显示左右控制按钮
            slideshow: true, //载入页面时，是否自动播放
            slideshowSpeed: 5000, //自动播放速度毫秒
            animationDuration: 800, //内容切换时间
        });
    });
