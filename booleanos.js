/* Valores booleanos */

/* Otro tipo de datos es el booleano, solo pueden sor uno de dos
o true (verdadero) o false (falso) son como interruptores
de encendido, donde true es encendido y false apadado.
Estos dos estados se excluyen mutuamente */

// Los valor de tipo boleano nunca llevan comillas

function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
  }
  
  test(true);
  test(false);

  //Ejemplo de funcion booleana

  /* ========================================================*/

  /* Comparacion con operador de igualdad */

/* Existen muchos operadores de comparacion en JavaScript.
Todos estos operadores devuelven un valor boobleano true o false
*/

/* El mas basico es == que compara dos valores y devuelve true
si son equivcalentes o false si no lo son. */

/* Comparacion con operador de estricta igualdad */
/* La estricta igualdad (===) no realiza la conversion de ambos
valores a un tipo comun, el operador estrica igualdad no realiza
una conversion de tipo

Si los valores que se comparan tienen diferente tipos, se consideran
desiguales, por lo que el operador de estrica igualdad devolvera
falso */

  3 === 3 // true
  3 === '3' // false

  /* 3 es de tipo Number y '3' de tipo cadena */

  // Configuración
function testStrict(val) {
    if (val === 7) { // Cambia esta línea
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

/* ========================================================*/

/* Operador de desigualdad

!= es el operador de des igualdad es lo opuesto al operador 
de igualdad. Esto quiere decir que no es igual, y devuelve
false cuando la comparacion de igualdad devuelva true y viceversa
Al igual que el operador de igualdad el operador de desigualdad 
convertira los tipos de datos mientas los compara */

// Configuración
function testNotEqual(val) {
    if (val !=99) { // Cambia esta línea
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

/*===========================================================*/

/* El operador de estrica desigualdad !== es el opuesto logico
del operador de estrica igualdad. Esto significa "estrictamente
desigual" */

// Configuración
function testStrictNotEqual(val) {
    if (val !==17) { // Cambia esta línea
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

/*===========================================================*/

/* Operador mayor que para comparar 

> es el operador mayor que que compara el valor de dos numeros, 
si el numero de la izquiera es mayor que el de la derecha devuelve
true de lo contraro devolvara false */

//Ejemplo
function testGreaterThan(val) {
    if (val) {  // Cambia esta línea
      return "Over 100";
    }
  
    if (val) {  // Cambia esta línea
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

/*============================================================*/

/* Operador mayor o igual que */

/* El operador mayor o igual que (>==) compara el valor de dos
numeros. Si el numero de la izquierda es mayor o igual que el 
numero de la derecha devuelve true. De lo contrario devuelve 
false */

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Cambia esta línea
      return "20 or Over";
    }
  
    if (val >= 10) {  // Cambia esta línea
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

  /*============================================================*/
  
  /* Operador menor que */

  /* El operador menor que (<) compara los valores de dos
  numeros. Si el numero a la izquerda es menor que el de a derecha
  devuelve true de lo contrario devolvera false.

  Al igual que el operador de iguadad este operador convertira 
  los tipos de datos mientras los compara 
  */
  function testLessThan(val) {
    if (val < 25) {  // Cambia esta línea
      return "Under 25";
    }
  
    if (val < 55) {  // Cambia esta línea
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

  /*============================================================*/

  /* Tambien existe un operaodr llamado menor o igual que (<=)
  que igual compara dos numeros pero que si el numero es igual
  o menor que otro regresara true y si no cumple esta condicion
  devolver false */

  function testLessOrEqual(val) {
    if (val <= 12) {  // Cambia esta línea  //true
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Cambia esta línea //true
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24"; //False 
  }
  
  testLessOrEqual(10);

    /*============================================================*/

  /* Operador && and para probar mas de una cosa a la vez */

  /* EL operador && solo devuelve true solo si los operandos
  de izquierda y derecha cumplen las condiciones */

  function testLogicalAnd(val) {
    // Cambia solo el código debajo de esta línea
  
    if (val <= 50 && val >= 25) { /* aqui le pedimos que verifique
    que val sea igual o meno a 50 y igual o mayor a 23 */
      
        return "Yes";
      
    }
  
    // Cambia solo el código encima de esta línea
    return "No";
  }
  
  testLogicalAnd(10);

/*============================================================*/

/* Comparar con el operador logico "or" 

EL operador logico "or" devuelve true si cualquiera de las dos
condiciones se cumple su sintaxis es || */


/* Por ejemplo si queremos que la siguiente sentencia devuelva
la cadena Outside si val no esta entre 10 y 20. De lo contrario
devolvera Inside. */

function testLogicalOr(val) {
  // Cambia solo el código debajo de esta línea

  if (val > 20 || val < 10) { 
    return "Outside";
  }


  // Cambia solo el código encima de esta línea
  return "Inside";
}

testLogicalOr(15);

/*============================================================*/

