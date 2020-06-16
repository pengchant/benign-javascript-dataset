
    KISSY.ready(function (S) {
        if (/hbk/.test(location.href)) {
            S.config({ // KISSY配置
                packages: {
                    hbhub: {
                        path: '//g.alicdn.com/mtb/app-hongbaohub/1.4.9/',
                        ignorePackageNameInUri: true,
                        tag: KISSY.now(),
                        combine: true,
                        charset: 'utf-8',
                        debug: false // 线上置为false
                    }
                }
            });
            S.use('hbhub/index', function (S, hub) {
                var qs = S.unparam(location.search.slice(1));
                hub.init(qs['hbk_k'], qs.hbk);
            });
        }
    });
