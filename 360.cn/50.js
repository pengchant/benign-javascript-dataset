
    {{if data}}
    {{each data as item index }}
        <li>
            <a {{if index < 1 }}
                class="active"
            {{else if index === 9}}
                class="last-nav"
            {{/if}}
            {{if item.cid && item.cname}}
            data-cid="{{item.cid}}" href="{{item.href}}">{{item.cname}}</a>
            {{/if}}
        </li>
    {{/each}}
    {{/if}}
