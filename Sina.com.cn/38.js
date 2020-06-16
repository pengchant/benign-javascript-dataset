
                            jsLoader({
                               name : 'shm',
                               callback : function() {
                                   var focusScroll4 = new ScrollPic();
                                   focusScroll4.scrollContId = "SI_Scroll_blogphoto_Wrap"; //内容容器ID
                                   focusScroll4.frameWidth = 180;//显示框宽度
                                   focusScroll4.pageWidth = 180; //翻页宽度
                                   focusScroll4.upright = false; //垂直滚动
                                   focusScroll4.speed = 15; //移动速度(单位毫秒，越小越快)
                                   focusScroll4.space = 30; //每次移动像素(单位px，越大越快)
                                   focusScroll4.autoPlay = true; //自动播放
                                   focusScroll4.autoPlayTime = 15; //自动播放间隔时间(秒)
                                   focusScroll4.circularly = true;
                                   focusScroll4.initialize(); //初始化

                                   SHM.dom.byId('SI_Scroll_blogphoto_Arr_L').onmousedown = function(){
                                       focusScroll4.pre();
                                       return false;
                                   }
                                   SHM.dom.byId('SI_Scroll_blogphoto_Arr_R').onmousedown = function(){
                                       focusScroll4.next();
                                       return false;
                                   }
                               }
                           });
                        