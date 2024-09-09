function mayorYMenor(num) {
    if(num > 5 && num < 10 && num % 2===0 )console.log(true);
else console.log(false);
};

mayorYMenor(15);
mayorYMenor(8);

function operadorOR(str){
if(str === "Henry" || str.length<2 ) console.log(true);
else console.log(false);
};

operadorOR("Henry");

function negacion(permiso){
    if(permiso !== true) console.log("Tiene permiso");
};

negacion(true);
negacion(false);
negacion(true);

function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
else console.log(false);
};

condicionCompleja(7);

Boolean("Texto");