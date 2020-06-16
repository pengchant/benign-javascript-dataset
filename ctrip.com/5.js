
	var HD_HOTEL_CONFIG = {
		addressMessageConfig: {
			cityname: {
				suggestionB: '支持中文/拼音/简拼输入',
				suggestion: "<strong>热门城市</strong>（可直接选择城市或输入城市全拼/简拼）"
			},
			searchHistory: '搜索历史',
			addressTab: "省市",
			hotelPos: {
				suggestion: "可直接选择地理位置或输入位置关键词",
				titles: {
					"zone": "商业区",
					"location": "行政区",
					"metro": "地铁线"
				},
				showAMap: false,
				AMapTitle: '查看商业区地图',
				all: '全部',
				subCity: '下辖市/县：'
			},
			suggestTitle: ["名称", "机场火车站", "位置"],
			defaultValue: ['上海', '2', 'shanghai']
		},
		validateMessageConfig: {
			hotel: {
				city: '请选择酒店所在城市',
				checkIn: '请选择入住日期',
				checkOut: '请选择离店日期',
				dateErr: '日期格式为yyyy-mm-dd',
				too_early_in: '入住日期不能早于今天',
				too_early_out: '您选择的离店日期早于/等于入住日期，请重新选择',
				too_long: '您入住酒店时间超过90天，请分订单提交预订',
				no_room: '您选择的日期没有房间可供预订!',
				room_num: '请选择预订房间数',
				noExistCity: '目的地{city}不存在'
			}
		},
		noticeMessageConfig: ['中文/拼音'],
		tmpl: {
			citySuggestion: '\
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
			citySuggestionIPad: '\
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
			cityFilter: '\
            {{if $data.hasResult}}\
            <div class="keyword_prompting_lhsl city_suggestion_pop categories-mix">\
				{{if (obj = Help.groupCityFilterData($data.list))}}{{/if}}\
				{{if obj.isNewVersion }}\
					<p class="title">\
						<a class="close CQ_suggestionClose" href="javascript:;">×</a>\
						<span class="text_input"></span>若需缩小范围，请输入更多条件。(酒店起价为参考价)\
					</p>\
					{{if (list = obj.list || []).length}}\
						<div class="sug_item">\
							{{each (i,item) list}}\
								<a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
									{{if (arr=item.data.split("|"))}}{{/if}}\
									<div class="sug_category">{{tmpl Help.getEnumItemType(arr[6])}}</div>\
									{{ if arr[6] == "District"}}\
									<span class="city">{{tmpl Help.highlight(arr[1] + arr[5], $data.val)}}</span>\
									{{ else }}\
									<span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>\
									{{/if}}\
									{{if (arr[6] != "Hotel" && arr[3] > 0) }}\
									<span class="num">${arr[3] > 0 ? arr[3] : 0}家酒店</span>\
									{{else}}\
									<span class="num"></span>\
									{{/if}}\
									{{ if arr[6] == "Hotel"}}\
									<p class="hotel_info">\
										{{ if arr[11] > 0 }}<span class="hotel_price"><dfn>&yen;</dfn>${arr[11]}</span>起丨{{/if}}\
										{{ if arr[12] > 0 }}<span class="score">${arr[12]}分</span>丨{{/if}}${arr[13]}\
									</p>\
									{{/if}}\
								</a>\
							{{/each}}\
						</div>\
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
					{{/if}}\
				{{else}}\
					<p class="title">\
						<a class="close CQ_suggestionClose" href="javascript:;">×</a>\
						<span class="text_input"></span>若需缩小范围，请输入更多条件。\
					</p>\
					{{if (obj = Help.groupCityFilterData($data.list))}}{{/if}}\
					{{if (city = obj.City || []).length}}\
						<div class="sug_item item_list_city">\
						   {{each (i,item) city}}\
								<a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
									{{if (i == 0)}}<div class="sug_category">城市</div>{{/if}}\
									{{if (arr=item.data.split("|"))}}{{/if}}\
									<span class="city">{{tmpl Help.highlight(arr[7] + arr[5], $data.val)}}</span>\
									<span class="num">${arr[3] || 0}家酒店</span>\
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
									<span class="num">${arr[3] || 0}家酒店</span>\
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
									<span class="num">${arr[3] || 0}家酒店</span>\
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
									<span class="num">${arr[3] || 0}家酒店</span>\
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
									<span class="num">${arr[3] || 0}家酒店</span>\
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
									<span class="num">${arr[3] || 0}家酒店</span>\
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
									<span class="num">${arr[3] || 0}家酒店</span>\
								</a>\
							{{/each}}\
						</div>\
					{{/if}}\
					{{if (Hotel = obj.Hotel || []).length}}\
						<div class="sug_item item_list_hotel">\
							{{each (i,item) Hotel}}\
								<a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
									{{if (i == 0)}}<div class="sug_category">名称</div>{{/if}}\
									{{if (arr=item.data.split("|"))}}{{/if}}\
									<span class="city">{{tmpl Help.highlight(arr[7], $data.val)}}</span>\
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
				{{/if}}\
            </div>\
            {{else}}\
            <div class="keyword_prompting_lhsl notfound_pop">\
                <p class="title"><a class="close CQ_suggestionClose" href="javascript:;">×</a>对不起，找不到：${$data.val}</p>\
            </div>\
            {{/if}}',
			keywordSuggestion: '\
            {{if (data)}}\
            <div class="city_select_lhsl business_place">\
                <a href="javascript:;" class="close CQ_suggestionClose">×</a>\
                {{enum(key, item) data}}\
                    {{if key==="subCity"}}\
                        <div class="keyword_sub_city">\
                            ${item.cnname}：{{if (item.data)}}{{each item.data}}<a href="{{tmpl HD_ENV_FOR_TMPL}}/hotel/${ename}${id}" class="subCity" data-dopost="T">${name}</a>{{/each}}{{/if}}\
                        </div>\
                    {{else}}\
						<p class="business_title">${item.cnname}</p>\
						<div class="business_box">\
                        {{if (item.data)}}{{each item.data}}<a href="javascript:void(0);" data="|${name}|${id}|${type}|" data-category="${key}">${name}</a>{{/each}}{{/if}}\
						</div>\
                    {{/if}}\
                {{/enum}}\
            </div>\
            {{/if}}',
			keywordSuggestionIPad: '\
            <div class="city_select_lhsl business_place">\
                <a href="javascript:;" class="close CQ_suggestionClose">&times;</a>\
                <div class="key_word_key"><div class="ico_key CQ_suggestionKeyboard">显示键盘</div></div>\
                {{if ($data.data)}}\
                {{enum(key, item) $data.data}}\
                    {{if key==="subCity"}}\
                    <div class="keyword_sub_city">\
                        ${item.cnname}：{{if (item.data)}}{{each (key, it) item.data}}<a href="{{tmpl HD_ENV_FOR_TMPL}}/hotel/${it.ename}${it.id}" class="subCity" data-dopost="T">${it.name}</a>{{/each}}{{/if}}\
                    </div>\
                    {{else}}\
                    <p class="business_title">${item.cnname}</p>\
						<div class="business_box">\
						{{if (item.data)}}{{each item.data}}<a href="javascript:void(0);" data="|${name}|${id}|${type}|" data-category="${key}">${name}</a>{{/each}}{{/if}}\
					</div>\
                    {{/if}}\
                {{/enum}}\
                {{/if}}\
            </div>',
			keywordFilter: '\
        {{if ($data.hasResult && (result = cQuery.groupHotelMarkerData($data.list)))}}\
			{{if result.isNewVersion }}\
				<div class="keyword_prompting_lhsl city_suggestion_pop categories-mix">\
					<p class="title">\
						<a class="close CQ_suggestionClose" href="javascript:;">×</a>\
						<span class="text_input"></span>若需缩小范围，请输入更多条件。(酒店起价为参考价)\
					</p>\
					{{if (filterlist = result.filterResult)}}{{/if}}\
					{{if (filterlist || []).length}}\
						<div class="sug_item">\
							{{each (i, list) filterlist}}\
								{{if (i === 1)}}<div style="color:#333;background-color:#f3f3f3;padding:3px 7px;">以下为您展示其他城市的查询结果</div>{{/if}}\
								{{each (i,item) list}}\
									<a href="javascript:;" data="${item.data}" data-yindex="${item.yindex}">\
										{{if (arr=item.data.split("|"))}}{{/if}}\
										<div class="sug_category">{{tmpl Help.getEnumItemType(arr[3])}}</div>\
										<span class="city">{{tmpl Help.highlight(arr[13] + arr[14], $data.val)}}</span>\
										<span class="num"></span>\
										{{ if arr[3] == "Hotel"}}\
										<p class="hotel_info">\
											{{ if arr[9] > 0 }}<span class="hotel_price"><dfn>&yen;</dfn>${arr[9]}</span>起丨{{/if}}\
											{{ if arr[11] > 0 }}<span class="score">${arr[11]}分</span>丨{{/if}}${arr[12]}\
										</p>\
										{{/if}}\
									</a>\
								{{/each}}\
							{{/each}}\
						</div>\
					{{/if}}\
				</div>\
			{{else}}\
				{{if (filterlist = result.filterResult)}}{{/if}}\
				{{if (filterlist || []).length}}\
					<div class="keyword_prompting_lhsl">\
						<p class="title"><a class="close CQ_suggestionClose" href="javascript:;">×</a><span class="text_input"></span>若需缩小范围，请输入更多条件。</p>\
						{{each (i, newlist) filterlist}}\
						{{if (i === 1)}}<div style="color:#333;background-color:#f3f3f3;padding:3px 7px;">以下为您展示其他城市的查询结果</div>{{/if}}\
						{{if ((names = newlist.name).length)}}\
						<div class="sug_item item_list_hotel">\
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
						{{/each}}\
					</div>\
				{{/if}}\
			{{/if}}\
        {{else}}\
        <div class="keyword_prompting_lhsl notfound_pop">\
            <p class="title"><a class="close CQ_suggestionClose" href="javascript:;">×</a>对不起，找不到：${$data.val}</p>\
        </div>\
        {{/if}}'
		}
	};

	/* 跨城市的景区 */
	var ScenicData = {
		"D10264_21001": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_bs.jpg",
			"top": 76,
			"left": 250,
			"name": "坝上，克什克腾旗"
		},
		"D10072_7840": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_bs.jpg",
			"top": 192,
			"left": 155,
			"name": "坝上，沽源"
		},
		"D10072_20914": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_bs.jpg",
			"top": 145,
			"left": 260,
			"name": "坝上，围场"
		},
		"D10072_1474": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_bs.jpg",
			"top": 235,
			"left": 248,
			"name": "坝上，丰宁"
		},
		"D10072_21790": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_bs.jpg",
			"top": 215,
			"left": 78,
			"name": "坝上，张北"
		},

		"91": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_jzg.jpg",
			"top": 64,
			"left": 267,
			"name": "九寨沟，阿坝"
		},
		"D25_1372": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_jzg.jpg",
			"top": 154,
			"left": 241,
			"name": "九寨沟，松潘"
		},

		"D105_37": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_hgh.jpg",
			"top": 156,
			"left": 92,
			"name": "泸沽湖，丽江"
		},

		"D10322_21433": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_ms.jpg",
			"top": 162,
			"left": 137,
			"name": "莽山，宜章"
		},
		"D10322_612": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_ms.jpg",
			"top": 205,
			"left": 139,
			"name": "莽山，郴州"
		},

		"D281_7807": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_qhh.jpg",
			"top": 74,
			"left": 204,
			"name": "青海湖，海北"
		},
		"D281_7752": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_qhh.jpg",
			"top": 162,
			"left": 326,
			"name": "青海湖，海东"
		},
		"D281_7794": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_qhh.jpg",
			"top": 234,
			"left": 115,
			"name": "青海湖，海南"
		},

		"D10215_3886": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_cbs.jpg",
			"top": 118,
			"left": 238,
			"name": "长白山池西，白山"
		},
		"D10216_1466": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_cbs.jpg",
			"top": 174,
			"left": 214,
			"name": "长白山池北，安图"
		},
		"D2603_13": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_th.jpg",
			"top": 98,
			"left": 155,
			"name": "太湖，无锡"
		},
		"D2603_14": {
			"pic": "//pic.c-ctrip.com/hotels_seo/scenic_th.jpg",
			"top": 158,
			"left": 181,
			"name": "太湖，苏州"
		}
	};
