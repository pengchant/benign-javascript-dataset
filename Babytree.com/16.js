
        var userLinkCountMax = 15;
        var userLinkCount = 0;
        $(function(){
                        $("#mynav_yunyu").click(function(){
                $("#bb-head-yunyu").show();
                var height_tp = $("#mynav_yunyu").height();
                var top_tp = $("#mynav_yunyu").offset().top;
                var left_tp = $("#mynav_yunyu").offset().left;
                $("#bb-head-yunyu").css("left",left_tp);
                $("#bb-head-yunyu").css("top",height_tp + top_tp);
            });
        });
        