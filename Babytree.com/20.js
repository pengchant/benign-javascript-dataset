
	$(document).ready(function(){
		window.mods_direction_init(641);
		//extra
        $('#bb-home-spotlight a').each(function() {
            var href = $(this).attr("href");
            if (href  !== undefined && href.match(/javascript:.*void.*/i)) {
                $(this).attr('target', '_self');
            }
		});

		$("#ask_content").focus(function(){if($(this).val()=="在这里输入您的问题,10分钟内有问必答")$(this).val("");});
        $("#ask_content").blur(function(){if($(this).val()=="")$(this).val("在这里输入您的问题,10分钟内有问必答");});
        $("#ask_content").keyup(function(){
            var l = $.trim($(this).val()).length;
            if(l<50){
                if ($.trim($(this).val())=="在这里输入您的问题,10分钟内有问必答") {
                    l = 0;
                }
                $("#ask_counter").html('<div class="counter" id="ask_counter">您还可以输入<em>'+(50-l)+'</em>字</div>');
            }else{
                $("#ask_counter").html('<div class="counter" id="ask_counter">您已经超出<em>'+(l-50)+'</em>字</div>');
            }
        }).keyup();

	});

	function check_ask_form(){
            var title = $.trim($("#ask_content").val());
            var len = title.length;
            if(len == 0||title=="在这里输入您的问题,10分钟内有问必答"){
                alert("请填写问题标题！");
                return false;
            }else if(len<5){
                alert("问题标题得在5个字以上!");
                return false;
            }
            if(len>50){
                alert("问题标题不能超过50个字！");
                return false;
            }
            if(typeof(check_user_login)=="function" && typeof(login)=="boolean"){
                check_user_login("ask",function(){
                        document.ask_form.submit()
                        });
                return false;
            }
            else
                return false;
            return true;
        }
