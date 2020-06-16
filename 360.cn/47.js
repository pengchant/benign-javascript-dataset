
    <div class="feed-item js-feed feed-item-full-title feed-sample" data-gid="{{gid}}" log-already="0">
        <div class="media table-cell">
            <div class="media-obj">
                <div class="img-wrap">
                    {{if pcurl && data.title && data.covers && data.covers.length > 0}}
                        <a href="{{pcurl}}" title="{{data.title}}">
                            <img class="lazy" src="{{data.covers[0].clipImage({whq:'134_76_75', webp:true})}}"
                                        alt="{{data.title}}">
                            {{if data.s && data.s == 'y' && data.duration && data.playcnt}}
                                {{if data.s1 && data.s1 == 'bpi'}}
                                    <span class="video-time-text-b">{{data.duration}}</span>
                                    <span class="video-time-bg-b"></span>
                                    <span class="video-time-icon-b"></span>
                                {{else}}
                                    <span class="video-time-text"><i></i>{{data.duration}}</span>
                                    <span class="video-time-bg"></span>
                                {{/if}}
                            {{/if}}
                        </a>
                    {{/if}}
                </div>
            </div>
            <div class="media-body">
                <h1 class="media-title">
                    {{if data.title && pcurl}}
                    <a href="{{pcurl}}" title="{{data.title}}">{{data.title}}</a>
                    {{/if}}
                </h1>
                <p class="media-extra">
                    {{if data.attr}}
                        {{each data.attr as value}}
                            {{if value.pos == 1 && value.isdisplay == 1 && value.color && value.content}}
                                {{if value.isclick == 1 && value.direct}}
                                    <a class="col hot-icon" style="background:#{{value.color}}">{{value.content}}</a>
                                {{else}}
                                    <span class="col hot-icon" style="background:#{{value.color}}">{{value.content}}</span>
                                {{/if}}
                            {{/if}}
                        {{/each}}
                    {{/if}}

                    {{if data.attr}}
                        {{each data.attr as value}}
                            {{if value.pos == 2  && value.isdisplay == 1}}
                                {{if value.isclick == 1 && value.direct}}
                                    <a class="col hot-icon" style="background:#{{value.color}}">{{value.content}}</a>
                                {{else}}
                                    <span class="col hot-icon" style="background:#{{value.color}}">{{value.content}}</span>
                                {{/if}}
                            {{/if}}
                        {{/each}}
                    {{/if}}

                    {{if data.source}}
                      <span class="col cite">
                        <span class="infoflow-right-source" href="{{data.source_url}}" title="{{data.source}}">

                          <!-- {{if data.author_img}}
                              <span class="cite-logo">
                                  <img src="{{data.author_img}}" width="16" height="16" alt="{{data.source}}">
                              </span>
                          {{else}}
                              <span class="cite-logo no-logo">
                                  <span class="name">{{data.source.substring(0, 1)}}</span>
                              </span>
                          {{/if}} -->
                          <span class="cite-name">{{data.source}}</span>
                        </span>
                      </span>
                      <span class="col dot"></span>
                    {{/if}}
                    {{if data.ytag && data.wide}}
                      <span class="col">{{data.ytag}}</span>
                      <span class="col split">|</span>
                    {{/if}}

                    <!-- {{if data.s && data.s == 'y' && data.duration && data.playcnt}}
                        <span class="video-playcnt">{{data.playcnt}}次观看</span>
                    {{/if}} -->

                    {{if data.pdate_str && data.wide}}
                    <span class="col time">{{data.pdate_str}}</span>
                    <span class="col dot"></span>
                    {{/if}}
                    <span class="col cite">
                      <span class="infoflow-right-comment" href="{{pcurl}}" title="{{data.cmt_num}}条评论">
                        <span class="col tag cite-name">{{data.cmt_num}}条评论</span>
                      </span>
                    <span>

                    <span class="feed-dislike js-feed-dislike"><i class="icon"></i>不感兴趣</span>
                </p>
            </div>
        </div>
    </div>
