
  (function(){
    var imgPic = 'https://img1.sycdn.imooc.com/5b8f4e4a0001d35122652265.jpg' || 'https://img1.sycdn.imooc.com/static/img/common/logo.png',
        text = '分享一个慕课网精英讲师_张轩_曾在Apple、百度担任高级前端开发工程师，是《React全栈:Redux Flux webpack Babel整合开发》该书作者，拥有丰富的Web开发经验，喜欢追寻新技术,同时致力于前端工程化，并且有大型SPA项目的架构及开发经验。',
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
