
    var locationPath = location.pathname;
    locationPath = locationPath.toLowerCase();

    locationPath =
        locationPath.indexOf("/opinion/") != -1
        || locationPath.indexOf("/feature/") != -1;

    var taboolaScriptType = !(locationPath && Math.round(10000 * Math.random()) % 2 == 0);
    taboolaScriptType = !locationPath;

    var locationPath2 = location.pathname;
    locationPath2 = locationPath2.toLowerCase();
    if (taboolaScriptType) {
        window._tfa = window._tfa || [];
        window._tfa.push({ notify: 'event', name: 'page_view', id: 1101582 });
        !function (t, f, a, x) {
            if (!document.getElementById(x)) {
                t.async = 1; t.src = a; t.id = x; f.parentNode.insertBefore(t, f);
            }
        }(document.createElement('script'),
        document.getElementsByTagName('script')[0],
        '//cdn.taboola.com/libtrc/unip/1101582/tfa.js',
        'tb_tfa_script');
        /*
        window._tfa = window._tfa || [];
        _tfa.push({ notify: "action", name: "page_view" });
        _tfa.push({ notify: "mark", type: "retargeting" });

        !function (e, f, u) {
            e.async = 0;
            e.src = u;
            f.parentNode.appendChild(e, f);
        }(document.createElement('script'), document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1], 'https://cdn.taboola.com/libtrc/shanghaidaily-sc/tfa.js');

        !function (e, f, u) {
            e.async = 1;
            e.src = u;
            f.parentNode.appendChild(e);
        }(document.createElement('script'), document.getElementsByTagName('script')[0], 'https://cdn.taboola.com/libtrc/shanghaidaily-shinecn/loader.js');
        */

    } else {
        window._tfa = window._tfa || [];
        window._tfa.push({ notify: 'event', name: 'page_view', id: 1101582 });
        !function (t, f, a, x) {
            if (!document.getElementById(x)) {
                t.async = 1; t.src = a; t.id = x; f.parentNode.insertBefore(t, f);
            }
        }(document.createElement('script'),
        document.getElementsByTagName('script')[0],
        '//cdn.taboola.com/libtrc/unip/1101582/tfa.js',
        'tb_tfa_script');
        window._taboola = window._taboola || [];
        _taboola.push({ article: 'auto' });
        !function (e, f, u, i) {
            if (!document.getElementById(i)) {
                e.async = 1;
                e.src = u;
                e.id = i;
                f.parentNode.insertBefore(e, f);
            }
        }(document.createElement('script'),
        document.getElementsByTagName('script')[0],
        '//cdn.taboola.com/libtrc/shanghaidaily-shinecn/loader.js',
        'tb_loader_script');
        if (window.performance && typeof window.performance.mark == 'function')
        { window.performance.mark('tbl_ic'); }
    }
