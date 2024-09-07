(function(){
    let genero = prompt("¿Cuál es el genero (Femenino/Masculino)?");

    if(genero.toLowerCase() == "masculino"){
        document.write("Hola, señor <br>");
    }else if(genero.toLowerCase() == "femenino"){
        document.write("Hola, señorita <br>");
    }else{
        document.write("Genero no reconocido <br>");
    }
})();