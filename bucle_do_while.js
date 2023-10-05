/* Bucle Do...While */
/* LOs bucles do while primero hacen una pasada por el codigo, sin comprobar
una condicion y luego al fianl de la pasada (la primera) continua ejecutando
en bucle mientras la condicion que especificamos sea true */


const arrayExample = []; //Declarmos un array (arreglo) vacio
let a = 1; //Inicializamos  a con valor de 1 

do{ // Creamos bucle Do...While
    arrayExample.push(a);
    a++
}   while (a < 20);

console.log(arrayExample)//Esta consola mostrara los numeros del 1 al 19
