
(function ($Nav) {
"use strict";

if (typeof $Nav === 'undefined' || $Nav === null || typeof $Nav.when !== 'function') {
    return;
}
$Nav.when('$', 'data', 'flyout.yourAccount', 'sidepanel.csYourAccount',
          'config')
    .run("BuyitAgain-YourAccount-SidePanel", 
    function ($, data, yaFlyout, csYourAccount, config) {
        if (config.disableBuyItAgain) {
          return;
        }
        var render = function (data) {
            if (data.status) {
                var widgetHtml = data.widgetBegin + 
                                 data.faceouts.join('') +
                                 data.widgetEnd;
                navbar.sidePanel({
                    flyoutName: 'yourAccount',
                    data: {html: widgetHtml}
                });
            }
        };

        var renderBuyItAgain = function (biaData) {
            if (csYourAccount) {
                csYourAccount.register(render, biaData);
            } else {
                render(biaData);
            }
        };

        yaFlyout.sidePanel.onData(function() {
            enableInlineAddToCart($); 
            enableImpressionLogging($);

            P.when('A','p13n-sc-static-list').execute(function(A, scList) {
                var navContainer = A.$("#bia-hcb-widget");
                var navList = navContainer.find('.p13n-sc-static-list');
                A.$(navList).bind('truncateList', function() {
                        scList(navList);
                });

                A.$(navList).trigger('truncateList');
            });

            if (window.P) {
                P.when('A', 'a-truncate').execute(function(A, truncate) {
                    var truncateElements = A.$('.a-truncate');
                    A.each(truncateElements, function(element) {
                        truncate.get(element).update();
                    });
                });
            }

        }); 
           
    yaFlyout.onRender(function() {
            $.ajax({
                url: '/gp/bia/external/bia-hcb-ajax-handler.html',
                data: 
   {"biaHcbRid":"CVD5S15BBNFDZZ1SM5C3"},
                dataType: 'json',
                timeout: 4*1000,
                success: renderBuyItAgain,
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        });


    var updateNavCartQty = function(qty) {
        if (typeof window.navbar === 'object' && typeof window.navbar.setCartCount === 'function') {
            window.navbar.setCartCount(qty);
        }
    };

    var addToCart = function(params, callback) {
        $.ajax({
           url: '/gp/bia/external/bia-cart-ajax-handler.html',
           data: params,
           dataType: 'json', 
           timeout: 2000,
           success: function(response) { callback(response); },
           error: function() { callback({ok:0}); }
        });
    };

    var enableInlineAddToCart = function ($) {
        if ($(".bia-inline-cart-form").length === 0) {
            return;
        }

        var inlineAddToCartHandler = function(e) {
            e.preventDefault();

            var $target = $(e.target);
            var $item = $target.parents(".bia-item");
            var $submit = $item.find(".bia-cart-submit");
            var params = $target.attr('data-order');

            $submit.attr("disabled", true);
            $item.find(".bia-action-button").addClass("bia-action-button-disabled");

            addToCart(params, 
                function(response) {
                    if(response && response.ok && response.ok === '1') {
                        $item.find(".bia-faceout").hide();
                        $item.find(".bia-cart-action").show();
                        updateNavCartQty(response.numActiveItemsInCart); 
                        //TODO: add metric
                    } else {
                        $target.unbind("submit", inlineAddToCartHandler);
                        $submit.attr("disabled", false);
                        $submit.click();
                        //TODO: add metric
                    }
                }
            );
        };

        $(".bia-inline-cart-form").bind("submit", inlineAddToCartHandler);
    };

    var enableImpressionLogging = function ($) {

        var registerToLog = function (p13nLogger, callOnVisible) {
            var featureEl = $("#bia-hcb-widget");
            callOnVisible.register(featureEl, function () {
                p13nLogger.logAction({
                                action: 'view', 
                                featureElement: featureEl, 
                                replicateAsinImpressions: true
                              });
            });
        };
        
        AmazonUIPageJS.when('p13n-sc-logger', 'p13n-sc-call-on-visible')
            .execute(function(p13nLogger, callOnVisible) {
                    registerToLog(p13nLogger, callOnVisible);});
    };

    });

})(window.$Nav);
//# sourceURL=bia-hcb-js.mi
