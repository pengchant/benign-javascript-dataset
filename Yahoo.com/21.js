
        var pageloadValidAds = ["LDRB","MON"];
        var pageloadNonCollapsedAds = ["LDRB","MON"];
        var bucketSAEnabled = true;
        var darlaJsAsyncEnabled = true;
        var darlaJsAsyncPollTimeout = 10000;
        var darlaJsAsyncPollMaxTimeout = 60000;
        var darlaJsAsyncPollFirstInterval = 50;
        var darlaJsAsyncPollSecondInterval = 100;
        var segBlob = {"pt":"home","ver":"megastrm"};
        var isMON2Valid = false;
                        var nativeBillboardConf = {"pos":"MAST","clean":"my-adsMAST","dest":"my-adsMAST-iframe","fr":"expIfr_exp","rmxp":0,"metaSize":true,"w":970,"h":250,"supports":{"exp-ovr":1,"exp-push":1,"resize-to":1,"lyr":1},"closeBtn":{"mode":2,"useShow":1},"fclose":2,"fdb":{"1":"1","where":"inside"},"doubleBuffering":false,"flex":{"w":{"min":10}}};
                var nonNativeBillboardConf = {"pos":"MAST","clean":"my-adsMAST","dest":"my-adsMAST-iframe","fr":"expIfr_exp","rmxp":0,"metaSize":true,"w":970,"h":250,"supports":{"exp-ovr":1,"exp-push":1,"resize-to":1,"lyr":1},"closeBtn":{"mode":2,"useShow":1},"fclose":2,"fdb":{"1":"1","where":"inside"},"doubleBuffering":false};
        var flSAKey='bct';
        var flInstalled=1;
        var customSiteAttr="geminifed=1";
        var facCustomTimout = 380;
        var safeframeOptinPositions = {"FPAD":true};
        var D, C,
            _adPerfBeaconData,
            _pendingAds = [],
            _adLT = [];

        function darlaOnready() {
            var w = window;

            D = w.DARLA;
            C = {"useYAC":0,"usePE":0,"servicePath":"https:\/\/www.yahoo.com\/sdarla\/php\/fc.php","xservicePath":"","beaconPath":"https:\/\/www.yahoo.com\/sdarla\/php\/b.php","renderPath":"","allowFiF":false,"srenderPath":"https:\/\/s.yimg.com\/rq\/darla\/3-25-0\/html\/r-sf.html","renderFile":"https:\/\/s.yimg.com\/rq\/darla\/3-25-0\/html\/r-sf.html","sfbrenderPath":"https:\/\/s.yimg.com\/rq\/darla\/3-25-0\/html\/r-sf.html","msgPath":"https:\/\/fc.yahoo.com\/unsupported-1946.html","cscPath":"https:\/\/s.yimg.com\/rq\/darla\/3-25-0\/html\/r-csc.html","root":"sdarla","edgeRoot":"https:\/\/s.yimg.com\/rq\/darla\/3-25-0","sedgeRoot":"https:\/\/s.yimg.com\/rq\/darla\/3-25-0","version":"3-25-0","tpbURI":"","hostFile":"https:\/\/s.yimg.com\/rq\/darla\/3-25-0\/js\/g-r-min.js","beaconsDisabled":true,"rotationTimingDisabled":true,"fdb_locale":"What don't you like about this ad?|It's offensive|Something else|Thank you for helping us improve your Yahoo experience|It's not relevant|It's distracting|I don't like this ad|Send|Done|Why do I see ads?|Learn more about your feedback.|Want an ad-free inbox? Upgrade to Yahoo Mail Pro!|Upgrade Now","positions":{"DEFAULT":{"supports":false},"HPSPON":{"w":1,"h":1},"FPAD":{"w":1,"h":1},"LREC":{"w":300,"h":250},"MAST":{"w":1,"h":1},"LDRB":{"w":728,"h":90},"MON":{"w":300,"h":600}},"lang":"en-US"};
            C.positions = {"FPAD":{"clean":"my-adsFPAD","dest":"my-adsFPAD-iframe","metaSize":1,"fdb":"true,","supports":{"resize-to":1,"exp-ovr":1,"exp-push":1,"lyr":1}},"LREC":{"pos":"LREC","clean":"my-adsLREC","dest":"my-adsLREC-iframe","metaSize":true,"w":300,"h":250,"fdb":true,"supports":{"exp-ovr":0,"lyr":0}},"MAST":{"pos":"MAST","clean":"my-adsMAST","dest":"my-adsMAST-iframe","fr":"expIfr_exp","rmxp":0,"metaSize":true,"w":970,"h":250,"supports":{"exp-ovr":1,"exp-push":1,"resize-to":1,"lyr":1},"closeBtn":{"mode":2,"useShow":1,"adc":0},"fclose":2,"fdb":{"1":"1","where":"inside","on":1},"doubleBuffering":false},"LDRB":{"dest":"my-adsLDRB-iframe","w":728,"h":90,"metaSize":1,"rmxp":0,"supports":{"exp-ovr":1,"exp-push":1}},"MON":{"pos":"MON","clean":"my-adsMON","dest":"my-adsMON-iframe","metaSize":true,"w":300,"h":600,"fdb":true,"supports":{"exp-ovr":1,"resize-to":1,"lyr":0}},"DEFAULT":{"sandbox":0,"meta":{"hostURL":"https:\/\/www.yahoo.com"}}};
            C.k2={"res":{"rate":100,"pos":["LREC","MAST","FPAD","LREC2","LREC3","LREC-0","LREC2-0","LREC3-0","MAST-0","LDRB-0","SPL2-0","SPL-0","MON-0"]}};
            C.k2E2ERate=100;
C.k2Rate=100;
C.firstRenderingVisible=true;
C.rotationRenderingVisible=false;
C.smartPixelDisabled=false;
C.so=1;

            C.events = {"DEFAULT":{"clw":{"LREC-0":{"blocked_by":"MON-0"},"MON-0":{"blocked_by":"LREC-0"},"MAST-0":{"blocked_by":"LDRB-0,SPL-0"},"SPL-0":{"blocked_by":"LDRB-0,MAST-0"},"LDRB-0":{"blocked_by":"MAST-0,SPL-0"}}}};
            
                        C.onPreParse = function(eventName, result) {
                var positions = result.ps();
                if (positions.indexOf('MAST') >= 0) {
                    var posItem = result.item('MAST');
                    if (posItem.serveType == 10 && nativeBillboardConf) {
                        DARLA.addPos(nativeBillboardConf);
                    } else if (nonNativeBillboardConf) {
                        DARLA.addPos(nonNativeBillboardConf);
                    }
                }
            };

                        C.onFinishParse = function(eventName, result) {
                var ps = result.ps(),
                    modalOpen = false,
                    position, posItem, curAd, curEvt,
                    validPositions = {},
                    isMONFetch = false;
                
                if (ps && ps.length) {
                                var mon2Index = ps.indexOf('MON2');
            if (mon2Index !== -1) {
                var mon2Position = ps[mon2Index];
                var mon2Item = result.item(mon2Position);

                if (!mon2Item.hasErr && (mon2Item.meta && mon2Item.meta.y && mon2Item.meta.y.size && mon2Item.meta.y.size+'' !== '1x1')) {
                    isMON2Valid = true;
                } else {
                    isMON2Valid = false;
                }
            }

                            if (eventName === 'hlAdsAll' || eventName === 'hlAdsCustom' || eventName === 'homepage-viewer') {
            for (i = 0, l = ps.length; i < l; i++) {
                position = ps[i];
                posItem = result.item(position);
                if (posItem.hasErr || posItem.size + '' === '1x1' || (posItem.meta && posItem.meta.y && posItem.meta.y.size && posItem.meta.y.size + ''=== '1x1')) {
                    validPositions[position] = false;
                } else {
                    if (position.indexOf("MON") > -1) {
                        isMONFetch = true;
                    }
                    validPositions[position] = true;
                }
            }
            if (YMedia && YMedia.Af && YMedia.Af.Event && YMedia.Af.Event.fire) {
                YMedia.Af.Event.fire('sidekickrefresh', validPositions);
            }
                        if (eventName === 'homepage-viewer') {
                var blockedPos = {
                    'MON-1': 'LREC-1,LREC2-1',
                    'MON2-1': 'LREC3-1'
                };
                for (var mainPos in blockedPos) {
                    if (blockedPos.hasOwnProperty(mainPos) && validPositions[mainPos]) {
                        var groupPos = blockedPos[mainPos].split(',');
                        for (i = 0; i < groupPos.length; i++) {
                            var posSett = DARLA.posSettings(groupPos[i]);
                            if (posSett && posSett.dest) {
                                var adDiv = document.getElementById(posSett.dest);
                                if (adDiv && adDiv.id) {
                                    adDiv.id += '-notused';
                                }
                            }
                        }
                    }
                }
            }
        }

                    for (i = 0, l = ps.length; i < l; i++) {
                        position = ps[i];
                        posItem = result.item(position);
                        if (posItem && posItem.conf && posItem.conf.clean) {
                            curAd = document.getElementById(posItem.conf.clean);
                            if (curAd) {
                                
            if ((eventName === 'hlAdsAll' || eventName === 'hlAdsCustom') && (position.indexOf("LREC") > -1 || position.indexOf("UBALREC") > -1)) {
              if (posItem && posItem.conf && posItem.conf.clean) {
                var fallbackDiv = document.getElementById(posItem.conf.clean + "-fallback");
                }
                if ((posItem.hasErr || posItem.size + '' === '1x1' || (posItem.meta && posItem.meta.y && posItem.meta.y.size && posItem.meta.y.size+'' === '1x1'))  && (!isMONFetch || position !== 'LREC-0')) {
                    var lrecBackfillString = "<a href=\"https:\/\/overview.mail.yahoo.com\/\" style=\"background:url(https:\/\/s.yimg.com\/cv\/apiv2\/default\/20191018\/EN_US_Yellow_300x250.png) 0 0 no-repeat;height:250px;width:300px;display:block;margin:auto;text-indent:-9999em;\">Yahoo! Mail<\/a>";
                    if (fallbackDiv) {
                       fallbackDiv.innerHTML = lrecBackfillString;
                       fallbackDiv.className = fallbackDiv.className.replace('D-n', '');
                        var sponsorSlugNode = curAd.parentElement.getElementsByClassName('cslug');
                        if (sponsorSlugNode && 0 !== sponsorSlugNode.length) {
                            sponsorSlugNode[0].className = sponsorSlugNode[0].className.replace('D-n', '');
                        }
                    }
                    curAd.parentElement.className = curAd.parentElement.className.replace(/lrec-before-loading/, '');
                    curAd.className = curAd.className.replace(/hl-ad-LREC/, '');
                } else {
                    if (fallbackDiv && fallbackDiv.className.indexOf("D-n") < 0) {
                      fallbackDiv.className += ' D-n';
                    }
                    if (isMONFetch && position === 'LREC-0') {
                        curAd.parentElement.style.height = '600px';
                        var curAd = document.getElementById(posItem.conf.clean);
                        if (curAd.className.indexOf("D-n") < 0  && curAd.className.indexOf("D-ib") >= 0) {
                          curAd.className = curAd.className.replace(/D-ib/, 'D-n');
                        }
                    }
                }
            }
            if (eventName === 'prefetch' && position.indexOf("LREC") > -1) {
                curAd.parentElement.className = curAd.parentElement.className.replace(/lrec-bgcolor/, '');
            }
            if (eventName === 'fetch_selective_ad_ubalrec2' || eventName === 'fetch_selective_ad_ubalrec3' ||
                eventName === 'fetch_selective_ad_lrec2' || eventName === 'fetch_selective_ad_lrec3' ||
                eventName === 'fetch_selective_ad_lrec5' ) {
                var fallbackDiv;
                if (position === 'LREC2') {
                    fallbackDiv = document.getElementById("my-adsLREC2-fallback");
                }  else if (position === 'LREC3') {
                    fallbackDiv = document.getElementById("my-adsLREC3-fallback");
                } else if( position === 'UBALREC2' || position === 'UBALREC3') {
                    fallbackDiv = document.getElementById("my-adsUBALREC2-fallback");
                } else {
                    fallbackDiv = document.getElementById("my-ads" + position + "-fallback");
                }

                if (fallbackDiv) {
                    if (posItem.hasErr || (posItem.meta && posItem.meta.y && posItem.meta.y.size && posItem.meta.y.size+'' === '1x1')) {
                        curAd.parentElement.className = curAd.parentElement.className.replace(/lrec-bgcolor/, '');
                        curAd.className = curAd.className.replace(/lrec-bgcolor/, '');
                        curAd.className = curAd.className.replace('Ht-' + posItem.meta.y.size, '');
                        curAd.className = curAd.className.replace('Ht-default', '');
                        // hide div if ad fetch failed or is 1x1
                        if (curAd.className.indexOf("D-n") < 0) {
                            curAd.className += ' D-n';
                        }
                        var sponsorSlugNode = curAd.parentElement.getElementsByClassName('cslug');
                        if (sponsorSlugNode &&  0 !== sponsorSlugNode.length) {
                            sponsorSlugNode[0].className = sponsorSlugNode[0].className.replace('Dn', '');
                        }
                        fallbackDiv.className = fallbackDiv.className.replace('D-n', '');
                    } else {
                        if (fallbackDiv.className.indexOf("D-n") < 0) {
                            fallbackDiv.className += ' D-n';
                        }
                        curAd.className = curAd.className.replace('D-n', '');
                    }

                    if (position === 'LREC3') {
                        var lrec2Div = document.getElementById("my-adsLREC2");
                        if (lrec2Div && lrec2Div.className.indexOf("D-n") < 0) {
                            lrec2Div.className += ' D-n';
                        }
                                    if (isMON2Valid) {
                var mon2El = document.getElementById("my-adsMON2-iframe");
                if (mon2El.tagName !== 'IFRAME') {
                    curAd.className = curAd.className.replace('D-n', '');
                    if (curAd.parentElement.className.indexOf('lrec-bgcolor') < 0) {
                        curAd.parentElement.className += ' lrec-bgcolor';
                    }
                }
                if (fallbackDiv.className.indexOf('D-n') < 0) {
                    fallbackDiv.className += 'D-n';
                }
                if (curAd.parentElement.className.indexOf('Ht-300x600') < 0) {
                    curAd.parentElement.className += ' Ht-300x600';
                }
            }

                    }

                    if (position === 'UBALREC3') {
                        var lrec2Div = document.getElementById("my-adsUBALREC2");
                        if (lrec2Div && lrec2Div.className.indexOf("D-n") < 0) {
                            lrec2Div.className += ' D-n';
                        }
                    }
                }
            }

                            }
                        }
                    }
                                if (isMON2Valid) {
                var lrec4DivFallback = document.getElementById('my-adsLREC4-fallback');
                var lrec3DivFallback = document.getElementById('my-adsLREC3-fallback');
                if (lrec4DivFallback && lrec4DivFallback.className.indexOf('D-n') === -1) {
                    lrec4DivFallback.className += ' D-n';
                }
                if (lrec3DivFallback && lrec3DivFallback.className.indexOf('D-n') === -1) {
                    lrec3DivFallback.className += ' D-n';
                }
            }
                                    if (eventName === 'AUTO' || eventName == 'fetch_selective_ad_lrec3' || eventName === 'tabswitch') {
                    var isMON2Group = ps.indexOf('LREC3') >= 0 && ps.indexOf('MON2') >= 0 && ps.indexOf('LREC4') >= 0;
                    var lrec3Div = document.getElementById("my-adsLREC3");
                    var lrec4Div = document.getElementById("my-adsLREC4");
                    var mon2Node = document.getElementById('my-adsMON2');
                    var previousAdWasMON2 = mon2Node && mon2Node.offsetHeight > 0;
                    if (isMON2Valid) {
                        if (!previousAdWasMON2 && lrec3Div && lrec3Div.parentElement) {
                            if (lrec3Div.parentElement.className.indexOf('lrec-bgcolor') < 0) {
                                lrec3Div.parentElement.className += ' lrec-bgcolor';
                            }
                            if (lrec3Div.parentElement.className.indexOf('Ht-300x600') < 0) {
                                lrec3Div.parentElement.className += ' Ht-300x600';
                            }
                        }
                        if (lrec4Div) {
                            lrec4Div.parentElement.className = lrec4Div.parentElement.className.replace('lrec-bgcolor', '');
                            lrec4Div.className = lrec4Div.className.replace('Ht-default', '');
                            if (lrec4Div.className.indexOf('D-n') < 0) {
                                lrec4Div.className += 'D-n';
                            }
                        }
                    } else {
                        if (previousAdWasMON2) {
                            if (lrec3Div) {
                                if (lrec3Div.className.indexOf('lrec-bgcolor') < 0) {
                                    lrec3Div.className += ' lrec-bgcolor';
                                }
                                lrec3Div.className = lrec3Div.className.replace('D-n', '');
                                lrec3Div.className = lrec3Div.className.replace('Ht-300x600', '');
                                lrec3Div.parentElement.className = lrec3Div.parentElement.className.replace('Ht-300x600', '');
                                if (lrec3Div.className.indexOf('Ht-default') < 0) {
                                    lrec3Div.className += ' Ht-default';
                                }
                            }
                            if (lrec4Div) {
                                if (lrec4Div.className.indexOf('lrec-bgcolor') < 0) {
                                    lrec4Div.className += ' lrec-bgcolor';
                                }
                                lrec4Div.className = lrec4Div.className.replace('D-n', '');
                                if (lrec4Div.className.indexOf('Ht-default') < 0) {
                                    lrec4Div.className += ' Ht-default';
                                }
                            }
                        } else {
                            if (lrec4Div) {
                                lrec4Div.className = lrec4Div.className.replace('D-n', '');
                            }
                        }
                    }
                }
                 }
            };

                        C.onStartPosRender = function(posItem) {
                if (window.performance  && window.performance.now) {
                    var ltime = window.performance.now(),
                        posId = posItem && posItem.pos;
                    _adLT.push(['ADSTART_'+posId, Math.round(ltime)]);
                }
                if (window._isModalOpen && window._isModalOpen()) {
                    window._perfMark('ADSTART_' + posId);
                }
                
            };

                        C.onBeforeStartPosRender = function(posItem) {
                if (posItem && safeframeOptinPositions && safeframeOptinPositions[posItem.pos]) {
                    if (posItem.html && posItem.html.match(/<!--[^>]*sfoptout[^>]*-->/)) {
                        return true;
                    }
                }
            };

                        C.onFinishPosRender = function(posId, reqList, posItem) {
                var curAd = document.getElementById("my-ads"+posId),
                    adIndex,
                    posSize = (posItem && posItem.meta && posItem.meta.value("size", "y")),
                    facStatus = (posItem && posItem.meta && posItem.meta.value("facStatus", "y"));

                // Get clean div for ad position in case defined
                if (posItem && posItem.conf && posItem.conf.clean) {
                    curAd = document.getElementById(posItem.conf.clean);
                }
                if (curAd) {
                                if (isMON2Valid && posId === 'MON2') {
                var lrec3Div = document.getElementById("my-adsLREC3");
                if (lrec3Div.className.indexOf('D-n') < 0) {
                    lrec3Div.className += ' D-n';
                }
                if (lrec3Div) {
                    lrec3Div.className = lrec3Div.className.replace('Ht-300x600', '');
                    if (lrec3Div.parentElement) {
                        lrec3Div.parentElement.className = lrec3Div.parentElement.className.replace('Ht-300x600', '');
                        lrec3Div.parentElement.className = lrec3Div.parentElement.className.replace(/lrec-bgcolor/, '');
                    }
                    lrec3Div.className = lrec3Div.className.replace(/lrec-bgcolor/, '');
                }
            }

                    // Let ad take its original size, remove default height given to ad div
                    curAd.className = curAd.className.replace('Ht-'+ posSize, '');
                    curAd.className = curAd.className.replace('Ht-default', '');
                    curAd.parentElement.className = curAd.parentElement.className.replace(/lrec-bgcolor/, '');
                    curAd.className = curAd.className.replace(/lrec-bgcolor/, '');
                    curAd.parentElement.className = curAd.parentElement.className.replace(/lrec-before-loading/, '');

                    if((posSize && posSize != "1x1") && (!facStatus || facStatus.fedStatusCode != '16')) {
                        curAd.className = curAd.className.replace('D-n', '');
                        var sponsorSlugNode = curAd.parentElement.getElementsByClassName('cslug');
                        if (sponsorSlugNode && 0 !== sponsorSlugNode.length) {
                            sponsorSlugNode[0].className = sponsorSlugNode[0].className.replace('Dn', '');
                            sponsorSlugNode[0].className = sponsorSlugNode[0].className.replace('D-n', '');
                        }
                    }
                }

                if (window.performance !== undefined && window.performance.now !== undefined) {
                    var whiteListedAds = {"LREC":"my-adsLREC-base","MAST":"my-adsMAST","LDRB":"my-adsLDRB","UBALDRB":"my-adsUBALDRB","TL1":"my-adsTL1","TXTL":"my-adsTXTL","LREC-0":"hl-ad-LREC-0","MON-0":"hl-ad-MON-0","MAST-0":"hl-ad-MAST-0","LDRB-0":"hl-ad-LDRB-0","SPL2-0":"hl-ad-SPL2-0","SPL-0":"hl-ad-SPL-0","LDRB-1":"viewer-LDRB","MON-1":"viewer-MON","LREC-1":"viewer-LREC","LREC-2":"viewer-LREC2"},
                      ltime = window.performance.now();
                     _adLT.push(['ADEND_'+posId, Math.round(ltime)]);
                    setTimeout(function () {
                        if (window.YAFT !== undefined && window.YAFT.isInitialized() && whiteListedAds[posId]) {
                            // Trigger custom timing for LREC ad position
                            window.YAFT.triggerCustomTiming(whiteListedAds[posId], '', ltime);
                        }
                    },300);
                }
                if (window._isModalOpen && window._isModalOpen()) {
                    window._perfMark('ADEND_' + posId);
                    adIndex = window._pendingAds.indexOf(posId);
                    if (adIndex >= 0) {
                        window._pendingAds.splice(adIndex, 1);
                        if (window._pendingAds.length === 0) {
                            window._adRenderComplete();
                        }
                    }
                }
            };

            C.onBeforePosMsg = function(msg_name, position) {
        // Make these configurable for INTLS
        var maxWidth = 970,
            maxHeight = 600,
            newWidth,
            newHeight,
            origWidth,
            origHeight,
            pos;

        if('MAST' !== position) {
            return;
        }

        if (msg_name === 'resize-to') {
            newWidth = arguments[2];
            newHeight = arguments[3];
        }
        else if (msg_name === 'exp-push' || msg_name === 'exp-ovr') {
            pos = $sf.host.get('MAST'),
            origWidth = pos.conf.w;
            origHeight = pos.conf.h;
            //"exp-ovr" or "exp-push", position id, delta X, delta Y, push (true /false), top increase, left increase, right increase, bottom increase
            newWidth = origWidth + arguments[6] + arguments[7];
            newHeight = origHeight + arguments[5] + arguments[8];
        }
        if(newWidth > maxWidth || newHeight > maxHeight) {
            return true;
        }
    };
                        //call back when the ad is expanded or collapsed
            C.onPosMsg = function (msg_name, data, msg_data)  {
                var visible;
                                if(msg_name == "collapse" && data == "MAST") {
                    var bodyTag = document.getElementsByTagName("body")[0];
                    bodyTag.className = bodyTag.className.replace('mastAdExpanded', '');
                    bodyTag.className += " " +  "mastAdCollapsed";
                }
                if(msg_name == "exp-push" && data == "MAST") {
                    var bodyTag = document.getElementsByTagName("body")[0];
                    bodyTag.className = bodyTag.className.replace('mastAdCollapsed', '');
                    bodyTag.className += " " +  "mastAdExpanded";
                }

                /* generic ad expansion logic */
                if(msg_name == "collapse") {
                    var bodyTag = document.getElementsByTagName("body")[0];
                    bodyTag.className = bodyTag.className.replace(data + "-ad-expanded", '');
                }

                if(msg_name == "exp-ovr") {
                    var bodyTag = document.getElementsByTagName("body")[0];
                    bodyTag.className += " " + data + "-ad-expanded";
                }

                if (msg_name === 'geom-update') {
                    visible = D.render.RenderMgr.get(data).viewedAt > 0;
                    // geom-update event will always be available when Y is available
                    if (YMedia && visible) {
                        YMedia.Global.fire('ads:beacon', {id: data});
                    }
                }
            };

            

            


            if ("OK" == D.config(C)) {
                setTimeout(function() {
                    if (window.performance  && window.performance.now) {
                        var ltime = window.performance.now();
                        _adLT.push(['DARLA_RSTART', Math.round(ltime)]);
                    }
                    var w = window,
                        d = document,
                        e = d.documentElement,
                        g = d.getElementsByTagName('body')[0],
                        winWidth = w.innerWidth || e.clientWidth || g.clientWidth;
                        D.render();
                    if (window.performance  && window.performance.now) {
                        var ltime = window.performance.now();
                        _adLT.push(['DARLA_REND', Math.round(ltime)]);
                    }
                }, 2);
            }
        }
        function createNewEvent(eventName) {
            var event;
            if (typeof(Event) === 'function') {
                event = new Event(eventName);
            } else {
                event = document.createEvent('Event');
                event.initEvent(eventName, true, true);
            }
            return event;
        }
        function darlaOnreadyPoll(callback, timeout, maxTimeout, firstInterval, secondInterval) {
            timeout = Number(new Date()) + timeout;
            maxTimeout = Number(new Date()) + maxTimeout;

            (function condition() {
                if (window.DARLA) {
                    dispatchEvent && dispatchEvent(createNewEvent('darlaReadyOnAsync'));
                    callback();
                } else if (Number(new Date()) < timeout) {
                    setTimeout(condition, firstInterval);
                } else if (Number(new Date()) < maxTimeout) {
                    setTimeout(condition, secondInterval);
                } else {
                    // NoAds
                }
            })();
        }

        if (darlaJsAsyncEnabled) {
            window.DARLA ?
                darlaOnready() :
                darlaOnreadyPoll(darlaOnready, darlaJsAsyncPollTimeout, darlaJsAsyncPollMaxTimeout,  darlaJsAsyncPollFirstInterval, darlaJsAsyncPollSecondInterval);
        } else {
            darlaOnready();
        }
    