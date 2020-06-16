
		//首页上报
		$(document).ready(function() {
			timeStamps[5] = new Date();
		});
		$(window).load(function() {
			timeStamps[6] = new Date();
			window.timeStat && window.timeStat(7822, 13, 37, timeStamps, 0);
			window.TCISD && window.TCISD.performanceTimeStat([7822, 13, 2], 10);
		});

		if (window.translateTip) {
			$('.solution').before('<div class="qc-msg qc-msg-with-close"><div class="qc-msg-inner"><div class="qc-msg-cnt">'+window.translateTip+'</div></div></div>');
		}
	