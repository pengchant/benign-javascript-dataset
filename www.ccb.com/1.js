
	if (screen.availWidth < 800 || ~navigator.userAgent.toLowerCase().indexOf('android')) {
		jump("http://m.ccb.com/cn/home/indexv3m.html");
	} else {
		jump("/cn/home/indexv3.html");
	}
	function jump(url) {
		if (top.location != self.location) {
			top.location = url
		} else {
			self.location = url
		}
	}

