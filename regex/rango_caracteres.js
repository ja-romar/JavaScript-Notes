/*
Si nos encontramos en la disyuntiva de querer hacer coincidir un amplio rango de caracteres, tambien podemos
hacerlo de la siguiente forma.
*/

let soonStr = "soon";
let moonStr = "moon";
let noonStr = "noon";

let oonRegex = /[a-z]oon/gi; // le estamos indicando que compruebe de la a hasta la z con la sintaxis a-z (por orden alfabetico)

let soonRegex = soonStr.match(oonRegex);
let moonRegex = moonStr.match(oonRegex);
let noonRegex = noonStr.match(oonRegex);

console.log(soonRegex);
console.log(moonRegex);
console.log(noonRegex);

/* Tambien podemos usarla para numeros */

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; //En este caso buscara de la h a la s y del 2 al 6.
let result = quoteSample.match(myRegex); /*
Si nos encontramos en la disyuntiva de querer hacer coincidir un amplio rango de caracteres, tambien podemos
hacerlo de la siguiente forma.
*/

let soonStr = "soon";
let moonStr = "moon";
let noonStr = "noon";

let oonRegex = /[a-z]oon/gi; // le estamos indicando que compruebe de la a hasta la z con la sintaxis a-z (por orden alfabetico)

let soonRegex = soonStr.match(oonRegex);
let moonRegex = moonStr.match(oonRegex);
let noonRegex = noonStr.match(oonRegex);

console.log(soonRegex);
console.log(moonRegex);
console.log(noonRegex);

/* Tambien podemos usarla para numeros */

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; //En este caso buscara de la h a la s y del 2 al 6.
let result = quoteSample.match(myRegex); /*
Si nos encontramos en la disyuntiva de querer hacer coincidir un amplio rango de caracteres, tambien podemos
hacerlo de la siguiente forma.
*/

let soonStr = "soon";
let moonStr = "moon";
let noonStr = "noon";

let oonRegex = /[a-z]oon/gi; // le estamos indicando que compruebe de la a hasta la z con la sintaxis a-z (por orden alfabetico)

let soonRegex = soonStr.match(oonRegex);
let moonRegex = moonStr.match(oonRegex);
let noonRegex = noonStr.match(oonRegex);

console.log(soonRegex);
console.log(moonRegex);
console.log(noonRegex);

/* Tambien podemos usarla para numeros */

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; //En este caso buscara de la h a la s y del 2 al 6.
let result = quoteSample.match(myRegex); 