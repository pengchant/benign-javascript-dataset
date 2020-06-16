
              {{#each result}}
                {{#if xindex%6===0}}
                  <div class="sub-pannel">
                  <ul>
                {{/if}}
                    <li>
                      <div class="pic">
                        <a href="{{item_url}}" target="_blank">
                          <img src="{{item_pic}}_180x180.jpg" alt="{{item_title}}" height="180"/>
                        </a>
                      </div>
                      <div class="info">
                        <p class="text">
                          <a href="{{item_url}}" target="_blank">{{item_title}}</a>
                        </p>
                        <p class="selledNum">
                                                      <span class="trade">成交{{item_trade_num}}件</span>
                            <span class="split">|</span>
                                                    <span class="dijia">抵<span class="yen">&yen;</span>{{item_tbcoin_price}}</span>
                        </p>
                        <p class="cost">
                    <span class="g_price g_price-highlight">
                      <span>&yen;</span><strong>{{item_current_price}}</strong>
                    </span>
                        </p>
                        <p class="old">
                          <span class="yen">&yen;</span>
                          <del>{{item_price}}</del>
                        </p>
                      </div>
                    </li>
                    {{#if xindex%6===5||xindex+1===xcount}}
                    </ul>
                  </div>
                    {{/if}}
              {{/each}}
              