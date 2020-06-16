
ready(function () {
var isCDNblocked = readCookie("_zm_cdn_blocked");
var blk = "unlog_blk";
var unblk = "unlog_unblk";
if (isCDNblocked === null || (isCDNblocked !== blk && isCDNblocked !== unblk)) {
var image = new Image();
delCookie("_zm_cdn_blocked");
var timer = setTimeout(function () {
image.onload = null;
createCookie("_zm_cdn_blocked", blk, 0.25);
window.location.reload(true);
}, 10000);
image.onload = function () {
clearTimeout(timer);
createCookie("_zm_cdn_blocked", unblk, 0.25);
};
image.onerror = function () {
clearTimeout(timer);
createCookie("_zm_cdn_blocked", blk, 0.25);
window.location.reload(true);
};
var url = document.getElementById("detect").value;
image.src = url;
}
});
function ready(callback) {
if (document.readyState !== 'loading') callback();
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
else document.attachEvent('onreadystatechange', function () {
if (document.readyState === 'complete') callback();
});
}
function createCookie(name, value, days) {
if (days) {
var date = new Date();
date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
var expires = "; expires=" + date.toUTCString();
}
else var expires = "";
document.cookie = name + "=" + value + expires + "; path=/; secure=true; domain=" + ".zoom.us";
}
function readCookie(name) {
var equal = name + "=";
var ca = document.cookie.split(';');
for (var i = 0; i < ca.length; i++) {
var c = ca[i];
while (c.charAt(0) == ' ') c = c.substring(1, c.length);
if (c.indexOf(equal) == 0) return c.substring(equal.length, c.length);
}
return null;
}
function delCookie(name) {
createCookie(name,"",-1);
}
