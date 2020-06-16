
	jQuery.ajax({
		url: '/wm/api/visit/write/channel',
		type: 'get',
		data: {
			siteID: '8c27de1ddf9f47e3a1fd5dd44c67b62e',
			channelID:'4e2c3fda22e64dc295a059eaec31bc37',
			channelName:encodeURIComponent("文艺园地")
		}
	})
