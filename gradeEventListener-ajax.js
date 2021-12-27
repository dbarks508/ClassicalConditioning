/* 
Author: 		Dylan Barks 
Last edited: 	12/9/21
Description: 	External JavaScript for ajax event listener for amIRight.html
 */

 "use strict";
 
 // global variables
var euroButton = document.getElementById("euroButton");

// XBCELs
if (euroButton.addEventListener)
{ euroButton.addEventListener("click", ajaxFunction, false); } 
else if (euroButton.attachEvent)
{ euroButton.attachEvent("onclick", ajaxFunction); } // end XBCELs