
    {{if (data)}}
    <div class="c_address_box key_word_lhsl">
        <a href="javascript:;" class="close CQ_suggestionClose">×</a>
        {{enum(key, item) data}}
            {{if key==="subCity"}}
                <div class="keyword_sub_city">
                    ${item.cnname}：{{if (item.data)}}{{each item.data}}<a href="/{{if (searchOptions.isInn)}}inn{{else}}hotel{{/if}}/${ename}${id}" class="subCity" data-dopost="T">${name}</a>{{/each}}{{/if}}
                </div>
            {{else}}
                <dl class="key_word_list">
                    <dt>${item.cnname}</dt>
                    <dd>{{if (item.data)}}{{each item.data}}<a href="javascript:void(0);" data="|${name}|${id}|${type}|" data-category="${key}">${name}</a>{{/each}}{{/if}}</dd>
                </dl>
            {{/if}}
        {{/enum}}
    </div>
    {{/if}}
