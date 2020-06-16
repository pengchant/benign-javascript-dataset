 
     $().ready(function() { 
         $("#wp_paging_w61 .pagingJump").click(function() { 
             var pageNum = $("#wp_paging_w61 .pageNum").val(); 
             if (pageNum === "") { alert('请输入页码！'); return; } 
             if (isNaN(pageNum) || pageNum <= 0 || pageNum > 242) { alert('请输入正确页码！'); return; } 
             var reg = new RegExp("/list", "g"); 
             var url = "/news/kdyw_8158/list.htm"; 
             window.location.href = url.replace(reg, "/list" + pageNum); 
         }); 
     }); 
