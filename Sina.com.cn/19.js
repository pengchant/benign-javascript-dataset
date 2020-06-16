
        (sinaads = window.sinaads || []).push({
            params: {
                sinaads_beforerender: function (element, data, config) {
                    sinaadToolkit.storage.set('adsData', sinaadToolkit.json.stringify(data), 30 * 24 * 60 * 60 * 1000)
                    return false; // 返回false告诉页面不进行渲染
                }
            }
        });
    