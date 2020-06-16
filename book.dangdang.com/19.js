
        $(function(){
            var pro_li = $(".book_presell .list_aa").find("li");
        

 if(!pro_li||pro_li.length<2){
 $(".book_presell .btn_brand_prev").hide();
$(".book_presell .btn_brand_next").hide();
}

$('.book_presell .mix_marquee_tab').css({"left":(238-(pro_li.length*20-10))/2+"px"});
        })
