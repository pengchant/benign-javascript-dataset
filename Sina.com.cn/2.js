
//空对象返回true
var isIplookEmpty = function (obj){
    for (var i in obj) {
        return false;
    }
    return true;
}
if( isIplookEmpty(remote_ip_info) || typeof remote_ip_info === "undefined"){
    var remote_ip_info = {"ret":1,"start":-1,"end":-1,"country":"\u4e2d\u56fd","province":"\u5317\u4eac","city":"\u5317\u4eac","district":"","isp":"","type":"","desc":""};
}   
