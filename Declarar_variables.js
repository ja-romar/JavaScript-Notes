/* 
En JavaScript podemos utilizar ocho tipos de datos los cuales son:
undefined
null
boolean
string
symbol
bigint
number
object

LAs variables permiten almacenar y manipular datos de forma dinamica, mediante
el uso de una "etiqueta" para apuntar a los datos en lugar de usar los datos
en si, cualquiera de los ocho tipos de datos de arriba se pueden almacenar en 
una variable.
Son un nombre simple para representar los datos a los que queremos hacer referencia
A diferencia de una variable en matematicas, las variables de una computadora
pueden almacenar diferentes valores en diferentes momentos.

*/

// Ejemplo

var miPrimerVariable

// Le decimos a JS que cree nuestra variable ponienndo la palabra clave "var"

// Ejemplo

var miSegundaVariable 

/*
Para asignar un valor a una variable en JavaScript, tenemos que utilizar el
operador de asignacion (=)
*/

//Por Ejemplo

miSegundaVariable = 10;

// Esto le da un valor a nuestra segunda variable de 10.

/* 
Tambien puedes asignar el valor de una variable a otra variable.
Supongamos que quieres que miPrimerVariable y miSegundaVariable tengan 
el mismo valor, lo harias de la siguiente forma 
*/

miPrimerVariable = miSegundaVariable;

// Ahora las dos variables tienen un valor de 10.


/*
Tambien es comun inicializar un variable en la misma linea que la
variable es declarada 
*/

//Ejemplo
var terceraVariable = 5;

/*
Tambien puedes crear variables con cadenas o strings que son variables
que se definen por caracteres y van entre comillas dobles "" o comillas
sencillas ''
*/

//Ejemplo
var saludo = "Hola";
var nombre = "Javier";

/* Cuando una variable en JS no ha sido declarada 
tiene un valor inicial conocido como (undefined) si 
la utilizas para hacer una operacion tu resultado ser NaN (not a number)
*/

/* Hagamos un ejercicio en la consola con variables */

var a = 40; //Estamos declarando e inicializando la variable "a" en un mismo renglon
var b = 50; 
var c = 10; 

console.log((a)+(b)+(c))

/* 
El resultado de esta suma seria 100.
*/

