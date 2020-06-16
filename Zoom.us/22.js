
  window.adaSettings = {
      adaReadyCallback: function (props) {
          if (props.isRolledOut === false) {
                document.getElementById('ada-embed').style.display = 'none';
          window.zESettings = {
              webWidget: {
                contactOptions: {
                  enabled: true
                },
                chat: {
                  suppress: true,
                  connectOnPageLoad: false
                }
              }
            };
          }
          else{
              zE('webWidget', 'hide');
                }
      },
        authCallback: function (callback) { callback(undefined) },
      hideMask: true,
      crossWindowPersistence: {
          enabled: true,
          domain: ".zoom.us"
      },
      styles: "*{font-size: 14px !important;}",
      language: "en-us",
      metaFields: {
          name: "Marketing Visitor",
          accountType: "marketingpage",
      }
  }
