
$(document).ready(function() {
	//统计pv
	pv();
	
	var namespace = $("#namespace").val();
	var uuid = $("#uuid").val();
	var url = $("#url").val();
	var verify_code = $("#verify_code").val();
	var ip = $("#ip").val();
	var serialId = $("#serialId").val();
	var code = $("#code").val();
	var sign =$("#sign").val();
	respMessage = $.ajax({
		url : "/antibot/codev2/getsession.do?"+new Date().getTime(),
		data :{serialId:serialId,code:code,sign:sign,url:url,namespace:namespace},
		type : "POST",
		async : true,
		success : function(results) {
			var parsedJson = jQuery.parseJSON(results);
			if (parsedJson.code === 0 && parsedJson.data != null) {
				var captcha = ISDCaptcha({
					'element' : 'ISDCaptcha',
					'width' :parsedJson.data.width ,//宽度
					'type' : parsedJson.data.level,//验证码级别
					'showType'   : 'win', //  ['embed', 'trigger', 'win']//如果不传此值，默认为嵌入式.embed：嵌入式.trigger：触发式.win:弹出式
					'sessionId' : parsedJson.data.sessionId,
					'targetElm':'btnSubmit',//只对弹出式有效,如果是根据后端策略确定是否为弹出时
					//'winAutoShow':true,//弹出式时添加此属性会自动弹出,默认为false,不自动弹出
					'successCallback' : function successCallback(data) {

						respMessage = $.ajax({
							url : "checkcode.do",
							data : {
                                namespace : namespace,
                                sessionId : parsedJson.data.sessionId,
                                url : url,
                                successToken : data.successToken,
                                uuid:uuid,
                                serialId:serialId
                            },
							type : "POST",
							async : true,
							success : function(results) {
								var parsedJson = jQuery.parseJSON(results);
								if (parsedJson.code === 0) {
									var redLocation = parsedJson.msg;
									if(redLocation.indexOf("http://")===-1 && redLocation.indexOf("https://")===-1){
										redLocation = "http://"+redLocation;
									}
									window.location.href = redLocation;
								} else {
									$("#errmsg").html(parsedJson.msg);
									
								}
							}
						});
					},
					'failCallback' : function failCallback(data) {
						//alert(data.responseId);
					}
				})
				captcha.init();
			} else {
			    if(parsedJson.data == null){
                    $("#errmsg").html(parsedJson.msg);
				}else{
                    $("#errmsg").html(parsedJson.msg);
                    var reLocation = parsedJson.data;
                    if(reLocation.indexOf("http://")===-1 && reLocation.indexOf("https://")===-1){
                        reLocation = "http://"+reLocation;
                    }
                    setInterval(function(){
                        window.location.href = reLocation;
                        }, 5000);

				}

				
			}
		}
	});
	
	function pv () {  
	    var params = {};  
	    //Document对象数据  
	    if(document) {  
	        params.domain = document.domain || '';   
	        params.url = document.URL || '';   
	        params.title = document.title || '';   
	        params.referrer = document.referrer || '';   
	    }     
	    //Window对象数据  
	    if(window && window.screen) {  
	        params.sh = window.screen.height || 0;  
	        params.sw = window.screen.width || 0;  
	        params.cd = window.screen.colorDepth || 0;  
	    }     
	    //navigator对象数据  
	    if(navigator) {  
	        params.lang = navigator.language || '';   
	    }     
	   
	    // 其他参数  
	    var date = new Date();  
	    params.ltime = date.getTime() / 1000;  
	    //拼接参数串  
	    var args = '';   
	    for(var i in params) {  
	        if(args != '') {  
	            args += '&';  
	        }     
	        args += i + '=' + encodeURIComponent(params[i]);  
	    }     
	   
	    //通过Image对象请求后端脚本  
	    var img = new Image(1, 1);   
	    img.src = '/fwdata/load.gif?' + args;  
	}
});

