
            $(document).ready(function () {
                $("div.LPHeroInlineForm").each(function () {
                    var CTA_Text = $(this).attr("SubmitButtonText");
                    var data_analytics_variant = $(this).attr("data-analytics-variant-TEMP");
                    var data_analytics_variant_enabled = $(this).attr("data-analytics-variant-enabled-TEMP");
                  
                    if (CTA_Text && CTA_Text.length > 0) {
                      
                        var submitButton = $(this).find("input[type='submit']");
                        submitButton.val(CTA_Text);
                        submitButton.attr("data-analytics-variant", data_analytics_variant);
                        submitButton.attr("data-analytics-variant-enabled", data_analytics_variant_enabled);
                      
                        var submitLink = $(this).find("#LPHeaderSignupFormSubmit");
                        submitLink.text(CTA_Text);
                        submitLink.attr("data-analytics-variant", data_analytics_variant);
                        submitLink.attr("data-analytics-variant-enabled", data_analytics_variant_enabled);
                      
                    }
                    $(this).css('visibility', 'visible');
                });
            });
        