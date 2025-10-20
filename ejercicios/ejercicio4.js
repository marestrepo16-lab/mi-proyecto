let producto = {
  nombre: "Celular",
  precio: 300,
  stock: 10,
  precioConDescuento: function(descuento) {
    return this.precio - (this.precio * descuento / 100);
  },
  disponible: function() {
    return this.stock > 0 ? "Disponible" : "Agotado";
  }
};

console.log("Producto:", producto.nombre);
console.log("Precio con 10% de descuento:", producto.precioConDescuento(10));
console.log("Estado:", producto.disponible());

//Se define un objeto con propiedades (nombre, precio, stock)
//  y métodos que calculan descuento y verifican disponibilidad.