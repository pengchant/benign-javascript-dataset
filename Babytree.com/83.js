
            $(document).ready(function(){
                    jQuery('span[func="recFolding"]').click(function() {
                        var o = jQuery(this);
                        if (o.hasClass('qa-extend')) {
                        jQuery('li[group="2"]').css('display', 'block');
                        o.attr(
                            {
                            'class': 'qa-retract',
                            'title': '收起'
                            }
                            );
                        }
                        else {
                        jQuery('li[group="2"]').css('display', 'none');
                        o.attr(
                            {
                            'class': 'qa-extend',
                            'title': '展开'
                            }
                            );
                        }
                    });
            });

            var _display_ref = "hwg_view20140530";
            if(_display_ref){
                var d_gurl = "http://log.babytree.com/rd/rd.php?refcode=" + _display_ref; 
                jQuery.ajax({ url:d_gurl,method:'get',dataType:'jsonp',onComplete:function() {}});                
            }
        