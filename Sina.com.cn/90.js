

        //延时加载页面图片
        $('img[data-src]').live('inview', function(event, isVisible) {
          if (!isVisible) { return; }

          var img = $(this);

          // Show a smooth animation
          img.css('opacity', 0);
          img.load(function() { img.animate({ opacity: 1 }, 500); });
          // Change src
          img.attr('src', img.attr('data-src'));

          // Remove it from live event selector
          img.removeAttr('data-src');
        });

        //关闭广告
        $('.ad_wrap .closead a').click(function() {
           $('.ad_wrap').hide();
           $('.slide_w').removeClass('hasgg');
        });

        //轮播
        new slide('slid');

        //趣味搜索浮层
        $('.fs_box').hover(function(){
            $(this).addClass('fs_hover').find('.fs_pop').stop().fadeIn("fast");
        },function(){
            $(this).removeClass('fs_hover').find('.fs_pop').stop().fadeOut("fast");
        })

        //tab切换
        function tabs(e1, e2){
            var e1 = $(e1);
            var e2 = $(e2);
            e1.click(function(){
                if(!$(this).hasClass('current')){
                    e1.removeClass('current');
                    $(this).addClass('current');
                    var idx = e1.index(this);
                    e2.hide();
                    $(e2[idx]).show();
                }
            });    
        }
        tabs('.listtab a', '.listcon');
        tabs('.tabletab1 a', '.tablecon1');
        tabs('.tabletab2 a', '.tablecon2');
    //更多.....
    var   iosmore = ["http://ios.97973.com/ios/testlist","http://ios.97973.com/ios/kaifulist"];
    var   andmore = ["http://android.97973.com/android/testlist","http://android.97973.com/android/kaifulist"];
    $('.tabletab1 a').eq(0).click(function(){ $(".tblist-l .more a").attr('href',iosmore[0]); });
    $('.tabletab1 a').eq(1).click(function(){ $(".tblist-l .more a").attr('href',iosmore[1]); });
    $('.tabletab2 a').eq(0).click(function(){ $(".tblist-r .more a").attr('href',andmore[0]); });
    $('.tabletab2 a').eq(1).click(function(){ $(".tblist-r .more a").attr('href',andmore[1]); });
        //返回顶部
        $('#backToTop a.bt10').click(function(){
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    
     //左侧浮动导航
        $(window).scroll(function(event) {
           var obj = $('#backToTop'); 
           var ftop = $('.slide_w').offset().top||obj.offset().top;
           var scrolltop = $(window).scrollTop();
           var botop = $('#sinaGFoot').offset().top;
           //console.log(scrolltop+'     '+ftop);
           if(scrolltop > ftop-400){
                obj.removeClass('top617');
                obj.addClass('fixed');
           }else{
                obj.addClass('top617');
                obj.removeClass('fixed');
           }
           if(scrolltop>botop-900){
                obj.removeClass('fixed');
                obj.css('top', botop-480);
           }else{
                obj.removeAttr("style");
           }
        });
    //锚点跳转
    $(".Backtop a").click(function(e){
        var hr = $(this).attr('href');
        console.log(hr);
        var patt =/#/g;
        var result = patt.test(hr);
        if(result){
          e.preventDefault();
          $(window).scrollTop($(hr).offset().top-60);
        }
    });
    
    