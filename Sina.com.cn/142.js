
//        var ORDER_MAP = {'10100' : 'SI_Order_A', '10200' : 'SI_Order_B', '10300' : 'SI_Order_C', '10400' : 'SI_Order_D', '10500' : 'SI_Order_E', '10600' : 'SI_Order_F', '10700' : 'SI_Order_G', '10800' : 'SI_Order_H', '10900' : 'SI_Order_I', '11000' : 'SI_Order_J', '11100' : 'SI_Order_K', '11200' : 'SI_Order_L', '11500' : 'SI_Order_O', '11600' : 'SI_Order_P', '11700' : 'SI_Order_Q', '11800' : 'SI_Order_R', '11900' : 'SI_Order_S', '12000' : 'SI_Order_T', '12100' : 'SI_Order_U', '12200' : 'SI_Order_V', '12300' : 'SI_Order_W', '12400' : 'SI_Order_X'};
        jsLoader({
            name : 'middleJs',
            url : '//finance.sina.com.cn/basejs/suggestServer.js',
			charset:'gbk',
            callback: function() {
                var suggestServer = new SuggestServer();
                suggestServer.bind({
                  "input": "textSuggest",
                  "type": "stock",
                  "value": "@2@",
                  "width": 160,
                  "head": {"选项":'选项',"中文名称":'中文名称'},
                  "body": {'0':'-1', '1':'4'},
                  "link": "http://biz.finance.sina.com.cn/suggest/lookup_n.php?country=@type@&q=@2@"
                });
                window.changeViewInputs = function changeViewInputs(__elementSelect) {
                    __elementSelect.form["q"].value = "代码/名称/拼音";
                    suggestServer.changeType(__elementSelect.value);
                }
            }
        });


		jsLoader({
            name: 'shm',
            callback: function() {
                jsLoader({
                    name: 'b_search',
					charset:'gbk',
                    url: '//www.sina.com.cn/js/index/96/b_search.js',
					callback : function() {
                        window.blogsearch = function(fn,strName) {
                            if(fn.q.value==""||fn.q.value=="请输入查询词") {
                                fn.q.value="请输入查询词";
                                fn.q.focus();
                                return false
                            }
                            if(strName!="blog") {
                                return false
                            }
                            fn.submit();
                            return false
                        };
                        window.booksearch = function(fn) {
                            if(fn.sk.value==""||fn.sk.value=="请输入查询词") {
                                fn.sk.value="请输入查询词";
                                fn.sk.focus();
                                return false;
                            }
                              window.open('//book.weibo.com/weibobook/search.php?s_type' + fn.sk.value);
                            return false;
                        };
						window.carsearch = function(fn,strName) {
                            if(fn.q.value==""||fn.q.value=="请输入查询词") {
                                fn.q.value="请输入查询词";
                                fn.q.focus();
                                return false
                            }
							if(strName!="car") {
                                return false
                            }
							if(fn.by.value == "cars"){
							    window.open('http://so.auto.sina.com.cn/car/' + fn.q.value+'/');
								return false;
							}
							else if(fn.by.value == "kinds"){
							    window.open('http://so.auto.sina.com.cn/search/' + fn.q.value+'/');
								return false;
							}
                        };
                    }
                });
            }
        });

var isIE6 = navigator.appVersion.indexOf("MSIE 6") != -1 ? true: false;
//图片滚动加载
~function() {var d = document, w = this, b = document.body, h = document.documentElement, p = [], eventFunc = function() {scrollLoader.scroll() }, bH = -1, timer, bT, bVH, iTotal = d.images.length; var sina = {$: function(objName) {if (d.getElementById) {return d.getElementById(objName) } else {return d.all[objName] } }, addEvent: function(obj, eventType, func) {if (obj.attachEvent) {obj.attachEvent("on" + eventType, func) } else {obj.addEventListener(eventType, func, false) } }, delEvent: function(obj, eventType, func) {if (obj.detachEvent) {obj.detachEvent("on" + eventType, func) } else {obj.removeEventListener(eventType, func, false) } }, absPosition: function(obj, parentObj) {var left = obj.offsetLeft; var top = obj.offsetTop; var tempObj = obj.offsetParent; try {while (tempObj != b && tempObj != d.documentElement && tempObj != parentObj && tempObj != null) {left += tempObj.offsetLeft; top += tempObj.offsetTop; tempObj = tempObj.offsetParent } } catch (e) {}; return {left: left, top: top } } }; var scrollLoader = {version: '1.1.0', status: "complete", mult: 2, init: function(ele) {var that = this, imgs, num = 0; if (ele && ele.getElementsByTagName) {imgs = ele.getElementsByTagName('img') } else {imgs = d.images }; for (var i = 0; i < imgs.length; i++) {if (imgs[i].getAttribute("data-src") && !imgs[i].__isSL) {if (imgs[i].offsetWidth == 0 && imgs[i].offsetHeight == 0) {imgs[i].__pObj = imgs[i].parentNode; while (imgs[i].__pObj.offsetWidth == 0 && imgs[i].__pObj.offsetHeight == 0) {imgs[i].__pObj = imgs[i].__pObj.parentNode } }; imgs[i].__isSL = true; p.push(imgs[i]); num++ } }; if (num > 0) {if (this.status != 'scrolling') {sina.addEvent(w, "scroll", eventFunc); this.status = "scrolling"; timer = setInterval(function() {that.timer() }, 200) }; this.scroll() } }, timer: function() {if (iTotal !== d.images.length) {iTotal = d.images.length; this.init() }; var vh = Math.min(h.clientHeight, b.clientHeight); var vt = (w.pageYOffset || b.scrollTop || h.scrollTop) - Math.round(vh * (this.mult - 1) / 2); var vb = vt + Math.round(vh * ((this.mult - 1) / 2 + 1)); if (bT !== vt || vb !== bVH) {this.scroll() } }, showImg: function(img) {if (img.getAttribute("data-src")) { img.removeAttribute("data-top"); img.__pObj = null; img.__isSL = null;img.src = img.getAttribute("data-src"); if(isIE6){return false;} } }, scroll: function() {if (this.status != "scrolling") {return }; var cache = 0; if (bH == d.body.scrollHeight) {cache = 1 } else {bH = d.body.scrollHeight }; var vh = Math.min(h.clientHeight, b.clientHeight); var vt = (w.pageYOffset || b.scrollTop || h.scrollTop) - Math.round(vh * (this.mult - 1) / 2); var vb = vt + Math.round(vh * ((this.mult - 1) / 2 + 1)); bT = vt; bVH = vb; var s = 0, posTop, obj; for (var i = 0; i < p.length; i++) {if (!p[i].getAttribute("data-src")) {continue }; s++; if (!cache) {if (p[i].offsetWidth == 0 && p[i].offsetHeight == 0) {p[i].__pObj = p[i].parentNode; if (!p[i].__pObj) {this.showImg(p[i]); continue }; while ( !! p[i].__pObj && p[i].__pObj.offsetWidth == 0 && p[i].__pObj.offsetHeight == 0) {p[i].__pObj = p[i].__pObj.parentNode } }; obj = p[i].__pObj || p[i]; posTop = sina.absPosition(obj, b).top; p[i].setAttribute("data-top", posTop) } else {posTop = p[i].getAttribute("data-top") } if (posTop >= vt && posTop <= vb) {this.showImg(p[i]) } }; if (s == 0) {this.status = "complete"; sina.delEvent(w, "scroll", eventFunc); clearInterval(timer) } } }; this.scrollLoader = scrollLoader }(); scrollLoader.init();

      