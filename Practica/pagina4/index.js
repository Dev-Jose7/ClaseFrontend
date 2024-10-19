const tituloInventario = document.getElementById('tituloInventario');
const inventarioDiv = document.querySelector('.inventario');
const agregarProductoBtn = document.getElementById('agregarProducto');
const verInventarioBtn = document.getElementById('verInventario');
const logoutBtn = document.getElementById('logoutBtn');
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const menu = document.getElementById('menu');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const goToRegister = document.getElementById('goToRegister');
const goToLogin = document.getElementById('goToLogin');
const errorMsgLogin = document.getElementById('errorMsgLogin');
const errorMsgRegister = document.getElementById('errorMsgRegister');

let inventario = [];

// Cargar inventario desde localStorage
document.addEventListener('DOMContentLoaded', () => {
    cargarInventario();
    verificarSesion();
});

function cargarInventario() {
    const datos = localStorage.getItem('inventario');
    if (datos) {
        inventario = JSON.parse(datos);
        mostrarInventario();
    }
}

function guardarInventario() {
    localStorage.setItem('inventario', JSON.stringify(inventario));
}

function mostrarInventario() {
    inventarioDiv.innerHTML = '';
    tituloInventario.classList.remove('oculto');
    inventarioDiv.classList.remove('oculto');
    
    if (inventario.length === 0) {
        inventarioDiv.innerHTML = '<p>El inventario está vacío</p>';
    } else {
        inventario.forEach((producto, index) => {
            const productElement = document.createElement('p');
            productElement.textContent = `Producto ${index + 1}: ${producto.nombre} - Precio: $${producto.precio}`;
            inventarioDiv.appendChild(productElement);
        });
    }
}

//Evento para agregar producto

agregarProductoBtn.addEventListener("click", function(){
    const nombre = prompt("Ingrese el nombre del producto");
    const precio = prompt("Ingrese el valor del producto");
    const cantidad = prompt("Ingrese la cantidad de productos a comprar");           
    
    if(nombre && precio && cantidad){

    }
});

function verificarSesion(){
    const usuarioLogueado = sessionStorage.get("usuario");
    if(usuarioLogueado){
        mostrarInventario();
    }

}