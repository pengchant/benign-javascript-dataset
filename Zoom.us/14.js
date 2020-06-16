
/*Past Due Invoice Message*/
var cookieLang = $.cookie('_zm_lang');
if (cookieLang == "" || cookieLang == null) {
$.cookie('_zm_lang', "en-US", {expires: 365, path: '/', domain: ".zoom.us", secure: true});
}
