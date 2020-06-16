
        window.g_config = window.g_config || {};
        window.g_config.removeMallBar = true;
        
        window.lib = {};
        window.lib.getUriQuery = function(key) {
            var querys = location.search.slice(1).split('&'),
                value, stop;
            for(var i=0, len=querys.length; i < len; i++) {
              querys[i].replace(/(\S+)=(\S+)/g, function(s, k, v, i) {
                if(k === key) {
                    value = v;
                    stop = true;
                }
              });
              if(stop) { break; };
            }
            return value;
        };
      
        if(lib.getUriQuery('redirect_url')) {
          location.href = location.href.replace('redirect_url', 'redirectURL');
        }
    
        // 95095.com跳转
        var ref = document.referrer,
            args = location.search.slice(1),
            l95095 = '//login.yao.95095.com?' + args,
            lliangxinyao = '//login.liangxinyao.com?' + args;
        if(ref.indexOf('95095.com') >= 0) {
            location.href = l95095;
        } else if(ref.indexOf('liangxinyao.com') >= 0) {
            location.href = lliangxinyao
        }
        
        window.lib.isDaily = location.href.indexOf('daily.tmall.net') > -1 ? true : false;
        window.lib.isHK = location.href.indexOf('login.tmall.com') <= -1 && location.href.indexOf('pre-wormhole.tmall.com') <= -1;
        
        if(window.lib.isHK) {
            document.domain = 'tmall.hk';
        } else {
            document.domain = 'tmall.com';
        }
    