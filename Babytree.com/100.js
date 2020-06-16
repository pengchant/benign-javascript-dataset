    
        jQuery(window).load(function(){
            //jQuery("#shangjia_content").html(shangjia_html);
            var $this = jQuery("#shangjia_content");
            if ($this==null) return false;
            var content_top = $this.offset().top;
            var content_left = $this.offset().left;
            var this_height = 510; //$this.height();
            var bottom_gap = 100;
            var gap = jQuery(window).height() - this_height - bottom_gap; 
            var document_height = jQuery(document).height();
            var document_limit = document_height - bottom_gap - this_height;

            var cssfixedsupport=jQuery.browser.msie && parseFloat(jQuery.browser.version) < 7;//判断是否ie6
            var fixed_css = cssfixedsupport ? "absolute" : "fixed";
            var position_css = fixed_css;
            jQuery(window).scroll(function(){
                var scroll_height = 0;
                var scroll_top = jQuery(window).scrollTop();
                scroll_height = gap;
                if (cssfixedsupport) {
                    //ie6下位置固定
                    return false;
                    scroll_height = scroll_top + gap;
                    if (scroll_height > document_limit) {
                        scroll_height = document_limit; 
                    }
                }
                if ((content_top - scroll_top) < gap) {
                    $this.css({
                        position: fixed_css,
                        top: scroll_height,
                        left: content_left
                    });
                } else {
                    jQuery("#shangjia_content").css('position', '');
                }
                
            });
        });
        