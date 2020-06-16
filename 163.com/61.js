 
    window.onload = function () {
        var $PMP_RICHMEDIA_SHOWID = 'iXD4eG';
        var $PMP_RICHMEDIA_EXPIRE = 1; //频次一天
        var $PMP_RICHMEDIA_CLOSEPROCESS = function (isReplay, reason) {
            if(!isReplay){
                if (reason === '0' || reason === '1') {  //点击关闭按钮
                    adCindex.go(2);
                }
            }
        };
        var $PMP_RICHMEDIA_RENDERFAILPROCESS = function (isReplay, errorcode) {
            if (errorcode === 'ERROR_0' || errorcode === 'ERROR_1' || errorcode === 'ERROR_2' || errorcode === 'ERROR_3' || errorcode === 'ERROR_4') {
                adCindex.go(2);
            }
        };
        var $PMP_RICHMEDIA_POSTPROCESS = function (isReplay) {
            document.querySelector('.mv-pmprichmedia-wrapper').style.position = "absolute";
            document.querySelector('.mv-pmprichmedia-container-wrapper').style.position = "fixed";
            document.querySelector('.mv-pmprichmedia-container-wrapper').style.bottom = "0px";
            var pmprichmedia_replay = document.querySelector('.mv-pmprichmedia-replay');
            var PMP_resetPosition = function () {
                if (typeof (dwBox) != "undefined") {
                    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
                    if (scrollTop >= 660) {
                        pmprichmedia_replay.style.position = "fixed";
                        pmprichmedia_replay.style.top = "530px";
                    } else {
                        pmprichmedia_replay.style.position = "absolute";
                        pmprichmedia_replay.style.top = "1190px";
                    }
                } else {
                    pmprichmedia_replay.style.position = "fixed";
                    pmprichmedia_replay.style.top = "530px";
                }
            }
            PMP_resetPosition();
            window.addEventListener("scroll", function () {
                PMP_resetPosition();
            });
        };
        var ad_exposure = new Image();
        ad_exposure.src = "https://g.163.com/a?CID=62951&actionId=imp";
    }
