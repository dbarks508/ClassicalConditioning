/* 
Author: 		Dylan Barks
Last edited: 	12/9/21
Description: 	External JavaScript for inquire.html 
*/

"use strict";

//global variables
var formValidity = true;

// function declarations
function validateInput()
{	console.log("enter validateInput()");
	var currentElement;
	var requiredValidity = true;
	var inputElements = document.querySelectorAll("input[type=text], input[type=date], textarea, #zipcode");
	var elementCount = inputElements.length;
	var errorDiv = document.getElementById("errordiv");
	try{
		for(var i=0; i<elementCount; i++){
			currentElement = inputElements[i];
			if (currentElement.value === ""){
				currentElement.style.background = "rgb(255, 233, 233)";
				requiredValidity = false;
			} else {
				currentElement.style.background = "white";
			}
		} // end FOR
		if (requiredValidity == false){
			throw "Please complete all fields";
		}
		errorDiv.style.display = "none";
		errorDiv.innerHTML = "";
	} // end TRY
	catch(msg)
	{	console.log("entering catch || formValidity= " + formValidity);
		errorDiv.innerHTML = msg;
		errorDiv.style.background = "block";
		errorDiv.style.background = "red";
		formValidity = false;
		console.log("formValidity= " + formValidity);
	} // end CATCH
	console.log("leaving validateInput()");
} // end FUNCTION validateInput

function validateForm(evt)
{	console.log("entering validateForm()");
	if (evt.preventDefault){
		evt.preventDefault();
	} else {
		evt.returnValue = false; 
	}
	formValidity = true;
	validateInput();
	if (formValidity === true){
		document.getElementsByTagName("form")[0].submit();
	} console.log("leaving validateForm()");
} // end FUNCTION validateForm

function createEventListeners()
{	console.log("enter createEventListeners");
	var form = document.getElementsByTagName("form")[0];
	if (form.addEventListener){
		form.addEventListener("submit", validateForm, false);
	} else if (form.attachEvent){
	form.attachEvent("onsubmit", validateForm);}
	console.log("leaving createEventListeners");
} // end FUNCTION createEventListeners

function init()
{
	createEventListeners();	
} // end FUNCTION init

// XBCEL
console.log("entering page!!!");
if(window.addEventListener)
{ window.addEventListener("load", init, false); } 
else if (window.attachEvent)
{ window.attachEvent("onload", init); } // end XBCELs