
	<div class="tit"><strong>{=dirName}</strong> 분야의 전문가라면?</div>
	<span class="desc">이 분야와 연관된 태그를 관심키워드로 추가해서 답변분야를 넓혀보세요!</span>
	<ul class="tag_chk_list">
		{for data in encodedTagList}
			<li><a href="/tag/tagDetail.nhn?tag={=data.encodedTag}" class="tag">#{=data.tag}</a><a href="#" class="_recommend_tag_add_btn _param('{=data.tag}')" onclick="nhn.Kin.Utility.nClicks('{if sType == 'keyword'}nql_lgd.idtagadd{elseif sType == 'interest'}nql_lgd.ictagadd{else}nql_lgd.ikadd{/if}', '', '', event);"><span class="ico_add">추가</span></a></li>
		{/for}
	</ul>
	<a href="#" class="btn_close _close"><span>닫기</span></a>
