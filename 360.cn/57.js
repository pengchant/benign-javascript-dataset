
    <div class="feed-item feed-mv js-mv-infoflow-item" data-gid="{{gid}}" log-already="0" >
        <div class="media">
            <div class="media-body figure-extra">
                <h1 class="media-title title-fix">
                    {{if curl && title}}
                    <a href="{{curl}}" title="{{title}}">{{title}}</a>
                    {{/if}}
                </h1>
                <div class="figure-grid-wrap">
                    <div class="mv-big-pics clearfix">
                        {{if curl && title && img}}
                        <a href="{{curl}}" title="{{title}}">
                            <img src="{{img.clipImage({whq:'650_217_75', webp: true})}}"
                                alt="{{title}}"
                                width="100%">
                            <span class="{{if src != '360搜索'}}ad {{/if}}infoflow-ft-mv"></span>
                        </a>
                        {{/if}}
                    </div>
                </div>
                <p class="media-extra">
                    {{if src}}
                    <span class="col tag">
                        {{src}}
                    </span>
                    {{/if}}
                </p>
            </div>
        </div>
    </div>
