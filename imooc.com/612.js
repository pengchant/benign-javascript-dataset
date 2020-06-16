
    //动态加载advertisementReportjs
    
    var checkJQ = function(){
        console.log(typeof jQuery)
        if(typeof jQuery != 'undefined') {
           clearInterval(timer);
           var scr = document.createElement('script');
           scr.type="text/javascript";
           scr.src="/static/page/common/advertisementReport.js";
           document.body.appendChild(scr);
           
       }
    }
    var timer = setInterval(checkJQ,1000);
    
