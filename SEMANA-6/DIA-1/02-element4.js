let lista =document.getElementById("lista");
let btnGenerar = document.getElementById("btnGenerar");


btnGenerar.onclick=()=>{
    /**
     * document.createElement("etiqueta_del_elemento")
     * retorna un elemento HTML que aún no está en el DOM
     * imaginemos que dicho elemento está en el limbo
     */
    let liTemporal = document.createElement("li")
    let numeroAleatorio = (Math.random()*(45-1)+1).toFixed(0);
    liTemporal.innerText= numeroAleatorio;
    /**
     * Elemento. setAttribute("nombre_del_atributo","valor del atributo")
     * coloca un atributo al elemento con un respectivo valor
     * (hablamos de atributos HTML ejem: id, class, border, name, value)
     */
    liTemporal.setAttribute("class","lista-item");
    liTemporal.onclick=()=>{
        console.log(`Uy alguien está haciendo click en ${numeroAleatorio}`);
    };
    /**
     * elemento.appenChild(elemento), agrega como hijo final al elemento
     * recibido por parámteros
     * elemento.before(elemento), anlogamente, inserta un hijo al inicio de los 
     * elementos hijos
     */
    lista.appendChild(liTemporal);
    /**
     * Reto:
     * -permitir como maximo 7 números de lotería
     * - validar que si un número se repite, salga otro 
     * HINT: Usar un arreglo para guardar los números y sacar la cantidad de números
     */
};
/**
 * document.onkeyup=>{if(e.key==="x"){hacer algo aquí}}
 * html
 */