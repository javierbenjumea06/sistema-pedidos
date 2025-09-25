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
]; // Aquí guardaremos los productos
let Idproducto = 1; // Para dar un ID único a cada producto
function agregarproductos(nombre,Precio){
const Product = { id: Idproducto, nombre, Precio };
products.push(product);
console.log(`Producto agregado: #${product.id} - ${product.name} ($${product.price}`);
}
//  listar productos ---
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
