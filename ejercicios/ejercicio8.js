let num1 = 10;
let num2 = 5;

console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicación:", num1 * num2);
console.log(num2 !== 0 ? "División: " + num1 / num2 : "Error: División por cero");
console.log("Módulo:", num1 % num2);

let promedio = (num1 + num2) / 2;
console.log("Promedio:", promedio);

if (num1 > num2) console.log("num1 es mayor");
else if (num1 < num2) console.log("num2 es mayor");
else console.log("Son iguales");

// Se realizan operaciones matemáticas básicas entre dos números y
//  se incluyen comparaciones y manejo de división por cero.