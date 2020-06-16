
            function isLowIEVersion () {
              var browser = navigator.appName
              if(navigator.userAgent.indexOf("MSIE")>0) { 
                var b_version = navigator.appVersion
                var version = b_version.split(";");
                var trim_Version = version[1].replace(/[ ]/g,"");
                if ((browser=="Netscape"||browser=="Microsoft Internet Explorer")) {
                  if(trim_Version == 'MSIE9.0' || trim_Version == 'MSIE8.0' || trim_Version == 'MSIE7.0' || trim_Version == 'MSIE6.0') {
                    document.getElementById('ie-browser-tip').style.display = 'block'
                  }
                }
              }
            }
            window.onload = function(){
              isLowIEVersion()
            }
          