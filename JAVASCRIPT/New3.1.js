// Función para aplicar el descuento usando un callback
function aplicarDescuento2(precio, callback) {
    // El callback se llama con el precio como argumento
    return callback(precio);  // Retornamos el resultado de aplicar el callback (descuento)
}


// Función que calcula el descuento
function ElSaldo(precio) {
    let descuentos = 0.2;  // Definimos un descuento del 20%
    return precio - (precio * descuentos);  // Aplicamos el descuento
}

// Definimos un array con varios precios
let ElPrecio = [130000, 50000, 200000, 80000];

// Recorremos cada precio y aplicamos el descuento
for (let i = 0; i < ElPrecio.length; i++) {
    let precioConDescuento = aplicarDescuento2(ElPrecio[i], ElSaldo);
    console.log(`El saldo después de aplicar el descuento al precio ${ElPrecio[i]} es: $${precioConDescuento}`);
}