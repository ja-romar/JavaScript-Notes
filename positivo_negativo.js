/* Funcion con operadores multiples ternarios para saber si un numero es positivo o negativo*/

function positiveOrNegative(n) {
    return (n === 0) ? "zero"
    : (n > 0) ? "positive"
    : "negative";
}

var checkZero = positiveOrNegative(0);
var checkPositive = positiveOrNegative(2);
var checkNegative = positiveOrNegative(-3);

console.log(checkZero);
console.log(checkPositive);
console.log(checkNegative);