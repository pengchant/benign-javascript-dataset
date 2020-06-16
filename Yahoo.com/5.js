                (function() {
                    var beaconUrl = "/p.gif?rid=cr93l0dfegsmj" + "&bucket=FPSATE101,HPCANVAS101,FPCASINOCTR";
                    var shouldShowPrompt = function() {
                        var bodyClasses = document.body.className;
                        var showPrompt = (bodyClasses.indexOf("pushPromoVisible") === -1);
                        return showPrompt;
                    };
                    var tracker = {
                       instance: window.YAHOO && window.YAHOO.i13n && window.YAHOO.i13n.rapidInstance,
                       trackerWindowPath: 'rapidInstance'
                    };
                    window.YAHOO = window.YAHOO || {};
                    window.YAHOO.homepageClientConfig = {
                        "addToHomeScreen": {
                            "enabled": 1,
                            "forNativeApp": 0,
                            "shouldShowPrompt": shouldShowPrompt,
                            "useBeforeInstallPrompt": 1
                        },
                        "appOpenOnboarding": {
                            "enabled": 0
                        },
                        "beacon": {
                            "bucket": "FPSATE101,HPCANVAS101,FPCASINOCTR",
                            "rid": "cr93l0dfegsmj"
                        },
                        "onboarding": {
                            "installCardSwapCount": 3,
                            "installCoolOffTime": 168,
                            "installOnboardingType": "native",
                            "installSliderSwapCount": 1
                        },
                        "pageInfo": {
                            "device": "desktop",
                            "lang": "en-US",
                            "region": "US",
                            "site": "fp"
                        },
                        "promoSlots": {
                            "enabled": 1
                        },
                        "serviceWorker": {
                            "enabled": 1
                        },
                        "serviceWorkerFeatures": {
                            "didWrite": function didWrite() {
                                window.hpClientInstance.serviceWorker && window.hpClientInstance.serviceWorker.register().catch(function (){
                                    // service worker reg failed likely due to non https or browser support.
                                    // do nothing and keep this catch to avoid console error log
                                });
                            },
                            "values": {
                                "cache": 1,
                                "convertNotificationUrl": 0,
                                "offlineBeacon": 1,
                                "precache": 1
                            },
                            "write": true
                        },
                        "tracker": tracker,
                        "userConnectionToast": {
                            "enabled": 1
                        }
                    };
                    if (window.HomepageClient && window.HomepageClient.PWA) {
                        window.hpClientInstance = new window.HomepageClient.PWA(window.YAHOO.homepageClientConfig);
                    }
                })();