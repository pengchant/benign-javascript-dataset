
<li class="${indexName} ${liveStatus} clearfix">
    <a href="${url}" target='_blank'>
        <div class="rank-li-content">
            <div class="rankNum">${curIndex}</div>
            <div class="mid-area">
                 ${topHtml}
                <div class="mid-top ${numStatus}">
                    <div class="anchor-grade anchor-grade-${level}"></div>
                    <p class="name">${nickname}</p>
                </div>
                <p class="name ${firstStatus}">${nickname}</p>
                <p class="game-name ${numStatus}">${gamename}</p>
                <p class="zb-title ${numStatus}">距离上一名还差<span>${diff}</span>金豆</p>
            </div>
            <span class="num ${curUpIcon} ${numStatus}">
              <i class="live-icon dv"></i>
              <i class="change-icon"></i>
           </span>
        </div>
    </a>
</li>
