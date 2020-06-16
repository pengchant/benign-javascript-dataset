
// 관심분야
var aDirDataList = [

];

// 관심지역
var aLocalDataList = [

];

// 관심키워드
var aKeywordDataList = [

];

// 배지 이벤트
var oBadgeEventMap = {
			
		'빙고 1단계' : {'eventNo' : 79, 'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t80.gif?ver=20160318105338'},
			
		'나도운영자' : {'eventNo' : 98, 'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t99.gif?ver=20160616050510'},
			
		'성지발굴단' : {'eventNo' : 108, 'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t109.gif?ver=20170207022820'},
			
		'베스트발굴단' : {'eventNo' : 109, 'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t110.gif?ver=20170207024413'},
			
		'나도운영자 시즌2' : {'eventNo' : 110, 'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t111.gif?ver=20170228052505'},
			
		'1대 장학금 기부자' : {'eventNo' : 114, 'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t115.gif?ver=20171221103710'},
			
		'2대 장학금 기부자' : {'eventNo' : 115, 'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t116.gif?ver=20171221104014'},
			
		'빙고 2단계' : {'eventNo' : 117, 'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t118.gif?ver=20180221051339'},
			
		'3대 장학금 기부자' : {'eventNo' : 118, 'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t119.gif?ver=20180424051453'},
			
		'4대 장학금 기부자' : {'eventNo' : 120, 'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t121.gif?ver=20180830114927'},
			
		'2020 교육기부' : {'eventNo' : 125, 'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t126.gif?ver=20200109110952'}
	
};

$Fn(function() {
	if (naver.kin.main && naver.kin.main.Tab) {
		var oMainTab = new naver.kin.main.Tab({
			'sSelTab' : 'qna',
			'sSelSubTab' : '',
			'nDefaultDirId' : 0,
			'aDirData' : aDirDataList,
			'aLocalData' : aLocalDataList,
	 		'aKeywordData' : aKeywordDataList,
	 		'oBadgeEventList' : oBadgeEventMap,
			'sQueryTime' : '2020-06-16 15:11:12',
	 		'sImageServerUrl' : 'https://kin-phinf.pstatic.net'
		});
	}
}).attach(window, "load");
