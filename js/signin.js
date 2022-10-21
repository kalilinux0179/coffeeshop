const form = document.getElementById('form');
const useremail = document.getElementById('useremail');
const userpassword = document.getElementById('userpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput(){
    const useremailValue = useremail.value.trim();
    const userpasswordValue = userpassword.value.trim()
    if (useremailValue === ''){
        setErrorFor(useremail,"Message cannot be blank")
    }else{
        setSuccessFor(useremail)
    }

    if (userpasswordValue === ''){
        setErrorFor(userpassword,"Message cannot be blank")
    }else{
        setSuccessFor(userpassword)
    }
}

function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText=message;
    formControl.className="form-control error"
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className="form-control success";
}