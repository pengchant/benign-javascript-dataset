
      readyToDo("$,HP", function () {
        var dela = $("<a id='delinfo' href='' rel='nofollow' class='search-no' title='可删除手机号被冒用发布的信息'>修改/删除信息<\/a>");
        if (HP.user.isLogin()) {
          dela.attr({
            "href": '//my.58.com/?pp=idxinfoupdate',
            'onClick': "_gaq.push(['pageTracker._trackEvent', 'home', 'click', 'my_info_del']);"
          });
        } else {
          dela.attr({
            "href": '//about.58.com/info/del-menu.html?from=home',
            'onClick': "_gaq.push(['pageTracker._trackEvent', 'home', 'click', 'info_del']);"
          });
        }
        $('#fabu').after(dela);
      });
    