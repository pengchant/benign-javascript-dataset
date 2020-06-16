
    {{if ($data.hasResult && (result = cQuery.groupHotelMarkerData($data.list)))}}
        {{if result.isNewVersion }}
            <div class="keyword_prompting_lhsl">
                <p class="title">
                    <a class="close CQ_suggestionClose" href="javascript:;">×</a>
                    <span class="text_input">${$data.val}，</span>若需缩小范围，请输入更多条件。(酒店起价为参考价)
                </p>
                {{if (filterlist = result.filterResult)}}{{/if}}
                {{if (filterlist || []).length}}
                    <div>
                        {{each (i, list) filterlist}}
                            {{if (i === 1)}}<div class="kw_msg">以下为您展示其他城市的查询结果</div>{{/if}}
                            {{each (i,item) list}}
                                <div class="kw_list">
                                    <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rank="${i+1}">
                                        {{if (arr=item.data.split("|"))}}{{/if}}
                                        <span class="kw_sort">{{tmpl Help.getEnumItemType(arr[3])}}</span>
                                        <div class="kw_item">
                                            {{ if arr[3] == 'FlagShip' }}
                                             <p class="kw_info">{{tmpl Help.highlight(arr[1], $data.val, 'kw_keys')}}</p>
                                            {{ else}}
                                             <p class="kw_info">{{tmpl Help.highlight(arr[13] + arr[14], $data.val, 'kw_keys')}}</p>
                                            {{/if}}
                                            {{ if arr[3] == 'Hotel'}}
                                            <p class="kw_info kw_mark">
                                                {{ if arr[9] > 0 }}<span class="kw_cols kw_price"><dfn>¥</dfn><b>${arr[9]}</b>起</span>{{/if}}
                                                {{ if arr[11] > 0 }}<span class="kw_cols kw_score" style="margin-right: 4px;"><b>${arr[11]}</b>分</span>{{/if}}${arr[12]}
                                            </p>
                                            {{/if}}
                                        </div>
                                    </a>
                                </div>
                            {{/each}}
                        {{/each}}
                    </div>
                {{/if}}
            </div>
        {{else}}
            {{if (filterlist = result.filterResult)}}{{/if}}
            {{if (filterlist.length)}}
            <div class="keyword_prompting_lhsl">
                <p class="title"><a class="close CQ_suggestionClose" href="javascript:;">×</a><span class="text_input">${$data.val}，</span>若需缩小范围，请输入更多条件。</p>
                {{each (i, newlist) filterlist}}
                {{if (i === 1)}}<div style="color:#333;background-color:#f3f3f3;padding:3px 7px;">以下为您展示其他城市的查询结果</div>{{/if}}
                {{if ((names = newlist.name).length)}}
                <div class="sug_item item_list_hotel">
                    {{each (i,item) names}}
                    <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rankindex="${item.rankindex}" data-rank="${i+1}">
                        {{if (i==0)}}<div class="sug_category">名称</div>{{/if}}
                        {{if (txt=cQuery.highlightKeyword(item.right, cQuery.keywordFilterHighlights[$data.val])) }}<span class="city">${txt}</span>{{/if}}
                    </a>
                    {{/each}}
                </div>
                {{/if}}
                {{if ((districts = newlist.district).length)}}                                                                                                 
                <div class="sug_item item_list_scenic">                                                                                                     
                    {{each (i,item) districts}}                                                                                                               
                    <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rankindex="${item.rankindex}" data-rank="${i+1}">                                                                 
                        {{if (i==0)}}<div class="sug_category">景区</div>{{/if}}                                                                       
                        {{if (txt=cQuery.highlightKeyword(item.right, cQuery.keywordFilterHighlights[$data.val])) }}<span class="city">${txt}</span>{{/if}}  
                        <span class="num">${item.data.split("|")[5] || 0}家酒店</span>
                    </a>                                                                                                                                     
                    {{/each}}                                                                                                                                
                </div>                                                                                                                                       
                {{/if}}       

                {{if ((stations = newlist.station).length)}}
                <div class="sug_item item_list_traffic">
                    {{each (i,item) stations}}
                    <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rankindex="${item.rankindex}" data-rank="${i+1}">
                        {{if (i==0)}}<div class="sug_category">机场火车站</div>{{/if}}
                        {{if (txt=cQuery.highlightKeyword(item.right, cQuery.keywordFilterHighlights[$data.val])) }}<span class="city">${txt}</span>{{/if}}
                    </a>
                    {{/each}}
                </div>
                {{/if}}
                {{if ((positions = newlist.position).length)}}
                <div class="sug_item item_list_landmarks">
                    {{each (i,item) positions}}
                    <a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}" data-rankindex="${item.rankindex}" data-rank="${i+1}">
                        {{if (i==0)}}<div class="sug_category">位置</div>{{/if}}
                        {{if (txt=cQuery.highlightKeyword(item.right, cQuery.keywordFilterHighlights[$data.val])) }}<span class="city">${txt}</span>{{/if}}
                    </a>
                    {{/each}}
                </div>
                {{/if}}
                {{/each}}
            </div>
            {{/if}}
        {{/if}}
    {{else}}
    <div class="keyword_prompting_lhsl notfound_pop">
        <p class="title"><a class="close CQ_suggestionClose" href="javascript:;">×</a>对不起，找不到：${$data.val}</p>
    </div>
    {{/if}}
