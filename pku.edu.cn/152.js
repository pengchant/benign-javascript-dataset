
      var timeout         = 500;
      var closetimer    = 0;
      var ddmenuitem      = 0;
      var linkitem = 0;

      function jsddm_open()
      { jsddm_canceltimer();
        jsddm_close();
        if(!$(this).find('a').eq(0).hasClass('top-link-hover')){
          linkitem = $(this).find('a').eq(0).addClass('top-link-hover');        
        }
        ddmenuitem = $('#d_'+$(this).find('a').eq(0).attr('id')).eq(0);
        ddmenuitem.fadeIn();
      }

      function jsddm_close()
      {
        if(ddmenuitem){
          linkitem.removeClass('top-link-hover');
          ddmenuitem.fadeOut();
        } }

      function jsddm_timer()
      { closetimer = window.setTimeout(jsddm_close, timeout);}

      function jsddm_canceltimer()
      { if(closetimer)
        { window.clearTimeout(closetimer);
          closetimer = null;}}

      $(document).ready(function()
      { $('#jsddm > li').bind('mouseover', jsddm_open);
        $('#jsddm > li').bind('mouseout',  jsddm_timer);
        $('.d_panel').bind('mouseover',  jsddm_canceltimer);
        $('.d_panel').bind('mouseout',  jsddm_timer);
      });

      document.onclick = jsddm_close;
    