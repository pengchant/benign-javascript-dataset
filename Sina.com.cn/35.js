
                jsLoader({
                    name : 'financeData',
                    charset:'gbk',
                    url : '//hq.sinajs.cn/list=hf_GC,hf_CL,USDCNY',
                    callback : function() {
                        //黄金
                        var comexarr = hq_str_hf_GC.split(',');
                        //原油
                        var nymexarr = hq_str_hf_CL.split(',');
                        //美元人民币
                        var usdcnyarr = hq_str_USDCNY.split(',');
                        var byId = 'getElementById',
                            byTN = 'getElementsByTagName',
                            D = document,
                            T = 'SPAN',
                            comex = (D[byId]('comex'))[byTN](T)[0],
                            nymex = (D[byId]('nymex'))[byTN](T)[0],
                            usdcny = (D[byId]('usdcny'))[byTN](T)[0];

                        var setVal = function(obj,val,flag) {
                            if(parseFloat(flag) < 0) {
                                obj.className = 'num down';
                            } else if(parseFloat(flag) > 0) {
                                obj.className = 'num up';
                            } else {
                                obj.className = 'num';
                            }
                            obj.innerHTML = val;
                        }

                        setVal(comex,comexarr[0],comexarr[1]);
                        setVal(nymex,nymexarr[0],nymexarr[1]);
                        setVal(usdcny,usdcnyarr[1],parseFloat(usdcnyarr[1]) - parseFloat(usdcnyarr[3]));
                    }
                });
            