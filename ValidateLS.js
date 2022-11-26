function Loginpage(event)
{
   

        
        event.preventDefault();
      
        
        var valid = true;
        
        
        var elements = event.currentTarget;
        var email = elements[0].value; //Email
        
        var pswd = elements[1].value; //Password
        
      
        
        var regex_email = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
        
        var regex_pswd = /[^\s]{6,}/;
      
      
        
        var msg_email = document.getElementById("msg_email");
        
        var msg_pswd = document.getElementById("msg_pswd");
        
    
        msg_email.innerHTML  = "";
       
        msg_pswd.innerHTML = "";
        
      
      
        
        var textNode;
        var htmlNode;
      
      
        
        if (email == null || email == "") 
            {
                textNode = document.createTextNode("Email address empty.");
                msg_email.appendChild(textNode);
                valid = false;
            } 
        else if (regex_email.test(email) == false) 
            {
                textNode = document.createTextNode("Email address wrong format. example: username@somewhere.sth");
                msg_email.appendChild(textNode);
                valid = false;
            }
        
            


            if (pswd == null || pswd== "") 
            {
                textNode = document.createTextNode("Password is empty.");
                msg_pswd.appendChild(textNode);
                valid = false;
        
            }
            else if (regex_pswd.test(pswd) == false) 
            {
                textNode = document.createTextNode("Password is invaldi. Be sure to follow the rules(NO SPACE).");
                msg_pswd.appendChild(textNode);
                valid = false;
            }
            else if (pswd.length < 6) 
            {
                textNode = document.createTextNode("Password should be of 6 character or longer.");
                msg_pswd.appendChild(textNode);
                valid = false;
            }
          


            
    var display_info = document.getElementById("display_info");
    display_info.innerHTML = "";
    if (valid == true) {
      
     alert("Login Sucessful");      
     
      
  
    }
    else {
      event.preventDefault(); 
  
      display_info.setAttribute("style", "color: red"); 
  
    }
    document.getElementById("display_info").innerHTML="";
  }