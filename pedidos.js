/*
2. Gestión de pedidos
 Crear un pedido con: idPedido, nombreCliente, items[] (lista de Productos), total(precios), estado (pendiente, preparando, entregado).
 Cambiar el estado de un pedido.
 Filtrar pedidos por estado.	
*/


function crearPedido(pedidos) {
    var pedido1 = {idPedido: "4", nombreCliente: "Esteban", items: ["Hamburguesa Clasica", "Hamburguesa Pollo Crispy"]}
    pedidos.push(pedido1)
    console.log("pedido añadido")
}
function cambiarEstado(pedidos) {
    
}
/*
  let total = items.reduce((sum, item) => sum + item.precio, 0);


  return {
    idPedido,
    nombreCliente,
    items,
    total,
    estado: ESTADOS[0] 
  };

*/

let pedidos = {
    idPedido: "1", nombreCliente: "Novelia", items: ["Hamburguesa Clasica", "Perro Clasico"],
    idPedido: "2", nombreCliente: "Kyu", items: ["Perro Doble Queso", "Perro crispy"],
    idPedido: "3", nombreCliente: "Rubén", items: ["Perro Doble Queso", "Perro Clasico"],
};
