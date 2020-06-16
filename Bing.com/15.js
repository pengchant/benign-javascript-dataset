digitalData = { userConsentCookieName: 'MSCC', cookiesToCollect: ['_mkto_trk', 'Bounced'], syncMuid: true, useDefaultContentName: true, useShortNameForContentBlob: true, isLoggedIn: false, shareAuthStatus: true, autoCapture: { pageView: true, onLoad: true, onUnload: true, lineage: true, click: true, scroll: true, resize: true, jsError: true, addin: true, perf: true }, ix: { a: true, g: true }, coreData: { pageName: 'pbc: bing ads', appId: 'BingAds-Advertising' }, callback: { }, page: { siteInfo: { siteDomain: 'about.ads.microsoft.com', siteName: 'bingads', siteDisplayName: 'acquisitionlp', siteEnvCode: 'prod', siteViewMode: 'LiveSite' }, serverInfo: { serverName: 'rd00155de1b4be' }, userInfo: { cc_HasConsent: 'true', cc_NeedsConsent: 'false', cookieUserStats: function() { if (typeof digitalData.getCookie("UserStats") === 'string' && typeof digitalData.getCookie("UserStats").split("=")[1] === 'string') { return digitalData.getCookie("UserStats").split("=")[1]; } }, ba_iscustomer: 'digitalData.isBingAdsCustomer()', pp_ba_customerID: '', pp_ba_companyName: '', pp_isSignedIn: 'false', pp_isNewPartner: '0', mkto_xuid: '', }, pageInfo: { nodeLevel: '5', nodeID: '13127', nodeName: 'overview', nodeAliasPath: '/lp/h/a/pbc/ppc-bing-ads-pbc', absoluteURL: 'https://about.ads.microsoft.com/en-us/h/a/microsoft-advertising', pageID: '70479', displayName: 'Overview', analyticPageName: 'pbc: bing ads', analyticFullPageName: 'acquisitionlp: pbc: bing ads: en-us', pageName: 'pbc: bing ads', pageTemplateCodeName: 'bingads_landingpage_standalone', pageTypeCodeName: 'custom.bingads_landingpage_standalone', pagePrimaryAudience: 'not set', recommendationsShow: 'false', s_eid: function() { var value = null; try { if (typeof digitalData.getCookie("EmailIDOmnitureTrackingCode") === "string" && digitalData.getCookie("EmailIDOmnitureTrackingCode").length > 0) { value = digitalData.getCookie("EmailIDOmnitureTrackingCode").split('#')[0].toLowerCase(); } else if (typeof digitalData.getParameter("s_eid") === 'string' && digitalData.getParameter("s_eid").length > 0) { value = digitalData.getParameter("s_eid").split('#')[0].toLowerCase(); } } catch (e) { value = "e"; } finally { return value; } }, s_cid: function() { var value = null; try { if (typeof digitalData.getCookie("ExternalOmnitureTrackingCode") === "string" && digitalData.getCookie("ExternalOmnitureTrackingCode").length > 0) { value = digitalData.getCookie("ExternalOmnitureTrackingCode").split('#')[0].toLowerCase(); } else if (typeof digitalData.getParameter("s_cid") === 'string' && digitalData.getParameter("s_cid").length > 0) { value = digitalData.getParameter("s_cid").split('#')[0].toLowerCase(); } else if (document.referrer && typeof digitalData.getParameter("s_cid", document.referrer) === 'string') { value = digitalData.getParameter("s_cid", document.referrer).toLowerCase(); } } catch (e) { value = "e"; } finally { return value; } }, s_int: function() { var value = null; try { if (typeof digitalData.getCookie("InternalOmnitureTrackingCode") === "string" && digitalData.getCookie("InternalOmnitureTrackingCode").length > 0) { value = digitalData.getCookie("InternalOmnitureTrackingCode").split('#')[0].toLowerCase(); } else if (typeof digitalData.getParameter("s_int") === 'string' && digitalData.getParameter("s_int").length > 0) { value = digitalData.getParameter("s_int").split('#')[0].toLowerCase(); } else if (document.referrer && typeof digitalData.getParameter("s_int", document.referrer) === 'string') { value = digitalData.getParameter("s_int", document.referrer).toLowerCase(); } } catch (e) { value = "e"; } finally { return value; } }, navHierarchy: 'h,a,bing_ads_pbc', navTopLevel: 'h', navLevel1: function() { if (digitalData.page.pageInfo.navHierarchy.split(',')[0]) { return digitalData.page.pageInfo.navHierarchy.split(',')[0]; } }, navLevel2: function() { if (digitalData.page.pageInfo.navHierarchy.split(',')[1]) { return digitalData.page.pageInfo.navHierarchy.split(',')[1]; } }, navLevel3: function() { if (digitalData.page.pageInfo.navHierarchy.split(',')[2]) { return digitalData.page.pageInfo.navHierarchy.split(',')[2]; } }, navLevel4: function() { if (digitalData.page.pageInfo.navHierarchy.split(',')[3]) { return digitalData.page.pageInfo.navHierarchy.split(',')[3]; } }, navLevel5: function() { if (digitalData.page.pageInfo.navHierarchy.split(',')[4]) { return digitalData.page.pageInfo.navHierarchy.split(',')[4]; } }, pageTag: function() { if (typeof digitalData.getAttributes("data-analytics-pagetag") === 'string') { return digitalData.getAttributes("data-analytics-pagetag"); } }, analyticEvents: function() { if (typeof digitalData.getParameter("analytic_events") === 'string') { return digitalData.getParameter("analytic_events"); } }, topNav: 'False' }, contentInfo: { lpType: 'ppc', title: 'overview', publishDate: function() { if (typeof digitalData.getAttribute("data-analytics-publishdate") === 'string') { return digitalData.getAttribute("data-analytics-publishdate"); } }, blogAuthor: function() { if (typeof digitalData.getAttributes("data-analytics-blogauthor") === 'string') { return digitalData.getAttributes("data-analytics-blogauthor"); } }, blogCategory: function() { if (typeof digitalData.getAttributes("data-analytics-blogcategory") === 'string') { return digitalData.getAttributes("data-analytics-blogcategory"); } }, blogTag: function() { if (typeof digitalData.getAttributes("data-analytics-blogtag") === 'string') { return digitalData.getAttributes("data-analytics-blogtag"); } }, formName: function() { if (typeof digitalData.getAttribute("data-analytics-formname") === 'string') { return digitalData.getAttribute("data-analytics-formname"); } }, formID: function() { if (typeof digitalData.getAttribute("data-analytics-formid") === 'string') { return digitalData.getAttribute("data-analytics-formid"); } }, formIntType: function() { if (typeof digitalData.getAttribute("data-analytics-formtype") === 'string') { return digitalData.getAttribute("data-analytics-formtype"); } }, formCode: function() { if (typeof digitalData.getParameter("bfc") === 'string') { return digitalData.getParameter("bfc"); } }, bfn: function() { if (typeof digitalData.getParameter("bfn") === 'string') { return digitalData.getParameter("bfn"); } }, formType: function() { if (typeof digitalData.getParameter("bft") === 'string') { return digitalData.getParameter("bft"); } }, formReferrer: function() { if (typeof digitalData.getParameter("bfr") === 'string') { return decodeURIComponent(digitalData.getParameter("bfr")).replace(/\+/g, " "); } }, formCouponCodeClass: function() { if (typeof digitalData.getAttribute("data-analytics-couponcodeclass") === 'string') { return digitalData.getAttribute("data-analytics-couponcodeclass"); } else if (typeof digitalData.getValue("input[type=\"text\"][id*=\"CouponCodeClass\"]") === 'string') { return digitalData.getValue("input[type=\"text\"][id*=\"CouponCodeClass\"]"); } }, capFormTicket: function() { if (typeof digitalData.getCookie("CapUcmtTicketNumber") === 'string') { return digitalData.getCookie("CapUcmtTicketNumber"); } }, gatedHasGate: function() { if (typeof digitalData.hasLength("#gatedFormPlaceHolder") === 'string') { return digitalData.hasLength("#gatedFormPlaceHolder"); } }, gatedIsVisibile: function() { if (typeof digitalData.isVisible("#gatedFormPlaceHolder") === 'string') { return digitalData.isVisible("#gatedFormPlaceHolder"); } }, optRecEnabled: 'false' }, attributes: { ktkoCultureID: '50', market: 'en-us', marketFull: 'english - united states', language: function() { if (typeof digitalData.page.attributes.market === 'string') { return digitalData.splitString(digitalData.page.attributes.market, "-", "0"); } }, country: function() { if (typeof digitalData.page.attributes.market === 'string') { return digitalData.splitString(digitalData.page.attributes.market, "-", "1"); } }, languageFull: function() { if (typeof digitalData.page.attributes.marketFull === 'string') { return digitalData.splitString(digitalData.page.attributes.marketFull, "-", "0"); } }, countryFull: function() { if (typeof digitalData.page.attributes.marketFull === 'string') { return digitalData.splitString(digitalData.page.attributes.marketFull, "-", "1"); } } } }, hasLength: function(selc) { if (typeof jQuery === 'function') { return $(selc).length > 0; } }, isBingAdsCustomer: function() { if (digitalData.hasCookie("IsBingAdsCustomer") || digitalData.hasCookie("UserStats") || digitalData.hasCookie("UserStats_LastActivity")) { return "true"; } else { return "false"; } }, ppLoginType: function() { if (typeof $("meta[name='PartnerPortalLoginType']").attr("content") === 'string') { if ($("meta[name='PartnerPortalLoginType']").attr("content") === "BingAds") { return "Microsoft Ads"; } else if ($("meta[name='PartnerPortalLoginType']").attr("content") === "Tenant") { return "AAD"; } } else { return ""; } }, isVisible: function(selc) { if (typeof jQuery === 'function') { return $(selc).is(":visible"); } }, getValue: function(selc) { if (typeof jQuery === 'function') { return $(selc).val(); } }, getAttributes: function (attr) { if (typeof jQuery === 'function') { var ary = []; $("[" + attr + "]").each(function () { ary.push($(this).attr(attr)); }); return ary.join(","); } }, getAttribute: function(attr) { if (typeof jQuery === 'function') { return $("[" + attr + "]").attr(attr); } }, getParameter: function(parm) { var vars = [], hash; var q = document.URL.split('?')[1]; if ((q != undefined) && ((typeof q === 'string'))) { q = q.split('&'); for (var i = 0; i < q.length; i++) { hash = q[i].split('='); vars.push(hash[1]); vars[hash[0]] = hash[1]; } } return vars[parm]; }, hasCookie: function(sKey) { if (!sKey) { return false; } return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie); }, getCookie: function(sKey) { if (!sKey) { return null; } return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null; }, setCookie: function(sKey, sValue, iMonth, bSecure) { if (!sKey || /^(?:expires|max\-age|secure)$/i.test(sKey)) { return false; } sExpires = "; expires="; if (iMonth) { var jsDateObj = new Date(); jsDateObj.setMonth(jsDateObj.getMonth() + iMonth); sExpires = sExpires + jsDateObj.toUTCString(); } document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + "; domain=.ads.microsoft.com; path=/" + (bSecure ? "; secure" : ""); return true; }, splitString: function(str, sep, indx) { if (!str || !sep || !indx || typeof str.split(sep)[indx] !== 'string') { return null; } else { return str.split(sep)[indx].trim(); } }, generateGUID: function() { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8); return v.toString(16); }); }, linkOpensInNewWindowText: function() { var value = ""; if (typeof Settings === 'object' && typeof Settings.LinkOpensInNewWindowText === 'string' && Settings.LinkOpensInNewWindowText.length > 0) { value = Settings.LinkOpensInNewWindowText; } return value; } }; if (typeof digitalData === 'object' && typeof digitalData.ppLoginType === 'function' && typeof digitalData.ppLoginType() === 'string') { if (digitalData.ppLoginType() === 'Microsoft Ads') { digitalData.authMethod = 1; digitalData.isLoggedIn = true; } else if (digitalData.ppLoginType() === 'AAD') { digitalData.authMethod = 2; digitalData.isLoggedIn = true; } } try { digitalData.guid = digitalData.generateGUID(); } catch (e) { ; } try { if (typeof digitalData === "object" && /^CMS\.BlogPost$|^custom\.BingAds_Insight$|^custom\.BingAds_CustomerStory$|^custom\.BingAds_StandardArticle$/i.test(digitalData.page.pageInfo.pageTypeCodeName)) { digitalData.page.pageInfo.recommendedItem = JSON.parse('{}'); } } catch (e) { }