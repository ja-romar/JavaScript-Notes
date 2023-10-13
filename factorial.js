/* Funcion para calcular el factorial de un numero */

function factorial(n){
    if (n == 0 || n == 1){
        return 1;
    }else{
        return n* factorial(n-1);
    }
}

console.log(factorial(1));
console.log(factorial(3));



// con operadores ternarios
function factorial(n){
    return n == 0 || n == 1 ? 1
    : n* factorial(n-1)
}

console.log(factorial(1));
console.log(factorial(40));