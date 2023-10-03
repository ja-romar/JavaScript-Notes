/*
Con el operador logico and && podemos comprobar dos condiciones en una misma sentencia If sin necesidad
de utilizar 2
*/

function entreDosNumeros (a) {
if (a <= 50 && a >= 40) {
    return "Entre 50 y 40";
}
    return "No esta en el rango";
}

console.log(entreDosNumeros(45));
console.log(entreDosNumeros(52));



