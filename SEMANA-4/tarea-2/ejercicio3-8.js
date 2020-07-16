let sueldo = +prompt("¿Cuanto es su sueldo en miles de dolares (ejem: si tu sueldo es $3500 colocar 3.5)?"
);
let años = +prompt("¿Cántos años trabaja en la empresa?");
let bono=0;
if(años>=sueldo){
    if(años >=2 && años<=5){
        bono=0.2*sueldo*1000;
    }else if(años>5){
        bono=0.3*sueldo*1000;
    }else{
        console.log(`Usted no recibirá bono hasta que esté en el segundo año de trabajo `);
    }
}else{
    if(sueldo<=1){
        bono=0.25*sueldo*1000;
    }else if(sueldo>1 && sueldo<=3.5){
        bono=0.15*sueldo*1000;
    }else {
        bono=0.1*sueldo*1000;
    }
}
console.log(`Su Bono a recibir es ${bono} dolares`);