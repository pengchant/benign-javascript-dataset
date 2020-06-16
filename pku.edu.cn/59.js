
function searchallresbyetitle(){
   var form = document.getElementById("database-search-form");
   var title = form.title.value;
   
   form.titleofallres.value = title;
    if( title == "" || title == "Enter the database name") {
       form.action="http://dbnav.lib.pku.edu.cn";       
   } else {
       form.action=Drupal.settings.basePath + "en/db/search";
   }
   
}
