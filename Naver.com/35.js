
	{if type == "interestAll"}
		{if recommendDirGroupList != null}
			<div class="interest_wrap">
				{for recommendDirGroup in recommendDirGroupList}
					{if recommendDirGroup != null}		
						<h6>{=recommendDirGroup.recText}</h6>
						<ul class="interest_area{if recommendDirGroup.isOdd} type_even{/if}">
							{for recommendDir in recommendDirGroup.recList}
								<li>
									<div class="inner">
									<p class="directory">{=recommendDir.dirName}</p>
									<p class="detail">{=recommendDir.path}</p>
									<a href="#" class="btn_check _recommendDir _param('{=recommendDir.dirId},{=recommendDirGroup.recFrom}')" onclick="nhn.Kin.Utility.nClicks('{if recommendDirGroup.recFrom == "EDIT_NOANSWER_PC"}nql_lgd*e.edit{elseif recommendDirGroup.recFrom == "ANSWER_NOANSWER_PC"}nql_lgd*e.answer{elseif recommendDirGroup.recFrom == "AGE_GENDER_NOANSWER_PC"}nql_lgd*e.demo{/if}', '', '', event);"><span class="ico_check on"></span></a>
									</div>
								</li>
							{/for}
						</ul>
					{/if}
				{/for}
				<div class="btn_wrap">
					<a href="#" class="btn_interest _ros _addRecommendDirs" onclick="nhn.Kin.Utility.nClicks('nql_lgd*e.add', '', '', event);">관심분야 추가</a>
				</div>
			</div>
		{/if}
	{elseif type == "interest"}
		<div class="no_data">
			<p>선택하신 분야에 등록된 답변을 기다리는 질문이 없습니다.</p>
		</div>
	{elseif type == "keyword"}
		<div class="no_data">
			<p>선택하신 키워드에 등록된 답변을 기다리는 질문이 없습니다.</p>
		</div>
	{elseif type == "local"}
		<div class="no_data">
			<p>선택하신 지역에 등록된 답변을 기다리는 질문이 없습니다.</p>
		</div>
	{elseif type == "tag"}
		<div class="no_data">
			<p>선택하신 태그로 등록된 답변을 기다리는 질문이 없습니다.</p>
		</div>	
	{else}
		<div class="no_data">
			<p>선택하신 분야에 등록된 답변을 기다리는 질문이 없습니다.</p>
		</div>
	{/if}
