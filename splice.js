// El metodo splice permite eliminar seleccionando el indice del elemento dentro de un array

const array = [1,2,3,4,5,6,7,4,5,8,9,10]; //Array en orden
array.splice(7,2); //La sintaxis de splice es la siguiente
//El primer parametro (7 en el ejemplo) es desde la posicion que eliminara elementos
//El segundo es el numero de elementos que eliminara.

console.log(array);