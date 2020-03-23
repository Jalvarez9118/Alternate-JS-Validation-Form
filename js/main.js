// target elements with event listeners
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// when the form is submitted
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // call our checking function
    checkInputs();
})


//  checking function to verify all inputs are valid
function checkInputs() {
    // get values from inputs
    // use trim() function to remove white space
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    // check for valid entry or not, display error or success
    if (usernameValue === '') {
        // show error

        //add error class
        setErrorFor(username, "Username cannot be blank");
    } else {
        // add success class
        setSuccessFor(username);
    }

    // email check
    // check for valid entry or not, display error or success
    if (emailValue === '') {
        setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        // add success class
        setSuccessFor(email);
    }

    // password check
    // check for valid entry or not, display error or success
    if (passwordValue === '') {
        setErrorFor(password, "Password cannot be blank");
    } else {
        // add success class
        setSuccessFor(password);
    }

    // password2 check
    // check for valid entry or not, display error or success
    if (password2Value === '') {
        setErrorFor(password2, "Password2 cannot be blank");
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords do not match");
    } else {
        // add success class
        setSuccessFor(password2);
    }

    // show a success message 

}


// setError function
function setErrorFor(input, message) {
    // we want to add the class (error) to the form-control div, which is the parent div of the input we are checking for (username input)
    const formControl = input.parentElement;

    // target the small tag where the error message will display
    // the small tag is inside the form-control div 
    const small = formControl.querySelector('small');

    // add error message inside small tag we just targetted above this line
    small.innerText = message;

    // add error class to the 'form-control' div to display the non visible error elements
    formControl.className = 'form-control error';
}

// 
function setSuccessFor(input) {
    const formControl = input.parentElement;

    // in this scenario, there is no error so we dont need a message to pass to the small tag. We just add the 'success' class to the form-control div
    formControl.className = "form-control success";
}


// check email validation
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}