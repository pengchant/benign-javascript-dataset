
    <div>
        <h2>Add Your Comment <span class="ion-help-circled"></span></h2>
        <div class="help-box">
            <p><span class="ion-arrow-right-b"></span> Things you should know:</p>
            <p>1.Comments will appear only after being approved by our team. Please understand that we don’t work 24/7, so it might be a while before your comment is posted.</p>
            <p>2.In accordance with the Regulations on Internet News and Information Services and other related laws and regulations of the People's Republic of China, comments should not contain anything that is obscene, offensive, defamatory or racist.</p>
        </div>
        <div class="comment-bar">
            <span class="comment-count">${Comments.count} Comment{{if Comments.count > 1}}s{{/if}}</span>
            {{if User}}
            <a href="javascript:;" class="member active" on1click="$(this).parent().find('.member-list').toggleClass('active')">${User.username}&nbsp;<span class="glyphicon glyphicon-chevron-down"></span></a>
            <ul class="member-list">
                <li><a href="/user/account.aspx" target="_blank">Your Profile</a></li>
                <li><a href="/user/passport/logout.aspx">Log Out</a></li>
            </ul>
            {{else}}
            <a href="/user/passport/login.aspx" class="member">Log in</a>
            {{/if}}
            <div style="clear:both"></div>
        </div>
        <form class="comment-box-main">
            <div class="comment-box">
                <span class="placeholder">Write your comment...</span>
                <div class="textarea" contenteditable="true"></div>
            </div>
            <div class="submit {{if !User}}submit-disabled{{/if}}">Post</div>
            <div class="char-set">0 / 500</div>
            <div style="clear:both"></div>
        </form>
        <div class="comment-list">
            <div class="comment-list-items">
            </div>
            <div class="btn-more comment-list-ajax">More comments...</div>
        </div>
    </div>
