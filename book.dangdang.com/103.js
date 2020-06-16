
    var setTo = null;
    function showghotsearch(){
        clearTimeout(setTo);
        document.getElementById("hot_search_content").style.display="block";
    }
    function hidehotsearch(){
        setTo = setTimeout(function(){
          document.getElementById("hot_search_content").style.display="none";
        },100)                        
    }

$(document).ready(function(){ 
    $("#__ddnav_sort16").remove();
}); 

$("#li_label_16").mouseover(function(){
	$("#li_label_16").addClass("on");
  $("#li_label_16").css("border-right","2px solid #ff2832");
  
});

$("#li_label_16").mouseout(function(){
	$("#li_label_16").removeClass("on");
});
