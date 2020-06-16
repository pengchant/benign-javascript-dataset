
    <div class="js-buyModal buyModal">
        <div class="mask "></div>
        <div class="buyModalContent">
            <div class="img" style="background-image:url(${data.pic})"></div>
            <div class="title">${data.name}</div>
            {@if data.inSale == 1}
                <!-- 有优惠 -->
                <div class="sale-price">
                    限时优惠 ¥ ${data.pay}
                </div>
                <div>
                    <span class="ori">原价 ¥ ${data.ori}</span>
                    <span>${data.recover}</span>
                </div>
            {@else}
                <div class="price">
                    价格 ¥ ${data.ori}
                </div>
            {@/if}
            {@if data.isLogin}
            <a class="gobuy" href="${data.url}" target="_blank">
            {@else}
            <a class="gobuy" href="javascript:;" onclick="$('#js-signin-btn').click();">
            {@/if}
                立即订阅
            </a>
            <div class="close js-close-buyModal">暂不订阅</div>
        </div>
    </div>
