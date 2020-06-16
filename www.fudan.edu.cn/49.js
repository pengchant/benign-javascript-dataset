  
	//<![CDATA[
	jq(document).ready(function () {
      function is_weixin(){
			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i)=="micromessenger") {
				return true;
			} else {
				return false;
			}
		}
		var url =location.href;
		if(is_weixin()){
			jq.post('https://share.chinadaily.com.cn/wxshare/api/wxinit', {url:url}, function(data){
				wx.config({
					debug: false,
					appId: data.appid,
					timestamp: data.timestamp,
					nonceStr: data.noncestr,
					signature: data.sign,
					jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
				}),
				wx.ready(function(){
					wx.onMenuShareTimeline({
						title: '13 picked to translate COVID-19 book into English',
						link: url,
						imgUrl: 'http://img2.chinadaily.com.cn/images/202004/09/5e8e649da310e232dbc944c6.jpeg'
					});
					var data = {
							title: '13 picked to translate COVID-19 book into English',
                   desc: 'Thirteen volunteers have been selected out of 209 candidates from China and the rest of the world to complete translation of a book introducing treatment solutions for COVID-19 patients and sharing Chinese front-line medical workers\' comprehensive knowledge of the pandemic.',
							link: url,
							imgUrl: 'http://img2.chinadaily.com.cn/images/202004/09/5e8e649da310e232dbc944c6.jpeg'
					};
					wx.onMenuShareAppMessage(data);
				}),
				wx.error(function(res){
					console.log("微信验证失败!");
				})
			});
		}
      
	});
		//]]>
	