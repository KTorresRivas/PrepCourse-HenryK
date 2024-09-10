// Variables y tipos de datos
let nombre = "Kelly";        // Cadena de texto
let edad = 19;               // Número entero
const esEstudiante = true;   // Booleano
let Pais = "Colombia";

// Función simple
function saludar(nombre) {
    return `Hola, ${nombre}!`;  // Usar template literals
}

function origen(Pais) {
    return `Es, ${Pais}!`;
}

// Función para determinar ocupación y condicional
function Ocupacion(profesion) {
    if (profesion === "Full Stack") {
        console.log("verdadero");
    } else if (profesion === "Javascript") {
        console.log("verdadero también");
    } else {
        console.log("Equivocado");
    }
}

// Llamada a la función saludar
console.log(saludar(nombre));

// Llamada a la función Ocupacion
Ocupacion("Full Stack");

console.log(origen(Pais));

// Array
let numeros = [9, 10, 11, 12, 13, 14, 15, 16];

// Bucle for para recorrer el array
for (let i = 0; i < numeros.length; i++) {
    console.log(`Índice ${i}: ${numeros[i]}`);
}

