
!function($, window, document) {
	function __closeOverflowMenu(delay) {
		$(document.body).off("click", __closeOverflowMenuEventHandler);
		delay = delay || 0;

		var fn = function(){
			var wel = $(".ly_more.__gnb_overview_menu");
			wel.removeClass("on");
            wel.siblings("button").attr("aria-expanded", "false");
			wel.hasClass("on") ? wel.show() : wel.hide();
		};

		if (/Android 4\.0\./g.test(window.navigator.userAgent)) {
			fn();
		} else {
			setTimeout(fn, delay);
		}
	}
	window.__closeOverflowMenu = __closeOverflowMenu;


	function __closeOverflowMenuEventHandler(ev) {
		if ($(ev.target).parents(".__gnb_overview_menu").length > 0) {	//클릭한 엘리먼트가 메뉴바내 요소인 경우는 닫지않고 유지.
			return;
		}
		__closeOverflowMenu();
	}
	window.__closeOverflowMenuEventHandler = __closeOverflowMenuEventHandler;

	function __toggleOverflowMenu(delay) {
		try {
			if (__viewer.mode == "preview") {
				return;
			}
		} catch(e) {}
		delay = delay || 0;

		var fn = function() {
			var wel = $(".ly_more.__gnb_overview_menu");
			wel.toggleClass("on");
			if (wel.hasClass("on")) {
                wel.siblings("button").attr("aria-expanded", "true");
				wel.show();

				//뷰어 메뉴바 스크립트에서 처리하고 있으므로 주석처리
				setTimeout(function() {
					$(document.body).on("click", __closeOverflowMenuEventHandler); // 바로 event attach하면 이벤트 핸들러까지 실행되어 바로 닫히게 된다;;;
				}, 0);
			} else {
				__closeOverflowMenu();
			}
		};

		if (/Android 4\.0\./g.test(window.navigator.userAgent)) {
			fn();
		} else {
			setTimeout(fn, delay);
		}
	}
	window.__toggleOverflowMenu = __toggleOverflowMenu;

	$(".btn_overflow_menu").on("click", function() {
		__toggleOverflowMenu();
	});
	$("#header .gnb button.__series").on("click", function(ev) {
		ev.preventDefault();
		location.href = "/my/series/detail.nhn?seriesNo=453151&memberNo=41739456&prevVolumeNo=28503197";
	});


	
}(jQuery, window, document);
