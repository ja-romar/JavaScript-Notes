/* En ocaciones puede ser que te interese hacer coincidir sin importar si son letras mayusculas o minusculas
podemos hacerlo de la siguiente forma */

let myString = "Awesome";
let stringRegex = /awesome/i;
let result = stringRegex.test(myString);

console.log(result) // Esta consola debe de imprimir true

let myString2 = "Awesome";
let stringRegex2 = /awesome/;
let result2 = stringRegex2.test(myString2);

console.log(result2)  //Esta mostrara en terminal false



