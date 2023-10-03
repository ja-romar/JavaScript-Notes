/*
Para formar nuevas oraciones utilizamos el operador (+) que cuando se utiliza
en cadenas se le conoce como operador de concatenacion
*/

var dosCadenas = "Aprender JavaScript es facil " + "bueno no tanto";

//Nosotros debemos agregar el espacio manualmente

console.log(dosCadenas)

/*=============================================================================*/
/*
Tambien podemos utilizar (+=) para concatenar una cadena al final de otra por ejemplo:
*/

dosCadenas += " pero no desistas."
console.log(dosCadenas)

/*=============================================================================*/

/* Tambien podemos construir cadenas con variables por ejemplo */

var myName = "Javier ";

var saludo = myName + dosCadenas;

console.log(saludo)

/* ===============================================================================*/
/* Tambien podemos anadir variables a una cadena usando (+=)

ejemplo*/

var likeOrDislike = "I like "
var str = "Yes "
str += likeOrDislike;

console.log(str)