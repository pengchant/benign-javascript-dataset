var mall_page = {
            qtoken: '',
            real_qtoken: '',
            qtoken_timestamp :'',
            sb_param: 'd35b0467d1e16e6ce488a3229675523d'
        };
        String.prototype.protocol = function(){

            var str = this;

            str = window.isSupportWebp ? (str.replace(/(\.jpg|\.png)/g, ".webp")) : str;

            return str.replace(/http:\/\/p\d\.qh[imgs]{3}/,"https://p.ssl.qhmsg");
        };
        window.isSupportWebp = false;
        void function(){

        	var webpTestsUri = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';

			var image = new Image();

			function addResult(event) {
			    // if the event is from 'onload', check the see if the image's width is
			    // 1 pixel (which indiciates support). otherwise, it fails

			    window.isSupportWebp = event && event.type === 'load' ? image.width == 1 : false;
			}

			image.onerror = addResult;
			image.onload = addResult;

			image.src = webpTestsUri;
        }();