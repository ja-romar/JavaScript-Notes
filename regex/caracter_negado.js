/* Podemos crear tambien un conjunto de caracteres que deseemos no hacer coincidir
es decir, que nos de los cualquier caracter que no sea el que definamos */

let exampleCaracter = "The only one";
let regex = /[^aeiou]/gi; // se utiliza ^ para crear caracteres negados 
// en otras palabras le estamos indicando que ignore las letras despues del ^
//NOTA el caracter g es global y la i para que ignore si son mayusculas o minusculas
let resultFirst = exampleCaracter.match(regex);

console.log(resultFirst); //Esta consola excluira las vocales del resultado


/* =============================================================================* */

let exampleNumbersLetters = "The hidden number not is 4 is 8";
let myRegex = /[^a-z^1-7]/gi;
let resultSecond = exampleNumbersLetters.match(myRegex);

console.log(resultSecond); //Esta consola regresa el 8