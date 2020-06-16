
  $('.smallpic ul').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: false,
    arrows:false,
    dots:false,
    asNavFor:$('.bigpic ul')
    });
  $('.bigpic ul').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: false,
    arrows:false,
    dots:true,
    autoplaySpeed:4000,
    prevArrow:"<div class='pre arrow'><i class='icon-angle-left'></i></div>",
    nextArrow:"<div class='next arrow'><i class='icon-angle-right'></i></div>",
    asNavFor:$('.smallpic ul')
    });
    
