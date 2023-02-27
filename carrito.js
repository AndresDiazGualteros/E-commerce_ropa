let productosAlCarrito = localStorage.getItem("productos_en_carrito");
productosAlCarrito = JSON.parse(productosAlCarrito);

const carritoVacio = document.getElementById('carrito_vacio');
const contenedor_carrito_productos = document.getElementById('carrito_productos');
const carrito_acciones = document.getElementById('carrito_acciones');
const carrito_comprado = document.getElementById('carrito_comprado');
let carrito_eliminar = document.querySelectorAll('.carrito_producto_eliminar')
const carritoVaciar = document.querySelector('.carrito_acciones_vaciar')
const contenedorTotal = document.querySelector('#total')
const botonComprar = document.querySelector('.carrito_acciones_comprar')


function cargarProductos(){
    if(productosAlCarrito && productosAlCarrito.length > 0){
        carritoVacio.classList.add('disabled');
        contenedor_carrito_productos.classList.remove('disabled');
        carrito_acciones.classList.remove('disabled');
        carrito_comprado.classList.add('disabled');
    
        contenedor_carrito_productos.innerHTML = "";
    
        productosAlCarrito.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('carrito_producto');
            div.innerHTML = `
            <img class="carrito_producto_imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito_producto_titulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito_producto_cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito_producto_precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito_producto_subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito_producto_eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedor_carrito_productos.append(div);
        })
    
    }else{
        carritoVacio.classList.remove('disabled');
        contenedor_carrito_productos.classList.add('disabled');
        carrito_acciones.classList.add('disabled');
        carrito_comprado.classList.add('disabled');
    }
    actualizarBotonesEliminar()
    actualizarTotal()

}

cargarProductos()


function actualizarBotonesEliminar(){ 

    carrito_eliminar = document.querySelectorAll('.carrito_producto_eliminar')

    carrito_eliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosAlCarrito.findIndex(producto => producto.id === idBoton);
    productosAlCarrito.splice(index, 1);
    cargarProductos();

    localStorage.setItem('productos_en_carrito', JSON.stringify(productosAlCarrito));
}

carritoVaciar.addEventListener('click', vaciarCarrito)

function vaciarCarrito(){

    productosAlCarrito.length = 0;
    localStorage.setItem('productos_en_carrito', JSON.stringify(productosAlCarrito));
    cargarProductos()
}

function actualizarTotal(){
    const totalCalculado = productosAlCarrito.reduce((acc, product) => acc + (product.precio * product.cantidad),0);
    contenedorTotal.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener('click', comprarCarrito)

function comprarCarrito(){

    productosAlCarrito.length = 0;
    localStorage.setItem('productos_en_carrito', JSON.stringify(productosAlCarrito));

    carritoVacio.classList.add('disabled');
    contenedor_carrito_productos.classList.add('disabled');
    carrito_acciones.classList.add('disabled');
    carrito_comprado.classList.remove('disabled');
}