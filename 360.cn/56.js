
    <div class="feed-item feed-mv js-mv-infoflow-item" data-gid="{{gid}}" log-already="0">
        <div class="media">
            <div class="media-body figure-extra">
                <h1 class="media-title title-fix">
                    {{if curl && title}}
                    <a href="{{curl}}" title="{{title}}">{{title}}</a>
                    {{/if}}
                </h1>
                <div class="figure-grid-wrap">
                    <div class="figure-grid gclearfix">
                        {{each assets as item index }}
                            {{ if index < 4 }}
                                {{if item.imgw && item.imgh && item.imgw === item.imgh}}
                                    <div class="figure">
                                        <div class="figure-img">
                                            {{if item && item.curl && item.img && title}}
                                            <a href="{{item.curl}}" title="{{title}}">
                                                <img src="{{item.img.clipImage({whq:'_88_75', webp:true})}}"
                                                    alt="{{title}}"
                                                    width="136"
                                                    height="88">
                                                <span class="figure-desc">{{item.desc}}</span>
                                                {{ if index === 3 }}
                                                <span class="{{if src != '360搜索'}}ad {{/if}}infoflow-ft-mv"></span>
                                                {{/if}}
                                            </a>
                                            {{/if}}
                                        </div>
                                    </div>
                                {{else}}
                                    <div class="figure">
                                        <div class="figure-img">
                                            {{if item && item.curl && item.img && title}}
                                            <a href="{{item.curl}}" title="{{title}}">
                                                <img src="{{item.img.clipImage({whq:'_88_75', webp:true})}}"
                                                    alt="{{title}}"
                                                    width="136"
                                                    height="88">
                                                {{ if index === 3 }}
                                                <span class="{{if src != '360搜索'}}ad {{/if}}infoflow-ft-mv"></span>
                                                {{/if}}
                                            </a>
                                            {{/if}}
                                        </div>
                                    </div>
                                {{/if}}
                            {{/if}}
                        {{/each}}
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
