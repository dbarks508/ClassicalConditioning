/* 
Author: 		Dylan Barks
Last edited: 	12/9/21
Description: 	External JavaScript for about.html 
*/

"use strict";
// function declarations 

function readCookies()
{	console.log("entering readCookies");
	var cookieArray 	= [];
	var cookieKey 		= "";
	var cookieValue 	= "";
	 
	var allcookies = document.cookie;
	console.log(document.cookie);
	console.log(allcookies.split('; '));
	cookieArray = allcookies.split('; ');
	
	for(var i=0; i<cookieArray.length; i++)
	{
		cookieKey = cookieArray[i].split('=')[0];
		cookieValue = cookieArray[i].split('=')[1];
		console.log("cookieKey: " + cookieKey);
		console.log("cookieValue: " + cookieValue);
		switch(cookieKey)
		{
			case "username": var userName = decodeURIComponent(cookieValue);
				break;
			case "level": var userLevel = decodeURIComponent(cookieValue);
				break;
		} // end SWITCH
	} // end FOR
	
	var usernameDiv = document.getElementById("usernameDiv");
	if (userName == "" || userName == null){
		usernameDiv.innerHTML = " Climber";
	} else {
	usernameDiv.innerHTML = " " + userName;
	} // end IF ELSE
} // end FUNCTION readCookies

function init()
{
	readCookies();
}// end FUCNTION init

// XBCELs
if (window.addEventListener)
{ window.addEventListener("load", init, false); } 
else if (window.attachEvent)
{ window.addEventListener("onload", init); } // end XBCELs

