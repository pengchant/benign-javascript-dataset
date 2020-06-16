
var quesname="画一个半径为半径并指向边缘的圆";   //问答名称

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
            "tag" : 'share_answer_644930',
            "bdUrl" : 'https://www.imooc.com/wenda/wdanswer/644930',
            "bdText":'[慕课猿问：画一个半径为半径并指向边缘的圆 回答者:慕桂英4014372 (分享自@慕课网)#慕课爱分享#'
        }
                ,        {
            "tag" : 'share_answer_644931',
            "bdUrl" : 'https://www.imooc.com/wenda/wdanswer/644931',
            "bdText":'[慕课猿问：画一个半径为半径并指向边缘的圆 回答者:30秒到达战场 (分享自@慕课网)#慕课爱分享#'
        }
                ,        {
            "tag" : 'share_answer_644932',
            "bdUrl" : 'https://www.imooc.com/wenda/wdanswer/644932',
            "bdText":'[慕课猿问：画一个半径为半径并指向边缘的圆 回答者:芜湖不芜 (分享自@慕课网)#慕课爱分享#'
        }
            ]
};
