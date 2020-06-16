
function initMenuData(){
if (mtDropDown.isSupported()) {
var ms = new mtDropDownSet(mtDropDown.direction.down, 0, 0, mtDropDown.reference.bottomLeft);


        var menu2 = ms.addMenu(document.getElementById("menu_2"));
                menu2.addItem("Introduction","../../About/Introduction.htm","");
                menu2.addItem("History","../../About/History.htm","");
                menu2.addItem("Milestone","../../About/Milestone.htm","");

        var menu3 = ms.addMenu(document.getElementById("menu_3"));
                menu3.addItem("Full-time Faculty","../../Faculty_Staff/Full_time_Faculty.htm","");
                menu3.addItem("Technicians","../../Faculty_Staff/Technicians.htm","");
                menu3.addItem("Administrative Staff","../../Faculty_Staff/Administrative_Staff.htm","");
                menu3.addItem("Adjunct Professors","../../Faculty_Staff/Adjunct_Professors.htm","");
                menu3.addItem("Contract Researchers","../../Faculty_Staff/Contract_Researchers.htm","");
                menu3.addItem("Post-doctors","../../Faculty_Staff/Post_doctors.htm","");
                menu3.addItem("Visiting Scholars","../../Faculty_Staff/Visiting_Scholars.htm","");
                menu3.addItem("Retired Faculty","../../Faculty_Staff/Retired_Faculty.htm","");


        var menu4 = ms.addMenu(document.getElementById("menu_4"));
                menu4.addItem("Undergraduate Programs","../../Admissions/Undergraduate_Programs/Programs.htm","");
                menu4.addItem("Postgraduate Programs","../../Admissions/Postgraduate_Programs.htm","");
                menu4.addItem("International Students","../../Admissions/International_Students.htm","");


        var menu5 = ms.addMenu(document.getElementById("menu_5"));
                menu5.addItem("Research Areas","../../Research/Research_Areas.htm","");
                menu5.addItem("Divisions","../../Research/Divisions.htm","");
                menu5.addItem("Facility","../../Research/Facility/Library.htm","");
                menu5.addItem("Frontiers of Environmental Science &amp; Engineering in China","../../Research/Frontiers_of_Environmental_Science___Engineering.htm","");

        var menu6 = ms.addMenu(document.getElementById("menu_6"));
                menu6.addItem("Collaborative Programs","../../International_Collaboration/Collaborative_Programs.htm","");
                menu6.addItem("International Conference","../../International_Collaboration/International_Conference.htm","");
                menu6.addItem("Global Environment Program","../../International_Collaboration/Global_Environment_Program.htm","");



        var menu8 = ms.addMenu(document.getElementById("menu_8"));
                menu8.addItem("Organizational Structure","../../Administration/Organizational_Structure.htm","");
                menu8.addItem("Staff","../../Administration/Staff.htm","");

mtDropDown.renderAll();
}
} 
