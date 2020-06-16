
  (function() {
    if (!NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function(action) {
        for(var i = 0, l = this.length; i < l; i++) {
          action(this[i]);
        }
      };
    }
    var q = document.querySelectorAll.bind(document);
    var on = function(dom, event, cb) {
      if (!dom) return;
      if ('length' in dom) {
        return dom.forEach(function(elem){
          on(elem, event, cb);
        });
      }
      dom.addEventListener(event, cb);
    };
    var removeEvent = function( dom, event, cb ) {
      if (!dom) return;
      if ('length' in dom) {
        return dom.forEach(function (elem) {
          removeEvent(elem, event, cb);
        });
      }
      dom.removeEventListener(event, cb);
    };
    var hasClass = function(dom, className) {
      if (!dom) return;
      if ('length' in dom) {
        for(var i = 0, l = dom.length; i < l; i++){
          if (hasClass(dom[i], className)) return true;
        }
        return false;
      }
      if (dom.classList) return dom.classList.contains(className);
      return dom.className.split(' ').indexOf(className) >= 0;
    };
    var addClass = function(dom, className) {
      if (!dom) return;
      if ('length' in dom) {
        return dom.forEach(function(elem){
          addClass(elem, className);
        });
      }
      if (dom.classList) return dom.classList.add(className);
      dom.className += ' ' + className;
    };
    var removeClass = function(dom, className) {
      if (!dom) return;
      if ('length' in dom) {
        return dom.forEach(function(elem){
          removeClass(elem, className);
        });
      }
      if (dom.classList) return dom.classList.remove(className);

      var length = className.length;
      if (dom.className.indexOf(className + ' ') === 0) return dom.className = dom.className.substr(length);
      if (dom.className.indexOf(' ' + className) === dom.className.length - length - 1) return dom.className = dom.className.substr(0, dom.className.length - length - 1);
      
      console.log(dom.className);
      return dom.className = dom.className.replace(' ' + className + ' ', '');
    };
    var parents = function(dom, className) {
      if (!dom) return null;
      var p = dom.parentNode;
      while(p) {
        if (hasClass(p, className)){
          return p;
        }
        p = p.parentNode;
      }
      return p;
    };
    // 点击登录
    on(q('#open-menu-login'), 'click', function(e){
      var curUrl= window.loginGotoUrl || document.location.href;
      var loginUrl = "https://auth.alipay.com/login/ant_sso_index.htm?goto=" + encodeURIComponent(curUrl);
      window.location.href=loginUrl;
      e.preventDefault();
    });
    //点击退出
    on(q('.logout-link'), 'click', function(e){
      if (location.host === 'www.ant-open.com') return;

      var logoutUrl=encodeURIComponent(document.location.href);
      window.location.href="https://auth.alipay.com/login/logout.htm?goto=" + logoutUrl;
      e.preventDefault();
    });
    // 判断子菜单为当前页面，一级导航高亮显示
    q('.open-submenu-item').forEach(function(item){
      if(hasClass(item, 'selected')){
        var parent = parents(item, 'open-menu-item');
        parent && addClass(parent, 'selected');
        parent && addClass(parent, 'can-disabled-select');
      }
    });

    var SearchFormList = q('#open-search-form');
    var searchClick = function() {
      if (SearchFormList.length) {
        SearchFormList[0].submit();
      }
    }

    // 点击搜索出现搜索框
    on(q('#nav-search'), 'click', function(event){
      addClass(q('#open-nav-right-menu'), 'open-search-mode');
      addClass(q('#nav-search'), 'open-search-icon');
      q('#J_SearchKeyword')[0].focus();
      
      on(q('#nav-search'), 'click', searchClick)
    });

        var ENV = (function() {
      var host = window.location.host;
      var env = 'prod';

      if (host.indexOf('test.alipay.net') >= 0) {
        env = 'test';
      } else if (host.indexOf('.alipay.net') >= 0) {
        env = 'dev';
      }
      return env;
    })();

    var hosts = {
      dev: 'http://opendocstwa.stable.alipay.net',
      test: 'http://opendocstwa-afx-4405.gz00a.test.alipay.net',
      prod: 'https://opendocs.alipay.com',
    };

    var highLight = function(content,keyWord) {
      var keyWordArr = keyWord.replace(/[\s]+/g,' ').split(' ');
      var re;
      for(var n = 0; n < keyWordArr.length; n ++) {
        re = new RegExp(""+keyWordArr[n]+"","gmi");
        content = content.replace(re,'<span data-word="'+ content +'" style="color:#027AFF;">'+ keyWordArr[n] +'</span>');
      }
      return content;
    }

    var seachWordList = q('#J_seachWordList');
    var seachWordContent = function(data) {
      if (seachWordList.length) { 
        seachWordList[0].innerHTML = data || '';
      }
    }

    var getSeacherWords = function(value) {
      ajax({
        url: hosts[ENV] + '/api/search/assciative-word',
        timeOut:5000,
        type: "get",
        data: {
          word: value,
        },
        success: function(str) {
          var res = JSON.parse(str);
          if(res.success){
            var list = res.data || [];
            var listContent = '';

            seachWordContent();

            removeClass(q('#J_seachWordList'), 'nav-search-word-active');
            if (list.length) {
              for(var i = 0; i < list.length; i ++){
                var listDom = highLight(list[i], value);
                listContent += '<li class="nav-search-word-item" data-word="'+ list[i] +'">'+ listDom +'</li>';
              }

              seachWordContent(listContent);

              addClass(q('#J_seachWordList'), 'nav-search-word-active');
            }
          } else {
            console.log(res.resultMessage);
          }
        },
        error: function (resultCode, success, resultMessage) {
          console.log(resultMessage);
        }
      });
    }

    on(q('#J_seachWordList'), 'click', function(e){
      var word = e.target.getAttribute('data-word');
      var searchKeyWord = q('#J_SearchKeyword');
      if(e.target && e.target.nodeName === 'LI') {
        if (searchKeyWord.length) {
          searchKeyWord[0].value = word;
        }
        searchClick();
      }
    });

    on(q('#J_SearchKeyword'), 'input', function(e){
      var value =  e.target.value;
      if (value) {
        getSeacherWords(value);
      } else {
        seachWordContent();
        removeClass(q('#J_seachWordList'), 'nav-search-word-active');
      }
    });
    on(q('#J_SearchKeyword'), 'propertychange', function(e){
      var value =  e.target.value;
      if (value) {
        getSeacherWords(value);
      } else {
        seachWordContent();
        removeClass(q('#J_seachWordList'), 'nav-search-word-active');
      }
    });

    //点击其他区域搜索框消失
    on(q('#nav-search-input'), 'click', function(event){
      event.stopPropagation();
    });
    on(document, 'click', function(){
      removeEvent(q('#nav-search'), 'click', searchClick);
      removeClass(q('#open-nav-right-menu'), 'open-search-mode');
      removeClass(q('#J_seachWordList'), 'nav-search-word-active');
      removeClass(q('#nav-search'), 'open-search-icon');
      seachWordContent();
    });
  }());
