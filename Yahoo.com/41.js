
    if (self !== top) {
        top.localtion = self.location;
    }
    
(function (root) {
/* -- Data -- */
root.I13N_config = {"keys":{"pt":"utility","ver":"nodejs"}};
root.I13N_config || (root.I13N_config = {});
root.I13N_config.spaceid = 794200018;
root.I13N_config.location = "https:\u002F\u002Flogin.yahoo.com\u002F?lang=en-US&src=noSrc";
root.I13N_config.referrer = "https:\u002F\u002Fwww.yahoo.com\u002F";
root.I13N_config.keys || (root.I13N_config.keys = {});
root.I13N_config.keys.pct = "sign-in";
root.I13N_config.keys.pg_name = "yahoo Login - Landing Page";
root.I13N_config.keys.pstcat = "username-verify";
root.I13N_config.keys.gm_np = "yahoo";
root.I13N_config.keys.p_sec = "login";
root.I13N_config.keys.p_subsec = "login";
root.I13N_config.keys.src = "noSrc";
root.I13N_config.keys.test = "mbr-qr-control,mbr-fido-control,mbr-oauth-be,mbr-atthaloc-oauth";
root.mKeyPrefix = "login-landing-";
root.I13N_config.keys.context = "primary";
root.enforceCountryCodeDropDown = undefined;
root.socialLoginEol = ["google","facebook"];
root.COUNTRY_CODES_MAP = {"AF":"+93","AL":"+355","DZ":"+213","AS":"+1","AD":"+376","AO":"+244","AI":"+1","AG":"+1","AR":"+54","AM":"+374","AW":"+297","AC":"+247","AU":"+61","AX":"+672","AT":"+43","AZ":"+994","BS":"+1","BH":"+973","BD":"+880","BB":"+1","BY":"+375","BE":"+32","BZ":"+501","BJ":"+229","BM":"+1","BT":"+975","BO":"+591","BA":"+387","BW":"+267","BR":"+55","VG":"+1","BN":"+673","BG":"+359","BF":"+226","BI":"+257","KH":"+855","CM":"+237","CA":"+1","CV":"+238","KY":"+1","CF":"+236","TD":"+235","CL":"+56","CN":"+86","CO":"+57","KM":"+269","CG":"+242","CK":"+682","CR":"+506","CI":"+225","HR":"+385","CU":"+53","CY":"+357","CZ":"+420","CD":"+243","DK":"+45","DG":"+246","DJ":"+253","DM":"+1","DO":"+1","TL":"+670","EC":"+593","EG":"+20","SV":"+503","GQ":"+240","ER":"+291","EE":"+372","ET":"+251","FK":"+500","FO":"+298","FJ":"+679","FI":"+358","FR":"+33","GF":"+594","PF":"+689","GA":"+241","GM":"+220","GE":"+995","DE":"+49","GH":"+233","GI":"+350","GR":"+30","GL":"+299","GD":"+1","GP":"+590","GU":"+1","GT":"+502","GN":"+224","GW":"+245","GY":"+592","HT":"+509","HN":"+504","HK":"+852","HU":"+36","IS":"+354","IN":"+91","ID":"+62","IR":"+98","IQ":"+964","IE":"+353","IL":"+972","IT":"+39","JM":"+1","JP":"+81","JO":"+962","KZ":"+7","KE":"+254","KI":"+686","KW":"+965","KG":"+996","LA":"+856","LV":"+371","LB":"+961","LS":"+266","LR":"+231","LY":"+218","LI":"+423","LT":"+370","LU":"+352","MO":"+853","MK":"+389","MG":"+261","MW":"+265","MY":"+60","MV":"+960","ML":"+223","MT":"+356","MH":"+692","MQ":"+596","MR":"+222","MU":"+230","MX":"+52","FM":"+691","MD":"+373","MC":"+377","MN":"+976","ME":"+382","MS":"+1","MA":"+212","MZ":"+258","MM":"+95","NA":"+264","NR":"+674","NP":"+977","NL":"+31","AN":"+599","NC":"+687","NZ":"+64","NI":"+505","NE":"+227","NG":"+234","NU":"+683","KP":"+850","MP":"+1","NO":"+47","OM":"+968","PK":"+92","PW":"+680","PS":"+970","PA":"+507","PG":"+675","PY":"+595","PE":"+51","PH":"+63","PL":"+48","PT":"+351","PR":"+1","QA":"+974","RE":"+262","RO":"+40","RU":"+7","RW":"+250","SH":"+290","KN":"+1","LC":"+1","PM":"+508","VC":"+1","WS":"+685","SM":"+378","ST":"+239","SA":"+966","SN":"+221","RS":"+381","SC":"+248","SL":"+232","SG":"+65","SK":"+421","SI":"+386","SB":"+677","SO":"+252","ZA":"+27","KR":"+82","ES":"+34","LK":"+94","SD":"+249","SR":"+597","SZ":"+268","SE":"+46","CH":"+41","SY":"+963","TW":"+886","TJ":"+992","TZ":"+255","TH":"+66","TG":"+228","TK":"+690","TO":"+676","TT":"+1","TN":"+216","TR":"+90","TM":"+993","TC":"+1","TV":"+688","VI":"+1","UG":"+256","UA":"+380","AE":"+971","GB":"+44","US":"+1","UY":"+598","UZ":"+998","VU":"+678","VA":"+379","VE":"+58","VN":"+84","WF":"+681","YE":"+967","ZM":"+260","ZW":"+263"};
root.mbrConfig = {"intl":"us","baseSpaceid":794200018,"intlSpaceid":794200018,"verify":"0","src":"noSrc"};
root.darlaConfig = {"url":"https:\u002F\u002Ffc.yahoo.com\u002Fsdarla\u002Fphp\u002Fclient.php?l=RICH{dest:tgtRICH;asz:flex}&f=794200018&ref=https%3A%2F%2Flogin.yahoo.com%2F%3Flang%3Den-US%26src%3DnoSrc","k2Rate":1,"positions":{"RICH":{"sandbox":"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox","id":"RICH","clean":"login-ad-rich","dest":"login-ad-rich","w":1440,"h":1024,"timeout":5000,"noexp":1,"fdb":{"on":1,"where":"inside","minReqWidth":1325,"showAfter":2000}}}};
root.bucket = "mbr-atthaloc-oauth";
root.currentURL = "\u002F?done=https%3A%2F%2Flogin.yahoo.com%2Faccount%2Fpreferences%3Flang%3Den-US%26region%3DUS&lang=en-US&src=noSrc";
root.doneURL = "https:\u002F\u002Flogin.yahoo.com\u002Faccount\u002Fpreferences?lang=en-US&region=US";
root.isASDK = false;
root.comscoreBeaconUrl = "https:\u002F\u002Fsb.scorecardresearch.com\u002Fp?c1=2&c2=7241469&c5=794200018&ns_c=UTF-8&ns__t=1592292358175&c7=https%3A%2F%2Flogin.yahoo.com%2F%3Flang%3Den-US%26src%3DnoSrc&c14=-1";
}(this));

    
