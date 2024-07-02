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

export const conexionAPI={
    ListarProductos,enviarProducto
}

// ListarProductos();