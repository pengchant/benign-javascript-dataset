
		$(document).scroll(function() {
			var y = $(this).scrollTop();
			if (y > 50 && y < document.body.scrollHeight - 2000) {
				$('.floating-ctas').fadeIn();
			} else {
				$('.floating-ctas').fadeOut();
			}
		});
	