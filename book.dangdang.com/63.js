
var newsuggesturl = "//schprompt.dangdang.com/suggest_new.php?";
var nick_num = 1;
initHeaderOperate();Suggest_Initialize("key_S");
if(!window.onload){
    window.onload=function(){if(sug_gid("label_key").style.visibility=="visible")sug_gid(search_input_id).value="";}
}else{
    var funcload=window.onload;
    window.onload=function(){funcload();if(sug_gid("label_key").style.visibility=="visible")sug_gid(search_input_id).value="";}
}
ddmenuaim(document.getElementById("menulist_content"),{activate: activateSubmenu,deactivate: deactivateSubmenu});
