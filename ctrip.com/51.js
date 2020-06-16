
	$jQuery = jQuery.noConflict();
	var crawler = null;
	var flg = true;
	var IsHotelListAntiSpiderNew = flg;
	if(!flg){
		crawler = {getHotelList:function(callback){callback("");}};
	};
