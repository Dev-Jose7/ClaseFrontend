function ejecutar(){
    alert("Haz hecho click");
}

let inventario = [
    {
        id:1, 
        nombre:"Camisas",
        precio:{
            xs:125000,
            s:130000,
            m:135000,
            l:140000,
            xl:150000
        },
        disponibilidad: true,
        talla:{
            xs:20,
            s:50,
            m:35,
            l:150,
            xl:25
        }
    },
    {
        id:2, 
        nombre:"Pantalon",
        precio:{
            xs:150000,
            s:155000,
            m:165000,
            l:170000,
            xl:180000
        },
        disponibilidad: true,
        talla:{
            xs:23,
            s:13,
            m:22,
            l:5,
            xl:11
        }
    },
    {
        id:3, 
        nombre:"Zapatos",
        precio: 115000,
        disponibilidad: true,
        talla:40
    },
]

function Agregar(producto){
    inventario.push(producto);

    document.write("<br><h2>Mostrar inventario completa</h2><br>")
    inventario.forEach(function(producto){
        // document.write(index.id, index.nombre, index.precio, index.talla, index.disponibilidad);
        const {nombre, precio, disponibilidad} = producto;
        let status
        if(disponibilidad == true){
            status = "Disponible"
        }else if(disponibilidad == false){
            status = "Agotado"
        }

    document.write(`Producto: ${nombre}, Precio: ${precio}, ${status}`);
    });

}


function ejecutar(){
    Agregar({
        id: 4, 
        nombre:"Correa",
        precio: 20000,
        disponibilidad: true
    });
}ñ