
var mt = 0;
    var mydiv = document.getElementById("mydiv");
    var mt = mydiv.offsetTop;
	var top_margin=document.getElementById("start_top");
	var height_margin=$(".topad").height()+"px"
    window.onscroll = function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t > mt) {
			top_margin.style.marginTop="90px";
            mydiv.style.position = "fixed";
            mydiv.style.top = "0";
mydiv.style.left = "0";
mydiv.style.opacity = "0.95";
mydiv.style.width = "100%";

        }
        else {
            mydiv.style.position = "relative";
mydiv.style.width = "100%";
			top_margin.style.marginTop="0";
        }
    }        
