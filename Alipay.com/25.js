
    seajs.use(['$', 'authcenter/login/1.5.2/js/login'], function($, login) {
        $(document).ready(function() {
                        new system.auth.aliLogin({
                formCont_: $("#J-login"),
                havanaSsoUrl:"https://passport.alibaba.com",
                autoLogin: false  ,
                isShowQRLogin: true,
                onFormShow:function(){
                                        new system.auth.checkcode({
                        needQrLogin:  true                     });
                                    }
            });
            
            //无控件登录
            system.auth.switchaliedit();

            //自动记住上一次登录的账号
            system.auth.accountsaver();

            new system.auth.autoComplete({
                defaultData: [
                    'qq.com',
                    '163.com',
                    '126.com',
                    '189.cn',
                    'sina.com',
                    'hotmail.com',
                    'gmail.com',
                    'sohu.com',
                    '21cn.com',
                    '139.com'
                ]
            });

            //实时校验码
            new system.auth.realtimeCheckcode();

                            new system.auth.voiceCheckcode();
            
            //前端校验
            system.auth.validator();

            //校验码去空格
            system.auth.ignoringSpaces($('#J-input-checkcode'));

            new system.auth.btnStyle({
                'isNeedSub': true
            });

                                        var qrcode = new system.auth.qrCode({
                    hasSSOLogin:  true                 });
            
            var changeTabs = $('#J-loginMethod-tabs li');
            var qrCode = $('#J-qrcode');
            var ssoLogin = $('#J-ssoLogin');
            var loginForm = $('#J-login');
            var loginFormMethod = $('#J-loginFormMethod');
            (changeTabs.length >=2) && changeTabs.on('click', function(e) {
                var activeDom = $(this);
                if(activeDom.attr('data-status') === 'show_login') {
                    // 清空扫码标识
                    loginFormMethod.val('');
                    qrCode.addClass('fn-hide');
                    if (window.light && window.light.page && window.light.page.products && window.light.page.products.barcode) {
                        window.light.page.products.barcode.onready(function() {
                            this.stop();
                        });
                    }
                    qrcode && qrcode.clearQRState();
                    if(ssoLogin.attr('data-hide') === 'false' &&
                        ssoLogin.attr('data-state') === 'finished'
                    ) {
                        ssoLogin.removeClass('fn-hide');
                    } else {
                        loginForm.removeClass('fn-hide');
                    }
                } else {
                    qrCode.removeClass('fn-hide');
                    // 用来表示进行扫码
                    loginFormMethod.val('qrCodeLogin');
                    // 开始始轮询
                    if (window.light && window.light.page && window.light.page.products && window.light.page.products.barcode) {
                        window.light.page.products.barcode.start();
                    }
                    if(ssoLogin.attr('data-hide') === 'false' &&
                        ssoLogin.attr('data-state') === 'finished'
                    ) {
                        ssoLogin.addClass('fn-hide');
                    } else {
                        loginForm.addClass('fn-hide');
                    }
                }
                changeTabs.removeClass('active');
                activeDom.addClass('active');
            });

            if(window.authPicColums) {
                new system.auth.indexBg({
                    scene: "yebprod.alipay.com/yeb/",
                    currkentDate: "06-16",
                    picArr: authPicColums,
                    needRandom: authPicColums.needRandom
                });
            }
        });
    });
