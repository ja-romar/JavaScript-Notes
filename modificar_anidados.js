//Ejemplo de como modificar objetos anidados dentro de un objeto


var persona = {
    nombre: "Juan",
    edad: 30,
    direccion: {
      calle: "123 Calle Principal",
      ciudad: "Ciudad Ejemplo",
      pais: "EjemploLand"
    },
    contacto: {
      telefono: "123-456-7890",
      correo: "juan@example.com"
    }
  };
  console.log("Sin el correo cambiado ", persona);
  //Supongamos que queremos cambiar el correo de juan 

  persona.contacto.correo = "juan@gmail.com";

  
  console.log("Con el correo cambiado ", persona);