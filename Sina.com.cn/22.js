
      //autoPlayTime = 10;
                        jsLoader({
                            name: 'sinaProduct',
                            charset:'utf-8',
                            url: '//n.sinaimg.cn/homepage/js/sina_product_tabs.js',
                            callback:function(){
                                jsLoader({
                                    name: 'heimaotousu',
                                    charset:'utf-8',
                                    url:'//tech.sina.com.cn/other/src/sinaheimao.js'
                                })
                            }   
                        })
                        