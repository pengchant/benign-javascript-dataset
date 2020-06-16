
{@if data.length > 0}
    <div class="column_recommend">
        <div class="title">
            $${title}
            <a href="/read" target="_blank" class="more">更多<i class="imv2-arrow2_r"></i></a>
        </div>
        <ul>
            {@each data as item}
                <li class="clearfix">
                    <a href="/read/$${item.id}$${item.channelurl}" target="_blank">
                        <div class="img l" style="background-image:url($${item.pic})">
                            {@if item.is_presell == "1"}
                                <div class="insale">预售</div>
                            {@/if}
                        </div>
                    </a>
                    <div class="text_con l">
                        <a href="/read/$${item.id}$${item.channelurl}" target="_blank">
                            <p class="title">$${item.title}</p>
                        </a>
                        <div class="info">
                            <span>共$${item.chapter_num}小节</span>
                            <i class="imv2-dot_samll"></i>
                            <span>$${item.numbers}人已购买</span>
                        </div>
                        <div class="price_con clearfix">
                            <!-- 登录没 -->
                            {@if isLogin }
                                {@if item.isBuy }
                                    <a href="/read/$${item.id}/article/$${item.continueId}" target="_blank">
                                        <div class="goBuy r">继续阅读</div>
                                    </a>
                                {@else}
                                    <a href="//order.imooc.com/pay/confirm/goods_ids/$${item.goods_id}">
                                        <div class="goBuy r">马上订阅</div>
                                    </a>
                                {@/if}  
                            {@else}
                                <a href="javascript:;" onclick="$('#js-signin-btn').click();">
                                    <div class="goBuy r">马上订阅</div>
                                </a>
                            {@/if} 
                            <!-- 买了没 -->
                            {@if item.isBuy}
                                <p class="ori l">已订阅</p>
                            {@else}
                                {@if item.open_discount == "1"}
                                    <p class="sale l">¥ $${item.pay_price}</p>
                                    <p class="sale-ori l">$${item.price}</p>
                                {@else}
                                    <p class="ori l">¥ $${item.price}</p>
                                {@/if}
                            {@/if}
                            
                        </div>
                    </div>
                </li>
            {@/each}
        </ul>
    </div>
{@/if}
