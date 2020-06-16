
    function startGameNew(user_id) {
        var user_id = user_id;
        if (user_id) {
            boxy2_init(true);
            var html = '<iframe id="show_iframe" style="_border:none;" width="100%" height="420" src="/promo/supermom/award_lottery.php?a=raiders"></iframe>';
            boxy2.pop(html, 700, 450);
            boxy2.title("幸运小游戏");
        }else{
            window.location.href="http://www.babytree.com/reg/login.php?url=http://babytree.com/ask/detail/14470153?s=detail/14470153";
        }
    }
