
        var whether_inited_weibo = false;
        var weibo_Widget_this = undefined;
		var http = window.location.href.indexOf("http:")>-1 ? "http:" : "https:";
        $widgetadd({
            id: 'weibo_topic_pos_conf_11',
            loadTime: 'DOMContentLoaded',
            initialize: true,
            isDepend: true,
            require: [
				http + '//news.sina.com.cn/js/87/20110714/205/sinalib.js',
				http + '//news.sina.com.cn/js/268/2011/1110/16/weibo-all.js',
				http + '//i.sso.sina.com.cn/js/ssologin.js'],
            exports: function(node,widget){
            if(!whether_inited_weibo) {
            var pub = new Weibo.Widgets.Publisher({
                source: '#publisher',
                width: '100%',
                display: {
                    emoticons: false,
                    imgupload: false,
                    vidupload: false
                }
            });
            weibo_Widget_this = pub;
            }
            weibo_Widget_this.resetText('#基金#');
            if(whether_inited_weibo == false) {
                whether_inited_weibo = true;    
            }
            $('#list2').children().remove();
            Weibo.Login.autoLogin();
                 Weibo.encoding = 'gbk';
                    var list2 = new Weibo.Widgets.List({container: '#list2', showUserCard: false});
                    Weibo._getRequest({
                        url: '//topic.t.sina.com.cn/interface/ajax/get_feed_by_keyword',
                        data: {
                            keyword: '基金',
                            page: 1,
                            pagesize: '15',
							hasv: '0'
                        },
                        onsuccess: function(data) {
                            //list2.remove();
                            list2.reset(data);
                            setTimeout(function(){
                                $('.weibo-list-videolink').each(function() {
                                var parent = $(this).closest('.weibo-list-item');
                                var url    = parent.find('.weibo-list-time a').attr('href');
                                $(this).attr('href',url).removeClass();
                            });},200);
                        },
                        onfailure: function(status) {
                        }
                    });
            }
        });
                