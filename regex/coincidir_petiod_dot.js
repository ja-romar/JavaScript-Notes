/* Comodin (period o dot) para coincidir con caracteres no exactos. 

En determinadas ocaciones hacer coincidir todas las palabras aun con errores
de ortografia llevaria mucho tiempo, para evitarlo podemo usar . como caracter comodin

El caracter . hara coincdir con cualquier caracter unico.

*/

//Ejemplo

let example = "I know a girl she puts the color inside of my world but shes just like a maze";
let unRegex = /wor./; //Encuentra world por lo que devolvera true, si cambiamos a word seguira siendo true,
//Puedes probar cambiando la palabra word en example.
let result = unRegex.test(example);

console.log(result);
