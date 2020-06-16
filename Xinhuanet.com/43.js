
var rate_i=0;
var rate_init="";
var rate_id = new Array(); 
$(".fbtnr").each(function(){rate_init=rate_init+String($(this).find(".init").html())+"|";var tmp=$(this).find(".ssm a").attr("href");var tmp1=String(tmp).lastIndexOf("/"); var tmp2=tmp.substr(tmp1+1,10).split(".")[0].replace("c_","");rate_id.push(tmp2);});rate_init=String(rate_init).substr(0,String(rate_init).length-1);
$.getJSON("http://baike.sc.xinhuanet.com/api/scpd_rate/rate.html?id="+String(rate_id)+"&init="+rate_init+"&callback=?",function(data){$.each(data["article"],function(id,value){
  var article_time=$(".time").eq(rate_i).html().replace("&nbsp;","").replace("&nbsp;"," ");
  var time_space=getHour(article_time,data["timeTxt"]);
  if(parseInt(time_space/3600000)>9){display_time=$(".time").eq(rate_i).html()}
  else if(parseInt(time_space/3600000)>=1){display_time=parseInt(time_space/3600000)+"小时前";}
  else{display_time=parseInt(time_space/60000)+"分钟前"}
  $(".sjn").eq(rate_i).html(display_time)
  $(".oan b").eq(rate_i).html(value[0]);$(".obn b").eq(rate_i).html(value[1]);$(".ocn b").eq(rate_i).html(value[2]);
  rate_i++;
})});  
function getHour(s1,s2) {s1 = new Date(s1.replace(/-/g, '/'));s2 = new Date(s2.replace(/-/g, '/'));var ms = Math.abs(s1.getTime() - s2.getTime());return ms;}
