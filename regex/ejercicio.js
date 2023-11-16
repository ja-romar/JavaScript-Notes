/*


Los nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad única en tus sitios favoritos.

Se necesita comprobar todos los nombres de usuario en una base de datos. Estas son algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

    Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

    Los únicos números del nombre de usuario tienen que estar al final. Puede tener un cero o más al final. El nombre de usuario no puede iniciar con un número.

    Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

    Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.

Cambia la expresión regular userCheck para que se ajuste a las restricciones indicadas anteriormente.

*/


let username = "JackOfAllTrades";
let userCheck =  /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Cambia esta línea
let result = userCheck.test(username);

/*

1- ^ - start of input
2- ^[a-z] - El primer caracter debe de ser letra
3- [a-z]+ - Los siguientes caracteres deben de ser letras
4- \d*$ - Termina con 0 o mas digitos
5- | - operador or 
Otra comprobacion o busqueda de coincidencia
6- ^[a-z] - Otra vez comprobamos que el primer caracter es letra
7- \d\d+ - comrpobamos que el siguiente caracter o los siguientes dos sean digitos
8- $ - al final del input

*/