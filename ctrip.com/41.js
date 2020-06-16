
    {{each(i, item) list}}
    <div class="around_item" data-uid="${uid}">
        <span class="num">${i+1}</span>
        {{if distance >= 0}}
        <span class="distance">{{if distance >= 1000}}<span>${Math.round(distance / 100) / 10}</span>公里{{else}}<span>${distance}</span>米{{/if}}</span>
        {{/if}}
        <p class="name"><a class="around_hotel" href="/group/${id}.html" title="${name}" target="_blank" data-dopost="T">${name}</a></p>
        <div class="go_to" data-poi='{"name": "${name}", "pos": "${location.lng}|${location.lat}"}'>
            <a data-way="transfer" href="javascript:;">公交</a>|<a data-way="driving" href="javascript:;">驾车</a>|<a data-way="walking" href="javascript:;">步行</a>
        </div>
        <p class="price"><span class="base_price"><dfn>&yen;</dfn>${price}</span> 起</p>
    </div>
    {{/each}}
