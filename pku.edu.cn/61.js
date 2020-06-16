  
function change()  
{  
   var first = document.getElementById("select-first-dbtype");  
   var second = document.getElementById("select-second-searchtype");  
   var inputtext = document.getElementById("ejournal-search-field");
   second.options.length = 0; // 清除second下拉框的所有内容  
    if(first.selectedIndex == 0)  
   {  
        second.options.add(new Option("Title", "title_contains", false, true)); // 默认选中省会城市
        second.options.add(new Option("ISSN/ISBN", "issn_equals")); 
		inputtext.placeholder="Enter title or ISSN/ISBN";
   } 
   if(first.selectedIndex == 1)  
   {  
        second.options.add(new Option("Journal Title", "title_contains", false, true)); 
        second.options.add(new Option("ISSN", "issn_equals")); 
		inputtext.placeholder="Enter Journal title or ISSN";
   }  
  
   if(first.selectedIndex == 2)  
   {  
        second.options.add(new Option("Book Title", "title_contains", false, true)); 
        second.options.add(new Option("ISBN", "issn_equals"));  
		inputtext.placeholder="Enter Book title or ISBN";
   }  
}  
