
    (function () {
        function getUrlParam(name) {
            var queryString;
            if (arguments.length > 1) {
                queryString = arguments[1];
                var index = queryString.indexOf("?");
                if (index != -1) {
                    queryString = queryString.substring(index + 1, queryString.length);
                } else {
                    queryString = "";
                }
            } else {
                queryString = window.location.search.substr(1);
            }
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = queryString.match(reg);
            if (r != null) return decodeURIComponent(r[2]); return null;
        }
        var fromapp = getUrlParam("_app");
        if (fromapp == 1) {
            $("html").addClass("app");
        }
    })();
