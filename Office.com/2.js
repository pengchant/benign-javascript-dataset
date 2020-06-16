
        $(function () {
            HomePage.init();
            var cookieConsentBannerNeeded = true;

            var viewType = 'NewUserView';

            function initializeLogging() {
                var sharedClientStartupContext = {"ariaCollectorUrl":"https://browser.pipe.aria.microsoft.com/Collector/3.0/","ariaTenant":"ea6758984c4b43529f9929667d8d3198-c52d4a8b-47fe-4fdf-99b8-5f897ff4e33b-7365","buildDateUtc":"2020-06-08 21:29:17Z","buildId":"435a12c0-cc5d-25e7-1f02-81f30fdca881","corpNet":false,"correlationId":"1e22cc2a-6468-41ce-b8a9-7cf5f8e50a6e","deploymentEnvironment":"prod","devEnvironment":"ServiceFabric","flights":"csslicensing,bgedgeworth,templatedimecf,freeupsellv2,darktheme,pwafreeconsumerfre,idlechunks","geoName":"eas","requestOrigin":"Direct","sessionId":"986eaac1-e7e3-41c3-b0ab-4729f5440605","testTraffic":false,"cookieConsentRequired":true,"officeMarketLcid":9,"useMruS2SFlow":false};
                var ariaContext = {
                    ariaCollectorUrl: sharedClientStartupContext.ariaCollectorUrl,
                    ariaTenant: sharedClientStartupContext.ariaTenant,
                    authTypeString: '',
                    cookieConsentRequired: cookieConsentBannerNeeded && typeof mscc !== 'undefined',
                    corpNet: sharedClientStartupContext.corpNet,
                    correlationId: sharedClientStartupContext.correlationId,
                    deploymentEnvironment: sharedClientStartupContext.deploymentEnvironment,
                    devEnvironment: sharedClientStartupContext.devEnvironment,
                    features: '',
                    flights: sharedClientStartupContext.flights,
                    geoName: sharedClientStartupContext.geoName,
                    puid: '',
                    requestOrigin: sharedClientStartupContext.requestOrigin,
                    serverBuildDate: sharedClientStartupContext.buildDateUtc,
                    serverBuildId: sharedClientStartupContext.buildId,
                    sessionId: sharedClientStartupContext.sessionId,
                    tenantId: '',
                    testTraffic: sharedClientStartupContext.testTraffic
                };
                StandaloneAriaLogger.Logger.Initialize(ariaContext, true);

                var config = {
                    coreData: {
                        appId: "www.office.com-unauth",
                        pageName: "UnauthOhp"
                    }
                };

                awa && awa.init(config);

                var expIds = ["freeupsell"];
                var expNames = ["freeupsell"];
                var variationIds = ["freeupsellv2"];
                var variationNames = ["freeupsellv2"];

                var overrideValues = {
                    behavior: expIds.length ? awa.behavior.EXPERIMENTATION : 0,
                    pageTags: {
                        metaTags:{
                            expid: expIds.join(","),
                            expname: expNames.join(","),
                            variationid: variationIds.join(","),
                            variationname: variationNames.join(",")
                        }
                    }
                }

                awa && awa.ct.captureContentUpdate(overrideValues);
            }

            function addUnauthTelemetry(){
                $('button, a').click(function() {
                    var elementId = $(this).attr("id");
                    if (elementId) {
                        StandaloneAriaLogger.Logger.LogUnauthClick(viewType, elementId);
                    }
                });

                // always log unauth page successfully loaded regardless of page is displayed or not
                StandaloneAriaLogger.Logger.LogEvent('unauth_generic', 'unauth_page_loaded')
                if (!false || (isSessionStorageAvailable && sessionStorage.getItem('DefaultSignInCalledBefore') === 'true') || 'NewUserView' === 'SignoutUserView' ) {
                    // only log page view if page is displayed
                    StandaloneAriaLogger.Logger.LogUnauthPageView(viewType);
                }
            }

            initializeLogging();
            addUnauthTelemetry();
        });
    