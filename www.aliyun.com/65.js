
    (function(){
      try{
        var ua = navigator.userAgent.toLowerCase();
        if(/(aliapp)+[\s]*(\([aliyun|tb|tm|ap]+\/[\d|\.]+\))+/.test(ua))return; //阿里云app/手淘/手猫/支付宝不加载谷歌统计代码
        
        $(window).on('load', function(){
          $("body").append('<script async src="//g.alicdn.com/aliyun/www-dpl/0.7.23/knight/js/data-statistics.js" type="text/javascript"><\/script>');
          // $("body").append('<noscript><div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/977293844/?value=0&guid=ON&script=0"/></div></noscript>');
        });
      }catch(err){ }
    })()
  