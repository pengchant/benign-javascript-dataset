
    window.addEventListener("load", function() {
        var url = "https://ocsrest.ebay.com/ocsrsapp/o2/inflow/inflowcomponent?input=%7B%22pageId%22%3A2387624%2C%22surveyTitle%22%3A%22%E8%AF%B7%E5%91%8A%E8%AF%89%E6%88%91%E4%BB%AC%E6%82%A8%E7%9A%84%E6%84%8F%E8%A7%81%22%2C%22posTop%22%3A504%2C%22isGBHEnabled%22%3Atrue%2C%22gbhSiteId%22%3A223%2C%22gbhLanguage%22%3A%22zh-CN%22%7D&callback=Inflow.cb";
        var scriptTag = document.createElement("script");
        scriptTag.src = url;
        document.body.appendChild(scriptTag);
    });
