
try {
    var focusParams = [
                         {
            "id" :   "402175614",
            "path"  :   "/a/402175614_448414",
            "title" :   "看到我国装备集结后，印度服软！莫迪发出求和信号",
            "picUrl" :   "//p9.itc.cn/c_fill,w_600,h_300,g_faces/images01/20200616/bb1162973c7043a6a8cb718271c3d0e5.png",
            "mediaId" :"448414",
            "id" :   "402175614"
        }                , {
            "id" :   "402160397",
            "path"  :   "/a/402160397_100145046",
            "title" :   "不用歼20出手，美国自家人就让美军白日梦破灭，把F-35打回原形",
            "picUrl" :   "//p3.itc.cn/c_fill,w_600,h_300,g_faces/images01/20200616/e97bf02301654db5991fb65e551bcc48.jpeg",
            "mediaId" :"100145046",
            "id" :   "402160397"
        }                , {
            "id" :   "402171118",
            "path"  :   "/a/402171118_754174",
            "title" :   "2020年全球核弹头数量出炉，俄罗斯6275枚，美国5800枚，我们多少？",
            "picUrl" :   "//p7.itc.cn/c_fill,w_600,h_300,g_faces/images01/20200616/eec9f48ff86e4b5395375c72e826b8f0.png",
            "mediaId" :"754174",
            "id" :   "402171118"
        }                , {
            "id" :   "402161025",
            "path"  :   "/a/402161025_204190",
            "title" :   "同样是隐身战机，歼20机头看起来坑坑洼洼，美军战机却干净整洁？",
            "picUrl" :   "//p7.itc.cn/c_fill,w_600,h_300,g_faces/images01/20200616/7b3b4506bb384f8ea37257a8550070e3.jpeg",
            "mediaId" :"204190",
            "id" :   "402161025"
        }                , {
            "id" :   "402175652",
            "path"  :   "/a/402175652_448414",
            "title" :   "叫板印度要夺回领土，尼泊尔何来底气？世界最牛雇佣军不只是传说",
            "picUrl" :   "//p3.itc.cn/c_fill,w_600,h_300,g_faces/images01/20200616/f9add0e4947c4e6f99b19fe2179d8ba1.jpeg",
            "mediaId" :"448414",
            "id" :   "402175652"
        }            ];
    window.activeAd = {
                    }

    window.sohu_mp.channel({
        channel_id: "10",
        focus: focusParams
    });
}
catch(e){
    console.log(e);
        var html = '<div class="err-js">' +
                    '<span><em class="icon err-js-icon"></em>JS加载错误，请重新加载。</span>' +
                    '<a href="javascript:window.location.reload()" target="_blank" class="cached-btn"' +
                    '><em class="icon-cached"></em>刷新</a></div>';
        $(document.body).prepend(html);
        //捕获错误
        console.log(e);
        // Raven.captureException(e);
}
