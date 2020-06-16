;!function() {
var w=window,d=document;var footer=d.getElementById('J-layout-footer');var ls=d.getElementById('J-layout').style;onresize();if(w.addEventListener)w.addEventListener('resize',onresize);function onresize(){var height=footer.offsetHeight;ls.paddingBottom=height+'px';ls.marginBottom=0-height+'px';}
}();