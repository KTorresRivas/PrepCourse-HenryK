// VARIABLES
let listaCompras = [];  // Un array vacío para la lista de compras
let presupuesto = 100000;  // Presupuesto inicial
let gastoTotal = 0;     // Total gastado

// FUNCIONES

// Función para agregar productos
function agregarProducto(nombre, precio) {
    // Condicional: Si el presupuesto permite la compra
    if (presupuesto - gastoTotal >= precio) {
        listaCompras.push({ nombre, precio }); // Uso de un array y objetos
        gastoTotal += precio; // Operador aritmético
        console.log(`${nombre} agregado a la lista. Total gastado: $${gastoTotal}`);
    } else {
        console.log(`No hay suficiente presupuesto para agregar ${nombre}`);
    }
}

agregarProducto("Yogur", 50000);
agregarProducto("Mayonesa", 20000);

// Función para eliminar productos
function eliminarProducto(nombre) {
    for (let i = 0; i < listaCompras.length; i++) {  // Bucle
        if (listaCompras[i].nombre === nombre) {     // Comparador lógico
            gastoTotal -= listaCompras[i].precio;    // Actualiza el gasto
            listaCompras.splice(i, 1);  // Elimina el producto del array
            console.log(`${nombre} eliminado. Total gastado: $${gastoTotal}`);
            return;  // Termina la función si se encuentra el producto
        }
    }
    console.log(`${nombre} no se encuentra en la lista de compras.`);
}

eliminarProducto("Cereal");
