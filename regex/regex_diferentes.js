/* El siguiente codigo revisa si la variable sportsString contiene alguna de las cadenas; soccer, basketball, tennis o baseball;*/

let sportsMario = "Mario plays chess";
let sportsRegex =/soccer|basketball|tennis|baseball/; //Aqui con el operador | podemos comprobar varias strings.
let resultMario = sportsRegex.test(sportsMario);

console.log(resultMario); //La consola devuelve false 

let sportsJuan = "Juan plays tennis";
let resultJuan = sportsRegex.test(sportsJuan);

console.log(resultJuan); //Consola que devuelve true.

