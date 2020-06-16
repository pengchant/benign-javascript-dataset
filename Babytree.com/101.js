
$("#quick_answer").click(function(){
            //window.location.href = "/ask/myqa";
            window.open("/ask/myqa");
        });

//结构化
var _login = false;

function ask_vote_ajax( aid ) {
    var action = 'top_best_answer';
    //不允许非登陆用户 进行赞操作
    if( !login ){
        action = 'not_login_top_best_answer';
    }
    $.post(
    '/ask/ask_ajax.php',
    {
        action: action,
        answer_id: aid
    },
    function (data) {
        if (data.status == 'success') {
            $('#top_count_'+aid+' em').html(parseInt($('#top_count_'+aid+' em').text()) + 1);
            //$('#top_count_a').css("background-image","url(http://img01.babytreeimg.com/img/ask/ask-vote-zhan-yes.png)");
        } else {
            alert(data.message);
        }
    },
    'json'
    );
}
