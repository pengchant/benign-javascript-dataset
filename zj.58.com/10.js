
            window.wbAsyncInit = function wbAsyncInit( CL ){
                CL.invoke('topbar', {
                    aroundCity: false,
                    weather: false,
                    appQR: true, // homepage QR
                    homepageLink: true,
                    size: 'narrow' // default: 1190px, narrow: 1000px
                });
            };
        