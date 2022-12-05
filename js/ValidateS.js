function Signup(event) {



    event.preventDefault();


    var valid = true;


    var elements = event.currentTarget;
    var uname = elements[0].value; // Username
    var eemail = elements[1].value; //Email
    var dob = elements[2].value; //Date of Birth
    var pp = elements[3].value; //Profile Pic     
    var pswdp = elements[4].value; //Password
    var cpswd = elements[5].value; //Confirm Password


    var regex_uname = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    var regex_email = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
    var regex_dob = /^\d{2}([.\/-])\d{2}\1\d{4}$/;
    var regex_pswd = /[^\w\s]/;


    var msg_uname = document.getElementById("msg_uname");
    var msg_email = document.getElementById("msg_email");
    var msg_dob = document.getElementById("msg_dob");
    var msg_pp = document.getElementById("msg_pp");
    var msg_pswd = document.getElementById("msg_pswdp");
    var msg_pswdr = document.getElementById("msg_cpswd");


    msg_uname.innerHTML = "";
    msg_email.innerHTML = "";
    msg_dob.innerHTML = "";
    msg_pp.innerHTML = "";
    msg_pswd.innerHTML = "";
    msg_pswdr.innerHTML = "";




    var textNode;
    var htmlNode;


    //    Screen name    //

    if (uname == null || uname == "") {
        textNode = document.createTextNode("Screen name is empty.");
        msg_uname.appendChild(textNode);
        valid = false;
    } else if (regex_uname.test(uname) == false) {
        textNode = document.createTextNode("Screen name should have no spaces and non-word character.");
        msg_uname.appendChild(textNode);
        valid = false;
    }


    //    Email   //

    if (eemail == null || eemail == "") {
        textNode = document.createTextNode("Email address is empty.");
        msg_email.appendChild(textNode);
        valid = false;
    } else if (regex_email.test(eemail) == false) {
        textNode = document.createTextNode("Email address wrong format. example: username@somewhere.sth");
        msg_email.appendChild(textNode);
        valid = false;
    }


    //    Date of Birth   //


    if (dob == null || dob == "") {
        textNode = document.createTextNode("Date of Birth isempty.");
        msg_dob.appendChild(textNode);
        valid = false;
    } else if (regex_dob.test(dob) == false) {
        textNode = document.createTextNode("Please follow dd-mm-yy");
        msg_dob.appendChild(textNode);
        valid = false;
    }


    //    Avtar   //

    if (pp == null || pp == "") {
        textNode = document.createTextNode("Avtar is empty!.Please fill it..");
        msg_pp.appendChild(textNode);
        valid = false;
    }

    //  Password    //
    if (pswdp == null || pswdp == "") {
        textNode = document.createTextNode("Password is empty.");
        msg_pswd.appendChild(textNode);
        valid = false;

    }
    if (regex_pswd.test(pswdp) == false) {
        textNode = document.createTextNode("Password is invaldi. Be sure to follow the rules(NO SPACE).");
        msg_pswd.appendChild(textNode);
        valid = false;
    } else if (pswdp.length < 8) {
        textNode = document.createTextNode("Password should be of 6 character or longer.");
        msg_pswd.appendChild(textNode);
        valid = false;
    }


    //    Confirm Password    //
    if (cpswd == null || cpswd == "") {
        textNode = document.createTextNode("Confirm Password is empty.");
        msg_pswdr.appendChild(textNode);
        valid = false;

    } else if (regex_pswd.test(cpswd) == false) {
        textNode = document.createTextNode("Confirm Password is invaldi. Be sure to follow the rules..");
        msg_pswdr.appendChild(textNode);
        valid = false;
    } else if (cpswd != pswdp) {
        textNode = document.createTextNode("Confirm Password doesnot match with the password.");
        msg_pswdr.appendChild(textNode);
        valid = false;
    }



    var display_info = document.getElementById("display_info");
    display_info.innerHTML = "";
    if (valid == true) {

        alert("Signup Sucessful");
        window.location = "http://www.google.com/"


    } else {
        event.preventDefault();

        display_info.setAttribute("style", "color: red");

    }
    document.getElementById("display_info").innerHTML = "";
}