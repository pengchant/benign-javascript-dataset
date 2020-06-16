
    window.$ACE_LOADER().then(function(ACE){

    var fromEnv = ACE.URL.getSearch().from;
    if(!fromEnv){
      location.href = 'https://www.aliyun.com'
    }
    ACE.get('Account').then(function (Account) {
      Account.isLogin().then(function (isLogin) {
        if (isLogin) {
          ACE.Request.gatewayGet('telesales-xiaomi', 'createAccessToken').then(function (res) {
            if (res.code == '200') {
              if (res.data) {
                chatUrl =
                  `https://ai.alimebot.taobao.com/intl/index.htm?from=${fromEnv}&_user_access_token=${res.data}`;
                  location.href = chatUrl;
              }
            } else {
              location.href = 'https://www.aliyun.com'
            }
          })
        } else {
          // 阿里云APP里跳转到老的登录页地址
          if(ACE.Client.isAliyunApp()){
            return location.href = 'https://account.aliyun.com/login/login.htm?oauth_callback='+encodeURIComponent(location.href);
          }
          // 跳转到登录页
          location.href = Account.getLoginUrl();
        }
      });
    });
    });
  