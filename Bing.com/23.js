
    $(document).on("ba-in-page-nav.js.loaded",function(){
      var navitems = $("[data-showinnav='1']");
      if(navitems.length>0){
        var container = $("#in-page-nav-links-container");
        var items = $("<ul></ul>");
        container.append(items);
        var index = 0;
        navitems.each(function(){
          var item_li= $("<li></li>");
          items.append(item_li);
          var item_link = $("<a></a>");
          item_li.append(item_link);
            item_link.attr("href","/en-us/h/a/microsoft-advertising/#" + $(this).attr("id"));
            item_link.html($(this).attr("data-text"));
          item_link.attr("data-anchor-id",$(this).attr("id"));
          item_link.attr("data-index",index);
          index++;
        });
        $('.in-page-nav[data-inpagenav-initialized!=1]').each(function () {
            $(this).attr("data-inpagenav-initialized","1");
            var pageNav = new baInPageNav(this); 
        });
      }else{
        $("#in-page-nav").remove();
      }
    });
  