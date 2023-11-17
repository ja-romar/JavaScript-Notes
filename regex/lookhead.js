/* Con lookhead le decimos a JavaScript que verifique por anticipado para verificar 
patrones mas adelante, esto es util cuando sobre una misma cadena estamos buscando varios
patrones
*/

/* Con un lookhead positivo que se usa (?=...) verificamos que dicho patron exista
aunque no lo coincidara

Por otro lado con un lookhead negativo buscara que el patron de busqueda 
no se encuentre alli

(?!...) De esta forma se busca un lookhead negativo

En este caso, de no encontrarse el resto del patron se devuelve
*/

/* 

Veamos un ejemplo
*/

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; 
let qRegex = /q(?!u)/;
let test1 = quit.match(quRegex);
let test2 = noquit.match(qRegex);

console.log(test1); 
console.log(test2);

// Ambos ejemplos regresaran Q



