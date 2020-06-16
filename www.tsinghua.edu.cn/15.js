
 $('.topimg ul').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   centerMode: false,
   arrows:true,
   fade:true,
   dots:true,
   speed:1000,
   autoplaySpeed:6000,
   prevArrow:"<div class='pre arrow'><i class='icon-angle-left'></i></div>",
   nextArrow:"<div class='next arrow'><i class='icon-angle-right'></i></div>",
   customPaging:function(slider, i) {
    return '<button>0' + (i + 1) +"</button>";
   },
  responsive: [{
       breakpoint: 1000,
       settings: {
          fade:false,
      speed:300
         }
     }]
   });
   var mr=document.createElement("a");
 mr.text="更多清华映像 >";
 mr.href="https://www.tsinghua.edu.cn/qhyx/a2020.htm";
 mr.target="_blank";
 mr.className="moreimg";
 $(".topimg .slick-dots").append(mr);
