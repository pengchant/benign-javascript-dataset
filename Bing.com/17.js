
	//<![CDATA[
$(function () {
    $("div[data-formname='LandingPage_StartNow'] .FormButton").attr('data-analytics-events', 'event2');
    $("div[data-formname='LandingPageFooter_StartNow'] .FormButton").attr('data-analytics-events', 'event2');
    $("div[data-formname='LandingPage_RedeemYourCoupon'] .FormButton").attr('data-analytics-events', 'event2');
    $("div[data-formname='LandingPage_StartNow_English'] .FormButton").attr('data-analytics-events', 'event2');
    $("div[data-formname='LandingPageFooter_StartNowEnglish'] .FormButton").attr('data-analytics-events', 'event2');
    $("div[data-formname='LandingPage_RedeemYourCouponEnglish'] .FormButton").attr('data-analytics-events', 'event2');
    $("div[data-formname='LandingPage_StartNow'] .FormButton, div[data-formname='LandingPageFooter_StartNow'] .FormButton, div[data-formname='LandingPage_RedeemYourCoupon'] .FormButton, div[data-formname='LandingPage_StartNow_English'] .FormButton, div[data-formname='LandingPageFooter_StartNowEnglish'] .FormButton, div[data-formname='LandingPage_RedeemYourCouponEnglish'] .FormButton").click(function (event) {
        try {
            event.preventDefault();
            var u = "https://ads.microsoft.com/signup?"
            var m = encodeURIComponent(digitalData.page.attributes.market);
            var p = encodeURIComponent(digitalData.page.pageInfo.pageName.replace(/\W+/gmi, ""));
            var c = "";
            if (typeof digitalData.getParameter("cco") === "string" && digitalData.getParameter("cco").length > 0) {
                c = "&pbcv2=true&cco=" + digitalData.getParameter("cco");
            }
            else if (typeof digitalData.getParameter("ccl") === "string" && digitalData.getParameter("ccl").length > 0) {
                c = "&pbcv2=true&ccl=" + digitalData.getParameter("ccl");
            }
            var q = "mkt=" + m + "&adv_market=" + m + "&s_int=" + m.replace(/\-/gi, "_") + "_acsignup_" + p + c;
            var v = $(this).closest(".FormPanel").find("input.startnow_email").val();
            if ((v) && (/\S+@\S+\.\S+/i.test(v))) {
                q = q + "&email=" + encodeURIComponent(v.trim());
                new Image().src = 'https://bamservices.azurewebsites.net/insights.aspx?trackevent=StartNowFooter_Form_HasEmail';
            }
            else {
                new Image().src = 'https://bamservices.azurewebsites.net/insights.aspx?trackevent=StartNowFooter_Form_NoEmail';
            }
            window.location.href = u + q;
            return false;
        }
        catch (e) { console.log("start now form error"); }
    });
});
//]]>
