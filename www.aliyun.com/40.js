
  (function(){
    
     if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE|Huawei|huawei|honor/.test(navigator.userAgent))){
      if(window.location.href.indexOf("?mobile")<0){
        try{
          if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || /iPad/i.test(navigator.userAgent)){
              var meta = document.createElement("meta");
              meta.name="aplus-terminal";
              meta.content="1";
              document.documentElement.firstElementChild.appendChild(meta)
          }
        }catch(e){}
      }
    }
  })()
