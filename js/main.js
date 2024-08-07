import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-producto]");
const formulario = document.querySelector("[data-formulario]");



function crearCard(nombre, precio, imagen, id) {
  const producto = document.createElement("li");
  producto.className = "product";
  producto.innerHTML = `<img src="${imagen}" alt="${nombre}">
                         <h3>${nombre}</h3>
                         <div class="product-e">
                            <p>$ ${precio} </p>
                            <button class="delete-button" data-id= "${id}"> <img src="assets/trash.png" alt="Eliminar">
                            </button>
                        </div>`;

const eliminacion = (producto, id) => {
  conexionAPI.borrarProducto(id)
      .then(() => {
          producto.remove();
          alert("Producto eliminado");
      })
      .catch((err) => console.log(err));
};
  
const deleteButton = producto.querySelector(".delete-button");
deleteButton.addEventListener("click", () => eliminacion(producto,id));

return producto;
}





async function listarProductos() {
  const listAPI = await conexionAPI.ListarProductos();
  listAPI.forEach((producto) => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)));
}

async function crearProducto(evento) {
  evento.preventDefault();

  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  try {
    await conexionAPI.enviarProducto(nombre, precio, imagen);
    // Mostrar mensaje de éxito al usuario
    alert("Producto creado con éxito");
  } catch (error) {
    // Mostrar mensaje de error al usuario
    alert("Error al crear producto:", error);
  }
}

formulario.addEventListener("submit", (evento) => crearProducto(evento));
listarProductos();

