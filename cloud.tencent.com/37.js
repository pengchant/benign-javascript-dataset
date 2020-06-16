
	try {
		if (typeof window.Insight === 'object') {
			Insight.install({
				app: 'qcmain',
				lid: window.lifeId,
				born: window.lifeStart,
				time: window.getCurrServerTime,
				shouldReportEvent: function () {
					return window.__enableReport && document.cookie.search('disableInsight=1') === -1;
				}
			});
		}
	} catch(e) {
		console.warn('官网监控初始化失败');
	}
