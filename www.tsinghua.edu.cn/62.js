
function initMenuData(){
if (mtDropDown.isSupported()) {
var ms = new mtDropDownSet(mtDropDown.direction.down, 0, 0, mtDropDown.reference.bottomLeft);


var menu22822 = ms.addMenu(document.getElementById("menu_22822"));
menu22822.addItem("History","../../About1/History.htm","");
menu22822.addItem("Current Structure","../../About1/Current_Structure.htm","");

var menu22824 = ms.addMenu(document.getElementById("menu_22824"));
menu22824.addItem("Professor","../../Faculty/Professor.htm","");
menu22824.addItem("Associate Professor","../../Faculty/Associate_Professor.htm","");
menu22824.addItem("Assistant Professor","../../Faculty/Assistant_Professor.htm","");
menu22824.addItem("In Memory","../../Faculty/In_Memory.htm","");
menu22824.addItem("Emeritus","../../Faculty/Emeritus.htm","");

var menu22825 = ms.addMenu(document.getElementById("menu_22825"));
menu22825.addItem("Academic Programs","../../Admission/Academic_Programs.htm","");
	var subMenu22825_1 = menu22825.addMenu(menu22825.items[1-1]);
       subMenu22825_1.addItem("Doctoral Students","../../Admission/Academic_Programs/Doctoral_Students.htm","");
       subMenu22825_1.addItem("Master Students","../../Admission/Academic_Programs/Master_Students.htm","");
       subMenu22825_1.addItem("Undergraduate Students","../../Admission/Academic_Programs/Undergraduate_Students.htm","");
       subMenu22825_1.addItem("International Students","../../Admission/Academic_Programs/International_Students.htm","");
menu22825.addItem("Training Programs","../../Admission/Training_Programs.htm","");
	var subMenu22825_2 = menu22825.addMenu(menu22825.items[2-1]);
       subMenu22825_2.addItem("Master Programs","../../Admission/Training_Programs/Master_Programs.htm","");
       subMenu22825_2.addItem("Specialty Training","../../Admission/Training_Programs/Specialty_Training.htm","");

var menu22826 = ms.addMenu(document.getElementById("menu_22826"));
menu22826.addItem("Research Areas","../../Research1/Research_Areas.htm","");
menu22826.addItem("Selected Publication","../../Research1/Selected_Publication.htm","");
menu22826.addItem("Post-doctoral Research Fellows","../../Research1/Post_doctoral_Research_Fellows.htm","");
menu22826.addItem("Research Centers","../../Research1/Research_Centers.htm","");
menu22826.addItem("International Collaboration","../../Research1/International_Collaboration.htm","");
menu22826.addItem("Domestic Collaboration","../../Research1/Domestic_Collaboration.htm","");

var menu22827 = ms.addMenu(document.getElementById("menu_22827"));
menu22827.addItem("Underraduate Students","../../Student_Activity1/Underraduate_Students.htm","");
menu22827.addItem("Graduate Students","../../Student_Activity1/Graduate_Students.htm","");

        mtDropDown.renderAll();
}
} 
