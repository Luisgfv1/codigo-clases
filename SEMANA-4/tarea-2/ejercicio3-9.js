let poliza = prompt("¿Qué póliza cuenta usted? (A o B)");
let lentes = prompt("¿Usa Lentes?");
let alcohol = prompt("¿Bebé Alcohol?");
let enfermedad = prompt("¿ Padece alguna enfermedad como deficiencia cardiaca o diabetes?");
let edad = prompt("¿Cuál es su edad?");
let montodepoliza=0;

if(poliza==="A"){
    if(lentes === "si" || lentes === "SI"){
        if(alcohol === "si" || alcohol === "SI"){
            if(enfermedad === "si" || enfermedad === "SI"){
                if(edad>=40){
                    montodepoliza=1200+1200*(0.1+0.05+0.05+0.2)
                }else{
                    montodepoliza=1200+1200*(0.1+0.05+0.05+0.1)
                }  
            } else{
                if(edad>=40){
                    montodepoliza=1200+1200*(0.1+0.05+0.2)
                }else{
                    montodepoliza=1200+1200*(0.1+0.05+0.1)
                } 
            }
        }else{
            if(enfermedad === "si" || enfermedad === "SI"){
                if(edad>=40){
                    montodepoliza=1200+1200*(0.1+0.05+0.2)
                }else{
                    montodepoliza=1200+1200*(0.1+0.05+0.1)
                }  
            } else{
                if(edad>=40){
                    montodepoliza=1200+1200*(0.1+0.2)
                }else{
                    montodepoliza=1200+1200*(0.1+0.1)
                } 
            }
        }   
    }else{
        if(alcohol === "si" || alcohol === "SI"){
            if(enfermedad === "si" || enfermedad === "SI"){
                if(edad>=40){
                    montodepoliza=1200+1200*(0.05+0.05+0.2)
                }else{
                    montodepoliza=1200+1200*(0.05+0.05+0.1)
                }  
            } else{
                if(edad>=40){
                    montodepoliza=1200+1200*(0.05+0.2)
                }else{
                    montodepoliza=1200+1200*(0.1+0.05+0.1)
                } 
            }
        }else{
            if(enfermedad === "si" || enfermedad === "SI"){
                if(edad>=40){
                    montodepoliza=1200+1200*(0.05+0.2)
                }else{
                    montodepoliza=1200+1200*(0.05+0.1)
                }  
            } else{
                if(edad>=40){
                    montodepoliza=1200+1200*(0.2)
                }else{
                    montodepoliza=1200+1200*(0.1)
                } 
            }
        }
    }
}else{
    if(lentes === "si" || lentes === "SI"){
        if(alcohol === "si" || alcohol === "SI"){
            if(enfermedad === "si" || enfermedad === "SI"){
                if(edad>=40){
                    montodepoliza=950+950*(0.1+0.05+0.05+0.2)
                }else{
                    montodepoliza=950+950*(0.1+0.05+0.05+0.1)
                }  
            } else{
                if(edad>=40){
                    montodepoliza=950+950*(0.1+0.05+0.2)
                }else{
                    montodepoliza=950+950*(0.1+0.05+0.1)
                } 
            }
        }else{
            if(enfermedad === "si" || enfermedad === "SI"){
                if(edad>=40){
                    montodepoliza=950+950*(0.1+0.05+0.2)
                }else{
                    montodepoliza=950+950*(0.1+0.05+0.1)
                }  
            } else{
                if(edad>=40){
                    montodepoliza=950+950*(0.1+0.2)
                }else{
                    montodepoliza=950+950*(0.1+0.1)
                } 
            }
        }   
    }else{
        if(alcohol === "si" || alcohol === "SI"){
            if(enfermedad === "si" || enfermedad === "SI"){
                if(edad>=40){
                    montodepoliza=950+950*(0.05+0.05+0.2)
                }else{
                    montodepoliza=950+950*(0.05+0.05+0.1)
                }  
            } else{
                if(edad>=40){
                    montodepoliza=950+950*(0.05+0.2)
                }else{
                    montodepoliza=950+950*(0.1+0.05+0.1)
                } 
            }
        }else{
            if(enfermedad === "si" || enfermedad === "SI"){
                if(edad>=40){
                    montodepoliza=950+950*(0.05+0.2)
                }else{
                    montodepoliza=950+950*(0.05+0.1)
                }  
            } else{
                if(edad>=40){
                    montodepoliza=950+950*(0.2)
                }else{
                    montodepoliza=950+950*(0.1)
                } 
            }
        }
    }
}
console.log(`Su póliza mensual es: ${montodepoliza} `);
