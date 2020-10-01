// Arreglos 
let numeros=[15,16,1.5,9,-9,16];
let vacio=[];
//Imprimir arreglo
console.log(numeros);
console.log(vacio);
console.log(`Posición 4 = ${numeros[4]}`);

numeros[0]=720;
console.log(numeros);
console.log(`Cantidad de elementos del arreglo`);
console.log(numeros.length);

let totalElementos = numeros.length;
//Imprimiendo el ultimo elemento del array
console.log(numeros[5]);
console.log(numeros[totalElementos-1]);
// Agregar elementos
numeros.push(212);
console.log(numeros);