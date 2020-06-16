
    var recommendCount = 16;
    recommendCount = recommendCount > 1 ? (recommendCount + (recommendCount>6 ? 2 : 1)) : recommendCount;
    var ChannelId = 1;
    var articleId = "106774011";
    var commentscount = 0;
    var islock = false;
    var curentUrl = "https://blog.csdn.net/csdnsevenn/java/article/details/106774011";
    var myUrl = "https://my.csdn.net/";
    //1禁止评论，2正常
    var commentAuth = 2;
    //百度搜索
    var baiduKey = "程序员晒端午福利，网友：看了你的福利我想摔手机_程序人生的博客-CSDN博客";
    var needInsertBaidu = true;
    // 代码段样式
    var codeStyle = '';
	var highlight = ["\u7a0b\u5e8f\u5458","\u6652","\u7aef\u5348","\u798f\u5229","\u7f51\u53cb","\u798f\u5229","\u60f3","\u6454","\u624b\u673a"];//高亮数组

    var share_card_url = 'https://blog.csdn.net/csdnsevenn/article/shareArticleCardPage?article_id=106774011'
    var RecommendBlogExpertList = [];
	var articleType = 1;
	var CopyrightContent = '';
            var recommendRegularDomainArr = ["blog.csdn.net\/.+\/article\/details\/","download.csdn.net\/download\/","edu.csdn.net\/course\/detail\/"];
