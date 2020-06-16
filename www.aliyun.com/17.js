
    // language: "zh-CN"
    window.ALIYUN_SUPER_BUY_CONFIG = {
      SEC_TOKEN: "3892f45f-f2c3-496f-bd19-02f814daee4d",
      site: 'zh',
      lang: 'cn',
      loginUrl: 'https://account-intl.aliyun.com/login/login.htm',
      orderUrl: 'https://buy-intl.aliyun.com/order/pay?order_id={orderIds}&type=merge',
      //orderUrl: 'https://finance.aliyun.com/order/list_pay.htm?order_id={orderIds}',
      mcms: '{&quot;fe.config.domain.placeholder&quot;:&quot;查询一个域名&quot;}',
      pageBuyStaticVersion: '0.0.1',
      accessCommodityList: [],
      navList: []
    };
    //动态获取.
    var accessCommodityList = document.getElementById("accessCommodityList").innerHTML;
    if (accessCommodityList != undefined && accessCommodityList != '') {
      accessCommodityList = JSON.parse(accessCommodityList);
      window.ALIYUN_SUPER_BUY_CONFIG.accessCommodityList = accessCommodityList;
    }
    var navProductTypeList = document.getElementById("navProductTypeList").innerHTML;
    if (navProductTypeList != undefined && navProductTypeList != '') {
      navProductTypeList = JSON.parse(navProductTypeList);
      window.ALIYUN_SUPER_BUY_CONFIG.navList = navProductTypeList;
    }
  