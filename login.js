const btn = document.getElementById("btn");

function validation() {
    if (document.Formfill.Username.value == "") {
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    } else if (document.Formfill.Username.value.length < 6) {
        document.getElementById("result").innerHTML = "At least six letters*";
        return false;
    } else if (document.Formfill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter your Email*";
        return false;
    } else if (document.Formfill.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter your Password*";
        return false;
    } else if (document.Formfill.Password.value.length < 6) {
        document.getElementById("result").innerHTML = "Password must be 6 characters*";
        return false;
    } else if (document.Formfill.CPassword.value == "") {
        document.getElementById("result").innerHTML = "Enter confirm password*";
        return false;
    } else if (document.Formfill.CPassword.value !== document.Formfill.Password.value) {
        document.getElementById("result").innerHTML = "Password doesn't match*";
        return false;
    } else {
        // Show SweetAlert2 success message
        Swal.fire({
            title: "Great!",
            text: "You are registered successfully!",
            icon: "success",
        }).then(() => {
            // Redirect to index.html after success message is acknowledged
            window.location.href = "index.html";
        });
        // Prevent the form from submitting (you can remove this line if needed)
        return false;
    }
}
