
                            jsLoader({
                               name : 'shm',
                               callback : function() {
                                   var focusScroll = new ScrollPic();
                                   focusScroll.scrollContId = "SI_Scroll_History_Wrap"; //内容容器ID
                                   focusScroll.frameWidth = 180;//显示框宽度
                                   focusScroll.pageWidth = 180; //翻页宽度
                                   focusScroll.upright = false; //垂直滚动
                                   focusScroll.speed = 15; //移动速度(单位毫秒，越小越快)
                                   focusScroll.space = 30; //每次移动像素(单位px，越大越快)
                                   focusScroll.autoPlay = true; //自动播放
                                   focusScroll.autoPlayTime = 15; //自动播放间隔时间(秒)
                                   focusScroll.circularly = true;
                                   focusScroll.initialize(); //初始化

                                   SHM.dom.byId('SI_Scroll_History_Arr_L').onmousedown = function(){
                                       focusScroll.pre();
                                       return false;
                                   }
                                   SHM.dom.byId('SI_Scroll_History_Arr_R').onmousedown = function(){
                                       focusScroll.next();
                                       return false;
                                   }
                               }
                           });
                        