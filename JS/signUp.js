document.getElementById("accept").onclick = function (){
    var user_check = document.getElementById("accept").checked

    if (user_check) {
        localStorage.setItem("UserName" , document.getElementById("username").value) 
        localStorage.setItem("Email" , document.getElementById("email").value) 
        localStorage.setItem("Password" , document.getElementById("password").value) 
    
    }
    else {
        localStorage.removeItem("UserName")
        localStorage.removeItem("Email")
        localStorage.removeItem("Password")
    }
}
function validateForm()
{
    var username = document.getElementById("username").value;  
    var pw1=document.getElementById("password1").value;
    var pw2=document.getElementById("password2").value;
    if(username == "") {  
        alert("**Fill the first name");  
        return false;  
      }  
        
      //character data validation  
      if(!isNaN(username)){  
        alert("**Only characters are allowed in UserName");  
        return false;  
      }  
      //check empty password field  
       if(pw1 == " ") {  
        alert("**Fill the password please!");  
        return false;  
      }  
      
      //check empty confirm password field  
      if(pw2 == "") {  
        alert( "**Enter the password please!") ;  
        return false;  
      }   
       
      //minimum password length validation  
      if(pw1.length < 8) {  
        alert("**Password length must be atleast 8 characters") ;  
        return false;  
      }  
    
      //maximum length of password validation  
      if(pw1.length > 15) {  
        alert("**Password length must not exceed 15 characters");  
        return false;  
      }  
      if(pw1 != pw2) {  
        alert( "**Passwords are not same");  
        return false;  
      } else {  
        alert ("Your password created successfully");  
         
      } 
      
      
      
    
      
}

