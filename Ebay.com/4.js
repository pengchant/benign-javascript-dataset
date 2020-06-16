
        function initLogger() {
            if ($logger) {
                // set interval for iOS with Safari until safari bug resolved
                // https://bugs.webkit.org/show_bug.cgi?id=188329
                var ua = window.navigator.userAgent,
                    isiOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i),
                    isWebkit = !!ua.match(/WebKit/i),
                    isiOSSafari = isiOS && isWebkit && !ua.match(/CriOS/i),
                    flushInterval = isiOSSafari ? 2000 : 0;
                var loggerConfig = {
                    url: "/api/log?pageid=2481888&pagename=highline_homepage_large",
                    flushInterval: flushInterval, // in ms, time between flushing queued logs. If 0, flushes when page is hidden or beforeunload
                    samplingRate: 10, // rate to be used for clien-side sampling, 10 === 10%
                    sendMetrics: true,
                    isInSampling: undefined, // will send if true and not check for client-side sampling
                    isSendCritical: false, // will send if critical error even if not in sampling
                    logLevels: ['error'],
                    maxAttempts: 10
                };
                $logger.init(loggerConfig);
                $logger.registerPlugin('custom', function(payload) {
                    payload.ebay = {
                        pageName: "highline_homepage_large",
                        highlineVersion: "87.2.1",
                        rlogid: "t6klaook%60b0%3D%3C%3Dpieojbnkmcc4%3B(56%3B%3D27%3A-172bbe559e4-0x1b04",
                        pageid: "2481888",
                        isCacheCreateCall: window.highline.isUfesCachedPage
                    };
                });
            }
        }
    