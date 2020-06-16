
        setSize()

        function gqs(name) {
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          if (r != null) {
            return unescape(r[2])
          }
          return null
        }

        function getCookie(name) { 
          var reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)")
          var r = document.cookie.match(reg)
          return r ? unescape(r[2]) : null
        } 

        var vd = window.__INITIAL_STATE__ && window.__INITIAL_STATE__.videoData
        if(vd && vd.aid) {
          if(vd.embedPlayer) {
            var fp = gqs('p') || gqs('page') || null
            var p = fp ? fp - 1 : 0
            var player = {
              aid: vd.aid,
              bvid: vd.bvid,
              cid: (vd.pages[p] && vd.pages[p].cid) || vd.pages[0].cid,
              attribute: vd.attribute
            }
            var show_bv = window.__BILI_CONFIG__ && window.__BILI_CONFIG__.show_bv ? 1 : 0
            EmbedPlayer("player", "//static.hdslb.com/play.swf", "cid=" + player.cid + "&aid=" + player.aid + "&bvid=" + player.bvid + "&attribute=" + player.attribute + "&show_bv=" + show_bv)
          }else if(vd.embed) {
            document.querySelector("#bofqi").innerHTML = vd.embed
          }
        }
      