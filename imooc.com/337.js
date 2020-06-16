
var quesname="Java：在指定文件夹中查找.txt文件";   //问答名称

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
            "tag" : 'share_answer_681482',
            "bdUrl" : 'https://www.imooc.com/wenda/wdanswer/681482',
            "bdText":'[慕课猿问：Java：在指定文件夹中查找.txt文件 回答者:料青山看我应如是 (分享自@慕课网)#慕课爱分享#'
        }
                ,        {
            "tag" : 'share_answer_681483',
            "bdUrl" : 'https://www.imooc.com/wenda/wdanswer/681483',
            "bdText":'[慕课猿问：Java：在指定文件夹中查找.txt文件 回答者:慕雪9262066 (分享自@慕课网)#慕课爱分享#'
        }
                ,        {
            "tag" : 'share_answer_681484',
            "bdUrl" : 'https://www.imooc.com/wenda/wdanswer/681484',
            "bdText":'[慕课猿问：Java：在指定文件夹中查找.txt文件 回答者:喵喵时光机 (分享自@慕课网)#慕课爱分享#'
        }
            ]
};
