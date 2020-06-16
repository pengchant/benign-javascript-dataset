
      ;(function(){
        var render = function(id,html){
            var wrap = document.getElementById(id);
            if(wrap){
                wrap.innerHTML = html;
            }
        };
        jsLoader({
          name : 'financeHQ',
          charset:'gbk',
          url : '//hq.sinajs.cn/list=s_sh000001,s_sh000011',
          callback : function(){
            var amtHQ = parseFloat( hq_str_s_sh000001.split(",")[1] ),
            rateHQ = parseFloat( hq_str_s_sh000001.split(",")[3] );

            render('SI_Text_sh600001',
                "沪 " + amtHQ.toFixed(1) + "(" + ( rateHQ > 0 ? "+" : ( rateHQ == 0 ? "" : "" ) ) + rateHQ.toFixed(1) + "%)"
            );
            render('SI_Text_sh600011',
                "上基 " + hq_str_s_sh000011.split(",")[1]
            );
          }
        });
      })();

      