
        window.ENTERSERVPOSITION = window.ENTERSERVPOSITION || {};
        if(!window.ENTERSERVPOSITION.isMerchantCenterSpm){
            // 设置ab位
            window.MypaTracert && window.MypaTracert.call('set', {
                spmAPos: 'a86', // a位
                spmBPos: 'b11916', // b位
            })
        }
    