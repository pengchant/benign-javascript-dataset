 (function($){ GH.new_user_profile = true })(GH); (function(){ if(typeof(GH) !== 'undefined' && typeof(GH.add ) === 'function' ){ GH.add("GHModal__INIT_DATA", { ajaxURL: "/gh/shipto?modules=SHIP_TO_LOCATION", clickTriggerId: "gh-shipto-click", fetchMaxTimeOut: 6000, modalTitleId: "gh-shipto-label" }); } })(); (function(){ if(typeof(GH) !== 'undefined' && typeof(GH.add ) === 'function' ){ GH.add("GHShipTo__INIT_DATA", { clickTriggerId: "gh-shipto-click" }); } })(); (function($){ if(typeof(GHFlyout === 'function')) { new GHFlyout("/gh/watchlist?modules=WATCH_LIST", "gh-wl-click", ""); } })(GH && GH.jQ); (function($){ if(typeof(GHFlyout === 'function')) { new GHFlyout("/gh/cart?modules=MINI_CART", "", "gh-minicart-hover"); } })(GH && GH.jQ); if(typeof GH!="undefined"&&GH){GH.urls={ autocomplete_js:"https://ir.ebaystatic.com/rs/c/desktop_ac-10292019.js",fnet_js:"https://c.paypal.com/da/r/efbv2.js",ie8_js:"http://ir.ebaystatic.com/f/rbezfuzpu20wfd2kvejeb5adxyg.js",scandal_js:"https://ir.ebaystatic.com/cr/v/c1/ScandalJS-1.2.0-v4.min.js",widget_delivery_platform:"https://ir.ebaystatic.com/cr/v/c1/globalheader_widget_platform__v2-65ca700c30b--ie11.js" }; GH.GHSW={ raptor:0,sandbox:0,emp:0,ac1:0,ac2:0,ac3:0,ac4:0,ac5:0,ac6:0,hideMobile:"true",langSwitch:0,pool:0,ALERT_POPUPOFF:0,NEWALERT_POPUPOFF:0,newprofile:0,desktop_new_profile_service:"true",UNLOAD_Firefox:0,UNLOAD_Chrome:0,UNLOAD_IE:0,UNLOAD_Safari:0,ENABLE_HTTPS:"true",SEARCH_PROM:"true",MINICART:0 };} if(typeof GH!="undefined" && GH){GH_config={"xhrBaseUrl":"https://www.ebay.com","siteId":"223","geoLang":"[\"en-US\",\"zh-CN\"]","suppressGeoUserUpdateInfo":"true","lng":"zh-CN","env":"production",sin:0,ct:0,pageId:2499334,geoul:'CN',langs:1,selectedCatId:'15052',fn:"",id:""};GH.init();}