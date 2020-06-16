
    <div class="feed-item js-feed feed-item-full-title feed-sample feed-item-yule">
        <div class="media table-cell">
            <div class="media-obj">
                <div class="img-wrap">
                    {{if pic && title}}
                        <a href="{{url}}" title="{{title}}">
                            <img class="lazy" src="{{pic.clipImage({whq:'134_76_75', webp:true})}}" alt="{{title}}">
                            {{if type == 2}}
                                <span class="img-count">{{picture_count}}图</span>
                            {{/if}}
                        </a>
                    {{/if}}
                </div>
            </div>
            <div class="media-body">
                <h1 class="media-title">
                    {{if title}}
                        <a href="{{url}}" title="{{title}}">{{title}}</a>
                    {{/if}}
                </h1>
                <p class="media-extra">
                    {{if source_name && category_list}}
                        <span class="col src">
                          <a href="{{source_url}}">{{source_name}}</a>
                          ·
                          {{each category_list as item index }}
                          <a href="{{item.url}}">{{item.name}}</a>
                          {{/each}}
                        </span>
                    {{/if}}
                </p>
            </div>
        </div>
    </div>
