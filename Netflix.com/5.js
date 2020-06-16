
    (function() {
        var cseScript = document.createElement('script');
        cseScript.type = 'text/javascript';
        cseScript.async = true;
        cseScript.src = "/supportscript";

        if (window.netflix && window.netflix.config && window.netflix.config.chatForce) {
            var params = [];

            if (window.netflix.i18n && window.netflix.i18n.locale) {
                params.push("locale=" + encodeURIComponent(window.netflix.i18n.locale));
            }

            if (window.netflix.data && window.netflix.data.geoCountry) {
                params.push("forceCountry=" + encodeURIComponent(window.netflix.data.geoCountry));
            }

            if (params.length > 0) {
                cseScript.src += "?" + params.join("&");
            }
        }

        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(cseScript, s);
    }());
