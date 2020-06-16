 
     $().ready(function() { 
         $("#wp_paging_w6 .pagingJump").click(function() { 
             var pageNum = $("#wp_paging_w6 .pageNum").val(); 
             if (pageNum === "") { alert('请输入页码！'); return; } 
             if (isNaN(pageNum) || pageNum <= 0 || pageNum > 19) { alert('请输入正确页码！'); return; } 
             var reg = new RegExp("/list", "g"); 
             var url = "/en/Events/list.htm"; 
             window.location.href = url.replace(reg, "/list" + pageNum); 
         }); 
     }); 
