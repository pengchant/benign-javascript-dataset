
    var homepage_guideFloat_2019_show = getCookie('homepage_guideFloat_2019_show');

    function closeFloat() {
        setCookie('homepage_guideFloat_2019_show', 'true', 1);
        document.querySelector('#global_float_2019').style.display = 'none';
    }

    function setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + '=' + escape(value) + ((expiredays==null) ? '' : ';expires=' + exdate.toGMTString()) + ';path=/';
    }

    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + '=');
            if (c_start != -1) { 
                c_start = c_start + c_name.length + 1; 
                c_end = document.cookie.indexOf(';',c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            } 
        }
        return '';
    }

    if (homepage_guideFloat_2019_show !== 'true') {
        document.querySelector('#global_float_2019').style.display = 'block';
    }
