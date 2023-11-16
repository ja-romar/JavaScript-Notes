
/*

con el caracter \d podemos encontrar el numero de digitos como en el ejemplo debajo */


let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Cambia esta línea
let secNumRegex = /\D/g;
let result = movieName.match(numRegex).length; 

console.log(result); //Esta consola arrojara 4, el numero de digitos dentro de la string.

let secondResult = movieName.match(secNumRegex).length

console.log(secondResult);