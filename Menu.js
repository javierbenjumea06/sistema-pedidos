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



