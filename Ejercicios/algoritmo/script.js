const elementoEntrada = document.getElementById("entrada");
const elementoSalida = document.getElementById("salida");
const elementoBoton = document.getElementById("enviar");
let cantidad = 0;
let promedio = 0;
let total = 0;

elementoBoton.addEventListener("click", function(e){
    

    if(elementoEntrada.value != ""){
        cantidad++;
    }

    total = Number(elementoSalida.value) + Number(elementoEntrada.value);
    promedio = total / cantidad;
    
    elementoSalida.value = promedio;

    elementoEntrada.value = "";
});
