
if( location.href.indexOf("aliyun.com/product/") > -1 ){
    if(window.requestAnimationFrame){
        window.requestAnimationFrame = function(){};
    }
   var productInterval = setInterval(function () {
  var size = $('.vertex-marker').size();
  if (size) {
    $('.vertex-marker').slice(0, 4).eq(3).css({
      transform: 'translate(320px, 190px)'
    });
    $('.vertex-marker').slice(0, 4).eq(2).css({
      transform: 'translate(180px, 335px)'
    });
  }
  // timeout
  setTimeout(function () {
      $('body').off("click", ".advantage li,.label-container .label")
    clearInterval(productInterval)
  }, 2000);
}, 100); 
   
}
