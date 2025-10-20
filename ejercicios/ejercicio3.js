let numeros = [5, 8, 2, 9, 1, 7];

let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);
let promedio = numeros.reduce((a, b) => a + b, 0) / numeros.length;
let pares = numeros.filter(n => n % 2 === 0);
let ordenados = numeros.sort((a, b) => a - b);

console.log("Mayor:", mayor);
console.log("Menor:", menor);
console.log("Promedio:", promedio);
console.log("Pares:", pares);
console.log("Ordenados:", ordenados);


//Se utiliza un arreglo para realizar operaciones comunes:
//  buscar el mayor y menor, calcular el promedio, filtrar pares y ordenar números.