
//GP20190328
					 $(document).ready(function(){

							removeRightNews();
						});
					 function removeRightNews(){
						 if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
							 $("#rightarticle").remove();
								return;
						} else {
								if(navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1){
									$("#rightarticle").remove();
									return;
								}
						}
					 }
		