
        if($('.storey_five .book_3ad .pic,.storey_five .book_1ad .pic').length>0){$('.book_reco_area').attr('style','padding-top: 20px; border-top: 1px solid #eaeaea; ');}
	var click_count = 1;	
	function change_product(){
			var pro_obj = $(".book_reco_pro .list_aa").find("li");
			var pro_count = pro_obj.length;
			//初始化 显示
			if(pro_count<=0){
					return ;
			}
			//可更换的次数
			var pages = parseInt(pro_count/10); 
                        
			if(pages>1){
				if(click_count<=(pages-1)){
					show_product(click_count,pro_obj);
					click_count++;	
				}else{
					show_product(0,pro_obj);
					click_count=1				
				}
                               
			}
	}
	function show_product(click_count,pro_obj){
			pro_obj.css('display','none');
			var curr_index = click_count*10;
			$(".book_reco_pro li").slice(curr_index, curr_index+10).css('display','block');

	}
    
