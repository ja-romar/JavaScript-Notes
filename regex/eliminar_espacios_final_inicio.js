/*

Podemos utilizar Regex tambien para eliminar espacios en blanco al principio y al final 

*/

let hello = "   Regex  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, ""); //Estamos reemplazando los espacios por no espacios asi decirlo.