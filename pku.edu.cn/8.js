
<!--
if(top!=self){
alert("Session Timeout,Login again");
top.location.replace("https://its.pku.edu.cn/")}
function doLogin()
{
	var _Un=$("#username").val();
	var _Pd=$("#password").val();
	if(_Un.length==0 || _Un=="StudentID/StaffID/PKUMail")
	{
		showInfo("StudentID/StaffID/PKUMail address needed");
		$("#username").focus();
		return false;
	}
	if(_Pd.length==0)
	{
		showInfo("Password needed");
		$("#password").focus();
		return false;
	}

	
	$("#lif").submit();

}

function showInfo(str){
	alert(str);
}

function checkLogin(evt){
	evt=(evt)?evt:((window.event)?window.event:"");
	var key=evt.keyCode?evt.keyCode:evt.which;
	if(evt.ctrlKey && (key==13||key==10))
	{doLogin();}
}

function focusUserName(){
	var name=$("#username").val();
	if(""!=name && "StudentID/StaffID/PKUMail"!=name){
		$("#username").css("color","#000000");
		$("#username").css("font-size","16px");
	}else{
		$("#username").css("color","#B7B7B9");
		$("#username").val("StudentID/StaffID/PKUMail");
		$("#username").css("font-size","12px");
	}
}
function leaveUserName(){
	var name=$("#username").val();
	if(""==name || "StudentID/StaffID/PKUMail"==name){
		$("#username").val("StudentID/StaffID/PKUMail");
		$("#username").css("color","#B7B7B9");
		$("#username").css("font-size","12px");
	}
}
function changeBorderColor(obj){
	obj.style.borderColor="#B40605";
}
function backBorderColor(obj){
	obj.style.borderColor="#CECECE";
}
function enterPassword(keypressed){
	var key;
    if (document.all) {
        key=window.event.keyCode;
    }
    else {
        key=keypressed.which;
    };
	if(key==13){
		$("#password").focus();
	}
	else{
		var name=$("#username").val();
		if(""==name || "StudentID/StaffID/PKUMail"==name){
			$("#username").val("");
			$("#username").css("color","#B7B7B9");
			$("#username").css("font-size","12px");
		}else{
			$("#username").css("color","#000000");
			$("#username").css("font-size","16px");
		}
		$("#username").next(".i-clear").show();
	}
}
function focusPassword(){
  $("#password").css("color","#000000");
  $("#password").next(".i-clear").show();
  $("#password").select();
}
function leavePassword(){
  var val = $("#password").val();
  if(""==val){
	   $("#password").css("color","#B7B7B9");
	   $("#password").next(".i-clear").hide();
  }
}
function resetInput(event){
	var input = $(event.target).parent().prev("input");
	input.val("");
	$(event.target).parent(".i-clear").hide();
	input.focus();
}
function func3(){
	if(document.getElementById("cv").value=='Verification Code')
	{
		document.getElementById("cv").value='';
	}
}
function func4(){
	if(document.getElementById("cv").value=='')
	{
		document.getElementById("cv").style.color="#b7b7b9";
		document.getElementById("cv").value='Verification Code';
	}
}
-->
