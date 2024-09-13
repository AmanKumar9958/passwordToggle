const passwordField = document.getElementById("password");
const passwordToggle = document.querySelectorAll('.showPassword');

passwordToggle.forEach(icon => {
    icon.addEventListener("click", () => {
        const inputFiled = icon.previousElementSibling.previousElementSibling
        if(inputFiled.type === 'password'){
            inputFiled.type = 'text';
            icon.querySelector('i').classList.replace('fa-eye', 'fa-eye-slash');
        }
        else{
            inputFiled.type = 'password';
            icon.querySelector('i').classList.replace('fa-eye-slash', 'fa-eye');
        }
    })
})