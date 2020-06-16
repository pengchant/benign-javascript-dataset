
	function getAreaRequest (province, city) {
		var requestURl = '';
		switch (province) {
			case '河南' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/henan.js';
				break;
			case '四川' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/sc.js';
				break;
			case '上海' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/sh.js';
				break;
			case '福建' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/fj.js';
				break;
			case '浙江' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/zj.js';
				break;
			case '湖北' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/hb.js';
				break;
			case '湖南' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/hunan.js';
				break;
			case '江苏' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/jiangsu.js';
				break;
			case '河北' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/hebei.js';
				break;
			case '重庆' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/cq.js';
				break;
			case '辽宁' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/ln.js';
				break;
			case '陕西' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/sx.js';
				break;
			case '广东' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/gd.js';
				break;
			case '安徽' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/ah.js';
				break;
			case '黑龙江' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/hlj.js';
				break;
			case '天津' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/tj.js';
				break;
			case '江西' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/jx.js';
				break;
			case '吉林' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/jl.js';
				break;
			case '山西' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/shanxi.js';
				break;
			case '山东' :
				requestURl = '//finance.sina.com.cn/dfz/js/2017/sd.js';
				break;
			default :
				break;
		}
		return requestURl;
	}
