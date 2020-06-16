
    $(function (){
        /*var place = document.body.offsetWidth < 768 ? 'left' : 'top';*/
        var place = 'top';
        $('.detail >ul > li > a').each(function () {
            var element = $(this);
            var id = "popover" + Math.floor(Math.random()*10000000);
            var txt = element.attr("pop-content");
            element.popover({
                html: true,
                trigger: "hover",
                placement: place,
                delay: {hide: 100},
                content: txt
            }).on('show.bs.popover', function (e) {
                $('.detail div.popover').remove();
                element.removeAttr("aria-describedby");
            }).on('shown.bs.popover', function (event) {
                element.attr("aria-describedby", id);
                var that = this;
                $(this).parents('.detail').find('div.popover').attr("role","tooltip").attr("id", id).on('mouseenter', function () {
                    $(that).attr('in', true);
                }).on('mouseleave', function () {
                    $(that).removeAttr('in');
                    $(that).popover('hide');
                });
                $(this).parents('.detail').find('div.play').find('a').on('click',function(event){
                    $('.detail div.popover').remove();
                    element.removeAttr("aria-describedby");
                    var $this = $(this);
                    var videoHref = $this.attr('href');
                    SB.playVideo(videoHref);

                    // Make google analytics work, not stop event propagation.
                    event.preventDefault();
                })
            }).on('hide.bs.popover', function (event) {
                if ($(this).attr('in')) {
                    event.preventDefault();
                }
            });
        });
        $('.texts >ul > li > a[pop-content]').delegate('', 'click', function(e){
            $('.detail div.popover').remove();
            $(this).popover('toggle');
            event.preventDefault();
        });
    });
