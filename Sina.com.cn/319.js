
	$(function(){
		var dataids = [];
		console.log($('#pl_feed_conf_28').find('[name="cmnt_count"]').length)
		$('#pl_feed_conf_28').find('[name="cmnt_count"]').each(function(){
			dataids.push($(this).attr("cmnt_id"));
		});

		var a = dataids.join(",");
		function cmtNum(data){
			var numberlist= data.result.count;
			for(var o in numberlist){
				var str = numberlist[o].total;
				if(str == 0){
					$('#pl_feed_conf_28').find("[cmnt_id='"+o+"']").html("评论");
				}else{
					$('#pl_feed_conf_28').find("[cmnt_id='"+o+"']").html(str);
				}
			}
		}
		$.ajax({
			url: "//comment5.news.sina.com.cn/cmnt/count?format=json&newslist="+a,
			dataType: "jsonp",
			jsonp: 'callback', 
			success: function(data){
				cmtNum(data);
			}
		});
	})
