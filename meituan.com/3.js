!function (e, t, n) {
    function s() {
        var e = t.createElement("script");
        e.async = !0, e.src = "https://s0.meituan.net/bs/js/?f=mta-js:mta.min.js";
        var n = t.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n)
    }

    "[object String]" === Object.prototype.toString.call(n) && (n = [n]), e.MeituanAnalyticsObject = n;
    for (var r = 0; r < n.length; r++)!function (t) {
        e[t] = e[t] || function () {
                    (e[t].q = e[t].q || []).push(arguments)
                }
    }(n[r]);
    if ("complete" === t.readyState)s(); else {
        var i = "addEventListener", a = "attachEvent";
        if (e[i])e[i]("load", s, !1); else if (e[a])e[a]("onload", s); else {
            var o = e.onload;
            e.onload = function () {
                s(), o && o()
            }
        }
    }
}(window, document, "mta"), function (e, t, n) {
    if (t && !("_mta" in t)) {
        t._mta = !0;
        var s = e.location.protocol;
        if ("file:" !== s) {
            var r = e.location.host, i = t.prototype.open;
            t.prototype.open = function (t, n, a, o, l) {
                if (this._method = "string" == typeof t ? t.toUpperCase() : null, n) {
                    if (0 === n.indexOf("http://") || 0 === n.indexOf("https://") || 0 === n.indexOf("//"))this._url = n; else if (0 === n.indexOf("/"))this._url = s + "//" + r + n; else {
                        var h = s + "//" + r + e.location.pathname;
                        h = h.substring(0, h.lastIndexOf("/") + 1), this._url = h + n
                    }
                    var u = this._url.indexOf("?");
                    -1 !== u ? (this._searchLength = this._url.length - 1 - u, this._url = this._url.substring(0, u)) : this._searchLength = 0
                } else this._url = null, this._searchLength = 0;
                return this._startTime = (new Date).getTime(), i.apply(this, arguments)
            };
            var a = "onreadystatechange", o = "addEventListener", l = t.prototype.send;
            t.prototype.send = function (t) {
                function n(n, r) {
                    if (0 !== n._url.indexOf(s + "//frep.meituan.net/_.gif")) {
                        for (var i = "browser.ajax", a = [98, 114, 111, 119, 115, 101, 114, 46, 97, 106, 97, 120], o = 0, l = i.length; l > o; o++)if (i.charCodeAt(o) !== a[o])return;
                        var h;
                        if (n.response)switch (n.responseType) {
                            case"json":
                                h = JSON && JSON.stringify(n.response).length;
                                break;
                            case"blob":
                            case"moz-blob":
                                h = n.response.size;
                                break;
                            case"arraybuffer":
                                h = n.response.byteLength;
                            case"document":
                                h = n.response.documentElement && n.response.documentElement.innerHTML && n.response.documentElement.innerHTML.length + 28;
                                break;
                            default:
                                h = n.response.length
                        }
                        e.mta("send", i, {
                            url: n._url,
                            method: n._method,
                            error: !(0 === n.status.toString().indexOf("2") || 304 === n.status),
                            responseTime: (new Date).getTime() - n._startTime,
                            requestSize: n._searchLength + (t ? t.length : 0),
                            responseSize: h || 0
                        })
                    }
                }

                if (o in this) {
                    var r = function (e) {
                        n(this, e)
                    };
                    this[o]("load", r), this[o]("error", r), this[o]("abort", r)
                } else {
                    var i = this[a];
                    this[a] = function (t) {
                        i && i.apply(this, arguments), 4 === this.readyState && e.mta && e.mta && n(this, t)
                    }
                }
                return l.apply(this, arguments)
            }
        }
    }
}(window, window.XMLHttpRequest, "mta");
//- 初始化项目
mta("create", '59918eb8616ab3217c7eeaf5');
//- 推荐设置上报地址为 HTTPS 协议，以获得更高的数据准确性，默认会和页面协议一致
mta("config", "beaconImage", "https://frep.meituan.net/_.gif");

//- 设置采样率
mta('config', 'sampleRate', 20);

//- 发送页面性能指标，包括 ttfb（首字节）、domReady（可交互）、load（完全加载）等
mta("send", "page");