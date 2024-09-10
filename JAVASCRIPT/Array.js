var listaDeCompras = []
listaDeCompras[3] = "Tomates";
listaDeCompras[1] = "Lechuga";
listaDeCompras[2] = "Pepino";
listaDeCompras[0] = "Arroz";

console.log(listaDeCompras.length);
// console.log(listaDeCompras);
// listaDeCompras[1];

var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

var colores = ["amarillo , azul"];
colores.push("rojo");
colores.unshift("verde");
console.log(colores);
colores.pop();
colores.shift();
console.log(colores);

var pintores = ["Van Gogh" , "Picasso"];
var incluyeDali = pintores.includes("Dahli");
console.log(incluyeDali);

var numeros = [11, 6, 8, 9];
var cumpleCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumpleCondicion);

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
    return num + 1;
});
console.log(masUno);

var arr = [1, 2, 3];
delete arr[1];
console.log(arr[1]);