import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){

    evento.preventDefault();

    const nombre= document.querySelector("[data-nombre]").value;
    const precio= document.querySelector("[data-precio]").value;
    const imagen= document.querySelector("[data-imagen]").value;

    await conexionAPI.enviarProducto(nombre,precio,imagen);

    try {
        await conexionAPI.enviarProducto(nombre.value, precio.value, imagen.value);
        // Mostrar mensaje de éxito al usuario
        alert("Producto creado con éxito");
      } catch (error) {
        // Mostrar mensaje de error al usuario
        alert("Error al crear producto:", error);
      }
}




formulario.addEventListener("submit",evento=> crearProducto(evento))