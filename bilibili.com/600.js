
      !function(){var c=window.navigator.userAgent;var l=/Windows\s*Phone|Android|iPhone|iPad|PlayBook|Mobile|Tablet/.test(c);var g=false;var p=/(https?:)?\/\/(uat-)?(i|s)\d\.hdslb\.com\/bfs\//i;try{g=document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")===0}catch(e){g=false}function b(){var t=this;this.init();var s;function r(){clearTimeout(s);s=setTimeout(function(){return t.scroll()},10)}window.addEventListener("scroll",r);this.onscroll=r;this.removeScroll=function(){window.removeEventListener("scroll",r)}}b.prototype={domList:[],init:function o(){this.getLoadDom();this.scroll()},scroll:function n(){var v=document.body;var w=v.scrollTop||document.documentElement.scrollTop;var r=window.innerHeight||document.documentElement.clientHeight;var u=this.domList;var t=u.length;var s=-1;var x=function x(){var A=u[s];var y=A.dom;if(y){var z=k(y);var B=y.clientHeight||y.scrollHeight;if(z+B>=w-r*0.5&&z<=w+r*1.5||y.offsetParent===null){j(A.url,function(C){if(typeof C==="string"){console.warn(A.url,"加载失败");return false}if(A.tagName==="img"){y.src=A.url}else{y.style.backgroundImage="url(".concat(A.url,")")}});u.splice(s,1);s-=1;t-=1}}};while(++s<t){x()}if(t.length<=0){this.removeScroll()}},getLoadDom:function d(){var v=this;var w=document.body;var x=Array.prototype.slice.call(w.querySelectorAll(".t-lazyload-image,[data-src]"));var r=x.length;if(r>0){var u=function u(A){var C=x[A];var D=C.getAttribute("data-src");var y=C.getAttribute("data-bfs");f(C,"t-lazyload-image");C.removeAttribute("data-src");C.removeAttribute("data-bfs");if(!D){return"continue"}var z=[];if(y){var B=y.split("_");B.forEach(function(F){var E=F.substr(F.length-1,1);if(["h","w","q","e","s"].indexOf(E[0])>=0){z.push(F)}})}v.domList.push({url:a(D,z.join("_")),tagName:C.tagName.toLowerCase(),dom:C})};for(var t=0;t<r;t+=1){var s=u(t);if(s==="continue"){continue}}}}};var m=/\/[^@]+\.([a-z]+)$/i;function a(s,u){if(!p.test(s)){return s}var x=s.split("?");var v=x.shift();var t=v.match(m);if(!(t&&t.length>0)){return s}var z=t[1];var y=(l||u)&&g;var r=/png|jpe?g|webp/.test(z);var w=x.length>0?"?".concat(x.join("?")):"";if(r&&(u||y)){return"".concat(v,"@").concat(u,".").concat(y?"webp":z).concat(w)}return s}function k(t){var r=0;var s=t;while(s!==null){r+=s.offsetTop;s=s.offsetParent}return r}function f(s,r){s.className=s.className.replace(r,"")}var q={};function j(s,r){if(q[s]){return r&&r()}var t=new Image();t.onload=function(){r&&r();q[s]=true;t=null};t.onerror=function(){r&&r("error")};t.src=s}if(!window.PlatLazyLoad){window.PlatLazyLoad=new b()}var i=window.__initialState.firstScreenResource;var h=i.length;i.forEach(function(r){j(a(r,[]),function(){h--;if(h<=0&&window.performance&&window.performance.timing){var s=new Date().getTime();window.__activityTiming={firstscreenfinish:s};window.performance.timing.firstscreenfinish=s}})})}();
    