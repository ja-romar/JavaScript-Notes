/* Puede ser que nos encontremos con la necesidad de cambiar palabras (cadenas o strings)
en un formato diferete, por ejemplo en nombres, para eso podemos usar una funcion de la siguiente
forma */

/* Los nombres llevan la primera letra en mayusculas, asi que eso haremos con las siguientes palabras
atraves de una funcion */

    const name1 = "JUAN"; // declaramos constantes para despues probarlas
    const name2 = "maria";

// creamos la funcion 
function capitalizeFirstLetter (word){ // la funcion toma el argumento word, que sera con el que probaremos (name 1 y name2)
    word = word.toLowerCase(); // primero haremos todas minusculas, esto por en caso de que haya una o mas mayusculas en la palabra.
    // toLowecase hace todas las letras de la palabra minusculas
    word = word.charAt(0).toUpperCase() + word.slice(1); // aqui convertiremos la primera letra en mayuscula.
    // con charAt(0) tomamos la primera letra de la string con toUpperCase la volvemos mayuscula
    // y concatenamos con el operador +  la concatenaremos  a el resto de las letras, que posteriormente con word.slice(1) hemos segregado
    // word.slice(1) toma todos los caracteres de 1 indicado en el parentesis en adelante. 
    return word;
}

console.log(capitalizeFirstLetter(name2));