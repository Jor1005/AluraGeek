async function ListarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = conexion.json();

    // console.log (conexionConvertida);

    return conexionConvertida

}

export const conexionAPI={
    ListarProductos
}

// ListarProductos();