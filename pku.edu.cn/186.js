
	jQuery.ajax({
		url: '/wm/api/visit/write/channel',
		type: 'get',
		data: {
			siteID: '8c27de1ddf9f47e3a1fd5dd44c67b62e',
			channelID:'226',
			channelName:encodeURIComponent("信息预告")
		}
	})
