

    (function () {
        qboot.load("https://s0.ssl.qhimg.com/ssl/d473bc7125110413,a820275fbef57f13,24685a7a535c7dab,c3e344b0be9fee2c.js");
        
                if (!qboot.cookie.get("zoomTipsHide")) {
            qboot.load.delay(500, 'https://s0.ssl.qhimg.com/ssl/88d1d4b169d9593f.js');
        }
    })();

    (function () {
        /*
         * 配合 Storm 打点
         * baipan @ 2014-12-8
         */
        function report(project, data) {
            var HAO_MONITOR_HOST = STATIC_CONFIG.monitor.haoMonitor;
            var mix = qboot.mix,
                encodeURIJson = qboot.encodeURIJson;
            var monitorMap = {
                'hao360': 1,
                'hao360i': 8
            };

            if (monitorMap[project]) {
                var logData = mix({
                    cc: ObjectH.values(hao360.area.get()).join(),
                    appid: monitorMap[project]
                }, data, true);

                var url = HAO_MONITOR_HOST + 'stat.gif';

                var logUrl = url + '?' + encodeURIJson(logData);
                logSender(logUrl);
            }
        }

        function routine() {
            var PAGE_LOADED_TIME = (new Date).getTime();
            report('hao360i', {
                ht: HEAD_END_TIME - PAGE_START_TIME,
                rt: PAGE_READY_TIME - PAGE_START_TIME,
                lt: UNFOLD_TIME - PAGE_START_TIME,
                et: PAGE_LOADED_TIME - PAGE_START_TIME,
                sc: [window.screen.width, window.screen.height].join('x')
            });
        }

        if (SendTimeMoniter) {
            routine();
        }

    })();
    
    (function(){
        var clientWidth = window.screen.width;
        if(!clientWidth){
            return;
        }
        var arrScreen = [1920,1600,1440,1371,1366,1360,1300,1280,1200,1025,1024];
        for(var i = 0,len = arrScreen.length; i < len;i++){
            if(clientWidth >= arrScreen[i]){
                reportClientWidth = arrScreen[i];
                break;
            }else{
                reportClientWidth = 800;
            }
        }
        
        LogHub.behavior('screen', reportClientWidth);

        var clientWidth = window.screen.width;
        var docWidth = document.documentElement.clientWidth;
        if(clientWidth - docWidth > 100){
            LogHub.behavior('screen', 'different');
        }
        var changeScreen = false;
        W(document).receive("page-size-changed",function(e){
            var docWidth2 = document.documentElement.clientWidth;
            if(docWidth2 != docWidth && !changeScreen){
                LogHub.behavior('screen', 'change');
                changeScreen = true;
                setTimeout(function(){
                    LogHub.behavior('screen', docWidth2 - docWidth);

                }, 100)
            }
        });
    })();
