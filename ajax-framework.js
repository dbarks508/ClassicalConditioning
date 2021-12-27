/* 
Author: 		Dylan Barks 
Last edited: 	12/9/21
Description: 	External JavaScript for ajax framework for inquire.html
 */
 
"use strict";

function trimSpaces (str)
{
	return str.replace(/^\s\s*/, '').replace(/\s*$/, '');
} // end FUNCTION trimSpaces

function ajaxZipQuery()
{
	console.log("enter ajaxZipQuery()");
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
				var city 		= document.getElementById('city');
				var state 		= document.getElementById('state');
				var queryResult = [];
				var ajaxResult 	= ajaxRequest.responseText;
				var queryResult = ajaxResult.split(',');
				city.value = queryResult[0];
				state.value = trimSpaces(queryResult[1]);
			} // end IF
		} // end ajaxRequest
		var zip = document.getElementById("zipcode").value;
		var queryString = "?zipcode=" + zip;
		console.log("the query string is: " + queryString);
		ajaxRequest.open("GET", "zipcodes-query.inc.php" + queryString, true);
		ajaxRequest.send(null);
} // end FUNCTION ajaxZipQuery