
var h1fs = $.trim($('#fonts').html());
var h1cl = $.trim($('#colors').html());
var hltype = $.trim($('#headType').html());
var headarea1 = $("#hpart1");
var headarea2 = $("#hpart1_a");
var headarea3 = $("#hpart1_b");
var headarea4 = $("#hpart1_c");

//设置颜色字号
if (h1fs.indexOf("px") >= 0) {
	$('#headArea h1 a,#headArea_a h1 a,#headArea_b h1 a,#headArea_c h1 a').css({
		"font-size": h1fs
	});
}
if (h1cl.indexOf("red") >= 0) {
	$('#headArea h1 a,#headArea_a h1 a,#headArea_b h1 a,#headArea_c h1 a').css({
		"color": "#db000a"
	});
	$('#headLine .hots a,#headLine_a .hots a,#headLine_b .hots a,#headLine_c .hots a').css({
		"color": "#db000a"
	});
}

//设置显示的区块
if(hltype==1){
	//头条可2行或更多，右侧有专题图
	$("#headLine .part1").hide();
	headarea2.show();
}else if(hltype==2){
	//头条可3行或更多，右侧有专题图竖向排列
	$("#headLine .part1").hide();
	headarea3.show();
}else if(hltype==3){
	//头条可3行或更多，右侧有专题图竖向排列
	$("#headLine .part1").hide();
	headarea4.show();
}else{
	headarea1.show();
}





/*switch (hltype) {
	case 1:
		//头条可2行或更多，右侧有专题图
		//console.log("hltypehltype"+hltype)
		headarea1.hide();
		headarea2.show();
		headarea3.hide();
		break
	case 2:
		//头条可2行或更多，右侧有专题图
		headarea1.hide();
		headarea2.hide();
		headarea3.show();
		break
	default:							
		break
}*/


               

/* 侯 头条代码

! function(window, document) {
                   (function() {
                       if (String.prototype.trim) return;
                       String.prototype.trim = function trim(s) {
                           return this.replace(/(^\s*)|(\s*$)/g, "");
                       };
                   })()
                   var hpart1 = document.querySelector("#hpart1"),
                       hpart1_class = hpart1.getAttribute("class") || "",
                       syhistoryid = hpart1.querySelector("#syhistoryid"),
                       syhistoryid_class = syhistoryid.getAttribute("class") || "",
                       hots = hpart1.querySelector(".hots"),
                       hots_class = hots.getAttribute("class") || "",
                       moreNews = hpart1.querySelector("#headLine .hots .moreNews"),
                       moreNews_class = moreNews.getAttribute("class") || "",
                       tempData = parseInt(syhistoryid.getAttribute("data-fontsize").trim()),
                       needSmallFont = isNaN(tempData) === true ? 0 : tempData,
                       big_tit_img = document.createElement("img"),
                       big_tit_a = document.createElement("a"),
                       img_url = syhistoryid.getAttribute("data-titimgsrc") || "",
                       a_url = syhistoryid.getAttribute("data-url") || "",
                       newImg;
                   // if(needSmallFont) syhistoryid.setAttribute("class",syhistoryidClass+" head-linea-small-font");
                   switch (needSmallFont) {
                       case 1:
                           //头条文字增多，最多24px*30个汉字；
                           //摘要文字不变，最多12px*62个汉字；
                           syhistoryid.setAttribute("class",syhistoryid_class+" font-size-twenty-four");
                           break
                       case 2:
                          // 头条不变，最多30px*24个汉字；
                          // 摘要字体变大，最多22px*32个汉字；
                          // 高度90px & 不显示 “更多头条”；
                           //头条和摘要间距有变化；
                           hpart1.setAttribute("class", hpart1_class + " ninty");
                           hots.setAttribute("class", hots_class + " font-size-twenty-two height-fix width-auto");
                           moreNews.setAttribute("class", moreNews_class + " none");
                           break
                       case 3:
                           //头条和摘要同大；
                           //头条，最多30px*24个汉字；
                           //摘要，最多30px*24个汉字；字体加粗；
                           //高度100px & 不显示 “更多头条”；
                           //头条和摘要间距有变化；
                           hots.setAttribute("class", hots_class + " font-size-thirty height-fix width-auto");
                           hpart1.setAttribute("class", hpart1_class + " one-hundered-height");
                           moreNews.setAttribute("class", moreNews_class + " none");
                           break
                       case 4:
                           
                           //摘要大于头条；
                           //头条，最多22px*32个汉字；
                           //摘要，最多30px*24个汉字；字体加粗；
                           //高度100px & 不显示 “更多头条”；
                           //头条和摘要间距有变化；
                           
                           hots.setAttribute("class", hots_class + " font-size-thirty height-fix width-auto");
                           syhistoryid.setAttribute("class", syhistoryid_class + " font-size-twenty-two");
                           hpart1.setAttribute("class", hpart1_class + " one-hundered-height");
                           moreNews.setAttribute("class", moreNews_class + " none");
                           break
                       case 5:
                           
                           //大头条变为图片；
                           //图片加链接；
                           //摘要不变；
                           
                           syhistoryid.innerHTML = "";
                           big_tit_a.target = "_blank";
                           big_tit_a.href = a_url;
                           big_tit_img.src = img_url;
                           big_tit_a.appendChild(big_tit_img);
                           syhistoryid.appendChild(big_tit_a);
                           syhistoryid.setAttribute("class", syhistoryid_class + " .tittoimg");
                           break;
                       default:
                           break
                           
                           //没有发副题,保持默认状态；
                           //头条最多30px*24个汉字；
                           //摘要最多12px*62个汉字；
                           
                   }
               }(window, document)

*/
           
