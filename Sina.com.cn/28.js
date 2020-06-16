
    // 修改 5 begin
jsLoader({
    name: 'shm',
    callback: function () {
        var sguid = SHM.util.cookie.getCookie('SINAGLOBAL');
        if (typeof sguid == 'string') {
            lastNum = sguid.charAt(sguid.length - 1, 1);
            if (lastNum == 'A' || lastNum == 'A') {
                var randomSwitch = (function(){
                    var wrap = SHM.dom.byId('picBNav');
                    var navs = SHM.dom.byAttr(wrap,'tab-type','tab-nav');
                    var len = navs.length;
                    return function(){
                        var nav = navs[Math.floor(Math.random() * len)];
                        if(nav){
                            SHM.app.tab.switchByEle(nav);
                        }
                    };
                })();
                var timer1 = null;
                var pic_utils = {
                    $: function (id) {
                      return document.getElementById(id);
                    },
                    fixEvent: function (e) {
                      var e = e || win.event;
                      e.target = e.target ? e.target : e.srcElement;
                      return e;
                    },
                    delegateByTag: function(ele,tag,etype,fn){
                      var that = this;
                      that.addEvent(ele,etype,function(ev){
                        var e = that.fixEvent(ev);
                        var t = e.target;
                        tag = tag.toLowerCase();
                        do {
                          if(t.nodeName && t.nodeName.toLowerCase() === tag){
                            fn(e, t);
                          }
                          t = t.parentNode;
                        } while (t && t !== ele)
                      });
                    },
                    addEvent: document.addEventListener ?
                      function (elem, type, fn) {
                        elem.addEventListener(type, fn, false);
                      } : function (elem, type, fn) {
                        elem.attachEvent('on' + type, fn);
                      },
                    removeEvent: document.removeEventListener ?
                      function (elem, type, fn) {
                        elem.removeEventListener(type, fn, false);
                      } : function (elem, type, fn) {
                        elem.detachEvent('on' + type, fn);
                      }
                  };
                var bPicArea = pic_utils.$('fc_B_pic'),
                    bPicAttachment = pic_utils.$('fc_B_pic_attachment'),
                    bPicShow = 0;
					randomSwitch();
                pic_utils.addEvent(bPicArea, 'mouseover', function (e) {
                    clearTimeout(timer1);
                    bPicAttachment.style.display = '';
                    try {
                        ! bPicShow && _S_uaTrack('index_wwwb_photo', 'pic_show');
                        bPicShow = 1;
                    } catch (e) {};
                });
                pic_utils.addEvent(bPicArea, 'mouseout', function () {
                    clearTimeout(timer1);
                    timer1 = setTimeout(function () {
                        bPicAttachment.style.display = 'none';
                        bPicShow = 0;
                    }, 300);
                });
                var picbd = document.getElementById('picBNav'), currentTag = '';
                pic_utils.delegateByTag(picbd, 'span', 'mouseover', function (e, t) {
                    if (t.getAttribute('data-picb-uaTrack') == currentTag) {
                        return;
                    }
                    currentTag = t.getAttribute('data-picb-uaTrack');
                    try {
                        _S_uaTrack('index_wwwb_photo', currentTag);
                    } catch (e) {}
                });
            }
        }
    }
});
    // 修改 5 end

/*
20160120改版上线后取消

                jsLoader({
                    name: 'shm',
                    callback: function(){
                        jsLoader({
                            name: 'StateMgr',
                            charset:'gbk',
                            url: 'http://www.sina.com.cn/js/96/2014/0317/StateMgr.js',
                            callback:function(){
								var guessCtr=document.getElementById('SI_Guess_Wrap');
                                var mgr = new SHM.xy.stateMgr({
                                    timeSlice: 0, //min
                                    state1Ids:['xy-tabA', 'xy-contA', 'xy-imptabtp-A', 'xy-impcon-A'],
                                    state2Ids:['xy-tabB', 'xy-contB', 'xy-imptabtp-B', 'xy-impcon-B'],
                                    s1Callback:function(){
										//guessCtr.style.height='186px';//8 条
                                        SHM.app.tab.switchByEle(SHM.E('video-tab'));
try{_S_uaTrack("www_update_div", "a");}catch(e){}
                                    },
                                    s2Callback:function(){
										//guessCtr.style.height='186px';//8 条
                                        SHM.app.tab.switchByEle(SHM.E('zhuanlan-tab'));
try{_S_uaTrack("www_update_div", "b");}catch(e){}
                                    }
                                });
                                SHM.evt.addEvent(SHM.E('xy-change'), 'click', function(evt){
                                    mgr.toggleState();
                                    SHM.evt.preventDefault(evt);
                                }, false);
                            }
                        });
                    }
                });
*/
				
