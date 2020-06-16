
    window.embedReplace.replaceAll();
    (function() {
        function addEvent(elm, evType, fn, useCapture) {
            if (elm.addEventListener) {
                elm.addEventListener(evType, fn, useCapture); //DOM2.0
                return true;
            } else if (elm.attachEvent) {
                var r = elm.attachEvent("on" + evType, fn);
                return r;
            }
        }
        var timer;
        addEvent(window, "scroll", function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                embedReplace && embedReplace.replaceAll(); //eslint-disable-line
            }, 300);
        });
    }());
    