
    light.ready(function () {
        var s = alipay.security;
        var barcode = light.page.products['barcode'] = s.create(s.barcode, {
            id: "barcode",
            container: "J-barcode-container",
            barcode: "https://qr.alipay.com/_d?_b=PAI_LOGIN_DY&amp;securityId=web%257Cauthcenter_qrcode_login%257Cf6981dd4-f7ba-4511-be93-7eb82bf076b4RZ55",
            size: 120,
            image: "https://t.alipayobjects.com/images/rmsweb/T1Fb0iXnJiXXXXXXXX.png",
            imageSize: 28,
			correctLevel: 2,
            securityId: "web|authcenter_qrcode_login|f6981dd4-f7ba-4511-be93-7eb82bf076b4RZ55",
            queryUrl: "https://securitycore.alipay.com/barcode/barcodeProcessStatus.json"
        });
        barcode.onready(function() {
            barcode.start();
        });
        setTimeout(function() {
            barcode.render();
        });
        light.page.scProducts.push(barcode);

    });
