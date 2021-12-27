function validateNumbers() {
337    var ccNotNum;
338    var cvvNotNum;
339    var ccNumElement = document.getElementById("ccNum");
340    var cvvElement = document.getElementById("cvv");
341    var ccNumErrMsg = document.getElementById("ccNumErrorMessage");
342    var cvvErrMsg = document.getElementById("cvvErrorMessage");
343    try {
344    if (isNaN(ccNumElement.value) || ccNumElement.value === "") {
345    ccNotNum = true;
346    } else { // ccNum value is a number
347    ccNumElement.style.background = "";
348    ccNumErrMsg.style.display = "none";
349    }
350    if (isNaN(cvvElement.value) || cvvElement.value === "") {
351    cvvNotNum = true;
352    } else { // cvv value is a number
353    cvvElement.style.background = "";
354    cvvErrMsg.style.display = "none";
355    }
356    if (ccNotNum || cvvNotNum) {
357    throw "must contain numbers only.";
358    }
359    }// END TRY
360    catch(msg) {
361    if (ccNotNum) {
362    ccNumElement.style.background = "rgb(255,233,233)";
363    ccNumErrMsg.style.display = "block";
364    ccNumErrMsg.innerHTML = "The card number " + msg;
365    }
366    if (cvvNotNum) {
367    cvvElement.style.background = "rgb(255,233,233)";
368    cvvErrMsg.style.display = "block";
369    cvvErrMsg.innerHTML = "The cvv number " + msg;
370    }
371    formValidity = false;