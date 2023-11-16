/* Con test() y el caracter ^ puedes buscar coincidencias de patron al inicio de una cadena, por ejemplo */



let testString = "Lewan and Raphina are forwards on FCB"; //Este string tiene el patron Lewan al inicio
let stringRegex = /^Lewan/; //Aqui le estamos indicando cual sera el patron que buscara AL INICIO
let secontTestString = "Raphina and Lewan are forwards on FCB" 
let resultLewan = stringRegex.test(testString); 
let resultRaphina = stringRegex.test(secontTestString);

console.log(resultLewan); //Esta consola debera arrojar true, porque encuentra al inicio de la cadena el patron de caracteres
console.log(resultRaphina); // Devolvera false porque no encuentra el patron al inicio.