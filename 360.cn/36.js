var monitor=monitor?monitor:{};monitor.setProject&&monitor.setProject("QH_328_1",{utm_source:$.cookie("utm_source")||""}).getTrack().getClickAndKeydown().getClickHeatmap(10,1),window.onerror=function(e,t,n,r,i){console.log(arguments,this);try{var s=i;i.toString&&(s=i.toString()),i.stack&&(s=i.stack)}catch(o){}monitor.log&&monitor.log({type:"sendJsError",msg:e,source:t,line:n,col:r,error:s,ua:window.navigator.userAgent},"track")}