
                   jsLoader({
                       name: 'shm',
                       callback: function() {
                           SHM.register('home.custEvent.secondpage.fire', function($) {
                               $.evt.custEvent.fire($, 'secondPageEnd');
                                var eventType = 'mouseover';
                                var hasTouch = (typeof(window.ontouchstart) !== 'undefined');
                                if (hasTouch) {
                                    eventType = 'touchstart';
                                }
                                var wbTrigger = $.E('SI_Scroll_WB_Trigger');
                                var guessCont = $.E('SI_Scroll_Guess_Wrap');
                                var wbWrap = $.E('SI_Scroll_Wrap1');
                                var guessWrap = guessCont.parentNode.parentNode;
                                $.evt.addEvent(wbTrigger, eventType, function() {
                                    if (typeof guessWrap !== 'undefined' && guessWrap) {
                                        guessWrap.style.display = 'none';
                                    }
                                    var imgs = wbWrap.getElementsByTagName('img');
                                    if(imgs&&imgs.length>0){
                                        for (var i = imgs.length - 1; i >= 0; i--) {
                                            var img = imgs[i];
                                            var src = img.getAttribute('data-src');
                                            if(src){
                                                img.src=src;
                                                img.removeAttribute('data-src');
                                            }
                                        };
                                    }
                                });
                           });
                           //测试猜你喜欢的登录
                       }
                   });

                   jsLoader({
                       name : 'shm',
                       callback : function() {
                           var focusScroll = new ScrollPic();
                           focusScroll.scrollContId = "SI_Scroll_Wrap"; //内容容器ID
                           focusScroll.dotListId = "SI_Scroll_Dot_Lists";//点列表ID
                           focusScroll.dotClassName = "";//点className
                           focusScroll.dotOnClassName = "cur";//当前点className
                           focusScroll.listType = "";//列表类型(number:数字，其它为空)
                           focusScroll.listEvent = "onmouseover"; //切换事件
                           focusScroll.frameWidth = 1000;//显示框宽度
                           focusScroll.pageWidth = 1000; //翻页宽度
                           focusScroll.upright = false; //垂直滚动
                           focusScroll.speed = 10; //移动速度(单位毫秒，越小越快)
                           focusScroll.space = 40; //每次移动像素(单位px，越大越快)
                           focusScroll.autoPlay = true; //自动播放
                           focusScroll.autoPlayTime = 15; //自动播放间隔时间(秒)
                           focusScroll.circularly = true;
                           focusScroll.initialize(); //初始化

                           var focusScroll1 = new ScrollPic();
                           focusScroll1.scrollContId = "SI_Scroll_Wrap1"; //内容容器ID
                           focusScroll1.dotListId = "SI_Scroll_Dot_Lists1";//点列表ID
                           focusScroll1.dotClassName = "";//点className
                           focusScroll1.dotOnClassName = "cur";//当前点className
                           focusScroll1.listType = "";//列表类型(number:数字，其它为空)
                           focusScroll1.listEvent = "onmouseover"; //切换事件
                           focusScroll1.frameWidth = 1000;//显示框宽度
                           focusScroll1.pageWidth = 1000; //翻页宽度
                           focusScroll1.upright = false; //垂直滚动
                           focusScroll1.speed = 10; //移动速度(单位毫秒，越小越快)
                           focusScroll1.space = 40; //每次移动像素(单位px，越大越快)
                           focusScroll1.autoPlay = true; //自动播放
                           focusScroll1.autoPlayTime = 15; //自动播放间隔时间(秒)
                           focusScroll1.circularly = true;
                           focusScroll1.initialize(); //初始化

                           function $(id){
                             return document.getElementById(id) || null;
                           }

                           function attachEvent(obj, evt, func, eObj) {
                               eObj = !eObj ? obj : eObj;
                               if(obj.addEventListener) {
                                   obj.addEventListener(evt , func, false);
                               } else if(eObj.attachEvent) {
                                   obj.attachEvent('on' + evt, func);
                               }
                           }

                           function getRandom(obj) {
                                var max = obj.pageLength - 1;
                                var min = 0;
                                var randomNum = Math.round(Math.random()*(max - min) + min);
                                obj.pageTo(randomNum);
                           }

                           $('SI_Scroll_Arr_L').onmousedown = function(){
                               focusScroll.pre();
                               return false;
                           }
                           $('SI_Scroll_Arr_R').onmousedown = function(){
                               focusScroll.next();
                               return false;
                           }

                           $('SI_Scroll_Arr_L1').onmousedown = function(){
                               focusScroll1.pre();
                               return false;
                           }
                           $('SI_Scroll_Arr_R1').onmousedown = function(){
                               focusScroll1.next();
                               return false;
                           }

                           getRandom(focusScroll);

                           attachEvent($('SI_Scroll_Dot_Lists'),'mouseover',function(event){
                             var tar = event.target || event.srcElement;
                             if(tar.tagName == 'SPAN'){
                               try{
                                 _S_uaTrack("index_new_pic", "i_love_pic_change_red_point");
                               }catch(e){

                               }
                             }
                           });
                       }
                   });
				