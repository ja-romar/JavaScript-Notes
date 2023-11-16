/*
Por medio del uso de \W podemos hacer lo contrario que /w es decir excluir numeros y caracteres.
*/

let quoteSample = "A simple string!";


let sampleRegex = /\W/g;

let resultQuoteSample = quoteSample.match(sampleRegex)
console.log(resultQuoteSample);