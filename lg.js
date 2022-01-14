
function validate(){
var username = document.getElementById("un").value;
var password = document.getElementById("ps").value;
if ( username == "" && password == ""){
alert ("Sorry....Please Enter Username And Password");
}
else if ( username == "SSGI20201234" && password == "123456789"){
alert ("Login successfully");
window.location = "lognext.html"; 
return false;
}
else if ( username == "SSGI20201235" && password == "234567890"){
alert ("Login successfully");
window.location = "lognext.html"; 
return false;
}
 else if ( username == "SSGI20201236" && password == "345678901"){
alert ("Login successfully");
window.location = "lognext.html"; 
return false;
}
else if ( username == "SSGI20201237" && password == "456789012"){
alert ("Login successfully");
window.location = "lognext.html"; 
return false;
}
else
{ alert("Please Enter Correct Credentials")
}
}
function dis()
{
document.getElementById("un").value= "";
document.getElementById("ps").value = "";
}