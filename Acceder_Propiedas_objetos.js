/* Para acceder a propiedades de objetos podemos usar
notacion de puntos (.) */

/*La notacion de puntos se usa cuando conoces el nombre
de la propiedad a la que intetas acceder */

// Configuración * Ejemplo de freeCodeCamp
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Cambia solo el código debajo de esta línea
  const hatValue = testObj;      // Cambia esta línea
  const shirtValue = testObj;    // Cambia esta línea

  // Solucion
  const hatValue = testObj.hat;
  const shirtValue = testObj.shirt;
  
  /* ========================================================*/

  /* Tambien podemos acceder a propiedades de objetos con notacion
  de corchetes ([]). Si la propiedad del objeto al que intentamos
  acceder tiene un espacio en el nombre necesitaremos usas notacion
  de corchetes */

  // Configuración
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Cambia solo el código debajo de esta línea
  const entreeValue = testObj["an entree"];   // Cambia esta línea
  const drinkValue = testObj["the drink"];    // Cambia esta línea

  /* =========================================================*/

  /* Tambien podemos acceder a propiedades de objetos con variables*/

  /* Otro uso de la notacion de corchetes en objetos es poder
  acceder a una propiedad que este almacenada como el valor de
  una variable.  */
// Configuración
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Cambia solo el código debajo de esta línea
  const playerNumber = 16;  // Cambia esta línea
  const player = testObj[playerNumber];   // Cambia esta línea

  /* =========================================================*/
  
  /* Despues de crear un objeto podemos actualizar sus propiedad
  en cualquier momentp, utilizando notacion de puntos o notacion
  de corchetes. */

  // Configuración
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Cambia solo el código debajo de esta línea
  myDog.name = "Happy Coder";

  /* En este caso le estamos dando cambiando name a myDog de "Coder"
  a "Happy Coder" */

  /*=============================================================*/

  /* Podemos anadir nuevas propiedades a objetos existentes 
  de la misma forma que modificarlos. */

  const myTeam = {
    "name": "Falcon",
    "numberof": 7,
  }
  myTeam.quote = "Molon labe";

  /*===========================================================*/

  /* De esa misma forma podemos eliminar propiedades de la siguiente
  forna */

  const myTeam = {
    "name": "Falcon",
    "numberof": 7,
    "quote": "Molon labe"
  };

  delete myTeam.numberof;

  /* Despues del delete myTeam se veria asi */

  const myTeam = {
    "name": "Falcon",
    "quote": "Molon labe"
  };


/* ============================================================*/

/* Tambien podemos usar objetos para hacer busquedas, pueden
ser conciderados como un almacenamiento clave/valor, como
un diccionario. en lugar de switch o una cadena if/else, */

// Configuración
function phoneticLookup(val) {
  let result = "";

  // Cambia solo el código debajo de esta línea
const lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank"
};  
 
  result = lookup[val];
  // Cambia solo el código encima de esta línea
  return result;
}

phoneticLookup("charlie");

/* ============================================================*/

/* Manipular objetos complejos */ 
/* A veces es posible que desemos almacenar datos de una estructura
de datos flexible. Un objeto de JavaScript es una forma de manejar
datos flexibles.
permite combinaciones arbitrarias, cadenas, numeros, booleans,
arreglos, funciones, etc.

*/
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Billy Jaun",
      "title": "Cold Spring Harbor",
      "release_year": 1971,
      "formats": [
        "CD",
        "8T",
        "LP"
      ]
    }
  ];
  /*==============================================================*/

  /* Acceder a objetos anidados */

  // Se puede acceder a las sub propiedades de objetos con
  // notacion de puntos o corchetes

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];

  /*  ========================================================*/

  /* Acceder a arreglos anidados */

  /* Los objetos pueden contener tanto objetos anidados como asi
  tambien arreglos anidados. */

  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1]; 

  /* =========================================================*/