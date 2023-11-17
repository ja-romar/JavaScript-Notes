/*

Puede darse el caso en el que un patron pueda o no tener partes, pero que tengamos que buscarlos
de todas maneras, podemos especificar la posible existencia de un elemenot ?

Esto quiere decir que verificara que exista pero aun de no existir sera true, como
puede pasar con el ingles americano y britanico */


let ukEng = "favourable";
let amEng = "favorable";

let engRegex = /favou?rable/;

let amTest = engRegex.test(amEng);

console.log(amTest);

let ukTest = engRegex.test(ukEng);

console.log(ukTest); 

//Ambos devuelven true
