
                $("#mnav li").on('click', function (event) {
                    if($(this).children('.msub').css("display")=="none"){
                        $(this).children('.msub').slideDown(600);
                    }else{
                        $(this).children('.msub').slideUp(600);
                    }
                }); 
            