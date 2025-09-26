// Menú por consola para conectar las funciones.
// Mostrar cuántos pedidos hay por estado.​
// Calcular el total de ventas (sumando los pedidos entregados).

/*Requerimientos​

1. Menú de productos​

 Agregar un producto con: idProducto, nombre, precio, categoria (por ejemplo: “hamburguesa”, “bebida”, “postre”).​

 Listar todos los productos.​

 Buscar productos por nombre o categoría. (punto extra)​

2. Gestión de pedidos​

 Crear un pedido con: idPedido, nombreCliente, items[] (lista de Productos), total, estado (pendiente, preparando, entregado).​

 Cambiar el estado de un pedido.​

 Filtrar pedidos por estado.​

3. Reportes​

 Mostrar cuántos pedidos hay por estado.​

 Calcular el total de ventas (sumando los pedidos entregados).*/


// MENU DE FUNCIONES

const menu = console.log(`ACCEDE A UNO DE LOS MENUS: 
        1. Menú de Productos. 
        2. Gestión de Pedidos. 
        3. Reportes.
        4. Salir.`)

if (menu == 1) {
    const menu1 = console.log(`ELIGE UNA DE LAS FUNCIONES: 
    1. Agregar un producto.
    2. Listar los productos.
    3. Buscar productos por nombre o categoria.`)

    if (menu1 == 1){
        agregarproductos(nombre, precio)
    }  else if (menu1 == 2){
        listaproductos(menu)
    } else if (menu1 == 3){
        buscarproducto(menu)
    } else {
        console.log("Escribiste algo invalido")
    }
} else if (menu == 2) {
    const menu2 = console.log(`ELIGE UNA DE LAS FUNCIONES: 
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
    const menu3 = console.log(`ELIGE UNA DE LAS FUNCIONES: 
    1. Mostrar cuantos pedidos hay por estado.
    2. Calcular el total de ventas`)

    if (menu3 == 1){
        pedidosPorEstado()
    }  else if (menu2 == 2){
        totalVentas()
    } else {
        console.log("Escribiste algo invalido")
    }

} else {
    console.log("Decidiste salir")
}

