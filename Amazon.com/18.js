
      try {
        if(window.navmet===undefined)window.navmet=[]; if(window.$Nav) { $Nav.when('$', 'config', 'flyout.accountList', 'SignInRedirect', 'dataPanel').run('accountListRedirectFix', function ($, config, flyout, SignInRedirect, dataPanel) { if (!config.accountList) { return; } flyout.getPanel().onData(function (data) { if (SignInRedirect) { var $anchors = $('[data-nav-role=signin]', flyout.elem()); $.each($anchors, function(i, anchorEl) {SignInRedirect.setRedirectUrl($(anchorEl), null, null);});}});}); $Nav.when('$').run('defineIsArray', function(jQuery) { if(jQuery.isArray===undefined) { jQuery.isArray=function(param) { if(param.length===undefined) { return false; } return true; }; } }); $Nav.declare('config.cartFlyoutDisabled', 'true'); $Nav.when('$','$F','config','logEvent','panels','phoneHome','dataPanel','flyouts.renderPromo','flyouts.sloppyTrigger','flyouts.accessibility','util.mouseOut','util.onKey','debug.param').build('flyouts.buildSubPanels',function($,$F,config,logEvent,panels,phoneHome,dataPanel,renderPromo,createSloppyTrigger,a11yHandler,mouseOutUtility,onKey,debugParam){var flyoutDebug=debugParam('navFlyoutClick');return function(flyout,event){var linkKeys=[];$('.nav-item',flyout.elem()).each(function(){var $item=$(this);linkKeys.push({link:$item,panelKey:$item.attr('data-nav-panelkey')});});if(linkKeys.length===0){return;} var visible=false;var $parent=$('<div class=\'nav-subcats\'></div>').appendTo(flyout.elem());var panelGroup=flyout.getName()+'SubCats';var hideTimeout=null;var sloppyTrigger=createSloppyTrigger($parent);var showParent=function(){if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;} if(visible){return;} var height=$('#nav-flyout-shopAll').height(); $parent.css({'height': height});$parent.animate({width:'show'},{duration:200,complete:function(){$parent.css({overflow:'visible'});}});visible=true;};var hideParentNow=function(){$parent.stop().css({overflow:'hidden',display:'none',width:'auto',height:'auto'});panels.hideAll({group:panelGroup});visible=false;if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;}};var hideParent=function(){if(!visible){return;} if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;} hideTimeout=setTimeout(hideParentNow,10);};flyout.onHide(function(){sloppyTrigger.disable();hideParentNow();this.elem().hide();});var addPanel=function($link,panelKey){var panel=dataPanel({className:'nav-subcat',dataKey:panelKey,groups:[panelGroup],spinner:false,visible:false});if(!flyoutDebug){var mouseout=mouseOutUtility();mouseout.add(flyout.elem());mouseout.action(function(){panel.hide();});mouseout.enable();} var a11y=a11yHandler({link:$link,onEscape:function(){panel.hide();$link.focus();}});var logPanelInteraction=function(promoID,wlTriggers){var logNow=$F.once().on(function(){var panelEvent=$.extend({},event,{id:promoID});if(config.browsePromos&&!!config.browsePromos[promoID]){panelEvent.bp=1;} logEvent(panelEvent);phoneHome.trigger(wlTriggers);});if(panel.isVisible()&&panel.hasInteracted()){logNow();}else{panel.onInteract(logNow);}};panel.onData(function(data){renderPromo(data.promoID,panel.elem());logPanelInteraction(data.promoID,data.wlTriggers);});panel.onShow(function(){var columnCount=$('.nav-column',panel.elem()).length;panel.elem().addClass('nav-colcount-'+columnCount);showParent();var $subCatLinks=$('.nav-subcat-links > a',panel.elem());var length=$subCatLinks.length;if(length>0){var firstElementLeftPos=$subCatLinks.eq(0).offset().left;for(var i=1;i<length;i++){if(firstElementLeftPos===$subCatLinks.eq(i).offset().left){$subCatLinks.eq(i).addClass('nav_linestart');}} if($('span.nav-title.nav-item',panel.elem()).length===0){var catTitle=$.trim($link.html());catTitle=catTitle.replace(/ref=sa_menu_top/g,'ref=sa_menu');var $subPanelTitle=$('<span class=\'nav-title nav-item\'>'+ catTitle+'</span>');panel.elem().prepend($subPanelTitle);}} $link.addClass('nav-active');});panel.onHide(function(){$link.removeClass('nav-active');hideParent();a11y.disable();sloppyTrigger.disable();});panel.onShow(function(){a11y.elems($('a, area',panel.elem()));});sloppyTrigger.register($link,panel);if(flyoutDebug){$link.click(function(){if(panel.isVisible()){panel.hide();}else{panel.show();}});} var panelKeyHandler=onKey($link,function(){if(this.isEnter()||this.isSpace()){panel.show();}},'keydown',false);$link.focus(function(){panelKeyHandler.bind();}).blur(function(){panelKeyHandler.unbind();});panel.elem().appendTo($parent);};var hideParentAndResetTrigger=function(){hideParent();sloppyTrigger.disable();};for(var i=0;i<linkKeys.length;i++){var item=linkKeys[i];if(item.panelKey){addPanel(item.link,item.panelKey);}else{item.link.mouseover(hideParentAndResetTrigger);}}};});};
      } catch ( err ) {
        if ( window.$Nav ) {
          window.$Nav.when('metrics', 'logUeError').run(function(metrics, log) {
            metrics.increment('NavJS:AboveNavInjection:error');
            log(err.toString(), {
              'attribution': 'rcx-nav',
              'logLevel': 'FATAL'
            });
          });
        }
      }
    