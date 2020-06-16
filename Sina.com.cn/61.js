
    (function (d, s, id) {
        var n = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        s = d.createElement(s);
        s.id = id;
        s.setAttribute('charset', 'utf-8');
        s.src = '//d' + Math.floor(0 + Math.random() * (9 - 0 + 1)) + '.sina.com.cn/litong/zhitou/sinaads/test/e-recommendation/release/sinaere.js';
        n.parentNode.insertBefore(s, n);
    })(document, 'script', 'sinaere-script');
