/* Sentencias "Else" */

/* Cuando la condicion de una sentencia if es verdader el bloque
de codigo que sigue continua ejecutandose, cuando es falsa
normalmente no ocurrira nada, con la sentense else podemos
ejecutar un bloque de codigo alternativo */

//Ejemplo

// Imprime "mas grande que 5" o "5 o menor" si no.

function testElse(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    }
    
    else {
        result = "5 or smaller";
    }

}

/* ==================================================*/

/* Si necesitamos resolver multiples condiciones podemos
encadenar sentencias if junto con sentencias else if */

if (num > 15) {
    return "Bigger than 15";
  } else if (num < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 15";
  }

/* ==================================================*/

/* otro ejemplo de else if ahora junto con if */

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10"; //if para comprovar que sea mayor que 10

    }
  
    else if (val < 5) { 
      return "Smaller than 5"; // else if para comprobar que es mas chico que 5
    }
  else { //si se cumplen las dos entonces regresara "bettween 5 and 10"
    return "Between 5 and 10";
  }
  }
  
  testElseIf(7);

  /* ==================================================*/

  /* Orden logico de las sentencias "f else"

La funcion se ejecuta de arriba a abajo, por lo que tenemos
que tener cuidado con que sentencia colocamos primero

*/

/* en este caso comparemos los valores 4, 6 y 11 
queremos que con 4 regrese "Less than 5" con 6 "Less than 10"
y con 10 "greater than or equal to 10" */

function orderMyLogic(val) {
    if (val < 5) { //el 4 es menor que 5
      return "Less than 5";
    } else if (val < 10) { //6 menor que 10 
      return "Less than 10"; 
    } else { //11 no es menor que 10 ni que 5 por lo que cumplen.
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);


  /* ==================================================*/ 

  /* Sentencias if else 
  las sentencias if/else pueden ser encadenadas para crear
  una logica compleja. Este es un ejemplo de if/else encadenada */

  function testSize(num) {
    if (num < 5){
      return "Tiny"
    } else if (num < 10){
      return "Small"
    } else if (num < 15){
      return "Medium"
    } else if (num < 20){
      return "Large"
    } else if (num >= 20){
      return "Huge"
    }
  }

  /* ==================================================*/ 

  /* Ejemplo de golf */

  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", 
  "Bogey", "Double Bogey", "Go Home!"];

  //  De este arreglo tomara las cadenas

  // se introducen los valores (par y strokes)
  /* se indica "return [n]" con algun numero que indica la
  posicion del nombre en el array o arreglo */
  /* recordad que empieza con cero porque en javascript
  se cuenta desde ahi */

  function golfScore(par, strokes) {
  if (strokes == 1){ 
    return names [0]
  } else if (strokes <= par - 2){
    return names [1]
  } else if (strokes == par - 1){
    return names [2]
  } else if (strokes == par){
    return names[3]
  } else if (strokes == par + 1){
    return names [4]
  } else if (strokes == par + 2){
    return names [5]
  } else if (strokes >= par + 3){
    return names [6]
    }
  }
  
  golfScore(5, 4);
  
  /* ========================================================*/

  /* Declaracion switch */

  /* La declaracion switch sirve para buscar un valor con
  otras multiples opciones */


function caseInSwitch(val) {
  let answer = "";
  // Cambia solo el código debajo de esta línea
switch (val){
 case 1:
 answer = "alpha";
 break; 
 case 2:
 answer = "beta";
 break;
 case 3:
 answer = "gamma";
 break;
 case 4: 
 answer = "delta";
}


  // Cambia solo el código encima de esta línea
  return answer;
}

caseInSwitch(1);

   /* ========================================================*/

   /* Default en declaracion switch, tambien podemos agregar 
   una opcion default para en caso de que switch no sea capaz
   de especificar todos los valores como declaraciones case */

   function switchOfStuff(val) {
  let answer = "";
  // Cambia solo el código debajo de esta línea
switch (val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break; 
  default:
  answer = "stuff";
  break;

}


  // Cambia solo el código encima de esta línea
  return answer;
}

switchOfStuff(1);

/* ===========================================================*/

/* Si tienes multiples entradas con las que quieras una misma 
salida puedes utilizar switch de la siguiente forma */

function switchOfStuff(val) {
  let answer = "";
  // Cambia solo el código debajo de esta línea
switch (val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break; 
  default:
  answer = "stuff";
  break;

}


  // Cambia solo el código encima de esta línea
  return answer;
}

switchOfStuff(1);

