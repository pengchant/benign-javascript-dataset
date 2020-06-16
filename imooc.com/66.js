
var isLogin=0
var _hmt = _hmt || [];
var pageInfo = {
	canForward:"1",
    id: "272646",
    praiseNum:"7"
}
var dtid = "272280";
var marking = "fe";
var user = {
    uid : ''
}
var authorUid = {
    uid : '1343480'
}
var curPage = 'details'

var a_id = 272646

// 为html转码，article_content 为新markdown编辑器接收的初始化内容
var article_content = "&lt;p&gt;近期很多同学通过create-react-app创建项目后，发现webpack的配置文件合并成一个了，但是这个时候应该如何去配置antd或者其它UI库的按需加载呢？如何动态添加less解析呢？&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://img4.sycdn.imooc.com/5c34b58b0001358305000292.jpg&quot; title=&quot;&quot; alt=&quot;https://img1.sycdn.imooc.com/5c34b58b0001358305560324.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;实际上万变不离其宗，配置的方式还是官网插件的用法，但是这个地方有个提示大家要注意：&lt;/p&gt;&lt;p&gt;antd官网提供的react-app-rewired 插件已经无法使用，因为react-app-rewired默认修改config下面的webpack.config.dev.js但是现在已经没有这个文件了，所以这个插件已经无法使用，后期antd官网的脚手架应该会更新版本来兼容。&lt;/p&gt;&lt;p&gt;接下来，我们看看如何解决这个问题：&lt;/p&gt;&lt;ol class=&quot; list-paddingleft-2&quot; style=&quot;list-style-type: decimal;&quot;&gt;&lt;li&gt;&lt;p&gt;首先实现组件的按需加载。&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;找到 oneOf下面的test:/\\.(js|mjs|jsx|ts|tsx)$/, 然后再plugins里面添加代码：&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;https://img2.sycdn.imooc.com/5c34b69c0001ff7205000244.jpg&quot; title=&quot;&quot; alt=&quot;https://img4.sycdn.imooc.com/5c34b69c0001ff7216640810.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;这个代码需要依赖于插件babel-plugin-import，因此需要先通过yarn add&amp;nbsp;babel-plugin-import --save才可以启动。&lt;/p&gt;&lt;p&gt;2. 实现解析less文件，并修改less变量&lt;/p&gt;&lt;p&gt;再onfOf下面任一位置添加{ test: /\\.less$/ 等规则，可以复制css的配置规则过来，进行修改。&lt;/p&gt;&lt;pre class=&quot;brush:js;toolbar:false&quot;&gt;{\ntest:&amp;nbsp;/\\.less$/,\nuse:&amp;nbsp;[\n&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;//.....此处代码省略\n&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\n&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;loader:&amp;nbsp;require.resolve(&amp;#39;less-loader&amp;#39;),\n&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;options:&amp;nbsp;{\n&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;modules:&amp;nbsp;false,\n&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;javascriptEnabled:true,//启动JS\n&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;modifyVars:&amp;nbsp;{&amp;quot;@primary-color&amp;quot;:&amp;nbsp;&amp;quot;#f9c700&amp;quot;}&amp;nbsp;//修改UI库里面的less变量\n&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;}\n&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;}\n]\n},&lt;/pre&gt;&lt;p&gt;如上代码，配置.less解析规则，从上到下，以此为style-loader、css-loader、postcss-loader、less-loader，同时要想修改组件中的less变量，还需要再less-loader的option中添加属性控制，javascriptEnabled:true用于启用js，modifyVars主要用来修改变量，此处举例用来修改antd组件中的变量。&lt;/p&gt;&lt;p&gt;&lt;strong&gt;请大家注意，本博客是为了讲解React脚手架合并带来的按需加载 配置问题，不同的项目配置不同，可能需要的插件也不同，一定不要照搬插件的内容，重点再配置。&lt;/strong&gt;&lt;/p&gt;";
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
