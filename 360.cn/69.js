
    //置顶新闻开关，0代表关，1代表开
    var govNewsIsOn = {
        'infoflow-right': 0  //新版右侧信息流
    };

    //开屏
    var configHei = {
        name: '514'
    };

    /**
     * 开屏PMP开关
     */
    var configFloatBottomPMP = {
        isOn: 1,      //1为打开，0为关闭
        startTime: new Date('2020/04/05 00:00:00'),
        endTime: new Date('2029/04/04 23:59:59')
    };

    /**
     * 底部通栏漂浮推广
     * returnToImg: 'https://hao2.qhimg.com/t0198db99bd91af4384.gif',   //备用logo图片地址
     */
    var configFloatBottom = {
        name: '20171109sn01',
        startTime: new Date('2017/11/09 00:00:00'),
        endTime: new Date('2017/11/09 23:59:59'),
        url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3DF2N9jMgG5HIcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMWgUIZtWil9Sxq3IhSJN6GQD6MZ%2Bql29yIW%2FXPHWPSQpfkiecm2qgrltUwoixigF9o7LAa3DUrM2zt5vEinufIVAFEHVckI7b445SxkPgGIgiBqx4AoGTRxNtT0rMxO3Gl7tq5jQc9hazOVMRxaE72YTjH0qj5aeMcQYGo%2FHVZIsUrCVaMJfhysIXzSzYpHMoScw7bYkGcYO7OFU%2BdPNzQ6QXEjWwy5smE%2FXOZIivcNKebdHxKf%2F1WkdgyZwhFLmf4BwEzfiK11ECo9LaohNfknLP4XO97Tuio%2BgRw6KoLAkxiXvDf8DaRs%3D',    //跳转链接
        img: 'https://hao2.qhimg.com/t0148cf18ec7c2a0092.png',   //图片地址
        height: 306, //容器高度
        mainHeight: 220,  //链接高度
        returnTo: 'none', // 回收位置：logo（logo位置）,right（右下角）,none（不显示回收位）
        returnToImg: 'http://s3m.mediav.com/galileo/cf369d8536e9bca17851d62ab9bd0ac5.png',   //回收logo图片地址
        showTime: 7000, //展现时间
        returnTo: 'left'
    };

    // 右下角浮图开关
    var rightBottomAniConfig = {
        isOn: 1,    // 1开， 0关
        startTime: new Date('2020/04/05 00:00:00'),
        endTime: new Date('2029/04/04 23:59:59')
    }

    //热点头条第二帧CPT
    var hotTouTiaoCPT =  {
        isOn: 1,
        startTime: '2019/12/30 00:00:00',
        endTime: '2019/12/31 23:59:59',
        data: {
            curl:'https://dev.tg.wan.360.cn/?channel=521180577&placeid=',
            title:'单职业经典就玩神魔传说',
            img:'https://hao1.qhimg.com/t0121eb1281b320409f.png'
        }
    };

    // 默认搜索词
    var searchInputPlaceHolderText = {
        isOn: 1,
        options: [
            {
                startTime: '2019/11/10 14:00:00',
                endTime: '2019/11/10 23:59:59',
                text: '苹果iphone11'
            },
            {
                startTime: '2017/11/03 00:00:00',
                endTime: '2017/11/03 13:59:59',
                text: 'OPPO R11s红色受追捧'
            }
        ]
    };

    /* 水印皮肤配置
     * 
     * 水印图制作:左侧为较宽图系列，右侧为较窄图系列，在窄屏模式下只有窄图会显示出来，参考已有水印
     *          bigWidth是“较宽图”的宽度，smallWidth是“较窄图”宽度
     */
    var logoSkinConfig = {
        isOn: 1,
        options: [
            {
                startTime: '2019/12/11 00:00:00',
                endTime: '2019/12/11 23:59:59',
                cookie: 'logoskin_1211',  // 水印cookie
                url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3D4zlgLpnBSCYcQipKwQzePCperVdZeJviLKpWJ%2Bin0XJRAdhuF14FMUxzmQ%2Be5t6Alovu%2FCElQOvqdWn68XGFlOmvLfATRoEioCpxE1uZtrjk3q%2FS8vTOLgBXgSuv7Sv7G6CrVuDGKz3aoL2q0dojAE4rcRkUpcsQRIhXpwzXCM5Pf2BYFhAHdHQmBnYFyLI3naYpFBIfC%2F0TMkUtS6f4UYNaslwj72YyqBSss682EgUPmirH2MByVvgLuM%2FvATiae5Cw%2FDX6F%2FcpmJbm7qWNbdWFD7y%2B5qnm22fqBZOO14JrBTi4REWTlGppBR3SBcXjxgxdTc00KD8%3D&union_lens=lensId%3APUB%401575857617%400b0ae22e_0d77_16ee86efb52_0af9%4001',  // 点击链接
                imgHeight: 85,  //水印高度
                bigWidth: 90,
                smallWidth: 70,
                imgUrl: 'https://hao1.qhimg.com/t01e14f0812c251d26a.png' //水印皮肤
            },
            {
                startTime: '2019/12/12 00:00:00',
                endTime: '2019/12/12 23:59:59',  // 水印cookie
                cookie: 'logoskin_1212',
                url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3D4zlgLpnBSCYcQipKwQzePCperVdZeJviLKpWJ%2Bin0XJRAdhuF14FMUxzmQ%2Be5t6Alovu%2FCElQOvqdWn68XGFlOmvLfATRoEioCpxE1uZtrjk3q%2FS8vTOLgBXgSuv7Sv7G6CrVuDGKz3aoL2q0dojAE4rcRkUpcsQRIhXpwzXCM5Pf2BYFhAHdHQmBnYFyLI3naYpFBIfC%2F0TMkUtS6f4UYNaslwj72YyqBSss682EgUPmirH2MByVvgLuM%2FvATiae5Cw%2FDX6F%2FcpmJbm7qWNbdWFD7y%2B5qnm22fqBZOO14JrBTi4REWTlGppBR3SBcXjxgxdTc00KD8%3D&union_lens=lensId%3APUB%401575857617%400b0ae22e_0d77_16ee86efb52_0af9%4001',   // 点击链接
                imgHeight: 85,  //水印高度
                bigWidth: 90,
                smallWidth: 70,
                imgUrl: 'https://hao1.qhimg.com/t0138ee62c7f046bc97.png'  //水印皮肤
            }
        ]
    };

    // 电梯图pmp广告开关
    var planePMPConfig = {
        isOn: 1,    // 1开， 0关
        startTime: new Date('2020/04/05 00:00:00'),
        endTime: new Date('2029/04/04 23:59:59')
    }

    /* 顶部大导航条 */
    var topNavConfig = {
        isOn: 1,// 1（开），0（关）
        adIconIsOn: 1, // 广告标识：1（开），0（关）
        closeButton: 0, // 关闭按钮：1（开），0（关）
        startTime: "2019/12/30 00:00:00", // 开始时间
        endTime: "2020/01/01 00:00:00", // 结束时间
        url: 'https://c.ssp.360.cn/t?type=19&pub=1000043_746864_2354165&cus=0_0_0_12826_0&url=https%3A%2F%2Fd.jjyx.com%2Fhtmlcode%2F61018.html', // 顶部icon跳转链接
        bgImage: 'https://hao1.qhimg.com/t01272031fd24f9a83a.jpg', // 背景 高60
        bgColor: '#0d3998', // 背景色
        list: [
            {
                url: "https://c.ssp.360.cn/t?type=19&pub=1000043_746864_2354165&cus=0_0_0_12826_1&url=https%3A%2F%2Fd.jjyx.com%2Fhtmlcode%2F61019.html", // Tab跳转链接
                image: 'https://hao1.qhimg.com/t01466de08bb56a78c7.png' // 尺寸166 * 54 包含阴影
            },
            {
                url: "https://c.ssp.360.cn/t?type=19&pub=1000043_746864_2354165&cus=0_0_0_12826_2&url=https%3A%2F%2Fd.jjyx.com%2Fhtmlcode%2F61020.html", // Tab跳转链接
                image: 'https://hao1.qhimg.com/t01e788f78df9e6ee6f.png'
            },
            {
                url: "https://c.ssp.360.cn/t?type=19&pub=1000043_746864_2354165&cus=0_0_0_12826_3&url=https%3A%2F%2Fd.jjyx.com%2Fhtmlcode%2F61021.html", // Tab跳转链接
                image: 'https://hao1.qhimg.com/t01c18b540a030eefd0.png'
            },
            {
                url: "https://c.ssp.360.cn/t?type=19&pub=1000043_746864_2354165&cus=0_0_0_12826_4&url=https%3A%2F%2Fd.jjyx.com%2Fhtmlcode%2F61022.html", // Tab跳转链接
                image: 'https://hao1.qhimg.com/t014022c24b4275b3bc.png'
            },
            {
                url: "https://c.ssp.360.cn/t?type=19&pub=1000043_746864_2354165&cus=0_0_0_12826_5&url=https%3A%2F%2Fd.jjyx.com%2Fhtmlcode%2F61023.html", // Tab跳转链接
                image: 'https://hao1.qhimg.com/t0129da484e1dd1ca6e.png'
            }
        ]
    };

    // 顶部通栏
    var topFullColumnConfig = {
        isOnline: 0,
        material: [
            {
                startTime: '2019/12/25 00:00:00',
                endTime: '2019/12/25 23:59:59',
                data: {
                    link: 'https://c.ssp.360.cn/t?type=19&pub=1000043_746864_2274675&cus=0_0_0_12524_0&url=https%3A%2F%2Fbdtg.9377.com%2F188136',
                    img: 'https://hao1.qhimg.com/t01003f4e11088b1fc0.jpg',
                    height: 50,
                    bgColor: '#01cd14'
                }
            },
            {
                startTime: '2019/11/11 00:00:00',
                endTime: '2019/11/11 23:59:59',
                data: {
                    link: 'https://c.ssp.360.cn/t?type=19&pub=1000043_746864_2274675&cus=0_0_0_11371_0&url=http%3A%2F%2Fclickc.admaster.com.cn%2Fc%2Fa136012%2Cb3805563%2Cc3292%2Ci0%2Cm101%2C8a1%2C8b3%2Ch',
                    img: 'https://hao1.qhimg.com/t0122ea59583f70a1ca.png',
                    height: 50,
                    bgColor: '#d70000'
                }
            }
        ]
    };

    //极速浏览器大资源位（气球，藏宝红包，大红包，烟花红包，小飞机，火山红包，天降红包）屏蔽开关
    var browser360eeFestivalControl = {
        isOn: 1,
        startTime: '2019/12/13 00:00:00',
        endTime: '2039/11/11 23:59:59'
    };

    // 漂浮气球
    var festivalBalloonConfig = {
        isOn: 1,     // 1开，0关
        duration: 7, //单位：秒
        cookie: 'festival_balloon_v2',  // 如果想冲量，可修改cookie名称使原cookie失效,例如v1->v2
        startTime: new Date('2019/11/09 00:00:00'),  // 开始时间
        endTime: new Date('2019/11/09 23:59:59'),    // 结束时间
        url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3DqU8mvWXdFBocQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMT8HO%2FWUBDDZ8sviUM61dt3qdWn68XGFlOmvLfATRoEi2xjF9AuMPhWsLP3nO3CbhQBXgSuv7Sv7KtseCpInTy%2FkXkdea8kgYymBZ5ZWikN7RIhXpwzXCM5Pf2BYFhAHdCY1PMGA%2F%2FdiFveQ9Ld2joqwHLIflzoqbX6B%2F00oBp4ZPQUuEDH%2BG9RF6zF52nfI4w%3D%3D&union_lens=lensId%3APUB%401571397482%400b0fd6a8_0cdf_16dde96b82f_04ff%4001',  // 点击链接
        fixBalloon: 'https://hao1.qhimg.com/t010b7e17dd4bb3ad7a.png', // 右侧固定气球
        fixRedBag: '', // 右侧固定气球下的红包
        ballImages: [
            'https://hao1.qhimg.com/t01d22da9d4e3de3296.png',
            'https://hao1.qhimg.com/t01d74216670e9b340d.png',
            'https://hao1.qhimg.com/t019624d781d0478fd1.png',
            'https://hao1.qhimg.com/t01dd18df62bad22dcf.png',
            'https://hao1.qhimg.com/t0171b5ed9753b01130.png',
            'https://hao1.qhimg.com/t019ff4da50d4084056.png',
            'https://hao1.qhimg.com/t01fee74dac91f01752.png',
            'https://hao1.qhimg.com/t01bfedd219ceeec736.png'
        ] // 8个非固定气球，从左到右
    };

    // 浮层大红包
    var configFestivalSnatch = {
        id: 'festival_snatch_v1',  // 冲量时v1改成v2，可清cookie
        isOn: 1,
        time: 7, // 单位(秒)
        startTime: '2019/10/28 00:00:00',
        endTime: '2019/10/28 10:58:59',
        centerImage: 'https://hao1.qhimg.com/t010f1da1d823566fa1.png', // 开屏大图片
        iconImage: 'https://hao1.qhimg.com/t01c361381462f8ddfd.gif', // 回收位80*80
        url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3DBCFdjFjT9LscQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMXm2P2kPuu4BMMgx22UI05bqdWn68XGFlOmvLfATRoEi2xjF9AuMPhU9ZPLQ23JJKABXgSuv7Sv7KtseCpInTy%2FkXkdea8kgYymBZ5ZWikN7RIhXpwzXCM5Pf2BYFhAHdCY1PMGA%2F%2FdiFveQ9Ld2joqwHLIflzoqbX6B%2F00oBp4ZPQUuEDH%2BG9RF6zF52nfI4w%3D%3D&union_lens=lensId%3APUB%401571397828%400b1501e0_0d23_16dde9c0100_04f9%4001'  // 链接
    }; 

    // 藏宝红包
    var cangbaoRedbagConfig = {
        isOn: 1,     // 1开，0关
        startTime: new Date('2019/12/11 00:00:00'),  // 开始时间
        endTime: new Date('2019/12/12 23:59:59'),    // 结束时间
        cookie: 'festival_cangbao_v2',  //红包雨有效时间内只展示一次，冲量时可修改v1->v2
        rainStartTime: new Date('2019/12/12 18:00:00'),  // 红包雨有效-开始时间
        rainEndTime: new Date('2019/12/12 19:29:59'),    // 红包雨有效-结束时间
        url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3DadWpCyxD8j8cQipKwQzePCperVdZeJviLKpWJ%2Bin0XJRAdhuF14FMcJIarZa6%2FkPJ1gyddu7kN%2FqdWn68XGFlOmvLfATRoEioCpxE1uZtrjbOaSQq5%2BOFgBXgSuv7Sv7G6CrVuDGKz3aoL2q0dojAE4rcRkUpcsQRIhXpwzXCM5Pf2BYFhAHdHQmBnYFyLI3naYpFBIfC%2F0TMkUtS6f4UYNaslwj72YyqBSss682EgUPmirH2MByVvgLuM%2FvATiae5Cw%2FDX6F%2FcpmJbm7qWNbdWFD7y%2B5qnm22fqBZOO14JrBTi4REWTlGppBR3SBcXjxgxdTc00KD8%3D&union_lens=lensId%3APUB%401575857590%400b0170e7_0d32_16ee86e8ef6_0b10%4001',  // 点击链接
        count: 12,  // 红包雨个数
        rainRedbag: ['https://hao1.qhimg.com/t013026c4d04b3ff32f.png'], // 红包雨图片173*243
        fixRedbag: 'https://hao1.qhimg.com/t011ddc421028f76340.png', // 藏宝红包图片46*62
        lastRedbag: 'https://hao1.qhimg.com/t010b9ea74b658cd54d.png',
        duration: 7, //单位：秒
        positions: [
            {cid: 'sites-lib-classify', position: 'left', animate: true, scale: 0.6},
            {cid: 'dongdong', position: 'topright', animate: true, scale: 0.6},
            {cid: 'cube-list-recommend', position: 'topright', animate: true, scale: 0.6},

            // {cid: 'channel-sort', position: 'left', animate: true, scale: 0.6},
            // {cid: 'channel-mall', position: 'topleft', scale: 0.6},
            // {cid: 'cool-site', position: 'topright', scale: 0.9},
            // {cid: 'category-service', position: 'left', scale: 1},
            // {cid: 'service-gouwu', position: 'left', scale: 1},
            // {cid: 'info-flow', position: 'topleft', scale: 1}
        ]
    };

    // 烟花红包开屏
    var fireworkConfig = {
        isOn: 1,
        canvas: 1, // 0 不要彩带烟花
        dense: 20, // 烟花密度
        range: 30, // 烟花范围，数字越大分布越广
        cookie: 'tmall_firework_v4', // 冲量修改v1->v2，如果连续两天上，建议第二天改一下cookie
        startTime: '2019/11/11 16:00:00',
        endTime: '2019/11/11 23:59:59',
        duration: 7, // 大红包展示后停留时间，单位：秒
        image: '//hao1.qhimg.com/t018d4bdf4b5718d8dd.png', // 大红包图片
        link: 'https://s.click.taobao.com/t?e=m%3D2%26s%3DKr4xQD4e0docQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMfq9K1cDANZjRitN3%2FurF3zqdWn68XGFlOmvLfATRoEi2xjF9AuMPhV3ZpBnQ7zjjwBXgSuv7Sv7KtseCpInTy%2FkXkdea8kgYymBZ5ZWikN7RIhXpwzXCM5Pf2BYFhAHdCY1PMGA%2F%2FdiFveQ9Ld2joqwHLIflzoqbX6B%2F00oBp4ZPQUuEDH%2BG9RF6zF52nfI4w%3D%3D&union_lens=lensId%3APUB%401572526331%400bb79265_0d31_16e21df969f_0805%4001'  // 点击链接
    };

    /* 天降红包 */
    var tmallFullScreenConfig = {
        isOn: 1, // 1（开），0（关）
        startTime: "2019/12/12 19:30:00", // 开始时间
        endTime: "2019/12/12 23:59:59", // 结束时间
        countDownSecond: 8, // 动画结束后倒计时n秒关闭开屏
        closeCookie: "festival_tmall_full_screen_v6", // 冲量修改v1->v2，如果连续两天上，建议第二天改一下cookie
        link: "https://s.click.taobao.com/t?e=m%3D2%26s%3D%2BF0rDDwuZ8wcQipKwQzePCperVdZeJviLKpWJ%2Bin0XJRAdhuF14FMbxvw9tSI5N0lovu%2FCElQOvqdWn68XGFlOmvLfATRoEioCpxE1uZtrhhBa7wqHg%2BGgBXgSuv7Sv7G6CrVuDGKz3aoL2q0dojAE4rcRkUpcsQRIhXpwzXCM5Pf2BYFhAHdHQmBnYFyLI3naYpFBIfC%2F0TMkUtS6f4UYNaslwj72YyqBSss682EgUPmirH2MByVvgLuM%2FvATiae5Cw%2FDX6F%2FcpmJbm7qWNbdWFD7y%2B5qnm22fqBZOO14JrBTi4REWTlGppBR3SBcXjxgxdTc00KD8%3D&union_lens=lensId%3APUB%401575857627%400b0fd6a8_0db2_16ee86f1fdb_0b3b%4001" // 跳转外链
    };

    /* 火山红包 */
    var volcanoFullScreenConfig = {
      isOn: 1, // 1（开），0（关）
      startTime: "2019/11/11 00:00:00", // 开始时间
      endTime: "2019/11/11 13:59:59", // 结束时间
      countDownSecond: 8, // 动画结束后倒计时n秒关闭开屏
      closeCookie: 'festival_volcano_full_screen_v1',  // 冲量修改v1->v2，如果连续两天上，建议第二天改一下cookie
      link: "https://s.click.taobao.com/t?e=m%3D2%26s%3Da3Bp2A5LGUccQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMbATwxOw9hl979%2FTFaMDK6TqdWn68XGFlOmvLfATRoEi4WF1MvBEe%2BXz3%2FPoJEZb%2FgBXgSuv7Sv7KtseCpInTy%2FkXkdea8kgYymBZ5ZWikN7RIhXpwzXCM5Pf2BYFhAHdCY1PMGA%2F%2FdiFveQ9Ld2joqwHLIflzoqbX6B%2F00oBp4ZPQUuEDH%2BG9RF6zF52nfI4w%3D%3D&union_lens=lensId%3APUB%401573098849%400b83c05b_0ccb_16e43ff84aa_1421%4001" // 跳转外链
    };

    /* 节日开屏展现顺序, 顺序从上到下出现 */
    var FestivalOpenScreen = {
      isOn: 0, // 1（开），0（关）
      order: [
        'tmallFullScreen', // 天降红包
        'firework'  // 烟花红包
      ]
    };
