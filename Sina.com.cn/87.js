
            $(function(){
                var v_i;
                var Width=$(window).width();
                if(Width>=1360){
                    BigWifth();
                }else if(Width<1360){
                    SmallWidth();
                }
                $(window).resize(function(){
                    $(".raiders_nav li").removeAttr('style');
                    var Width=$(window).width();
                    if(Width>=1360){
                        BigWifth();
                    }else if(Width<1360){
                        SmallWidth();
                    }
                })
                function BigWifth(){
					changebig(0);
                    $(".raiders_nav li").click(function(){
                        $(".raiders_nav li").removeAttr('style')
                        v_i=$(this).index();
                        changebig(v_i); 
                    })
                }
				function changebig(i){
					 	v_i=i;
                        $(".raiders_nav li").eq(i).addClass('active').siblings().removeClass('active')
                        $('.raiders_con').hide().eq(v_i).show();
                        if($(".raiders_nav li").eq(0).hasClass('active')){
                            $(".raiders_nav li").eq(i).css('background','url("http://n.sinaimg.cn/97973/20160412/TWlJ-fxrcizs7302499.png") no-repeat')
                            $(".raiders_nav li").eq(2).css("margin-left","-24px");
                            $(".raiders_nav li").eq(3).css("margin-left","-24px");
                        }else if($(".raiders_nav li").eq(1).hasClass('active')){
                            $(".raiders_nav li").eq(i).css('background','url("http://n.sinaimg.cn/97973/20160412/I-LS-fxrckae7809952.png") no-repeat')
                            $(".raiders_nav li").css("width","295px");
                            $(".raiders_nav li").eq(3).css("margin-left","-20px");
                        }else if($(".raiders_nav li").eq(2).hasClass('active')){
                            $(".raiders_nav li").eq(i).css('background','url("http://n.sinaimg.cn/games/20160620/wadc-fxtfrrc3964897.jpg") no-repeat')
                            $(".raiders_nav li").css("width","295px");
                            $(".raiders_nav li").eq(1).css("margin-left","-20px");
                        }else if($(".raiders_nav li").eq(3).hasClass('active')){
                            $(".raiders_nav li").eq(i).css('background','url("http://n.sinaimg.cn/97973/20160623/83Ez-fxtmwei9157043.jpg") no-repeat')
                            $(".raiders_nav li").css("width","302px");
                            $(".raiders_nav li").eq(1).css("margin-left","-24px");
                            $(".raiders_nav li").eq(2).css("margin-left","-24px");
                        }
				}
                function SmallWidth(){
					changesmall(0);
                    $(".raiders_nav li").click(function(){
                        $(".raiders_nav li").removeAttr('style')
                        v_i=$(this).index();
                        changesmall(v_i);
                    })
                }
				function changesmall(i){
					 	v_i=i;
                        $(".raiders_nav li").eq(i).addClass('active').siblings().removeClass('active')
                        $('.raiders_con').hide().eq(v_i).show();
                        if($(".raiders_nav li").eq(0).hasClass('active')){
                            $(".raiders_nav li").eq(i).css('background','url("http://n.sinaimg.cn/97973/20160412/TWlJ-fxrcizs7302499.png") no-repeat')
                            $(".raiders_nav li").eq(2).css("margin-left","-24px");
                            $(".raiders_nav li").eq(3).css("margin-left","-24px");
                        }else if($(".raiders_nav li").eq(1).hasClass('active')){
                            $(".raiders_nav li").eq(i).css('background','url("http://n.sinaimg.cn/97973/20160412/I-LS-fxrckae7809952.png") no-repeat')
                            $(".raiders_nav li").css("width","244px");
                            $(".raiders_nav li").eq(3).css("margin-left","-20px");
                        }else if($(".raiders_nav li").eq(2).hasClass('active')){
                            $(".raiders_nav li").eq(i).css('background','url("http://n.sinaimg.cn/games/20160620/wadc-fxtfrrc3964897.jpg") no-repeat')
                            $(".raiders_nav li").css("width","244px");
                            $(".raiders_nav li").eq(1).css("margin-left","-20px");
                        }else if($(".raiders_nav li").eq(3).hasClass('active')){
                            $(".raiders_nav li").eq(i).css('background','url("http://n.sinaimg.cn/97973/20160623/83Ez-fxtmwei9157043.jpg") no-repeat')
                            $(".raiders_nav li").css("width","251px");
                            $(".raiders_nav li").eq(1).css("margin-left","-24px");
                            $(".raiders_nav li").eq(2).css("margin-left","-24px");
                        }
				}
            })
        