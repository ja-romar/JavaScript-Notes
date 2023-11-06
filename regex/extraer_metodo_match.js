
/* Con el metodo match podemos extraer una cadena,*/



let extractString = "This is an example of extract with match"; 
let extractRegex = /extract/;  //Establecemos cual sera el valor que priero buscaremos con match
let result = extractString.match(extractRegex); //Le daremos a result el valor de "extract" que esta en extractString

console.log(result);