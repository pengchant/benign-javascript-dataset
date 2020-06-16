
    window.$Nav && $Nav.when('$', 'page.ready').run('MXMarketplaceRedirectOverlay',function($) {
        $.ajax({
            type: 'POST',
            url: '/gp/redirection/mexico.html/137-5657076-9915411',
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
