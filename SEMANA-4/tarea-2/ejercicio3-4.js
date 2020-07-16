let horas = +prompt("¿Cúantas horas estuvo en el estacionamiento?");
let monto=0;
if (horas >=0 && horas<=2) {
    monto=5*horas;
}else if(horas >=3 && horas<=5){
    monto=5*2+4*(horas-2);
}else if(horas >=6 && horas<=10){
    monto=5*2+4*3+3*(horas-5);
}else{
    monto=5*2+4*3+3*(5)+2*(horas-10);
}
console.log(`Usted pagará por el estacionamiento: ${monto} `);