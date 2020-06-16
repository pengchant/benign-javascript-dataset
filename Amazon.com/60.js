
    window.$Nav && $Nav.when('$').run('AEMarketplaceRedirectOverlay',function($) {
        $.ajax({
            type: 'POST',
            url: '/gp/redirection/uae.html',
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
