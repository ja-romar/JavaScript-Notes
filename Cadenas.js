/*Podemos crear una cadena de multiples lineas a partir de las
cadenas literales, tambien podemos agregar variables a una string
usando "+="" */

//Ejemplo

const someAdjective = "Awesome";
let myStr ="Learning to code is";
myStr += someAdjective;

/*----------------------------------------------------*/

/* Conocer la longitud de una cadena utilizamos .length */

/* Solo escribimos .lenght despues de la variable de cadena

ejemplo */

console.log("Harry Potter".length);

/*----------------------------------------------------*/

/* Encontrar el primer caracter de una cadena */

/* En JavaScript se emieza a contar desde 0, esto se conoce
como indexacion basada en cero. */ 

/* Podemos utilizar [0] para conocer la primera letra de un
string  */

const firstName = "Charles";
const firsLetter = firstName[0];

/*----------------------------------------------------*/

/*Tambien se puede utilizar para encontrar el caracter
en otras posiciones dentro de una cadena

por ejemplo */

const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2]; /*Esto arrojaria el caracter
V porque empieza a contar desde 0 (el 0 corresponde a L en el ejemplo)*/


/*----------------------------------------------------*/


/*Para obtener la ultima letra de una string podemos
restar uno a la longitud del texto */

//Ejemplo:
const firstName = "Leo";
const lastLetter = firstName[firstName.lenght - 1];

/*------------------------------*/

/*De esta forma, tambien podemos usar los corchetes
para encontrar caracteres en distinas posiciones*/

//Ejemplo:
const lastnName = "Mauro"
const secondToLastLetterOfLastName = lastName[lastName.length -2];
// En este ejemplo, el caracter seria r.
