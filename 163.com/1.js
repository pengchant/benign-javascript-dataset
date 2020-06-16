
    var matchStr =window.location.href;
    var reURL = /^(https):\/\/.+$/;
    if(!reURL.test(matchStr)){
        window.location.href = "https://www.163.com/";
    }
