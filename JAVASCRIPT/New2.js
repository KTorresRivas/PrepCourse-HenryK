// Función de callback
function procesarArray(array, callback) {
    let resultados = [];
    for (let i = 0; i < array.length; i++) {
        resultados.push(callback(array[i]));  // Se llama a la función callback con el elemento actual del array
    }
    return resultados;  // Devuelve el array con los resultados
}

function duplicar(numero) {
    return numero * 2;  // Devuelve el número duplicado
}

let numeros = [1, 2, 3, 4, 5];  // Definimos el array con números
let numerosDuplicados = procesarArray(numeros, duplicar);  // Pasamos el array y el callback
console.log('Números duplicados:', numerosDuplicados);  // Resultado: [2, 4, 6, 8, 10]

// Callback 2
function procesarLista(array, callback) {
    let resultados1 = [];
    for (let i = 0; i < array.length; i++) {
        resultados1.push(callback(array[i]));
    }
    return resultados1;
}

function restar(numero) {
    return numero - 3; 
}

let numero = [6, 9, 12, 15, 18];
let numerosRestados = procesarLista(numero, restar);
console.log("Numeros Restados:", numerosRestados);

// Callback 3

function procesarTarea(array, callback){
    let total = [];
    for (let i = 0; i < array.length; i++) {
        total.push(callback(array[i]));
    }
    return total;
}

function multiplicar(numero) {
    return numero * 6;
}

let numero1 = [1, 2, 3, 4];
let numerosMultiplicados = procesarTarea(numero1, multiplicar);
console.log("Numero multi:", numerosMultiplicados);


// CALLBACKS CON NUMEROS
function operar(numero1, numero2, callback) {
    return callback(numero1, numero2);
}

function sumar(a, b) {
    return a + b;
}

console.log(operar(10, 20, sumar));  // Resultado 30

// CALLBACKS CON ARGUMENTOS

function ejecutarCallback(callback) {
    console.log("Ejecución de callback...");
    callback();
}

function mensaje() {
    console.log("Este es un callback sin argumentos");
}

ejecutarCallback(mensaje);  // Imprime: Ejecución de callback... Este es un callback sin argumentos

// CALLBACK CON OBJETOS
function procesarObjeto(objeto, callback) {
    return callback(objeto);
}

function mostrarNombre(obj) {
    return obj.nombre;
}

let persona = { nombre: "Kelly", edad: 19 };
console.log(procesarObjeto(persona, mostrarNombre));  // Resultado: Kelly

// Control de flujo (if-else)
function edadPersona (edad1) {
    if(edad1 >= 18) {
        console.log('La persona es mayor de edad.');
    } else {
        console.log('La persona es menor de edad.');
    }
}



edadPersona(19);

// Control 2
function Helados (crema) {
    if(crema === "chocolate") {
        console.log("true");
    } else {
        console.log("false");
    }
}

Helados("chocolate con menta");