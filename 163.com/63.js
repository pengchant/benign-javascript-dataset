
  function loadBottomAd () {
    //g.163代码
    var ad_g_list = [
    "https://g.163.com/ur?site=netease&affiliate=homepage&cat=homepage&type=richmedia&location=1",
    "https://g.163.com/ur?site=netease&affiliate=homepage&cat=homepage&type=adend&location=1",
    ]; 
    /*  首页对联 */ 
      /*巨幕*/
      /*V领域*/
      /*  下方不用动  */
      var cacheArray =[];
      window.importAd = function(_files,success){
        var FileArray=_files;
        if(FileArray.length>0){
         var LoadedCount=0;
         for(var i=0;i< FileArray.length;i++){
          loadFile(FileArray[i],function(){
           LoadedCount++;
           if(LoadedCount==FileArray.length){
            if(typeof success == "function"){
             success();
           }
         }
       });
        }
      }
      function loadFile(url, success){
       if (!FileIsExt(cacheArray,url)){
        var fileObj=document.createElement("script");
        fileObj.type = "text/javascript";
        fileObj.src = url;
        success = success || function(){};
        fileObj.onload = fileObj.onreadystatechange = function() {
         if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
          success();
          cacheArray.push(url);
        }
      }
      document.body.appendChild(fileObj);
    }else{
      success();
    }
  }
  function FileIsExt(FileArray,_url){
   if(FileArray!=null && FileArray.length>0){
    var len =FileArray.length;
    for (var i = 0; i < len; i++) {
     if (FileArray[i] ==_url) {
      return true;
    }
  }
}
return false;
}
}
var ad_common_list = ["https://img3.126.net/ntesrich/auto/adbox/adbox-v1.1.2-120705.js"].concat(ad_g_list);
     if(typeof adInfoTempDL !== "undefined"){ //dui-lian 
      ad_common_list.push("https://yt-adp.ws.126.net/ntesrich/auto/js/ntesrich_auto_js_dlbox_20190801.js");
    }
     if(typeof top_banner_v !== "undefined"){ // v-ling-yu
      ad_common_list.push("https://yt-adp.ws.126.net/ntesrich/auto/js/2017.01.01-vlingyu-v3.js");
    }
     if(typeof adInfoTempTf !== "undefined"){ //ju-mu
      ad_common_list.push("https://yt-adp.ws.126.net/ntesrich/auto/js/2017.04.13-jmdt.js");
    }
    var ad_boot = ["https://img3.126.net/ntesrich/2018/0101/adControl-20180730.js"];
    importAd(ad_common_list,function(){
      var ad_type_js = [];
      if(typeof ad_type_js1!=="undefined"){
       ad_type_js = ad_type_js.concat(ad_type_js1);
     }
     if(typeof ad_type_js2!=="undefined"){
       ad_type_js = ad_type_js.concat(ad_type_js2);
     }
     if(ad_type_js.length>0){
       importAd(ad_type_js,function(){
        importAd(ad_boot);
      });
     }else{
       importAd(ad_boot);
     }
   });
  }
  /*  勿动 start */
  if (canUseLoad()) {
    evenHandler(window, 'load', loadBottomAd)
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(loadBottomAd, 200);
    });
  }
  /*  勿动 end */
