let btntitulo1 = document.querySelector("#btntitulo1");
let btntitulo2 = document.querySelector("#btntitulo2");
let h1 = document.querySelector("h1");
let selectPeliculas=document.getElementById("selectPeliculas");
let btnSelect = document.getElementById("btnSelect")

btntitulo1.onclick=()=>{
    /**
     * elemento.innertext=> settea el contenido de una etiqueta
     * OJO, se debe considerar solo el contenido a nivel
     * de texto y no HTML
     */
    h1.innerText= "Nuevo <strong>título</strong> 1";
};
btntitulo2.onclick=()=>{
    /**
     * elemento.innerHTML=> settea el contenido de una etiqueta a nivel de texto y 
     * tambien reconoce etiquetas HTML
     */
    h1.innerHTML="Nuevo <strong>título</strong> 2"
};
const llenarSelect=()=>{
    let contenido="";
    peliculas.forEach((objPelicula)=>{
        contenido = contenido + `<option value="${}">${objPelicula.title}</option>`;
    })
    selectPeliculas.innerHTML=contenido;
};
btnSelect.onclick=()=>{
    llenarSelect();
};