
    function unzip(b64Data) {
        var strData = atob(b64Data);
        var charData = strData.split('').map(function (x) { return x.charCodeAt(0); });
        var binData = new Uint8Array(charData);
        var data = pako.inflate(binData);
        strData = String.fromCharCode.apply(null, new Uint16Array(data));
        return strData;
    }
    function zip(str) {
        var binaryString = pako.gzip(str, { to: 'string' });
        return btoa(binaryString);
    }
