
	window._thereIsNoRealTimeMessage = '干掉realtime';
    //投票
    function pgvote( parent_id,vote_id ){
        var pid = parent_id;
        var vid = vote_id;
        $.ajax({
            type: "POST",
            url: "http://e.games.sina.com.cn/basevote/vote",
            data: {'pid':'13','parent_id':pid,'vote_id':vid},
            dataType: "jsonp",
            success: function(data){  
                if(false == data.success){
                  alert(data.retdata.msg);
                }else{
                  alert('投票成功！得票数：'+ data.retdata.count);
                }
            }
        });
    }

    //导航菜单
    $(document).ready(function(){ 

        //导航菜单
        $('.mainlevel').bind({
            mousemove:function(){
                $(this).find('.sub_nav_01').show();
                $(this).addClass('navboxslidup');
            },
            mouseleave:function(){
                $(this).find('.sub_nav_01').hide();
                $(this).removeClass('navboxslidup');
            }
        });

        //搜索下拉listselect
        $('#listselect').bind({
            mousemove:function(){
                $(this).css({"overflow":'visible'});
            },
            mouseleave:function(){
                $(this).css({"overflow":'hidden'});
            }
        });

        //搜素
        $('#s002').click(function(){
            var arr=['苹果','安卓'];
            $('#s001').html($(this).html());
            if($(this).html()=='安卓'){
                $(this).html('苹果');
                $('#form973').attr('action', 'http://android.97973.com/android/search');
            }else{
                $(this).html('安卓');
                $('#form973').attr('action', 'http://ios.97973.com/ios/search');
            }
            $('#listselect').css({"overflow":'hidden'});
        });

        $('#topsubmit').click(function(e){
            $('#form973').submit();
        });

        //关闭吸顶导航
        $('#topclose').click(function(){
            $('.top973').css({'position':'static'});
            $('.banner').css({'padding-top':'0'});
            $(this).remove();
        });

        //换一换
        $('.title .huan').click(function(){
            var obj = $(this).parents(".title").next('.hot973').find('ul');
            // console.log(obj.css('left'));
            if(obj.css('left')=='0px'){
                obj.animate({left:-1160+"px"},10);
                leftpos = false;
            }else{
                obj.animate({left:"0"},10);
                leftpos = true;
            }
        });
    });
