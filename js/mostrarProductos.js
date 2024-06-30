import { conexionAPI } from "./conexionAPI";

const lista = document.querySelector("[data-lista]");

function crearCard(){
    const producto = document.createElement ("li");
    producto.className= "product";
    producto.innerHTML= `<img src="Assets\Stormtrooper.jpg" alt="Stormtrooper">
                         <h3>Stormtrooper</h3>
                         <p>$ 60,00</p>`;

    return producto;
}

async function listarProductos (){
    const listAPI = conexionAPI.ListarProductos()
}