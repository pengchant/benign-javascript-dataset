

            $(function () {
                $("swiper-slide-1").addClass("swiper-slide-active");
                $("swiper-slide-2").addClass("swiper-slide-next");
                var swiper = new Swiper('.swiper-container', {
                    lazy: true,
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            })
            