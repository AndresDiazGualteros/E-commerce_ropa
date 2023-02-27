const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];

const contenedorProductos = document.getElementById('contenedor_producto');
const botonesCategorias = document.querySelectorAll('.boton-categoria')
const tituloPrincipal = document.getElementById('titulo_principal')
let botonesAgragar = document.querySelectorAll('.producto_agregar')
const numerito = document.getElementById('numerito')

//  MOSTRAR PRODUCTOS Y POR CATEGORIAS

function cargarProctos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img class="producto_imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto_detalles">
                <h3 class="producto_titulo">${producto.titulo}</h3>
                <p class="producto_precio">$${producto.precio}</p>
                <button class="producto_agregar" id="${producto.id}" >Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar()
}

cargarProctos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener('click',(e)=>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if(e.currentTarget.id != "todos"){
            const prodcutoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = prodcutoCategoria.categoria.nombre;
            const productoBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProctos(productoBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProctos(productos)
        }


    })
})

function actualizarBotonesAgregar(){ 

    botonesAgragar = document.querySelectorAll('.producto_agregar')

    botonesAgragar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrido)
    })
}
let productosAlCarrito;

let productosAlCarritoLS = localStorage.getItem('productos_en_carrito');



if(productosAlCarritoLS){
    productosAlCarrito = JSON.parse(productosAlCarritoLS);
    actualizarNumerito()
}else{
    productosAlCarrito = [];
}


function agregarAlCarrido(e){

    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosAlCarrito.some(producto => producto.id === idBoton)){
        const index = productosAlCarrito.findIndex(producto => producto.id === idBoton)
        ProductosAlCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosAlCarrito.push(productoAgregado);
    }

    actualizarNumerito()
    localStorage.setItem("productos_en_carrito", JSON.stringify(productosAlCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito =  productosAlCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito;
}