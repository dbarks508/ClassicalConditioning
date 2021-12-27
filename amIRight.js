/* 
Author: 		Dylan Barks
Last edited: 	12/9/21
Description: 	External JavaScript for amIRight.html 
*/

"use strict";

//global variables
var yearsElement 		= document.getElementById("years");
var ageElement 			= document.getElementById("age");
var experianceElement 	= document.getElementById("experiance");
var gradeElement 		= document.getElementById("grade");
var hoursElement 		= document.getElementById("hours");
var messageDisplay 		= document.getElementById("messageDiv");
var errorDisplay		= document.getElementById("errorDiv");
var message 			= "";
var euroGradeElement 	= document.getElementById("euroGrade");

function validateFields()
{	console.log("enter checkFit()...");
	var fieldValidity = true;
	var formValidity = true;
	var inputElements = document.querySelectorAll("input[type=text]");
	
	for (var i=0; i<inputElements.length; i++){
		var currentElement = inputElements[i];
		if (currentElement.value === ""){
			errorDisplay.innerHTML = "Please enter all information";
			currentElement.style.background = "rgb(255, 233, 233)";
			fieldValidity = false;
		} else if (!currentElement == ""){
			currentElement.style.background = "white";
		} else {
			fieldValidity = true;
		} // end IF ELSE
	} // end FOR
	if (fieldValidity == true){
		console.log("entering IF fieldValidity == TRUE")
		errorDisplay.innerHTML = "";
		try{
			if ((isNaN(yearsElement.value)) || (yearsElement.value < 0)){
				throw "Please enter a valid number of years";
			} else if ((isNaN(ageElement.value)) || (ageElement.value < 0)){
				throw "Please enter a valid age";
			} else if ((isNaN(gradeElement.value)) || (ageElement.value < 0)){
				throw "Please enter a valid V-Grade";
			} else if ((isNaN(hoursElement.value)) || (hoursElement.value < 0)){
				throw "Please enter a valid # of hours";
			} // end IF ELSE
		} // end TRY
		catch(msg){
			errorDisplay.innerHTML = msg;
			formValidity = false; 
			if ((isNaN(yearsElement.value)) || (yearsElement.value < 0)){
				yearsElement.focus();
				yearsElement.style.background = "rgb(255, 233, 233)";
			}else if ((isNaN(ageElement.value)) || (ageElement.value < 0)){
				ageElement.focus();
				ageElement.style.background = "rgb(255, 233, 233)";
			} else if ((isNaN(gradeElement.value)) || (gradeElement.value < 0)){
				gradeElement.focus();
				gradeElement.style.background = "rgb(255, 233, 233)";
			} else if ((isNaN(hoursElement.value)) || (hoursElement.value < 0)){
				hoursElement.focus();
				hoursElement.style.background = "rgb(255, 233, 233)";
			} // end IF ELSE
		} // end CATCH
		finally{
			if (formValidity == true){
				showFit();
			} // end IF
		} // end finally
	}// end IF fieldValidity == TRUE
} // end FUNCTION validateFields

function showFit()
{
	var fitContainer = document.getElementById("showFit");
	var outputString = "";
	var statement = " fit looks good!"
	var fitValidity = true;
	if (yearsElement.value < 3){
		fitValidity = false;
		outputString += "<li>We suggest just enjoying climbing for the first three years.</li>"
	} else{
		outputString += "<li>Years climbing" + statement + "</li>";
	} 
	if (ageElement.value < 17){
		fitValidity = false;
		outputString += "<li>We don't accept clients less than 17, unfortunantly.</li>"
	} else{
		outputString += "<li>Age" + statement + "</li>";
	} 
	if (gradeElement.value > 13){
		fitValidity = false;
		outputString += "<li>You're too strong! Sorry we can't help.</li>"
	} else{
		outputString += "<li>Ability" + statement + "</li>";
	}
	if (hoursElement.value < 6){
		fitValidity = false;
		outputString += "<li>We need at least 3, 2 hours sessions to make your training worth while.</li>"
	} else{
		outputString += "<li>Availability " + statement + "</li>";
	}
	fitContainer.innerHTML = outputString;
} // end FUNCTION showFit()
 
// XBCELs
console.log("entering program!!!");
var fitButton = document.getElementById("fitButton")
if (fitButton.addEventListener)
{ fitButton.addEventListener("click", validateFields, false); }
else if (fitButton.attachEvent)
{ fitButton.attachEvent("onclick", validateFields); } // end XBCELs