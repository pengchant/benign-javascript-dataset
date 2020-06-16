
    /*<![CDATA[*/
    function serialize(obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }

    try {
        netflix.beacon.init({
            serverUrl: "https:\/\/help.netflix.com\/nm\/itracking",
            client_type: 'padme',
            timeout: 4000,
            locale: "en",
            testcells: "11822~2~15787~2"
        });

        netflix.beacon.pageView(
            serialize({
                action: "ContactUs"
            })
        );
    } catch (e) {}
    /*]]>*/
