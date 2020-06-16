
  // 直出代码
  var waitForEl = function(selector, callback) {
    if ($(selector).length) {
      callback()
    } else {
      setTimeout(function() {
        waitForEl(selector, callback);
      }, 100)
    }
  }

  waitForEl('#settleup .dropdown-layer', function() {
    $('#settleup .dropdown-layer').remove()
    // work the magic
  })
