
    (function ($) {
        $(window).on('load', function () {
            $.getScript('https://az725175.vo.msecnd.net/scripts/jsll-4.js', function () {
                var config = {
                    cookiesToCollect: ['_mkto_trk'],
                    syncMuid: true, 
                    ix: {
                        a: false,
                        g: true
                    },
                    autoCapture: {
                        lineage: true,
                        scroll: true,
                        resize: true
                    },
                    coreData: {
                        appId: 'JS:acom',
                        market: 'en-us'
                    },
                    useShortNameForContentBlob: true
                };
                awa.init(config);
            });
        });
    })(jQuery);
