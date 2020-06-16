
      var parselyPreload = { eventQueue: [], loaded: false };

      (function(s, p, d) {
      var h=d.location.protocol, i=p+"-"+s,
      e=d.getElementById(i), r=d.getElementById(p+"-root"),
      u=h==="https:"?"d1z2jf7jlzjs58.cloudfront.net"
      :"static."+p+".com";
      if (e) return;
      e = d.createElement(s); e.id = i; e.async = true;
      e.src = h+"//"+u+"/p.js"; r.appendChild(e);
      })("script", "parsely", document);

      function getCookie(e){for(var n=e+"=",t=decodeURIComponent(document.cookie).split(";"),o=0;o<t.length;o++){for(var r=t[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(n))return r.substring(n.length,r.length)}return""}
      const ab = getCookie('X-abtest') || 'unknown';

      window.PARSELY = window.PARSELY || {
        autotrack: false,
        onload: function() {
          parselyPreload.loaded = true;
          PARSELY.updateDefaults({
            data: {
              ab: ab
            }
          });
          PARSELY.beacon.trackPageView();
        }
      };
    