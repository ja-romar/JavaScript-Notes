/* Con el caracter * podemos hacer coincidir caracteres que aparecen
cero o mas veces. */

let scream = "buuu";
let screamRegex = /uu*/; //utilizamos *
let result = scream.match(screamRegex);

console.log(result); // Nos regresara uuu