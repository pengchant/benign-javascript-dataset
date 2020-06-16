
//footer 标签切换
function SwitchNewsTag_1(id, num, count) {
    ClearTagClass_1(id, count);
    document.getElementById("tab_" + id + num).className = "current";
    document.getElementById(id + num).style.display = "";
}
function ClearTagClass_1(id, count) {
    for (i = 1; i <= count; i++) {
        document.getElementById("tab_" + id + i).className = "";
        document.getElementById(id + i).style.display = "none";
    }
} 
