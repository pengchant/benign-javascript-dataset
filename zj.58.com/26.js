
        $(function(){
        function conShow(tabBtn,tabCon){
            var aBtn = $(tabBtn)
            var aCon = $(tabCon);
            for(var i=0;i<aBtn.length;i++){
                aBtn.eq(i).mouseover(function(){
                    $(this).siblings().removeClass("sel");
                    $(this).addClass("sel");
                    var index = aBtn.index(this);
                    aCon.eq(index).show().siblings().find(".catecss").hide();
                    return false;
                })
                aBtn.eq(i).mouseleave(function(){
                aBtn.removeClass("sel ");
                aCon.hide();
                return false;
            })
            }  
        };
        conShow(".hsub",".catecss");
        });
       
        $(document).ready(function() {
        $('#ul_pic li').hide();         
        var currentSlide = -1;
        var prevSlide = null;
        var slides = $('#ul_pic li');
        var interval = null;
        var FADE_SPEED = 500;
        var DELAY_SPEED = 5000;
         
        var html = '<ul class="bottom_div" id="focus_pic_count">'
         
        for (var i = 0;i < slides.length; i++){
            html += '<li id="slide'+ i+'" class="slide"><a href="javascript:void(0);" target="_self" >'+''+'</a></li>' ;
        }
         
        html += '</ul>';
        $('#focus_pic').append(html);
         
        for (var i = slides.length - 1;i >= 0 ; i--){
            $('#slide'+i).bind("click",{index:i},function(event){
                currentSlide = event.data.index;
                //console.info("goto:" + currentSlide);
                gotoSlide(event.data.index);
            });
        };
         
        if (slides.length <= 1){
            $('.slide').hide();
        }
         
        nextSlide();
         
        function nextSlide (){
            if (currentSlide >= slides.length -1){
                currentSlide = 0;
            }else{
                currentSlide++
            }
            gotoSlide(currentSlide);
        }
         
        function gotoSlide(slideNum){
            if (slideNum != prevSlide){
                // prev slide fadeOut, currentSlide fadeIn
                if (prevSlide != null){
                    $(slides[prevSlide]).stop().fadeOut();
                    $('#slide'+prevSlide).removeClass('selectedTab');
                }
                
                $('#slide'+currentSlide).addClass('selectedTab');
                $(slides[slideNum]).stop().fadeIn( FADE_SPEED );
         
                $('#slide'+slideNum).addClass('selectedTab');
                $('#slide'+prevSlide).removeClass('selectedTab');
                prevSlide = currentSlide;
         
                if (interval != null){
                    clearInterval(interval);
                }
                interval = setInterval(nextSlide, DELAY_SPEED);
                    }
        }
        
        });
    