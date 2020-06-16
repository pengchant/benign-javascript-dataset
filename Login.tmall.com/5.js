
        KISSY.use(['dom', 'io'], function(S, Dom, IO) {
            var winWidth = Dom.width(window);
            var formRight = (winWidth - 1190) / 2;
            formRight = formRight > 0 ? formRight + 60 : 60;
            Dom.style('.J_form', {'display': 'block', 'right': formRight});
            var data = {
                bannerTitle: '上天猫，就够了',
                bannerImg: '//gw.alicdn.com/tfs/TB1kcCBSpXXXXarapXXXXXXXXXX-1190-600.png',
                bannerUrl: '//www.tmall.com',
                bgColor: '#dd2726'
            }
            var io = new IO({
                type: 'get',
                url: '//ald.taobao.com/recommend.htm?appID=lb-zebra-153802-761482',
                dataType: 'jsonp',
                success: function(res) {
                    if(res.data && res.data[0]) {
                        data = res.data[0];
                       
                    }
                    Dom.css('#login-banner-wrap', 'background-color', data.bgColor);
                    Dom.attr('#login-banner-wrap', 'title', data.bannerTitle);
                    Dom.attr('#login-banner-wrap img', 'src', data.bannerImg);
                    Dom.attr('#login-banner-wrap a', 'href', data.bannerUrl);
                },
                error: function() {
                    Dom.css('#login-banner-wrap', 'background-color', data.bgColor);                    
                    Dom.attr('#login-banner-wrap', 'title', data.bannerTitle);
                    Dom.attr('#login-banner-wrap img', 'src', data.bannerImg);
                    Dom.attr('#login-banner-wrap a', 'href', data.bannerUrl);
                }
            })
        });
       
        var loginHost = lib.isDaily ? '//login.daily.taobao.net' : '//login.taobao.com';
      // 检测白名单
        function checkDomain(url) {
          url = decodeURIComponent(url);
          var protocolRegex = /^(https?:)?\/\//i;
          if(!protocolRegex.test(url)) {
            url = location.protocol + '//' + url;
          } else if(url.indexOf('//') === 0) {
            url = location.protocol + url;
          }
          var domains = url.match(/^(https?:\/\/)?([\w\.\-_]+)/i) || [],
              whiteDomainRegexs = [
                /\.taobao\.com/g,
                /\.taobao\.net/g,
                /\.tmall\.com/g,
                /\.tmall\.net/g,
                /\.taohua\.com/g,  
                /\.taohua\.net/g,
                /\.tmall\.hk/g,
                /\.95095\.com/g,
                /\.alibaba\.com/g
              ],
              res = '';
              if(lib.isHK) {
                res = '//www.tmall.hk';
              } else {
                res = lib.isDaily ? 'http://www.daily.tmall.net' : 'https://www.tmall.com';
              }
          for(var i=0, len=whiteDomainRegexs.length; i < len; i++) {
              if(whiteDomainRegexs[i].test(domains[2])) { 
                  res = url.replace(/&amp;/g, '&');
                  break;
              }
          }
          return encodeURIComponent(res);
        }
    
        var ua = window.navigator.userAgent,
            redirectUrl = lib.getUriQuery('redirect_url') || lib.getUriQuery('redirectURL') || '';
        redirectUrl = checkDomain(redirectUrl);
        //苹果safari7下的bug...跳转bug
        if(/AppleWebKit/.test(ua) && /Version\/7\.0/.test(ua)){
          if(redirectUrl.indexOf('t%3D')>=0){
            redirectUrl.replace(/t\%3D(\d*)/g, function(r){
              return 't%3D' + new Date()*1;
            });
          }else{
            redirectUrl += redirectUrl.indexOf('%3F') >= 0 ? '%26' : '%3F';
            redirectUrl += 't%3D' + new Date()*1;
          }
        }
        //三方cookie 问题
        if(/Version\/(\d(?:\.\d+)+)(?:\sMobile\/[0-9a-zA-Z]+)*\\sSafari/.test(ua)){
          document.write('<iframe src="//www.taobao.com/go/act/login/xd.php" style="display:none;"></iframe>');
        }
        
        var proxyUrl = window.lib.isHK ? 'https://www.tmall.hk/wow/import/act/loginproxy?redirectURL=' : 'https://pages.tmall.com/wow/member-club/act/login-proxy?redirectURL=';
        //var tpcUrl = loginHost + '/member/login.jhtml?tpl_redirect_url='  + encodeURIComponent(proxyUrl + redirectUrl);
        var tpcUrl = loginHost + '/member/login.jhtml?tpl_redirect_url=' + redirectUrl;
        tpcUrl = tpcUrl + (redirectUrl.indexOf('sub%3Dtrue') > -1 ? '&sub=true' : '');
        var pms = +new Date(),
            allp = window.lib.isHK ? 'assets_css%3D3.0.6%2Fapps%2Fhk%2Flogin_pc.css' : 'assets_css%3D3.0.10/login_pc.css';
        tpcUrl = tpcUrl + '&style=miniall&enup=true&newMini2=true&full_redirect=true&sub=true&from=tmall&allp=' + allp + '&pms=' + pms;
        
        document.getElementById('J_loginIframe').src = tpcUrl;
    