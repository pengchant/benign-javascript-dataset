
    function watchBtnChange(flag, username) {
        $('span.blog-expert-button-follow').each(function(index) {
            if (flag) {
                if ($(this).attr("data-name") == username) {
                    $(this).html('<span class="hover-hide">已关注</span><span class="hover-show">取消</span>').removeClass('btn-red-follow').addClass('btn-gray-follow attented');
                }
            } else {
                if ($(this).attr("data-name") == username) {
                    $(this).html("关注").addClass('btn-red-follow').removeClass('btn-gray-follow attented');
                }
            }
        })
        if (username == $('p.csdn-tracking-statistics').attr("username")) {
            if (flag) {
                $('#btnAttent').addClass("attented").text("已关注").removeClass('btn-red-hollow').addClass('btn-gray-hollow');
                changeFans(1)
            } else {
                $('#btnAttent').text("关注").addClass('btn-red-hollow').removeClass('btn-gray-hollow attented');
                changeFans(-1)
            }
        }

    }

    function changeFans(num) {
        if ($('#fan').text().indexOf('+') < 0) {
            $('#fan').text(parseInt($('#fan').text()) + num);
        } else {
            $('#fanBox').attr('title', parseInt($('#fanBox').attr('title')) + num);
        }
    }
    window.csdn = window.csdn ? window.csdn : {};
    window.csdn.watchBtnChange = watchBtnChange;
