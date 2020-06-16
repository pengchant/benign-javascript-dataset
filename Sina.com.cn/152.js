
    function Schedule(e){e="string"==typeof e?[e]:e||[],this.ranges=[];var t,n=0,r=e.length,i,s,o=new Date,u=o.getFullYear()+"/"+(o.getMonth()+1)+"/"+o.getDate();for(;n<r;n++)t=e[n].replace(/\-/g,"/").split("~"),i=t[0],s=t[1]?t[1]:t[0],i.indexOf(":")===-1&&(i+=" 0:0:0"),s.indexOf(":")===-1&&(s+=" 0:0:0"),i.indexOf("/")===-1&&(i=u+" "+i),s.indexOf("/")===-1&&(s=u+" "+s),i=+this.parse(i),s=+this.parse(s),s<=i&&(s+=864e5),this.ranges[n]=[i,s]}Schedule.prototype={check:function(e){var t=this.ranges,n=0,r,i=t.length<=0,e=e?+this.parse(e):+(new Date);while(!i&&(r=t[n++]))i=e>=r[0]&&e<=r[1];return i},parse:function(e){var t=new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+$");if("string"==typeof e){if(t.test(e)||isNaN(Date.parse(e))){var n=e.split(/ |T/),r=n.length>1?n[1].split(/[^\d]/):[0,0,0],i=n[0].split(/[^\d]/);return new Date(i[0]-0,i[1]-1,i[2]-0,r[0]-0,r[1]-0,r[2]-0)}return new Date(e)}return e}}
    if (new Schedule('2017-11-11 00:00:00~2017-11-11 23:59:59').check()) {
        _sinaadsCacheData = window._sinaadsCacheData || {};
        _sinaadsCacheData['texingxibao'] = {
            "type" : "stream",
            "content" : [
                {
                    "monitor":[""],
                    "link":[""], 
                    "type":["js"], 
                    "pv":[],
                    "src":[
                        "//rm.sina.com.cn/bj-icast/mv/cr/2017/10/251633/50146/code.js"
                    ]
                }
            ],
            "size":"600*280",
            "id":"texingxibao"
        };
    }
