
	(function($, document, window) {
		var bInitFollowingStatus = false;
		
		function refreshFollowBtnsForSE3(bIsFollowingAuthor) {	
			//console.log("refreshFollowBtnsForSE3 : bIsFollowingAuthor = " + bIsFollowingAuthor);
			var bIsFlw = bInitFollowingStatus;
			if (bIsFollowingAuthor != null) {
				bIsFlw = bInitFollowingStatus = bIsFollowingAuthor;
			}
			
			var elSe3btn = $(".__se3_follow_btn");	//신규 se3버튼
			var elSe3Statbtn = $(".__se3_stat_btn");	//신규 se3버튼
			var elGnbFollowBtn = $(".__followAnchor");	//
			var elGnbUnFollowBtn = $(".__unfollowAnchor");
			if (elGnbFollowBtn.length > 0 && elSe3btn.length > 0) {
				if (!!bIsFlw) {	//팔로잉상태
					elSe3btn.addClass("on");
					elSe3btn.find(".se_card_btn_txt").text("팔로잉");
					if (elSe3btn.hasClass("__card_start_follow") == false) { //se3 카드형 커버일 경우 바꾸지 않음. span 마크업이 남아 있다.
						elSe3btn.text("팔로잉");
					}
					elSe3btn.each(function(idx){
						this.onclick = function() {
							var sNclickKey = $(this).attr("data-nclickkey");
							if (!sNclickKey) {
								sNclickKey = "tit.unfollow";
							}
							mug.common.nclick(elSe3btn[0], sNclickKey);
							elGnbUnFollowBtn.click();
							return false;
						}
					});
				} else {
					elSe3btn.removeClass("on");
					elSe3btn.find(".se_card_btn_txt").text("팔로우");
					if (elSe3btn.hasClass("__card_start_follow") == false) { //se3 카드형 커버일 경우 바꾸지 않음. span 마크업이 남아 있다.
						elSe3btn.text("팔로우");
					}
					elSe3btn.each(function(idx){
						this.onclick = function() {
							var sNclickKey = $(this).attr("data-nclickkey");
							if (!sNclickKey) {
								sNclickKey = "tit.follow";
							}
							mug.common.nclick(elSe3btn[0], sNclickKey);
							elGnbFollowBtn.click();
							return false;
						}
					});
				}
			}
			
			mug.$.UserAgent.isMobile && elSe3btn.show();
			
		}
		$(window).on("viewerLoad", function(){
			refreshFollowBtnsForSE3();
			mug.common.Sharer.init();
		});
		window.refreshFollowBtnsForSE3 = refreshFollowBtnsForSE3;
	})(jQuery, document, window);
