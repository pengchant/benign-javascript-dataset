
			window.__SinaTopBar__.user.init(document.getElementById('SI_User'), {
				// entry 默认为 account，各频道不一样，可向通行证@龚翼 申请
				entry: 'elady',
				login_success: function() {
					// 登录成功
					window.__SinaFeedCard__.onLoginSuccess(SINA_OUTLOGIN_LAYER.getSinaCookie().uid, 30004);
				},
				logout_success: function() {
					// 退出成功
				}
			});
		