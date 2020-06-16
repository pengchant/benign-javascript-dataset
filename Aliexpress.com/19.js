
/* <![CDATA[ */
  try{
    (function() {
        var url = window.location.href,search = window.location.search,regx1 = /isdl=y/,regx4 = /aff_short_key=/;  
        if (!regx1.test(search) && !regx4.test(search)) return;
        var img = new Image();
    img.onload=function(){img=null;};
        img.src="http://s.click.aliexpress.com/direct_landing.htm"+ search + "&version=1.1";
  })();
  }catch(e){
  }
/* ]]> */