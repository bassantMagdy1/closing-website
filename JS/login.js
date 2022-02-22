document.getElementById("remember_me").onclick = function (){
    var user_check = document.getElementById("remember_me").checked

    if (user_check) {
        localStorage.setItem("Email" , document.getElementById("email").value) 
        localStorage.setItem("Password" , document.getElementById("password").value) 
    
    }
    else {
        localStorage.removeItem("Email")
        localStorage.removeItem("Password")
    }
}

if (localStorage.getItem("Email") != "" && localStorage.getItem("Password") != "" ){
    window.onload = function(){
        document.getElementById("email").value = localStorage.getItem("Email")
        document.getElementById("password").value = localStorage.getItem("Password")
    }
    
}
function checkelement()
{
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    if(email==""||pass=="")
    {
        alert("please enter your data");
        return false;
    }   
}