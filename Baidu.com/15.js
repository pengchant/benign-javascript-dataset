
!function(){            $.log('http://pc.videoclick.baidu.com/p.gif?pid=104&u=' + encodeURIComponent(window.location.href) + '&' + 'tn=indsa&tpl=indsa&refer=http%253A%252F%252Fwww.baidu.com%252F&city=%E6%B1%9F%E8%8B%8F' + '&sa=c&flow=');
            require('common:static/ui/lazyloader/lazyloader.js');
                    }();
!function(){        $(function(){
            setTimeout(function() {
                BigPipe.asyncLoad({id: 'pager1'}, null, function(data){
                    BigPipe.process(data);
                    $('#pager1 .bigpipe-load').remove();
                });
            }, 200);
            setTimeout(function() {
                BigPipe.asyncLoad({id: 'pager2'}, null, function(data){
                    BigPipe.process(data);
                    $('#pager2 .bigpipe-load').remove();
                });
            }, 300);
        });
    }();
!function(){            BAIDU_VIDEO_ADM_FILL_ASYC('bdvSuggestionHotAdv', 'bdv-suggestion-inner-adv');
        }();
!function(){	require('common:widget/video/newuserbar/userbar.js')('indsa');
}();
!function(){  require('common:widget/video/newtabsearch/tabsearch.js')();
}();
!function(){                            BAIDU_VIDEO_ADM_FILL_ASYC('rightCorner-pull', 'rightCornerPullAd');
                        }();
!function(){        BAIDU_VIDEO_ADM_FILL_ASYC('logo', 'logoAdWrap', function afterRender(wrap) {
            $(wrap.parentNode).addClass('run-animate');
            setTimeout(function() {
                $(wrap.parentNode).addClass('run-animate-end').removeClass('run-animate');
            }, 1500);
        });
    }();
!function(){	require('common:widget/video/navmini/navmini.js')();
}();
!function(){    (function() {
    	function log(src) {
    		var t = new Date().getTime(),
    			img = window['V_fix_img'+t] = new Image();
    		img.onload = img.onerror = img.onabort = function() {
    			img.onload = img.onerror = img.onabort = null;
    			try {
    				delete window['V_fix_img'+t];
    				img = null;
    			} catch(e) {
    				img = null;
    			}
    		}
    		img.src = (src)+'&r='+t;
    	};
    	var types = { movie: 21, tv: 22, show: 26, comic: 43, person: 50 };
    	var bdvSugConfig = {
    		form: 'new-bdvSearch',
    		input: 'new-bdvSearchInput',
    		num: 10,
    		delay: 0,
    		classname: 'bdv-qs-suggestion bdv-v2-suggestion',
    		onsubmit: function(evt) {
    			log( 'http://pc.videoclick.baidu.com/v.gif?pid=104&tn=sug&searchpage=indsa&s=zdjs&input=' + encodeURIComponent(evt.query) + '&wd=' + encodeURIComponent(evt.title) + ( evt.index ? '&li=' + evt.index : '' ) + ( evt.eventType ? '&eventtype=' + evt.eventType : '' ) );
    		},
    		onclicklink: function(evt) {
    			log( 'http://pc.videoclick.baidu.com/v.gif?pid=104&tn=sug&s=zdjs&bl=spa&input=' + encodeURIComponent(evt.query) + '&wd=' + encodeURIComponent(evt.title) + '&id=' + evt.id + '&ty=' + types[evt.type] + '&stp=' + evt.target + '&li=' + evt.index + '&u=' + encodeURIComponent(evt.url) );
    		}
    	};

    	var sug = require("common:static/ui/suggestion/suggestion.js");
    	sug(bdvSugConfig);
    }());
}();
!function(){	require('common:widget/video/newsearchbox/searchbox.js')({
				preFlag: true,
				id: 'new-bdvSearch',
				ismis: true,
		    		pageTn: 'indsa',
	    hotSearchWordsBox: [{"videos":null,"config":{"limit":7}},{"videos":null,"config":{"limit":7}},{"videos":null,"config":{"limit":7}},{"videos":null,"config":{"limit":7}}]
    	});
}();
!function(){    var loginCheck = require('common:static/ui/loginCheck/loginCheck.js');
    var bdvRecord = require('common:widget/global/bdv_record/bdvRecord.js');
	window.bdvRecordConfig = {
		proxy: location.protocol + '//' + location.host + '/browse_static/common/html/proxy_blank.html',
        hao123: ''
	};

    loginCheck(function (uinfo) {
        if (uinfo.uid && uinfo.value) {
            try {
                bdvRecord.api.init({
                    islogin: true
                });
                bdvRecord.ui.init();
            } catch (e) {}
        } else {
            bdvRecord.ui.init();
        }
    });
}();
!function(){                                BAIDU_VIDEO_ADM_FILL_ASYC('indexRightTopShoulder', 'index_right_top');
                            }();
!function(){    require('common:widget/video/header/header.js')({ navMini:false} );
}();
!function(){        require("common:widget/video/liveSubTips/liveSubTips.js")('#liveSubTips');
    }();
!function(){ var url = window.location.href;
 var $ip = url.match(/ip=.*[0-9]$/)
 $.ajax({
     url: "http://v.baidu.com/kan/api/ipLocation?" + $ip,
     dataType: 'jsonp',
     success: function (data) {
         var $c = data.data.province;
         var $city = false;
         require('common:widget/video/nav/nav.js')('indsa','1',$c);
     }
 })
}();
!function(){}();
!function(){        ;
        var __showed = {};
        var $ = require('common:static/vendor/jquery/jquery.js');
        require('videoHome:static/util/carousel/carousel.js')('#focusCarousel', {
            isLoop: true,
            autoScroll: {
                enable: true,
                interval: 6000
            }
        });
    }();
!function(){        require('videoHome:widget/rankList/rankList.js')({
            dom:'#index_top_all_list'
        });
    }();
!function(){        BAIDU_VIDEO_ADM_FILL_ASYC('indexRightSmallPic', BAIDU_VIDEO_ADM_TOOLS.query('#index_focus_poster_small .poster-li')[10]);
    }();
!function(){                    BAIDU_VIDEO_ADM_FILL_ASYC('PCFocusPosterOne', 'PCFocusPosterOne', function(wrap) {
                        if($(wrap)) {
                            $(wrap).show();
                        }
                    });
                }();
!function(){                    BAIDU_VIDEO_ADM_FILL_ASYC('PCFocusPosterOne1', 'PCFocusPosterOne1', function(wrap) {
                        if($(wrap)) {
                            $(wrap).show();
                        }
                    });
                }();
!function(){                    BAIDU_VIDEO_ADM_FILL_ASYC('PCFocusPosterOne2', 'PCFocusPosterOne2', function(wrap) {
                        if($(wrap)) {
                            $(wrap).show();
                        }
                    });
                }();
!function(){                    BAIDU_VIDEO_ADM_FILL_ASYC('PCFocusPosterOne3', 'PCFocusPosterOne3', function(wrap) {
                        if($(wrap)) {
                            $(wrap).show();
                        }
                    });
                }();
!function(){    BAIDU_VIDEO_ADM_FILL_ASYC("pcindexpageColumnjrrd", "pcindexpageColumnjrrd");
    }();
!function(){            $.getScript('http://list.video.baidu.com/adpc/eastday.js?t='+new Date().getTime());
        }();
!function(){    BAIDU_VIDEO_ADM_FILL_ASYC("PCIndexPageCube", "PCIndexPageCube");
    }();
!function(){        !function () {
            var domId = 'channelBannerAdver_1489366188';
            var href = location.href;
            var adverPosition;
            if (href.match(/v\.baidu\.com/)) {
                adverPosition = [
                    'dbshowpagefixedColumn',
                    'dbComicpagefixedColumn',
                    'dbcartoonpagefixedColumn'
                ];
            } 
            else if (href.match(/v\.duba\.com\/(dianshi|dianying|channel\/shaoer)/)) {
                adverPosition = [
                    'dbIndexPagefixedColumn',
                    'dbtvpagefixedColumn',
                    'dbmoviepagefixedColumn'
                ];
            }
            else {
                adverPosition = [
                    'dbfixedColumn1235'                    
                ];
            }
            var len = adverPosition.length;
            var idx = Math.floor(Math.random() * len);
            var adId = adverPosition[idx];
            BAIDU_VIDEO_ADM_FILL_ASYC(adId, domId);
        }();
    }();
!function(){        var __showed = {};
        var $ = require('common:static/vendor/jquery/jquery.js');
        require('videoHome:static/util/carousel/carousel.js')('#index_focus_poster_big_index_show_mini_playlet', {
            isLoop: true,
            autoScroll: {
                enable: true,
                interval: 6000
            },
            isTabSwitch: 1
        }).on('scrollend', function(e) {
            if (window.V && $(window).scrollTop() < 290 && !__showed[e.current] ) {
                __showed[e.current] = true;
                V.nsclick.send({
                    ty: 'baoguang',
                    bl: 'index_focus_poster_big_index_show_mini_playlet',
                    stp: 'index_focus_poster_big_index_show_mini_playlet' + '_' + e.current,
                    no: e.current
                }, false, 'http://pc.videoclick.baidu.com/u.gif');
            }
        });
    }();
!function(){        var __showed = {};
        var $ = require('common:static/vendor/jquery/jquery.js');
        require('videoHome:static/util/carousel/carousel.js')('#index_focus_poster_big_index_show_mini_comic', {
            isLoop: true,
            autoScroll: {
                enable: true,
                interval: 6000
            },
            isTabSwitch: 1
        }).on('scrollend', function(e) {
            if (window.V && $(window).scrollTop() < 290 && !__showed[e.current] ) {
                __showed[e.current] = true;
                V.nsclick.send({
                    ty: 'baoguang',
                    bl: 'index_focus_poster_big_index_show_mini_comic',
                    stp: 'index_focus_poster_big_index_show_mini_comic' + '_' + e.current,
                    no: e.current
                }, false, 'http://pc.videoclick.baidu.com/u.gif');
            }
        });
    }();
!function(){        var __showed = {};
        var $ = require('common:static/vendor/jquery/jquery.js');
        require('videoHome:static/util/carousel/carousel.js')('#index_focus_poster_big_index_show_mini_drama', {
            isLoop: true,
            autoScroll: {
                enable: true,
                interval: 6000
            },
            isTabSwitch: 1
        }).on('scrollend', function(e) {
            if (window.V && $(window).scrollTop() < 290 && !__showed[e.current] ) {
                __showed[e.current] = true;
                V.nsclick.send({
                    ty: 'baoguang',
                    bl: 'index_focus_poster_big_index_show_mini_drama',
                    stp: 'index_focus_poster_big_index_show_mini_drama' + '_' + e.current,
                    no: e.current
                }, false, 'http://pc.videoclick.baidu.com/u.gif');
            }
        });
    }();
!function(){        var __showed = {};
        var $ = require('common:static/vendor/jquery/jquery.js');
        require('videoHome:static/util/carousel/carousel.js')('#index_focus_poster_big_index_show_mini_sport', {
            isLoop: true,
            autoScroll: {
                enable: true,
                interval: 6000
            },
            isTabSwitch: 1
        }).on('scrollend', function(e) {
            if (window.V && $(window).scrollTop() < 290 && !__showed[e.current] ) {
                __showed[e.current] = true;
                V.nsclick.send({
                    ty: 'baoguang',
                    bl: 'index_focus_poster_big_index_show_mini_sport',
                    stp: 'index_focus_poster_big_index_show_mini_sport' + '_' + e.current,
                    no: e.current
                }, false, 'http://pc.videoclick.baidu.com/u.gif');
            }
        });
    }();
!function(){        var __showed = {};
        var $ = require('common:static/vendor/jquery/jquery.js');
        require('videoHome:static/util/carousel/carousel.js')('#index_focus_poster_big_index_show_mini_music', {
            isLoop: true,
            autoScroll: {
                enable: true,
                interval: 6000
            },
            isTabSwitch: 1
        }).on('scrollend', function(e) {
            if (window.V && $(window).scrollTop() < 290 && !__showed[e.current] ) {
                __showed[e.current] = true;
                V.nsclick.send({
                    ty: 'baoguang',
                    bl: 'index_focus_poster_big_index_show_mini_music',
                    stp: 'index_focus_poster_big_index_show_mini_music' + '_' + e.current,
                    no: e.current
                }, false, 'http://pc.videoclick.baidu.com/u.gif');
            }
        });
    }();
!function(){        var __showed = {};
        var $ = require('common:static/vendor/jquery/jquery.js');
        require('videoHome:static/util/carousel/carousel.js')('#index_focus_poster_big_index_show_history_truth', {
            isLoop: true,
            autoScroll: {
                enable: true,
                interval: 6000
            },
            isTabSwitch: 1
        }).on('scrollend', function(e) {
            if (window.V && $(window).scrollTop() < 290 && !__showed[e.current] ) {
                __showed[e.current] = true;
                V.nsclick.send({
                    ty: 'baoguang',
                    bl: 'index_focus_poster_big_index_show_history_truth',
                    stp: 'index_focus_poster_big_index_show_history_truth' + '_' + e.current,
                    no: e.current
                }, false, 'http://pc.videoclick.baidu.com/u.gif');
            }
        });
    }();
!function(){        var __showed = {};
        var $ = require('common:static/vendor/jquery/jquery.js');
        require('videoHome:static/util/carousel/carousel.js')('#index_focus_poster_big_index_show_seek_novelty', {
            isLoop: true,
            autoScroll: {
                enable: true,
                interval: 6000
            },
            isTabSwitch: 1
        }).on('scrollend', function(e) {
            if (window.V && $(window).scrollTop() < 290 && !__showed[e.current] ) {
                __showed[e.current] = true;
                V.nsclick.send({
                    ty: 'baoguang',
                    bl: 'index_focus_poster_big_index_show_seek_novelty',
                    stp: 'index_focus_poster_big_index_show_seek_novelty' + '_' + e.current,
                    no: e.current
                }, false, 'http://pc.videoclick.baidu.com/u.gif');
            }
        });
    }();
!function(){        var __showed = {};
        var $ = require('common:static/vendor/jquery/jquery.js');
        require('videoHome:static/util/carousel/carousel.js')('#index_focus_poster_big_index_show_documentary', {
            isLoop: true,
            autoScroll: {
                enable: true,
                interval: 6000
            },
            isTabSwitch: 1
        }).on('scrollend', function(e) {
            if (window.V && $(window).scrollTop() < 290 && !__showed[e.current] ) {
                __showed[e.current] = true;
                V.nsclick.send({
                    ty: 'baoguang',
                    bl: 'index_focus_poster_big_index_show_documentary',
                    stp: 'index_focus_poster_big_index_show_documentary' + '_' + e.current,
                    no: e.current
                }, false, 'http://pc.videoclick.baidu.com/u.gif');
            }
        });
    }();
!function(){        require('videoHome:widget/hotToday/hotToday.js')({
            tar:'#index_show_hot_info'
        });
    }();
!function(){                BAIDU_VIDEO_ADM_FILL_ASYC('PCindexpagehot1', 'PCindexpagehot1', function(wrap) {
                    if($(wrap)) {
                        $(wrap).show();
                    }
                });
            }();
!function(){                BAIDU_VIDEO_ADM_FILL_ASYC('PCindexpagehot2', 'PCindexpagehot2', function(wrap) {
                    if($(wrap)) {
                        $(wrap).show();
                    }
                });
            }();
!function(){                BAIDU_VIDEO_ADM_FILL_ASYC('PCindexpagehot3', 'PCindexpagehot3', function(wrap) {
                    if($(wrap)) {
                        $(wrap).show();
                    }
                });
            }();
!function(){        !function () {
            var domId = 'channelBannerAdver_1379823344';
            var href = location.href;
            var adverPosition;
            if (href.match(/v\.baidu\.com/)) {
                adverPosition = [
                    'dbshowpagefixedColumn',
                    'dbComicpagefixedColumn',
                    'dbcartoonpagefixedColumn'
                ];
            } 
            else if (href.match(/v\.duba\.com\/(dianshi|dianying|channel\/shaoer)/)) {
                adverPosition = [
                    'dbIndexPagefixedColumn',
                    'dbtvpagefixedColumn',
                    'dbmoviepagefixedColumn'
                ];
            }
            else {
                adverPosition = [
                    'dbfixedColumn1235'                    
                ];
            }
            var len = adverPosition.length;
            var idx = Math.floor(Math.random() * len);
            var adId = adverPosition[idx];
            BAIDU_VIDEO_ADM_FILL_ASYC(adId, domId);
        }();
    }();
!function(){            require('videoHome:widget/baseVideo/baseScrollVideo.js')({
                dom:'#index_show_mini_drama'
            });
                            $(document).ready(function(){
                    var nodeArr,i,len;
                         
                    nodeArr = [['#index_show_mini_drama .poster-n1','PCindexpageact1','PCindexpageact1'],
                    ['#index_show_mini_drama .poster-n5','PCindexpageact2','PCindexpageact2']];
                    len = nodeArr.length;
                                        for (i = 0; i < len; i++) {
                        var nDom = document.createElement('div');
                        nDom.setAttribute('id',nodeArr[i][1]);
                        nDom.style = "width:180px;height:155px;position:absolute;bottom:16px;z-index:2;display:none";
                        $(nodeArr[i][0]).append(nDom);
                        
                        BAIDU_VIDEO_ADM_FILL_ASYC(nodeArr[i][1], nodeArr[i][2], function(wrap) {
                            if($(wrap)) {
                                $(wrap).show();
                            }
                        });
                    }
                })
                    }();
!function(){            require('videoHome:widget/baseVideo/baseScrollVideo.js')({
                dom:'#index_show_mini_comic'
            });
                    }();
!function(){        BAIDU_VIDEO_ADM_FILL_ASYC("indexBottomColumn2", "indexBottomColumn2");
        }();
!function(){            require('videoHome:widget/baseVideo/baseScrollVideo.js')({
                dom:'#index_show_mini_playlet'
            });
                    }();
!function(){        BAIDU_VIDEO_ADM_FILL_ASYC("indexColumn2", "indexColumn2");
        }();
!function(){    require('common:static/ui/eventcenter/eventcenter.js').trigger('lazyLoad.check');
}();
!function(){    BAIDU_VIDEO_ADM_FILL_ASYC("PCFullScreenad", "PCFullScreenad");
    }();
!function(){        ~function() {
            // 4大类频道、二级、详情页以及检索页添加广告
            var workType = ['movie', 'tv', 'show', 'comic', 'dianying', 'dianshi', 'zongyi', 'dongman', 'v'];
            var path = location.pathname.split('/')[1];
            if (!path || workType.indexOf(path) > -1) {
                BAIDU_VIDEO_ADM_FILL_ASYC("PCidlepagePopup", "PCidlepagePopup");
            }
        }();
    }();
!function(){require('common:widget/video/footer/footer.js')();
    // 对该站所有链接进行安全过滤
    $(document).ready(function () {
		$('body a').each(function () {
			var ret = $(this).attr('href');
			ret = ret && ret.replace(/<script.*?>.*?<\/script>/g, '')
                .replace(/<[^>]+>/g, '');
            $(this).attr('href', ret);
		});
	});

    // 如果有百度推送弹窗广告则不展示其他弹窗
    if($('#baiduAdvRightBottomPopContainer')[0]) return;

    var videoapi = require('common:static/ui/videoapi/videoapi.js');
    var loginCheck = require('common:static/ui/loginCheck/loginCheck.js');
    var _ = require('common:static/vendor/underscore/underscore.js');
    loginCheck(function (uInfo) {
        var pathName = window.location.pathname;
        // pathName = '/';
        var pageValid = false;
        // 游戏广告只在四大频道＋游戏＋主页推广
        if (/^(\/|\/tv|\/movie|\/show|\/comic|\/gameindex)\/{0,1}$/.test(pathName)) {
            pageValid = true;
        }
        /*if (uInfo.value && uInfo.uid && pageValid) {
            playerCheck(uInfo.value);
        } else {
            normalAdPop();
        }*/
    });

    function formatHistory(data) {
        var newData = [];
        for (var i = 0, len = data.length; i < len; i++) {
            var item = data[i];
            var curData = {};
            for (var key in item) {
                if (key !== 'servers') {
                    curData[key] = item[key];
                } else {
                    curData['servers'] = item[key][0];
                }
            }
            newData.push(curData);
        }
        var cloneData = _.clone(newData);
        var resultData = cloneData.sort(function (a, b) {
            return b.servers.entertime - a.servers.entertime;
        });
        var resultData = resultData.slice(0, 3);
        var gameStamp = '';
        for (var k = 0, lens = resultData.length; k < lens; k++) {
            var it = resultData[k];
            gameStamp += it.servers.entertime;
            if (k !== lens - 1) {
                gameStamp += '_';
            }
        }
        return {
            gameStamp: gameStamp,
            data: resultData
        };
    }

    // 用户游戏记录检测
    function playerCheck(uname) {
        $.ajax({
            url: 'http://v.baidu.com/pay/goods?partner_no=10001&goods_type=play_history',
            dataType: 'jsonp',
            success: function (ret) {
                var t = new Date();
                var todayStr = '' + t.getFullYear() + (t.getMonth() + 1) + t.getDate();
                var newData = formatHistory(ret.data);
                if (ret
                    && ret.data
                    && ret.data.length
                    && $.cookie.get('gameHistory') != todayStr
                    && $.cookie.get('gameHistory') != ('forever____' + newData.gameStamp)) {
                    gameAdPop(uname, newData.gameStamp, newData.data);
                } else {
                    normalAdPop();
                }
            }
        });
    };

    // 游戏推广弹窗
    function gameAdPop(uname, gameStamp, history) {
        require("common:widget/video/push/expandPush.js")({
            el: 'pushGameBox',
            data: {
                uname: uname,
                gameStamp: gameStamp,
                history: history
            }
        });
    };

    // 普通全站推广弹窗
    function normalAdPop() {
        videoapi({
            cbgpopup: 'list:pc_push'
        }, function (data) {
            if (data && data[0] && data[0]['data'] && data[0]['data']['videos'].length > 1) {
                var getcookieid = data[0]['data']['videos'][0]['update'];
                var cookieid = $.cookie.get('BDPCPS');
                if (getcookieid !== cookieid && parseInt(getcookieid, 10) !== 0) {
                    require("common:widget/video/push/push.js")(data[0]['data']['videos']);
                }
            }
        });
    };

window["h"] = function(obj, url){
    if (document.all) {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(url);
    }
}
$.ajax({
    url: 'http://list.video.baidu.com/adpc/scrollTextAd.js',
    dataType: "script",
    crossDomain: true
});
}();
!function(){	require('common:static/ui/statistics/statistics.js');
			var loginCheck = require('common:static/ui/loginCheck/loginCheck.js');
	   	if ( location.hostname.match(/(?:\.baidu\.com$)|(?:\.hao123\.com$)/) ) {
			var bdvref = $.cookie.get('bdvref');
			if ( bdvref ) {
				V.nsclick.setParam('VIDEO_FR', bdvref);
			}
		} else {
			loginCheck(function(userinfo) {
				if ( userinfo && userinfo.cookie && userinfo.cookie.bdvref ) {
					V.nsclick.setParam('VIDEO_FR', userinfo.cookie.bdvref);
				}
			});
		}
																	V.nsclick.setParam('tn', 'indsa');
												V.nsclick.setParam('tpl', 'indsa');
												V.nsclick.setParam('sa', 'd');
												V.nsclick.setParam('refer', 'http:\/\/www.baidu.com\/');
							var staConf = {};
										staConf['dedup'] = 1;
												staConf['det'] = 1;
							V.nsclick.setConfig(staConf)
	}();
!function(){ 
			var isSupportVideo = !!(document.createElement('video').canPlayType);
            var isIE =(!!window.ActiveXObject || "ActiveXObject" in window); 
			if(isSupportVideo && !isIE){
				require('common:widget/video/hoverPlayer/player.js')({
	            	id:'#hoverPlayer',
	            	tpl:'indsa'
	            });
			}
        }();
!function(){$(function() {
	$.getScript('//cbjs.baidu.com/js/m.js', function() {
		if ( window.BAIDU_CLB_fillSlotAsync ) {
			$('.adm-union').each(function(index, item) {
				var domid = item.getAttribute('id'),
					uniodid = item.getAttribute('data-union');
				if ( domid && uniodid ) {
					BAIDU_CLB_fillSlotAsync(uniodid, domid);
				}
			});
		}
	});
});
}();
!function(){require.async('common:widget/video/advList/advList.js',function(ADV){
	ADV.init();
});
}();
!function(){    BAIDU_VIDEO_ADM_FILL_ASYC("PCallpagesidebar", 'PCallpagesidebar');
    }();
!function(){    BAIDU_VIDEO_ADM_FILL_ASYC("PCallpagesidebar1", 'PCallpagesidebar1', function(wrap) {
        if($(wrap)) {
            $(wrap).css({'width': '38px', 'height': '48px'})
        }
    });
    }();
!function(){    BAIDU_VIDEO_ADM_FILL_ASYC("PCallpagesidebar2", 'PCallpagesidebar2', function(wrap) {
        if($(wrap)) {
            $(wrap).css({'width': '38px', 'height': '38px', 'margin-top': '4px'})
        }
    });
    }();
!function(){require.async('common:widget/video/advList/advList.js',function(adv){
    adv.push(function(){
        return {"id":"index_right_float","classname":"index-right-float","bl":"adv_float_right","monkey":"adv_float_right"}
    });
});
}();
!function(){        require("videoChannelCommon:widget/backTop/backTop.js")();
    }();
