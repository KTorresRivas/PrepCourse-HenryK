// Variables
let nombreUsuario = "Kelly";
let edadUsuario = 19;
let saldos = 500;

// Función para verificar si el usuario es mayor de edad
function esMayorDeEdad(edad) {
    return edad === 18;  // Comparador (>=) y operador lógico
    
}

console.log(esMayorDeEdad (18));

// Función para comprar un producto si hay suficiente saldo

let saldo = 300000;

function comprarProducto(producto, precio) {
    if (saldo >= precio) {  // Condicional que verifica el saldo
        saldo -= precio;  // Operador de resta
        console.log(`Has comprado un ${producto} por $${precio}. Saldo restante: $${saldo}`);
    } else {
        console.log("No tienes suficiente saldo para comprar este producto.");
    }
}

comprarProducto("Camisa", 90000);
comprarProducto("Bolso", 130000);
comprarProducto("Bebidas", 50000);

// Objeto con un método
let carrito = {
    productos: [],
    agregarProducto: function(producto) {
        this.productos.push(producto);  // Método push para agregar al array
        console.log(`${producto} ha sido agregado al carrito.`);
    },
    mostrarCarrito: function() {
        console.log("Productos en el carrito: ", this.productos);
    },
    Categoria1: function() {
        console.log("Semillas - saludable.", this.producto);
    },
    Categoria2: function() {
        console.log("Ropa - vestir.", this.producto);
    }
    
};

let producto = "Girasol";
carrito.agregarProducto(producto);

carrito.mostrarCarrito();

carrito.Categoria1();

// Función de callback para aplicar un descuento
function aplicarDescuento(valor, callback) {
return callback(valor);
}

function ElDcto(valor) {
    let descuento = 0.1;
    return valor - (valor * descuento);
}

let valorprod = [20000];
let ProductoEnDcto = aplicarDescuento(valorprod, ElDcto);
console.log("La falda queda con el siguiente valor por Dcto:", ProductoEnDcto);

// Operador lógico para mostrar un mensaje según la edad
function esMayorDeEdad (edadUsuario) {
    if (edadUsuario >= 18) {
        console.log(`Hola ${nombreUsuario}, eres mayor de edad.`);
    } else {
        console.log(`Hola ${nombreUsuario}, no eres mayor de edad.`);
} 
}

esMayorDeEdad(19);

// Bucle for para comprar productos con un array

let Tusaldo = 500000;

function comprarProducto1(productos, precio) {
    if (Tusaldo >= precio) {
       Tusaldo -= precio;
        console.log(`Has comprado un ${productos} por $${precio}. Saldo restante: $${Tusaldo}`);
    } else {
        console.log(`No tienes suficiente saldo para comprar ${productos}.`);
    }
}

let productos = [""];
let precios = [50000, 70000, 100000];

for (let i = 0; i < productos.length; i++) {
    comprarProducto1(productos[i], precios[i]);  // Llamada a la función comprarProducto en cada iteración
}

comprarProducto1("Camisa", 50000);
comprarProducto1("Chaqueta", 70000);
comprarProducto1("Zapatos", 100000);
comprarProducto1("Pantalón", 80000);
comprarProducto1("Falda", 90000);
comprarProducto1("Sombrero", 80000);

// Evento: agregar productos al carrito al hacer clic en un botón (simulado)
function agregarAlCarrito(event) {
    let producto = event.producto;
    carrito.agregarProducto(producto);  // Usa el método agregarProducto del objeto
}

// Simulando evento al agregar productos al carrito
let evento1 = { producto: "Camisa" };
let evento2 = { producto: "Pantalón" };

agregarAlCarrito(evento1);
agregarAlCarrito(evento2);

// Mostrar productos en el carrito
carrito.mostrarCarrito();
carrito.Categoria1();
carrito.Categoria2();


// Función para aplicar el descuento usando un callback
function aplicarDescuento2(precio, callback) {
    // El callback se llama con el precio como argumento
    return callback(precio);  // Retornamos el resultado de aplicar el callback (descuento)
}