
$Fn(function() {
	var elList = $$('span._campaignTitle',$("asideCampaign"));
	if(!elList ){
		return;
	}
	
	for(var i=0;i<elList.length;i++){
		wel = $Element(elList[i]);
		if(elList[i].scrollHeight > elList[i].clientHeight){
			// 2줄일때
			wel.parent().parent().removeClass("type2");
			wel.parent().parent().addClass("type1");
		}
		wel = $Element(elList[i]);
	}
}).attach(window, 'load');
