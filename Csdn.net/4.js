
// Traffic Stats of the entire Web site By baidu
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?6bcd52f51e9b3dce32bec4a3997715ac";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
/** toolbar是否悬浮*/
if(toolbarIsSuspension()){
    window.csdn.configuration_tool_parameterv({
        'need_first_suspend': true,//第一栏悬浮
        'need_little_suspend': false,//第二栏悬浮
        'little_tool_id': '' ,//第二栏id
        'little_need_insert_type': ''//第二栏需要模块类型
    })  
}
function toolbarIsSuspension(){
    if(window.csdn.configuration_tool_parameterv){
        return true;
    }else{
        return false;
    }
}
var flagStatus = true;
var scrollHight = $(document).scrollTop();
function leftBar(){
    if(flagStatus && scrollHight > 52){
    topInit = 45;
    window.csdn.fixedSidebar({
        targetBox: $('nav'), //判断到达底部的元素
        mainBox: $("main"), //侧边栏旁边的主体元素
        sidebar: $("nav"), //侧边栏主体元素，可与判断到达底部的元素相同
        direction: 'left', //侧边栏浮动方向
        position: 'fixed',//定位方式
        top:45,
        bottom: 0,
        zIndex: 99,
        sidebarRightMargin: 13,//direction为left,侧边栏距离mainbox的右边距
        sidebarLeftMargin: 15,//direction为right,侧边栏距离mainbox的左边距
    })
    flagStatus = false
    }
}
if(toolbarIsSuspension()){
    leftBar();
}else{
    window.csdn.fixedSidebar({
        targetBox: $('nav'), //判断到达底部的元素
        mainBox: $("main"), //侧边栏旁边的主体元素
        sidebar: $("nav"), //侧边栏主体元素，可与判断到达底部的元素相同
        direction: 'left', //侧边栏浮动方向
        position: 'fixed',//定位方式
        top:-6,
        bottom: 0,
        zIndex: 99,
        sidebarRightMargin: 13,//direction为left,侧边栏距离mainbox的右边距
        sidebarLeftMargin: 15,//direction为right,侧边栏距离mainbox的左边距
    })
}
//判断是否toolbar滚动
$(document).scroll(function() {
    scrollHight = $(document).scrollTop();
    if(toolbarIsSuspension()){
        leftBar();
    }
})
// Traffic Stats of the entire Web site By baidu end
window.csdn.fixedSidebar({
    targetBox: $('.persion_article'),
    mainBox: $("main"),
    sidebar: $("aside"),
    direction: 'right', 
    position: 'fixed',
    bottom: 0,
    zIndex: 99,
    sidebarRightMargin: 8,
    sidebarLeftMargin: 14,
})
