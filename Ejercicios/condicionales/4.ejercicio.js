const precio = 89.5;
const recorrido = 2500;
const dias = 15;
let total = precio * recorrido;
const descuento = total * 0.30;

if(recorrido > 1000 && dias > 7){
    total = total - descuento;
    console.log("Se aplica un descuento en el valor a pagar: " + total);
}else{
    console.log("Valor total a pagar: " + total);
}