let ventas = [
  { producto: "Laptop", categoria: "Tecnología", cantidad: 5 },
  { producto: "Mouse", categoria: "Tecnología", cantidad: 10 },
  { producto: "Silla", categoria: "Muebles", cantidad: 7 }
];

let totales = {};
for (let v of ventas) {
  if (!totales[v.categoria]) totales[v.categoria] = 0;
  totales[v.categoria] += v.cantidad;
}

let masVendido = ventas.reduce((max, v) => v.cantidad > max.cantidad ? v : max);

console.log("Totales por categoría:", totales);
console.log("Producto más vendido:", masVendido.producto);

//Se usa un arreglo de objetos para sumar ventas por categoría y encontrar 
// el producto más vendido mediante reduce.