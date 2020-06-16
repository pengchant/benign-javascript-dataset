

{@if list.length > 0}
<div class="course_quescon mod-post">
    {@each list as cont, i}
    
    {@if sort == "comment"}
    <div class="wenda-listcon mod-qa-list post-row clearfix" data-id="$${cont.id}">
        <div class="headslider qa-medias l">
            <a href="/u/$${cont.uid}/courses" class="media" target="_blank" title="$${cont.nickname}"><img src="$${cont.head}" width="40" height="40"></a>
        </div>
        <div class="wendaslider qa-content">
            <div class="tit">
                <a href="/u/$${cont.uid}/courses" target="_blank">$${cont.nickname}</a>
            </div>
            <div class="cnt">$${cont.description|nl2br}</div>


            <div class="replymegfooter qa-footer clearfix">
                <div class="l-box l">
                    <a title="赞" href="javascript:;" class="js-pl-praise moco-btn moco-btn-gray-l"  data-id="$${cont.id}">
                        <span class="icon-thumb-revert"></span>
                        <em>$${cont.support_num}</em>
                    </a>
                    
                {@if cont.media_seq > 0}
                <a href="/{@if cont.media_type==1 }video{@else if cont.media_type==2 }code{@else if cont.media_type==3 }ceping{@/if}/{cont.media_id}" class="from">$${cont.chapter_seq}-$${cont.media_seq} $${cont.media_name}</a>
                {@/if}

                    {@if cont.uid != userInfo.uid }
                    <a href="javascript:;" data-id="$${cont.id}" data-type="4" data-uid="$${cont.uid}" class="js-tip-off" data-src="$${url}">举报</a>
                    {@/if}
                </div>

                <span class="r timeago">$${cont.update_time}</span>
            </div>
        </div>
    </div>
    {@else}
    <div class="wenda-listcon mod-qa-list clearfix">
        {@if cont.finished > 0}
        <div class="icon-finish"></div>
        {@else}
         <div class="icon-wenda"></div>
        {@/if}
        <div class="headslider qa-medias l">
            <a href="/u/$${cont.uid}/courses" class="media" target="_blank" title="$${cont.nickname}"><img src="$${cont.head}" width="40" height="40"></a>
        </div>
        <div class="wendaslider qa-content">
            <h2 class="wendaquetitle qa-header">
                <div class="wendatitlecon qa-header-cnt clearfix">
                    <a href="/qadetail/$${cont.id}" target="_blank" class="qa-tit">
                        {@if cont.title}$${cont.title}{@else}$${cont.description}{@/if}
                    </a>
                    {@if cont.credit_show == 1}
                    <span class="add-integral">+1 积分</span>
                    {@/if}
                </div>
            </h2>
            <div class="replycont qa-body clearfix">
                {@if cont.reply}
                    {@if cont.reply.type == 'best'}
                        <div class="l replydes best">
                            <span class="replysign"><span class="adopt">已采纳回答</span> / <a href="/u/$${cont.reply.uid}/courses" target="_blank" title="$${cont.reply.nickname}" class="nickname">$${cont.reply.nickname}</a></span>
                            <div class="replydet">$${cont.reply.description}</div>
                        </div>
                    {@else if cont.reply.type == 'teacher'}
                        <div class="l replydes">
                            <span class="replysign">讲师回答 / <a href="/u/$${cont.reply.uid}/courses" target="_blank" title="$${cont.reply.nickname}" class="nickname">$${cont.reply.nickname}</a><i class="icon-imooc" title="慕课网讲师"></i></span>
                            <div class="replydet">$${cont.reply.description}</div>
                        </div>
                    {@else if cont.reply.type == 'hot'}
                        <div class="l replydes">
                            <span class="replysign">最赞回答 / <a href="/u/$${cont.reply.uid}/courses" target="_blank" title="$${cont.reply.nickname}" class="nickname">$${cont.reply.nickname}</a></span>
                            <div class="replydet">$${cont.reply.description}</div>
                        </div>
                    {@else if cont.reply.type == 'last'}
                        <div class="l replydes">
                            <span class="replysign">最新回答 / <a href="/u/$${cont.reply.uid}/courses" target="_blank" title="$${cont.reply.nickname}" class="nickname">$${cont.reply.nickname}</a></span>
                            <div class="replydet">$${cont.reply.description}</div>
                        </div>
                    {@/if}
                {@else}
                        <a href="/qadetail/$${cont.id}" class="moco-btn moco-btn-gray-l" target="_blank">+ 我来回答</a>
                        <span class="wait-answer icon-drop_left">回答最高可+2积分</span>
                {@/if}
            </div>
            <div class="replymegfooter qa-footer clearfix">
                <div class="l-box l">
                    <a href="/qadetail/$${cont.id}" target="_blank" class="replynumber static-count ">
                        <span class="static-item answer">
                            $${cont.answers} 回答
                        </span>
                        <span class="static-item">
                            $${cont.view_num} 浏览
                        </span>
                    </a>
                    {@if cont.chapter_seqid && cont.media_seqid}
                    <a href="/video/$${cont.media_id}" target="_blank">$${cont.chapter_seqid}-$${cont.media_seqid} $${cont.media_name}</a>
                    {@/if}
                </div>

                <em class="r">$${cont.update_time}</em>
            </div>
        </div>
    </div>
    {@/if}
    {@/each}
</div>
{@else}
    {@if !panel}
    <div class='tab-nodata'>
        <i class='imv2-error_c'></i>
        {@if sort == "comment"}
            <p>目前暂无任何评论</p>
        {@else}
            <p>目前暂无任何问答</p>
        {@/if}
    </div>
    {@/if}
{@/if}
