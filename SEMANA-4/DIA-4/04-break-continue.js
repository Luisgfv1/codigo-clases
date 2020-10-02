/* Break and Continue */
/* Break: En un scope de una estructura REPETITIVA, finaliza todos
los ciclos o iteraciones que resta por hacer sin importar nos 
encontremos */
/* Continue: en un scope de una estructura REPETITIVA, salta u
obvia todas las sentencias de la iteración en la que nos 
encontremos y continuamos con la siguiente iteración */

let nombres = ["jorge", "teresa", "javier", "leonor", "daniel", "francisca"];
let edades = [20, 15, 75, 68, 45, 25];

/* El algoritmo: que el usuarío busque un nombre y cuando el algoritmo
lo encuentre se imprima su edad y la posición en la que se encuentra */
let buscar = prompt("Ingresa el nombre a buscar en la base de gatos 😹");
let Encontrado = false;
for (let i = 0; i < nombres.length; i++) {
  console.log(`i=${i}`);
  if (nombres[i] == buscar) {
    console.log(`Encontrado: ${buscar}`);
    console.log(`Edad: ${edades[i]}`);
    Encontrado = true;
    break;
  }
}
if (!Encontrado) {
  /* Encontrado!==true; Encontrado===false */
  console.log("No se ha encontrado al gato 😿");
}

/* Uso del continue */
/* De los arreglos anteriores , imprimir la edad y nombre de las personas
menores de 60 años de edad */
let edadesquequiero = +prompt("¿Menores de qué edad quieres?")
for (let j = 0; j < edades.length; j++) {
    if (edades[j]>edadesquequiero) {
        continue;
    }
    console.log(`${nombres[j]} tiene ${edades[j]} años`);
    
}
