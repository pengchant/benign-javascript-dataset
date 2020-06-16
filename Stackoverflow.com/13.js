
    (function (global, oDOC, handler) {
    var head = oDOC.head || oDOC.getElementsByTagName("head");
    function LABjsLoaded() {
        window.fastco_s = window.fastco_s || {};
        window.fastco_s.server="fastcompany";
        window.fastco_s.channel="mic";
        window.fastco_s.pageName="fastcompany:mic:2019:enterprise";
        window.fastco_s.events="event9";
        window.fastco_s.prop1="";
        window.fastco_s.prop2="";
        window.fastco_s.prop3="Most Innovative Companies 2019 enterprise";
        window.fastco_s.prop4="https://www.fastcompany.com/most-innovative-companies/2019/enterprise";
        window.fastco_s.prop5="";
        window.fastco_s.prop6="";
        window.fastco_s.prop7="";
        window.fastco_s.prop8="";
        window.fastco_s.prop9="";
        window.fastco_s.prop10="";
        window.fastco_s.prop11="";
        window.fastco_s.prop13="1";
        window.fastco_s.prop21="anonymous";
        window.fastco_s.prop22="anonymous:fastcompany:mic:2019:enterprise";
        window.fastco_s.prop23="anonymous";
        window.fastco_s.prop28="mic";
        window.fastco_s.prop31="";
        window.fastco_s.prop32="";
        window.fastco_s.prop33="";
        window.fastco_s.eVar49=document.cookie
        .split('; ')
        .filter(c => /abgroup=/.test(c))[0] && document.cookie
        .split('; ')
        .filter(c => /abgroup=/.test(c))[0].includes('abgroup=') ? document.cookie
        .split('; ')
        .filter(c => /abgroup=/.test(c))[0]
        .toString()
        .replace('abgroup=', '') : undefined;
        window.s_code = fastco_s.t();
        if (s_code)document.write(s_code)
      }
      // loading code borrowed directly from LABjs itself
    setTimeout(function () {
        if ("item" in head) { // check if ref is still a live node list
            if (!head[0]) { // append_to node not yet ready
                setTimeout(arguments.callee, 25);
                return;
            }
            head = head[0]; // reassign from live node list ref to pure node ref -- avoids nasty IE bug where changes to DOM invalidate live node lists
        }
        var scriptElem = oDOC.createElement("script"),
            scriptdone = false;
        scriptElem.onload = scriptElem.onreadystatechange = function () {
            if ((scriptElem.readyState && scriptElem.readyState !== "complete" && scriptElem.readyState !== "loaded") || scriptdone) {
                return false;
            }
            scriptElem.onload = scriptElem.onreadystatechange = null;
            scriptdone = true;
            LABjsLoaded();
        };
        scriptElem.src = "//images.fastcompany.net/assets/js/vendor/omniture/omniture-scode-prod.js";
        head.insertBefore(scriptElem, head.firstChild);
    }, 0);

    // required: shim for FF <= 3.5 not having document.readyState
    if (oDOC.readyState == null && oDOC.addEventListener) {
        oDOC.readyState = "loading";
        oDOC.addEventListener("DOMContentLoaded", handler = function () {
            oDOC.removeEventListener("DOMContentLoaded", handler, false);
            oDOC.readyState = "complete";
        }, false);
    }
})(window, document);
    