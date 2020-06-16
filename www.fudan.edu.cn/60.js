
<div class="post-content"  data-id="${id}">
    <div class="auxi"><span class="author">${nickname}</span><span class="time"><span class="dot">•</span>${creation_time}</span></div>
    {{if !!parent_comment}}<div class="quote-body"><span class="quote-author">${parent_nickname}:</span>${parent_comment}</div>{{/if}}
    <div class="post-body">${comment}</div>
    <div class="tools"><span class="thumbup"><span class="btn-thumbup"></span>${votes}</span><span class="dot">•</span><span class="reply">Reply</span><span class="dot">•</span><span class="share">Share</span></div>
</div>
