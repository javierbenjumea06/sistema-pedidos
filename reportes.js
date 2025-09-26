// REPORTES

const pedidosPorEstado = (listaPedidos) => {
    const pedidosPendientes = listaPedidos.filter(elemento => elemento.estado == "pendiente")
    console.log("Pedidos Pendientes: ")
    pedidosPendientes.forEach(elemento => {console.log(elemento)
    });

    const pedidosPreparando = listaPedidos.filter(elemento => elemento.estado == "preparando")
    console.log("Pedidos en Proceso: ")
    pedidosPreparando.forEach(elemento => {console.log(elemento)
    });

    const pedidosEntregados = listaPedidos.filter(elemento => elemento.estado == "entregados")
    console.log("Pedidos Entregados: ")
    pedidosEntregados.forEach(elemento => {console.log(elemento)
    });
}

const totalVentas = (listaPedidos) => {
    console.log(`El total de ventas ha sido: ${listaPedidos.lenght}`)
}

// MENU DE FUNCIONES

const menu = prompt(`ACCEDE A UNO DE LOS MENUS: 
        1. Menú de Productos. 
        2. Gestión de Pedidos. 
        3. Reportes.
        4. Salir.`)

if (menu == 1) {
    const menu1 = prompt(`ELIGE UNA DE LAS FUNCIONES: 
    1. Agregar un producto.
    2. Listar los productos.
    3. Buscar productos por nombre o categoria.`)

    if (menu1 == 1){
        agregarproductos(menu)
    }  else if (menu1 == 2){
        listaproductos(menu)
    } else if (menu1 == 3){
        buscarproducto(menu)
    } else {
        console.log("Escribiste algo invalido")
    }

} else if (menu == 2) {
    const menu2 = prompt(`ELIGE UNA DE LAS FUNCIONES: 
    1. Crear un pedido.
    2. Cambiar el estado de un pedido.
    3. Filtrar pedidos por estado.`)

    if (menu2 == 1){
        crearPedido()
    }  else if (menu2 == 2){
        cambiarEstado()
    } else if (menu2 == 3){
        filtrar()
    } else {
        console.log("Escribiste algo invalido")
    }

} else if (menu == 3) {
    const menu3 = prompt(`ELIGE UNA DE LAS FUNCIONES: 
    1. Mostrar cuantos pedidos hay por estado.
    2. Calcular el total de ventas`)

    if (menu3 == 1){
        pedidosPorEstado(listaPedidos)
    }  else if (menu2 == 2){
        totalVentas(listaPedidos)
    } else {
        console.log("Escribiste algo invalido")
    }

} else {
    console.log("Decidiste salir")
}



