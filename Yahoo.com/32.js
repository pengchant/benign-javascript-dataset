                var WIN = window;
                var beaconer = function(type, source, beaconKeys) {
                    if (!window.wafer) {
                        return;
                    }
                    var beaconUrl = "/p.gif?type=" + type + "&beaconKeys=" + escape(JSON.stringify(beaconKeys)) + "&source=" + source + "&rid=cr93l0dfegsmj" + "&bucket=FPSATE101,HPCANVAS101,FPCASINOCTR";
                    window.wafer && window.wafer.utils.fireBeacon(beaconUrl);
                };
                var tracker = WIN.YAHOO && WIN.YAHOO.i13n && WIN.YAHOO.i13n.rapidInstance;
                var helperConfig = {
                    bucket: "FPSATE101,HPCANVAS101,FPCASINOCTR",
                    churnCheckBackoff: 604800,
                    enableChurnCheck: 1,
                    enabled: true,
                    serviceWorkerUrl: "/service-worker.js",
                    spaceId: 1197802003,
                    subscriptionService: {
                        context: {
                            crumb: "yfa0zuC9RQf",
                            lang: "en-US",
                            region: "US"
                        },
                        host: "",
                        path: "/_td_api",
                        protocol: ""
                    },
                    supportedBrowsers: {
                        chrome: {
                            maxVersion: 0,
                            minVersion: 54,
                            os: ["win", "mac", "android"],
                            useServiceWorker: true
                        }
                    },
                    userAgent: {
                        browserName: "chrome",
                        browserVersion: "81",
                        osName: "win"
                    },
                    useRivendell: 1
                };

                if (WIN.SubscriptionHelper) {
                    WIN.subscriptionHelperInstance = new WIN.SubscriptionHelper(helperConfig, beaconer, tracker);
                    WIN.subscriptionHelperInstance.addPromoButtonDelegator();
                    WIN.subscriptionHelperInstance.showPushSubscriptionPromos();
                }