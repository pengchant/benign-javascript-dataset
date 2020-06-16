
        var rapidPageConfig = {
            rapidEarlyConfig : {"compr_type":"deflate","tracked_mods":["Footer","IntlSelector"],"spaceid":2023538075,"click_timeout":300,"track_right_click":true,"apv":true,"apv_time":0,"async_all_clicks":false,"compr_on":true,"yql_host":"udc.yahoo.com","yql_path":"\/v2\/public\/yql","test_id":"FPSATE101,HPCANVAS101,FPCASINOCTR","client_only":0,"pageview_on_init":true,"perf_navigationtime":2,"addmodules_timeout":300,"extendbcookie":false,"keys":{"_rid":"cr93l0dfegsmj","mrkt":"us","pt":"home","site":"fp","ver":"megastrm","uh_vw":0,"colo":"gq1","navtype":"server","abk":""},"dwell_on":true,"viewability":true,"tracked_mods_viewability":{"applet_p_50000372":"hd","applet_p_50000291":"featurebar","applet_p_50000287":"featurebar","applet_p_50000398":"app-bhpromo","applet_p_50000313":"strm","applet_p_50000314":"strm","applet_p_50000399":"app-hpse","applet_p_50000425":"app-vid","applet_p_50000352":"tc-ts","applet_p_50000353":"app-wea","applet_p_50000298":"app-scor","applet_p_50000349":"storyswarm","applet_p_50000347":"rr-promo","applet_p_50000295":"app-hor","applet_p_50000405":"ft","applet_p_50000438":"card-TV","applet_p_50000456":"app-coron","applet_p_50000459":"stream-TV","applet_p_50000461":"casino","applet_p_50000466":"promosub_1","applet_p_50000467":"promosub_2"}},
            rapidConfig: {"compr_type":"deflate","tracked_mods":["Footer","IntlSelector"],"spaceid":2023538075,"click_timeout":300,"track_right_click":true,"apv":true,"apv_time":0,"async_all_clicks":false,"compr_on":true,"yql_host":"udc.yahoo.com","yql_path":"\/v2\/public\/yql","test_id":"FPSATE101,HPCANVAS101,FPCASINOCTR","client_only":0,"pageview_on_init":false,"perf_navigationtime":2,"addmodules_timeout":300,"extendbcookie":false,"keys":{"_rid":"cr93l0dfegsmj","mrkt":"us","pt":"home","site":"fp","ver":"megastrm","uh_vw":0,"colo":"gq1","navtype":"server","abk":""},"dwell_on":true,"viewability":true,"tracked_mods_viewability":{"applet_p_50000372":"hd","applet_p_50000291":"featurebar","applet_p_50000287":"featurebar","applet_p_50000398":"app-bhpromo","applet_p_50000313":"strm","applet_p_50000314":"strm","applet_p_50000399":"app-hpse","applet_p_50000425":"app-vid","applet_p_50000352":"tc-ts","applet_p_50000353":"app-wea","applet_p_50000298":"app-scor","applet_p_50000349":"storyswarm","applet_p_50000347":"rr-promo","applet_p_50000295":"app-hor","applet_p_50000405":"ft","applet_p_50000438":"card-TV","applet_p_50000456":"app-coron","applet_p_50000459":"stream-TV","applet_p_50000461":"casino","applet_p_50000466":"promosub_1","applet_p_50000467":"promosub_2"}},
            rapidSingleInstance: 1
        };
                var avpRapidCallBack = function(apvObj) {
            try {
                var spaceid=YAHOO && YAHOO.i13n && YAHOO.i13n.SPACEID;
                if (2023538075 == spaceid) {
                   var img = new Image();
                   img.src = "/p.gif?beaconType=apv&sp=" + spaceid + "&device=desktop&intl=us&pixel_pos=" + apvObj.pixel_pos + "&scroll_dir=" + apvObj.scroll_dir;
                }
            } catch (e) {}
            if (window.sdaAvpCallback) {
                window.sdaAvpCallback();
            }
        };
        rapidPageConfig.rapidConfig.apv_callback = avpRapidCallBack;
        
        try {
            if (YAHOO && YAHOO.i13n && YAHOO.i13n.Rapid) {
                YAHOO.i13n.WEBWORKER_FILE = '/lib/metro/g/myy/rapidworker_1_2_0.0.39.js';
            }
        } catch (e) {}
        