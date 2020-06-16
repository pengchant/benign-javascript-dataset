
    window.$Nav && $Nav.when('$').run('AUMarketplaceRedirectOverlay',function($) {
        $.ajax({
            type: 'POST',
            url: '/gp/redirection/australia.html',
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
