
    <li class="${statusClass}">
      <a href="/match/detail/${id}" target="_blank" onclick="mfTongji('homepage_hotmatch_item', 'pc')">
        <div class="img-box">
          <img src="${logo}" alt="" class="img-wh">
        </div>
        <p class="name">${name}</p>
        <div class="money">${typeText}奖金：<span>${awardType}</span></div>
        <div class="type">
          <i class="icon dv"></i>
          <span class="dv">${eventScheduleText}</span>
          <span class="num dv ${visibleClass}"><span>${applyPeople}</span>/<span>${number}</span></span>
        </div>
      </a>
    </li>
