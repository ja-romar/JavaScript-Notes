/*

El operador or (||) nos devolvera true si cualquiera de los dos valores resulta correcto

*/

// Ejemplo
// Funcion que verifique el rango de edad, que este entre los 18 y 65

function checkAge (year) {
    if (year < 18 || year > 65) {
    return "Fuera de rango";
    }
    return "Dentro de rango";
}

console.log(checkAge(25));
console.log(checkAge(17));  
console.log(checkAge(66));

