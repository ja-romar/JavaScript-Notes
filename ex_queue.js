/*

Ejercicio para practicar queue, una estructura de datos en fila o cola cuyo principio es que los elementos que se agregan se agregan al final
y los que se remueven son los del principio hagamos un ejercicio
*/

// Declarar una funcion que remueva un jugador del principio de la lista y agrege otro al final

function removePlayers(arr, item) {
    // Cambia solo el código debajo de esta línea
      arr.push(item);
      return arr.shift();
    // Cambia solo el código encima de esta línea
  }
  
  // Configuración
  let playersInField = ["Gavi ", "Pedri ", "Gundo "];
  
  // Muestra el código
  console.log("Inicial: " + JSON.stringify(playersInField)); // mostrar playersInfield sin pasar la funcion ni argumentos
  console.log(removePlayers(playersInField, "Lewan")); // pasar la funcion con el argumento "lewan"
  console.log("Final: " + JSON.stringify(playersInField)); // mostrar el resultado de pasar la funcion

  /* =======================================================================================================================*/

  //Crear una pequena lista de canciones 
  //Asignar una que quite la cancion reproducida y anada una al final

  function queueMusic (songArray, song) {
    songArray.push(song);
    return songArray.shift();
  }

let playlist = ["Gravity", "Dont look back in anger", "Outside Woman blues"];

console.log("playlist " + JSON.stringify(playlist));
console.log(queueMusic(playlist, "My sacrifice"));
console.log("Queue" + JSON.stringify(playlist));
