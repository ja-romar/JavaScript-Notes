/* De igual forma que se pueden buscar patrones al inicio, tambien se pueden buscar al final con test()
pero utilizando el caracter $ */

let lirycs = "Gravity is working against me";
let lirycsRegex = /me$/; //Buscara el patron me al final de la cadena 

let result = lirycsRegex.test(lirycs);
console.log(result);
