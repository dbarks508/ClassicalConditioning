/* 
Author: 		Dylan Barks 
Last edited: 	12/9/21
Description: 	External JavaScript for ajax framework for amIRight.html
 */
 
"use strict";

function ajaxFunction()
{
	console.log("enter ajaxFunction()");
	var ajaxRequest; // The variable that makes the AJAX magic possible!
	try{
		// REAL BROWSERS
		ajaxRequest = new XMLHttpRequest();
	} catch (e) {
		// Internet Exploder Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				// something went wrong
				alert("Oops! Your browser cannot handle AJAX.");
				return false;
			} // end CATCH really old Microsoft
		} // end CATCH old Microsoft
	} // end CATCH TC39
	
	ajaxRequest.onreadystatechange = function()
		{
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200)
			{
				var ajaxDisplay = document.getElementById("euroGrade");
				ajaxDisplay.innerHTML = ajaxRequest.responseText;
			} // end IF
		} // end FUNCTION ajaxRequest
		
		var vGrade = document.getElementById("grade").value;
		var queryString = "?vGrade=" + vGrade;
		console.log("query string is: " + queryString);
		ajaxRequest.open("GET", "gradeConversion.php" + queryString, true);
		ajaxRequest.send(null);
} // end FUNCTION ajaxGradeFunction

