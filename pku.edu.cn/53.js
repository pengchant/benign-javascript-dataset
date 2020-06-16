  
function change()  
{  
   var first = document.getElementById("select-first-dbtype");  
   var second = document.getElementById("select-second-searchtype");  
   var inputtext = document.getElementById("ejournal-search-field");
   second.options.length = 0; // 清除second下拉框的所有内容  
   if(first.selectedIndex == 0)  
   {  
        second.options.add(new Option("标题", "title_contains", false, true)); // 默认选中省会城市
        second.options.add(new Option("ISSN/ISBN", "issn_equals")); 
		inputtext.placeholder="请输入标题或ISSN/ISBN";
   } 
   if(first.selectedIndex == 1)  
   {  
        second.options.add(new Option("刊名", "title_contains", false, true)); // 默认选中省会城市
        second.options.add(new Option("ISSN", "issn_equals")); 
		inputtext.placeholder="请输入刊名或ISSN";
   }  
  
   if(first.selectedIndex == 2) 
   {  
        second.options.add(new Option("书名", "title_contains", false, true)); // 默认选中省会城市
        second.options.add(new Option("ISBN", "issn_equals"));  
		inputtext.placeholder="请输入书名或ISBN";
   }  
}  
