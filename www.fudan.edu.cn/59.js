
<div>
    <h2>Add Your Comment <img src="/images/comments/icon-quest.png" width="16" height="16"  alt="" class="btn-quest" style="position:relative;top:2px;left:2px;cursor:pointer;"/></h2>
    <div class="quest-box" style="display:none;">
        <p>Things you should know:</p>
        <p>1.The comments will appear only after being approved by the webmaster.</p>
        <p>2.Please understand that the webmaster doesn’t work 24/7. So it might be a while before the comments are posted.</p>
        <p>3.Please abide by the Regulations on Internet News and Information Services and other related laws and regulations of the People's Republic of China.</p>
        <p>4.Do not post anything that is obscene, offensive, defamatory or racist.</p>
        <p>5.We reserve the right to use, repost, quote or delete the comments.</p>
    </div>
    <div class="comment-bar">
        <span class="comment-count">${Comments.count} Comment{{if Comments.count > 1}}s{{/if}}</span><a class="sort-order"><span style="background:#fff;">Sort by Newest</span><div class="sort-array"></div></a><a href="/userCenter/login.aspx" class="member" {{if !User.Login}}style="display:block;"{{/if}}>Login</a><a class="member" {{if User.Login}}style="display:block;"{{/if}}>${User.Username}</a>
        <ul class="sort-list"><li data-type="s">Best</li><li data-type="n" class="selected">Newest</li><li data-type="o">Oldest</li></ul>
        {{if User.Login}}
        <ul class="member-list"><li><a href="http://accounts.shanghaidaily.com/Account.aspx" target="_blank">Your Profile</a></li><li><a href="javascript:logout()">Log Out</a></li></ul>
        {{/if}}
        <div style="clear:both"></div>
    </div>
    <div class="comment-box-main">
        <div class="comment-box">
            <span class="placeholder">Write your comment...</span>
            <div class="textarea" contenteditable="true"></div>
        </div>
        <div class="submit {{if !User.Login}}submit-disabled{{/if}}">Post a Comment</div>
        <div class="char-set">0 / 500</div>
        <div style="clear:both"></div>
    </div>
    <div class="comment-list">
    </div>
    <div class="hint comment-list-ajax">loading...</div>
</div>
