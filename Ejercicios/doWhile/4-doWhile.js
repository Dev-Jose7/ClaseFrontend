let i = 10;
// let numero = 987654;
numero = prompt("Ingrese un número");
let cantidad = 0

do {
    modulo = numero % i;
    i = i*10;
    cantidad++;
} while (modulo != numero);

document.write("Cantidad de digitos: " + cantidad);
console.log(cantidad);

