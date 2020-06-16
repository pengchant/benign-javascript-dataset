
{@if list && list.length > 0}
<ul id="js-note-container" class="mod-post">
{@each list as notes, i}
<li id="$${notes.id}" class="post-row js-find-txt" courseid="$${notes.course_id}" noteId="$${notes.id}" uid="$${flag}_$${notes.id}" authorid="$${notes.author_id}">
  <div class="media">
    <a href="/u/$${notes.author_id}/courses" target="_blank"><img src="$${notes.head}" width="40" height="40"></a>
  </div>
  <div class="bd">
    <div class="tit">
      <a href="/u/$${notes.author_id}/courses" target="_blank">$${notes.nickname}</a>
    </div>

   
    <div class="js-note-main">
    {@if notes.media_type}
    <div class="note-media">
      <a href="/{@if notes.media_type==1 }video{@/if}{@if notes.media_type==2 }code{@/if}{@if notes.media_type==3 }ceping{@/if}/$${notes.media_id}" class="from l">源自：$${notes.chapter_seq}-$${notes.media_seq} $${notes.media_name}</a>
    </div>
    {@/if}
    
    {@if notes.author_id != userInfo.uid }
    <a href="javascript:;" data-id="$${notes.id}" data-type="8" data-uid="$${notes.author_id}" class="js-tip-off r tipoff" data-src='$${url}'>举报</a>
    {@/if}
    <div class="js-notelist-content notelist-content">
      <div class="autowrap note-content">$${notes.content}</div>
    </div>
    <div class="clearfix">
      <input class="moco-btn moco-btn-green sava_btn" type="button" value="保存">
    </div>



    {@if notes.picture_url != ''}
    <div class="note-img">
      <div class="note-img-box">
             <img class="js-catch-pic" src="$${notes.picture_url}" data-src="$${notes.picture_url.split("-")[0]}.jpg" width="156" height="88">
             <i>{@if notes.pic_time_fmt == ''}00:00{@else}$${notes.pic_time_fmt}{@/if}</i>
        </div>
        <a href="/video/$${notes.media_id}/$${notes.pic_time}" target="_blank" class="view-video"><i class="imv2-video"></i>看视频</a>
    </div>
    {@/if}
    
    {@if notes.lang>0}
    <div class="note-img">
      <div class="note-code js-show-node-code"  data-id="$${notes.id}">
        <div class="note-code-view"><i class="imv2-fullscreen"></i>查看代码快照</div>
        <img src="/static/img/codeview.png" alt="">
      </div>
    </div>
    {@/if}


    <div class="footer clearfix">
      <div class="actions l">
        <a title="赞" href="javascript:;" class="Jpraise moco-btn moco-btn-gray-l l"  data-mid="$${notes.media_id}">
          <span class="icon-thumb-revert"></span>
          <em>$${notes.praise_num}</em>
        </a>
        
        <a title="采集" href="javascript:;" class="Jcollect post-action "  data-mid="$${notes.media_id}|$${notes.author_id}">
          <i>采集</i>
          <em>$${notes.collect_num}</em>
        </a>

        <a href="/notepad/$${notes._url}" target="_blank" class="post-action">查看全文</a>
      </div>
      <span title="$${notes.update_time_fmt}" class="r timeago">$${notes.update_time_fmt}</span>
    </div>
    </div>
    {@if notes.author_id == userInfo.uid }
    <div class="js-note-editor note-editor"  style="display:none;">
        $${notes.content|getScriptHtml,flag,notes.id}
        <div class="note-editor-tool">
            <a href="javascript:void(0)" class="moco-btn js-note-cancel">取消</a><a href="javascript:void(0)" class="moco-btn moco-btn-red js-note-submit">提交</a>
        </div>
    </div>
    {@/if}
  </div>
</li>
{@/each}
</ul>
{@else}
    {@if !panel}
    <div class='tab-nodata'>
        <i class='imv2-error_c'></i>
        <p>目前暂无任何同学笔记</p>
    </div>
    {@/if}
{@/if}
