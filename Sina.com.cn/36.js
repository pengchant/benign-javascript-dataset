
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
				writeCookie("directAd_finance","true",1,".sina.com.cn","/");
				//点击监测
				var _clickStat = new Image();
				_clickStat.src = url + "&_=" + new Date().getTime() + "&url=";
			});
		}
	};

	attachURL2Window("blk_finance_1","http://sina.allyes.com/main/adfclick?db=sina&bid=202406,581303,586578&cid=0,0,0&sid=589122&advid=358&camid=36885&show=ignore");
	attachURL2Window("blk_finance_2","http://sina.allyes.com/main/adfclick?db=sina&bid=202406,581309,586584&cid=0,0,0&sid=589128&advid=358&camid=36885&show=ignore");
	attachURL2Window("blk_finance_3","http://sina.allyes.com/main/adfclick?db=sina&bid=202406,581310,586585&cid=0,0,0&sid=589129&advid=358&camid=36885&show=ignore");

})()
