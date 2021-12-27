/* 
Author: 		Dylan Barks 
Last edited: 	12/9/21
Description: 	External JavaScript for ajax drop down for inquire.html
 */
 
 "use strict";
 
function ajaxCreateStateList(){
	console.log("enter ajaxFunction()");
	var ajaxStateRequest; 
	try{
		// REAL BROWSERS
		ajaxStateRequest = new XMLHttpRequest();
	} catch (e) {
		// Internet Exploder Browsers
		try{
			ajaxStateRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxStateRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				// something went wrong
				alert("Oops! Your browser cannot handle AJAX.");
				return false;
			} // end CATCH really old Microsoft
		} // end CATCH old Microsoft
	} // end CATCH TC39
	
	ajaxStateRequest.onreadystatechange = function()
	{
		if(ajaxStateRequest.readyState == 4 && ajaxStateRequest.status == 200)
		{
			var ajaxDisplay = document.getElementById('ajaxState');
			ajaxDisplay.innerHTML = ajaxStateRequest.responseText;
		} //end IF
	} // end ajaxStateRequest
	console.log("ajax call to dropdown-zips.inc.php");
	ajaxStateRequest.open("GET", "dropdown-zips.inc.php", true);
	ajaxStateRequest.send(null);
} // end FUNCTION ajaxCreateStateList