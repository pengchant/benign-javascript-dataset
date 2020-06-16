
						/*清除文章页空白字段*/
						$(".art_zz2").each(function(){
						  if($(this).text() == '' || $(this).text() == null){
							$(this).parent().remove();
						  }
						});
                    