

$(document).ready(function(){
	if (document.cookie.length>0){
		var lastUser;
		var allcookies=document.cookie.split(";");
		for(var i=0; i<allcookies.length;i++){
			if(allcookies[i].indexOf("authUser")>=0){
				lastUser=allcookies[i].split("=");
				if(lastUser[1].indexOf("\"")>=0){continue;}
				$("#username").val(lastUser[1]);
				$("#password").focus();
			}
		}
	}else{$("#username").focus();}
});
	


function iconChang(i){$("#icon"+i).attr("src","img/icon"+i+"2.svg");}
function iconChang2(i){$("#icon"+i).attr("src","img/icon"+i+"1.svg");}
function showMyIP(){jQuery.get("/showMyIP.jsp", function(dat){alert(dat);});}
$(function (){
	 $(".info-note div a").mouseover(function(){
		$(".info-note div a").css("border-left-color","#CECECE");
		$(this).css("border-left-color","#8C0000");
		var idx = $(this).index();
		$(".info-note ul").hide();
		$(".info-note ul:eq("+idx+")").show();
	});
});
