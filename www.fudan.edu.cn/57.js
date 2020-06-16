	
      //<![CDATA[
      function iFrameScn(){
        var oHref0 = document.getElementById("SCN0").getAttribute("href");
        var oHref1 = document.getElementById("SCN1").getAttribute("href"); 		
        var oDiv =  document.getElementById("SCN");

       var oScnIframe = "<iframe src= "+oHref0+" style='display:none' ></iframe>" +"<iframe src= "+oHref1+" style='display:none' >";

        oDiv.innerHTML = oScnIframe;

      }
      iFrameScn();
      window.onload=(function(){
        if(jq("#Content").find("iframe") !== null){
          jq("#Content").find("iframe").each(function(){
            jq(this).css({height:jq("#Content").width()*0.562});
          });}
      })

      //]]>
    