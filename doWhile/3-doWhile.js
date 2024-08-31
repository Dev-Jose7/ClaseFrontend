let i = 5;
let numero = 0;

numero = prompt("Ingrese un número");

do{
    numero = numero * i;
    if(numero < 1000){
        document.write(numero + "<br>");
    }
}while(numero < 1000);