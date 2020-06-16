
function initMenuData(){
if (mtDropDown.isSupported()) {
var ms = new mtDropDownSet(mtDropDown.direction.down, 0, 0, mtDropDown.reference.bottomLeft);

var menu2 = ms.addMenu(document.getElementById("menu_2"));
menu2.addItem("学院简介","../../xygk/xyjj.htm","");

menu2.addItem("现任领导","../../xygk/xrld.htm","");

menu2.addItem("历任领导","../../xygk/lrld.htm","");

menu2.addItem("历史沿革","../../xygk/lsyg.htm","");

menu2.addItem("大事年表","../../xygk/dsnb.htm","");


var menu3 = ms.addMenu(document.getElementById("menu_3"));
menu3.addItem("组织机构","../../jgsz/zzjg.htm","");
menu3.addItem("学术机构","../../jgsz/xsjg.htm","");
menu3.addItem("研究机构","../../jgsz/yjjg/yjs.htm","");
 var subMenu3_2 = menu3.addMenu(menu3.items[2]);
    subMenu3_2.addItem("研究所","../../jgsz/yjjg/yjs.htm","");
    subMenu3_2.addItem("国家级研究机构","../../jgsz/yjjg/gjjyjjg.htm","");
    subMenu3_2.addItem("省部级研究机构","../../jgsz/yjjg/sbjyjjg.htm","");
    subMenu3_2.addItem("校级研究机构","../../jgsz/yjjg/xjyjjg.htm","");
    subMenu3_2.addItem("联合研究机构","../../jgsz/yjjg/lhyjjg.htm","");

var menu4 = ms.addMenu(document.getElementById("menu_4"));
menu4.addItem("栏目概述","../../szdw/lmgs.htm","");

menu4.addItem("教研教师","../../szdw/jyjs/ys.htm","");

menu4.addItem("兼职教授","../../szdw/jzjs.htm","");

menu4.addItem("实验教师","../../szdw/syjs.htm","");

menu4.addItem("行政教师","../../szdw/xzjs.htm","");

menu4.addItem("合同制教师","../../szdw/htzjs.htm","");

menu4.addItem("博士后","../../szdw/bsh.htm","");

menu4.addItem("访问学者","../../szdw/fwxz.htm","");

menu4.addItem("荣退教师","../../szdw/rtjs.htm","");


var menu5 = ms.addMenu(document.getElementById("menu_5"));
menu5.addItem("栏目概述","../../jxjw/lmgs.htm","");
menu5.addItem("本科生教学","../../jxjw/bksjx/zyjs.htm","");
menu5.addItem("硕士生教学","../../jxjw/sssjx/dsjs.htm","");
menu5.addItem("博士生教学","../../jxjw/bssjx/dsjs_bs_.htm","");
menu5.addItem("继续教育","../../jxjw/jxjy.htm","");
menu5.addItem("出版教材","../../jxjw/cbjc.htm","");
menu5.addItem("教学成果","../../jxjw/jxcg.htm","");


var menu6 = ms.addMenu(document.getElementById("menu_6"));
menu6.addItem("栏目概述","../../xssh/lmgs.htm","");
menu6.addItem("本科生","../../xssh/bks.htm","");
menu6.addItem("研究生","../../xssh/yjs.htm","");
menu6.addItem("学生绿色协会","../../xssh/xslsxh.htm","");
menu6.addItem("环境友好科技竞赛","../../xssh/hjyhkjjs.htm","");
menu6.addItem("博士生学术会议","../../xssh/bssxshy.htm","");
menu6.addItem("陶氏-可持续发展创新挑战赛","../../xssh/ts_kcxfzcxtzs.htm","");
menu6.addItem("清源协会","../../xssh/qyxh.htm","");
menu6.addItem("奖学金","../../xssh/jxj.htm","");

var menu7 = ms.addMenu(document.getElementById("menu_7"));
menu7.addItem("栏目概述","../../kxyj/lmgs.htm","");
menu7.addItem("研究领域","../../kxyj/yjly.htm","");
menu7.addItem("研究成果","../../kxyj/yjcg/gljx.htm","");
menu7.addItem("编辑期刊","../../kxyj/bjqk/qkjj.htm","");
menu7.addItem("主办会议","../../kxyj/zbhy.htm","");
menu7.addItem("重大专项","../../kxyj/zdzx.htm","");

var menu8 = ms.addMenu(document.getElementById("menu_8"));
menu8.addItem("栏目概述","../../hzjl/lmgs.htm","");
menu8.addItem("合作机构","../../hzjl/hzjg.htm","");
menu8.addItem("重要项目","../../hzjl/zyxm.htm","");

var menu9 = ms.addMenu(document.getElementById("menu_9"));
menu9.addItem("环境节能楼","../../jcss/hjjnl.htm","");
menu9.addItem("实验教学中心","../../jcss/syjxzx.htm","");
menu9.addItem("公共研究平台","../../jcss/ggyjpt.htm","");
menu9.addItem("环境图书馆","../../jcss/hjtsg.htm","");

var menu10 = ms.addMenu(document.getElementById("menu_10"));
menu10.addItem("本科生","../../zsxx/bks.htm","");
menu10.addItem("硕士生","../../zsxx/sss/ss.htm","");
menu10.addItem("博士生","../../zsxx/bss.htm","");
menu10.addItem("港澳台、留学生","../../zsxx/gat_lxs.htm","");
menu10.addItem("继续教育","../../zsxx/jxjy.htm","");


var menu11 = ms.addMenu(document.getElementById("menu_11"));
menu11.addItem("教师招聘","../../zprc/jszp.htm","");
menu11.addItem("博士后招聘","../../zprc/bshzp.htm","");
menu11.addItem("合同制人员招聘","../../zprc/htzryzp.htm","");

var menu12 = ms.addMenu(document.getElementById("menu_12"));
menu12.addItem("综合新闻","../../xw/zhxw.htm","");
menu12.addItem("图片新闻","../../xw/tpxw.htm","");
menu12.addItem("人物新闻","../../xw/rwxw.htm","");
menu12.addItem("工作简报","../../xw/gzjb.htm","");

var menu13 = ms.addMenu(document.getElementById("menu_13"));
menu13.addItem("电话电邮","../../lxwm/dhdy.htm","");
menu13.addItem("邮寄地址","../../lxwm/yjdz.htm","");
menu13.addItem("来访路线","../../lxwm/lflx.htm","");
        
        mtDropDown.renderAll();
}
} 
