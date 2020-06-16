
(function() {
    //if(/s=noRedirect/i.test(location.search)) return; 
    if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        try {
            if(/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                window.location.href = "https://3g.163.com";
            } else if(/iPad/i.test(navigator.userAgent)) {
                window.location.href = "https://www.163.com/ipad/";
            }
        } catch(e) {}
    }  
})();
//if(navigator.platform.indexOf("Mac") > -1) document.documentElement.classList.add("ua-mac");
