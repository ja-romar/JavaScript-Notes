
/* Para obtener el primer caracter de una string o cadena en JavaScript podemos
utilizar el siguiente metodo */


const string = "Hola"; //Aqui estamos declarando una constante que es una string que contiene "Hola"

firstLetter = string[0]; // Declaramos una variable llamada firstLetter, es donde almacenaremos la primera leta
// utilizamos notacion de corchetes [] con el numero 0, porque en JavaScript empezamos a contar desde cero, es decir...
// H [0] O [1] L [2] A [3], a esa posicion corresponderia cada letra de hola.
// Dicho de otra forma se cuenta desde 0,1,2,3,4, donde cero es el primer caracter y asi sucecivamente. 

/* PROBEMOS LO MENCIONADO ARRIBA */
console.log(string[1]); // esta consola imprimira la segunda letra del string (O)
//secondLetter = string[1]; 

console.log(string);
console.log(firstLetter);