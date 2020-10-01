// variables
// Las variables se declaran o se crean una sola vez en el documento
// luego sólo las usamos.}

// Creando una variable
// Variable numericas / number
let x = 69;
let otronumero = 453;
// variables de texto / string / de cadena
let nombre = "Jorge";
let suma = 0;

// Diferencia var y let. El primera usa un scope general y el segundo
// es scope local
// variable booleanas
let soltero = true;

const pi = 3.1416;
const igv = 0.18;

suma = x + otronumero;

let precio = 1500;
let total = precio + precio * igv;

// Imprime información en la consola
console.log("suma"); //literal
console.log(suma); //valor que tiene la variable
console.log("La suma total es:");
console.log(suma);

console.log("¿Es soltero?");
console.log(soltero);

console.log("Total a pagar");
console.log(total);

console.log(`Total a pagar ${total}`); //Aca imprime una cadena de caracteres

// +
// -
// *
// /
// %     módulo ó residuo de una operación entera


let residuo = 20%7;
console.log(residuo);

let par1 = 40%2;
let par2 = 900%2;
let par3 = 500%2;

console.log(`${par1}+${par2}+${par3}`);   //Concatena las valores

console.log(`Suma ${par1+residuo}`);

let alfanumerico = 35 + "35";               // el valor 35 de texto pesa más
console.log(`alfanumerico =>${alfanumerico}`);