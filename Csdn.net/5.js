
    $("#search_submit").click(function(){
        var tag_name = $("#tag_name").val();
        if(tag_name == ''){
            $("#tag_name").focus();
            return false;
        }else{
            document.getElementById("search_form").submit();
        }
    });
    //分页跳转
    function skip() {
        var page = $('#skip').val();
                     window.location.href = 'https://ai.csdn.net/m/zone/ai/index?&page=' + page;
            }

    $(function(){
        var arr = [];
        var blog;
        $('.news-right').each(function(){
            arr.push($(this).attr('data-blog'));
        });
        $.ajax({
            type: "GET",
            url: 'https://ai.csdn.net/m/zone/ai/ajx_blog_info',
            data:'ids='+arr,
            dataType: "json",
            success: function (data) {
                if (data.status === 1) {
                    msg = data.data;
                    $.each(msg, function(index,itmeobj){
                        blog = $('.blog-'+index);
                        blog.href = '//blog.csdn.net/'+itmeobj.userName;
                        blog.find('.sculpture').attr('href', blog.href);
                        blog.find('.sculpture').children('img').attr('src', itmeobj.avatarUrl);
                        blog.find('.sculpture-name').attr('href', blog.href).text(itmeobj.nickName);
                        blog.find('.click-num').text(itmeobj.viewCount);
                    });
                }

            }
        });
    });
    //    tab
    (function ($) {
        function tabj() {
            var curIndex = $('.tabs').find('.active').index();
            $('#ai_news').attr('data-action', curIndex)
            $(".tablist").eq(curIndex).show().siblings().hide();

        }

        $(document).ready(function () {
            tabj();
        });
        $('.tabs li span').click(function () {
            $(this).parent().addClass('active').siblings().removeClass('active');
            tabj();
        })
    })(jQuery);

    $(function () {
        $(".feedlist_mod").on("click", ".icon-close",
            function (t) {
                if ("none" == $(this).siblings(".unin_reason_dialog").css("display")) {
                    var e = $(this).parents("li").siblings("li");
                    $.each(e,
                        function (t, e) {
                            var i = $(e).find(".unin_reason_dialog");
                            "block" == i.css("display") && (i.hide(), i.siblings(".icon-close").removeClass("active"))
                        }),
                        $(this).addClass("active"),
                        $(this).siblings(".unin_reason_dialog").fadeIn()
                } else $(this).removeClass("active"),
                    $(this).siblings(".unin_reason_dialog").fadeOut();
                t.stopPropagation(),
                    $(document).click(function () {
                        $(t.target).siblings(".unin_reason_dialog").fadeOut(),
                            $(t.target).removeClass("active")
                    })
            }),


            $(".unin_reason_dialog").on("click", ".unin_item",
                function (t) {
                    $(this).parents("li.clearfix").slideUp("slow",
                        function () {
                            $(this).remove()
                        })
                })
    });
