// Estados permitidos
const ESTADOS = ["pendiente", "preparando", "entregado"];

// Menú (ya lo tienes definido arriba)

// ---------------------------
// Función para crear pedido
// ---------------------------
function crearPedido(idPedido, nombreCliente, idsProductos) {
  // buscar los productos seleccionados en el menú
  let items = menu.filter(p => idsProductos.includes(p.id));

  // calcular total
  let total = items.reduce((sum, item) => sum + item.precio, 0);

  // devolver objeto pedido
  return {
    idPedido,
    nombreCliente,
    items,
    total,
    estado: ESTADOS[0] // empieza en "pendiente"
  };
}

// ---------------------------
// Ejemplo de uso
// ---------------------------
let pedidos = {
    idPedido: "1", nombreCliente: "Novelia", items: ["Hamburguesa Clasica", "Perro Clasico"],
    idPedido: "2", nombreCliente: "Kyu", items: ["Perro Doble Queso", "Perro crispy"],
    idPedido: "3", nombreCliente: "Rubén", items: ["Perro Doble Queso", "Perro Clasico"],
};
