import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(nombre,precio,imagen){
    const producto = document.createElement ("li");
    producto.className= "product";
    producto.innerHTML= `<img src="${imagen}" alt="Stormtrooper">
                         <h3>"${nombre}"</h3>
                         <p>$"${precio}" </p>`;

    return producto;
}

async function listarProductos (){
    const listAPI = await conexionAPI.ListarProductos()

    listAPI.forEach(producto=>lista.appendChild(crearCard(producto.nombre,producto.precio,producto.imagen)))
}

listarProductos();