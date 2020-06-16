$(document).ready(function(){
    $(".listshow").find(".wp_paging").hide();
	var $container = $('.listcon');
	//$container.find(".news_list").each(function(){
	//	var $colText = $(this).find(".news_col");
		//$colText.text($colText.text().replace(',','\xa0\xa0\xa0\xa0'));
		
	//});
	
	$container.imagesLoaded(function(){
		$container.masonry({
			itemSelector: '.pbl.news_list'
          //columnWidth: 5
		});
	});
	$container.infinitescroll({
		navSelector  : '.wp_paging',
		nextSelector : '.wp_paging .next', 
		itemSelector : '.pbl.news_list',
		loading: {
			finishedMsg: '加载完毕！',
			img: 'pbl/loading.gif'
		}
	},function(newElements){
			var $newElems = $( newElements ).css({ opacity: 0 });

			$newElems.imagesLoaded(function(){
				
				$newElems.animate({opacity:1});
				$container.masonry( 'appended', $newElems, true ); 
			});
			window._bd_share_main.init();
		}
	);
});



