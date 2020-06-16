
    <div class="n_gst38578_p intl_n_gst38578_p">
        <!-- 快捷选项 -->
        <ul class="n_gst38578_list">
            <li class="n_gst38578_list_opt">
                成人<span class="n_gst38578_age">18岁及以上</span>
                <span class="number_control"><span class="number_reduce {{if audltCount <= 1}}number_disable{{/if}} J_number_adult_minus"><i class="icon_numreduce"></i></span><input type="text" readonly class="number_input J_adult_number intl_number_input" value="${audltCount}"><span class="number_plus {{if audltCount >= 36}}number_disable{{/if}} J_number_adult_plus"><i class="icon_numplus"></i></span></span>
            </li>
            <li class="n_gst38578_list_opt">
                儿童<span class="n_gst38578_age">0-17岁</span>
                <span class="number_control"><span class="number_reduce {{if childCount <= 0}}number_disable{{/if}} J_number_child_minus"><i class="icon_numreduce"></i></span><input type="text" readonly class="number_input J_child_number intl_number_input" value="${childCount}"><span class="number_plus {{if childCount >= 9}}number_disable{{/if}} J_number_child_plus"><i class="icon_numplus"></i></span></span>
            </li>
        </ul>
        <!-- 儿童人数大于0时显示 -->
        <div class="n_gst38578_childs hidden" id="divChild">
        </div>
        <div class="n_gst38578_ft">
            <button class="n_gst38578_btn" id="confirmChildB">确定</button>
            <button class="n_gst38578_btncancel" id="cancelChildB">取消</button>
        </div>
    </div>
