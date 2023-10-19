
/*Que es un Array en JavaScript*/

/*Una coleccion o agrupacion de elementos en una misma variable, cada 
uno de ellos ubicado con referencia a la poscion que ocupa dentro del mismo */



/* Utilizando un arreglo (array) de JavaScript podemos almacenar
varios datos en un solo lugar.

Empiezas una declaracion de array con un corchete de apertura,
lo terminas con uno de cierre y agregas una coma entre cada entrada:
*/

const myArray = ["Hello",1];

/*Tambien podemos anidar un arreglo dentro de otro, como
el siguiente ejemplo: */

const myArray = [["Hello",12], ["goodbye",13]];

/*------------------------------*//*------------------------------*/

/*------------------------------*/
/*Para obtener la ultima letra de una string podemos
restar uno a la longitud del texto */

//Ejemplo:
const firstName = "Leo";
const lastLetter = firstName[firstName.lenght - 1];

/*------------------------------*/

/*De esta forma, tambien podemos usar los corchetes
para encontrar caracteres en distinas posiciones*/

//Ejemplo:
const lastName = "Mauro"
const secondToLastLetterOfLastName = lastName[lastName.length -2];
// En este ejemplo, el caracter seria r.

/*------------------------------*/

/* Para crear una estructura de datos en una frase
vamos a evaluar el siguiente ejercicio */ 

const myNoun = "house";
const myAdjective = "big";
const myVerb = "is";
const myAdverb = "expensive"

// La idea es formar la siguiente oracion:

// "The big house is expensive"

const theSentence = "The" + " " + myAdjective + " " + myNoun + " " +
myVerb + " " + myAdverb;

/*------------------------------*/

/* Utilizando un arreglo (array) de JavaScript podemos almacenar
varios datos en un solo lugar.

Empiezas una declaracion de array con un corchete de apertura,
lo terminas con uno de cierre y agregas una coma entre cada entrada:
*/

const myArray = ["Hello",1];

/*Tambien podemos anidar un arreglo dentro de otro, como
el siguiente ejemplo: */

const myArray = [["Hello",12], ["goodbye",13]];

/*------------------------------*/

//Acceder a los datos de un arreglo con indices

const myArray = [50, 60, 70];

const myData = myArray[0];

//En este caso ek valor sera 50
/*Es 50 porque al introducir [0] estamos indicandole
que es el primero, recordar que en JavaScript se empieza
a contar desde 0*/ 

/*------------------------------*/

/* Modificar los datos de un arreglo con indices /*

/*A diferiencia de las cadenas, las entradas de los arreglos
son mutables, pueden cambiarse libremente, incluso si el
arreglo fue declarado como const */

const myArray = [18, 64, 99];

myArray[0] = 45;

//Ahora myArray tiene el valor de [45, 64, 99];

/*------------------------------*/

/* Tambien podemos acceder a los arreglos multidimensionales
con indices */ 

/* Cuando usas corcehtes para acceder a un arreglo, el primer
par de corchetes hace referencia a los elementos del arreglo mas
externo (el primer nivel) y cada par adicional va haciendo referencia
a un nivel que es mas externo, como si se tratara de selectores. por ejemplp */

const myArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12],13,14],
];

const myData = myArray[2][1];

/* El valor sera entonces 8, con el 2 dentro del corchete le estamos indicando
que busque dentro de la tercera linea de numeros, con el 1 le estamos indicando
que dentro de esa linea tome el segundo valor, recordemos que 
se empieza contando desde cero.*/

/*------------------------------*/

/*Manipular arreglos con el metodo push */

/* Se agrega escribe de esta forma */

myArray.push();

/* Por ejemplo, para un arreglo...*/

const myArray = [["Jhonr", 23], ["cat",2]];

/* si queremos empujar al final el valor "["dog", 31]" por ejemplo:
*/

myArray.push(["dog,3"]);

/*------------------------------*//*------------------------------*/
/*------------------------------*//*------------------------------*/

/* Manipular arreglos con el metodo pop */

/* La funcion .pop() se utiliza para sacar un valor del final de un 
arreglo. Podemos almacenar este valor sacado asignandole una variable
En otras palabras esta funcion quita el ultimo elemento de un arreglo
y lo devuele */

const remodedFromMyArray = myArray.pop();

// Asi se utiliza pop, quitara el ultimo valor de myArray y lo asignara
//a remodedFromMyArray

/*------------------------------*//*------------------------------*/
/*------------------------------*//*------------------------------*/

/* Manipular arreglos con el metodo shift */

/* Para eliminar el primer elemento de un array utilizamos la funcion
shift de la siguiente manera */

const remodedFromMyArray = myArray.shift();

/*Esto quitara el primer valor del arreglo myArray */

/*------------------------------*//*------------------------------*/
/*------------------------------*//*------------------------------*/

/* Manipular arreglos con el metodo unshift */ 
/*Unshift hace exactamente lo mismo que push pero al principio

Ejemplo:*/

myArray.unshift([Paul", 35]);

/* Agregara Paul y 35 al principio del arreglo */

/*------------------------------*//*------------------------------*/
/*------------------------------*//*------------------------------*/