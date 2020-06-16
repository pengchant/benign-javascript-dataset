
    <div class="landmarks_click">
        <a href="javascript:;" onclick="parent.CtripHotelMap.closeInfoWin('${uid}');return false;" class="landmarks_click_x">×</a>
        <div class="landmarks_name">${name}</div>
        {{if sourceType=="hotel"}}
        <div class="landmarks_xz">
            <span class="hotel_diamond0${star}" title="${starDetail}"></span>
            <span class="score"><span class="num">${score}</span>分</span>
        </div>
        {{/if}}
        {{if sourceType=="customMarker"}}
        <div class="landmarks_distance">${distance}</div>
        {{else}}
        {{if distance > 0}}
        <div class="landmarks_distance">{{if distance >= 1000}}${Math.round(distance / 100) / 10}公里{{else}}${distance}米{{/if}}</div>
        {{/if}}
        {{/if}}
        {{if sourceType=="hotel"}}<div class="landmarks_price">RMB<span${price}</span> 起</div>{{/if}}
        <div class="landmarks_bottom">
            {{if sourceType=="customMarker"}}<a class="del" onclick="parent.CtripHotelMap.deleteInfoWin('${uid}');return false;" href="javascript:;"></a>{{/if}}
            {{if sourceType=="hotel"}}<a href="${url}" target="_blank" class="more">查看详情 &gt;</a>{{/if}}
            <div class="go_to">
                <a href="javascript:;" onclick="parent.CtripHotelMap.popSide.endRoute('transfer', '${name}', '${location.lng}|${location.lat}');return false;">公交</a>|<a onclick="parent.CtripHotelMap.popSide.endRoute('driving', '${name}', '${location.lng}|${location.lat}');return false;" href="javascript:;">驾车</a>|<a onclick="parent.CtripHotelMap.popSide.endRoute('walking', '${name}', '${location.lng}|${location.lat}');return false;" href="javascript:;">步行</a>
            </div>
        </div>
    </div>
