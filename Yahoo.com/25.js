
        if (YAHOO && YAHOO.i13n && YAHOO.i13n.Rapid) {
            var rapidEarlyConfig = rapidPageConfig.rapidEarlyConfig;
            YAHOO.i13n.YWA_CF_MAP = rapidPageConfig.ywaCF;
            YAHOO.i13n.YWA_ACTION_MAP = rapidPageConfig.ywaActionMap;
            YAHOO.i13n.YWA_OUTCOME_MAP = rapidPageConfig.ywaOutcomeMap;
            YAHOO.i13n.rapidInstance = new YAHOO.i13n.Rapid(rapidEarlyConfig);
            if (YAHOO.i13n.rapidInstance && YAHOO.i13n.rapidInstance.getCurrentSID) {
                // save A_SID so APE can use same session
                YAHOO.i13n.A_SID = YAHOO.i13n.rapidInstance.getCurrentSID();
            }
        }
        