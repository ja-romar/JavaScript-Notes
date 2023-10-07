/* La funcion parseInt analiza una string o cadena y devuelve un entero de 
esa cadena, si no puede ser convertido devuelve NaN */

function convertToNumber (string) {
    return parseInt(string);
}

const test = convertToNumber("008")

console.log(test)

/* Con radix especificamos la base del numero de la cadena que puede ser un numero
entero entre 2 y 36 */

/* Lo habitual es utilizas bases como; 2 (binario) 8 (octal) 10 (decimal) y 16 (hexadecimal)*/

function integer (str) {

    return parseInt(str, 2); // por ejemplo aqui le estamos pidiendo que nos devuela el valor de un numero binario
}

console.log(integer(10010))