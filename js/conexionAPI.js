async function ListarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = conexion.json();

   

    return conexionConvertida
}

async function enviarProducto(nombre,precio,imagen){
    const conexion = await fetch("http://localhost:3001/productos",{
        method: "POST", 
        headers: {"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen,
        })
    })
    const conexionConvertida= conexion.json();

    return conexionConvertida
}

async function borrarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
    });
    if (conexion.ok) {
        return { mensaje: "Producto eliminado" };
    } else {
        throw new Error("No se pudo eliminar el producto");
    }
}


export const conexionAPI={
    ListarProductos,enviarProducto,borrarProducto
}
