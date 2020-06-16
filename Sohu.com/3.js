
    // 是否默认为经典狐首
    (function () {
        var storage = window.localStorage || { getItem: function () {}, setItem: function () {} };
        var isClassicDefault = storage.getItem("isClassicDefault") || "false";
        if (isClassicDefault == "true") {
            window.location.href = "http://www.sohu.com/classic?spm=smpc.home.classic-user.0.0";
        }
    })();
