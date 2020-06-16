
    {{if childNum}}
        <dl class="n_gst38578_childs_dl intl_n_gst38578_childs_dl">
            <dt id="dtChildYear">儿童年龄（${today}当天）</dt>
            {{each(i) childAgeSelectedList}}
                <dd id="child${i + 1}">
                    <select>
                        <option value="-1" {{if childAgeSelectedList[i] == -1}}selected=""{{/if}}></option>
                        <option value="0" {{if childAgeSelectedList[i] == 0}}selected=""{{/if}}>&lt;1岁</option>
                        <option value="1" {{if childAgeSelectedList[i] == 1}}selected=""{{/if}}>1岁</option>
                        <option value="2" {{if childAgeSelectedList[i] == 2}}selected=""{{/if}}>2岁</option>
                        <option value="3" {{if childAgeSelectedList[i] == 3}}selected=""{{/if}}>3岁</option>
                        <option value="4" {{if childAgeSelectedList[i] == 4}}selected=""{{/if}}>4岁</option>
                        <option value="5" {{if childAgeSelectedList[i] == 5}}selected=""{{/if}}>5岁</option>
                        <option value="6" {{if childAgeSelectedList[i] == 6}}selected=""{{/if}}>6岁</option>
                        <option value="7" {{if childAgeSelectedList[i] == 7}}selected=""{{/if}}>7岁</option>
                        <option value="8" {{if childAgeSelectedList[i] == 8}}selected=""{{/if}}>8岁</option>
                        <option value="9" {{if childAgeSelectedList[i] == 9}}selected=""{{/if}}>9岁</option>
                        <option value="10" {{if childAgeSelectedList[i] == 10}}selected=""{{/if}}>10岁</option>
                        <option value="11" {{if childAgeSelectedList[i] == 11}}selected=""{{/if}}>11岁</option>
                        <option value="12" {{if childAgeSelectedList[i] == 12}}selected=""{{/if}}>12岁</option>
                        <option value="13" {{if childAgeSelectedList[i] == 13}}selected=""{{/if}}>13岁</option>
                        <option value="14" {{if childAgeSelectedList[i] == 14}}selected=""{{/if}}>14岁</option>
                        <option value="15" {{if childAgeSelectedList[i] == 15}}selected=""{{/if}}>15岁</option>
                        <option value="16" {{if childAgeSelectedList[i] == 16}}selected=""{{/if}}>16岁</option>
                        <option value="17" {{if childAgeSelectedList[i] == 17}}selected=""{{/if}}>17岁</option>
                    </select>
                </dd>
            {{/each}}
        </dl>
        <div class="n_gst38578_childs_tips J_default_child_tips hidden">请选择儿童年龄</div>
    {{/if}}
