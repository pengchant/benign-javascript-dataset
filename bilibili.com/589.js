
$(function(){
	$.ajax({ url: 'http://data.bilibili.com/rec.js',cache: true,dataType:'script'});
	$('<scr'+'ipt type="text/javascript" src="http://static.hdslb.com/js/bfd.js" charset="UTF-8"></scri'+'pt>').appendTo('body');	
	$('<scr'+'ipt type="text/javascript" src="http://s11.cnzz.com/stat.php?id=2724999&web_id=2724999" charset="UTF-8"></scri'+'pt>').appendTo('body');	
	$('<scr'+'ipt type="text/javascript" src="http://tajs.qq.com/stats?sId=9156259" charset="UTF-8"></scri'+'pt>').appendTo('body');	
});
