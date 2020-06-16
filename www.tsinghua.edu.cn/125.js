
/*
*env
*summaryStr:String 信息简介
*lengTh:int 截取的长度
*/
 function cutSummary(summaryStr,lengTh){
   if(summaryStr.length>lengTh){
     summaryStr=summaryStr.substring(0,lengTh)+"...";
   }
   document.write(summaryStr);
 }
/*
*jQuery:所有外域链接在新窗口打开
*/
$(document).ready(function() {
 $("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])")
 .addClass("external")
 .attr("target","_blank")
});
