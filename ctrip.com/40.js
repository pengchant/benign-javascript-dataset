
        $LAB
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/jquery-1.7.2.min.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()

	.script({ src: "https://webresource.c-ctrip.com/code/cquery/cQuery_110421.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait(
		function () {
		    window.HotSaleData = $.parseJSON('');
		    window.group_config = {
		        sortType: "df",
		        CurrentCityId: "28",
		        CurrentCityPy: "chengdu",
		        CurrentCityDistrictId: "104",
		        AjaxSearchParm: "",
		        ubtkey: 'group_room_search_subsituation',
		        ubtkey1: '',
		        ubtvalue: '{  "pageid": "600001288",  "subselect": {    "type": 1  }}',
		        ubtvalue1: '',
		        sideBar: {
		            url: {
		                questionURL: 'http://pages.ctrip.com/commerce/promote/201105/hotel/cjwt/index.html',
		                feedBackURL: 'http://my.ctrip.com/uxp/Community/CommunityAdvice.aspx'
		            },
		            HTML: '<div class="side_fixed" id="sidebar"> <a class="to_top" title="${backTop}" href="javascript:;" id="gotop2"> </a> <a target="_blank" class="c_sidebar" href="${questionURL}" title="${question}">${question}</a> <a target="_blank" class="c_sidebar" href="${feedBackURL}" title="${feedBack}">${feedBack}</a></div>',
		            title: {
		                feedBack: "反馈建议",
		                question: "常见问题"
		            }
		        },
		        lazyLoad: {//延时加载图片
		            "elems": null
		        },
		        price: {
		            'options': {
		                isInterval: true
		            },
		            'listeners': {
		                /**确定按钮点击时调用的函数*/
		                'click': function () {
		                    gotoPriceLink();
		                }
		            }
		        },
		        allyes: {
		            "mod_allyes_user": "ctrip|CTRIP_Deals_Group_HOMEPAGE|CTRIP_Deals_Group_HOMEPAGE_banner"
		        },
		        //详情地图的机场、火车站、地铁 jason数据
		        NearLocationJason: '{"filghtData":[{"lat":30.5788478851318,"lon":103.958503723145,"distance":"10.3","name":"成都双流国际机场"}],"trainData":[{"lat":30.6057758331299,"lon":104.068618774414,"distance":"0.7","name":"成都南站"},{"lat":30.6286392211914,"lon":104.141632080078,"distance":"8.1","name":"成都东站"},{"lat":30.6967601776123,"lon":104.073402404785,"distance":"10.5","name":"成都站"}]}'
		    };
		}
	)

        // new start
        //.script({ src: "http://webresource.c-ctrip.com/code/cquery/mod/calendar-6.0.js", charset: "utf-8" }) 
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/common.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/mini/cPackage-1.1.le.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/group_search-2.0.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/group_hotelcity-1.0.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/abtest/tuangou_search.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/mod/slideShow-1.0.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/reshotelonline/R10/search/js.min/lib/biz.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/group_searchresult-2.0.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webapi.amap.com/maps?v=1.3&key=0e9680eed7f5ffc60a7b02167d0182a3", charset: "utf-8" }).wait()

    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/widget/map/poi.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/widget/map/router.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/widget/amap.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/widget/mapDialog.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/widget/popup-map.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/widget/popup-side.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()

    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/widget/map-api.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/biz.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
        //.script({ src: "../Js/mods.js", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/scroll-observer.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
    .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/hotelCityListMap.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()
   


		function fnToggleMap() {
		    
		    if ($("#iMap").hasClass("hidden")) {
		        $("#iMap").removeClass("hidden");
		        jQuery(".J_togglemap").html("收起地图");
		        jQuery("#J_minMapWrap").height(320);
		        
		    } else {
		        $("#iMap").addClass("hidden");
		        jQuery(".J_togglemap").html("展开地图");
		        jQuery("#J_minMapWrap").height(34);
            }

        }

        
		
    