document.getElementById("contactform").addEventListener("submit", function (event) {
    if (!validateForm()) {  // if the validation of the form fails, we will not submit the form.                             
        event.preventDefault(); // prevents the form from submitting.
    }
    else {
        if (!confirm("Confirm Submission of Feedback Form?")) { // if form not confirmed to submit , we will not submit the form         
            event.preventDefault(); // prevents the form from submitting.
        }
    }
})

function validateForm() {
    var formOK = true;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var comments = document.getElementById("comments").value;

    clearErrorMsgs();

    // name field validations
    if (name.length == 0) {
        formOK = false;
        document.getElementById("name_err").innerHTML = "Please enter a name.";
    } else {
        if (!validateName(name)) {
            formOK = false;
            document.getElementById("name_err").innerHTML = "Name must contain only alphabets";
        }
    }

    // email field validations
    if (email.length == 0) {
        formOK = false;
        document.getElementById("email_err").innerHTML = "Please enter an email address.";
    } else {
        if (!validateEmail(email)) {
            formOK = false;
            document.getElementById("email_err").innerHTML = "Please enter a valid email address.";
        }
    }

    // mobile field validations
    if (mobile.length == 0) {
        formOK = false;
        document.getElementById("mobile_err").innerHTML = "Please enter a mobile number.";
    } else {
        if (!validateMobile(mobile)) {
            formOK = false;
            document.getElementById("mobile_err").innerHTML = "Mobile number must be 8 digits.";
        }
    }

    // comments field validations
    if (comments.length == 0) {
        formOK = false;
        document.getElementById("comments_err").innerHTML = "Comments must not be empty.<br>Please enter some comments.";
    }

    return formOK;
}

function validateName(str) {
    let pattern = /^[a-zA-Z\s]+$/; // must contain small cap or large caps or space
    return pattern.test(str); // using regex check that all characters are letters/space in the string.
}

function validateMobile(str) {
    // a shorter way to test regex
    return /^\d{8}$/.test(str); // using regex to ensure all 8 characters in string are numbers.
}

function validateEmail(str) {
    // using regex again to validate email address: go to https://regexr.com/ and see the meaning of this regex expression below
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str);
}

// clears the error messages
function clearErrorMsgs() {
    var labels = document.getElementsByClassName("err_label");

    for (let i = 0; i < labels.length; i++) {
        labels[i].innerHTML = "";
    }
}