
     //是否调用用户历史记录
     var isShowSearchHistory  = true;
     var adCookieDomain = 'ctrip.com/'; 
     var  defaultCityJson;
     var citytip = [
            '切换城市'
            ];
     var ipcity = 0;
     
     var hotelDomesticConfig = {
        
        isLocalhost:  0 ,
        webResourceReleaseNo: '20130508'
        }
        window.__uidc_init = new Date * 1;
        
        var MAX_STAY = 28 * 24 * 3600 * 1000;
        var MAX_STAY_INN =  90 * 24 * 3600 * 1000;
        var addressMessageConfig = {
            cityname: {
                suggestionB: '支持中文/拼音/简拼输入',
                suggestion: "<strong>热门城市</strong>（可直接选择城市或输入城市全拼/简拼）"
            },
            searchHistory: '搜索历史',
            addressTab: "省市",
            hotelPos: {
                suggestion: "可直接选择地理位置或输入位置关键词",
                titles: {
                    "zone": "商业区",
                    "location": "行政区",
                    "metro": "地铁线"
                },
                showAMap: false,
                AMapTitle: '查看商业区地图',
                all: '全部',
                subCity: '下辖市/县：'
            },
            defaultValue: ['上海','2','shanghai']
        };
        var validateMessageConfig = {
            hotel: {
                city: '请选择酒店所在城市',
                checkIn: '请选择入住日期',
                checkOut: '请选择离店日期',
                dateErr: '日期格式为yyyy-mm-dd',
                too_early_in: '入住日期不能早于今天',
                too_early_out: '您选择的离店日期早于/等于入住日期，请重新选择',
                too_long: '您入住酒店时间超过28天，请分订单提交预订',
                too_long_inn: '您入住酒店时间超过90天，请分订单提交预订',
                no_room: '您选择的日期没有房间可供预订!',
                room_num: '请选择预订房间数',
                noExistCity: '目的地{city}不存在'
            },
            mail:[
            '请输入正确的Email地址',
            '不能重复订阅'
            ],
            flight: [
                "请选择您的出发地",
                "请选择您的目的地",
                "请选择您的出发日期",
                "您选择的出发地点与目的地相同,请重新选择",
                "出发日期不符合格式规范或无效的日期",
                "出发日期不能早于",
                "只能查询一年内航班",
                "返回日期不能早于出发日期",
                "你选择的出发城市没有前往该目的城市的航班，请重新选择",
                "请选择正确的出发地",
                "出发城市不能和目的城市相同",
                "只能预订1天以后的酒店和机票",
                "只能搜索一年内机票和酒店",
                "返回日期必须晚于出发日期",
                "一位成人最多可携带两名儿童乘机。请修改出行人数",
                "你选择的出发城市没有前往$1的航班，请重新选择",
                "返回日期不符合格式规范或无效的日期"
             ]
        };
        var roomMessageConfig = {
            noVisit: '暂无浏览记录'
        };

        var keywordMessageConfig = {
          placeholder: {
              hotel: '（选填）酒店名/地标/商圈',
              inn:'（选填）客栈名/地标/商圈',
              hotHotel:'选填）酒店名/地标/商圈'
          },
          searchButtonText : {
            hotel:'搜索',
            inn:'搜索 客栈民宿',
            hotHotel:'搜索特价酒店'
          }
        };

        var  ajaxBlurId = {PSID:''};

        var themeMessageConfig = ["全部城市","该字母下暂无城市"];

        var noticeMessageConfig = ['中文/拼音', '输入或选择位置关键词', '名称/品牌 如:如家','输入Email(如：a@b.c)', '如：长安街'];
        
        var traceid = document.getElementById('CorrelationId');

        var addressUrlConfig = {
            flt_action : "//vacations.ctrip.com/AHDBooking/",
            themeCity: "/Domestic/Tool/AjaxFeatureSelect.ashx",
            AjaxPadGetPosition: "/domestic/tool/AjaxPadGetPosition.aspx",
            ajaxGetHotelAddtionalInfo:'/Domestic/tool/AjaxGetHotelAddtionalInfo.ashx?browseData=1&from=0&viewCount=3&traceid='+traceid.value,
            hothotel: "/Domestic/Tool/AjaxIndexHotSaleHotelNew.aspx?traceid=" + traceid.value,
            sublandmark: "/Domestic/Tool/AjaxGetSubThemeLandMark.aspx?traceid=" + traceid.value,
            hotHotelUrl:"//hotels.ctrip.com/hotsale",
        	hyattUrl:"/flagship/hyatt",
            __AllyesUrl__:'//crm.ws.ctrip.com/Customer-Market-Proxy/AdCallProxyV2.aspx?',
    		__AllyesParam__:'sitetype=HTLCITY&biztype=301&adlist=%5b%7b%22pagecode%22%3a%221%22%2c%22domid%22%3a%22divAllyes%22%2c%22type%22%3a%220%22%7d%2c%7b%22pagecode%22%3a%222%22%2c%22domid%22%3a%22divAllyes06%22%2c%22type%22%3a%220%22%7d%2c%7b%22pagecode%22%3a%223%22%2c%22domid%22%3a%22divAllyes07%22%2c%22type%22%3a%220%22%7d%2c%7b%22pagecode%22%3a%224%22%2c%22domid%22%3a%22divDailySpecial%22%2c%22type%22%3a%220%22%7d%5d&fscreen=0'
    	};

        var isBigScreenStaticOld = isBigScreenDynamicOld = document.body.offsetWidth >= 1200;

        function loadAdStatic(isFirstLoad) {
            var isBigScreenCurrent = document.body.offsetWidth >= 1200;
            if (!isFirstLoad) {
                if (isBigScreenCurrent) {
                    if (isBigScreenStaticOld) return;
                } else {
                    if (!isBigScreenStaticOld) return;
                }
            }
            isBigScreenStaticOld = isBigScreenCurrent;
            var saleSpecialTagId = ['side_sales_01', 'side_sales_02', 'side_sales_03', 'side_sales_04', 'side_sales_05'],
                middleThemeTagId = ['htl_specials'];
            new AdSlider().load({
                mediaCode: 'JDAWSH',
                pageCode: '0312JDSUFP',
                siteType: 'HTLCITY',
                showSign: true,
                useCache: false,
                adList: [
                    {
                        impId: '03JDAWSH0312JDSUFP1134', // 左侧促销特惠按钮1
                        tagId: saleSpecialTagId[0],
                        width: isBigScreenCurrent ? 378 : 338,
                        height: 144,
                        jumpType: {
                            bySelf: true,
                            handleItemClick: function(url) {
                                window.open(url);
                            }
                        }
                    },
                    {
                        impId: '03JDAWSH0312JDSUFP1135', // 左侧促销特惠按钮2
                        tagId: saleSpecialTagId[1],
                        width: isBigScreenCurrent ? 378 : 338,
                        height: 63,
                        jumpType: {
                            bySelf: true,
                            handleItemClick: function(url) {
                                window.open(url);
                            }
                        }
                    },
                    {
                        impId: '03JDAWSH0312JDSUFP1136', // 左侧促销特惠按钮3
                        tagId: saleSpecialTagId[2],
                        width: isBigScreenCurrent ? 378 : 338,
                        height: 63,
                        jumpType: {
                            bySelf: true,
                            handleItemClick: function(url) {
                                window.open(url);
                            }
                        }
                    },
                    {
                        impId: '03JDAWSH0312JDSUFP1137', // 左侧促销特惠按钮4
                        tagId: saleSpecialTagId[3],
                        width: isBigScreenCurrent ? 378 : 338,
                        height: 63,
                        jumpType: {
                            bySelf: true,
                            handleItemClick: function(url) {
                                window.open(url);
                            }
                        }
                    },
                    {
                        impId: '03JDAWSH0312JDSUFP1138', // 左侧促销特惠按钮5
                        tagId: saleSpecialTagId[4],
                        width: isBigScreenCurrent ? 378 : 338,
                        height: 63,
                        jumpType: {
                            bySelf: true,
                            handleItemClick: function(url) {
                                window.open(url);
                            }
                        }
                    }
                ],
                adCallback: function(data, length) {
                    var targetTagId = [];
                    if (data && data.length) {
                        data.forEach(function(item) {
                            return targetTagId.push(item.contentId);
                        });
                    }
                    showElement(targetTagId);
                    var hideTagId = saleSpecialTagId.filter(function(item) {
                        return targetTagId.indexOf(item) == -1;
                    });
                    hideElement(hideTagId);
                }
            })
        }

        function loadAdDynamic(isFirstLoad, isCityChange, siteids) {
            var isBigScreenCurrent = document.body.offsetWidth >= 1200;
            if (!isFirstLoad) {
                if (!isCityChange) {
                    if (isBigScreenCurrent) {
                        if (isBigScreenDynamicOld) return;
                    } else {
                        if (!isBigScreenDynamicOld) return;
                    }
                }
            }
            isBigScreenDynamicOld = isBigScreenCurrent;
            var dailySpecialTagId = ['divDailySpecial'], footButtonTagId = ['divAllyes06', 'divAllyes07'];
            new AdSlider().load({
                mediaCode: 'JDAWSH',
                pageCode: '0312JDSUFP',
                siteId: siteids,
                useCache: false,
                siteType: 'HTLCITY',
                adList: [
                    {
                        impId: '03JDAWSH0312JDSUFP1121', // 顶部banner
                        tagId: 'divAllyes',
                        width: isBigScreenCurrent ? 780 : 620,
                        height: 235,
                        jumpType: {
                            bySelf: true,
                            handleItemClick: function(url) {
                                window.open(url);
                            }
                        }
                    },
                    {
                        impId: '03JDAWSH0312JDSUFP1133', // 左侧搜索框下方button
                        tagId: dailySpecialTagId[0],
                        width: isBigScreenCurrent ? 370 :330,
                        height: 166,
                        jumpType: {
                            bySelf: true,
                            handleItemClick: function(url) {
                                window.open(url);
                            }
                        }
                    },
                    {
                        impId: '03JDAWSH0312JDHJQI1141', // 底部button1
                        tagId: footButtonTagId[0],
                        width: isBigScreenCurrent ? 580 : 485,
                        height: 90,
                        jumpType: {
                            bySelf: true,
                            handleItemClick: function(url) {
                                window.open(url);
                            }
                        }
                    },
                    {
                        impId: '03JDAWSH0312JDSUFP1142', // 底部button2
                        tagId: footButtonTagId[1],
                        width: isBigScreenCurrent ? 580 : 485,
                        height: 90,
                        jumpType: {
                            bySelf: true,
                            handleItemClick: function(url) {
                                window.open(url);
                            }
                        }
                    },
                ],
                adCallback: function(data, length) {
                    var targetTagId = [];
                    if (data && data.length) {
                        data.forEach(function(item) {
                            return targetTagId.push(item.contentId);
                        });
                    }
                    showElement(footButtonTagId);
                    var hideTagId = footButtonTagId.filter(function(item) {
                        return targetTagId.indexOf(item) == -1;
                    });
                    hideElement(hideTagId);
                    var showElementId = dailySpecialTagId.filter(function(item) {
                        return targetTagId.indexOf(item) != -1;
                    });
                    showElement(showElementId);
                }
            })
        }

        function hideElement(hideTagId) {
            if (hideTagId && hideTagId.length) {
                for (var i = 0; i < hideTagId.length; i++) {
                    $('#' + hideTagId[i]).hide();
                }
            }
        }
      
        function showElement(showTagId) {
            if (showTagId && showTagId.length) {
                for (var i = 0; i < showTagId.length; i++) {
                    $('#' + showTagId[i]).show();
                }
            }
        }

            function loadCallback(){ 
                (function () {
                    try{
                    //    initialAdvertiseList();

                    //$(".side_sales a").bind("click",function(e){
                    //    //e.data-adpos-id
                    //    //e.stop()
                    //    var adid = $(this).attr("data-adpos-id"); 
                    //    var advValue ="version=1.0&channelid=4&moduleid=hod_hp_ad_def&hoteladvertiseid="+adid;
                    //    _tracklog("hotel.adclick",advValue);
                    //});

                    var  middle$ads = $(".J_specialtitle").find("a");//.bind("click",function(){
                    middle$ads.each(function(item){
                        // 需在轮播切换的事件之后调用
                        item.bind("click", function(e){ 
                            //advid
                            var adid = $(this).attr("data-adpos-id")
                            var advValue ="version=1.0&channelid=4&moduleid=hod_hp_ad_def&hoteladvertiseid="+adid;
                            _tracklog("hotel.adclick",advValue);
                            //e.data-adpos-id
                        });
                    });
                    }catch(e){}

                    var siteids = "";
                    var param = {cityId:""};
                    try{
                        //var _cookie = cQuery.cookie.get('HotelCityID');
                        //var cityId = _cookie.split("split")[0];
                        getCookie('HotelCityID', param);
                        siteids = "siteids=" + param.cityId + "&";
                    }catch(e){}

                    loadAdDynamic(true, false, param.cityId);
                    loadAdStatic(true);
            	
                    //var _js = cQuery.loader.js(addressUrlConfig.__AllyesUrl__ + siteids + addressUrlConfig.__AllyesParam__, {
                    //	type: 'text/javascript',
                    //	async: true
                    //});

                    //function clickPicScrollNum(e, homeClick){
                    //    // 获取当前显示的对象
                    //    var $pic = $("#divAllyes").find("div.j-picsroller-pics").firstChild();
                    
                    //    // 从对象中获取数据
                    //    var adid = $pic.attr("data-adid");
                    //    var ct   = $pic.attr("data-ct");
                    //    var href = $pic.attr("href");
         
                    //    // 获取UID、page_id、这里省略……
                    //    var page_id= $('#page_id').value();
                    //    if(homeClick){
                    //        window['__bfi'].push(['_tracklog', 'htl.home', "adid=${"+adid+"}&adurl={"+href+"}&moduleid=htl_ad_top&type=home"]);
                    //    } else {
                    //        window['__bfi'].push(['_tracklog', 'hotel.ad.swit.imp', "adid=${"+adid+"}&page_id=${"+page_id+"}&adurl={"+href+"}&moduleid=htl_ad_top&type=switch"]);
                    //    }
                    //}

                    //function clickPicAd(){
                    //    $("#divAllyes").bind('click', function(e){
                    //        var el = e.target,$el = $(el);
                    //        if (el.tagName == 'A' && $el.has("img")){
                    //            var adid = $el.attr("data-adid");
                    //            var ct   = $el.attr("data-ct");
                    //            var href = $el.attr("href");
                    //            window['__bfi'].push(['_tracklog', 'htl.home.ad.click', "adid=${"+adid+"}&page_id=${"+page_id+"}&adurl={"+href+"}&moduleid=htl_ad_top"]); 
                    //        }
                    //    });
                    //}

                    //var idx = 0;
                    //var interval = setInterval(function(){
                    //    if(idx++ == 100) {
                    //        clearInterval(interval);
                    //    }
                    //    var $ads = $("#divAllyes").find("ul.j-picsroller-num li");
                    //    if($ads.length > 0){
                    //        clearInterval(interval);
                    //        clickPicScrollNum(undefined, 'T');
                    //        $ads.each(function(item){
                    //            // 需在轮播切换的事件之后调用
                    //            item.bind("click", clickPicScrollNum);
                    //        });
                    //    }
                    //}, 500);
                        
                    //$("#divAllyes").bind('click', function(e){
                    //    var el = e.target;
                    //    if (el.tagName == 'IMG'){
                    //        var $el = $(el).parentNode();
                    //        var adid = $el.attr("data-adid");
                    //        var ct   = $el.attr("data-ct");
                    //        var href = $el.attr("href");
                    //        window['__bfi'].push(['_tracklog', 'htl.home.ad.click', "adid=${"+adid+"}&page_id=${"+page_id+"}&adurl={"+href+"}&moduleid=htl_ad_top"]); 
                    //    }
                    //});
                }
                )();
                $.mod.load('sideBar', '2.0', function () {
                    var sidebar = $(document).regMod('sideBar', '2.0', {
                        HTML: 
                            '<div class="side_fixed" id="sidebar">\
					        <a class="to_top" title="${backTop}" href="javascript:;" rel="nofollow" id="gotop2">&nbsp;</a>\
					        <a target="_blank" class="c_sidebar" href="${liveChatURL}" rel="nofollow" title="${liveChat}">${liveChat}</a>\
				          </div>',
                        url: {
                            feedBackURL: '//my.ctrip.com/uxp/Community/CommunityAdvice.aspx?producttype=3',
                            liveChatURL: '//servicechat.ctrip.com/?bizType=1396&pageCode=102001&isPreSale=1&channel=HTLSQ'
                        },
                        title:
                        {
                            liveChat:'在线咨询',
                            feedBack: '建议反馈' 
                        }
                    });
                });

                PageLoad.init();
                logTimer();
            
            } 

        window.onresize = function () {
            var cityId = document.getElementById('cityId').getAttribute('value');
            loadAdDynamic(false, false, cityId);
            loadAdStatic(false);
        }

            /** 机酒入口JS配置 BEGIN*/
            FHXConfig = {
                URL: {
                    FREE_COMBINE: '//vacations.ctrip.com/DIY/freesearchlist.aspx',
                    SINGLE_FLT_HOTEL: '//vacations.ctrip.com/DIY/$1-$2$3-$4$5'
                },
                placeholder: ['yyyy-mm-dd', '中文/拼音', '酒店名称', '选择商业区或行政区'],
                validate: [
                    "请选择出发日期",
                    "请选择返回日期",
                    "请选择入住日期",
                    "请选择离开日期",
                    "日期不符合格式规范或无效的日期",
                    "您选择的返回日期早于/等于出发日期，请重新选择",
                    "您选择的离店日期早于/等于入住日期，请重新选择",
                    "最大行程不能超过28天，请分订单提交预订",
                    "请选择出发城市",
                    "请选择到达城市",
                    "请选择入住城市",
                    "入住日期最早只能出发日期前一天",
                    "离开日期最晚只能返回日期后一天",
                    "出发城市不能与到达城市相同"
                ],
                address: {
                    message: {
                        suggestion: '热门城市（可直接选择城市或输入城市全拼/简拼）',
                        filterResult: '${val}，按字符顺序排序',
                        noFilterResult: ' 对不起，无匹配，请重新输入。',
                        sort: ["", "", "", "", "", "", "", "", "", "\"${val}\" 国家名，相关城市"]
                    },
                    suggestion: [
                        '<div class="c_address_box2 hot_city">\
                        <div class="c_address_hd">${message.suggestion}</div>\
                        <div class="c_address_bd">\
                            {{enum(key,arr) data}}\
                                <ul class="c_address_ul layoutfix">\
                                {{each arr}}\
                                    <li><a data="${data}" href="javascript:void(0);">${display}</a></li>\
                                {{/each}}\
                                </ul>\
                            {{/enum}}\
                        </div>\
                    </div>',
                        '<div class="c_address_box2 hot_city world">\
                        <div class="c_address_hd">${message.suggestion}</div>\
                        <div class="c_address_bd">\
                            {{enum(key,arr) data}}\
                                <ul class="c_address_ul layoutfix {{if key=="国内" }}c_address_ul_no{{/if}}">\
                                <li class="tit"><strong>${key}</strong></li>\
                                {{each arr}}\
                                    <li><a data="${data}" href="javascript:void(0);">${display}</a></li>\
                                {{/each}}\
                                </ul>\
                            {{/enum}}\
                        </div>\
                    </div>'],
                    suggestionIpad: ['\
                                               <div class="city_select_lhsl">\
                                                        <p class="title"><a class="close CQ_suggestionClose" href="javascript:;">&times;</a></p>\
                                                        <div class="key_word_key">\
                                                                 <div class="ico_key CQ_suggestionKeyboard">显示键盘</div>\
                                                        </div>\
                                                        {{enum(key,arr) $data.data}}\
                                                                 <div class="city_item CQ_suggestionPanel">\
                                                                           {{each(i,item) arr}}\
                                                                                    <a data="${item.data}" href="javascript:void(0);">${item.display}</a>\
                                                                           {{/each}}\
                                                                 </div>\
                                                        {{/enum}}\
                                               </div>','\
                                               <div class="city_select_lhsl">\
                                                        <p class="title"><a class="close CQ_suggestionClose" href="javascript:;">&times;</a></p>\
                                                        <div class="key_word_key">\
                                                                 <div class="ico_key CQ_suggestionKeyboard">显示键盘</div>\
                                                        </div>\
                                                        <ul class="tab_box CQ_suggestionTabContainer">\
                                                                 {{enum(key) $data.data}}\
                                                                           <li><span class="CQ_suggestionTab">${key}</span></li>\
                                                                 {{/enum}}\
                                                        </ul>\
                                                        {{enum(key,arr) $data.data}}\
                                                                 <div class="city_item CQ_suggestionPanel">\
                                                                           {{each(i,item) arr}}\
                                                                                    <a data="${item.data}" href="javascript:void(0);">${item.display}</a>\
                                                                           {{/each}}\
                                                                 </div>\
                                                        {{/enum}}\
                                               </div>\
                                     '],
                    suggestionStyle: '\
                    .c_address_box { background-color: #fff; font-size: 12px; width: 384px; }\
                    .c_address_box a { text-decoration: none; }\
                    .c_address_box2 { background-color: #fff; font-size: 12px; width: 384px; }\
                    .c_address_box2 a { text-decoration: none; }\
                    .c_address_hd {dispaly:none; height: 24px; border-color: #add9f4; border-style: solid; border-width: 1px 1px 0; background-color: #67A1E2; color: #fff; line-height: 24px; padding-left: 10px; }\
                    .c_address_hd .hd_tips{ color:#cee3fc;}\
                    .c_address_bd { border:#add9f4 1px solid; overflow: hidden; padding:10px; }\
                    .c_address_ol { margin:0; padding:0 0 20px; border-bottom: 1px solid #5DA9E2; }\
                    .c_address_ol li { color: #005DAA; cursor: pointer; float: left; height: 20px; line-height: 20px; list-style-type: none; text-align: center; }\
                    .c_address_ol li span { padding:0 8px; }\
                    .c_address_ol li .hot_selected { display:block; padding:0 5px; background-color: #FFFFFF; border-color: #5DA9E2; border-style: solid; border-width: 1px 1px 0; color: #000000; font-weight: bold; }\
                    .c_address_ul { margin:0; padding: 4px 0 0; }\
                    .c_address_ul li { float: left; height: 24px; overflow: hidden; width: 72px; }\
                    .c_address_ul li a { display: block; height: 22px;  border: 1px solid #FFFFFF; color: #1148A8; line-height: 22px; padding:0 5px; }\
                    .c_address_ul li a:hover { background-color: #E8F4FF; border: 1px solid #ACCCEF; text-decoration: none; }\
                    .hot_city{ width:300px;}\
                                               .c_address_hd{ text-align:center}\
                    .hot_city .c_address_bd{ padding:6px 0;}\
                    .hot_city li { width:50px;}\
                    .world{ width:348px;}\
                    .world .c_address_ul { padding:4px 0 4px 50px; position:relative; border-top:#ccc 1px dotted;}\
                    .world .c_address_ul_no{ border-top:0 none}\
                    .world .tit{ position:relative; margin:0 0 0 -38px; width:38px; line-height:24px; _display:inline;}\
                                               .city_select_lhsl{width:480px;padding:10px;border:1px solid #999;background-color:#fff;}\
                                               .key_word_key{height:48px;}\
                                     .ico_key,.ico_unkey{width:92px;height:43px;padding-left:65px;background:url(http:\/\/pic.c-ctrip.com\/ctripOnPad\/un_key20131012.png) 10px 11px no-repeat;cursor:pointer;line-height:40px;font-size:18px;border-width:1px;border-style:solid;border-radius:3px;}\
                                               .ico_key{border-color:#f0f0f0 #cfcfcf #707070;box-shadow:0 1px 0 #cfcfcf,1px 0 0 0 #f0f0f0 inset,-1px 0 0 0 #f0f0f0 inset,0 -1px 0 0 #f0f0f0 inset;}\
                                               .ico_unkey{border-color:#898989 #e2e2e2 #e2e2e2;background-color:#f5f5f5;box-shadow:0 -1px 0 #e2e2e2,0 1px 0 #d1d1d1 inset;}\
                                              .city_select_lhsl .close{float:right;width:30px;height:30px;line-height:30px;text-align:center;color:#666;font:bold 22px/30px "Heiti SC","Heiti SC light",STHeiti,STXihei,sans-serif;}\
                                               .city_select_lhsl .title{position:absolute;z-index:1;top:0;right:0;color:#999;}\
                                               .city_select_lhsl .tab_box{height:30px;margin-bottom:10px;border-bottom:2px solid #ccc;}\
                                               .city_select_lhsl .tab_box li{position:relative;z-index:1;float:left;display:inline;margin-right:10px;line-height:30px;cursor:pointer;}\
                                               .city_select_lhsl .tab_box li span{padding:6px 8px;}\
                                               .city_select_lhsl .tab_box .hot_selected{border-bottom:2px solid #06c;margin-bottom:-2px;font-weight:bold;color:#06c;}\
                                               .city_select_lhsl .city_item{display:inline-block;}\
                                               .city_select_lhsl .city_item a{float:left;display:inline;width:70px;height:30px;margin:0 2px 10px 0;padding-left:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:30px;color:#333;}\
                                               .city_select_lhsl .sarch_history_title{margin-bottom:10px;font-weight:bold;color:#06c;}\
                                               .city_select_lhsl .search_history_box{margin-bottom:10px;}\
                                               .city_select_lhsl .search_history_box a{margin-bottom:0;}',

                    filter: '\
                    <div class="c_address_select">\
                        <div class="c_address_wrap">\
                            <div class="c_address_hd">{{if hasResult}}{{tmpl message.filterResult}}{{else}}{{tmpl message.noFilterResult}}{{/if}}</div>\
                            <div class="c_address_list" style="">\
                                {{each (i,item) list}}\
                                    {{if cQuery.type(item)=="string"}}\
                                        <label>${item}</label>\
                                    {{else}}\
                                        <a href="javascript:void(0);" data="${data}" style="display: block;">${left}<span>${right}</span></a>\
                                    {{/if}}\
                                {{/each}}\
                            </div>\
                            {{if page.max>-1}}\
                                <div class="c_address_pagebreak" style="display: block;">\
                                    {{if page.current>0}}\
                                        <a href="javascript:void(0);" page="${page.current-1}">&lt;-</a>\
                                    {{/if}}\
                                    {{if page.current<2}}\
                                        {{loop(index) Math.min(5,page.max+1)}}\
                                            <a href="javascript:void(0);"{{if page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>\
                                        {{/loop}}\
                                    {{else page.current>page.max-2}}\
                                        {{loop(index) Math.max(0,page.max-4),page.max+1}}\
                                            <a href="javascript:void(0);"{{if page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>\
                                        {{/loop}}\
                                    {{else}}\
                                        {{loop(index) Math.max(0,page.current-2),Math.min(page.current+3,page.max+1)}}\
                                            <a href="javascript:void(0);"{{if page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>\
                                        {{/loop}}\
                                    {{/if}}\
                                    {{if page.current<page.max}}\
                                        <a href="javascript:void(0);" page="${page.current+1}">-&gt;</a>\
                                    {{/if}}\
                                </div>\
                            {{/if}}\
                        </div>\
                    </div>',
                    filterStyle: '\
                    .c_address_wrap { width: 220px; min-height: 305px; margin: 0; padding: 0 0 4px; border: 1px solid #add9f4; background:#fff; text-align: left; }\
                    .c_address_select .c_address_list { margin: 0; min-height: 277px; padding: 0; }\
                    .c_address_select .c_address_list span { font:10px/1. verdana; color:#bbb; display:block; margin: 0; overflow: hidden; padding: 0; white-space: nowrap; text-transform:uppercase }\
                    .c_address_select .c_address_list a { border-bottom: 1px solid #FFFFFF; border-top: 1px solid #FFFFFF; color: #0055AA; cursor: pointer; display: block; overflow: hidden;padding:3px 8px; text-align: left; text-decoration: none; }\
                    .c_address_select .c_address_list a:hover,\
                    .c_address_select .c_address_list a.hover { background:#e8f4ff; border-bottom: 1px solid #acccef; border-top: 1px solid #acccef; }\
                    .c_address_select .c_address_pagebreak { display: none; line-height: 25px; margin: 0; padding: 0; text-align: center; }\
                    .c_address_select .c_address_pagebreak a { color: #0055AA; display: inline-block; font-family: Arial, Simsun, sans-serif; font-size: 14px; margin: 0; padding: 0 4px; text-align: center; text-decoration: underline; width: 15px; }\
                    .c_address_select #c_address_arrowl, .c_address_select #c_address_arrowr { color: #0055AA; }\
                    .c_address_select a.address_current { color: #000; text-decoration: none; }'
                }
            }
            /** 机酒入口JS配置 END*/        
            var $globalPad = true; //support ctrip on pad
            var $isPad = /pad/.test(navigator.userAgent.toLowerCase()); 
            $LAB.script({ src: '//webresource.c-ctrip.com/code/cquery/cQuery_110421.js', charset: 'utf-8' }).wait()
            .script({ src: '//webresource.c-ctrip.com/ResHotelOnline/R8/search/js.merge/base-bmap.js?releaseno=2020-06-13-18-12-16', charset: 'utf-8' }).wait()
.script({ src: '//webresource.c-ctrip.com/ResHotelOnline/R8/search/js.merge/searchhotel.js?releaseno=2020-06-13-18-12-16', charset: 'utf-8' }).wait(loadCallback)
            
            .script({ src: '//webresource.c-ctrip.com/ResPackageOnline/R10/js/min/SSH.src.js?releaseno=2020-06-13-18-12-16', charset: 'utf-8' });
            //.script({src: '//webresource.c-ctrip.com/uires/hotelbooking/online/JavaScript/domestic/pad/index.js?releaseno=346475_2013_01_30_19_15_50.js'});
    