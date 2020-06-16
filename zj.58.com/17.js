
        /**
         * 初始化topbar
         */
        (function() {
            var renderTopbar = function() {
                if (typeof CommonTopbar !== 'undefined') {
                    CommonTopbar.render({
                        aroundCity: false,
                        weather: false,
                        appQR: true, // homepage QR
                        homepageLink: true,
                        size: 'default' // default: 1190px, narrow: 1000px
                    });
                } else {
                    setTimeout(function() {
                        renderTopbar();
                    }, 100);
                }
            };
            renderTopbar();
        })();
    