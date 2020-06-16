
    function _daTRK() {
        var daTrk = '-1';
        var daFr = 0;
        var cExpiry = 0;
        if (window.pageloadNonCollapsedAds && window.pageloadNonCollapsedAds.length > 0) {
        daTrk = '0';
        for (i = 0; i < window.pageloadNonCollapsedAds.length; i++) {
            var daTRKDiv = document.getElementById("my-ads" + pageloadNonCollapsedAds[i]);
            if (daTRKDiv && daTRKDiv.offsetHeight === 0) {
                daTrk = '1';
                cExpiry = 10080;
                break;
            }
        }
    }
    else {
        var daTRKDiv = document.getElementById("my-adsFPAD");
        if (daTRKDiv) {
            daTrk = '0';
            if (daTRKDiv.offsetHeight === 0) {
                cExpiry = 10080;
                    daTrk = '1';
                }
            }   
        }
        if (daFr || '1' === daTrk) {
            window.thamba = 1;
        }
        var expires = new Date();
        expires.setMinutes(expires.getMinutes() + cExpiry);
        window.wafer.utils.setCookie('thamba', daTrk, {expires: expires, domain: location.hostname});
        if (typeof window.thamba != 'undefined') {
                    var DPba=new function(){this.detect=function(px,callback){var detected=false;var checksRemain=2;var error1=false;var error2=false;if(typeof callback!="function")return;px+="?ch=*&rn=*";function beforeCheck(callback,timeout){if(checksRemain==0|| timeout>1E3)callback(checksRemain==0&&detected);else setTimeout(function(){beforeCheck(callback,timeout*2)},timeout*2)}function checkImages(){if(--checksRemain)return;detected=!error1&&error2}var random=Math.random()*11;var img1=new Image;img1.onload=checkImages;img1.onerror=function(){error1=true;checkImages()};img1.src=px.replace(/\*/,1).replace(/\*/,random);var img2=new Image;img2.onload=checkImages;img2.onerror=function(){error2=true;checkImages()};img2.src=px.replace(/\*/,2).replace(/\*/,random);beforeCheck(callback,250)}}; 
        DPba.detect("/px.gif", function(usesABP) {
            if (usesABP) {
                var expires = new Date();
                expires.setMinutes(expires.getMinutes() + 10080);
                window.wafer.utils.setCookie('thamba', '2', {expires: expires, domain: location.hostname});
            }
        });
        }
    }
    window.wafer && window.wafer.ready(function () {
        setTimeout(function() {window._daTRK()}, 300);
    });

