
  
  (function() {
    var host = window.location.host;
    
    if (host == 'www.aliyun.com') {
      var spmSearch = getQueryString('spm', window.location.search)
      if(window.location.search && spmSearch){
        var moduleInfoTargetUrl = "https://www.aliyun.com/service/customer-case-detail";
        var targetUrl = getLocation(moduleInfoTargetUrl);
        var urlSearch = targetUrl.search;
        var newSearch
        if(urlSearch) {
          urlSearch = urlSearch + '&spm=' + spmSearch;
        } else {
          urlSearch = urlSearch + '?spm=' + spmSearch;
        }
        if(targetUrl.pathname[0]!='/'){
          targetUrl.pathname = targetUrl.pathname + '/';
        }
        var origin =  window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
        var newUrl = origin + targetUrl.pathname + urlSearch + targetUrl.hash;
        window.location.href = newUrl;
      } else {
        window.location.href = "https://www.aliyun.com/service/customer-case-detail";
      }
    }
    

    function getLocation(href) {
      var l = document.createElement("a");
      l.href = href;
      return l;
    };

    function getQueryString(name, search) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    }

  })();
  
  