/* Tambien podemos buscar espacios en blanco de la siguiente forma */

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // uso de g como bandra global es importante
let result = sample.match(countWhiteSpace);

console.log(result)