
    <div class="feed-item js-feed" data-gid="{{gid}}" log-already="0">
        <div class="media">
            <div class="media-body figure-extra">
                <h1 class="media-title title-fix">
                    {{if data.title && pcurl}}
                    <a href="{{pcurl}}" title="{{data.title}}">{{data.title}}</a>
                    {{/if}}
                </h1>
                {{if pcurl && data.title && data.covers && data.covers.length > 0}}
                <div class="figure-grid-wrap">
                    <div class="figure-grid gclearfix">

                        <a href="{{pcurl}}" title="{{data.title}}">
                            {{each data.covers as item index }}
                            {{ if index < 4 }}
                            <div class="figure">
                                <div class="figure-img">
                                    <img class="lazy" src="{{item.clipImage({whq:'136_88_75', webp:true})}}"
                                        alt="{{data.title}}" width="136"
                                        height="88">
                                </div>
                            </div>
                            {{/if}}
                            {{/each}}
                        </a>
                    </div>
                    {{/if}}
                </div>
                <p class="media-extra">
                    {{if data.source}}
                    <span class="col cite">
                        {{if data.zmt && data.zmt.id && data.uid}}
                            <a href="https://www.360kuai.com/pc/zmt?id={{data.zmt.id}}&uid={{data.uid}}&sign=360_2b4058b3" title="{{data.title}}">
                        {{/if}}

                        {{if data.author_img}}
                            <span class="cite-logo">
                                <img src="{{data.author_img}}" width="16" height="16" alt="{{data.source}}">
                            </span>
                        {{else}}
                            <span class="cite-logo no-logo">
                                <span class="name">{{data.source.substring(0, 1)}}</span>
                            </span>
                        {{/if}}
                        <span class="cite-name">{{data.source}}</span>
                        {{if data.zmt}}
                            </a>
                        {{/if}}
                    </span>
                    <span class="col dot"></span>
                    {{/if}}
                    
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

                    {{if data.pdate_str}}
                    <span class="col time">{{data.pdate_str}}</span>
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

                    {{if data.tag && data.tag.length}}
                    <span class="col dot"></span>
                    <span class="col tag">{{data.tag[0].name}}</span>
                    {{/if}}

                    <span class="feed-dislike js-feed-dislike"><i class="icon"></i>不感兴趣</span>
                </p>
            </div>
        </div>

    </div>
