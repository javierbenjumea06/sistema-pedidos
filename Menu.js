
let Idproducto = 1; 
function agregarproductos(nombre,precio){
const Product = { id: Idproducto, nombre, precio };
products.push(product);
console.log(`Producto agregado: #${product.id} - ${product.name} ($${product.price}`);
}

function listaproductos() {
  if (products.length === 0) {
    console.log("No hay productos en el menú.");
    return;
  }
  console.log(" Menú de productos");
  products.forEach(p => {
    console.log(`${p.id} - ${p.name} - ${p.price}`)
  });
}
function buscarproducto(Hamburguesas) {
  const results = products.filter(p => p.nombre.includes(`Hamburguesas`));
  if (results.length === 0) {
    console.log(`No se encontraron productos con: "${Hamburguesas}"`)
  } else {
    console.log(`Resultados de búsqueda para "${Hamburguesas}"`)
    results.forEach(p => {
      console.log(`#${p.id} - ${p.name} - $${p.price}`)
    });
  }

}

