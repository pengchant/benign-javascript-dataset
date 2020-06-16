
(function () {
	var config = {
		syncMuid: (typeof OOGlobal === "undefined" || typeof OOGlobal.IsCookieConsentRequired  === "undefined")
			? true : (!OOGlobal.IsCookieConsentRequired || (typeof(mscc) != "undefined" && mscc.hasConsent())),
		autoCapture: {
			assets: true,
			scroll: false,
			resize: true,
			addin: navigator.userAgent.search("MSAppHost") === -1	// If we are running in a WinRT host, disable collection of addins - causes APPHOST9603 error
		},
		coreData: {
			appId: 'support.office.com',
			pageName: "",
			pageTags: {}
		},
		isLoggedIn: false,
		shareAuthStatus: true,
		authMethod: Number(0),
		callback: {
			pageViewPageTags: returnPageInfo,
			pageActionPageTags: returnPageInfo,
			contentUpdatePageTags: returnPageInfo
		}
	};

	if (document.getElementsByClassName('ocpEditArticleLink').length > 0) {
		config.coreData.pageTags['ver'] = 'editShown';
	}

		config.coreData.pageTags['conditionalContentLocalization'] = 'NotLocalized';

	awa.init(config);

	function returnPageInfo() {
		return config.coreData.pageTags;
	};
})();
