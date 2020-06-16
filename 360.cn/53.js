
    <div class="feed-item feed-item-full-title feed-mv js-mv-infoflow-item feed-sample" data-gid="{{gid}}" log-already="0">
            <div class="media table-cell">
                <div class="media-obj">
                    <div class="img-wrap">
                        {{if curl && desc && img}}
                        <a href="{{curl}}" title="{{desc}}">
                            <img class="lazy" src="{{img.clipImage({whq:'134_76_75', webp:true})}}">
                            <span class="{{if src != '360搜索'}}ad {{/if}}infoflow-ft-mv"></span>
                        </a>
                        {{/if}}
                    </div>
                </div>
                <div class="media-body">
                    <h1 class="media-title">
                        {{if curl && title}}
                        <a href="{{curl}}" title="{{title}}">{{title}}</a>
                        {{/if}}
                    </h1>
                    <p class="media-extra">
                        <span class="col tag">
                            {{if curl && src}}
                            <a href="{{curl}}">{{src}}</a>
                            <span class="ad-dislike"><i class="icon"></i>不感兴趣</span>
                            {{/if}}
                        </span>
                    </p>
                </div>
            </div>
    </div>
