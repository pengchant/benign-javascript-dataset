function getIEVersion(){var e=99;if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent;null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t)&&(e=parseFloat(RegExp.$1))}return e}function setSize(){var e=window.isWide,t=350,i=document.body.offsetHeight,o=document.body.offsetWidth,n=parseInt(16*(.743*i-108.7)/9),d=o-152-t,r=d<n?d:n;r<638&&(r=638),1280<r&&(r=1280);var s,l=r+t;s=window.hasBlackSide&&!window.isWide?Math.round((r-14+(e?t:0))*(9/16)+46)+96:Math.round((r+(e?t:0))*(9/16))+46;var a="0 "+(o<l+152?76:0),c=document.querySelector(".v-wrap"),u=document.querySelector(".l-con"),w=document.querySelector("#bofqi"),y=document.querySelector("#danmukuBox"),p=document.querySelector("#playerWrap");c&&(c.style.width=l+"px",c.style.padding=a+"px"),w&&(w.style.width=l-(e?0:t)+"px",w.style.height=s+"px"),u&&(u.style.width=l-t+"px"),e?(y&&(y.style.height=s-0+"px"),p&&(p.style.height=s-0+"px"),w&&(w.style.position="relative")):(y&&(y.style.height="auto"),p&&(p.style.height="auto"),w&&(w.style.position="static"))}getIEVersion()<=9&&(document.body.innerHTML="<div class='ie-fix'><div class='title'>为了保障你的账号安全和最佳预览体验，播放页已不支持IE9及以下IE版本浏览器访问，建议你使用Chrome等高级浏览器或升级到IE最新版本浏览器。</div></div>"),window.addEventListener("resize",function(){setSize()}),window.PlayerAgent={player_widewin:function(){window.scrollTo(0,55),window.isWide=!0,setSize()},player_fullwin:function(e){window.scrollTo(0,0),window.isWide=!1,setSize()},toggleBlackSide:function(e){window.hasBlackSide=e,setSize()}}