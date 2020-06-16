
        !function (n) {
            function o(n) {
                for (var o = n + "=", t = document.cookie.split(";"), e = 0; e < t.length; e++) {
                    for (var i = t[e]; " " == i.charAt(0);) i = i.substring(1, i.length);
                    if (0 == i.indexOf(o)) return i.substring(o.length, i.length)
                }
                return null
            }

            var t = o("pcm"), e = n.navigator.userAgent.toLocaleLowerCase(), i = "//m.jd.com",
                r = /iphone|android|symbianos|windows\sphone/g, c = /micromessenger|qq\/[\d.]+/i;
            return c.test(e) ? (n.location.href = "//wqs.jd.com/?from=jdindex", !1) : r.test(e) && "1" != t ? (n.location.href = i, !1) : void 0
        }(window);
    