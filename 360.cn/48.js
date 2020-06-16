
    <div class="feed-item js-feed" data-gid="{{gid}}" log-already="0">
        <div class="media">
            <div class="media-body">
                <h1 class="media-title title-fix">
                    {{if data.title && pcurl}}
                    <a href="{{pcurl}}" title="{{data.title}}">{{data.title}}</a>
                    {{/if}}
                </h1>
                <p class="media-extra">
                    {{if data.source}}
                    <span class="col cite">
                        {{if data.zmt && data.zmt.id}}
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
                        {{if data.zmt && data.zmt.id}}
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

                    {{if data.tag && data.tag.length > 0}}
                    <span class="col dot"></span>
                    <span class="col tag">{{data.tag[0].name}}</span>
                    {{/if}}
                </p>
            </div>
        </div>
    </div>
