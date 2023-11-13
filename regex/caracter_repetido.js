/* 
Puede darse el caso en el que necesites comprobar caracteres repetidos, en este caso podemos utilizar
el caracter + para comprobar si existen coincidencias mas de una vez por decirlo de otra forma
*/

let example =  "saas";
let secondExample = "badass"
let myRegex = /a+/g;

let result = example.match(myRegex);
let secondResult = example.match(myRegex);

console.log(result); // Regresa la string 'aa' o sea los caracteres que coinciden
console.log(secondResult); // Regresa tambien 'aa' aunque no esten juntos

