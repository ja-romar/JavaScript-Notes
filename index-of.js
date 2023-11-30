// Metodo indexOf() para comprobar la existencia de algun elemento en un arreglo.

//* Ejemplo de FreeCodeCamp.org

//Funcion que permite comprobar si existe un elemento en un array

function quickCheck(arr, elem) { //La funcion recibe dos parametros, el primero el array, el segundo el elemento que queremos revisar.
  let check = arr.indexOf(elem); //Le asignamos a una variable el valor resultante de aplicar indexOf() con el parametro elem.
  if (check >= 0) { // Aqui comprobamos que check sea mayor o igual a 0...
    //Esto es asi porque si el metodo indexOf encuentra el elemento devuelve el indice del elemento es decir un numero del 0 en adelante.
    //En caso de no encontrarlo, devuelve -1 
    return true;
  } else 
    return false;
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
