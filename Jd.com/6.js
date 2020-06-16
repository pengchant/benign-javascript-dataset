
        window.search = function (a) {
            var b, c = "//search.jd.com/Search?keyword={keyword}&enc={enc}{additional}";
            var d = search.additinal || "";
            var e = document.getElementById(a);
            var f = e.value;
            if (f = f.replace(/^\s*(.*?)\s*$/, "$1"), f.length > 100 && (f = f.substring(0, 100)), "" == f) return void (window.location.href = window.location.href);
            var g = 0;
            "undefined" != typeof window.pageConfig && "undefined" != typeof window.pageConfig.searchType && (g = window.pageConfig.searchType);
            var h = "&cid{level}={cid}";
            var i = "string" == typeof search.cid ? search.cid : "";
            var j = "string" == typeof search.cLevel ? search.cLevel : "";
            var k = "string" == typeof search.ev_val ? search.ev_val : "";
            switch (g) {
                case 0:
                    break;
                case 1:
                    j = "-1", d += "&book=y";
                    break;
                case 2:
                    j = "-1", d += "&mvd=music";
                    break;
                case 3:
                    j = "-1", d += "&mvd=movie";
                    break;
                case 4:
                    j = "-1", d += "&mvd=education";
                    break;
                case 5:
                    var l = "&other_filters=%3Bcid1%2CL{cid1}M{cid1}[cid2]";
                    switch (j) {
                        case "51":
                            h = l.replace(/\[cid2]/, ""), h = h.replace(/\{cid1}/g, "5272");
                            break;
                        case "52":
                            h = l.replace(/\{cid1}/g, "5272"), h = h.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                            break;
                        case "61":
                            h = l.replace(/\[cid2]/, ""), h = h.replace(/\{cid1}/g, "5273");
                            break;
                        case "62":
                            h = l.replace(/\{cid1}/g, "5273"), h = h.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                            break;
                        case "71":
                            h = l.replace(/\[cid2]/, ""), h = h.replace(/\{cid1}/g, "5274");
                            break;
                        case "72":
                            h = l.replace(/\{cid1}/g, "5274"), h = h.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                            break;
                        case "81":
                            h = l.replace(/\[cid2]/, ""), h = h.replace(/\{cid1}/g, "5275");
                            break;
                        case "82":
                            h = l.replace(/\{cid1}/g, "5275"), h = h.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}")
                    }
                    c = "//search-e.jd.com/searchDigitalBook?ajaxSearch=0&enc=utf-8&key={keyword}&page=1{additional}";
                    break;
                case 6:
                    j = "-1", c = "//music.jd.com/8_0_desc_0_0_1_15.html?key={keyword}";
                    break;
                case 7:
                    c = "//s-e.jd.com/Search?key={keyword}&enc=utf-8";
                    break;
                case 8:
                    c = "//search.jd.hk/Search?keyword={keyword}&enc=utf-8";
                    break;
                case 9:
                    d += "&market=1"
            }
            if ("string" == typeof i && "" != i && "string" == typeof j) {
                var m = /^(?:[1-8])?([1-3])$/;
                j = "-1" == j ? "" : m.test(j) ? RegExp.$1 : "";
                var n = h.replace(/\{level}/, j);
                n = n.replace(/\{cid}/g, i), d += n
            }
            if ("string" == typeof k && "" != k && (d += "&ev=" + k), f = encodeURIComponent(f), b = c.replace(/\{keyword}/, f), b = b.replace(/\{enc}/, "utf-8"), b = b.replace(/\{additional}/, d), "object" == typeof $o && ("string" == typeof $o.lastKeyword && (b += "&wq=" + encodeURIComponent($o.lastKeyword)), "string" == typeof $o.pvid && (b += "&pvid=" + $o.pvid)), b.indexOf("/search.jd.com/") > 0) try {
                JA.tracker.ngloader("search.000009", {key: f, posid: a, target: b})
            } catch (o) {
            }
            ("undefined" == typeof search.isSubmitted || 0 == search.isSubmitted) && (setTimeout(function () {
                window.location.href = b
            }, 50), search.isSubmitted = !0)
        };
    