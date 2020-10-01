// While
let c = 0;
console.log(`Valor inicial C = ${c}`);
while (c < 8) {
  //Condición a ejecutar mientras la condición sea verdadera
  console.log(`C = ${c}`);
  c = c + 1;
}
console.log(`Valor de C= ${c}`);

/* Tabla de multiplicar  */
let d = 0;
let base = +prompt(`Ingrese el número que quieres`);
contador=0;
while (contador <= 12) {
    d=base*contador;
    console.log(`12 x ${contador} = ${d}`);
    contador=contador+1;
}


