/* 
Author: 		Dylan Barks
Last edited: 	12/9/21
Description: 	External JavaScript for rates.html 
*/

// global variables
var daysElement = document.getElementById("days");
var monthsElement = document.getElementById("months");
var checkinElement = document.getElementById("checkins");
var totalElement = document.getElementById("total");

var Calculator = function(numDays, numMonths, numCheckins)
{
	this.days = numDays;
	this.months = numMonths;
	this.checkins = numCheckins;
	this.computeRate = computeTheRate;
	
	function computeTheRate()
	{	
		totalElement.style.background = "none";
		var total = (((this.days * 15) + (this.checkins * 10)) * this.months);
		totalElement.innerHTML = "$ " + total;
	} // end FUNCTION computeRate
} // end Calculator CONSTRUCTOR

function createObject()
{
	var selectedOptions = new Calculator(daysElement.value, monthsElement.value, checkinElement.value);
	selectedOptions.computeRate();
} // end FUNCTION createObject

function validateEntries()
{
	var inputElements = document.querySelectorAll("input[type=text]");
	var currentElement;
	
	for (var i=0; i<inputElements.length; i++)
	{
		currentElement = inputElements[i];
		if (isNaN(currentElement.value) || currentElement.value<1)
		{
			currentElement.style.background = "rgb(255, 233, 233)";
			totalElement.innerHTML = "Input must be a number over 0";
			totalElement.style.background = "block";
			totalElement.style.background = "red";
		} else {
			currentElement.style.background = "white";
		} // end IF ELSE
	} // end FOR
	
	if (daysElement.value > 7)
	{	totalElement.innerHTML = "";
		daysElement.style.background = "rgb(255, 233, 233)";
		totalElement.innerHTML = "If only there were 8 days a week to train!";
		totalElement.style.background = "block";
		totalElement.style.background = "red";
	} else if (checkinElement.value > 3){
		totalElement.innerHTML = "";
		checkinElement.style.background = "rgb(255, 233, 233)";
		totalElement.innerHTML = "The max. check-ins per week are 3.";
		totalElement.style.background = "block";
		totalElement.style.background = "red";
	} else if (monthsElement.value < 0){
		totalElement.innerHTML = "";
		monthsElement.style.background = "rgb(255, 233, 233)";
		totalElement.innerHTML = "Enter a valid number of months";
		totalElement.style.background = "block";
		totalElement.style.background = "red";
	} // end ELSE IF
} // end FUNCTION validateEntries

function createEventListener()
{	
	console.log("entering createEventListener");
	var computeButton = document.getElementById("compute");
	
	if (computeButton.addEventListener)
	{ computeButton.addEventListener("click", createObject, false); }
	
	if(computeButton.addEventListener)
	{ computeButton.addEventListener("click", validateEntries, false); }
} // end FUNCTION  createEventListener

function init ()
{	
	console.log("entering init");
	createEventListener();
} // end FUNCTION  init 

// XBCELs
console.log("entering program");
if (window.addEventListener)
{ window.addEventListener("load", init, false); } 
else if (window.attachEvent)
{ window.attachEvent("onload", init); } // end XBCELs