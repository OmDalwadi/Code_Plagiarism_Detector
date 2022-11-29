

function Login(event)
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
               else if (pswd.length < 8) 
                    {
                        textNode = document.createTextNode("Password should be of 8 character or longer.");
                        msg_pswd.appendChild(textNode);
                        valid = false;
                    }
          


            
    var display_info = document.getElementById("display_info");
    display_info.innerHTML = "";
    if (valid == true) 
    {      
     alert("Login Sucessful");    
     window.location = "http://www.google.com/"  
    }
    else   
    {
      event.preventDefault(); 
  
      display_info.setAttribute("style", "color: red"); 
    }

    document.getElementById("display_info").innerHTML="";
  }



/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */



function Signup(event)
{
   

        
        event.preventDefault();
      
        
        var valid = true;
        
        
        var elements = event.currentTarget;
        var eemail = elements[1].value; //Email
        
        var ppswd = elements[2].value; //Password

        var cpswd = elements[3].value; //Confirm Password
        
      
        
        var regex_email = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
        
        var regex_pswd = /[^\s]{6,}/;
      
      
        
        var msg_email = document.getElementById("msg_email");
        
        var msg_pswd = document.getElementById("msg_pswd");

        var msg_cpswd = document.getElementById("msg_cpswd");
        
    
        msg_email.innerHTML  = "";
       
        msg_pswd.innerHTML = "";

        msg_cpswd.innerHTML = "";
        
      
      
        
        var textNode;
        var htmlNode;
      
      
        
        if (eemail == null || eemail == "") 
                {
                    textNode = document.createTextNode("Email address empty.");
                    msg_email.appendChild(textNode);
                    valid = false;
                 } 
           else if (regex_email.test(eemail) == false) 
                {
                    textNode = document.createTextNode("Email address wrong format. example: username@somewhere.sth");
                    msg_email.appendChild(textNode);
                    valid = false;
                 }
        
            


            if (ppswd == null || ppswd== "") 
                {
                    textNode = document.createTextNode("Password is empty.");
                    msg_pswd.appendChild(textNode);
                    valid = false;
                }
               else if (regex_pswd.test(ppswd) == false) 
                    {
                        textNode = document.createTextNode("Password is invaldi. Be sure to follow the rules(NO SPACE).");
                        msg_pswd.appendChild(textNode);
                        valid = false;
                    }
               else if (ppswd.length < 8) 
                    {
                        textNode = document.createTextNode("Password should be of 8 character or longer.");
                        msg_pswd.appendChild(textNode);
                        valid = false;
                    }
          
                    
            if (ppswd == null || ppswd== "") 
                {
                    textNode = document.createTextNode("Confirm Password is empty.");
                    msg_cpswd.appendChild(textNode);
                    valid = false;
                }
                elseif (ppswd == null || ppswd== "") 
                    {
                    textNode = document.createTextNode("Password doesn't match!");
                    msg_cpswd.appendChild(textNode);
                    valid = false;
                    }

            
    var display_info = document.getElementById("display_info");
    display_info.innerHTML = "";
    if (valid == true) 
    {      
     alert("Login Sucessful");    
     window.location = "http://www.google.com/"  
    }
    else   
    {
      event.preventDefault(); 
  
      display_info.setAttribute("style", "color: red"); 
    }

    document.getElementById("display_info").innerHTML="";
  }



  


