
  var hmenu = document.getElementById("nav-hamburger-menu");
  hmenu.setAttribute("href", "javascript: void(0)");
  window.navHamburgerMetricLogger = function() {
    if (window.ue && window.ue.count) {
      var metricName = "Nav:Hmenu:IconClickActionPending";
      window.ue.count(metricName, (ue.count(metricName) || 0) + 1);
    }
    window.$Nav && $Nav.declare("navHMenuIconClicked",!0);
  };
  hmenu.addEventListener("click", window.navHamburgerMetricLogger);
  window.$Nav && $Nav.declare('hamburgerMenuIconAvailableOnLoad', false);
  window.$Nav && $Nav.declare('hamburgerMenuWeblabTreatment', 'T1');
