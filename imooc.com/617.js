
    {@each data.data as it}
        <li class="reply clearfix">
            <a href="//www.imooc.com/u/${it.uid}/articles" target="_blank">
                <div class="head-img l" style="background-image:url(${it.img})"></div>
            </a>
            <div class="reply-detail l">
                <div class="rep-author clearfix">
                    {@if it.uid == data.article_uid}
                    <div class="author-mark l"></div>
                    {@/if}
                    <a href="//www.imooc.com/u/${it.uid}/articles" target="_blank">
                        <div class="name l">${it.nickname}</div>
                    </a>
                    {@if !it.to_nickname}

                        {@if it.user_type == 2}
                            <div class="teacher icon l"></div>
                        {@/if}
                        {@if it.is_author == 1}
                            <div class="writer icon l"></div>
                        {@/if}       
                        {@if it.mustar_switch == 1}
                            <div class="user icon l"></div>
                        {@/if}
                    {@/if}
                    {@if it.to_nickname}
                        <div class="to l clearfix">
                            <span class="l">回复</span>
                            {@if it.to_uid == data.article_uid}
                            <div class="author-mark l"></div>
                            {@/if}
                            <a href="//www.imooc.com/u/${it.father_uid}/articles" target="_blank">
                                <div class="name l">${it.to_nickname}</div>
                            </a>
                        </div>
                    {@/if}
                </div>
                <div class="rep-content">
                    ${it.content}
                </div>
                <div class="rep-other clearfix">
                    <div class="btn-reply l js-reply" data-replyId="${it.id}" data-name="${it.nickname}">回复</div>
                    {@if data.isLogin}
                        <div class="btn-report l js-tip-off reply-report" data-id="${it.id}" data-uid="${it.uid}" data-src="${data.tip_url}" data-type="16">举报</div>
                    {@/if}
                    <div class="time r">${it.create_time}</div>
                </div>
            </div>
        </li>
    {@/each}
