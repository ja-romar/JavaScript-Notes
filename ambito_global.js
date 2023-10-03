// Ejemplo de ambito global y local

esGlobal = 10; // Al declarar esta variable asi seria global

const noEsGlobal = 20; // con const o let se declaran variables de forma local.

function myTest() {
    const loc = "puta";
    console.log(loc);
  }
  
  myTest(); // Esta llamada si se muestra en consola 
  console.log(loc); // Este console log no se muestra porque loc esta definida en un ambito local

  
   