//Vamos a declarar variables en JS

var myName;

//Se terminan las sentencias con punto y coma
/*Los nombres de las variables pueden tener numeros, letrar y $ 0 _ 
pero no pueden tener espacios NI empezar por un numero*/

/*===========================================================*/

/* Tambien es comun inicializar una variable en la misma linea
que es declarada */

var myVar = 0;

/* Tambien es comun inicializar una variable en la misma linea
que es declarada */

var myVar = 0;

/*===========================================================*/

/* Tambien se pueden declarar variables cadena como */

//ejemplo:
var myFavoriteTeam ="Barcelona";

/*----------------------------------------------------*/

/*Cuando las variables de JavaScript son declaradas, tienen un valor
inicial de "undefined" Si haces una operacion matematica con esta
variable te arrojara como resultado NaN (not a number).

/*----------------------------------------------------*/
/* JavaScript es sensible a mayusculas y minusculas en sus variables
MYVAR MyVar y mivar no son lo mismo, por ejemplo si tengo 3 variables
llamadas:

OVERTHERANK OverTheRank y overTheRank no seran la misma variable,
para no complicar tu codigo no utilices esta funcion del lenguaje */

/* Es una buena practica usar camelCase, que no es mas que cuidar
que las variables con varias palabras cumplan los siguientes requisitos:

-Primera letra de la primera palabra en minusculas.
-Primera letra de cada palabra posterior en mayusculas.

Ejemplos: */

var myFavoriteTeam;
var myFavoritePlayer;

/*----------------------------------------------------*/

/* Si declaras con la palabra "var" como en los anteriores
ejemplos, esa variable puede ser sustituida posteriormenta por
otro valor.

Ejemplo */

var key = "Logan";
var key = "Margot";

/* En el codigo del ejemplo la variable se anula como (logan) y
termina por ser "margot", asi que la consola mostrata "margot", 
para evitar soobrescribir variables, existe en JavaScript la
palabra "let", que permite declarar una variable.

Ejemplo */

let key = "Logan";
let key ="Margot";

/* Si lo declaras asi la consola te marcara error. */

/*----------------------------------------------------*/

/* Con "const" podemos declarar variables tambien, tiene
las mismas funciones que "let" solo que son de lectura, utilizadas
para un valor constante, una vez que asignas un valor con const
ya no se puede cambiar */

const CTA ="Call To Action";

/* Normalmente utilizamo mayusculas para declarar variables inmutables
(const) y el camelCase para las demas */

/*----------------------------------------------------*/


