
  //<![CDATA[
var toggleBtn = document.getElementById('showpc');
var vp = document.querySelector('meta[name=viewport]');
var vpHtml = document.getElementById('showpc');
vpHtml.textContent = 'desktop';
var flag = 0;
function transView(){
  var x = (flag) ? 'initial-scale=1' : 'width=1200';
  var  relax = (flag) ? 'none' : 'block';
  vp.setAttribute('content', x);
  document.getElementById("mobileView").style.display=relax;
  
  flag^=1;
};
/*toggleBtn.addEventListener('click',transView())*/

      //]]>
    