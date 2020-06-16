
    $('.js-scroll-link').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            300,
            'linear'
        );
    });

    var tourAutoplay = 3500;
    var tourItemActiveClass = ["is-active", "bc-black-3", "bs-lg", "d:bg-black-900", "d:fc-white"];

    var tourTriggers = document.querySelectorAll('.js-tour-area');
    var tourIndex = 1;
    var tourAutoplayer;

    function tourInitAutoplay () {
        tourAutoplayer = setInterval(function() {
            tourTriggers[tourIndex].checked = true;

            for (var i=0; tourTriggers.length > i; i++) {
                var event;
                if(typeof(Event) === 'function') {
                    event = new Event('change');
                } else {
                    event = document.createEvent('Event');
                    event.initEvent('change', true, true);
                }

                tourTriggers[i].dispatchEvent(event);
            }

            if (tourIndex >= tourTriggers.length - 1) {
                tourIndex = 0;
            } else {
                tourIndex++;
            }
        }, tourAutoplay);
    }

    function tourKillAutoplay() {
        clearInterval(tourAutoplayer);
    }

    tourInitAutoplay();

    for (var i=0; tourTriggers.length > i; i++) {
        tourTriggers[i].addEventListener('s-expandable-control:show', function (el) {
            Array.prototype.slice.call(tourItemActiveClass).forEach(function(e){el.target.parentNode.classList.add(e);});
        }, false);

        tourTriggers[i].addEventListener('s-expandable-control:hide', function (el) {
            Array.prototype.slice.call(tourItemActiveClass).forEach(function(e){el.target.parentNode.classList.remove(e);});
        }, false);

        tourTriggers[i].addEventListener('click', function () {
            tourKillAutoplay();
        });

        tourTriggers[i].addEventListener('touchstart', function () {
            tourKillAutoplay();
        });
    }
