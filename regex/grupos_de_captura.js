/* Los grupos de captura se construyen encerrando entre parentesis el patron de expresion regular a capturar
*/



let repeatStr = "row row row your boat";

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Regresa true
repeatStr.match(repeatRegex); // regresa ["row row row", "row"]

/* otra funcion que podemos querer realizar es la de aparte de buscar, reemplazar para eso utilizamos
replace ()

recibe dos parametros el patron de expresion que deseamos buscar y con lo que sera reemplazado

*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1"; //  cambia la strin one two three por 3 2 1
let result = str.replace(fixRegex, replaceText);





