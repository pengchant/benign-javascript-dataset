
    try{
        JSCOUT_REPORT.init({
            id: 8,
            url: "//jscout.58.com/messageData/saveMessageData",
        });
        JSCOUT_REPORT.tryJs().spyAll();
    }catch(e){

    }
