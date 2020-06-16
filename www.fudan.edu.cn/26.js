  
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
						title: 'Book on China\'s COVID-19 experience translated, published',
						link: url,
						imgUrl: 'http://img3.chinadaily.com.cn/static/common/img/sharelogo.png'
					});
					var data = {
							title: 'Book on China\'s COVID-19 experience translated, published',
                   desc: 'Less than three months after the Chinese-language book COVID-19, From Basics To Clinical Practice was published, three foreign-language versions of the book integrating hands-on treatment solutions to COVID-19 patients of frontline Chinese medical workers and their comprehensive knowledge of the pandemic, made their global debut on Friday.',
							link: url,
							imgUrl: 'http://img3.chinadaily.com.cn/static/common/img/sharelogo.png'
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
	