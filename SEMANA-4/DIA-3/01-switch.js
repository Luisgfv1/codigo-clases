//Switch 
console.log(`Elegir Opción: 
1. Login
2. Ver Facturas
3. Ver Reportes`);

let rpta = +prompt("Ingresar Opción:"); //El + tranforma a entero
switch(rpta){
    case 1: 
        console.log("Usted elegió iniciar sesión");
        // El break es una sentencia para romper la 
        // ejecución del código restante en la estructura
        break;                                         
    case 2: 
        console.log("Usted desea ver las facturas");
        break;
    case 3: 
        console.log("Usted desea ver los reportes");
        break;
    default:
        console.log("Por favorcito, ingrese una opción válida")
}
console.log("Fin del programa")