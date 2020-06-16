
    <div id="divMyFavHotels" class="my_record_bd">
        {{if $data.length > 0 }}
        <ul id="vistedHotels" class="hotel_list my_fav">
            {{each(index,hotel) $data}}
            <li>
                <a onclick="DoFavHotel(this, event, 'D')" title="取消收藏" class="fav_del" href="javascript:void(0);" data-id="${hotel.HotelId}" data-favid="${hotel.HotelFavoriteId}"></a> 
                <a title="${hotel.HotelName}" class="sider_hotel_pic" href="${hotel.HotelUrl}" target="_blank" data-dopost="T">
                    <img alt="" src="${hotel.LogoPic}" style="width:36px;height:36px;"></a>
                <a title="${hotel.HotelName}" class="hotel_name" href="${hotel.HotelUrl}" target="_blank" data-dopost="T" data-href="${hotel.HotelUrl}">${hotel.HotelName}</a>
                <span class="${hotel.CustomerEvalCss}" title="${hotel.CustomerEvalStr}"></span>
            </li>
            {{/each}}
        </ul>
        <div class="more"><a class="" href="javascript:void(0)" target="_blank" onclick="window.moreclick()">更多&nbsp;&gt;</a></div>
        {{else}}
        <div class="no_record">暂无酒店收藏，点击<i class="fav"></i>可收藏感兴趣酒店</div>
        {{/if}}
    </div>
 