 
{@each reply as value}
    <div class="feed-recomment">
        <div class="user-pic l">
            <a href="/u/${value.from_uid}" target="_blank">
                <img src="${value.from_img}" width="40" height="40" alt="?">
            </a>
        </div>
        <div class="feed-right">
            <div class="feed-header">
                <div class="feed-user clearfix">
                    <a target="_blank" href='/u/${value.from_uid}'>${value.from_username}</a>
                    
                    {@if value.user_type == 2}
                    <i class="user-icon teacher" title="签约讲师"></i>
                    {@/if}

                    {@if value.is_author == 1}
                        <i class="user-icon great" title="签约作者"></i>
                    {@/if}
                    
                    {@if value.is_mu == 1}
                        <i class="user-icon ismooc" title="慕星人"></i>
                    {@/if}
                    
                    {@if value.to_username}
                    <span>回复</span>
                    <a target="_blank" href='/u/${value.to_uid}'>${value.to_username}</a> 
                    {@/if}
                </div>
                <div class="feed-time">
                    ${value.update_time}
                </div>
            </div>
            <div class="feed-content">
                $${value.description}
            </div>
            <div class="feed-tool">
                <div class="feed-tool-btns l">
                    <input type='hidden' value='{"nickname": "${value.from_username}", "uid": "${value.from_uid}"}' />
                    <a class='js-reply-show reply-submit' href="javascript:void(0)">回复</a>
                    {@if OP_CONFIG.userInfo && OP_CONFIG.userInfo.uid && OP_CONFIG.userInfo.uid != value.from_uid}
                    <a href="javascript:;" class="feed-report js-tip-off" data-id="${value.id}" data-type='14' data-uid='${value.from_uid}'>举报</a>
                    {@/if}
                </div>
            </div>
        </div>
    </div>
{@/each}
