
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");

const testButton = document.querySelector('.testButton');

testButton.onclick = () => console.log(confirmPassword());

function confirmPassword(){
    let validation = false;

    if (confirmInput.value && passwordInput.value === confirmInput.value){
        validation = true;
    }
    
    return validation;
}
