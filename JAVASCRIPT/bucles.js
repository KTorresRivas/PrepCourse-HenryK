var suma = 0;
// suma = suma +1;
// suma = suma +2;
// suma = suma +3;
// suma = suma +4;

console.log(suma)

for (var i=0 ; i<10 ; i++){
    suma = suma +i;
    console.log("Variable de Iteracion: ", i); 
}
console.log("Variable Suma: ", suma)

while (suma < 3){
    suma = suma + 1;
    console.log(suma);
}

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Kelly');
}
console.log(arr);

for (var i = 0; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}