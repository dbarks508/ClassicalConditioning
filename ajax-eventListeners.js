/* 
Author: 		Dylan Barks
Last edited: 	12/9/21
Description: 	External JavaScript for ajax event listeners for inquire.html
 */
 
"use strict";

//global variables
 var theZip = document.getElementById("zipcode");

// XBCELs
if (window.addEventListener)
{ 	window.addEventListener("load", ajaxCreateStateList, false);
	theZip.addEventListener("change", ajaxZipQuery, false);
} else if (window.attachEvent)
{
	window.attachEvent("load", ajaxCreateStateList);
	theZip.attachEvent("onload", ajaxZipQuery);
} // end XBCELs