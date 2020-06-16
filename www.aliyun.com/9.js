
    !(function(c,b,d,a){
      c[a]||(c[a]={});
      function getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
          var c = ca[i].trim();
          if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
        }
        return "";
      };
      var uid = getCookie('login_aliyunid_pk');
      c[a].config={pid:"eqaf0lj5rb@c6546d8b7c78af1",uid:uid,appType:"web",imgUrl:"https://arms-retcode.aliyuncs.com/r.png?",useFmp:true,sendResource:true,disableHook:true};
      with(b)with(body)with(insertBefore(createElement("script"),firstChild))setAttribute("crossorigin","",src=d)
    })(window,document,"https://retcode.alicdn.com/retcode/bl.js","__bl");
  