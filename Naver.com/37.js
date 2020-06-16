
	{if pageInfo.isSearch}
		{if pageInfo.hasPre == "Y"}<a href="#" class="prev _prevPage _param('{=pageInfo.prePage},{=pageInfo.prevPageOffset},true')" onClick="nhn.Kin.Utility.nClicks('{=nclickCode}.prev', '', '{=pageInfo.prePage}', event);">이전</a>{/if}{if pageInfo.hasNext == "Y"}	<a href="#" class="next _nextPage _param('{=pageInfo.nextPage},{=pageInfo.nextPageOffset},false')" onClick="nhn.Kin.Utility.nClicks('{=nclickCode}.next', '', '{=pageInfo.nextPage}', event);">다음</a>{/if}
	{else}
		{if pageInfo.hasPre == "Y"}
			<a href="#" class="prev _prevPage _param('{=pageInfo.prePage}')" onClick="nhn.Kin.Utility.nClicks('{=nclickCode}.prev', '', '{=pageInfo.prePage}', event);">이전</a>
		{/if}
		{for p in pageInfo.pageList}
			<a href="#" class="number _page _param('{=p}'){if pageInfo.page == p} on{/if}"{if pageInfo.page == p} title="선택됨"{/if} onClick="nhn.Kin.Utility.nClicks('{=nclickCode}.page', '', '{=p}', event);">{=p}</a>
		{/for}
		{if pageInfo.hasNext == "Y"}
			<a href="#" class="next _nextPage _param('{=pageInfo.nextPage}')" onClick="nhn.Kin.Utility.nClicks('{=nclickCode}.next', '', '{=pageInfo.nextPage}', event);">다음</a>
		{/if}
	{/if}
