
		var a1=[];
        var url_search = [];
		$.ajax({
            type:"GET",
            dataType:'json',
            url:'//www.sina.com.cn/api/hotword.json',
            success:function(data){
                var s = data.result.data;
                var l = s.length;
                for (var i = 0; i < l; i++) {
                    a1.push(s[i].title);
                    url_search.push(s[i].url);
                }
                var str = data.result.order;
                // 20140403 MOD lqf {update the default hot}
                jsLoader({name: "shm",callback: function() {
                    SHM.register("io.jsonp2", function($) {
                        return function(url, params, callback, fix) {
                            var head_dom, old_script, script_dom, byId = $.dom.byId, idStr = url + "&" + params, fun = "";
                            byId(url) && document.body.removeChild(byId(url)), fix = fix || !1, fix ? "string" == typeof callback && (fun = callback) : (url = url + (-1 == url.indexOf("?") ? "?" : "&") + "_t=" + Math.random(), "function" == typeof callback && (fun = "fun_" + (new Date).getUTCMilliseconds() + ("" + Math.random()).substring(3), eval(fun + "=function(res){callback(res)}"))), url = url + "&_cb=" + fun, url = url + "&" + params, head_dom = document.getElementsByTagName("head")[0], old_script = byId(idStr), old_script && head_dom.removeChild(old_script), script_dom = $.C("script"), script_dom.src = url, script_dom.id = idStr, script_dom.type = "text/javascript", script_dom.language = "javascript", head_dom.appendChild(script_dom)
                        }
                    }), SHM.register("home.suggest", function(a) {
                        var b = {requestURL: "//s.weibo.com/ajax/jsonp/suggestion?ver=1&Refer=sina_sug",searchURL: "http://s.weibo.com/weibo/@@key@@",interTime: 6e5};
                        var c = "top-suggest-", d = c + "wrap", e = c + "item", f = c + "evt", g = window, h = g.document, j = ($globalInfo.ua.isIOS, a.str.trim), k = a.dom.addClass, m = a.dom.removeClass, n = a.dom.byAttr, o = a.io.jsonp2, p = a.evt.addEvent, q = a.evt.delegatedEvent, r = function(a) {
                            this.input = a.input, this.maxLen = a.maxLen || 10, this.onoff = a.onoff || "on", this.index = -1, this.cache = new Object, this.controlFunction = a.controlFunction || function() {
                                    }, this.init.apply(this, arguments);
                        };
                        return r.prototype = {init: function() {
                            var d, a = this, b = a.input;
                            return "off" === a.onoff ? !1 : (a.wrap = b.parentNode, b.setAttribute("autocomplete", "off"), d = q(a.wrap), a.setDefault(), a.getRandomKey(), d.add(f, "mouseover", function(b) {
                                var c = b.el;
                                a.select(c)
                            }), d.add(f, "mouseout", function(b) {
                                var d = b.el, e = c + "mover";
                                d.className.indexOf(e) && m(d, e), !!a.cache.curitem && m(a.cache.curitem, e)
                            }), d.add(f, "mousedown", function(b) {
                                a.evtclick(b.el)
                            }), p(b, "focus", function() {
                                !a.cache.listStatus && a.getTimeOut(a.show, "show")
                            }), b.onpropertychange ? b.onpropertychange = function() {
                                a.sendRequest()
                            } : p(b, "input", function() {
                                a.sendRequest()
                            }), p(b, "blur", function() {
                                a.getTimeOut(a.hidden, "hidden")
                            }), p(b, "keydown", function(b) {
                                a.keydownEvt(b)
                            }), p(b, "keyup", function(b) {
                                var b = b || g.event;
                                return 38 == b.keyCode || 40 == b.keyCode || 27 == b.keyCode ? !1 : (a.sendRequest(), void 0)
                            }), void 0)
                        },getTimeOut: function(a, b) {
                            var c = this, d = c.cache["timeLayer_" + b];
                            !!d && clearTimeout(d), c.cache["timeLayer_" + b] = setTimeout(function() {
                                a.apply(c, arguments)
                            }, 200)
                        },sendRequest: function() {
                            var a = this,  c = a.getInputVal();
                            a.setDefault(), "" !== c ? (a.getSugData(b.requestURL, "key=" + encodeURIComponent(c)), a.cache.listType = "sug") : (a.cache.hotList ? (a.sugWrap.innerHTML = a.cache.hotList, a.cache.curVal = "", a.curMaxLen = a.sugWrap.getElementsByTagName("DIV").length - 2, a.innerShowORHidden(!0)) : a.getHotData(b.requestURL, "", !0), a.cache.listStatus = !1, a.cache.listType = "hot")
                        },setDefault: function() {
                            var a = this;
                            a.cache.curitem = null, a.cache.curindex = -1
                        },show: function() {
                            var a = this;
                            a.sugWrap ? a.innerShowORHidden(!0) : a.sugWrap = a.createSugList()
                        },hidden: function() {
                            this.innerShowORHidden(!1);
                            var a = this.getInputVal();
                            "" !== a && "请输入关键字" !== a && (this.cache.listStatus = !0)
                        },innerShowORHidden: function(a) {
                            var b = this;
                            b.sugWrap.className = "微博" === h.SearchEcho.SerchType.value ? "top-suggest-wrap weibo-suggest" : "top-suggest-wrap news-suggest",
                                    this.controlFunction() ? a ? (b.sugWrap.style.display = "block", b.cache.keyDownOff = !1) : (b.sugWrap.style.display = "none", b.cache.keyDownOff = !0) : (b.sugWrap.style.display = "none", b.cache.keyDownOff = !0)
                        },getInputVal: function() {
                            return j(this.input.value)
                        },evtclick: function(a) {
                            var c = a.innerHTML, d = encodeURIComponent(encodeURIComponent(c));
                            this.input.value = c;if("微博" === h.SearchEcho.SerchType.value) (h.hform_10.Refer.value = void 0 != this.cache.curVal && c != j(this.cache.curVal) ? "sug" === this.cache.listType ? "sina_sug" : "sina_hot_sug" : "sina_index", h.hform_10.setAttribute("action", b.searchURL.replace("@@key@@", d)), h.hform_10.submit());
                        },keydownEvt: function() {
                            var c, d, a = this, b = arguments[0] || g.event;
                            if (a.cache.keyDownOff)
                                return !1;
                            switch (b.keyCode) {
                                case 38:
                                    d = a.curMaxLen || a.maxLen, c = -1 === a.cache.curindex ? d - 1 : a.cache.curindex - 1, a.select(c, !0);
                                    break;
                                case 40:
                                    d = a.curMaxLen || a.maxLen, c = -1 === a.cache.curindex ? 0 : a.cache.curindex === d - 1 ? -1 : a.cache.curindex + 1, a.select(c, !0);
                                    break;
                                case 13:
                            }
                        },select: function(a, b) {
                            var e, f, d = this, g = c + "mover", h = d.cache.curitem;
                            "object" == typeof a ? function() {
                                e = a, f = +e.getAttribute("index")
                            }() : function() {
                                -1 === a ? (e = null, f = -1) : (e = n(d.sugWrap, "index", a + "")[0], f = +a)
                            }(), !!h && m(h, g), e ? (k(e, g), d.cache.curitem = e, d.cache.curindex = f, b && (d.input.value = e.innerHTML)) : (d.input.value = d.cache.curVal, d.cache.curitem = null, d.cache.curindex = -1), setTimeout(function() {
                                d.setCursorPos(d.input.value.length)
                            }, -1)
                        },setCursorPos: function(a) {
                            var c, b = this.input;
                            b.setSelectionRange ? (b.setSelectionRange(a, a), b.focus()) : (c = b.createTextRange(), c.collapse(!0), c.moveEnd("character", a), c.moveStart("character", a), c.select())
                        },createSugList: function() {
                            var c = this, e = c.input;
                            if (a.util.getUniqueKey(), !e)
                                throw "input is undefined!";
                            return c.sugWrap = h.createElement("DIV"), c.sugWrap.className = d, c.innerShowORHidden(!1), e.value = "", c.cache.hotList ? (c.sugWrap.innerHTML = c.cache.hotList, c.innerShowORHidden(!0)) : c.getHotData(b.requestURL, "", !0), c.wrap.appendChild(c.sugWrap), setInterval(function() {
                                c.getHotData(b.requestURL, "", !1)
                            }, b.interTime), c.sugWrap
                        },getHotData: function(a, b, c) {
                            var d = this, e = function(a) {
                                if (1e5 == a.code && a.data.list.length) {
                                    var b = a.data.list;
                                    c ? (d.cache.hotList = d.sugWrap.innerHTML = d.itemConsturctor(b, 0), d.innerShowORHidden(!0)) : d.cache.hotList = d.itemConsturctor(b, 0, !0)
                                } else
                                    d.innerShowORHidden(!1)
                            };
                            o(a, b, e)
                        },getSugData: function(a, b) {
                            var c = this, d = function(a) {
                                if (1e5 == a.code && a.data.length) {
                                    if ("" !== c.getInputVal()) {
                                        var b = a.data;
                                        c.sugWrap.innerHTML = c.itemConsturctor(b, 1), c.innerShowORHidden(!0), c.cache.listStatus = !1
                                    }
                                } else
                                    c.innerShowORHidden(!1)
                            };
                            o(a, b, d)
                        },getRandomKey: function() {
                            var a = this, c = a.input, d = function(a, b) {
                                return Math.floor(a + Math.random() * (b - a))
                            }, e = function(b) {
								//因微博热搜暂停一周，暂时修改条件
                                //if (1e5 == b.code && b.data.list.length) {
								if (1e5 == b.code) {
                                    //var e = b.data.list, f = a1.length;
									var e = a1, f = a1.length;
                                    var h = str.length!=0 ? str[Math.floor(Math.random()*str.length)] : d(0, f);
                                    if(a1[h] == 'undefined'){
                                        h = d(0, f);
                                    }
                                    a.cache.hotList = a.itemConsturctor(e, 0);
                                    // MOD lqf 20140414 {default search error}
                                    a.cache.curVal = e[h];
                                    g.___homeSugVal___ = c.value = "大家正在搜：" + a1[h], a.cache.keyDownOff = !0
                                } else
                                    c.value = "请输入关键字\r\n"
                            };
                            o(b.requestURL, "", e)
                        },itemConsturctor: function(a,  b, c) {
                            var g, h, i, j, k, d = this;
                            var url = 'http://sina.com.cn';
                            //var a1 = ["拍照更saa清晰的OPPO R9s火爆上市", "石原里美山下智久恋情", "李二1022", "女朋友胸小", "秋冬穿搭", "贾玲", "梦想改造家", "乔任梁", "美国大选辩论", "贾玲男友曝光"];
                            for (a = a, g = [], h = "word", i = "", j = "", l = a.length > d.maxLen ? d.maxLen : a.length, c || (d.curMaxLen = l, d.cache.curVal = d.input.value), 0 == b ? (h = "word", i = '<div class="top-suggest-tip weibo">大家正在搜：\r\n</div>') : (h = "suggestion", i = "", j = ""), g.push(i), k = 0; l > k; k++)
                                g.push('<div class="weibo '), g.push(e), g.push('" index="'), g.push(k), g.push('" action-type="'), g.push(f), g.push('">'),g.push(a[k]), g.push("</div>");
                            for (a = a1, g = g, h = "word", i = "", j = "", l = a.length > d.maxLen ? d.maxLen : a.length, c || (d.curMaxLen = l, d.cache.curVal = d.input.value), 0 == b ? (h = "word", i = '<div class="top-suggest-tip news">大家正在搜：\r\n</div>', j = '<div class="top-suggest-more clearfix"><a href="http://s.weibo.com/top/summary?Refer=sina_sug" target="_blank" class="top-suggest-hotAll">完整热搜榜&gt;&gt;</a><a href="http://s.weibo.com/?Refer=sina_sug" target="_blank" class="top-suggest-toHomePage">进入搜索首页&gt;&gt;</a></div><div class="news top-more clearfix"><a href="http://www.sina.com.cn/mid/search-list.shtml" target="_blank" class="top-suggest-hotAll">完整热搜榜&gt;&gt;</a></div>') : (h = "suggestion", i = "", j = ""), g.push(i), k = 0; l > k; k++)
                                g.push('<div onclick=window.open("'+url_search[k]+'","_blank") class="news '), g.push(e), g.push('" index="'), g.push(k), g.push('" action-type="'), g.push(f), g.push('">'), g.push(a[k]), g.push("</div>");
                            return g.push(j), g.join("");
                        }}, r
                    }), window.search_suggest = new SHM.home.suggest({input: document.SearchEcho.SerchKey,maxLen: 10,onoff: "on",controlFunction: function() {
                        return "微博" === document.SearchEcho.SerchType.value || "新闻" === document.SearchEcho.SerchType.value ? !0 : !1
                    }})
                }});
//});
                // 20140403 MOD lqf {update the default hot} end
            },
            error:function(){
                console.log('error');
            }
        });
        function news_click(url){
            console.log(url);
            location.href= url;
        }

            function tSearchUatrack(val) {
                try{
                    _S_uaTrack('index_new_search', val);
                }catch(e){}
            }
            function formSubmit(form,isWb,key){
                var isFF = /firefox/.test(navigator.userAgent.toLowerCase());
                if(isFF){
                    if(!isWb) {
                        setTimeout(function(){
                            form.submit();
                        },0);
                    } else {
                        setTimeout(function(){ 
                            !!key ? form.setAttribute('action', '//s.weibo.com/weibo/@@key@@'.replace('@@key@@',key)) : 
                            form.setAttribute('action', '//s.weibo.com/weibo/');
                            form.submit();
                        },0);
                    }
                } else {
                    if(!isWb) {
                        form.submit();  
                    } else {
                        !!key ? form.setAttribute('action', '//s.weibo.com/weibo/@@key@@'.replace('@@key@@',key)) : 
                        form.setAttribute('action', '//s.weibo.com/weibo/');
                        form.submit();
                    }
                }
            }
            function SearchSubmit(){
              var key = document.SearchEcho.SerchKey.value.replace(/(^[\s\u3000]*)|([\s\u3000]*$)/g, "");
              var ipt = document.SearchEcho.SerchKey;
              if(key == "请输关键词" || key == "请输入关键字" || key === "")
              {
                 ipt.value = "";
                 ipt.className = 'inp-txt inp-txt-click';
                 setTimeout(function(){ipt.className='inp-txt'},500);
                 ipt.focus();
                 return false;
              } else if(key === window.___homeSugVal___) {
                key = key.replace("\u5927\u5BB6\u6B63\u5728\u641C\uFF1A","");
                document.hform_10.Refer.value = 'sina_direct_index';
              }
              switch(document.SearchEcho.SerchType.value){
                case "新闻" :
                  var token = 0;
                    for(var i=0;i<a1.length;i++){
                        if(a1[i] == key){
                            window.open(url_search[i],'_blank');
                            token = 1;
                            break;
                        }
                    }
                    if(token !=0 ) break;                    
                    else{
                        document.hform_02.q.value = key;
                        tSearchUatrack('search_click_news');
                        formSubmit(document.hform_02);
                        break;
                    }
                    
                case "视频" :
                  document.hform_03.q.value = key;
                  tSearchUatrack('search_click_video');
                  formSubmit(document.hform_03);
                  break;
                case "图片" :
                  document.hform_05.q.value = key;
                  tSearchUatrack('search_click_pic');
                  formSubmit(document.hform_05);
                  break;
                case "博客" :
                  document.hform_08.q.value = key;
                  tSearchUatrack('search_click_blog');
                  formSubmit(document.hform_08);
                  break;
                case "微博" :
                  var ReferEle = document.hform_10.Refer;
                  if(search_suggest.cache.curVal!=undefined && key != search_suggest.cache.curVal.replace(/(^[\s\u3000]*)|([\s\u3000]*$)/g, "") && search_suggest.sugWrap.style.display === 'block') {
                   if(search_suggest.cache.listType==='sug') {
                        ReferEle.value = 'sina_sug';
                    } else {
                        ReferEle.value = 'sina_hot_sug';
                    }
                  } else if(ReferEle.value != 'sina_direct_index') {
                   ReferEle.value = 'sina_index';
                  }
                  key = encodeURIComponent(encodeURIComponent(key));
                  tSearchUatrack('search_click_weibo');
                  formSubmit(document.hform_10,true,key);
                  break;
                default : //网页
                  break;
              }
              return false;
            }

            jsLoader({
                name: 'shm',
                callback: function() {
                    SHM.register('home.custEvent.firstpage.fire', function($) {
                        $.evt.custEvent.fire($, 'firstPageEnd');
                    });

                    //测试猜你喜欢的登录
                }
            });           
        