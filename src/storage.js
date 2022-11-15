const guardarCarritoStorage = (carritoDeCompras) => {
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};



const borrarCarrito = () => {
    carrito.length=[];
}

export { guardarCarritoStorage, obtenerCarritoStorage, borrarCarrito };
