
  (function(){
    var imgPic = 'https://img1.sycdn.imooc.com/5a54b58f0001c07902000200.jpg' || 'https://img1.sycdn.imooc.com/static/img/common/logo.png',
        text = '分享一个慕课网精英讲师_Oscar_曾就职于Intel等知名企业，多年Android、Linux、嵌入式软件开发经验。擅长用通俗易懂的语言讲解知识点。在慕课网有多个广受好评的专栏和实战课程。一专多能，精通英语和法语。',
        url = 'https://www.imooc.com' + window.location.pathname;

    window._bd_share_config = {
        "common": {
            "bdUrl": url,
            "bdSnsKey": {
              'tsina':'2254855082'
            },
            "bdText": text,
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": imgPic,
            "bdStyle": "0",
            "bdSize": "16"
        },
        "share": {}
    };
    setTimeout(function(){
            with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = '/static/lib/baiduShare/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
        },1000)

  })();
