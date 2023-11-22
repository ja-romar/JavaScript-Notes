// \b se utiliza de la siguiente forma para hacer coincidir caracteres en el limite de una palabra
// En el ejemplo de abajo se utiliza para encontrar la M del principio

let string = "Moon"; //Debe de arrojar true
let stringTwo = "oMo"; //Debe de arrojar false, la M no esta en un limite de palabra
let stringThree = "Le Moon"// Debe de arrojar true la M esta al inicio (limite) de una palabra


let stringRegex = /\bM/; 




let result = stringRegex.test(string);
let resultTwo = stringRegex.test(stringTwo);
let resultThree = stringRegex.test(stringThree);

console.log(result);
console.log(resultTwo);
console.log(resultThree);