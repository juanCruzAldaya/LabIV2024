
function validateForm(){

    let name = document.getElementById("name").value;

    let nameError = document.getElementById('nameError');

    nameError.textContent = "";
    
    if (name == ""){

        nameError.textContent = "Name must be filled out"
        
    }



}