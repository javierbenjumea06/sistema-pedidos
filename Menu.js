
let Idproducto = 1; 
function agregarproductos(nombre,Precio){
const products = { id: Idproducto, nombre, Precio };
products.push(product);
console.log(`Producto agregado: #${product.id} - ${product.name} ($${product.price}`);
}

function listaproductos() {
  if (products.length === 0) {
    console.log("No hay productos en el menú.");
    return;
  }
  console.log("=== Menú de productos ===");
  products.forEach(p => {
    console.log(`${p.id} - ${p.name} - ${p.price}`)
  });
}