
(function() {
    var doc = document, con = doc.getElementById('content') || doc,
        as = con.getElementsByTagName('a'), len = as.length, i = 0, a,
        SPECIALS = /([.\/?])/g,
        unsafeUrls = [
            'member1.taobao.com/member/loginByIm.do',
            'jp.rd.yahoo.com/SIG=10uaccr0v/D=maps/Y=YAHOO/EXP=1288992407/'
        ],
        REG = new RegExp('(' + unsafeUrls.join(')|(').replace(SPECIALS, '\\$1') + ')');
    
    for(; i < len; ++i) {
        a = as[i];
        if (REG.test(a.href)) {
            a.href = '#';
        }
    }
})();
