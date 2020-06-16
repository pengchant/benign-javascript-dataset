
                        window.onload = function () {
                            var blackcat = document.getElementById('heimaogif');
                            setTimeout(function(){
                                blackcat.setAttribute('src','//n.sinaimg.cn/finance/blackcat/pc/blink.gif')
                            },6000);
                            blackcat.onmouseover = function(e){
                                e.target.src = '//n.sinaimg.cn/finance/blackcat/pc/blackcat-hover.gif';
                            }
                            blackcat.onmouseout = function(e){
                                e.target.src = '//n.sinaimg.cn/finance/blackcat/pc/blink.gif';
                            }
                        } 
                        
                    