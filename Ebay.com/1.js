
    (function() {
        var useCustomFont = ('fontDisplay' in document.documentElement.style) ||
                        (localStorage && localStorage.getItem('ebay-font'));
        if (useCustomFont) {
            document.documentElement.classList.add('font-marketsans');
        }
    })();
