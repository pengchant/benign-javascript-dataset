  
function aotu_sxgd(){  
    var speed=50  
   demo2.innerHTML=demo1.innerHTML  
   function Marquee(){  
   if(demo2.offsetTop-demo.scrollTop<=0)  
   demo.scrollTop-=demo1.offsetHeight  
   else{  
   demo.scrollTop++  
   }  
   }  
   var MyMar=setInterval(Marquee,speed)  
   demo.onmouseover=function() {clearInterval(MyMar)}  
   demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}  
}  
aotu_sxgd();  
