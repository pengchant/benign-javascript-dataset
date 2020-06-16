
(function () {
var oBody = document.body;
var sOverflow = oBody.style.overflow;
var sUa = (window.navigator || {}).userAgent || '';
var m = sUa.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/) || [];
var nVersion = +m[1] || +m[2] || 0;
nVersion && nVersion <= 8 && _fShowMask();
function _fShowMask() {
oBody.style.overflow = 'hidden';
var nWidth = window.document.documentElement.clientWidth;
var nHeight = window.document.documentElement.clientHeight;
var nTop = ('pageYOffset' in window ? window.pageYOffset : document.documentElement.scrollTop) || 0;
var sHtml = [
'<div style="position:absolute;left:0;top:' + nTop + 'px;z-index:99999;width:' + nWidth + 'px;height:' + nHeight + 'px;">',
'<div style="position:absolute;left:0;top:0;width:100%;height:100%;background:#000;opacity:0.5;filter:alpha(opacity=50);"></div>',
'<div class="pop-box" style="width:800px;z-index:100000;left:' + (nWidth - 800) / 2 + 'px;top:' + Math.max(0, (nHeight - 624) / 2) + nTop + 'px;">',
'<div class="pop-title"><h1>浏览器版本过低提示</h1><a href="javascript:void(0);" onclick="closeIE8GlobalMask()" class="pop-close" title="关闭"></a></div>',
'<div class="pop-content clearfix">',
'<div class="pop-subject-tips-wrapper">',
'<a href="javascript:void(0);"><img src="//static.nowcoder.com/fe/style/images/common/res/tips/13.png"></a>',
'<div class="pop-exit-main">你使用的浏览器版本过低，无法正常访问牛客<br />请使用牛客APP或更换浏览器。</div>',
'<div class="pop-download-browser">',
'<ul class="pop-browser-list">',
'<li><p>下载牛客APP</p><div class="pic"><img src="https://uploadfiles.nowcoder.com/app/app_download.png"></div></li>',
'<li><a href="https://static.nowcoder.com/b/i/googlechrome74_32.exe" target="_blank"><p>下载Chrome浏览器</p><div class="pic"><img src="//static.nowcoder.com/images/res/browser/chrome.png"></div></a></li>',
'<li><a href="https://www.firefox.com.cn/download/#more" target="_blank"><p>下载Firefox浏览器</p><div class="pic"><img src="//static.nowcoder.com/images/res/browser/firefox.png"></div></a></li>',
'</ul>',
'<a href="javascript:void(0);" onclick="closeIE8GlobalMask()" class="link-green">我知道访问会出错，但是我还要继续用这个浏览器浏览 &gt;&gt;</a>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>'].join('');
var oDv = document.createElement('div');
oDv.innerHTML = sHtml;
oBody.appendChild(oDv);
window.closeIE8GlobalMask = function () {
oBody.removeChild(oDv);
oBody.style.overflow = sOverflow;
_fShowBar();
};
}
function _fShowBar() {
var oDv = document.createElement('div');
oDv.innerHTML = '<div class="tip-block-box" onclick="closeIE8GlobalBar()" style="position:fixed;left:0;top:54px;width:100%;z-index:99999;"><div class="tip-block">你使用的浏览器版本过低，无法正常访问牛客，请使用牛客APP或更换浏览器，<a href="javascript:void(0);">点击查看详情</a>。</div></div>';
oBody.appendChild(oDv);
window.closeIE8GlobalBar  = function () {
oBody.removeChild(oDv);
_fShowMask();
};
}
})();
