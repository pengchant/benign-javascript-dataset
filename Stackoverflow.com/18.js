
    (function() {
        /** CONFIGURATION START **/
        var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});

        _sf_async_config.uid = 2768;
        _sf_async_config.domain = 'fastcompany.com';
        _sf_async_config.flickerControl = false;
        _sf_async_config.useCanonical = true;
        _sf_async_config.useCanonicalDomain = true;
        _sf_async_config.sections = 'Mic Sector Page';
        _sf_async_config.authors = '';
        _sf_async_config.title = '2019';
        /** CONFIGURATION END **/
        function loadChartbeat() {
            var e = document.createElement('script');
            var n = document.getElementsByTagName('script')[0];
            e.type = 'text/javascript';
            e.async = true;
            e.src = '//static.chartbeat.com/js/chartbeat.js';
            n.parentNode.insertBefore(e, n);
        }
        var oldonload = window.onload;
        window.onload = (typeof window.onload != 'function') ? loadChartbeat : function() { oldonload(); loadChartbeat(); };
     })();
