//ejercicio3.2

let trabaja = prompt("¿Usted trabaja joven?");
let sueldo=0;
if(trabaja === "si" || trabaja === "SI"){
    let horas = prompt("¿Cúantas horas trabaja diariamente usted?");
    let monto = prompt("¿Cuánto le pagan la hora?");
    sueldo=7*horas*monto;
    console.log(`Usted gana semanalmente: ${sueldo} `);
}else{
    console.log("Busque trabajo");

}