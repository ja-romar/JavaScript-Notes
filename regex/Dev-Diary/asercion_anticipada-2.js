

//Ejercicio de asercion de busqueda inversa

let string = "Todo Bien";
let stringRegex = /(?<= Todo)Bien/;

let result = stringRegex.match(string);
console.log(result);