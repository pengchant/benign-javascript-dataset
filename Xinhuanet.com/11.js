    
$(function(){   
hxgd1("#gd_area","#gd_content","#gd_scroll");   
})   
function hxgd1(a,b,c){   
var speed=30;    
var $tab=$(a);    
var $tab1=$(b);    
var $tab2=$(c);    
$tab2.html($tab1.html());    
function Marquee(){    
if($tab2[0].offsetWidth-$tab[0].scrollLeft<=0)    
$tab[0].scrollLeft-=$tab1[0].offsetWidth;    
else{    
$tab[0].scrollLeft++;    
}    
}    
var MyMar=setInterval(Marquee,speed);     
$tab.hover(function(){    
clearInterval(MyMar);    
},function(){    
MyMar=setInterval(Marquee,speed)    
})     
}   
