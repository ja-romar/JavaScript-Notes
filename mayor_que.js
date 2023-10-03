/* Con el operador mayor que (>) podemos comparar valores de dos numeros.
Si el numero de la izquiera es mayor que el de la derecha devolvera true
de lo contrario devolvera false
*/

function greaterThan (a) {
    if (a > 20) {
        return "Mayor que 20";
    }
    if (a > 5) {
        return "Mayor que 5";
    }

    return "5 o menos";
}

console.log(greaterThan(4));

