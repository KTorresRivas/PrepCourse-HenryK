function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

cuidadoConElConsoleLog("Bucle Infinito");

// Verificar longitud contraseña

// Solicite al usuario que ingrese una contraseña.
// Verifique que la contraseña tenga al menos 8 caracteres.
// Si la contraseña es válida (8 o más caracteres), debe imprimir un mensaje que diga "Contraseña válida".
// Si la contraseña no es válida (menos de 8 caracteres), debe imprimir "Contraseña inválida".



const longitudMinima = 8;
const longitudMaxima = 20;

function Verificacion(contraseña) {
  if (contraseña.length >= longitudMinima && contraseña.length <= longitudMaxima) {
    console.log("Contraseña Válida");
  } else {
    console.log("Contraseña Inválida");
  }
}

// Prueba con una contraseña
Verificacion("Contraseña2024");

// ¿Par o impar?
// Solicitar al usuario que ingrese un número.
// Verificar si el número es par o impar.
// Si el número es par, debe imprimir "El número es par".
// Si el número es impar, debe imprimir "El número es impar".


function ElNumero(numero) {
    // Verifica si el número es par o impar
    if (numero % 2 === 0) {
      console.log("El número es par");
    } else {
      console.log("El número es impar");
    }
  }
  
  function ElNumeroII(numero) {
    // Verifica si es divisible por 2
    if (numero % 2 === 0) {
      console.log("El número es correcto y es par");
    } else {
      console.log("El número es correcto pero es impar");
    }
  }
  
  // Pruebas
  ElNumero(9);   // Salida: "El número es par"
  ElNumeroII(50); // Salida: "El número es correcto y es par"

  