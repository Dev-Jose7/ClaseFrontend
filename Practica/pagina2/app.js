document.addEventListener("DOMContentLoaded", function(){
    //Seleccionando los elementos del DOM
    const elementoTitulo = document.getElementById("tituloInventario");
    const elementoInventario = document.querySelector(".inventario")
    const elementoBoton = document.getElementById("agregarProducto");
    const elementoIniciar = document.getElementById("iniciar")

    //Modificar
    elementoTitulo.textContent = "Inventario"

    //Crear arreglo
    let inventario = [];

    //funcionalidad al boton
    elementoBoton.addEventListener("click", function(){
        agregarProducto();
    });

    //Agregar productos
    function agregarProducto(){
        const nuevoProducto = prompt("Ingresa el producto: ");
        if(nuevoProducto){
            inventario.push(nuevoProducto);
            mostrarInventario();
        }

        console.log(inventario);
    }

    //Imprimir al arreglo
    function mostrarInventario(){
        elementoInventario.innerHTML = "";

        if(inventario.length == 0){
            elementoInventario.textContent = "No hay elementos"
        }else {
            inventario.forEach((producto, index) => {
                const productElement = document.createElement("p");
                productElement.textContent = `${index+1}: ${producto}`
                elementoInventario.appendChild(productElement);
            });
        }
    }

    //Iniciar sistema
    elementoIniciar.addEventListener("click", function(){
        mostrarInventario();
    })
})