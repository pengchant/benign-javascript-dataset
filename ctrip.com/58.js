
    function initialAdvertiseIds()
    { 
        var valueIds = '';
        if(valueIds != ''){
            var advValue ="version=1.0&channelid=4&moduleid=hod_sr_ad_def&hoteladvertiseid_list="+valueIds;
            _tracklog("hotel.adimpression",advValue);
        }
    }

    //class为 list 的a标签bindclick
      
    function _tracklog(key,value){
        if(typeof window['__bfi'] == 'undefined') window['__bfi'] = [];
        window['__bfi'].push(['_tracklog', key, value]);
    };

    function hiddenAdvertise(boxName) {
        if(boxName){
            $("." + boxName).addClass("hidden");
        }else{
            $(".discount_box").addClass("hidden");
        }
    }
