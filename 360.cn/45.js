;(function(){var tmpl=function(){var r={},n='sArrCMX.push("',t={"=":{tagG:"=",isBgn:1,isEnd:1,sBgn:'",QW.StringH.encode4HtmlValue(',sEnd:'),"'},js:{tagG:"js",isBgn:1,isEnd:1,sBgn:'");',sEnd:";"+n},js:{tagG:"js",isBgn:1,isEnd:1,sBgn:'");',sEnd:";"+n},"if":{tagG:"if",isBgn:1,rlt:1,sBgn:'");if',sEnd:"{"+n},elseif:{tagG:"if",cond:1,rlt:1,sBgn:'");} else if',sEnd:"{"+n},"else":{tagG:"if",cond:1,rlt:2,sEnd:'");}else{'+n},"/if":{tagG:"if",isEnd:1,sEnd:'");}'+n},"for":{tagG:"for",isBgn:1,rlt:1,sBgn:'");for',sEnd:"{"+n},"/for":{tagG:"for",isEnd:1,sEnd:'");}'+n},"while":{tagG:"while",isBgn:1,rlt:1,sBgn:'");while',sEnd:"{"+n},"/while":{tagG:"while",isEnd:1,sEnd:'");}'+n}};return function(g,s){var e=r[g];if(!e){for(var i=-1,a=[],l=[[/\{strip\}([\s\S]*?)\{\/strip\}/g,function(r,n){return n.replace(/[\r\n]\s*\}/g," }").replace(/[\r\n]\s*/g,"")}],[/\\/g,"\\\\"],[/"/g,'\\"'],[/\r/g,"\\r"],[/\n/g,"\\n"],[/\{[\s\S]*?\S\}/g,function(r){r=r.substr(1,r.length-2);for(var n=0;n<o.length;n++)r=r.replace(o[n][0],o[n][1]);var g=r;/^(=|.\w+)/.test(g)&&(g=RegExp.$1);var s=t[g];if(s){if(s.isBgn)var e=a[++i]={tagG:s.tagG,rlt:s.rlt};if(s.isEnd){if(i<0)throw new Error("Unexpected Tag: "+r);if(e=a[i--],e.tagG!=s.tagG)throw new Error("Unmatch Tags: "+e.tagG+"--"+g)}else if(!s.isBgn){if(i<0)throw new Error("Unexpected Tag:"+r);if(e=a[i],e.tagG!=s.tagG)throw new Error("Unmatch Tags: "+e.tagG+"--"+g);if(s.cond&&!(s.cond&e.rlt))throw new Error("Unexpected Tag: "+g);e.rlt=s.rlt}return(s.sBgn||"")+r.substr(g.length)+(s.sEnd||"")}return'",('+r+'),"'}]],o=[[/\\n/g,"\n"],[/\\r/g,"\r"],[/\\"/g,'"'],[/\\\\/g,"\\"],[/\$(\w+)/g,'opts["$1"]'],[/print\(/g,"sArrCMX.push("]],f=0;f<l.length;f++)g=g.replace(l[f][0],l[f][1]);if(i>=0)throw new Error("Lose end Tag: "+a[i].tagG);g=g.replace(/##7b/g,"{").replace(/##7d/g,"}").replace(/##23/g,"#"),g="var sArrCMX=[];"+n+g+'");return sArrCMX.join("");',r[g]=e=new Function("opts",g)}return arguments.length>1?e(s):e}}();var baseConf={guid:qboot.cookie.get('__guid'),huid:qboot.cookie.get('__huid'),mid:hao360.mid,protocol:hao360.isHttp()?'http':'https'};var conf={uid:baseConf.mid||baseConf.guid||baseConf.huid};var hotConf={sign:'360_cd00d92f',interface:{requestUrl:baseConf.protocol+'://papi.look.360.cn/cube_list',requestParams:{u:conf.uid||'',n:24,sign:'360_cd00d92f',f:'jsonp',version:'2.0',device:2,c:'newdhhot',sv:1,net:5,datafmt:'p1:i14:t,p2:i14:t,p3:l0:t,p4:l0:t,p5:l0:t,p6:l0:t',cubeid:'newdhhot',page:4},channel:'newdhhot',timeout:2000}};conf=qboot.mix(hotConf||{},conf);var format=function(res){try{if(!res.data.res){return null;}var result=[],data=res.data.res,length=data.length,sid=res.sid;if(data.length<6){return null;}for(var i=0;i<length;i++){var item=data[i],promot_image='';if(item.i){var coversTemp=item.i.split('|');promot_image=coversTemp[0];}var s_log={uid:conf.uid,sqid:'',gnid:item.gnid,url:item.u,pcurl:item.pcurl,sign:conf.sign,version:'1.0',market:'pc_def',device:2,net:5,sv:4,stype:'portal',t:(new Date()).getTime(),channel:conf.interface.channel,act:'click',a:item.a,c:item.c,source:item.source,s:item.s,style:item.style||'',sid:sid,func:'',where:'list',ext:(Math.floor(i/6)+1)+'_'+(i%6+1),scene:'2_1',refer_scene:2};var show_log=[item.gnid,item.a,item.c,item.source,item.s,item.style||'',hotConf.interface.timeout,sid];var formateItem={uid:conf.uid,img:promot_image,l_title:item.t,s_title:item.t,title:item.t,url:item.pcurl,clicklog:JSON.stringify(s_log),showlog:JSON.stringify(show_log),ext:s_log.ext};if(item.recalltype.split('_')[0]=='dhbj'&&/^https?:\/\/item\.btime\.com\//.test(item.rawurl)){formateItem.url=item.rawurl;}result.push(formateItem);}return result;}catch(e){}};var render=function(res){var list=format(res),length=list&&list.length;if(list&&length){var newList=list.splice(0,24);if(HOT_TOUTIAO_OPERATE&&HOT_TOUTIAO_OPERATE.operate){var operateData=HOT_TOUTIAO_OPERATE.operate;operateData.data_type="operate";newList.splice(19,1,operateData)}var hotTmpl=hao360.g('hot-toutiao-v2-template').innerHTML,hotHtml=tmpl(hotTmpl,{'list':newList});if(hotHtml){var $lookDom=hao360.g('js-hottoutiao-v2-tab');$lookDom.innerHTML=hotHtml;$lookDom.className=$lookDom.className.replace('operator-data','individual-data');return true;}};return false;};var getData=function(){var defer=qboot.when.defer();qboot.jsonp(conf.interface.requestUrl,conf.interface.requestParams,function(res,statusObj){if(res&&res.data&&res.errno===0){defer.resolve(res);}else{var reason=statusObj?statusObj.reason:'res && res.data && res.errno === 0 is false';defer.reject({res:res,reason:reason});}},{'jsonp':'callback','timeout':conf.interface.timeout});return defer.promise;};var showDefault=function(){qboot.load.css('#infoflow-right-nav-ul li{padding-top:3px;}');document.getElementById('hot_toutiao_v2').style.display='none';};var loadData=function(){getData().then(function(res){window.HOT_NEWS_DATA=res;HOT_NEWS_DATA.isRenderSuccess=render(res);if(!HOT_NEWS_DATA.isRenderSuccess){showDefault();LogHub.behavior('hot_toutiao_2020_v2','hot_toutiao_format_error');}},function(){if(window.HOT_NEWS_DATA){HOT_NEWS_DATA.isBackUp=true;HOT_NEWS_DATA.isRenderSuccess=render(HOT_NEWS_DATA);if(!HOT_NEWS_DATA.isRenderSuccess){showDefault();LogHub.behavior('hot_toutiao_2020_v2','HOT_NEWS_DATA format error');}LogHub.behavior('hot_toutiao_2020_v2','hot_toutiao_api_timeout');}else{showDefault();LogHub.behavior('hot_toutiao_2020_v2','HOT_NEWS_DATA null');}});};loadData();})();