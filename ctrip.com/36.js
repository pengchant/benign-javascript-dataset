
        var g_adsconfig = '//webresource.c-ctrip.com/ResHotelOnline/R8/search/js.min/hotelhomectrip.js?releaseno=2020-06-13-18-12-16';
        //
        function hotpmouseOver(obj) {
            obj.className = "hover";
        }
        function hotpmouseOut(obj) {
            obj.className = "";
        }


        function initialAdvertiseList()
        { 
            var valueList = '960,807,580,579,1044';
            var advValue ="version=1.0&channelid=4&moduleid=hod_hp_ad_def&hoteladvertiseid_list="+valueList;
            _tracklog("hotel.adimpression",advValue);
        }

        //class 为   side_sales_h144 de a标签bindclick
        //class 为 J_specialtitle 的td下的子节点 a标签绑定click
      
            
         

        function _tracklog(key,value){
            if(typeof window['__bfi'] == 'undefined') window['__bfi'] = [];
            window['__bfi'].push(['_tracklog', key, value]);
        };

    