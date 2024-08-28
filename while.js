
let numero = parseInt(prompt("Ingresa un número:"));
let body = document.body;

body.innerHTML += "Contador:";
while (numero > 0) {
    numero = numero - 1;
    body.innerHTML += numero + "<br>";
}
body.innerHTML += "DESPEGAR";