
  (function setMeshBreakPoint(w, d) {
    var g = d.getElementById('gw-card-layout'),
        WS = 1239,
        wdh =  w.innerWidth || d.documentElement.clientWidth || d.body.clientWidth,
        bp = wdh <= WS ? "sm" : "ws";
    g && g.setAttribute('data-grid-breakpoint', bp);
  }(window, document));
