
    <div id="visitedHistory" class="my_record_bd hidden">
        {{if $data.length > 0 }}
        <ul class="hotel_list my_history J_historyHotelsList">
            {{each(index,hotel) $data}}
            <li>
                <a id="ctl00_repeaterListPage_ctl00_linkDelete" class="delete" data-id="${hotel.HotelId}" href="javascript:void(0);"></a>
                <a id="ctl00_repeaterListPage_ctl00_linkHotelPicture" class="sider_hotel_pic" data-ctm="#ctm_ref=${hotel.ctm}" title="${hotel.HotelName}" data-hotel=${hotel.HotelId}" href="/hotel/${hotel.HotelId}.html" target="_blank">
                    <img id="ctl00_repeaterListPage_ctl00_imgHotelPicture" src="${hotel.LogoUrl}" style="border-width:0px;width:36px; height:36px;"></a>
                <a id="ctl00_repeaterListPage_ctl00_linkHotelName" data-dopost="T" class="hotel_name" data-ctm="#ctm_ref=${hotel.ctm}" title="${hotel.HotelName}" data-hotel="${hotel.HotelId}" href="/hotel/${hotel.HotelId}.html" target="_blank" data-href="/hotel/${hotel.HotelId}.html">${hotel.HotelName}</a>
                <span class="${hotel.CustomerEvalCss}" title="${hotel.CustomerEvalStr}"></span>
            </li>
            {{/each}}
        </ul>
        <div class='more'>
            <a href="javascript:;" class="more_fold">更多<i class="i_down"></i></a>
            <a href="javascript:;" class="more_unfold" style="display:none">收起<i class="i_up"></i></a>
            <label class="hidden">return {"key":"hotel_inland_list_hotel_history","value":{"ismore":"F","hotellist":"690633,2563606,4978892"}}</label>
        </div>
        {{else}}
        <div class="no_record">暂无浏览历史</div>
        {{/if}}
    </div>
