
        (function ($) {
            $(window).on('load', function () {
                $.getScript('//azurecomcdn.azureedge.net/cvt-766476b1d11c55c04f5caea524dfd4f117de6df31ff650db4fa65ac534715da7/scripts/Acom/analytics/adobeVisitorIdService.js');

                var pollForCookies = setInterval(function () {
                    if (window.Core && window.Core.Util && window.Core.Util.GetCookie('MC1') && window.Core.Util.GetCookie('MSFPC') && !!window.visitor) {
                        clearInterval(pollForCookies);
                        $.getScript('//azurecomcdn.azureedge.net/cvt-766476b1d11c55c04f5caea524dfd4f117de6df31ff650db4fa65ac534715da7/scripts/Acom/analytics/adobeIdSync.js');
                    }
                }, 100); // poll for cookies every 100ms until they are found
            });
        })(jQuery);
    