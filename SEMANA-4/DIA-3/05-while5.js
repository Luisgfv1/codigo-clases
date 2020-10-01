/* Dado un arreglo de números,
hallar la cantidad de números positivos;
Hallar la cantidad de números negativos;
Hallar la cantidad de números iguales */
let numeros = [
  43,
  56,
  90,
  7,
  58,
  79,
  97,
  93,
  14,
  23,
  70,
  -91,
  12,
  -51,
  91,
  28,
  0,
  0,
  3,
  29,
  -44,
  10,
  6,
  67,
  85,
  77,
  -63,
  42,
  -73,
  83,
  48,
  75,
  -58,
  0,
  68,
  40,
  0,
  31,
  13,
  27,
];

let contador = 0;
let contadorp = 0;
let contadorn = 0;
let contadorz = 0;
while (contador < numeros.length) {
  if (numeros[contador] > 0) {
    contadorp += 1;
  } else if (numeros[contador] < 0) {
    contadorn += 1;
  }
  contador += 1;
}

console.log(`La cantidad de números del arreglo es = ${contador}`);
console.log(`La cantidad de números positivos = ${contadorp}`);
console.log(`La cantidad de números negativos = ${contadorn}`);
console.log(`La cantidad de zeros = ${contador - (contadorp + contadorn) }`);
