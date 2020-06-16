
(function(){
	var illjsImg = "https://s.360.cn/wzdh/behavior.html?ns=noticebar&act=illjs";
	var cookieBoy={};window.qboot&&qboot.cookie?(cookieBoy.set=qboot.cookie.set,cookieBoy.get=qboot.cookie.get):(cookieBoy.set=function(e,t,n){n=n||{};var r=n.expires;"number"==typeof n.expires&&(r=new Date,r.setTime(r.getTime()+n.expires)),document.cookie=e+"="+t+(n.path?"; path="+n.path:"")+(r?"; expires="+r.toGMTString():"")+(n.domain?"; domain="+n.domain:"")+(n.secure?"; secure":"")},cookieBoy.get=function(e){var t=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),n=t.exec(document.cookie);return n?n[2]||null:null})
	var g = function(id){return document.getElementById(id) ;};
	//浏览器支持js，但是业务代码挂掉的情况
	if(cookieBoy.get('illbar-noexist')==null){
		document.write('<style>#doc-view{top:42px;}#pushbar-illjs{display:block;}</style><img src="' + illjsImg + '" style="display:none;"/>');
		g("illbar-close").onclick = function () {
			g("pushbar-illjs").style.display = "none";
			g("doc-view").style.top = "0";
			cookieBoy.set("illbar-noexist",1,{expires:86400000});
		}
	}
})();
