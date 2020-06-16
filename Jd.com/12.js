
    //初始化jab
      var jab = null;
      var feSt= 's';//frontend sdk init status
      try {
          jab = new JAB( {
              bizId: "!JDPCLogin", //业务ID，申请
              initCaptcha: true//是否要初始化验证码，不需要验证码挑战的设置为false
          });
      } catch(e){
          feSt= 'f';// fail to init frontend sdk
          console.log(e)
      }
