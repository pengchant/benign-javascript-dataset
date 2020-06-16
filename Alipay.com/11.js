
        var headSwiper = {
            init: function() {
                this.swiper = jQuery('.slick-content-box');
                this.initSwiper();
                this.bannerList = [];
            },
            getEnv: function() {
                var host = window.location.host;
                var env = 'prod';
                if (host.indexOf('.alipay.com') >= 0) {
                env = 'pre';
                } else if (host.indexOf('test.alipay.net') >= 0) {
                env = 'test';
                } else if (host.indexOf('.alipay.net') >= 0) {
                env = 'dev';
                }
                return env;
            },
            initSwiper: function() {
                var _this = this;
                jQuery(".slick-content-box").slick({
                    autoplay:true,
                    autoplaySpeed:5000,
                    cssEase: 'linear',
                    fade:true,
                    arrows:false,
                    dots:true,
                    speed:500 || 1000,
               })

                jQuery(".slick-content-box").on('afterChange', function(event, slick, currentSlide){
                    _this.expo(currentSlide);
                });
            },
            expo: function (currentIndex) {
                if(window.Tracert && window.Tracert.expo){
                    var data = this.bannerList[currentIndex]
                    window.Tracert.expo('c-banner.d-click-'+ (currentIndex +1));
                }
            },
            doFilter: function(flg) {
                var _this = this;
                _this.swiperItem = _this.swiper.find('.slick-item .J-imgBox');
                if (flg) {
                    _this.swiperItem.addClass('fn-filter');
                } else {
                    _this.swiperItem.removeClass('fn-filter');
                }
            },
        };
    