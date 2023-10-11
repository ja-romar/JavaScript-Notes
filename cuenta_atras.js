/* Funcion para contar hacia atras desde un numero definido con recursion */

function countdown (n){
    if (n < 1){
        return []; //Esto nos regresara un arreglo vacio si el numero es menor a 1 (seria imposible hacer una cuenta atras)
    }   else {
        const anArray = countdown(n -1);
        anArray.unshift(n);
        return anArray
    }
}

console.log(countdown(10));