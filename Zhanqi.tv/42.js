
  $(document).ready(function(){
    var aaBB = [];
    $('.js-aa-bb-cc').each(function(i, one){
      aaBB.push($(one).data('aaBb'));
    });
    if( 0 < aaBB.length ){
      $.ajax({
        url: 'https://tj.zhanqi.tv/ad.show?roomId=0&ids=' + aaBB.join(',')
      , type: 'get'
      , dataType: 'jsonp'
      });
    }
  });
