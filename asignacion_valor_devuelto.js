/*

todo lo que esta en la derecha del signo de igualdad (para asignar valor a una variable)
se resuelve para antes de que el valor sea asignado.

Dicho de otra forma primero realiza la operacion y despues lo asigna como en el siguiente
ejemplo

*/

let aRandomVariable = 0;

function multVariables(a) {
    return (a * 2);
}

aRandomVariable = multVariables(3);

console.log(aRandomVariable)

