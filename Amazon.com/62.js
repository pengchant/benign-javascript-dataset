
    window.$Nav && $Nav.when('$').run('NLMarketplaceRedirectOverlay',function($) {
        $.ajax({
            type: 'POST',
            url: '/gp/redirection/netherlands.html',
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
