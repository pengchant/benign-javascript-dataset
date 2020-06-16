
        
         <ul class="act-list">
            {{#if(firstBanner&&firstBanner.bannerImgPC)}}
                <li data-mark="pit" data-tag="item">
                  {{#if(firstBanner.bannerUrl)}} <a class="bannerInfo" href={{firstBanner.bannerUrl}} target="_blank">{{/if}}
                      <img src="//g.alicdn.com/s.gif"  data-ks-lazyload="{{firstBanner.bannerImgPC}}"  width="190" height="310" />
                  {{#if(firstBanner.bannerUrl)}}</a>{{/if}}
                </li>
            {{/if}}
            {{#each(items || item)}}
                <li data-mark="pit" data-tag="item">
                    <a class="itemLink" href="{{itemUrl}}" target="_blank" title="{{itemTitle}}"></a>
                    <div class="itemBox">
                        <div class="pic">
                           {{#if(iconImg)}}
                                <div class="widget-area">
                                    <img class="icon-img" src="//g.alicdn.com/s.gif"  data-ks-lazyload="{{iconImg}}" />
                                </div>
                               {{/if}}
                            <img data-ks-lazyload="{{itemImg}}" width="190" height="190" alt="{{itemTitle}}" />
                            {{#if(itemTitle)}}
                            <span class="item-title-wrapper"><s class="item-title-bg"></s><span class="item-title">{{itemTitle}}</span></span>
                            {{/if}}
                        </div>
                        <div class="info-box">
                         <p class="desc">
                                {{#if(itemDesc)}}
                                {{itemDesc}}
                                {{/if}}
                            </p>
                            <s class="box-sep"></s>
                            <div class="info-detail">
                                <div class="logo">{{#if(brandLogo)}}<img data-ks-lazyload="{{brandLogo}}" width="60" height="30" alt={{itemTitle}} />{{/if}}</div>
                                <div class="price-box">
                                {{! 商品属性/卖点 or 原价 }}
                                 {{#if(!hideSalePoint&&salePoint && salePoint.length)}}
                                 {{set(spArr = salePoint.split(';'))}}
                                    <p class="sp-ctn">
                                    {{#each(spArr)}}
                                        <span class="sp-item">{{this}}</span>
                                    {{/each}}
                                    </p>
                                    {{else}}
                                    <p class="oprice">{{itemTagPriceTitle ||'专柜价'}}：<span class="yen">&yen;</span> <span>{{itemTagPrice}}</span></p>
                                    {{/if}}
                                    <p class="price">{{itemActPriceTitle}}：<span class="yen">&yen;</span> <span>{{itemActPrice}}</span></p>
                                </div>
                            </div>

                        </div>
                        <div class="action-box {{#if(!couponValue||!couponUrl)}} no-coupon{{/if}}">
                        {{#if(couponValue&&couponUrl)}}
                            <div class="coupon"><span class="quan">券</span>{{couponValue}}元<span class="mui-act-font icon scale">&#xe64c;</span></div>
                            {{/if}}

                        <div class="btn"> 
                             立即购买  
                            <span class="mui-act-font icon scale">&#xe64c;</span>
                        </div>
                        {{#if(couponValue&&couponUrl)}}
                            <span class="couponLink j_ReceiveCoupon" href="{{couponUrl}}" target="_self" title="{{itemTitle}}"></span>
                        {{/if}}
                    </div>
                </li>
            {{/each}}
            {{#if(lastBanner&&lastBanner.bannerImgPC)}}
                <li data-mark="pit" data-tag="item">
                    {{#if(lastBanner.bannerUrl)}}<a class="bannerInfo" href={{lastBanner.bannerUrl}} target="_blank">{{/if}}
                      <img src="//g.alicdn.com/s.gif"  data-ks-lazyload="{{lastBanner.bannerImgPC}}"  width="190" height="310" />
                    {{#if(lastBanner.bannerUrl)}}</a>{{/if}}
                 </li>
            {{/if}}
              </ul>
        
        