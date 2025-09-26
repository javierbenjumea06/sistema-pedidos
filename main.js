// ARRAY MENU
const menu= [
    {        
      id:"00A30",
      nombre:"Hamburguesa Clasica",
      Precio:"20000",
      categoria: "Hamburguesas" 
    },
    {        
      id:"00A31",
      nombre:"Hamburguesa Doble Queso",
      Precio:"22000",
      categoria: "Hamburguesas" 
    },
    {        
      id:"00A32",
      nombre:"Hamburguesa Pollo Crispy",
      Precio:"25000",
      categoria: "Hamburguesas" 
    },
    {        
      id:"00B30",
      nombre:"Perro Clasico",
      Precio:"19000",
      categoria: "Perros" 
    },
    {        
      id:"00B31",
      nombre:"Perro Doble Queso",
      Precio:"20000",
      categoria: "Perros" 
    },
    {        
      id:"00B32",
      nombre:"Perro crispy",
      Precio:"22000",
      categoria: "Perros" 
    },
]; 

//TOMAS VEGA (MENU DE PRODUCTOS)

function agregarproductos(menu) {
const product = { 
  id: "00B33",
  nombre: "Perro Peperoni", 
  Precio: "25000",
  categoria: "Perros" };

menu.push(product);
console.log(`Producto agregado: ${product.id} - ${product.nombre} - ${product.Precio} - ${product.categoria}`);
}

agregarproductos(menu)

function listaproductos(menu) {
  console.log("Menú de productos");
  menu.forEach(p => {
    console.log(`${p.id} - ${p.nombre} - ${p.Precio} - ${p.categoria}`)
  });
}

listaproductos(menu)

const productoBuscado1 = "Hamburguesa"
const productoBuscado2 = "Pizza"

function buscarproducto(productoBuscado) {
  const resultados = menu.filter(p => p.nombre.includes(productoBuscado));
  if (resultados.length === 0) {
    console.log(`No se encontraron productos con: "${productoBuscado}"`)
  } else {
    console.log(`Resultados de búsqueda para "${productoBuscado}"`)
    resultados.forEach(p => {
      console.log(`${p.id} - ${p.nombre} - ${p.Precio} - ${p.categoria}`)
    });
  }
}

buscarproducto(productoBuscado1)
buscarproducto(productoBuscado2)

//FAHIM FLOREZ (PEDIDOS)

let pedidos = [
    {idPedido: "1", nombreCliente: "Novelia", items: ["Hamburguesa Clasica", "Perro Clasico"], estado : "pendiente"},
    {idPedido: "2", nombreCliente: "Kyu", items: ["Perro Doble Queso", "Perro crispy"], estado: "pendiente"},
    {idPedido: "3", nombreCliente: "Rubén", items: ["Perro Doble Queso", "Perro Clasico"], estado: "pendiente"},
]

function crearPedido(pedidos) {
    var pedido1 = {idPedido: "4", nombreCliente: "Esteban", items: ["Hamburguesa Clasica", "Hamburguesa Pollo Crispy"]}
    pedidos.push(pedido1)
    console.log("Pedido añadido")
}

crearPedido(pedidos)

function cambiarEstado(pedidos) {
    pedidos[0].estado = "preparando"
    console.log("Estado del pedido cambiado con exito.")
}

cambiarEstado(pedidos)

const totalVentas = (listaPedidos) => {
    console.log(`El total de ventas ha sido: ${listaPedidos.lenght}`)
}

totalVentas(pedidos)

// JAVIER BENJUMEA (MENU DE FUNCIONES Y REPORTES)

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

pedidosPorEstado(pedidos)



// MENU DE FUNCIONES

/*const menuF = prompt(`ACCEDE A UNO DE LOS MENUS: 
        1. Menú de Productos. 
        2. Gestión de Pedidos. 
        3. Reportes.
        4. Salir.`)

if (menuF == 1) {
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

} else if (menuF == 2) {
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

} else if (menuF == 3) {
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
}*/

