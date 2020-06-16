
            if (window.addEventListener) {
                window.addEventListener("load", createSilentAuthFrame, false);
            } else if (window.attachEvent) {
                window.attachEvent("onload", createSilentAuthFrame);
            } else {
                window.onload = createSilentAuthFrame;
            }

            function InvokeSSOFrame(src) {
                var i = document.createElement("iframe");
                i.src = src;
                i.setAttribute("width", "0");
                i.setAttribute("height", "0");
                i.setAttribute("border", "0");
                i.setAttribute("frameborder", "0");
                i.setAttribute("style", "display: none");
                i.style = "display: none";
                document.body.appendChild(i);
            }

            function RefreshRemoteSSOSession(isUserAuthenticatedApi, silentPassport) {
                require(['jqReady!'], function ($) {
                    $.ajax(isUserAuthenticatedApi, {
                        type: "GET",
                        contentType: "text/plain",
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success: function (data) {
                            if (data.Status !== "Authenticated") {
                                InvokeSSOFrame(silentPassport);
                            }
                        }
                    });
                });
            }

            function createSilentAuthFrame() {
                var SSOCookieName = "ONERFSSO";
                if (document.cookie.indexOf(SSOCookieName) === -1) {
                    if ("False" === "True" && 10 !== 0) {
                            RefreshRemoteSSOSession("https://account.xbox.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://account.xbox.com/en-us/mscomhp/onerf/MeSilentPassport");
                            RefreshRemoteSSOSession("https://account.xbox.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://account.xbox.com/en-us/mscomhp/onerf/MeSilentPassport");
                            RefreshRemoteSSOSession("https://account.xbox.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://account.xbox.com/en-us/mscomhp/onerf/MeSilentPassport");
                            RefreshRemoteSSOSession("https://account.xbox.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://account.xbox.com/en-us/mscomhp/onerf/MeSilentPassport");
                            RefreshRemoteSSOSession("https://account.xbox.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://account.xbox.com/en-us/mscomhp/onerf/MeSilentPassport");
                            RefreshRemoteSSOSession("https://account.xbox.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://account.xbox.com/en-us/mscomhp/onerf/MeSilentPassport");
                            RefreshRemoteSSOSession("https://account.xbox.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://account.xbox.com/en-us/mscomhp/onerf/MeSilentPassport");
                            RefreshRemoteSSOSession("https://account.xbox.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://account.xbox.com/en-us/mscomhp/onerf/MeSilentPassport");
                            RefreshRemoteSSOSession("https://account.xbox.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://account.xbox.com/en-us/mscomhp/onerf/MeSilentPassport");
                            RefreshRemoteSSOSession("https://account.xbox.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://account.xbox.com/en-us/mscomhp/onerf/MeSilentPassport");
                    }
                    else {
                        InvokeSSOFrame("https://www.microsoft.com/zh-cn/mscomhp/onerf/MeSilentPassport");
                    }
                    document.cookie = SSOCookieName + "=1";
                }
            }

        