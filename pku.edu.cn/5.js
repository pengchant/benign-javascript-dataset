
// $(document).on('click','.home5 .content .pic .img,.home5 .content .pic span.v',function(){
//     var video = $(this).parent().find('.img').data('video');
//     if(video){
//         videoElem = document.getElementById("videoPlay");
//         videoElem.innerHTML = '<source src="' + video + '" type="video/mp4">';
//         showlayer('#video');
//         videoElem.play();
//     }
// })
function bingsearch(){
    if($("input#searchKeyword").val()==""){
        my_alert('请输入关键字');
        return false;
    }
    var key = $("input#searchKeyword").val()+"+site:pku.edu.cn";
    var url = 'https://cn.bing.com/search?ensearch=1&q=' + encodeURI(key);
    window.open(url);
    hidelayer('#search')
    $("input#searchKeyword").val("");
}
function searchkeydown(e, but) {
     var currKey=0,e=e||event;
     var _this = $(but);
     if(e.keyCode==13)
     {
         _this.click();
         return false;
     }
}
