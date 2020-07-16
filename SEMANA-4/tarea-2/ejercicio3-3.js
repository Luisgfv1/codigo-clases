let comprar = prompt("¿Quieres comprar un regalo a tu enamorada?");
if(comprar === "si" || comprar === "SI"){
    let ayuda = prompt("¿Quieres que te ayude?");
    if(ayuda === "si" || ayuda === "SI"){
        let dinero = prompt("¿Cánto dinero tienes en ($)?");
        if(dinero<=10){
            console.log(`Le puedes comprar una Tarjeta`);
        }else if(dinero >=11 && dinero<=100){
            console.log(`Le puedes comprar un caja de Chocolates`);
        }else if(dinero >=101 && dinero<=250){
            console.log(`Le puedes comprar unas flores`);
        }else if(dinero >=251 ){
            console.log(`Le puedes comprar un Anillo`);
        }else{
            console.log("Puedes comprar lo que quieras");
        }
    }else{
        console.log("Suerte con lo buscas");
    }
    console.log("Suerte con tu regalo");
}else{
    console.log("OK, nos vemos hasta la proxima");
}