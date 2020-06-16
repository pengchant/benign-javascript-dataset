
    {{each(i, item) list}}
    <div class="around_item" data-uid="${uid}">
        <span class="num">${i+1}</span>
        {{if distance >= 0}}
        <span class="distance">{{if distance >= 1000}}<span>${Math.round(distance / 100) / 10}</span>公里{{else}}<span>${distance}</span>米{{/if}}</span>
        {{/if}}
        <p class="name" title="${name}">${name.split("(")[0]}</p>
        <div class="go_to" data-poi='{"name": "${name}", "pos": "${location.lng}|${location.lat}"}'>
            <a data-way="transfer" href="javascript:;">公交</a>|<a data-way="driving" href="javascript:;">驾车</a>|<a data-way="walking" href="javascript:;">步行</a>
        </div>
        <p class="info">${name.substring(name.indexOf("(")+1,name.length-1)}</p>
    </div>
    {{/each}}
