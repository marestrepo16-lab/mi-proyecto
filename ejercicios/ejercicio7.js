let estudiantes = [
  { nombre: "Ana", promedio: 9 },
  { nombre: "Luis", promedio: 6 },
  { nombre: "Marta", promedio: 8 }
];

let resultado = estudiantes.map(est => {
  return {
    ...est,
    estado: est.promedio >= 7 ? "Aprobado" : "Reprobado"
  };
});

console.log(resultado);

//Se emplea el método map para transformar un arreglo de estudiantes 
// agregando una nueva propiedad según su promedio.