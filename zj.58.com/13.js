
    $.fn.lazyload = function() {
        var doc_element = document.compatMode == "BackCompat" ? document.body : document.documentElement;
        var defaults = {
            lazyAttr: "lazy_src",
            upBuffer: 200,
            downBuffer: 300,
            bufferTime: 100,
            defultSrc: "//img.58cdn.com.cn/n/images/list/noimg.gif"
        };
        function lazyload(sel, options) {
            var that = this;
            this.opt = $.extend(defaults, options);
            this.elList = [];
            this.lazyList = [];
            this.sel = sel;
            $(function() {
                that.el = $(that.sel).filter("[" + that.opt.lazyAttr + "]");
                that.el.each(function(i) {
                    that.opt.defultSrc && $(this).attr("src", that.opt.defultSrc);
                    var lazySrc = $(this).attr(that.opt.lazyAttr);
                    lazySrc && that.elList.push({
                        el: this,
                        src: lazySrc
                    })
                });
                $(that.elList).each(function(i) {
                    this.i = i
                });
                that.num = that.elList.length;
                that.loadEl();
                that.bindEvent()
            })
        }
        lazyload.fn = lazyload.prototype;
        lazyload.fn.bindEvent = function() {
            var that = this;
            $(window).bind("resize", function() {
                that.lazyLoadEl()
            });
            $(window).bind("scroll", function() {
                that.lazyLoadEl()
            })
        }
        ;
        lazyload.fn.getlazyList = function() {
            var that = this
                , offset = $(document).scrollTop()
                , before_offset = offset - that.opt.upBuffer
                , visio_offset = offset + doc_element.clientHeight + that.opt.downBuffer;
            that.lazyList = $.grep(that.elList, function(item) {
                item.top = item.top || getTop(item.el);
                return !item.loaded && item.top < visio_offset && item.top > before_offset
            });
            return that.lazyList
        }
        ;
        lazyload.fn.lazyLoadEl = function() {
            var that = this;
            clearTimeout(that.gt);
            that.gt = setTimeout(function() {
                that.loadEl()
            }, that.opt.bufferTime)
        }
        ;
        lazyload.fn.loadEl = function() {
            var that = this;
            if (this.num < 1 || this.getlazyList().length < 1) {
                clearTimeout(this.gt);
                return
            }
            $(this.lazyList).each(function() {
                $(this.el).attr("src", this.src);
                that.elList[this.i].loaded = true;
                that.num--
            })
        }
        ;
        function getTop(el) {
            if (!el)
                return null ;
            var element = el
                , offsetTop = element.offsetTop;
            while (element = element.offsetParent) {
                offsetTop += element.offsetTop
            }
            return offsetTop
        }
        return function(options) {
            new lazyload(this.selector,options);
            return this
        }
    }();
    $(function() {
        $("img").lazyload();
        /*window.limitButton = new LimitButton({
         button:$('#fabu')
         });*/
    });
    // 春节临时下线新疆玩赏鸟
	 var xj = ['/xj/','/changji/','/bygl/','/yili/','/aks/','/ks/','/hami/','/klmy/','/betl/','/tlf/','/ht/','/shz/','/ale/','/wjq/','/tmsk/','/alt/','/tac/'];
	if(xj.indexOf('/'+____json4fe.locallist.listname+'/') != -1 ){
	  $('.tab-list dl').eq(2).find('strong').text('花草鱼虫');
	  $('.bird-box .pet-title a').text('花草鱼虫');
	  $('.bird-box .img-box a').each(function(){
	  	if($(this).attr('href') == '/wanshangniao/'){
	  		$(this).attr('href','/cwdiao/');
	  		$(this).parents('dl').find('dd a').text('宠物貂');
	  		$(this).parents('dl').find('dt img').attr('lazy_src','//img.58cdn.com.cn/chuangxin/ershou/pets/dalei/diao.png');;
	  	}
	  })
	  $('.other-list a').each(function(){
	  	if($(this).attr('href') == '/gezi/'){
	  		$(this).attr('href','/woniu/');
	  		$(this).text('蜗牛');
	  	}
	  	if($(this).attr('href') == '/yingwu/'){
	  		$(this).attr('href','/tuzhi/');
	  		$(this).text('兔子');
	  	}
      })
      $('.bird-list .img-box').eq(1).find('dl').eq(0).remove();
      $('.bird-other-list .other-list').eq(1).find('li').eq(1).remove();
      $('.bird-other-list .other-list').eq(1).find('li').eq(0).remove();
    }
    
    $('.tab-list a').each(function(){
        if($(this).attr('href') == '/qitaxiaochong/'){
            $(this).attr('href','/qishipenjing/');
            $(this).text('奇石盆景');
        }
    })
    $('.bird-list .img-box').eq(0).find('.mr0').remove();
    $('.bird-list .img-box').eq(2).find('.mr0').remove();
    $('.bird-list .img-box').css('width','auto');
    $('.bird-other-list .other-list').eq(0).find('li').eq(3).remove();
    $('.bird-other-list .other-list').eq(0).find('li').eq(2).remove();
    $('.bird-other-list .other-list').eq(2).find('li').eq(3).remove();
    $('.bird-other-list .other-list').eq(2).find('li').eq(2).remove();
    $('.bird-other-list .other-list').css('width','auto');
