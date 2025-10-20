function areaRectangulo(base, altura) {
  return base * altura;
}

function areaCirculo(radio) {
  return 3.1416 * radio * radio;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log("Área del rectángulo:", areaRectangulo(5, 3));
console.log("Área del círculo:", areaCirculo(4));
console.log("Área del triángulo:", areaTriangulo(6, 2));
// Se crean funciones que calculan el área de distintas 
// figuras usando los parámetros necesarios y retornando el resultado.
