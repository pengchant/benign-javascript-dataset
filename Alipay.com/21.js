
  (function(){
      var prop = {
      "WMode": 0,
      "PK": "PYV7wxnFqz1ar0evEZ+3gpPQIGav7lkZ0GprOPMSXvioo3B9gV0JH8y0fzEdabPVndB2QT1Muap5c59sZ7za9VsSamx2id4qnFIrfk+P2bxscZ38y07sI4K15KQazWCYY73YlLNJFpAbQ004dUD87yk3wtC6iXbEXIqm2OsAujBih91ybG+GIS0liobzutW4i5KS8f0XuXCd76ujMeQD+jQaden9eJxriRr9hJWTFR0ZufIHkxm3aq7pFTLd2Ic65ka6Eml4DpsksZYE1u8XPH6CQd0sXjz1pMHe2Pt9e91cvYnb96rDognVA6dR9PEjnA35ZOmgaVNDQqTSZ6zlyyg/2flVtmaVlaTGDqNiilWZjaKOTM1WJRFqX9JMPfD0DraoF43SHO6ZcdmqBIqSBMI6uEUrqTnD2fc2AEqUTpJdMWTPZ/+eW0F37whEI7Men09JnJe6cgkB5HpvNNJP/rYfB5wMwP3lw7+o02EmOLLAC46IWQkRAMOwxq6+t7tTMQxqOfwTrMWouC+Lr2AiokG0tlK51Ipd+CMyGuvApyPzzvbDYdPf5Sn804KnbJFHWDJ7WwBWTBx2V8iP25T0CcbPanG5bIMSt9D9GN/66RBMILkJfWsBnbQel99BlLT+2J6SLHOay+Cyavah7Q7QfcjTFOcIh7UpocfzDUUPF34=",
      "TS": "OTAwODc2NjQ3ODA4",
      "BMode": {
        "DMode": true,
        "ReadOnly": false,
        "MaxLength": 20
      }
    };




                            
            
    var renderArr = 'R',
        sensorArr = '',
        tolerate = true,
        options = {
          upgrade: '',
          id: 'password',
          prodType: '',
          sid: 'web|authcenter_querypwd_login|656b0d59-ea9f-4365-ae3f-6af75fd451a5RZ55'
        },
        renderOptions = {
          downloadPath: '',
          downloadServer: 'https://download.alipay.com',
          securityCenterServer: 'https://securitycenter.alipay.com',
          container: "password_container",
          R: {
            id: 'password_rsainput',
            hidnId: 'password',
            PK: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo0z/L+pelCPu6DwDFAY/3ITzesr8lnNmYjHht4XUJvLYYBwvDbHMc8xi9sPK9ohVHIKRVLVmmZ9SdmuWYN9HzCyyZ6kEHx+IDBPnulwjdeN/N0w25mVRhYDWxJ2/1C6cPIuNcISchOQdGKuAC0xR37i/kWH9sjBidAQjageYgQoj1HX81flZaPve75Esue85AHZ0VIurjwx7uEuxvQtvCIUvX1bbF13TIYuTbJbn/LrNHby1Kxp42ggNUjAkYUVSF7SC3UP+YGKruii7Vh1UnJ/rpVhjdt3It8le9px8H4Ltt9N3hzU17rBnFpp2ZnmiZVtlfMvsStY54Fl5cSJVxQIDAQAB",
            TS: "OTAwODc2NjQ3ODA4",
            alieditUpgradeVersions: "",
            useSilentInstallation: false,
            useKS: true,
            tabindex: "2",
            container: "password_container",
            ksk: 'ba30e7c6-3d36-4018-9e30-b89b9c019b3e',             useSixDigitPassword: false           },
          C1: {
            id: "edit_password",
            name: "edit_password",
            hidnId: "password",
            width: "180",
            height: "24",
            tabindex: "2",
            container: "password_container",
            passwordMode: "1",
            timestamp: "2290087664",
            pk: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDS92pDVyWNT7dzG9zH0opH44z9FayCZTX5iqGUxUjPi667IkyaqrsmDPqKsJp47lJ29lzs+Qv8zjPPdmnxjFteMrfpc4ui24gL1iZnchwX87Ox/+Xrm8HFmKlhmUO9n/QgTT+Nz1RGMEN1+HijvsoAhS0TS8XjSfzRkrwvK2pJQIDAQAB",
            alieditUpgradeVersions: ""
          },
          C2: {
            id: "edit_password",
            name: "edit_password",
            hidnId: "password",
            width: "180",
            height: "24",
            tabindex: "2",
            container: "password_container",
            passwordMode: "1",
            timestamp: "2290087664",
            pk: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDS92pDVyWNT7dzG9zH0opH44z9FayCZTX5iqGUxUjPi667IkyaqrsmDPqKsJp47lJ29lzs+Qv8zjPPdmnxjFteMrfpc4ui24gL1iZnchwX87Ox/+Xrm8HFmKlhmUO9n/QgTT+Nz1RGMEN1+HijvsoAhS0TS8XjSfzRkrwvK2pJQIDAQAB",
            alieditUpgradeVersions: "",
            handler: "light.page",
            prop: light.escapeHTML(light.inspect(prop)),
            useKS: true,
            ksk: 'ba30e7c6-3d36-4018-9e30-b89b9c019b3e'           }
        },
        sensorOptions = {
          websocketPorts: '27382,45242',
          controlCheckTimeout: '3000'
        };


                                var passwordProduct = new alipay.security.Password(options, renderArr, sensorArr, tolerate, renderOptions, sensorOptions);

    passwordProduct.onReady(function () {
      light.node(this.renderable ? '#J_edit_prompt_default' : '#J_edit_prompt_noEdit').removeClass('fn-hide');
    });
          passwordProduct.onReady(function(){
        alipay.security.snowden.report();
      });
        if (light.page.scProducts) {
      light.page.scProducts.push(passwordProduct);
    }
    if (light.page.products) {
      light.page.products['password'] = passwordProduct;
    }
    alipay.security.useMultiplePolicy = true;
  })()

