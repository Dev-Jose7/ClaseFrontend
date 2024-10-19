document.addEventListener("DOMContentLoaded", function(){
    let datos = [];
    const enviar = document.getElementById("enviar");
    const resultados = document.getElementById("resultado");

    
    enviar.addEventListener("click", function(e){
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const ingresos = document.getElementById("ingresos").value;
        const familia = document.getElementById("familia").value;

        const usuario = {nombre, edad, ingresos, familia}
        console.log(usuario);
        datos.push(usuario);

        localStorage.setItem("database", JSON.stringify(datos));
        printResults()
    });

    function printResults(){
        datos.forEach(usuario => {
            let content = `<h3>${usuario.nombre}</h3>
                    <p>${usuario.edad}</p>
                    <h3>${usuario.ingresos}</h3>
                    <p>${usuario.familia}</p>`
            resultados.innerHTML += content;
        });
    }
});