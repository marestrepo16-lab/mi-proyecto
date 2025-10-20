// Tabla de multiplicar
function tabla(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

tabla(5);

// Números primos
function primos(limite) {
  for (let i = 2; i <= limite; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) console.log(i);
  }
}

primos(20);

//Se aplican ciclos for para generar una tabla de multiplicar
//  y para identificar números primos hasta un límite.