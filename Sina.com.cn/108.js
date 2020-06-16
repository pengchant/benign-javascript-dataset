
(function(){
	for(var i = 1; i <= 1; i ++ ){
		var subShow = new SubShowClass('subShowRank' + i, 'click');
		for(var j = 1; j <= 2; j ++){
			subShow.addLabel('subShowRank' + i + '_t' + j, 'subShowRank' + i + '_c' + j);
		}
	}
})();
