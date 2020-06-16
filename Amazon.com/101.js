
            function a9_sl_sessionCacheUpdateHandler ($) {
                var browserWidth = $(window).width();
                var browserHeight = $(window).height();

                // Make a request to the session cache update handler in Gurupa
                $.post('/gp/product/sessionCacheUpdateHandler.html', 
                { 'sessionCacheUpdateFlag' : '1',
                    'pageType'               : 'Gateway',
                    'browserWidth'           : browserWidth,
                    'browserHeight'          : browserHeight,
                    'token'                  : "fVoboEDsYMjWCjzTN8sCObLZif2/oaBmQ3S2N5KuRr8="
                },
                function(data) {}
                );
            }
            P.when('A', 'jQuery').execute(function (A, $) {
                A.on.load(function () {a9_sl_sessionCacheUpdateHandler($);});
            });
        