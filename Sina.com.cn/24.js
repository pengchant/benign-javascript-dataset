
    var PdpsArray = ["PDPS000000058015","PDPS000000058016","PDPS000000058017","PDPS000000058018"];
    var IdArray = ["ad_edu_01","ad_edu_02","ad_edu_03","ad_edu_04"];

            SinaHomeTabNavSpan[0].onmouseover = function (){
                var SpanId = document.getElementById(IdArray[0]);
                if(SpanId.getElementsByTagName("ins").length > 0){
                    return;
                }
                else{
                    //鼠标移上加载广告
                    var SinaHomeTabIns = document.createElement("ins");
                    var SinaHomeTabSC = document.createElement("script");
                    SinaHomeTabIns.className = "sinaads";
                    SinaHomeTabIns.setAttribute("data-ad-pdps", PdpsArray[0]);
                    SinaHomeTabIns.id = "sina_ad_tab0" + 0;
                    SinaHomeTabSC.type = "text/javascript";
                    SinaHomeTabSC.text = [
                            '(sinaads = window.sinaads || []).push({\n',
                                'element : document.getElementById("' + SinaHomeTabIns.id + '"),\n',
                                'params:{\n',
                                    'sinaads_success_handler: function () {\n',
                                        'var TabADContent = arguments[1];\n',
                                        'var TabADPV = TabADContent.content[0].pv;\n',
                                        'var RegExpObj = /(\s)(selected)$/g;\n',
                                        'EduAdSpan1 = 0,EduAdSpan2 = 0,EduAdSpan3 = 0;\n',
                                        'EduAdSpan0++;\n',
                                        'SinaHomeTabNavSpan[0].onmouseover = function(){\n',
                                            //曝光计数特殊处理
                                            'EduAdSpan1 = 0,EduAdSpan2 = 0,EduAdSpan3 = 0;\n',
                                            'if(EduAdSpan0 >= 1){\n',
                                                'return;\n',
                                            '}\n',
                                            'else{\n',
                                                'for(var p = 0,l = TabADPV.length;p < l;p++){\n',
                                                    'var PageViewLink = TabADPV[p];\n',
                                                    'sinaadToolkit.sio.log(PageViewLink);\n',
                                                    'EduAdSpan0++;\n',
                                                '}\n',
                                            '}\n',
                                        '}\n',
                                    '}\n',
                                '}\n',
                            '});\n'
                    ].join('');
                    SpanId.appendChild(SinaHomeTabIns);
                    SpanId.appendChild(SinaHomeTabSC);
                }
            };

            SinaHomeTabNavSpan[1].onmouseover = function(){
                var SpanId = document.getElementById(IdArray[1]);
                if(SpanId.getElementsByTagName("ins").length > 0){
                    return;
                }
                else{
                    //鼠标移上加载广告
                    var SinaHomeTabIns = document.createElement("ins");
                    var SinaHomeTabSC = document.createElement("script");
                    SinaHomeTabIns.className = "sinaads";
                    SinaHomeTabIns.setAttribute("data-ad-pdps", PdpsArray[1]);
                    SinaHomeTabIns.id = "sina_ad_tab0" + 1;
                    SinaHomeTabSC.type = "text/javascript";
                    SinaHomeTabSC.text = [
                            '(sinaads = window.sinaads || []).push({\n',
                                'element : document.getElementById("' + SinaHomeTabIns.id + '"),\n',
                                'params:{\n',
                                    'sinaads_success_handler: function () {\n',
                                        'var TabADContent = arguments[1];\n',
                                        'var TabADPV = TabADContent.content[0].pv;\n',
                                        'EduAdSpan0 = 0,EduAdSpan2 = 0,EduAdSpan3 = 0;\n',
                                        'EduAdSpan1++;\n',
                                        'SinaHomeTabNavSpan[1].onmouseover = function(){\n',
                                            //曝光计数特殊处理
                                            'EduAdSpan0 = 0,EduAdSpan2 = 0,EduAdSpan3 = 0;\n',
                                            'if(EduAdSpan1 >= 1){\n',
                                                'return;\n',
                                            '}\n',
                                            'else{\n',
                                                'for(var p = 0,l = TabADPV.length;p < l;p++){\n',
                                                    'var PageViewLink = TabADPV[p];\n',
                                                    'sinaadToolkit.sio.log(PageViewLink);\n',
                                                    'EduAdSpan1++;\n',
                                                '}\n',
                                            '}\n',
                                        '}\n',
                                    '}\n',
                                '}\n',
                            '});\n'
                    ].join('');
                    SpanId.appendChild(SinaHomeTabIns);
                    SpanId.appendChild(SinaHomeTabSC);
                }
            };

            SinaHomeTabNavSpan[2].onmouseover = function(){
                var SpanId = document.getElementById(IdArray[2]);
                if(SpanId.getElementsByTagName("ins").length > 0){
                    return;
                }
                else{
                    //鼠标移上加载广告
                    var SinaHomeTabIns = document.createElement("ins");
                    var SinaHomeTabSC = document.createElement("script");
                    SinaHomeTabIns.className = "sinaads";
                    SinaHomeTabIns.setAttribute("data-ad-pdps", PdpsArray[2]);
                    SinaHomeTabIns.id = "sina_ad_tab0" + 2;
                    SinaHomeTabSC.type = "text/javascript";
                    SinaHomeTabSC.text = [
                            '(sinaads = window.sinaads || []).push({\n',
                                'element : document.getElementById("' + SinaHomeTabIns.id + '"),\n',
                                'params:{\n',
                                    'sinaads_success_handler: function () {\n',
                                        'var TabADContent = arguments[1];\n',
                                        'var TabADPV = TabADContent.content[0].pv;\n',
                                        'EduAdSpan0 = 0,EduAdSpan1 = 0,EduAdSpan3 = 0;\n',
                                        'EduAdSpan2++;\n',
                                        'SinaHomeTabNavSpan[2].onmouseover = function(){\n',
                                            //曝光计数特殊处理
                                            'EduAdSpan0 = 0,EduAdSpan1 = 0,EduAdSpan3 = 0;\n',
                                            'if(EduAdSpan2 >= 1){\n',
                                                'return;\n',
                                            '}\n',
                                            'else{\n',
                                                'for(var p = 0,l = TabADPV.length;p < l;p++){\n',
                                                    'var PageViewLink = TabADPV[p];\n',
                                                    'sinaadToolkit.sio.log(PageViewLink);\n',
                                                    'EduAdSpan2++;\n',
                                                '}\n',
                                            '}\n',
                                        '}\n',
                                    '}\n',
                                '}\n',
                            '});\n'
                    ].join('');
                    SpanId.appendChild(SinaHomeTabIns);
                    SpanId.appendChild(SinaHomeTabSC);
                }
            };

            SinaHomeTabNavSpan[3].onmouseover = function(){
                var SpanId = document.getElementById(IdArray[3]);
                if(SpanId.getElementsByTagName("ins").length > 0){
                    return;
                }
                else{
                    //鼠标移上加载广告
                    var SinaHomeTabIns = document.createElement("ins");
                    var SinaHomeTabSC = document.createElement("script");
                    SinaHomeTabIns.className = "sinaads";
                    SinaHomeTabIns.setAttribute("data-ad-pdps", PdpsArray[3]);
                    SinaHomeTabIns.id = "sina_ad_tab0" + 3;
                    SinaHomeTabSC.type = "text/javascript";
                    SinaHomeTabSC.text = [
                            '(sinaads = window.sinaads || []).push({\n',
                                'element : document.getElementById("' + SinaHomeTabIns.id + '"),\n',
                                'params:{\n',
                                    'sinaads_success_handler: function () {\n',
                                        'var TabADContent = arguments[1];\n',
                                        'var TabADPV = TabADContent.content[0].pv;\n',
                                        'EduAdSpan0 = 0,EduAdSpan1 = 0,EduAdSpan2 = 0;\n',
                                        'EduAdSpan3++;\n',
                                        'SinaHomeTabNavSpan[3].onmouseover = function(){\n',
                                            //曝光计数特殊处理
                                            'EduAdSpan0 = 0,EduAdSpan1 = 0,EduAdSpan2 = 0;\n',
                                            'if(EduAdSpan3 >= 1){\n',
                                                'return;\n',
                                            '}\n',
                                            'else{\n',
                                                'for(var p = 0,l = TabADPV.length;p < l;p++){\n',
                                                    'var PageViewLink = TabADPV[p];\n',
                                                    'sinaadToolkit.sio.log(PageViewLink);\n',
                                                    'EduAdSpan3++;\n',
                                                '}\n',
                                            '}\n',
                                        '}\n',
                                    '}\n',
                                '}\n',
                            '});\n'
                    ].join('');
                    SpanId.appendChild(SinaHomeTabIns);
                    SpanId.appendChild(SinaHomeTabSC);
                }
            };
