/*
Con el metodo pop() podemos sacar el ultimo valor de un arreglo y asignarlo a una variable
como el ejemplo de abajo
*/

const numImp = [1, 3, 5, 8];

const numPar = numImp.pop();

console.log(numImp)
console.log(numPar)

/*====================================================================================*/

/*
Con el metodo shift () podemos quitar un dato de un arreglo, solo que estas vez el dato
que podemos quitar es del principio del arreglo
*/

//Ejemplo 1

const yourName = ["Lamine ", "Yamal"];

const firstName = yourName.shift();

console.log(yourName)

// Ejemplo 2

const theyNames = [["Lamine ", "Yamal"], ["Robert"], ["Frankie"], ["Ilkay"]];

const herName = theyNames.shift();

console.log(herName)