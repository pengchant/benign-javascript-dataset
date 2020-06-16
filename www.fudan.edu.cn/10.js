
if($(window).width() > 768){
	$("#campus_item_1 a").colorbox({
			inline:true,
			className:'video_colorbox',
			//width:'70%',
			//height:'70%',
			title:false,
			scrolling:false,
			onComplete:function(){
				$('.video_colorbox').find('video')[0].player.play();
			}
		});
	}else{
$("#campus_item_1_m").show();
$("#campus_item_1").hide();
}


	
	if($(window).width() > 768){
		$('video').mediaelementplayer({
			success: function(player, node){
				console.log('mode: ' + player.pluginType);
			}
		});
	}
	var on = !on;
	$('.video_popup .video_play').click(function(){
		if ( on ) {
			$('#video')[0].player.play();
		}else{
			$('#video')[0].player.pause();
		}
		on = !on;
		return false;
	})

