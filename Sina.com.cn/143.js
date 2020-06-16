
              ;(function() {
            // 汽车ip定向
            jsLoader({
                url : '//interface.sina.cn/dfz/outside/auto/getcityautocontent-p1.d.html',
                charset:'utf-8'
            });
            //地方站ip定向
            jsLoader({
                url : '//interface.sina.cn/dfz/outside/ipdx/langshou_feed.d.json',
                charset:'utf-8'
            });
        })();

//房产ip定向
;(function(){
	var API = '//ip.leju.com/sina_sanshou_2010.php';
	var render = function() {
		for (var i = 0, len = SI_IP_House_.length; i < len; i++) {
			var item = SI_IP_House_[i];
			var node = document.getElementById('SI_IP_House_'+i);
			if (item&&node) {
				node.innerHTML = item;
			}
		}
	};
	jsLoader({
	    name: 'ipHouse',
	    url:API,
        charset:'gbk',
	    callback: function() {
	    	render();
	    }
	});
})();

      