
QHUC.on('ready',function(data){
  var $userLogin = W('#user-login');
  if(data.isLogin){
    $userLogin.html('<a href="https://i.360.cn">个人中心</a>');
  }else{
    $userLogin.on('click', function(e){
      e.preventDefault();
      QHUC.signIn();
    })
  }
  $userLogin.show();

  if(data.mid && hao360.mid === ''){
    new AppData('api.hao.360.cn').set('mid', data.mid);
  }
});

window.QHUC.init({ 
  src: 'pcw_socube',
  needFastSignIn:false
});

