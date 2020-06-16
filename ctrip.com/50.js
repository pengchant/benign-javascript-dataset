
    window.__uidc_init = new Date * 1;
    var isQuickBookUser = false;
    var initFormData = {
        hotelIds : '',
        markType : 0,
        page : 1,
        zone : '',
        location: '',
        type:'',
        brand:'',
        group:'',
        feature:'',
        equip:'',
        bed:'',
        breakfast:'',
        other:'',
        star:'',
        sl:'',
        s:'',
        l:'',
        OrderBy:'99',
        OrderType:'',
        price: "",
        a : "0",
        keywordLat : '',
        keywordLon : '',
        contrast : '0',
    	PaymentType: '',
    	CtripService: '',
    	promotionf: '',
        allpoint:''
    };
    var ISFROMINDEX = false;
    var ISSSOQUICKLOGIN=1;
    var isQuickLogin=1;
    var HOTELFOUND =0;
    var MAX_STAY = 28 * 24 * 3600 * 1000;
    var POPMAP_URL = '//webresource.c-ctrip.com/ResHotelOnline/R8/search/js.min/widget/popup-map.js?releaseno=2020-06-13-18-12-16';
    var SOSOMAP_URL = '//webresource.c-ctrip.com/ResHotelOnline/R8/search/js.min/sosoMap.js?releaseno=2020-06-13-18-12-16';
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
            showAMap: true,
            isShowAmap:true,
            AMapTitle: '查看商业区地图',
            all: '全部',
            subCity: '下辖市/县：'
        }
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
            no_room: '您选择的日期没有房间可供预订!',
            room_num: '请选择预订房间数',
            noExistCity: '目的地{city}不存在'
        }
    };

    var noticeMessageConfig = ['中文/拼音/英文', '输入或选择位置关键词', '名称/品牌 如:如家'];
    var isNewBookSucessVer = '0';
    var roomMessageConfig = {
        noVisit: '暂无浏览记录',
        loading: '正在加载，请稍候......',
        allroom: ['全部房型', '收起房型', '展开全部房型(', ')'],
        prom: '您可<a target="_blank" href="$1" data-dopost="T" data-ctm="$2">修改入住日期</a>享受更多促销优惠：',
        colspan : 9
    };
    var noResultMessageConfig = ['您是否要找', ' '];
    var mapMessageConfig = {
        aMap: ['查询', '酒店'],
        license: 'GS（2010）1049号',
        distanceLabel: '距离酒店',
        landmarks:[],
        isK1Landmark : false
    };
   
        var addressUrlConfig = {
            vistorCount: '/Domestic/Tool/AjaxVisitCount.aspx?cityId=2',
            mapIframe: '/Domestic/MapIframeDetail.aspx?city=2&province=2',
            postUrl: '',
            locationMoreUrl: '',
            brandMoreUrl: '',
            serviceMoreUrl: '',
            amap: '/Domestic/Tool/AjaxCityZone.aspx',
            cityZone:'/domestic/tool/AjaxCityZoneNew.aspx',
            linkZone: '/hotel/$1$2/zone$3',
            traffic: '/Domestic/Tool/AjaxHotelTraffic.aspx?hotel=$1&CityID=2',
            allRoom: '/Domestic/tool/AjaxHotelPriceNew.aspx?distinct=0&city=2&type=new&psid=&',
            order: '/DomesticBook/InputNewOrder.aspx',
            photoabulm: '/Domestic/Tool/AjaxLoadPictureAlbum.aspx?isFromList=T&city=2&istaiwan=0&hotel=$1', 
            delayOrder: '/DomesticBook/InputDelayOrder.aspx',
            roomInfo: '/Domestic/Tool/AjaxRoomInfoNew.aspx?distinct=0&city=2&istaiwan=0&psid=',
            visitedAndCollectHotelUrl:'/Domestic/tool/AjaxGetHotelAddtionalInfo.ashx?browseData=1&favData=1&FavCount=2&cityId=2&hf=0',
            ajaxGetCptList:'/Domestic/tool/AjaxGetCPTList.ashx?advpositioncode=HTL_LST_001,HTL_LST_002,HTL_LST_004&city=2&checkin=2020-06-16&checkout=2020-06-17&star=',
            loadHotSellUrl: "/Domestic/tool/AjaxHotSellLoad.aspx?cityid=2",
            ajaxViewRooms :"/Domestic/tool/AjaxViewRooms.ashx",
            hyattUrl:"/flagship/hyatt"
        }

        var IsGAT = "F";

        var IsOpenBaiDuMapFlgForGAT = "F";

        var IsOpenBaiDuMapFlg = "T";

        var IsLatlonOffset = "T";

        var DomesticCityId = '2';
    var hotelDomesticConfig = {
    	//hasLogin
        
    	city: {id: "2", py: "shanghai", name: "上海"},
        isLocalhost: 0,
        webResourceReleaseNo: '20130508',
        ViewType: 'detail',
        Recommandprom: {},
        searchSingleRoomParam:'',
        isNoResult:'0',
        istaiwan :'0',
        cas:{
            NeverMore: true,
            OceanBall: true,
            OceanBallUrl: '/domestic/cas/oceanball'
        },
        IsUseNewLoginMask: "T"
    }
    
    var moredivurl ={
        zoneurl : "",
        locationurl : "",
        metrourl :"",
        airportraywailurl : ""
    }

    var HotelMapStreetJson = null;

    var HotelMaiDianData ={
    	key: 'hotel_inland_list_basic_online',
        value: {
            keywords: '',
            starttime: '2020-06-16',
            endtime: '2020-06-17',
            star: '',
            amount: '',
            zone: '',
            sl: '',
            l: '',
            s: '',
            position: '',
            cityname: '上海',
            brand: '',
            feature: '',
            type: '',
            orderby: 'ctriprecommend',
            ordertype: 'desc',
            paytype: '',
            cityid: '2',
            hotelnum: '0',
            uid: '',
            isprepay: '0',
            isconfirm: '0',
            isbookable: '0',
            ispromotion: '0',
            iscoupon: '0',
            ishourroom: '0',
            htllist: '[]',
            spreadhotel: '',
            pageindex: '1',
            rnum: '',
            mnum: '',
            cnum: '',
            loadtime: '06-16-2020 07:42:50 UTC'
        }
    };
    
    var HotelMaiDianOtherData = {
        cityid: '2',
        regionid:'2',
        regiontype:'1',
        hotelExpandList: ''
    }; 

    function loadCallback(){
    	App.init({
            zoneDataUrls: ['/Domestic/Tool/AjaxCityZone.aspx', '/Domestic/Tool/AjaxShowMoreDiv.aspx'],
            urlTpls: { },
            landmarksAjax: '/Domestic/Tool/AjaxShowMoreDiv.aspx'
        });

        (function(){
            try{
                initialAdvertiseIds();
                $("#list a").bind("click",function(e){
                    var adid = $(this).attr("data-adpos-id"); 
                    var advValue ="version=1.0&channelid=4&moduleid=hod_sr_ad_def&hoteladvertiseid="+adid;
                    _tracklog("hotel.adclick",advValue);
                });
            }
            catch(e){}       
        })();
        
        $.mod.load('sideBar', '2.0', function () {
            var sidebar = $(document).regMod('sideBar', '2.0', {
                HTML: '<div class="side_fixed" id="sidebar">\
					    <a class="to_top" title="${backTop}" href="javascript:;" rel="nofollow" id="gotop2">&nbsp;</a>\
					    <a target="_blank" class="c_sidebar" href="${liveChatURL}" rel="nofollow" title="${liveChat}">${liveChat}</a>\
				    </div>',
                url: {
                    feedBackURL: '//my.ctrip.com/uxp/Community/CommunityAdvice.aspx?producttype=3',
                    liveChatURL: '//servicechat.ctrip.com/?bizType=1396&pageCode=102032&isPreSale=1&channel=HTLSQ'
                },
                title:
                {
                    liveChat:'在线咨询',
                    feedBack: '建议反馈'
                },
                bgSrc:
                {
                    src: '//pic.c-ctrip.com/htlpic/common/un_sidebar.png'
                },
                bottom_px: 100,
                CSS:'.side_fixed{position:fixed;right:20px;bottom:50px;z-index:9999;width:35px;}\
			        .to_top,.c_sidebar{background-image:url(${src});_background-image:url(${srcIE6});background-repeat:no-repeat;}\
			        .to_top{position:relative;float:left;clear:both;width:35px;height:0;margin-bottom:2px;padding-top:35px;overflow:hidden;cursor:pointer;z-index:2;visibility:hidden;background-position:0 0;}\
			        .to_top:hover{background-position:-79px 0;}\
			        .c_sidebar{display:inline-block;width:35px;height:32px;padding-top:3px;margin-bottom:2px;overflow:hidden;vertical-align:top;font-size:12px;color:#fff;background-position:0 -37px;text-align:center;text-decoration:none;line-height:14px;}\
			        .c_sidebar:hover{background-position:-79px -37px;}\
			        .c_sidebar_hl{background-position:-40px -37px;}'
            });
        });

        RecommandTunHotel(); 

        QueryEngine.load();
        logTimer();
         
       
      $('#gongyu').bind('click', function (e) {
        var fm = document.forms[0];
        e = e || window.event;
        var target = e.target || e.srcElement; 
        var url = (target.dataset ? target.dataset['url'] : target.getAttribute('data-url'));
        fm.action = url;
        if (fm.__VIEWSTATE) fm.__VIEWSTATE.name = "NOVIEWSTATE";
        fm.target = "_self";
        fm.submit();
        });

      window.$_bf.tracklog("hotel.list", "UID=${duid}&page_id=${page_id}&VERSION=1&From=&FromTime=2020-06-16&ToTime=2020-06-17&Star=&Price=-1--1&PositionType=&PositionId=&Keyword=&CityId=2&starid=&starid=");

      //不可定酒店放出埋点
      if($("#unBookHotelTraceCode").value() != null && $("#unBookHotelTraceCode").value() != ""){
          window['__bfi'].push(['_tracklog', 'online_inland_list_unbookmatch', $("#unBookHotelTraceCode").value(), callback]);
      }
    }

    function RecommandTunHotel(recommendTuan, tuanParam, hasHotel)
    { 
       var traceid =  ($('#CorrelationId').length ? ('&traceid='+$('#CorrelationId')[0].value) : '');
       var requestFlag = recommendTuan ? (recommendTuan === 'T') : ('F' === 'T'),
           url = '/Domestic/Tool/AjaxGetTuanHotel.aspx?' + (tuanParam || 'star=&city=2&startdate=2020-06-16&enddate=2020-06-17&zone=&location=0&pageindex=1&district=0') + '&psid=' + traceid;

       if (requestFlag && $('#hoteltuan').length) {
           $.ajax(url, {
               cache: true,
               onsuccess: function (response) {
                   if(response && response.responseText) {
                       var $hotelTuan = $('#hoteltuan');
                       if($hotelTuan.length > 0) {
                           $hotelTuan[0].style.display = 'block';
                           $hotelTuan.html(response.responseText);  
                       }
                   } 
               }
           });
       }
    }

    
    var $globalPad = true; //support ctrip on pad
    var $isPad = /pad/.test(navigator.userAgent.toLowerCase()); 
        

    var BizData = {
        hotelPositionJSON:  [],
         mapIcon: '//pic.c-ctrip.com/hotels121118/search_num/n${index}.png',
         mapIconHover: '//pic.c-ctrip.com/hotels121118/search_num/h${index}.png'
    }
    //if(document.getElementById("textNoresult")) {
    //    textNoresult.innerHTML = "<strong>很抱歉，暂时无法找到符合您要求的酒店。</strong>"
    //}
