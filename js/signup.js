// form validation
const form = document.getElementById('form');
const username = document.getElementById('username')
const useremail = document.getElementById('useremail');
const userpassword1 = document.getElementById('password1');
const userpassword2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput() {
    //get the value from input
    const usernameValue = username.value.trim();
    const useremailValue = useremail.value.trim();
    const userpassword1Value = userpassword1.value.trim();
    const userpassword2Value = userpassword2.value.trim();

    if (usernameValue === ''){
        setErrorFor(username, "Username cannot be blank");
    }else{
        setSuccessFor(username);
    }

    if (useremailValue === ''){
        setErrorFor(useremail, "Email cannot be blank");
    }else{
        setSuccessFor(useremail);
    }

    if (useremailValue === ''){
        setErrorFor(useremail, "Email cannot be blank");
    }else{
        setSuccessFor(useremail);
    }

    if (userpassword1Value === ''){
        setErrorFor(password1, "password cannot be blank");
    }else{
        setSuccessFor(password1);
    }

    if (userpassword2Value === ''){
        setErrorFor(password2, "password cannot be blank");
    }else if (userpassword1Value != userpassword2Value){
        setErrorFor(password2, "Password doesn't match!")
    }else{
        setSuccessFor(password2);
    }
}


function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
