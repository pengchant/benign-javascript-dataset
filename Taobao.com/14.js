
    (function(){//显示浮层推广
        var img = new Image();
        var src = 'https://img.alicdn.com/tfs/TB1njtrbmRLWu4jSZKPXXb6BpXa-1420-880.png';

        if($.trim(src) === ''){
            return;
        }

        if(!window.localStorage){
            return;
        }

        var key = getKey(src);

        if(localStorage.getItem(key)){//已经显示过了
            return;
        }

        img.onload = function(){
            var floatAd = $('.floatAd');
            var timeout;
            floatAd.addClass('_floatAdshow');
            floatAd.find('.floatAdBg').after(img);
            setTimeout(function(){
                floatAd.find('.floatAdBg').addClass('_floatAdshow');
                $(img).addClass('_floatAdshow');
                setTimeout(close,8000);
                localStorage.setItem(key, '1');
            },100);
            floatAd.find('.close').on('click',function(){
                close();
            });

            function close(){
                floatAd.find('.close').off('click');
                clearTimeout(timeout);
                floatAd.find('.floatAdBg').removeClass('_floatAdshow');
                $(img).removeClass('_floatAdshow');
                setTimeout(function(){
                    floatAd.removeClass('_floatAdshow');
                },300);
            }
        }
        img.src = src;

        function getKey(src){
            src = src.split('/');
            src = src.filter(function(e){
               return !!e
            });
            if(window.btoa){
                return window.btoa(src[src.length - 1]);
            }else{
                src[src.length - 1];
            }
        }

    }());

