
            ; (function() {
                window.__bfi = window.__bfi || [];
                if (! (window.$_bf && window.$_bf.loaded || window.$LAB || window.CtripJsLoader)) {
                    var a = new Date,
                    b = !1,
                    c = "?v=" + a.getFullYear() + a.getMonth() + "_" + a.getDate(),
                    a = document.createElement("script");
                    a.type = "text/javascript";
                    a.charset = "utf-8";
                    a.async = !0;
                    try {
                        b = "https:" == location.protocol
                    } catch(d) {}
                    a.src = ((b ? "https:": "http:")) + "//webresource.c-ctrip.com/code/ubt/_bfa.min.js" + c;
                    b = document.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b)
                }
            })();
          