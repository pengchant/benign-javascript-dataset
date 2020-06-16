
if (!window.seajs && !window.vendor_library) {
var oBody = document.body;
var aChild = oBody.childNodes;
var oDv = document.createElement('div');
oDv.innerHTML = [
'<div style="text-align:center;">',
'<div style="font-size:18px;margin:20px 0;font-weight: bold;">',
'静态文件加载出错，建议使用手机热点，如果想要彻底解决，请按照以下步骤修改电脑的DNS',
'<br />推荐使用以下DNS: 223.5.5.5(首选) 和 223.6.6.6(备用)',
'</div>',
'<img style="border:1px solid #ccc;" src="//qqstatic.nowcoder.com/files/cdn.jpg" />',
'</div>'].join('');
aChild.length === 0 && oBody.appendChild(oDv);
aChild.length > 0 && oBody.insertBefore(oDv, aChild[0]);
}
