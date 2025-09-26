
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
function buscarproduc(query) {
  const results = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  if (results.length === 0) {
    console.log(`No se encontraron productos con: "${query}"`)
  } else {
    console.log(`Resultados de búsqueda para "${query}"`)
    results.forEach(p => {
      console.log(`#${p.id} - ${p.name} - $${p.price}`)
    });
  }
}

