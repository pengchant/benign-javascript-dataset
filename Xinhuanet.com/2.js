
(function(){
    function setIframeHeight(id){
    try{
        var iframe = document.getElementById(id);
        if(iframe.attachEvent){
            iframe.attachEvent("onload", function(){
                iframe.height =  iframe.contentWindow.document.documentElement.scrollHeight;
 console.log(iframe.height)
            });
            return;
        }else{
            iframe.onload = function(){
                iframe.height = iframe.contentDocument.body.scrollHeight;
 console.log(iframe.height)
            };
            return;                 
        }     
    }catch(e){
        throw new Error('setIframeHeight Error');
    }
}
    setIframeHeight('celebrate');
})()
