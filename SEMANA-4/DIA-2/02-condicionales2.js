//Condicionales
debugger;
let edad = +prompt("Ingrese su edad joven");
let imc = 0;
if(edad>17){
    let peso = +prompt("¿Cuánto pesa joven (Kgs.)?");
    let altura= +prompt("¿Ingrese su altura joven?");
    imc=peso/(altura*altura);
    if(imc>30){
        console.log('No hay pase laboral #quedateEncasa ');
        console.log('Está usted en riesgo por excesp de comidita');
    } else{
        console.log('Si hay pase laboral');
    }
    console.log('Su indice de masa corporal es: ${imc}');
}else{
    console.log('No hay pase laboral');
    console.log('Es usted muy moco');
}
console.log('Fin del programa, hasta pronto');
