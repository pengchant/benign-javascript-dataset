
(function(){
try{
    var img = document.querySelector('#key-visual-main img');
    if(!img)return;
    if(img.complete){
        img.setAttribute('ftime', new Date().getTime());
    }else{
        img.onload = function(){img.setAttribute('ftime', new Date().getTime());}
    }
}catch(e){}
})();
!(function(c,b,d,a){c[a]||(c[a]={});c[a].config={
    pid:"f1fxt4k42w@603c0c54f7887fb",
    appType:"web",
    useFmp: true,
    page:"en_US" + "HomePage",
    imgUrl:"https://retcode-us-west-1.arms.aliyuncs.com/r.png?",
    ignore: {
        ignoreApis: [function(str){
            return !(/.aliexpress.com\//.test(str) || /^\//.test(str));
        }]
    },
    sample: 4};
with(b)with(body)with(insertBefore(createElement("script"),firstChild))setAttribute("crossorigin","",src=d)
})(window,document,"https://g.alicdn.com/retcode/cloud-sdk/bl.js","__bl");
