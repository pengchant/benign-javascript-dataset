
    (function () {
        var html = document.getElementsByTagName("html")[0];
        var width = Math.min(document.documentElement.clientWidth, 790);
        width = width < 320 ? 320 : width;
        if (document.documentElement.clientWidth <= 1024) {
            html.style.fontSize = width / 790 * 79 + 'px';
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        function resizeHandler() {
            if (document.documentElement.clientWidth <= 1024) {
                var width = Math.min(document.documentElement.clientWidth, 790);
                width = width < 320 ? 320 : width;
                html.style.fontSize = width / 790 * 79 + 'px';
            } else {
                html.style.fontSize = "16px";
            }
        };
    })();
