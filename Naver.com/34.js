
	<div class="answer_box _noanswerItem{if viewType != 'onlyTitle' && thumbnail != null} img_box{/if}{if encodedTagList == null} no_tag{/if}{if isFirst} first{/if}{if isLast} last{/if}">
		<div class="tit_wrap {if viewType == 'onlyTitle' && ((((mediaFlag % 2) == 1) && (viewType == 'onlyTitle' || thumbnail == null)) ||  (_divided16 % 2) == 1 || adultFlag == 'Y')}icon{/if}">
			<a href="{=detailUrl}" class="_first_focusable_link" rel="KIN" target="_blank" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.qtit', '{if gdid != null}{=gdid}{else}{=dirId}_{=docId}{/if}', '{=count}', event);{if loggingType != null}nhn.Kin.Utility.saveListInfo('{=loggingType}',{=page},{=dirId},{=docId},'{=sort}');{/if}">
				{if betPoint > 0}
					<span class="power_grade"><span class="blind">내공</span>{if betPoint > 999}999+{else}{=betPoint}{/if}</span>
				{/if}
				<span class="tit_txt">{=cutTitle}</span>
				
				{if ((mediaFlag % 2) == 1) && (viewType == 'onlyTitle' || thumbnail == null)}
					<span class="ico_picture sp_common">사진첨부</span>
				{/if}
				{if (_divided16 % 2) == 1}
					<span class="ico_file sp_common">파일첨부</span>
				{/if}
				{if adultFlag == 'Y'}				
					<span class="ico_nsfu sp_common">19세 이상 열람 가능</span>
				{/if}

				{if viewType != 'onlyTitle'}
					{if isTitleSameWithContents && thumbnail != null}
						<p class="txt">&nbsp;</p>
					{elseif !isTitleSameWithContents}
						<p class="txt">{=content}</p>
					{/if}
				{/if}
			</a>
		</div>

		{if viewType != 'onlyTitle'}
			{if thumbnail != null}
				<span class="img"><img src="{=thumbnail}" alt="{=title}"></span>
			{/if}

			<div class="tag_wrap"{if encodedTagList == null} style="display:none"{/if}>
				{if encodedTagList != null}
					{for data in encodedTagList}
						<a href="/tag/tagDetail.nhn?tag={=data.encodedTag}" class="tag" target="_blank" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.tag', '{if gdid != null}{=gdid}{else}{=dirId}_{=docId}{/if}', '{=count}', event);">#{=data.tag}</a>
					{/for}
				{/if}
			</div>
		{/if}

		<div class="update_info">
			<span class="num_answer">답변 <em>{if answerCnt >= 100}99+{elseif answerCnt < 0}0{else}{=answerCnt}{/if}</em></span>
			<span class="info"><a href="/qna/list.nhn?dirId={=dirId}" {if viewType == 'onlyTitle'} class="_last_focusable_link" {/if} target="_blank" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.qdir', '{=dirId}', '{=count}', event);">{=cutDirName}</a></span>
			<span class="info">{=writeTime}</span>
		</div>

		<div class="lnk_wrap">
			{if showMetooWonder}
				<a href="#" class="lnk_wonder _metooWonderBtn _param('{=dirId},{=docId}')" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.metoo', '{if gdid != null}{=gdid}{else}{=dirId}_{=docId}{/if}', '{=count}', event);">나도궁금해요 <em class="_metooWonderCount">{=metooWonderCnt}</em></a><span class="dv"></span>
			{/if}
			<a href="{=answerFormUrl}" rel="KIN" class="lnk_answer {if viewType != 'onlyTitle'} _last_focusable_link {/if}" target="_blank" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.quicka', '{if gdid != null}{=gdid}{else}{=dirId}_{=docId}{/if}', '{=count}', event);{if loggingType != null}nhn.Kin.Utility.saveListInfo('{=loggingType}',{=page},{=dirId},{=docId},'{=sort}');{/if}">답변하기 <span class="sp_common ico_arr"></span></a>
		</div>

		{if viewType == 'onlyTitle'}
			<div class="preview_box{if thumbnail != null} thumb_box{/if}">
				<div class="inner">
					{if thumbnail != null}
						<span class="preview_thumb"><img src="{=thumbnail}" width="70" height="70" alt="{=title}"></span>
					{/if}

					<p class="preview_txt">
						{=content}
					</p>
				</div>
			</div>
		{/if}
	</div>
