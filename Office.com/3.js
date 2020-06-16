
        var signInUrl = 'https://www.office.com/login?es=Click&ru=%2F';
        if (false) {
            if (isSessionStorageAvailable && sessionStorage.getItem('DefaultSignInCalledBefore') !== 'true') {
                var viewType = 'NewUserView';

                if (viewType !== "SignoutUserView") {
                    var myConfigOptions = {
                        msaConfig: { replyUri: 'https://www.office.com/', host: 'login.live.com' },
                        aadConfig: { replyUri: 'https://www.office.com/' , host: 'login.microsoftonline.com', appId: '4345a7b9-9a63-4910-a426-35363201d503' },
	                    preferredIdp: AuthType.aad,
                        enableConsoleLogging: false,
                        msaFedEnabled: true };

                    DefaultSignInHandler.DefaultSignInAdapter.signIn(signInUrl, myConfigOptions, 500).then(function(loginUrl) {
                        if (isSessionStorageAvailable) {
                            sessionStorage.setItem('DefaultSignInCalledBefore', 'true');
                        }

                        if (loginUrl) {
                            window.location.href = loginUrl;
                        } else {
                            document.body.style.display = "block";
                            StandaloneAriaLogger.Logger.LogUnauthPageView(viewType);
                        }
                    });
                }
            } else {
                StandaloneAriaLogger.Logger.LogEvent('unauth_generic', 'DefaultSignin_Called_Before');
            }
        }

        function setShellOptions(shellOptions) {

            if (window.msCommonShell) {
                window.msCommonShell.load(shellOptions);
            } else {
                window.onShellReadyToLoad = function () {
                    window.onShellReadyToLoad = null;
                    window.msCommonShell.load(shellOptions);
                }
            }
        }

        var SendMeControlSignInEvent = function() {
            awa && awa.isInitialized && awa.ct.capturePageAction($('#meControl'), { isManual: true, behavior: awa.behavior.SIGNIN, actionType: awa.actionType.CLICKLEFT });

            if (typeof StandaloneAriaLogger !== 'undefined' && typeof StandaloneAriaLogger.Logger !== 'undefined' && typeof StandaloneAriaLogger.Logger.LogUnauthClick !== 'undefined') {
                var viewType = 'NewUserView';
                StandaloneAriaLogger.Logger.LogUnauthClick(viewType, 'meLnkSignin');
            }
        }

        function SetConsent() {
            var cookieConsentBannerNeeded = true;
            if (cookieConsentBannerNeeded) {
                var mscc = window.mscc;
                if (mscc && !mscc.hasConsent()) {
                    mscc.setConsent();
                }
            }
        }

        var shellOptions = {
                meControlOptions: {
                    rpData: {
                        aadInfo: {
                            signInUrl: signInUrl,
                            signOutUrl: 'https://login.microsoft.com/logout.srf'
                        },
                        msaInfo: {
                            meUrl: null
                        },
                        preferredIdp: 'aad'
                    },
                    events: {
                        onEventLog: function(eventId) {
                            switch (eventId) {
                                case 'SignIn':
                                    SetConsent();
                                    SendMeControlSignInEvent();
                                    break;
                                default:
                                    return;
                            }
                        }
                    }
                }
            };

        setShellOptions(shellOptions);

    