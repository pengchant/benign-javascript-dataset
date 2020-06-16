
        <div class="try-box tab-box clearfix">
          <div class="sub-wrap">
          <div class="sub-content">
          {{#each result}}
          {{#if xindex%6===0}}
          <div class="sub-pannel">
          <textarea class="data-lazyload" style="display:none;">
          <ul>
            {{/if}}
            <li>
              <div class="pic">
                {{#if freeTryItem}}
                <a href="//try.taobao.com/item.htm?id={{id}}" target="_blank">
                  {{else}}
                  <a href="//try.taobao.com/fuyou_item.htm?item_id={{id}}" target="_blank">
                  {{/if}}
                  <img src="{{picUrl}}_180x180.jpg" alt="{{jsonTitle}}" height="180"/>
                </a>
              </div>
              <div class="info">
                <p class="text">
                  {{#if freeTryItem}}
                  <a href="//try.taobao.com/item.htm?id={{id}}" target="_blank">
                    {{else}}
                    <a href="//try.taobao.com/fuyou_item.htm?item_id={{id}}" target="_blank">
                      {{/if}}
                    {{jsonTitle}}</a>
                </p>
                <p class="selledNum">
                  <span><span class="yen">&yen;</span><del>{{currentPrice}}</del></span>
                  <span class="split">|</span>
                  <span>限量<strong>{{totalNum}}</strong>件</span>
                </p>
                <p><em>{{requestNum}}</em>人已申请</p>
                <p class="btn">
                    {{#if freeTryItem}}
                    <a href="//try.taobao.com/item.htm?id={{id}}" class="try-btn" target="_blank">
                      {{else}}
                      <a href="//try.taobao.com/fuyou_item.htm?item_id={{id}}" class="try-btn" target="_blank">
                        {{/if}}
                    申请试用</a>
                </p>
              </div>
            </li>
            {{#if xindex%6===5||xindex+1===xcount}}
          </ul>
          </textarea>
          </div>
          {{/if}}
          {{/each}}
          </div>
          </div>
          <a class="prev J_prev" href="#"><i class="icon-prev">&#xe63c;</i></a>
          <a class="next J_next" href="#"><i class="icon-next">&#xe629;</i></a>
        </div>
        