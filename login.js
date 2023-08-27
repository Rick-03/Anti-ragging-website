const btn = document.getElementById("btn");

function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="At least six letter*";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits*";
        return false;
    }

    else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter confirm password*";
        return false;
    }
    else if(document.Formfill.CPassword.value !== document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Password doesn't matched*";
        return false;
    }
    // else if(document.Formfill.Password.value == document.Formfill.CPassword.value){
    //     popup.classlist.add("open-slide")
    //     return false;
    // }
    else{
        swal({
            title: "Great!",
            text: "You are registered successfully!",
            icon: "success",
          });
    }

}