/* 
Author: 		Dylan Barks
Last edited: 	12/9/21
Description: 	External JavaScript for index.html 
*/

"use strict";

//gloabal variables
var hello 			= "Hello Climber!";
var beginner 		= "Ready to start your progression?";
var intermediate 	= "Excited to learn more about trianing?";
var advanced 		= "Want to get EVEN more from your climbing?";

// function declarations
function changeWelcome()
{
	var heading = document.getElementsByTagName("h1")[0];
	var level = document.getElementById("level").value;
	if (level == 0){
		heading.innerText = hello;
	} else if (level == "beginner"){
		heading.innerText = beginner;
	} else if(level == "intermediate"){
		heading.innerText = intermediate;
	} else if (level == "advanced"){
		heading.innerText = advanced; 
	} // end IF ELSE IF
	var scrollElement = document.getElementById("scrollTo");
	scrollElement.scrollIntoView();
} // end FUCNTION changeWelcome

function writeCookies()
{	
	var now = new Date();
	now.setTime(now.getTime() + 3600000 + 24 + 7);
	var expiry = now.toUTCString();
	var userName = encodeURIComponent(document.myform.username.value);
	var userLevel = encodeURIComponent(document.myform.level.value);
	document.cookie = "username=" + userName + "; expires=" + expiry;
	document.cookie = "level=" + userLevel + "; expires=" + expiry;
	var logString = "username=" + userName + "\nlevel="+ userLevel;
	console.log(logString);
}// end FUCNTION writeCookies

function createEventListeners()
{
	var levelButton = document.getElementById("submit");
	if (levelButton.addEventListener)
	{ levelButton.addEventListener("click", changeWelcome, false); }
	else if (levelButton.attachEvent)
	{ levelButton.addEventListener("onclick", changeWelcome); }

	var levelButton = document.getElementById("submit");
	if (levelButton.addEventListener)
	{ levelButton.addEventListener("click", writeCookies, false); }
	else if (levelButton.attachEvent)
	{ levelButton.addEventListener("onclick", writeCookies); }
} // end FUNCTION createEventListeners

function init()
{
	createEventListeners();
}// end FUCNTION init

// XBCELs
if (window.addEventListener)
{ window.addEventListener("load", init, false); } 
else if (window.attachEvent)
{ window.addEventListener("onload", init); } // end XBCELs

