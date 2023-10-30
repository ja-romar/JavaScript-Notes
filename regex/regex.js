/*Las expresiones regulares se utilizan para buscar patrones de texto 
en cadenas de caracteres y realizar diversas operaciones de manipulacion de texto
*/

/*Algunas aplicaciones son */
//Busqueda de texto; Permiten buscar patrones especificos, en una cadena de texto.
//Validacion de entrada; Validar datos de entrada, como direcciones de correo, numero de telefono
// contrasenas etc.
//Sustiticion de texto; Reemplazar partes de una cadena de texto con otra, utilizado para
//correcciones automaticas, cambiar formato de fechas.
//Filtrado de datos; Filtrar datos de una ista o conjunto de cadenas de texto, seleccionando
// unicamente cadenas que cumplan con ciertos requisitos.
// Analisis de texto; Analizar y dividir textos en partes mas pequenas, por ejemplo,
//descomponet una direccion en sus componentes (calle,ciudd,codigo postal) 
//Web Scrapping; Para extraer informacion de paginas web.

let myString = "Hello, chungus";
let myRegex = /chungus/; // Sera la expresion que estamos buscando.
let result = myRegex.test(myString); // El meteodo test() verifica si en myString existe la string chungus

console.log(result);
