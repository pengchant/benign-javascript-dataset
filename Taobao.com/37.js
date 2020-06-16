
        <div class="ju-box tab-box clearfix">
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
                <a href="//detail.ju.taobao.com/home.htm?item_id={{itemId}}&id={{juId}}" target="_blank">
                  <img src="//img.alicdn.com/imgextra/{{picUrl}}_270x270.jpg" alt="{{shortName}}" height="180"/>
                </a>
              </div>
              <div class="info">
                <p class="text">
                  <a href="//detail.ju.taobao.com/home.htm?item_id={{itemId}}&id={{juId}}" target="_blank">{{shortName}}</a>
                </p>
                <p class="cost">
                    <span class="g_price g_price-highlight">
                      <span>&yen;</span><strong>{{activityPrice/100}}</strong>
                    </span>
                </p>
                <div class="cost-right clearfix">
                  <p class="discount">{{discount}}折</p>
                  <br/>
                  <p class="old">
                    <span class="yen">&yen;</span><del>{{originalPrice/100}}</del>
                  </p>
                </div>
                <p class="time">{{xtime}}</p>
                <p><em>{{soldCount}}</em>已购买</p>
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
        