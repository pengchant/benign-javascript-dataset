
var isLogin=0
var _hmt = _hmt || [];
var pageInfo = {
	canForward:"1",
    id: "17163",
    praiseNum:"447"
}
var dtid = "17352";
var marking = "be";
var user = {
    uid : ''
}
var authorUid = {
    uid : '10000'
}
var curPage = 'details'

var a_id = 17163

// 为html转码，article_content 为新markdown编辑器接收的初始化内容
var article_content = "&lt;p&gt;&lt;strong&gt;&amp;gt; 恭喜以下用户获得自己挑选的图书&lt;/strong&gt;&lt;/p&gt;\n&lt;p&gt;洞庭波兮木叶下 《javascript高级程序设计》&lt;/p&gt;\n&lt;p&gt;tangjunfeng 《java编程思想》&lt;/p&gt;\n&lt;p&gt;修德  《精通javascript》&lt;/p&gt;\n&lt;p&gt;MR亦可赛艇 《java web 从入门到精通》&lt;/p&gt;\n&lt;p&gt;磁单极 《head first 设计模式》&lt;/p&gt;\n&lt;p&gt;红红525 《javascript权威指南 》&lt;/p&gt;\n&lt;p&gt;Carol李小白  《java编程思想》&lt;/p&gt;\n&lt;p&gt;hey北北  《Javascript权威指南》&lt;/p&gt;\n&lt;p&gt;么摩抹墨卡卡 《算法导论》&lt;/p&gt;\n&lt;p&gt;qq_木头人春天_0  《vue.js权威指南》&lt;/p&gt;\n&lt;p&gt;请获奖用户在个人中心--设置--收货地址把信息填写完整；没得到的用户别灰心，下期活动更精彩哦！届时请各位关注周五的慕课网首页轮播图~~&lt;/p&gt;\n&lt;hr /&gt;\n&lt;p&gt; &lt;br /&gt;\n&lt;img title=#慕课网会员日#图书免费送，就等你开口要了_ 图片1 src=&quot;//img1.sycdn.imooc.com/58d381700001083808300460.png&quot; alt=&quot;图片描述&quot; /&gt;&lt;img title=#慕课网会员日#图书免费送，就等你开口要了_ 图片2 src=&quot;//img1.sycdn.imooc.com/58d3817b0001efe408301590.jpg&quot; alt=&quot;图片描述&quot; /&gt;&lt;/p&gt;\n&lt;hr /&gt;\n&lt;strong style=&quot;display:block;font-size:22px;margin:22px 0 10px&quot;&gt;免费挑自己喜欢的书，那肯定是—倍儿爽！！&lt;/strong&gt;\n&lt;p&gt;天上掉馅饼的事儿，就差你伸手去接了，赶紧去评论和&lt;strong&gt;求好友点赞&lt;/strong&gt;吧~~&lt;/p&gt;";
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
