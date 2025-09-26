let productos = [
  { id: "1", nombre: "Camisa", precio: 50000, stock: 10 },
  { id: "2", nombre: "Pantalón", precio: 80000, stock: 5 },
  { id: "3", nombre: "Zapatos", precio: 120000, stock: 3 }
];

//FUNCION PARA AGREGAR UN PRODUCTO
function agregarProducto(id, nombre, precio, stock) {
return {id: id, nombre: nombre, precio: precio, stock: stock};
};

productos.push(agregarProducto("4","Computador",1000000,6));
productos.push(agregarProducto("5","Celular",500000,2));
//const resultado = console.log(agregarProducto("1","Tumami",50000,5)) | PRUEBA
//hello?