
function validateForm(){
    let name = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let age = document.getElementById("age").value
    let pswd = document.getElementById('password').value;
    var specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
    let flag = true;
    var numberCheck =/\d/;

    if (name == ''){
        alert("Name must be fill out")
        flag = false;
    }
    if (lastName == ''){
        alert("Name must be fill out")
        flag = false;
    }

    if (pswd.length < 8){
        alert("Password must have 8 or more digits")
        flag = false;

    }
    else if (!specialCharacterPattern.test(pswd)){
        alert("Password must have at least 1 special character !#$%&#%&)=?")
        flag = false;
    }
    else if (!numberCheck.test(pswd))
    {
        alert("passowrd must have at least 1 number")
        flag = false;
    }
    if (isNaN(age)){
        alert("Just accepted numbers as age")
        flag = false;
    }
    

    return flag;
}