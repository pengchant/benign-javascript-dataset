
var isLogin=0
var _hmt = _hmt || [];
var pageInfo = {
	canForward:"1",
    id: "280246",
    praiseNum:"8"
}
var dtid = "280268";
var marking = "fe";
var user = {
    uid : ''
}
var authorUid = {
    uid : '6012904'
}
var curPage = 'details'

var a_id = 280246

// 为html转码，article_content 为新markdown编辑器接收的初始化内容
var article_content = "&lt;p&gt;Dan 开了一个自己的博客，介绍一些关于 React 的底层的基础知识，他喜欢把看起来深奥的问题用浅显的语言解释清楚，所以他是我很喜欢的一个大神。&lt;/p&gt;&lt;p&gt;最近他写了一篇文章，（&lt;a href=&quot;http://link.zhihu.com/?target=https%3A//overreacted.io/things-i-dont-know-as-of-2018/&quot;&gt;Things I Don’t Know as of 2018&lt;/a&gt;），起因是有一些程序员认为他作为一个在社区比较出名的大牛应该懂得技术和框架应该非常多，所以他在这篇文章中列出了在计算机开发的领域，他不是很了解的部分。这篇文章在 Twitter 上非常火。我看了以后特意来翻译一下。&lt;/p&gt;&lt;p&gt;他还说到，目前的码农界，人们总是有一个不现实的期望，他们希望一个有经验的开发者可以融会贯通各种技术，尤其是我们大家都特别推崇的那种 roadmap，就是什么成长路线图，比如说这个 （&lt;a href=&quot;http://link.zhihu.com/?target=https%3A//github.com/goodjack/developer-roadmap-chinese&quot;&gt;goodjack/developer-roadmap-chinese&lt;/a&gt;） 我在想这种玩意儿，很多人看过一次一般都会心中骂个娘，然后再也不看了。他除了给你挫败感之外没有更多的成果。&lt;/p&gt;&lt;p&gt;下面就是 Dan 自己说他自己没有掌握的一部分知识，看完了你也许会大跌眼镜，你心里面会暗自嘀咕：一个连 *** 都不会的，还是大神吗？还不如我自己呢。好，那我们现在就来看看这个列表（以下都切换为 Dan 的第一人称）：&lt;/p&gt;&lt;ol class=&quot; list-paddingleft-2&quot;&gt;&lt;li&gt;&lt;p&gt;Unix Bash 命令：我可以使用&amp;nbsp;ls&amp;nbsp;和&amp;nbsp;cd&amp;nbsp;浏览文件系统，我明白管道的概念，但是只是用过最简单的例子，我不知道怎样使用&amp;nbsp;xargs&amp;nbsp;创建复杂的管道，我没有系统的学习过 bash，所以我只会写最简单的（同时还有各种的 bug） shell 脚本&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;底层语言：我知道汇编语言让你在内存中存储数据，然后在不同的代码块进行 jump，就这么多。我写过几行C语言代码，知道什么是 指针。但是我不了解使用&amp;nbsp;malloc&amp;nbsp;或者其他的工具进行内存管理，从来没有用过 Rust。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;网络基础：我知道电脑有对应的 IP 地址，知道 DNS 用来解析域名。但是我不了解 TCP/IP 协议是如何进行工作的细节。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;容器：&amp;nbsp;我不知道怎么用 Docker 和 K8S （这两个东西有没有关系我也不清楚），我自己的理解就是它可以让我启动一个单独的，可预测的虚拟环境，听起来很棒但是我从来没玩过。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Serverless 无服务器&amp;nbsp;- 听起来很棒，但是没玩过。我不知道这种方式怎么就能改变后端的开发流程了。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;微服务：&amp;nbsp;我自己的理解是 很多 API 的接口可以进行互相访问，我不知道这种方式实际的优势和劣势，因为我没玩过。。。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Python：&amp;nbsp;说起 Python 我有点难受，我之前使用 Python 工作过几年。但是很多底层的内容，比如 import 模块到底是怎么工作的，对于我来说，我都没搞清楚。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Node 后端：我知道怎样运行 Node，使用过 一些 API（比如 fs）来构建项目，可以搭建一个 Express server。但是我从来没有用 Node 连接过一个数据库，也不清楚到底怎样写后端的代码。我也不知道 Next （一个 React 前后端同构的框架）怎么玩，我只用它搭建过一个 ‘Hello World’而已。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;原生平台：之前的某个时间点我试过去学习 Objective C，但是最后没学成。我也没学过 Swift 和 Java。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;算法：我在状态很好的情况下，花一整天的时间可以搞定冒泡排序 和 快速排序。我也可能实现一个简单的图的遍历。我能理解 大 O 表示法，但是我理解的深度也就到“不要往循环里面再嵌套循环”。（ 太诚实了。。）&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;函数式编程：除非你把 Javascript 算进去，我对任何传统的函数式编程语言都不熟悉，我很难读懂 LISP 系（比如 Clojure），Haskell 系（比如说 Elm），或者是 ML 系（比如说 OCaml）的代码。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;CSS：不懂 Flexbox 和 Grid，我喜欢 Float ...&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;CSS 方法论（太拗口了）：我曾经用过 BEM，但是这就是我了解的全部了。没玩过 OOCSS 和其他类型的东西。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;SCSS / Sass： 没学过。（大神你是认真的吗？）&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;CORS：每次遇到这些错误都有点懵逼，我知道我要加一些 headers 来修复他们，但是每次都要浪费很多时间。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;HTTPS / SSL&amp;nbsp;： 没有自己设置过，除了知道有私钥和公钥之外，不懂其中原理。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;GraphQL： 我能读懂 GraghQL 的 query，但是我不知道怎样解释 nodes 和 edges，不知道什么时候使用 fragments，不知道分页是什么原理。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Sockets：在我的脑袋里，我就知道它们是 计算机 使用 request response 的模型进行互联。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Streams：除了用过 Rx Observables，我没怎么用过 Stream，我用过一两次 node.js 的原生 Stream 模块，但是 它的 error handling 让我抓狂。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Electron： 没玩过&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;TypeScript：我了解 types 的概念，能读懂里面的 type 类型，但是我没写过。有几次我心血来潮想玩玩，但是每次都遇到问题。（这点我比大神强。。。）&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;部署 和 devops：我会使用 FTP 传输文件，还会杀死某些进程，仅此而已。（大神你这真的不是自黑嘛。）&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;图：不管是 canvas，SVG，WebGL 或者是其他低级别的图，我都没怎么大量使用过，我能弄懂个大体意思，但是细节不太了解。&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;还有很多东西我不懂，这里就不列出来了。&lt;/p&gt;&lt;p&gt;讨论这些可能有点奇怪，我在吹嘘自己的无知吗？写这篇文章想表达的是：&lt;/p&gt;&lt;ul class=&quot; list-paddingleft-2&quot;&gt;&lt;li&gt;&lt;p&gt;就算你最喜欢的程序员也有很多不懂的东西。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;不论你的水平怎样，不同时期信息很有很大差异。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;尽管每个人都有知识缺陷，但是经验丰富的术业有专攻。&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;我知道我自己的知识缺陷，但是当我需要它们的时候我可以比较快的掌握它们。&lt;/p&gt;&lt;p&gt;这些缺陷不会让我的知识和经验贬值，我可以做好很多事情，比如说：当我需要某些技术的时候学会它们。&lt;/p&gt;&lt;p&gt;我特别喜欢这篇文章，在这个全民浮躁的时代，每个人都在说 35 岁以后的裁员，程序员大了以后什么出路之外之类的话题，还能有这么一篇真诚的文章直击内心，让人欣慰。&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;";
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
