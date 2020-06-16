
{@if nickname}
    <div class="feed-list {@if OP_CONFIG.page=='detail'}discovery-box{@/if} feed-comment-list" data-id='${id}'>
        <div class="user-pic l">
            <a href="/u/${uid}" target="_blank">
                <img src="${img}" width="40" height="40" alt="${nickname}">
            </a>
        </div>
        <div class="feed-right">
            <div class="feed-header">
                <div class="feed-user">
                    ${nickname}
                    {@if user_type == 2}
                    <i class="user-icon teacher" title="签约讲师"></i>
                    {@/if}

                    {@if is_author == 1}
                        <i class="user-icon great" title="签约作者"></i>
                    {@/if}
                    
                    {@if is_mu == 1}
                        <i class="user-icon ismooc" title="慕星人"></i>
                    {@/if}
                </div>
                <div class="feed-time">
                    ${update_time}
                </div>
            </div>
            <div class="feed-content">
                $${description}
            </div>
            <div class="feed-tool">
                <div class="feed-tool-btns feed-tool-btns-mask l">
                    <input type='hidden' value='{"nickname": "$${nickname}"}' />
                    <a href="javascript:void(0)" class="feed-comment-up js-praise-btn {@if is_support > 0}cur{@/if}" data-type='1' data-is_support='${is_support}'>
                        <i class="imv2-thumb_up"></i><span>${support_num}</span>
                    </a>
                    <a class='js-reply-show' href="javascript:void(0)">回复</a>
                    {@if OP_CONFIG.userInfo && OP_CONFIG.userInfo.uid && OP_CONFIG.userInfo.uid != uid}
                    <a href="javascript:;" class="feed-report js-tip-off" data-id="${id}" data-type='13' data-uid='${uid}'>举报</a>
                    {@/if}
                </div>
            </div>
            
            <div class='js-recomment'>
                $${recomment}
            </div>
            
            {@if reply_num > 3}
            <div class="feed-recomment-more" data-id='${id}'>点击展开后面 ${reply_num-3} 条</div>
            {@/if}
            
            <div class="feed-comment" style='display: none;'>
                <div class="user-pic l">
                    {@if OP_CONFIG.userInfo}
                    <a href="/u/${OP_CONFIG.userInfo.uid}" target="_blank">
                        <img src="${OP_CONFIG.userInfo.head}" width="40" height="40" alt="">
                    </a>
                    {@else}
                    <a href="javascript:;">
                        <img src="https://img1.sycdn.imooc.com/images/avatar_default.png" width="40" height="40" alt="">
                    </a>
                    {@/if}
                </div>
                <div class="feed-right">
                    <textarea name="" id="" cols="30" placeholder="" rows="10" class='js-input-textarea'></textarea>
                    <div class="feed-comment-tool">
                        <div class="feed-comment-submit r">
                            <a href="javascript:void(0)" class="btn-cancel js-reply-cancel">取消</a>
                            <a href="javascript:void(0)" class="btn-submit js-reply-submit reply-submit">回复</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{@/if}
