
//Ejemplo 1
let string = "See a S";
let stringRegex = /^S/; //Devuelve True, porque la primera letra es S
let result = stringRegex.test(string);

console.log(result);


let stringTwo = "No a S";
let resultFalse = stringRegex.test(stringTwo);

console.log(resultFalse); //Retorna False, aunque encuentre una S al final no la encuentra al principio


//Ejemplo 2
let stringThree = "Esperar";
let stringRegexR = /r$/;
let resultR = stringRegexR.test(stringThree);

console.log(resultR); //Devuelve true porque encuentra una r en el final del string