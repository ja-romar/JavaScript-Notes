/* 
Podemos incluso especificar el numero de coincidencias de la siguientes formas
*/

/*

Podemos especificar un numero inferior y uno superior para el numero de veces
que esperamos de un patros con los especificadores de cantidad
de la siguiente forma

{2,4} aqui estamos indicando que por lo menos se encuentre 2 veces y un maximo de 4

*/

let goal = "Gooool";
let goalRegex = /Go{2,4}/;

let secondGoal = "Gooooooool";

let result = goalRegex.test(goal);
let resultSecond = goalRegex.test(secondGoal);

console.log(result) //Arrojara true por que coincide
console.log(secondGoal) //No coincide

/*
Puede ser que solo necesitemos un limite inferior para el patron, es decir que solo necesitemos el primer valor
*/

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result1 = haRegex.test(haStr);
let haStr2 = "Hazzzah";
let result2 = haRegex.test(haStr2);


console.log(result1); //Arrojara true
console.log(result2); // arrojara false porque se requieren por lo menos 3 z