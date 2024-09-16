var listaDeCompras = []
listaDeCompras[3] = "Tomates";
listaDeCompras[1] = "Lechuga";
listaDeCompras[2] = "Pepino";
listaDeCompras[0] = "Arroz";

console.log(listaDeCompras.length);
// console.log(listaDeCompras);
// listaDeCompras[1];

var elementoDelArray = listaDeCompras[2];
console.log(elementoDelArray);

var colores = ["amarillo , azul"];
colores.push("rojo");
colores.unshift("verde");
console.log(colores);
colores.pop();
colores.shift();
console.log(colores);

var pintores = ["Van Gogh" , "Picasso"];
var incluyeVanG = pintores.includes("Van Gogh");
console.log(incluyeVanG);

var numeros = [4, 6, 8, 9];
var cumpleCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumpleCondicion);

var palabras = ["sol", "luna", "estrella"];
var cumpleCondicion = palabras.every((palabra) => {
    return palabra.length > 3;  // Verifica si todas las palabras tienen más de 3 letras
});
console.log(cumpleCondicion);  // Imprime: true

var palabra = "Henri";
var palabraSeparada = palabra.split("");
console.log(palabraSeparada);
palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada);
var palabraArreglada = palabraSeparada.join("");
console.log(palabraArreglada);


var numeros = [1, 2, 3, 4];
numeros.forEach((num) => console.log(num));

var masUno = numeros.map((num) => {
    return num + 5;
});
console.log(masUno);

var arr = [1, 2, 3];
arr.splice(1, 1);  // Elimina 1 elemento en la posición 1
console.log(arr);  // Resultado: [1, 3]

// Recorrer e imprimir
let Cantantes = ["Dua Lipa", "Lauv", "Ellie G"];

Cantantes.forEach((cantantes) => console.log(cantantes));

// Array original de días
let LosDias = ["Lunes", "Miércoles"];

// Insertar "Martes" entre "Lunes" y "Miércoles"
LosDias.splice(1, 0, "Martes");  // Inserta "Martes" en la posición 1

// Usar map para agregar numeración
let MasDias = LosDias.map((dia, index) => {
    return (index + 1) + ": " + dia;  // Antecede cada día con un número
});

console.log(MasDias);