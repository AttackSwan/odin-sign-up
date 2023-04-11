const confirmLabel = document.querySelector('.confirm-text > label');
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");

function confirmPassword(){
    let validation = false;
    //only check when something is in the confirm password input
    if (confirmInput.value && passwordInput.value === confirmInput.value){
        validation = true;
        confirmText(validation);
    }
    else if (confirmInput.value && passwordInput.value !== confirmInput.value){
        confirmText(validation);
    }
    return validation;
}

function confirmText(validity){     //Change label text if password mismatch
    if (validity){
        confirmLabel.textContent = "PASSWORD CONFIRMED"
        confirmLabel.style.color = 'green';
    }
    else if (!validity){
        confirmLabel.textContent = "PASSWORDS DO NOT MATCH!"
        confirmLabel.style.color = 'red';
    }
    else{
        console.log("confirmText() argument error");
    }
}