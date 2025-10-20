class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }
}

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Prestamo {
  constructor(usuario, libro) {
    if (!libro.disponible) {
      console.log("El libro no está disponible");
      return;
    }
    this.usuario = usuario;
    this.libro = libro;
    libro.disponible = false;
    console.log(`${usuario.nombre} ha prestado "${libro.titulo}"`);
  }
}

let libro1 = new Libro("El Principito", "Saint-Exupéry");
let usuario1 = new Usuario("María");
let prestamo1 = new Prestamo(usuario1, libro1);

// Se implementan clases con propiedades y métodos para gestionar libros,
//  usuarios y préstamos de forma sencilla.