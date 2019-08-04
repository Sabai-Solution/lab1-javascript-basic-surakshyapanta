function validateEmptyValues(){

var txtEmail = document.getElementById("txtEmail").value;
var txtUn = document.getElementById("txtUn").value;
var txtPassword = document.getElementById("txtPassword").value;

var appendError= "";
if(txtEmail == ""){
	appendError = "Email";

}

if(txtUn == ""){
	if(appendError != ""){
	appendError = appendError+" and ";	
	}
	appendError = appendError+" Username ";
}
if(txtPassword == ""){
	if(appendError != ""){
	appendError = appendError+" and ";	
	}
	appendError = appendError+" Password ";

}

if(appendError != ""){
	appendError = appendError+" can not be empty.";	
	alert(appendError);
	return false;
	}
else{
	return true;
}
}