
    window.$Nav && $Nav.when('$').run('SGMarketplaceRedirectOverlay',function($) {
        $.ajax({
            type: 'POST',
            url: '/gp/redirection/singapore.html',
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
