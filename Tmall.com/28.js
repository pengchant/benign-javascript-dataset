

//反馈入口
var newUeUrl ={
    nvzhuang: "//feedback.taobao.com/pc/feedbacks?productId=329&source=nvzhuang.tmall",
    nanzhuang: "//feedback.taobao.com/pc/feedbacks?productId=329&source=nanzhuang.tmall",
    nvxie: "//feedback.taobao.com/pc/feedbacks?productId=329&source=nvxie.tmall",
    nanxie: "//feedback.taobao.com/pc/feedbacks?productId=329&source=nanxie.tmall",
    neiyi: "//feedback.taobao.com/pc/feedbacks?productId=329&source=neiyi.tmall",
    huwai: "//feedback.taobao.com/pc/feedbacks?productId=329&source=sports.tmall",
    sports: "//feedback.taobao.com/pc/feedbacks?productId=329&source=sports.tmall",
    xiangbao: "//feedback.taobao.com/pc/feedbacks?productId=329&source=bag.tmall"
 }

if(newUeUrl[window.g_config.bizId]){
    window.g_config["ueUrl"]= newUeUrl[window.g_config.bizId];
}

//顶部导航激活
KISSY.ready(function (S) {
    S.use("node", function () {
        var curSpmMeta = document.getElementsByName("spm-id")[0];
        var curSpm = curSpmMeta.content;
        var navList = S.one(".mallNav-main").all("li");
        var isCurSet = false;
        navList.each(function (item) {
            if (!isCurSet) {
                var itemSpmId = item.attr("data-nav-spmId");
                if (curSpm == itemSpmId) {
                    item.addClass("curChn");
                    isCurSet = true;
                }
            }
        });
        if (!isCurSet && navList.item(0)) {
            navList.item(0).addClass("curChn");
        }
    });

});
