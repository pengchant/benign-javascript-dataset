    
    $LAB.script({ src: '//webresource.c-ctrip.com/reshotelcasonline/R6/js/cas.js?releaseno=2020-06-13-18-12-16', charset: 'utf-8' }).wait()
        .script({src: '//webresource.c-ctrip.com/ResHotelOnline/R8/search/js.merge/base-bmap.js?releaseno=2020-06-13-18-12-16', charset: 'utf-8' }).wait()
.script({ src: '//webresource.c-ctrip.com/ResHotelOnline/R8/search/js.merge/showhotellist.js?releaseno=2020-06-13-18-12-16', charset: 'utf-8'}).wait(loadCallback);
