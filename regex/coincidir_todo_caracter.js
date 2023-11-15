/* Mediante el uso de \w podemos hacer coincider cualquier letra o numero incluydo _ 
En el siguiente ejemplo, utilizamos este metodo para revisar la longitud de una cadena
*/

let quoteSample = "A simple string";
let countSample = "1 2 3 4 5 7";
let otherSample = "Other sa_mple";

let sampleRegex = /\w/g;

let resultQuoteSample = quoteSample.match(sampleRegex).length
console.log(resultQuoteSample);

let resultCountSample = countSample.match(sampleRegex).length
console.log(resultCountSample);

let resultOtherSample = otherSample.match(sampleRegex).length
console.log(resultOtherSample);
