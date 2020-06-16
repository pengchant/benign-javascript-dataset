function getQuery(search) {
    search = search || window.location.search;
    search = search.substring(1);
    var fields = search.split('&');
    var res = {};
    for (var i = 0; i < fields.length; i++) {
      var data = fields[i].split('=');
      var value = data[1] ? data[1].replace(/\+/g, ' ') : '';
      res[decodeURIComponent(data[0])] = decodeURIComponent(value);
    }
    return res;
  }