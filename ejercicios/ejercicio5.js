function calificar(puntos) {
  if (puntos < 0 || puntos > 100) {
    console.log("Puntuación inválida");
    return;
  }

  let letra;
  if (puntos >= 90) letra = "A";
  else if (puntos >= 80) letra = "B";
  else if (puntos >= 70) letra = "C";
  else if (puntos >= 60) letra = "D";
  else letra = "F";

  let estado = puntos >= 60 ? "Aprobado" : "Reprobado";
  console.log(`Calificación: ${letra} - ${estado}`);
}

calificar(85);

//Se usa una función con estructuras condicionales para asignar una letra 
// y determinar si el estudiante aprueba o no.