
(function() {
	function addEvent(obj, eventType, func) {
		if(obj.attachEvent) {
			obj.attachEvent("on" + eventType, func);
		} else {
			obj.addEventListener(eventType, func, false);
		}
	};

	function attachURL2Window(id,url) {
		var links;
		try {
			links = document.getElementById(id).getElementsByTagName("a");
		}catch(e) {
			links = [];
		}
		for (var i = 0, len = links.length; i < len; i++) {
			addEvent(links[i], "mousedown", function(e) {
				var writeCookie = function(O, o, l, I, p) {
				var i = "",
				c = "",
				path = "";
				if (l != null) {
					if(l == "NaN"){
						i = ";";
					}else{
						i = new Date((new Date).getTime() + l * 3600000);
						i = "; expires=" + i.toGMTString();
					}
				};
				if (I != null) {
					c = ";domain=" + I
				};
				if(p != null){
					path = ";path=" + p;
				};
				document.cookie = O + "=" + escape(o) + i + c + path;
				};
				writeCookie("directAd","true",1,".sina.com.cn","/");
				//点击监测
				var _clickStat = new Image();
				_clickStat.src = url + "&_=" + new Date().getTime() + "&url=";
			});
		}
	};

	attachURL2Window("syncad_1","http://sina.allyes.com/main/adfclick?db=sina&bid=372535,533936,539210&cid=0,0,0&sid=540113&advid=358&camid=69129&show=ignore");
	attachURL2Window("syncad_3","http://sina.allyes.com/main/adfclick?db=sina&bid=372535,534289,539559&cid=0,0,0&sid=540488&advid=358&camid=69129&show=ignore");
	attachURL2Window("syncad_4","http://sina.allyes.com/main/adfclick?db=sina&bid=372535,539990,545264&cid=0,0,0&sid=546428&advid=358&camid=69129&show=ignore");
	attachURL2Window("syncad_0","http://sina.allyes.com/main/adfclick?db=sina&bid=372535,547080,552353&cid=0,0,0&sid=553716&advid=358&camid=69129&show=ignore");
	attachURL2Window("syncad_0_B","http://sina.allyes.com/main/adfclick?db=sina&bid=372535,547080,552353&cid=0,0,0&sid=553716&advid=358&camid=69129&show=ignore");

})()
