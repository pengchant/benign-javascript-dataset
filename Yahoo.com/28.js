
    (function(w) {
        var adsConfig = {
            clusterGeminiSMAdEnabled: undefined,
            clusterGeminiSMAdConfig: {},
            clusterSMAdEnabled: undefined,
            clusterPositionMeta: undefined,
            pencilAdSections: {},
            positions: {"LDRB":{"meta":{"clean":"sda-LDRB","dest":"sda-LDRB-iframe","fdb":1,"id":"LDRB","metaSize":true,"pos":"LDRB","supports":{"exp-ovr":1,"exp-push":1,"lyr":0},"w":728,"h":90},"sfoptin":1},"LREC":{"meta":{"clean":"sda-LREC","dest":"sda-LREC-iframe","fdb":1,"id":"LREC","metaSize":true,"pos":"LREC","supports":{"exp-ovr":1,"exp-push":1,"lyr":0},"w":300,"h":250},"sfoptin":1},"LREC3":{"meta":{"clean":"sda-LREC3","dest":"sda-LREC3-iframe","fdb":1,"id":"LREC3","metaSize":true,"pos":"LREC3","supports":{"exp-ovr":1,"exp-push":1,"lyr":0},"w":300,"h":250},"sfoptin":1},"LREC4":{"meta":{"clean":"sda-LREC4","dest":"sda-LREC4-iframe","fdb":1,"id":"LREC4","metaSize":true,"pos":"LREC4","supports":{"exp-ovr":1,"exp-push":1,"lyr":0},"w":300,"h":250},"sfoptin":1},"HPSPON":{"filtered":1,"sfoptin":0},"XFPAD":{"filtered":1,"sfoptin":0},"WFPAD":{"meta":{"clean":"sda-WFPAD","dest":"sda-WFPAD-iframe","id":"WFPAD","metaSize":true,"pos":"WFPAD","supports":{"exp-ovr":1,"exp-push":1,"lyr":1,"resize-to":1},"w":320,"h":50},"sfoptin":0}},
            rotation: {"adboostgrouprotation":{"MON2":{"extrapositions":"LREC3,LREC4"},"LREC3":{"extrapositions":"MON2","inview":"LREC4"},"LREC4":{"extrapositions":"MON2","inview":"LREC3"}},"autoeventrt":10000,"autorotate":true,"currentpos":"LREC3","defaultrt":10000,"grouprotation":{"MON2":"LREC3,LREC4","LREC3":"MON2","LREC4":"MON2"},"ldrbrt":10000,"lrec2selectiveenabled":true,"lrec4enabled":true,"lrec4pos":"LREC4","lrecrt":10000,"mastrt":30000,"mon2enabled":true,"mon2pos":"MON2","offset":100,"tabswitchrotate":10000},
            viewerGeminiSMAdEnabled: false,
            viewerGeminiSMAdConfig: {},
            viewerSMAdEnabled: false,
            viewerPositionMeta: {"positions":[{"clean":"viewer-FSRVY","dest":"viewer-FSRVY-iframe","h":1,"id":"FSRVY-1","w":1},{"clean":"viewer-LDRB","dest":"viewer-LDRB-iframe","h":90,"id":"LDRB-1","fdb":1,"supports":{"exp-ovr":1},"w":728},{"clean":"viewer-LREC","dest":"viewer-LREC-iframe","h":250,"id":"LREC-1","fdb":1,"supports":{"exp-ovr":1},"w":300},{"clean":"viewer-MON","dest":"viewer-MON-iframe","h":600,"id":"MON-1","fdb":1,"supports":{"exp-ovr":1},"w":300}],"siteAttributes":"LREC='300x250;1x1' LREC2='300x250;1x1' LREC3='300x250;1x1' UBALREC='300x250;1x1' UBALREC2='300x250;1x1' UBALREC3='300x250;1x1' MON='300x600;1x1' ctout=380","slideshowPositions":["LREC-1"],"groupRotation":{"MON2-1":"LREC3-1"}},
            viewerViewportAdFetch: {"positions":[{"clean":"viewer-LREC2","dest":"viewer-LREC2-iframe","h":250,"id":"LREC2-1","fdb":1,"supports":{"exp-ovr":1},"w":300},{"clean":"viewer-LREC3","dest":"viewer-LREC3-iframe","h":250,"id":"LREC3-1","fdb":1,"supports":{"exp-ovr":1},"w":300},{"clean":"viewer-LDRB2","dest":"viewer-LDRB2-iframe","h":90,"id":"LDRB2-1","fdb":1,"supports":{"exp-ovr":1},"w":728},{"clean":"viewer-MON2","dest":"viewer-MON2-iframe","h":600,"id":"MON2-1","fdb":1,"supports":{"exp-ovr":1},"w":300}],"sites":["money"]},
            viewerWfpadAdEnabled: undefined,
        };

        // expose adsConfig for homepage-viewer client
        if (!w.adsConfig) {
            w.adsConfig = adsConfig;
        }
    }(window));
