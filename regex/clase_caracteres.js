/* 
Para mantener cierta flexibilidad y no ir a os extremos de las expresiones regulares
podemos utilizar las denominadas clases de caracteres, te permiten definir un grupo
de caracteres que deseas coincidir colocandolos dentro de corchetes [].

//Ejemplo

*/

let lyricSample = "Don't make me miss you, oh yeah"
let vowelRegex = /[aeiou]/gi; // Se utiliza gi como banderas
//la bandera i, la busqueda no distingue entre mayusculas y minusculas
//la bandera g busca todas las coincidencias no solo la primera.
let result = lyricSample.match(vowelRegex); 

console.log(result);