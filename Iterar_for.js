/* Iterar con bucles "for" */

/* Por medio de un bucle podemos ejecutar un codigo 
multiples veces, 

El mas comun es el bucle "for" por que se ejecuta por un
numero especifico de veces 

Los bucles for se declaran con tres expresiones opcionales
separadas por punto y coma.

*/

for (a; b; c) // donde a es la sentencia de inicializacion, b 
// es la sentencia condicional, y c es la expresion final.

/* La sentencia de inicialización se ejecuta una sola vez antes de que el bucle comience. Normalmente 
se utiliza para definir y
 configurar tu variable de bucle.

La sentencia condicional es evaluada al principio de cada iteración del bucle y
 continuará siempre y cuando sea true. Cuando la condición sea false al inicio de la iteración, 
 el bucle dejará de ejecutarse. Esto significa que si la condición comienza como falso, tu bucle nunca se ejecutará.

La expresión final se ejecuta al final de cada iteración del bucle, antes de la siguiente comprobación de condición y 
se utiliza normalmente para incrementar o disminuir tu contador
 de bucle. */ 

// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea
for (let i = 1; i < 6; i++){
  myArray.push(i)
}

/* =============================================================*/

/* Iterar con numeros pares con un bucle for */

// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea
for (let i = 1; i < 10; i += 2){
  myArray.push(i);
}

/* ==============================================================*/
 /* Tambien se puede hacer una cuenta hacia atras con un bucle for*/

 // Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea
for (let i = 9; i > 0;  i-=2 ){
  myArray.push(i);
}

/* -========================================================*/

/* Iterar a trabes de un arreglo con un bucle for */ 

/* Algo comun en JavaScript es iterar a tra ves del contenido 
de un arreglo, se puede hacer con un bucle "for". */

// Configuración
const myArr = [2, 3, 4, 5, 6];


let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

/* 