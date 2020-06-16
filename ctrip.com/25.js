
    {{if $data.hasResult}}
    <div class="keyword_prompting_lhsl city_suggestion_pop">
        {{if (obj = Help.groupCityFilterData($data.list))}}{{/if}}
        {{if obj.isNewVersion }}
            <p class="title">
                <a class="close CQ_suggestionClose" href="javascript:;">×</a>
                <span class="text_input">${$data.val}，</span>若需缩小范围，请输入更多条件。(酒店起价为参考价)
            </p>
            {{if (list = obj.list || []).length}}
                <div>
                    {{each (i,item) list}}
                        <div class="kw_list">
                            <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rank="${i+1}">
                                {{if (arr=item.data.split("|"))}}{{/if}}
                                <span class="kw_sort">{{tmpl Help.getEnumItemType(arr[6])}}</span>
                                <div class="kw_item">
                                    {{ if arr[6] == 'District'}}
                                     <p class="kw_info">{{tmpl Help.highlight(arr[1] + arr[5], $data.val, 'kw_keys')}}</p>
                                    {{ else arr[6] == 'FlagShip' }}
                                    <p class="kw_info">{{tmpl Help.highlight(arr[4], $data.val, 'kw_keys')}}</p>
                                    {{ else}}
                                    <p class="kw_info">{{tmpl Help.highlight(arr[7] + arr[5], $data.val, 'kw_keys')}}</p>
                                    {{/if}}
                                    {{ if arr[6] == 'Hotel'}}
                                    <p class="kw_info kw_mark">
                                        {{ if arr[11] > 0 }}<span class="kw_cols kw_price"><dfn>¥</dfn><b>${arr[11]}</b>起</span>{{/if}}
                                        {{ if arr[12] > 0 }}<span class="kw_cols kw_score" style="margin-right: 4px;"><b>${arr[12]}</b>分</span>{{/if}}${arr[13]}
                                    </p>
                                    {{/if}}
                                </div>
                            </a>
                        </div>
                    {{/each}}
                </div>
                {{if $data.page.max>0}}
                <div class="c_page_mini" style="display: block;">
                    {{if $data.page.current>0}}
                        <a href="javascript:void(0);" page="${$data.page.current-1}">&lt;-</a>
                    {{/if}}
                    {{if $data.page.current<2}}
                        {{loop(index) Math.min(5,$data.page.max+1)}}
                            <a href="javascript:void(0);"{{if $data.page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>
                        {{/loop}}
                    {{else $data.page.current>$data.page.max-2}}
                        {{loop(index) Math.max(0,$data.page.max-4),$data.page.max+1}}
                            <a href="javascript:void(0);"{{if $data.page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>
                        {{/loop}}
                    {{else}}
                        {{loop(index) Math.max(0,$data.page.current-2),Math.min($data.page.current+3,$data.page.max+1)}}
                            <a href="javascript:void(0);"{{if $data.page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>
                        {{/loop}}
                    {{/if}}
                   {{if $data.page.current<$data.page.max}}
                        <a href="javascript:void(0);" page="${$data.page.current+1}">-&gt;</a>
                    {{/if}}
                </div>
            {{/if}}
            {{/if}}
        {{else}}
            <p class="title">
                <a class="close CQ_suggestionClose" href="javascript:;">×</a>
                <span class="text_input">${$data.val}，</span>若需缩小范围，请输入更多条件。
            </p>
            {{if (city = obj.City || []).length}}
                <div class="sug_item item_list_city">
                   {{each (i,item) city}}
                        <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rank="${i+1}">
                            {{if (i == 0)}}<div class="sug_category">城市</div>{{/if}}
                            {{if (arr=item.data.split("|"))}}{{/if}}
                            <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>
                        </a>
                    {{/each}}
                </div>
            {{/if}}
            {{if (district = obj.District || []).length}}
                <div class="sug_item item_list_scenic">
                    {{each (i,item) district}}
                        <a class="city_item" href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rank="${i+1}">
                            {{if (arr=item.data.split("|"))}}{{/if}}
                            {{if (i == 0)}}<div class="sug_category">景区</div>{{/if}}
                            <span class="city">{{tmpl Help.highlight(arr[1] + arr[5], $data.val)}}</span>
                        </a>
                    {{/each}}
                </div>
            {{/if}}
            {{if (sight = obj.Sight || []).length}}
                <div class="sug_item item_list_attractions">
                    {{each (i,item) sight}}
                        <a class="city_item" href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rank="${i+1}">
                            {{if (i == 0)}}<div class="sug_category">景点</div>{{/if}}
                            {{if (arr=item.data.split("|"))}}{{/if}}
                            <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>
                        </a>
                    {{/each}}
                </div>
            {{/if}}
            {{if (loc = obj.Location || []).length}}
                <div class="sug_item item_list_areaadmin">
                    {{each (i,item) loc}}
                        <a class="city_item" href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rank="${i+1}">
                            {{if (i == 0)}}<div class="sug_category">行政区</div>{{/if}}
                            {{if (arr=item.data.split("|"))}}{{/if}}
                            <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>
                        </a>
                    {{/each}}
                </div>
            {{/if}}
            {{if (domesticZone = obj.DomesticZone || []).length}}
                <div class="sug_item item_list_business">
                    {{each (i,item) domesticZone}}
                        <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rank="${i+1}">
                            {{if (i == 0)}}<div class="sug_category">商业区</div>{{/if}}
                            {{if (arr=item.data.split("|"))}}{{/if}}
                            <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>
                        </a>
                    {{/each}}
                </div>
            {{/if}}
            {{if (airport = obj.Airport || []).length}}
                <div class="sug_item item_list_airport">
                    {{each (i,item) airport}}
                        <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rank="${i+1}">
                            {{if (i == 0)}}<div class="sug_category">机场</div>{{/if}}
                            {{if (arr=item.data.split("|"))}}{{/if}}
                            <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>
                        </a>
                    {{/each}}
                </div>
            {{/if}}
            {{if (railwayStation = obj.RailwayStation || []).length}}
                <div class="sug_item item_list_train">
                    {{each (i,item) railwayStation}}
                        <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rank="${i+1}">
                            {{if (i == 0)}}<div class="sug_category">火车站</div>{{/if}}
                            {{if (arr=item.data.split("|"))}}{{/if}}
                            <span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>
                        </a>
                    {{/each}}
                </div>
            {{/if}}
            {{if (Hotel = obj.Hotel || []).length}}
                <div class="sug_item item_list_hotel">
                    {{each (i,item) Hotel}}
                        <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rank="${i+1}">
                            {{if (i == 0)}}<div class="sug_category">名称</div>{{/if}}
                            {{if (arr=item.data.split("|"))}}{{/if}}
                            <span class="city">{{tmpl Help.highlight(arr[7], $data.val)}}</span>
                        </a>
                    {{/each}}
                </div>
            {{/if}}
            {{if $data.page.max>0}}
                <div class="c_page_mini" style="display: block;">
                    {{if $data.page.current>0}}
                        <a href="javascript:void(0);" page="${$data.page.current-1}">&lt;-</a>
                    {{/if}}
                    {{if $data.page.current<2}}
                        {{loop(index) Math.min(5,$data.page.max+1)}}
                            <a href="javascript:void(0);"{{if $data.page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>
                        {{/loop}}
                    {{else $data.page.current>$data.page.max-2}}
                        {{loop(index) Math.max(0,$data.page.max-4),$data.page.max+1}}
                            <a href="javascript:void(0);"{{if $data.page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>
                        {{/loop}}
                    {{else}}
                        {{loop(index) Math.max(0,$data.page.current-2),Math.min($data.page.current+3,$data.page.max+1)}}
                            <a href="javascript:void(0);"{{if $data.page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>
                        {{/loop}}
                    {{/if}}
                   {{if $data.page.current<$data.page.max}}
                        <a href="javascript:void(0);" page="${$data.page.current+1}">-&gt;</a>
                    {{/if}}
                </div>
            {{/if}}
            {{if (scenicList = Help.getScenic(district))}}{{/if}}
            {{if scenicList && scenicList.length}}
                <div class="city_scenic_pic" style="width:400px;height:298px;left:399px;">
                    {{each (i,item) scenicList}}
                        {{if (i==0)}}<img src="${item.pic}" width="400" height="298">{{/if}}
                        <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rank="${i+1}" style="position:absolute;top:${item.top}px;left:${item.left}px;text-decoration:none;">
                            <div class="scenic_mark">
                                <span class="scenic_map_num"></span>
                                <div class="scenic_mark_inner"><span class="scenic_mark_name">${item.name}</span></div>
                            </div>
                        </a>
                    {{/each}}
                </div>
            {{/if}}
        {{/if}}
    </div>
    {{else}}
    <div class="keyword_prompting_lhsl notfound_pop">
        <p class="title"><a class="close CQ_suggestionClose" href="javascript:;">×</a>对不起，找不到：${$data.val}</p>
    </div>
    {{/if}}
