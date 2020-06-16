
          yp.ready(function() {
            'use strict'
            var oFooterPage = {
              _ui: {
                $next: $('#js-foot-next'),
                $pre: $('#js-foot-pre'),
                $contentUl: $('#js-foot-content')
              },
              init: function() {
                this.bindEvent();
              },
              bindEvent: function() {
                var self = this;
                var _ui = self._ui;
                var oMaxWidth = _ui.$contentUl.width() - 288;

                _ui.$next.on('click',function (e) {
                  e.preventDefault();
                  var left = Number(_ui.$contentUl.css('left').replace('px',''));
                  if(left > -oMaxWidth){
                    _ui.$contentUl.css('left',left - 288)
                  }
                })

                _ui.$pre.on('click',function (e) {
                  e.preventDefault();
                  var left = Number(_ui.$contentUl.css('left').replace('px',''));
                  if(left < 0){
                    _ui.$contentUl.css('left',left + 288)
                  }
                })
              }
            }
            oFooterPage.init();
          })
        