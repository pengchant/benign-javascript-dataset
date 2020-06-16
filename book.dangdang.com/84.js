
    $(document).ready(function () {
        $("#model_268900_0_0 .mainProduct_list li").jTab({   
            'onClass'          : 'currentShow',
            'contentElements'  : $("#model_268900_0_0 .mainProductShow"),
            'scroll'           : 'right',
            'tagOrder'         : true,
            'timeout'          : 2000
        });
        
       
    });
 
    var model_268900_0_0 = function(){
        var pubCycleCountsDownTime = [];
        var pubCycleFourModel = {};
        pubCycleFourModel.countDown = {
            action:function(s){
                if(s > 0){
                    t=s;
                    arr=[];
                    arr["d"]=t/(60*60*24)<1?0:(t-t%(60*60*24))/(60*60*24);
                    t-=arr["d"]*60*60*24;
                    arr["h"]=t/(60*60)<1?0:(t-t%(60*60))/(60*60);
                    t-=arr["h"]*60*60;
                    arr["m"]=t/60<1?0:(t-t%(60))/(60);
                    t-=arr["m"]*60;
                    arr["s"] = t;   
                    return arr;
                }
            },
            show:function(index,el){
                var arr = this.action(el);
                if(pubCycleCountsDownTime[index]<=0){
                    delete pubCycleCountsDownTime[index];
                    $("#pubCycleFour_time_"+index).html("");
                 
                    var len = function(arr){
                        j=0;
                        for(var i in arr){
                            j++;
                        }
                        return j;
                    }
                
                    if(len(pubCycleCountsDownTime) <= 0){
                        clearInterval(pubCycleFourModel.auto);
                    }
                    return false;
                }
                pubCycleCountsDownTime[index] -= 60;      
                $("#pubCycleFour_time_"+index).html("还剩<strong>"+this._format(arr['d'])+"</strong>天<strong>"+this._format(arr["h"])+"</strong>时<strong>"+this._format(arr["m"])+"</strong>分钟结束");
            },
            _format:function(n){
                return n<10?"0"+n:n;
            },
            interval:function(){
                for(index in pubCycleCountsDownTime){
                    this.show(index,pubCycleCountsDownTime[index]);
                }
            },
            init:function(){
                $(".pubCycleFour_time").each(function(i,el){
                    var key = $(el).attr("pid");
                    var mid = $(el).attr("mid");
                    if(key == '' || mid == ""){
                        return false;
                    }
                    pubCycleCountsDownTime[key+"_"+mid] = $(el).attr("value");
                })
                this.interval();
            }
        };
        pubCycleFourModel.countDown.init();
        pubCycleFourModel.auto = setInterval(function(){ pubCycleFourModel.countDown.interval()},60000);
    }($);
