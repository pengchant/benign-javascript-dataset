
	/*<![CDATA[*/
	window.addEventListener("message", function (e){
    var origin = e.origin || e.originalEvent.origin;
    if ('//w-comment.chinadaily.com.cn/viewapi/comment/ismp'.indexOf(origin)==0){
      var vars = event.data.split('_');
      if (vars.length) {
        if ('commentResize' === vars[0]) {
          var frames = document.getElementsByClassName('comment-frame');
          if (frames.length) {
            frames[0].style.display= 'block';
            frames[0].style.height = (vars[1] * 1 + 5) + 'px';
          }
        }
      }
    }
  }, false);
   /*]]>*/
  