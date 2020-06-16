
//统计埋点
$(function(){
	//热门搜索
	var hotArr = $('#hot').find('a');
	for (var i = 1; i <= hotArr.length; i++) {
		hotArr.eq(i-1).bind('click',{index:i},function(event){
			clickLog('from=lvyou_index_reci'+event.data.index);
		});
	}
	//推广部分
	var navArr = $('.nav').find('a');
	for (var i = 1; i <= navArr.length; i++) {
		navArr.eq(i-1).bind('click',{index:i},function(event){
			clickLog('from=lvyou_index_promote_'+event.data.index);
		});
	}
	//索引部分
	var cateLiArr = $('.sidebarlist li');
	for (var i = 1; i <= cateLiArr.length; i++) {
		var cateItemArr = cateLiArr.eq(i-1).find('.catecss-item');
		for (var j = 1; j <= cateItemArr.length; j++) {
			var links = cateItemArr.eq(j-1).find('a');
			for (var z = 1; z <= links.length; z++) {
				links.eq(z-1).bind('click',{i:i,j:j,z:z},function(event){
					clickLog('from=lvyou_index_suoyin_'+event.data.i+'C_'+event.data.j+'T_'+event.data.z);
    			});
			}
		}
	}
	
	//轮播图
	var bannerPicArr = $('div.focus').find('a');
	for (var i = 1; i <= bannerPicArr.length; i++) {
		bannerPicArr.eq(i-1).bind('click',{i:i},function(event){
				clickLog('from=hunqing_index_banner'+event.data.i);
			});
	}
	
	//区块的主图及链接
	var contentDivArr = $('div.content');
	for (var i = 1; i <= contentDivArr.length; i++) {
		var picLinkArr = contentDivArr.eq(i-1).find('.infoblock .infoblock-top');
		for (var j = 1; j <= picLinkArr.length; j++) {
			picLinkArr.eq(j-1).bind('click',{i:i,j:j},function(event){   
				clickLog('from=lvyou_index_big_'+event.data.i+'F_'+event.data.j+'S_P');
			});
		}
		
		var divArr = contentDivArr.eq(i-1).find('div.infoblock');
		for (var j = 1; j <= divArr.length; j++) {
			var links = divArr.eq(j-1).find('.infoblock-main a[href!=""]');
			for (var z = 1; z <= links.length; z++) {
				links.eq(z-1).bind('click',{i:i,j:j,z:z},function(event){
					clickLog('from=lvyou_index_big_'+event.data.i+'F_'+event.data.j+'S_'+event.data.z);
				});
			}
		}
	}
	
});
