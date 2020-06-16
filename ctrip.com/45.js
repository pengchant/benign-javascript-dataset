
        $LAB
     .script({ src: "https://webresource.c-ctrip.com/ResGroupOnline/R10/Booking/js/hotelDetail.js?v=U3572_2017_03_01_17_25_00", charset: "utf-8" }).wait()

    .wait(function () {
        function isNull(obj) {
            var ret = false;
            if (obj.length > 0) {
                if (obj.val() != "" && obj.val() != undefined) {
                    ret = true;
                }
            }
            return ret;
        }
        jQuery(".linkDetail").on("click", function () {
            var url = jQuery(this).attr("url");
            if (url == "###") {
                return;
            }

            if (jQuery(this).hasClass("gpl-tbblue-btn") || jQuery(this).hasClass("gpl-a")) {
                var HotelDetailParm = "";

                if (isNull(jQuery("[id$='hdBexpdate']"))) {
                    HotelDetailParm += "&inData=" + jQuery("[id$='hdBexpdate']").val();
                }
                if (isNull(jQuery("[id$='hdEexpdate']"))) {
                    HotelDetailParm += "&outData=" + jQuery("[id$='hdEexpdate']").val();
                }

                if (HotelDetailParm != "") {

                    var tmpUrl = url.split("#");

                    if (tmpUrl.length > 1) {
                        url = tmpUrl[0] + "?" +HotelDetailParm.substr(1) +"#"+ tmpUrl[1];
                    } else {
                        url += "?" + HotelDetailParm.substr(1);
                    }
                }
            }

            //window.open(url);
            var a = document.createElement("a");
            a.setAttribute("href", url);
            a.setAttribute("target", "_blank");
            a.setAttribute("id", "camnpr");
            document.body.appendChild(a);
            a.click();
        });


        jQuery(function () {
            //
            jQuery(window).scroll(function () {
                var bodyScrollTop = jQuery("body").scrollTop() + document.documentElement.scrollTop;

                if (jQuery(".gp-list-left").offset().top <= bodyScrollTop
                && jQuery("#J_isFloat").prop("checked")) {

                    if (bodyScrollTop >= (jQuery(document).height() - jQuery(window).height() - (jQuery(".nationwide-box").outerHeight() + jQuery("#base_ft").outerHeight() + 20))) {
                        jQuery(".gp-list-right").removeClass("sta_fixed");
                        jQuery(".gp-list-right").addClass("sta_bottom_fixed");
                        jQuery(".gp-list-right").css("bottom", bodyScrollTop - (jQuery(document).height() - jQuery(window).height() - (jQuery(".nationwide-box").outerHeight() + jQuery("#base_ft").outerHeight() + 20)) + "px");
                    } else {
                        jQuery(".gp-list-right").addClass("sta_fixed");
                        jQuery(".gp-list-right").removeClass("sta_bottom_fixed");
                        jQuery(".gp-list-right").css("bottom", "auto");
                    }


                } else {
                    jQuery(".gp-list-right").removeClass("sta_fixed");
                    jQuery(".gp-list-right").removeClass("sta_bottom_fixed");
                    jQuery(".gp-list-right").css("bottom", "auto");
                }

            });
            new window.tuiguang();
        });
        if (jQuery("#groupItemType").val() == "1") {
            jQuery("#hotelCity_P").css("display", "");
        } else {
            jQuery("#hotelCity_P").css("display", "none");
        }

    })
    