
$('.sidemenu .flq_body .submenu .eject_left dl.inner_dl dd').each(function(){
$(this).find('a').last().css('background','none');
});
$('.level_one').each(function(){
if($(this).height() > $(this).find('.submenu').height() + 23){
$(this).find('.submenu').height($(this).height());
}
});
                        $('.sidemenu').find('div[father=1]').each(function(){
                            var son_len=$(this).find('dl[son=1] dt:empty').length;
                            var  sec_cate=$(this).find('.sec_cate:empty').length;
                            if(sec_cate>0){$(this).find('.sec_cate').remove();}
                            if(son_len>0){
                                $(this).remove();
                            }else{
                                $(this).find('dl[son=1]').find('dt').wrapInner("<span></span>");
                                $(this).find('dl[son=1]').find('dd').addClass('dd_level1');
                            }
                        });
                        var fath_len=$('.sidemenu').find('div[father=1]').length-1;
                        $('.sidemenu').find('div[father=1]').eq(fath_len).addClass('last');
                        $('.eject_left').find('dd>a').each(function(){
                            $(this).html("<span>"+$(this).html()+"</span>")
                        });
                        $('.eject_left').each(function(){
                            var dl_len=$(this).find('dl').length-1;
                            $(this).find('dl').eq(dl_len).addClass('last');
                        });
                        $(function(){
                            $('.level_one').each(function(e){
                                var submenu = $(this).find('.submenu');
                                var dl_length=submenu.find('dl').length;
                                submenu.hide();
                                 if(dl_length<1){
                                    $(this).find('.primary_dl dt span').css('background-image','none');
                                  }
                                $(this).hover(function(){
                                    if(dl_length>0){
                                       $(this).addClass('on');
                                        $(this).find('.submenu').show();
                                        var thisTop = -1;
                                        var thisO = $(this), thisSub = thisO.find('.submenu'),thisBody = $('.flq_body');
                                        var thisOOffsetT = parseFloat(thisO.offset().top, 10),
                                            thisOH = parseFloat(thisO.outerHeight(), 10),
                                            thisBodyOffsetT = parseFloat(thisBody.offset().top, 10),
                                            thisSubH = parseFloat(thisSub.outerHeight(), 10)

                                        var winH = parseFloat($(window).height()),
                                            winScrollTop = parseFloat($(window).scrollTop(), 10);

                                        if(thisOOffsetT < winScrollTop){
                                            thisTop = thisOOffsetT - thisBodyOffsetT - 2;
                                        }else{
                                            if(winScrollTop - thisBodyOffsetT > thisOOffsetT + thisOH - thisSubH - thisBodyOffsetT - 3){
                                                thisTop = winScrollTop - thisBodyOffsetT
                                            }else{
                                                thisTop = thisOOffsetT + thisOH - thisSubH - thisBodyOffsetT - 3;
                                                isIe = 1;
                                            }
                                        }
                                        if(thisTop < -1){
                                            thisTop = -1;
                                        }
                                        thisSub.css({'top': thisTop + "px"})
                                    }
                                },function(){
                                    $(this).removeClass('on');
                                    if(dl_length>0){
                                        $(this).find('.submenu').hide();
                                    }
                                });
                            });
                            $('.submenu').each(function(){
                                var slen=$(this).find("dl").length;
                                if(slen<1){$(this).remove;}
                            });
                        });
                        var c_h = 1063-74-$('.sidemenu').height();
   
                        $('.hotsell').find('.content').css({'height':c_h+'px','overflow':'hidden'});

                          $('.level_one').each(function(){
                               $(this).find('.primary_dl dd a').last().addClass('last_a');
                            });

$(function(){
$('body').removeClass('narrow_page');
})
                    