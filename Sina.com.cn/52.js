
                            jsLoader({
                               name : 'shm',
                               callback : function() {
                                   var focusScroll3 = new ScrollPic();
                                   focusScroll3.scrollContId = "SI_Scroll_eduopen_Wrap"; //内容容器ID
                                   focusScroll3.frameWidth = 180;//显示框宽度
                                   focusScroll3.pageWidth = 180; //翻页宽度
                                   focusScroll3.upright = false; //垂直滚动
                                   focusScroll3.speed = 15; //移动速度(单位毫秒，越小越快)
                                   focusScroll3.space = 30; //每次移动像素(单位px，越大越快)
                                   focusScroll3.autoPlay = true; //自动播放
                                   focusScroll3.autoPlayTime = 15; //自动播放间隔时间(秒)
                                   focusScroll3.circularly = true;
                                   focusScroll3.initialize(); //初始化

                                   SHM.dom.byId('SI_Scroll_eduopen_Arr_L').onmousedown = function(){
                                       focusScroll3.pre();
                                       return false;
                                   }
                                   SHM.dom.byId('SI_Scroll_eduopen_Arr_R').onmousedown = function(){
                                       focusScroll3.next();
                                       return false;
                                   }
                               }
                           });
                        