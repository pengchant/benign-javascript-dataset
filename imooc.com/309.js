
var quesname="SQL Server 不存在或访问被拒绝 怎么办";   //问答名称

var url = 'https://www.imooc.com' + window.location.pathname;
window._bd_share_config = {
    "common":{
        "bdUrl": url,
        "bdSnsKey": {
            'tsina':'2788596354'
        },
        "bdText":quesname+""+"_慕课网_猿问",
        "bdMini":"2",
        "bdMiniList":false,
        "bdPic":"",
        "bdStyle":"0",
        "bdSize":"16"
    },
    share : [{
            "tag" : "share_1",
            "onBeforeClick":function(cmd,config){
                if(cmd=="qzone"){
                    config.bdText = quesname+url+"_慕课网_猿问";
                }else{
                    config.bdText = "[慕课猿问："+quesname+url+"(分享自@慕课网)#慕课爱分享#";
                }
                return config;
            }
        },{
            "tag" : "share_2",
            "onBeforeClick":function(cmd,config){
                if(cmd=="tsina"){
                    config.bdText = "我在慕课网(@慕课网) 提了一个问题“"+quesname+"”"+url;
                }else{
                    config.bdText = "我在慕课网 提了一个问题“"+quesname+"”"+url;
                }
                return config;
            }   
        },{
            "tag" : "share_3",
            "onBeforeClick":function(cmd,config){
                if(cmd=="tsina"){
                    config.bdText = "我在慕课网(@慕课网) 回答了“"+quesname+"”"+url+"快来围观";
                }else{
                    config.bdText = "我在慕课网 回答了“"+quesname+"”"+url+"快来围观";
                }
                return config;
            }   
        },
                        {
            "tag" : 'share_answer_315236',
            "bdUrl" : 'https://www.imooc.com/wenda/wdanswer/315236',
            "bdText":'[慕课猿问：SQL Server 不存在或访问被拒绝 怎么办 回答者:慕的地10843 (分享自@慕课网)#慕课爱分享#'
        }
                ,        {
            "tag" : 'share_answer_315237',
            "bdUrl" : 'https://www.imooc.com/wenda/wdanswer/315237',
            "bdText":'[慕课猿问：SQL Server 不存在或访问被拒绝 怎么办 回答者:慕少森 (分享自@慕课网)#慕课爱分享#'
        }
            ]
};
