
            //刷过来的数据
            var LPK_INIT_DATA = {
                city: "bj"
            }
            var Calculator = {
                pointX:
                                116.583317,//longitude经度
                                 pointY:
                                    39.79911,//latitude纬度
                                buildingName: "北京经开·汀塘",
                BD_URL: '/bj/search/fuzzy.html',
                houseTypeUrl: '/bj/loan!getProductLoanInfo.action',
                maxYear: 25,
                maxPersonalLoan: 100,
                maxCounpleLoan: 120,
                firstPrice: 3.5,
                secondPrice: 6.0,
                fundFirstPrice:2.0,
                fundSecondPrice:2.0
            };
            var aroundInfor = [];

            var noFixTop = false; //页面是否固定, true 不固顶
            var isIndexPage = true;
                                var nearProducts=[{"favourable":"","unit":"元/㎡","productid":"BcUJ","price":"最低价47000","district":"大兴","x":"116.582968","name":"首创远洋·禧瑞天著","y":"39.800109","groupBuyCount":1,"topphoto":"http://pic-bucket.ws.126.net/photo/0007/2018-07-04/DLSJUD82KMOC0007NOS.jpg?imageView&thumbnail=400y300"},{"favourable":"","unit":"元/㎡","productid":"CICJ","price":"均价52695","district":"大兴","x":"116.576934","name":"招商臻珑府","y":"39.803467","groupBuyCount":1,"topphoto":"http://pic-bucket.ws.126.net/photo/0007/2020-04-02/F97KNVNAP5DH0007NOS.jpg?imageView&thumbnail=400y300"},{"favourable":"","unit":"元/㎡","productid":"CKLQ","price":"均价25600","district":"通州","x":"116.606505","name":"通成家园","y":"39.802731","groupBuyCount":1,"topphoto":""},{"favourable":"","unit":"元/㎡","productid":"CFea","price":"均价51000","district":"通州","x":"116.608745","name":"台湖金茂悦","y":"39.80011","groupBuyCount":1,"topphoto":"http://pic-bucket.ws.126.net/photo/0007/2019-08-22/EN6KST0SOF380007NOS.jpg?imageView&thumbnail=400y300"},{"favourable":"","unit":"元/㎡","productid":"BRfW","price":"63000-69000","district":"通州","x":"116.585542","name":"台湖银河湾","y":"39.818624","groupBuyCount":337,"topphoto":"http://img3.cache.netease.com/photo/0007/2016-11-02/400x300_C4S7CHGQ6VRP0007.jpg"},{"favourable":"","unit":"","productid":"BbOD","price":"暂无报价","district":"通州","x":"116.596353","name":"首开万科·云创天地","y":"39.814895","groupBuyCount":9,"topphoto":"http://pic-bucket.ws.126.net/photo/0007/2019-07-31/ELDLF9SAK4EE0007NOS.png?imageView&thumbnail=400y300"},{"favourable":"","unit":"元/㎡","productid":"CHLJ","price":"均价30000","district":"通州","x":"116.606406","name":"幸福雅园","y":"39.793253","groupBuyCount":1,"topphoto":""},{"favourable":"","unit":"元/㎡","productid":"Bfcb","price":"均价27000","district":"大兴","x":"116.561464","name":"北京经开·壹中心","y":"39.78474","groupBuyCount":1,"topphoto":"http://pic-bucket.ws.126.net/photo/0007/2018-08-24/DPVEUTI0MC3I0007NOS.jpg?imageView&thumbnail=400y300"}];
                            