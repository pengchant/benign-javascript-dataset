
    (function () {
      // change menu on the basis of the schema
      var $target = $('#J_topbar_2016');
      var headerLogic = {
        transparent: function () {
          $target.removeClass('no-change');
        },
        black: function () {

        },
        small:function(){
          $target.find('.common-topbar-bottom').remove();
        }
      };
      var type = "transparent";
      if (headerLogic[type]) {
        headerLogic[type]();
      }
    })()

  