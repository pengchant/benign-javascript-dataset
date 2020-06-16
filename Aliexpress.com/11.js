
    if(!window.one_click_ticket) {
        window.one_click_ticket = {};
    }
    
    window.one_click_ticket = {
        success_header: "Awesome!",// 实例：Awesome
        success_subtitle: "You have collected all the available coupons",// 实例：You have collected all the available coupons
        // 部分领取失败
        error_header: "Everyone loves coupons...",// 实例：Everyone loves coupons...
        error_subtitle: "You have collected xx coupons",// 实例：You have collected xx coupons
        // 全部领取失败
        error_header_all: "WE'RE SORRY!",// 实例：WE'RE SORRY!
        error_try_again: "Try again",// 实例：Try again
        
        noChance: "You've redeemed the maximum number of coupons for this promotion.", //超过个人限领
        notBelong: "You do not belong to the group who can get this coupon.", //用户没有权限领取
        noStock: "These coupons are all gone, that was fast!", //总库存没有了  实例：These coupons are all gone, that was fast!
        runOutInTotal: "These coupons are no longer available.", //活动结束
        systemError: "System is busy, please try again later.", //系统繁忙  实例：System is busy, please try again later.
        safety: "To protect the security of your account, please use another device to sign in.", //风控
        
        shopping_btn: "Shop now", //实例 shop now Shop now 实例：Shop the sale Shop the sale 实例：Add to Cart Add to Cart
        get_coupons: 'Get now', // get all  实例：Get them all Get them all 实例：get now Get now
        check_coupons: 'Find more coupons', // 跳转到领券中心  实例：Find more coupons
        view_rules: '', // 规则链接，目前未处理
        
        orderLimit: 'Your order of xx',// 实例：Your order of xx
        store_coupon: 'Store Coupon', // 关于商铺优惠券的，目前未处理
        shopping: 'Select', // 与selectCoupon有关  实例：Select
        voucher: 'Coupon' // 与selectCoupon有关  实例：Coupon
    }
    window.one_click_ticket.orderLimit = window.one_click_ticket.orderLimit.replace('xx', '{0}');
    
    if(!window.page_type) {
        window.page_type = {};
    }
    window.page_type.poplayer = true;