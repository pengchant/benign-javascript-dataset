
    (function() {
    if (document.body) {
      var dpr = window.devicePixelRatio > 1? 2: 1; // 只考虑1，2
      var bodyCls = document.body.className;
      document.body.className = bodyCls + ' dpr-' + dpr;
    }
  }());
