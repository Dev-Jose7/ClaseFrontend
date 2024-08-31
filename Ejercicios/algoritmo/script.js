const elementoEntrada = document.getElementById("entrada");
const elementoSalida = document.getElementById("salida");
const elementoBoton = document.getElementById("enviar");
let cantidad = 0;
let promedio = 0;
let total = 0;

elementoBoton.addEventListener("click", function(e){
    contadorCantidad();
    operacion();
});

elementoEntrada.addEventListener("keydown", function(e){
    console.log(e.key)
    if(e.key == "Enter"){
        contadorCantidad();
        operacion();
    }
})


function contadorCantidad(){
    if(elementoEntrada.value != ""){
        cantidad++;
        console.log(cantidad);
    }
}

function operacion(){
    total += Number(elementoEntrada.value);
    console.log(total);

    promedio = total / cantidad;

    elementoSalida.value = promedio;

    elementoEntrada.value = "";
}

