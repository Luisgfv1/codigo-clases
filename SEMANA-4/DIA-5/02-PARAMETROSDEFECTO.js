// FUNCIONES CON PARAMETROS POR DEFECTO
function trinomioCuadrado(a,b,c){
      // if (typeof a === "number") {
  //   if (typeof b === "number") {
  //     if (typeof c === "number") {
  //       // la operacion
  //     } else {
  //       console.log("el numero C no fue correactmente ingresado");
  //     }
  //   } else {
  //     console.log("el numero B no fue correactmente ingresado");
  //   }
  // } else {
  //   console.log("el numero A no fue correactmente ingresado");
  // }
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        // La formula es de mentiritas 😁
        let rpta = a * a * a + b * b * b + c * c * c;
        return rpta;
    } else {
        console.error("Los datos proporcionados no son correctos");
        return 0;
    }

}

let resultado = trinomioCuadrado(2,3,4);
console.log(resultado);
