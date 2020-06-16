
    var hpi = 6,
        hpTimer = null,
        homepage_guide_2019_show = getCookie('homepage_guide_2019_show');

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

    function hpStart() {
        document.querySelector('html').style.overflow = 'hidden';
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('#hp-guide-2019').style.display = 'block';
        hpTimer = window.setInterval(function() {
              hpi--;
              document.querySelector('#hp-item').innerHTML = hpi + 'S';
              if (hpi === 0) {
                  setCookie('homepage_guide_2019_show', 'true', 1);
                  document.querySelector('html').style.overflow = 'visible';
                  document.querySelector('body').style.overflow = 'visible';
                  document.querySelector('#hp-guide-2019').className += ' hp-guide-2019-fadeInUp';
                  window.clearInterval(hpTimer);
              } 
        }, 1000);
    }

    if (homepage_guide_2019_show !== 'true') {
        hpStart();
    }
