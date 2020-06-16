
    <div class="c_address_box key_word_lhsl key_word_lhsl_pad">
        <a href="javascript:;" class="close CQ_suggestionClose">&times;</a>
        <div class="key_word_key"><div class="ico_key CQ_suggestionKeyboard">显示键盘</div></div>
        {{if ($data.data)}}
        {{enum(key, item) $data.data}}
            {{if key==="subCity"}}
            <div class="keyword_sub_city">
                ${item.cnname}：{{if (item.data)}}{{each (key, it) item.data}}<a href="/{{if (searchOptions.isInn)}}inn{{else}}hotel{{/if}}/${it.ename}${it.id}" class="subCity" data-dopost="T">${it.name}</a>{{/each}}{{/if}}
            </div>
            {{else}}
            <dl class="key_word_list">
                <dt>${item.cnname}</dt>
                <dd>{{if (item.data)}}{{each (key, it) item.data}}<a href="javascript:void(0);" data="|${it.name}|${it.id}|${it.type}|" data-category="${it.key}">${it.name}</a>{{/each}}{{/if}}</dd>
            </dl>
            {{/if}}
        {{/enum}}
        {{/if}}
    </div>
