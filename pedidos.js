let pedidos = [{

    idPedido: "1", nombreCliente: "Novelia", items: ["Hamburguesa Clasica", "Perro Clasico"], estado : "pendiente"},
    {idPedido: "2", nombreCliente: "Kyu", items: ["Perro Doble Queso", "Perro crispy"], estado: "pendiente"},
    {idPedido: "3", nombreCliente: "Rubén", items: ["Perro Doble Queso", "Perro Clasico"], estado: "pendiente"},
]

function crearPedido(pedidos) {
    var pedido1 = {idPedido: "4", nombreCliente: "Esteban", items: ["Hamburguesa Clasica", "Hamburguesa Pollo Crispy"]}
    pedidos.push(pedido1)
    console.log("pedido añadido")
}

crearPedido(pedidos)

function cambiarEstado(pedidos) {
    pedidos[0].estado = "preparando"
}

cambiarEstado(pedidos)