
	$(function() {
        if($("body").data("paiduser") === false) {
            $('#signup_form_body').hide();
            $('.updatetoPro').show();
        }

        $('.updatetoPro').click(function(){
            location.href = "https://zoom.us/account/billing/buy?plan=pro&subPlan=allSubPlan&type=basic2pro";
        });

		setTimeout(function(){
			var sUserAgent = navigator.userAgent;
			var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
			var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
			var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
			var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == "android";
			if (isMac) {
				$('#down_zoom_client').attr("href", '/client/latest/zoomusInstaller.pkg');
			} else if (bIsAndroid) {
				$('#down_zoom_client').attr("href", '/client/latest/zoom.apk');
			} else if (isWin) {
				$('#down_zoom_client').attr("href", '/client/latest/ZoomInstaller.exe');
			} else {
				$('#down_zoom_client').parent().hide();
			}
		}, 0);

	});
