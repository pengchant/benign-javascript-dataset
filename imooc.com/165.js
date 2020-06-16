
var isLogin=0
var _hmt = _hmt || [];
var pageInfo = {
	canForward:"1",
    id: "252073",
    praiseNum:"1"
}
var dtid = "250478";
var marking = "fe";
var user = {
    uid : ''
}
var authorUid = {
    uid : '6798203'
}
var curPage = 'details'

var a_id = 252073

// 为html转码，article_content 为新markdown编辑器接收的初始化内容
var article_content = "&lt;blockquote&gt;&lt;p&gt;前言：上一章讲了vuex的安装及引入，这章讲下vuex中操作的几个方法&lt;strong&gt;Dispatch&lt;/strong&gt;、&lt;strong&gt;Commit&lt;/strong&gt;等，完成整个vuex操作的小循环。&lt;br/&gt;GitHub：&lt;a href=&quot;https://github.com/Ewall1106/mall&quot;&gt;https://github.com/Ewall1106/mall&lt;/a&gt;（选择分支chapter34）&lt;/p&gt;&lt;/blockquote&gt;&lt;p&gt;我再贴一下这张图，我们按照这个顺序讲解：&lt;/p&gt;&lt;p&gt;&lt;img data-original-src=&quot;//upload-images.jianshu.io/upload_images/2891127-8825b57aa7883d21.png&quot; data-original-width=&quot;701&quot; data-original-height=&quot;551&quot; data-original-format=&quot;image/png&quot; data-original-filesize=&quot;45686&quot; class=&quot;&quot; style=&quot;cursor: zoom-in;&quot; src=&quot;//upload-images.jianshu.io/upload_images/2891127-8825b57aa7883d21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/701/format/webp&quot;/&gt;&lt;/p&gt;&lt;p&gt;截图来自vuex官网&lt;/p&gt;&lt;h3&gt;1、Dispatch&lt;/h3&gt;&lt;p&gt;首先我们讲在组件中分发 &lt;code&gt;Action&lt;/code&gt;，使用的是&lt;code&gt;dispatch&lt;/code&gt;这个方法。也就是说如果你想在组件中改变&lt;code&gt;vuex&lt;/code&gt;仓库的值，可以使用这个方法。&lt;/p&gt;&lt;p&gt;（1）首先我们再新建一个&lt;code&gt;testCity.vue&lt;/code&gt;的文件并与&lt;code&gt;test.vue&lt;/code&gt;形成互为父子页面，作为我们这几章vuex初探的案例测试页面。&lt;/p&gt;&lt;p&gt;&lt;img data-original-src=&quot;//upload-images.jianshu.io/upload_images/2891127-28de66f5fd25c873.png&quot; data-original-width=&quot;785&quot; data-original-height=&quot;605&quot; data-original-format=&quot;image/png&quot; data-original-filesize=&quot;60618&quot; class=&quot;&quot; style=&quot;cursor: zoom-in;&quot; src=&quot;//upload-images.jianshu.io/upload_images/2891127-28de66f5fd25c873.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/785/format/webp&quot;/&gt;&lt;/p&gt;&lt;p&gt;新建testCity页面&lt;/p&gt;&lt;p&gt;（2）然后我们在&lt;code&gt;testCity&lt;/code&gt;页面中用&lt;code&gt;dispatch&lt;/code&gt;方法分发&lt;code&gt;action&lt;/code&gt;&lt;/p&gt;&lt;ul class=&quot; list-paddingleft-2&quot;&gt;&lt;li&gt;&lt;p&gt;先简单布局一下（选择列表+提交按钮）&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;添加一个点击事件，当点击提交的时候将选择的值作为&lt;code&gt;dispatch&lt;/code&gt;的参数&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;img data-original-src=&quot;//upload-images.jianshu.io/upload_images/2891127-b99fd1a8ab79e958.png&quot; data-original-width=&quot;848&quot; data-original-height=&quot;807&quot; data-original-format=&quot;image/png&quot; data-original-filesize=&quot;92173&quot; class=&quot;&quot; style=&quot;cursor: zoom-in;&quot; src=&quot;//upload-images.jianshu.io/upload_images/2891127-b99fd1a8ab79e958.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/848/format/webp&quot;/&gt;&lt;/p&gt;&lt;p&gt;dispatch分发action&lt;/p&gt;&lt;p&gt;&lt;img data-original-src=&quot;//upload-images.jianshu.io/upload_images/2891127-55987bc869b7f693.png&quot; data-original-width=&quot;388&quot; data-original-height=&quot;111&quot; data-original-format=&quot;image/png&quot; data-original-filesize=&quot;4533&quot; class=&quot;&quot; style=&quot;cursor: zoom-in;&quot; src=&quot;//upload-images.jianshu.io/upload_images/2891127-55987bc869b7f693.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/388/format/webp&quot;/&gt;&lt;/p&gt;&lt;p&gt;基本布局样式&lt;/p&gt;&lt;p&gt;（3）ok，接下来我们就应该是在store仓库中&lt;strong&gt;注册&lt;/strong&gt;&lt;code&gt;actions&lt;/code&gt;&lt;/p&gt;&lt;p&gt;&lt;img data-original-src=&quot;//upload-images.jianshu.io/upload_images/2891127-50f42a3f3554b5b7.png&quot; data-original-width=&quot;761&quot; data-original-height=&quot;665&quot; data-original-format=&quot;image/png&quot; data-original-filesize=&quot;48898&quot; class=&quot;&quot; style=&quot;cursor: zoom-in;&quot; src=&quot;//upload-images.jianshu.io/upload_images/2891127-50f42a3f3554b5b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/761/format/webp&quot;/&gt;&lt;/p&gt;&lt;p&gt;注册`actions`&lt;/p&gt;&lt;h3&gt;2、Commit&lt;/h3&gt;&lt;blockquote&gt;&lt;p&gt;Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用&lt;code&gt;context.commit&lt;/code&gt;提交一个 mutation。&lt;/p&gt;&lt;/blockquote&gt;&lt;p&gt;（1）接着上面的来，我们在&lt;code&gt;changeCity&lt;/code&gt;事件中提交一个&lt;code&gt;mutation&lt;/code&gt;&lt;/p&gt;&lt;ul class=&quot; list-paddingleft-2&quot;&gt;&lt;li&gt;&lt;p&gt;第一个参数是&lt;code&gt;context&lt;/code&gt;对象；&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;第二个参数是接收组件&lt;code&gt;dispatch&lt;/code&gt;传过来的&lt;code&gt;city&lt;/code&gt;值&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;img data-original-src=&quot;//upload-images.jianshu.io/upload_images/2891127-d620505cfc17a5a5.png&quot; data-original-width=&quot;849&quot; data-original-height=&quot;615&quot; data-original-format=&quot;image/png&quot; data-original-filesize=&quot;52002&quot; class=&quot;&quot; style=&quot;cursor: zoom-in;&quot; src=&quot;//upload-images.jianshu.io/upload_images/2891127-d620505cfc17a5a5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/849/format/webp&quot;/&gt;&lt;/p&gt;&lt;p&gt;commit提交mutation&lt;/p&gt;&lt;p&gt;这样，我们就提交了一个mutation。&lt;/p&gt;&lt;h3&gt;3、Mutate&lt;/h3&gt;&lt;blockquote&gt;&lt;p&gt;更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。&lt;/p&gt;&lt;/blockquote&gt;&lt;p&gt;终于，到了这一步我们就可以进行&lt;code&gt;state&lt;/code&gt;状态的变更了（这一步就是可以改变state的值）&lt;/p&gt;&lt;ul class=&quot; list-paddingleft-2&quot;&gt;&lt;li&gt;&lt;p&gt;我们先注册一个&lt;code&gt;mutations&lt;/code&gt;；&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;新建&lt;code&gt;commit&lt;/code&gt;提交的事件，第一个参数为&lt;code&gt;state&lt;/code&gt;，第二个为&lt;code&gt;commit&lt;/code&gt;传过来的&lt;code&gt;city&lt;/code&gt;值：&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;img data-original-src=&quot;//upload-images.jianshu.io/upload_images/2891127-8b425d518398207d.png&quot; data-original-width=&quot;828&quot; data-original-height=&quot;654&quot; data-original-format=&quot;image/png&quot; data-original-filesize=&quot;60197&quot; class=&quot;&quot; style=&quot;cursor: zoom-in;&quot; src=&quot;//upload-images.jianshu.io/upload_images/2891127-8b425d518398207d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/828/format/webp&quot;/&gt;&lt;/p&gt;&lt;p&gt;修改state中的值&lt;/p&gt;&lt;h3&gt;4、小结&lt;/h3&gt;&lt;p&gt;最后，当你改变了&lt;code&gt;state&lt;/code&gt;的值以后，vue就会自动&lt;code&gt;render&lt;/code&gt;重新渲染组件视图，从而完成开篇图1234步骤中的整个小循环。&lt;br/&gt;这样，本章我们就对vuex有了一个初步的了解了，最后看看实现的效果：&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;img data-original-src=&quot;//upload-images.jianshu.io/upload_images/2891127-6b9a2844ec780357.gif&quot; data-original-width=&quot;379&quot; data-original-height=&quot;672&quot; data-original-format=&quot;image/gif&quot; data-original-filesize=&quot;56963&quot; class=&quot;&quot; style=&quot;cursor: zoom-in;&quot; src=&quot;//upload-images.jianshu.io/upload_images/2891127-6b9a2844ec780357.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/379/format/webp&quot;/&gt;&lt;/p&gt;&lt;p&gt;本章效果展示&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;br/&gt;作者：Ewall_&lt;br/&gt;链接：https://www.jianshu.com/p/09521d1acfa4&lt;br/&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;";
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
