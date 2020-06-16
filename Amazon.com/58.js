
    window.$Nav && $Nav.when('$').run('CAMarketplaceRedirectOverlay',function($) {
        $.ajax({
            type: 'POST',
            url: '/gp/redirection/canada.html',
            data: {
                path: '/',
                queryString: '?ie=UTF8',
                pageType: 'Gateway',

                referer: ''
            },
            success: function(data) {
                if (data) {
                    $('body').append(data);
                }
            }
        });
    });
