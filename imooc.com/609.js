
{@if list.length > 0}
<ul>
    {@each list as item, i}
    <li>
        <div class='clearfix code-uhead'>
            <a href='/u/$${item.uid}/courses' target="_blank">
                <img src='$${item.portrait}' />
            </a>
            <dl>
                <dt>
                    <a href='/u/$${item.uid}/courses' target="_blank">$${item.nickname}</a>
                </dt>
                <dd>$${item.create_time}</dd>
            </dl>
        </div>
        
        <a href='javascript:;' class='lookcode js-lookcode moco-btn-dark clearfix' data-id="$${item.id}">
            <i class='imv2-code'></i>
            <span>查看代码</span>
        </a>
        
        <span class="moco-ico-btn moco-btn-gray-l js-code-praise code-praise {@if item.has_support}active{@/if}" data-id="$${item.id}"><i class="imv2-thumb_up"></i><em>$${item.support}</em></span>
    </li>
    {@/each}
</ul>
{@else}
<div class='tab-nodata'>
    <i class='imv2-error_c'></i>
    <p>目前暂无任何同学代码</p>
</div>
{@/if}
