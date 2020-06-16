
    window.g_config = window.g_config || {};
    window.g_config.appStartTime = new Date().valueOf();
    KISSY.use('sf/p/index/',function(S,Page){
        Page.init();
    });
