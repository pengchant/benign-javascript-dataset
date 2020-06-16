
        (function (global, $) {
            $(global).on('load', function () {
                (function (doc) {
                    if (!global.clickTaleTagInjected) {
                        !function (d, t, u) { clickTaleTagInjected = true; function injectTag() { var ns = d.createElementNS; var a = ns ? ns.call(d, "http://www.w3.org/1999/xhtml", t) : d.createElement(t), s = d.getElementsByTagName(t)[0]; a.async = true; a.crossOrigin = "anonymous"; a.type = "text/javascript"; a.src = u; s.parentNode.insertBefore(a, s); } if (d.readyState != 'loading') { injectTag(); } else { d.addEventListener('DOMContentLoaded', function () { setTimeout(injectTag, 0) }); } }(doc, 'script', 'https://cdnssl.clicktale.net/www32/ptc/76a3450f-9b77-4456-a451-720ddc99b4c8.js');
                    }
                })(document);
            });
        })(window, jQuery);
    