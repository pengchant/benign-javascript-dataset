
    <!-- 热点个性化tab -->
    <div class="pic-item js-slider-hottoutiao">
        <div class="slide-content">
            <div class="slide-column-wrap">
                {if($list.length >= 6)}
                    {for (var i = 0; i < Math.floor($list.length/6); i++)}
                        <div class="slide-item {if(i == 0)}first{/if}">
                            <div class="slide-pic-box">
                                {for(var n = 0; n < 2; n++)}
                                    {if($list[i*6 + n].data_type !== 'operate')}
                                        <a class="slide-item-pic"
                                            target="_blank"
                                            href="{$list[i*6 + n].url}"
                                            clicklog='{$list[i*6 + n].clicklog}'
                                            showlog='{$list[i*6 + n].showlog}'
                                            title="{$list[i*6 + n].title}"
                                            data-ext="{$list[i*6 + n].ext}">
                                            <img src="{$list[i*6 + n].img.clipImage({ whq: '279_130_75', webp:true })}">
                                            <em class="txt">{$list[i*6 + n].title}</em>
                                            <span class="txt-bg"></span>
                                        </a>
                                    {else}
                                        <a class="slide-item-pic hottoutiao-operate"
                                            target="_blank"
                                            href="{$list[i*6 + n].url}"
                                            data-ext="{$list[i*6 + n].ext}">
                                            <img src="{$list[i*6 + n].img.clipImage({ whq: '279_130_75', webp:true })}">
                                            <em class="txt">{$list[i*6 + n].title}</em>
                                            <span class="txt-bg"></span>
                                        </a>
                                    {/if}
                                {/for}
                            </div>
                            <div class="text-list hot-individual-text-list">
                                <ul class="gclearfix">
                                    {for(var j = 2; j < 6; j++)}
                                        <li class="gclearfix">
                                            <span class="dot"></span>
                                            <a target="_blank"
                                                href="{$list[i*6 + j].url}"
                                                clicklog='{$list[i*6 + j].clicklog}' 
                                                showlog='{$list[i*6 + j].showlog}' 
                                                title="{$list[i*6 + j].title}"
                                                data-ext="{$list[i*6 + j].ext}">
                                              {$list[i*6 + j].title}
                                            </a>
                                        </li>
                                    {/for}
                                </ul>
                            </div>
                        </div>
                    {/for}
                {/if}
            </div>
        </div>
        <a href="javascript:;" class="slide-btn slide-pageup"><span class="bg"></span><em class="arrow">&lt;</em></a>
        <a href="javascript:;" class="slide-btn slide-pagedown"><span class="bg"></span><em class="arrow">&gt;</em></a>
    </div>
