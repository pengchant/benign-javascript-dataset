
   $('.datawrapper').slick({
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 4,
     autoplay: true,
     centerMode: false,
     arrows:false,
     dots:true,
     autoplaySpeed:8000,
     responsive: [{
         breakpoint: 1400,
         settings: {
            slidesToShow: 3,
        slidesToScroll: 3
           }
       },
         {
         breakpoint: 1000,
         settings: {
            slidesToShow: 2,
        slidesToScroll: 2
           }
       } ,
         {
         breakpoint: 600,
         settings: {
            slidesToShow: 1,
        slidesToScroll: 1
           }
       }
    ]
     })
