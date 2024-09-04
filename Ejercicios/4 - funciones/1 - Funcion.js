let elementoEntrada = document.getElementById("entrada");
let elementoSalida = document.getElementById("salida");

let cantidadVocal = 0;


elementoEntrada.addEventListener("input", function(e){
    let caracter = e.data;
    console.log(caracter);

    if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u"){
        cantidadVocal++;
        elementoSalida.value = cantidadVocal;
    }

    if(caracter == null){
        e.preventDefault();
    }
});



