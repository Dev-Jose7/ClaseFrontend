const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("submit");

const nameRegister = document.getElementById("nameRegister");
const emailRegister = document.getElementById("emailRegister");
const passwordRegister = document.getElementById("passwordRegister");
const registerButton = document.getElementById("submitRegister");

loginButton.addEventListener("click", function(e){
    e.preventDefault();
    if(email.value == sessionStorage.getItem("email") && password.value == sessionStorage.getItem("password")){
        document.getElementById("statusLogin").textContent = "Acceso autorizado"
        setTimeout(() => {
            window.location.href = "../pagina3/index.html";
        }, 1000);
    } else {
        document.getElementById("statusLogin").textContent = "Credenciales incorrectas"
    }
});

registerButton.addEventListener("click", function(e){
    e.preventDefault();
    if(nameRegister.value != "" || emailRegister.value != "" || password.value != ""){
        sessionStorage.setItem("name",  nameRegister.value);
        sessionStorage.setItem("email", emailRegister.value);
        sessionStorage.setItem("password", passwordRegister.value);

        document.getElementById("statusRegister").textContent = "Usuario registrado"
    } else {
        document.getElementById("statusRegister").textContent = "Campos faltantes"
    }
});
