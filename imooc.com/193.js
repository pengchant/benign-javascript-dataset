
var isLogin=0
var _hmt = _hmt || [];
var pageInfo = {
	canForward:"1",
    id: "12011",
    praiseNum:"2"
}
var dtid = "18238";
var marking = "mobile";
var user = {
    uid : ''
}
var authorUid = {
    uid : '1289460'
}
var curPage = 'details'

var a_id = 12011

// 为html转码，article_content 为新markdown编辑器接收的初始化内容
var article_content = "&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;&lt;img src=&quot;http://upload-images.jianshu.io/upload_images/1783214-4c01ca899e75e9de.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240&quot; alt=&quot;&quot; /&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;最近发现一个Android的开源项目，还挺不错的。是个发短信的App，在Google Play上的下载量达到近40万。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;&lt;img src=&quot;http://upload-images.jianshu.io/upload_images/1783214-c6110ee46a0ebffd.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240&quot; alt=&quot;qksms Google Play&quot; /&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;&lt;img src=&quot;http://upload-images.jianshu.io/upload_images/1783214-d732e532286b006b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240&quot; alt=&quot;qksms Google Play&quot; /&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;PS ：我可不是帮这个App做广告。作者是个加拿大人，完全不认识。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;##QKSMS&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;这个项目总的来说质量还不错吧。而且运行起来可以发现，简洁清新，可以作为参考学习的好资源。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;而且，用了Material Design。之前我写了篇 Android探索之旅  Material Design学习资源&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;QKSMS的源码在Github上，地址是&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/moezbhatti/qksms&quot;&gt;https://github.com/moezbhatti/qksms&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;来把项目克隆到你本地。如果不会用Git和Github，那作为程序员你有点out咯。不过没关系, 可以看 Git，Github和Gitlab简介和基本使用&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;这个App也做了很多语言的本地化，包括中文（嘿嘿）。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;App的作者也还不错，Github活跃度很高：&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;&lt;img src=&quot;http://upload-images.jianshu.io/upload_images/1783214-cbb4f9a1c5dd97cf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240&quot; alt=&quot;qksms3.jpg&quot; /&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;目前这个App有几个Bug (早知道bug总是难免的, 你又何苦一往情深~)，不过总体来说挺好的。而且一直有在维护（开源项目最怕没人管，不更新）。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;##如何在Android Studio中用Android模拟器来模拟发送短信&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;前些日子在公司里，要测试一个App的短信发送功能。一开始我想要用两台真机。然后都要装上SIM卡。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;这时同桌告诉我：可以用Android Studio中的Android模拟器来模拟短信发送，甚至打电话。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;(⊙o⊙)…我还真不知道。我真是out了…&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;启动模拟器之后，在右侧的功能菜单栏最后，点击 三个点，在弹出的窗口中，选择Phone（&quot;电话&quot;的意思）。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;然后你可以在From那栏随便填写什么号码（就是呼叫方的号码），点击Call Device就会模拟打电话给这个号码。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;SMS Message的编辑区域，输入随便什么文本，就是你模拟发送的短信内容了，点击Send Message就会发送，很好用吧。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;例如，我启动了QKSMS，然后每点击一次Send Message就会发送短信到QKSMS。这样就能测试短信发送功能了。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;大大加快测试速度，方便。&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;学无止境啊~&lt;/p&gt;\n&lt;/div&gt;&lt;div class=&quot;cl-preview-section&quot;&gt;&lt;p&gt;·····································&lt;br /&gt;&lt;strong&gt;欢迎关注课程：&lt;/strong&gt;&lt;br /&gt;&lt;a href=&quot;https://coding.imooc.com/class/176.html?mc_marking=1544b608a19eb68227c1aec02846d933&amp;amp;mc_channel=shouji&quot;&gt;基于Python玩转人工智能框架 TensorFlow应用实践&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;";
// 为html反转码
article_content = article_content.replace(/\&lt\;/g, "<").replace(/\&gt\;/g, ">").replace(/\&amp\;/g, "&").replace(/\&quot\;/g, '"').replace(/\&apos\;/g, "'");
// 递归遍历dom，处理图片懒加载
function dfs(root) {
	var nodes = Array.prototype.slice.call(root.children);
	if (nodes.length) {
		nodes.forEach(function (node) {
			if(node.tagName == 'IMG') {
				var src = node.src;
				var alt = node.alt;
				var reg = /(?:imooc|mukewang)\.com\/[A-Za-z0-9]+?\.jpg$/;
				// ueditor 上传的图片，alt为原图高清
				if(reg.test(alt)) {
					!node.getAttribute('data-src') && node.setAttribute('data-src', alt);
					node.setAttribute('data-original', alt); // 直接显示原图
				} else {
					node.setAttribute('data-original', src);
				}
				node.setAttribute('class', 'lazyload');
				node.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC';
			}
			dfs(node);
		});
	}
}
// 创建手记内容dom节点
var articleEl = document.createElement("div");
articleEl.innerHTML = article_content;
// 遍历手记dom树
dfs(articleEl);
