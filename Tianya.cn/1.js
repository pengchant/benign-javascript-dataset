
var referrerURL = document.domain;
if (referrerURL == 'tianya.cn'){
	window.location.href="//www.tianya.cn";}
var tyHost="www.tianya.cn";
if(tyHost!=window.top.location.host){
    window.top.location="http://"+tyHost;
}
