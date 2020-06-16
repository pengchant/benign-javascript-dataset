
$('#headerqrcode_30').bind('done', function () {
  seajs.use('index/widget/headerqrcode',function(Qrcode){
    new Qrcode()
  })
});
