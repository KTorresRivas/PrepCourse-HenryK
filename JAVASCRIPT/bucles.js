var suma = 0;
// suma = suma +1;
// suma = suma +2;
// suma = suma +3;
// suma = suma +4;

console.log(suma)

for (var i=1 ; i<10 ; i++){
    suma = suma +i;
    console.log("Variable de Iteracion: ", i); 
}
console.log("Variable Suma: ", suma)

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes",
    "Sabado", "Domingo"
];

for (let i = 0 ; i < dias.length ; i++) {
    console.log((i + 1) + ": " + dias[i]);
}


while (suma < 3){
    suma = suma + 1;
    console.log(suma);
}

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

console.log(arr, 6);

// WHILE
var arr = [];
while (arr.length < 6) {
   arr.push('Kelly');
}
console.log(arr);

for (var i = 0; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Numeros

// Solicite al usuario que ingrese un número.
// El programa debe usar un bucle para imprimir todos los números desde 1 hasta el número ingresado.
// Si el número es menor o igual a 0, debe imprimir un mensaje indicando que el número no es válido y no ejecutar el bucle.

function Ingresarnumero(num) {
    if (num <= 0) {
        console.log("No válido");
    } else {
        for (let i = 1; i <= num; i++) {
            console.log(i);
        }
    }
}

// Prueba con un número positivo
Ingresarnumero(5);  // Imprimirá los números del 1 al 5

// Prueba con un número no válido
Ingresarnumero(-3); // Imprimirá "No válido"