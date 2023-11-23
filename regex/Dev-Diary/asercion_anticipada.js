;//Ejercicios de asercion anticipada

let string = "good morning";
let stringFalse = "good night";
let regex = /good(?= morning)/g;

let result = regex.test(string);
let resultTwo = regex.test(stringFalse);

console.log(result);
console.log(resultTwo);

//Ejercicios de asercion anticipada negativa

let stringN = "good morning";
let stringNFalse = "good night"; 
let regexN = /good(?! night)/; //Con esta sintaxis le estamos diciendo que arroje false si despues de "good" sigue "night"

let resultN = regexN.test(stringN);
let resultNFalse = regexN.test(stringFalse);

console.log(resultN);
console.log(resultNFalse);