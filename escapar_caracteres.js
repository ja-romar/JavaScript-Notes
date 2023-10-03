/*
Que pasa si necesitamos imprimir una comilla doble en una cadena?
Tendriamos el problema de que las comillas se utilizan para declarar
Cadenas, para eso existe la siguiente opcion
*/

// Ejemplo
// Queremos imprimir: El dijo "Veni, Vidi, Vici".

const quote = "El dijo \"Veni, Vidi, Vici\"";

console.log(quote)

/* En JS los valores de una cadena pueden escribirse con comas doble("")
o comas simples (')*/

 /* var comma = 'Let's do this'; */

// en este ejemplo, tendriamos un evidente error

//La forma de corregir el error, seria la siguiente

var comma = 'Let\'s do this'; 


/* ===============================================================================*/

/*
No solamente necesitamos poder utilzar o escapar comillas, tambien necesitamos
multiple escapes de caracteres en una cadena. 
Podemos hacerlo con los siguientes codigos.

\' comilla simple
\" comilla doble
\\ barra invertida
\n linea nueva 
\t tabulador
\r retorno del carro
\b retroceso
\f fuente de formulario

*/

// Hagamos el siguiente ejemplo
/*
esta es la primera la segunda 
la tercera
    la cuarta
*/

const miCadena = "esta es la primera la segunda\nlatercera\n\tla cuarta";
console.log(miCadena)

/*===============================================================================*/



