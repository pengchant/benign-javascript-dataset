
		function __reportImgLoadCost() {
			var requests, lowCostRequests;
			var requestStartTimes, requestEndTimes, requestDurations;
			var firstStartTime, lastEndTime, duration;

			requests = window.performance.getEntries()
				.filter(function (req) {
					return req.initiatorType === 'img'
						&& req.name.indexOf('mc.qcloudimg.com') != -1
						&& req.name.indexOf('test.png') == -1;
				});

			requestDurations = requests.map(function(req) {
				return req.duration;
			});

			lowCostRequests = requestDurations.filter(function(dt) {
				return dt < 20;
			});

			// 低延时请求认定为缓存，占比大于80%则不上报
			if ((lowCostRequests.length / requests.length) > 0.8) {
				return;
			}

			requestStartTimes = requests.map(function(req) {
				return req.fetchStart;
			});

			requestEndTimes = requests.map(function(req) {
				return req.responseEnd;
			});

			firstStartTime = Math.min.apply(null, requestStartTimes);
			lastEndTime = Math.max.apply(null, requestEndTimes);

			duration = lastEndTime - firstStartTime;

			var reportData = {
				uin: '',
				imgcacheLoadTime: duration,
				mccdnLoadTime: duration,
				totalCostTime: '',
				userIp: '',
				countryArea: 'qcloud',
				province: 'qcloud',
				city: 'qcloud'
			}

			var reportUrl = 'https://cloud.tencent.com/services/ajax/reportDc?typeId=cdn&data=' + encodeURIComponent(JSON.stringify(reportData));

			var img = new Image();
			img.onload = img.onerror = function() { img = img.onload = img.onerror = null;}
			img.src = reportUrl;
		}
	