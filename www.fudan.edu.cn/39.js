
    <div class="post-content" data-id="${id}">
        <div class="auxi">
            <div class="comment-author">
                <a href="javascript:;">
                    <div class="photo" {{if !!avatar}}style="background-image:url(${avatar})"{{/if}}></div>
                </a>
            </div>
            <span class="user">${nickname}</span><span class="time"><span class="dot">•</span>${creation_time}</span><div style="clear:both;"></div></div>
        {{if !!parent_comment}}<div class="quote-body"><span class="quote-author">${parent_nickname}:</span>${parent_comment}</div>{{/if}}
        <div class="post-body">${comment}</div>
        <div class="tools">
            <span class="thumbup"><span class="glyphicon glyphicon-thumbs-up" style="vertical-align: top;margin-top: 2px;"></span>&nbsp;${votes}</span>
            <span class="dot">•</span>
            <span class="reply">Reply</span>
            <!--<span class="dot">•</span>
            <span class="share">Share</span>-->
        </div>
    </div>
