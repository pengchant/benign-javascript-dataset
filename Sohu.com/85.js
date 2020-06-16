
  (function () {
    var initADM = function () {
      adv.util.poll(function () {
        return adv.adCenter.loader.queueing === false;
      }, function () {
        InitSchedule();
        DoSchedule();
      }, function () {
        InitSchedule();
        DoSchedule();
      }, 15000);
    }
    var script = document.getElementById('scriptadvcore');
    if(window.adv){
      initADM();
    }
    else if(script){
      script.onload = script.onreadystatechange = function () {
        if (script.ready) {
          return false;
        }
        if (!script.readyState || script.readyState == "loaded" || script.readyState == 'complete') {
          script.onreadystatechange = null;
          script.ready = true;
          initADM();
        }
      }
    }
  })()
 