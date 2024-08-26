
function validateForm(){
    const name = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = document.getElementById("age").value
    const pswd = document.getElementById('password').value;
    const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
    var flag = true;
    const numberCheck =/\d/; // all numbers
    


    if (name == '' || name.length > 20 || specialCharacterPattern.test(pswd)){
        alert("Name must be fill out")
        flag = false;
    }
    if (lastName == ''){
        alert("Surname must be fill out")
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