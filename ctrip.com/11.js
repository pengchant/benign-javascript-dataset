
    var PluginsVersion = {
      tab: "1.2",
      address: "1.0",
      calendar: "6.0",
      notice: "1.0",
      toggle: "1.0",
      validate: "1.1",
      allyes: "1.0",
      adFrame: "1.0",
      dropBox: "1.0"
    };
    var SSH_HOTEL_CONFIG = {
      addressMessageConfig: {
        cityname: {
          suggestionB: "支持中文/拼音/简拼输入",
          suggestion:
            "<strong>热门城市</strong>（可直接选择城市或输入城市全拼/简拼）"
        },
        searchHistory: "搜索历史",
        addressTab: "省市",
        hotelPos: {
          suggestion: "可直接选择地理位置或输入位置关键词",
          titles: {
            zone: "商业区",
            location: "行政区",
            metro: "地铁线"
          },
          showAMap: false,
          AMapTitle: "查看商业区地图",
          all: "全部",
          subCity: "下辖市/县："
        },
        suggestTitle: ["名称", "机场火车站", "位置"],
        defaultValue: ["上海", "2", "shanghai"]
      },
      validateMessageConfig: {
        hotel: {
          city: "请选择酒店所在城市",
          checkIn: "请选择入住日期",
          checkOut: "请选择离店日期",
          dateErr: "日期格式为yyyy-mm-dd",
          too_early_in: "入住日期不能早于今天",
          too_early_out: "您选择的离店日期早于/等于入住日期，请重新选择",
          too_long: "您入住酒店时间超过28天，请分订单提交预订",
          no_room: "您选择的日期没有房间可供预订!",
          room_num: "请选择预订房间数",
          noExistCity: "目的地{city}不存在"
        }
      },
      noticeMessageConfig: ["中文/拼音"],
      tmpl: {
        citySuggestion:
          '\
            {{if (data = Help.format(data))}}{{/if}}\
            <div class="city_select_lhsl">\
                <a class="close CQ_suggestionClose" href="javascript:;">×</a>\
                <p class="title">支持中文/拼音/简拼输入</p>{{tmpl searchHistoryList }}\
                <ul class="tab_box">{{enum(key) data}}<li><span>${key}</span></li>{{/enum}}</ul>\
                {{enum(key,objs) data}}\
                <div class="city_item">\
                    {{enum(k,arr) objs}}\
                        {{if (k)}}\
                        <div class="city_item_in">\
                            <span class="city_item_letter">${k}</span>\
                        {{else}}\
                        <div>\
                        {{/if}}\
                        {{each(index, item) arr}}<a href="javascript:void(0);" data="${item.data}">${item.display}</a>{{/each}}\
                        </div>\
                    {{/enum}}\
                </div>\
                {{/enum}}\
            </div>',
        citySuggestionIPad:
          '\
            {{if (data = Help.format($data.data))}}{{/if}}\
            <div class="city_select_lhsl">\
            <p class="title">\
                <a class="close CQ_suggestionClose" href="javascript:;">&times;</a></p>\
                <div class="key_word_key"><div class="CQ_suggestionKeyboard ico_key">显示键盘</div></div>\
                {{tmpl searchHistoryList}}\
                <ul class="tab_box CQ_suggestionTabContainer">\
                    {{enum(key) data}}\
                        <li class="CQ_suggestionTab"><span>${key}</span></li>\
                    {{/enum}}\
                </ul>\
                {{enum(key,objs) data}}\
                <div class="city_item CQ_suggestionPanel">\
                    {{enum(k,arr) objs}}\
                        {{if (k)}}\
                        <div class="city_item_in">\
                            <span class="city_item_letter">${k}</span>\
                        {{else}}\
                        <div>\
                        {{/if}}\
                        {{each(index, item) arr}}<a href="javascript:void(0);" data="${item.data}">${item.display}</a>{{/each}}\
                        </div>\
                    {{/enum}}\
                </div>\
                {{/enum}}\
             </div>',
        citySuggestionStyle:
          '\
            .city_select_lhsl{width:408px;padding:10px;border:1px solid #999;background-color:#fff;}\
            .city_select_lhsl .close{float:right;width:20px;height:20px;color:#666;text-align:center;font:bold 16px/20px Simsun;}\
            .city_select_lhsl .close:hover{text-decoration:none;color:#FFA800;}\
            .city_select_lhsl .title{margin-bottom:10px;color:#999;}\
            .city_select_lhsl .tab_box{width:100%;height:22px;margin-bottom:6px;margin-top:0;border-bottom:2px solid #ccc;}\
            .city_select_lhsl .tab_box li{position:relative;float:left;display:inline;margin-right:2px;line-height:22px;cursor:pointer;}\
            .city_select_lhsl .tab_box li b{display:none;}\
            .city_select_lhsl .tab_box li span{padding:0 8px;}\
            .city_select_lhsl .tab_box .hot_selected{border-bottom:2px solid #06c;margin-bottom:-2px;font-weight:bold;color:#06c;}\
            .city_select_lhsl .tab_box .hot_selected b{position:absolute;top:23px;left:50%;display:block;width:0;height:0;margin-left:-5px;overflow:hidden;font-size:0;line-height:0;border-color:#06c transparent transparent transparent;border-style:solid dashed dashed dashed;border-width:5px;}\
            .city_select_lhsl .city_item, .city_select_lhsl .search_history_box {display:inline-block;*zoom:1;overflow:hidden;}\
            .city_select_lhsl .city_item{width:408px;}\
            .city_select_lhsl .city_item a, .city_select_lhsl .search_history_box a {float:left;display:inline;width:52px;height:22px;margin:0 2px 2px 0;padding-left:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:22px;color:#333;}\
            .city_select_lhsl .city_item a:hover,.city_select_lhsl .search_history_box a:hover{background-color:#2577E3;text-decoration:none;color:#fff;}\
            .city_item .city_item_in{width:378px;padding-left:30px;*zoom:1;}\
            .city_item .city_item_in:after,.city_select_lhsl .search_history_box:after{display:block;height:0;visibility:hidden;overflow:hidden;content:".";clear:both;}\
            .city_item .city_item_letter{float:left;width:30px;height:22px;margin-left:-30px;line-height:22px;text-align:center;color:#E56700;}\
            .city_select_lhsl .sarch_history_title{margin-bottom:2px;font-weight:bold;color:#06c;}\
            .city_select_lhsl .search_history_box{margin-bottom:6px;}',
        citySuggestionStyleIPad:
          '\
            .city_select_lhsl{position:relative;width:520px;padding:10px;border:1px solid #999;background-color:#fff;font-size:16px;}\
            .key_word_key{height:48px;}\
            .ico_key,.ico_unkey{width:92px;height:43px;padding-left:65px;background:url(//pic.c-ctrip.com/ctripOnPad/un_key20131012.png) 10px 11px no-repeat;cursor:pointer;line-height:40px;font-size:18px;border-width:1px;border-style:solid;border-radius:3px;}\
            .ico_key{border-color:#f0f0f0 #cfcfcf #707070;box-shadow:0 1px 0 #cfcfcf,1px 0 0 0 #f0f0f0 inset,-1px 0 0 0 #f0f0f0 inset,0 -1px 0 0 #f0f0f0 inset;}\
            .ico_unkey{border-color:#898989 #e2e2e2 #e2e2e2;background-color:#f5f5f5;box-shadow:0 -1px 0 #e2e2e2,0 1px 0 #d1d1d1 inset;}\
            .city_select_lhsl .close{float:right;width:30px;height:30px;line-height:30px;text-align:center;color:#666;font:bold 22px/30px "Heiti SC","Heiti SC light",STHeiti,STXihei,sans-serif;}\
            .city_select_lhsl .title{position:absolute;z-index:1;top:10px;right:10px;color:#999;}\
            .city_select_lhsl .tab_box{height:30px;margin-bottom:10px;margin-top:0;border-bottom:2px solid #ccc;}\
            .city_select_lhsl .tab_box li{position:relative;z-index:1;float:left;display:inline;margin-right:10px;line-height:30px;cursor:pointer;}\
            .city_select_lhsl .tab_box li span{padding:0 8px;}\
            .city_select_lhsl .tab_box .hot_selected{border-bottom:2px solid #06c;margin-bottom:-2px;font-weight:bold;color:#06c;}\
            .city_select_lhsl .city_item{display:inline-block;width:520px;}\
            .city_select_lhsl .city_item a,.city_select_lhsl .search_history_box a{float:left;display:inline;width:70px;height:30px;margin:0 2px 10px 0;padding-left:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:30px;color:#333;}\
            .city_item .city_item_in{width:490px;padding-left:30px;min-height:40px;}\
            .city_item .city_item_in:after{display:block;height:0;visibility:hidden;overflow:hidden;content:".";clear:both;}\
            .city_item .city_item_letter{float:left;width:30px;height:30px;margin-left:-30px;line-height:30px;text-align:center;color:#E56700;}\
            .city_select_lhsl .sarch_history_title{margin-bottom:10px;font-weight:bold;color:#06c;}\
            .city_select_lhsl .search_history_box{margin-bottom:10px;}\
            .city_select_lhsl .search_history_box:after{display:block;clear:both;visibility:hidden;overflow:hidden;height:0;content:".";}\
            .city_select_lhsl .search_history_box a{margin-bottom:0;}',
        cityFilter:
          '\
            {{if $data.hasResult}}\
            <div class="keyword_prompting_lhsl city_suggestion_pop">\
                <p class="title">\
                    <a class="close CQ_suggestionClose" href="javascript:;">×</a>\
                    <span class="text_input">${$data.val}，</span>若需缩小范围，请输入更多条件。\
                </p>\
                {{if (obj = Help.groupCityFilterData($data.list))}}{{/if}}\
                {{if (city = obj.City || []).length}}\
                    <div class="sug_item item_list_city">\
                       {{each (i,item) city}}\
                            <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
                                {{if (i == 0)}}<div class="sug_category">城市</div>{{/if}}\
                                {{if (arr=item.data.split("|"))}}{{/if}}\
                                <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>\
                                <!--span class="num">${arr[3] || 0}家酒店</span-->\
                            </a>\
                        {{/each}}\
                    </div>\
                {{/if}}\
                {{if (district = obj.District || []).length}}\
                    <div class="sug_item item_list_scenic">\
                        {{each (i,item) district}}\
                            <a class="city_item" href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
                                {{if (arr=item.data.split("|"))}}{{/if}}\
                                {{if (i == 0)}}<div class="sug_category">景区</div>{{/if}}\
                                <span class="city">{{tmpl Help.highlight(arr[1] + arr[5], $data.val)}}</span>\
                                <!--span class="num">${arr[3] || 0}家酒店</span-->\
                            </a>\
                        {{/each}}\
                    </div>\
                {{/if}}\
                {{if (sight = obj.Sight || []).length}}\
                    <div class="sug_item item_list_attractions">\
                        {{each (i,item) sight}}\
                            <a class="city_item" href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
                                {{if (i == 0)}}<div class="sug_category">景点</div>{{/if}}\
                                {{if (arr=item.data.split("|"))}}{{/if}}\
                                <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>\
                                <!--span class="num">${arr[3] || 0}家酒店</span-->\
                            </a>\
                        {{/each}}\
                    </div>\
                {{/if}}\
                {{if (loc = obj.Location || []).length}}\
                    <div class="sug_item item_list_areaadmin">\
                        {{each (i,item) loc}}\
                            <a class="city_item" href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
                                {{if (i == 0)}}<div class="sug_category">行政区</div>{{/if}}\
                                {{if (arr=item.data.split("|"))}}{{/if}}\
                                <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>\
                                <!--span class="num">${arr[3] || 0}家酒店</span-->\
                            </a>\
                        {{/each}}\
                    </div>\
                {{/if}}\
                {{if (domesticZone = obj.DomesticZone || []).length}}\
                    <div class="sug_item item_list_business">\
                        {{each (i,item) domesticZone}}\
                            <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
                                {{if (i == 0)}}<div class="sug_category">商业区</div>{{/if}}\
                                {{if (arr=item.data.split("|"))}}{{/if}}\
                                <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>\
                                <!--span class="num">${arr[3] || 0}家酒店</span-->\
                            </a>\
                        {{/each}}\
                    </div>\
                {{/if}}\
                {{if (airport = obj.Airport || []).length}}\
                    <div class="sug_item item_list_airport">\
                        {{each (i,item) airport}}\
                            <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
                                {{if (i == 0)}}<div class="sug_category">机场</div>{{/if}}\
                                {{if (arr=item.data.split("|"))}}{{/if}}\
                                <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>\
                                <!--span class="num">${arr[3] || 0}家酒店</span-->\
                            </a>\
                        {{/each}}\
                    </div>\
                {{/if}}\
                {{if (railwayStation = obj.RailwayStation || []).length}}\
                    <div class="sug_item item_list_train">\
                        {{each (i,item) railwayStation}}\
                            <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
                                {{if (i == 0)}}<div class="sug_category">火车站</div>{{/if}}\
                                {{if (arr=item.data.split("|"))}}{{/if}}\
                                <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>\
                                <!--span class="num">${arr[3] || 0}家酒店</span-->\
                            </a>\
                        {{/each}}\
                    </div>\
                {{/if}}\
                {{if $data.page.max>0}}\
                    <div class="c_page_mini" style="display: block;">\
                        {{if $data.page.current>0}}\
                            <a href="javascript:void(0);" page="${$data.page.current-1}">&lt;-</a>\
                        {{/if}}\
                        {{if $data.page.current<2}}\
                            {{loop(index) Math.min(5,$data.page.max+1)}}\
                                <a href="javascript:void(0);"{{if $data.page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>\
                            {{/loop}}\
                        {{else $data.page.current>$data.page.max-2}}\
                            {{loop(index) Math.max(0,$data.page.max-4),$data.page.max+1}}\
                                <a href="javascript:void(0);"{{if $data.page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>\
                            {{/loop}}\
                        {{else}}\
                            {{loop(index) Math.max(0,$data.page.current-2),Math.min($data.page.current+3,$data.page.max+1)}}\
                                <a href="javascript:void(0);"{{if $data.page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>\
                            {{/loop}}\
                        {{/if}}\
                       {{if $data.page.current<$data.page.max}}\
                            <a href="javascript:void(0);" page="${$data.page.current+1}">-&gt;</a>\
                        {{/if}}\
                    </div>\
                {{/if}}\
                {{if (scenicList = Help.getScenic(district))}}{{/if}}\
                {{if scenicList && scenicList.length}}\
                    <div class="city_scenic_pic" style="width:400px;height:298px;left:399px;">\
                        {{each (i,item) scenicList}}\
                            {{if (i==0)}}<img src="${item.pic}" width="400" height="298">{{/if}}\
                            <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" style="position:absolute;top:${item.top}px;left:${item.left}px;text-decoration:none;">\
                                <div class="scenic_mark">\
                                    <span class="scenic_map_num"></span>\
                                    <div class="scenic_mark_inner"><span class="scenic_mark_name">${item.name}</span></div>\
                                </div>\
                            </a>\
                        {{/each}}\
                    </div>\
                {{/if}}\
            </div>\
            {{else}}\
            <div class="keyword_prompting_lhsl notfound_pop">\
                <p class="title"><a class="close CQ_suggestionClose" href="javascript:;">×</a>对不起，找不到：${$data.val}</p>\
            </div>\
            {{/if}}',
        cityFilterStyle:
          '\
            .keyword_prompting_lhsl{width:398px; border:1px solid #999; background-color:#fff;}\
            .keyword_prompting_lhsl .title{height:26px; margin:0 10px 4px; padding:0 2px; border-bottom:1px dotted #ccc; line-height:26px; color:#999;}\
            .keyword_prompting_lhsl .close{float:right; width:26px; height:26px; font:bold 14px/26px Simsun; color:#666; text-align:center;}\
            .keyword_prompting_lhsl .close:hover { text-decoration:none; color:#FFA800; }\
            .keyword_prompting_lhsl .sug_item{padding-bottom: 5px; padding-top:5px; border-bottom: 1px solid #ccc; position:relative;*zoom:1;}\
            .keyword_prompting_lhsl .sug_item a{display:block; overflow:hidden; padding:5px 7px 5px 10px; color:#333;  line-height:18px; cursor:pointer;*zoom:1;}\
            .keyword_prompting_lhsl .sug_item .hover { background-color:#2577e3; color:#fff; text-decoration:none;}\
            .keyword_prompting_lhsl .sug_item .hover span, .keyword_prompting_lhsl .sug_item .hover b{color:#fff;}\
            .notfound_pop{ padding-bottom: 4px;}\
            .notfound_pop .title{ line-height:26px; overflow: hidden; margin:0 10px 4px; padding:0 2px; color: #c01111; border-bottom: 0 none;}\
            .notfound_pop .close{ margin-top: 2px;}\
            .keyword_prompting_lhsl .text_input { float:left; max-width:160px; _width:160px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }\
            .keyword_prompting_lhsl .sug_item a:after{ clear:both; content:"."; display:block; height:0; overflow:hidden; }\
            .keyword_prompting_lhsl .sug_item .num { float:left; width:75px; overflow: hidden; color:#999; text-align: right;}\
            .keyword_prompting_lhsl .sug_item .city { display:block; float: left; width:270px; padding-right:4px; overflow:hidden;}\
            .city_suggestion_pop .sug_item .city {width:195px; height:18px; white-space:nowrap; text-overflow:ellipsis;}\
            .keyword_prompting_lhsl .sug_item b{font-weight:bold; color:#06c; }\
            .keyword_prompting_lhsl .sug_category{ float:right; height:18px; line-height:18px; background-image:url(//pic.c-ctrip.com/hotels121118/ico_search_box_2.png); background-repeat: no-repeat;width:62px; padding-right:20px; padding-left:0; text-align:right;}\
            .keyword_prompting_lhsl .sug_category_hover{ color: #fff; background-color: #2577e3; background-position: right 6px; background-color:#2577e3; }\
            .keyword_prompting_lhsl .item_list_city .sug_category{background-position: right -33px;}\
            .keyword_prompting_lhsl .item_list_city .hover .sug_category{background-position: right 2px;}\
            .keyword_prompting_lhsl .item_list_airport .sug_category{background-position: right -105px;}\
            .keyword_prompting_lhsl .item_list_airport .hover .sug_category{background-position: right -67px;}\
            .keyword_prompting_lhsl .item_list_hotel .sug_category{background-position: right -165px;}\
            .keyword_prompting_lhsl .item_list_hotel .hover .sug_category{background-position: right -133px;}\
            .keyword_prompting_lhsl .item_list_landmarks .sug_category{background-position: right -204px;}\
            .keyword_prompting_lhsl .item_list_landmarks .hover .sug_category{background-position: right -238px;}\
            .keyword_prompting_lhsl .item_list_scenic .sug_category{background-position: right -271px;}\
            .keyword_prompting_lhsl .item_list_scenic .hover .sug_category{background-position: right -303px;}\
            .keyword_prompting_lhsl .item_list_traffic .sug_category{background-position: right -336px; padding-right:40px;}\
            .keyword_prompting_lhsl .item_list_traffic .hover .sug_category{background-position: right -372px;}\
            .keyword_prompting_lhsl .item_list_areaadmin .sug_category{background-position: right -410px;}\
            .keyword_prompting_lhsl .item_list_areaadmin .hover .sug_category{background-position: right -447px;}\
            \
            .keyword_prompting_lhsl .item_list_train .sug_category{background-position: right -482px;}\
            .keyword_prompting_lhsl .item_list_train .hover .sug_category{background-position: right -518px;}\
            \
            .keyword_prompting_lhsl .item_list_business .sug_category{background-position: right -557px;}\
            .keyword_prompting_lhsl .item_list_business .hover .sug_category{background-position: right -596px;}\
            \
            .keyword_prompting_lhsl .item_list_attractions .sug_category{background-position: right -635px;}\
            .keyword_prompting_lhsl .item_list_attractions .hover .sug_category{background-position: right -674px;}\
            \
            .city_suggestion_pop .sug_item .num {float:left; width:80px; overflow:hidden; color:#999; text-align:right;}\
            .city_suggestion_pop .city_scenic_pic{position:absolute; border:1px solid #999; display:none;}\
            .city_suggestion_pop .city_scenic_pic img{display:block;}\
            .city_suggestion_pop .scenic_mark{padding-left:21px;padding-top:1px;height:27px;overflow:hidden;cursor:default;white-space:nowrap; cursor:pointer;}\
            .city_suggestion_pop .scenic_mark .scenic_map_num{position:absolute;top:0;left:0;width:21px;height:27px;z-index:3;background: url(//pic.c-ctrip.com/hotels_seo/scenic_mark.png) no-repeat;_background: url(//pic.c-ctrip.com/hotels_seo/scenic_mark_ie6.png) no-repeat;}\
            .city_suggestion_pop .scenic_mark .scenic_map_num_hover{background: url(//pic.c-ctrip.com/hotels_seo/scenic_mark_hover.png) no-repeat;_background: url(//pic.c-ctrip.com/hotels_seo/scenic_mark_hover_ie6.png) no-repeat;}\
                .city_suggestion_pop .scenic_mark_inner{background-color:#fff;height:22px;line-height:22px;padding:0 10px 0 15px;;border:1px solid #A1A19D;border-left:0 none; border-top:none; border-top-right-radius:13px;border-bottom-right-radius:13px;box-shadow:2px 2px 2px 0 #ccc;position:relative;z-index:2;left:-10px;_display:inline; *zoom:1; color:#0f66cd; font-size:12px;}\
                .keyword_prompting_lhsl .c_page_mini a {display: inline-block; margin: 0;color: #06c;padding: 0 6px;font:14px/1.5 Tahoma, Arial, Simsun, sans-serif;text-decoration: underline;}\
            .keyword_prompting_lhsl .c_page_mini .c_page_mini_current{ color: #666;text-decoration: none;cursor: default;}',
        keywordSuggestion:
          '\
            {{if (data)}}\
            <div class="c_address_box key_word_lhsl">\
                <a href="javascript:;" class="close CQ_suggestionClose">×</a>\
                {{enum(key, item) data}}\
                    {{if key==="subCity"}}\
                        <div class="keyword_sub_city">\
                            ${item.cnname}：{{if (item.data)}}{{each item.data}}<a href="{{tmpl HD_ENV_FOR_TMPL}}/hotel/${ename}${id}" class="subCity" data-dopost="T">${name}</a>{{/each}}{{/if}}\
                        </div>\
                    {{else}}\
                        <dl class="key_word_list">\
                            <dt>${item.cnname}</dt>\
                            <dd>{{if (item.data)}}{{each item.data}}<a href="javascript:void(0);" data="|${name}|${id}|${type}|" data-category="${key}">${name}</a>{{/each}}{{/if}}</dd>\
                        </dl>\
                    {{/if}}\
                {{/enum}}\
            </div>\
            {{/if}}',
        keywordSuggestionIPad:
          '\
            <div class="c_address_box key_word_lhsl key_word_lhsl_pad">\
                <a href="javascript:;" class="close CQ_suggestionClose">&times;</a>\
                <div class="key_word_key"><div class="ico_key CQ_suggestionKeyboard">显示键盘</div></div>\
                {{if ($data.data)}}\
                {{enum(key, item) $data.data}}\
                    {{if key==="subCity"}}\
                    <div class="keyword_sub_city">\
                        ${item.cnname}：{{if (item.data)}}{{each (key, it) item.data}}<a href="{{tmpl HD_ENV_FOR_TMPL}}/hotel/${it.ename}${it.id}" class="subCity" data-dopost="T">${it.name}</a>{{/each}}{{/if}}\
                    </div>\
                    {{else}}\
                    <dl class="key_word_list">\
                        <dt>${item.cnname}</dt>\
                        <dd>{{if (item.data)}}{{each (key, it) item.data}}<a href="javascript:void(0);" data="|${it.name}|${it.id}|${it.type}|" data-category="${it.key}">${it.name}</a>{{/each}}{{/if}}</dd>\
                    </dl>\
                    {{/if}}\
                {{/enum}}\
                {{/if}}\
            </div>',
        keywordSuggestionStyle:
          "\
            .key_word_lhsl { width:498px; padding:8px 10px; border:1px solid #999; background-color:#fff; }\
            .key_word_key{display:none;height:30px;}\
            .ico_key,.ico_unkey{ width:39px; height:25px; background:url(//pic.c-ctrip.com/ctripOnPad/un_key.png) no-repeat; -webkit-transform:scale(.7);margin-left:-5px;cursor:pointer;}\
            .key_word_lhsl .close { float:right; width:20px; height:20px; color:#666; text-align:center; font:bold 16px/20px Simsun; }\
            .key_word_lhsl .close:hover { text-decoration:none; color:#FFA800; }\
            .key_word_lhsl .key_word_list { margin-bottom:6px; }\
            .key_word_lhsl .key_word_list dt { font-weight:bold; }\
            .key_word_lhsl .key_word_list dd { display:inline-block; }\
            .key_word_lhsl .key_word_list dd {display:block;overflow:hidden;}\
            .key_word_lhsl .key_word_list a { float:left; height:22px; padding:0 15px 0 5px; border:1px solid #fff; line-height:22px; white-space:nowrap; color:#333;}\
            .key_word_lhsl .key_word_list a:hover { border:1px solid #2577e3; background-color:#2577e3; text-decoration:none; color:#fff;}\
            .key_word_lhsl .keyword_sub_city { margin:0 -10px -8px; padding:5px 10px; border-top:1px solid #CCC; background-color:#F3F3F3; color:#333; }\
            .key_word_lhsl .keyword_sub_city a { margin-right:10px; color:#4D4D4D; }\
            .key_word_lhsl_pad .key_word_key { display:block; }",
        keywordSuggestionStyleIPad:
          '\
            .key_word_lhsl{position:relative;width:498px;padding:8px 10px;border:1px solid #999;background-color:#fff;font-size:16px;}\
            .key_word_key{height:48px;}\
            .ico_key,.ico_unkey{width:92px;height:43px;padding-left:65px;background:url(//pic.c-ctrip.com/ctripOnPad/un_key20131012.png) 10px 11px no-repeat;cursor:pointer;line-height:40px;font-size:18px;border-width:1px;border-style:solid;border-radius:3px;}\
            .ico_key{border-color:#f0f0f0 #cfcfcf #707070;box-shadow:0 1px 0 #cfcfcf,1px 0 0 0 #f0f0f0 inset,-1px 0 0 0 #f0f0f0 inset,0 -1px 0 0 #f0f0f0 inset;}\
            .ico_unkey{border-color:#898989 #e2e2e2 #e2e2e2;background-color:#f5f5f5;box-shadow:0 -1px 0 #e2e2e2,0 1px 0 #d1d1d1 inset;}\
            .key_word_lhsl .close{position:absolute;top:10px;right:10px;width:30px;height:30px;line-height:30px;text-align:center;color:#666;font:bold 22px/30px "Heiti SC","Heiti SC light",STHeiti,STXihei,sans-serif;}\
            .key_word_lhsl .key_word_list{margin-bottom:6px;}\
            .key_word_lhsl .key_word_list dt{margin-bottom:10px;font-weight:bold;}\
            .key_word_lhsl .key_word_list dd{display:inline-block;}\
            .key_word_lhsl .key_word_list dd{display:block;overflow:hidden;}\
            .key_word_lhsl .key_word_list a{float:left;height:30px;padding:0 8px;margin-right:2px;margin-bottom:10px;line-height:30px;color:#333;white-space:nowrap;}\
            .key_word_lhsl .keyword_sub_city{margin:0 -10px -8px;padding:5px 10px;border-top:1px solid #CCC;background-color:#F3F3F3;color:#333;}\
            .key_word_lhsl .keyword_sub_city a{margin-right:10px;color:#4D4D4D;}\
            .key_word_lhsl_pad .key_word_key{display:block;}',
        keywordFilter:
          '\
            {{if (newlist = cQuery.groupMarkerData($data.list))}}{{/if}}\
            {{if (newlist.name.length || newlist.station.length || newlist.position.length)}}\
                <div class="keyword_prompting_lhsl">\
                    <p class="title"><a class="close CQ_suggestionClose" href="javascript:;">×</a><span class="text_input">${$data.val}，</span>若需缩小范围，请输入更多条件。</p>\
                    {{if ((names = newlist.name).length)}}\
                    <div class="sug_item item_list_city">\
                        {{each (i,item) names}}\
                        <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
                            {{if (i==0)}}<div class="sug_category">名称</div>{{/if}}\
                            {{if (txt=cQuery.highlightKeyword(item.right, cQuery.keywordFilterHighlights[$data.val])) }}<span class="city">${txt}</span>{{/if}}\
                        </a>\
                        {{/each}}\
                    </div>\
                    {{/if}}\
                    {{if ((districts = newlist.district).length)}}\
                    <div class="sug_item item_list_scenic">\
                        {{each (i,item) districts}}\
                        <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
                            {{if (i==0)}}<div class="sug_category">景区</div>{{/if}}\
                            {{if (txt=cQuery.highlightKeyword(item.right, cQuery.keywordFilterHighlights[$data.val])) }}<span class="city">${txt}</span>{{/if}}\
                            <span class="num">${item.data.split("|")[5] || 0}家酒店</span>\
                        </a>\
                        {{/each}}\
                    </div>\
                    {{/if}}\
                    {{if ((stations = newlist.station).length)}}\
                    <div class="sug_item item_list_traffic">\
                        {{each (i,item) stations}}\
                        <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
                            {{if (i==0)}}<div class="sug_category">机场火车站</div>{{/if}}\
                            {{if (txt=cQuery.highlightKeyword(item.right, cQuery.keywordFilterHighlights[$data.val])) }}<span class="city">${txt}</span>{{/if}}\
                        </a>\
                        {{/each}}\
                    </div>\
                    {{/if}}\
                    {{if ((positions = newlist.position).length)}}\
                    <div class="sug_item item_list_landmarks">\
                        {{each (i,item) positions}}\
                        <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
                            {{if (i==0)}}<div class="sug_category">位置</div>{{/if}}\
                            {{if (txt=cQuery.highlightKeyword(item.right, cQuery.keywordFilterHighlights[$data.val])) }}<span class="city">${txt}</span>{{/if}}\
                        </a>\
                        {{/each}}\
                    </div>\
                    {{/if}}\
                </div>\
            {{/if}}',
        keywordFilterStyle:
          '\
            .keyword_prompting_lhsl{width:398px; border:1px solid #999; background-color:#fff;}\
            .keyword_prompting_lhsl .title{height:26px; margin:0 10px 4px; padding:0 2px; border-bottom:1px dotted #ccc; line-height:26px; color:#999;}\
            .keyword_prompting_lhsl .close{float:right; width:26px; height:26px; font:bold 14px/26px Simsun; color:#666; text-align:center;}\
            .keyword_prompting_lhsl .close:hover { text-decoration:none; color:#FFA800; }\
            .keyword_prompting_lhsl .sug_item{overflow:hidden;padding-bottom: 5px; padding-top:5px; border-bottom: 1px solid #ccc;*zoom:1;}\
            .keyword_prompting_lhsl .sug_item a{display:block; overflow:hidden; padding:5px 7px 5px 10px; color:#333;  line-height:18px; cursor:pointer;*zoom:1;}\
            .keyword_prompting_lhsl .sug_item .hover { background-color:#2577e3; color:#fff; text-decoration:none;}\
            .keyword_prompting_lhsl .sug_item .hover span, .keyword_prompting_lhsl .sug_item .hover b{color:#fff;}\
            .notfound_pop{ padding-bottom: 4px;}\
            .keyword_prompting_lhsl .sug_item .b{font-weight:bold; color:#06c; }\
            .notfound_pop .title{ line-height:26px; overflow: hidden; margin:0 10px 4px; padding:0 2px; color: #c01111; border-bottom: 0 none;}\
            .notfound_pop .close{ margin-top: 2px;}\
            .keyword_prompting_lhsl .text_input { float:left; max-width:160px; _width:160px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }\
            .keyword_prompting_lhsl .sug_item a:after{ clear:both; content:"."; display:block; height:0; overflow:hidden; }\
            .keyword_prompting_lhsl .sug_item .num { float:left; width: 80px; overflow: hidden; color:#999; text-align: right;}\
            .keyword_prompting_lhsl .sug_item .city { display:block; float: left; width:260px; padding-right:4px; overflow:hidden; }\
            .keyword_prompting_lhsl .item_list_scenic .city {width:195px;}\
            .keyword_prompting_lhsl .sug_item b{font-weight:bold; color:#06c; }\
            .keyword_prompting_lhsl .sug_category{ float:right; height:18px; line-height:18px; background-image:url(//pic.c-ctrip.com/hotels121118/ico_search_box_1.png); background-repeat: no-repeat;width:62px; padding-right:20px; padding-left:0; text-align:right;}\
            .keyword_prompting_lhsl .sug_category_hover{ color: #fff; background-color: #2577e3; background-position: right 6px; background-color:#2577e3; }\
            .keyword_prompting_lhsl .item_list_city .sug_category{background-position: right -33px;}\
            .keyword_prompting_lhsl .item_list_city .hover .sug_category{background-position: right 2px;}\
            .keyword_prompting_lhsl .item_list_landmarks .sug_category{background-position: right -204px;}\
            .keyword_prompting_lhsl .item_list_landmarks .hover .sug_category{background-position: right -238px;}\
            .keyword_prompting_lhsl .item_list_scenic .sug_category{background-position: right -271px;}\
            .keyword_prompting_lhsl .item_list_scenic .hover .sug_category{background-position: right -303px;}\
            .keyword_prompting_lhsl .item_list_traffic .sug_category{background-position: right -336px; padding-right:40px;}\
            .keyword_prompting_lhsl .item_list_traffic .hover .sug_category{background-position: right -372px;}',
        keywordFilterStyleIPad:
          '\
            .keyword_prompting_lhsl{width:450px; border:1px solid #999; background-color:#fff;}\
            .keyword_prompting_lhsl .title{height:30px; margin:0 10px 4px; padding:0 2px; border-bottom:1px dotted #ccc; line-height:30px; color:#999;}\
            .keyword_prompting_lhsl .close{float:right; width:26px; height:30px;  font: bold 22px/30px "Heiti SC","Heiti SC light",STHeiti,STXihei,sans-serif; color:#666; text-align:center;}\
            .keyword_prompting_lhsl .sug_item{overflow:hidden;padding-bottom: 5px; padding-top:5px; border-bottom: 1px solid #ccc;}\
            .keyword_prompting_lhsl .sug_item a{display:block; overflow:hidden; padding:5px 7px 5px 10px; color:#333;  line-height:24px; cursor:pointer;}\
            .notfound_pop .title{overflow: hidden; margin:0 10px 4px; padding:0 2px; color: #c01111; border-bottom: 0 none;}\
            .notfound_pop .close{ margin-top: 2px;}\
            .keyword_prompting_lhsl .text_input { float:left; max-width:210px; _width:210px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }\
            .keyword_prompting_lhsl .sug_item a:after{ clear:both; content:"."; display:block; height:0; overflow:hidden; }\
            .keyword_prompting_lhsl .sug_item .num { float:left; width: 80px; overflow: hidden; color:#999; text-align: right;}\
            .keyword_prompting_lhsl .sug_item .city { display:block; float: left; width:300px; padding-right:4px; overflow:hidden; }\
            .keyword_prompting_lhsl .item_list_scenic .city {width:199px;}\
            .keyword_prompting_lhsl .sug_item b{font-weight:bold; color:#06c; }\
            .keyword_prompting_lhsl .sug_item .b{font-weight:bold; color:#06c; }\
            .keyword_prompting_lhsl .sug_category{ float:right; height:24px; line-height:24px; background-image:url(//pic.c-ctrip.com/hotels121118/ico_search_box_1.png); background-repeat: no-repeat;width:85px; padding-right:20px; padding-left:0; text-align:right;}\
            .keyword_prompting_lhsl .item_list_city .sug_category{background-position: right -30px;}\
            .keyword_prompting_lhsl .item_list_scenic .sug_category{background-position: right -271px;}\
            .keyword_prompting_lhsl .item_list_scenic .hover .sug_category{background-position: right -303px;}\
            .keyword_prompting_lhsl .item_list_landmarks .sug_category{background-position: right -201px;}\
            .keyword_prompting_lhsl .item_list_traffic .sug_category{background-position: right -333px; padding-right:40px;}'
      }
    };

    /* 跨城市的景区 */
    var ScenicData = {
      D10264_21001: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_bs.jpg",
        top: 76,
        left: 250,
        name: "坝上，克什克腾旗"
      },
      D10072_7840: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_bs.jpg",
        top: 192,
        left: 155,
        name: "坝上，沽源"
      },
      D10072_20914: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_bs.jpg",
        top: 145,
        left: 260,
        name: "坝上，围场"
      },
      D10072_1474: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_bs.jpg",
        top: 235,
        left: 248,
        name: "坝上，丰宁"
      },
      D10072_21790: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_bs.jpg",
        top: 215,
        left: 78,
        name: "坝上，张北"
      },

      "91": {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_jzg.jpg",
        top: 64,
        left: 267,
        name: "九寨沟，阿坝"
      },
      D25_1372: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_jzg.jpg",
        top: 154,
        left: 241,
        name: "九寨沟，松潘"
      },

      D105_37: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_hgh.jpg",
        top: 156,
        left: 92,
        name: "泸沽湖，丽江"
      },

      D10322_21433: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_ms.jpg",
        top: 162,
        left: 137,
        name: "莽山，宜章"
      },
      D10322_612: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_ms.jpg",
        top: 205,
        left: 139,
        name: "莽山，郴州"
      },

      D281_7807: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_qhh.jpg",
        top: 74,
        left: 204,
        name: "青海湖，海北"
      },
      D281_7752: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_qhh.jpg",
        top: 162,
        left: 326,
        name: "青海湖，海东"
      },
      D281_7794: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_qhh.jpg",
        top: 234,
        left: 115,
        name: "青海湖，海南"
      },

      D10215_3886: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_cbs.jpg",
        top: 118,
        left: 238,
        name: "长白山池西，白山"
      },
      D10216_1466: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_cbs.jpg",
        top: 174,
        left: 214,
        name: "长白山池北，安图"
      },
      D2603_13: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_th.jpg",
        top: 98,
        left: 155,
        name: "太湖，无锡"
      },
      D2603_14: {
        pic: "//pic.c-ctrip.com/hotels_seo/scenic_th.jpg",
        top: 158,
        left: 181,
        name: "太湖，苏州"
      }
    };
  