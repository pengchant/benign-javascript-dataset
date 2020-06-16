
                  var ua = navigator.userAgent;
                  var url = location.href;
                  var title = document.title;
                  var isSymbian = /(?:SymbianOS)/.test(ua) || /(?:Windows Phone)/.test(ua);
                  var isAndroid = /(?:Android)/.test(ua);
                  var isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (/(?:Firefox)/.test(ua) && /(?:Tablet)/.test(ua));
                  var isPhone = /(?:iPhone)/.test(ua) && !isTablet;
                  var isPc = (!isPhone && !isAndroid && !isSymbian) ? 1 : 2;
                  $.ajax({
                    url: "//data.bilibili.com/v/web/web_page_view?mid=&fts=1503567254&url=" + url + "&proid=1&ptype=" + isPc + "&module=promote&title=" + title + "&ajaxtag=&ajaxid=&page_ref=&_=1539165545627",
                    type: "GET",
                    dataType: "json",
                    xhrFields: {
                      withCredentials: true
                    }
                  });

                  $(function(){
                    var activityId = '';
                    if (activityId) {
                      var replyHash = location.hash.match(/^#reply(\d+)/);
                      var replyId = replyHash ? replyHash[1] : null;
                      typeof window.bbComment === 'function' &&
                      new window.bbComment(
                        '.comm',
                        activityId,
                        activityId > 100000 ? 1 : 4,
                        null,
                        replyId > 0 ? replyId : ''
                      );
                    }
                  });