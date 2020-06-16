
      window.pageConfig = window.pageConfig || {};
      window.pageConfig.o2JSConfig = {
        useTplInJs: true,
        preloadOffset: 1,
        pathRule: function (path) {
            return '//static.360buyimg.com/mtd/pc/supermarket_v3/3.0.1' + '/v3/' + path + '.min.js';
        }
      };
      seajs.use(['//static.360buyimg.com/mtd/pc/base/1.0.1/channel.js']);
      seajs.use(['//misc.360buyimg.com/mall/lib/hotwords.js?position=h-1761']);
    